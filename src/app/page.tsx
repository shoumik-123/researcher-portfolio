"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// ───────────────────────────────────────────────
// All data arrays are defined here at the top
// You can later move this block to: data/profileData.ts
// and import like: import { stats, expertise, achievements, mentors } from '@/data/profileData';
// ───────────────────────────────────────────────

const stats = [
  { value: "98.7", label: "Research Score" },
  { value: "1.85K", label: "Reads" },
  { value: "70+", label: "Citations" },
  { value: "8+", label: "Publications" },
  { value: "6+", label: "Conferences" },
] as const;

const expertise = [
  "Circular Plastic Economy",
  "Ocean-bound Plastic Recycling",
  "Advanced Composite Materials",
  "Environmental & Social Management Plans (ESMP)",
  "Environmental Impact Assessment (EIA) & ESS Compliance",
  "Soil & Water Quality Management",
  "Sustainable Waste Management Systems",
  "Circular Economy Innovations",
] as const;

const achievements = {
  researchImpact: [
    "98.7 Research Interest Score",
    "1,850+ reads across more than 30 countries",
    "70+ citations in Scopus-indexed journals",
    "8+ international peer-reviewed publications",
    "6+ conference presentations and 2+ research posters",
  ],
  professionalLeadership: [
    "Technical guidance for multiple plastic recycling facilities (BPCL, BRAC, others)",
    "11+ ESMPs developed, implemented and monitored (World Bank approved)",
    "Environmental & Social Screening (ESS) reports prepared for UNOPS projects",
    "Technical Focal Point for $3.18 million Climate Mitigation Project",
  ],
} as const;
const name = "Hasan Ahmed";
const mentors = [
  {
    name: "Prof. Obaid Alharabi",
    position: "Assistant Research Professor, KACST, Saudi Arabia",
    quote:
      "Inspired my research direction in emerging contaminants and environmental analytics.",
    tag: "Research guidance",
  },
  {
    name: "Dr. Latiful Bari",
    position: "Chief Scientist, CARS, University of Dhaka",
    quote:
      "Mentored my work in environmental materials and lab-based research.",
    tag: "Discipline & rigor",
  },
  {
    name: "Dr. Asma Rahman",
    position: "Principal Scientist, CARS, University of Dhaka",
    quote: "Provided invaluable opportunities to enhance my technical skills.",
    tag: "Skill development",
  },
] as const;

