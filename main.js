const _0x759a2c=_0x45f9;function _0x45f9(_0x14bc81,_0x35a46e){const _0x7cba5f=_0x7cba();return _0x45f9=function(_0x45f9f2,_0x77fc39){_0x45f9f2=_0x45f9f2-0x91;let _0x5a70c7=_0x7cba5f[_0x45f9f2];return _0x5a70c7;},_0x45f9(_0x14bc81,_0x35a46e);}(function(_0x1e9b26,_0x16dbaf){const _0x363944=_0x45f9,_0x12c08f=_0x1e9b26();while(!![]){try{const _0x3404b0=parseInt(_0x363944(0xf3))/0x1+-parseInt(_0x363944(0x133))/0x2+-parseInt(_0x363944(0x16f))/0x3+parseInt(_0x363944(0x137))/0x4+parseInt(_0x363944(0xdd))/0x5*(parseInt(_0x363944(0xa3))/0x6)+parseInt(_0x363944(0x174))/0x7*(-parseInt(_0x363944(0x10e))/0x8)+parseInt(_0x363944(0x154))/0x9*(-parseInt(_0x363944(0x99))/0xa);if(_0x3404b0===_0x16dbaf)break;else _0x12c08f['push'](_0x12c08f['shift']());}catch(_0x10649f){_0x12c08f['push'](_0x12c08f['shift']());}}}(_0x7cba,0x36080),require(_0x759a2c(0x124)));const makeWASocket=require(_0x759a2c(0xe2))[_0x759a2c(0xf9)],{uncache,nocache}=require('./lib/loader'),{color}=require('./lib/color'),NodeCache=require(_0x759a2c(0xb8)),readline=require(_0x759a2c(0xb4)),pino=require(_0x759a2c(0xd8)),{Boom}=require(_0x759a2c(0x16c)),{Low,JSONFile}=require('./lib/lowdb'),yargs=require('yargs/yargs'),fs=require('fs'),{GIFBufferToVideoBuffer}=require(_0x759a2c(0xf2)),chalk=require('chalk'),FileType=require(_0x759a2c(0xb1)),path=require(_0x759a2c(0x13c)),axios=require(_0x759a2c(0x139)),_=require(_0x759a2c(0x114)),moment=require(_0x759a2c(0xcc)),PhoneNumber=require('awesome-phonenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x759a2c(0xd5)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetch,await,sleep,reSize}=require(_0x759a2c(0xa1)),{default:XeonBotIncConnect,getAggregateVotesInPollMessage,delay,PHONENUMBER_MCC,makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require('@whiskeysockets/baileys'),store=makeInMemoryStore({'logger':pino()[_0x759a2c(0xd7)]({'level':'silent','stream':_0x759a2c(0xea)})});global['opts']=new Object(yargs(process[_0x759a2c(0x97)][_0x759a2c(0x14f)](0x2))['exitProcess'](![])[_0x759a2c(0xde)]()),global['db']=new Low(new JSONFile(_0x759a2c(0xa2))),global[_0x759a2c(0x107)]=global['db'],global[_0x759a2c(0x165)]=async function loadDatabase(){const _0x2e6116=_0x759a2c;if(global['db'][_0x2e6116(0xe5)])return new Promise(_0x12b472=>setInterval(function(){const _0x22d6ed=_0x2e6116;!global['db'][_0x22d6ed(0xe5)]?(clearInterval(this),_0x12b472(global['db'][_0x22d6ed(0x173)]==null?global['loadDatabase']():global['db']['data'])):null;},0x1*0x3e8));if(global['db'][_0x2e6116(0x173)]!==null)return;global['db']['READ']=!![],await global['db'][_0x2e6116(0x13b)](),global['db'][_0x2e6116(0xe5)]=![],global['db'][_0x2e6116(0x173)]={'users':{},'database':{},'chats':{},'game':{},'settings':{},...global['db'][_0x2e6116(0x173)]||{}},global['db']['chain']=_['chain'](global['db'][_0x2e6116(0x173)]);},loadDatabase();if(global['db'])setInterval(async()=>{const _0xa38dc6=_0x759a2c;if(global['db'][_0xa38dc6(0x173)])await global['db']['write']();},0x1e*0x3e8);require('./brain.js'),nocache(_0x759a2c(0x9e),_0x1df86d=>console[_0x759a2c(0x13a)](color(_0x759a2c(0x10f),'green'),color('\x27'+_0x1df86d+'\x27',_0x759a2c(0xd1)),_0x759a2c(0xdc))),require(_0x759a2c(0x171)),nocache(_0x759a2c(0xa7),_0x396c0c=>console[_0x759a2c(0x13a)](color('[\x20CHANGE\x20]',_0x759a2c(0xd1)),color('\x27'+_0x396c0c+'\x27','green'),_0x759a2c(0xdc)));let phoneNumber='2347079059033',owner=JSON[_0x759a2c(0xde)](fs[_0x759a2c(0xab)](_0x759a2c(0xca)));const pairingCode=!!phoneNumber||process[_0x759a2c(0x97)][_0x759a2c(0xd6)](_0x759a2c(0xfd)),useMobile=process[_0x759a2c(0x97)][_0x759a2c(0xd6)](_0x759a2c(0x152)),rl=readline[_0x759a2c(0x132)]({'input':process['stdin'],'output':process['stdout']}),question=_0x280d4c=>new Promise(_0x5591a9=>rl[_0x759a2c(0x15e)](_0x280d4c,_0x5591a9));async function startXeonBotInc(){const _0x2c38af=_0x759a2c;let {version:_0x4e6e86,isLatest:_0x519351}=await fetchLatestBaileysVersion();const {state:_0x3b412e,saveCreds:_0x1b9da2}=await useMultiFileAuthState('./session'),_0x359792=new NodeCache(),_0x2dea4c=makeWASocket({'logger':pino({'level':_0x2c38af(0x9c)}),'printQRInTerminal':!pairingCode,'mobile':useMobile,'browser':[_0x2c38af(0x166),_0x2c38af(0x109),_0x2c38af(0xe7)],'auth':{'creds':_0x3b412e[_0x2c38af(0xd0)],'keys':makeCacheableSignalKeyStore(_0x3b412e[_0x2c38af(0x94)],pino({'level':_0x2c38af(0x172)})[_0x2c38af(0xd7)]({'level':_0x2c38af(0x172)}))},'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x202bcb=>{const _0x4827d1=_0x2c38af;let _0x729fb3=jidNormalizedUser(_0x202bcb[_0x4827d1(0x125)]),_0x148036=await store[_0x4827d1(0x14c)](_0x729fb3,_0x202bcb['id']);return _0x148036?.[_0x4827d1(0xc7)]||'';},'msgRetryCounterCache':_0x359792,'defaultQueryTimeoutMs':undefined});store[_0x2c38af(0x143)](_0x2dea4c['ev']);if(pairingCode&&!_0x2dea4c[_0x2c38af(0xa9)]['creds'][_0x2c38af(0x9a)]){if(useMobile)throw new Error(_0x2c38af(0x113));let _0xd7fbf3;!!_0xd7fbf3?(_0xd7fbf3=_0xd7fbf3['replace'](/[^0-9]/g,''),!Object[_0x2c38af(0x94)](PHONENUMBER_MCC)[_0x2c38af(0x95)](_0x4e2397=>_0xd7fbf3[_0x2c38af(0x12a)](_0x4e2397))&&(console[_0x2c38af(0x13a)](chalk[_0x2c38af(0x160)](chalk[_0x2c38af(0x10b)](_0x2c38af(0x15a)))),process[_0x2c38af(0xc2)](0x0))):(_0xd7fbf3=await question(chalk[_0x2c38af(0x160)](chalk[_0x2c38af(0x11d)](_0x2c38af(0xcb)))),_0xd7fbf3=_0xd7fbf3[_0x2c38af(0xf8)](/[^0-9]/g,''),!Object[_0x2c38af(0x94)](PHONENUMBER_MCC)['some'](_0x218464=>_0xd7fbf3[_0x2c38af(0x12a)](_0x218464))&&(console[_0x2c38af(0x13a)](chalk[_0x2c38af(0x160)](chalk[_0x2c38af(0x10b)](_0x2c38af(0x11e)))),_0xd7fbf3=await question(chalk[_0x2c38af(0x160)](chalk[_0x2c38af(0x11d)](_0x2c38af(0x10c)))),_0xd7fbf3=_0xd7fbf3['replace'](/[^0-9]/g,''),rl[_0x2c38af(0xd4)]())),setTimeout(async()=>{const _0x2f7299=_0x2c38af;let _0x15f520=await _0x2dea4c['requestPairingCode'](_0xd7fbf3);_0x15f520=_0x15f520?.[_0x2f7299(0xf0)](/.{1,4}/g)?.[_0x2f7299(0xcd)]('-')||_0x15f520,console[_0x2f7299(0x13a)](chalk['black'](chalk[_0x2f7299(0x9d)](_0x2f7299(0x12b))),chalk[_0x2f7299(0xc6)](chalk['white'](_0x15f520)));},0xbb8);}return _0x2dea4c['ev']['on'](_0x2c38af(0x16e),async _0x5c1554=>{const _0x4ac891=_0x2c38af,{connection:_0x584be1,lastDisconnect:_0x361044}=_0x5c1554;try{if(_0x584be1===_0x4ac891(0xd4)){let _0x2c4d58=new Boom(_0x361044?.[_0x4ac891(0x108)])?.[_0x4ac891(0xf1)]['statusCode'];if(_0x2c4d58===DisconnectReason[_0x4ac891(0x11b)])console[_0x4ac891(0x13a)](_0x4ac891(0x128)),startXeonBotInc();else{if(_0x2c4d58===DisconnectReason[_0x4ac891(0x15c)])console[_0x4ac891(0x13a)](_0x4ac891(0xbc)),startXeonBotInc();else{if(_0x2c4d58===DisconnectReason[_0x4ac891(0x146)])console[_0x4ac891(0x13a)](_0x4ac891(0xd3)),startXeonBotInc();else{if(_0x2c4d58===DisconnectReason['connectionReplaced'])console['log'](_0x4ac891(0x10a)),startXeonBotInc();else{if(_0x2c4d58===DisconnectReason[_0x4ac891(0xdf)])console[_0x4ac891(0x13a)]('Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again.'),startXeonBotInc();else{if(_0x2c4d58===DisconnectReason[_0x4ac891(0x118)])console['log']('Restart\x20Required,\x20Restarting...'),startXeonBotInc();else{if(_0x2c4d58===DisconnectReason['timedOut'])console[_0x4ac891(0x13a)]('Connection\x20TimedOut,\x20Reconnecting...'),startXeonBotInc();else _0x2dea4c[_0x4ac891(0x12c)]('Unknown\x20DisconnectReason:\x20'+_0x2c4d58+'|'+_0x584be1);}}}}}}}(_0x5c1554[_0x4ac891(0x140)]=='connecting'||_0x5c1554[_0x4ac891(0x110)]==_0x4ac891(0x12e))&&console[_0x4ac891(0x13a)](color(_0x4ac891(0x141),'yellow')),(_0x5c1554[_0x4ac891(0x140)]==_0x4ac891(0xba)||_0x5c1554[_0x4ac891(0x110)]==_0x4ac891(0xed))&&(console[_0x4ac891(0x13a)](color('\x20',_0x4ac891(0x168))),console[_0x4ac891(0x13a)](color('🌿Connected\x20to\x20=>\x20'+JSON[_0x4ac891(0x13f)](_0x2dea4c['user'],null,0x2),_0x4ac891(0xb0))),await delay(0x7cf),console['log'](chalk['yellow'](_0x4ac891(0x167)+chalk[_0x4ac891(0x112)][_0x4ac891(0x101)]('[\x20'+botname+'\x20]')+'\x0a\x0a')),console['log'](color(_0x4ac891(0xeb),_0x4ac891(0x12d))),console['log'](color('\x0a'+themeemoji+'\x20YT\x20CHANNEL:\x20THUGN1F1CENT',_0x4ac891(0x168))),console[_0x4ac891(0x13a)](color(themeemoji+_0x4ac891(0x151),_0x4ac891(0x168))),console[_0x4ac891(0x13a)](color(themeemoji+_0x4ac891(0x169),_0x4ac891(0x168))),console['log'](color(themeemoji+_0x4ac891(0x178)+owner,_0x4ac891(0x168))),console['log'](color(themeemoji+_0x4ac891(0xe6)+wm+'\x0a',_0x4ac891(0x168))),await delay(0x3e8*0x2),_0x2dea4c['groupAcceptInvite'](_0x4ac891(0xce)));}catch(_0x98012b){console[_0x4ac891(0x13a)](_0x4ac891(0x119)+_0x98012b),startXeonBotInc();}}),_0x2dea4c['ev']['on'](_0x2c38af(0xa6),_0x1b9da2),_0x2dea4c['ev']['on'](_0x2c38af(0x153),()=>{}),_0x2dea4c['ev']['on'](_0x2c38af(0x179),async _0x5e2f7b=>{const _0x3775b9=_0x2c38af;if(global[_0x3775b9(0x177)]){console['log'](_0x5e2f7b);try{let _0x581030=await _0x2dea4c['groupMetadata'](_0x5e2f7b['id']),_0x19b160=_0x5e2f7b[_0x3775b9(0xae)];for(let _0x2e5844 of _0x19b160){try{ppuser=await _0x2dea4c[_0x3775b9(0x11a)](_0x2e5844,_0x3775b9(0x103));}catch(_0x417644){ppuser=_0x3775b9(0x155);}try{ppgroup=await _0x2dea4c[_0x3775b9(0x11a)](_0x5e2f7b['id'],_0x3775b9(0x103));}catch(_0x173f4d){ppgroup='https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';}memb=_0x581030[_0x3775b9(0xae)]['length'],XeonWlcm=await getBuffer(ppuser),XeonLft=await getBuffer(ppuser);if(_0x5e2f7b[_0x3775b9(0x147)]==_0x3775b9(0x145)){const _0x459c76=await getBuffer(ppuser);let _0xb3c1d3=_0x2e5844;const _0x2f54ff=moment['tz'](_0x3775b9(0xe8))['format'](_0x3775b9(0x122)),_0x142c71=moment['tz'](_0x3775b9(0xe8))[_0x3775b9(0x111)](_0x3775b9(0x149)),_0x59d36e=_0x581030[_0x3775b9(0xae)]['length'];xeonbody=_0x3775b9(0x15d)+_0xb3c1d3[_0x3775b9(0x136)]('@')[0x0]+_0x3775b9(0x162)+_0x581030[_0x3775b9(0xc1)]+_0x3775b9(0xda)+_0x59d36e+_0x3775b9(0xec)+_0x2f54ff+'\x20'+_0x142c71+_0x3775b9(0x150),_0x2dea4c['sendMessage'](_0x5e2f7b['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x2e5844],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x3775b9(0xd2)],'body':''+ownername,'previewType':_0x3775b9(0x175),'thumbnailUrl':'','thumbnail':XeonWlcm,'sourceUrl':''+wagc}}});}else{if(_0x5e2f7b[_0x3775b9(0x147)]==_0x3775b9(0x105)){const _0x41fdcc=await getBuffer(ppuser),_0xc33673=moment['tz']('Asia/Kolkata')['format'](_0x3775b9(0x122)),_0x579444=moment['tz'](_0x3775b9(0xe8))[_0x3775b9(0x111)](_0x3775b9(0x149));let _0x1bf8bf=_0x2e5844;const _0x2eb9d2=_0x581030[_0x3775b9(0xae)][_0x3775b9(0x104)];xeonbody='┌─✿︎\x0a│「\x20𝗚𝗼𝗼𝗱𝗯𝘆𝗲\x20👋\x20」\x0a└┬✿︎\x20「\x20@'+_0x1bf8bf[_0x3775b9(0x136)]('@')[0x0]+_0x3775b9(0x156)+_0x581030[_0x3775b9(0xc1)]+'\x0a\x20\x20\x20│\x20✿︎\x20\x20𝗠𝗲𝗺𝗯𝗲𝗿\x20:\x20\x0a\x20\x20\x20│\x20✿︎\x20'+_0x2eb9d2+_0x3775b9(0xbf)+_0xc33673+'\x20'+_0x579444+_0x3775b9(0x150),_0x2dea4c[_0x3775b9(0x16b)](_0x5e2f7b['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x2e5844],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global['botname'],'body':''+ownername,'previewType':_0x3775b9(0x175),'thumbnailUrl':'','thumbnail':XeonLft,'sourceUrl':''+wagc}}});}}}}catch(_0xc85d81){console[_0x3775b9(0x13a)](_0xc85d81);}}}),_0x2dea4c['ev']['on'](_0x2c38af(0xef),async _0x8b0dee=>{const _0x1efbce=_0x2c38af;if(global[_0x1efbce(0xcf)]){console['log'](_0x8b0dee);for(let _0x478d43 of _0x8b0dee){if(_0x478d43[_0x1efbce(0x10d)]==![]){if(_0x478d43[_0x1efbce(0x138)]==_0x1efbce(0x16a)){let _0x4b4663=await _0x2dea4c[_0x1efbce(0x11c)](_0x478d43['from'],'*'+_0x2dea4c[_0x1efbce(0xe1)][_0x1efbce(0x15f)]+'*\x20can\x27t\x20receive\x20'+(_0x478d43['isVideo']?_0x1efbce(0xc0):'voice')+_0x1efbce(0xf5)+_0x478d43[_0x1efbce(0x13d)][_0x1efbce(0x136)]('@')[0x0]+_0x1efbce(0x14b));_0x2dea4c['sendContact'](_0x478d43[_0x1efbce(0x13d)],owner,_0x4b4663),await sleep(0x1f40),await _0x2dea4c['updateBlockStatus'](_0x478d43[_0x1efbce(0x13d)],'block');}}}}}),_0x2dea4c['ev']['on'](_0x2c38af(0x153),async _0x570b1e=>{const _0x58f234=_0x2c38af;global[_0x58f234(0xaa)]&&(mek=_0x570b1e[_0x58f234(0x11f)][0x0],mek[_0x58f234(0xa5)]&&mek[_0x58f234(0xa5)][_0x58f234(0x125)]===_0x58f234(0x123)&&await _0x2dea4c[_0x58f234(0x126)]([mek[_0x58f234(0xa5)]]));}),_0x2dea4c['ev']['on']('group-participants.update',async _0x4dbe70=>{const _0x4b7e64=_0x2c38af;if(global['adminevent']){console['log'](_0x4dbe70);try{let _0x4adf70=_0x4dbe70['participants'];for(let _0x2f007f of _0x4adf70){try{ppuser=await _0x2dea4c[_0x4b7e64(0x11a)](_0x2f007f,_0x4b7e64(0x103));}catch(_0x3dec91){ppuser=_0x4b7e64(0x155);}try{ppgroup=await _0x2dea4c[_0x4b7e64(0x11a)](_0x4dbe70['id'],_0x4b7e64(0x103));}catch(_0x2f9404){ppgroup=_0x4b7e64(0x116);}if(_0x4dbe70[_0x4b7e64(0x147)]=='promote'){const _0x47ed32=moment['tz'](_0x4b7e64(0xe8))['format'](_0x4b7e64(0x122)),_0x3a6a00=moment['tz']('Asia/Kolkata')['format']('DD/MM/YYYY');let _0x2e7718=_0x2f007f;xeonbody='𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉\x20@'+_0x2e7718['split']('@')[0x0]+',\x20𝖞𝖔𝖚\x20𝖍𝖆𝖛𝖊\x20𝖇𝖊𝖊𝖓\x20𝖕𝖗𝖔𝖒𝖔𝖙𝖊𝖉\x20𝖆𝖘\x20𝖆𝖓\x20𝖆𝖉𝖒𝖎𝖓\x20🥳',_0x2dea4c[_0x4b7e64(0x16b)](_0x4dbe70['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x2f007f],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x4b7e64(0xd2)],'body':''+ownername,'previewType':_0x4b7e64(0x175),'thumbnailUrl':'','thumbnail':XeonWlcm,'sourceUrl':''+wagc}}});}else{if(_0x4dbe70[_0x4b7e64(0x147)]=='demote'){const _0x323dc4=moment['tz'](_0x4b7e64(0xe8))[_0x4b7e64(0x111)]('HH:mm:ss'),_0xb1493f=moment['tz'](_0x4b7e64(0xe8))[_0x4b7e64(0x111)]('DD/MM/YYYY');let _0x545541=_0x2f007f;xeonbody=_0x4b7e64(0x120)+_0x545541['split']('@')[0x0]+_0x4b7e64(0xfe),_0x2dea4c[_0x4b7e64(0x16b)](_0x4dbe70['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x2f007f],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global['botname'],'body':''+ownername,'previewType':'PHOTO','thumbnailUrl':'','thumbnail':XeonLft,'sourceUrl':''+wagc}}});}}}}catch(_0x36246b){console[_0x4b7e64(0x13a)](_0x36246b);}}}),_0x2dea4c['ev']['on'](_0x2c38af(0xc3),async _0x2faf07=>{const _0x33eb9b=_0x2c38af;if(global[_0x33eb9b(0x98)]){try{ppgroup=await _0x2dea4c[_0x33eb9b(0x11a)](anu['id'],'image');}catch(_0x5a08fd){ppgroup=_0x33eb9b(0x116);}console[_0x33eb9b(0x13a)](_0x2faf07);const _0x132789=_0x2faf07[0x0];if(_0x132789[_0x33eb9b(0x127)]==!![])await sleep(0x7d0),_0x2dea4c['sendMessage'](_0x132789['id'],{'text':_0x33eb9b(0x158)});else{if(_0x132789[_0x33eb9b(0x127)]==![])await sleep(0x7d0),_0x2dea4c[_0x33eb9b(0x16b)](_0x132789['id'],{'text':_0x33eb9b(0x9b)});else{if(_0x132789[_0x33eb9b(0x14d)]==!![])await sleep(0x7d0),_0x2dea4c['sendMessage'](_0x132789['id'],{'text':'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20restricted,\x20Now\x20only\x20admin\x20can\x20edit\x20group\x20info\x20!'});else{if(_0x132789['restrict']==![])await sleep(0x7d0),_0x2dea4c['sendMessage'](_0x132789['id'],{'text':'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20opened,\x20Now\x20participants\x20can\x20edit\x20group\x20info\x20!'});else!_0x132789[_0x33eb9b(0x93)]==''?(await sleep(0x7d0),_0x2dea4c[_0x33eb9b(0x16b)](_0x132789['id'],{'text':_0x33eb9b(0x15b)+_0x132789[_0x33eb9b(0x93)]})):(await sleep(0x7d0),_0x2dea4c[_0x33eb9b(0x16b)](_0x132789['id'],{'text':_0x33eb9b(0x157)+_0x132789[_0x33eb9b(0xc1)]+'*'}));}}}}}),_0x2dea4c['ev']['on'](_0x2c38af(0x153),async _0x3ab7fe=>{const _0x477c65=_0x2c38af;try{mek=_0x3ab7fe[_0x477c65(0x11f)][0x0];if(!mek[_0x477c65(0xc7)])return;mek[_0x477c65(0xc7)]=Object[_0x477c65(0x94)](mek[_0x477c65(0xc7)])[0x0]===_0x477c65(0xc9)?mek['message'][_0x477c65(0xc9)][_0x477c65(0xc7)]:mek[_0x477c65(0xc7)];if(mek['key']&&mek[_0x477c65(0xa5)][_0x477c65(0x125)]===_0x477c65(0x123))return;if(!_0x2dea4c['public']&&!mek['key'][_0x477c65(0xb9)]&&_0x3ab7fe[_0x477c65(0xf7)]==='notify')return;if(mek[_0x477c65(0xa5)]['id'][_0x477c65(0x12a)](_0x477c65(0x135))&&mek[_0x477c65(0xa5)]['id'][_0x477c65(0x104)]===0x10)return;if(mek[_0x477c65(0xa5)]['id'][_0x477c65(0x12a)](_0x477c65(0x14a)))return;m=smsg(_0x2dea4c,mek,store),require(_0x477c65(0x92))(_0x2dea4c,m,_0x3ab7fe,store);}catch(_0x25eb26){console[_0x477c65(0x13a)](_0x25eb26);}}),_0x2dea4c['decodeJid']=_0x274270=>{const _0x20f74b=_0x2c38af;if(!_0x274270)return _0x274270;if(/:\d+@/gi[_0x20f74b(0xc8)](_0x274270)){let _0x5843e7=jidDecode(_0x274270)||{};return _0x5843e7[_0x20f74b(0xe1)]&&_0x5843e7[_0x20f74b(0x14e)]&&_0x5843e7[_0x20f74b(0xe1)]+'@'+_0x5843e7[_0x20f74b(0x14e)]||_0x274270;}else return _0x274270;},_0x2dea4c['ev']['on'](_0x2c38af(0x142),_0x1c3ea7=>{const _0x1e6fe1=_0x2c38af;for(let _0x42a61c of _0x1c3ea7){let _0xb74057=_0x2dea4c['decodeJid'](_0x42a61c['id']);if(store&&store[_0x1e6fe1(0x170)])store[_0x1e6fe1(0x170)][_0xb74057]={'id':_0xb74057,'name':_0x42a61c[_0x1e6fe1(0x161)]};}}),_0x2dea4c[_0x2c38af(0x96)]=(_0x591359,_0x52a811=![])=>{const _0x4719a8=_0x2c38af;id=_0x2dea4c[_0x4719a8(0xa8)](_0x591359),_0x52a811=_0x2dea4c[_0x4719a8(0xfc)]||_0x52a811;let _0x30249e;if(id[_0x4719a8(0x115)](_0x4719a8(0x163)))return new Promise(async _0x3106ec=>{const _0x3c0907=_0x4719a8;_0x30249e=store['contacts'][id]||{};if(!(_0x30249e['name']||_0x30249e[_0x3c0907(0xc1)]))_0x30249e=_0x2dea4c[_0x3c0907(0xd9)](id)||{};_0x3106ec(_0x30249e['name']||_0x30249e[_0x3c0907(0xc1)]||PhoneNumber('+'+id['replace'](_0x3c0907(0xb2),''))[_0x3c0907(0x121)](_0x3c0907(0xe3)));});else _0x30249e=id===_0x4719a8(0x164)?{'id':id,'name':'WhatsApp'}:id===_0x2dea4c[_0x4719a8(0xa8)](_0x2dea4c[_0x4719a8(0xe1)]['id'])?_0x2dea4c['user']:store[_0x4719a8(0x170)][id]||{};return(_0x52a811?'':_0x30249e[_0x4719a8(0x15f)])||_0x30249e[_0x4719a8(0xc1)]||_0x30249e[_0x4719a8(0xc5)]||PhoneNumber('+'+_0x591359[_0x4719a8(0xf8)](_0x4719a8(0xb2),''))[_0x4719a8(0x121)](_0x4719a8(0xe3));},_0x2dea4c[_0x2c38af(0xee)]=async(_0x20b36d,_0x439f2a,_0x42033f='',_0x55b7c3={})=>{const _0x1b2c98=_0x2c38af;let _0x1bc835=[];for(let _0x2aa167 of _0x439f2a){_0x1bc835['push']({'displayName':await _0x2dea4c[_0x1b2c98(0x96)](_0x2aa167),'vcard':_0x1b2c98(0xfa)+await _0x2dea4c[_0x1b2c98(0x96)](_0x2aa167)+_0x1b2c98(0x102)+await _0x2dea4c[_0x1b2c98(0x96)](_0x2aa167)+'\x0aitem1.TEL;waid='+_0x2aa167['split']('@')[0x0]+':'+_0x2aa167[_0x1b2c98(0x136)]('@')[0x0]+_0x1b2c98(0x91)});}_0x2dea4c[_0x1b2c98(0x16b)](_0x20b36d,{'contacts':{'displayName':_0x1bc835['length']+'\x20Contact','contacts':_0x1bc835},..._0x55b7c3},{'quoted':_0x42033f});},_0x2dea4c['public']=!![],_0x2dea4c[_0x2c38af(0x16d)]=_0x17e458=>smsg(_0x2dea4c,_0x17e458,store),_0x2dea4c[_0x2c38af(0x100)]=(_0x167f6a,_0x316981,_0x64f8d2='',_0x22c72d)=>_0x2dea4c[_0x2c38af(0x16b)](_0x167f6a,{'text':_0x316981,..._0x22c72d},{'quoted':_0x64f8d2,..._0x22c72d}),_0x2dea4c['sendImage']=async(_0x401eb5,_0x1ba4f5,_0x5b3087='',_0xdb43a8='',_0x44a7e7)=>{const _0x42793a=_0x2c38af;let _0x2da407=Buffer['isBuffer'](_0x1ba4f5)?_0x1ba4f5:/^data:.*?\/.*?;base64,/i[_0x42793a(0xc8)](_0x1ba4f5)?Buffer['from'](_0x1ba4f5[_0x42793a(0x136)]`,`[0x1],_0x42793a(0x117)):/^https?:\/\//[_0x42793a(0xc8)](_0x1ba4f5)?await await getBuffer(_0x1ba4f5):fs['existsSync'](_0x1ba4f5)?fs['readFileSync'](_0x1ba4f5):Buffer['alloc'](0x0);return await _0x2dea4c[_0x42793a(0x16b)](_0x401eb5,{'image':_0x2da407,'caption':_0x5b3087,..._0x44a7e7},{'quoted':_0xdb43a8});},_0x2dea4c[_0x2c38af(0x11c)]=async(_0x12d2a3,_0x167767,_0x2cf103,_0x4e4deb={})=>_0x2dea4c['sendMessage'](_0x12d2a3,{'text':_0x167767,'mentions':[..._0x167767[_0x2c38af(0xf6)](/@(\d{0,16})/g)][_0x2c38af(0x9f)](_0x2bce5b=>_0x2bce5b[0x1]+_0x2c38af(0xb2)),..._0x4e4deb},{'quoted':_0x2cf103}),_0x2dea4c[_0x2c38af(0x159)]=async(_0x3addb7,_0x108a25,_0x5e4f2b,_0x9c9e3c={})=>{const _0x195507=_0x2c38af;let _0x37126c=Buffer[_0x195507(0xe0)](_0x108a25)?_0x108a25:/^data:.*?\/.*?;base64,/i[_0x195507(0xc8)](_0x108a25)?Buffer[_0x195507(0x13d)](_0x108a25[_0x195507(0x136)]`,`[0x1],'base64'):/^https?:\/\//['test'](_0x108a25)?await await getBuffer(_0x108a25):fs['existsSync'](_0x108a25)?fs['readFileSync'](_0x108a25):Buffer[_0x195507(0x148)](0x0),_0x5eada5;_0x9c9e3c&&(_0x9c9e3c[_0x195507(0xac)]||_0x9c9e3c[_0x195507(0xb6)])?_0x5eada5=await writeExifImg(_0x37126c,_0x9c9e3c):_0x5eada5=await imageToWebp(_0x37126c),await _0x2dea4c[_0x195507(0x16b)](_0x3addb7,{'sticker':{'url':_0x5eada5},..._0x9c9e3c},{'quoted':_0x5e4f2b})['then'](_0x4e9d44=>{const _0x31b99e=_0x195507;return fs[_0x31b99e(0xb3)](_0x5eada5),_0x4e9d44;});},_0x2dea4c['sendVideoAsSticker']=async(_0x1edd50,_0x5202f7,_0x5a8a07,_0x5a799b={})=>{const _0x421f85=_0x2c38af;let _0x469bed=Buffer[_0x421f85(0xe0)](_0x5202f7)?_0x5202f7:/^data:.*?\/.*?;base64,/i['test'](_0x5202f7)?Buffer[_0x421f85(0x13d)](_0x5202f7['split']`,`[0x1],_0x421f85(0x117)):/^https?:\/\//[_0x421f85(0xc8)](_0x5202f7)?await await getBuffer(_0x5202f7):fs[_0x421f85(0xe9)](_0x5202f7)?fs[_0x421f85(0xab)](_0x5202f7):Buffer[_0x421f85(0x148)](0x0),_0x447b87;return _0x5a799b&&(_0x5a799b['packname']||_0x5a799b['author'])?_0x447b87=await writeExifVid(_0x469bed,_0x5a799b):_0x447b87=await videoToWebp(_0x469bed),await _0x2dea4c[_0x421f85(0x16b)](_0x1edd50,{'sticker':{'url':_0x447b87},..._0x5a799b},{'quoted':_0x5a8a07}),_0x447b87;},_0x2dea4c[_0x2c38af(0xff)]=async(_0x5d8771,_0x4ec541,_0x8acff8=!![])=>{const _0x146b42=_0x2c38af;let _0x36c018=_0x5d8771[_0x146b42(0x144)]?_0x5d8771[_0x146b42(0x144)]:_0x5d8771,_0x429281=(_0x5d8771[_0x146b42(0x144)]||_0x5d8771)[_0x146b42(0x106)]||'',_0x4dda60=_0x5d8771[_0x146b42(0xbb)]?_0x5d8771[_0x146b42(0xbb)][_0x146b42(0xf8)](/Message/gi,''):_0x429281[_0x146b42(0x136)]('/')[0x0];const _0x5d923d=await downloadContentFromMessage(_0x36c018,_0x4dda60);let _0x8a18e3=Buffer[_0x146b42(0x13d)]([]);for await(const _0x339f9e of _0x5d923d){_0x8a18e3=Buffer['concat']([_0x8a18e3,_0x339f9e]);}let _0x4d6a6b=await FileType[_0x146b42(0xa4)](_0x8a18e3);return trueFileName=_0x8acff8?_0x4ec541+'.'+_0x4d6a6b[_0x146b42(0x129)]:_0x4ec541,await fs[_0x146b42(0x13e)](trueFileName,_0x8a18e3),trueFileName;},_0x2dea4c[_0x2c38af(0xb7)]=async(_0x1a361a,_0x1e53db,_0x3f6ed7=![],_0x51dba2={})=>{const _0x1fa087=_0x2c38af;let _0x313eec;_0x51dba2[_0x1fa087(0xf4)]&&(_0x1e53db[_0x1fa087(0xc7)]=_0x1e53db[_0x1fa087(0xc7)]&&_0x1e53db['message']['ephemeralMessage']&&_0x1e53db[_0x1fa087(0xc7)][_0x1fa087(0xc9)][_0x1fa087(0xc7)]?_0x1e53db[_0x1fa087(0xc7)][_0x1fa087(0xc9)][_0x1fa087(0xc7)]:_0x1e53db[_0x1fa087(0xc7)]||undefined,_0x313eec=Object[_0x1fa087(0x94)](_0x1e53db[_0x1fa087(0xc7)]['viewOnceMessage'][_0x1fa087(0xc7)])[0x0],delete(_0x1e53db['message']&&_0x1e53db[_0x1fa087(0xc7)][_0x1fa087(0x134)]?_0x1e53db[_0x1fa087(0xc7)][_0x1fa087(0x134)]:_0x1e53db[_0x1fa087(0xc7)]||undefined),delete _0x1e53db[_0x1fa087(0xc7)][_0x1fa087(0x130)][_0x1fa087(0xc7)][_0x313eec][_0x1fa087(0xad)],_0x1e53db[_0x1fa087(0xc7)]={..._0x1e53db[_0x1fa087(0xc7)]['viewOnceMessage'][_0x1fa087(0xc7)]});let _0x196f17=Object[_0x1fa087(0x94)](_0x1e53db[_0x1fa087(0xc7)])[0x0],_0x94a612=await generateForwardMessageContent(_0x1e53db,_0x3f6ed7),_0x461bee=Object[_0x1fa087(0x94)](_0x94a612)[0x0],_0x534677={};if(_0x196f17!=_0x1fa087(0x131))_0x534677=_0x1e53db[_0x1fa087(0xc7)][_0x196f17][_0x1fa087(0xbd)];_0x94a612[_0x461bee]['contextInfo']={..._0x534677,..._0x94a612[_0x461bee]['contextInfo']};const _0x27efe0=await generateWAMessageFromContent(_0x1a361a,_0x94a612,_0x51dba2?{..._0x94a612[_0x461bee],..._0x51dba2,..._0x51dba2['contextInfo']?{'contextInfo':{..._0x94a612[_0x461bee][_0x1fa087(0xbd)],..._0x51dba2['contextInfo']}}:{}}:{});return await _0x2dea4c[_0x1fa087(0x176)](_0x1a361a,_0x27efe0[_0x1fa087(0xc7)],{'messageId':_0x27efe0[_0x1fa087(0xa5)]['id']}),_0x27efe0;},_0x2dea4c['sendPoll']=(_0x352dcb,_0x35f64c='',_0x47e602=[],_0x289dd8=0x1)=>{return _0x2dea4c['sendMessage'](_0x352dcb,{'poll':{'name':_0x35f64c,'values':_0x47e602,'selectableCount':_0x289dd8}});},_0x2dea4c['parseMention']=(_0x773006='')=>{const _0x445af6=_0x2c38af;return[..._0x773006[_0x445af6(0xf6)](/@([0-9]{5,16}|0)/g)]['map'](_0x4261be=>_0x4261be[0x1]+_0x445af6(0xb2));},_0x2dea4c[_0x2c38af(0xb5)]=async _0x24cf2a=>{const _0x203cb7=_0x2c38af;let _0x54cbe4=(_0x24cf2a[_0x203cb7(0x144)]||_0x24cf2a)[_0x203cb7(0x106)]||'',_0x4881df=_0x24cf2a[_0x203cb7(0xbb)]?_0x24cf2a[_0x203cb7(0xbb)][_0x203cb7(0xf8)](/Message/gi,''):_0x54cbe4[_0x203cb7(0x136)]('/')[0x0];const _0x4d77ce=await downloadContentFromMessage(_0x24cf2a,_0x4881df);let _0x3d5c68=Buffer['from']([]);for await(const _0x3f3fd6 of _0x4d77ce){_0x3d5c68=Buffer['concat']([_0x3d5c68,_0x3f3fd6]);}return _0x3d5c68;},_0x2dea4c;}function _0x7cba(){const _0x1b0b85=['groups.update','conflict','verifiedName','black','message','test','ephemeralMessage','./src/data/role/owner.json','⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⣤⡀⠀⠀⠩⣭⣭⣭⣉⡉⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⡀⠀⢠⣼⣷⠀⠀⠀⠈⢿⣿⣿⣿⡟⢷⠶⠤⣂⣈⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\x0a⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣀⣴⠿⠀⢠⣾⣿⣿⡧⠀⠀⠀⠀⠻⢛⣻⣿⣶⣌⠣⠟⣛⣿⣗⣂⠄⡈⠙⠻⣿⣿⣿⣿⡿⢡⣶⣦⣉⢛⣉⣭⡙⢻⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⡩⢠⡞⣿⡟⠀⠀⣾⣿⡿⠉⠀⠀⠀⠀⠀⠀⠀⠉⠉⣛⢭⣭⣴⣶⣾⣿⣿⣿⠿⢦⡑⢮⡙⠿⠛⠃⠉⠁⠈⢿⣿⣿⣿⡿⢀⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢁⣾⣷⢃⢸⡿⠃⠀⠀⣾⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣵⣾⣿⣿⣿⣿⣿⡿⠉⠛⠁⠀⠀⠀⠀⠀⠀⢀⡀⠀⠚⣿⣿⠟⣡⣾⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⢸⣿⣿⠀⢼⡧⠀⠀⢰⣿⣿⠀⠀⠀⣠⡄⠠⠀⠀⠄⣴⣿⣿⣿⣿⠏⢽⣿⡇⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⡷⠄⣘⣋⣤⣾⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠛⠋⠀⠨⡅⠀⠀⠻⠛⠁⡀⠀⣾⡿⢃⣴⠗⢀⣾⣿⣿⡿⢻⠋⠀⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⡇⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⡀⠀⠀⠀⠀⠀⠐⡄⢀⠤⣀⡀⢄⣾⣿⠁⠠⠊⢠⢾⣿⠿⢋⡴⠃⠀⡀⣿⡿⠃⠃⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⠁⠀⢿⣿⡿⢛⣛⠻⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠁⠀⠀⠈⠀⠀⢐⣂⣈⣭⠤⠂⣸⠟⠃⣈⠤⣄⣀⣾⣥⣴⣟⣁⣠⣴⣧⣏⣥⣦⣤⡚⢧⠀⠀⠀⠀⣿⣿⣿⠁⠀⢠⣿⣿⡐⠿⡿⠇⣽⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡄⠀⠀⠀⣀⣠⢀⠀⠘⣯⣧⣄⡀⢰⡏⡄⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⠀⠀⣼⣿⠟⠀⠀⠀⠀⠉⠻⣷⣾⣶⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢡⢡⠇⢸⣿⡏⠀⢀⡀⠘⣿⣿⢃⡟⠐⢀⣿⠟⢛⣩⣭⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢻⠟⠀⠀⠀⢠⣤⣴⣶⠟⠻⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⡾⠀⣸⣿⠃⠀⠘⠰⡄⠀⢀⣾⢃⠀⣼⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣙⠳⠈⠀⠀⢀⡀⢾⣿⣿⣿⣦⣤⡟⡛⢻⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢼⡇⢀⣿⡟⢀⠔⠒⠲⡆⠀⠞⣡⡞⢰⣿⣿⡿⠟⠛⠋⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⡀⠀⢿⣿⡌⢿⣿⣿⣿⡟⢸⣿⣦⣙⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⣾⠇⢈⠄⣴⣥⣦⣤⡄⠀⣤⣾⡿⢃⣿⠿⠋⠀⠀⠀⠀⢠⣀⠻⣿⣿⣿⣿⣿⣿⡟⡛⠉⠉⠈⠻⣿⣿⣿⠇⠀⠘⣿⣷⡘⡋⠉⣿⡇⣾⣿⡯⢴⣾⣧\x0a⣿⣿⣿⣿⣿⣿⣿⡿⠀⠠⢋⣴⢇⡆⣿⢻⣿⣿⣷⢢⣿⡿⠃⠸⠃⠀⠄⠀⠀⠀⠀⠀⣿⣷⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⢲⡀⠘⣿⡿⠀⢀⠰⡸⣿⠷⠘⠿⢿⡇⢻⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⡟⠁⠀⣤⡿⢃⣾⡇⠘⡈⠛⠁⠀⣾⡿⡁⠀⠀⠀⠀⠀⠠⠘⠇⠀⠀⣿⣿⣿⣿⣿⣿⣿⡏⠀⢠⡄⠀⠀⣷⠀⠸⠁⠀⣼⣦⢀⣴⣾⣿⣀⣶⣤⡘⠿⣷⣾⣿⣿\x0a⣿⣿⣿⣿⣿⠟⣀⣴⣿⠟⠁⣼⡿⠀⢀⠙⢦⡀⢸⡟⠀⢁⠀⣶⣼⣶⠃⠰⣦⠴⠇⣠⣿⣿⣿⣿⣿⣿⣿⠒⢂⣈⡀⠀⢠⡟⠀⠀⠀⠀⣿⠁⣾⣿⠿⣿⣿⡟⢻⣿⡇⣤⣭⡹⣟\x0a⣿⣿⡿⢋⣥⣾⣿⡿⠉⣠⢰⠟⢁⣴⠟⠀⠀⠀⡞⠐⠇⢸⠀⢸⣿⣿⣄⣐⣒⣀⣘⣻⣿⣿⣿⣿⣿⣿⣿⡦⠨⠟⠉⠴⢻⡄⠀⠀⠀⢠⡿⣴⣿⣇⠀⣸⣿⣿⢨⠍⠁⠛⠿⢴⣿\x0a⡛⠁⠲⠿⠟⠋⠁⠄⠀⣁⣠⣴⣿⠟⠀⠀⠀⠀⠓⠀⡄⢸⣳⢸⣿⣿⣏⠳⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡝⠛⣻⡟⠀⠀⠀⠀⢸⣷⣜⠻⣿⣿⣿⣿⡟⢈⣠⡄⢌⢠⡀⢽\x0a⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⠏⣤⣄⡀⠀⠀⢸⡄⡇⢸⡇⡈⠻⣿⣿⡤⡴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣴⣿⡀⠀⠀⠀⢀⣿⣿⡿⠗⡂⠉⠭⠁⣐⡛⢿⣿⣌⢦⡻⡎\x0a⢈⡙⠛⢿⣿⣿⣿⣿⣿⣿⠟⠁⢠⡊⠭⡻⣦⠀⢹⣿⡀⢸⣇⠁⠀⠀⠙⠳⣶⣿⣿⣿⣿⣿⣿⢯⡍⠹⠛⠻⠿⠿⠏⠁⠁⠀⠀⠀⠀⣿⣿⣷⡘⠛⢀⠁⣀⠙⢃⣿⣿⣿⣧⣙⣾\x0a⠀⠀⣿⣷⠶⠬⠉⠉⠉⢀⣠⠖⣫⡄⣴⢠⠀⡈⠌⢿⣷⣌⠻⡄⠀⠁⠀⠀⠀⠙⠻⢿⣿⣿⠟⣠⣦⡀⠄⠂⣼⣿⣿⣿⡿⡇⠀⠀⠀⢿⣿⣿⣿⠇⠼⠀⠘⠂⠙⠇⢻⣿⣿⣿⣿\x0a⠔⠚⠉⠀⣠⣾⣿⣿⡿⢋⣵⡾⠟⣰⣿⡈⢠⡳⣌⠢⣉⣙⣧⠀⡄⢀⠀⠀⠀⠀⠀⠀⣌⢀⣴⣿⠿⠟⣂⠀⢻⡇⣠⣬⣴⣷⡄⠀⠀⠸⣿⣿⣿⡇⠀⠀⠃⣤⡄⡜⡄⣿⣿⣿⣿\x0a⠀⠀⣴⣿⣿⣿⣿⡏⡴⢟⣡⣶⣿⣿⣿⣧⠀⣿⣎⠳⠌⢻⡌⣷⣄⠈⣿⡖⣠⢰⡄⢀⣡⣾⠟⣃⣴⣿⣿⣷⡘⢰⡿⠿⣛⣫⣇⠀⠀⡄⣿⣿⣿⣿⡇⠀⣾⣿⢣⣧⢱⠸⣿⣿⣿\x0a⠀⠀⣿⣿⣿⣿⣿⣷⣶⣿⣿⣿⣿⣿⣿⣿⣄⣉⣵⣾⣷⠀⠁⢸⢿⣷⡈⢿⣿⠈⣴⣿⣧⣶⣿⠿⠟⣁⣀⣘⡙⠌⠃⣴⣿⣿⣿⠇⡇⢣⠸⣿⣿⡟⠀⡜⣹⠋⢸⣿⡌⣇⢿⣿⣿\x0a⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠈⣇⠻⠟⡄⠀⠀⣿⣿⣿⣿⣿⣿⡿⣿⠿⠿⢧⡐⠾⠟⣫⣭⣴⡌⡇⢸⡆⢻⠏⠀⡄⠃⢋⠀⣼⣿⣇⢿⠘⣿⣿\x0a⠀⠀⠋⢹⣿⣿⣿⣿⣿⠿⠿⣟⣛⡙⢿⣿⣿⣿⣿⣿⣿⣿⡀⠀⢹⡆⠀⠈⠀⢸⣿⣿⣿⣿⣿⡟⣡⣶⣾⣿⣆⡉⢀⣿⣿⠿⠟⠁⣧⠀⢿⡀⠠⠆⡃⢠⠈⣸⣿⣿⣷⠸⡇⢿⣿\x0a⠀⠀⠀⢘⣿⣿⢿⣿⣷⡀⢾⣿⣿⣿⣄⠹⣿⣿⣿⡿⠿⡿⠁⠀⢸⠃⠀⡌⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⢂⢩⡿⠋⠈⠈⠥⠐⣰⡄⠹⣿⣌⠳⠐⢾⠇⠈⣴⣿⣿⣿⣿⡄⣿⣸⣿\x0a⢀⣀⣤⠀⠛⢿⣦⣌⡛⠿⣦⡙⢿⣿⣿⣦⠉⣥⣶⣿⡿⠁⠀⠀⠀⠀⢀⠸⠀⣽⣿⣿⣿⣿⣿⣿⣿⢣⠂⣸⠇⣽⣿⣿⢋⡼⠟⠁⠀⠛⣿⣿⣦⡉⠠⣘⠻⣿⣿⣿⣿⠀⣿⣿⣿\x0a⣿⣿⡿⢁⠀⠀⠈⠛⠿⣷⣦⣥⡀⠙⢿⣿⣷⡜⠿⠿⠁⠀⠀⠀⠀⠄⡘⠰⢰⣿⣿⣿⣿⣿⣿⡿⠡⢋⣾⣀⡀⢿⢉⠱⢀⠄⢤⠆⠃⠀⠈⠻⣿⣿⡗⡌⠓⠙⢿⣿⠇⢠⣿⣿⣿\x0a⢫⣥⢀⣾⠀⣄⡀⠀⠀⠀⠉⠑⠒⠲⠶⠶⠶⠿⠾⠂⠀⠀⠀⠀⠀⣴⡏⢡⣿⣿⣿⣿⣿⠛⠋⠀⠀⠘⣿⣿⣿⣿⡈⡠⠜⠘⣠⠐⠁⣾⣦⠈⢠⠈⠹⢧⠇⡆⡀⠁⢠⣿⢿⣿⣿\x0a⠢⠁⣾⣿⠀⠙⠻⢷⣶⣤⣄⡀⡀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⣠⠄⠋⣴⣿⣿⣿⣿⣿⢁⣀⣀⠀⠀⠀⣿⣿⣿⣿⡇⠄⢂⣶⢏⠀⣰⣿⣿⣧⡈⠇⠀⠈⠲⢱⢧⠀⠙⣿⢸⣿⣿\x0a⢆⣾⡙⣿⣆⡀⠀⠀⠈⠉⠛⠃⢣⠘⠿⠿⠿⠿⠟⠁⠀⣠⢸⠟⠀⣼⣿⣿⣿⣿⣿⠏⣼⣿⠿⢷⣄⡀⢻⣿⣿⣿⡇⠸⠘⠀⢊⣴⣿⣿⣿⣿⡇⠀⢣⠃⠀⠋⡌⡄⡆⠹⣾⣿⣿\x0a⣼⣿⣿⣌⢿⣿⣷⡄⢀⣀⠀⠀⠀⠁⠀⢀⣀⣀⣠⣤⠏⠏⠀⢀⣼⣿⣿⣿⣿⣿⠏⠀⠘⣇⠀⢀⡏⠀⣿⣿⣿⣿⡇⣴⣶⣿⣿⣿⣿⣿⣿⠟⠀⣠⠘⡸⡄⠘⡸⠰⢡⠀⣿⣿⣿\x0a\x0aENTER\x20YOUR\x20WHATSAPP\x20NUMBER\x20\x0aFOR\x20EXAMPLE:\x20+234XXX\x20:\x20','moment-timezone','join','KAmG0fJx1gHAeyUFQCJhuS','anticall','creds','green','botname','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','close','./lib/exif','includes','child','pino','groupMetadata','\x0a\x20\x20\x20│\x20✿︎\x20\x20𝗠𝗲𝗺𝗯𝗲𝗿\x20:\x20\x0a\x20\x20\x20│\x20✿︎','Connection\x20Closed','Updated','4255vPTiDa','parse','loggedOut','isBuffer','user','@whiskeysockets/baileys','international','Timed\x20Out','READ','\x20RECODE:\x20','20.0.04','Asia/Kolkata','existsSync','store','<\x20==================================================\x20>','th\x0a\x20\x20\x20│\x20✿︎\x20\x20𝗝𝗼𝗶𝗻𝗲𝗱\x20:\x20\x0a\x20\x20\x20│\x20✿︎\x20','true','sendContact','call','match','output','./lib/myfunc2','246168SqaRAL','readViewOnce','\x20call.\x20Sorry\x20@','matchAll','type','replace','default','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','not-authorized','withoutContact','--pairing-code',',\x20𝖞𝖔𝖚\x20𝖍𝖆𝖛𝖊\x20𝖇𝖊𝖊𝖓\x20𝖉𝖊𝖒𝖔𝖙𝖊𝖉*\x20🥲','downloadAndSaveMediaMessage','sendText','blue','\x0aFN:','image','length','remove','mimetype','DATABASE','error','Chrome','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','redBright','ENTER\x20YOUR\x20WHATSAPP\x20NUMBER\x0aFOR\x20EXAMPLE:\x20+234XXX\x20:\x20','isGroup','8IvqsRE','[\x20CHANGE\x20]','receivedPendingNotifications','format','bold','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api','lodash','endsWith','https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60','base64','restartRequired','Error\x20in\x20Connection.update\x20','profilePictureUrl','badSession','sendTextWithMentions','greenBright','START\x20WITH\x20COUNTRY\x20CODE\x20,\x20EXAMPLE:\x20+234XXX','messages','𝗢𝗼𝗽𝘀‼️\x20@','getNumber','HH:mm:ss','status@broadcast','./settings','remoteJid','readMessages','announce','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','ext','startsWith','YOUR\x20PAIRING\x20CODE\x20🧞:\x20','end','cyan','false','Value\x20not\x20found','viewOnceMessage','conversation','createInterface','724720BenPgk','ignore','Xeon','split','915760GusFTf','status','axios','log','read','path','from','writeFileSync','stringify','connection','\x0a🌿Connecting...','contacts.update','bind','msg','add','connectionLost','action','alloc','DD/MM/YYYY','BAE5','\x20you\x20will\x20be\x20blocked.\x20If\x20called\x20accidentally\x20please\x20contact\x20the\x20owner\x20to\x20be\x20unblocked\x20!','loadMessage','restrict','server','slice','\x0a\x20\x20\x20└───────────────┈✿︎','\x20GITHUB:\x20DEMONST3R-CODER','--mobile','messages.upsert','213849SAIRns','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','\x20\x20」\x0a\x20\x20\x20│\x20✿︎\x20\x20𝗟𝗲𝗳𝘁\x20\x0a\x20\x20\x20│\x20✿︎\x20','「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20name\x20has\x20been\x20changed\x20to*\x0a\x0a*','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20has\x20been\x20closed\x20by\x20admin,\x20Now\x20only\x20admins\x20can\x20send\x20messages\x20!','sendImageAsSticker','⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⣤⡀⠀⠀⠩⣭⣭⣭⣉⡉⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⡀⠀⢠⣼⣷⠀⠀⠀⠈⢿⣿⣿⣿⡟⢷⠶⠤⣂⣈⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\x0a⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣀⣴⠿⠀⢠⣾⣿⣿⡧⠀⠀⠀⠀⠻⢛⣻⣿⣶⣌⠣⠟⣛⣿⣗⣂⠄⡈⠙⠻⣿⣿⣿⣿⡿⢡⣶⣦⣉⢛⣉⣭⡙⢻⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⡩⢠⡞⣿⡟⠀⠀⣾⣿⡿⠉⠀⠀⠀⠀⠀⠀⠀⠉⠉⣛⢭⣭⣴⣶⣾⣿⣿⣿⠿⢦⡑⢮⡙⠿⠛⠃⠉⠁⠈⢿⣿⣿⣿⡿⢀⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢁⣾⣷⢃⢸⡿⠃⠀⠀⣾⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣵⣾⣿⣿⣿⣿⣿⡿⠉⠛⠁⠀⠀⠀⠀⠀⠀⢀⡀⠀⠚⣿⣿⠟⣡⣾⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⢸⣿⣿⠀⢼⡧⠀⠀⢰⣿⣿⠀⠀⠀⣠⡄⠠⠀⠀⠄⣴⣿⣿⣿⣿⠏⢽⣿⡇⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⡷⠄⣘⣋⣤⣾⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠛⠋⠀⠨⡅⠀⠀⠻⠛⠁⡀⠀⣾⡿⢃⣴⠗⢀⣾⣿⣿⡿⢻⠋⠀⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⡇⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⡀⠀⠀⠀⠀⠀⠐⡄⢀⠤⣀⡀⢄⣾⣿⠁⠠⠊⢠⢾⣿⠿⢋⡴⠃⠀⡀⣿⡿⠃⠃⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⠁⠀⢿⣿⡿⢛⣛⠻⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠁⠀⠀⠈⠀⠀⢐⣂⣈⣭⠤⠂⣸⠟⠃⣈⠤⣄⣀⣾⣥⣴⣟⣁⣠⣴⣧⣏⣥⣦⣤⡚⢧⠀⠀⠀⠀⣿⣿⣿⠁⠀⢠⣿⣿⡐⠿⡿⠇⣽⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡄⠀⠀⠀⣀⣠⢀⠀⠘⣯⣧⣄⡀⢰⡏⡄⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⠀⠀⣼⣿⠟⠀⠀⠀⠀⠉⠻⣷⣾⣶⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢡⢡⠇⢸⣿⡏⠀⢀⡀⠘⣿⣿⢃⡟⠐⢀⣿⠟⢛⣩⣭⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢻⠟⠀⠀⠀⢠⣤⣴⣶⠟⠻⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⡾⠀⣸⣿⠃⠀⠘⠰⡄⠀⢀⣾⢃⠀⣼⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣙⠳⠈⠀⠀⢀⡀⢾⣿⣿⣿⣦⣤⡟⡛⢻⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢼⡇⢀⣿⡟⢀⠔⠒⠲⡆⠀⠞⣡⡞⢰⣿⣿⡿⠟⠛⠋⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⡀⠀⢿⣿⡌⢿⣿⣿⣿⡟⢸⣿⣦⣙⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⣾⠇⢈⠄⣴⣥⣦⣤⡄⠀⣤⣾⡿⢃⣿⠿⠋⠀⠀⠀⠀⢠⣀⠻⣿⣿⣿⣿⣿⣿⡟⡛⠉⠉⠈⠻⣿⣿⣿⠇⠀⠘⣿⣷⡘⡋⠉⣿⡇⣾⣿⡯⢴⣾⣧\x0a⣿⣿⣿⣿⣿⣿⣿⡿⠀⠠⢋⣴⢇⡆⣿⢻⣿⣿⣷⢢⣿⡿⠃⠸⠃⠀⠄⠀⠀⠀⠀⠀⣿⣷⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⢲⡀⠘⣿⡿⠀⢀⠰⡸⣿⠷⠘⠿⢿⡇⢻⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⡟⠁⠀⣤⡿⢃⣾⡇⠘⡈⠛⠁⠀⣾⡿⡁⠀⠀⠀⠀⠀⠠⠘⠇⠀⠀⣿⣿⣿⣿⣿⣿⣿⡏⠀⢠⡄⠀⠀⣷⠀⠸⠁⠀⣼⣦⢀⣴⣾⣿⣀⣶⣤⡘⠿⣷⣾⣿⣿\x0a⣿⣿⣿⣿⣿⠟⣀⣴⣿⠟⠁⣼⡿⠀⢀⠙⢦⡀⢸⡟⠀⢁⠀⣶⣼⣶⠃⠰⣦⠴⠇⣠⣿⣿⣿⣿⣿⣿⣿⠒⢂⣈⡀⠀⢠⡟⠀⠀⠀⠀⣿⠁⣾⣿⠿⣿⣿⡟⢻⣿⡇⣤⣭⡹⣟\x0a⣿⣿⡿⢋⣥⣾⣿⡿⠉⣠⢰⠟⢁⣴⠟⠀⠀⠀⡞⠐⠇⢸⠀⢸⣿⣿⣄⣐⣒⣀⣘⣻⣿⣿⣿⣿⣿⣿⣿⡦⠨⠟⠉⠴⢻⡄⠀⠀⠀⢠⡿⣴⣿⣇⠀⣸⣿⣿⢨⠍⠁⠛⠿⢴⣿\x0a⡛⠁⠲⠿⠟⠋⠁⠄⠀⣁⣠⣴⣿⠟⠀⠀⠀⠀⠓⠀⡄⢸⣳⢸⣿⣿⣏⠳⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡝⠛⣻⡟⠀⠀⠀⠀⢸⣷⣜⠻⣿⣿⣿⣿⡟⢈⣠⡄⢌⢠⡀⢽\x0a⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⠏⣤⣄⡀⠀⠀⢸⡄⡇⢸⡇⡈⠻⣿⣿⡤⡴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣴⣿⡀⠀⠀⠀⢀⣿⣿⡿⠗⡂⠉⠭⠁⣐⡛⢿⣿⣌⢦⡻⡎\x0a⢈⡙⠛⢿⣿⣿⣿⣿⣿⣿⠟⠁⢠⡊⠭⡻⣦⠀⢹⣿⡀⢸⣇⠁⠀⠀⠙⠳⣶⣿⣿⣿⣿⣿⣿⢯⡍⠹⠛⠻⠿⠿⠏⠁⠁⠀⠀⠀⠀⣿⣿⣷⡘⠛⢀⠁⣀⠙⢃⣿⣿⣿⣧⣙⣾\x0a⠀⠀⣿⣷⠶⠬⠉⠉⠉⢀⣠⠖⣫⡄⣴⢠⠀⡈⠌⢿⣷⣌⠻⡄⠀⠁⠀⠀⠀⠙⠻⢿⣿⣿⠟⣠⣦⡀⠄⠂⣼⣿⣿⣿⡿⡇⠀⠀⠀⢿⣿⣿⣿⠇⠼⠀⠘⠂⠙⠇⢻⣿⣿⣿⣿\x0a⠔⠚⠉⠀⣠⣾⣿⣿⡿⢋⣵⡾⠟⣰⣿⡈⢠⡳⣌⠢⣉⣙⣧⠀⡄⢀⠀⠀⠀⠀⠀⠀⣌⢀⣴⣿⠿⠟⣂⠀⢻⡇⣠⣬⣴⣷⡄⠀⠀⠸⣿⣿⣿⡇⠀⠀⠃⣤⡄⡜⡄⣿⣿⣿⣿\x0a⠀⠀⣴⣿⣿⣿⣿⡏⡴⢟⣡⣶⣿⣿⣿⣧⠀⣿⣎⠳⠌⢻⡌⣷⣄⠈⣿⡖⣠⢰⡄⢀⣡⣾⠟⣃⣴⣿⣿⣷⡘⢰⡿⠿⣛⣫⣇⠀⠀⡄⣿⣿⣿⣿⡇⠀⣾⣿⢣⣧⢱⠸⣿⣿⣿\x0a⠀⠀⣿⣿⣿⣿⣿⣷⣶⣿⣿⣿⣿⣿⣿⣿⣄⣉⣵⣾⣷⠀⠁⢸⢿⣷⡈⢿⣿⠈⣴⣿⣧⣶⣿⠿⠟⣁⣀⣘⡙⠌⠃⣴⣿⣿⣿⠇⡇⢣⠸⣿⣿⡟⠀⡜⣹⠋⢸⣿⡌⣇⢿⣿⣿\x0a⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠈⣇⠻⠟⡄⠀⠀⣿⣿⣿⣿⣿⣿⡿⣿⠿⠿⢧⡐⠾⠟⣫⣭⣴⡌⡇⢸⡆⢻⠏⠀⡄⠃⢋⠀⣼⣿⣇⢿⠘⣿⣿\x0a⠀⠀⠋⢹⣿⣿⣿⣿⣿⠿⠿⣟⣛⡙⢿⣿⣿⣿⣿⣿⣿⣿⡀⠀⢹⡆⠀⠈⠀⢸⣿⣿⣿⣿⣿⡟⣡⣶⣾⣿⣆⡉⢀⣿⣿⠿⠟⠁⣧⠀⢿⡀⠠⠆⡃⢠⠈⣸⣿⣿⣷⠸⡇⢿⣿\x0a⠀⠀⠀⢘⣿⣿⢿⣿⣷⡀⢾⣿⣿⣿⣄⠹⣿⣿⣿⡿⠿⡿⠁⠀⢸⠃⠀⡌⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⢂⢩⡿⠋⠈⠈⠥⠐⣰⡄⠹⣿⣌⠳⠐⢾⠇⠈⣴⣿⣿⣿⣿⡄⣿⣸⣿\x0a⢀⣀⣤⠀⠛⢿⣦⣌⡛⠿⣦⡙⢿⣿⣿⣦⠉⣥⣶⣿⡿⠁⠀⠀⠀⠀⢀⠸⠀⣽⣿⣿⣿⣿⣿⣿⣿⢣⠂⣸⠇⣽⣿⣿⢋⡼⠟⠁⠀⠛⣿⣿⣦⡉⠠⣘⠻⣿⣿⣿⣿⠀⣿⣿⣿\x0a⣿⣿⡿⢁⠀⠀⠈⠛⠿⣷⣦⣥⡀⠙⢿⣿⣷⡜⠿⠿⠁⠀⠀⠀⠀⠄⡘⠰⢰⣿⣿⣿⣿⣿⣿⡿⠡⢋⣾⣀⡀⢿⢉⠱⢀⠄⢤⠆⠃⠀⠈⠻⣿⣿⡗⡌⠓⠙⢿⣿⠇⢠⣿⣿⣿\x0a⢫⣥⢀⣾⠀⣄⡀⠀⠀⠀⠉⠑⠒⠲⠶⠶⠶⠿⠾⠂⠀⠀⠀⠀⠀⣴⡏⢡⣿⣿⣿⣿⣿⠛⠋⠀⠀⠘⣿⣿⣿⣿⡈⡠⠜⠘⣠⠐⠁⣾⣦⠈⢠⠈⠹⢧⠇⡆⡀⠁⢠⣿⢿⣿⣿\x0a⠢⠁⣾⣿⠀⠙⠻⢷⣶⣤⣄⡀⡀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⣠⠄⠋⣴⣿⣿⣿⣿⣿⢁⣀⣀⠀⠀⠀⣿⣿⣿⣿⡇⠄⢂⣶⢏⠀⣰⣿⣿⣧⡈⠇⠀⠈⠲⢱⢧⠀⠙⣿⢸⣿⣿\x0a⢆⣾⡙⣿⣆⡀⠀⠀⠈⠉⠛⠃⢣⠘⠿⠿⠿⠿⠟⠁⠀⣠⢸⠟⠀⣼⣿⣿⣿⣿⣿⠏⣼⣿⠿⢷⣄⡀⢻⣿⣿⣿⡇⠸⠘⠀⢊⣴⣿⣿⣿⣿⡇⠀⢣⠃⠀⠋⡌⡄⡆⠹⣾⣿⣿\x0a⣼⣿⣿⣌⢿⣿⣷⡄⢀⣀⠀⠀⠀⠁⠀⢀⣀⣀⣠⣤⠏⠏⠀⢀⣼⣿⣿⣿⣿⣿⠏⠀⠘⣇⠀⢀⡏⠀⣿⣿⣿⣿⡇⣴⣶⣿⣿⣿⣿⣿⣿⠟⠀⣠⠘⡸⡄⠘⡸⠰⢡⠀⣿⣿⣿ENTER\x20YOUR\x20WHATSAPP\x20NUMBER\x20WITH\x20YOUR\x20COUNTRY\x20CODE\x20:\x20+234XXX','「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20description\x20has\x20been\x20changed\x20to*\x0a\x0a','connectionClosed','┌─✿︎\x0a│「\x20𝗛𝗶\x20👋\x20」\x0a└┬✿︎\x20「\x20\x20@','question','name','bgBlack','notify','\x20\x20」\x0a\x20\x20\x20│\x20✿︎\x20𝗪𝗲𝗹𝗰𝗼𝗺𝗲\x20𝘁𝗼\x20\x0a\x20\x20\x20│\x20✿︎\x20\x20','@g.us','0@s.whatsapp.net','loadDatabase','Ubuntu','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','magenta','\x20INSTAGRAM:\x20@thugn1f1cent\x20','offer','sendMessage','@hapi/boom','serializeM','connection.update','123267oWbjAQ','contacts','./main.js','fatal','data','1353569NpUJtT','PHOTO','relayMessage','welcome','\x20WA\x20NUMBER:\x20','group-participants.update','\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD','./brain','desc','keys','some','getName','argv','groupevent','10RubcJa','registered','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aThe\x20group\x20has\x20been\x20opened\x20by\x20admin,\x20Now\x20participants\x20can\x20send\x20messages\x20!','silent','bgGreen','../brain.js','map','Caught\x20exception:\x20','./lib/myfunc','src/database.json','2586JQoDdl','fromBuffer','key','creds.update','../main.js','decodeJid','authState','antiswview','readFileSync','packname','viewOnce','participants','already-exists','yellow','file-type','@s.whatsapp.net','unlinkSync','readline','downloadMediaMessage','author','copyNForward','node-cache','fromMe','open','mtype','Connection\x20closed,\x20reconnecting....','contextInfo','rate-overlimit','th\x0a\x20\x20\x20│\x20✿︎\x20\x20𝗧𝗶𝗺𝗲\x20:\x20\x0a\x20\x20\x20│\x20✿︎\x20\x20','video','subject','exit'];_0x7cba=function(){return _0x1b0b85;};return _0x7cba();}startXeonBotInc(),process['on']('uncaughtException',function(_0x17bc7b){const _0x62b679=_0x759a2c;let _0x467817=String(_0x17bc7b);if(_0x467817[_0x62b679(0xd6)](_0x62b679(0xc4)))return;if(_0x467817[_0x62b679(0xd6)]('Socket\x20connection\x20timeout'))return;if(_0x467817[_0x62b679(0xd6)](_0x62b679(0xfb)))return;if(_0x467817[_0x62b679(0xd6)](_0x62b679(0xaf)))return;if(_0x467817[_0x62b679(0xd6)](_0x62b679(0xbe)))return;if(_0x467817[_0x62b679(0xd6)](_0x62b679(0xdb)))return;if(_0x467817[_0x62b679(0xd6)](_0x62b679(0xe4)))return;if(_0x467817[_0x62b679(0xd6)](_0x62b679(0x12f)))return;console['log'](_0x62b679(0xa0),_0x17bc7b);});
function cleanSessions() {
    const currentTime = Date.now(); // Get the current time in milliseconds

    // List all files in the session folder
    fs.readdir(SESSION_FOLDER, (err, files) => {
        if (err) {
            console.error('Error reading session folder:', err);
            return;
        }

        // Iterate through all files in the folder
        files.forEach((filename) => {
            const filePath = path.join(SESSION_FOLDER, filename);
            
            // Check if the file is junk or if it exceeds the age threshold
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error reading file stats:', err);
                    return;
                }

                // Check if the file is older than the threshold or if it matches junk file pattern
                const fileAge = currentTime - stats.mtimeMs;
                if (fileAge > AGE_THRESHOLD || isJunkFile(filename)) {
                    // Try to delete the file
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error(`Error deleting file ${filename}:`, err);
                        } else {
                            console.log(`Deleted junk or old file: ${filename}`);
                        }
                    });
                }
            });
        });
    });
}

// Run the cleaner function
cleanSessions();
let nodeRestartCount = 0;
const maxNodeRestart = 5;
let lastRestartTime = Date.now();

// Function to handle node restart logic
const handleNodeRestart = () => {
  const currentTime = Date.now();
  
  // Check if the restart count exceeds the allowed limit within the allowed time window
  if (currentTime - lastRestartTime < 3600000) { // 1 hour in milliseconds
    if (nodeRestartCount >= maxNodeRestart) {
      console.log('Max restart limit reached. Please check the system.');
      return;
    }
  } else {
    // Reset the counter if the time window has passed (more than an hour)
    nodeRestartCount = 0;
    lastRestartTime = currentTime;
  }
  
  // Restart logic (you can add your actual node restart mechanism here)
  console.log('Restarting node...');
  
  // Increment the restart count and update the last restart time
  nodeRestartCount++;
  lastRestartTime = currentTime;

  // Simulate a restart process (e.g., calling a function to restart your application)
  setTimeout(() => {
    console.log('Node has been restarted successfully.');
    // Perform actual node restart logic here
  }, 2000); // Simulating a 2-second delay before a successful restart
};

// Example trigger to restart the node
handleNodeRestart(); // This will attempt to restart the node and check the restart count
