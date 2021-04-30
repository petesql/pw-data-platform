import { Stack, StackProps, Construct } from '@aws-cdk/core';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

  }
}
