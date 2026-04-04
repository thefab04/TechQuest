// Template2.jsx
export const Template2 = ({ basicInfo, skills, education, projects, showProjectsHeading = true }) => (
  <div
    style={{
      width: "210mm",
      minHeight: "297mm",
      margin: 0, // uniform margin on all sides
      padding: "2.5cm", // padding inside for spacing
      
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
      color: "#333",
      lineHeight: "1.6", // slightly more spacing for readability
      fontSize: "15px", // base font size increased
        overflowWrap: 'break-word',   // <-- this ensures long words break into next line
  wordBreak: 'break-word'
    }}
  >
    {/* Header */}
    <div style={{ borderBottom: "2px solid #000", paddingBottom: "15px", marginBottom: "25px" }}>
      <h1 style={{ margin: "0", fontSize: "32px" }}>{basicInfo.name}</h1>
      <p style={{ margin: "3px 0", fontStyle: "italic", fontSize: "18px", color: "#555" }}>{basicInfo.tagline}</p>
      <p style={{ margin: "3px 0", fontSize: "15px" }}>{basicInfo.portfolio} | {basicInfo.mobile}</p>
      <p style={{ margin: "3px 0", fontSize: "15px" }}></p>
<p style={{ margin: "3px 0", fontSize: "15px" }}>
  {basicInfo.dob} {basicInfo.address ? ` | ${basicInfo.address}` : ""}
</p>

    </div>

    {/* Body */}
    <div style={{ display: "flex", gap: "35px" }}>
      {/* Left Column */}
      <div style={{ flex: 2 }}>
        {/* Objective */}
        <section style={{ marginBottom: "25px" }}>
          <h2 style={{ borderBottom: "1px solid #000", paddingBottom: "8px", fontSize: "20px" }}>Objective</h2>
          <p style={{ marginTop: "12px", fontSize: "15px" }}>{basicInfo.objective}</p>
        </section>

        {/* Projects */}
        <section style={{ marginBottom: "25px" }} class="section-block">
          {showProjectsHeading && <h2 style={{ borderBottom: "1px solid #000", paddingBottom: "8px", fontSize: "20px" }}>Projects / Experience</h2>}
          <ul style={{ marginTop: "12px", paddingLeft: "22px", fontSize: "15px" }}>
            {projects.map((p, i) => (
              <li key={i} style={{ marginBottom: "12px" }}  class="section-block">
                <strong>{p.title}</strong>
                <p style={{ margin: "4px 0" }}>{p.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Right Column */}
      <div style={{ flex: 1 }}>
        {/* Skills */}
        <section style={{ marginBottom: "25px" }}>
          <h2 style={{ borderBottom: "1px solid #000", paddingBottom: "6px", fontSize: "18px" }}>Skills</h2>
          <ul style={{ marginTop: "12px", paddingLeft: "22px", fontSize: "15px" }}>
            {skills.map((s, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>{s}</li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 style={{ borderBottom: "1px solid #000", paddingBottom: "6px", fontSize: "18px" }}>Education</h2>
          <ul style={{ marginTop: "12px", paddingLeft: "22px", fontSize: "15px" }}>
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
  </div>
);
