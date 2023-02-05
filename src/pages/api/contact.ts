// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {
  require('dotenv').config()

  console.info("Sending mail...");

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'loick.leprevost@gmail.com', // Change to your recipient
    from: process.env.EMAIL, // Change to your verified sender
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  }

  return sgMail
    .send(msg)
    .then(() => {
      console.info('Email sent')
      res.status(200).end();
    })
    .catch((error) => {

      console.error(error);
      if (error.response) {
        const { response } = error;

        // Extract response msg
        const { body } = response;

        console.error(body);
      }
      res.status(400).end();
    })
}