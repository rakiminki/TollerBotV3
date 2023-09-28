import Discord from "discord.js";
export default interface IEvent {
  register(): void;
  execute(interaction: Discord.Interaction): void;
}
