import { ChatInputCommandInteraction, CacheType, SlashCommandBuilder, Interaction, embedLength } from "discord.js";
import ICommand from "./ICommand";

export default abstract class AbstractWriteCommand implements ICommand {
  name: string = "";
  abstract description: string;
  abstract alias: string[];
  abstract execute(interaction: ChatInputCommandInteraction): void;

  build() {
    return this.extendBuild.call(this, new SlashCommandBuilder().setName(this.name).setDescription(this.description));
  }

  extendBuild: (builder: SlashCommandBuilder) => Omit<SlashCommandBuilder, any> = (builder) => {
    return builder;
  };

  reply(interaction: ChatInputCommandInteraction, message: string, ephemeral: boolean = true) {
    interaction.reply({ content: message, ephemeral: ephemeral });
  }

  static getAllInstances<T extends ICommand>(type: { new (): T }): T[] {
    let res: any = [];
    const baseCommand: ICommand = new type();
    baseCommand.alias.forEach((alias) => {
      const command: ICommand = new type();
      command.name = alias;
      res.push(command);
    });
    return res;
  }
}
