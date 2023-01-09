const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID = '891579264082-6r6b2fachmk37drvi6240dbckiovqgir.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04y2mbtaGZYQ3CgYIARAAGAQSNwF-L9Irlfudm_j7jTj11P4aaMOVFDmzGg3tGzBG2z_h6kYP5gtkycFOLO2fWZffiH9iCdOPOro'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

export const sendMail = async (emailId) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'prutuja189@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailoption = {
            from: 'Rutuja  <prutuja189@gmail.com>',
            to: emailId,
            subject: 'Reset Password',
            text: 'Reset Password',
            html: '<h1>To Reset Your Password <a href="http://localhost:1000/api/v1/users/resetpassword"> Click Here </a></h1><h1>'
        };

        const result = await transport.sendMail(mailoption)
 
        return result


    } catch (error) {
        return error
    }

}
//Function for send mail after user registration
export const userRegistrationMail = async (emailId) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'prutuja189@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailoption = {
            from: 'Rutuja Patil  <prutuja189@gmail.com>',
            to: emailId,
            subject: 'User registration',
            text: 'User registration done successfully',
            html: '<h1> WELCOME.....User registration done successfully <h1>'
        };

        const result = await transport.sendMail(mailoption);
        return result

    } catch (error) {
        return error
    }

}