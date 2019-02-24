
export default {
    namespace: 'wellwli',
    state: {
        field:null,
        fieldList:[],
        wellList:[],
        well:null,
        requests:[],
        activities:[],
        hse:[]
    },
    effects: {
        // *getFieldList(_,{call,put}) {
        //     const response
        //     yield put({type:'saveFieldList',payload: response})
        // },
        // *setField({payload},{call,put}) {
        //     yield put({type:'setField',payload})
        //     yield call({type:'getWellList',payload})
        // },
        // *getWellList({payload},{call,put}) {
        //     const response
        //     yield put({type:'saveWellList',payload:response})
        // },
        // *setWell({payload},{call,pu}) {
        //     yield put({type:'setWell',payload})
        //     yield call({type:'getRequests',payload})
        //     yield call({type:'getActivities',payload})
        //     yield call({type:'getHSE',payload})
        // },
        // *getRequests({payload},{call,put}) {
        //     const response
        //     yield put({type:'saveRequest',payload:response})
        // },
        // *getActivities({payload},{call,put}) {
        //     const response
        //     yield put({type:'saveActivities',payload:response})
        // },
        // *getHSE({payload},{call,put}) {
        //     const response
        //     yield put({type:'saveHSE',payload:response})
        // }
    },
    reducers:{
        // saveFieldList(state,{payload}) {
        //     return {...state,wellList:payload}
        // },
        // saveWellList(state,{payload}) {
        //     return {...state,wellList:payload}
        // },
        // setField(state,{payload}) {
        //     return {...state,field:payload}
        // },
        // setWell(state,{payload}) {
        //     return {...state,well:payload}
        // },
        // saveRequest(state,{payload}) {
        //     return {...state,requests:payload}
        // },
        // saveActivities(state,{payload}) {
        //     return {...state,activities:payload}
        // },
        // saveHSE(state,{payload}) {
        //     return {...state,hse:payload}
        // },
    }
}