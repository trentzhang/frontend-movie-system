import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import type { SectionName } from "./types";

export function useSectionInView(sectionName: String, threshold = 0.8) {
  const { ref, inView, entry } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      console.log("sectionName", sectionName);
      setActiveSection(sectionName);
    }
  }, [inView, entry, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
