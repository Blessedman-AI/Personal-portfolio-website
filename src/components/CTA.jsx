import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section
      className=" pb-20 mt-5 items-center lg:ml-16 lg:mr-16 mr-2 ml-2 md:flex 
     m-auto  md:justify-between"
    >
      <p className="ctaText">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link
        to="/contact"
        className="CTA_btn max-w-[300px]  bg-gradient-to-r
         from-cyan-500 to-blue-500"
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
