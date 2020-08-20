export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_lNsMZxJUoxkGaQ3JITSeuoQm",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-uploads-conslack"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://6tu08fpgo0.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_5sEE2gKD4",
    APP_CLIENT_ID: "1r3q9kmojmo8oue7au0b9rpbfb",
    IDENTITY_POOL_ID: "us-west-2:b4986c30-9417-4bd4-81da-4c64d8054024"
  }
};