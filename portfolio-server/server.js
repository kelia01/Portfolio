import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'hello from the backend'})
})

app.post('/contact', async (req, res) => {
    const {name, email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'irakel320@gmail',
            pass: 'pjag vevt kqrd ovyb',
        },
    });
    
    const mailOptions = {
        from: gmail,
        to: 'irakel320@gmail',
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



