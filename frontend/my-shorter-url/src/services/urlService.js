import httpService from './httpService';

export const urlService = {
    query,
    add
}

async function query(dbName, userId){
    return await httpService.get(`url/${dbName}/?userId=${userId}`);
}

async function add(url, dbName){
    let res = await httpService.post(`url/${dbName}`, url)
    return res;
}