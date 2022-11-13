import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import AbstractWriteCommand from "./AbstractWriteCommand";

export class AddCommand extends AbstractWriteCommand {
  description = "Add a Trigger";
  alias = ["add"];

  execute(interaction: ChatInputCommandInteraction): void {
    this.reply(interaction, "TODO!");
  }

  override extendBuild: (builder: SlashCommandBuilder) => Omit<SlashCommandBuilder, any> = (builder) => {
    return builder
      .addStringOption((option) => option.setName("trigger").setDescription("first param").setRequired(true))
      .addStringOption((option) => option.setName("response").setDescription("second").setRequired(true));
  };
}
