import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>LearnIQ</strong>, we value your privacy and are committed to
        protecting your personal data. This policy explains how we collect, use,
        and safeguard your information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect your name, email address, payment information, and usage
        activity when you interact with our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. How We Use Information
      </h2>
      <p className="mb-4">
        We use your information to provide learning services, process
        transactions, improve user experience, and send updates about our
        platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Data Security
      </h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to keep
        your data safe. However, no online system is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Sharing of Information
      </h2>
      <p className="mb-4">
        We do not sell or trade your personal data. Information may only be
        shared with trusted third parties for course delivery, payment
        processing, or legal compliance.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. Your Rights
      </h2>
      <p className="mb-4">
        You have the right to access, update, or delete your data at any time.
        You may also unsubscribe from marketing communications.
      </p>

      <p className="mt-8 text-center font-medium">
        If you have questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:privacy@learniq.com" className="text-blue-600 underline">
          privacy@learniq.com
        </a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
