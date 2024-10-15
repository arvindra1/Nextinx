"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import { useInView, animated } from "react-spring";

const Video = () => {
  const [ref, inView] = useInView();

  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="No Website, No Growth No Digital Presence"
          paragraph=" Website Is Your 24/7 Business Ambassador."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <div className="absolute inset-0 -z-10 bg-gray-500/30 blur-2xl filter dark:bg-blue-500/30" />
                <animated.div ref={ref}>
                  {inView ? (
                    <Spline
                      scene="https://prod.spline.design/DQfxlvKA-seeYxpS/scene.splinecode"
                      className="z-20 w-full"
                    />
                  ) : null}
                </animated.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
