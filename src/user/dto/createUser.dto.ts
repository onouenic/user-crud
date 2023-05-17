import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  id?: number;

  @IsEmail({}, { message: 'Informe um email válido' })
  @IsNotEmpty({ message: 'Você precisa informar um email' })
  username: string;

  @IsNotEmpty({ message: 'Você precisa informar uma senha' })
  @Length(6, 12, { message: 'Senha deve ter entre 6 e 12 caracteres' })
  password: string;

  @IsString({ message: 'Informe um nome válido' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;
}
