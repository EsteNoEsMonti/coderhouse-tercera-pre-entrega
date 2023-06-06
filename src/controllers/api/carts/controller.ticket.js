// import { ticketsRepository } from "../../../repositories/tickets.repository.js";

// export async function getTicket(req, res, next) {
  // console.log('🌙 ', 'req.session.passport.user.email', '->', req.session.passport.user.email)

  // try {
  //   if (req.params.id) {
  //     const buscado = await ticketsRepository.readOne({ id: req.params.id })
  //     res.json(buscado)
  //   } else {
  //     const comercios = await ticketsRepository.readMany(req.query)
  //     res.json(comercios)
  //   }
  // } catch (error) {
  //   next(error)
  // }
// }