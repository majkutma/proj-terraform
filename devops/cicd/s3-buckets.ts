// import {
//   aws_s3 as s3,
//   Stack,
//   RemovalPolicy
// } from 'aws-cdk-lib'
// import { getResourceId } from '../utils/param-utils'

import { TerraformStack } from 'cdktf'
import { S3Bucket } from '@cdktf/provider-aws/lib/s3-bucket'

const bucketOptions = {
  // bucketName: getResourceId('my-bucket'),
  // removalPolicy: RemovalPolicy.DESTROY,
  // autoDeleteObjects: true,
  // versioned: true
  bucket: 's3-bucket-123321asdfasdfasdf',
  versioning: {
    enabled: true
  }
}

// /**
//  * Configuring myBucket bucket
//  */
// export const myBucket = (stack: Stack): s3.Bucket => {
//   return new s3.Bucket(stack, 'my-bucket', {
//     ...bucketOptions
//   })
// }
export const myBucket = (stack: TerraformStack): S3Bucket => {
  return new S3Bucket(stack, 'my-bucket', {
    ...bucketOptions
  })
}
