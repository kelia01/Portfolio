import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/contact', async (req, res) => {
    const {name, email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure:true,
        auth:{
            user: process.env.user,
            pass: process.env.pass,
        },
         tls: { rejectUnauthorized: false }
    });
    
    const mailOptions = {
        from: process.env.user,
        to: process.env.user,
        subject: `Got new message: ${subject}`,
        text: `Name: ${name}\n email: ${email}\n message: ${message}`,
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "Message sent successfully!" });

    } catch(err){
        console.error(err);
        res.status(500).json({message: "Message not sent!" });
    }
});

app.listen('3000', () => console.log('server running 3000'))



