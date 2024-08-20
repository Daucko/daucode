import { FaCode } from 'react-icons/fa6';
import { GrHtml5 } from 'react-icons/gr';
import { FaCss3 } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { IoLogoReact } from 'react-icons/io5';
import { SiNextdotjs } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { SiGraphql } from 'react-icons/si';
import { SiNumpy } from 'react-icons/si';
import { SiPandas } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaBootstrap } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiStyledcomponents } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';

const TechStack = () => {
  return (
    <main className="py-16">
      <h1 className="center text-3xl font-bold mb-5">GOOT AT</h1>
      <section className="flex flex-col md:flex-row p-5 border-2 border-[#669bbc] rounded-[1rem] gap-10">
        <article className="bg-black/10 p-2 rounded-[1rem] flex items-center justify-between w-full md:w-[52%]">
          <div>
            <h1 className="font-medium text-left text-sm sm:text-4xl">Web</h1>
            <h1 className="font-medium text-sm sm:text-4xl">Development</h1>
          </div>

          <span>
            <FaCode className="w-12 h-12" />
          </span>
        </article>
        <article className="grid grid-cols-6 gap-6 justify-around w-full">
          <span>
            <GrHtml5 className="w-12 h-12" />
          </span>
          <span>
            <FaCss3 className="w-12 h-12" />
          </span>
          <span>
            <SiJavascript className="w-12 h-12 rounded-[2px]" />
          </span>
          <span>
            <IoLogoReact className="w-12 h-12" />
          </span>
          <span>
            <SiNextdotjs className="w-12 h-12" />
          </span>
          <span>
            <FaPython className="w-12 h-12" />
          </span>
          <span>
            <SiGraphql className="w-12 h-12" />
          </span>
          <span>
            <RiTailwindCssFill className="w-12 h-12" />
          </span>
          <span>
            <FaBootstrap className="w-12 h-12" />
          </span>
          <span>
            <SiRedux className="w-12 h-12" />
          </span>
          <span>
            <SiStyledcomponents className="w-12 h-12" />
          </span>
          <span>
            <FaSass className="w-12 h-12" />
          </span>
          <span>
            <DiDjango className="w-16 h-16" />
          </span>
        </article>
      </section>
      <section className="flex items-center flex-col md:flex-row p-5 border-2 border-[#669bbc] rounded-[1rem] gap-10 mt-10">
        <article className="bg-black/10 p-2 rounded-[1rem] flex items-center justify-between w-full md:w-[52%] gap-6">
          <div>
            <h1 className="font-medium text-left text-3xl">Data</h1>
            <h1 className="font-medium text-3xl">Science</h1>
          </div>
          <span>
            <svg
              className="w-12 h-12 fill-[#003049]"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 108.24 122.88"
              xmlSpace="preserve"
              //   {...props}
            >
              <path
                d="M54.12 0c5.65 0 10.45 7.29 13.65 19.07 1.11 4.09 2.06 8.76 2.81 13.87 4.8-1.9 9.32-3.41 13.41-4.5 11.79-3.12 20.5-2.6 23.33 2.29 2.82 4.89-1.09 12.69-9.69 21.34-2.98 3-6.55 6.16-10.61 9.37 1.62 1.28 3.17 2.56 4.63 3.82-1.33.93-2.42 2.16-3.18 3.6-1.68-1.45-3.48-2.92-5.38-4.41-.39.29-.79.58-1.19.88a27.972 27.972 0 01-7.95 15.94l-.24.22c-.74.72-1.51 1.4-2.32 2.03-.05.5-.11 1-.17 1.5 5.03 2.04 9.75 3.64 13.99 4.76 9.61 2.54 16.34 2.73 17.94-.03.85-1.47.25-3.78-1.54-6.68 1.45-.63 2.73-1.59 3.75-2.78 2.89 4.73 3.7 8.84 1.96 11.85-2.82 4.9-11.52 5.42-23.32 2.3-4.09-1.08-8.61-2.6-13.42-4.5-.75 5.11-1.7 9.78-2.81 13.87-3.2 11.78-8 19.07-13.65 19.07s-10.45-7.29-13.65-19.07c-1.11-4.09-2.06-8.76-2.81-13.87-1.74.69-3.44 1.33-5.09 1.91-.13-1.67-.66-3.22-1.49-4.57 1.92-.68 3.9-1.43 5.94-2.26-.06-.49-.11-.99-.17-1.49-.89-.7-1.74-1.45-2.54-2.25l-.02-.02a27.972 27.972 0 01-7.95-15.94c-.4-.29-.8-.59-1.19-.88-4.29 3.34-8.04 6.63-11.13 9.74C7 81.26 3.47 87 5.07 89.77c.89 1.54 3.37 2.16 7.05 1.97a10.362 10.362 0 00.65 4.63c-5.87.26-10.06-1.08-11.86-4.2-2.82-4.9 1.09-12.7 9.69-21.35 2.99-3 6.55-6.16 10.61-9.37-4.05-3.21-7.62-6.37-10.61-9.37C2 43.43-1.91 35.63.91 30.74c2.83-4.89 11.53-5.41 23.33-2.29 4.09 1.08 8.61 2.59 13.42 4.5.27-1.85.57-3.64.89-5.36a10.2 10.2 0 004.61 1.09h.09c-.37 1.97-.7 4.04-1 6.18.45.19.89.39 1.34.59a27.89 27.89 0 0110.52-2.05c3.72 0 7.28.73 10.53 2.04.44-.2.89-.39 1.33-.58-.75-5.39-1.72-10.28-2.87-14.51-2.6-9.58-5.8-15.51-8.99-15.51-1.77 0-3.55 1.83-5.22 5.09-1.29-.87-2.78-1.46-4.4-1.67 2.73-5.27 6-8.26 9.63-8.26zm0 45.2c7.06 0 12.79 2.68 12.79 5.98 0 3.31-5.73 5.98-12.79 5.98-7.06 0-12.79-2.68-12.79-5.98s5.73-5.98 12.79-5.98zM41.33 67.64v4.59c2.28 8.08 24.75 6.52 25.58-.41v-4.59c-1.12 7.61-23.78 8.16-25.58.41zm-.06-13.58v4.49c2.28 7.89 24.88 6.83 25.71.06v-4.48c-1.13 7.43-23.91 7.5-25.71-.07zm0 6.61v4.59c2.28 8.08 24.88 6.99 25.71.06v-4.59c-1.13 7.61-23.91 7.69-25.71-.06zm12.85-23.26c13.27 0 24.03 10.76 24.03 24.03S67.39 85.47 54.12 85.47 30.09 74.71 30.09 61.44s10.76-24.03 24.03-24.03zm17.27 1.93c.9.7 1.76 1.46 2.56 2.27a28 28 0 017.95 15.95c.4.29.8.58 1.19.88 4.29-3.34 8.04-6.63 11.13-9.74 7-7.05 10.53-12.79 8.94-15.56-1.6-2.76-8.33-2.57-17.94-.03-4.24 1.12-8.96 2.72-13.99 4.77.05.47.11.97.16 1.46zm-6.78 48.12a27.905 27.905 0 01-10.48 2.03c-3.71 0-7.25-.72-10.49-2.04-.46.2-.92.41-1.38.6.75 5.39 1.72 10.28 2.87 14.51 2.6 9.58 5.8 15.51 9 15.51 3.19 0 6.4-5.93 8.99-15.51 1.14-4.23 2.11-9.13 2.86-14.51-.46-.19-.92-.39-1.37-.59zM26.35 57.54c.86-6.18 3.74-11.73 7.95-15.93l.24-.22c.73-.71 1.5-1.39 2.3-2.02.05-.5.11-1 .17-1.5-5.04-2.04-9.75-3.64-13.99-4.77-9.61-2.54-16.34-2.73-17.94.03C3.47 35.9 7 41.64 14.01 48.69c3.09 3.11 6.84 6.4 11.13 9.74.4-.3.8-.59 1.21-.89zm70.45 9.21c3.67 0 6.65 2.98 6.65 6.65s-2.98 6.65-6.65 6.65-6.65-2.98-6.65-6.65 2.97-6.65 6.65-6.65zM22.35 85.8c3.67 0 6.65 2.98 6.65 6.65s-2.98 6.65-6.65 6.65-6.65-2.98-6.65-6.65 2.98-6.65 6.65-6.65zm20.8-74.04c3.67 0 6.65 2.98 6.65 6.65 0 3.67-2.98 6.65-6.65 6.65-3.67 0-6.65-2.98-6.65-6.65 0-3.67 2.98-6.65 6.65-6.65z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </article>
        <article className="grid grid-cols-6 gap-6 justify-around w-full">
          <span>
            <FaPython className="w-12 h-12" />
          </span>
          <span>
            <SiNumpy className="w-12 h-12" />
          </span>
          <span>
            <SiPandas className="w-12 h-12" />
          </span>
          <span>
            <svg
              className="w-12 h-12 fill-[#003049]"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 122.9 85.6"
              xmlSpace="preserve"
              //   {...props}
            >
              <path
                d="M7.5 0h107.9c4.1 0 7.5 3.4 7.5 7.5v70.6c0 4.1-3.4 7.5-7.5 7.5H7.5c-4.1 0-7.5-3.4-7.5-7.5V7.5C0 3.4 3.4 0 7.5 0zm62.4 63.3h28.5v4H69.9v-4zm0-10.2H109v4H69.9v-4zM92.1 35h5.6c.3 0 .5.2.5.5v11c0 .3-.2.5-.5.5h-5.6c-.3 0-.5-.2-.5-.5v-11c0-.2.2-.5.5-.5zm-21.6-6.7h5.6c.3 0 .5.2.5.5v17.8c0 .3-.2.5-.5.5h-5.6c-.3 0-.5-.2-.5-.5V28.8c-.1-.3.2-.5.5-.5zm10.8-3.8h5.6c.3 0 .5.2.5.5v21.6c0 .3-.2.5-.5.5h-5.6c-.3 0-.5-.2-.5-.5V25c0-.3.2-.5.5-.5zm-42 23.7l17 .3c0 6.1-3 11.7-8 15.1l-9-15.4zm-1.7-2.9l-.2-19.8v-1.3l1.3.1c1.6.1 3.2.4 4.7.8s2.9 1 4.3 1.7c6.9 3.6 11.7 10.8 12.1 19l.1 1.3h-1.3l-19.7-.6h-1.1l-.2-1.2zm2.2-18.6l.2 17.4 17.3.5c-.7-6.8-4.9-12.7-10.7-15.8-1.2-.6-2.5-1.1-3.8-1.5-1.1-.2-2-.4-3-.6zm-3.9 20.5L45.6 64c-3 1.7-6.3 2.6-9.7 2.6-10.7 0-19.4-8.7-19.4-19.4 0-10.4 8.2-19 18.6-19.4l.8 19.4zm79.7-33.1H7.2v64.4h108.4V14.1z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </article>
      </section>
    </main>
  );
};
export default TechStack;
