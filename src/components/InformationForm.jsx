import { useState } from "react";
import submitSvg from "../assets/check-bold.svg"
import clearSvg from "../assets/eraser.svg"

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

    const handleReset = () => {
        setFormData(() => {
            const cleared = {}

            for (const field in formData) {
                cleared[field] = ""
            } 

            return cleared
        })
    }

    if (submitted) {
        return (
            <FinishedForm setSubmitted={setSubmitted} formType={"info"} formName={"Information"}/>
        )
    }

    return (
        <form className="noBorderForm" onSubmit={handleSubmit} autoComplete="off">
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
            <div className="buttonRow">
                <button type="button"  onClick={handleReset}>
                    <img src={clearSvg} alt="ClearFormButton"/>
                </button>
            
                <button type="submit"> 
                    <img src={submitSvg} alt="SubmitButton"/>
                </button>
            </div>
        </form>
    )
}

export default InformationForm;