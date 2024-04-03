import React from 'react';
import Feature from '../../components/feature/Feature';
import './aboutCompany.css';

const featuresData = [
  {
    title: 'What Sets Us Apart',
    text: '• At JT-studio, we are not just developers; we are creators, thinkers, and problem solvers dedicated to excellence. Our expertise lies in crafting scalable and dynamic web applications that not only meet but exceed our clients expectations.',
  },
  {
    title: 'Our Promise',
    text: '• Our journey over the past 5 years has been one of continuous learning and improvement. We have helped businesses, from startups to established enterprises, to navigate the digital landscape with ease and confidence.'
  },
  {
    title: 'Our mission',
    text: '• To transform your visionary ideas into digital realities that stand the test of time.',
  },
  {
    title: 'Why Choose Us?',
    text: '• Choosing JT-studio means choosing a partner who understands the importance of your digital presence. Our approach is simple: listen, understand, and deliver. We take the time to understand your needs, offering personalized solutions that align with your business goals.',
  },
];

const AboutCompany = () => (
  <div className="gpt3__features section__padding" id="company">
    
    <div className="gpt3__features-heading">
    <h1 className="gradient__text">About Us.</h1> <br />
      <h1 className="gradient__text">Welcome to JT-studio, where your digital aspirations take flight. Founded with a zeal for innovation, we've been at the forefront of Turnkey Web Application Development for over 5 years.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default AboutCompany;
