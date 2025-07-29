import editSvg from "../assets/lead-pencil.svg"

function FinishedForm({setSubmitted, formType}) {
    return (
        <div className="finishNoticeForm">
            <h1>Form Submitted. Click Here to Edit!</h1>
            <button type="button" onClick={() => setSubmitted(prev => ({...prev, [formType]: false})) }>
                <img src={editSvg} alt="EditButton" style={{width: '20px', height: '20px'}} />
            </button>
        </div>
    )
}

export default FinishedForm;                                                                      