// Image paths (also easy to move to data file or env)
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
      className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase mb-4 flex justify-center flex-wrap"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {name.split("").map((letter, index) => (
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
          Environmental Engineer | Circular Economy Researcher
        </motion.p>

      </div>
    </section>



      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Profile Image (30%) */}
          {/* Left Column - Profile Image and Info (30%) */}
          <div className="lg:w-[30%] py-16">
            <div className="sticky top-24 space-y-8">
              {/* Circular Profile Image */}
              <div className="relative w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                <Image
                  src={profileImage}
                  alt="Hasan Ahmed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Name and Title below image */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-light text-gray-900 mb-2">
                  Hasan Ahmed
                </h2>
                <p className="text-lg text-gray-500 font-light">
                  Interdisciplinary Researcher
                </p>
              </div>

              {/* CV Link */}
              <div className="text-center lg:text-left">
                <a
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
                </a>
              </div>

              {/* Email */}
              <div className="text-center lg:text-left">
                <a
                  href="mailto:hasan.kuet16@gmail.com"
                  className="text-gray-600 hover:text-primary transition-colors text-sm break-all"
                >
                  hasan.kuet16@gmail.com
                </a>
              </div>

              {/* Science thrives on collaboration text */}
              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Science thrives on collaboration and critical discussion. If
                  you're curious to learn more about my work, open to engaging
                  with my mission, or interested in building a shared vision, I'd
                  love to hear from you. Please get in touch via email (see above)
                  or through one of the platforms below.
                </p>
              </div>

              {/* Social/Professional Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <a
                  href="https://linkedin.com/in/hasan27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-gray-600"
                  title="LinkedIn"
                >
                  <span className="text-sm font-medium">in</span>
                </a>

                <a
                  href="https://researchgate.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-gray-600"
                  title="ResearchGate"
                >
                  <span className="text-sm font-medium">RG</span>
                </a>

                <a
                  href="https://publons.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-gray-600"
                  title="Web of Science"
                >
                  <span className="text-sm font-medium">WoS</span>
                </a>

                <a
                  href="https://orcid.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-gray-600"
                  title="ORCID"
                >
                  <span className="text-sm font-medium">ORCID</span>
                </a>

                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-gray-600"
                  title="Google Scholar"
                >
                  <span className="text-sm font-medium">GS</span>
                </a>

                <a
                  href="https://ki.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-gray-600"
                  title="Institutional Web Page"
                >
                  <span className="text-sm font-medium">I</span>
                </a>
              </div>
            </div>
          </div>

{/* Right Column - All Content (70%) */}
<div className="lg:w-[70%] py-16 space-y-16">
  {/* Home Section */}
  <section className="space-y-8">
    <div className="space-y-8">
      {/* Welcome note */}
      <div>
        <h3 className="text-2xl font-light text-gray-900 mb-4">
          Welcome note:
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          I am Hasan Ahmed, an
          interdisciplinary environmental researcher working at the
          intersection of sustainable materials science, waste-to-resource
          innovation, and circular economy systems. My work focuses on
          transforming environmental challenges such as plastic pollution,
          industrial waste, and biomedical waste into opportunities for
          sustainable technological solutions. Through research,
          collaboration, and real-world implementation, I aim to contribute to
          innovative solutions that protect ecosystems, improve public
          health, and support resilient communities.
        </p>
      </div>

      {/* My research */}
      <div>
        <h3 className="text-2xl font-light text-gray-900 mb-4">
          My research:
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4 text-justify">
          My <strong>research</strong> focuses on developing advanced materials
          and environmental technologies derived from waste resources,
          integrating environmental science, materials engineering, and public
          health considerations. My work explores innovative solutions such as
          bioplastics and biodegradable polymer composites, waste-derived
          polymer and nanocomposite materials, biomedical hydrogels,
          nanomaterials for environmental remediation, and sustainable
          waste-to-resource technologies that support circular economy systems.
        </p>

        <div className="space-y-6">
          {/* Mission */}
          <div className="flex gap-4">
            <span className="text-2xl text-gray-400">•</span>
            <div>
              <p className="text-gray-700 leading-relaxed text-justify">
                <strong>My mission</strong> is to pursue rigorous,
                multidisciplinary research that bridges science, technology,
                and real-world environmental implementation. I aim to develop
                scalable and sustainable technologies that transform waste
                into valuable resources while protecting ecosystems,
                improving public health, and supporting resilient
                communities.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed pl-8 text-justify">
            Through collaborative research, practical project implementation,
            and interdisciplinary engagement, I seek to contribute to
            innovative environmental solutions that address global
            sustainability challenges and promote responsible resource
            management.
          </p>

          {/* Vision */}
          <div className="flex gap-4">
            <span className="text-2xl text-gray-400">•</span>
            <div>
              <p className="text-gray-700 leading-relaxed text-justify">
                <strong>My vision</strong> is to contribute to a circular and
                regenerative environmental future where sustainable materials,
                advanced recycling systems, and interdisciplinary research
                drive sustainable development. I aspire to support the
                transition toward resource-efficient societies where
                environmental innovation helps reduce pollution, conserve
                natural resources, and promote a healthier planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Divider */}
  <hr className="border-gray-200" />

  {/* The roots of my research */}
  <section className="space-y-6">
    <h2 className="text-3xl font-light text-gray-900">
      The roots of my research:
    </h2>

    <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
      <p>
        My research journey began in 2020 at Khulna University of Engineering
        & Technology (KUET), where I worked as a research associate. During
        this time, I developed a strong interest in biopolymers and
        sustainable material science, particularly focusing on biodegradable
        polymer composites as alternatives to conventional plastics.
      </p>

      <p>
        As my research evolved, I expanded my work into biomedical materials,
        including wound-healing biomaterials and hydrogels. Collaborative
        research with scholars from the University of Dhaka and the
        Bangladesh University of Engineering and Technology (BUET) helped me
        develop interdisciplinary expertise across materials science,
        biomedical engineering, and environmental sustainability.
      </p>

      <p>
        Recognizing the importance of microbiology and advanced analytical
        techniques in environmental research, I later joined the Centre for
        Advanced Research in Sciences (CARS) at the University of Dhaka.
        There, I worked on microbial identification, antibiotic-resistant
        microorganisms, and environmental microbiology using advanced
        analytical instruments such as Atomic Absorption Spectroscopy (AAS)
        and High-Performance Liquid Chromatography (HPLC).
      </p>

      <p>
        These experiences strengthened my commitment to developing innovative
        materials and technologies derived from waste resources and applying
        them to real-world environmental challenges through interdisciplinary
        research and sustainable innovation.
      </p>
    </div>
  </section>

  {/* Personal & Academic Engagement */}
  <section className="space-y-6">
    <h2 className="text-3xl font-light text-gray-900">
      Personal & Academic Engagement:
    </h2>

    <p className="text-gray-700 leading-relaxed text-justify">
      Beyond my professional and academic work, I am passionate about
      mentoring students and supporting emerging researchers, particularly
      undergraduate students working on thesis and research projects. I
      enjoy sharing knowledge, guiding young researchers, and helping them
      develop the analytical and research skills needed for impactful
      careers in science and innovation.
    </p>

    <p className="text-gray-700 leading-relaxed">
      In my personal time, I enjoy reading scientific literature, exploring
      new research ideas, and working on academic writing projects.
      Currently, I am developing a knowledge-hub book aimed at integrating
      multiple engineering disciplines for development professionals, with
      the goal of promoting interdisciplinary understanding and innovation.
    </p>

    <p className="text-gray-700 leading-relaxed">
      These activities help me maintain a balanced and meaningful life while
      continuing to pursue my long-term goal of contributing to sustainable
      innovation, environmental protection, and global environmental
      problem-solving.
    </p>
  </section>
