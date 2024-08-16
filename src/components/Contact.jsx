import { IoLocationOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { GrMailOption } from 'react-icons/gr';
import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  return (
    <main className="flex justify-around gap-72 px-20 pt-20">
      <section className="">
        <h1 className="text-left text-3xl font-extrabold">GET IN TOUCH</h1>
        <p className="my-8 text-left">
          Please fill out the form in this section to contact me, or feel free
          to message me on my social media accounts.
        </p>
        <article>
          <div className="flex items-center gap-5">
            <IoLocationOutline className="w-7 h-7" />
            <span className="text-lg font-semibold">
              Ado-Odo, Ota, Ogun State Nigeria.
            </span>
          </div>
          <div className="flex items-center gap-5 my-5">
            <FiPhone className="w-7 h-7" />
            <span className="text-lg font-semibold">+234 8188419693 </span>
          </div>
          <div className="flex items-center gap-5">
            <GrMailOption className="w-7 h-7" />
            <span className="text-lg font-semibold">
              dauda.a.tijani@gmail.com
            </span>
          </div>
        </article>
      </section>
      <form action="" className="w-full">
        <label className="block ">
          <input
            placeholder="Name"
            type="text"
            value={name}
            className="mt-1 block w-full px-2 py-3 bg-white border border-slate-300 text-sm shadow-sm placeholder-gray-800
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
        <label class="block">
          <input
            placeholder="Email"
            value={email}
            type="email"
            class="peer mt-8 block w-full px-2 py-3 bg-white border border-slate-300 text-sm shadow-sm placeholder-gray-800
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
          />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
        <textarea
          id="message"
          rows="1"
          class="block mt-1 px-2 py-3 w-full text-sm text-gray-900 bg-white border border-slate-300 placeholder-gray-800 focus:outline-none focus:ring-sky-500 focus:ring-1 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
          placeholder="Message"
        ></textarea>
        <div className="flex items-center justify-center gap-3 border-2 border-red-700 p-3 mt-8 cursor-pointer">
          <button type="button">Submit</button>
          <FaArrowRightLong />
        </div>
      </form>
    </main>
  );
};
export default Contact;
