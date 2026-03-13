import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  FiAward,
  FiBook,
  FiUsers,
  FiStar,
  FiBriefcase,
  FiMapPin,
  FiMail,
  FiTrendingUp,
  FiFileText,
  FiGlobe,
  FiCpu,
  FiDroplet,
  FiRefreshCw,
} from "react-icons/fi";

export default function Home() {
  // Professional data organization
  const expertise = [
    {
      name: "Bioplastics & Polymer Technology",
      icon: <FiCpu className="text-primary" />,
    },
    {
      name: "Environmental Toxicology & Remediation",
      icon: <FiDroplet className="text-secondary" />,
    },
    {
      name: "Soil & Water Quality Management",
      icon: <FiRefreshCw className="text-accent" />,
    },
    {
      name: "Circular Economy Systems",
      icon: <FiRefreshCw className="text-warm" />,
    },
    { name: "ESMP, EIA, ESS", icon: <FiFileText className="text-primary" /> },
    {
      name: "Plastic Recycling & Materials Recovery",
      icon: <FiGlobe className="text-secondary" />,
    },
    {
      name: "Solid Waste Management",
      icon: <FiTrendingUp className="text-accent" />,
    },
    {
      name: "Circular Economy Innovations",
      icon: <FiCpu className="text-warm" />,
    },
  ];

  const stats = [
    { value: "98.7", label: "Research Score", icon: <FiStar /> },
    { value: "1.85K", label: "Reads", icon: <FiBook /> },
    { value: "70+", label: "Citations", icon: <FiAward /> },
    { value: "8+", label: "Publications", icon: <FiFileText /> },
    { value: "6+", label: "Conferences", icon: <FiUsers /> },
    { value: "11+", label: "ESMPs Led", icon: <FiGlobe /> },
  ];

  const achievements = [
    {
      category: "Research Impact",
      items: [
        "98.7 Research Interest Score",
        "1,850+ reads across 30+ countries",
        "70+ citations in Scopus-indexed journals",
        "8+ international publications",
        "6+ conference presentations",
        "2+ research posters",
      ],
    },
    {
      category: "Professional Leadership",
      items: [
        "Technical guidance for 7 Recycling Business Units (RBUs) - BPCL",
        "SUP Recycling Facility with ETP - BRAC (large-scale industry)",
        "Mobile monitoring app development - Arnnyak Foundation & BPCL",
        "11+ ESMPs developed & monitored (World Bank approved)",
        "4+ Environmental Screening (ESS) reports",
        "$3.18M PLEASE Project technical focal point",
      ],
    },
  ];

  const professionalMentors = [
    {
      name: "Jaime Alarma Olmos",
      role: "Project Management Specialist",
      org: "PLEASE Project · UNOPS",
    },
    {
      name: "Sivakumaran Sithamparanathan",
      role: "Technical Specialist",
      org: "PLEASE Project, UNOPS SAMCO",
    },
    {
      name: "Obidul Islam",
      role: "Project Manager",
      org: "SACEP PLEASE Project, UNOPS SAMCO",
    },
    { name: "Labio Bala", role: "Finance Specialist", org: "UNOPS Vienna" },
    { name: "Khadem Yousuf", role: "CEO", org: "BPCL" },
    {
      name: "Nusrat Jahan",
      role: "Project Management Officer",
      org: "UNOPS PLEASE Project, Bangladesh",
    },
    {
      name: "Nusrat Shaheen",
      role: "Technical Expert",
      org: "UNOPS PLEASE Project, Bhutan",
    },
  ];

  const academicMentors = [
    {
      name: "Suman Dewanjee",
      role: "PhD Fellow",
      org: "Virginia Tech",
      desc: "A pivotal figure who reshaped my life's trajectory, bringing clarity, purpose, and dedication to research",
      influence: "Life-changing mentor",
    },
    {
      name: "Dr. Tarek Arafat",
      role: "Head of BME",
      org: "BUET",
      desc: "In challenging times, his generosity and mentorship reignited my passion for research.",
      influence: "Research catalyst",
    },
    {
      name: "Dr. Latiful Bari",
      role: "Chief Scientist",
      org: "CARS, University of Dhaka",
      desc: "As his research assistant, I learned discipline and impactful research, making him my lifelong role model.",
      influence: "Discipline & rigor",
    },
    {
      name: "Dr. Asma Rahman",
      role: "Principal Scientist",
      org: "CARS, University of Dhaka",
      desc: "Provided invaluable opportunities to work in her lab, greatly enhancing my skills and knowledge.",
      influence: "Skill development",
    },
  ];

  // Image URLs (replace with your actual paths after downloading)
  const profileImageUrl = "/images/profile.jpg"; // Update this path
  const achievementImage1 = "/images/achievement-1.jpg";
  const achievementImage2 = "/images/achievement-2.jpg";
  const heroBackgroundUrl = "/images/achievement-2.jpg";

  const gratitudeImages = [
    "/images/gratitude-1.jpg",
    "/images/gratitude-2.jpg",
    "/images/gratitude-3.jpg",
    "/images/gratitude-4.jpg",
    "/images/gratitude-5.jpg",
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-[40vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackgroundUrl})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </section>{" "}
<Container>
  <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
    {/* Left Column - Profile Image (30%) */}
{/* Left Column - Profile Image and Info (30%) */}
<div className="lg:w-[30%] py-16">
  <div className="sticky top-24 space-y-8">
    {/* Circular Profile Image */}
    <div className="relative w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
      <Image
        src={profileImageUrl}
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
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
        Science thrives on collaboration and critical discussion. If you're curious to learn more about my work, open to engaging with my mission, or interested in building a shared vision, I'd love to hear from you. Please get in touch via email (see above) or through one of the platforms below.
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
            <p className="text-gray-700 leading-relaxed">
              {/* Add your welcome note content here */}
            </p>
          </div>

          {/* My research */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              My research:
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              My <strong>research</strong> is at the intersection of
              health, exercise, and technology, focusing on the
              co-development, evaluation, and implementation of
              personalized "<strong>wage/me as machine</strong>" programs
              for the rehabilitation of neurodegenerative disorders.
            </p>

            <div className="space-y-6">
              {/* Mission with bullet */}
              <div className="flex gap-4">
                <span className="text-2xl text-gray-400">•</span>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>My mission</strong> is to pursue
                    multidisciplinary, patient-centered research with
                    solid theoretical foundations – from mechanistic
                    research on non-cognitive integration, its translation
                    into holistic engagement, and their implementation in
                    healthcare.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed pl-8">
                To make the most out of this process, I put a strong
                emphasis on the involvement of all relevant research
                bodies throughout all project stages. This includes the
                targeted primary end-users (e.g., patients), secondary
                end-users (e.g., exercise or therapy practitioners,
                relatives and supporters of primary end-users), other
                research institutions, (practitioners) private
                institutions, technology developers, technology providers,
                and additional interested bodies, such as patient advocacy
                groups, funding bodies, policy makers, and end-user
                representatives.
              </p>

              {/* Vision with bullet */}
              <div className="flex gap-4">
                <span className="text-2xl text-gray-400">•</span>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>My vision</strong> is to embed motor-cognitive
                    exercise as an integral part of everyday healthcare to
                    promote active aging and a high quality of life – by
                    equipping patients and healthcare professionals with
                    the knowledge, concepts, and technologies for
                    effective and accessible health promotion and disease
                    prevention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* The roots of my passion for research */}
      <section className="space-y-6">
        <h2 className="text-3xl font-light text-gray-900">
          The roots of my passion for research:
        </h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            My passion for research began during my time as a competitive
            track and field athlete. I was particularly drawn to technical
            sports disciplines such as javelin throwing and pole vaulting,
            where I sought to optimize my training routines to perfect my
            technique and maximize performance.
          </p>

          <p>
            To further develop my knowledge and use it to make a tangible
            impact in the real world, this journey led me to become a
            professional fitness trainer, allowing me to use my expertise
            to help others achieve their goals and improve their health.
            Over three years, I developed a particular fascination with
            the broader effects of physical activity and exercise beyond
            the neuromuscular system. This realization inspired me to
            pursue a career as an academic researcher with the goal of one
            day advancing knowledge about the role of physical activity
            and exercise in health promotion and disease prevention.
          </p>

          <p>
            To this end, I started studying Health Sciences and Technology
            at ETH Zurich in 2016 and started contributing to research
            early on as a research assistant. During my Master's degree, I
            had the opportunity to contribute to a project that developed
            and evaluated an ergometer-based motor-cognitive training
            device called "<strong>wage/me as machine</strong>". It was
            the first of its kind to be used in a clinical setting and has
            been widely adopted in the UK. In addition, I have also worked
            on projects related to the development of wearable devices for
            monitoring physical activity, including a study on the
            effectiveness of a novel sensor platform designed to monitor
            physical activity levels. These studies have demonstrated the
            potential of wearable sensors for improving physical activity
            levels and promoting healthy lifestyles.
          </p>

          <p>
            Fortunately, I was given the opportunity to continue on this
            path by completing my Dr. Sc. ETH Science Award 2020 and April
            2021 in the laboratory of Prof. Dr. Gün D. de Bruin. I
            contributed the design, development, and evaluation of the
            Wearable Sensor Platform concept for the measurement of mild
            neurocognitive disorder. This process resulted in a new
            intervention type specifically targeting various relevant
            mechanisms of action to alleviate the pathological state of
            mild neurocognitive disorder by combining an individually
            tailored wearable-based motor-cognitive training with
            biofeedback-guided resistance breathing. This project was very
            successful and continues to be the lead and has definitely
            reinforced my calling as an academic researcher.
          </p>
        </div>
      </section>

      {/* My private life */}
      <section className="space-y-6">
        <h2 className="text-3xl font-light text-gray-900">
          My private life:
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Outside of life as a researcher, I am still a sports enthusiast
          (in particular tennis), although no longer competitively). I
          enjoy taking baths (rather than the Swedish call Sauna here),
          watching documentaries, and spending time with friends and
          family. Including my two cats, Daisy and Stella. These
          activities help me maintain a balanced and fulfilling lifestyle.
        </p>
      </section>
    </div>
  </div>
