import React from 'react'
import { links } from '../../../../routes'
import { SubmenuMenu } from '../../../../layout'

export const SettingSubmenu = ({here}:{here?: any}) => {
    const settings_submeu = [
        {
            icon: "pi-box-2-line",
            path: links.categories,
            label: "Catégories",
            here: "categories",
        },
    ]

    return (
        <SubmenuMenu here={here} title={'Paramètres'} tabs={settings_submeu}/>
    )
}
