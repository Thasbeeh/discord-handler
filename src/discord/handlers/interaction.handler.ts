import { BadRequestException, Injectable } from '@nestjs/common';
import {
  APIChatInputApplicationCommandInteraction,
  APIInteraction,
  InteractionType,
} from 'discord-api-types/v10';
import { PingHandler } from './ping.handler';
import { SlashCommandHandler } from './slash-command.handler';
import { ComponentHandler } from './component.handler';
import { ModalSubmitHandler } from './modal-submit.handler';

@Injectable()
export class InteractionHandler {
  constructor(
    private readonly pingHandler: PingHandler,
    private readonly slashCommandHandler: SlashCommandHandler,
    private readonly componentHandler: ComponentHandler,
    private readonly modalSubmitHandler: ModalSubmitHandler,
  ) {}

  handle(interaction: APIInteraction) {
    switch (interaction.type) {
      case InteractionType.Ping:
        return this.pingHandler.handle();

      case InteractionType.ApplicationCommand:
        return this.slashCommandHandler.handle(
          interaction as APIChatInputApplicationCommandInteraction,
        );

      case InteractionType.MessageComponent:
        return this.componentHandler.handle(interaction);

      case InteractionType.ModalSubmit:
        return this.modalSubmitHandler.handle(interaction);

      default:
        throw new BadRequestException(
          `Unsupported interaction type: ${interaction.type}`,
        );
    }
  }
}
