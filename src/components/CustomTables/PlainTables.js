import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import {Table} from 'antd'

export default tableProps => {
  const {columns,rowSelection,size,rowKey} = tableProps
  class PlainTable extends PureComponent {
    constructor(props) {
      super(props)
      this.getRowSelection = this.getRowSelection.bind(this)
    }

    state = {
      selectedRows: []
    }

    getRowSelection(keys) {
      const {onRowSelect} = this.props
      return {
        selectedRowKeys: keys,
        onChange: selectedKeys => this.setState({
          selectedRows:selectedKeys
        },() => {
          if(onRowSelect) onRowSelect(selectedKeys)
        }),
        ...rowSelection
      }
    }

    render() {
      const {selectedRows,loading} = this.state
      const {data} = this.props
      return (
        <Table
          rowKey={rowKey}
          size={size}
          columns={columns}
          dataSource={data}
          loading={loading}
          rowSelection={this.getRowSelection(selectedRows)}
        />
      )
    }
  }
  PlainTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
  }
  PlainTable.defaultProps = {
    data: []
  }
  return PlainTable
}