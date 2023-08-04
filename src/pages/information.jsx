import React, { useRef, useState } from "react";
import First from "@/template/first";
import { useContext, useEffect } from "react";

import { InfoContext } from "@/context/InfoProvider";
import Second from "@/template/second";
import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function Information() {
  const { information, setInformation,template } = useContext(InfoContext);

  const handleSkillChange = (event) => {
    const inputSkills = event.target.value;
    const skillsArray =
      inputSkills.length > 0
        ? inputSkills.split(",").map((skill) => skill.trim())
        : [];
    setInformation({ ...information, skills: skillsArray });
  };

  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      description: []
    }
  ]);

  const handleExperienceChange = (index, field, value) => {
    const duplicateExperience = [...experience];
    duplicateExperience[index][field] = value;
    setExperience(duplicateExperience);
    setInformation({ ...information, experience: duplicateExperience });
  };

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        company: "",
        position: "",
        description: []
      }
    ]);
  };

  const [education, setEducation] = useState([
    {
      title: "",
      description: []
    }
  ]);

  const handleEducationChange = (index, field, value) => {
    const duplicateEducation = [...education];
    duplicateEducation[index][field] = value;
    setEducation(duplicateEducation);
    setInformation({ ...information, education: duplicateEducation });
  };

  const [projects, setProjects] = useState([
    {
      title: "",
      description: []
    }
  ]);

  const handleProjectChange = (index, field, value) => {
    const duplicateProjects = [...projects];
    duplicateProjects[index][field] = value;
    setProjects(duplicateProjects);
    setInformation({ ...information, projects: duplicateProjects });
  };

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        description: []
      }
    ]);
  };

  const [certifications, setCertifications] = useState([
    {
      title: "",
      description: []
    }
  ]);

  const handleCertificationChange = (index, field, value) => {
    const duplicateCertifications = [...certifications];
    duplicateCertifications[index][field] = value;
    setCertifications(duplicateCertifications);
    setInformation({ ...information, certifications: duplicateCertifications });
  };

  const handleAddCertification = () => {
    setCertifications([
      ...certifications,
      {
        title: "",
        description: []
      }
    ]);
  
  };

  const previewRef = useRef(null);



  const handlePdfPrint = async () => {
    const element = previewRef.current;
    if (element && typeof window !== "undefined") {
      const html2pdf = (await import("html2pdf.js")).default;
      
      const opt = {
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 4 },
        jsPDF: {
          format: "a4",
          orientation: "portrait",
          options: {
            pagesplit: false, // Set to false to force one page
          },
        },
      };
  
      html2pdf().set(opt).from(element).save();
    }
  };
  return (
    <div className="information-container">
      <Navbar/>
      <div className="information-container-main">
        <div className="information-container-main-bio">
          <div className="information-container-main-bio-personal">
            <h2 className="information-container-main-bio-personal-title">
              Personal Details
            </h2>
            <div className="information-container-main-bio-personal-list">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setInformation({ ...information, name: e.target.value })
                }
              ></input>
              <input
                type="text"
                placeholder="Phone"
                onChange={(e) =>
                  setInformation({ ...information, phone: e.target.value })
                }
              ></input>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) =>
                  setInformation({ ...information, email: e.target.value })
                }
              ></input>
              <input
                type="text"
                placeholder="LinkedIn"
                onChange={(e) =>
                  setInformation({ ...information, social: e.target.value })
                }
              ></input>
            </div>
          </div>

          <div className="information-container-main-bio-profile">
            <h2 className="information-container-main-bio-profile-title">
              Profile Details
            </h2>
            <input
              type="text"
              placeholder="Profile Summary"
              onChange={(e) =>
                setInformation({ ...information, profile: e.target.value })
              }
            ></input>
          </div>
          <div className="information-container-main-bio-skills">
            <h2 className="information-container-main-bio-skills-title">
              Technical Skills
            </h2>
            <input
              type="text"
              placeholder="Use comma for saperate skills"
              onChange={(e) => handleSkillChange(e)}
            ></input>
          </div>
          <div className="information-container-main-bio-experience">
            <h2 className="information-container-main-bio-experience-title">
              Work Experience
            </h2>
            {experience.map((experience, index) => (
              <div
                key={index}
                className="information-container-main-bio-experience-list"
              >
                <input
                  type="text"
                  placeholder="Company Name"
                  onChange={(e) =>
                    handleExperienceChange(index, "company", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Job Role"
                  onChange={(e) =>
                    handleExperienceChange(index, "position", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Use comma to separate job description"
                  onChange={(e) =>
                    handleExperienceChange(
                      index,
                      "description",
                      e.target.value.split(",")
                    )
                  }
                />
              </div>
            ))}
            <button
              type="button"
              className="information-container-main-bio-experience-add"
              onClick={handleAddExperience}
            >
              Add more experience
            </button>
          </div>
          <div className="information-container-main-bio-education">
            <h2 className="information-container-main-bio-education-title">
              Education
            </h2>
            {education.map((education, index) => (
              <div
                key={index}
                className="information-container-main-bio-education-list"
              >
                <input
                  type="text"
                  placeholder="Education title"
                  onChange={(e) =>
                    handleEducationChange(index, "title", e.target.value)
                  }
                ></input>
                <input
                  type="text"
                  placeholder="Use comma to separate education description"
                  onChange={(e) =>
                    handleEducationChange(
                      index,
                      "description",
                      e.target.value.split(",")
                    )
                  }
                ></input>
              </div>
            ))}
            <button
              type="button"
              className="information-container-main-bio-education-add"
              onClick={() =>
                setEducation([
                  ...education,
                  {
                    title: "",
                    description: []
                  }
                ])
              }
            >
              Add more education fields{" "}
            </button>
          </div>
          <div className="information-container-main-bio-projects">
            <h2 className="information-container-main-bio-projects-title">
              Projects
            </h2>
            {projects.map((project, index) => (
              <div
                key={index}
                className="information-container-main-bio-projects-list"
              >
                <input
                  type="text"
                  placeholder="Project Title"
                  onChange={(e) =>
                    handleProjectChange(index, "title", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Use comma to separate project description"
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "description",
                      e.target.value.split(",")
                    )
                  }
                />
              </div>
            ))}
            <button
              type="button"
              className="information-container-main-bio-projects-add"
              onClick={handleAddProject}
            >
              Add more projects
            </button>
          </div>
          <div className="information-container-main-bio-certifications">
            <h2 className="information-container-main-bio-certifications-title">
              Certifications
            </h2>
            {certifications.map((certification, index) => (
              <div
                key={index}
                className="information-container-main-bio-certifications-list"
              >
                <input
                  type="text"
                  placeholder="Certification Title"
                  onChange={(e) =>
                    handleCertificationChange(index, "title", e.target.value)
                  }
                />
              </div>
            ))}
            <button
              type="button"
              className="information-container-main-bio-certifications-add"
              onClick={handleAddCertification}
            >
              Add more certifications
            </button>
          </div>
        </div>
        <div className="information-container-main-preview" ref={previewRef}>
         {
          template=="first"?<First></First>:<Second/>
         }
        </div>
      </div>
      <div className="information-container-footer">
        <button onClick={handlePdfPrint}>Print</button>
        <button><Link href="/template">Select other template</Link></button>
      </div>
    </div>
  );
}
