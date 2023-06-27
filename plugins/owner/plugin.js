exports.run = {
   usage: ['plugen', 'plugdis'],
   use: 'plugin name',
   category: 'owner',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      plugins: plugs
   }) => {
	  let pluginDisable = global.db.setting.pluginDisable
      if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'tiktok'), m)
      let plugins = Object.keys(plugs)
      if (!plugins.includes(args[0])) return client.reply(m.chat, Func.texted('bold', `🚩 Plugin ${args[0]}.js not found.`), m)
      if (command == 'plugdis') {
         if (pluginDisable.includes(args[0])) return client.reply(m.chat, Func.texted('bold', `🚩 Plugin ${args[0]}.js previously has been disabled.`), m)
         pluginDisable.push(args[0])
         client.reply(m.chat, Func.texted('bold', `🚩 Plugin ${args[0]}.js berhasil dinonaktifkan.`), m)
      } else if (command == 'plugen') {
         if (!pluginDisable.includes(args[0])) return client.reply(m.chat, Func.texted('bold', `🚩 Plugin ${args[0]}.js not found.`), m)
         pluginDisable.forEach((data, index) => {
            if (data === args[0]) pluginDisable.splice(index, 1)
         })
         client.reply(m.chat, Func.texted('bold', `🚩 Plugin ${args[0]}.js berhasil diaktifkan.`), m)
      }
   },
   owner: true
}