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

function CustomTextArea({id,name, value, updateData}) {
    return (
        <textarea 
        name={name} 
        id={id}
        value={value}
        onChange={(e) => updateData(e.target.value)}
        ></textarea>
    )
}
function ExperienceForm({data, setData, submitted, setSubmitted}) {

    const [formData, setFormData] = useState({
        company: data.company ,
        jobTitle: data.jobTitle ,
        startDate: data.startDate,
        endDate: data.endDate,
        jobDescription: data.jobDescription
    })

    const handleSubmit = (e) => {
        e.preventDefault

        setData((prev) => ({...prev, ...formData}))
        setSubmitted((prev) => ({...prev, experience: true}))

    }
    const handleChange = (field, value) => {
        setFormData((prev) => ({...prev, [field]: value}))
    }
    if (submitted) {
        return (
            <FinishedForm setSubmitted={setSubmitted} formType={"experience"} formName={"Experience"}/>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="formContainer">
                <div className="inputColumn">
                    <p className="input">
                        <label htmlFor="company">Company: </label>
                        <CustomInput type="text" id="company" name="company" value={formData.company} 
                        updateData={(value) => handleChange("company", value)}/>
                    </p>
                    <p className="input">
                        <label htmlFor="jobTitle">Job Title: </label>
                        <CustomInput type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} 
                        updateData={(value) => handleChange("jobTitle", value)}/>
                    </p>
                </div>
                <div className="inputColumn">
                    <p className="input">
                    <label htmlFor="startDate">Start Date: </label>
                    <CustomInput type="date" id="startDate" name="startDate" value={formData.startDate} 
                    updateData={(value) => handleChange("startDate", value)}/>
                    </p>

                    <p className="input">
                    <label htmlFor="endDate">End Date: </label>
                    <CustomInput type="date" id="endDate" name="endDate" value={formData.endDate} 
                    updateData={(value) => handleChange("endDate", value)}/>
                    </p>
                </div>
            </div>
            
            <label htmlFor="jobDescription">Job Description:</label>
            <CustomTextArea name="jobDescription" id="jobDescription" value={formData.jobDescription} 
            updateData={(value) => handleChange("jobDescription", value)}></CustomTextArea>
            
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

export default ExperienceForm;