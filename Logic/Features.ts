import { AddCommand } from "../Commands/AddCommand";
import { PingCommand } from "../Commands/PingCommand";
export default class Features {
  static Enabled = [AddCommand, PingCommand];
  static Diabled = [];
}
