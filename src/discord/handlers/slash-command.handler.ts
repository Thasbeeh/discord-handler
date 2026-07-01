import { Injectable, BadRequestException } from '@nestjs/common';
import { APIChatInputApplicationCommandInteraction } from 'discord-api-types/v10';
import { HelloCommandHandler } from './hello-command.handler';
import { RoadmapCommandHandler } from './roadmap-command.handler';
import { FeedbackHandler } from './feedback.handler';

@Injectable()
export class SlashCommandHandler {
  constructor(
    private readonly helloCommandHandler: HelloCommandHandler,
    private readonly roadmapCommandHandler: RoadmapCommandHandler,
    private readonly feedbackHandler: FeedbackHandler,
  ) {}

  handle(interaction: APIChatInputApplicationCommandInteraction) {
    switch (interaction.data.name) {
      case 'hello':
        return this.helloCommandHandler.handle(interaction);

      case 'roadmap':
        return this.roadmapCommandHandler.handle(interaction);

      case 'feedback':
        return this.feedbackHandler.handle(interaction);

      default:
        throw new BadRequestException(
          `Unknown command: ${interaction.data.name}`,
        );
    }
  }
}
