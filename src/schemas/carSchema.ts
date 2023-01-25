import joi from "joi";

export const carSchema = joi.object({
  model: joi.string().required(),
  licensePlate: joi.string().length(7).required(),
  year: joi.string().required().min(4).max(4),
  color: joi.string().required(),
});
