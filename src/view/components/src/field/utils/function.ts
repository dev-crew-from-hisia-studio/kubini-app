export const validateValue = (value: any, field_type: string, require: boolean ) => {
    if(require){
        if(value){
            if(field_type === "email"){
                if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
                    return "Veuillez renseigner une adresse email valide"
                }
            }
            if(field_type === "username"){
                if(!/^[a-zA-Z0-9_]+$/.test(value)){
                    return "Veuillez renseigner un nom d'utilisateur valide"
                }
            }
            return ""
        }else{
            return "Veuillez renseigner ce champs"
        }
    }else{
        return ""
    }
}