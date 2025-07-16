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
        </form>
    )
}

export default ExperienceForm;