import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="CTA-section max-w-[1080px]">
      <p className="ctaText">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link
        to="/contact"
        className="CTA-btn max-w-[300px]  bg-gradient-to-r
         from-cyan-500 to-blue-500 hover:bg-gradient-to-r
              hover:from-blue-500 hover:to-cyan-500 
              hover:bg-opacity-100"
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