</Container>
      <Container>
        {/* Stats Section - Enhanced Cards */}
        <section className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-2xl text-primary/60 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-light text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section - Timeline Style */}
        <section className="py-16">
          <h2 className="text-3xl font-light text-gray-900 mb-12 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
            Education & Research Training
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-medium mb-2">
                B.Sc. Leather Engineering
              </h3>
              <p className="text-primary mb-2">KUET, Bangladesh</p>
              <p className="text-gray-600 text-sm">
                Specialized in microbiology and toxicology; initiated research
                on polymer composites for waste valorization.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-secondary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
              <h3 className="text-xl font-medium mb-2">
                Research Collaborations
              </h3>
              <p className="text-secondary mb-2">DU, JUST, BUET</p>
              <p className="text-gray-600 text-sm">
                Guided master's research in biomedicine and physics; contributed
                to biomedical material studies.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-accent/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
              <h3 className="text-xl font-medium mb-2">
                M.Sc. Soil, Water & Environment
              </h3>
              <p className="text-accent mb-2">University of Dhaka</p>
              <p className="text-gray-600 text-sm">
                Enhanced expertise in environmental policy, sustainability, and
                waste management solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Key Achievements - Split Layout */}
        <section className="py-16">
          <h2 className="text-3xl font-light text-gray-900 mb-12 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
            Key Achievements & Impact
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {achievements.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-medium mb-6 text-primary">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FiAward
                        className="text-primary/40 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Achievement Images */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image
                src={achievementImage1}
                alt="Recycling Facility"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-medium">
                  SUP Recycling Facility - BRAC
                </p>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image
                src={achievementImage2}
                alt="ESMP Work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-medium">
                  Environmental Screening - World Bank
                </p>
              </div>
            </div>
          </div>
        </section>

{/* Technical Expertise */}
<section className="py-16">
  <h2 className="text-2xl font-light text-gray-900 mb-8">
    Technical Expertise
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
    {expertise.map((item, index) => (
      <div
        key={index}
        className="flex items-start gap-3"
      >
        <span className="text-gray-400 text-lg mt-0.5">
          {item.icon}
        </span>
        <span className="text-gray-700 font-light text-base leading-relaxed">
          {item.name}
        </span>
      </div>
    ))}
  </div>
</section>

        {/* Gratitude Section - Mentors Grid */}
        <section className="py-16">
          <h2 className="text-3xl font-light text-gray-900 mb-12 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
            Gratitude & Mentorship
          </h2>

          <p className="text-gray-600 mb-12 max-w-3xl text-lg">
            I am deeply grateful to my incredible colleagues and mentors whose
            guidance and support have been instrumental in shaping my
            professional journey.
          </p>

          {/* Gratitude Images Grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-16">
            {gratitudeImages.map((url, index) => (
              <div
                key={index}
                className="relative h-40 rounded-lg overflow-hidden"
              >
                <Image
                  src={url}
                  alt={`Mentor ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Professional Mentors */}
          <h3 className="text-2xl font-light mb-8 flex items-center gap-2">
            <FiUsers className="text-primary" />
            Professional Mentors & Colleagues
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {professionalMentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {mentor.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{mentor.name}</h4>
                    <p className="text-sm text-primary mt-1">{mentor.role}</p>
                    <p className="text-xs text-gray-500 mt-1">{mentor.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Mentors - Quote Style */}
          <h3 className="text-2xl font-light mb-8 flex items-center gap-2">
            <FiBook className="text-secondary" />
            Academic Mentors
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {academicMentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 relative"
              >
                <div className="absolute -top-3 left-6 text-4xl text-primary/20">
                  "
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold">
                      {mentor.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium">{mentor.name}</h4>
                      <p className="text-xs text-gray-500">
                        {mentor.role}, {mentor.org}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic leading-relaxed">
                    "{mentor.desc}"
                  </p>
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs rounded-full">
                      {mentor.influence}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
