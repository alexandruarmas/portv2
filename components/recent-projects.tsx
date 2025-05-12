import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <section id="projects" className="section-spacing">
      <h1 className="heading-rye mb-24">
        O selecție de{" "}
        <span className="text-purple">proiecte recente</span>
      </h1>

      <div className="element-spacing flex flex-wrap items-center justify-center gap-8 pb-[10px]">
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }) => (
            <div
              key={id}
              className="m-4 flex h-[30rem] w-[90vw] items-center justify-center sm:h-[38rem] sm:w-[540px] lg:min-h-[30rem]"
            >
              <PinContainer title="Vizitează" href={link}>
                <div className="relative mb-6 flex h-[28vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[38vh] sm:w-[540px]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <Image
                      height={330}
                      width={552}
                      src="/bg.png"
                      alt="bg-img"
                    />
                  </div>

                  {img === "/mrarmas-avatar.png" ? (
                    <Image
                      height={340}
                      width={340}
                      src={img}
                      alt={title}
                      className="absolute z-10 object-contain"
                      style={{ 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  ) : (
                    <Image
                      height={300}
                      width={464}
                      src={img}
                      alt={title}
                      className="absolute bottom-0 z-10"
                    />
                  )}
                </div>

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light font-andika lg:text-xl lg:font-normal">
                  {des}
                </p>

                <div className="mb-2 mt-5 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, i) => (
                      <div
                        key={icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                        }}
                      >
                        <Image
                          height={40}
                          width={40}
                          src={icon}
                          alt={icon}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <Link
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex text-sm text-purple md:text-xs lg:text-xl"
                    >
                      Cod Sursă
                    </Link>

                    <FaLocationArrow className="ms-3" color="#cbacf9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  );
};
