import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';

import Fox from '../models/Fox';
import { LoaderContact } from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

// const Loader = LoaderContact;

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { alert, showAlert, hideAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const isContactPage = location.pathname === '/contact';

  // const handleChange = ({ target: { name, value } }) => {
  //   setForm({ ...form, [name]: value });
  // };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const handleFocus = () => {};
  // const handleBlur = () => {};

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  // useEffect(() => {
  //   console.log(isHomePage);
  //   if (isContactPage) {
  //     document.body.addEventListener(
  //       'touchmove',
  //       function (event) {
  //         event.preventDefault();
  //       },
  //       { passive: true }
  //     ); // Use passive: false for touch devices
  //   }
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');
    // setCurrentAnimation('hit');

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Blessedman',
          from_email: form.email,
          to_email: 'beemhan@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);

        showAlert({
          show: true,
          text: 'Message sent successfully!',
          type: 'success'
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation('idle');
          setForm({
            name: '',
            email: '',
            message: ''
          });
        }, [3000]);
        console.log('message sent!');
      })
      .catch(error => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        console.error(error);

        showAlert({
          show: true,
          text: 'Message sending failed',
          type: 'danger'
        });
      });
  };

  return (
    <section className=" pl-6 pr-6 overflow-x-hidden">
      <div className="flex mt-[8rem] justify-center">
        {' '}
        <h1
          className="text-3xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-cyan-500 to-blue-500 
        drop-shadow"
        >
          Get in Touch
        </h1>
      </div>
      <div
        className="pb-16 h-full w-full overflow-x-hidden 
      flex lg:flex-row flex-col"
      >
        {alert.show && <Alert {...alert} />}

        <div className=" flex  flex-col flex-1   ">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" w-full max-w-sm mx-auto  mt-10"
          >
            <label className="text-black-500 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              className=" mt-2 mb-6 w-full px-2 py-2 rounded-md border
             border-gray-200 focus:outline-none light:bg-gray-700 light:text-gray-100 "
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <label className="text-black-500 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-2 mb-6 w-full px-2 py-2 rounded-md border
             border-gray-200 focus:outline-none light:bg-gray-700 light:text-gray-100 "
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <label className="text-black-500 font-semibold">
              Your Message
            </label>
            <textarea
              name="message"
              rows={3}
              className=" mt-2 mb-4 w-full px-2 py-2 rounded-md border
             border-gray-200 focus:outline-none light:bg-gray-700 
             light:text-gray-100"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <button
              type="submit"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 rounded-md bg-[#007fff]
             text-white font-medium hover:bg-indigo-70
             0 focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="flex-1 md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<LoaderContact />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
