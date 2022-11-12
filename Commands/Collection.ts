import { AddCommand } from "./AddCommand";
import ICommand from "./ICommand";
import { PingCommand } from "./PingCommand";
export const Commands: ICommand[] = [new PingCommand(), new AddCommand()];
