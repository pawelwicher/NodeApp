exports.send = send;

const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
  host: 'smtp.poczta.onet.pl',
  auth: {
    user: 'wichu1@op.pl',
    pass: 'xxxxxx'
  }
});

async function send() {
  await mailTransport.sendMail({
    from: 'wichu1@op.pl',
    to: 'pawel.wicher@op.pl',
    subject: 'test',
    text: 'hello world'
  });
  return 'email sent';
}
