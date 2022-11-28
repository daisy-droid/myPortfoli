import {useRef} from "react";
import emailjs from '@emailjs/browser';
import './contacts.css'



const ContactForm = () => {
  const form= useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ct2777', 'template_vfvsr58', form.current, 'vFObGMQX8sOuhsGzX')
      .then((result) => {
          console.log('SUCCESS!',result.text);
      }, (error) => {
          console.log('Couldnt send',error.text);
      });
      e.target.reset( )
  };

 
 

  return (
    <section id="contact">
      <div className="c">
        <div class>
      <div className="left">
        <div className="container ">
          <form ref={form} onSubmit={sendEmail} method="POST" target="_blank">
            <div className="text-4xl mb-3 mt-5 hl">Talk to me</div>
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="px-3 py-3 placeholder-gray-0 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline focus:outline focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline focus:outline focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Subject"
                name="Subject"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline focus:outline focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <textarea
                placeholder="Your message"
                name="message"
                className="px-3 py-3 mb-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline focus:outline focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold- uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline focus:outline mr-1 mb-1 ease-linear transition-all duration-150 ss"
                type="submit"
              >
                Send a message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" i-right hero  ">
        <div className="contactse">
          <div className="max-w-2xl">
           
            <div className="hero-content flex flex-col lg:flex-row">
              <div className="flex flex-col justify-center all">
                <div className="flex flex-row cnt mb-1 px-3 py-3 ">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-map-pin"
                      width="35"
                      height="45"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="11" r="3"></circle>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </i>
                  <span className="font-bold">Location:</span>
                  <span className="cont  mb-1 px-3 py-3">Pretoria,0002</span>
                </div>
                <div className="flex flex-row cnt">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                      <polyline points="3 7 12 13 21 7"></polyline>
                    </svg>
                  </i>
                  <span className="font-bold">Email:</span>
                  <span className="cont mb-1 px-3 py-3">
                    ipelengmothibi@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};


export default ContactForm;
