import { Stack, StackProps, Construct } from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import { Ec2dbInstance } from './ec2-db-instance-stack';
import { defaultS3Bucket } from './s3-bucket-stack';

export class BaseInfraCDKStack extends Stack {
    createVpc(scope: Construct) {
        return new ec2.Vpc(scope, 'VPC', {
            cidr: '10.0.0.0/24',
            natGateways: 0,
            subnetConfiguration: [
                {
                    subnetType: ec2.SubnetType.PUBLIC,
                    name: 'Public',
                    cidrMask: 28
                },
                {
                    subnetType: ec2.SubnetType.ISOLATED,
                    name: 'Private',
                    cidrMask: 28
                }
            ]
        });
    }
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);    
  }
}

export class Ec2dbStack extends BaseInfraCDKStack {
  constructor(scope: Construct, id: string, peerCidrIp: string, keyName: string, props?: StackProps) {
      super(scope, id, props);
      new Ec2dbInstance(this, 'ec2dbInstances',
        this.createVpc(this),
        peerCidrIp,
        this.availabilityZones[0],
        keyName);
  }
}

export class S3Stack extends BaseInfraCDKStack {
  constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);

      new defaultS3Bucket(this, 'bucketNamePete', 'bucketnameactualpete')

  }
}