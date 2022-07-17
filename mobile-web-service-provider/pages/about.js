import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import TeamWork3D2 from "../public/Assets/AboutUs.png";
import img1 from "../public/Assets/HomePage.png";
import img2 from "../public/Assets/WorkingWithUs.png";
import img3 from "../public/Assets/Benefits.png";
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
        <meta name="description" content={``} />
        <meta
          name="keywords"
          content={
            "explore new opportunities," +
            "new jobs," +
            "new startups," +
            "growth startups," +
            "expand your startup," +
            "founders," +
            "become a founder," +
            "become a co-founder," +
            "co-founders," +
            "ceo," +
            "cto," +
            "recruitment," +
            "jobs near me," +
            "indeed jobs," +
            "startup accelarator," +
            "work from home jobs," +
            "job description," +
            "job description template," +
            "part time jobs near me," +
            "startup jobs," +
            "linkedin jobs," +
            "Professional jobs," +
            "High paying jobs," +
            "explore new projects," +
            "explore new startups," +
            "upsc preperation," +
            "entrepreneurship," +
            "founders," +
            "become a founder," +
            "become a co-founder," +
            "co-founders," +
            "ceo," +
            "cto," +
            "startups near me," +
            `PROPARA is a free-of-charge community platform tailored to the
                needs of growth startups, projects, learning opportunities,
                collaborations and more. PROPARA gives an overview of the world
                stage community by providing visibility to startups, projects
                and opportunities in the world. Via the platform, startups can
                get assistance with their recruitment of talent as well as
                connection with investors and more such valuable associations.,` +
            `PROPARA has three main target groups; the first one being growth
                startups based around the world, who are facing various
                challenges related to scalability, expansion and sustainabilty.
                These challenges can be related to recruitment, funding or other
                insights. As a startup, you might be looking to expand your team
                in order to build or scale, looking for funding, or being in the
                need of best practice tools such as a pitch deck or employment
                contract. PROPARA has gathered the solutions to those challenges
                and more importantly made them accessible. Not only startups,
                but you can get along with people having similar interest and
                complete your current tasks effectively and efficiently.,` +
            ` The second main target group is applicants who want to join a
                  startup or a project that involves their personal interest. It
                  is those who are already a part of the startup ecosystem,
                  students with the dream of becoming entrepreneurs, employees
                  in larger organisations, people looking to learn together or
                  anyone else wanting to be part of a startup journey or a
                  journey from ZERO to ONE.,` +
            `The third target group is investors interested in growth
                  startups in the world. It is those who are looking to invest
                  in the next big unicorn e.g. venture capital funds, angels,
                  accelerators and incubators.,
                  PROPARA has assembled these and given them visibility towards
                  growth startups who are looking for funding. PROPARA is
                  completely free to use for all three groups; project
                  owners/startups, applicants and investors.,` +
            `Become a part of the community of most efficient, hungry and
                success attracting people by creating an account at PROPARA.
                Start your journey of expansion and learning and acknowledge
                your strengths by considering sharing your new ideas with the
                world.,` +
            `Are you part of a growing startup, a learner, an achiever and
                want to be part of our platform? Register your project on
                PROPARA at https://propara.theeaglion.com/new-project,` +
            `Startups/Project owners expand and scale by collaborating with
                new team members who share the same ambition. To join your
                favourite startup/project, go to the startup/project profile and
                check for the available opportunities for which they are open
                for collaborations.`
          }
        />
        <meta name="author" content={"PROPARA - Professional Paradise"} />
      </Head>
      <div className="px-5 pt-5 pb-16 mx-auto">
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
                PROPARA - Professional Paradise
              </h2>
              <p className="leading-relaxed">
                Something is an ambitious and motivated service provider
                tailored to the needs of businesses of every esteemed
                composition. Something is focused on providing services that are
                vastly accessible for everyone who tries to connect with us.
                Serving many international clients, Something has a vast
                experience in serving all types of clients in a very reasanable
                and quality focused mindset.
                <ul className="list-disc mt-5">
                  <p className="mb-3">Something provides services like :</p>
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
                Something is based on a strategic partnership between members of
                the tea of developers. It is majorly run by the founder{" "}
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
