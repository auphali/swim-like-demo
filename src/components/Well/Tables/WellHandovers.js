import React, { PureComponent } from 'react';
import {Table} from 'antd'
import Ellipsis from '@/components/Ellipsis'

export default class WellHandovers extends PureComponent {
  columns=[
    {dataIndex:'date',title:'Date',width:100},
    {dataIndex:'creator',title:'Created by',width:150},
    {dataIndex:'remarks',title:'Remarks',render:text => <Ellipsis length={100}>{text}</Ellipsis>}
  ]

  render() {
    const {loading,data} = this.props
    return (
      <Table
        columns={this.columns}
        rowKey='date'
        size='small'
        rowSelection={null}
        loading={loading}
        dataSource={data}
        />
    )
  }
}