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
    </div>
  )
}

export default Resume