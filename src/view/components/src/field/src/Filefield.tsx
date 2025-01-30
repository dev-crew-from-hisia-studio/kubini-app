import React from 'react'
import { FileFieldParams } from '../utils/type'

export const Filefield: React.FC<FileFieldParams> = ({handleChange,file, filePreview, oldFile, placeholder, removeFile, id, accept, require = false}) => {
  return (
    <div className={"kui-file"}>
      <input type="file" required={require} accept={accept} id={id} onChange={handleChange}/>
      <label htmlFor="picture"  className='kui-file__container'>
        {
          file ? (
            file.type === 'image' ? (
              <img src={filePreview} alt={id} />
            ):(
              file.type === 'video' ? (
                <video src={filePreview} controls/>
              ):(
                <>
                  <i className="pi-camera-2-line"></i>
                  <span>{file.name}</span>
                </>
              )
            )
           
          ) : (
            oldFile ? (
              oldFile.type === 'image' ? (
                <img src={oldFile?.url} alt={id} />
              ):(
                oldFile.type === 'video' ? (
                  <video src={oldFile?.url} controls/>
                ):(
                  <>
                    <i className="pi-file-Info-line"></i>
                    <span>{oldFile.name}</span>
                  </>
                )
              )
            ) : (
              <>
                <i className="pi-file-Info-line"></i>
                <span>{placeholder}</span>
              </>
            )
          )
        }
      </label>
      {
        file || oldFile  ? (
          <button type='button' className='kui-file__btn is--danger' onClick={removeFile}>
            <i className="pi-delete-2-line"></i>
          </button>
        ) : null
      }
    </div>
  )
}
