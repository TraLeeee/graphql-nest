import { Injectable } from '@nestjs/common';
import { StaffsService } from '../staffs/staffs.service';
import { JwtService } from '@nestjs/jwt';
import { Staff } from 'src/entities/staff.entity';

@Injectable()
export class AuthService {
  constructor(
    private staffsService: StaffsService,
    private jwtService: JwtService,
  ) {}

  async validateStaff(email: string, password: string): Promise<any> {
    const staff = await this.staffsService.findByEmail(email);
    if (staff && staff.password === password) {
      const { password, ...result } = staff;
      return result;
    }

    return null;
  }

  async login(staff: Staff) {
    const payload = {
      email: staff.email,
      sub: staff.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
      staff,
    };
  }
}
