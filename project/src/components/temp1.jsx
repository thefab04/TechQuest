// Template1.jsx
export const Template1 = ({ basicInfo, skills, education, projects, showProjectsHeading = true }) => {
  return (
    <div
    className="resume-page"
 style={{
      width: '210mm',        // A4 width
      minHeight: '297mm',    // A4 height
      maxHeight: 'auto',
       overflow: "hidden",
      margin: '0px',
      padding: '2.5cm',      // 2.5 cm padding all around
      fontFamily: 'Arial, sans-serif',
      background: 'white',
      color: '#333',
      boxSizing: 'border-box',
       
        overflowWrap: 'break-word',   // <-- this ensures long words break into next line
  wordBreak: 'break-word' ,
      fontSize: '16px',      // slightly bigger default font
      lineHeight: '1.5',     // better readability
      marginBottom:"120px"
    }}
    >
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '52px', color: '#222' }}>{basicInfo.name}</h1> {/* bigger */}
          <p style={{ fontStyle: 'italic', color: '#555', margin: '5px 0', fontSize: '16px' }}>{basicInfo.tagline}</p>
        </div>
        <div style={{ textAlign: 'right', fontSize: '14px', color: '#555' }}>
          <div>{basicInfo.portfolio}</div>
          <div>{basicInfo.mobile}</div>
<div>{basicInfo.dob}</div>


          <div>{basicInfo.address}</div>
        </div>
      </div>

      {/* Objective */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '5px', color: '#007BFF', fontSize: '20px' }}>Objective</h2>
        <p style={{ marginTop: '5px', lineHeight: '1.6', fontSize: '16px' }}>{basicInfo.objective}</p>
      </section>

      {/* Skills */}
<section style={{ marginBottom: "20px" }}>
  <h2
    style={{
      borderBottom: "2px solid #007BFF",
      paddingBottom: "5px",
      color: "#007BFF",
      fontSize: "20px",
    }}
  >
    Skills
  </h2>

  <div
    style={{
      display: "flex",
      gap: "40px",
      marginTop: "10px",
    }}
  >
    {/* LEFT COLUMN */}
    <ul style={{ listStyle: "disc", paddingLeft: "20px", flex: 1 }}>
      {skills.slice(0, 7).map((s, i) => (
        <li key={i} style={{ marginBottom: "6px", fontSize: "16px" }}>
          {s}
        </li>
      ))}
    </ul>

    {/* RIGHT COLUMN */}
    <ul style={{ listStyle: "disc", paddingLeft: "20px", flex: 1 }}>
      {skills.slice(7, 14).map((s, i) => (
        <li key={i} style={{ marginBottom: "6px", fontSize: "16px" }}>
          {s}
        </li>
      ))}
    </ul>
  </div>
</section>


      {/* Education */}
      <section style={{ marginBottom: '20px' }} class="section-block">
        <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '5px', color: '#007BFF', fontSize: '20px' }}>Education</h2>
        <div style={{ marginTop: '10px' }}>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '10px' }}  class="section-block">
              <h4 style={{ margin: '0 0 3px 0', fontSize: '18px', color: '#222' }}>{edu.school}</h4>
              <p style={{ margin: '0 0 3px 0', fontSize: '16px', fontWeight: 'bold' }}>{edu.degree}</p>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{edu.cgpa}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section class="section-block">
        <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '5px', color: '#007BFF', fontSize: '20px' }}>Projects / Experience</h2>
        <div style={{ marginTop: '10px' }}>
          {projects.map((p, i) => (
            <div key={i} style={{ marginBottom: '10px' }} class="section-block" >
              <h4 style={{ margin: '0 0 3px 0', fontSize: '18px', color: '#222' }}>{p.title}</h4>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.5', color: '#555' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
