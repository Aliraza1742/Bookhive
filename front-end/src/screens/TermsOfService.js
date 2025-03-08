import React from "react";
import { Icon } from "@iconify/react";

const TermsOfService = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600  text-white"
    >
      <div className="bg-white text-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-blue-600 text-center mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
          By accessing or using our services, you agree to be bound by these
          Terms of Service. Please review them carefully.
        </p>
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Icon icon="mdi:check-circle" className="text-blue-500 text-2xl mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Acceptance of Terms
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed ml-9">
            By accessing the application, you agree to abide by all applicable
            laws and regulations.
          </p>
        </section>
        <section className="mb-8">
          <div className="flex items-center mb-4 ">
            <Icon icon="mdi:account-check" className="text-blue-500 text-2xl mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              User Responsibilities
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed ml-9">
            Users must ensure their actions comply with these terms and must
            not misuse the app or its resources.
          </p>
        </section>
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Icon icon="mdi:calendar-edit" className="text-blue-500 text-2xl mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Modifications
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed ml-9">
            We reserve the right to modify these terms. Significant changes
            will be announced.
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

export default TermsOfService;