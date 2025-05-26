import { sendEmail } from '../models/contactoModel.js';

const sendContactEmail = async (req, res) => {
  console.log('Contact controller: Received request');
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);

  const { name, email, telefono, mensaje } = req.body;

  // Validación simple de campos requeridos
  if (!name || !email || !telefono || !mensaje) {
    console.error('Contact controller: Missing required fields', {
      name: !!name,
      email: !!email,
      telefono: !!telefono,
      mensaje: !!mensaje
    });
    return res.status(400).json({ error: 'Todos los campos son requeridos.' });
  }

  try {
    console.log('Contact controller: Attempting to send email');
    // Llama al modelo para enviar el correo
    let info = await sendEmail({ name, email, telefono, mensaje });
    console.log('Contact controller: Email sent successfully', {
      messageId: info.messageId,
      response: info.response
    });
    res.status(200).json({ success: true, message: 'Mensaje enviado correctamente.' });
  } catch (error) {
    console.error('Contact controller: Error sending email', {
      error: error.message,
      stack: error.stack,
      code: error.code,
      command: error.command
    });
    res.status(500).json({ success: false, error: 'Error al enviar el mensaje.' });
  }
};

export default { sendContactEmail };