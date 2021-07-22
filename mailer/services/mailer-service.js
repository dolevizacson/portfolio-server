// files
const mailer = require('../../env/mailer-agent/mailer-agent');

// errors
const MailNotSentError = require('../../env/errors/mail-not-sent-error');

module.exports = class MailerService {
  async sendMail(mail) {
    const mailerTransporter = mailer.getMailerTransporter();

    try {
      const response = await mailerTransporter.sendMail({
        ...mail,
        to: process.env.CONTACT_EMAIL,
      });
      if (response.rejected.length > 0) {
        throw new MailNotSentError('Mail rejected error');
      }
    } catch (error) {
      throw new MailNotSentError('SMTP server error');
    }
  }
};
