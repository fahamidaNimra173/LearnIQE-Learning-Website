import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';  // Added useState
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import AxiosSecure from '../../Axios/AxiosSecure';
import { AuthContext } from '../../Context/AuthContext';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { id: courceId } = useParams();
  const axiosSecure = AxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // New state to control button disabled/enabled
  const [isProcessing, setIsProcessing] = useState(false);

  const { data: course, isLoading, error } = useQuery({
    queryKey: ['courseDetails', courceId],
    enabled: !!courceId,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cources/${courceId}`);
      return res.data;
    }
  });

  const amount = course?.price * 100;

  // Mutations to post enrollment and update enroll count
  const postEnrollment = useMutation({
    mutationFn: (enrollmentData) => axiosSecure.post('/enrollment', enrollmentData),
  });

  const updateTotalEnroll = useMutation({
    mutationFn: () => axiosSecure.patch(`/cources/${courceId}/increment-enroll`),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Disable button immediately on submit
    setIsProcessing(true);

    if (!stripe || !elements) {
      setIsProcessing(false);  // Re-enable if something missing
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setIsProcessing(false);
      return;
    }

    // Create payment method and handle errors
    const { error: methodError } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (methodError) {
      Swal.fire({
        icon: 'error',
        title: 'Payment Error',
        text: methodError.message,
      });
      setIsProcessing(false);  // Re-enable button on error
      return;
    }

    // Create payment intent on backend
    const res = await axiosSecure.post('/create-payment-intent', {
      amount,
      courceId
    });

    const clientSecret = res.data.clientSecret;

    // Confirm card payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user?.displayName || 'Learner',
          email: user?.email || 'unknown@example.com',
        }
      }
    });

    if (confirmError) {
      Swal.fire({
        icon: 'error',
        title: 'Payment Confirmation Failed',
        text: confirmError.message,
      });
      setIsProcessing(false);  // Re-enable on payment failure
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      // Show success alert immediately
      await Swal.fire({
        title: 'Payment Successful!',
        text: `You have enrolled in ${course?.title}`,
        icon: 'success',
        confirmButtonText: 'Great!'
      });

      // Prepare enrollment data
      const enrollmentData = {
        studentEmail: user.email,
        studentName: user.displayName,
        time: new Date().toISOString(),
        courseId: course._id,
        courseTitle: course.title,
        coursePrice: course.price,
        courseImg: course.image,
        instructorName: course.name,
        transactionId: paymentIntent.id,
      };

      // Save enrollment and update count (can be awaited but user already notified)
      try {
        await postEnrollment.mutateAsync(enrollmentData);
        await updateTotalEnroll.mutateAsync();
      } catch (err) {
        console.error('Failed to update enrollment:', err);
        // You could show a warning here if you want, but payment succeeded
      }

      // Redirect after all done
      navigate('/dashboard/my-enroll');
      // Note: Button remains disabled on success
    }
  };

  if (isLoading) return <div className="text-center py-10 font-bold">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Failed to load course details</div>;

  return (
    <div className="max-w-md mx-auto my-30 bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-center mb-6 text-purple-800">Payment</h2>
      <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-xl text-black">
        <p className="text-lg font-medium mb-2">
          Hello <span className="text-purple-800 font-semibold">{user?.displayName || 'Learner'}</span>,
        </p>
        <p>
          Are you ready to start learning from{' '}
          <span className="font-semibold text-purple-700">{course?.name}</span>?
        </p>
        <p className="mt-1">
          Get started with: <span className="font-semibold">{course?.title}</span>
        </p>
        <p className="mt-2 text-lg text-purple-700 font-semibold">Course Price: ৳{course?.price}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-4 border border-gray-400 rounded-lg bg-purple-100 text-black shadow-sm">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#000000',
                  '::placeholder': {
                    color: '#000000',
                  },
                },
                invalid: {
                  color: '#9e2148',
                },
              },
            }}
          />
        </div>

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition disabled:bg-gray-400"
        >
          Pay <span className='ml-2 '>৳{course?.price}</span>
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
