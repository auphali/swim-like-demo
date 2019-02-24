import React, { PureComponent } from 'react';
import {connect} from 'dva'
import {Card} from 'antd'
import {FieldList as FieldTable} from '@/components/Well/Tables'

@connect(({wellregister, loading}) => ({
  data: wellregister.fields,
  loading: loading.effects['/wellregister/fetchFields']
}))
class FieldList extends PureComponent {
  componentDidMount() {
    const {dispatch,data} = this.props
    if(data.length===0) {
      dispatch({type:'wellregister/fetchFields'})
    }
  }

  render() {
    const {data,loading} = this.props
    return (
      <Card>
        <FieldTable
          data={data}
          loading={loading}
        />
      </Card>
    )
  }
}
export default FieldList