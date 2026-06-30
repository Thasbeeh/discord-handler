import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import type { Response, Request } from 'express';
import { DiscordSignatureGuard } from './discord-signature.guard';
import { APIInteraction } from 'discord-api-types/v10';
import { InteractionHandler } from './handlers/interaction.handler';

@Controller('discord')
export class DiscordController {
  constructor(private readonly interactionHandler: InteractionHandler) {}

  @Post('interactions')
  @UseGuards(DiscordSignatureGuard)
  handleInteractions(@Req() req: Request, @Res() res: Response) {
    const interaction = req.body as APIInteraction;

    try {
      const response = this.interactionHandler.handle(interaction);
      return res.status(200).send(response);
    } catch (error: any) {
      return res.status(400).send(error.message);
    }
  }
}
