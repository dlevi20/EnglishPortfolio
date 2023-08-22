import React from "react"
import HoverVideoPlayer from "react-hover-video-player"
import GreenBay from "../Greenbay.png"
import FitnessHub from "../FitnessHub.PNG"
import FitnessHubVideo from "../videos/FitnessHubVideo.mp4"
import GreenbayVideo from "../videos/GreenbayVideo.mp4"
import BootstrapVideo from "../videos/BootstrapVideo.mp4"

function Projects(){
    return (
        <section className="projects container" id="projects">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <div>
                        <HoverVideoPlayer
                            videoSrc={GreenbayVideo} 
                            videoClassName="project-img"
                            pausedOverlay={<img src={GreenBay} alt="" className="project-img"/>}
                            overlayTransitionDuration={500}
                        />
                        <h1 className="project-title">Greenbay</h1>
                        <p className="project-description">
                            Greenbay is an online marketplace, including functions used in everyday life such as creating an account, logging in, purchasing or uploading an item for sale and more! The website is conntected to a backend, but I only worked on the frontend!
                        </p>
                    </div>
                    <div className="project-btns">
                        <a href="https://github.com/barnaudvarhelyi/Greenbay-Webshop" className="project-btn" target="blank"><h4>Code</h4></a>
                    </div>
                </div>
                <div className="project">
                    <div>
                    <HoverVideoPlayer
                        videoSrc={FitnessHubVideo} 
                        videoClassName="project-img"
                        pausedOverlay={<img src={FitnessHub} alt="" className="project-img"/>}
                        overlayTransitionDuration={500}
                    />
                    <h1 className="project-title">Fitness Hub</h1>
                    <p className="project-description">Fitness Hub is the webpage of a gym, where the user can gather informations about the place and find out more about its services.</p>
                    </div>  
                    <div className="project-btns">
                        <a href="https://dlevi20.github.io/FitnessHub/" className="project-btn" target="blank"><h4>Webpage</h4></a>
                        <a href="https://github.com/dlevi20/FitnessHub/tree/master" className="project-btn" target="blank"><h4>Code</h4></a>
                    </div>
                </div>
                <div className="project">
                    <div>
                        <HoverVideoPlayer
                            videoSrc={BootstrapVideo} 
                            videoClassName="project-img"
                            pausedOverlay={<img src={GreenBay} alt="" className="project-img"/>}
                            overlayTransitionDuration={500}
                        />
                        <h1 className="project-title">Debrecen Nyomda</h1>
                        <p className="project-description">Debrecen Nyomda is the landing page of a press company, made in Bootstrap.</p>
                    </div>
                    <div className="project-btns">
                        <a href="https://dlevi20.github.io/Bootstrap/" className="project-btn" target="blank"><h4>Webpage</h4></a>
                        <a href="https://github.com/dlevi20/Bootstrap" className="project-btn" target="blank"><h4>Code</h4></a>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Projects