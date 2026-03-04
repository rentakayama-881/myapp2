import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  live() {
    return { ok: true };
  }

  async ready() {
    await this.prisma.$queryRaw`SELECT 1`;
    return { ok: true };
  }
}
