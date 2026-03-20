import React, { useState } from "react";
import "../styles/Resources.css"; // We will create this file next

// 1. FIXED: Define data outside the component to avoid "ReferenceError"
const RESOURCE_DATA = [
  { id: 1, title: "Math Mastery Guide", type: "PDF", icon: "📐", desc: "Complete formula sheet for Grade 10." },
  { id: 2, title: "Science Lab Safety", type: "Video", icon: "🧪", desc: "Essential safety protocols for all students." },
  { id: 3, title: "Essay Writing 101", type: "Tutorial", icon: "✍️", desc: "How to structure a high-scoring academic essay." }
];

const TEACHER_DATA = [
  { 
    name: "Ms. Sophea Vy", 
    subject: "Literature", 
    img: " ", 
    meaning: "Passionate about Khmer history and modern storytelling." 
  },
  { 
    name: "Mr. David Smith", 
    subject: "Physics", 
    img: " ", 
    meaning: "Focuses on hands-on experiments and critical thinking." 
  }
];

function Resources() {
  const [activeTab, setActiveTab] = useState("resources");

  return (
    <div className="portal-container">
      {/* Header Section */}
      <header className="portal-header">
        <h1>School Portal</h1>
        <p>Everything you need to succeed this semester.</p>
      </header>

      {/* Navigation Tabs */}
      <nav className="portal-nav">
        <button 
          className={activeTab === "resources" ? "tab active" : "tab"} 
          onClick={() => setActiveTab("resources")}
        >
          Resources & Guides
        </button>
        <button 
          className={activeTab === "teachers" ? "tab active" : "tab"} 
          onClick={() => setActiveTab("teachers")}
        >
          Our Teachers
        </button>
      </nav>

      {/* Logic to Switch Views */}
      <main className="portal-content">
        {activeTab === "resources" ? (
          <div className="card-grid">
            {RESOURCE_DATA.map(item => (
              <div key={item.id} className="card resource-card">
                <span className="card-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="btn-action">Download {item.type}</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="card-grid">
            {TEACHER_DATA.map((teacher, index) => (
              <div key={index} className="card teacher-card">
                <img src={teacher.img} alt={teacher.name} className="teacher-img" />
                <h3>{teacher.name}</h3>
                <span className="subject-badge">{teacher.subject}</span>
                <p className="teacher-quote">"{teacher.meaning}"</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FAQ Section */}
      <footer className="portal-footer">
        <h3>Frequently Asked Questions</h3>
        <details className="faq-item">
          <summary>Are these guides free for all students?</summary>
          <p>Yes, all resources listed here are free for our community.</p>
        </details>
        <details className="faq-item">
          <summary>How do I contact my teacher?</summary>
          <p>You can find teacher contact info inside the student portal dashboard.</p>
        </details>
      </footer>
    </div>
  );
}

export default Resources;