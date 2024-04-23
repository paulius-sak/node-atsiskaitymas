import express from "express";
import {CREATE_TICKET, GET_ALL_TICKETS, GET_TICKET_BY_ID, DELETE_TICKET_BY_ID} from "../controllers/ticket.js"
import auth from "../middleware/auth.js"
import validation from "../middleware/validation.js"
import ticketSchema from "../validationSchema/ticket.js"

const router = express.Router();

router.post("/tickets", validation(ticketSchema), auth, CREATE_TICKET);
router.get("/tickets", auth, GET_ALL_TICKETS);
router.get("/tickets/:ticketId", auth, GET_TICKET_BY_ID);
router.delete("/tickets/:ticketId", auth, DELETE_TICKET_BY_ID);

export default router;