import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { MainLayout } from '../../../../layout'
import { AvatarField, Button, Grid, KAlert, Textfield, Toast } from '../../../../components';
import { ThemeContext } from '../../../../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { links } from '../../../../routes';

const AvatarEdit = ({info}:{info: any}) => {
  const [avatar, setAvatar] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isAvatarEdit, setAvatarEdit] = useState<boolean>(false)

  return (
    <>
      <AvatarField 
        avatar={avatar}
        oldAvatar={''}
        setAvatar={setAvatar}
        isEdit={isAvatarEdit}
        setIsEdit={() => setAvatarEdit }
        deleteAvatar={() => { } }
        id={'avatar'} 
        setError={setError}
      />
      
      {
        isAvatarEdit && error ? (
          <Toast id={"avatar-danger"} status={'st--warning'} fnc={() => setAvatarEdit(false)} >
            <p>{error?.message}</p>
          </Toast>
        ) : null
      }
    </>
  )
}

const EditInformation = ({info}:{info: any}) => {
   
  const [data, setData] = useState<any>({
    firstname: "", 
    lastname:  "", 
    telephone:  "", 
    username:  "", 
    email:  "", 
  })


  const [error, setError] = useState<any>(null)

  const [isInfoEdit, setInfoEdit] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!data?.firstname){
      setError({
        field: "firstname",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    if(!data?.lastname){
      setError({
        field: "lastname",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    if(!data?.email){
      setError({
        field: "email",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    if(!data?.telephone){
      setError({
        field: "telephone",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    
    setError(null)
    setInfoEdit(true)
  }

  return (
    <div className={'kui-page-form'}>
      <div className='kui-page-form__header kui-page-form-header'>
        <h3>Information du compte</h3>
        <div className='kui-page-form-header__actions'>
          
          <p className='kui-tag is--success'>
            <i className="pi-save-2-line"></i>
            <span>Enregistré</span>
          </p>
           
        </div>
      </div>
      <div className='kui-page-form__list kui-page-form-list'>
        
        <KAlert status={'st--danger'} title={'Oupss!! Une erreur est survenue'} message={'message'}/>
         
        <div className='kui-page-form-fields'>
          
          <div className='kui-page-form-field'>
            <Textfield 
              id={'lastname'} 
              value={data.lastname} 
              require={true} 
              changeValue={(val: any) => setData({...data, lastname: val})} 
              type={"text"}
              label='Nom'
              placeholder='Entrer le nom'
              error={error}
            />
          </div>
          
          <div className='kui-page-form-field'>
            <Textfield 
              id={'firstname'} 
              value={data.firstname} 
              require={true} 
              changeValue={(val: any) => setData({...data, firstname: val})} 
              type={"text"}
              label='Prenom(s)'
              placeholder='Entrer le prenom(s)'
              error={error}
            />
          </div>
          <div className='kui-page-form-field'>
            <Textfield 
              id={'email'} 
              value={data.email} 
              require={true} 
              changeValue={(val: any) => setData({...data, email: val})} 
              type={"email"}
              label='Email'
              placeholder={'Entrer l\'adresse mail'}
              error={error}
            />
          </div>
          <div className='kui-page-form-field'>
            <Textfield 
              id={'username'} 
              value={data.username} 
              require={true} 
              changeValue={(val: any) => setData({...data, username: val})} 
              type={"username"}
              label={'Nom d\'utilisateur'}
              placeholder={'Entrer le nom d\'utilisateur'}
              error={error}
              data={{
                nom: data?.lastname,
                prenom: data?.firstname
              }}
            />
          </div>
          <div className='kui-page-form-field'>
            <Textfield 
              id={'telephone'} 
              value={data.telephone} 
              require={false} 
              changeValue={(val: any) => setData({...data, telephone: val})} 
              type={"phone"}
              label='Numero de telephone'
              placeholder='Entrer le numero de telephone'
              error={error}
            />
          </div>
        </div>
        <div className='kui-page-form-actions'>
          <form onSubmit={handleSubmit}>
            <Button 
              label={'Enregistrer les modifications'} 
              btype='submit' 
              bstyle='is--primary' 
              active={true}
              iconLeftClass={"pi-save-2-line"}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

const EditPassword = ({info}:{info: any}) => {

  const [data, setData] = useState<any>({
    password: "", 
    newPassword: "", 
    confirmPassword: ""
  })
  const [error, setError] = useState<any>(null)
  const [isInfoEdit, setInfoEdit] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(!data?.newPassword){
      setError({
        field: "newPassword",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    if(!data?.confirmPassword){
      setError({
        field: "confirmPassword",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    if(!data?.password){
      setError({
        field: "password",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    
    setError(null)
    setInfoEdit(true)
  }
  
  return (
    <div className={'kui-page-form'}>
      <div className='kui-page-form__header kui-page-form-header'>
        <h3>Modification du mot de passe</h3>
        <div className='kui-page-form-header__actions'>
          {
            isInfoEdit ? (
              <p className='kui-tag is--success'>
                <i className="pi-save-2-line"></i>
                <span>Enregistré</span>
              </p>
            ) : null
          }
        </div>
      </div>
      <div className='kui-page-form__list kui-page-form-list'>
        <KAlert status={'st--danger'} title={'Oupss!! Une erreur est survenue'} message={'message'}/>  
        <div className='kui-page-form-fields'>
          <div className='kui-page-form-field'>
            <Textfield 
              id={'newPassword'} 
              value={data.newPassword} 
              require={true} 
              changeValue={(val: any) => setData({...data, newPassword: val})} 
              type={"password"}
              label='Nouveau Mot de passe'
              placeholder='Entrer le nouveau mot de passe'
              error={error}
            />
          </div>
          <div className='kui-page-form-field'>
            <Textfield 
              id={'confirmPassword'} 
              value={data.confirmPassword} 
              require={true} 
              changeValue={(val: any) => setData({...data, confirmPassword: val})} 
              type={"password"}
              label='Confirmer le nouveau mot de passe'
              placeholder='Confirmer le nouveau mot de passe'
              error={error}
            />
          </div>
          <div className='kui-page-form-field'>
            <Textfield 
              id={'password'} 
              value={data.password} 
              require={true} 
              changeValue={(val: any) => setData({...data, password: val})} 
              type={"password"}
              label='Ancien  mot de passe'
              placeholder={'Entrer l\'ancien mot de passe'}
              error={error}
            />
          </div>
        </div>
        <div className='kui-page-form-actions'>
          <form onSubmit={handleSubmit}>
            <Button 
              label={'Enregistrer les modifications'} 
              btype='submit' 
              bstyle='is--primary' 
              active={true}
              iconLeftClass={"pi-save-2-line"}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

const CustomContainer = () => {
  const {
    theme,
    defaultDark,
    defaultTheme,
    colorPalette,
    switchPaletteColor,
    switchTheme,
    swichtDefautTheme,
    switchDisplayType,
    displayType
  } = useContext(ThemeContext);
  
  return (
    
    <div className='kui-page__custom kui-page-custom'>

      <div className='kui-page-custom__option'>
        <div className='kui-page-form__header kui-page-form-header'>
          <h3>Affichage</h3>
        </div>
        <div className='kui-page-custom__displays kui-page-custom-displays'>
          <Grid direction={'fd-row'} spacing={'jc-start'} align={'start'} wrap={false} gap={1}>
            <button className={`kui-page-custom-display ${displayType === "default" ? "is--active" : ""}`} type='button' onClick={() => switchDisplayType("default")}>
              <i className="pi-layout-left-line"></i>
              <span>Par Defaut</span>
            </button>
            <button className={`kui-page-custom-display ${displayType === "display-1" ? "is--active" : ""}`} type='button' onClick={() => switchDisplayType("display-1")}>
              <i className="pi-layout-top-line"></i>
              <span>Theme 1</span>
            </button>
          </Grid>
        </div>
      </div>
      <div className='kui-page-custom__option'>
        <div className='kui-page-form__header kui-page-form-header'>
          <h3>Schema de couleurs</h3>
        </div>
        
        <div className='kui-page-custom__colors kui-page-custom-colors'>
          <Grid direction={'fd-row'} spacing={'jc-start'} align={'start'} wrap={true} gap={1}>
            <button type='button' className={`kui-page-custom-color ${colorPalette === "default" ? "is--active" : ""}`} onClick={() => switchPaletteColor("default")}>
              <div className='kui-page-custom-color__container default'></div>
            </button>
            <button type='button' className={`kui-page-custom-color ${colorPalette === "palette-2" ? "is--active" : ""}`} onClick={() => switchPaletteColor("palette-2")}>
              <div className='kui-page-custom-color__container palette-2'></div>
            </button>
            <button type='button' className={`kui-page-custom-color ${colorPalette === "palette-3" ? "is--active" : ""}`} onClick={() => switchPaletteColor("palette-3")}>
              <div className={`kui-page-custom-color__container ${defaultTheme === "default" ? defaultDark ? "palette-3-d" : "palette-3-l" : theme === "dark" ? "palette-3-d" : "palette-3-l"} `}></div>
            </button>
            <button type='button' className={`kui-page-custom-color ${colorPalette === "palette-4" ? "is--active" : ""}`} onClick={() => switchPaletteColor("palette-4")}>
              <div className='kui-page-custom-color__container palette-4'></div>
            </button>
            <button type='button' className={`kui-page-custom-color ${colorPalette === "palette-5" ? "is--active" : ""}`} onClick={() => switchPaletteColor("palette-5")}>
              <div className='kui-page-custom-color__container palette-5'></div>
            </button>
            <button type='button' className={`kui-page-custom-color ${colorPalette === "palette-6" ? "is--active" : ""}`} onClick={() => switchPaletteColor("palette-6")}>
              <div className='kui-page-custom-color__container palette-6'></div>
            </button>
            <button type='button' className={`kui-page-custom-color ${colorPalette === "palette-7" ? "is--active" : ""}`} onClick={() => switchPaletteColor("palette-7")}>
              <div className='kui-page-custom-color__container palette-7'></div>
            </button>
            <button type='button' className={`kui-page-custom-color ${colorPalette === "palette-8" ? "is--active" : ""}`} onClick={() => switchPaletteColor("palette-8")}>
              <div className='kui-page-custom-color__container palette-8'></div>
            </button>
            <button type='button' className={`kui-page-custom-color ${colorPalette === "palette-9" ? "is--active" : ""}`} onClick={() => switchPaletteColor("palette-9")}>
              <div className='kui-page-custom-color__container palette-9'></div>
            </button>
            <button type='button' className={`kui-page-custom-color ${colorPalette === "palette-10" ? "is--active" : ""}`} onClick={() => switchPaletteColor("palette-10")}>
              <div className='kui-page-custom-color__container palette-10'></div>
            </button>
          </Grid>
        </div>
      </div>

      <div className='kui-page-custom__option'>
        <div className='kui-page-form__header kui-page-form-header'>
          <h3>Thème:  {defaultTheme === "default" ? "Par defaut" : (theme === "dark" ? "Sombre" : "Clair")}</h3>
        </div>
        <div className={"kui-page-custom__theme kui-page-custom-theme"}>
          <button type={"button"} className={`kui-page-custom-theme-switch ${defaultTheme === "default" ? (defaultDark ? "is--active" : "") : (theme === "dark" ? "is--active" : "")}`} onClick={switchTheme}>
            <div className={`kui-page-custom-theme-switch__content ${defaultTheme === "default" ? (defaultDark ? "is--active" : "") : (theme === "dark" ? "is--active" : "")}`}></div>
          </button>
            <Button label={'Retablir le thème par défaut'} btype='button' onClick={swichtDefautTheme}/>
        </div>
      </div>
    </div>
  )
}

const OtherLinksContainer = () => {
  return (
    <div className={'kui-page-form'}>
      <div className='kui-page-form__header kui-page-form-header'>
        <h3>Autres liens</h3>
        <div className='kui-page-form-header__actions'>
        </div>
      </div>
      <div className='kui-page-form__list kui-page-form-list'>
        <Grid direction={'fd-column'} spacing={'jc-start'} align={'start'} wrap={false} gap={0.8}>
          <button className='kui-page-link-item is--danger' type='button' onClick={() => {}}>
            <i className="pi-exit-line"></i>
            <span>Deconnexion</span>
          </button>
        </Grid>
      </div>
    </div>
  )
}


export const SettingPage = () => {
  return (
    <MainLayout here='setting' title='Parametres'>
      <div className='kui-page is--min'>
        <div className='kui-page__container'>
          <div className='kui-page__header kui-page-header' style={{
            textAlign: "center"
          }}>
            <h2>Paramètres de mon compte</h2>
          </div>
          <div className='kui-page-parameters'>
            <AvatarEdit info={{}}/>
            <EditInformation info={{}}/>
            <EditPassword info={{}}/>
            <CustomContainer/>
            <OtherLinksContainer/>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}


