import * as core from "@aws-cdk/core";
import * as iam from "@aws-cdk/aws-iam";

export class iamUser extends core.Construct {
    constructor(scope: core.Construct, id: string, IAMUserName: string) {
        super(scope, id);

        const IAMUser = new iam.User(this, 'defaultIAMUser', {
            userName: IAMUserName
        })
    }
}