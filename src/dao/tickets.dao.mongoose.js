import mongoose from 'mongoose'
import { DaoMongoose } from './DaoMongoose.js'

const TicketsSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  purchase_datetime: { type: String, required: true },
  amount: { type: Number, required: true },
  purchaser: { type: String, required: true }
}, { versionKey: false })
const ticketsModel = mongoose.model('tickets', TicketsSchema)

export const ticketsDaoMongoose = new DaoMongoose(ticketsModel)