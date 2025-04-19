const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

// — create the SMTP transporter once at load time
const transporter = nodemailer.createTransport({
  host:   process.env.EMAIL_HOST,
  port:   Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify(err => {
  if (err)  console.error('✉️ SMTP verify failed:', err);
  else      console.log('✅ SMTP verified and ready to send');
});

exports.submitQuoteRequest = async (req, res) => {
  const { firstName, lastName, email, /*…*/ } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: 'First name, last name and email are required.' });
  }
  
  const reference = uuidv4();

  const mailOptions = {
    from:    `"Quote Request" <${process.env.EMAIL_USER}>`,
    to:      'mymiconseil@gmail.com',
    subject: `New Quote Request #${reference}`,
    text:    `
Quote Reference: ${reference}
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Origin City: ${originCity}
Destination City: ${destinationCity}
Origin Country: ${originCountry}
Destination Country: ${destinationCountry}
Total Weight: ${totalWeight}
Volume/Metric: ${volumeOrMetric}
Special Handling: ${specialHandling}
Hazardous: ${hazardous}
Additional Comments: ${additionalComments}
`,
  };


  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✉️  Email sent:', info.messageId);
    return res.status(200).json({ message: 'Quote sent', reference });
  } catch (error) {
    console.error('❌ sendMail error:', error);
    return res.status(500).json({ message: error.message });
  }
};
