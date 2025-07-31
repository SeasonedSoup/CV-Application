function CvResult({infoData, eduData, expData}) {
    return (
    <div className="cv">    
        <div className="header">
            <p className="personName"> {infoData.name}</p>
            <i className="contacts">{infoData.email} | {infoData.telephone}</i>    
        </div>
        <div className="section">
            <h2>School Name: {eduData.schoolName}</h2>
            <h2>Area of Study: {eduData.areaOfStudy}</h2>
            <h2>Graduation Date: {eduData.graduationDate}</h2>
        </div>
        <div className="section">
            <h2>Company Name: {expData.company}</h2>
            <h2>Job Title: {expData.jobTitle}</h2>
            <h2>Start Date: {expData.startDate}</h2>
            <h2>End Date: {expData.endDate}</h2>
            <h2>Job Description: {expData.jobDescription}</h2>
        </div>
    </div>
    )
}

export default CvResult;