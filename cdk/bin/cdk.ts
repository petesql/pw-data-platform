#!/usr/bin/env node
import 'source-map-support/register';
import { App, Construct, Stack } from '@aws-cdk/core';
import { BaseInfraCDKStack, Ec2dbStack, S3Stack, iamStack } from '../lib/index';

interface EnvProps {
    prod: boolean;
  }

const stackProps = {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }
}

class IAMStack extends Stack {}

class myApp extends Construct {
    constructor(scope: Construct, id: string, props?: EnvProps) {
        super(scope, id);        
        const peerCidrIp: string = app.node.tryGetContext('peerIp');
        const keyName: string = app.node.tryGetContext('keyName');

        new BaseInfraCDKStack(app, 'BaseInfraCDKStack', { });
        new iamStack(app, 'iamStack', { });
        new Ec2dbStack(app, 'Ec2dbStack', peerCidrIp, keyName, stackProps);
        new S3Stack(app, 'S3Stack', stackProps);        
    }
}
const app = new App();

new myApp(app, "myapp", { prod: true });

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

