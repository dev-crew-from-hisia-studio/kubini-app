import React, { FormEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthLayout } from '../../../../layout';
import { Button, Grid, KAlert, Textfield } from '../../../../components';

export const LoginPage = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const url = searchParams.get('url')
  let navigate = useNavigate()
  
  const [data, setData] = useState<any>({
    login: "",
    password: "",
  }) 

  const [error, setError] = useState<any>(null) 


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    if(!data.login){
      setError({
        field: "login",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    if(!data.password){
      setError({
        field: "password",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    setError(null)
  }


  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className={"kui-auth-form"}>
        <Grid direction={'fd-column'} spacing={'jc-start'} align={'start'} wrap={false} gap={1.2}>
          
          <KAlert status={"st--danger"} title={"Ouppss!!!"} message={'message'}/>
           
          <Grid direction={'fd-column'} spacing={'jc-start'} align={'start'} wrap={false} gap={.8}>
              <div className='kui-auth-form__field kui-auth-form-field'>
                <Textfield 
                  id={'login'} 
                  value={data?.login} 
                  require={true} 
                  changeValue={(value: any) => setData({...data, login: value})} 
                  type={'text'}
                  placeholder="Entrer votre nom d'utilisateur ou email"
                  label={"Nom d'utilisateur ou Email"}
                  error={error}
                />
              </div>
              <div className='kui-auth-form__field kui-auth-form-field'>
                <Textfield 
                  id={'password'} 
                  value={data?.password} 
                  require={true} 
                  changeValue={(value: any) => setData({...data, password: value})} 
                  type={'password'}
                  placeholder="Entrer votre mot de passe"
                  label={"Mot de passe"}
                  error={error}
                />
              </div>
          </Grid>
          <Grid direction={'fd-column'} spacing={'jc-start'} align={'start'} wrap={false} gap={.8}>
            <div className='kui-auth-form__action kui-auth-form-action'>
              <Button label={"Connexion"} btype='submit' bstyle='is--primary' bsize='is--large' active={true} iconLeftClass={`pi-spinner5`}/>
            </div>
          </Grid>
          <div className='kui-auth-form__info kui-auth-form-info'>
            <p>En cas de perte de mot de passe, veuillez contacter l'administrateur de votre etablissement.</p>
          </div>
        </Grid>
      </form>
    </AuthLayout>
  )
}
