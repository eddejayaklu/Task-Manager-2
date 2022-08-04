const sgMail = require('@sendgrid/mail')
const sendGridApi = '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'

sgMail.setApiKey(sendGridApi)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
    to:'email',
    from:'vamsiedde@gmail.com',
    subject:'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know if you have any queries`
}).then((res)=>console.log("emailsent"))
.catch((err)=>console.log("email not sent"))
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
    to:'email',
    from:'vamsiedde@gmail.com',
    subject:'Sorry to see you go!!',
    text: `Good Bye!, ${name}. I hope to see you again`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

