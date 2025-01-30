import {differenceInCalendarYears, endOfWeek, format, parseISO, startOfWeek, subDays, subWeeks, subYears} from "date-fns";
import { fr } from "date-fns/locale";

export const formatMyDate = (mdate: any) => {
    let now = Date.now()
    let day = new Date(mdate)
    // @ts-ignore
    var dif = now - day
    let jour = dif / (1000 * 3600 * 24)

    if(jour > 1){
        return "il y a " + Math.round(jour) + "jrs"
    }else{
        if(jour === 1){
            return "hier"
        }else{
            let heure = dif / (1000 * 3600)
            if(heure > 1){
                return "il y a " + Math.round(heure) + "h"
            }else{
                let min = dif / (1000 * 60)
                if(min > 1){
                    return "il y a " + Math.round(min)+ "min"
                }else{
                    let second = dif / 1000
                    if(second > 1){
                        return "il y a " + Math.round(second)+"s"
                    }else{
                        return "maintenant"
                    }
                }
            }
        }
    }
}

export const quelDateCest = (type: string, nombre: number) => {
    let today: any = new Date()
    let newDate: any

    switch (type){
        case "jours":
            newDate = subDays(today, nombre)
            return format(new Date(newDate), "yyyy-MM-dd")

        case "semaines":
            newDate = subWeeks(today, nombre)
            return format(new Date(newDate), "yyyy-MM-dd")

        case "annees":
            newDate = subYears(today, nombre)
            return format(newDate, "yyyy-MM-dd")

        default:
            return format(new Date(), "yyyy-MM-dd")
    }
}

export const calculateAge = (birthday: any) => {
    return differenceInCalendarYears(new Date(), new Date(birthday))
}


export const fetchAgenda = (items: any[]) => {
    let tabs: any[] = []
    items.forEach((item) => {
        tabs = [...tabs, {
            type: item.type,
            user: item.user,
            title: `${item?.title}`,
            start: parseISO(`${item.date?.split("T")[0]}T${item.horaire?.debut}:00`),
            item: item,
            end: item.horaire?.fin ? parseISO(`${item.date?.split("T")[0]}T${item.horaire?.fin}:00`) : parseISO(`${item.date?.split("T")[0]}T23:59:59`)
        }]
    })
    return tabs
}


export const periodeDate = (date: Date) => {

    const startOfWeekDate = startOfWeek(date, { weekStartsOn: 1 }); 
    const endOfWeekDate = endOfWeek(date, { weekStartsOn: 1 });

    const formattedStart = format(startOfWeekDate, 'dd', { locale: fr }); 
    const formattedEnd = format(endOfWeekDate, 'dd', { locale: fr }); 
    const formattedMonth = format(startOfWeekDate, 'MMMM yyyy', { locale: fr }); 

   
    return `${formattedStart}-${formattedEnd} ${formattedMonth}`;
}