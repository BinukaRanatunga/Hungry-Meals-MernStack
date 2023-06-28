const mongoose = require("mongoose");

const deliverySchema = mongoose.Schema({

  driverName: { type: String },
  orderId: { type: String },
  orderItems : [],
  location: {type: Object},
  customerName: { type: String },
  amount: { type: Number, default: 0 },
  driverRate: { type: Number, default: 0 }

}, {

  timestamps: true,

});

module.exports = mongoose.model('Delivery', deliverySchema);