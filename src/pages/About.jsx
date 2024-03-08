import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';

import { skills, experiences } from '../constants';

// import { CTA } from '../components';
// import { experiences, skills } from '../constants';

import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="sections">
      <div className="flex flex-col">
        <h1 className="headText text-3xl font-bold">
          Hello, I'm{' '}
          <span
            className="text-transparent bg-clip-text 
        bg-gradient-to-r from-cyan-500 to-blue-500 
        font-semibold drop-shadow"
          >
            {' '}
            Blessedman
          </span>{' '}
          👋
        </h1>

        <div className="mt-4 max-w-[600px] flex flex-col justify-center text-center gap-3 text-slate-500">
          <p className="text-center justify-center ">
            Software Engineer based in Nigeria, specializing in
            javascript and all the frameworks and libaries associated
            with it.
          </p>
        </div>
      </div>

      <div className="pt-12 pb-4 flex flex-col">
        <h3 className="subeadText">My Skills</h3>

        <div className="mt-4 max-w-[800px] flex flex-wrap gap-8">
          {skills.map(skill => (
            <div className="w-15 h-15" key={skill.name}>
              <div className=" rounded-xl" />
              <div
                className="bg-[#efefef] hover:scale-150 transition duration-500
                 ease-in-out h-16 w-16 rounded-xl flex justify-center items-center"
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  // className="w-1/2 h-1/2 object-contain"
                  className="z-40 w-10 h-10 object-cover  rounded-md 
                  hover:scale-90 transition duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-12  pb-4">
        <div className=" flex flex-col">
          <h3 className="subeadText">Work Experience.</h3>
          <div className="mt-4 max-w-[600px]   text-center  text-slate-500">
            <p>
              I've worked with all sorts of companies, leveling up my
              skills and teaming up with smart people. Here's the
              rundown:
            </p>
          </div>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div
                    className="flex justify-center items-center 
                  w-full h-full"
                  >
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 
                      text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
