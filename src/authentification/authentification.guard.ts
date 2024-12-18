import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthentificationGuard implements CanActivate {
  constructor(private jwtService: JwtService){}


  async canActivate( context: ExecutionContext ):  Promise<boolean>  {
    const request = context.switchToHttp().getRequest();    // je recupere la requette se trouvant dans le executionContext
    const authorization = request.headers.authorization; // on extrait l'entete de la requette contenant le 'Bearer <token>'
    const token = authorization?.split(' ')[1];  // et on recupere le 'Bearer <token>' contenu dans l'en tete
    
    if(!token){
      throw new UnauthorizedException();
    } // but if the the token exist we have to validate it To do so we will use jwtService so import it
    try {
      const tokenPayload = await this.jwtService.verifyAsync(token);   // je verifie si le token est valide ?
      request.user = {               // on pouvait ne pas ajouter ca mais c'est juste pour ajouter des info additionnelle a la requette (on lie l'utilisateur a la requete)
        userId: tokenPayload.sub,
        username: tokenPayload.username
      }
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
    
  }
}
