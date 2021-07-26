import {urlService} from '@/services/urlService.js';


export default {
    state: {
        urls: null,
        urlFilter: null
    },
    // getters: {
    //     urlsToShow(state) {
    //         const filter = state.urlFilter
    //         const urls = state.urls
    //         if (!state.urlFilter) return urls;
    //         return urls?.filter((url) => url.dbName === urlFilter)
    //     }
    // },
    mutations: {
        setUrls(state, { urls }) {
            state.urls = urls;
        },
        addUrl(state, {url, dbName, currentDb}) {
            console.log('add-url', url, dbName, currentDb);
            if( dbName !== currentDb && dbName !=='all') return;
            state.urls.unshift(url)
        },
        removeUrl(state, { _id }) {
            const idx = state.urls.findIndex(url => url._id === _id)
            state.urls.splice(idx, 1)
        },
        updateUrl(state, { url }) {
            const idx = state.urls.findIndex(current => url._id === current.id)
            if (idx === -1) state.urls.unshift(url)
            else state.urls.splice(idx, 1, url)
        },
        setUrlFilter(state, { filterBy }) {
            state.urlFilter = filterBy
        }
    },
    actions: {
        async loadUrls(context, {dbName, id}) {
            const urls = await urlService.query(dbName, id)
            context.commit({ type: 'setUrls', urls })
            return urls;
        },
        async addUrl(context, {url, dbName, currentDb}) {
            const _url = await urlService.add(url, dbName)
            context.commit({type:'addUrl', url: _url, dbName, currentDb})
        },
        async removeUrl({ commit }, { _id }) {
            await urlService.remove(_id)
            commit({ type: 'removeUrl', _id })
        },
        async updateUrl({ commit }, { url }) {
            const updatedUrl = await urlService.save(url)
            commit({ type: 'updateUrl', url: updatedUrl })
            return updatedUrl;
        },
        // async getUrl(context, { id }) {
        //     return id ? await urlService.getById(id) : urlService.getEmptyUrl()
        // }
    },
    modules: {}
}