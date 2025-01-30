import React, { FormEvent, useEffect, useState } from 'react'
import { MainLayout } from '../../../../../layout'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { links } from '../../../../../routes'
import { SettingSubmenu } from '../../module/SettingSubmenu'
import { Button, Column, Grid, Modal, ModalActions, ModalForm, Row, Table, TableOptions } from '../../../../../components'
import { EmptyList } from '../../../../../assets/illustration'

const AddModal = ({tabsType, fnc}:{tabsType?: any[], fnc: (val: boolean) => void | any}) => {
  const [data, setData] = useState<any>({
    libelle: "",
    domaine: "",
    icon: "",
    description: "",
    parentId: "",
    status: false
  })
  const categories = [
    {
      label: "Categorie 1",
      value: "categorie-1"
    },
    {
      label: "Categorie 2",
      value: "categorie-2"
    },
    {
      label: "Categorie 3",
      value: "categorie-3"
    },
    {
      label: "Categorie 4",
      value: "categorie-4"
    },
    {
      label: "Categorie 5",
      value: "categorie-5"
    },
    {
      label: "Categorie 6",
      value: "categorie-6"
    }
  ]

  const icons = [
    {
      icon: "pi-comment-2-line",
      id: "pi-comment-2-line"
    },
    {
      icon: "pi-message-3-line",
      id: "pi-message-3-line"
    },
    {
      icon: "pi-safe-box-line",
      id: "pi-safe-box-line"
    },
    {
      icon: "pi-bank-card-line",
      id: "pi-bank-card-line"
    },
    {
      icon: "pi-calendar-2-line",
      id: "pi-calendar-2-line"
    },
    {
      icon: "pi-candles-line",
      id: "pi-candles-line"
    },
    {
      icon: "pi-currency-baht-line",
      id: "pi-currency-baht-line"
    },
    {
      icon: "pi-building-2-line",
      id: "pi-building-2-line"
    },
    {
      icon: "pi-greatwall-line",
      id: "pi-greatwall-line"
    },
    {
      icon: "pi-hospital-line",
      id: "pi-hospital-line"
    },
    {
      icon: "pi-solar-panel-line",
      id: "pi-solar-panel-line"
    },
    {
      icon: "pi-server-2-line",
      id: "pi-server-2-line"
    },
    {
      icon: "pi-radio-line",
      id: "pi-radio-line"
    },
    {
      icon: "pi-homepod-line",
      id: "pi-homepod-line"
    },
  ]

  const [closeM, setCloseM] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)
  const [isSubCategory, setIsSubCategory] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!data?.libelle){
      setError({
        field: "libelle",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    if(!data?.domaine){
      setError({
        field: "domaine",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
    if(isSubCategory){
      if(!data?.parentId){
        setError({
          field: "parentId",
          message: "Veuillez renseigner ce champs"
        })
        return
      }
    }
    setError(null)
  }

  const closeModal = () => {
    setData(null)
    fnc(false)
    setCloseM(false)
  }

  return (
    <Modal size={'is--md'} withClose={true} id={'edit-category'} isOpen={true} fnc={(val: boolean) => fnc(val)}>
      <div className='kui-modal-box__header'>
        <h2>Ajout d'une catégorie</h2>
        <button type='button' className={`kui-chip ${data?.status ? "is--success" : "is--warning"}`} onClick={() => {
          setData({...data, status: !data?.status})
        }}>
           {data?.status ? "Actif: Rendre inactif" : "Inactif: Rendre actif"}
        </button>
      </div>
      <div className='kui-modal-box__content'>
        <div className='kui-modal-box-group'>
          <h3>Choix du domaine </h3>
          <div className='kui-modal-box__grid kui-modal-box-grid is--wrap'>
            {
              tabsType?.map(({id, label, icon}, index: number) => (
                <button type='button' className={`kui-modal-box-grid-item is--three ${data?.domaine === id ? "is--active" : ""}`} onClick={() => setData({...data, domaine: id})} key={index}>
                  <i className={icon}></i>
                  <span>{label}</span>
                </button>
              ))
            }
          </div>
        </div>
        {
          data?.domaine ? (
            <>
              <div className='kui-modal-box__grid kui-modal-box-grid'>
                <button type='button' className={`kui-modal-box-grid-item ${!isSubCategory ? "is--active" : ""}`} onClick={() => {
                  setData({...data, parentId: ""})
                  setIsSubCategory(false)
                }}>
                  <i className="pi-box-2-line"></i>
                  <span>Ce n'est pas une sous-categorie</span>
                </button>
                <button type='button' className={`kui-modal-box-grid-item ${isSubCategory ? "is--active" : ""}`} onClick={() => {
                  setIsSubCategory(true)
                }}>
                  <i className="pi-Inventory-line"></i>
                  <span>C'est une sous-categorie</span>
                </button>
              </div>

              <div className='kui-modal-box-group'>
               
                <div className='kui-modal-box-group__header'> <h3>Choix du pictogramme</h3><span className='kui-tag'>facultatif</span></div>
                
                <div className='kui-modal-box__grid kui-modal-box-grid is--wrap'>
                  {
                    icons?.map((item: any, index: number) => (
                      <button type='button' className={`kui-modal-box-grid-item is--min ${item.id === data?.icon ? "is--active" : ""}`} onClick={() => {
                        setData({...data, icon: item.id})
                      }} key={index}>
                        <i className={item.icon}></i>
                      </button>
                    ))
                  }
                </div>
              </div>
            
              <ModalForm tabsField={[
                {
                  field: "textfield",
                  field_type: "text",
                  field_require: true,
                  value: data.libelle,
                  label: "Libellé",
                  id: "libelle",
                  onChange: (val: any) => setData({...data, libelle: val}),
                  error: error,
                  placeholder: "Ex: Technique",
                  isShow: true
                },
                {
                  field: "selectfield",
                  field_type: "no-multiple",
                  field_require: true,
                  value: data.parentId,
                  label: "Categorie Parente",
                  id: "parentId",
                  onChange: (val: any) => setData({...data, parentId: val}),
                  error: error,
                  tabs: categories,
                  placeholder: "Ex: Programmation",
                  isShow: isSubCategory
                },
                {
                  field: "textfield",
                  field_type: "textarea",
                  field_require: false,
                  value: data.description,
                  label: "Description",
                  id: "description",
                  onChange: (val: any) => setData({...data, description: val}),
                  error: error,
                  placeholder: "Ex: c'est le departement Technique",
                  isShow: true
                },
              ]}/>
            </>
          ) : null
        }
      </div>
      <form onSubmit={handleSubmit}>
        <ModalActions tabsActions={[
          {
            icon: "pi-add-circle-line", 
            type: "submit", 
            label:"Enregistrer et ajouter", 
            style:"is--primary", 
            active: true,
          },
          {
            icon: "pi-close-line", 
            type: "button", 
            label:"Annuler", 
            style:"is--danger", 
            active: true,
            onClick: () => closeModal()
          },
        ]}/>
      </form>
    </Modal>
  )
}

const EditModal = ({item, fnc}:{item?: any, fnc: (val: boolean) => void | any}) => {
  const [data, setData] = useState<any>({
    libelle: "",
    icon: "",
    description: "",
    parentId: "",
    status: false
  })
  const categories = [
    {
      label: "Categorie 1",
      value: "categorie-1"
    },
    {
      label: "Categorie 2",
      value: "categorie-2"
    },
    {
      label: "Categorie 3",
      value: "categorie-3"
    },
    {
      label: "Categorie 4",
      value: "categorie-4"
    },
    {
      label: "Categorie 5",
      value: "categorie-5"
    },
    {
      label: "Categorie 6",
      value: "categorie-6"
    }
  ]

  const icons = [
    {
      icon: "pi-comment-2-line",
      id: "pi-comment-2-line"
    },
    {
      icon: "pi-message-3-line",
      id: "pi-message-3-line"
    },
    {
      icon: "pi-safe-box-line",
      id: "pi-safe-box-line"
    },
    {
      icon: "pi-bank-card-line",
      id: "pi-bank-card-line"
    },
    {
      icon: "pi-calendar-2-line",
      id: "pi-calendar-2-line"
    },
    {
      icon: "pi-candles-line",
      id: "pi-candles-line"
    },
    {
      icon: "pi-currency-baht-line",
      id: "pi-currency-baht-line"
    },
    {
      icon: "pi-building-2-line",
      id: "pi-building-2-line"
    },
    {
      icon: "pi-greatwall-line",
      id: "pi-greatwall-line"
    },
    {
      icon: "pi-hospital-line",
      id: "pi-hospital-line"
    },
    {
      icon: "pi-solar-panel-line",
      id: "pi-solar-panel-line"
    },
    {
      icon: "pi-server-2-line",
      id: "pi-server-2-line"
    },
    {
      icon: "pi-radio-line",
      id: "pi-radio-line"
    },
    {
      icon: "pi-homepod-line",
      id: "pi-homepod-line"
    },
  ]

  const [closeM, setCloseM] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)
  const [isSubCategory, setIsSubCategory] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!data?.libelle){
      setError({
        field: "libelle",
        message: "Veuillez renseigner ce champs"
      })
      return
    }
   
    if(isSubCategory){
      if(!data?.parentId){
        setError({
          field: "parentId",
          message: "Veuillez renseigner ce champs"
        })
        return
      }
    }
    setError(null)
  }

  const closeModal = () => {
    setData(null)
    fnc(false)
    setCloseM(false)
  }

  return (
    
    <Modal size={'is--md'} withClose={true} id={'add-category'} isOpen={true} fnc={(val: boolean) => fnc(val)}>
      <div className='kui-modal-box__header'>
        <h2>Modification d'une catégorie</h2>
        <button type='button' className={`kui-chip ${data?.status ? "is--success" : "is--warning"}`} onClick={() => {
          setData({...data, status: !data?.status})
        }}>
           {data?.status ? "Actif: Rendre inactif" : "Inactif: Rendre actif"}
        </button>
      </div>
      <div className='kui-modal-box__content'>
       
        <div className='kui-modal-box__grid kui-modal-box-grid'>
          <button type='button' className={`kui-modal-box-grid-item ${!isSubCategory ? "is--active" : ""}`} onClick={() => {
            setData({...data, parentId: ""})
            setIsSubCategory(false)
          }}>
            <i className="pi-box-2-line"></i>
            <span>Ce n'est pas une sous-categorie</span>
          </button>
          <button type='button' className={`kui-modal-box-grid-item ${isSubCategory ? "is--active" : ""}`} onClick={() => {
            setIsSubCategory(true)
          }}>
            <i className="pi-Inventory-line"></i>
            <span>C'est une sous-categorie</span>
          </button>
        </div>

        <div className='kui-modal-box-group'>
          
          <div className='kui-modal-box-group__header'> <h3>Choix du pictogramme</h3><span className='kui-tag'>facultatif</span></div>
          
          <div className='kui-modal-box__grid kui-modal-box-grid is--wrap'>
            {
              icons?.map((item: any, index: number) => (
                <button type='button' className={`kui-modal-box-grid-item is--min ${item.id === data?.icon ? "is--active" : ""}`} onClick={() => {
                  setData({...data, icon: item.id})
                }} key={index}>
                  <i className={item.icon}></i>
                </button>
              ))
            }
          </div>
        </div>
      
        <ModalForm tabsField={[
          {
            field: "textfield",
            field_type: "text",
            field_require: true,
            value: data.libelle,
            label: "Libellé",
            id: "libelle",
            onChange: (val: any) => setData({...data, libelle: val}),
            error: error,
            placeholder: "Ex: Technique",
            isShow: true
          },
          {
            field: "selectfield",
            field_type: "no-multiple",
            field_require: true,
            value: data.parentId,
            label: "Categorie Parente",
            id: "parentId",
            onChange: (val: any) => setData({...data, parentId: val}),
            error: error,
            tabs: categories,
            placeholder: "Ex: Programmation",
            isShow: isSubCategory
          },
          {
            field: "textfield",
            field_type: "textarea",
            field_require: false,
            value: data.description,
            label: "Description",
            id: "description",
            onChange: (val: any) => setData({...data, description: val}),
            error: error,
            placeholder: "Ex: c'est le departement Technique",
            isShow: true
          },
        ]}/>
            
      </div>
      <form onSubmit={handleSubmit}>
        <ModalActions tabsActions={[
          {
            icon: "pi-edit-3-line", 
            type: "submit", 
            label:"Enregistrer les modifications", 
            style:"is--primary", 
            active: true,
          },
          {
            icon: "pi-close-line", 
            type: "button", 
            label:"Annuler", 
            style:"is--danger", 
            active: true,
            onClick: () => closeModal()
          },
        ]}/>
      </form>
    </Modal>
  )
}


const DeleteModal = ({tabs, item, fnc}:{tabs?: any[], item?: any, fnc: (val: boolean) => void | any}) => {
  const [closeM, setCloseM] = useState<boolean>(false)
  const closeModal = () => {
    fnc(false)
    setCloseM(false)
  }
  return (
    <Modal size={'is--sm'} withClose={true} id={'delete-category'} isOpen={true} fnc={(val: boolean) => fnc(val)}>
      <div className='kui-modal-box__header'>
        <h2>Suppression d'une catégorie</h2>
      </div>
      <div className='kui-modal-box__content'>
        <div className='kui-modal-box__status kui-modal-box-statut is--danger'>
          <div className='kui-modal-box-statut__illustration'>
            <i className='pi-delete-2-line'></i>
          </div>
          <div className='kui-modal-box-statut__container'>
            <h1>Souhaitez-vous supprimer {(tabs && tabs?.length > 0) ? `${tabs?.length < 2 ? "cet element" : `ces ${tabs?.length} elements`}` : item ? "cet element" : "ND"}?</h1>
          </div>
        </div>
      </div>
      
      <ModalActions tabsActions={[
        {
          icon: "pi-delete-2-line", 
          type: "submit", 
          label:"Envoyer la demande de suppression", 
          style:"is--primary", 
          active: true,
        },
        {
          icon: "pi-close-line", 
          type: "button", 
          label:"Annuler", 
          style:"is--neutral", 
          active: true,
          onClick: () => closeModal()
        },
      ]}/>
    </Modal>
  )
}

export const CategoryPage = () => {
  let navigate = useNavigate()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const display = searchParams.get('display')
  const n = searchParams.get('number')
  const q = searchParams.get('q')
  const t = searchParams.get('t')

  const tabsType = [
    {
      id: "departement",
      icon: "pi-Inventory-line",
      label: "Departement",
    },
    {
      id: "user",
      icon: "pi-user-4-line",
      label: "Utilisateurs",
    },
    {
      id: "client",
      icon: "pi-user-5-line",
      label: "Clients",
    },
    {
      id: "partner",
      icon: "pi-store-2-line",
      label: "Partenaires",
    },
    {
      id: "projet",
      icon: "pi-folder-3-line",
      label: "Projets",
    },
    {
      id: "event",
      icon: " pi-calendar-3-line",
      label: "Evenement",
    },
  ]

  const [itemNumber, setItemNumber] = useState<number>(n ? parseInt(n) : 15)
  const [search, setSearch] = useState<string>(q  || "")

  const [arrayToDelete, setArrayDeleteModal] = useState<any[]>([])
  const [selectItemModal, setSelectItemModal] = useState<any>(null)

  const [addModal, setAddModal] = useState<boolean>(false)
  const [showItemModal, setShowItemModal] = useState<boolean>(false)
  const [editModal, setEditModal] = useState<boolean>(false)
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
    navigate(links.categories+`?display=${display || "list"}&number=${itemNumber}&q=${e.target.value}&t=${t || ""}`)
  }

  const onChangeNumber  = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemNumber(parseInt(e.target.value))
    if(parseInt(e.target.value) > 0){
      navigate(links.categories+`?display=${display || "list"}&number=${parseInt(e.target.value)}&q=${search}${t? `&t=${t}` : ""}`)
    }
  }

  const onChangeType  = (id: string) => {
    navigate(links.categories+`?display=${display || "list"}&number=${itemNumber}${q ? `&q=${search}` : ""}&t=${id}`)
  }

  return (
    <MainLayout title="Categories" here='parameter' isMin={true}>
      
      <div className='kui-page with--submenu'>
        <SettingSubmenu />
        <div className='kui-page__container'>
          <div className='kui-arianne'>
            <Link className='kui-link' to={links.home}>
              <i className="pi-home-6-line"></i>
              <span>Accueil</span>
            </Link>
            <span> | </span>
            <Link className='kui-link' to={links.setting}>
              <span>Paramètres</span>
            </Link>
            <span> | </span>
            <p>Catégories</p>
          </div>
          <div className='kui-page__header kui-page-header'>
            <h1>🔩</h1>
            <h2>Catégories</h2>
          </div>
          <div className='kui-page-list'>
            <div className='kui-page-list__actions kui-page-list-actions'>
              <div className='kui-page-list-actions-display'>
                <button type='button' className={`kui-page-list-actions-display__btn ${display ? (display === "list" ? "active" : "") : "active"}`} onClick={() => navigate(links.categories+`?display=list&number=${itemNumber}${search ? `&q=${search}` : ""}${t ? `&t=${t}` : ""}`)}>
                  <i className="pi-list-check-line"></i>
                </button>
                <button type='button' className={`kui-page-list-actions-display__btn ${display === "grid" ? "active" : ""}`} onClick={() => navigate(links.categories+`?display=grid&number=${itemNumber}${search ? `&q=${search}` : ""}${t ? `&t=${t}` : ""}`)}>
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
                  {arrayToDelete?.length > 0 ? <Button label={`Supprimer ${arrayToDelete?.length > 1 ? `les ${arrayToDelete?.length} elements selectionés` : "l'element selectioné"}`} iconLeftClass='pi-delete-2-line' btype='button' bstyle='is--danger' onClick={() => setDeleteModal(true)}/> : null}
              </div>
            </div>
            <div className='kui-page-list__types kui-page-list-types'>
              <h2>Types de categories: </h2>
              <div className='kui-page-list-types__container'>
                {
                  tabsType.map((item: any, index: number) => (
                    <button className={`kui-page-list-type ${item.id === t ? "active" : ""}`} key={index} type='button' onClick={() => onChangeType(item.id)}>
                      <i className={item.icon}></i>
                      <span>{item.label}</span>
                    </button>
                  ))
                }
              </div>
            </div>
            <div className='kui-page-list__container'>
              <span className='kui-page-list__total'>20 elements trouvés</span>
              {
                display === "grid" ? (
                  <Grid direction={'fd-row'} spacing={'jc-start'} align={'start'} wrap={true} gap={1}>
                    <div className='kui-page-list-item'>
                      <div className='kui-page-list-item__min'>
                        <button type='button' className={`kui-page-list__checkbox kui-page-list-checkbox ${arrayToDelete?.filter((el: any) => el === "1").length > 0 ? "checked" : ""}`} onClick={() => addOrRemoveToArrayDelete("1")}>
                          {
                            arrayToDelete?.filter((el: any) => el === "1").length > 0 ? (
                              <i className="pi-minimize-line"></i>
                            ) : ""
                          }
                        </button>
                        
                        <span className='kui-chip is--success'>
                          Actif
                        </span>
                        <span className='kui-tag'>Evenement</span>
                      </div>
                      <div className='kui-page-list-item__container'>
                        <div className='kui-page-list-item__illustration'>
                          <i className=" pi-calendar-3-line"></i>
                        </div>
                        <div className='kui-page-list-item__details'>
                          <strong className='kui-page-list-item__title'>Assemblée genérale</strong>
                          <p className='kui-page-list-item__body'>Parent: <strong>Reunion</strong></p>
                        </div>
                      </div>
                      <div className='kui-page-list-item__actions'>
                        <button type='button' className={`kui-table-option is--neutral`} onClick={() => {
                          setSelectItemModal(null)
                          setSelectItemModal({id: ""})
                          setShowItemModal(true)
                        }}>
                          <i className={"pi-eye-line"}></i>
                          <span>{"Apercu"}</span>
                        </button>
                        <button type='button' className={`kui-table-option is--neutral`} onClick={() => {
                          setSelectItemModal(null)
                          setSelectItemModal({id: ""})
                          setEditModal(true)
                        }}>
                          <i className={"pi-edit-3-line"}></i>
                          <span>{"Modifier"}</span>
                        </button>
                        <button type='button' className={`kui-table-option is--danger`} onClick={() => {
                          setSelectItemModal(null)
                          setSelectItemModal({id: ""})
                          setEditModal(true)
                        }}>
                          <i className={"pi-delete-2-line"}></i>
                          <span>{"Supprimer"}</span>
                        </button>
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
                        <strong>Libellé</strong>
                      </Column>
                      <Column ctype={'mid'}>
                        <strong>Parent</strong>
                      </Column>
                      <Column ctype={'mid'}>
                        <strong>Domaine</strong>
                      </Column>
                      <Column ctype={'mid'}>
                        <strong>Statut</strong>
                      </Column>
                      <Column ctype={'small'}>
                        <strong>#</strong>
                      </Column>
                    </Row>
                    <Row>
                      <Column ctype={'small'}>
                        <button type='button' className={`kui-page-list__checkbox kui-page-list-checkbox ${arrayToDelete?.filter((el: any) => el === "1").length > 0 ? "checked" : ""}`} onClick={() => addOrRemoveToArrayDelete("1")}>
                          {
                            arrayToDelete?.filter((el: any) => el === "1").length > 0 ? (
                              <i className="pi-minimize-line"></i>
                            ) : ""
                          }
                        </button>
                      </Column>
                      <Column ctype={'large'}>
                        <p>
                          Assemblée genérale
                        </p>
                      </Column>
                      <Column ctype={'mid'}>
                        <strong>Reunion</strong>
                      </Column>
                      <Column ctype={'mid'}>
                        <span className='kui-tag'>Evenement</span>
                      </Column>
                      <Column ctype={'mid'}>
                        <div>
                          <span className='kui-chip is--success'>
                            Actif
                          </span>
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
                              setShowItemModal(true)
                              setSelectItemModal({
                                id: ""
                              })
                            }
                          },
                          {
                            icon: "pi-edit-3-line", 
                            label: "Modifier", 
                            style:"is--neutral", 
                            onClick: () => {
                              setSelectItemModal(null)
                              setEditModal(true)
                              setSelectItemModal({
                                id: ""
                              })
                            }
                          },
                          {
                            icon: "pi-delete-2-line", 
                            label: "Supprimer", 
                            style:"is--danger", 
                            onClick: () => {
                              setSelectItemModal(null)
                              setDeleteModal(true)
                              setSelectItemModal({
                                id: ""
                              })
                            }
                          },
                        ]}/>
                      </Column>
                    </Row>
                  </Table>
                )
              }
            </div>
            {addModal && tabsType ? <AddModal tabsType={tabsType} fnc={(val?: boolean) => setAddModal(val || false)}/> : null}
            {editModal && selectItemModal ? <EditModal item={selectItemModal} fnc={(val?: boolean) => setEditModal(val || false)}/> : null}
            {deleteModal && (selectItemModal || arrayToDelete?.length > 0) ? <DeleteModal item={selectItemModal} fnc={(val?: boolean) => setDeleteModal(val || false)} tabs={arrayToDelete}/> : null}
            {showItemModal && selectItemModal ? (
              <Modal size={'is--full-page'} withClose={true} id={'show-category'} isOpen={true} fnc={(val: boolean) => setShowItemModal(val)}>
                
                <div className='kui-modal-box__header'>
                  <h2>Aperçue d'une catégorie</h2>
                  <div>
                  <span className={`kui-chip ${ "is--success" }`}>
                    Status: Actif
                  </span>
                  </div>
                </div>

                <div className='kui-modal-full-page'>
                  <div className='kui-modal-full-page__side'>
                    <div className='kui-modal-full-page__illustration kui-modal-full-page-illustration is--left'>
                      <div className='kui-modal-full-page-illustration__container is--square'>
                        <i className=" pi-calendar-3-line"></i>
                      </div>
                    </div>
                    <div className='kui-modal-full-page-details'>
                      <div className='kui-modal-full-page-details-grid'>
                        <span className='kui-tag'>Evenement</span>
                      </div>
                      <h1>Assemblée genérale</h1>
                      <div className='kui-modal-full-page-details-category'>
                        <button type='button' onClick={() => {
                          setSelectItemModal({id: ""})
                          setShowItemModal(true)
                        }}>
                          <span>Categorie parente: </span><strong>Reunion</strong>
                        </button>
                      </div>
                      <div className='kui-modal-full-page-details-description'>
                        <strong>Description</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ipsa illo! Atque vel inventore iste reiciendis suscipit alias nulla harum accusamus, asperiores nam placeat perspiciatis officia tenetur ea consequuntur quo temporibus! Corrupti et iste iure optio dolorem ab consequuntur voluptate. Alias eaque minima deserunt fugit.</p>
                      </div>
                      <div className='kui-modal-full-page-details-createdAt'>
                        <p>Créé le 10/03/2024 à 12h30 par <strong>John Doe</strong></p>
                        <p>Derniere modification: 13/03/2024 à 10h30 par <strong>Jonas Doe</strong></p>
                      </div>
                    </div>
                  </div>
                  <div className='kui-modal-full-page__container'>
                    <div className='kui-modal-full-page__section'>
                      <div className='kui-modal-full-page__list kui-modal-full-page-list'>
                        <h2>Sous-categories</h2>
                        <div className='kui-modal-full-page-list__container'>
                          <Grid direction={'fd-column'} spacing={'jc-start'} align={'start'} wrap={false} gap={.5}>
                              <div className='kui-modal-full-page-list-item'>
                                <div className='kui-modal-full-page-list-item__container'>
                                  <div className='kui-modal-full-page-list-item__illustration'>
                                    <i className="pi-calendar-2-line"></i>
                                  </div>
                                  <div className='kui-modal-full-page-list-item__text'>
                                    <strong>Sous-Categorie</strong>
                                    <div><span className='kui-tag'>Categerie Parente</span></div>
                                    
                                  </div>
                                </div>
                                <div className='kui-modal-full-page-list-item__action'>
                                  <TableOptions atype={"reduce"} tabs={[
                                    {
                                      icon: "pi-eye-line", 
                                      label: "Aperçu", 
                                      style:"is--neutral", 
                                      onClick: () => {
                                        setSelectItemModal(null)
                                        setShowItemModal(true)
                                        setSelectItemModal({
                                          id: ""
                                        })
                                      }
                                    },
                                    {
                                      icon: "pi-edit-3-line", 
                                      label: "Modifier", 
                                      style:"is--neutral", 
                                      onClick: () => {
                                        setSelectItemModal(null)
                                        setShowItemModal(false)
                                        setEditModal(true)
                                        setSelectItemModal({
                                          id: ""
                                        })
                                      }
                                    },
                                    {
                                      icon: "pi-delete-2-line", 
                                      label: "Supprimer", 
                                      style:"is--danger", 
                                      onClick: () => {
                                        setSelectItemModal(null)
                                        setShowItemModal(false)
                                        setDeleteModal(true)
                                        setSelectItemModal({
                                          id: ""
                                        })
                                      }
                                    },
                                  ]}/>
                                </div>
                              </div>
                          </Grid>
                        </div>
                      </div>
                    </div>
                    <div className='kui-modal-full-page__section'>
                      <div className='kui-modal-full-page__list kui-modal-full-page-list'>
                        <h2>Utilisé dans...</h2>
                      </div>
                      <div className='kui-modal-empty'>
                        <EmptyList loop={true} autoplay={true} size={{
                          height: 190,
                          width: 290
                        }} play={true}/>
                        <span>Aucun element trouvé</span>
                      </div>
                    </div>
                  </div>
                </div>
              
                <ModalActions tabsActions={[
                  {
                    icon: "pi-edit-3-line", 
                    type: "button", 
                    label:"Modifier", 
                    style:"is--primary", 
                    active: true,
                    onClick: () => {
                      setShowItemModal(false)
                      setEditModal(true)
                    }
                  },
                  {
                    icon: "pi-delete-2-line", 
                    type: "button", 
                    label:"Supprimer", 
                    style:"is--danger", 
                    active: true,
                    onClick: () => {
                      setShowItemModal(false)
                      setDeleteModal(true)
                    }
                  },
                ]}/>
              </Modal>
            ) : null}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
