
export default function AboutMe({ skills, sectionName, contactLabel, contactHref, sectionDescription, detailHeader, detailDescription1, detailDescription2 }) {

    return (<section id="about" className="about sec-pad">
        <div className="main-container">
            <h2 className="heading heading-sec heading-sec__mb-med">
                <span className="heading-sec__main">{sectionName}</span>
                <span className="heading-sec__sub">
                    {sectionDescription}
                </span>
            </h2>
            <div className="about__content">
                <div className="about__content-main">
                    <h3 className="about__content-title"> {detailHeader} </h3>
                    <div className="about__content-details">
                        <p className="about__content-details-para">
                            {detailDescription1}
                        </p>
                        <p className="about__content-details-para">
                            {detailDescription2}
                        </p>
                    </div>
                    <a href={contactHref} className="btn btn--med btn--theme dynamicBgClr">{contactLabel}</a>
                </div>
                <div className="about__content-skills">
                    <h3 className="about__content-title">My Skills</h3>
                    <div className="skills">
                        {skills.map((skill) => (
                            <div className="skills__skill" key={skill}>{skill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>);
}