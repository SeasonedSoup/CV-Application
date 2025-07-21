import submitSvg from "../assets/check-bold.svg"
import editSvg from "../assets/lead-pencil.svg"

function CustomInput({type, id, name, value, onChange}) {

    return (
        <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
    )
}
function InformationForm({infoData, setData}) {
    const handleChange = (field, value) => {
        setData((prev) => ({...prev, [field]:value}))
    }
    return (
        <form>
            <label htmlFor="name">Name: </label>
            <CustomInput type="text" id="name" name="name" value={infoData.name} onChange={(val) => handleChange("name", val) }/>

            <label htmlFor="email">Email: </label>
            <CustomInput type="email" id="email" name="email" />

            <label htmlFor="telephone">Phone Number: </label>
            <CustomInput type="tel" id="telephone" name="telephone" />

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