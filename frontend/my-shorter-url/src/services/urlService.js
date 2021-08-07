import httpService from './httpService';

export const urlService = {
    query,
    add,
    remove
}

async function query(dbName, userId){
    return await httpService.get(`url/${dbName}/?userId=${userId}`);
}

async function add(url, dbName){
    let res = await httpService.post(`url/${dbName}`, url)
    return res;
}

async function remove(dbName, id){
    return await httpService.delete(`url/${dbName}/${id}`, id);
}