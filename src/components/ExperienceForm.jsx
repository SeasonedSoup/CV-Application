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
            <>
                <h1>Form Submitted. Click Here To Edit!</h1>
                <button type="button" onClick={() => setSubmitted(prev => ({...prev, experience: false})) }>
                    <img src={editSvg} alt="EditButton" style={{width: '20px', height: '20px'}} />
                </button>
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
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

            <label htmlFor="jobDescription">Job Description: <i>(describe what you have accomplished and your responsibilities) </i> </label>
            <CustomTextArea name="jobDescription" id="jobDescription" value={formData.jobDescription} 
            updateData={(value) => handleChange("jobDescription", value)}></CustomTextArea>

            <button type="submit"> 
                <img src={submitSvg} alt="SubmitButton" style={{width: '20px', height: '20px'}}/>
            </button>
        </form>
    )
}

export default ExperienceForm;