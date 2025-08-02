import { useState } from "react"
import submitSvg from "../assets/check-bold.svg"
import clearSvg from "../assets/eraser.svg"

import FinishedForm from "./FinishedForm"

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
            <FinishedForm setSubmitted={setSubmitted} formType={"education"} formName={"Education"}/>
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
            <div className="buttonRow">
                <button type="button">
                    <img src={clearSvg} alt="ClearFormButton"/>
                </button>

                <button type="submit"> 
                    <img src={submitSvg} alt="SubmitButton"/>
                </button>
            </div>
        </form>
    )
}

export default EducationForm;