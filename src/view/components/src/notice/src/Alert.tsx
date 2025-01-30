import React, { useState } from 'react'
import { AlertParams } from '../utils/type'

export const KAlert: React.FC<AlertParams> = ({status, message, withClose, title})  => {
  const [closeAlert, setCloseAlert] = useState<boolean>(false)
  return (
    <div className={`kui-alert ${status}`} style={{display: closeAlert ? "none" : "flex"}}>
      <div className={"kui-alert__icon"}>
        {
          status === "st--info" ? (
            <i className="pi-information-line"/>
          ) : (
            status === "st--danger" ? (
              <i className="pi-alert-octagon-line"/>
            ) : (
              status === "st--success" ? (
                <i className="pi-check-circle-line"/>
              ) : (
                status === "st--warning" ? (
                  <i className="pi-alert-line"/>
                ) : null
              )
            )
          )
        }
      </div>
      <div className={"kui-alert__container"}>
        <strong>{title}</strong>
        <p>{message}</p>
      </div>
      {
        withClose && (
          <button type={"button"} onClick={() => setCloseAlert(true)}>
            <i className="pi-close-line"/>
          </button>
        )
      }
    </div>
  )
}
