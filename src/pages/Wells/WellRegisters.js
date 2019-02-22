import React, { Component } from 'react';
import {Row,Col,Card,Empty} from 'antd'
import {connect} from 'dva'
import {WellHeader,WellHandovers} from '@/components/Well/Tables'


@connect(({wellregister,loading}) => ({
    register: wellregister,
    loadingWellHeader: loading.effects['wellregister/fetchHeaders'],
    loadingHandover: loading.effects['wellregister/getHandOver']
}))
class WellRegister extends Component {
  constructor(props) {
    super(props)
    this.onTabChange = this.onTabChange.bind(this)
  }

  state={
    detailTabKey:'drilling-completion'
  }

  componentDidMount() {
    const {register, dispatch} = this.props
    if(register.wellHeader.length===0) {
      dispatch({type:'wellregister/fetchHeaders'})
    }
  }

  onTabChange(key,type) {
    console.log(key,type)
    this.setState(null)
  }

  render() {
    const {register,loadingWellHeader,loadingHandover,dispatch} = this.props
    const tabList = [{
      key:'drilling-completion',
      tab:'Drilling & Completion'
    },{
      key:'handover',
      tab:'Handover Data'
    }]
    const {detailTabKey} = this.state
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Card title='Well List'>
            <WellHeader 
              data={register.wellHeader}
              loading={loadingWellHeader}
              selectedWell={[register.selectedWell]}
              selectWell={
                well => dispatch({type:'wellregister/selectWell',payload:well})
              }
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card 
            tabList={tabList}
            activeTabKey='drilling-completion'
            onTabChange={key => this.setState({detailTabKey:key})}
          >
            {
              detailTabKey==='drilling-completion'? <Empty /> :
              <WellHandovers
                data={register.handOverRecords}
                loading={loadingHandover}
              />
            }
          </Card>
        </Col>
      </Row>
    )
  }

}
export default WellRegister