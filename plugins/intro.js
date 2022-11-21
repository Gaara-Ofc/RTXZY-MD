let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
╭─── *「 Kartu Intro 」*
│       
│ *Nama     :*  
│ *Umur      :*   
│ *Askot         :*  
│ *Status     :* 
╰──────────────
`.trim()) 
}
handler.command = /^(intro)$/i

module.exports = handler
