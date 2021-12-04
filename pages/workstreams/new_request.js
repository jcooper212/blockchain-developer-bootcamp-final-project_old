import React, {Component } from 'react';
import Layout from '../../components/Layout';
import factory from '../../eth/factory';
import Workstream from '../../eth/workstream';
import web3 from '../../eth/web3';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../routes';


class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: ''
  };
  static async getInitialProps(props){
    const { address } = props.query;
    return {address};
  }
  onSubmit = async event => {
    event.preventDefault();
    const workstream = Workstream(this.props.address);
    const {description, value, recipient} = this.state;
    this.setState({loading: true, errorMessage: ''})
    try {
      const accounts = await web3.eth.getAccounts();
      await workstream.methods.createRequest(description,
        web3.utils.toWei(value,'ether'),
        recipient)
        .send({from:accounts[0]});
      Router.pushRoute(`/workstreams/${this.props.address}/requests`)
    } catch(err) {
        this.setState({errorMessage: err.message});
    }
    this.setState({loading:false});
  }
  render(){
    return (
      <Layout>
      <Link route={`/workstreams/${this.props.address}/requests`}>
      <a> Back </a>
      </Link>
      <h3>Enter a payment request</h3>
      <h3></h3>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Payment Description</label>
          <Input
            value={this.state.description}
            onChange={event => this.setState({description :event.target.value})}
          />
        </Form.Field>
        <Form.Field>
        <label>Value in DAOT</label>
        <Input
          value={this.state.value}
          onChange={event => this.setState({value :event.target.value})}
        />
        </Form.Field>
        <Form.Field>
        <label>Recipient Address</label>
        <Input
          value={this.state.recipient}
          onChange={event => this.setState({recipient :event.target.value})}
        />
        </Form.Field>
        <Message error header="Ooops" content = {this.state.errorMessage} />
        <Button primary loading={this.state.loading}> New Payment Request </Button>
      </Form>
      </Layout>
    );
  }
}

export default RequestNew;
