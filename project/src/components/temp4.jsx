// Template4.jsx
export const Template4 = ({ basicInfo, skills, education, projects, showProjectsHeading = true }) => (
  <div
    style={{
      width: "210mm",
      minHeight: "297mm",
      margin: "0cm", // uniform margin
      padding: "2.5cm",
      border: "1px solid #000",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#fff",
      color: "#333",
      boxSizing: "border-box",
      lineHeight: "1.6", // slightly more spacing
      fontSize: "15px", // base font bigger
        overflowWrap: 'break-word',   // <-- this ensures long words break into next line
  wordBreak: 'break-word'
    }}
  >
    {/* Header */}
    <div style={{ textAlign: "center", marginBottom: "35px", borderBottom: "2px solid #0062cbff", paddingBottom: "12px" }}>
      <h1 style={{ margin: 0, fontSize: "32px", color: "#8697a9ff" }}>{basicInfo.name}</h1>
      <p style={{ margin: "6px 0", fontStyle: "italic", fontSize: "18px" }}>{basicInfo.tagline}</p>
      <p style={{ margin: "4px 0", fontSize: "15px" }}>{basicInfo.portfolio} | {basicInfo.mobile}</p>
      <p style={{ margin: "4px 0", fontSize: "15px" }}>
  {basicInfo.dob} {basicInfo.address && ` | ${basicInfo.address}`}
</p>

    </div>

    {/* Skills */}
    <section style={{ marginBottom: "25px" }}>
      <h2 style={{ fontSize: "20px", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>Skills</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "12px" }}>
        {skills.map((s, i) => (
          <span
            key={i}
            style={{
              padding: "6px 12px",
              backgroundColor: "#ffffffff",
              color: "#000000ff",
              borderRadius: "20px",
              fontSize: "14px",
              border: " solid black" ,  
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </section>

    {/* Objective */}
    <section style={{ marginBottom: "25px" }}>
      <h2 style={{ fontSize: "20px", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>Objective</h2>
      <p style={{ marginTop: "12px", fontSize: "15px" }}>{basicInfo.objective}</p>
    </section>

    {/* Education */}
    <section style={{ marginBottom: "25px" }}>
      <h2 style={{ fontSize: "20px", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>Education</h2>
      {education.map((edu, i) => (
        <div key={i} style={{ marginTop: "12px", fontSize: "15px" }}  class="section-block">
          <strong>{edu.school}</strong> | {edu.degree} | {edu.cgpa}
        </div>
      ))}
    </section>

    {/* Projects / Experience */}
    <section class="section-block">
      {showProjectsHeading && <h2 style={{ fontSize: "20px", borderBottom: "1px solid #ccc", paddingBottom: "8px", marginBottom: "12px" }}>Projects / Experience</h2>}
      {projects.map((p, i) => (
        <div key={i} style={{ marginTop: "12px", fontSize: "15px" }}  class="section-block">
          <strong>{p.title}</strong>
          <p style={{ margin: "4px 0" }}>{p.desc}</p>
        </div>
      ))}
    </section>
  </div>
);
