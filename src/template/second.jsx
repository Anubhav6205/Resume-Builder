// Updated JSX
import { InfoContext } from "@/context/InfoProvider";
import { useContext } from "react";

export default function Second() {
  const { information } = useContext(InfoContext);
  const {
    name,
    phone,
    email,
    social,
    profile,
    skills,
    experience,
    education,
    projects,
    certifications
  } = information;

  return (
    <div className="template-second-container">
      <div className="template-second-container-content">
        <div className="template-second-container-content-bio">
          <h1 className="template-second-container-content-bio-name">{name.toUpperCase()}</h1>
          <div className="template-second-container-content-bio-credentials">
            <span className="template-second-container-content-bio-credentials-phone">
              Phone: &nbsp;&nbsp;&nbsp;&nbsp;{phone}
            </span>
            <span className="template-second-container-content-bio-credentials-email">
              Email: &nbsp;&nbsp;&nbsp;&nbsp;{email}
            </span>
            <span className="template-second-container-content-bio-credentials-linkedin">
              LinkedIn:&nbsp;&nbsp;<a href={social} 
              style={{color:"white",textDecoration:"none"}}>{social}</a>
            </span>
           
            
          </div>
        </div>
        <div className="template-second-container-content-other">

        <div className="template-second-container-content-other-profile">
          <p className="template-second-container-content-other-profile-description">
            {profile}
          </p>
        </div>

        <div className="template-second-container-content-other-skills">
          <h2 className="template-second-container-content-other-skills-title">Skills</h2>
          <div className="template-second-container-content-other-skills-list-skill">
            {skills.map((skill, index) => (
              <span key={index} className="template-second-container-content-other-skills-list-skill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="template-second-container-content-other-experience">
          <h2 className="template-second-container-content-other-experience-title">Experience</h2>
          <div className="template-second-container-content-other-experience-list">
            {experience.map((experience, index) => (
              <div key={index}>
                <h2 className="template-second-container-content-other-experience-list-company">
                  {experience.company}
                </h2>
                <h3 className="template-second-container-content-other-experience-list-position">
                  {experience.position}
                </h3>
                <p className="template-second-container-content-other-experience-list-description">
                  {experience.description.map((description, index) => (
                    <span key={index}>{description}.&nbsp;</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="template-second-container-content-other-education">
          <h2 className="template-second-container-content-other-education-title">Education</h2>
          <div className="template-second-container-content-other-education-list">
            {education.map((education, index) => (
              <div key={index}>
                <h2 className="template-second-container-content-other-education-list-title">
                  {education.title}
                </h2>
                <p className="template-second-container-content-other-education-list-description">
                  {education.description.map((description, index) => (
                    <span key={index}>{description}.&nbsp;</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          
        </div>

        <div className="template-second-container-content-other-projects">
          <h2 className="template-second-container-content-other-projects-title">Projects</h2>
          <div className="template-second-container-content-other-projects-list">
            {projects?.map((project, index) => (
              <div key={index}>
                <h2 className="template-second-container-content-other-projects-list-title">
                  {project.title}
                </h2>
                <p className="template-second-container-content-other-projects-list-description">
                  {project.description.map((description, index) => (
                    <span key={index}>{description},&nbsp;</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="template-second-container-content-other-certifications">
          <h2 className="template-second-container-content-other-certifications-title">Certifications</h2>
          <div  className="template-second-container-content-other-certifications-list">
          {certifications?.map((certification, index) => (
            <div key={index} className="template-second-container-content-other-certifications-list-certification">
              <span className="template-second-container-content-other-certifications-list-certification-title">
                {certification.title}
              </span>
         
            </div>
          ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
