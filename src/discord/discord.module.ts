import { Module } from '@nestjs/common';
import { DiscordController } from './discord.controller';
import { InteractionHandler } from './handlers/interaction.handler';
import { PingHandler } from './handlers/ping.handler';
import { SlashCommandHandler } from './handlers/slash-command.handler';
import { ComponentHandler } from './handlers/component.handler';
import { HelloCommandHandler } from './handlers/hello-command.handler';
import { RoadmapCommandHandler } from './handlers/roadmap-command.handler';
import { RoadmapComponentHandler } from './handlers/roadmap-component.handler';
import { FeedbackHandler } from './handlers/feedback.handler';
import { FeedbackModalHandler } from './handlers/feedback-modal.handler';
import { ModalSubmitHandler } from './handlers/modal-submit.handler';

@Module({
  controllers: [DiscordController],
  providers: [
    InteractionHandler,
    PingHandler,
    SlashCommandHandler,
    ComponentHandler,
    ModalSubmitHandler,
    HelloCommandHandler,
    RoadmapCommandHandler,
    RoadmapComponentHandler,
    FeedbackHandler,
    FeedbackModalHandler,
  ],
})
export class DiscordModule {}
