import { useState } from "react";

import InformationForm from "./InformationForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

import CvResult from "./CVResult";
import "../styles/form.css"

const App = () => {
  //THREE STATES FROM THREE DIFFERENT SECTIONS OF THE FORM
  const [infoData, setInfoData] = useState({
    name:"",
    email:"",
    telephone:""
  })

  const [educationData, setEducationData] = useState({
    schoolName:"",
    areaOfStudy:"",
    graduationDate:""
  })

  const [experienceData, setExperienceData] = useState({
    company: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    jobDescription:""
  })

  const [submitted, setSubmitted] = useState({
    info: false,
    education: false,
    experience: false
  })

const setDatas = [setInfoData, setEducationData, setExperienceData]
  function handleClearAllData() {
    console.log("Cleared All Datas")
    for (let setData in setDatas) {
        setDatas[setData](prev => {
            const cleared = {}
            for (let key in prev) {
                cleared[key] = ""
            }  
            return cleared
        })
    }
  }

  return (
    <div className="app">
        <div className="submitForm">
          <h1 className="title">CV Application</h1>
          <InformationForm data={infoData} setData={setInfoData} submitted={submitted.info} setSubmitted={setSubmitted}/>
          <EducationForm data={educationData} setData={setEducationData} submitted={submitted.education} setSubmitted={setSubmitted}/>
          <ExperienceForm data={experienceData} setData={setExperienceData} submitted={submitted.experience} setSubmitted={setSubmitted}/>
        </div>
        <div className="resumeContainer">
          <div className="containerHeader">
            <h1>Resume</h1>
            <button onClick={handleClearAllData} id="clearResultFormData">Clear Resume</button>
          </div>
          <div className="resume">
            <CvResult infoData={infoData} eduData={educationData} expData={experienceData}/>
          </div>
        </div>
    </div>

  )
}

export {
  App
}