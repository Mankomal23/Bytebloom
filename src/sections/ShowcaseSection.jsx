import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* <div className="first-project-wrapper overflow-hidden">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Car Inventory Management System" />
            </div>
            <div className="text-content">
              <h2>
                      <a href="https://yt-car-app-61f7a2c9ef66.herokuapp.com/" 
                        class="text-blue-200 underline hover:text-blue-400"
                        target="_blank" 
                        rel="noopener noreferrer">
                          Car Inventory Management System
                      </a> 
              </h2>
              <p className="text-white-50 md:text-xl">
                An web app built with React, Node.js, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div> */}

          <div className="first-project-wrapper overflow-hidden">

            <div className="project" ref={libraryRef}>
              <div className="image-wrapper ">
                <img
                  src="/images/project1.png"
                  alt="Car Inventory Management System"
                />
              </div>
              <h2>
                <a href="https://yt-car-app-61f7a2c9ef66.herokuapp.com/" 
                    class="text-blue-200 underline hover:text-blue-400 "
                    target="_blank" 
                    rel="noopener noreferrer">
                  Car Inventory Management System
                </a>
              </h2>
              
              <p className="text-content">
                An web app built with React, Node.js, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>

            <div className="project" ref={libraryRef}>
              <div className="image-wrapper ">
                <img
                  src="/images/project2.png"
                  alt="Tweet Management Platform"
                />
              </div>
              <h2>
                <a href="https://mankomal.pythonanywhere.com/" 
                    class="text-blue-200 underline hover:text-blue-400"
                    target="_blank" 
                    rel="noopener noreferrer">
                  The Tweet Management Platform 
                </a>
              </h2>
              
              <p className="text-content">
                A platform built with TailwindCSS and django Framework for a fast and secure
                user-friendly experience.
              </p>
            </div>

            <div className="project" ref={libraryRef}>
              <div className="image-wrapper ">
                <img
                  src="/images/project3.png"
                  alt="Autism Prediction"
                />
              </div>
              <h2>
                <a href="https://autism-predictor-mankomal.streamlit.app/" 
                    class="text-blue-200 underline hover:text-blue-400"
                    target="_blank" 
                    rel="noopener noreferrer">
                  Autism Predictor
                </a>
              </h2>
              
              <p className="text-content">
                It is autism predictor model, built using various Pyhton libraries and Data Manipulation Techniques. 
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;