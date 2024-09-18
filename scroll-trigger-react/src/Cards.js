import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cards() {
  const images = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
    "./images/5.png",
    "./images/6.png",
  ];

  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <main className="text-white flex flex-col w-full gap-5 items-center py-[15vh]">
      {images.map((image, index) => (
        <div
          key={index}
          className="card card1 flex flex-col gap-5 px-[20px] pt-[15vh] pb-[20vh] bg-[#2e251e] w-[27vw] items-center text-center rounded-xl sticky top-[15vh]"
        >
          <img src={image} alt="" className="aspect-square w-[180px]" />
          <h1 className="text-4xl font-thin">
            THE <br />
            <span className="font-bold">ALGORITHM</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
            repellat consequatur dicta quia impedit id ut iste,
          </p>
        </div>
      ))}
    </main>
  );
}
