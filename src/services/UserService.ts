import AppDataSource from "../data-source";
import { UserEntity } from "../entities/UserEntity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class UserService {
  private userRepository = AppDataSource.getRepository(UserEntity);

  async getAll() {
    console.log("UserService");    
    return this.userRepository.find();
  }
  async getById(id: number) {
    console.log("UserService");
    return this.userRepository.findOneBy({ id: id });
  }
  async signup( firstname: string,lastname: string, password: string,email: string, ) {
    console.log("UserService");
    const hashPassword = await bcrypt.hash(password, 10);

    const userToCreate: UserEntity = { firstname,lastname,password: hashPassword,email}
    const newUser = this.userRepository.create(userToCreate);

    return this.userRepository.save(newUser);
  }

  async login(email: string, password: string){
    console.log("UserServiceLogin");
    
    const user = await this.userRepository.findOneBy({ email: email });
    if(!user){
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password!);

    if(!isPasswordValid){
      return null;
    }

    const tokenPayload = {
      id: user.id,
      email: user.email,
      role: user.role // Ajout du rôle de l'utilisateur dans le payload du token
    };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET as string, {expiresIn: "4h"});
    // const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET as string, {expiresIn: "4h"});
    
    return token
  }

  async update(id: string, user: UserEntity) {
    console.log("UserService");
    return this.userRepository.update(id, user);
  }

  async delete(id: string) {
    console.log("UserService");
    // const user = this.userRepository.findOneBy({ id: +id });
    return this.userRepository.delete(id);
  }
}

export default UserService;
