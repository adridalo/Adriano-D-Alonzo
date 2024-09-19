import { useEffect, useRef, useState } from "react";

const About = () => {

    const [isVisible, setIsVisible] = useState(false)
    const aboutRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver( entries => {
            if(entries[0].isIntersecting) {
                setIsVisible(true)
            }
        },
        { 
            threshold: 0.5
        })

        if(aboutRef.current) {
            observer.observe(aboutRef.current)
        }

        return () => {
            if(aboutRef.current) {
                observer.unobserve(aboutRef.current)
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
                <p id="about-info">21 year old software developer whos passionate about honing my skills, creating great things, and all things IT! Over the past 3 years, I've gathered up lots of experience with numerous technologies in all stacks of developement, specializing primarily in web development. I am familiar with both frontend & backend sectors of development, considering myself a Jack of all Trades when it comes to developing any sort of application. I strive to make innovative and appealing things, while at the same time always keep myself learning new technologies in the ever-so-expanding world of IT!</p>
            </div>
        </div>
    );
}
 
export default About;