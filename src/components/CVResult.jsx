function CvResult({infoData, eduData, expData}) {
    return (
    <div class="cv">
        <div>
            INFORMATION RESULT
            <h1>Name: {infoData.name}</h1>
            <h1>Email: {infoData.email}</h1>
            <h1>Telephone: {infoData.telephone}</h1>    
        </div>
        <div>
            EDUCATION RESULT 
            <h1>School Name: {eduData.schoolName}</h1>
            <h1>Area of Study: {eduData.areaOfStudy}</h1>
            <h1>Graduation Date: {eduData.graduationDate}</h1>
        </div>
        <div>
            EXPERIENCE RESULT 
            <h1>Company Name: {expData.company}</h1>
            <h1>Job Title: {expData.jobTitle}</h1>
            <h1>Start Date: {expData.startDate}</h1>
            <h1>End Date: {expData.endDate}</h1>
        </div>
    </div>
    )
}

export default CvResult;