import React from 'react';
import Ellipsis from '@/components/Ellipsis'

export default {
  columns: [
    {dataIndex:'date',title:'Date',width:100},
    {dataIndex:'creator',title:'Created by',width:150},
    {dataIndex:'remarks',title:'Remarks',render:text => <Ellipsis length={100}>{text}</Ellipsis>}
  ],
  rowKey:'date',
  size:'small',
  rowSelection:{
    type:'radio'
  }
}