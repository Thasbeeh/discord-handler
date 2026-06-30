import { Module } from '@nestjs/common';
import { DiscordController } from './discord.controller';
import { InteractionHandler } from './handlers/interaction.handler';
import { PingHandler } from './handlers/ping.handler';
import { SlashCommandHandler } from './handlers/slash-command.handler';
import { ComponentHandler } from './handlers/component.handler';
import { HelloCommandHandler } from './handlers/hello-command.handler';
import { RoadmapCommandHandler } from './handlers/roadmap-command.handler';
import { RoadmapComponentHandler } from './handlers/roadmap-component.handler';

@Module({
  controllers: [DiscordController],
  providers: [
    InteractionHandler,
    PingHandler,
    SlashCommandHandler,
    ComponentHandler,
    HelloCommandHandler,
    RoadmapCommandHandler,
    RoadmapComponentHandler,
  ],
})
export class DiscordModule {}
