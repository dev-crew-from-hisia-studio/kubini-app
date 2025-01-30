import React, { FC, useEffect, useRef, useState } from 'react'
import { SelectfieldParams } from '../utils/type'

export const Selectfield: FC<SelectfieldParams> = ({id, value, changeValue, values, require, placeholder, tabs, multiple = false, error, label}) => {
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [search, setSearch] = useState<string>("")
  const [openOptions, setOptions] = useState<boolean>(false)
  const modalRef = useRef<any>(null);
  
  const addToArray = (val: any) => {
    let arrayT: any[] = values || []
    arrayT = [...arrayT, val]
    changeValue(arrayT)
  }

  const removeToArray = (val: any) => {
    let arrayT: any[] = values || []
    arrayT = arrayT?.filter((el) => el !== val)

    changeValue(arrayT)
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOptions(false);
      }
    };

    if (openOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openOptions])

  useEffect(() => {
    if(error){
      if(id === error.field){
        setErrorMessage(error.message)
      }
    }
  }, [error, id])

  return (
    <div  className={`kui-selectfield ${errorMessage ? "st--error" : ""}`} id={id}>
      {
        label ? (
          <div className={"kui-selectfield__label kui-selectfield-label"}>
            <strong className={"kui-selectfield-label__text"}>{label}</strong>
            {
              !require && (
                <span className={"kui-selectfield__optionnal"}>(optionnel)</span>
              )
            }
          </div>
        ) : null
      }

      <div className={"kui-selectfield-field"}>
        <button type={"button"} className={"kui-selectfield-field__container"} onClick={() => {
          setOptions(!openOptions)
        }}>
        {
          multiple && values ? (
            values.length > 0 ? (
              <div className="kui-selectfield-field__grid">
                {
                  values?.map((item, index) => (
                    <div className={"kui-selectfield-field-item"} key={index}>
                      <span>{tabs.filter((el) => el.value === item) && (tabs.filter((el) => el.value === item)[0]?.name || tabs.filter((el) => el.value === item)[0]?.label)}</span>
                    </div>
                  ))
                }
              </div>
            ) : (
              <span>{placeholder}</span>
            )
          ) : (
            value ? (
              <span>
                {tabs.filter((el: any) => el.value === value) && tabs.filter((el: any) => el.value === value).length > 0 ? (
                  tabs.filter((el: any) => el.value === value)[0].name || tabs.filter((el: any) => el.value === value)[0].label
                ) : ""}
              </span>
            ) : (
              <span>{placeholder}</span>
            )
          )
        }
         </button>
        <div className={`kui-selectfield-field-options ${openOptions ? "is--active" : ""}`} ref={modalRef}>
          <div className={"kui-selectfield-field-options__search"}>
            <input type="search" placeholder={"search..."} value={search} onChange={(e) => setSearch(e.target.value)}/>
          </div>
          <div className={"kui-selectfield-field-options__list"}>
            {
              tabs.filter((el) => el.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || el.label?.toLocaleLowerCase().includes(search.toLocaleLowerCase())).length > 0 ? (
                tabs.filter((el) => el.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || el.label?.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((item, index) => (
                  <div className={`kui-selectfield-field-option ${item.value === value ? "is--active" : ""}`} key={index}>
                    <button className={"kui-selectfield-field-option-text"} type={"button"} onClick={() => {
                      if(multiple){
                        if(values && values?.filter((el) => el === item.value).length > 0 ) {
                          removeToArray(item.value)
                          setOptions(false)
                        } else {
                          addToArray(item.value)
                          setOptions(false)
                        }
                      }else{
                        changeValue(item.value)
                        setOptions(false)
                      }
                    }}>
                      {
                        multiple ? (
                          values&& values?.filter((el) => el === item.value).length > 0 ? (
                            <i className="pi-minus-circle-line"></i>
                          ) : null
                        ) : (
                          item.value === value ? (
                            <i className="pi-minus-circle-line"></i>
                          ) : null
                        )
                      }
                      <span>{item.name || item.label}</span>
                    </button>

                    {
                      multiple ? (
                        values && values?.filter((el) => el === item.value).length > 0 ? (
                          <button className={"kui-selectfield-field-option-delete"} onClick={() => {
                            removeToArray(item.value)
                          }}>
                            <i className="pi-close-circle-line"></i>
                          </button>
                        ) : null
                      ) : (
                        item.value === value ? (
                          <button className={"kui-selectfield-field-option-delete"} onClick={() => {
                            if(multiple){
  
                            }else{
                              changeValue("")
                            }
                          }}>
                            <i className="pi-close-circle-line"></i>
                          </button>
                        ) : null
                      )
                    }
                  </div>
                ))
              ) : (
                  <span>Aucun element trouvé...</span>
              )
            }
          </div>
        </div>
      </div>
      {
        errorMessage ? (
          <div className={"kui-selectfield__message kubini-selectfield-message"}>
            {errorMessage}
          </div>
        ) : null
      }
      
    </div>
  )
}
