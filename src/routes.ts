import { Request, Response } from "express";
import createUser from './services/CreateUser';
/*
export default function helloWorld(request: Request, response: Response) {

  const user = createUser('Diego', 'v@var.com', 123456);

  return response.json({ message: 'Hello World!'})
}
*/
export default function helloWorld(request: Request, response: Response) {

  const user = createUser({
    name: '',
    email: 'vc@vc.vc',
    password: 12312,
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native',
      {
        title: 'Javascript',
        experience: 100
      }
     ]
  });

  console.log(user.email);

  return response.json(user);
}
