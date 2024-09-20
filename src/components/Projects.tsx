import { useEffect, useRef, useState } from "react";

const Projects = () => {

    const [isVisible, setIsVisible] = useState(false)
    const projectsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver( entries => {
            if(entries[0].isIntersecting) {
                setIsVisible(true)
            }
        },
        {
            threshold: 0.5
        })

        const currentRef = projectsRef.current
        if(currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if(currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    return ( 
      <div 
        id="projects-container"
        className={isVisible ? "visible" : ""}
        ref={projectsRef}
      >
        <h1>Projects</h1>
        <div id="projects-section">
            <div className="project">
                <a draggable={false} className="project-title" href="https://morsecodeencoder.onrender.com/" target="_href"><h2>Morse Code Encoder</h2></a>
                <img draggable={false} className="project-demo" src="./images/project-demos/morsecode.png" alt="morse-code" />
                <p className="project-description">React application where the user can enter in some text and have it encoded for them in morse code!</p>
            </div>
            <div className="project">
                <a draggable={false} className="project-title" href="https://adridalo.github.io/CompileChecker/" target="_href"><h2>Compile Checker</h2></a>
                <img draggable={false} className="project-demo" src="./images/project-demos/compilechecker.gif" alt="compile-checker" />
                <p className="project-description">Application where user can see if their source code compiles</p>
            </div>
            <div className="project">
                <a draggable={false} className="project-title" href="#" target="_href"><h2>Blackjack</h2></a>
                <img draggable={false} className="project-demo" src="./images/project-demos/boiler.jpg" alt="boilerplate" />
                <p className="project-description">Vite React application game of the ever so infamous game, Blackjack!</p>
            </div>
            <div className="project">
                <a draggable={false} className="project-title" href="https://adridalo.github.io/ShutTheBox/" target="_href"><h2>Shut The Box</h2></a>
                <img draggable={false} className="project-demo" src="./images/project-demos/shutthebox.png" alt="shutthebox" />
                <p className="project-description">ShutTheBox game written in ReactJS</p>
            </div>
        </div>
      </div>  
    );
}
 
export default Projects;