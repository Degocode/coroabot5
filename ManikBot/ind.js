exports.wait = () => {
	return`*「ESPERA」 ESTÁ EM PROCESSAMENTO*`
}

exports.succes = () => {
	return`*「 CONCLUÍDO COM SUCESSO: AGUARDE」*`
}

exports.lvlon = () => {
	return`*「 ATIVADO COM SUCESSO 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESATIVADO COM SUCESSO 」 LEVELING*`
}

exports.lvlnul = () => {
	return`「* SEU NÍVEL AINDA ESTÁ VAZIO *」`
}
exports.afkOn = (pushname, reason) => {
    return `Recurso AFK bem-sucedido * ativado *!\n\n➸ *Nome do usuário*: ${pushname}\n➸ *Razão*: ${reason}`
}

exports.afkOnAlready = () => {
    return `O recurso AFK já foi ativado.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! A pessoa está AFK, não se preocupe!\n➸ *Razão*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* voltou do AFK! Bem vindo de volta~`
}
exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUB AINDA NÃO ESTÁ ATIVADO*`
}

exports.noregis = () => {
	return`
╭◪ * 「REGISTRE-SE PRIMEIRO」 *
╰─────────────────╮
╭─────────────────╯
├❏ É fácil registrar-se agora!
├❏ Basta digitar @rg
├❏ Nb: Jan Spam Bot!
╰─────────────────╯
`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO」*\n\n*Você está JÁ formado no banco de dados do MANIK-bot * `
}

exports.stikga = () => {
	return`*Bem, falhe, tente repetir daqui a pouco * `
}

exports.linkga = () => {
	return`*Desculpe, o link é inválido*`
}

exports.groupo = () => {
	return`*「SÓ EM GRUPO」*`
}

exports.ownerb = () => {
	return`*「SÓ O PROPRIETÁRIO É AUTORIZADO」*`
}

exports.ownerg = () => {
	return`*「PROPRIETÁRIO SÓ EM GRUPO」*`
}

exports.admin = () => {
	return`*「ADMIN SÓ EM GRUPO」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW NÃO ATIVO*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner Manikツ, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRO 」*
Para saber se você é JÁ comum, verifique a mensagem que enviei
NOTA:
* Se você não recebeu uma mensagem. significa que você não salvou o número do seu bot *`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`
╭◪ *「 DADOS DE PAÍS DE MANIK BOT」* 
╰───────────────╮  
╭───────────────╯
├━⊱Nick:
├━⊱${namaUser}
├━⊱Número:
├━⊱wa.me/${sender.split("@")[0]}
├━⊱Era:
├━⊱${umurUser}
├━⊱Horário de registro:
├━⊱${time}
├━⊱NS:
├━⊱${serialUser}
╰───────────────╯
NOTE : Não se esqueça deste código cuk`
}

exports.premon = (pushname) => {
	return`Desculpe opa ${pushname} Lu Ga Premium:V`
}

exports.dellprem = (hnom) => {
	return`
╭◪ *「 PREMIUM DELETE 」* 
╰───────────────╮  
╭───────────────╯
├━⊱Número:
├━⊱${pnom}
├━⊱Expired:
├━⊱DESCULPE ACABOU
├━⊱NOTE:
├━⊱APROVEITE O PREMIUM :)
╰───────────────╯`
}

exports.premadd = (pnom) => {
	return`
╭◪ *「 PREMIUM ADD 」* 
╰───────────────╮  
╭───────────────╯
├━⊱Número:
├━⊱${pnom}
├━⊱Expired:
├━⊱30 DAY
├━⊱NOTE:
├━⊱APROVEITE O PREMIUM :)
╰───────────────╯`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\coba escreva a *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe mas ${pushname} não o script do proprietário *`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente *\n\n*┏⊱Seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo comando ${command}*\n*┗⊱ requisitos de nível : ${aha}*\n\n_NOTE : FIQUE SEMPRE ATIVO NO CHAT / PARA RECEBER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu nível não é suficiente *\n\n*┏⊱Seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo comando ${command}*\n*┗⊱ requisitos de nível : ${ahb}*\n\n_NOTE : FIQUE SEMPRE ATIVO NO CHAT / PARA RECEBER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} seu nível não é suficiente *\n\n*┏⊱Seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo comando ${command}*\n*┗⊱ requisitos de nível : ${ahc}*\n\n_NOTE : FIQUE SEMPRE ATIVO NO CHAT / PARA RECEBER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} seu nível não é suficiente *\n\n*┏⊱Seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo comando ${command}*\n*┗⊱ requisitos de nível : ${ahd}*\n\n_NOTE : FIQUE SEMPRE ATIVO NO CHAT / PARA RECEBER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu nível não é suficiente *\n\n*┏⊱Seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo comando ${command}*\n*┗⊱ requisitos de nível : ${ahe}*\n\n_NOTE : FIQUE SEMPRE ATIVO NO CHAT / PARA RECEBER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu nível não é suficiente *\n\n*┏⊱Seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo comando ${command}*\n*┗⊱ requisitos de nível : ${ahf}*\n\n_NOTE : FIQUE SEMPRE ATIVO NO CHAT / PARA RECEBER XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
╭◪ *「 UP DE LEVEL 」* 
╰───────────────╮  
╭───────────────╯
├⊱❏ Nick : ${pushname}
├⊱❏ Número : ${sender.split("@")[0]}
├⊱❏ Xp : ${getLevelingXp(sender)}
├⊱❏ Limit :  +3
├⊱❏ Classificação : ${role}
├⊱❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
╰───────────────╯`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} O limite de hoje expira *\n*Contate-Nos* : wa.me/5581998923680\n\n*Note : Daremos a você um aleatório de 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
o resto do seu limite : ${limitCounts}

NOTE : Para chegar ao limite. Você pode subir de nível por meio de grupos ou buylimit.
`}

exports.satukos = () => {
	return`*Adicionar parâmetro 1 / habilitar ou 0 / desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`
╭◪ *「 ATM 」*
╰───────────────╮  
╭───────────────╯
├❏ *Nick*: ${pushname}
├❏ *Número*: ${sender.split("@")[0]}
├❏ *Dinheiro: ${uangkau}
╰───────────────╯
`}
