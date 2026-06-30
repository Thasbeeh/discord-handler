import { Injectable } from '@nestjs/common';
import {
  APIChatInputApplicationCommandInteraction,
  ButtonStyle,
  ComponentType,
  InteractionResponseType,
} from 'discord-api-types/v10';

@Injectable()
export class RoadmapCommandHandler {
  handle(interaction: APIChatInputApplicationCommandInteraction) {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: 'Roadmap, Week 1...',
        components: [
          {
            type: ComponentType.ActionRow,
            components: [
              {
                type: ComponentType.Button,
                style: ButtonStyle.Primary,
                label: 'Next Week',
                custom_id: 'next_week_2',
              },
            ],
          },
        ],
      },
    };
  }
}
