import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncrypterService {
  async hash(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async authenticate(hash: string, plaintext: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(plaintext, hash);
    return isMatch;
  }
}
