import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Home.css';

// Update the paths to your images
import resumeBuilderIcon from '../../assets/images/resume.avif';
import resumeScoreIcon from '../../assets/images/resume-score-icon.png';
import feedbackIcon from '../../assets/images/personal-feedback-icon.png';
import heroBackground from '../../assets/images/Res.svg';

function Home() {
  return (
    <div className="home">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <h2>Smart Resume Builder And Evaluation System</h2>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <Link to="/Login">
            <FaUserCircle className="login-icon" /> Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="hero-content">
          <h1>Build a Professional Resume & Get Instant Score Insights</h1>
          <p>
            Your journey to a dream job starts here! Create a standout resume with our easy-to-use builder
            and get detailed feedback with our Resume Score Checker to make a lasting impression on recruiters.
          </p>
          <div className="hero-buttons">
            <Link to="/buildResume">
              <button className="primary-button">Start Building Your Resume</button>
            </Link>
            <Link to="/score">
              <button className="secondary-button">Check Resume Score</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features" id="features">
        <h2>Our Key Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <img src={resumeBuilderIcon} alt="Resume Builder Icon" />
            <h3>Smart Resume Builder</h3>
            <p>Create your resume from scratch or improve an existing one with professional layouts and guidance.</p>
            <Link to="/buildResume">
              <button className="feature-button">Build Resume</button>
            </Link>
          </div>
          <div className="feature-item">
            <img src={resumeScoreIcon} alt="Resume Score Icon" />
            <h3>Instant Resume Score</h3>
            <p>Upload your resume to receive an instant score based on industry benchmarks and personalized feedback.</p>
            <Link to="/score">
              <button className="feature-button">Check Resume Score</button>
            </Link>
          </div>
          <div className="feature-item">
            <img src={feedbackIcon} alt="Feedback Icon" />
            <h3>Personalized Feedback</h3>
            <p>Get actionable suggestions to boost your resume's impact and appeal to recruiters.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        <p>Our platform streamlines the resume-building process and evaluates your resume to make sure it shines.</p>
        <div className="steps">
          <div className="step">
            <h3>1. Build or Upload Your Resume</h3>
            <p>Start from scratch or upload an existing resume for improvement.</p>
          </div>
          <div className="step">
            <h3>2. Get Your Resume Score</h3>
            <p>Receive an instant score and personalized suggestions based on industry standards.</p>
          </div>
          <div className="step">
            <h3>3. Top 5 Filtering</h3>
            <p>Filter best 5 resume from the uploaded resumes</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section
      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-item">
          <p>"The resume builder made my job application stand out, and I landed interviews faster!"</p>
          <span>- Nandha T.</span>
        </div>
        <div className="testimonial-item">
          <p>"The score checker gave me the insights I needed to make my resume competitive."</p>
          <span>- Raki R.</span>
        </div>
      </div> */}

      {/* Call-to-Action Section */}
      <div className="call-to-action">
        <h2>Ready to Enhance Your Job Applications?</h2>
        <p>Get started today and make a memorable impression with a professional resume.</p>
        <Link to="/signup">
          <button className="join-button">Sign Up Now</button>
        </Link>
        {/* Contact Button */}
        <Link to="/contact">
          <button className="contact-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
