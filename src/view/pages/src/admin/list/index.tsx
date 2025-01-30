import React, { FormEvent, useEffect, useState } from 'react'
import { links } from '../../../../routes';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MainLayout } from '../../../../layout';
import { EmptyList, FileAddIllu } from '../../../../assets/illustration';
import { Button, Column, Grid, KAlert, Modal, ModalActions, ModalForm, ModalStatus, Row, Table, TableItem, TableOptions } from '../../../../components';
import { capitalize, createInitial, rolesTab, sexeOptions } from '../../../../../utils';

import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const AddModal:React.FC<any> = ({ fnc}:{ fnc: (val: boolean) => void | any}) => {
  
  const [data, setData] = useState<any>({
    firstname: "", 
    lastname: "", 
    telephone: "", 
    username: "", 
    email:"", 
    birthday: "",
    sexe: "",
    userType: "adm"
  })

  const [closeM, setCloseM] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

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
    if(!data?.birthday){
      setError({
        field: "birthday",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    if(!data?.sexe){
      setError({
        field: "sexe",
        message: "Veuillez renseigner ce champs"
      })
      return
    }else{
      if(data?.sexe !== 'masculin' && data?.sexe !== 'feminin'){
        setError({
          field: "sexe",
          message: "Veuillez renseigner ce champs"
        })
        return
      }
    }
    
    setError(null)
    setCloseM(true)
  }

  const closeModal = () => {
    setData(null)
    fnc(false)
    setCloseM(false)
  }

  return (
    <Modal size={'is--md'} withClose={true} id={'add-admin'} isOpen={true} fnc={(val: boolean) => fnc(val)}>
      <div className='kui-modal-box__header'>
        <h2>Ajout d'un administrateur </h2>
      </div>
      
      <div className='kui-modal-box__content'>
        {
          closeM ? (
            <KAlert status={"st--danger"} title={"Ouppss!!!"} message={"message"}/>
          ) : null
        }
        <ModalForm tabsField={[
          {
            field: "textfield",
            field_type: "text",
            field_require: true,
            value: data?.lastname,
            label: "Nom",
            id: "nom",
            onChange: (val: any) => setData({...data, lastname: val}),
            error: error,
            placeholder: "Ex: Doe",
            isShow: true
          },
          {
            field: "textfield",
            field_type: "text",
            field_require: true,
            value: data?.firstname,
            label: "Prenom(s)",
            id: "prenom",
            onChange: (val: any) => setData({...data, firstname: val}),
            error: error,
            placeholder: "Ex: John",
            isShow: true
          },
          {
            field: "textfield",
            field_type: "email",
            field_require: true,
            value: data?.email,
            label: "Email",
            id: "email",
            onChange: (val: any) => setData({...data, email: val}),
            error: error,
            placeholder: "Ex: john@doe.com",
            isShow: true
          },
          {
            field: "textfield",
            field_type: "username",
            field_require: true,
            value: data?.username,
            label: "Nom d'utilisateur",
            id: "username",
            onChange: (val: any) => setData({...data, username: val}),
            error: error,
            placeholder: "Ex: johndoe-89",
            isShow: true,
            data: {
              nom: data?.lastname,
              prenom: data?.firstname
            }
          },
          {
            field: "textfield",
            field_type: "phone",
            field_require: true,
            value: data?.telephone,
            label: "Telephone",
            id: "telephone",
            onChange: (val: any) => setData({...data, telephone: val}),
            error: error,
            placeholder: "Ex: 0022671093456",
            isShow: true
          },
          {
            field: "textfield",
            field_type: "date",
            field_require: true,
            value: data?.birthday,
            label: "Date de naissance",
            id: "birthday",
            onChange: (val: any) => setData({...data, birthday: val}),
            error: error,
            placeholder: "Ex: 01/01/2012",
            isShow: true
          },
          {
            field: "selectfield",
            field_type: "no-multiple",
            field_require: true,
            value: data?.sexe,
            label: "Sexe",
            id: "sexe",
            tabs: sexeOptions,
            onChange: (val: any) => setData({...data, sexe: val}),
            error: error,
            placeholder: "Ex: Masculin ou Feminin",
            isShow: true
          },
        ]}/>
      </div>
        
      <form onSubmit={handleSubmit}>
        <ModalActions tabsActions={[
          {
            icon: "pi-add-circle-line", 
            type: "submit", 
            label: "Créer le compte", 
            style:"is--primary", 
            active: true,
            show: true
          },
          {
            icon: "pi-close-line", 
            type: "button", 
            label: "Annuler", 
            style:"is--danger", 
            active: true,
            onClick: () => closeModal(),
            show: true
          },
        ]}/>
      </form>           
    </Modal>
  )
}

const RecoverPasswordModal:React.FC<any> = ({item, fnc}:{ item?: any, fnc: (val: boolean) => void | any}) => {
  
  const [closeM, setCloseM] = useState<boolean>(false)
  const closeModal = () => {
    fnc(false)
    setCloseM(false)
  }
  return (
    <Modal size={'is--sm'} withClose={true} id={'recover'} isOpen={true} fnc={(val: boolean) => fnc(val)}>
      <div className='kui-modal-box__header'>
        <h2>Reinitialisation du mot de passe d'un administrateur</h2>
      </div>

      <div className='kui-modal-box__content'>
        <ModalStatus status={'neutral'} title='Voulez-vous vraiment reinitialiser le mot de passe de cet utilisateur?' subtitle='message'>
          <i className='pi-safe-alert-line'></i>
        </ModalStatus>
      </div>
        
      <ModalActions tabsActions={[
        {
          icon: "pi-safe-lock-line", 
          type: "button", 
          label: "Reinitialiser", 
          style:"is--primary", 
          active: true,
          onClick: () => {},
          show:  true
        },
        {
          icon: "pi-close-line", 
          type: "button", 
          label: "Annuler", 
          style:"is--neutral", 
          active: !true,
          onClick: () => closeModal(),
          show: true
        },
      ]}/>
    </Modal>
  )
}

const DeleteModal:React.FC<any> = ({tabs, resetTabs, item, fnc}:{tabs?: any[], item?: any,resetTabs: () => void | any, fnc: (val: boolean) => void | any}) => {
  const [closeM, setCloseM] = useState<boolean>(false)
  const closeModal = () => {
    if(closeM){
      resetTabs()
    }
    fnc(false)
    setCloseM(false)
  }
  
  return (
    <Modal size={'is--sm'} withClose={true} id={'delete-admin'} isOpen={true} fnc={(val: boolean) => closeModal()}>
      <div className='kui-modal-box__header'>
        <h2>Suppression d'un administrateur</h2>
      </div>
      <div className='kui-modal-box__content'>
        <ModalStatus status={'danger'} title={`Souhaitez-vous supprimer ${(tabs && tabs?.length > 0) ? `${tabs?.length < 2 ? "cet element" : `ces ${tabs?.length} elements`}` : item ? "cet element" : "ND"}?`} subtitle={'L\'action est irreversible'}>
          <i className='pi-delete-2-line'></i>
        </ModalStatus>
      </div>

      <ModalActions tabsActions={[
        {
          icon: "pi-delete-2-line",
          type: "button", 
          label: "Supprimer", 
          style:"is--primary", 
          active: true,
          onClick: () => {},
          show:  true
        },
        {
          icon: "pi-close-line", 
          type: "button", 
          label: "Annuler", 
          style:"is--neutral", 
          active: true,
          onClick: () => closeModal(),
          show: true
        },
      ]}/>
    </Modal>
  )
}

const AddRoleModal = ({user, fnc, chngFnc}:{user: any, fnc: (val: boolean) => void | any, chngFnc: (val: boolean) => void | any}) => {
  const [roles, setRoles] = useState<any[]>(user?.roles || [])
  const [closeM, setCloseM] = useState<boolean>(false)
  const [closeMe, setCloseMe] = useState<boolean>(false)
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCloseM(true)
    setCloseMe(true)
  
  }

  useEffect(() => {
    if(closeM && closeMe){
      chngFnc(true)
      setCloseMe(false)
    }
  }, [ chngFnc, closeM]);

  const closeModal = () => {
    fnc(false)
    setCloseM(false)
    setCloseMe(false)
    setRoles([])
  }

  return (
    <Modal size={'is--xl'} withClose={true} id={'attribut-role'} isOpen={true} fnc={(val: boolean) => fnc(val)}>
      <div className='kui-modal-box__header'>
        <h2>Rôles et privilèges</h2>
      </div>
      
      <div className='kui-modal-box__content'>
        {
          closeM ? (
            <KAlert status={"st--danger"} title={"Ouppss!!!"} message={'message'}/>
          ) : null
        }
        <div className='kui-modal-box__roles kui-modal-box-roles'>
          {
            roles && rolesTab?.length > 0 ? (
              rolesTab.map((item: any, idx: number) => (
                <div className='kui-modal-box-role' key={idx}>
                  <strong>{item.name}</strong>
                  <div className='kui-modal-box-role__container'>
                    {
                      item?.privileges?.length > 0 ? (
                        item?.privileges.map((itm: string, index: number) => (
                          <button 
                            type='button' 
                            className='kui-modal-box-role__privilege kui-modal-box-role-pivilege' 
                            key={index} 
                            onClick={() => {
                              if(roles
                                .filter((el: any) => el.name === item.name)
                                .filter((el: any) => el.privileges.filter((el: any) => el === itm).length > 0)
                                .length > 0){
                                  let mroles_priv = roles.filter((el:any) => el.name === item.name)[0]?.privileges
                                  let role: any = {
                                    name: item.name,
                                    privileges: [...mroles_priv?.filter((el: any) => el !== itm)]
                                  } 
                                  setRoles((list) => [
                                    ...list.filter((el:any) => el.name !== item.name),
                                    role
                                  ])
                                }else{
                                  if(roles.filter((el:any) => el.name === item.name).length > 0){
                                    let mroles_priv = roles.filter((el:any) => el.name === item.name)[0]?.privileges
                                    let role: any = {
                                      name: item.name,
                                      privileges: [...mroles_priv?.filter((el: any) => el !== itm), itm]
                                    } 
                                    setRoles((list) => [
                                      ...list.filter((el:any) => el.name !== item.name),
                                      role
                                    ])
                                  }else{
                                    
                                    setRoles((list) => [{
                                      name: item.name,
                                      privileges: [
                                        itm
                                      ]
                                    }, ...list])
                                  }
                                }
                              
                            }}
                          >
                            <div  
                              className={`kui-page-list__checkbox kui-page-list-checkbox ${roles
                              .filter((el: any) => el.name === item.name)
                              .filter((el: any) => el.privileges.filter((el: any) => el === itm).length > 0)
                              .length > 0 ? "checked" : ""}`}
                            >
                              {
                                roles
                                .filter((el: any) => el.name === item.name)
                                .filter((el: any) => el.privileges.filter((el: any) => el === itm).length > 0)
                                .length > 0 ? (
                                  <i className="pi-minimize-line"></i>
                                ) : null
                              }
                            </div>
                            <span>{itm}</span>
                          </button>
                        ))
                      ) : (
                        <span>Aucun privilèges</span>
                      )
                    }
                  </div>
                </div>
              ))
            ) : (
              <span>Aucun role</span>
            )
          } 
        </div>
      </div>
        
      <form onSubmit={handleSubmit}>
        <ModalActions tabsActions={[
          {
            icon: "pi-save-2-line", 
            type: "submit", 
            label: "Enregistrer les modifications", 
            style:"is--primary", 
            active: true,
            show: true
          },
          {
            icon: "pi-close-line", 
            type: "button", 
            label: "Annuler", 
            style:"is--danger", 
            active: true,
            onClick: () => closeModal(),
            show: true
          },
        ]}/>
      </form>
    </Modal>
  )
}

const RoleContainerModal: React.FC<any> = ({item, fnc, chngFnc}:{item: any, fnc: (val: boolean) => void | any, chngFnc: (val: boolean) => void | any}) => {
  const [search, setSearch] = useState<string>("")
  const [addRoleModal, setAddRoleModal] = useState<boolean>(false)
  
  return (
    <div className='kui-modal-full-page__list kui-modal-full-page-list'>
      <h2>Roles</h2>
      <Grid direction={'fd-row'} spacing={'jc-start'} align={'start'} wrap={false} gap={.5}>
        <div className='kui-page-list-actions-search'>
          <i className="pi-search-line"></i>
          <input type="search" value={search} placeholder='Recherche...' onChange={(e) => setSearch(e?.target?.value)}/>
        </div>
        <div className='kui-page-list-actions-group'>
          <Button label={'Attribuer un role'} iconLeftClass='pi-add-circle-line'  btype='button' bstyle='is--primary' onClick={() => {setAddRoleModal(true)}}/>
        </div>
      </Grid>
      <br />
      {
        item?.userType === 'sadm' ? (
          <div className='kui-page-account-grid-item__error kui-page-account-grid-item-error'>
            <div className='kui-page-account-grid-item-error__illustration'>
              <FileAddIllu loop={true} autoplay={true} size={{
                height: 120,
                width: 120
              }} play={true}/>
            </div>
            <div className='kui-page-account-grid-item-error_details'>
              <strong>Role: Super administrateur</strong>
            </div>
          </div>
        ) : (
          item?.roles?.length > 0 ? (
            <div className='kui-modal-full-page-list__container'>
              <Grid direction={'fd-column'} spacing={'jc-start'} align={'start'} wrap={false} gap={.5}>
                {
                  item?.roles
                  .map((itemo: any, index: number) => (
                    <div className='kui-modal-full-page-list-item' key={index}>
                      <div className='kui-modal-full-page-list-item__container'>
                        <div className='kui-modal-full-page-list-item__text'>
                          <strong>{itemo.name?.toUpperCase()}</strong>
                          <span>{`Privileges: ${itemo?.privileges.join(' - ')}`}</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Grid>
            </div>
          ) : (
            <div className='kui-modal-empty'>
              <EmptyList loop={true} autoplay={true} size={{
                  height: 190,
                  width: 290
                }} play={false}/>
              <span>Aucun element trouvé</span>
            </div>
          )
        )
      }
      
      {
        addRoleModal && item && <AddRoleModal chngFnc={(val: boolean) => chngFnc(val)}  user={item} fnc={(val: boolean) => setAddRoleModal(val) }/>
      }
      
    </div>
  )
}

export const AdminListPage = () => {
  let navigate = useNavigate()
 

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const display = searchParams.get('display')
  const n = searchParams.get('number')
  const q = searchParams.get('q')
  
  const [itemNumber, setItemNumber] = useState<number>(n ? parseInt(n) : 15)
  const [search, setSearch] = useState<string>(q  || "")

  const [arrayToDelete, setArrayDeleteModal] = useState<any[]>([])
  const [selectItemModal, setSelectItemModal] = useState<any>(null)

  const [changeItemModal, setChangeItemModal] = useState<boolean>(false)

  const [addModal, setAddModal] = useState<boolean>(false)
  const [recoverModal, setRecoverModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)

  const addOrRemoveToArrayDelete = (id: any) => {
    if(arrayToDelete?.filter((el: any) => el === id).length > 0){
      setArrayDeleteModal((list) => [...list.filter((el: any) => el !== id)])
    }else{
      setArrayDeleteModal((list) => [...list, id])
    }
  }

  const onChangeSearch  = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    navigate(links.admins+`?display=grid&number=${itemNumber}&q=${e.target.value}`)
  }

  const onChangeNumber  = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemNumber(parseInt(e.target.value))
    if(parseInt(e.target.value) > 0){
      navigate(links.admins+`?display=grid&number=${parseInt(e.target.value)}&q=${search}`)
    }
  }

  return (
    <MainLayout here='admins' title='Administrateurs'>
      <div className='kui-page is--min'>
        <div className='kui-arianne'>
          <Link className='kui-link' to={links.home}>
            <i className="pi-home-6-line"></i>
            <span>Accueil</span>
          </Link>
          <span> | </span>
          <p>Administrateurs</p>
        </div>

        <div className='kui-page__header kui-page-header'>
          <h2>Administrateurs</h2>
        </div>
        <div className='kui-page-list'>
          
          {/* <div className='kui-loader'>
            <LoaderAnimation loop={true} autoplay={true} size={{
              height: 40,
              width: 40
            }} play={true}/>
          </div> */}
            
                <div className='kui-page-list__actions kui-page-list-actions'>
                  <div className='kui-page-list-actions-display'>
                    <button type='button' className={`kui-page-list-actions-display__btn ${display === "list" ? "active" : ""}`} onClick={() => navigate(links.admins+`?display=list&number=${itemNumber}${search ? `&q=${search}` : ""}`)}>
                      <i className="pi-list-check-line"></i>
                    </button>
                    <button type='button' className={`kui-page-list-actions-display__btn ${display === "grid" ? "active" : ""}`} onClick={() => navigate(links.admins+`?display=grid&number=${itemNumber}${search ? `&q=${search}` : ""}`)}>
                      <i className="pi-layout-grid-line"></i>
                    </button>
                  </div>
                  <div className='kui-page-list-actions-group'>
                    <div className='kui-page-list-actions-input'>
                      <span>Nombre à afficher: </span>
                      <input type="number" min={1} max={50}  value={itemNumber} placeholder='15' onChange={onChangeNumber}/>
                    </div>
                    <div className='kui-page-list-actions-search'>
                      <i className="pi-search-line"></i>
                      <input type="search" value={search} placeholder='Recherche...' onChange={onChangeSearch}/>
                    </div>
                  </div>
                  <div className='kui-page-list-actions-group'>
                    <Button label={'Ajouter'} iconLeftClass='pi-add-circle-line' btype='button' bstyle='is--primary' onClick={() => setAddModal(true)}/>
                    {(arrayToDelete?.length > 0) ? (
                      <Button label={`Supprimer ${arrayToDelete?.length > 1 ? `les ${arrayToDelete?.length} elements selectionés` : "l'element selectioné"}`} iconLeftClass='pi-delete-2-line' btype='button' bstyle='is--danger' onClick={() => setDeleteModal(true)}/>
                    ) : null}
                  </div>
                </div>
                
                    {/* <div className='kui-page-error'>
                      <div className='kui-page-error__illustration'>
                        <FailIllu loop={true} autoplay={true} size={{
                            height: 180,
                            width: 180
                          }} play={true}/>
                      </div>
                      <div className='kui-page-error_details'>
                        <p>Oupps! Une erreur est survenue</p>
                        <h1>{"message"}</h1>
                      </div>
                    </div> */}
                 
                      <div className='kui-page-list__container'>
                        <span className='kui-page-list__total'>10 elements trouvés</span>
                        {
                            display === "grid" ? (
                              <Grid direction={'fd-row'} spacing={'jc-start'} align={'start'} wrap={true} gap={1}>
                                <div className='kui-page-list-user'>
                                  <div className='kui-page-list-user__avatar'>
                                    {/* <img src={item?.avatar?.url} alt={item?.avatar?.alt || "user"} /> */}
                                    <span>
                                      {createInitial(`John Doe`)}
                                    </span>
                                  </div>
                                  <div className='kui-page-list-user__container'>
                                    <div className='kui-page-list-user__name'>
                                      <strong>{`John DOE`}</strong>
                                      <span>{`@john-doe`}</span>
                                      <div style={{display: "flex"}}>
                                        <span className='kui-tag is--info'>Super Admin</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='kui-page-list-user__actions'>
                                    <button type='button' className='kui-page-list-user__action' onClick={() => {
                                      setSelectItemModal(null)
                                      setShowModal(true)
                                      setSelectItemModal({id: '',})
                                    }}>
                                      <i className='pi-user-visible-line'></i>
                                      <span>Voir le profile</span>
                                    </button>
                                  </div>
                                  <div className='kui-page-list-user__min'>
                                    <button type='button' className={`kui-page-list__checkbox kui-page-list-checkbox ${arrayToDelete?.filter((el: any) => el === 'id').length > 0 ? "checked" : ""}`} onClick={() => addOrRemoveToArrayDelete('')}>
                                      {
                                        arrayToDelete?.filter((el: any) => el === 'id').length > 0 ? (
                                          <i className="pi-minimize-line"></i>
                                        ) : ""
                                      }
                                    </button>

                                    <TableOptions atype={"reduce"} tabs={[
                                      {
                                        icon: "pi-safe-lock-line", 
                                        label: "Reinitialiser", 
                                        style:"is--neutral", 
                                        onClick: () => {
                                          setSelectItemModal(null)
                                          setRecoverModal(true)
                                          setSelectItemModal({
                                            id: '1'
                                          })
                                        }
                                      },
                                    ]}/>
                                    
                                  </div>
                                </div>
                              </Grid>
                            ) : (
                              <Table>
                                <Row rtype='header'>
                                  <Column ctype={'small'}>
                                    <strong>#</strong>
                                  </Column>
                                  <Column ctype={'large'}>
                                    <strong>Utilisateur</strong>
                                  </Column>
                                  <Column ctype={'large'}>
                                    <strong>Contact</strong>
                                  </Column>
                                  <Column ctype={'mid'}>
                                    <strong>Type</strong>
                                  </Column>
                                  <Column ctype={'small'}>
                                    <strong>#</strong>
                                  </Column>
                                </Row>
                                <Row>
                                  <Column ctype={'small'}>
                                    <button type='button' className={`kui-page-list__checkbox kui-page-list-checkbox ${arrayToDelete?.filter((el: any) => el === 'id').length > 0 ? "checked" : ""}`} onClick={() => addOrRemoveToArrayDelete('id')}>
                                      {
                                        arrayToDelete?.filter((el: any) => el === 'id').length > 0 ? (
                                          <i className="pi-minimize-line"></i>
                                        ) : ""
                                      }
                                    </button>
                                  </Column>
                                  <Column ctype={'large'}>
                                    <TableItem title={`John DOE`} subtitle={`@john-doe`} image={''} withImage={false}/>
                                  </Column>
                                  <Column ctype={'large'}>
                                    <div>
                                      <TableItem title={`Tel: 226XXXXXX`} subtitle={`Email: email@example.com`} withImage={false} image={null}/>
                                    </div>
                                  </Column>
                                  <Column ctype={'mid'}>
                                    <div>
                                      <span className={`kui-tag is--info`}>{"Admin"}</span>
                                    </div>
                                  </Column>
                                  <Column ctype={'small'}>
                                  
                                      <TableOptions atype={"reduce"} tabs={[
                                        {
                                          icon: "pi-eye-line", 
                                          label: "Aperçu", 
                                          style:"is--neutral", 
                                          onClick: () => {
                                            setSelectItemModal(null)
                                            setShowModal(true)
                                            setSelectItemModal({
                                              id: '1'
                                            })
                                          }
                                        },
                                        
                                        {
                                          icon: "pi-safe-lock-line", 
                                          label: "Reinitialiser", 
                                          style:"is--neutral", 
                                          onClick: () => {
                                            setSelectItemModal(null)
                                            setRecoverModal(true)
                                            setSelectItemModal({
                                              id: "1"
                                            })
                                          }
                                        },
                                      ]}/>
                                    
                                  </Column>
                                </Row>
                              </Table>
                            )
                          }
                          
                          {/* <div className='kui-page-empty'>
                            <div className='kui-page-empty__illustration'>
                              <EmptyList loop={true} autoplay={true} size={{
                                  height: (380 / 1.3),
                                  width: (420 / 1.3)
                              }} play={true}/>
                            </div>
                            <div className='kui-page-empty__details'>
                              <h1>Aucun element trouvé</h1>
                            </div>
                          </div> */}
                          
                      </div>
                   
                {addModal ? <AddModal fnc={(val?: boolean) => setAddModal(val || false)}/> : null}
                {deleteModal && (selectItemModal || arrayToDelete?.length > 0) ? <DeleteModal resetTabs={() => setArrayDeleteModal([])} item={selectItemModal} fnc={(val?: boolean) => {setDeleteModal(val || false)}} tabs={arrayToDelete}/> : null}
                {recoverModal && selectItemModal ? <RecoverPasswordModal item={selectItemModal} fnc={(val?: boolean) => setRecoverModal(val || false)} /> : null}

                {showModal && selectItemModal ? (
                  <Modal size={'is--xl'} withClose={true} id={'show-action'} isOpen={true} fnc={(val: boolean) => setShowModal(val)}>
                    <div className='kui-modal-box__header'>
                      <h2>Aperçu d'un administrateur</h2>
                    </div>
                    <div className='kui-modal-full-page'>
                      <div className='kui-modal-full-page__side'>
                        <div className='kui-modal-full-page__illustration kui-modal-full-page-illustration is--left'>
                          <div className='kui-modal-full-page-illustration__container is--square'>
                            {
                              selectItemModal?.avatar?.url ? (
                                <img src={selectItemModal?.avatar?.url} alt={selectItemModal?.avatar?.alt || "user"} />
                              ) : (
                                <span>
                                  {createInitial(`${selectItemModal?.firstname} ${selectItemModal?.lastname}`)}
                                </span>
                              )
                            }
                          </div>
                        </div>
                        <div className='kui-modal-full-page-details'>
                          
                          <h1>{`${selectItemModal?.firstname} ${selectItemModal?.lastname?.toUpperCase()}`}</h1>
                          <span>{`@${selectItemModal?.username}`}</span>
                          
                          <div className='kui-modal-full-page-details'>
                            <Grid direction={'fd-row'} spacing={'jc-between'} align={'start'} wrap={true} gap={0.5}>Email: <strong>{selectItemModal?.email}</strong></Grid>
                            <Grid direction={'fd-row'} spacing={'jc-between'} align={'start'} wrap={true} gap={0.5}>Telephone: <strong>{selectItemModal?.telephone}</strong> </Grid>
                          </div>
                          <div className='kui-modal-full-page-details-createdAt'>
                            <p>Compte créé le {selectItemModal.createdAt ? capitalize(format(new Date(selectItemModal.createdAt), "EEEE d MMMM yyyy à HH:mm:ss", {locale: fr})) : "ND"}</p>
                          </div>
                        </div>
                      </div>

                      <div className='kui-modal-full-page__container'>
                        <div className='kui-modal-full-page__section'>
                          <RoleContainerModal  chngFnc={(val: boolean) => setChangeItemModal(val)} item={selectItemModal} fnc={(val?: boolean) => setShowModal(val || false)}/>
                        </div>
                      </div>
                    </div>

                    <ModalActions tabsActions={[
                      {
                        icon: "pi-edit-3-line", 
                        label: "Reinitialiser le mot de passe", 
                        type: "button", 
                        style:"is--primary", 
                        active: true,
                        onClick: () => {
                          setShowModal(false)
                          setRecoverModal(true)
                        },
                        show: true
                      },
                      {
                        type: "button", 
                        icon: "pi-delete-2-line", 
                        label: "Supprimer", 
                        style:"is--danger",  
                        active: true,
                        onClick: () => {
                          setShowModal(false)
                          setDeleteModal(true)
                        },
                        show: true
                      },
                    ]}/>
                  </Modal>
                ) : null}
             
        </div>
      </div>
    </MainLayout>
  )
}