import jwt from 'jwt-simple';
import { dbConfig } from '../config';

export function getToken(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, dbConfig.secret);
}
