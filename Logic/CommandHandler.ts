import ICommand from "../Commands/ICommand";
import { client } from "../index";
import { Log } from "../Log";
import { REST, Routes, SlashCommandBuilder } from "discord.js";
import Config from "../Config";
import Features from "./Features";
import AbstractWriteCommand from "../Commands/AbstractWriteCommand";
const Logger = Log.Logger;

export default class CommandRegister {
  static rest = new REST({ version: "10" }).setToken(Config.token);

  static registerCommands() {
    let commands: any[] = [];
    CommandRegister.Commands.forEach((command) => {
      commands.push(this.register(command));
    });

    this.rest.put(Routes.applicationGuildCommands(Config.clientId, Config.guildId), { body: commands });
    commands.forEach((command) => {
      command.name = "g" + command.name;
    });
    // Set global commands
    this.rest.put(Routes.applicationCommands(Config.clientId), { body: commands });
  }

  private static register(command: ICommand): Omit<SlashCommandBuilder, any> {
    /* reset global commands
    this.rest.get(Routes.applicationCommands(Config.clientId)).then((data: any) => {
      for (const command of data) {
        this.rest.delete(Routes.applicationCommand(Config.clientId, command.id));
      }
    });*/
    client.commands.set(command.name, command);
    client.commands.set("g" + command.name, command);

    const res = command.build();
    Logger.log(`Command ${command.name} registered`, Log.Loggingtypes.BUILD);
    return res;
  }

  private static getAll = () => {
    let res: ICommand[] = [];
    Features.EnabledCommands.forEach((element: any) => {
      res = res.concat(AbstractWriteCommand.getAllInstances(element));
    });
    res;
    return res;
  };

  private static Commands: ICommand[] = this.getAll.call(null);
}
