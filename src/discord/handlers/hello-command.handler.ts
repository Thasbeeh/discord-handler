import { Injectable } from '@nestjs/common';
import {
  APIChatInputApplicationCommandInteraction,
  InteractionResponseType,
} from 'discord-api-types/v10';

@Injectable()
export class HelloCommandHandler {
  handle(interaction: APIChatInputApplicationCommandInteraction) {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: `Hello, ${interaction.member?.user.username}!`,
      },
    };
  }
}
