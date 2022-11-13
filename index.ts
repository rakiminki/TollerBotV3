import Discord from "discord.js";
import Client from "./Client";
import Config from "./Config";
import CommandHandler from "./Logic/CommandHandler";
import { Log } from "./Log";
import EventHandler from "./Logic/EventHandler";
const Logger = Log.Logger;
const Loggingtypes = Log.Loggingtypes;

Logger.log("The Bullshit starts to beginn", Loggingtypes.BUILD);

const allIntents = [
  Discord.GatewayIntentBits.Guilds,
  Discord.GatewayIntentBits.GuildMembers,
  Discord.GatewayIntentBits.GuildBans,
  Discord.GatewayIntentBits.GuildEmojisAndStickers,
  Discord.GatewayIntentBits.GuildIntegrations,
  Discord.GatewayIntentBits.GuildWebhooks,
  Discord.GatewayIntentBits.GuildInvites,
  Discord.GatewayIntentBits.GuildVoiceStates,
  Discord.GatewayIntentBits.GuildPresences,
  Discord.GatewayIntentBits.GuildMessages,
  Discord.GatewayIntentBits.GuildMessageReactions,
  Discord.GatewayIntentBits.GuildMessageTyping,
  Discord.GatewayIntentBits.DirectMessages,
  Discord.GatewayIntentBits.DirectMessageReactions,
  Discord.GatewayIntentBits.DirectMessageTyping,
  Discord.GatewayIntentBits.MessageContent,
  Discord.GatewayIntentBits.GuildScheduledEvents,
  Discord.GatewayIntentBits.AutoModerationConfiguration,
  Discord.GatewayIntentBits.AutoModerationExecution,
];

export const client = new Client({
  intents: allIntents,
});

CommandHandler.registerCommands();
EventHandler.registerEvents();

client.login(Config.token);
