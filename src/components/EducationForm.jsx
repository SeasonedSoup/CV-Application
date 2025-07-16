import submitSvg from "../assets/check-bold.svg"
import editSvg from "../assets/lead-pencil.svg"
function EducationForm() {
    return (
        <form>
            <label htmlFor="schoolName">School Name:</label>
            <input type="text" id="schoolName" name="schoolName"/>

            <label htmlFor="areaOfStudy">Area Of Study:</label>
            <input type="text" id="areaOfStudy" name="areaOfStudy"/>

            <label htmlFor="graduationDate">Date Of Graduation: </label>
            <input type="date" id="graduationDate" name="graduationDate"/>

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