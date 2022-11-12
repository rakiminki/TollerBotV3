import Discord from "discord.js";
import Client from "./Client";
import Config from "./Config";
import CommandRegister from "./Helper/CommandRegister";
import { Log } from "./Log";
const Logger = Log.Logger;
const Loggingtypes = Log.Loggingtypes;

Logger.log("The Bullshit starts to beginn", Loggingtypes.BUILD);

const allIntents = [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMembers, Discord.GatewayIntentBits.GuildBans, Discord.GatewayIntentBits.GuildEmojisAndStickers, Discord.GatewayIntentBits.GuildIntegrations, Discord.GatewayIntentBits.GuildWebhooks, Discord.GatewayIntentBits.GuildInvites, Discord.GatewayIntentBits.GuildVoiceStates, Discord.GatewayIntentBits.GuildPresences, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.GuildMessageReactions, Discord.GatewayIntentBits.GuildMessageTyping, Discord.GatewayIntentBits.DirectMessages, Discord.GatewayIntentBits.DirectMessageReactions, Discord.GatewayIntentBits.DirectMessageTyping, Discord.GatewayIntentBits.MessageContent, Discord.GatewayIntentBits.GuildScheduledEvents, Discord.GatewayIntentBits.AutoModerationConfiguration, Discord.GatewayIntentBits.AutoModerationExecution];

export const client = new Client({
  intents: allIntents,
});

CommandRegister.registerAll();

client.on(Discord.Events.InteractionCreate, (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) {
    Logger.log(`No command matching ${interaction.commandName} was found.`, Loggingtypes.ERROR);
    interaction.reply({
      content: "That Command is WIP, please wait a second :)",
      ephemeral: true,
    });
    return;
  }
  try {
    command.execute(interaction);
  } catch (error) {
    console.error(error);
    interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

let test = (string) => {
  return string;
};

client.on("ready", async () => {
  Logger.log("Boss, i am Ready", Loggingtypes.BUILD);
});
/* old CommandEvent
client.on('message', async (message : Discord.Message) => {

  //  if (message.content.length > 1 && !message.content.startsWith(Config.prefix) && !message.author.bot) userHelper.level(message)

    if (!message.content.startsWith(Config.prefix) || message.author.bot) return; //no command or triggered by bot

    const args : string[] = message.content.slice(Config.prefix.length).split(/ +/); //arguments
   
    const command = args?.shift()?.toLowerCase(); //define command
    if(command == undefined) return;

    let cmdToExecute = client.commands.get(command) || client.aliases.get(command); //command to execute

    if(cmdToExecute){
        cmdToExecute.execute(client, message, args); //if command found, execute
    }

})*/

client.login(Config.token);
