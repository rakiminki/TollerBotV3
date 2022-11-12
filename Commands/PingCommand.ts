import { CacheType, ChatInputCommandInteraction, Message, SlashCommandBuilder } from "discord.js";
import Feature from "../Feature";
import AbstractWriteCommand from "./AbstractWriteCommand";

export class PingCommand extends AbstractWriteCommand {
  constructor() {
    super();
  }
  name = "ping";
  description = "Makes the Ball pong";
  alias = ["ping", "debug"];
  enabled = Feature.PingCommand;

  execute(interaction: ChatInputCommandInteraction<CacheType>): void {
    this.reply(interaction, "Pong!");
  }
}
