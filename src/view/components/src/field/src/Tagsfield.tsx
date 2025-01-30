import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Grid } from '../../grid';
import { TagsfieldParams } from '../utils/type';


export const Tagsfield: FC<TagsfieldParams> = ({id, changeValue, values, require, placeholder, error, label}) => {
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [tag, setTag] = useState<string>("")
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',' && tag.trim() !== '') {
      e.preventDefault();
      let arrayT: any[] = values || []
      if (!arrayT.includes(tag.trim())) {
        changeValue([...arrayT, tag.trim()]);
      }
      setTag('');
    }
  };

  const removeToArray = (val: any) => {
    let arrayT: any[] = values || []
    arrayT = arrayT?.filter((el) => el !== val)
    changeValue(arrayT)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  useEffect(() => {
    if(error){
      if(id === error.field){
        setErrorMessage(error.message)
      }
    }
  }, [error, id])

  return (
    <div className={`kui-tagfield ${errorMessage ? "st--error" : ""}`} id={id}>
      {
        label ? (
          <div className={"kui-tagfield__label kui-tagfield-label"}>
            <strong className={"kui-tagfield-label__text"}>{label}</strong>
            {
              !require && (
                <span className={"kui-tagfield__optionnal"}>(optionnel)</span>
              )
            }
          </div>
        ) : null
      }
      <div className={"kui-tagfield-field"}>
        <Grid direction={'fd-row'} spacing={'jc-start'} align={'start'} wrap={true} gap={0.5}>
          {
            values?.map((item: any, index: number) => (
              <button className='kui-tag-f' key={index} type='button' onClick={() => removeToArray(item)}>
                <span>{item}</span>
                <i className="pi-close-line"></i>
              </button>
            ))
          }
          <div className='kui-tagfield-field__input'>
            <input type="text" placeholder={placeholder} value={tag} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
          </div>
        </Grid>
      </div>
    </div>
  )
}

