import { Injectable } from '@nestjs/common';
import {
  ButtonStyle,
  ComponentType,
  InteractionResponseType,
  APIButtonComponentWithCustomId,
} from 'discord-api-types/v10';

@Injectable()
export class RoadmapComponentHandler {
  handle(customId: string) {
    switch (customId) {
      case 'next_week_1':
        return this.buildResponse(1);

      case 'next_week_2':
        return this.buildResponse(2);

      case 'next_week_3':
        return this.buildResponse(3);

      case 'next_week_4':
        return this.buildResponse(4);
    }
  }

  private buildResponse(week: number) {
    const buttons: APIButtonComponentWithCustomId[] = [];

    if (week > 1) {
      buttons.push({
        type: ComponentType.Button,
        style: ButtonStyle.Secondary,
        label: 'Previous Week',
        custom_id: `next_week_${week - 1}`,
      });
    }

    if (week < 4) {
      buttons.push({
        type: ComponentType.Button,
        style: ButtonStyle.Primary,
        label: 'Next Week',
        custom_id: `next_week_${week + 1}`,
      });
    }

    return {
      type: InteractionResponseType.UpdateMessage,
      data: {
        content: `Roadmap, Week ${week}...`,
        components: [
          {
            type: ComponentType.ActionRow,
            components: buttons,
          },
        ],
      },
    };
  }
}
