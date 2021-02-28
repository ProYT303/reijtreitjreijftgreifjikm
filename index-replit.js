
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("ready")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})
// remove this comment if you want to use config .json | const { channelID, token, owner, postmemes, beg, fish, hunt, prefix, hl, autoturnon } = require('./config.json')

/*
make sure to install discord.js-self, express. 

REPL.IT Full installation (shell):

rm ./index.js 
wget https://raw.githubusercontent.com/ProYT303/reijtreitjreijftgreifjikm/main/index-replit.js
npm init -y 
npm i discord.js-self express
echo Done!

*\

/*

config.json example

{
    "channelID": "channelid",
    "token": "token",
    "owner": "owneruserid",
    "prefix": "+",
    "postmemes": "true/false",
    "fish": "true/false",
    "beg": "true/false",
    "hunt": "true/false",
    "hl": "true/false",
    "autoturnon": "true/false"
}


*\



/*
or this one

const channelID = "channelid"
const token = "token"
const owner = "ownerid"
const postmemes = "true/false"
const beg = "true/false"
const fish = "true/false"
const hunt = "true/false"
const prefix = "prefix"
const hl = "true/false"
const autoturnon = "true/false"
*/

// dank code
const _0x31e4=['11qdvWZU','user','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|___/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','name','73abjBrc','exit','stopTyping','pls\x20bal','|\x20|\x20|\x20(_)\x20|\x20(_|\x20|\x20|\x20\x20|\x20|\x20\x20__/\x20|\x20|\x20|\x20|\x20|\x20\x20__/\x20|\x20\x20\x20\x20\x20\x5c\x20V\x20/.___/\x20/\x20','includes','1799nVChGm','turning\x20off..','A\x20number\x20secret','description','credits','startTyping','mentions','inspector','channels','No\x20commands\x20launched\x20from\x20the\x20bot\x20yet!\x20Type\x20+st\x20to\x20start.','2HrmYyO','guild','Typing.','610737823888310272','177315FLEubr','replace','is\x20broken\x20lmao','|\x20___\x20\x5c\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20\x20\x5c/\x20\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|____\x20|\x20','console','content','pLs\x20beg','pls\x20beg','Client','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','<@!','181HrdZbr','ready','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__/\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','ahhhhh\x20the\x20fish\x20is\x20too\x20strong\x20and\x20your\x20line\x20is\x20at\x20risk\x20to\x20break','270904126974590976','ceil','234017fzOIbZ','pls\x20share\x20','count','EVENT\x20TIME\x20WOO!','random','|\x20|_/\x20/__\x20\x20\x20__\x20_|\x20.\x20\x20.\x20|\x20___\x20_\x20__\x20___\x20\x20\x20___\x20_\x20__\x20\x20__\x20\x20\x20__\x20\x20\x20/\x20/\x20','______\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20___\x20\x20___\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20_____\x20\x20','get','pls\x20dep\x20max','author','test','pls\x20hunt','pls\x20hl','floor','shift','embeds','fetch','join','first','high','Logged\x20in\x20as\x20','say','506095SpMCxF','username','pls\x20pm','cache','log','Pls\x20beg','members','send','begged','slice','1SyhAWs','Do\x20you\x20still\x20want\x20to\x20use\x20this\x20item','16889eiiinK','242409LxJFmF','then','pls\x20Beg','split','2611fLygJC','delete','low','answered\x20first!','users','PLS\x20BEG','im\x20bored\x20help\x20lol','tag','toLowerCase','length','discord.js-self','pls\x20buy\x20laptop','message','What\x20type\x20of\x20meme\x20do\x20you\x20want\x20to\x20post','login','trim','constructor','pls\x20fish','\x5c_|\x20\x20\x5c___/\x20\x5c__,\x20\x5c_|\x20\x20|_/\x5c___|_|\x20|_|\x20|_|\x5c___|_|\x20\x20\x20\x20\x20\x20\x5c_/\x20\x5c____/\x20\x20','pm\x27d','!\x20\x0a\x20Welcome\x20to\x20PogMemer\x20SelfBot\x20v3,\x20','channel','true'];const _0x5d54=function(_0x224e52,_0x39088c){_0x224e52=_0x224e52-0x1e2;let _0x4914d9=_0x31e4[_0x224e52];return _0x4914d9;};const _0x30febf=_0x5d54;(function(_0x3bad0a,_0x3be031){const _0x100359=_0x5d54;while(!![]){try{const _0x28350a=parseInt(_0x100359('0x1f7'))*parseInt(_0x100359('0x22f'))+parseInt(_0x100359(0x233))*-parseInt(_0x100359('0x206'))+-parseInt(_0x100359(0x1e3))*parseInt(_0x100359(0x22e))+-parseInt(_0x100359(0x1e7))*parseInt(_0x100359(0x1ed))+parseInt(_0x100359('0x20c'))+-parseInt(_0x100359('0x1fb'))+-parseInt(_0x100359('0x222'))*-parseInt(_0x100359('0x22c'));if(_0x28350a===_0x3be031)break;else _0x3bad0a['push'](_0x3bad0a['shift']());}catch(_0x18bec2){_0x3bad0a['push'](_0x3bad0a['shift']());}}}(_0x31e4,0x3ef7e),(console[_0x30febf('0x226')](_0x30febf('0x212')),console[_0x30febf(0x226)](_0x30febf('0x1fe')),console['log'](_0x30febf('0x211')),console[_0x30febf(0x226)]('|\x20\x20__/\x20_\x20\x5c\x20/\x20_`\x20|\x20|\x5c/|\x20|/\x20_\x20\x5c\x20\x27_\x20`\x20_\x20\x5c\x20/\x20_\x20\x5c\x20\x27__|\x20\x5c\x20\x5c\x20/\x20/\x20\x20\x20\x5c\x20\x5c\x20'),console[_0x30febf('0x226')](_0x30febf('0x1eb')),console[_0x30febf('0x226')](_0x30febf('0x245')),console['log'](_0x30febf('0x208')),console['log'](_0x30febf('0x1e5'))));const {count}=require(_0x30febf('0x1ff')),Discord=require(_0x30febf(0x23d)),{waitForDebugger}=require(_0x30febf('0x1f4')),client=new Discord[(_0x30febf(0x203))]();client['on'](_0x30febf(0x207),async()=>{const _0x387a98=_0x30febf;console[_0x387a98('0x226')](_0x387a98('0x220')+client[_0x387a98(0x1e4)][_0x387a98('0x23a')]+_0x387a98('0x247')+client[_0x387a98('0x1e4')]['tag']+'!');const _0x3b4af3=client['channels'][_0x387a98('0x225')][_0x387a98('0x213')](channelID),_0x5dcc68=client['channels'][_0x387a98(0x225)][_0x387a98(0x213)](channelID);autoturnon==='true'&&startbot(),setTimeout(()=>{const _0x5cba8f=_0x387a98;console[_0x5cba8f('0x226')](_0x5cba8f('0x1ee')),setTimeout(()=>{const _0x214f8a=_0x5cba8f;process[_0x214f8a(0x1e8)]();},0x2710);},0x1808580);});function getRandomInt(_0x2f8782,_0x1ebcf0){const _0xaf1008=_0x30febf,_0x2ac3ae=function(){let _0xada3db=!![];return function(_0x2beca8,_0x3ab6b4){const _0x54e535=_0xada3db?function(){if(_0x3ab6b4){const _0x35f076=_0x3ab6b4['apply'](_0x2beca8,arguments);return _0x3ab6b4=null,_0x35f076;}}:function(){};return _0xada3db=![],_0x54e535;};}(),_0x20200d=_0x2ac3ae(this,function(){const _0x42c8ff=function(){const _0x10eb60=_0x5d54,_0x12de54=_0x42c8ff[_0x10eb60('0x243')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x10eb60(0x243)](_0x10eb60(0x204));return!_0x12de54[_0x10eb60(0x216)](_0x20200d);};return _0x42c8ff();});return _0x20200d(),_0x2f8782=Math[_0xaf1008(0x20b)](_0x2f8782),_0x1ebcf0=Math[_0xaf1008(0x219)](_0x1ebcf0),Math[_0xaf1008(0x219)](Math[_0xaf1008('0x210')]()*(_0x1ebcf0-_0x2f8782)+_0x2f8782);}let pmdelay=getRandomInt(0x41,0x44)*0x3e8,begdelay=getRandomInt(0x2e,0x32)*0x3e8,highlowdelay=getRandomInt(0x16,0x19)*0x3e8,fishdelay=getRandomInt(0x3c,0x3d)*0x3e8,huntdelay=getRandomInt(0x3d,0x3f)*0x3e8,bypassdelay=getRandomInt(0x3c,0x64)*0x3e8,invdelay=getRandomInt(0x78,0x8c)*0x3e8;const channel=client[_0x30febf('0x1f5')][_0x30febf(0x225)][_0x30febf('0x213')](channelID),ch=client[_0x30febf('0x1f5')][_0x30febf('0x225')][_0x30febf(0x213)](channelID);function sellthing(){const _0x35c7ea=_0x30febf;let _0x4bc488=client[_0x35c7ea(0x237)][_0x35c7ea('0x21c')]('270904126974590976');const _0x19adf9=client[_0x35c7ea('0x1f5')][_0x35c7ea('0x225')]['get'](channelID),_0x4296dd=client[_0x35c7ea('0x1f5')][_0x35c7ea('0x225')][_0x35c7ea(0x213)](channelID);setTimeout(()=>{const _0x1f57c9=_0x35c7ea;_0x4296dd[_0x1f57c9('0x1f2')](),setTimeout(()=>{const _0x25abe1=_0x1f57c9;send(_0x25abe1('0x214'));},0x3e8);},0x1f4);}function begs(){const _0x2e392e=_0x30febf;let _0x177ee4=client[_0x2e392e(0x237)]['fetch']('270904126974590976');const _0x1461f3=client['channels']['cache'][_0x2e392e(0x213)](channelID),_0x3074db=client[_0x2e392e(0x1f5)][_0x2e392e('0x225')][_0x2e392e(0x213)](channelID);_0x1461f3[_0x2e392e(0x1f2)](),console[_0x2e392e('0x226')](_0x2e392e('0x1f9')),setTimeout(()=>{const _0x4df941=_0x2e392e;let _0x3111c6=getRandomInt(0x0,0x2);switch(_0x3111c6){case 0x0:send(_0x4df941('0x202'));break;case 0x1:send(_0x4df941('0x201'));break;case 0x2:send(_0x4df941(0x238));break;case 0x3:send(_0x4df941(0x227));break;case 0x4:send(_0x4df941('0x231'));}console['log'](_0x4df941('0x22a')),times++,_0x1461f3['stopTyping']();},getRandomInt(0x12c,0x2bc));}function pm(){const _0x14c96f=_0x30febf;let _0x27fb41=client[_0x14c96f('0x237')][_0x14c96f(0x21c)](_0x14c96f(0x20a));const _0x259bf7=client[_0x14c96f('0x1f5')][_0x14c96f(0x225)][_0x14c96f(0x213)](channelID),_0x314ff8=client[_0x14c96f(0x1f5)][_0x14c96f('0x225')][_0x14c96f(0x213)](channelID);_0x259bf7[_0x14c96f(0x1f2)](),console[_0x14c96f('0x226')](_0x14c96f(0x1f9)),setTimeout(()=>{const _0x4829e7=_0x14c96f;send(_0x4829e7(0x224)),_0x259bf7['stopTyping'](),_0x259bf7[_0x4829e7('0x1f2')](),setTimeout(function(){const _0x54f4a5=_0x4829e7;let _0x356c64=getRandomInt(0x1,0x5);switch(_0x356c64){case 0x1:send('f');break;case 0x2:send('r');break;case 0x3:send('i');break;case 0x4:send('c');break;case 0x5:send('k');break;}console[_0x54f4a5('0x226')](_0x54f4a5('0x246')),times++,_0x259bf7[_0x54f4a5('0x1e9')]();},0x7b1);},getRandomInt(0x12c,0x2bc));}function fishing(){const _0x21ba77=_0x30febf;let _0x211307=client[_0x21ba77('0x237')][_0x21ba77('0x21c')]('270904126974590976');const _0x378ea7=client[_0x21ba77('0x1f5')]['cache'][_0x21ba77(0x213)](channelID),_0x31c5d8=client[_0x21ba77(0x1f5)][_0x21ba77(0x225)]['get'](channelID);times++,_0x378ea7['startTyping'](),console[_0x21ba77('0x226')](_0x21ba77('0x1f9')),setTimeout(()=>{const _0xab763b=_0x21ba77;send(_0xab763b('0x244')),_0x378ea7[_0xab763b('0x1e9')]();},getRandomInt(0xc8,0x320));}function hunting(){const _0x2d146b=_0x30febf;let _0x33c7c7=client[_0x2d146b(0x237)][_0x2d146b('0x21c')](_0x2d146b(0x20a));const _0x14a213=client[_0x2d146b('0x1f5')][_0x2d146b(0x225)][_0x2d146b('0x213')](channelID),_0x56f084=client[_0x2d146b(0x1f5)][_0x2d146b('0x225')]['get'](channelID);_0x14a213[_0x2d146b('0x1f2')](),console[_0x2d146b(0x226)]('Typing.'),setTimeout(()=>{const _0x3bf265=_0x2d146b;send(_0x3bf265('0x217')),console[_0x3bf265('0x226')]('hunted'),times++;},getRandomInt(0x12c,0x320)),_0x14a213['stopTyping']();}async function startbot(){const _0x2d6071=_0x30febf,_0x54fb48=client['channels']['cache'][_0x2d6071('0x213')](channelID),_0xdae8e=client[_0x2d6071(0x1f5)][_0x2d6071('0x225')][_0x2d6071('0x213')](channelID);send(_0x2d6071('0x239')),_0x54fb48[_0x2d6071('0x1f2')]();var _0x2da18f=0x1;setInterval(()=>{const _0x7292f3=_0x2d6071;_0xdae8e[_0x7292f3('0x1f2')](),setTimeout(()=>{const _0xe2f8f2=_0x7292f3;send(_0xe2f8f2(0x1ea)),_0xdae8e[_0xe2f8f2(0x1e9)]();},0x3e8);},bypassdelay);if(beg===_0x2d6071('0x1e2'))var _0x2238c2=setInterval(begs,begdelay);if(postmemes==='true')var _0x1e9cbd=setInterval(pm,pmdelay);if(fish===_0x2d6071('0x1e2'))var _0x301669=setInterval(fishing,fishdelay);if(hunt===_0x2d6071(0x1e2))var _0x84a5da=setInterval(hunting,huntdelay);hl===_0x2d6071('0x1e2')&&setInterval(()=>{const _0x98330f=_0x2d6071;_0xdae8e[_0x98330f('0x1f2')](),setTimeout(()=>{const _0x3615ec=_0x98330f;send(_0x3615ec(0x218)),_0xdae8e[_0x3615ec(0x1e9)]();},0x4b0),times++;},highlowdelay),setInterval(()=>{const _0x4d8a7f=_0x2d6071;_0xdae8e[_0x4d8a7f('0x1f2')](),setTimeout(()=>{send('pls\x20inv');},getRandomInt(0x190,0x2bc));},invdelay);}function send(_0x111baa){const _0x534d87=_0x30febf;client['channels'][_0x534d87(0x225)]['get'](channelID)[_0x534d87(0x229)](_0x111baa);}var times=0x0;client['on'](_0x30febf(0x23f),async _0x5c8150=>{const _0x4fc485=_0x30febf,_0x14731c=_0x5c8150;var _0x6d9504=0x0,_0x4cdf20=0x0;const _0x16f9fb=client[_0x4fc485(0x1f5)]['cache']['get'](channelID),_0x4a1a30=client[_0x4fc485(0x1f5)][_0x4fc485(0x225)][_0x4fc485(0x213)](channelID),_0x223f80=_0x14731c[_0x4fc485(0x200)]['slice'](prefix[_0x4fc485(0x23c)])[_0x4fc485('0x242')]()[_0x4fc485(0x232)]('\x20'),_0x32c4d1=_0x223f80[_0x4fc485(0x21a)]()[_0x4fc485('0x23b')]();try{if(_0x14731c['embeds'][0x0]['description']){if(!_0x14731c[_0x4fc485(0x21b)][0x0][_0x4fc485('0x1f0')][_0x4fc485('0x1ec')](_0x4fc485(0x1ef)))return;if(_0x14731c[_0x4fc485('0x21b')][0x0]['author'][_0x4fc485('0x1e6')][_0x4fc485('0x1ec')](client[_0x4fc485('0x1e4')][_0x4fc485('0x223')])){if(_0x5c8150[_0x4fc485('0x215')]['id']===_0x4fc485(0x20a)){let _0x579060=_0x14731c[_0x4fc485('0x21b')][0x0][_0x4fc485('0x1f0')][_0x4fc485('0x232')]('**');_0x579060=_0x579060[0x1],_0x579060>0x32?(_0x14731c['channel'][_0x4fc485(0x1f2)](),setTimeout(()=>{const _0x56e6d0=_0x4fc485;send(_0x56e6d0('0x235')),_0x14731c['channel']['stopTyping']();},0x3e8)):setTimeout(()=>{const _0x2fda40=_0x4fc485;send(_0x2fda40(0x21f)),_0x14731c[_0x2fda40('0x248')][_0x2fda40(0x1e9)]();},0x3e8);}}}}catch{}var _0x78ecd1=_0x5c8150['content'];_0x14731c['author']['id']==='270904126974590976'&&(_0x14731c[_0x4fc485(0x200)][_0x4fc485('0x1ec')](_0x4fc485(0x1fd))&&(_0x78ecd1[_0x4fc485(0x1ec)]('<@'+client[_0x4fc485('0x1e4')]['id']+'>')|_0x78ecd1[_0x4fc485(0x1ec)](_0x4fc485('0x205')+client[_0x4fc485(0x1e4)]['id']+'>')&&(_0x14731c['channel'][_0x4fc485('0x1f2')](),setTimeout(()=>{const _0x1b3d99=_0x4fc485;_0x14731c[_0x1b3d99(0x248)][_0x1b3d99('0x1e9')](),_0x14731c[_0x1b3d99(0x248)]['send'](_0x1b3d99(0x23e));},0x3e8))));if(_0x78ecd1['includes']('`')){if(_0x78ecd1['includes'](_0x4fc485('0x240')))return;if(_0x78ecd1['includes'](_0x4fc485('0x20f')))return;if(_0x78ecd1['includes'](_0x4fc485(0x236)))return;if(_0x78ecd1[_0x4fc485('0x1ec')](_0x4fc485(0x22d)))return;if(_0x78ecd1['includes']('%'))return;if(_0x78ecd1[_0x4fc485('0x1ec')]('pls\x20')){if(_0x5c8150['author']['id']===_0x4fc485(0x20a))return;}if(_0x78ecd1[_0x4fc485(0x1ec)](_0x4fc485(0x209))|_0x78ecd1['includes']('Type\x20the\x20phrase\x20below\x20in\x20the\x20next\x2010\x20seconds\x20or\x20you\x27re\x20toast!')){let _0x160c39=await _0x14731c[_0x4fc485(0x1f3)]['users'][_0x4fc485('0x21e')]();if(_0x160c39['id']!==client[_0x4fc485(0x1e4)]['id'])return;}if(_0x5c8150[_0x4fc485(0x215)]['id']===_0x4fc485('0x20a')|_0x5c8150[_0x4fc485('0x215')]['id']===_0x4fc485('0x1fa')|_0x5c8150[_0x4fc485('0x215')]['id']===client[_0x4fc485(0x1e4)]['id']|_0x5c8150[_0x4fc485(0x215)]['id']===owner)_0x5c8150['channel'][_0x4fc485(0x1f2)](),console['log'](_0x4fc485(0x1f9)),setTimeout(()=>{const _0x4975c7=_0x4fc485;let _0x59711f=_0x78ecd1[_0x4975c7('0x232')]('`');var _0x7b0f8a=_0x59711f[0x1][_0x4975c7(0x1fc)](/﻿/g,'');_0x5c8150[_0x4975c7(0x248)][_0x4975c7('0x1e9')](),_0x7b0f8a&&_0x14731c[_0x4975c7('0x248')][_0x4975c7(0x229)](_0x7b0f8a);},getRandomInt(0x3e8,0x7d0));else return;}if(_0x5c8150['content']===prefix+'st')_0x5c8150[_0x4fc485('0x215')]['id']===owner|_0x5c8150['author']['id']===client['user']['id']&&(_0x5c8150[_0x4fc485(0x234)](),startbot());else{if(_0x5c8150[_0x4fc485(0x200)]===prefix+_0x4fc485(0x20e)|_0x5c8150['content']===prefix+'howmuch')times?_0x5c8150[_0x4fc485(0x215)][_0x4fc485('0x229')](''+times)[_0x4fc485('0x230')](_0x1a9720=>{setTimeout(()=>{_0x1a9720['delete']();},0xfa0);}):_0x5c8150[_0x4fc485('0x215')][_0x4fc485('0x229')](_0x4fc485('0x1f6'))['then'](_0x48bfea=>{setTimeout(()=>{const _0x345a5e=_0x5d54;_0x48bfea[_0x345a5e(0x234)]();},0xfa0);});else{if(_0x5c8150[_0x4fc485('0x200')]===prefix+'version')_0x5c8150[_0x4fc485('0x215')]['send']('v3')[_0x4fc485('0x230')](_0x5c5a61=>{setTimeout(()=>{const _0x3c76e0=_0x5d54;_0x5c5a61[_0x3c76e0(0x234)]();},0xfa0);});else{if(_0x5c8150[_0x4fc485('0x200')]===prefix+_0x4fc485('0x1f1'))_0x5c8150[_0x4fc485('0x215')][_0x4fc485('0x229')]('Cristian#6235\x20for\x20help\x20on\x20pls\x20hl')['then'](_0x578894=>{setTimeout(()=>{_0x578894['delete']();},0xfa0);});else{if(_0x32c4d1===_0x4fc485('0x229')){if(_0x14731c[_0x4fc485('0x215')]['id']!==owner)return;let _0x553efe=_0x14731c['mentions'][_0x4fc485('0x228')][_0x4fc485('0x21e')]()||_0x14731c[_0x4fc485('0x1f8')][_0x4fc485('0x228')][_0x4fc485(0x225)][_0x4fc485(0x213)](userArgs[0x0])||_0x14731c[_0x4fc485(0x1f8)][_0x4fc485('0x228')][_0x4fc485(0x225)]['find'](_0x1f31c9=>_0x1f31c9['user'][_0x4fc485(0x223)][_0x4fc485('0x23b')]()===userArgs[_0x4fc485(0x22b)](0x0)[_0x4fc485(0x21d)]('\x20')||_0x1f31c9[_0x4fc485('0x1e4')]['username']===userArgs[0x0])||client[_0x4fc485('0x237')][_0x4fc485(0x21c)](_0x223f80[0x0]),_0x487d7f='<@'+_0x553efe['id']+'>',_0x231085=_0x223f80[0x2];send(_0x4fc485(0x20d)+_0x487d7f+'\x20'+_0x231085);}else _0x32c4d1===_0x4fc485(0x221)&&(_0x4a1a30[_0x4fc485(0x1f2)](),setTimeout(()=>{const _0x56677c=_0x4fc485;send(_0x223f80[_0x56677c(0x21d)]('\x20')),_0x4a1a30['stopTyping']();},0x4b0));}}}}}),client[_0x30febf('0x241')](token);
