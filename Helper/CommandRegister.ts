import ICommand from "../Commands/ICommand";
import { Commands } from "../Commands/Collection";
import { client } from "../index";
import { Log } from "../Log";
import { REST, Routes, SlashCommandBuilder } from "discord.js";
import Config from "../Config";
const Logger = Log.Logger;

export default class CommandRegister {
  static rest = new REST({ version: "10" }).setToken(Config.token);

  static registerAll() {
    let commands: any[] = [];
    Commands.forEach((command) => {
      commands = commands.concat(this.register(command));
    });
    this.rest.put(Routes.applicationGuildCommands(Config.clientId, Config.guildId), { body: commands });
  }

  private static register(command: ICommand): Omit<SlashCommandBuilder, any>[] {
    /* reset global commands
    this.rest.get(Routes.applicationCommands(Config.clientId)).then((data: any) => {
      for (const command of data) {
        this.rest.delete(Routes.applicationCommand(Config.clientId, command.id));
      }
    });*/
    if (!command.enabled) {
      Logger.log(`${command.name} is disabled`, Log.Loggingtypes.BUILD);
      return [];
    }
    client.commands.set(command.name, command);
    command.alias.forEach((alias) => {
      client.aliases.set(alias, command);
    });
    const res = command.build();
    Logger.log(`${command.name} registered`, Log.Loggingtypes.BUILD);
    return res;

    /* alias logic
    const commands: ICommand[] = [] as ICommand[];

    command.alias.forEach((alias) => {
      const copy: ICommand = JSON.parse(JSON.stringify(command));
      copy.name = alias;
      client.commands.set(alias, command);
      commands.push(copy);
    });
    Logger.log(`${command.name} registered with ${commands.length} alias`, Log.Loggingtypes.BUILD);
*/

    // Set global commands
    //   this.rest.put(Routes.applicationCommands(Config.clientId), { body: commands });
  }
}
