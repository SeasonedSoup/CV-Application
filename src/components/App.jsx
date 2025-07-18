import InformationForm from "./InformationForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

import "../styles/form.css"

const App = () => {
  return (
    <>
        <div className="submitForm">
          <h1>CV Application</h1>
          <InformationForm />
          <EducationForm />
          <ExperienceForm />
        </div>
    </>

  )
}

export {
  App
}