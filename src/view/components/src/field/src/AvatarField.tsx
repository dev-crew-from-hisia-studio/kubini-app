import React, { ChangeEvent, useState } from 'react'
import { AvatarFieldParams } from '../utils/type'

export const AvatarField: React.FC<AvatarFieldParams> = ({id, avatar, placeholder, oldAvatar, isEdit, setIsEdit, setAvatar, deleteAvatar, setError}) => {
    const [imagePreview, setImagePreview] = useState<any>(null);

    const handleFileChangeFile = (e: ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files
        if(file && file.length > 0){
          let type: number = file[0].size
          let max: number = 1024 * 1024 * 4
          setIsEdit(true)
          if(type < max){
            setAvatar(file[0])
            setImagePreview(URL.createObjectURL(file[0]))
          }else{
            setError({
              field: "global",
              message: "Votre fichier ne doit pas dépasser 4Mo"
            })
            return
          }
        }
    }
    return (
        <div className='kui-page-parameters__picture kui-page-parameters-picture'>
            <input type="file" id={id} accept='.png,.jpg,.jpeg' onChange={handleFileChangeFile}/>
            <div  className='kui-page-parameters-picture__container'>
                <label htmlFor={id} className='kui-page-parameters-picture__avatar'>
                    {
                        avatar ? (
                            <img src={imagePreview} alt='avatar'/>
                        ) : (
                            oldAvatar ? (
                                <img src={oldAvatar} alt='avatar'/>
                            ) : (
                                <i className="pi-camera-2-line"></i>
                            )
                        )
                    }
                </label>
                {
                    (avatar || oldAvatar) ? (
                        <div className='kui-page-parameters-picture__actions'>
                            <button type='button' className={`kui-page-parameters-picture__btn ${"is--danger"} `} onClick={() => {
                                if(!isEdit){
                                    setImagePreview(null)
                                    setIsEdit(true)
                                    deleteAvatar()
                                }
                            }}>
                                <i className="pi-delete-2-line"></i>
                            </button>
                        </div>
                    ):null
                }
            </div>
            <span>{placeholder}</span>
        </div>
    )
}
