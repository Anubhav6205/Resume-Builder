// Updated JSX
import { InfoContext } from "@/context/InfoProvider";
import { useContext } from "react";

export default function First() {
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
    <div className="template-container">
      <div className="template-container-content">
        <div className="template-container-content-bio">
          <h1 className="template-container-content-bio-name">{name.toUpperCase()}</h1>
          <div className="template-container-content-bio-credentials">
            <span className="template-container-content-bio-credentials-phone">
              {phone}
            </span>
            <span className="template-container-content-bio-credentials-email">
              {email}
            </span>
            <span className="template-container-content-bio-credentials-linkedin">
              {social}
            </span>
          </div>
        </div>

        <div className="template-container-content-profile">
          <h2 className="template-container-content-profile-title">Profile</h2>
          <p className="template-container-content-profile-description">
            {profile}
          </p>
        </div>

        <div className="template-container-content-skills">
          <h2 className="template-container-content-skills-title">Skills</h2>
          <div className="template-container-content-skills-list-skill">
            {skills.map((skill, index) => (
              <span key={index} className="template-container-content-skills-list-skill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="template-container-content-experience">
          <h2 className="template-container-content-experience-title">Experience</h2>
          <div className="template-container-content-experience-list">
            {experience.map((experience, index) => (
              <div key={index}>
                <h2 className="template-container-content-experience-list-company">
                  {experience.company}
                </h2>
                <h3 className="template-container-content-experience-list-position">
                  {experience.position}
                </h3>
                <p className="template-container-content-experience-list-description">
                  {experience.description.map((description, index) => (
                    <span key={index}>{description}.&nbsp;</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="template-container-content-education">
          <h2 className="template-container-content-education-title">Education</h2>
          <div className="template-container-content-education-list">
            {education.map((education, index) => (
              <div key={index}>
                <h2 className="template-container-content-education-list-title">
                  {education.title}
                </h2>
                <p className="template-container-content-education-list-description">
                  {education.description.map((description, index) => (
                    <span key={index}>{description}.&nbsp;</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          
        </div>

        <div className="template-container-content-projects">
          <h2 className="template-container-content-projects-title">Projects</h2>
          <div className="template-container-content-projects-list">
            {projects?.map((project, index) => (
              <div key={index}>
                <h2 className="template-container-content-projects-list-title">
                  {project.title}
                </h2>
                <p className="template-container-content-projects-list-description">
                  {project.description.map((description, index) => (
                    <span key={index}>{description},&nbsp;</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="template-container-content-certifications">
          <h2 className="template-container-content-certifications-title">Certifications</h2>
          <div  className="template-container-content-certifications-list">
          {certifications?.map((certification, index) => (
            <div key={index} className="template-container-content-certifications-list-certification">
              <span className="template-container-content-certifications-list-certification-title">
                {certification.title}
              </span>
         
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
