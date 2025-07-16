import submitSvg from "../assets/check-bold.svg"
import editSvg from "../assets/lead-pencil.svg"

function InformationForm() {
    return (
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" />

            <label htmlFor="telephone">Phone Number: </label>
            <input type="tel" id="telephone" name="telephone" />

            <button type="submit"> 
                <img src={submitSvg} alt="SubmitButton" style={{width: '20px', height: '20px'}}/>
            </button>
            
            <button type="button">
                <img src={editSvg} alt="EditButton" style={{width: '20px', height: '20px'}} />
            </button>
        </form>
    )
}

export default InformationForm;