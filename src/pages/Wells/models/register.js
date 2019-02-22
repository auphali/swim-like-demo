import {getFakeWellList,getFakeHandOvers} from '@/services/api'
export default {
    namespace: 'wellregister',
    state: {
        wellHeader:[],
        selectedWell:null,
        handOverRecords:[]
    },
    effects:{
        *fetchHeaders(_,{call,put}) {
            const response = yield getFakeWellList()
            console.log(response)
            yield put({type:'saveHeaders',payload: response.data})
        },
        *selectWell({payload},{call,put}) {
            yield put({type:'setWell',payload})
            yield put({type:'getHandOver',payload})
        },
        *getHandOver({payload},{call,put}) {
            const response = yield getFakeHandOvers()
            yield put({
                type:'saveHandOver',
                payload: response.data
            })
        }
    },
    reducers:{
        saveHeaders(state,{type,payload}) {
            return {
                ...state,
                wellHeader:payload
            }
        },
        setWell(state,{type,payload}) {
            return {
                ...state,
                selectedWell: payload
            }
        },
        saveHandOver(state,{payload}) {
            return {
                ...state,
                handOverRecords: payload
            }
        }
    }
}