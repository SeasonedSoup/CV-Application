import { useState } from "react";

import InformationForm from "./InformationForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

import CvResult from "./CVResult";
import "../styles/form.css"

const App = () => {

  const [infoData, setInfo] = useState({
    name:"",
    email:"",
    telephone:""
  })
  return (
    <>
        <div className="submitForm">
          <h1>CV Application</h1>
          <InformationForm infoData={infoData} setData={setInfo} />
          <EducationForm />
          <ExperienceForm />
          <CvResult infoData={infoData}/>
        </div>
    </>

  )
}

export {
  App
}