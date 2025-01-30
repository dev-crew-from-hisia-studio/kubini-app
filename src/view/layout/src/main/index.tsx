import React, { FC, useContext} from 'react'
import { MenuLayoutParams } from '../type/menu'
import { ThemeContext } from '../../../../context/ThemeContext';
import { DefaultLayout, ThemeLayout } from './module';
import { titlePage } from '../../../../utils';
import { Button, Grid } from '../../../components';

export const MainLayout: FC<MenuLayoutParams> = ({title, here, isMin = false, children}) => {
  
  titlePage(title)
  
  const {
    theme,
    colorPalette,
    defaultDark,
    defaultTheme,
    alreadyChoice,
    displayType,
    switchTheme,
    switchAlreadyType,
    swichtDefautTheme,
    switchPaletteColor,
    switchDisplayType
  } = useContext(ThemeContext);


  const continueWithDefaultTheme = () => {
    switchPaletteColor("default")
    switchDisplayType("default")
    swichtDefautTheme()
    switchAlreadyType()
  }
 
  return (
    <>
      {
        displayType === "default" ? (
          <DefaultLayout isMin={isMin} here={here}>
            {children}
          </DefaultLayout>
        ) : (
          <ThemeLayout here={here}>
            {children}
          </ThemeLayout>
        )
      }
      {
        (alreadyChoice === "no") ? (
          <div className='kui-popup'>
            <div className='kui-popup-box'>
              <div className='kui-popup-close_btn'>
                <button type='button' onClick={() => {switchAlreadyType()}}>
                  <i className="pi-close-line"></i>
                </button>
              </div>
              <div className='kui-popup-box__container'>
                <div className='kui-popup-box__header'>
                  <h2>Configuration de l'interface</h2>
                </div>

                <Grid direction={'fd-column'} spacing={'jc-start'} align={'start'} wrap={false} gap={0.5}>
                  <div className='kui-page-custom__option'>
                    <div className='kui-page-form__header kui-page-form-header'>
                      <strong>Affichage</strong>
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
                      <strong>Schema de couleurs</strong>
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
                      </Grid>
                    </div>
                  </div>

                  <div className='kui-page-custom__option'>

                    <div className='kui-page-form__header kui-page-form-header'>
                      <strong>Thème:  {defaultTheme === "default" ? "Par defaut" : (theme === "dark" ? "Sombre" : "Clair")}</strong>
                    </div>
                    <div className={"kui-page-custom__theme kui-page-custom-theme"}>
                      <button type={"button"} className={`kui-page-custom-theme-switch ${defaultTheme === "default" ? (defaultDark ? "is--active" : "") : (theme === "dark" ? "is--active" : "")}`} onClick={switchTheme}>
                        <div className={`kui-page-custom-theme-switch__content ${defaultTheme === "default" ? (defaultDark ? "is--active" : "") : (theme === "dark" ? "is--active" : "")}`}></div>
                        </button>
                        <Button label={'Retablir le thème par défaut'} btype='button' onClick={swichtDefautTheme}/>
                    </div>
                  </div>
                </Grid>
                

                <p>Vous pourriez modifier vos choix dans les paramètres</p>
                <div className='kui-popup-box__actions'>
                  <button type={"button"} className={`kui-popup-box-action is--primary`} onClick={() => {
                    switchAlreadyType()
                  }}>
                    <i className={"pi-palette-line"}></i>
                    <span>{"Enregistrer"}</span>
                  </button>
                  <button type={"button"} className={`kui-popup-box-action is--neutral`} onClick={() => {continueWithDefaultTheme()}}>
                    <span>{"Converver les parametres par defaut"}</span>
                    <i className={"pi-arrow-right-line"}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  )
}
