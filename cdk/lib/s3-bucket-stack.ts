import * as core from "@aws-cdk/core";
import * as s3 from '@aws-cdk/aws-s3';

export class defaultS3Bucket extends core.Construct {
    constructor(scope: core.Construct, id: string, bucketName: string) {
        super(scope, id);

        new s3.Bucket(this, 'pvtBucketCnst', {
            bucketName: bucketName,
        })

    }
}