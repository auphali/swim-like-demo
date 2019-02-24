export default {
  columns:[
    {dataIndex:'field',title:'Field',width:100},
    {dataIndex:'well',title:'Well Name',width:150},
    {dataIndex:'spud_date',title:'Drilling Date',width:150},
    {dataIndex:'completion_type',title:'Completion Type',width:150}
  ],
  rowKey:'well',
  size:'small',
  rowSelection:{
    type:'radio'
  }
}