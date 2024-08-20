import { CardBody, CardContainer, CardItem } from '../ui/3dCard';
import { FaGithub } from 'react-icons/fa6';

export function ThreeDCard({
  titleSrc,
  src,
  repo,
  link,
  title,
  tStack,
  description,
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#003049] dark:text-[#fdf0d5]"
        >
          <div className="flex gap-1 sm:gap-3 items-center">
            {titleSrc ? (
              <img src={titleSrc} className="w-10 h-10" alt={title} />
            ) : (
              ''
            )}
            {title}
          </div>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-[#003049] text-sm text-left font-medium mt-2 dark:text-[#fdf0d5]"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          {src ? (
            <img
              src={src}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          ) : (
            ''
          )}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-[#003049]0 text-sm max-w-sm mt-10 dark:text-[#fdf0d5]"
        >
          <span className="flex gap-6">
            {tStack.map((icon, index) => {
              const date = new Date().getTime();
              return (
                <span
                  className="text-[#003049] dark:text-[#fdf0d5]"
                  key={index}
                >
                  {icon}
                </span>
              );
            })}
          </span>
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xl font-normal text-[#003049] dark:text-[#fdf0d5]"
          >
            <a href={repo}>
              <FaGithub />{' '}
            </a>
          </CardItem>
          {link ? (
            <a href={link}>
              {' '}
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-[#003049] dark:bg-[#fdf0d5] dark:text-[#003049] text-white text-xs font-bold"
              >
                Visit →
              </CardItem>
            </a>
          ) : (
            ''
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
