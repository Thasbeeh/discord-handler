import { Injectable } from '@nestjs/common';
import { InteractionResponseType } from 'discord-api-types/v10';

@Injectable()
export class PingHandler {
  handle() {
    return {
      type: InteractionResponseType.Pong,
    };
  }
}
