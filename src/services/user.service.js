import User from '../models/user.model';

//create new user
export const newUserRegister = async (body) => {
  const data = await User.find({ email: body.email });
  if (data.length !== 0) {
    throw new Error('Already Exist EmailId');
  } else {
    const data = await User.create(body);
    return data;
  }
};

//login user
export const login = async (body) => {
  const data = await User.find({ email: body.email });
  if (data.length !== 0) {
    const data = await User.find({ password: body.password });
    if (data.length !== 0) {
      return data;
    } else {
      throw new Error('Enter valid Password');
    }
  } else {
    throw new Error('Enter Valid EmailId');
  }
};