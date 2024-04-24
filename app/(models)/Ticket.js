import mongoose, { Schema } from "mongoose";
import { describe } from "node:test";
import { title } from "process";

// Verbindung zur MongoDB herstellen
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ticketSchema = new Schema(
  {
    title: String,
    describtion: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

// Verbindung überprüfen
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Verbindungsfehler:"));
db.once("open", function () {
  console.log("Verbunden mit der MongoDB-Datenbank");
});

export default Ticket;
