import { useState } from "react";
import submitSvg from "../assets/check-bold.svg"
import FinishedForm from "./FinishedForm";

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
function InformationForm({data, setData, submitted, setSubmitted}) {
    const [formData, setFormData] = useState({
        name: data.name,
        email: data.email,
        telephone: data.telephone,
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        setData((prev) => ({...prev, ...formData}))
        setSubmitted((prev) => ({...prev, info: true}))
    }

    const handleChange = (field, value) => {
        setFormData((prev) => ({...prev, [field]: value}))
    }

    if (submitted) {
        return (
            <FinishedForm setSubmitted={setSubmitted} formType={"info"}/>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="input">
                <label htmlFor="name">Name: </label>
                <CustomInput type="text" id="name" name="name" value={formData.name} 
                updateData={(value) => handleChange("name", value) }/>
            </p>
            <p className="input">
                <label htmlFor="email">Email: </label>
                <CustomInput type="email" id="email" name="email" value={formData.email} 
                updateData={(value) => handleChange("email", value) }/>
            </p>
            <p className="input">
                <label htmlFor="telephone">Phone Number: </label>
                <CustomInput type="tel" id="telephone" name="telephone" value={formData.telephone} 
                updateData={(value) => handleChange("telephone", value)}/>
            </p>

            <button type="submit"> 
                <img src={submitSvg} alt="SubmitButton" style={{width: '20px', height: '20px'}}/>
            </button>
        </form>
    )
}

export default InformationForm;