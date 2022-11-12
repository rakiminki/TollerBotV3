import { ChatInputCommandInteraction, CacheType, SlashCommandBuilder, Interaction, embedLength } from "discord.js";
import Feature from "../Feature";
import ICommand from "./ICommand";

export default abstract class AbstractWriteCommand implements ICommand {
  constructor() {}

  abstract name: string;
  abstract description: string;
  abstract alias: string[];
  abstract enabled: Feature;

  abstract execute(interaction: ChatInputCommandInteraction): void;

  build() {
    let commands: Omit<SlashCommandBuilder, any>[] = [];
    this.alias.forEach((alias) => {
      commands.push(this.extendBuild.call(this, new SlashCommandBuilder().setName(alias).setDescription(this.description)));
    });
    return commands;
  }

  extendBuild: (builder: SlashCommandBuilder) => Omit<SlashCommandBuilder, any> = (builder) => {
    return builder;
  };

  reply(interaction: ChatInputCommandInteraction, message: string, ephemeral: boolean = true) {
    interaction.reply({ content: message, ephemeral: ephemeral });
  }
}
