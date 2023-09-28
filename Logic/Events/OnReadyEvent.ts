import Discord from "discord.js";
import { client } from "../../index";
import { Log } from "../../Log";
import IEvent from "./IEvent";
const Logger = Log.Logger;
const Loggingtypes = Log.Loggingtypes;
export default class OnReadyEvent implements IEvent {
  public register() {
    client.on(Discord.Events.ClientReady, this.execute);
    Logger.log(`Event ClientReady(${Discord.Events.ClientReady}) registered`, Loggingtypes.BUILD);
  }

  public execute() {
    Logger.log("Boss, i am Ready", Loggingtypes.BUILD);
  }
}
