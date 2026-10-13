import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations(rootRef) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".hero-bg-img", { scale: 1.12, opacity: 0, duration: 1.4 }, 0)
        .from(".nav", { y: -20, opacity: 0, duration: 1 }, 0.1)
        .from(".hero-kicker", { y: 20, opacity: 0, duration: 0.8 }, 0.25)
        .from(".hero-title", { y: 30, opacity: 0, filter: "blur(10px)", duration: 1 }, 0.35)
        .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8 }, 0.55)
        .from(".scroll-down", { opacity: 0, duration: 0.8 }, 0.75);

      gsap.to(".hero-bg-img", {
        y: 60,
        scale: 1.06,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-content", {
        y: -80,
        opacity: 0.2,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      const hSection = document.querySelector(".horizontal-section");
      const hTrack = document.querySelector(".horizontal-track");

      if (hSection && hTrack) {
        gsap.to(hTrack, {
          x: () => -(hTrack.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            id: "games",
            trigger: hSection,
            start: "top top",
            end: () => `+=${hTrack.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      gsap.to(".aurora-bg-img", {
        y: 60,
        scale: 1.08,
        scrollTrigger: {
          trigger: ".aurora-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.from(".systems-header", {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: ".aurora-section",
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
        },
      });

      gsap.from(".system-row", {
        y: 35,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".aurora-section",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });

      gsap.from(".obs-card", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".obs-section",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });

      gsap.from(".footer-content", {
        y: 30,
        opacity: 0,
        scrollTrigger: {
          trigger: ".footer",
          start: "top 85%",
          end: "top 55%",
          scrub: 1,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef]);
}
