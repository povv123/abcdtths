import React from "react";
import "../styles/Courses.css";

const allSections = [
  {
    id: "grade-9",
    sectionTitle: "Grade 9 (Lower Secondary)",
    courses: [
      {
        id: "g9-1",
        title: "Khmer Literature (អក្សរសាស្ត្រខ្មែរ)",
        description: "Focus on grammar, composition, and classic literature.",
        features: ["Reading Comprehension", "Essay Writing", "Poetry Analysis", "Weekly Quizzes"],
      },
      {
        id: "g9-2",
        title: "Mathematics (គណិតវិទ្យា)",
        description: "Comprehensive algebra and geometry for Grade 9 level.",
        features: ["Equation Solving", "Geometric Proofs", "Statistics Basics", "Exam Prep"],
      },
      {
        id: "g9-3",
        title: "Sciences (រូប, គីមី, ជីវ, ផែនដី)",
        description: "Physics, Chemistry, Biology, and Earth & Environmental Science.",
        features: ["Laboratory Basics", "Chemical Formulas", "Human Biology", "Environment Study"],
      },
      {
        id: "g9-4",
        title: "Social Studies & Ethics",
        description: "History, Geography, and Moral-Civics.",
        features: ["Cambodian History", "World Geography", "Civic Duties", "Moral Education"],
      }
    ]
  },
  {
    id: "science-track",
    sectionTitle: "Grade 11-12: Science Track (ថ្នាក់វិទ្យាសាស្ត្រ)",
    courses: [
      {
        id: "st-1",
        title: "Advanced Mathematics (គណិតវិទ្យា)",
        description: "Intensive Calculus and Algebra for Science majors.",
        features: ["Derivatives & Integrals", "Complex Numbers", "Probability", "BacII Mock Exams"],
      },
      {
        id: "st-2",
        title: "Physics & Chemistry (រូបវិទ្យា និងគីមីវិទ្យា)",
        description: "High-level physical sciences for the National Exam (BacII).",
        features: ["Mechanics & Electricity", "Organic Chemistry", "Atomic Physics", "Reaction Kinetics"],
      },
      {
        id: "st-3",
        title: "Biology (ជីវវិទ្យា)",
        description: "Detailed study of Genetics, Evolution, and Ecology.",
        features: ["DNA & Inheritance", "Cell Metabolism", "Plant Physiology", "BacII Strategies"],
      }
    ]
  },
  {
    id: "social-track",
    sectionTitle: "Grade 11-12: Social Science Track (ថ្នាក់វិទ្យាសាស្ត្រសង្គម)",
    courses: [
      {
        id: "sst-1",
        title: "Advanced Khmer Literature",
        description: "Deep analysis of Khmer culture and advanced writing.",
        features: ["Modern Novels", "Ancient Literature", "Critical Writing", "Cultural History"],
      },
      {
        id: "sst-2",
        title: "History & Geography (ប្រវត្តិ និងភូមិ)",
        description: "Comprehensive study of world and local heritage.",
        features: ["Angkorian Era", "Global Geopolitics", "Economic Geography", "Historical Maps"],
      },
      {
        id: "sst-3",
        title: "Moral-Civics (សីលធម៌-ពលរដ្ឋវិទ្យា)",
        description: "Ethics, Law, and Social Responsibility.",
        features: ["Law Foundations", "Human Rights", "Social Ethics", "Political Science"],
      }
    ]
  },
  {
    id: "english-special",
    sectionTitle: "English Special Courses (ភាសាអង់គ្លេស)",
    courses: [
      {
        id: "eng-1",
        title: "IELTS Preparation",
        description: "Achieve high scores in proficiency exams for study abroad.",
        features: ["Speaking Practice", "Writing Review", "Listening Kits", "Reading Strategies"],
      },
      {
        id: "eng-2",
        title: "General English (English/French)",
        description: "Master professional and daily communication.",
        features: ["Grammar & Fluency", "Pronunciation", "Public Speaking", "Corporate Vocab"],
      }
    ]
  }
];

function Courses() {
  return (
    <div className="courses-page-v2">
      <header className="courses-hero">
        <div className="container">
          <h1 className="hero-main-title">BacII & Grade 9 Preparation</h1>
          <p className="hero-subtext">Master the Cambodian National Curriculum from Grade 9 to 12.</p>
        </div>
      </header>

      <div className="container">
        {allSections.map((section) => (
          <section key={section.id} className="course-block">
            <h2 className="section-title-label">{section.sectionTitle}</h2>
            
            <div className="pricing-grid">
              {section.courses.map((course) => (
                <div className="pricing-card-simple" key={course.id}>
                  <div className="card-header">
                    <h3 className="course-name">{course.title}</h3>
                    {/* Price Tag section removed */}
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

export default Courses;