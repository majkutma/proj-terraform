// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider"
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket"

class MyStack extends TerraformStack {
  constructor(scope: App, id: string) {
    super(scope, id);

    new AwsProvider(this, 'AWS', {
      region: 'us-east-1'
    })

    new S3Bucket(this, "s3-bucket", {
    })
  }
}

const app = new App();
new MyStack(app, "cicd");
app.synth();
