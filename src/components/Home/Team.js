import './CSS/team.css'
import { useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";
import { SocialIcon } from 'react-social-icons'
import image1 from './CSS/image1.JPG'
import image2 from './CSS/image2.jpg'

const Team = () => {
    const revealRefBottom = useRef(null);
    const revealRefLeft = useRef(null);
    const revealRefTop = useRef(null);
    const revealRefRight = useRef(null);

    useEffect(() => {


        ScrollReveal().reveal(revealRefBottom.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    useEffect(() => {


        ScrollReveal().reveal(revealRefRight.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'right',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {


        ScrollReveal().reveal(revealRefLeft.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'left',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {


        ScrollReveal().reveal(revealRefTop.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'top',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    return (
        <div className="Team">
            <h2 ref={revealRefTop}> Our Team</h2>
            <div className='Team-Content'>
                <div className='Team-Content-Card' ref={revealRefLeft}>
                    <img src={image1} className='image'></img>
                    <h3>Aafiya Javed | <span>3rd Year, CSE(IOT) </span></h3>
                    <p>Enthusiastic Student of BTech in CSE(IOT) with a solid foundation in Java, Python and JavaScript. Experienced in crafting engaging web experiences through projects
                        like a Amazon Shopping Website Clone,Online Voting System etc. Adept at adapting to new technologies like React.js and Node.js,
                        eager to contribute adaptability and fresh perspectives to dynamic teams.</p>
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.linkedin.com/in/aafiya-javed-4ab596292/" target='_blank' url="www.linkedin.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="" target='_blank' url="www.github.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="" target='_blank' url="www.instagram.com" />
                </div>

                <div className='Team-Content-Card' ref={revealRefRight}>
                    <img src={image2} className='image'></img>
                    <h3>Harshit Kumar Pandey | <span>3rd Year, CSE(IOT) </span></h3>
                    <p>Energetic Student with a BTech in CSE(IOT), proficient in Java, Python, and JavaScript. Skilled in creating interactive web applications, demonstrated through projects like Resume Builder System. Experienced in embracing new technologies such as React.js and Node.js, and ready to bring innovative ideas and flexibility to dynamic teams.</p>                    
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.linkedin.com/in/harshit-pandey-038859238/" target='_blank' url="www.linkedin.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="" target='_blank' url="www.github.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="" target='_blank' url="www.instagram.com" />
                </div>

            </div>
        </div>
    )
}
export default Team;