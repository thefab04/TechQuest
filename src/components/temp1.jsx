// Template1.jsx
export const Template1 = ({ basicInfo, skills, education, projects }) => {
  return (
    <div style={{
      width: '210mm',        // A4 width
      minHeight: '297mm',    // A4 height
      margin: '20px auto',
      padding: '2.5cm',      // 2.5 cm padding all around
      fontFamily: 'Arial, sans-serif',
      background: 'white',
      color: '#333',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
        overflowWrap: 'break-word',   // <-- this ensures long words break into next line
  wordBreak: 'break-word' ,
      fontSize: '16px',      // slightly bigger default font
      lineHeight: '1.5',     // better readability
    }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '32px', color: '#222' }}>{basicInfo.name}</h1> {/* bigger */}
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
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '5px', color: '#007BFF', fontSize: '20px' }}>Skills</h2>
        <ul style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'disc', color: '#333' }}>
          {skills.map((s, i) => (
            <li key={i} style={{ marginBottom: '5px', fontSize: '16px' }}>{s}</li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '5px', color: '#007BFF', fontSize: '20px' }}>Education</h2>
        <div style={{ marginTop: '10px' }}>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <h4 style={{ margin: '0 0 3px 0', fontSize: '18px', color: '#222' }}>{edu.school}</h4>
              <p style={{ margin: '0 0 3px 0', fontSize: '16px', fontWeight: 'bold' }}>{edu.degree}</p>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{edu.cgpa}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '5px', color: '#007BFF', fontSize: '20px' }}>Projects / Experience</h2>
        <div style={{ marginTop: '10px' }}>
          {projects.map((p, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <h4 style={{ margin: '0 0 3px 0', fontSize: '18px', color: '#222' }}>{p.title}</h4>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.5', color: '#555' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
