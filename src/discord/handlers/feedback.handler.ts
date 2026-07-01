import { Injectable } from '@nestjs/common';
import {
  APIChatInputApplicationCommandInteraction,
  ComponentType,
  InteractionResponseType,
  TextInputStyle,
} from 'discord-api-types/v10';

@Injectable()
export class FeedbackHandler {
  handle(interaction: APIChatInputApplicationCommandInteraction) {
    return {
      type: InteractionResponseType.Modal,
      data: {
        custom_id: 'feedback_modal',
        title: 'Send Feedback',
        components: [
          {
            type: ComponentType.ActionRow,
            components: [
              {
                type: ComponentType.TextInput,
                custom_id: 'title',
                label: 'Title',
                style: TextInputStyle.Short,
                required: true,
                max_length: 100,
              },
            ],
          },
          {
            type: ComponentType.ActionRow,
            components: [
              {
                type: ComponentType.TextInput,
                custom_id: 'description',
                label: 'Description',
                style: TextInputStyle.Paragraph,
                required: true,
                max_length: 1000,
              },
            ],
          },
        ],
      },
    };
  }
}
