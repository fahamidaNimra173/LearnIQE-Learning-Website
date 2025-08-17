import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="lg:px-25 p-6 my-30 dark:text-white text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to <strong>LearnIQ</strong>. By accessing or using our platform,
        you agree to comply with and be bound by the following terms and
        conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Platform</h2>
      <p className="mb-4">
        Our services are for personal and educational use only. You agree not to
        misuse or exploit the platform for unauthorized or illegal purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Accounts</h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account
        and for all activities that occur under your account.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Course Content</h2>
      <p className="mb-4">
        All course materials and content are owned by LearnIQ or respective
        instructors. Copying, redistributing, or reselling is strictly
        prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Payments</h2>
      <p className="mb-4">
        All payments for courses are final and non-refundable unless explicitly
        stated otherwise.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate accounts that violate our
        terms or engage in harmful behavior.
      </p>

      <p className="mt-8 text-center font-medium">
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:fahmidanimra.com" className="text-blue-600 underline">
          fahmidanimra.com
        </a>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
