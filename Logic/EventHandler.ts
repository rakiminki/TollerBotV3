import Discord from "discord.js";
import { client } from "../index";
import { Log } from "../Log";
const Logger = Log.Logger;
const Loggingtypes = Log.Loggingtypes;
export default class EventHandler {
  static registerEvents() {
    client.on(Discord.Events.InteractionCreate, this.onInteractionCreate);
    Logger.log(`Event InteractionCreate(${Discord.Events.InteractionCreate}) registered`, Loggingtypes.BUILD);
    client.on(Discord.Events.ClientReady, this.onReady);
    Logger.log(`Event ClientReady(${Discord.Events.ClientReady}) registered`, Loggingtypes.BUILD);
  }

  private static onInteractionCreate = (interaction: Discord.Interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);

    if (!command) {
      Logger.log(`No command matching ${interaction.commandName} was found.`, Loggingtypes.ERROR);
      interaction.reply({
        content: "That Command is WIP, please wait a second :)",
        ephemeral: true,
      });
      return;
    }
    try {
      command.execute(interaction);
    } catch (error) {
      console.error(error);
      interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  };

  private static onReady = async () => {
    Logger.log("Boss, i am Ready", Loggingtypes.BUILD);
  };
}
