// Template3.jsx
export const Template3 = ({ basicInfo, skills, education, projects, showProjectsHeading = true }) => (
  <div
    style={{
      width: "210mm",
      minHeight: "297mm",
      margin: "0cm",
      padding: "0",
      border: "1px solid #000",
      display: "flex",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
      color: "#333",
      boxSizing: "border-box",
      overflowWrap: "break-word",
      wordBreak: "break-word",
    }}
  >

    {/* LEFT SIDEBAR — NOW PROJECTS/EXPERIENCE */}
    <div
      style={{
        width: "30%",
        backgroundColor: "#2E3A59",
        color: "#fff",
        padding: "2.5cm 20px",
        boxSizing: "border-box",
        
      }}
      class="section-block"
    >
      {showProjectsHeading && <h2 style={{ marginTop: 0, fontSize: "22px", borderBottom: "1px solid #fff", paddingBottom: "12px" }}>
        Projects / Experience
      </h2>}

      <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: "12px", fontSize: "15px" }}>
        {projects.map((p, i) => (
          <li key={i} style={{ marginBottom: "18px" }}  class="section-block">
            <strong>{p.title}</strong>
            <p style={{ margin: "4px 0" }}>{p.desc}</p>
          </li>
        ))}
      </ul>
    </div>


    {/* RIGHT SIDE — NOW SKILLS + EDUCATION */}
    <div style={{ width: "70%", padding: "2.5cm", boxSizing: "border-box" }}>

      {/* Header */}
      <div style={{ borderBottom: "2px solid #2E3A59", paddingBottom: "12px", marginBottom: "25px" }}>
        <h1 style={{ margin: 0, fontSize: "32px", color: "#2E3A59" }}>{basicInfo.name}</h1>
        <p style={{ margin: "6px 0", fontStyle: "italic", fontSize: "18px", color: "#555" }}>
          {basicInfo.tagline}
        </p>
        <p style={{ margin: "4px 0", fontSize: "15px" }}>
          {basicInfo.portfolio} | {basicInfo.mobile}
        </p>

        <p style={{ margin: "4px 0", fontSize: "15px" }}>
          {basicInfo.dob} {basicInfo.address && ` | ${basicInfo.address}`}
        </p>
      </div>

      {/* Objective */}
      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ fontSize: "20px", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>Objective</h2>
        <p style={{ marginTop: "12px", fontSize: "15px" }}>{basicInfo.objective}</p>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ fontSize: "20px", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>Skills</h2>
        <ul style={{ paddingLeft: "22px", fontSize: "15px" }}>
          {skills.map((s, i) => (
            <li key={i} style={{ marginBottom: "6px" }}>{s}</li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2 style={{ fontSize: "20px", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>Education</h2>
        <ul style={{ paddingLeft: "22px", fontSize: "15px" }}>
          {education.map((edu, i) => (
            <li key={i} style={{ marginBottom: "12px" }}  class="section-block">
              <strong>{edu.school}</strong> | {edu.degree}
              <p style={{ margin: "4px 0" }}>{edu.cgpa}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>

  </div>
);
