import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { etudiantEntity } from 'src/entities/etudiant.entity';
import { userDto } from 'src/dtos/user.dto';
import { etudiantDto } from 'src/dtos/etudiant.dto';
import * as bcrypt from 'bcrypt'
import { ressortissantDto } from 'src/dtos/ressortissant.dto';
import { ressortissantEntity } from 'src/entities/ressortissant.entity';
import { employeDto } from 'src/dtos/employeAmbassade.dto';
import { employe_ambassadeEntity } from 'src/entities/employeAmbassade.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(etudiantEntity)
    private readonly etudiantRepository: Repository<etudiantEntity>,
    @InjectRepository(ressortissantEntity)
    private readonly ressortissantRepository: Repository<ressortissantEntity>,
    @InjectRepository(employe_ambassadeEntity)
    private readonly employeRepository: Repository<employe_ambassadeEntity>

  ) { }

  private readonly saltRounds = 10 // Pour la complexite du hashage

  // Ma fct de Hashage
  async hashPassowrd(password: string) {
    const hashedPassword = await bcrypt.hash(password, this.saltRounds);
    return hashedPassword;
  }

  // Création d'un utilisateur
  async createUser(userDto: userDto) {
    console.log("Password Before Hash: "+ userDto.password); // password de Oumar: "adminpass" pour les autres c'est leur username qui est le MDP
    const hashedPassword = await this.hashPassowrd(userDto.password);

    userDto.password = hashedPassword;  // Je remplace le password courant par le password hashee
    const user = this.userRepository.create(userDto);
    console.log(user);
    return this.userRepository.save(user);
  }

  // Création d'un étudiant
  async createEtudiant(etudiantDto: etudiantDto) {
    const user_id = etudiantDto.user_id;
    const user = await this.userRepository.findOneBy({ user_id });
    if (!user) {
      throw new Error('User not found');
    }

    const etudiant = this.etudiantRepository.create({
      ...etudiantDto,
      user,
    });

    return this.etudiantRepository.save(etudiant);
  }
  // Creation d'un Ressortissant 
  async createRessortissant(ressortissantDto: ressortissantDto) {
    const user_id = ressortissantDto.user_id;
    const user =  await this.userRepository.findOneBy({ user_id });

    if( !user){
      throw new Error('User not found');
    }
    const ressortissant = this.ressortissantRepository.create({
      ...ressortissantDto,
      user
    });
    return this.ressortissantRepository.save(ressortissant);
  }
  // Creation d'un employee de l'ambassade 
  async createEmploye(employeDto: employeDto){
    const user_id = employeDto.user_id;
    const user = await this.userRepository.findOneBy({ user_id });

    if(!user){
      throw new Error('User not found !');
    }
    const employe = this.employeRepository.create({
      ...employeDto,
      user
    });
    return this.employeRepository.save(employe);
  }
  // Récupérer les informations d'un utilisateur
  async getInfoUser(user_id: number) {
    return this.userRepository.findOneBy({ user_id });
  }

  // Modifier les informations d'un utilisateur
  async modifierInfoUser(user_id: number, userDto: userDto) {
    const user = await this.userRepository.findOneBy({ user_id });
    if (!user) {
      return null;
    }

    await this.userRepository.update(user_id, userDto);
    return this.userRepository.findOneBy({ user_id });
  }

  // Supprimer un utilisateur
  async removeUser(user_id: number) {
    const user = await this.userRepository.findOneBy({ user_id });
    if (!user) {
      return null;
    }

    await this.userRepository.delete(user_id);
    return { message: 'User deleted successfully' };
  }

  // Trouver un utilisateur par nom
  async findUserByName(username: string) {
    return this.userRepository.findOneBy({ username });
  }

  
  // Recherche par email
  async findUsersByEmail(email: string) {
    return this.userRepository.find({ where: { email } });
  }

  // Recherche par rôle
  async findUsersByRole(type: string) {
    return this.userRepository.find({ where: { type } });
  }
}
