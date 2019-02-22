import React, { Component } from 'react';
import {connect} from 'dva';
import {Row,Col,Tabs} from 'antd';

const {TabPane} = Tabs

@connect(({loading,wellwli}) => {
  const {fieldList,wellList,field,well,requests} = wellwli
  return ({
    fieldList,wellList,field,well,requests
  })
})
class WellIntervention extends Component {
  state = {
    selectedTab: null
  }

  render() {
    const {selectedTab} = this.state
    return (
      <Tabs
        onChange={key => this.setState({selectedTab:key})}
        activeKey={selectedTab}
      >
        <TabPane key='requests' tab='Intervention Request'>
          This is the request table
        </TabPane>
        <TabPane key='data-entry' tab='Activities'>
          This is the report table
        </TabPane>
        <TabPane key='hsse' tab='HSEE'>
          This is the hsse
        </TabPane>
      </Tabs>
    )
  }
}

export default WellIntervention