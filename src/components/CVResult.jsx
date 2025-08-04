function CvResult({infoData, eduData, expData}) {


    return (
    <div className="cv">  
        <div className="header">
            <p className="personName"> {infoData.name}</p>
            <i className="contacts">{infoData.email} | {infoData.telephone}</i>    
        </div>
        <div className="education">
            <p className="resultTitle">Education</p>
            <div className="educationHeader">  
                <h2>{eduData.schoolName}</h2>
                <p>{eduData.graduationDate}</p>
            </div>
            <p className="details">{eduData.areaOfStudy}</p>
        </div>
        <div className="experience">
            <p className="resultTitle">Experience</p>
            <div className="experienceHeader">  
                <h2>{expData.company}</h2>
                <div className="dateWorked">
                    <p>{expData.startDate}</p>
                    –
                    <p>{expData.endDate}</p>
                </div>
            </div>
            <p className="details">{expData.jobTitle}</p>
            <p className="details">{expData.jobDescription}</p>
        </div>
    </div>
    )
}

export default CvResult;