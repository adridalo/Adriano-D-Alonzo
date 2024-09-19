import { useEffect, useRef, useState } from "react";
import { calculateAge, calculateTimeInCollege } from "../utils";

const About = () => {

    const [isVisible, setIsVisible] = useState(false)
    const aboutRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver( entries => {
            if(entries[0].isIntersecting) {
                setIsVisible(true)
            }
        },
        { 
            threshold: 0.5
        })

        const currentRef = aboutRef.current
        if(currentRef) {
            observer.observe(aboutRef.current)
        }

        return () => {
            if(currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    return (
        <div 
            id="about-container"
            className={isVisible ? "visible" : ""}
            ref={aboutRef}
        >
            <h1 >About Me</h1>
            <div id="about-section">
                <img 
                    src="./images/splash.jpg" 
                    alt="splash" 
                    id="splash"
                    draggable={false}
                />
                <p id="about-info">{calculateAge()} year old software developer whos passionate about honing my skills, creating great things, and all things IT! Over the past {calculateTimeInCollege()} years, I've gathered up lots of experience with numerous technologies in all stacks of developement, specializing primarily in web development. I am familiar with both frontend & backend sectors of development, considering myself a Jack of all Trades when it comes to developing any sort of application. I strive to make innovative and appealing things, while at the same time always keep myself learning new technologies in the ever-so-expanding world of IT!</p>
            </div>
        </div>
    );
}
 
export default About;