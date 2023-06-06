import { NavLink } from "react-router-dom"
import serter from '../images/serter.jpg'
import linkedin from '../images/linkedin2.png'
import github from '../images/github.png'
import './HomePage.css'
import { ExternalLink } from 'react-external-link';
export function HomePage() {
    return (
        <div className="container-fluid size">
            <div className="row">

                <div className="col-sm-12 col-md-7 col-lg-10">
                    <h2 id="about-me" className="fw-bolder">Serter Iyigunlu</h2>
                    <p className="fw-bolder">Junior Web Developer</p>
                    <ExternalLink href="https://www.linkedin.com/in/serter-iyigunlu-18897955"><img src={linkedin} className="social-us" /></ExternalLink>
                    <ExternalLink href="https://github.com/serteri"><img src={github} className="rounded img-fluid social-us" /></ExternalLink>
                </div>

            </div>


        </div>
    )
}