"use client";

import React from "react";
//@ts-ignore
import { GraduationCap, Book, Code } from "lucide-react";

const Education = () => (
  <section id="education" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        Education_
      </h2>

      <div className="relative border-l-2 border-green-500/30 pl-8 ml-4 space-y-12">
        <EducationItem
          icon={<GraduationCap />}
          title="Computer Engineering"
          institution="Universidad Nacional de La Matanza"
          period="2020 - In progress"
        />

        <EducationItem
          icon={<Book />}
          title="Henry Bootcamp"
          institution="Henry"
          period="2022"
          description="Led agile team development of a social network with integrated crowdfunding for animal shelters. Focused on scalable architecture and clean code practices."
        />

        <EducationItem
          icon={<Code />}
          title="Solidity Smart Contracts Developer"
          institution="Udemy"
          period="2022"
          description="Specialized in developing and deploying secure smart contracts on Ethereum, creating user-friendly dApps with React integration."
        />
      </div>
    </div>
  </section>
);

interface EducationItemProps {
  icon: React.ReactNode;
  title: string;
  institution: string;
  period: string;
  description?: string;
}

const EducationItem = ({
  icon,
  title,
  institution,
  period,
  description,
}: EducationItemProps) => (
  <div className="relative">
    <div className="absolute -left-[44px] p-2 bg-green-500 rounded-full">
      {icon}
    </div>
    <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-3">
        {institution} · {period}
      </p>
      {description && <p className="text-gray-300">{description}</p>}
    </div>
  </div>
);

export default Education;
