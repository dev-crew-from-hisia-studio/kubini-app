import React, { FC } from 'react'
import { ModalFormParams } from '../utils/type'
import { Grid } from '../../grid'
import { Selectfield, Textfield } from '../../field'

export const ModalForm: FC<ModalFormParams> = ({tabsField}) => {
  return (
    <div className='kui-modal-fields'>
      <Grid direction={'fd-column'} spacing={'jc-start'} align={'start'} wrap={false} gap={.8}>
        {
          tabsField?.map(({field_require, field_type, tabs, isShow, data, field, id, label, error, placeholder, value, onChange}, index: number) => (
            <div className='kui-modal-field' key={index}>
              {
                isShow ? (
                  field === "textfield" ? (
                    <Textfield 
                      id={id} 
                      value={value} 
                      require={field_require} 
                      changeValue={(val: any) => onChange(val)} 
                      type={field_type}
                      label={label}
                      placeholder={placeholder}
                      error={error}
                      data={data}
                    />
                  ) : (
                    field === "selectfield" ? (
                      field_type === "no-multiple" ? (
                        <Selectfield 
                          id={id} 
                          value={value} 
                          require={field_require} 
                          changeValue={(val: any) => onChange(val)} 
                          tabs={tabs}
                          multiple={false}
                          label={label}
                          placeholder={placeholder}
                          error={error}
                        />
                      ) : (
                        <Selectfield 
                          id={id} 
                          values={value} 
                          require={field_require} 
                          changeValue={(val: any) => onChange(val)} 
                          tabs={tabs}
                          multiple={true}
                          label={label}
                          placeholder={placeholder}
                          error={error}
                        />
                      )
                    ) : (
                      <></>
                    )
                  )
                ) : null
              }
            </div>
          ))
        }
      </Grid>
    </div>
  )
}
