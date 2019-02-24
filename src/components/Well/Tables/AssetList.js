export default {
  columns:[
    {dataIndex:'asset_code',title:'Code',width:''},
    {dataIndex:'asset_name',title:'Name',width:''}
  ],
  rowKey:'asset_code',
  size:'small',
  rowSelection:{
    type:'radio'
  }
}