import React from 'react';
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className="sections  h-[100vh]">
      <div className="max-w-[1080px] flex flex-col justify-center">
        <h1 className="text-3xl font-bold">
          My{' '}
          <span
            className="text-transparent bg-clip-text 
        bg-gradient-to-r from-cyan-500 to-blue-500 
        font-semibold drop-shadow"
          >
            {' '}
            Projects
          </span>{' '}
          📁
        </h1>

        <div className="mt-5 flex justify-center max-w-[800px] text-center text-slate-500">
          <p>
            I've embarked on numerous projects over the years, but
            these are the ones I hold closest to my heart. Many of
            them are open-source, so if you come across something that
            piques your interest, feel free to explore the codebase
            and contribute your ideas for further enhancements. Your
            collaboration is highly valued!
          </p>
        </div>

        <div className="flex pb-10   flex-wrap my-20 gap-16">
          {projects.map(project => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container">
                <div className={`btn-back  ${project.theme}`} />
                <div className="btn-front flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="threads"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 ">
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">
                  {project.description}
                </p>
                <div className="mt-5 flex justify-start gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold gradient text-left  ${project.linkColor}`}
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className={`w-4 h-4  object-contain ${project.arrow}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </div>
    </section>
  );
};

export default Projects;
