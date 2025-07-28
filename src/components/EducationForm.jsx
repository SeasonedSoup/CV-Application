import { useState } from "react"
import submitSvg from "../assets/check-bold.svg"
import editSvg from "../assets/lead-pencil.svg"

function CustomInput({type, id, name, value, updateData}) {
    return (
        <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => updateData(e.target.value)}
        />
    )
}
function EducationForm({data, setData, submitted, setSubmitted}) {
    const [formData, setFormData] = useState({
        schoolName: data.schoolName,
        areaOfStudy: data.areaOfStudy,
        graduationDate: data.graduationDate
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        setData((prev) => ({...prev, ...formData})) 
        setSubmitted(prev => ({...prev, education: true}))
    }

    const handleChange = (field, value) => {
        setFormData((prev) => ({...prev, [field]: value}))
    }
    if (submitted) {
        return ( 
            <>
                <h1>Form Submitted. Click Here to Edit!</h1>
                <button type="button" onClick={() => setSubmitted(prev => ({...prev, education: false})) }>
                    <img src={editSvg} alt="EditButton" style={{width: '20px', height: '20px'}} />
                </button>
            </>
        )
    } 
    return (
        <form onSubmit={handleSubmit}>
            <p className="input">
                <label htmlFor="schoolName">School Name:</label>
                <CustomInput type="text" id="schoolName" name="schoolName" value={formData.schoolName} 
                updateData={(value) => handleChange("schoolName", value)}/>
            </p>
            <p className="input">
                <label htmlFor="areaOfStudy">Area Of Study:</label>
                <CustomInput type="text" id="areaOfStudy" name="areaOfStudy" value={formData.areaOfStudy} 
                updateData={(value) => handleChange("areaOfStudy", value)}/>
            </p>
            <p className="input">
                <label htmlFor="graduationDate">Date Of Graduation: </label>
                <CustomInput type="date" id="graduationDate" name="graduationDate" value={formData.graduationDate} 
                updateData={(value) => handleChange("graduationDate", value)}/>
            </p>

            <button type="submit"> 
                <img src={submitSvg} alt="SubmitButton" style={{width: '20px', height: '20px'}}/>
            </button>
        </form>
    )
}

export default EducationForm;