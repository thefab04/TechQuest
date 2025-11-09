// Template3.jsx
export const Template3 = ({ basicInfo, skills, education, projects }) => (
  <div
    style={{
      width: "210mm",
      minHeight: "297mm",
      margin: "2.5cm", // uniform margin
      padding: "0",
      border: "1px solid #000",
      display: "flex",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
      color: "#333",
      boxSizing: "border-box",
        overflowWrap: 'break-word',   // <-- this ensures long words break into next line
  wordBreak: 'break-word'
    }}
  >
    {/* Left Sidebar */}
    <div
      style={{
        width: "30%",
        backgroundColor: "#2E3A59",
        color: "#fff",
        padding: "2.5cm 20px", // increased padding for uniform margin effect
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: "22px", borderBottom: "1px solid #fff", paddingBottom: "12px" }}>
        Skills
      </h2>
      <ul style={{ listStyle: "none", paddingLeft: "0", marginTop: "12px" }}>
        {skills.map((s, i) => (
          <li key={i} style={{ marginBottom: "10px", fontSize: "15px" }}>{s}</li>
        ))}
      </ul>

      <h2 style={{ fontSize: "22px", borderBottom: "1px solid #fff", paddingBottom: "12px", marginTop: "35px" }}>
        Education
      </h2>
      <ul style={{ listStyle: "none", paddingLeft: "0", marginTop: "12px", fontSize: "15px" }}>
        {education.map((edu, i) => (
          <li key={i} style={{ marginBottom: "18px" }}>
            <strong>{edu.school}</strong><br />
            {edu.degree}<br />
            {edu.cgpa}
          </li>
        ))}
      </ul>
    </div>

    {/* Main Content */}
    <div style={{ width: "70%", padding: "2.5cm", boxSizing: "border-box" }}>
      {/* Header */}
      <div style={{ borderBottom: "2px solid #2E3A59", paddingBottom: "12px", marginBottom: "25px" }}>
        <h1 style={{ margin: 0, fontSize: "32px", color: "#2E3A59" }}>{basicInfo.name}</h1>
        <p style={{ margin: "6px 0", fontStyle: "italic", fontSize: "18px", color: "#555" }}>{basicInfo.tagline}</p>
        <p style={{ margin: "4px 0", fontSize: "15px" }}>{basicInfo.portfolio} | {basicInfo.mobile}</p>
        <p style={{ margin: "4px 0", fontSize: "15px" }}>{basicInfo.dob} | {basicInfo.address}</p>
      </div>

      {/* Objective */}
      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ fontSize: "20px", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>Objective</h2>
        <p style={{ marginTop: "12px", fontSize: "15px" }}>{basicInfo.objective}</p>
      </section>

      {/* Projects */}
      <section>
        <h2 style={{ fontSize: "20px", borderBottom: "1px solid #ccc", paddingBottom: "8px", marginBottom: "12px" }}>
          Projects / Experience
        </h2>
        <ul style={{ paddingLeft: "22px", fontSize: "15px" }}>
          {projects.map((p, i) => (
            <li key={i} style={{ marginBottom: "18px" }}>
              <strong>{p.title}</strong>
              <p style={{ margin: "4px 0" }}>{p.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);
