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
    function handleChange(field, value) {
        setData((prev) => ({...prev, [field]: value}))
    }
    return (
        <form>
            <label htmlFor="schoolName">School Name:</label>
            <CustomInput type="text" id="schoolName" name="schoolName" value={data.schoolName} updateData={(e) => handleChange("schoolName", e)}/>

            <label htmlFor="areaOfStudy">Area Of Study:</label>
            <CustomInput type="text" id="areaOfStudy" name="areaOfStudy" value={data.areaOfStudy} updateData={(e) => handleChange("areaOfStudy", e)}/>

            <label htmlFor="graduationDate">Date Of Graduation: </label>
            <CustomInput type="date" id="graduationDate" name="graduationDate" value={data.graduationDate} updateData={(e) => handleChange("graduationDate", e)}/>

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