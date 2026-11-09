import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

export const useMediaQuery = (query) => {
  const subscribe = useCallback(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    [query]
  );
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches);
};

export const useReducedMotion = () => useMediaQuery("(prefers-reduced-motion: reduce)");

export const useInView = (ref, rootMargin = "0px") => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
};
