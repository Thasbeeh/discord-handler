import { Injectable } from '@nestjs/common';
import {
  APIModalSubmitInteraction,
  InteractionResponseType,
} from 'discord-api-types/v10';

@Injectable()
export class FeedbackModalHandler {
  handle(interaction: APIModalSubmitInteraction) {
    for (const row of interaction.data.components) {
      if (!('components' in row)) {
        continue;
      }

      for (const component of row.components) {
        console.log(component.custom_id, component.value);
      }
    }

    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: '✅ Thank you! Your feedback has been received.',
      },
    };
  }
}
