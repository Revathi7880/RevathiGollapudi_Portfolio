import { useEffect } from 'react';

const IntersectionObserverFile = (elements) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    console.log("elements", elements);
    elements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, [elements]);
};

export default IntersectionObserverFile;
