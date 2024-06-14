const nodemailer = require("nodemailer")


export async function POST(request) {
    const { fullname, email, subject, budget, brief } = await request.json()
    
    if (fullname && email && subject && budget && brief) {

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
              user : process.env.EMAIL_USERNAME,
              pass: process.env.EMAIL_PASSWORD,
            },
            secure: false,
            secureConnection: false,
            tls: { ciphers: "SSLv3" },
        })
        
        const output = `
            <div>
              <h2>Informations de contact</h2>
              <div>Nom complet: ${fullname}</div>
              <div>Email: ${email}</div>
              <br />
              <br />
              <h2>Sujet du contact</h2>
              <div>${subject}</div>
              <div>Budget: ${budget}</div>
              <br />
              <br />
              <h2>Brief</h2>
              <div>${brief}</div>
            </div>
        `

        const mailData = {
            from: process.env.EMAIL_USERNAME,
            to: process.env.EMAIL_USERNAME,
            subject: "Prise de contact 🎉🎊🥳",
            text: brief,
            html: output
        }

        try {
            await transporter.sendMail(mailData)
            return Response.json({ "message": "sent" })

        } catch (error) {
            console.log(error)
            return Response.json({ "message": "error" })
        }

    } else {
        return Response.json({ "message": "error" })
    }
}