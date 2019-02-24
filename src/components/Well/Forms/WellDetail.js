import React, { PureComponent } from 'react';
import {Form,Input,Select,Row,Col,Divider,InputNumber,DatePicker} from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const TextArea = Input.TextArea

const basicForm = props => {
  const {saveData,form} = props
  const {getFieldDecorator} = form
  const halfOrWhole = {md:24,lg:12}
  return (
    <Form layout='horizontal' action={saveData}>
      <Divider type='horizontal'>Well Type</Divider>
      <Row gutter={10}>
        <Col {...halfOrWhole}>
          <FormItem label='Well Name'>
            {
              getFieldDecorator('well',{required:true})(<Input />)
            }
          </FormItem>
        </Col>
        <Col {...halfOrWhole}>
          <FormItem label='Well Type'>
            {
              getFieldDecorator('well_type',{required:true})(
                <Select>
                  <Option value='gas'>Gas</Option>
                  <Option value='oil'>Oil</Option>
                </Select>
              )
            }
          </FormItem>
        </Col>
        <Col {...halfOrWhole}>
          <FormItem label='Well Shape'>
            {
              getFieldDecorator('well_shape',{required:true})(
                <Select>
                  <Option value='2d_deviated'>2D Deviated</Option>
                </Select>
              )
            }
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <FormItem label='Job Objectives'>
            {
              getFieldDecorator('well_job_objective',{required:false})(<TextArea />)
            }
          </FormItem>
        </Col>
      </Row>
      <Divider type='horizontal'>Location</Divider>
      <Row>
        <Col {...halfOrWhole}>
          <FormItem label='Platform'>
            {
              getFieldDecorator('platform',{required:true})(<Input />)
            }
          </FormItem>
        </Col>
        <Col {...halfOrWhole}>
          <FormItem label='drilling_rig'>
            {
              getFieldDecorator('drilling_rig',{required:true})(<Input />)
            }
          </FormItem>
        </Col>
        <Col {...halfOrWhole}>
          <FormItem label='Completion Rig'>
            {
              getFieldDecorator('completion_rig',{required:true})(<Input />)
            }
          </FormItem>
        </Col>
      </Row>
      <Divider type='horizontal'>Well Coordinates</Divider>
      <Row>
        <Col {...halfOrWhole}>
          <FormItem label='X (Easting)'>
            {
              getFieldDecorator('x',{required:true})(<InputNumber />)
            }
          </FormItem>
        </Col>
        <Col {...halfOrWhole}>
          <FormItem label='Y (Northing)'>
            {
              getFieldDecorator('y',{required:true})(<InputNumber />)
            }
          </FormItem>
        </Col>
        <Col {...halfOrWhole}>
          <FormItem label='Wellhead System'>
            {
              getFieldDecorator('wellhead_system',{required:true})(<Input />)
            }
          </FormItem>
        </Col>
        <Col {...halfOrWhole}>
          <FormItem label='Xmas Tree'>
            {
              getFieldDecorator('xmas_tree',{required:true})(<Input />)
            }
          </FormItem>
        </Col>
        <Col {...halfOrWhole}>
          <FormItem label='Pressure rating'>
            {
              getFieldDecorator('pressure_rating',{required:true})(<InputNumber />)
            }
          </FormItem>
        </Col>
        <Col {...halfOrWhole}>
          <FormItem label='Completion Type'>
            {
              getFieldDecorator('completion_type',{required:true})(
                <Select>
                  <Option value='stand-alone-screen'>Stand Alone Screen</Option>
                  <Option value='tubingless'>Tubingless</Option>
                  <Option value='gravel-pack'>Gravel Pack</Option>
                  <Option value='tubingless-gravel-pack'>Tubingless + Gravel Pack</Option>
                </Select>
              )
            }
          </FormItem>
        </Col>
      </Row>
    </Form>
  )
}

export default class WellForm extends PureComponent {
  constructor(props) {
    super(props)
    this.saveForm = this.saveForm.bind(this)
  }

  state = {
    formValues: null
  }

  saveForm() {
    const {dispatch} = this.props
  }

  render() {
    const ThisForm = Form.create({
      onValuesChange: (props,changed,all) => this.setState({formValues:all})
    })(basicForm)
    return <ThisForm />
  }
}