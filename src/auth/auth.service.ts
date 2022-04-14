import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProducersService } from 'src/producers/producers.service';
import { DriversService } from '../drivers/drivers.service';

@Injectable()
export class AuthService {
  constructor(
    private driverService: DriversService,
    private producerService: ProducersService,
    private jwtService: JwtService,
  ) {}

  async validateDriver(email: string, pass: string): Promise<any> {
    const driver = await this.driverService.findByEmail(email);
    if (driver && driver.password === pass) {
      const { password, ...result } = driver;
      return result;
    }
    return null;
  }

  async validateProducer(email: string, pass: string): Promise<any> {
    const producer = await this.producerService.findByEmail(email);
    if (producer && producer.password === pass) {
      const { password, ...result } = producer;
      return result;
    }
    return null;
  }

  async login(user: any, type: string) {
    const payload = { username: user.email, sub: user.id, type };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
