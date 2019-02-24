import React, { Fragment, Component } from 'react';
import {Row,Col,Card,Empty,Button,Modal} from 'antd'
import {connect} from 'dva'
import {WellHeader,WellHandovers} from '@/components/Well/Tables'
import WellStat from '@/components/Well/Statistics'
import WellForm from '@/components/Well/Forms/WellDetail'

const WellDetail = connect(({wellregister}) => {
  const {wellHeader,selectedWell} = wellregister
  const filtered = wellHeader.filter(({well}) => well===selectedWell)
  if(filtered.length>0) {
    return filtered[0]
  }
  return {}
})(WellStat)

@connect(({wellregister,loading}) => ({
    register: wellregister,
    loadingWellHeader: loading.effects['wellregister/fetchHeaders'],
    loadingHandover: loading.effects['wellregister/getHandOver']
}))
class WellRegister extends Component {
  constructor(props) {
    super(props)
    this.onTabChange = this.onTabChange.bind(this)
    this.showWellForm = this.showWellForm.bind(this)
  }

  state={
    modalVisible: false,
    detailTabKey:'well-detail'
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

  showWellForm() {
    this.setState({modalVisible:true})
  }

  render() {
    const {register,loadingWellHeader,loadingHandover,dispatch} = this.props
    const {modalVisible} = this.state
    const tabList = [{
      key:'well-detail',
      tab:'Details'
    },{
      key:'drilling-completion',
      tab:'Drilling & Completion'
    },{
      key:'handover',
      tab:'Handover Data'
    }]
    const {detailTabKey} = this.state
    return (
      <Fragment>
        <Row gutter={16}>
          <Col span={12}>
            <Card
              title='Well List'
              extra={<Button type='primary' icon='plus' onClick={this.showWellForm} />}
              bodyStyle={{padding:3}}
            >
              <WellHeader 
                data={register.wellHeader}
                loading={loadingWellHeader}
                selectedWell={[register.selectedWell]}
                onRowSelect={
                  well => {
                    console.log('after setting well locally')
                    dispatch({type:'wellregister/selectWell',payload:well[0]})
                  }
                }
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card 
              tabList={tabList}
              activeTabKey={detailTabKey}
              onTabChange={key => this.setState({detailTabKey:key})}
            >
              {
                detailTabKey==='well-detail' ? <WellDetail /> : null
              }
              {
                detailTabKey==='handover'? <WellHandovers
                  data={register.handOverRecords}
                  loading={loadingHandover}
                /> : null
              }
              {
                detailTabKey==='drilling-completion'? <Empty /> : null
              }
            </Card>
          </Col>
        </Row>
        <Modal
          title='Well Form'
          visible={modalVisible}
          centered
          onOk={(e) => {
            e.preventDefault()
            this.setState({modalVisible:false})
          }}
          onCancel={(e) => {
            e.preventDefault()
            this.setState({modalVisible:false})
          }}
        >
          <WellForm />
        </Modal>
      </Fragment>
    )
  }

}
export default WellRegister