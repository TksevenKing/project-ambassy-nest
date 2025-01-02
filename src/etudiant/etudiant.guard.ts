import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';


@Injectable()
export class EtudiantGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.user; 
      
        // Vérifiez si l'utilisateur est authentifié
        if (!user) {
            throw new UnauthorizedException('Vous devez être connecté pour accéder à cette ressource.');
        }

        // Vérifiez si l'utilisateur est de type "student"
        if (user.type !== 'student') {
          console.log(user)
            throw new ForbiddenException('Seuls les étudiants peuvent accéder à cette ressource.');
        }

        return true; // Autorisez l'accès
    }
}

