import submitSvg from "../assets/check-bold.svg"
import editSvg from "../assets/lead-pencil.svg"

function CustomInput({type, pattern, id, name, value, updateData}) {
    const handleInput = (e) => {
        const val = e.target.value ;

        if (type === "tel") {
            //! starts with any number of digits and end of string
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
            <CustomInput type="text" id="name" name="name" value={data.name} updateData={(value) => handleChange("name", value) }/>

            <label htmlFor="email">Email: </label>
            <CustomInput type="email" id="email" name="email" value={data.email} updateData={(value) => handleChange("email", value) }/>

            <label htmlFor="telephone">Phone Number: </label>
            <CustomInput type="tel" pattern="[0-9]{13}" id="telephone" name="telephone" value={data.telephone} updateData={(value) => handleChange("telephone", value)}/>

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