const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Tickets = require("../models/ticketsModel");

router.post("/post", async (req, res) => {
  const { tickettitle, category, description, email, telephone } = req.body;

  try {
    const newTicket = new Tickets({
      tickettitle,
      category,
      description,
      email,
      telephone,
    });
    newTicket.save();
    res.send("Ticket send Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.get("/getallTickets", async (req, res) => {
  try {
    const AllTickets = await Tickets.find(); //find data
    res.send(AllTickets);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.delete("/delete/tickets/:id", async (req, res) => {
  let ticketId = req.params.id;

  try {
    await Tickets.findByIdAndDelete(ticketId);

    res.send("Ticket Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
router.put("/update/:id", async (req, res) => {
  let userId = req.params.id;
  const { reply } = req.body;

  const updateTickets = {
    reply,

  };

  try {
    await Tickets.findByIdAndUpdate(userId, updateTickets);
    res.send("Reply send successfully!");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
