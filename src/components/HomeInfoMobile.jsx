import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

// ... (InfoBox and renderContent definitions remain unchanged)
const InfoBox = ({ text, linebreak1, emoji, link, btnText }) => (
  <div className="infoBox">
    <p className="font-medium sm:text-xl">{text}</p>

    {emoji}

    {linebreak1}
    <Link to={link} className="btnLink">
      {btnText}
      <img src={arrow} className="w-4  h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm: leading-snug text-center py-4 px-8
     text-white mx-5 bg-blue-500 rounded-lg"
    >
      Hi, I am <span className="font-semibold">Blessedman</span> 👋
      <br />A Software Engineer from Nigeria
    </h1>
  ),

  2: (
    <InfoBox
      text="Worked with many companies and picked up many
      skills along the way"
      emoji="💪"
      linebreak1={<br />}
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects over the years. Curious to see them?"
      linebreak1={<br />}
      //   linebreak2={<br />}
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      linebreak1={<br />}
      //   linebreak2={<br />}
      link="/contact"
      btnText="Let's talk"
    />
  )
};

const HomeInfoMobile = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [activeContent, setActiveContent] = useState(
    renderContent[1]
  ); // Initialize with first content

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextStage =
        (currentStage % Object.keys(renderContent).length) + 1;
      setCurrentStage(nextStage);
      setActiveContent(renderContent[nextStage]); // Update active content
    }, 3000); // Update every 3 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return activeContent; // Render the active content only
};

export default HomeInfo;
