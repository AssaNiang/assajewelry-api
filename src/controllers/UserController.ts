import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  private userService = new UserService();

  async getAll(req: Request, res: Response) {
    console.log("UserController");

    try {
      const users = await this.userService.getAll();
      res.send({ status: "OK", data: users });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async getById(req: Request, res: Response) {
    console.log("UserController");

    try {
      const user = await this.userService.getById(Number(req.params.id));
      res.send({ status: "OK", data: user });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async signup(req: Request, res: Response) {
    console.log("UserController");

    try {
      const {  firstname,lastname,password,email } = req.body;
      const user = await this.userService.signup(firstname,lastname, password,email);
      res.send({
        status: "OK",
        data: user,
        message: "User successfully created",
      });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async login(req: Request, res: Response) {
    console.log("UserController");

    const { email, password } = req.body;
    const token = await this.userService.login(email, password);

    if (token !== null) {
      res
        .status(200)
        .json({
          status: "OK",
          data: token,
          message: "User successfully authenticated",
        });
    } else {
      res.status(500).json({ status: "Failed", message: "Bad credentials"});
    }
  }

  async update(req: Request, res: Response) {
    console.log("UserController");

    try {
      const user = await this.userService.update(req.params.id, req.body);
      res.send({ status: "OK", data: user });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async delete(req: Request, res: Response) {
    console.log("UserController");

    try {
      const user = await this.userService.delete(req.params.id);
      res.send({ status: "OK", data: user });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }
}

export default UserController;
