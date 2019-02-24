import {getFakeWellList,getFakeHandOvers,getFakeAssets,getFakeFields} from '@/services/api'

export default {
    namespace: 'wellregister',
    state: {
        assets:[],
        fields:[],
        wellHeader:[],
        selectedWell:null,
        handOverRecords:[]
    },
    effects:{
        *fetchAssets(_,{put}) {
            const response = yield getFakeAssets()
            yield put({type:'saveAssets',payload:response.data})
        },
        *fetchFields(_,{put}) {
            const response = yield getFakeFields()
            yield put({type:'saveFields',payload:response.data})
        },
        *fetchHeaders(_,{put}) {
            const response = yield getFakeWellList()
            yield put({type:'saveHeaders',payload: response.data})
        },
        *selectWell({payload},{put}) {
            yield put({type:'setWell',payload})
            yield put({type:'getHandOver',payload})
        },
        *getHandOver(_,{put}) {
            const response = yield getFakeHandOvers()
            yield put({
                type:'saveHandOver',
                payload: response.data
            })
        }
    },
    reducers:{
        saveAssets(state,{payload}) {
            return {
                ...state,
                assets:payload
            }
        },
        saveFields(state,{payload}) {
            return {
                ...state,
                fields:payload
            }
        },
        saveHeaders(state,{payload}) {
            return {
                ...state,
                wellHeader:payload
            }
        },
        setWell(state,{payload}) {
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