import { useState } from "react";
import emailjs from "emailjs-com";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const SERVICE_ID = "service_67zd4mr";
  const TEMPLATE_ID = "template_jb904zc";
  const PUBLIC_KEY = "LFdlqVHC3GtE1s14g";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      )
      .then((result) => {
        setSuccess(true);
        setFormData({ name: "", email: "", tel: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."))
      .finally(() => setIsSubmitting(false));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gray-600 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-600 sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">
                Get in touch
              </h1>
              <p className="text-lg sm:text-2xl font-medium text-black/50 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 ">
                <LocationPinIcon fontSize="large"/>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  <p>Harrison,New jersey,07029</p>
                </div>
              </div>

              <div className="flex items-center mt-4 ">
                <LocalPhoneIcon fontSize="large"/>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +1 470-962-0998
                </div>
              </div>

              <div className="flex items-center mt-2">
                <EmailIcon fontSize="large"/>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  ajaymittapally70@gmail.com
                </div>
              </div>
            </div>

            <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
              {success && (
                <div className="mb-6 p-4 bg-primary border border-green-400 text-green-700 rounded">
                  Message sent successfully!
                </div>
              )}
              
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Full Name" 
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-black/5 border border-gray-400 text-black font-semibold focus:border-primary focus:outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Email" 
                 className="w-100 mt-2 py-3 px-3 rounded-lg bg-black/5 border border-gray-400 text-black font-semibold focus:border-primary focus:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">Number</label>
                <input 
                  type="tel" 
                  name="tel" 
                  id="tel" 
                  placeholder="phone-Number" 
                 className="w-100 mt-2 py-3 px-3 rounded-lg bg-black/5 border border-gray-400 text-black font-semibold focus:border-primary focus:outline-none"
                  value={formData.tel}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="hidden">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-black/5 border border-gray-400 text-black font-semibold focus:border-primary focus:outline-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="md:w-32 bg-primary hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-primary-dull transition ease-in-out duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}