import Vue from "vue";
import Vuex from "vuex";
import urlModule from '../store/modules/url.module'
import userModule from '../store/modules/user.module'
Vue.use(Vuex);


export default new Vuex.Store({
state: {},
mutations:{},
actions:{},
modules:{
    urlModule,
    userModule
}
});