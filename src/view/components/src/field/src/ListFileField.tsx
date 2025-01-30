import React from 'react'
import { FileFieldParams } from '../utils/type'

export const ListFileField: React.FC<FileFieldParams>  = ({id, accept,placeholder, oldFile, file, require=false, handleChange}) => {

  return (
    <div className='kui-filefield-lil'>
        <input type="file" multiple={false} accept={accept} id={id} onChange={handleChange} required={require} />
        <label className='kui-filefield-lil__container' htmlFor={id}>
            <div className='kui-filefield-lil__icon'>
                <i className="pi-file-Info-line"></i>
            </div>
            <div className='kui-filefield-lil__info'>
                {
                    file? (
                        <strong>{file.name}</strong>
                    ) : (
                        oldFile ? (
                            <strong>{oldFile.name}</strong>
                        ) : (
                            <strong>{placeholder}</strong>
                        )
                    )
                }
            </div>
        </label>
    </div>
  )
}
