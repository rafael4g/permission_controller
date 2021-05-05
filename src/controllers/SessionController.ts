import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository';

class SessionController {
  async create(request: Request, response: Response) {
    const { username, password } = request.body;

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ username }, {relations: ["roles"]});

    if(!user){
      return response.status(400).json({error: 'User not found!'});      
    }

    const matchPassword = await compare( password , user.password );

    if(!matchPassword){
      return response.status(400).json({error: 'Incorrect password or username'});      
    }


    const roles = user.roles.map((role) => role.name);
    // sign 3 parametros
    // 1) payload => os dados que deseja que ficam registrados no token
    // 2) password_key => chave secreta unica "c71e8eb6a7917c625bc9d292268cde3c"
    // 3) subject => utilizar o id do usuario e aceita apenas string
    const token = sign({ roles }, "c71e8eb6a7917c625bc9d292268cde3c", {
      subject: user.id,
      expiresIn: '1d'
    });

    return response.json({
      token,
      user
    });

  }

}

export default new SessionController;