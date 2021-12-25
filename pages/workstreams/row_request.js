import React, {Component } from 'react';
import Layout from '../../components/Layout';
import factory from '../../eth/factory';
import Workstream from '../../eth/workstream';
import web3 from '../../eth/web3';
import Daotoken from '../../eth/daotoken.js'
import { Form, Button, Input, Table, Message } from 'semantic-ui-react';
import { Link, Router } from '../../routes';


class RequestRow extends Component {
  state = {
    loadingPay: false,
    errorMessagePay: '',
    loadingApprove: false,
    errorMessageApprove: ''
  }

  onApprove = async () => {
    event.preventDefault();
    console.log('onapprove');
    const workstream = Workstream(this.props.address);
    this.setState({loadingApprove: true, errorMessageApprove: ''})
    try {
      const accounts = await web3.eth.getAccounts();
      const wko = await workstream.methods.getWorkstreamOwner();
      await workstream.methods.approveRequest(this.props.request.id)
        .send({from:accounts[0]});
        console.log("approve ", this.props.address, "acct ", accounts[0]);
    } catch(err) {
          this.setState({errorMessageApprove: err.message});
      }
      this.setState({loadingApprove:false});
      Router.pushRoute(`/workstreams/${this.props.address}/requests`)

  };

  onPay = async () => {
    event.preventDefault();
    console.log('onpay');
    const workstream = Workstream(this.props.address);
    this.setState({loadingPay: true, errorMessagePay: ''})
    try {
          //const wko = await workstream.methods.getWorkstreamOwner().call();
          const accounts = await web3.eth.getAccounts();
          const tokenAddr = await workstream.methods.daoToken().call();
          const res = await factory.methods.getDaoTokenOwnerBalance().call();
          const dtokenAddr = res[0];
          const factoryAddr = res[1];
          const daoBal = res[2];
          const daotoken = Daotoken(tokenAddr);
          const approveRes = await daotoken.methods.approve(factoryAddr, daoBal).send({from: accounts[0]});
          await factory.methods.payContributor(this.props.request.recipient, this.props.request.value).send({from: accounts[0]});
          var paidBool = workstream.methods.payRequest(this.props.request.id).send({from: accounts[0]});
          //if (paidBool.toString() == "true"){
        //    await factory.methods.payContributor(this.props.request.recipient, this.props.request.value).send({from: accounts[0]});
        //  }
        //  else {
        //    this.setState({errorMessagePay: err.message});
        //  }
          //await factory.methods.payContributorRequest(this.props,address, this.props.request.id).send({from: accounts[0]});
    } catch(err) {
          this.setState({errorMessagePay: err.message});
      }
      this.setState({loadingPay:false});
      Router.pushRoute(`/workstreams/${this.props.address}`)
  };
  render(){
    const {Row, Cell} = Table;
    return (
      <Row disabled={this.props.request.paid}>
        <Cell>{this.props.request.id}</Cell>
        <Cell>{this.props.request.description}</Cell>
        <Cell>{this.props.request.value}</Cell>
        <Cell>{this.props.request.recipient}</Cell>
        <Cell>{String(this.props.request.approved)}</Cell>
        <Cell>
          {this.props.request.approved ? false : (
          <Button basic color="red" loading={this.state.loadingApprove} onClick={this.onApprove}>
            Approve
          </Button>
        )}
        </Cell>
        <Cell>
          {this.props.request.paid ? false : (
          <Button basic color="green" loading={this.state.loadingPay} onClick={this.onPay}> Pay </Button>
        )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
