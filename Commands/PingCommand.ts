import { CacheType, ChatInputCommandInteraction, Message, SlashCommandBuilder } from "discord.js";
import AbstractWriteCommand from "./AbstractWriteCommand";

export class PingCommand extends AbstractWriteCommand {
  constructor() {
    super();
  }
  description = "Makes the Ball pong";
  alias = ["ping", "debug"];

  execute(interaction: ChatInputCommandInteraction<CacheType>): void {
    this.reply(interaction, "Pong!");
  }
}
