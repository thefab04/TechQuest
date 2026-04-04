// Template5.jsx
export const Template5 = ({ basicInfo, skills, education, projects, showProjectsHeading = true }) => (
  <div
    style={{
      width: "210mm",
      minHeight: "297mm",
      margin: "0cm", // uniform page margin
      padding: "0cm",
      border: "1px solid #000",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#fff",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      color: "#333",
      lineHeight: "1.6", // better readability
      fontSize: "15px",  // base font bigger
        overflowWrap: 'break-word',   // <-- this ensures long words break into next line
  wordBreak: 'break-word'
    }}
  >
    {/* Sidebar */}
    <div style={{ width: "40%", padding: "2.5cm 20px", backgroundColor: "#f7f7f7", borderRight: "2px solid #007BFF" }}>
      <h1 style={{ textAlign: "left", color: "#007BFF", fontSize: "41px", marginBottom: "10px" }}>{basicInfo.name}</h1>
      <p style={{ textAlign: "left", fontStyle: "italic", fontSize: "16px" }}>{basicInfo.tagline}</p>

      <section style={{ marginTop: "25px" }}>
        <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "6px", fontSize: "18px" }}>Contact</h3>
        <p style={{ fontSize: "15px", marginTop: "8px" }}>
          {basicInfo.portfolio}<br />
          {basicInfo.mobile}<br />
          {basicInfo.dob}<br />

          {basicInfo.address}
        </p>
      </section>
<br /><br /><br /><br /><br />
            <section style={{ marginTop: "25px" }}>
        <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "6px", fontSize: "18px" }}>Education</h3>
        {education.map((edu, i) => (
          <div key={i} style={{ marginTop: "12px", fontSize: "15px" }}  class="section-block">
            <strong>{edu.school}</strong> | {edu.degree} | {edu.cgpa}
          </div>
        ))}
      </section>

    </div>

    {/* Main Content */}
    <div style={{ width: "70%", padding: "2.5cm 20px",marginTop:"50px" }}>
      <section>
        <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "6px", fontSize: "18px" }}>Objective</h3>
        <p style={{ marginTop: "12px", fontSize: "15px" }}>{basicInfo.objective}</p>
      </section>

      
      <section style={{ marginTop: "25px" }}>
        <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "6px", fontSize: "18px" }}>Skills</h3>
        <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
          {skills.map((s, i) => (
            <li key={i} style={{ marginBottom: "8px", fontSize: "15px" }}>{s}</li>
          ))}
        </ul>
      </section>



      <section style={{ marginTop: "25px" }} class="section-block">
        {showProjectsHeading && <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "6px", fontSize: "18px" }}>Projects / Experience</h3>}
        {projects.map((p, i) => (
          <div key={i} style={{ marginTop: "12px", fontSize: "15px" }}  class="section-block">
            <strong>{p.title}</strong>
            <p style={{ margin: "4px 0" }}>{p.desc}</p>
          </div>
        ))}
      </section>
    </div>
  </div>
);
