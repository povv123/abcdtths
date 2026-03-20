import React from "react";
import "../styles/Testimonials.css";

const successStories = [
  {
    id: 1,
    name: "John Smith",
    grade: "Grade 12 Student",
    quote: "The one-on-one tutoring for Calculus completely changed my perspective. I went from struggling with basics to scoring an A in my finals.",
    result: "Accepted to Engineering School",
    image: "https://images.pexels/pexels-photo-1438081.jpeg"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    grade: "English Proficiency Student",
    quote: "The IELTS immersion course was intense but worth it. The speaking practice gave me the confidence I needed to study abroad.",
    result: "IELTS 8.5 Score Achieved",
    image: "https://images.pexe9/pexels-photo-1181519.jpeg"
  },
  {
    id: 3,
    name: "David Chen",
    grade: "Grade 10 Student",
    quote: "I love the flexible schedule. My tutor comes to my home, which saves me time and helps me focus better on my Physics assignments.",
    result: "GPA increased from 2.8 to 3.7",
    image: "https://images.pexels7358/pexels-photo-837358.jpeg"
  }
];

function Testimonials() {
  return (
    <div className="testimonials-page">
      {/* --- HERO HEADER --- */}
      <header className="testimonials-hero">
        <div className="container">
          <span className="green-tag">SUCCESS STORIES</span>
          <h1 className="title-bold">Real Results from Our <span className="text-green">Students</span></h1>
          <p className="subtitle-gray">Discover how our personalized tutoring helps students reach their academic goals.</p>
        </div>
      </header>

      {/* --- SUCCESS STORIES GRID --- */}
      <section className="stories-section container">
        <div className="stories-grid">
          {successStories.map((story) => (
            <div className="story-card" key={story.id}>
              <div className="story-image">
                <img src={story.image} alt={story.name} />
                <div className="outcome-badge">{story.result}</div>
              </div>
              <div className="story-content">
                <div className="rating-stars">⭐⭐⭐⭐⭐</div>
                <p className="story-quote">"{story.quote}"</p>
                <div className="story-footer">
                  <h4 className="student-name">{story.name}</h4>
                  <span className="student-grade">{story.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="stats-strip">
        <div className="container stats-flex">
          <div className="stat-item">
            <h3>95%</h3>
            <p>Grade Improvement</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Success Stories</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Expert Tutors</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;