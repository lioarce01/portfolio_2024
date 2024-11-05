"use client";

import React from "react";

const About = () => {
  const getAge = () => {
    return new Date().getFullYear() - new Date("May 01, 99").getFullYear();
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          About me_
        </h2>
        <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm Lionel, a {getAge()} year old full-stack developer with a
            passion for crafting exceptional web experiences. I specialize in
            building scalable applications that combine elegant design with
            robust functionality. Currently working as a freelancer, I'm
            constantly pushing the boundaries of what's possible in web
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
