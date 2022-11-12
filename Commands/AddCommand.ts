import { SlashCommandBuilder } from "discord.js";
import Feature from "../Feature";
import AbstractWriteCommand from "./AbstractWriteCommand";

export class AddCommand extends AbstractWriteCommand {
  public constructor() {
    super();
  }

  name = "add";
  description = "Add a Trigger";
  alias = ["add"];
  enabled = Feature.AddCommand;

  execute(interaction): void {
    this.reply(interaction, "TODO!");
  }

  override extendBuild: (builder: SlashCommandBuilder) => Omit<SlashCommandBuilder, any> = (builder) => {
    return builder
      .addStringOption((option) => option.setName("trigger").setDescription("first param").setRequired(true))
      .addStringOption((option) => option.setName("response").setDescription("second").setRequired(true));
  };
}
