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
function ExperienceForm({data, setData}) {
    function handleChange(field, value) {
        setData((prev) => ({...prev, [field]: value}))
    }
    return (
        <form>
            <label htmlFor="company">Company: </label>
            <CustomInput type="text" id="company" name="company" value={data.company} updateData={(value) => handleChange("company", value)}/>
            
            <label htmlFor="jobTitle">Job Title: </label>
            <CustomInput type="text" id="jobTitle" name="jobTitle" value={data.jobTitle} updateData={(value) => handleChange("jobTitle", value)}/>
            
            <label htmlFor="startDate">Start Date: </label>
            <CustomInput type="date" id="startDate" name="startDate" value={data.startDate} updateData={(value) => handleChange("startDate", value)}/>

            <label htmlFor="endDate">End Date: </label>
            <CustomInput type="date" id="endDate" name="endDate" value={data.endDate} updateData={(value) => handleChange("endDate", value)}/>

            <label htmlFor="jobDescription">Job Description: <i>(describe what you have accomplished and your responsibilities) </i> </label>
            <CustomTextArea name="jobDescription" id="jobDescription" value={data.jobDescription} updateData={(value) => handleChange("jobDescription", value)}></CustomTextArea>

            <button type="submit"> 
                <img src={submitSvg} alt="SubmitButton" style={{width: '20px', height: '20px'}}/>
            </button>
            
            <button type="button">
                <img src={editSvg} alt="EditButton" style={{width: '20px', height: '20px'}} />
            </button>
        </form>
    )
}

export default ExperienceForm;