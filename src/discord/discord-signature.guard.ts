import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class DiscordSignatureGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    return true;
  }
}
