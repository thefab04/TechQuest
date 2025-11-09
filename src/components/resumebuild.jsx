import React, { useState } from "react";
import ReactDOM from "react-dom/client"; // Needed for rendering in new window
import html2pdf from "html2pdf.js";
import { Template1 } from "./temp1";
import { Template2 } from "./temp2";
import { Template3 } from "./temp3";
import { Template4 } from "./temp4";
import { Template5 } from "./temp5";


const templates = { Template1, Template2, Template3, Template4, Template5 };

const ResumeBuilder = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    tagline: "",
    portfolio: "",
    mobile: "",
    dob: "",
    address: "",
    objective: "",
  });
  const [skills, setSkills] = useState([""]);
  const [education, setEducation] = useState([{ school: "", degree: "", cgpa: "" }]);
  const [projects, setProjects] = useState([{ title: "", desc: "" }]);
  const [selectedTemplate, setSelectedTemplate] = useState("Template1");

  const handleBasicChange = (e) => {
    setBasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
  };

  const addSkill = () => setSkills([...skills, ""]);
  const removeSkill = (i) => setSkills(skills.filter((_, index) => index !== i));
  const handleSkillChange = (i, value) => {
    const updated = [...skills];
    updated[i] = value;
    setSkills(updated);
  };

  const addEdu = () => setEducation([...education, { school: "", degree: "", cgpa: "" }]);
  const removeEdu = (i) => setEducation(education.filter((_, index) => index !== i));
  const handleEduChange = (i, field, value) => {
    const updated = [...education];
    updated[i][field] = value;
    setEducation(updated);
  };

  const addProject = () => setProjects([...projects, { title: "", desc: "" }]);
  const removeProject = (i) => setProjects(projects.filter((_, index) => index !== i));
  const handleProjectChange = (i, field, value) => {
    const updated = [...projects];
    updated[i][field] = value;
    setProjects(updated);
  };

