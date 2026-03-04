import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { timingSafeEqual } from 'node:crypto';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const configuredApiKey = process.env.SCRAPER_API_KEY;
    if (!configuredApiKey) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const headerApiKey = this.readApiKey(request.headers['x-api-key']);

    if (!headerApiKey) {
      throw new UnauthorizedException('x-api-key header is required');
    }

    const expectedBuffer = Buffer.from(configuredApiKey);
    const incomingBuffer = Buffer.from(headerApiKey);

    if (expectedBuffer.length !== incomingBuffer.length) {
      throw new UnauthorizedException('invalid api key');
    }

    if (!timingSafeEqual(expectedBuffer, incomingBuffer)) {
      throw new UnauthorizedException('invalid api key');
    }

    return true;
  }

  private readApiKey(rawHeader: unknown): string | null {
    if (typeof rawHeader === 'string' && rawHeader.trim().length > 0) {
      return rawHeader.trim();
    }

    if (
      Array.isArray(rawHeader) &&
      typeof rawHeader[0] === 'string' &&
      rawHeader[0].trim().length > 0
    ) {
      return rawHeader[0].trim();
    }

    return null;
  }
}
