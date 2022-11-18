// React
import React from "react";

// Footer component with link to my GitHub Profile
export const Footer = () => {
  return (
    <section className="sticky h-36 top-full bottom-0 px-6 py-8 bg-bgColor">
      <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
      <span className="block text-sm text-center text-gray-400">
        © 2022{" "}
        <a
          href="https://github.com/simoncriado"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:underline"
        >
          Simon Criado
        </a>
        . All Rights Reserved.
      </span>
    </section>
  );
};
