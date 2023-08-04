import React, { createContext, useState } from "react";

export const InfoContext = createContext("");

export default function InfoProvider({ children }) {
  const [template,setTemplate]=useState("");
  const [information, setInformation] = useState({
    profile: "Mention your Constumised Profile Description here",
    name: "Your Name",
    social: "Linkedin URL",
    phone: "Phone Number",
    email: "Email Address",
    skills: ["Your", "Skills","here"],
    experience: [
      {
        company: "Company Title",
        position: "Position Title",
        description: ["Company", "Description"]
      },
   
    ],
    education: [
      {
        title: "Education Title",
        description:["Education","Description"],
      },
      {
        title: "Education Title",
        description:["Education","Description"],
      }
    ],
    projects:[
      {
        title: "Project Title",
        description:["Project","Description"],
      },
      {
        title: "Project Title",
        description:["Project","Description"],
      },],
      certifications:["Your Courses","and certifications"],
  });

  return (
    <InfoContext.Provider value={{ information, setInformation,template,setTemplate}}>
      {children}
    </InfoContext.Provider>
  );
}
