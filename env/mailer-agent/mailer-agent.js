// modules
const mailer = require('nodemailer');
const googleAPI = require('googleapis');

// OAuth
const {
  google: {
    auth: { OAuth2 },
  },
} = googleAPI;

let transporter;

const mailerInit = () => {
  const oAuth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oAuth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  });

  const accessToken = oAuth2Client.getAccessToken();

  transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.CONTACT_EMAIL,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  console.log('Mailer connected');
};

const getMailerTransporter = () => {
  return transporter;
};

module.exports = {
  mailerInit,
  getMailerTransporter,
};
