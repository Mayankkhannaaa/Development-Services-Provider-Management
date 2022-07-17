import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import img8 from "../public/Assets/ContactUs.png";

export default function ContactUs() {
  return (
    <div className="xs:mx-7 sm:mx-auto sm:container">
      <div className="xs:mx-0 xl:mx-5 tracking-wide leading-tight lg:flex w-full p-10 mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20  border-2">
        <div className="md:pr-10 lg:w-1/2 xl:2/5 xs:w-full py-3 sm:py-6 md:py-12">
          <h1 className="lg:text-5xl sm:text-3xl xs:text-xl  pb-3 sm:pb-6 md:pb-12 cursor-pointer  ">
            Reach out to us now 📞 ✉️
          </h1>
          <div className="xs:mb-5 md:mb-20">
            <div className="flex items-center">
              <div className="self-center">
                <p className="md:text-2xl xs:text-md">✉️</p>
              </div>
              <a
                className="xs:my-2 md:my-7 cursor-pointer color-gray-2 md:text-2xl xs:pl-3 md:pl-7 xs:text-md hover:text-blue-500 hover:underline"
                target="_blank"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "mailto:mayankkhanna015@outlook.com?subject=Customised Enquiry Discussion!";
                }}
                rel="noopener noreferrer"
              >
                Through Email
              </a>
            </div>
          </div>
          <div className="xs:mb-5 md:mb-20">
            <div className="flex items-center">
              <div className="self-center">
                <p className="md:text-2xl xs:text-md">
                  <FontAwesomeIcon size="1x" icon={faWhatsapp} color="green" />
                </p>
              </div>
              <a
                className="xs:my-2 md:my-7 cursor-pointer color-gray-2 md:text-2xl xs:pl-3 md:pl-7 xs:text-md hover:text-blue-500 hover:underline"
                target="_blank"
                href="https://wa.me/9313790181"
                rel="noopener noreferrer"
              >
                Through WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="xs:w-full md:w-1/4 mx-auto">
          <Image className="object-cover " src={img8} alt="step" />
        </div>
      </div>
    </div>
  );
}
