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
function EducationForm({data, setData}) {
    const [formData, setFormData] = useState({
        schoolName: data.schoolName,
        areaOfStudy: data.areaOfStudy,
        graduationDate: data.graduationDate
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        setData((prev) => ({...prev, ...formData})) 
        setFormData((prev) => ({...prev, schoolName: "", areaOfStudy: "", graduationDate: "" }))
    }

    const handleChange = (field, value) => {
        setFormData((prev) => ({...prev, [field]: value}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="schoolName">School Name:</label>
            <CustomInput type="text" id="schoolName" name="schoolName" value={formData.schoolName} updateData={(value) => handleChange("schoolName", value)}/>

            <label htmlFor="areaOfStudy">Area Of Study:</label>
            <CustomInput type="text" id="areaOfStudy" name="areaOfStudy" value={formData.areaOfStudy} updateData={(value) => handleChange("areaOfStudy", value)}/>

            <label htmlFor="graduationDate">Date Of Graduation: </label>
            <CustomInput type="date" id="graduationDate" name="graduationDate" value={formData.graduationDate} updateData={(value) => handleChange("graduationDate", value)}/>

            <button type="submit"> 
                <img src={submitSvg} alt="SubmitButton" style={{width: '20px', height: '20px'}}/>
            </button>

            <button type="button">
                <img src={editSvg} alt="EditButton" style={{width: '20px', height: '20px'}} />
            </button>
        </form>
    )
}

export default EducationForm;