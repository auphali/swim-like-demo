import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import {Table} from 'antd'

export default class WellRequests extends PureComponent {
  columns=[
      {
          title:'Request',children:[
              {dataIndex:'req_creator',title:'Creator',width:100},
              {dataIndex:'req_date',title:'Date',width:100},
              {dataIndex:'req_type',title:'Request Type',width:100},
              {dataIndex:'req_stakes',title:'Stakes',width:100}
          ]
      },{
          title:'Program',children:[
              {dataIndex:'prog_creator',title:'Creator',width:100},
              {dataIndex:'prog_date',title:'Date',width:100},
              {dataIndex:'exec_date',title:'Execution',width:100},
              {title:'Report',render:text => {return null}}
          ]
      }
  ]

  render() {
    const {data} = this.props
    return <Table
      columns={this.columns}
      dataSource={data}
      rowSelection={{}}
    />
  }
}
WellRequests.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}
WellRequests.defaultProps = {
  data:[]
}