
import { useEffect, useRef, useState } from 'react';

// Custom hook for revealing elements on scroll
export const useScrollReveal = (
  threshold = 0.1,
  rootMargin = '0px',
  animationClass = 'animate-fade-in'
) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            ref.current.classList.add(animationClass);
          }
          // Once revealed, stop observing
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, animationClass]);

  return { ref, isVisible };
};

// Function to apply smooth scrolling to all anchor links
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (!href) return;
      
      const targetElement = document.querySelector(href);
      if (!targetElement) return;
      
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
};

// Add or remove class on scroll
export const useScrollClass = (
  className: string,
  triggerPoint = 100
) => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.documentElement;
      if (window.scrollY > triggerPoint) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [className, triggerPoint]);
};
