import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('live')
  live() {
    return this.appService.live();
  }

  @Get('ready')
  async ready() {
    return this.appService.ready();
  }
}
