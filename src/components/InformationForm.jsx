import submitSvg from "../assets/check-bold.svg"
import editSvg from "../assets/lead-pencil.svg"

function CustomInput({type, pattern, id, name, value, updateData}) {
    const handleInput = (e) => {
        const val = e.target.value ;

        if (type === "tel") {
            if(!/^\d*$/.test(val)) return;
        }

        updateData(val);
    }
    return (
        <input
        type={type}
        pattern={pattern}
        id={id}
        name={name}
        value={value}
        onChange={handleInput}
        />
    )
}
function InformationForm({data, setData}) {
    const handleChange = (field, value) => {
        setData((prev) => ({...prev, [field]: value}))
    }
    return (
        <form>
            <label htmlFor="name">Name: </label>
            <CustomInput type="text" id="name" name="name" value={data.name} updateData={(e) => handleChange("name", e) }/>

            <label htmlFor="email">Email: </label>
            <CustomInput type="email" id="email" name="email" value={data.email} updateData={(e) => handleChange("email", e) }/>

            <label htmlFor="telephone">Phone Number: </label>
            <CustomInput type="tel" pattern="[0-9]{13}" id="telephone" name="telephone" value={data.telephone} updateData={(e) => handleChange("telephone", e)}/>

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