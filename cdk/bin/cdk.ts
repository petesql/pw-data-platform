#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { CdkStack, Ec2dbStack } from '../lib/index';

const app = new App();
const peerCidrIp: string = app.node.tryGetContext('peerIp');
const keyName: string = app.node.tryGetContext('keyName');

/* if (peerCidrIp == null) {
    console.log('"peerIp" context key missing, using hard-coded cidr...')
    peerCidrIp = '10.10.10.0/24'
    console.log('"peerIp" has been set to ' + peerCidrIp);
} else {
    console.log('Default "peerIp" is set to ' + peerCidrIp);
}

if (keyName == null) {
    console.log('"keyName" context key missing, using hard-coded keyname...');
    keyName = 'pw_key_pair'
    console.log('"keyName" has been set to ' + keyName);
    // can also use aws ec2-instance-connect send-ssh-public-key to provide SSH public key
} else {
    console.log('Default "keyName" is set to ' + keyName);
}*/

const stackProps = {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }
}

new CdkStack(app, 'CdkStack', { });
new Ec2dbStack(app, 'ec2Stack', peerCidrIp, keyName, stackProps);