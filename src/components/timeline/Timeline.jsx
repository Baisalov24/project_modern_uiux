// src/Timeline.js
import React, { useState, useRef, useEffect } from 'react';
import '../../containers/appLifecycle/appLifecycle.css';

const events = [
  { year: "Design", text: "Event 1", description: "Wireframing: Creating basic layouts of the web pages. UI/UX Design: Designing visual elements and user experience paths.Prototyping: Building clickable prototypes to simulate the user interface." },
  { year: "Front-End Development", text: "Event 2", description: "HTML/CSS Development: Building the structure and style of the website.JavaScript Development: Adding interactivity to the website.Responsive Design: Ensuring the website is accessible and usable on various devices." },
  { year: "Back-End Development", text: "Event 3", description: "Server Setup: Setting up the server that will host the website.Database Design: Designing the database structure for data storage.Programming: Writing server-side logic and functionalities." },
  { year: "Integration", text: "Event 3", description: "API Integration: Connecting the front-end with the back-end through APIs.Third-Party Services Integration: Incorporating external services, like payment gateways or social media feeds." },
  { year: "Testing", text: "Event 3", description: "Functional Testing: Ensuring all features work as expected.Usability Testing: Assessing the ease of use and user experience.Performance Testing: Checking load times and response times.Security Testing: Identifying vulnerabilities and securing against threats." },
  { year: "Deployment", text: "Event 3", description: "Launching: Moving the website to the live server.Domain Setup: Configuring the domain name." },
];

const Timeline = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0); 
  const [progressWidth, setProgressWidth] = useState(0);
  const timelineRef = useRef(null);
  
  useEffect(() => {
    if (timelineRef.current && selectedEventIndex !== null) {
      const eventRect = timelineRef.current.children[selectedEventIndex].getBoundingClientRect();
      const newProgressWidth = eventRect.right;
      setProgressWidth(newProgressWidth - timelineRef.current.getBoundingClientRect().left);
    }
  }, [selectedEventIndex]);

  return (
    <div style={{textAlign:"center"}} >
<div className="timeline-container" ref={timelineRef}>
      {events.map((event, index) => (
        <div className={`timeline-item ${index <= selectedEventIndex ? 'active' : ''}`} key={index} onClick={() => setSelectedEventIndex(index)}>
          <div className="timeline-date">{event.year}</div> <br />
          <div className="timeline-dot"></div>
        </div>
      ))}
      <div className="timeline-line"></div>
      <div className="timeline-progress" style={{ width: `${progressWidth}px` }} />
      <div className="timeline-description">{events[selectedEventIndex].description}</div>
    </div>
    </div>
    
  );
};

export default Timeline;
