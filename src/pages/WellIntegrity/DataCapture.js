import React, { Fragment, Component } from 'react';
import {Tree,Row,Col,Card,Button,Select} from 'antd'
import AnnulusForm from '@/components/WellIntegrity/Forms'

const {TreeNode} = Tree

const TreeLinks = props => {
  return (
    <Tree
      defaultExpandedKeys={['env1','env2']}
    >
      <TreeNode title='Envelope 1' key='env1' icon='folder'>
        <TreeNode title='Annulus' key='annulus' icon='file' />
        <TreeNode title='Wellhead - Functional Test' key='wellhead-functional-test' icon='file' />
        <TreeNode title='Wellhead - Leak Test' key='wellhead-leak-test' icon='file' />
        <TreeNode title='Tubing hanger' key='tubing-hanger' icon='file' />
        <TreeNode title='Xmas Tree Functional Test' key='xmas-tree-functional-test' icon='file' />
        <TreeNode title='Xmas Tree Leak Test' key='xmas-tree-leak-test' icon='file' />
        <TreeNode title='Xmas Tree Full Body Test' key='xmas-tree-full-body-test' icon='file' />
        <TreeNode title='B Annulus Barrier' key='b-annulus-barrier' icon='file' />
      </TreeNode>
      <TreeNode title='Envelope 2' key='env2' icon='folder'>
        <TreeNode title='Tubing String' key='tubing-string' icon='file' />
        <TreeNode title='DHSV' key='dhsv' icon='file' />
        <TreeNode title='A Annulus Barrier' key='a-annulus-barrier' icon='file' />
      </TreeNode>
    </Tree>
  )
}

export default class DataCapture extends Component {
  state = {
    topic: 'annulus'
  }

  tree = {

  }

  render() {
    return (
      <Row>
        <Col span={8}>
          <Card>
            <TreeLinks />
          </Card>
        </Col>
        <Col span={16}>
          <Card
            title='Annulus'
            extra={<span><Select style={{width:100}} /> <Button>Create New</Button> <Button>Modify</Button> <Button>Delete</Button></span>}
          >
            <AnnulusForm />
          </Card>
        </Col>
      </Row>
    )
  }
}