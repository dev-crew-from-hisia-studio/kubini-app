import { APP_NAME, APP_NAME_SHORT } from "./constant";
import strSlug from "slug"
import { randomIntFromInterval } from "./number";

export const capitalize = (word: string) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
}

export const titlePage = (title?: string) => {
    if(title){
        document.title = title + " | " + APP_NAME;
    }else {
        document.title =" Bienvenue sur "+APP_NAME_SHORT;
    }
}

export const truncate = (str: string | string[], maxlength: number) => {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

export  const slugifyFileName = (name: string) => {
    let tabs: string[] = name.split('.')
    let nom: string = tabs[0]
    let ext: string = name.split('.').pop() || ""
  
    if(nom && ext){
        return strSlug(nom) + "."+ext
    }else{
        return name
    }
}

export const generateUsername = (nom: string, prenom: string) => {
    return strSlug(nom + " " + prenom+" "+randomIntFromInterval(0,999)).toLowerCase()
}

export const createInitial = (name: string) => {
    const words = name.split(' ');
    let initial = '';

    for (let i = 0; i < words.length; i++) {
        initial += words[i][0];
    }
    return initial.slice(0,2).toUpperCase();
}


export function creerInitiales(texte: string) {
    let initiales = '';
    for (let i = 0; i < texte.length; i++) {
        if (texte[i] === texte[i].toUpperCase() && texte[i].match(/[A-Z]/)) {
            initiales += texte[i];
        }
    }
    return initiales;
}
