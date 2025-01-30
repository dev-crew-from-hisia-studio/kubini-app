import React from 'react'
import { MultiFilefieldParams } from '../utils/type'

export const MultiFileField: React.FC<MultiFilefieldParams> = ({handleChange,max,files, filesPreview, oldFiles, placeholder, removeFile, id, accept, error,removeOldFile, require = false}) => {
  return (
    <div className={"kui-mulit-file"}>
      <input type="file" accept={accept} multiple id='imagesImg' onChange={handleChange}/>
      <div className='kui-mulit-file__grid'>
        {
          (files.length + oldFiles.length) > 0 ? (
            (files.length + oldFiles.length) > 3 ? (
              <>
              {
                oldFiles.map((image: any, index: number) => (
                  <div className={"kui-mulit-file-preview"} key={index}>
                    {
                      image.type === "image" ? (
                        <img src={image.url} alt={image.title} />
                      ) : (
                        image.type === "video" ? (
                          <video src={image.url} controls />
                        ) : (
                          <i className=""></i>
                        )
                      )
                    }
                    <button type="button" className={"kui-mulit-file-preview__btn is--danger"} onClick={() => {
                      removeOldFile(image)
                    }}>
                      <i className="pi-delete-2-line"></i>
                    </button>
                  </div>
                ))
              }
              {
                files.map((image: any, index: number) => (
                  <div className={"kui-mulit-file-preview"} key={index}>
                    {
                      image.type === "image" ? (
                        <img src={filesPreview[index]} alt={image.title} />
                      ) : (
                        image.type === "video" ? (
                          <video src={filesPreview[index]} controls />
                        ) : (
                          <i className=""></i>
                        )
                      )
                    }
                    <button type="button" className={"kui-mulit-file-preview__btn is--danger"} onClick={() => {
                      removeFile(index)
                    }}>
                      <i className="pi-delete-2-line"></i>
                    </button>
                  </div>
                ))
              }
              </>
            ) : (
              <>
                {
                  oldFiles.map((image: any, index: any) => (
                    <div className={"kui-mulit-file-preview"} key={index}>
                      {
                        image.type === "image" ? (
                          <img src={image.url} alt={image.title} />
                        ) : (
                          image.type === "video" ? (
                            <video src={image.url} controls />
                          ) : (
                            <i className=""></i>
                          )
                        )
                      }
                      <button type="button" className={"kui-mulit-file-preview__btn is--danger"} onClick={() => {
                        removeOldFile(index)
                      }}>
                        <i className="pi-delete-2-line"></i>
                      </button>
                    </div>
                  ))
                }
                {
                  files.map((image: any, index: number) => (
                    <div className={"kui-mulit-file-preview"} key={index}>
                      <img src={filesPreview[index]} alt="projet"/>
                      <button type="button" className={"kui-mulit-file-preview__btn is--danger"} onClick={() => {
                        removeFile(index)
                      }}>
                          <i className="pi-delete-2-line"></i>
                      </button>
                    </div>
                  ))
                }
                <label htmlFor="imagesImg" className={"kui-mulit-file-preview_btn"}>
                  <i className="pi-photo-album-2-line"></i>
                  <span>Vous pouvez ajouter {max - (files.length + oldFiles.length)} fichier(s) si vous le voulez</span>
                </label>
              </>
            )
          ) : (
            <label htmlFor="imagesImg" className={"kui-mulit-file-btn"}>
              <i className="pi-photo-album-2-line"></i>
              {
                error?.field === "multi-image" ? (
                  <span style={{color: "red"}}>{error?.message}</span>
                ) : (
                  <span>{placeholder}</span>
                )
              }
            </label>
          )
        }
      </div>
    </div>
  )
}
