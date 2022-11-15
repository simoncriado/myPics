// React
import React from "react";

// Footer component with link to my GitHub Profile
export const Footer = () => {
  return (
    <section className="sticky h-36 top-full bottom-0 p-4 bg-bgColor md:px-6 md:py-8 dark:bg-bgColor">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 text-center sm:text-center dark:text-gray-400">
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
