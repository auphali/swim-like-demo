export default {
  columns:[
    {dataIndex:'asset_name',title:'Asset Name',width:''},
    {dataIndex:'field_code',title:'Field Code',width:''},
    {dataIndex:'field_name',title:'Field Name',width:''}
  ],
  rowKey:'field_code',
  size:'small',
  rowSelection:{
    type:'radio'
  }
}