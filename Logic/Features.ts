import { AddCommand } from "../Commands/AddCommand";
import ICommand from "../Commands/ICommand";
import { PingCommand } from "../Commands/PingCommand";
import IEvent from "./Events/IEvent";
import OnInteractionCreate from "./Events/OnInteractionCreateEvent";
import OnReadyEvent from "./Events/OnReadyEvent";
export default class Features {
  static EnabledCommands = [AddCommand, PingCommand];
  static DisabledCommands = [];
  static EnabledEvents = [OnReadyEvent, OnInteractionCreate];
  static DisabledEvents = [];
}
