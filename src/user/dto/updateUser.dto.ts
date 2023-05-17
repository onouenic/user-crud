import { IsOptional } from 'class-validator';

export class UpdateUserDto {
  id?: number;

  //@IsEmail({}, { message: 'Informe um username válido' })
  //@IsNotEmpty({ message: 'username é obrigatório' })
  @IsOptional()
  username?: string;

  //@IsNotEmpty({ message: 'Senha é obrigatória' })
  //@Length(6, 12, { message: 'Senha deve ter entre 6 e 12 caracteres' })
  @IsOptional()
  password?: string;

  //@IsString({ message: 'Informe um nome válido' })
  //@IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsOptional()
  nome?: string;
}
