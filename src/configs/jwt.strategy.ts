import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extraction du token depuis le header Authorization
            secretOrKey: 'KHHGD12DFG45DG15DG4', 
        });
    }

    // Cette méthode valide le token et attache les données utilisateur à `request.user`
    async validate(payload: any) {
        return { userId: payload.sub, email: payload.email, type: payload.type };
    }
}
