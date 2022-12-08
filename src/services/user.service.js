import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import {sendMail} from '../utils/user.util';
import { sender } from '../utils/rabbitmq';

//create new user
export const newUserRegister = async (body) => {
  // Check if this user already exisits
  const data = await User.find({ email: body.email });
  if (data.length !== 0) {
    throw new Error('Email id already exist');
  } else {
    const saltRounds = 10;
    const hashpassword = await bcrypt.hash(body.password,saltRounds)
    body.password = hashpassword
    // Insert the new user if they do not exist yet
    const data = await User.create(body);
    const registrationData = JSON.stringify({'firstname' : data.firstname, 'lastName' : data.lastname, 'emailID': data.email });
    sender(registrationData);
    return data;
  }
};

//login user
export const login = async (body) => {
  const data = await User.findOne({ email: body.email });
  // Check if email id present or not
  if (data.length !== 0) {
    console.log('Password',body.password);
    const result = await bcrypt.compare(body.password,data.password)
    if (result) {
      var token = jwt.sign({ 'id' : data.id,'firstname': data.firstname, 'email' : data.email }, process.env.SECRET_KEY);
      return token;
    } else {
      throw new Error('Enter Password is invalid');
    }
  } else {
    throw new Error('Enter EmailId is invalid');
  }
};

//Reset password
export const ResetPassword = async (body) => {
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashPassword;
  const data = await User.findOneAndUpdate(
    {email:body.email},
    {password:hashPassword},
    {
      new: true
    }
  );
  return data;
};

//Forgot password
export const forgotPassword = async (body) => {
  // To check email id is register or not in database
  const data = await User.findOne({ email: body.email });
  if (data !== null) {
    var passwordToken = jwt.sign({email: data.email, id: data._id}, process.env.SECRET_KEY);
    const result = await sendMail(data.email);
    return passwordToken;
  }
  else {
    throw new Error("Invalid Email ID");
  }
};
