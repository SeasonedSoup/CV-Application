import { useState } from "react";

import InformationForm from "./InformationForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

import CvResult from "./CVResult";
import "../styles/form.css"

const App = () => {
  //THREE STATES FROM THREE DIFFERENT SECTIONS OF THE FORM
  const [infoData, setInfoData] = useState({
    name:"Emmette Jared G. Agoncillo",
    email:"emmetteagoncillo2@gmail.com",
    telephone:"09766352833"
  })

  const [educationData, setEducationData] = useState({
    schoolName:"NU Fairview",
    areaOfStudy:"IT",
    graduationDate:"2028-05-18"
  })

  const [experienceData, setExperienceData] = useState({
    company: "Google",
    jobTitle: "Assistant Software Engineer",
    startDate: "2029-02-20",
    endDate: "2031-03-27",
    jobDescription:"Helped clear out some bugs towards final product and support reading documentation and fixing legacy code systems"
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