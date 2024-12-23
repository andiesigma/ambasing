/*
SCRIPT INI DI KEMBANGKAN OLEH VANZTZY
BEBAS RECODE ASALKAN TARO CR GUA
© Vanztzy All Right Reversed 2021 -:- 2024
Kalo ada yang error silahkan hubungi vanztzy
*/

require("./all/module.js")
const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
//========== Setting Owner ==========//
global.owner = "6285278849002" // no owner
global.dbowner = "./all/database/owner.json"
global.dbprem = './all/database/premium.json'
global.namaowner = "Vanztzy" // bebas

//======== Setting Bot & Link ========//
global.namabot = "Vanztzy Cpanel" // bebas ubah
global.versionbot = `V5`
global.saluran = "https://whatsapp.com/channel/0029VatmrQL84Om7SiJ0t43z" // bebas
global.linkgc = 'https://chat.whatsapp.com/CwjKZZCsE54LOxTuavcbvv' // bebas
global.sret = "`" // jangan ubah
global.packname = "Vanztzy Cpanel" // bebas
global.author = "Vanztzy Cpanel" // terserah

//========== Setting Event ==========//
global.autoTyping = true
global.welcome = false
global.autoread = false
global.anticall = false 
global.delaypushkontak = 7500
global.delayjpm = 7500

//========= Setting Url Foto =========//
global.image = "https://b.top4top.io/p_32742ql371.jpg" 
global.makasi = "https://files.catbox.moe/yab53x.jpg" 

//========== Setting Panell Server 1 ==========//
global.egg = "15" // egg
global.loc = "1" // location
global.domain = "https://" // ubah jadi domain mu
global.apikey = "ptla_" // ubah jadi apikey mu
global.capikey = "ptlc_" // ubah jadi capikey mu

//========== Setting Panel Server 2 ==========//
global.domain2 = "https://" // ubah jadi domain mu
global.apikey2 = "ptla_" // ubah jadi apikey mu
global.capikey2 = "ptlc_" // ubah jadi capikey mu

//========= Setting Payment =========//
global.dana = "082129114469"
global.gopay = "082129114469" // ubah jadi no gopay mu 
global.ovo = "082129114469" // ubah jadi no ovo mu 
global.shopeepay = "082129114469" // ubah jdi no spy mu
global.qris = "ga ada qris🗿" // ubah jadi link Qris mu
global.bri = "999999999" // ubah jadi no bank mu "2937xxxxxx"
global.atasnama = "vanztzy kontol" // atas nama pay mu
global.syarat1 = "𝗦𝗦 𝗕𝗨𝗞𝗧𝗜 TF‼️" // bebas ubah
global.syarat2 = "𝗔𝗟𝗟 𝗧𝗥𝗫 𝗡𝗢 𝗥𝗘𝗙‼️" // bebas ubah

//========= Jangan Di Ubah =========//
global.rulvip = `*𝗥𝘂𝗹𝗲𝘀 𝗣𝗲𝗺𝗯𝗲𝗹𝗶𝗮𝗻 𝗣𝗮𝗻𝗲𝗹 𝗕𝘆 𝗩𝗮𝗻𝘇𝘁𝘇𝘆 ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 1 Detik
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian`
global.pzm = "A"
global.kbh = "B"
global.obp = "C"
global.mkq = "D"
global.epo = "E"
global.hjr = "F"
global.mdm = "G"
global.knt = "H"
global.jmb = "I"
global.sci = "J"
global.dby = "K"
global.zhr = "L"
global.jup = "M"
global.mel = "N"
global.nic = "O"
global.vpd = "P"
global.zqq = "Q"
global.kbs = "R"
global.pxd = "S"
global.ytm = "T"
global.ytv = "U"
global.hdh = "V"
global.wkw = "W"
global.jir = "X"
global.lah = "Y"
global.kok = "Z"
global.pza = "a"
global.kbb = "b"
global.obc = "c"
global.mkd = "d"
global.epe = "e"
global.hjf = "f"
global.mdg = "g"
global.knh = "h"
global.jmi = "i"
global.scj = "j"
global.dbk = "k"
global.zhl = "l"
global.jum = "m"
global.men = "n"
global.nio = "o"
global.vpp = "p"
global.zqp = "q"
global.kbr = "r"
global.pxs = "s"
global.ytt = "t"
global.ytu = "u"
global.hdv = "v"
global.wkm = "w"
global.jix = "x"
global.lay = "y"
global.koz = "z"
global.idsal = "120363341601187231@newsletter"
global.msg = {
"error": "𝗲𝗿𝗿𝗼𝗿 𝗯𝗮𝗻𝗴𝘀𝗮𝘁,𝗰𝗼𝗯𝗮 𝗹𝗮𝗴𝗶😈",
"done": "𝗱𝗮𝘁𝗮 𝘂𝗱𝗮𝗵 𝗱𝗶 𝗮𝗺𝗯𝗶𝗹 ni✅", 
"wait": "𝘃𝗮𝗻𝘇𝘁𝘇𝘆 𝗼𝘁𝘄 𝗽𝗿𝗼𝘀𝗲𝘀✅", 
"group": "𝗳𝗶𝘁𝘂𝗿 𝗶𝗻𝗶 𝗸𝗵𝘂𝘀𝘂𝘀 𝗱𝗶 𝗴𝗿𝘂𝗽 𝗻𝗴𝗲𝗻𝘁𝗼𝗱 𝗶𝗱𝗶𝗼𝘁 𝗯𝗮𝗻𝗴𝗲𝘁 𝘀𝗶😴", 
"private": "𝗸𝗵𝘂𝘀𝘂𝘀 𝗱𝗶 𝗰𝗵𝗮𝘁 𝗽𝗿𝗶𝗯 𝗯𝗴 𝘃𝗮𝗻𝘇 wa.me/6285278849002", 
"admin": "𝘀𝗼𝗸 𝗮𝘀𝗶𝗸 𝗹𝘂 𝗮𝗷𝗮 𝗯𝘂𝗸𝗮𝗻 𝗮𝗱𝗺𝗶𝗻😹", 
"adminbot": "𝗴𝘄 𝗯𝘂𝗸𝗮𝗻 𝗮𝗱𝗺𝗶𝗷 𝗮𝘀𝘂😑", 
"owner": "𝗹𝘂 𝗯𝘂𝗸𝗮𝗻 𝗯𝗴 𝘃𝗮𝗻𝘇,𝗷𝗮𝗱𝗶 𝗴𝗮𝘂𝘀𝗮𝗵 𝗽𝗮𝗸𝗲 𝗳𝗶𝘁𝘂𝗿 ini🤍", 
"developer": "𝗸𝗵𝘂𝘀𝘂𝘀 𝘃𝗮𝗻𝘇 𝗱𝗲𝘃🤍"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})