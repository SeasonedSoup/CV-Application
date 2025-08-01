import editSvg from "../assets/lead-pencil.svg"

function FinishedForm({setSubmitted, formType, formName}) {

    return (
        <div className="finishNoticeForm">
            <p>{formName} Form Submitted. Click Here to Edit!</p>
            <button type="button" onClick={() => setSubmitted(prev => ({...prev, [formType]: false})) }>
                <img src={editSvg} alt="EditButton" style={{width: '20px', height: '20px'}} />
            </button>
        </div>
    )
}

export default FinishedForm;                                                                      