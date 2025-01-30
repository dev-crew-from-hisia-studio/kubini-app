import axios from "axios"

interface DataParams {
    url: string, 
    token?: string,
    content?: any
}

export const getProtecteItems =  async (data: DataParams ) => {
    let {url, token} = data
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(url, config)
    // console.log(response.data)
    return response.data
}
export const getUnProtecteItems =  async (data: DataParams) => {
    let {url} = data

    const response = await axios.get( url)
    return response.data
}
export const setProtecteItems =  async (data: DataParams) => {
    let {url, token, content} = data
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(  url, content, config)
    // console.log(response.data)
    return response.data
}
export const setUnProtecteItems =  async (data: DataParams) => {
    let {url, content} = data
    const response = await axios.post( url, content)
    return response.data
}
export const updateUnProtecteItems =  async (data: DataParams) => {
    let {url, content} = data
    const response = await axios.patch( url, content)
    return response.data
}
export const updateProtecteItems =  async (data: DataParams) => {
    let {url, token, content} = data
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.patch( url, content, config)
    // console.log(response)
    return response.data
}

export const updatePutUnProtecteItems =  async (data: DataParams) => {
    let {url, content} = data
    const response = await axios.put( url, content)
    return response.data
}

export const updatePutProtecteItems =  async (data: DataParams) => {
    let {url, token, content} = data
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.put( url, content, config)
    // console.log(response)
    return response.data
}

export const deleteProtecteItems =  async (data: DataParams) => {
    let {url, token} = data
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.delete( url, config)
    return response.data
}
export const deleteUnProtecteItems =  async (data: DataParams) => {
    let {url} = data
    const response = await axios.delete( url)
    return response.data
}

export const deleteMProtecteItems =  async (data: DataParams) => {
    let {url, content, token} = data
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: content
    }
    const response = await axios.delete( url, config)
    // console.log(response.data)
    return response.data
}

// .... You can add others api request functions or modify one if you want