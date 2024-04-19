import { v4 as uuidv4 } from "uuid";
import TicketModel from "../models/ticket.js";

const CREATE_TICKET = async (req, res) => {
  try {
    const ticket = new TicketModel({
      ticketId: uuidv4(),
      title: req.body.title,
      price: req.body.price,
      fromLocation: req.body.fromLocation,
      toLocation: req.body.toLocation,
      toLocationPhotoUrl: req.body.toLocationPhotoUrl,
    });

    const response = await ticket.save();

    return res
      .status(201)
      .json({ status: "Ticket was created", response: response });
  } catch (err) {
    console.log("handled error: ", err);
    return res.status(500).json({ message: "error happened" });
  }
};

const GET_ALL_TICKETS = async (req, res) => {
  try {
    const tickets = await TicketModel.find();

    return res.json({ tickets: tickets });
  } catch (err) {
    console.log("handled error: ", err);
    return res.status(500).json({ message: "error happened" });
  }
};

const GET_TICKET_BY_ID = async (req, res) => {
  try {
    const ticket = await TicketModel.findOne({ ticketId: req.params.ticketId });

    if (!ticket) {
      return res.status(404).json({
        message: `Ticket with id: ${req.params.ticketId} was not found`,
      });
    }

    return res.json({ ticket: ticket });
  } catch (err) {
    console.log("handled error: ", err);
    return res.status(500).json({ message: "error happened" });
  }
};

const DELETE_TICKET = async (req, res) => {
  try {
    const deletedTicket = await TicketModel.findOneAndDelete({
      ticketId: req.params.ticketId,
    });

    if (!deletedTicket) {
      return res.status(404).json({
        message: `Ticket with id: ${req.params.ticketId} was not found`,
      });
    }

    return res
      .status(200)
      .json({ message: `Ticket with id: ${req.params.ticketId} was deleted` });
  } catch (err) {
    console.log("handled error: ", err);
    return res.status(500).json({ message: "error happened" });
  }
};



export {
  CREATE_TICKET,
  GET_ALL_TICKETS,
  GET_TICKET_BY_ID,
  DELETE_TICKET
};