</div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 pb-32 space-y-28 text-lg leading-relaxed text-gray-800">
        {/* RESEARCH FOCUS */}
        <section className="space-y-10 text-justify">
          <h2 className="text-5xl font-bold uppercase tracking-wide text-center mb-10">
            Research Focus
          </h2>
          <p>
            My research integrates environmental engineering, circular economy
            principles, and sustainable materials science. I specialize in
            transforming ocean-bound plastics into high-value composite
            materials, developing robust Environmental and Social Management
            Plans (ESMPs), and delivering practical waste management solutions
            aligned with UN SDGs and international environmental standards.
          </p>
          <p>
            The central aim is to develop scalable, evidence-based interventions
            that reduce plastic pollution, protect marine and terrestrial
            ecosystems, and contribute meaningfully to climate change mitigation
            and long-term resource efficiency.
          </p>
        </section>

        {/* RESEARCH METRICS */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold uppercase tracking-wide text-center">
            Research Metrics
          </h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 text-center">
            {stats.map((item) => (
              <div key={item.label} className="min-w-[120px]">
                <div className="text-5xl font-light text-gray-900">
                  {item.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
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
                key={item}
                className="text-xl font-light border-l-4 border-gray-300 pl-6 py-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* KEY ACHIEVEMENTS */}
        <section className="space-y-16">
          <h2 className="text-5xl font-bold uppercase tracking-wide text-center">
            Key Achievements
          </h2>

          <div className="space-y-14">
            <div>
              <h3 className="text-3xl font-semibold mb-6">Research Impact</h3>
              <ul className="space-y-4 list-disc pl-8 marker:text-gray-500">
                {achievements.researchImpact.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6">
                Professional Leadership
              </h3>
              <ul className="space-y-4 list-disc pl-8 marker:text-gray-500">
                {achievements.professionalLeadership.map((item, i) => (
                  <li key={i}>{item}</li>
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
                <p className="text-gray-600 mt-1">{mentor.position}</p>
                <p className="italic text-gray-700 mt-4">“{mentor.quote}”</p>
                <p className="text-sm uppercase tracking-wider text-gray-500 mt-3">
                  {mentor.tag}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <section className="text-center pt-20 border-t border-gray-200 space-y-10">
          <Link
            href="/cv"
            className="inline-block px-12 py-5 bg-gray-900 text-white text-xl font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            View Full Curriculum Vitae →
          </Link>

          <div className="space-y-5">
            <a
              href="mailto:hasan.kuet16@gmail.com"
              className="block text-2xl text-gray-700 hover:text-gray-900 transition-colors"
            >
              hasan.kuet16@gmail.com
            </a>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I welcome inquiries regarding research collaborations, project
              consultations, technical reviews, or discussions on circular
              economy and sustainable materials solutions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
