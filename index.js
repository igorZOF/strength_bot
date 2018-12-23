const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const fs = require('fs')
const TOKEN = '753753939:AAE1QUdI80jaOlX86CBQKIQQbacMzZ8NyOY'

console.log('Bot has been started ....')

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
})

bot.onText(/\/abaddon_main/, msg => {

  bot.sendPhoto(msg.chat.id, './abaddon_main.jpg', {
    caption: 'This is characteristic'
  })
    bot.sendPhoto(msg.chat.id, './abaddon_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})

bot.onText(/\/abaddon_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './abaddon_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './abaddon_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './abaddon_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './abaddon_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})


bot.onText(/\/alchemist_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './alchemist_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './alchemist_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './alchemist_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './alchemist_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/alchemist_main/, msg => {

    bot.sendPhoto(msg.chat.id, './alchemist_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './alchemist_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/axe_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './axe_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './axe_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './axe_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './axe_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/axe_main/, msg => {

    bot.sendPhoto(msg.chat.id, './axe_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './axe_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/beastmaster_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './beastmaster_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './beastmaster_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './beastmaster_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './beastmaster_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './beastmaster_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/beastmaster_main/, msg => {

    bot.sendPhoto(msg.chat.id, './beastmaster_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './beastmaster_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/brewmaster_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './brewmaster_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './brewmaster_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './brewmaster_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './brewmaster_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/brewmaster_main/, msg => {

    bot.sendPhoto(msg.chat.id, './brewmaster_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './brewmaster_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/bristleback_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './bristleback_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './bristleback_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './bristleback_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './bristleback_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/bristleback_main/, msg => {

    bot.sendPhoto(msg.chat.id, './bristleback_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './bristleback_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/centaurwarruner_abbility/, msg => {

    bot.sendPhoto(msg.chat.id, './centaurwarruner_abbility1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './centaurwarruner_abbility2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './centaurwarruner_abbility3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './centaurwarruner_abbility4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/centaurwarruner_main/, msg => {

    bot.sendPhoto(msg.chat.id, './centaurwarruner_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './centaurwarruner_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/chaosknight_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './chaosknight_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './chaosknight_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './chaosknight_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './chaosknight_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/chaosknight_main/, msg => {

    bot.sendPhoto(msg.chat.id, './chaosknight_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './chaosknight_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/clockwerk_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './clockwerk_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './clockwerk_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './clockwerk_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './clockwerk_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/clockwerk_main/, msg => {

    bot.sendPhoto(msg.chat.id, './clockwerk_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './clockwerk_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/doom_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './doom_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './doom_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './doom_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './doom_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/doom_main/, msg => {

    bot.sendPhoto(msg.chat.id, './doom_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './doom_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/dragonknight_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './dragonknight_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './dragonknight_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './dragonknight_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './dragonknight_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/dragonknight_main/, msg => {

    bot.sendPhoto(msg.chat.id, './dragonknight_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './dragonknight_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/earthspirit_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './earthspirit_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './earthspirit_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './earthspirit_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './earthspirit_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './earthspirit_ability5.jpg', {
        caption: 'This is fifth ability'
    })
    bot.sendPhoto(msg.chat.id, './earthspirit_ability6.jpg', {
        caption: 'This is sixth ability'
    })
})

bot.onText(/\/earthspirit_main/, msg => {

    bot.sendPhoto(msg.chat.id, './earthspirit_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './earthspirit_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/earthshaker_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './earthshaker_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './earthshaker_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './earthshaker_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './earthshaker_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/earthshaker_main/, msg => {

    bot.sendPhoto(msg.chat.id, './earthshaker_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './earthshaker_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/eldertitan_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './eldertitan_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './eldertitan_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './eldertitan_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './eldertitan_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/eldertitan_main/, msg => {

    bot.sendPhoto(msg.chat.id, './eldertitan_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './eldertitan_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/huskar_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './huskar_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './huskar_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './huskar_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './huskar_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/huskar_main/, msg => {

    bot.sendPhoto(msg.chat.id, './huskar_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './huskar_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/io_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './io_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './io_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './io_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './io_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/io_main/, msg => {

    bot.sendPhoto(msg.chat.id, './io_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './io_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/kunkka_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './kunkka_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './kunkka_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './kunkka_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './kunkka_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/kunkka_main/, msg => {

    bot.sendPhoto(msg.chat.id, './kunkka_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './kunkka_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/legioncommander_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './legioncommander_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './legioncommander_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './legioncommander_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './legioncommander_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/legioncommander_main/, msg => {

    bot.sendPhoto(msg.chat.id, './legioncommander_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './legioncommander_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/lifestealer_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './lifestealer_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './lifestealer_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './lifestealer_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './lifestealer_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/lifestealer_main/, msg => {

    bot.sendPhoto(msg.chat.id, './lifestealer_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './lifestealer_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/lycan_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './lycan_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './lycan_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './lycan_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './lycan_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/lycan_main/, msg => {

    bot.sendPhoto(msg.chat.id, './lycan_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './lycan_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/magnus_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './magnus_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './magnus_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './magnus_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './magnus_ability4.jpg', {
        caption: 'This is forth ability'
    })
})

bot.onText(/\/magnus_main/, msg => {

    bot.sendPhoto(msg.chat.id, './magnus_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './magnus_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/nightstalker_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './nightstalker_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './nightstalker_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './nightstalker_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './nightstalker_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/nightstalker_main/, msg => {

    bot.sendPhoto(msg.chat.id, './nightstalker_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './nightstalker_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/omniknight_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './omniknight_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './omniknight_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './omniknight_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './omniknight_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/omniknight_main/, msg => {

    bot.sendPhoto(msg.chat.id, './omniknight_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './omniknight_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/phoenix_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './phoenix_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './phoenix_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './phoenix_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './phoenix_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/phoenix_main/, msg => {

    bot.sendPhoto(msg.chat.id, './phoenix_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './phoenix_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/pudge_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './pudge_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './pudge_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './pudge_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './pudge_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/pudge_main/, msg => {

    bot.sendPhoto(msg.chat.id, './pudge_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './pudge_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/sandking_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './sandking_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './sandking_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './sandking_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './sandking_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/sandking_main/, msg => {

    bot.sendPhoto(msg.chat.id, './sandking_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './sandking_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/slardar_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './slardar_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './slardar_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './slardar_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './slardar_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/slardar_main/, msg => {

    bot.sendPhoto(msg.chat.id, './slardar_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './slardar_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/spiritbreaker_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './spiritbreaker_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './spiritbreaker_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './spiritbreaker_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './spiritbreaker_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/spiritbreaker_main/, msg => {

    bot.sendPhoto(msg.chat.id, './spiritbreaker_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './spiritbreaker_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/sven_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './sven_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './sven_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './sven_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './sven_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/sven_main/, msg => {

    bot.sendPhoto(msg.chat.id, './sven_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './sven_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/tidehunter_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './tidehunter_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './tidehunter_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './tidehunter_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './tidehunter_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/tidehunter_main/, msg => {

    bot.sendPhoto(msg.chat.id, './tidehunter_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './tidehunter_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/timbersaw_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './timbersaw_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './timbersaw_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './timbersaw_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './timbersaw_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './timbersaw_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/timbersaw_main/, msg => {

    bot.sendPhoto(msg.chat.id, './timbersaw_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './timbersaw_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/tiny_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './tiny_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './tiny_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './tiny_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './tiny_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/tiny_main/, msg => {

    bot.sendPhoto(msg.chat.id, './tiny_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './tiny_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/treantprotector_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './treantprotector_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './treantprotector_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './treantprotector_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './treantprotector_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './treantprotector_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/treantprotector_main/, msg => {

    bot.sendPhoto(msg.chat.id, './treantprotector_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './treantprotector_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/tusk_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './tusk_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './tusk_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './tusk_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './tusk_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './tusk_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/tusk_main/, msg => {

    bot.sendPhoto(msg.chat.id, './tusk_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './tusk_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/underlord_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './underlord_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './underlord_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './underlord_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './underlord_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/underlord_main/, msg => {

    bot.sendPhoto(msg.chat.id, './underlord_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './underlord_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/undying_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './undying_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './undying_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './undying_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './undying_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/undying_main/, msg => {

    bot.sendPhoto(msg.chat.id, './undying_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './undying_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/wraithking_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './wraithking_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './wraithking_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './wraithking_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './wraithking_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/wraithking_main/, msg => {

    bot.sendPhoto(msg.chat.id, './wraithking_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './wraithking_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})

















