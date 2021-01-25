interface TechObject {
  title: string;
  experience: number
}

interface CreateUserData {
  name?: string; // ? = opcional
  email: string;
  password: number;
  techs: Array<string | TechObject> // string[//se for apenas strings]
}

//export default function createUser(name='', email: string, password: number) {
export default function createUser({name, email, password, techs}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs
  }
  return user;
}
