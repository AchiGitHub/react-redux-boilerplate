import React from 'react'

export const CustomModal = ({
  onClick,
  disabled,
  onClose,
  modalStyle,
  showModal,
  modalHeaderText,
  modalBodyText,
  buttonText,
  from,
  isForm,
  style
}) => {
    switch(from){
      case "passwordReset":
          return (
          <div className={`modal fade ${showModal ? "show" : ""}`} id="exampleModal" tabindex="-1" role="dialog" style={modalStyle}>
            <div className="modal-dialog col-sm-12" role="document">
              <div className="modal-content">
                <div className="modal-header" style={{borderBottom:"0 !important"}}>
                  <h5 className="modal-title" id="exampleModalLabel">{modalHeaderText}</h5>
                  <button type="button" className="close" data-dismiss="modal" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h6>{modalBodyText}</h6>
                </div>
                <div className="modal-footer">
                  {buttonText &&
                    <button type="button" className="btn submit-button" style={{ margin: 0 }} onClick={onClick}>{buttonText}</button>
                  }
                </div>
              </div>
            </div>
          </div>
        )
      default:
          return <div className={`modal fade ${showModal ? "show" : ""}`} id="exampleModal" tabindex="-1" role="dialog" style={modalStyle}>
          <div className="modal-dialog col-sm-4" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{modalHeaderText}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={onClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h6>{modalBodyText}</h6>
              </div>
              <div className="modal-footer">
                {buttonText &&
                  <button type="button" className="btn submit-button" style={{ margin: 0 }} onClick={onClick}>{buttonText}</button>
                }
              </div>
            </div>
          </div>
        </div>  
    }
}
