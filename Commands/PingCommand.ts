import { CacheType, ChatInputCommandInteraction, Message, SlashCommandBuilder } from "discord.js";
import AbstractWriteCommand from "./AbstractWriteCommand";

export class PingCommand extends AbstractWriteCommand {
  description = "Makes the Ball pong";
  alias = ["ping", "debug"];

  execute(interaction: ChatInputCommandInteraction<CacheType>): void {
    this.reply(interaction, "Pong!");
  }
}
