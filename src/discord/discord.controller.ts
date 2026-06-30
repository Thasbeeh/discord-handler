import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
// FIX: Prepend 'type' to the express imports
import type { Response, Request } from 'express';
import { DiscordSignatureGuard } from './discord-signature.guard';
import {
  APIInteraction,
  InteractionType,
  InteractionResponseType,
  APIChatInputApplicationCommandInteraction,
} from 'discord-api-types/v10';

@Controller('discord')
export class DiscordController {
  @Post('interactions')
  @UseGuards(DiscordSignatureGuard)
  handleInteractions(@Req() req: Request, @Res() res: Response) {
    const interaction = req.body as APIInteraction;

    if (interaction.type === InteractionType.Ping) {
      return res.status(200).send({
        type: InteractionResponseType.Pong,
      });
    }

    if (interaction.type === InteractionType.ApplicationCommand) {
      const cmdInteraction =
        interaction as APIChatInputApplicationCommandInteraction;
      const { name } = cmdInteraction.data;

      if (name === 'hello') {
        return res.status(200).send({
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: `Hello, ${cmdInteraction.member?.user.username}! Your request was securely signed and verified.`,
          },
        });
      }

      if (name === 'roadmap') {
        return res.status(200).send({
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: 'Roadmap, Week 1...',
          },
        });
      }
    }

    return res.status(400).send('Unknown interaction type');
  }
}
