import { BadRequestException, Injectable } from '@nestjs/common';
import { APIModalSubmitInteraction } from 'discord-api-types/v10';
import { FeedbackModalHandler } from './feedback-modal.handler';

@Injectable()
export class ModalSubmitHandler {
  constructor(private readonly feedbackModalHandler: FeedbackModalHandler) {}

  handle(interaction: APIModalSubmitInteraction) {
    const { custom_id } = interaction.data;

    switch (custom_id) {
      case 'feedback_modal':
        return this.feedbackModalHandler.handle(interaction);

      default:
        throw new BadRequestException(`Unknown modal: ${custom_id}`);
    }
  }
}
