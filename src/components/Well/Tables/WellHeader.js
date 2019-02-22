import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import {Table} from 'antd'

export default class WellHeader extends PureComponent {
  columns = [
      {dataIndex:'field',title:'Field',width:100},
      {dataIndex:'well',title:'Well Name',width:150},
      {dataIndex:'spud_date',title:'Drilling Date',width:150},
      {dataIndex:'completion_type',title:'Completion Type',width:150}
  ]

  render() {
    const {loading,data,selectWell} = this.props
    return (
      <Table
        columns={this.columns}
        rowKey='well'
        size='small'
        rowSelection={{
            onChange(rowKey) {
                selectWell(rowKey)
            },
            type:'radio'
        }}
        loading={loading}
        dataSource={data}
    />)
  }
}

WellHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

WellHeader.defaultProps = {
  data:[]
}