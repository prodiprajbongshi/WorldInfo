import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          Last updated: December 2025
        </p>

        <section className="space-y-6 text-gray-700">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information when you use our website.
          </p>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, phone number, and other details you voluntarily provide.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>To provide and improve our services</li>
              <li>To communicate with you</li>
              <li>To ensure website security</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              3. Cookies
            </h2>
            <p>
              We use cookies to enhance user experience and analyze website
              traffic. You can disable cookies in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              4. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              5. Third-Party Services
            </h2>
            <p>
              We may use third-party services that collect information in
              accordance with their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at{" "}
              <span className="font-medium text-blue-600">
                support@example.com
              </span>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