const previewInNewPage = () => {
  const SelectedTemplateComponent = templates[selectedTemplate];

  const previewWindow = window.open("", "_blank");
  previewWindow.document.write(`
<html>
  <head>
    <title>Resume Preview</title>
    <style>
      body { 
        margin: 0; 
        padding: 40px; 
        font-family: Arial, sans-serif; 
        background: #f0f0f0; 
      }
      .toolbar {
        position: sticky;
        top: 0;
        background: white;
        padding: 10px;
        text-align: right;
        border-bottom: 1px solid #ccc;
      }
      button {
        background-color: #95afcbff;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
      }
      button:hover {
        background-color: #6c89a8ff;
      }
      .a4-sheet {
        width: 210mm;
        min-height: 297mm;
        margin: 20px auto;
        background: white;
        padding: 2.5cm; /* 2.5 cm margin all around */
        box-sizing: border-box;
        box-shadow: 0 0 8px rgba(0,0,0,0.2);
        font-size: 16px; /* slightly bigger font */
        line-height: 1.5; /* better readability */
      }
    </style>
  </head>
  <body>
    <div class="toolbar">
      <button id="downloadBtn">Download PDF</button>
    </div>
    <div id="resume-root" class="a4-sheet">
      <!-- Your resume content goes here -->
      <h1>John Doe</h1>
      <p>Full Stack Developer with 3 years of experience in web development and cloud technologies.</p>
    </div>
  </body>
</html>

  `);

  // Wait for DOM to load before rendering
  setTimeout(() => {
    const container = previewWindow.document.getElementById("resume-root");
    const root = ReactDOM.createRoot(container);
    root.render(
      <SelectedTemplateComponent
        basicInfo={basicInfo}
        skills={skills}
        education={education}
        projects={projects}
      />
    );
    
  }, 300);
  };


    // Add Download functionality
    const downloadPDF = () => {
  const SelectedTemplateComponent = templates[selectedTemplate];

  // Create a hidden container in DOM to render the resume temporarily
  const hiddenDiv = document.createElement("div");
  hiddenDiv.style.position = "absolute";
  hiddenDiv.style.left = "-9999px";
  hiddenDiv.style.top = "0";
  hiddenDiv.style.width = "210mm";
  hiddenDiv.style.minHeight = "297mm";
  hiddenDiv.style.padding = "30px";
  hiddenDiv.style.background = "white";
  document.body.appendChild(hiddenDiv);

  const root = ReactDOM.createRoot(hiddenDiv);
  root.render(
    <SelectedTemplateComponent
      basicInfo={basicInfo}
      skills={skills}
      education={education}
      projects={projects}
    />
  );

  setTimeout(() => {
    const opt = {
      margin: 0,
      filename: `${basicInfo.name || "resume"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(hiddenDiv)
      .set(opt)
      .save()
      .then(() => {
        // Cleanup after saving
        document.body.removeChild(hiddenDiv);
      });
  }, 500);
};




  return (
    <div>
      <h2 id="role-heading"> CREATE YOUR RESUME  </h2>
<br />
      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input name="name" placeholder="Name" value={basicInfo.name} onChange={handleBasicChange} required  className="inputbox" /><br /><br />
        <input name="tagline" placeholder="Title / Tagline" value={basicInfo.tagline} onChange={handleBasicChange}  className="inputbox"/><br /><br />
        <input name="portfolio" placeholder="Portfolio / Website" value={basicInfo.portfolio} onChange={handleBasicChange}  className="inputbox"/><br /><br />
        <input name="mobile" placeholder="Mobile" value={basicInfo.mobile} onChange={handleBasicChange}  className="inputbox"/><br /><br />
        <input name="dob" placeholder="DOB" value={basicInfo.dob} onChange={handleBasicChange}  className="inputbox"/><br /><br />
        <input name="address" placeholder="Address" value={basicInfo.address} onChange={handleBasicChange}  className="inputbox"/><br /><br />
        <textarea name="objective" placeholder="Objective / Summary" value={basicInfo.objective} onChange={handleBasicChange}  className="inputbox"/><br /><br />

        {/* Skills */}
        <h2 id="role-heading">SKILLS</h2>
        <span>
        {skills.map((skill, i) => (
          <div key={i}>
            <input value={skill} onChange={e => handleSkillChange(i, e.target.value)} placeholder="Skill"  className="inputbox" />
            <button type="button" onClick={() => removeSkill(i)} className="animated-button1">Remove</button>
          </div>
          
        ))}</span>
        <br />
        <button type="button" onClick={addSkill}className="animated-button">Add Skill</button>
<br /><br />  <br />
        {/* Education */}
        <h2 id="role-heading">EDUCATION</h2>
        {education.map((edu, i) => (
          <div key={i}>
            <input value={edu.school} onChange={e => handleEduChange(i, "school", e.target.value)} placeholder="University / School"  className="inputbox" /><br /><br />  
            <input value={edu.degree} onChange={e => handleEduChange(i, "degree", e.target.value)} placeholder="Degree / Board" className="inputbox" /><br /><br />  
            <input value={edu.cgpa} onChange={e => handleEduChange(i, "cgpa", e.target.value)} placeholder="CGPA / %"  className="inputbox" /><br /><br />  
            <button type="button" onClick={() => removeEdu(i)} className="animated-button1">Remove</button> <br />
          </div>
        ))}
        <br />
        <button type="button" onClick={addEdu} className="animated-button">Add Education</button>
<br /><br /><br />
        {/* Projects */}
        <h2 id="role-heading">PROJECTS / EXPERIENCE</h2>
        {projects.map((proj, i) => (
          <div key={i}>
            <input value={proj.title} onChange={e => handleProjectChange(i, "title", e.target.value)} placeholder="Project / Role"  className="inputbox" /> <br /><br />
            <textarea value={proj.desc} onChange={e => handleProjectChange(i, "desc", e.target.value)} placeholder="Description"  className="inputbox" /> <br /><br />
            <button type="button" onClick={() => removeProject(i)} className="animated-button">Remove</button><br /><br />
          </div>
        ))}
        <button type="button" onClick={addProject} className="animated-button">Add Project</button>


        <br /><br /><br />
      {/* Template Selection */}
<div className="template-selection">
  <label id="role-heading">SELECT TEMPLATE</label><br /><br />
  <div >
    
    {Object.keys(templates).map(t => (
      <div
        key={t}
        onClick={() => setSelectedTemplate(t)}
        className="inputbox1"
      > 
         <input
          type="radio"
          name="template"
          value={t}
          checked={selectedTemplate === t}
          onChange={() => setSelectedTemplate(t)}
          style={{ marginRight: "8px" }}
        /> 
        {t}
        <br />
      </div>
    ))}
  </div>
</div>

<br /><br />
        {/* Preview button */}
        <button type="button" onClick={previewInNewPage} className="animated-button">Preview Resume</button>
      </form> <br />
      <button type="button" onClick={downloadPDF} className="animated-button1">
  Download PDF
</button>

    </div>
  );
};

export default ResumeBuilder;
