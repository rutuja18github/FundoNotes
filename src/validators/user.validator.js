import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])((?=.*[!@#&?/*~$^]{1})).{8,}$/
  const schema = Joi.object({
    firstname: Joi.string().pattern(new RegExp(/^[A-Z]{1}[a-z]/)).min(4).required(),
    lastname: Joi.string().pattern(new RegExp(/^[A-Z]{1}[a-z]/)).min(4).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().pattern(new RegExp(passwordRegex)).min(8).max(15).required(),
    confirmPassword:Joi.string().pattern(new RegExp(passwordRegex)).min(8).max(15).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
