import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).pattern(new RegExp(/\d/)).message('Password must contain at least 6 characters and at least one number'),
  moneyBalance: Joi.number().default(1000),
});

export default userSchema;