import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export function scrollToSection(targetId) {
  if (!lenisInstance) {
    const el = document.querySelector(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (targetId === "#home" || targetId === "top") {
    lenisInstance.scrollTo(0, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    return;
  }

  if (targetId === "#games") {
    const st = ScrollTrigger.getById("games");
    const target = st ? st.start : document.querySelector("#games");
    if (target !== null && target !== undefined) {
      lenisInstance.scrollTo(target, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
    return;
  }

  if (targetId === "#systems") {
    const st = ScrollTrigger.getById("games");
    const hSection = document.querySelector(".horizontal-section");
    const hOffset = hSection ? hSection.offsetHeight : window.innerHeight;
    const target = st ? st.end + hOffset : document.querySelector("#systems");
    if (target !== null && target !== undefined) {
      lenisInstance.scrollTo(target, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
    return;
  }

  if (targetId === "#contact") {
    const el = document.querySelector("#contact");
    if (el) {
      lenisInstance.scrollTo(el, {
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
    return;
  }

  const el = document.querySelector(targetId);
  if (el) {
    lenisInstance.scrollTo(el, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
    });

    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      scrollToSection(href);
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
