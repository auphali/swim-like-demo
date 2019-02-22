import mockjs from 'mockjs';

export default {
    'GET /api/wells': (req,res) => {
        setTimeout(() => {
            res.send(mockjs.mock({
                    'data|10-20':[{
                        well:'@word(4)',
                        'field|1':['A','B','C'],
                        spud_date:'@date("yyyy-MM-dd")',
                        'completion_type|1':['Gravel Pack','Tubingless']
                    }]
            }))
        },1500)
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
    }
}