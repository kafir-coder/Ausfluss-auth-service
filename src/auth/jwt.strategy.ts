import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AbstractStrategy, PassportStrategy } from '@nestjs/passport';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const PassportJwtStrategy: new (...args: any) => AbstractStrategy & Strategy =
  PassportStrategy(Strategy);

@Injectable()
export class JwtStrategy extends PassportJwtStrategy {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      email: payload.email,
      type: payload.type,
    };
  }
}
