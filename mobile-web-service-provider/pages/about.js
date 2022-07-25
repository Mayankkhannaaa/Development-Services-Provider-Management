import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import TeamWork3D2 from "../public/Assets/AboutUs.png";
import img4 from "../public/Assets/VeezavizLogo.png";
import img5 from "../public/Assets/KoogleLogo.jpeg";
import img6 from "../public/Assets/ProparaLogo.png";
import img7 from "../public/Assets/LaxisLogo.jpg";

const About = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const getImageDim = () => {
    if (windowWidth > 1500) {
      return 800;
    } else if (windowWidth > 1200) {
      return 600;
    } else if (windowWidth > 900) {
      return 500;
    }
    return 400;
  };

  return (
    <section className="overflow-hidden">
      <Head>
        <title>A-ONE WEB SOLUTIONS | About</title>
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
      <div className="container px-5 pt-5 pb-16 mx-auto">
        <div
          className="flex flex-col justify-center items-center mb-5"
          //   style={{
          //     height: windowWidth > 768 ? getImageDim() + 100 : 400,
          //   }}
        >
          <Image
            className="object-cover h-10 w-10"
            src={TeamWork3D2}
            alt="Team vector"
            height={(getImageDim() * 1467) / 2200}
            width={getImageDim()}
            objectFit="contain"
          />
        </div>
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold ">About Us</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium  mb-2">
                A-ONE WEB SOLUTIONS
              </h2>
              <p className="leading-relaxed">
                A-ONE WEB SOLUTIONS is an ambitious and motivated service
                provider tailored to the needs of businesses of every esteemed
                composition. We are focused on providing services that are
                vastly accessible for everyone who tries to connect with us.
                Serving many international clients, we have a vast experience in
                serving all types of clients in a very reasanable and quality
                focused mindset.
                <ul className="list-disc mt-5">
                  <p className="mb-3">
                    A-ONE WEB SOLUTIONS provides services like :
                  </p>
                  <li>Web Application Development</li>
                  <li>Mobile Application Development</li>
                  <li>Mobile Application Improvement</li>
                  <li>Web Application Improvement</li>
                  <li>Mobile Application Maintainance</li>
                  <li>Web Application Maintainance</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold ">Clients</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium  mb-2">
                Major Clients Served
              </h2>
              <div className="md:pr-10  w-full py-3 sm:py-6 md:py-12">
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
                        className="xs:my-2 md:my-7 color-gray-2  xs:pl-3 md:pl-7  hover:text-blue-500 hover:underline"
                        target="_blank"
                        href="https://www.laxis.com/"
                        rel="noopener noreferrer"
                      >
                        Laxis: Intelligent Meeting Assistant
                      </a>
                    </div>
                    <p className="xs:mt-5 md:mt-10 color-gray-2   ">
                      Laxis captures conversations intelligently to make your
                      meetings more productive and enjoyable. Simple
                      transcription and personalized templates help you extract
                      insights, action items, and key quotes from (and across!)
                      meetings.
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
                        className="xs:my-2 md:my-7 color-gray-2  xs:pl-3 md:pl-7  hover:text-blue-500 hover:underline"
                        target="_blank"
                        href="https://veezaviz.com/"
                        rel="noopener noreferrer"
                      >
                        Veezaviz Limited
                      </a>
                    </div>
                    <p className="xs:mt-5 md:mt-10 color-gray-2   ">
                      An assistive technology startup developing leading-edge
                      technology-based solutions - including those leveraging
                      the power of AI and Machine learning- to address the
                      accessibility barrier for the Deaf.
                    </p>
                  </div>
                  <div className="xs:my-5 md:my-20">
                    <div className="flex xs:w-full md:w-2/6 items-center">
                      <div className="xs:w-1/5 md:w-2/7 self-center">
                        <Image className="rounded-full" src={img5} alt="step" />
                      </div>
                      <a
                        className="xs:my-2 md:my-7 color-gray-2  xs:pl-3 md:pl-7 hover:text-blue-500  hover:underline "
                        target="_blank"
                        href="https://www.linkedin.com/company/koogle-australia/"
                        rel="noopener noreferrer"
                      >
                        Koogle
                      </a>
                    </div>
                    <p className="xs:mt-5 md:mt-10 color-gray-2   ">
                      We are an Australian owned ride-share service currently
                      operating in Sydney, we offer excellent service at better
                      pricing to our users. we also offer corporate discounts to
                      companies wo are registered with us. We charge lower
                      commission so our driver partners keep most of the fare to
                      themselves.
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
                        className="xs:my-2 md:my-7 color-gray-2  xs:pl-3 md:pl-7  hover:text-blue-500 hover:underline"
                        target="_blank"
                        href="https://propara.theeaglion.com/"
                        rel="noopener noreferrer"
                      >
                        PROPARA
                      </a>
                    </div>
                    <p className="xs:mt-5 md:mt-10 color-gray-2   ">
                      PROPARA is a free-of-charge community platform tailored to
                      the needs of growth startups, projects, learning
                      opportunities, collaborations and more. PROPARA gives an
                      overview of the world stage community by providing
                      visibility to startups, projects and opportunities in the
                      world. Via the platform, startups can get assistance with
                      their recruitment of talent as well as connection with
                      investors and more such valuable associations.
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
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold ">Team</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium  mb-2">
                Who is behind the team?
              </h2>
              <p className="leading-relaxed">
                A-ONE WEB SOLUTIONS is based on a strategic partnership between
                members of the tea of developers. It is majorly run by the
                founder{" "}
                <a
                  className="underline text-blue-600 "
                  href="https://www.linkedin.com/in/mayankkhannaaa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mr. Mayank Khanna.
                </a>{" "}
                <p className="xs:mt-5 md:mt-10">
                  The founder and the team members felt the need for a service
                  providing company that provides all the necessary services at
                  a very reasonable price point and which competes with the
                  latest quality standards. The believe in making products that
                  are easily maintainable and can be improved with time and new
                  technologies.
                </p>
                <p className="xs:mt-5 md:mt-10">
                  To strengthen the position in the community, the founder and
                  the team are participating in global collaborations with
                  promising companies.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
