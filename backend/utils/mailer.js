import nodemailer from "nodemailer"

const sendReferralEmail = async (referrerEmail, refereeEmail, message) => {

    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    console.log("GMAIL_PASS:", process.env.GMAIL_PASS);



    try {

        let testAccount = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
            // host: "smtp.ethereal.email",
            service: "gmail",
            port: 587,
            secure: false,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: refereeEmail,
            subject: 'Referral Message',
            text: `You've been referred by ${referrerEmail}. Message: ${message}`,
        };

        await transporter.sendMail(mailOptions).then(info => {
            console.log('Referral email sent successfully');
            console.log("info : ", nodemailer.getTestMessageUrl(info))
        }).catch(error => {
            console.log("failded to send mail : ", error);
        });
    } catch (error) {
        console.error('Error sending referral email:', error);
    }
};

export default sendReferralEmail;