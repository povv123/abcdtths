import React from "react";
import "../styles/Pricing.css";

const allSections = [
  {
    id: "grade-9",
    sectionTitle: "Grade 9 (Lower Secondary)",
    courses: [
      {
        id: "g9-core",
        title: "Khmer & Mathematics",
        price: "40,000",
        description: "Foundational mastery of អក្សរសាស្ត្រខ្មែរ and គណិតវិទ្យា.",
        features: ["អក្សរសាស្ត្រខ្មែរ (Literature)", "គណិតវិទ្យា (Mathematics)", "Weekly Mock Tests", "Progress Reports"],
      },
      {
        id: "g9-science",
        title: "Science Block",
        price: "45,000",
        description: "Physics, Chemistry, Biology, and Earth Science.",
        features: ["រូបវិទ្យា (Physics)", "គីមីវិទ្យា (Chemistry)", "ជីវវិទ្យា (Biology)", "Lab Theory & Formulas"],
      },
      {
        id: "g9-social",
        title: "Social Studies & Language",
        price: "35,000",
        description: "History, Geography, and Foreign Language.",
        features: ["ប្រវត្តិវិទ្យា (History)", "ភូមិវិទ្យា (Geography)", "សីលធម៌-ពលរដ្ឋ (Civics)", "English/French Basics"],
      }
    ]
  },
  {
    id: "science-track",
    sectionTitle: "Grade 11-12: Science Track (ថ្នាក់វិទ្យាសាស្ត្រ)",
    courses: [
      {
        id: "st-math",
        title: "Advanced Mathematics",
        price: "55,000",
        description: "Intensive Calculus and Algebra for BacII success.",
        features: ["គណិតវិទ្យា (Advanced Math)", "Complex Numbers", "Probability", "Past Paper Drills"],
      },
      {
        id: "st-physics-chem",
        title: "Physics & Chemistry",
        price: "50,000",
        description: "In-depth physical science for the National Exam.",
        features: ["រូបវិទ្យា (Physics)", "គីមីវិទ្យា (Chemistry)", "Mechanics & Electricity", "Organic Chemistry"],
      },
      {
        id: "st-bio",
        title: "Biology & Research",
        price: "45,000",
        description: "Study of life sciences and environmental ethics.",
        features: ["ជីវវិទ្យា (Biology)", "Genetics", "Cellular Biology", "Ecology"],
      }
    ]
  },
  {
    id: "social-track",
    sectionTitle: "Grade 11-12: Social Science Track (ថ្នាក់វិទ្យាសាស្ត្រសង្គម)",
    courses: [
      {
        id: "sst-khmer",
        title: "Advanced Khmer Literature",
        price: "45,000",
        description: "Deep analysis of Khmer culture and advanced writing.",
        features: ["អក្សរសាស្ត្រខ្មែរ (Literature)", "Modern Novels", "Critical Writing", "Cultural History"],
      },
      {
        id: "sst-history-geo",
        title: "History & Geography",
        price: "40,000",
        description: "Comprehensive study of world and local heritage.",
        features: ["ប្រវត្តិវិទ្យា (History)", "ភូមិវិទ្យា (Geography)", "Global Geopolitics", "Economic Geography"],
      },
      {
        id: "sst-civics-bio",
        title: "Civics & Biology",
        price: "35,000",
        description: "Ethics, Law, and natural science foundations.",
        features: ["សីលធម៌-ពលរដ្ឋ (Civics)", "ជីវវិទ្យា (Biology)", "Human Rights", "Social Ethics"],
      }
    ]
  },
  {
    id: "english-special",
    sectionTitle: "English Special Courses (ភាសាអង់គ្លេស)",
    courses: [
      {
        id: "eng-ielts",
        title: "IELTS Preparation",
        price: "65,000",
        description: "Fast-track your score for international scholarships.",
        features: ["Speaking Practice", "Writing Review", "Listening Kits", "Reading Strategies"],
      },
      {
        id: "eng-general",
        title: "General English (GSP)",
        price: "45,000",
        description: "Improve fluency and professional communication.",
        features: ["Public Speaking", "Email Etiquette", "Grammar Drills", "Confidence Building"],
      }
    ]
  }
];

function Pricing() {
  return (
    <div className="pricing-page">
      <header className="pricing-hero">
        <div className="container">
          <h1 className="hero-main-title">Transparent Pricing</h1>
          <p className="hero-subtext">Flexible plans for the Cambodian National Curriculum.</p>
        </div>
      </header>

      <div className="container">
        {allSections.map((section) => (
          <section key={section.id} className="pricing-block">
            <h2 className="section-title-label">{section.sectionTitle}</h2>
            
            <div className="pricing-grid">
              {section.courses.map((course) => (
                <div className="pricing-card-simple" key={course.id}>
                  <div className="card-header">
                    <h3 className="course-name">{course.title}</h3>
                    <div className="price-tag">
                      <span className="currency">KHR</span>
                      <span className="amount">{course.price}</span>
                      <span className="period">/mo</span>
                    </div>
                  </div>

                  <div className="card-content">
                    <ul className="feature-list">
                      {course.features.map((feature, i) => (
                        <li key={i}>
                          <span className="check-icon">✔</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="course-brief">{course.description}</p>
                    <button className="btn-action-black">Enroll Today</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Pricing;