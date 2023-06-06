import { randomUUID } from "crypto";

export class Ticket {
  #code
  #purchase_datetime
  #amount
  #purchaser
  // String debe autogenerarse y ser único
  // Deberá guardar la fecha y hora exacta en la cual se formalizó la compra (básicamente es un created_at)
  // Number, total de la compra.
  // String, contendrá el correo del usuario asociado al carrito.

  constructor({
    code = randomUUID(),
    purchase_datetime = new Date(),
    amount,
    purchaser,
  }) {
    this.#code = code
    this.#purchase_datetime = purchase_datetime
    this.#amount = amount
    this.#purchaser = purchaser
  }

  dto() {
    return {
      code: this.#code,
      purchase_datetime: this.#purchase_datetime,
      amount: this.#amount,
      purchaser: this.#purchaser

    }
  }
}