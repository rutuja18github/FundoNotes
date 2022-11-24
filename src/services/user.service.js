import User from '../models/user.model';
import bcrypt from 'bcrypt';

//create new user
export const newUserRegister = async (body) => {
  // Check if this user already exisits
  const data = await User.find({ email: body.email });
  if (data.length !== 0) {
    throw new Error('Already Exist EmailId');
  } else {
    const saltRounds = 10;
    const hashpassword = await bcrypt.hash(body.password,saltRounds)
    body.password = hashpassword
    // Insert the new user if they do not exist yet
    const data = await User.create(body);
    return data;
  }
};

//login user
export const login = async (body) => {
  const data = await User.find({ email: body.email });
  // Check if email id present or not
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