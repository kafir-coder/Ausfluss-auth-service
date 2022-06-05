import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProducersService } from '../producers/producers.service';
import { DriversService } from '../drivers/drivers.service';
import { EncrypterService } from '../encrypter/encrypter.service';

@Injectable()
export class AuthService {
  constructor(
    private driverService: DriversService,
    private producerService: ProducersService,
    private jwtService: JwtService,
    private readonly encrypter: EncrypterService,
  ) {}

  async validateDriver(email: string, pass: string): Promise<any> {
    const driver = await this.driverService.findByEmail(email);

    if (!driver) {
      return null;
    }
    const hasSamePassword = await this.encrypter.authenticate(
      driver.password,
      pass,
    );

    if (hasSamePassword) {
      const { password, ...result } = driver;
      return result;
    }
    return null;
  }

  async validateProducer(email: string, pass: string): Promise<any> {
    const producer = await this.producerService.findByEmail(email);

    if (!producer) {
      return null;
    }
    const hasSamePassword = await this.encrypter.authenticate(
      producer.password,
      pass,
    );

    if (hasSamePassword) {
      const { password, ...result } = producer;
      return result;
    }
    return null;
  }

  async login(user: any, type: string) {
    const payload = { email: user.email, sub: user.id, type };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
