function CvResult({infoData, eduData, expData}) {
    return (
    <div className="cv">
        <div className="section">
            <h1>Information Result</h1>
            <h1>Name: {infoData.name}</h1>
            <h1>Email: {infoData.email}</h1>
            <h1>Telephone: {infoData.telephone}</h1>    
        </div>
        <div className="section">
            <h1>Education Result</h1>
            <h2>School Name: {eduData.schoolName}</h2>
            <h2>Area of Study: {eduData.areaOfStudy}</h2>
            <h2>Graduation Date: {eduData.graduationDate}</h2>
        </div>
        <div className="section">
            <h1>Experience Result</h1>
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