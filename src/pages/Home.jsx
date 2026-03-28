import React from 'react';
import '../styles/Home.css';

// Asset imports
import gradeImg from '../assets/images/pexels-minan1398-771317.jpg';
import englishImg from '../assets/images/pexels-tima-miroshnichenko-5428012.jpg';

const Home = () => {
const courses = [
  { id: 1, title: "Khmer Language & Literature (អក្សរសាស្ត្រខ្មែរ)", img: gradeImg },
  { id: 2, title: "Mathematics (គណិតវិទ្យា)", img: englishImg },
  { id: 3, title: "Science: Physics, Chemistry, Biology (រូប, គីមី, ជីវវិទ្យា)", img: gradeImg },
  { id: 4, title: "Social Studies: History, Geography, Civics (សង្គមវិទ្យា)", img: englishImg },
  { id: 5, title: "Foreign Language: English & French (ភាសាបរទេស)", img: gradeImg },
  { id: 6, title: "ICT & Computer Science (ព័ត៌មានវិទ្យា)", img: englishImg }
];

  const benefits = [
    { id: 1, title: "Expert Tutors", desc: "Learn from industry professionals with years of experience.", icon: "🎓" },
    { id: 2, title: "Flexible Learning", desc: "Study at your own pace with our home-school programs.", icon: "⏰" },
    { id: 3, title: "Certified Courses", desc: "Receive a recognized certificate upon completion.", icon: "📜" }
  ];

  return (
    <div className="home-wrapper">
      {/* --- SLIDE 1: HERO --- */}
      <header className="hero-section" style={{ backgroundImage: `url(${gradeImg})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-welcome">ABCD TUTORING</h1>
            <h2 className="hero-sub">HOME SCHOOL TRAINING</h2>
            <button className="btn-explore">Get Started</button>
          </div>
        </div>
      </header>

      {/* --- SLIDE 2: --- */}
      <section className="courses-section container">
        <div className="section-header">
         
          <h2 className="section-title"> Our Popular <span className="text-green">Courses</span></h2>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card-premium">
              <div className="card-thumb"><img src={course.img} alt={course.title} /></div>
              <div className="card-body">
                <h3 className="course-title">{course.title}</h3>
                <div className="card-footer">
                  <button className="enroll-btn" type="button">Enroll now →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="view-more-container">
          <button className="btn-view-more" type="button">View more courses →</button>
        </div>
      </section>

      {/* --- SLIDE 3--- */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Study With <span className="text-green">ABCD</span></h2>
          </div>
          <div className="benefits-grid">
            {benefits.map((item) => (
              <div key={item.id} className="benefit-card">
                <div className="benefit-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SLIDE 4: OUR MISSION--- */}
      <section className="mission-section-new">
        <div className="container mission-grid">
          <div className="mission-text-box">
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-paragraph">
              Looking towards the future, ABCD Tutoring will grasp opportunities and assume a 
              key role in driving Cambodia's socio-economic development through the creation 
              of human capital and the provision of quality research, training and community service.
            </p>
          </div>
          <div className="mission-image-box">
            <img src={englishImg} alt="School Campus" className="mission-pic" />
            <p className="image-caption">ABCD Tutoring School Campus</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
