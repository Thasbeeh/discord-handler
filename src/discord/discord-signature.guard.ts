import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { verifyKey } from 'discord-interactions';
import { Request } from 'express';

interface RequestWithRawBody extends Request {
  rawBody?: Buffer;
}

@Injectable()
export class DiscordSignatureGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const publicKey = process.env.DISCORD_APPLICATION_PUBLIC_KEY;
    const request = context.switchToHttp().getRequest<RequestWithRawBody>();

    const signature = request.headers['x-signature-ed25519'];
    const timestamp = request.headers['x-signature-timestamp'];
    const rawBody = request.rawBody;

    if (!signature || !timestamp || !rawBody || !publicKey) {
      throw new UnauthorizedException(
        'Missing required Discord signature headers or application public key.',
      );
    }

    const cleanSignature = Array.isArray(signature) ? signature[0] : signature;
    const cleanTimestamp = Array.isArray(timestamp) ? timestamp[0] : timestamp;

    // FIX: Removed 'await' from verifyKey since it's a synchronous function
    const isValidRequest = verifyKey(
      rawBody,
      cleanSignature,
      cleanTimestamp,
      publicKey,
    );

    if (!isValidRequest) {
      throw new UnauthorizedException('Invalid request signature.');
    }

    return true;
  }
}
