import { userService } from '@/services/userService.js';

let localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

export default {
    state: {
        user: localLoggedinUser,
    },
    getters: {
        getUser(state) {
            return {...state.user}
        },
        getUserId(state) {
            return (state.user)? state.user._id: null
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user;
        }
    },
    actions: {
        async loadUsers(context, { dbName}) {
            const user = await userService.query(dbName)
            context.commit({ type: 'setUser', user })
            return user;
        },
        async addUser(context, { user }) {
            await userService.add(user)
            context.commit({ type: 'setUser', user })
            return user;
        },
        async removeUser( context , { _id }) {
            await userService.remove(_id)
            context.commit({ type: 'setUser', user: null });
        },
        async updateUser( context , { user }) {
            const updatedUser = await userService.save(user)
            context.commit({ type: 'setUser', user: updatedUser })
            return updatedUser;
        },
        async login( context ,userCreds) {
            const user = await userService.login(userCreds);
            console.log(user);
            context.commit({ type: 'setUser', user });
        },
        async signup( context ,userCreds) {
            const user = await userService.signup(userCreds);
            context.commit({ type: 'setUser', user:user });
        },
        async logout( context ) {
            await userService.logout();
            context.commit({ type: 'setUser', user: null });
        },
    },
    modules: {}
}