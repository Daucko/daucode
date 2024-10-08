import { IoLocationOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { GrMailOption } from 'react-icons/gr';
import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  return (
    <main className="flex flex-col sm:flex-row justify-around gap-20 sm:gap-64 py-10 sm:py-20">
      <section className="p-10 sm:pl-0">
        <h1 className="text-left text-3xl font-extrabold">GET IN TOUCH</h1>
        <p className="my-8 text-left">
          Please fill out the form in this section to contact me, or feel free
          to message me on my social media accounts.
        </p>
        <article>
          <div className="flex items-center gap-3">
            <IoLocationOutline className="w-7 h-7" />
            <span className="text-lg font-semibold">
              Ado-Odo Ota. Ogun State Nigeria.
            </span>
          </div>
          <div className="flex items-center gap-3 my-5">
            <FiPhone className="w-7 h-7" />
            <a
              href="https://wa.me/12345678900?text=Hello%20there!"
              className="text-lg font-semibold"
            >
              +234 8188419693{' '}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <GrMailOption className="w-7 h-7" />
            <span className="text-lg font-semibold">
              dauda.a.tijani@gmail.com
            </span>
          </div>
        </article>
      </section>
      <form action="" className="w-full pt-2 sm:pt-16 pl-10 sm:pl-0">
        <label className="block ">
          <input
            placeholder="Name"
            type="text"
            value={name}
            className="mt-1 block w-full px-2 py-3 bg-white border border-slate-300 text-[#003049] text-sm shadow-sm placeholder-gray-800
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 dark:bg-[#fdf0d5]
    "
          />
        </label>
        <label className="block">
          <input
            placeholder="Email"
            value={email}
            type="email"
            className="peer mt-8 block w-full px-2 py-3 bg-white border border-slate-300 text-[#003049] text-sm shadow-sm placeholder-gray-800
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none dark:bg-[#fdf0d5]"
          />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
        <textarea
          id="message"
          rows="1"
          className="block mt-1 px-2 py-3 w-full text-sm bg-white border border-slate-300 placeholder-[#003049] focus:outline-none focus:ring-sky-500 focus:ring-1 focus:border-sky-500 dark:bg-[#fdf0d5] dark:border-gray-600 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
          placeholder="Message"
        ></textarea>
        <div className="flex items-center justify-center gap-3 border-2 border-[#003049] p-3 mt-8 cursor-pointer bg-[#003049] text-white hover:bg-[#003049]/90 hover:-translate-x-2 dark:bg-[#fdf0d5] dark:text-[#003049]">
          <button type="button">Submit</button>
          <FaArrowRightLong />
        </div>
      </form>
    </main>
  );
};
export default Contact;
