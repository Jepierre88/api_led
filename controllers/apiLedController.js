import { Router } from "express";

// Define la función que manejará la ruta "api-led"
export const apiLed = (req, res) => {
  // Aquí puedes manejar la solicitud y respuesta
  console.log("Se ha recibido una solicitud en /api-led");

  // Enviar una respuesta JSON
  res.json({
    status: true,  // Puedes enviar cualquier dato que necesites
    message: "La solicitud fue procesada correctamente"
  });
  return res
};

