import React from "react";

export const Footer = () => {
  return (
    <section className="fixed bottom-0 left-0 right-0 p-4 bg-bgColor rounded-lg shadow md:px-6 md:py-8 dark:bg-bgColor">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 text-center sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Simon Criado
        </a>
        . All Rights Reserved.
      </span>
    </section>
  );
};
