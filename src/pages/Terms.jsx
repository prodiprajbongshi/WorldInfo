import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Terms & Conditions
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          Last updated: December 2025
        </p>

        <section className="space-y-6 text-gray-700">
          <p>
            By accessing or using this website, you agree to be bound by these
            Terms and Conditions. If you do not agree with any part of these
            terms, please do not use our services.
          </p>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              1. Use of the Website
            </h2>
            <p>
              You agree to use this website only for lawful purposes and in a
              way that does not infringe the rights of others or restrict their
              use of the website.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              2. Intellectual Property
            </h2>
            <p>
              All content, logos, text, graphics, and materials on this website
              are the property of the company and are protected by applicable
              copyright laws.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              3. User Responsibilities
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>Provide accurate information</li>
              <li>Do not misuse or attempt to harm the website</li>
              <li>Comply with all applicable laws</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              4. Limitation of Liability
            </h2>
            <p>
              We shall not be held responsible for any direct, indirect, or
              incidental damages arising from the use of this website.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              5. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate access to our
              services at any time without prior notice if these terms are
              violated.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              6. Changes to Terms
            </h2>
            <p>
              We may update these Terms and Conditions at any time. Continued
              use of the website after changes implies acceptance of the
              updated terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              7. Governing Law
            </h2>
            <p>
              These terms shall be governed and interpreted in accordance with
              the laws applicable in your jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              8. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
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

export default Terms;
