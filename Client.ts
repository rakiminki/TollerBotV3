import Discord from "discord.js";
import ICommand from "./Commands/ICommand";
export default class Client extends Discord.Client {
  public commands: Discord.Collection<string, ICommand> = new Discord.Collection();
  public aliases: Discord.Collection<string, ICommand> = new Discord.Collection();
  public trigger: Discord.Collection<string, string> = new Discord.Collection();
}
