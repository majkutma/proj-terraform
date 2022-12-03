// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { App, TerraformStack } from 'cdktf'
import { AwsProvider } from '@cdktf/provider-aws/lib/provider'
import { getBranchName, getStackId } from './utils/param-utils'
import { STACK_ID_DEFAULT } from './constants/proj-info'
import { myBucket } from './components/s3-buckets'

const app = new App()

const stackId = getStackId() ?? STACK_ID_DEFAULT
const branchName = getBranchName()
// const region = app.node.tryGetContext('defaultRegion')
// const profile = app.node.tryGetContext('defaultProfile')
// const creds = app.node.tryGetContext('credentialsPath')

console.log('-----------------------------------------------------')
console.log(' On branch: ', branchName)
console.log(' Please review the stack name: ', stackId)
// console.log(' Region: ', region, ' Profile: ', profile)
console.log('-----------------------------------------------------')

class MyStack extends TerraformStack {
  constructor (scope: App, id: string) {
    super(scope, id)

    new AwsProvider(this, 'AWS', {
      sharedCredentialsFiles: ['/Users/fvg3843/.aws/credentials'],
      profile: 'private',
      region: 'us-east-1'
    })

    // Creating myBucket bucket
    myBucket(this)
  }
}

new MyStack(app, stackId)
app.synth()
