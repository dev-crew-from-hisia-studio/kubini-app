import React, { FC, useEffect, useState } from 'react'
import { TextfieldParams } from '../utils/type'
import { validateValue } from '../utils/function'
import { generateUsername } from '../../../../../utils'

export const Textfield:FC<TextfieldParams>  = ({data, id, max, min, type, error, label, placeholder, require, value, changeValue}) => {
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [typeField, setTypeField] = useState<string>("")
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value)
    let valeur = e.target.value
    let texte = validateValue(valeur, type, require)
    setErrorMessage(texte)
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    changeValue(e.target.value)
    let valeur = e.target.value
    let texte = validateValue(valeur, type, require)
    setErrorMessage(texte)
  }

  useEffect(() => {
    switch (type){
      case "username":
        setTypeField("text")
        break;
      default:
        setTypeField(type)
        break;
    }
  }, [type])
  
  useEffect(() => {
    if(error){
      if(id === error.field){
        setErrorMessage(error.message)
      }
    }
  }, [error, id])

  return (
    <div className={`kui-textfield ${type === "password" ? "as--password" : ""} ${errorMessage ? "st--error" : (isFocused ? "is--focused" : "")}`}>
      {
        label ? (
          <label className={"kui-textfield__label kui-textfield-label"} htmlFor={`kui-normal-input-` + id}>
            <strong className={"kui-textfield-label__text"}>{label}</strong>
            {
              !require && (
                <span className={"kui-textfield__optionnal"}>(optionnel)</span>
              )
            }
          </label>
        ) : null
      }
      <div className={"kui-textfield__field"}>
        {
          type === "textarea" ? (
            <textarea  id={`kui-input-`+id} placeholder={placeholder} onBlur={() => {setIsFocused(false)}}  onFocus={() => {setIsFocused(true)}} value={value} onChange={handleTextareaChange} required={require} />
          ) : (
            type === "number" ? (
              <input type={typeField} id={`kui-input-`+id} placeholder={placeholder}  onBlur={() => {setIsFocused(false)}}  onFocus={() => {setIsFocused(true)}} value={value} onChange={handleChange} required={require} min={min || -99999999} max={max || 99999999} />
            ) : (
              <input type={typeField} id={`kui-input-`+id} placeholder={placeholder} onBlur={() => {setIsFocused(false)}}  onFocus={() => {setIsFocused(true)}} value={value} onChange={handleChange} required={require} />
            )
          )
        }

        {
          type === "password" ? (
            <button type={"button"} className={`kui-textfield__btn`} onClick={() => {
              if(typeField === "password") {
                setTypeField("text")
              } else{
                setTypeField("password")
              }
            }}>
              {
                typeField !== "password" ? (
                  <i className="pi-eye-line"></i>
                ) : <i className="pi-eye-close-line"></i>
              }
            </button>
          ) : null
        }
        {
          type === "username" && data ? (
            data?.nom && data?.prenom ? (
              <button type={"button"} className={`kui-textfield__btn`} onClick={() => {
                changeValue(generateUsername(data?.nom, data?.prenom))
              }}>
                <i className="pi-brush-3-line"></i>
              </button>
            ) : (
              <button type={"button"} className={`kui-textfield__btn`} disabled={true} style={{
                opacity: 0.7,
                cursor: "not-allowed"
              }}>
                <i className="pi-brush-3-line"></i>
              </button>
            )
            
          ) : null
        }
      </div>
      {
        errorMessage ? (
          <div className={"kui-textfield__message kui-textfield-message"}>
            {errorMessage}
          </div>
        ) : null
      }
    </div>
  )
}
