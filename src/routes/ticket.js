import express from "express";
import {CREATE_TICKET, GET_ALL_TICKETS, GET_TICKET_BY_ID, DELETE_TICKET} from "../controllers/ticket.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.post("/tickets", auth, CREATE_TICKET);
router.get("/tickets", auth, GET_ALL_TICKETS);
router.get("/tickets/:ticketId", auth, GET_TICKET_BY_ID);
router.delete("/tickets", auth, DELETE_TICKET);

export default router;