import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequestDTO {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}
@injectable()
class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async execute({
    user_id,
    name,
    email,
    password,
    old_password,
  }: IRequestDTO): Promise<User> {
    const user = await this.usersRepository.findById(user_id);
    if (!user) {
      throw new AppError('User not found!');
    }
    const emailExists = await this.usersRepository.findByEmail(email);
    if (emailExists && emailExists.id !== user_id) {
      throw new AppError('Email already in use!');
    }

    user.name = name;
    user.email = email;

    if (password && !old_password) {
      throw new AppError(
        'Old Password is obrigatory if want to change password'
      );
    }

    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        old_password,
        user.password
      );
      if (!checkOldPassword) {
        throw new AppError('Old Password is wrong');
      }
      user.password = await this.hashProvider.generateHash(password);
    }

    await this.usersRepository.save(user);
    return user;
  }
}

export default UpdateProfileService;
