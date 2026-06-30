import { BadRequestException, Injectable } from '@nestjs/common';
import { APIMessageComponentInteraction } from 'discord-api-types/v10';
import { RoadmapComponentHandler } from './roadmap-component.handler';

@Injectable()
export class ComponentHandler {
  constructor(
    private readonly roadmapComponentHandler: RoadmapComponentHandler,
  ) {}

  handle(interaction: APIMessageComponentInteraction) {
    const { custom_id } = interaction.data;

    switch (custom_id) {
      case 'next_week_1':
      case 'next_week_2':
      case 'next_week_3':
      case 'next_week_4':
        return this.roadmapComponentHandler.handle(custom_id);

      default:
        throw new BadRequestException(`Unknown component: ${custom_id}`);
    }
  }
}
