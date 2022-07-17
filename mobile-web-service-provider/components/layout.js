import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../public/Assets/A-One Web Solutions-logos_white.png";

export default function Layout({ children }) {
  const [windowWidth, setWindowWidth] = useState(160);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const router = useRouter();
  return (
    <>
      <div className="sm:container xs:mx-7 sm:mx-auto text-white ">
        <header className="mt-5 mb-10">
          <div
            className="mx-auto"
            style={{
              width: 270,
              height: (270 * 334) / 899,
              borderBottomWidth: 1,
            }}
            onClick={() => router.push("/")}
          >
            <Image
              src={img1}
              alt="PP"
              width={270}
              height={(270 * 334) / 899}
              className="cursor-pointer"
            />
            <div
              className="border-gray-400"
              style={{
                borderTopWidth: 1,
                width: 270,
                height: (270 * 334) / 899,
              }}
            />
          </div>
        </header>
        {children}
      </div>
      <footer className="mt-5 ">
        <div
          className="border-gray-50 opacity-40"
          style={{
            borderTopWidth: 1,
          }}
        />
        <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"></div>
        <div className="mb-5">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <div className="flex flex-wrap xs:flex-col xs:items-center sm:items-start">
              <a
                className="font-medium items-center md:justify-start justify-center text-gray-50 hover:text-blue-500 hover:underline"
                href="http://localhost:3000/about"
              >
                <span className="text-xl">About Us</span>
              </a>
              <a
                className="font-medium text-gray-50 tracking-widest text-xl mb-3 hover:text-blue-500 hover:underline"
                href="http://localhost:3000/contact"
              >
                Contact Us
              </a>
              <a
                className=" text-md text-center sm:text-left text-gray-50 hover:text-blue-500 hover:underline"
                href="https://www.linkedin.com/in/mayankkhannaaa"
              >
                © 2022 Mayank Khanna
              </a>
            </div>
            <span className="inline-flex sm:ml-auto xs:mt-10 sm:mt-0 self-center  justify-center sm:justify-start">
              <a
                className="ml-3 text-gray-50"
                href="https://twitter.com/Mayankkhanna_"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-50"
                href="https://www.instagram.com/mayankkhannaaa/"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-50"
                href="https://www.linkedin.com/in/mayankkhannaaa"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
      {/* <footer>
          <div
            className="border-gray-600 opacity-40"
            style={{
              borderTopWidth: 1,
            }}
          />
          <div className="my-20">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <a
                className=" text-md text-center sm:text-left text-gray-50 hover:text-blue-500 hover:underline"
                href="https://www.linkedin.com/in/mayankkhannaaa"
              >
                © 2022 Mayank Khanna
              </a>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a
                  className="ml-3 text-gray-50"
                  href="https://twitter.com/Mayankkhanna_"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a
                  className="ml-3 text-gray-50"
                  href="https://www.instagram.com/mayankkhannaaa/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  className="ml-3 text-gray-50"
                  href="https://www.linkedin.com/in/mayankkhannaaa"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer> */}
    </>
  );
}
