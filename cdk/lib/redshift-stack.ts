import { Construct } from "@aws-cdk/core";
import redshift = require('@aws-cdk/aws-redshift');
import { Vpc } from '@aws-cdk/aws-ec2';

export class redshiftCluster extends Construct {
    constructor(scope: Construct, id: string, vpc: Vpc, rsClusterName: string, masterUserName: string ) { 
        super(scope, id);
        
        const rsCluster = new redshift.Cluster(this, 'rscluster', {
            clusterName: rsClusterName,
            clusterType: redshift.ClusterType.SINGLE_NODE,
            nodeType: redshift.NodeType.DC2_LARGE,
            masterUser: { masterUsername: masterUserName },
            vpc,
        })
    }
}
