import React, { PureComponent } from 'react';
import {connect} from 'dva'
import {Card} from 'antd'
import {AssetList as AssetTable} from '@/components/Well/Tables'

@connect(({wellregister, loading}) => ({
  data: wellregister.assets,
  loading: loading.effects['/wellregister/fetchAssets']
}))
class AssetList extends PureComponent {
  componentDidMount() {
    const {dispatch,data} = this.props
    if(data.length===0) {
      dispatch({type:'wellregister/fetchAssets'})
    }
  }

  render() {
    const {data,loading} = this.props
    return (
      <Card>
        <AssetTable
          data={data}
          loading={loading}
        />
      </Card>
    )
  }
}
export default AssetList