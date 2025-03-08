import React from "react";
import { Icon } from "@iconify/react";

const PrivacyPolicy = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 text-white"
    >
      <div className="bg-white text-black rounded-lg shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-blue-600 text-center mb-7">
          Privacy Policy
        </h1>
        <p className="text-black text-lg leading-relaxed mb-6 text-center">
          Your privacy matters. This Privacy Policy outlines how we handle your
          data.
        </p>
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Icon icon="mdi:shield-lock" className="text-blue-500 text-2xl mr-3" />
            <h2 className="text-2xl font-semibold text-black">
              Information We Collect
            </h2>
          </div>
          <p className="text-black leading-relaxed ml-9">
            We collect information such as your name, email, and usage activity
            for app improvement.
          </p>
        </section>
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Icon icon="mdi:account-supervisor" className="text-blue-500 text-2xl mr-3" />
            <h2 className="text-2xl font-semibold text-black">
              How We Use Information
            </h2>
          </div>
          <p className="text-black leading-relaxed ml-9">
            Information is used to enhance user experience and app
            functionality.
          </p>
        </section>
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Icon icon="mdi:shield-check" className="text-blue-500 text-2xl mr-3" />
            <h2 className="text-2xl font-semibold text-black">
              Data Security
            </h2>
          </div>
          <p className="text-black leading-relaxed ml-9">
            Your data is protected with advanced security measures.
          </p>
        </section>
        <button
          className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all flex items-center justify-center"
        onClick={() => window.history.back()}
        >
          <Icon icon="mdi:arrow-left" className="text-white text-xl mr-2" />
            Go Back!
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;