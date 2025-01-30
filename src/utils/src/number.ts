
export const formatNumber = (data: number) => {
    let number = data

    let result = number / 1000000000

    if(result >= 1){
        return Math.round(result*100)/100 + "Md"
    }
    result = number / 1000000
    if(result >= 1){
        return Math.round(result*100)/100 + "M"
    }
    result = number / 1000
    if(result >= 1){
        return result + "k"
    }
    return number
}

export const formatNumber2 = (data: number) => {
    let number = data

    let result = number / 1000000000
    if(result >= 1){
        return Math.round(result*100)/100 + "Md"
    }
    result = number / 1000000
    if(result >= 1){
        return Math.round(result*100)/100 + "M"
    }
    return number
}

export const fileSizeCalculate = (size: number) => {
    let sizeInBytes = size / 1000000
    if(sizeInBytes > 1){
        return Math.round(sizeInBytes) + "Mo"
    }else{
        return Math.round(sizeInBytes * 10) / 10 + "ko"
    }
}

export const randomIntFromInterval = (min: number, max: number) => { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
