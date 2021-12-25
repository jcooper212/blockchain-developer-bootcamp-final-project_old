import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Workstream from '../../eth/workstream'
import web3 from '../../eth/web3'
import { Card, Grid, Button } from 'semantic-ui-react';
import { Link } from '../../routes';

class WorkstreamShow extends Component {
  static async getInitialProps(props) {
    //console.log(props.query.address);
    const workstream = Workstream(props.query.address);
    const summary = await workstream.methods.getSummary().call();
    console.log(summary);
//    workstreamName, workstreamOwner, pendingRequestCount, requests.length, pendingBalance, totalBalance
    return{workstreamName: summary[0],
            workstreamOwner: summary[1],
            pendingRequestCount: summary[2],
            totalRequests: summary[3],
            pendingBalance: summary[4],
            totalBalance: summary[5],
            workstreamAddress: props.query.address
           };
  }
  renderCards() {
    console.log(workstreamName);
    const {
      workstreamName,
      workstreamOwner,
      pendingRequestCount,
      totalRequests,
      pendingBalance,
      totalBalance,
      workstreamAddress
    } = this.props;
    const items_name = [
      {
        header: workstreamName,
        meta:'Name',
//        description: 'Name of the worksteam',
        style: {overflowWrap: 'break-word'}
      },
      {
        meta: 'Owner',
        header: workstreamOwner,
//        description: 'Owner of the worksteam',
        style: {overflowWrap: 'break-word'}
      }];
    const items_balances = [
      {
        meta: 'Total Balance',
        header: totalBalance,
        description: 'Total Balance of payment requests',
        style: {overflowWrap: 'break-word'}
      },
      {
        meta: 'Outstanding Balance',
        header: pendingBalance,
        description: 'Outstanding Balance of payment requests',
        style: {overflowWrap: 'break-word'}
      }];
    const items_requests = [
      {
        meta: 'Total Request',
        header: totalRequests,
        description: 'Total number of payment requests',
        //description: totalBalance,
        style: {overflowWrap: 'break-word'}
      },
      {
        meta: 'Outstanding Request',
        header: pendingRequestCount,
        description: 'Outstanding number of approvals',
        style: {overflowWrap: 'break-word'}
      }
    ];
    return (
      <Grid>
        <Grid.Row>
        <Grid.Column width={10}>
          <Card.Group items={items_name}/>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column  width={10}>
          <Card.Group items={items_balances}/>
          <Card.Group items={items_requests}/>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column  width={10}>
        <Link route={`/workstreams/${workstreamAddress}/requests`}>
          <a>
            <Button primary>Payment Requests</Button>
          </a>
        </Link>
        </Grid.Column>
        </Grid.Row>
      </Grid>

    );
  }
  render() {
    const {
      workstreamName,
      workstreamOwner,
      pendingRequestCount,
      totalRequests,
      pendingBalance,
      totalBalance
    } = this.props;
    return (
      <Layout>
        <h3></h3>
        {this.renderCards()}
      </Layout>
    );
  }
}
export default WorkstreamShow;
