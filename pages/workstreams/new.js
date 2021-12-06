import React, {Component } from 'react';
import Layout from '../../components/Layout';
import factory from '../../eth/factory';
import Daotoken from '../../eth/daotoken';
import Workstream from '../../eth/workstream';


import web3 from '../../eth/web3';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../routes';


class WorkstreamNew extends Component {
  state = {
    workstreamName: '',
    errorMessage: '',
    allowance: '',
    loading: false
  };
  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading: true, errorMessage:''});

    const accounts = await web3.eth.getAccounts();
    console.log("here are the accts " , accounts);

    const wkAddr = await factory.methods
    .createDaoWorkstream(this.state.workstreamName, this.state.workstreamOwner)
    .send({from: accounts[0]});


    Router.pushRoute('/');
//  } catch(err){

      this.setState({errorMessage: err.message});
//  }
  this.setState({loading: false});
  };

  render() {
    return (
    <Layout>
      <h3>New Workstream</h3>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
        <label>Workstream Name</label>
        <Input
        label="   "
        labelPosition="right"
        value = {this.state.workstreamName}
        onChange={event => this.setState({workstreamName: event.target.value})}
         />
        </Form.Field>
        <Form.Field>
        <label>Workstream Owner</label>
        <Input
        label="   "
        labelPosition="right"
        value = {this.state.workstreamOwner}
        onChange={event => this.setState({workstreamOwner: event.target.value})}
         />
        </Form.Field>
        <Form.Field>
        <label>Workstream Allowance</label>
        <Input
        label="DAOT"
        labelPosition="right"
        value = {this.state.allowance}
        onChange={event => this.setState({allowance: event.target.value})}
         />
        </Form.Field>

        <Message error header="Oops " content={this.state.errorMessage} />
        <Button loading={this.state.loading} primary>Create</Button>

      </Form>
    </Layout>
  );
  }
}

export default WorkstreamNew;
