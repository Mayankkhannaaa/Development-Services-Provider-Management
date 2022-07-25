import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import img8 from "../public/Assets/ContactUs.png";
import Head from "next/head";

export default function ContactUs() {
  return (
    <div className="xs:mx-7 sm:mx-auto sm:container">
      <Head>
        <title>A-ONE WEB SOLUTIONS | Contact</title>
        <meta
          name="description"
          content={`A-ONE WEB SOLUTIONS is an ambitious and motivated service
            provider tailored to the needs of businesses of every esteemed
            composition. We are focused on providing services that are
            vastly accessible for everyone who tries to connect with us.
            Serving many international clients, we have a vast experience in
            serving all types of clients in a very reasanable and quality
            focused mindset.`}
        />
        <meta
          name="keywords"
          content={
            "cheap website," +
            "website for business," +
            "website for startups," +
            "web services," +
            "web development services," +
            "cheap web application" +
            "web development," +
            "high quality website," +
            "custom website," +
            "custom website development," +
            "website development," +
            "new website," +
            "website for me," +
            "website for business," +
            "web solutions," +
            "cheap mobile apps," +
            "mobile apps for business," +
            "mobile apps for startups," +
            "mobile app services," +
            "mobile development services," +
            "cheap mobile application" +
            "mobile app development," +
            "high quality mobile apps," +
            "custom mobile apps," +
            "custom mobile app development," +
            "mobile apps development," +
            "new mobile apps," +
            "mobile apps for me," +
            "mobile apps for business," +
            "mobile app solutions," +
            "best web building sites," +
            "google new website," +
            "make a new website," +
            "build a new website," +
            "i need a website," +
            "i need a website for my business," +
            "i need an ecommerce website," +
            "i need a business website," +
            "need a website," +
            "build custom website," +
            "personalized website," +
            "custom web development services," +
            "custom web design services," +
            "customize website," +
            "custom web design company," +
            "custom website design company," +
            "affordable custom websites," +
            "custom ecommerce website," +
            "custom website design cost," +
            "affordable custom website design," +
            "cheap website builders," +
            "affordable web design," +
            "cheap website design," +
            "affordable website design," +
            "cheap website makers," +
            "cheap web design," +
            "affordable website," +
            "cheap website creator," +
            "affordable web design services," +
            "affordable web design company," +
            "affordable website design near me," +
            "cheap ecommerce website," +
            "affordable websites for small business," +
            "affordable website designer," +
            "affordable custom websites," +
            "affordable website builders," +
            "best cheap website builders," +
            "affordable website design packages," +
            "a one website services," +
            "a one website solutions," +
            "website management," +
            "new cheap website," +
            "low cost website design," +
            `A-ONE WEB SOLUTIONS is an ambitious and motivated service
            provider tailored to the needs of businesses of every esteemed
            composition. We are focused on providing services that are
            vastly accessible for everyone who tries to connect with us.
            Serving many international clients, we have a vast experience in
            serving all types of clients in a very reasanable and quality
            focused mindset.,` +
            "International Clients"
          }
        />
        <meta name="author" content={"PROPARA - Professional Paradise"} />
      </Head>
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
