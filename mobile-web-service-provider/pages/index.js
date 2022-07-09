import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import img1 from "../public/Assets/HomePage.png";
import img2 from "../public/Assets/WorkingWithUs.png";
import img3 from "../public/Assets/Benefits.png";
import { customColors } from "../src/Utils/colors";

export default function Home() {
  return (
    <div className="sm:container xs:mx-5 sm:mx-auto">
      <div className=" mb-10 xs:mx-0 xl:mx-5">
        <div className="lg:flex w-full">
          <div className="md:pr-10 md:py-6 lg:w-1/2 xl:2/5 xs:w-full justify-between">
            <h1
              className="xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl tracking-wide leading-loose text-left "
              style={{ color: customColors.yellowHP }}
            >
              Cheap, Best Quality Customized Solutions
            </h1>
            <p className="xs:mt-5 md:mt-20 color-gray-2 md:text-2xl  xs:text-md">
              One stop solution for cheap and best quality web and mobile
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
          <h1 className="lg:text-5xl sm:text-3xl xs:text-xl   pb-3 sm:pb-6 md:pb-12 cursor-pointer">
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
              <p className="xs:my-2 md:my-7 color-gray-2 md:text-2xl  xs:text-md">
                Frontend Technologies
              </p>
              <li className="my-2">
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
              <p className="xs:my-2 md:my-7 color-gray-2 md:text-2xl  xs:text-md">
                Backend Technologies
              </p>
              <li className="my-2">
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
              <p className="xs:my-2 md:my-7 color-gray-2 md:text-2xl  xs:text-md">
                Services and Databses
              </p>
              <li className="my-2">
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
              <p className="xs:my-2 md:my-7 color-gray-2 md:text-2xl  xs:text-md">
                UI Development Tools
              </p>
              <li className="my-2">
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
      <div
        style={{
          // color: "#3BBD10",
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
      />
      <section className="text-gray-600 body-font">
        <div className="container lg:px-5 py-10 sm:py-16  md:py-20  xs:px-0 mx-auto flex flex-wrap">
          <div className="lg:flex w-full">
            <div className="lg:w-1/2 xs:w-full md:pr-10 md:py-6">
              <h1
                className="xs:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10"
                style={{ color: "black" }}
              >
                Start a Project Now!
              </h1>
              <div className="flex relative pb-12 ">
                <div className="h-full w-10 absolute inset-0 top-4 flex items-center justify-center">
                  <div
                    className="h-full bg-color-blue-primary pointer-events-none"
                    style={{ width: 2 }}
                  ></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full   inline-flex items-center justify-center text-white relative z-10">
                  <div className="bullet-blue bg-color-blue-primary mt-1" />
                </div>
                <div className="flex-grow pl-4 pt-2">
                  <p className="leading-relaxed text-lg">
                    Showcase your projects and progress & enhance your profile
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 top-4 flex items-center justify-center">
                  <div
                    className="h-full bg-color-blue-primary pointer-events-none"
                    style={{ width: 2 }}
                  ></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full   inline-flex items-center justify-center text-white relative z-10">
                  <div className="bullet-blue bg-color-blue-primary mt-1" />
                </div>
                <div className="flex-grow pl-4 pt-2">
                  <p className="leading-relaxed text-lg">
                    Find your dream team
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 top-4 flex items-center justify-center">
                  <div
                    className="h-full  bg-color-blue-primary pointer-events-none"
                    style={{ width: 2 }}
                  ></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full   inline-flex items-center justify-center text-white relative z-10">
                  <div className="bullet-blue bg-color-blue-primary mt-1" />
                </div>
                <div className="flex-grow pl-4 pt-2">
                  <p className="leading-relaxed text-lg">
                    Get legitimate community support and honest feedback
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 top-4 flex items-center justify-center"></div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full   inline-flex items-center justify-center text-white relative z-10">
                  <div className="bullet-blue bg-color-blue-primary mt-1" />
                </div>
                <div className="flex-grow pl-4 pt-2">
                  <p className="leading-relaxed text-lg">
                    Collaborate with people of similar interests
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xs:w-full md:mt-0 mt-12 self-center">
              {/* <Image className="object-cover w-full" src={img2} alt="step" /> */}
            </div>
          </div>
          <div className="xs:mx-auto xs:mt-10 md:mx-0 md:mt-0"></div>
        </div>
      </section>
      <div
        className="flex justify-around  xs:mx-0 xl:mx-5 tracking-wide leading-tight items-center py-3 mt-5 sm:mt-8 md:mt-10 mb-10 sm:mb-16 md:mb-20 cursor-pointer"
        style={{
          // color: "#3BBD10",
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
      >
        <h1
          className="  lg:text-5xl sm:text-3xl xs:text-xl  text-center py-3 sm:py-6 md:py-12  cursor-pointer"
          onClick={() => {
            router.push("/projects");
          }}
        >
          Explore Projects
        </h1>
        <svg
          // className="  lg:text-5xl sm:text-3xl xs:text-xl  text-center py-3 sm:py-6 md:py-12  cursor-pointer w-10 h-10"
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </div>
      <div className="md:flex md:my-24 xs:p-10 md:p-20">
        <div className="xs:w-full md:w-1/2">
          <h1 className="xs:text-xl sm:text-2xl lg:text-4xl font-bold">
            Live Webinar with Entrepreneurs 🚀
          </h1>
          <div>
            <div className="xs:mt-5 md:mt-7 flex">
              <div className="bg-color-blue-primary mt-1 rounded-full w-3 h-3" />
              <p className="color-gray-2 ml-2">Fun and Interactive Session</p>
            </div>
            <div className="xs:mt-5 md:mt-7 flex">
              <div className=" bg-color-blue-primary mt-1 rounded-full w-3 h-3" />
              <p className=" color-gray-2 ml-2">Speak up your mind</p>
            </div>
            <div className="xs:mt-5 md:mt-7 flex">
              <div className=" bg-color-blue-primary mt-1 rounded-full w-3 h-3" />
              <p className=" color-gray-2 ml-2">
                Ask questions regarding your startup
              </p>
            </div>
            <div className="xs:mt-5 md:mt-7 flex">
              <div className=" bg-color-blue-primary mt-1 rounded-full w-3 h-3" />
              <p className=" color-gray-2 ml-2">
                Promote and kickstart your work
              </p>
            </div>
          </div>
          <div className="xs:mt-5 md:mt-7 flex items-center cursor-pointer">
            <a
              className="ml-3 flex"
              href="https://chat.whatsapp.com/LV9DMv4j7IUABoHyxoGN5A"
              rel="noreferrer"
              target="_blank"
            >
              <div className="mt-1 ml-4 underline">
                Join and network with the biggest entrepreneurs group and stay
                updated!
              </div>
            </a>
          </div>
          <p className=" color-gray-2 xs:mt-5 md:mt-7">
            Follow us on instagram. <br />
            To join as a speaker, follow us on instagram and DM your details
          </p>
          <div className="xs:mt-5 md:mt-7 flex items-center cursor-pointer">
            <a
              className="ml-3 flex"
              href="https://www.instagram.com/propara.web/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="mt-1 ml-4 ">@propara.web</div>
            </a>
          </div>
        </div>
        <div className="xs:mt-10 md:mt-0 xs:w-full md:w-1/2 text-center">
          {/* <Image
            src={InstaQR}
            alt="QRCode"
            height={(getImageDim() * 3869) / 3000}
            width={getImageDim()}
          /> */}
        </div>
      </div>
      <div
        className="flex justify-around  xs:mx-0 xl:mx-5 tracking-wide leading-tight items-center py-3 mt-5 sm:mt-8 md:mt-10 mb-10 sm:mb-16 md:mb-20 "
        style={{
          // color: "#3BBD10",
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
      >
        <h1 className="  lg:text-5xl sm:text-3xl xs:text-xl  text-center py-3 sm:py-6 md:py-12  ">
          Testimonials Coming Soon....
        </h1>
      </div>
    </div>
  );
}
