#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { CdkStack } from '../lib/index';

const app = new App();
new CdkStack(app, 'CdkStack', { });
