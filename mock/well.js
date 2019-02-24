import mockjs from 'mockjs';


let mockAssets = mockjs.mock({
    'data|5-10':[{
        asset_code:'@word(4)',
        asset_name:'@last()'
    }]
})

let mockFields = mockjs.mock({
    'data|5-10':[{
        'asset_name|1':mockAssets.data.map(asset => asset.asset_name),
        'field_name':'@first()',
        'field_code':'@word(4)'
    }]
})


let mockWells = mockjs.mock({
    'data|10-20':[{
        well:'@word(4)',
        'field|1':mockFields.data.map(field => field.field_name),
        spud_date:'@date("yyyy-MM-dd")',
        'completion_type|1':['Gravel Pack','Tubingless'],
        'x':'@zip',
        'y':'@zip',
        'location':'@region'
    }]
})

export default {
    'GET /api/wells': (req,res) => {
        setTimeout(() => {
            res.send(mockWells)
        },1500)
    },
    'POST /api/wells': (req,res) => {
        const {data} = mockWells
        mockWells.data = [...data,req.body]
        res.sendStatus(200)
    },
    'GET /api/wells/handovers': (req,res) => {
        setTimeout(()=> {
            res.send(mockjs.mock({
                'data|1-10':[{
                    date:'@date("yyyy-MM-dd")',
                    creator:'@last() @first()',
                    remarks:'@paragraph()'
                }]
            }))
        })
    },
    'GET /api/assets': (req,res) => {
        setTimeout(() => {
            res.send(mockAssets)
        })
    },
    'POST /api/assets': (req,res) => {
        const {data} = mockAssets
        mockAssets.data = [...data,req.body]
        res.sendStatus(200)
    },
    'GET /api/fields': (req,res) => {
        setTimeout(() => {
            res.send(mockFields)
        })
    },
    'POST /api/fields': (req,res) => {
        const {data} = mockFields
        mockFields.data = [...data,req.body]
        res.sendStatus(200)
    }
}