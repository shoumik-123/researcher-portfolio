import Image from 'next/image';
import Container from '@/components/ui/Container';
import { 
  FiAward, FiBook, FiUsers, FiStar, FiBriefcase, 
  FiMapPin, FiMail, FiTrendingUp, FiFileText, 
  FiGlobe, FiCpu, FiDroplet, FiRefreshCw 
} from 'react-icons/fi';

export default function Home() {
  // Professional data organization
  const expertise = [
    { name: "Bioplastics & Polymer Technology", icon: <FiCpu className="text-primary" /> },
    { name: "Environmental Toxicology & Remediation", icon: <FiDroplet className="text-secondary" /> },
    { name: "Soil & Water Quality Management", icon: <FiRefreshCw className="text-accent" /> },
    { name: "Circular Economy Systems", icon: <FiRefreshCw className="text-warm" /> },
    { name: "ESMP, EIA, ESS", icon: <FiFileText className="text-primary" /> },
    { name: "Plastic Recycling & Materials Recovery", icon: <FiGlobe className="text-secondary" /> },
    { name: "Solid Waste Management", icon: <FiTrendingUp className="text-accent" /> },
    { name: "Circular Economy Innovations", icon: <FiCpu className="text-warm" /> }
  ];

  const stats = [
    { value: "98.7", label: "Research Score", icon: <FiStar /> },
    { value: "1.85K", label: "Reads", icon: <FiBook /> },
    { value: "70+", label: "Citations", icon: <FiAward /> },
    { value: "8+", label: "Publications", icon: <FiFileText /> },
    { value: "6+", label: "Conferences", icon: <FiUsers /> },
    { value: "11+", label: "ESMPs Led", icon: <FiGlobe /> }
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
        "2+ research posters"
      ]
    },
    {
      category: "Professional Leadership",
      items: [
        "Technical guidance for 7 Recycling Business Units (RBUs) - BPCL",
        "SUP Recycling Facility with ETP - BRAC (large-scale industry)",
        "Mobile monitoring app development - Arnnyak Foundation & BPCL",
        "11+ ESMPs developed & monitored (World Bank approved)",
        "4+ Environmental Screening (ESS) reports",
        "$3.18M PLEASE Project technical focal point"
      ]
    }
  ];

  const professionalMentors = [
    { name: "Jaime Alarma Olmos", role: "Project Management Specialist", org: "PLEASE Project · UNOPS" },
    { name: "Sivakumaran Sithamparanathan", role: "Technical Specialist", org: "PLEASE Project, UNOPS SAMCO" },
    { name: "Obidul Islam", role: "Project Manager", org: "SACEP PLEASE Project, UNOPS SAMCO" },
    { name: "Labio Bala", role: "Finance Specialist", org: "UNOPS Vienna" },
    { name: "Khadem Yousuf", role: "CEO", org: "BPCL" },
    { name: "Nusrat Jahan", role: "Project Management Officer", org: "UNOPS PLEASE Project, Bangladesh" },
    { name: "Nusrat Shaheen", role: "Technical Expert", org: "UNOPS PLEASE Project, Bhutan" }
  ];

  const academicMentors = [
    { 
      name: "Suman Dewanjee", 
      role: "PhD Fellow", 
      org: "Virginia Tech", 
      desc: "A pivotal figure who reshaped my life's trajectory, bringing clarity, purpose, and dedication to research",
      influence: "Life-changing mentor"
    },
    { 
      name: "Dr. Tarek Arafat", 
      role: "Head of BME", 
      org: "BUET", 
      desc: "In challenging times, his generosity and mentorship reignited my passion for research.",
      influence: "Research catalyst"
    },
    { 
      name: "Dr. Latiful Bari", 
      role: "Chief Scientist", 
      org: "CARS, University of Dhaka", 
      desc: "As his research assistant, I learned discipline and impactful research, making him my lifelong role model.",
      influence: "Discipline & rigor"
    },
    { 
      name: "Dr. Asma Rahman", 
      role: "Principal Scientist", 
      org: "CARS, University of Dhaka", 
      desc: "Provided invaluable opportunities to work in her lab, greatly enhancing my skills and knowledge.",
      influence: "Skill development"
    }
  ];

  // Image URLs (replace with your actual paths after downloading)
  const profileImageUrl = "/images/profile.jpg"; // Update this path
  const achievementImage1 = "/images/achievement-1.jpg";
  const achievementImage2 = "/images/achievement-2.jpg";
  
  const gratitudeImages = [
    "/images/gratitude-1.jpg",
    "/images/gratitude-2.jpg",
    "/images/gratitude-3.jpg",
    "/images/gratitude-4.jpg",
    "/images/gratitude-5.jpg",
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <Container>
          <div className="py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-gray-600">Available for collaborations</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-light tracking-tight">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Hasan Ahmed
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Interdisciplinary Researcher specializing in transforming waste into 
                  <span className="text-primary font-medium"> value-added, health-enhancing materials</span>
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <FiBriefcase className="text-primary" />
                    <span>UNOPS · 4+ Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <FiMapPin className="text-secondary" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <FiMail className="text-accent" />
                    <span>hasan.kuet16@gmail.com</span>
                  </div>
                </div>

                {/* Quick Stats Row */}
                <div className="flex gap-6 pt-6">
                  <div>
                    <div className="text-2xl font-light text-primary">15+</div>
                    <div className="text-sm text-gray-500">Months UN Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-secondary">4+</div>
                    <div className="text-sm text-gray-500">Years Research</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-accent">3.18M</div>
                    <div className="text-sm text-gray-500">Project Value (USD)</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Profile Image with Decorative Elements */}
              <div className="md:col-span-5 relative">
                <div className="relative z-10">
                  <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white">
                    <Image
                      src={profileImageUrl}
                      alt="Hasan Ahmed"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        {/* Full Bio - Enhanced Typography */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-gray">
              <p className="text-gray-700 leading-relaxed first-line:font-medium first-line:text-primary">
                I'm Hasan Ahmed, an interdisciplinary researcher specializing in transforming waste into 
                value-added, health-enhancing materials. My expertise lies in lab-based chemical modification 
                of industrial, biomedical, and natural food waste to develop sustainable products. I also have 
                strong research experience in microbiology, particularly in analyzing and addressing 
                antibiotic-resistant microbes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Professionally, I served as a technical expert—environment and the Bangladesh country technical 
                focal point at UNOPS for the World Bank-funded, SACEP-supported $3.18 million PLEASE project, 
                providing technical leadership and environmental insights.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond my professional role, I am passionate about mentoring university students, fostering 
                research skills, leadership development, and academic growth. With over 15 months of UN experience 
                and more than 4 years of combined research and professional expertise, I am committed to advancing 
                innovative environmental solutions and nurturing future changemakers.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section - Enhanced Cards */}
        <section className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-2xl text-primary/60 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-light text-gray-900">{stat.value}</div>
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
              <h3 className="text-xl font-medium mb-2">B.Sc. Leather Engineering</h3>
              <p className="text-primary mb-2">KUET, Bangladesh</p>
              <p className="text-gray-600 text-sm">Specialized in microbiology and toxicology; initiated research on polymer composites for waste valorization.</p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-secondary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
              <h3 className="text-xl font-medium mb-2">Research Collaborations</h3>
              <p className="text-secondary mb-2">DU, JUST, BUET</p>
              <p className="text-gray-600 text-sm">Guided master's research in biomedicine and physics; contributed to biomedical material studies.</p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-accent/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
              <h3 className="text-xl font-medium mb-2">M.Sc. Soil, Water & Environment</h3>
              <p className="text-accent mb-2">University of Dhaka</p>
              <p className="text-gray-600 text-sm">Enhanced expertise in environmental policy, sustainability, and waste management solutions.</p>
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
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium mb-6 text-primary">{category.category}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FiAward className="text-primary/40 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
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
                <p className="text-white font-medium">SUP Recycling Facility - BRAC</p>
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
                <p className="text-white font-medium">Environmental Screening - World Bank</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Expertise - Grid with Icons */}
        <section className="py-16">
          <h2 className="text-3xl font-light text-gray-900 mb-12 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
            Technical Expertise
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 leading-tight">{item.name}</p>
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
            I am deeply grateful to my incredible colleagues and mentors whose guidance and support 
            have been instrumental in shaping my professional journey.
          </p>

{/* Gratitude Images Grid */}
<div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-16">
  {gratitudeImages.map((url, index) => (
    <div key={index} className="relative h-40 rounded-lg overflow-hidden">
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 relative">
                <div className="absolute -top-3 left-6 text-4xl text-primary/20">"</div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold">
                      {mentor.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium">{mentor.name}</h4>
                      <p className="text-xs text-gray-500">{mentor.role}, {mentor.org}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic leading-relaxed">"{mentor.desc}"</p>
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