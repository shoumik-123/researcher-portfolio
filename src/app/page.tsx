"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  researcherInfo,
  stats,
  expertise,
  publications,
  mentors,
  images,
  socialLinks, // ✅ Add this
  achievements,
  professionalMentors,
  academicMentors, // ✅ Add this
} from "@/lib/data";

// Image paths
const profileImage = "/images/profile.jpg";
const achievementImages = [
  "/images/achievement-1.jpg",
  "/images/achievement-2.jpg",
];

export default function Home() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1); // restart animation
    }, 4000); // duration of full typing cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* HERO */}
      <section className="pt-28 pb-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h1
            key={key}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight uppercase mb-4 flex justify-center flex-wrap leading-tight"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {researcherInfo.name.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-600 mt-3"
          >
            {researcherInfo.title}
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Profile Image and Info (30%) */}
          <div className="lg:w-[30%] py-16">
            <div className="sticky top-24 space-y-8">
              {/* Circular Profile Image */}
              <div className="relative w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                <Image
                  src={profileImage}
                  alt={researcherInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Name and Title below image */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-light text-gray-900 mb-2">
                  {researcherInfo.name}
                </h2>
                <p className="text-lg text-gray-500 font-light">
                  {researcherInfo.title}
                </p>
              </div>

              {/* CV Link */}
              <div className="text-center lg:text-left">
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                >
                  <span>Curriculum vitae</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Email */}
              <div className="text-center lg:text-left">
                <a
                  href={`mailto:${researcherInfo.email}`}
                  className="text-gray-600 hover:text-primary transition-colors text-sm break-all"
                >
                  {researcherInfo.email}
                </a>
              </div>

              {/* Science thrives on collaboration text */}
              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Science thrives on collaboration and critical discussion. If
                  you're curious to learn more about my work, open to engaging
                  with my mission, or interested in building a shared vision,
                  I'd love to hear from you. Please get in touch via email or
                  through one of the platforms below.
                </p>
              </div>

              {/* Social/Professional Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-gray-600"
                    title={link.title}
                  >
                    <span className="text-sm font-medium">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - All Content (70%) */}
          <div className="lg:w-[70%] py-16 space-y-16">
            {/* Home Section */}
            <section className="space-y-8">
              <div className="space-y-8">
                {/* Welcome note */}
                {/* <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Welcome note:
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {researcherInfo.longBio?.split('\n\n')[0] || 
                      `I am ${researcherInfo.name}, an interdisciplinary environmental researcher working at the intersection of sustainable materials science, waste-to-resource innovation, and circular economy systems.`}
                  </p>
                </div> */}

                {/* My research */}
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Professional Overview
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    I’m Hasan Ahmed, an Environmental Specialist and
                    Interdisciplinary Researcher with over 4 years of combined
                    research and professional experience, including 15 months as
                    Technical Expert (Environment) and Bangladesh Country
                    Technical Focal Point at UNOPS. I specialize in transforming
                    industrial, biomedical, and food waste into high-value
                    sustainable materials through lab-based chemical
                    modification, biopolymer development, and circular economy
                    solutions. My expertise spans bioplastics, polymer
                    composites, biomedical hydrogels, environmental remediation,
                    and microbiology—with a particular focus on combating
                    antibiotic-resistant microbes and ocean-bound plastic
                    pollution. Professionally, I provided technical leadership
                    for the World Bank-funded, SACEP-supported $3.18 million
                    PLEASE project at UNOPS. I led the development of plastic
                    recycling systems, Environmental and Social Management Plans
                    (ESMPs), and scalable circular economy models across South
                    Asia. This role strengthened my ability to bridge scientific
                    innovation with large-scale project implementation,
                    stakeholder coordination, and donor-compliant environmental
                    governance. My research integrates materials science,
                    environmental engineering, and public health to create
                    practical, waste-derived technologies that address
                    real-world sustainability challenges. I always new
                    opportunities within the United Nations system where I could
                    apply my proven project management, technical advisory, and
                    circular economy expertise at a regional or global level.
                    Simultaneously, I also warmly welcome PhD opportunities to
                    deepen my research in sustainable materials and
                    waste-to-resource innovation, aiming to advance cutting-edge
                    solutions that contribute to global environmental and
                    climate goals.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 text-justify p-4 bg-fuchsia-50">
                    My mission is to pursue rigorous, multidisciplinary research
                    that bridges science, technology, and real-world
                    implementation. I aim to develop scalable environmental
                    technologies that transform waste into valuable resources
                    while protecting ecosystems and public health.{" "}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 text-justify p-4 bg-amber-50">
                    My vision is to contribute to a circular and regenerative
                    environmental future, where sustainable materials,
                    innovative recycling systems, and collaborative research
                    play a central role in building resilient communities and a
                    healthier planet.
                  </p>
                </div>
              </div>
            </section>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* The roots of my research */}
            <section className="space-y-6">
              <h2 className="text-3xl font-light text-gray-900">
                The roots of my research
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  My research journey began in 2020 when I joined Khulna
                  University of Engineering & Technology (KUET) as a research
                  associate. During this period, I discovered my passion for
                  biopolymers and sustainable material science, exploring
                  biodegradable polymer composites as alternatives to
                  conventional plastics. As my research evolved, I expanded into
                  biomedical material development, including wound-healing
                  biomaterials and hydrogels. Collaborations with researchers
                  from the University of Dhaka and BUET helped me develop
                  interdisciplinary expertise across materials science,
                  biomedical engineering, and environmental sustainability.
                  Recognizing the importance of microbiology and analytical
                  techniques in environmental research, I later joined the
                  Centre for Advanced Research in Sciences (CARS), University of
                  Dhaka, where I worked on microbial identification,
                  antibiotic-resistant microorganisms, and environmental
                  microbiology using advanced analytical tools such as AAS and
                  HPLC. These experiences strengthened my commitment to
                  developing innovative materials and technologies derived from
                  waste resources, integrating environmental science, material
                  engineering, and public health considerations.
                </p>
              </div>
            </section>

            {/* Personal & Academic Engagement */}
            <section className="space-y-6">
              <h2 className="text-3xl font-light text-gray-900">
                Private Life
              </h2>

              <p className="text-gray-700 leading-relaxed text-justify">
                Beyond my work, I cherish time with my beautiful wife and our
                baby daughter, who bring joy and balance to my life. I also
                share my home with my cat and two lovely birds. In my free time,
                I love exploring the countryside, going on adventures, spending
                time with orphans and underprivileged children, and running
                through open fields. These moments in nature help me recharge
                and stay grounded while working on global environmental
                challenges.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 pb-32 space-y-28 text-lg leading-relaxed text-gray-800">
        {/* RESEARCH METRICS - FLEX ROW */}
        <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-gray-50 py-20 my-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold uppercase tracking-wide text-center mb-12">
              Research Metrics
            </h2>
            <div className="flex flex-row flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex-shrink-0 text-center min-w-[120px]"
                >
                  <div className="text-5xl font-light text-gray-900">
                    {item.value}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-gray-500 mt-2 whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AREAS OF EXPERTISE */}
        <section className="space-y-10">
          <h2 className="text-5xl font-bold uppercase tracking-wide text-center">
            Areas of Expertise
          </h2>
          <ul className="space-y-5 max-w-3xl mx-auto">
            {expertise.map((item) => (
              <li
                key={item.name}
                className="text-xl font-light border-l-4 border-gray-300 pl-6 py-1"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-16">
  <h2 className="text-5xl font-bold uppercase tracking-wide text-center">
    Mentors & Colleagues
  </h2>

  <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
    {/* Professional Mentors - Left Column */}
    <div className="flex-1">
      <h3 className="text-3xl font-semibold mb-6">Professional Mentors & Colleagues</h3>
      <ul className="space-y-5">
        {professionalMentors.map((item, i) => (
          <li
            key={i}
            className="text-xl font-light border-l-4 border-gray-300 pl-6 py-1"
          >
            <span className="font-medium">{item.name}</span>
            <span className="text-gray-600"> — {item.role}</span>
            <br />
            <span className="text-gray-500 text-lg">{item.project}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Academic Mentors - Right Column */}
    <div className="flex-1">
      <h3 className="text-3xl font-semibold mb-6">Academic Mentors</h3>
      <ul className="space-y-5">
        {academicMentors.map((item, i) => (
          <li
            key={i}
            className="text-xl font-light border-l-4 border-gray-300 pl-6 py-1"
          >
            <span className="font-medium">{item.name}</span>
            <span className="text-gray-600"> ({item.role})</span>
            <br />
            <span className="text-gray-500 text-lg">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>




        {/* KEY ACHIEVEMENTS */}
        <section className="space-y-16">
          <h2 className="text-5xl font-bold uppercase tracking-wide text-center">
            Key Achievements
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Research Impact - Left Column */}
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-6">Research Impact</h3>
              <ul className="space-y-5">
                {achievements.researchImpact.map((item, i) => (
                  <li
                    key={i}
                    className="text-xl font-light border-l-4 border-gray-300 pl-6 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Leadership - Right Column */}
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-6">
                Professional Leadership
              </h3>
              <ul className="space-y-5">
                {achievements.professionalLeadership.map((item, i) => (
                  <li
                    key={i}
                    className="text-xl font-light border-l-4 border-gray-300 pl-6 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {achievementImages.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-10 mt-12">
              {achievementImages.map((src, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={src}
                    alt={`Professional achievement ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ACADEMIC MENTORS */}
        <section className="space-y-16">
          <h2 className="text-5xl font-bold uppercase tracking-wide text-center">
            Academic Mentors & Influences
          </h2>

          <div className="space-y-16">
            {mentors.map((mentor, i) => (
              <div key={i} className="border-l-4 border-gray-400 pl-6 py-2">
                <p className="text-2xl font-semibold">{mentor.name}</p>
                <p className="text-gray-600 mt-1">
                  {mentor.title}{" "}
                  {mentor.organization && `, ${mentor.organization}`}
                </p>
                <p className="italic text-gray-700 mt-4">
                  "{mentor.description}"
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
