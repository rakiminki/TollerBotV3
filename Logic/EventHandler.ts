import Discord from "discord.js";
import { client } from "../index";
import { Log } from "../Log";
import OnReadyEvent from "./Events/OnReadyEvent";
import InteractionCreateEvent from "./Events/OnInteractionCreateEvent";
import Features from "./Features";

const Logger = Log.Logger;
const Loggingtypes = Log.Loggingtypes;
export default class EventHandler {
  static registerEvents() {
    Features.EnabledEvents.forEach((event) => new event().register());
  }
}
