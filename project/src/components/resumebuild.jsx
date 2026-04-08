import React, { useState } from "react";
import ReactDOM from "react-dom/client"; // Needed for rendering in new window
import html2pdf from "html2pdf.js";
import { Template1 } from "./temp1";
import { Template2 } from "./temp2";
import { Template3 } from "./temp3";
import { Template4 } from "./temp4";
import { Template5 } from "./temp5";
import ReactDOMServer from "react-dom/server";
import Note from "./Note";
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
  const [showProjectsHeading, setShowProjectsHeading] = useState(true);

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

  // Open a new window
  const previewWindow = window.open("", "_blank");

  // Base HTML structure
previewWindow.document.write(`
  <html>
    <head>
      <title>Resume Preview</title>
      <style>
        body {
          margin: 0;
          padding: 40px 0;
          background: #f0f0f0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
          font-family: Arial, sans-serif;
           overflow: "hidden"
        }

        .a4-sheet {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
           overflow: "hidden";
          padding: 0mm;
          background: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.15);
        }
      </style>

      <style>
        ${Array.from(document.styleSheets)
          .map((sheet) => {
            try {
              return Array.from(sheet.cssRules)
                .map((rule) => rule.cssText)
                .join("");
            } catch (e) {
              return "";
            }
          })
          .join("")}
      </style>
    </head>

    <body>
      <div id="resume-root" class="a4-sheet"></div>
    </body>
  </html>
`);

  previewWindow.document.close();

  // Render React after DOM is ready
  setTimeout(() => {
    const container = previewWindow.document.getElementById("resume-root");
    const root = ReactDOM.createRoot(container);

    root.render(
      <SelectedTemplateComponent
        basicInfo={basicInfo}
        skills={skills}
        education={education}
        projects={projects}
        showProjectsHeading={showProjectsHeading}
      />
    );
  }, 200);
};


    // Add Download functionality


const downloadPDF = () => {
  const SelectedTemplateComponent = templates[selectedTemplate];

  const htmlString = ReactDOMServer.renderToString(
    <SelectedTemplateComponent
      basicInfo={basicInfo}
      skills={skills}
      education={education}
      projects={projects}
      showProjectsHeading={showProjectsHeading}
    />
  );

  const container = document.createElement("div");
  container.className = "pdf-wrapper";   // ← add wrapper
  container.innerHTML = htmlString;
  document.body.appendChild(container);

  const opt = {
    margin: [1,0,15,0],
    filename: `${basicInfo.name || "resume"}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf()
    .set(opt)
    .from(container)
    .save()
    .then(() => document.body.removeChild(container));
};




  return (
    <>
     
    
    <div className="resume-builder-container">
      
      {/* Left Side Notes */}
      <div className="left-notes">
        <Note title="" content="Keep your resume concise. Aim for 1 page if possible." />
        <Note title="Name" content="Enter your full name as you want it to appear on your resume."/>
      
        <Note title="Portfolio / Website" content={ <>Add a link to your personal website, GitHub, LinkedIn, or project portfolio. <br /><br />
        (If you don’t have one, you can leave it blank.) </> } />
        <Note title="Skills" content={ <>List the technical or soft skills you know. Keep them short and specific.<br /><br />
        Examples: HTML, CSS, React, Python, MS Excel, Communication, Problem Solving.</> }/>
        <Note title="Project Role" content={ <>ention what you contributed or what position you held.<br /><br />
        Examples: Frontend Developer, Backend Developer, Team Lead, Tester.</>}/>
        <Note title="Description" content="Write 2–3 lines about what the project does and what tasks you handled."/>
        <Note title="Template 1" content="Simple and clean. Perfect for beginners or freshers with limited details."/>
        <Note title="Template 3" content="Advanced layout. Ideal for candidates with projects/experience, with a strong focus on skills."/>
        <Note title="Template 5" content="Intermediate level template suited for users with multiple skills, projects, or achievements"/>
      </div>

      {/* Center Form */}
      <div className="center-form">
       
        <br /><br />
        {/* Form */}
        <br />

        <form onSubmit={(e) => e.preventDefault()} className="resumeform">

          <h2 id="role-heading"> CREATE YOUR RESUME  </h2>
        <input name="name" placeholder="Name" value={basicInfo.name} onChange={handleBasicChange} required  className="inputbox" /><br /><br />
        <input name="tagline" placeholder="Title / Tagline" value={basicInfo.tagline} onChange={handleBasicChange}  className="inputbox"/><br /><br />
        <input name="portfolio" placeholder="Portfolio / Website" value={basicInfo.portfolio} onChange={handleBasicChange}  className="inputbox"/><br /><br />
        <input name="mobile" placeholder="Mobile" value={basicInfo.mobile} onChange={handleBasicChange}  className="inputbox"/><br /><br />
        <input name="dob" placeholder="DOB ( dd-mm-yyyy )" value={basicInfo.dob} onChange={handleBasicChange}  className="inputbox"/><br /><br />
        <input name="address" placeholder="Address" value={basicInfo.address} onChange={handleBasicChange}  className="inputbox"/><br /><br />
        <textarea name="objective" placeholder="Objective / Summary" value={basicInfo.objective} onChange={handleBasicChange}  className="inputbox"/><br /><br />

        {/* Skills */}
        <h2 id="role-heading">SKILLS</h2>
        <span>
        {skills.map((skill, i) => (
          <div key={i}>
            <input value={skill} onChange={e => handleSkillChange(i, e.target.value)} placeholder="Skill"  className="inputbox" /> 
            <button type="button" onClick={() => removeSkill(i)} className="animated-button1">Remove</button> <br /><br />
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
            <button type="button" onClick={() => removeEdu(i)} className="animated-button1">Remove</button> <br /><br /><br />
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

        <br /><br />
        <label>
          <input
            type="checkbox"
            checked={showProjectsHeading}
            onChange={(e) => setShowProjectsHeading(e.target.checked)}
          />
          Show "Projects / Experience" heading
        </label>

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
        <button type="button" onClick={previewInNewPage} className="animated-button">Preview Resume</button><br /><br />

              <button type="button" onClick={downloadPDF} className="animated-button1">
  Download PDF
</button>
      </form>
      </div>

      {/* Right Side Notes */}
      <div className="right-notes">

          <Note title="Title / Tagline" content={<>A short one-line description of what you do or what role you’re applying for.<br /> <br />
           Examples: “Frontend Developer”, “Accounting Student”, “Software Engineer Intern </> } />
        <Note title="Address" content={ <> Write your current city and state. Full address is optional.<br /><br />
        Example: “Bengaluru, Karnataka </>} />
        <Note title="Objective / Summary" content={ <> Write 2–3 lines about your career goal or what you’re looking for.<br /><br />
        Example: “Motivated fresher seeking a beginner-level developer role to apply skills and grow in a dynamic environment. </>} />
        <Note title="University / School" content="Enter the name of your college, university, or school." />
        <Note title="Degree / Board" content={ <>Mention the degree or board you studied under.<br /><br />
        Examples: BCA, BSc CS, PU Board, CBSE, State Board.</>}/>
        <Note title="CGPA / %" content="Enter your final or current score. If not completed yet, mention your latest score"/>
        <Note title="Template 2" content="Slightly advanced. Best if you have projects or work experience to showcase"/>
        <Note title="Template 4" content="Basic design that’s easy to fill. Great choice for beginners and students."/>
      </div>
    </div>
    </> 
  );
};


export default ResumeBuilder;
