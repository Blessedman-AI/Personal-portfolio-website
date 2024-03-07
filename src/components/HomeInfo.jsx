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
      text="Need a project done or looking for a dev? 💻 I'm just a few keystrokes away"
      linebreak1={<br />}
      //   linebreak2={<br />}
      link="/contact"
      btnText="Let's talk"
    />
  ),
  3: (
    <InfoBox
      text="But if you'd rather see some of my favorite projects first, smash that button!👇"
      linebreak1={<br />}
      //   linebreak2={<br />}
      link="/projects"
      btnText="Visit my portfolio"
    />
  )
};

export const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export const HomeInfoMobile = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [activeContent, setActiveContent] = useState(
    renderContent[1]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStage(prevStage => {
        const nextStage =
          (prevStage % Object.keys(renderContent).length) + 1;
        setActiveContent(renderContent[nextStage]);
        return nextStage;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return activeContent;
};

export const infoPopup = () => {
  // return infoPopup();

  const isMobile = window.innerWidth < 1080;

  return isMobile ? <HomeInfoMobile /> : <HomeInfo />;
};
