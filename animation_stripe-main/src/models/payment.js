import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  amount: { type: String, required: true },
  cardNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const UserPayment = mongoose.models.UserPayment || mongoose.model("UserPayment", paymentSchema);
export default UserPayment;
