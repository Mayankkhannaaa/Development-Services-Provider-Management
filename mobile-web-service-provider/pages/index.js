import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import img1 from "../public/Assets/HomePage.png";
import img2 from "../public/Assets/WorkingWithUs.png";
import img3 from "../public/Assets/Benefits.png";
import img4 from "../public/Assets/VeezavizLogo.png";
import img5 from "../public/Assets/KoogleLogo.jpeg";
import img6 from "../public/Assets/ProparaLogo.png";
import img7 from "../public/Assets/LaxisLogo.jpg";
import img8 from "../public/Assets/ContactUs.png";
import { customColors } from "../src/Utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";

export default function Home() {
  const clientsSection = useRef(null);

  const scrollDown = () => {
    window.scrollTo({
      top: clientsSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const contactUsSection = useRef(null);

  const scrollDown1 = () => {
    window.scrollTo({
      top: contactUsSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="xs:mx-7 sm:mx-auto sm:container">
      <Head>
        <title>A-ONE WEB SOLUTIONS</title>
        <meta
          name="description"
          content={`Get your website and mobile application built at cheap and
          affordable prices by experienced and quality developers
          serving clients all over the globe.`}
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
      <div
        className="xs:right-2 sm:right-20 cursor-pointer fixed z-50 bg-blue-400 rounded-full drop-shadow-lg flex justify-center items-center text-white"
        onClick={scrollDown}
      >
        <p className="bg-blue-400 rounded-full p-5 px-6 xs:text-sm md:text-3xl text-white">
          🤝
        </p>
      </div>
      <div
        className=" xs:right-2 sm:right-20 xs:mt-20 md:mt-28  cursor-pointer fixed z-50 bg-blue-400 rounded-full drop-shadow-lg flex justify-center items-center text-white "
        onClick={scrollDown1}
      >
        <p className="bg-blue-400 rounded-full p-5 px-6 xs:text-sm md:text-3xl text-white">
          📞
        </p>
      </div>
      <div className=" mb-10 xs:mx-0 xl:mx-5">
        <div className="lg:flex w-full">
          <div className="md:pr-10 md:py-6 lg:w-1/2 xl:2/5 xs:w-full justify-between">
            <h1
              className="xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl tracking-wide leading-loose text-left "
              style={{ color: customColors.yellowHP }}
            >
              Reasonable, Best Quality Customized Solutions
            </h1>
            <p className="xs:mt-5 md:mt-20 color-gray-2 md:text-2xl  xs:text-md">
              One stop solution for reasonable and best quality, web and mobile
              application related enquiries
            </p>
            <p className="xs:mt-5 md:mt-20 color-gray-2 md:text-2xl  xs:text-md">
              💻 🖥 ⌨️ 🖱 📱 📊 📈 💡 🚀 🎯
            </p>
          </div>
          <div className="lg:w-1/2 xl:3/5 xs:w-full md:mt-0 mt-12 self-center">
            <Image className="object-cover w-full" src={img1} alt="step" />
          </div>
        </div>
      </div>

      <div className="xs:mx-0 xl:mx-5 tracking-wide leading-tight lg:flex w-full py-3 mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20 ">
        <div className="md:pr-10  lg:w-1/2 xl:2/5 xs:w-full py-3 sm:py-6 md:py-12">
          <h1 className="lg:text-5xl sm:text-3xl xs:text-xl   pb-3 sm:pb-6 md:pb-12 cursor-pointer">
            Perks of Working with us 🚀
          </h1>
          <ul className="list-disc">
            <li>
              <p className=" color-gray-2 md:text-2xl  xs:text-md">
                Professional Developers
              </p>
            </li>
            <li>
              <p className="xs:mt-5 md:mt-20 color-gray-2 md:text-2xl  xs:text-md">
                Experience with clients all over the globe
              </p>
            </li>
            <li>
              <p className="xs:mt-5 md:mt-20 color-gray-2 md:text-2xl  xs:text-md">
                Timely Product Delivery
              </p>
            </li>
            <li>
              <p className="xs:mt-5 md:mt-20 color-gray-2 md:text-2xl  xs:text-md">
                Low cost maintainance
              </p>
            </li>
            <li>
              <p className="xs:mt-5 md:mt-20 color-gray-2 md:text-2xl  xs:text-md">
                Acceptance and love from all over the globe
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 xl:3/5 xs:w-full self-center">
          <Image className="object-cover w-full" src={img2} alt="step" />
        </div>
      </div>
      <div
        style={{
          // color: "#3BBD10",
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
      />
      <div className="xs:mx-0 xl:mx-5 tracking-wide leading-tight lg:flex w-full py-3 mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20 ">
        <div className="md:pr-10  lg:w-1/2 xl:2/5 xs:w-full py-3 sm:py-6 md:py-12">
          <h1 className="lg:text-5xl sm:text-3xl xs:text-xl pb-3 sm:pb-6 md:pb-12 cursor-pointer">
            Perks of Having a Mobile/Web Application 📈
          </h1>
          <ul className="list-disc">
            <li>
              <p className=" color-gray-2 md:text-2xl  xs:text-md">
                Reach out to a wider customer base
              </p>
            </li>
            <li>
              <p className="xs:mt-5 md:mt-20 color-gray-2 md:text-2xl  xs:text-md">
                Online Presence 24/7
              </p>
            </li>
            <li>
              <p className="xs:mt-5 md:mt-20 color-gray-2 md:text-2xl  xs:text-md">
                Professional Structure to your business
              </p>
            </li>
            <li>
              <p className="xs:mt-5 md:mt-20 color-gray-2 md:text-2xl  xs:text-md">
                Advertisment Campaigns
              </p>
            </li>
            <li>
              <p className="xs:mt-5 md:mt-20 color-gray-2 md:text-2xl  xs:text-md">
                Always One Step ahead of your competition
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 xl:3/5 xs:w-full self-center">
          <Image className="object-cover w-full" src={img3} alt="step" />
        </div>
      </div>
      <div
        style={{
          // color: "#3BBD10",
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
      />
      <div className="xs:mx-0 xl:mx-5 tracking-wide leading-tight lg:flex w-full py-3 mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20 ">
        <div className="md:pr-10  w-full py-3 sm:py-6 md:py-12">
          <h1 className="lg:text-5xl sm:text-3xl xs:text-xl   pb-3 sm:pb-6 md:pb-12 cursor-pointer">
            Tech Stack we use 💻
          </h1>
          <div className="md:flex md:justify-between">
            <ul className="list-disc">
              <p className="xs:my-3 md:my-7 color-gray-2 md:text-2xl  xs:text-md">
                Frontend Technologies
              </p>
              <li className="my-3">
                <code className="color-gray-2 md:text-2xl  xs:text-md">
                  react.js
                </code>
              </li>
              <li className="my-2">
                <code className="color-gray-2 md:text-2xl  xs:text-md">
                  next.js
                </code>
              </li>
            </ul>
            <ul className="list-disc">
              <p className="xs:my-3 md:my-7 color-gray-2 md:text-2xl  xs:text-md">
                Backend Technologies
              </p>
              <li className="my-3">
                <code className=" color-gray-2 md:text-2xl  xs:text-md">
                  express.js
                </code>
              </li>
              <li className="my-2">
                <code className="color-gray-2 md:text-2xl  xs:text-md">
                  node.js
                </code>
              </li>
            </ul>
            <ul className="list-disc">
              <p className="xs:my-3 md:my-7 color-gray-2 md:text-2xl  xs:text-md">
                Services and Databses
              </p>
              <li className="my-3">
                <code className=" color-gray-2 md:text-2xl  xs:text-md">
                  dynamoDB (AWS)
                </code>
              </li>
              <li className="my-2">
                <code className="color-gray-2 md:text-2xl  xs:text-md">
                  mongoDB
                </code>
              </li>
              <li className="my-2">
                <code className=" color-gray-2 md:text-2xl  xs:text-md">
                  S3 Storage(AWS)
                </code>
              </li>
              <li className="my-2">
                <code className=" color-gray-2 md:text-2xl  xs:text-md">
                  Route 53 Hosting(AWS)
                </code>
              </li>
            </ul>
            <ul className="list-disc">
              <p className="xs:my-3 md:my-7 color-gray-2 md:text-2xl  xs:text-md">
                UI Development Tools
              </p>
              <li className="my-3">
                <code className=" color-gray-2 md:text-2xl  xs:text-md">
                  canva
                </code>
              </li>
              <li className="my-2">
                <code className="color-gray-2 md:text-2xl  xs:text-md">
                  figma
                </code>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          // color: "#3BBD10",
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
      /> */}
      <div
        className="flex justify-around  xs:mx-0 xl:mx-5 tracking-wide leading-tight items-center py-3 mt-5 sm:mt-8 md:mt-10 mb-10 sm:mb-16 md:mb-20 "
        style={{
          // color: "#3BBD10",
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
      >
        <h1 className="  lg:text-5xl sm:text-3xl xs:text-xl  text-center py-3 sm:py-6 md:py-12  ">
          More than 10+ major and successful projects completed ✅
        </h1>
      </div>
      <div
        className="xs:mx-0 xl:mx-5 tracking-wide leading-tight lg:flex w-full py-3 mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20 "
        ref={clientsSection}
      >
        <div className="md:pr-10  w-full py-3 sm:py-6 md:py-12">
          <h1 className="lg:text-5xl sm:text-3xl xs:text-xl   pb-3 sm:pb-6 md:pb-12 cursor-pointer">
            Our clients and projects 🤝
          </h1>
          <div className="">
            <div className="xs:mb-5 md:mb-20">
              <div className="flex xs:w-full md:w-2/6 items-center">
                <div className="xs:w-1/5 md:w-2/7 self-center">
                  <Image
                    className="object-cover w-full rounded-full"
                    src={img7}
                    alt="step"
                  />
                </div>
                <a
                  className="xs:my-2 md:my-7 color-gray-2 md:text-2xl xs:pl-3 md:pl-7 xs:text-md hover:text-blue-500 hover:underline"
                  target="_blank"
                  href="https://www.laxis.com/"
                  rel="noopener noreferrer"
                >
                  Laxis: Intelligent Meeting Assistant
                </a>
              </div>
              <p className="xs:mt-5 md:mt-10 color-gray-2 md:text-2xl  xs:text-md">
                Laxis captures conversations intelligently to make your meetings
                more productive and enjoyable. Simple transcription and
                personalized templates help you extract insights, action items,
                and key quotes from (and across!) meetings.
              </p>
            </div>
            <div className="xs:mb-5 md:mb-20">
              <div className="flex xs:w-full md:w-2/6 items-center">
                <div className="xs:w-1/5 md:w-2/7 self-center">
                  <Image
                    className="object-cover w-full rounded-full"
                    src={img4}
                    alt="step"
                  />
                </div>
                <a
                  className="xs:my-2 md:my-7 color-gray-2 md:text-2xl xs:pl-3 md:pl-7 xs:text-md hover:text-blue-500 hover:underline"
                  target="_blank"
                  href="https://veezaviz.com/"
                  rel="noopener noreferrer"
                >
                  Veezaviz Limited
                </a>
              </div>
              <p className="xs:mt-5 md:mt-10 color-gray-2 md:text-2xl  xs:text-md">
                An assistive technology startup developing leading-edge
                technology-based solutions - including those leveraging the
                power of AI and Machine learning- to address the accessibility
                barrier for the Deaf.
              </p>
            </div>
            <div className="xs:my-5 md:my-20">
              <div className="flex xs:w-full md:w-2/6 items-center">
                <div className="xs:w-1/5 md:w-2/7 self-center">
                  <Image className="rounded-full" src={img5} alt="step" />
                </div>
                <a
                  className="xs:my-2 md:my-7 color-gray-2 md:text-2xl xs:pl-3 md:pl-7 hover:text-blue-500 xs:text-md hover:underline "
                  target="_blank"
                  href="https://www.linkedin.com/company/koogle-australia/"
                  rel="noopener noreferrer"
                >
                  Koogle
                </a>
              </div>
              <p className="xs:mt-5 md:mt-10 color-gray-2 md:text-2xl  xs:text-md">
                We are an Australian owned ride-share service currently
                operating in Sydney, we offer excellent service at better
                pricing to our users. we also offer corporate discounts to
                companies wo are registered with us. We charge lower commission
                so our driver partners keep most of the fare to themselves.
              </p>
            </div>
            <div className="xs:mb-5 md:mb-20">
              <div className="flex xs:w-full md:w-2/6 items-center">
                <div className="xs:w-1/5 md:w-2/7 self-center">
                  <Image
                    className="object-cover w-full rounded-full"
                    src={img6}
                    alt="step"
                  />
                </div>
                <a
                  className="xs:my-2 md:my-7 color-gray-2 md:text-2xl xs:pl-3 md:pl-7 xs:text-md hover:text-blue-500 hover:underline"
                  target="_blank"
                  href="https://propara.theeaglion.com/"
                  rel="noopener noreferrer"
                >
                  PROPARA
                </a>
              </div>
              <p className="xs:mt-5 md:mt-10 color-gray-2 md:text-2xl  xs:text-md">
                PROPARA is a free-of-charge community platform tailored to the
                needs of growth startups, projects, learning opportunities,
                collaborations and more. PROPARA gives an overview of the world
                stage community by providing visibility to startups, projects
                and opportunities in the world. Via the platform, startups can
                get assistance with their recruitment of talent as well as
                connection with investors and more such valuable associations.
              </p>
            </div>
          </div>
          <div className="flex justify-around  xs:mx-0 xl:mx-5 tracking-wide leading-tight items-center py-3 mt-5 sm:mt-8 md:mt-10   ">
            <h1 className="  lg:text-5xl sm:text-3xl xs:text-xl  text-center  ">
              and more...
            </h1>
          </div>
        </div>
      </div>
      <div
        style={{
          // color: "#3BBD10",
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
      />
      <div
        className="xs:mx-0 xl:mx-5 tracking-wide leading-tight lg:flex w-full py-3 mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20 "
        ref={contactUsSection}
      >
        <div className="md:pr-10 lg:w-1/2 xl:2/5 xs:w-full py-3 sm:py-6 md:py-12">
          <h1 className="lg:text-5xl sm:text-3xl xs:text-xl   pb-3 sm:pb-6 md:pb-12 cursor-pointer">
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
