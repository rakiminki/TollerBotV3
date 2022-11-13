import Discord, { SlashCommandBuilder } from "discord.js";

export default interface ICommand {
  name: string;
  description: string;
  alias: string[];

  execute(interaction: Discord.ChatInputCommandInteraction): void;
  build(): Omit<SlashCommandBuilder, any>;
  extendBuild: (builder: SlashCommandBuilder) => Omit<SlashCommandBuilder, any>;
}
