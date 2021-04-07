import React from "react";

const Resume = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2019-Present</h3>
                    <p>Created high-end graphics and multimedia content. 
                        Designed and developed print materials and content for web, video and other multimedia products that 
                        improve tactical and organizational communication. Oversaw the development and production of promotional 
                        and collateral materials. Established and maintain a consistent corporate image throughout all promotional 
                        materials and events.</p>
                    </div>    
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2019</h3>
                    <p>Worked on several collaboration pieces. 
                        Assisted in team projects to achieve the desired outcome of the client. 
                        Created custom infographics for social media campaigns. Generated likes and foot traffic for our Instagram Page. 
                        In process of redesigning websites to increase proﬁtability by repurposing our information in a clean and sleeker aesthetics.</p>
                    </div>    
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2016-2017</h3>
                    <p>Worked with in-store coordinators on a range of ambitious and innovative projects. 
                        Responsible for helping to drive the creative direction of campaigns, an understanding of typography, 
                        layout, and art direction that help the team produce the best work possible. 
                        Developed artwork and layout for print and digital signage, banners, posters, and ﬂyers.</p>
                    </div>    
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2015-2016</h3>
                    <p>Conceptualized and design graphics, ads, print collateral and other materials 
                        under the supervision of the Creative Service Manager. Meticulous attention to detail and an eye for fresh 
                        and engaging design. Able to work independently and work on multiple projects with tight deadlines. 
                        Helped table conferences and create materials for these events. </p>
                    </div>    
                </div>
                {/* - */}
            </div>
        </div>
    )
}

export default Resume;
