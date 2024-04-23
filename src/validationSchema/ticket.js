import Joi from "joi";

const ticketSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  fromLocation: Joi.string().required().min(2),
  toLocation: Joi.string().required().min(2),
  toLocationPhotoUrl: Joi.string().required(),
});

export default ticketSchema;
