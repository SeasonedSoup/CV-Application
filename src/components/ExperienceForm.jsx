import submitSvg from "../assets/check-bold.svg"
import editSvg from "../assets/lead-pencil.svg"

function ExperienceForm() {
    return (
        <form>
            <label htmlFor="company">Company: </label>
            <input type="text" id="company" name="company"/>
            
            <label htmlFor="jobTitle">Job Title: </label>
            <input type="text" id="jobTitle" name="jobTitle"/>
            
            <label htmlFor="startDate">Start Date: </label>
            <input type="date" id="startDate" name="startDate"/>

            <label htmlFor="endDate">End Date: </label>
            <input type="date" id="endDate" name="endDate"/>

            <label htmlFor="jobDescription">Job Description: (describe what you have accomplished and your responsibilities) </label>
            <textarea name="jobDescription" id="jobDescription"></textarea>

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