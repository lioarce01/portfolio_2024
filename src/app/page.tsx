"use client";

import Navbar from "@/components/Navbar";
//@ts-ignore
import { Github, Linkedin, FileDown, MoveRight, MoveLeft } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const getAge = () => {
    return new Date().getFullYear() - new Date("May 01, 99").getFullYear();
  };

  return (
    <div className="flex flex-row-reverse justify-center text-white w-full min-h-screen md:pt-20">
      {/* <Projects /> */}
      <div className="bg-[#0a0a0a] lg:w-[60%] md:w-[80%] sm:mx-5 md:rounded-t-2xl py-16 px-6 flex flex-col  shadow-black">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-6xl pb-2 text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          Hi, I'm Lionel Arce
        </h1>

        <div className="flex items-center justify-center">
          <h2 className="scroll-m-20 text-[#b6b3b3] text-lg font-normal text-center items-center tracking-tight lg:text-xl">
            Software Developer -
          </h2>
          <a
            className="mx-1 p-1 hover:bg-white hover:text-black transition duration-300 rounded-md"
            href="https://www.linkedin.com/in/lionel-arce/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            className="mr-1 p-1 hover:bg-white hover:text-black transition duration-300 rounded-md"
            href="https://github.com/lioarce01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            className=" p-1 hover:bg-white hover:text-black transition duration-300 rounded-md"
            href="/Profile.pdf"
            download
          >
            <FileDown />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center pt-28">
          <section
            id="#introduction"
            className="flex flex-col md:max-w-[70%] w-full justify-center mb-10"
          >
            <h2 className="font-bold text-left tracking-tight pb-2 text-2xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              About me_
            </h2>
            <p className="text-justify">
              I'm Lionel, i'm {getAge()} years old a full-stack developer
              specializing in web applications, utilizing modern frameworks and
              technologies for robust solutions. I am currently working as a
              freelancer to improve my skills and grow professionally.
            </p>
          </section>
          <section
            id="#studies"
            className="flex flex-col md:max-w-[70%] w-full justify-center mb-10"
          >
            <h2 className="font-bold tracking-tight pb-2 text-2xl border-t pt-4 border-[#383838] bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Studies_
            </h2>
            <p className=" text-justify pb-4">
              I studied computer engineering and am currently developing my
              skills as a self-taught person, creating robust, large-scale
              products with best practices.
            </p>
            <h2 className="text-lg font-bold">Computer Engineering</h2>
            <p className="text-left md:text-lg sm:text-md text-[#b6b3b3] pb-4">
              Universidad Nacional de La Matanza · 2020 - In progress
            </p>
            <h2 className="text-lg font-bold">Henry Bootcamp</h2>
            <p className="text-left md:text-lg sm:text-md text-[#b6b3b3] pb-2">
              Henry · 2022
            </p>
            <p className="text-left md:text-lg sm:text-md">
              Agile (SCRUM) team developed a social network with integrated
              crowdfunding. The platform enables users to create shelters for
              animal care and receive transparent donations. Key contributions
              included:
            </p>
            <p className="text-[#b6b3b3] md:text-lg sm:text-md">
              · Front-end: Developed reusable components with best practices,
              focusing on scalability and maintainability.{" "}
            </p>
            <p className="text-[#b6b3b3] md:text-lg sm:text-md pb-4">
              · Back-end: Organized database models and managed relationships,
              along with creating and maintaining API routes for smooth
              operation.
            </p>
            <h2 className="text-lg font-bold pt-4">
              Solidity Smart Contracts Developer{" "}
            </h2>
            <p className="text-left md:text-lg sm:text-md text-[#b6b3b3] pb-2">
              Udemy · 2022
            </p>
            <p className="text-left md:text-lg sm:text-md pb-4">
              I develop and deploy secure Solidity smart contracts on platforms
              like Ethereum, integrating them with React frontends to build
              user-friendly decentralized applications (dApps).
            </p>
            <h2 className="text-lg font-bold pt-4">
              Certified Information Technology Professional (CITP){" "}
            </h2>
            <p className="text-left md:text-lg sm:text-md text-[#b6b3b3] pb-2">
              Universidad Tecnologica Nacional · 2020
            </p>
            <p className="text-left md:text-lg sm:text-md">
              As a CITP, I specialize in IT systems integration, technology
              strategy, and project management, ensuring alignment between
              technology solutions and business objectives.
            </p>
          </section>
          <section
            id="#work"
            className="flex flex-col md:max-w-[70%] w-full justify-center mb-10"
          >
            {" "}
            <h2 className="font-bold tracking-tight text-2xl pb-2 border-t pt-4 border-[#383838] bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Work_
            </h2>
            <h2 className="text-lg font-bold">Freelancer Software Developer</h2>
            <p className="text-left text-lg text-[#b6b3b3]">2022 - Present</p>
            <p className="text-left md:text-lg sm:text-md">
              As a freelance software developer, I design, build, and deploy
              scalable applications using modern technologies. I specialize in
              full-stack development, leveraging frameworks like React/Nextjs
              for frontend and Node/Springboot for backend, while ensuring best
              practices in code quality and performance.
            </p>
            <p className="text-[#b6b3b3] md:text-lg sm:text-md pb-4">
              · Tech Stack: React/Nextjs - Typescript - Node - Java - Springboot
              - MongoDB
            </p>
          </section>
          <section
            id="#projects"
            className="flex flex-col md:max-w-[70%] w-full items-center justify-center mb-10"
          >
            <Link
              href="/Projects"
              className="font-bold tracking-tight bg-[#e1e2e4] hover:bg-[#ffffff] transition duration-300 border text-xl px-4 py-2 rounded-lg text-black"
            >
              See my projects
            </Link>
          </section>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
