import React, {Component } from 'react';
import Layout from '../../components/Layout';
import factory from '../../eth/factory';
import Workstream from '../../eth/workstream';
import web3 from '../../eth/web3';
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
      /***
      const accounts = await web3.eth.getAccounts();
      const daoOwner = await workstream.methods.getDaoOwner().call();
      console.log("bi dao ", daoOwner);
      const tokenAddr = await workstream.methods.daoToken().call();
      const daotoken = Daotoken(tokenAddr);
      const tx = daotoken.methods.approve(this.props.request.recipient,this.props.request.value).send({from:accounts[0], gas: 3000000000});
      const trfTx = daotoken.methods.transferFrom(address,this.props.request.value).send({from:accounts[0], gas: 3000000000});
**/
//      const ow = await worksteam.methods.getDaoOwner();
//      console.log("accounts  ", accounts, ow)
//      await workstream.methods.payRequest(this.props.request.id) //call payrequest
//        .send({from:accounts[0]});

          const accounts = await web3.eth.getAccounts();
          const wko = await workstream.methods.getWorkstreamOwner();
          await workstream.methods.payRequest(this.props.request.id)
            .send({from:accounts[0]});
    } catch(err) {
          this.setState({errorMessagePay: err.message});
      }
      this.setState({loadingPay:false});
      Router.pushRoute(`/workstreams/${this.props.address}/requests`)
  };
  render(){
    const {Row, Cell} = Table;
    return (
      <Row disabled={this.props.request.paid}>
        <Cell>{this.props.request.id}</Cell>
        <Cell>{this.props.request.description}</Cell>
        <Cell>{web3.utils.fromWei(this.props.request.value, 'ether')}</Cell>
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
