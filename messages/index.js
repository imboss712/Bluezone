const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;
const notifyServiceSid = process.env.TWILIO_NOTIFY_SERVICE_SID;

const twilioSmsPhoneNumber = process.env.TWILIO_SMS_PHONE_NUMBER;

const Twilio = require('twilio');

const client = new Twilio(accountSid, authToken);

// Send verification code to user's mobile number
const sendVerificationCode = (phone) => {
  client.verify
    .services(verifyServiceSid)
    .verifications.create({ to: `+91${phone}`, channel: 'sms' })
    .then((verification) =>
      console.log('Verification code sent!, Status: ', verification.status)
    );
};

// Send verification success message
const sendVerificationSuccessMsg = (phone, name) => {
  client.messages
    .create({
      body: `Hello ${name}, You have successfully logged in to Bluezone. After that you join a tournament, beat the competition and celebrate your victory.`,
      from: twilioSmsPhoneNumber,
      to: `+91${phone}`
    })
    .then((message) => console.log(message.sid));
};

// Send match joining information to user's mobile number
const sendMatchJoinMsg = (phone, name, date, time) => {
  client.messages
    .create({
      body: `Hello ${name}, You have joined a tournament. Get ready 10-15 minutes before to play the tournament on ${date} at ${time}.`,
      from: twilioSmsPhoneNumber,
      to: `+91${phone}`
    })
    .then((message) => console.log(message.sid));
};

// Send match id password to user's mobile number
const sendMatchIdPwd = (phones, id, pwd) => {
  const service = client.notify.services(notifyServiceSid);

  const bindings = phones.map((phone) =>
    JSON.stringify({ binding_type: 'sms', address: `+91${phone}` })
  );

  const body = `Hello player, Join the tournament as soon as possible. Your Room ID: ${id} & Password: ${pwd}. The tournament will start within 5 minutes. Do not share Room ID and Password with anyone.`;

  service.notifications
    .create({
      toBinding: bindings,
      body: body
    })
    .then((notification) => {
      console.log(notification);
    })
    .catch((err) => {
      console.error(err);
    })
    .done();
};

// Send match result to user's mobile number
const sendMatchResult = (phone, name, kill, position, winning) => {
  client.messages
    .create({
      body: `Hello ${name}, the tournament is over. you score
      ${position} position and ${kill} kill(s) and your winning amount is Rs. ${winning} has been credited to your wallet.`,
      from: twilioSmsPhoneNumber,
      to: `+91${phone}`
    })
    .then((message) => console.log(message.sid));
};

// Send user account deletion message to user's mobile number
const sendDeleteUserMsg = (phone, name) => {
  client.messages
    .create({
      body: `Hello ${name}, sorry to see you go. Thank you for using our services. We hope to see you soon again.`,
      from: twilioSmsPhoneNumber,
      to: `+91${phone}`
    })
    .then((message) => console.log(message.sid));
};

module.exports = {
  sendVerificationCode,
  sendVerificationSuccessMsg,
  sendMatchJoinMsg,
  sendMatchIdPwd,
  sendMatchResult,
  sendDeleteUserMsg
};
