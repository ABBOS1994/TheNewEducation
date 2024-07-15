// sendMessage.js
import axios from "axios"
import moment from "moment"

export default async function handler(req, res) {
  const { name, phone, message } = req.body

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const text = `https://theneweducation.uz saytidan ariza:
Vaqti: ${moment().format("DD-MM-YYYY HH:mm").toString()},
Isim: ${name},
Raqam: ${phone},
Matin: ${message}`
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_ID}/sendMessage`,
      {
        text,
        chat_id: process.env.CHAT_ID,
      }
    )
    res.status(200).json({ message: "Success!", response: response.status })
  } catch (error) {
    console.error("Error sending Telegram message:", error)
    res.status(500).json({ message: error.message })
  }
}
