import React from 'react'
import {Button} from 'antd'

export default {
  columns: [
    {
      title:'Request',children:[
        {dataIndex:'req_id',title:'Request ID',width:100},
        {dataIndex:'req_creator',title:'Creator',width:100},
        {dataIndex:'main_job',title:'Job',width:100},
        {dataIndex:'req_originator',title:'Originator',width:100},
        {dataIndex:'req_stakes',title:'Stakes',width:100}
      ]
    },{
      title:'Request',children:[
        {dataIndex:'req_status',title:'Status',width:100},
        {dataIndex:'prog_creator',title:'Creator',width:100},
        {dataIndex:'req_submit_date',title:'Submission Date',width:100},
        {dataIndex:'originator_visa',title:'Originator Visa',width:100},
        {dataIndex:'costing_date',title:'Costing Date',width:100},
        {dataIndex:'comment_date',title:'Comment Date',width:100},
        {dataIndex:'comment_visa',title:'Comment Visa',width:100}
      ]
    },{
      title:'Program',children:[
        {dataIndex:'prog_id',title:'ID',width:100},
        {dataIndex:'prog_status',title:'Status',width:100},
        {dataIndex:'prog_submit_date',title:'Submission Date',width:100},
        {dataIndex:'prog_asset_visa',title:'Asset Visa',width:100},
        {dataIndex:'prog_area_visa',title:'Area Visa',width:100}
      ]
    },{
      title:'Activity',children:[
        {dataIndex:'activity_start',title:'Start Date',width:100},
        {dataIndex:'activity_end',title:'End Date',width:100},
        {title:'Daily Report',render: () => <Button type='primary'>Show Daily Report</Button>}
      ]
    }
  ],
  rowSelection:{
    type:'radio'
  },
  rowKey:'req_id',
  size:'small'
}