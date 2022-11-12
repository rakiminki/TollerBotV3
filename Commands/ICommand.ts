import Discord, { SlashCommandBuilder } from "discord.js";
import Feature from "../Feature";

export default interface ICommand {
  name: string;
  description: string;
  alias: string[];
  enabled: Feature;

  execute(interaction: Discord.ChatInputCommandInteraction): void;
  build(): Omit<SlashCommandBuilder, any>[];
  extendBuild: (builder: SlashCommandBuilder) => Omit<SlashCommandBuilder, any>;
}
