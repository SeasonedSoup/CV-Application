function EducationForm() {
    return (
        <form>
            <label htmlFor="schoolName">School Name:</label>
            <input type="text" id="schoolName" name="schoolName"/>

            <label htmlFor="areaOfStudy">Area Of Study:</label>
            <input type="text" id="areaOfStudy" name="areaOfStudy"/>

            <label htmlFor="graduationDate">Date Of Graduation: </label>
            <input type="date" id="graduationDate" name="graduationDate"/>
        </form>
    )
}

export default EducationForm;