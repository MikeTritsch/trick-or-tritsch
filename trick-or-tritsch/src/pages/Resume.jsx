const Resume = () => {
  const onButtonClick = () => {
    const pdfUrl = "mtritsch-resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Tritsch-Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div className="resume-div">
      <h1 className="page-name">Resume</h1>
      <button className="resume-btn btn btn-outline-primary" onClick={onButtonClick}>
        Download PDF
      </button>
      <div className="tech-stack-list">
        <h2>Tech Stack</h2>
        <ul>
          <li>JavaScript</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>jQuery</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>Handlebars</li>
          <li>React.js</li>
          <li>mySQL</li>
          <li>noSQL/MongoDB</li>
        </ul>
        <div className="pro-tech-list">
          <h2>Professional Tech</h2>
          <ul>
            <li>Microsoft 365</li>
            <li>Google Suite</li>
            <li>Logic Pro X</li>
            <li>WordPress</li>
            <li>Mac & PC</li>
            <li>Adobe InDesign</li>
          </ul>
        </div>
        <div className="education">
          <h3>The University of Colorado Denver</h3>
          <p>B.S. | Music Business</p>
        </div>
        <div className="education">
          <h3>The University of Texas at Austin</h3>
          <p>Certificate | Full-Stack Web Development</p>
        </div>
      </div>



















    </div>
  )
}

export default Resume