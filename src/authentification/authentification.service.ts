import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';


// Ici definition des types recu en argumantes des fonctions
type AuthInput = { username: string; password: string };
type SignInData = { userId: number; username: string };
type AuthResult = { accessToken: string; userId: number; username: string };

@Injectable()
export class AuthentificationService {
    // on geger ici la generation du JWT 
    constructor(
        // on injecte le usersService dans le authService et on injecte le userModule dans le authModule
        private usersService: UsersService,
        private jwtservice: JwtService
    ) { }

    async singIn(input: AuthInput): Promise<AuthResult> {
        const user = await this.validateUser(input); // Avant de se connecter on doit valider d'abord le user avec la fct ValidateUser()
        if (!user) { // if the user is not valide
            throw new UnauthorizedException();
        }
        // if it's valide je retourne son Id et son username et le token 
        const tokenPayload = { sub: user.userId, username: user.username };
        const accessToken = await this.jwtservice.signAsync(tokenPayload);
        return {
            accessToken,
            userId: user.userId,
            username: user.username
        }

    }

    async validateUser(input: AuthInput) {
        const user = await this.usersService.findUserByName(input.username);

        if (user && user.password === input.password) {
            return {
                userId: user.userId,
                username: user.username
            }
        }
        return null;
    }
}
