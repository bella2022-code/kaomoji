const data = [
  { text: '(｡•ᴗ•｡)', tags: ['人物', '可愛', '柔和', '聊天', '回覆'] },
  { text: '(╥﹏╥)', tags: ['人物', '哭', '難過', '柔和'] },
  { text: 'ฅ^•ﻌ•^ฅ', tags: ['動物', '貓', '可愛'] },
  { text: '( ´ ▽ ` )ﾉ', tags: ['人物', '招手', '打招呼', '早安'] },
  { text: '(˶ᵔ ᵕ ᵔ˶)', tags: ['人物', '可愛', '柔和', '開心'] },
  { text: '(っ˘ω˘ς )', tags: ['人物', '晚安', '柔和'] },
  { text: '(づ｡◕‿‿◕｡)づ', tags: ['人物', '愛心', '擁抱', '可愛'] },
  { text: '(•ω•)', tags: ['動物', '熊', '可愛', '極簡'] },
  { text: '(*˘︶˘*).｡.:*♡', tags: ['愛心', '可愛', '柔和'] },
  { text: '(๑•̀ㅂ•́)و✧', tags: ['人物', '手勢', '加油', '恭喜'] },
  { text: '(｡•́︿•̀｡)', tags: ['人物', '道歉', '難過', '柔和'] },
  { text: '╰(*´︶`*)╯', tags: ['人物', '恭喜', '開心'] },
  { text: '(￣▽￣)ノ', tags: ['人物', '打招呼', '招手', '極簡'] },
  { text: '٩(ˊᗜˋ*)و', tags: ['人物', '手勢', '加油', '可愛'] },
  { text: '(人´∀`)', tags: ['人物', '道謝', '柔和'] },
  { text: '✧˖° (⁎ᵕᴗᵕ⁎) °˖✧', tags: ['星星', '裝飾', '可愛'] },
  { text: '┬─┬ ノ( ゜-゜ノ)', tags: ['文字', '特殊', 'ASCII'] },
  { text: 'ᕕ( ᐛ )ᕗ', tags: ['人物', '特殊', '加油'] },
  { text: '(•̀ᴗ•́)و ̑̑', tags: ['人物', '手勢', '加油', '可愛'] },
  { text: '(´｡• ᵕ •｡`)', tags: ['人物', '可愛', '柔和', '聊天'] },
  { text: '(≧▽≦)', tags: ['人物', '開心', '可愛'] },
  { text: '(´• ω •`)', tags: ['人物', '害羞', '可愛', '柔和'] },
  { text: '( ˘‿˘ )', tags: ['人物', '柔和', '成熟', '聊天'] },
  { text: '(*´∀`*)', tags: ['人物', '開心', '可愛'] },
  { text: '(｡•́‿•̀｡)', tags: ['人物', '道歉', '柔和'] },
  { text: '(ᵕ—ᴗ—)', tags: ['人物', '晚安', '柔和'] },
  { text: '(˘︶˘).｡*♡', tags: ['愛心', '晚安', '柔和'] },
  { text: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', tags: ['人物', '恭喜', '星星'] },
  { text: 'ヽ(・∀・)ﾉ', tags: ['人物', '打招呼', '開心'] },
  { text: '(｡•̀ᴗ-)✧', tags: ['人物', '回覆', '可愛'] },
  { text: '(￣^￣)ゞ', tags: ['人物', '回覆', '手勢', '極簡'] },
  { text: 'm(_ _)m', tags: ['人物', '道謝', '道歉', 'ASCII'] },
  { text: '(_ _).｡o○', tags: ['人物', '晚安', 'ASCII'] },
  { text: '(´･_･`)', tags: ['人物', '難過', '極簡'] },
  { text: '(¬‿¬)', tags: ['人物', '聊天', '特殊'] },
  { text: '(•̀⤙•́)', tags: ['人物', '認真', '加油'] },
  { text: '(ง •̀_•́)ง', tags: ['人物', '手勢', '加油'] },
  { text: 'ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧', tags: ['手勢', '讚', '加油', '可愛'] },
  { text: 'b(￣▽￣)d', tags: ['手勢', '讚', 'ASCII'] },
  { text: 'ヾ(•ω•`)o', tags: ['手勢', '打招呼', '聊天'] },
  { text: 'ヽ(°〇°)ﾉ', tags: ['人物', '驚訝', '特殊'] },
  { text: '(⊙_⊙)', tags: ['人物', '驚訝', '極簡'] },
  { text: '(╬ Ò﹏Ó)', tags: ['人物', '生氣', '特殊'] },
  { text: 'ಠ_ಠ', tags: ['人物', '無言', '極簡'] },
  { text: '(╯°□°）╯︵ ┻━┻', tags: ['文字', '生氣', 'ASCII', '特殊'] },
  { text: '┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻', tags: ['文字', '生氣', 'ASCII', '特殊'] },
  { text: '(•ω•̥)', tags: ['動物', '熊', '難過', '可愛'] },
  { text: '(=´∇｀=)', tags: ['動物', '貓', '可愛', '特殊'] },
  { text: '(=^･ω･^=)', tags: ['動物', '貓', 'ASCII'] },
  { text: 'ᕦ(•ω•)ᕤ', tags: ['動物', '熊', '加油'] },
  { text: 'U・ω・U', tags: ['動物', '狗', '可愛'] },
  { text: '(っ•ω•)っ', tags: ['動物', '熊', '擁抱'] },
  { text: '(•ө•)♡', tags: ['動物', '鳥', '愛心'] },
  { text: '♡(˃͈ દ ˂͈ ༶ )', tags: ['愛心', '可愛', '害羞'] },
  { text: '♥‿♥', tags: ['愛心', '極簡'] },
  { text: '｡ﾟ✶ฺ.ヽ(*´∀`*)ﾉ.✶ฺﾟ｡', tags: ['星星', '恭喜', '裝飾'] },
  { text: '☆*:.｡.o(≧▽≦)o.｡.:*☆', tags: ['星星', '可愛', '裝飾'] },
  { text: '✿◕ ‿ ◕✿', tags: ['花朵', '可愛', '裝飾'] },
  { text: '❀.(*´▽`*)❀.', tags: ['花朵', '開心', '裝飾'] },
  { text: '🍙( ´ ▽ ` )', tags: ['食物', '可愛', '特殊'] },
  { text: '☀️(｡•̀ᴗ-)✧', tags: ['天氣', '早安', '可愛'] },
  { text: '☔(´•̥﹏•̥`)', tags: ['天氣', '哭', '難過'] },
  { text: '｡･:*:･ﾟ★,｡･:*:･ﾟ☆', tags: ['裝飾', '星星', '特殊'] },
  { text: '─=≡Σ((( つ•̀ω•́)つ', tags: ['文字', '手勢', '特殊'] },
  { text: '(づ￣ ³￣)づ', tags: ['人物', '愛心', '擁抱'] },
  { text: '(っ´▽`)っ', tags: ['人物', '擁抱', '柔和'] },
  { text: '(*˘︶˘*).｡.:*♡', tags: ['愛心', '可愛', '柔和'] },
  { text: '(*ˊᗜˋ*)', tags: ['人物', '早安', '開心'] },
  { text: '(｡･ω･｡)ﾉ♡', tags: ['人物', '打招呼', '愛心'] },
  { text: '(´･ω･)ﾉ(._.`)', tags: ['人物', '安慰', '柔和'] },
  { text: '⊂(･ω･*⊂)', tags: ['人物', '聊天', '可愛'] },
  { text: '＼(＾∀＾)メ(＾∀＾)ノ', tags: ['人物', '恭喜', '開心'] },
  { text: '(*･ω･)ﾉ', tags: ['人物', '結尾', '打招呼'] },
  { text: '(｡•̀ᴗ•́｡)و', tags: ['人物', '回覆', '加油'] },
  { text: '｡°(°.◜ᯅ◝°)°｡', tags: ['人物', '哭', '可愛'] },
  { text: '(´• ᴗ •̥`)', tags: ['人物', '難過', '柔和'] },
  { text: '♡˖꒰ᵕ༚ᵕ⑅꒱', tags: ['愛心', '柔和', '可愛'] },
  { text: '(｡•̀ᴗ•́｡)', tags: ['人物', '可愛', '回覆'] },
  { text: '(´▽`ʃ♡ƪ)', tags: ['愛心', '可愛', '柔和'] },
  { text: '( • ̀ω•́ )✧', tags: ['人物', '認真', '加油'] },
  { text: '(≧◡≦)', tags: ['人物', '開心', '可愛'] },
  { text: '(^人^)', tags: ['人物', '道謝', '極簡'] },
  { text: '(￣﹏￣；)', tags: ['人物', '尷尬', '特殊'] },
  { text: '(•́⍛•̀)', tags: ['人物', '困惑', '極簡'] },
  { text: '(•̀ᴗ•́)و ̑̑', tags: ['人物', '加油', '手勢'] },
  { text: '٩(˃̶͈̀௰˂̶͈́)و', tags: ['人物', '加油', '可愛'] },
  { text: '(๑˃̵ᴗ˂̵)و', tags: ['人物', '恭喜', '手勢'] },
  { text: 'ヾ(⌐■_■)ノ♪', tags: ['人物', '開心', '特殊'] },
  { text: '¯\\_(ツ)_/¯', tags: ['人物', '無言', 'ASCII'] },
  { text: '(╯︵╰,)', tags: ['人物', '哭', '難過'] },
  { text: 'ಥ_ಥ', tags: ['人物', '哭', '極簡'] },
  { text: '(；´д｀)ゞ', tags: ['人物', '道歉', '尷尬'] },
  { text: '(｡-_-｡)', tags: ['人物', '晚安', '極簡'] },
  { text: '(ᗒᗩᗕ)', tags: ['人物', '驚訝', '特殊'] },
  { text: '(ﾉ´ヮ`)ﾉ*: ･ﾟ', tags: ['人物', '恭喜', '開心'] },
  { text: '＼(￣︶￣)／', tags: ['人物', '開心', '極簡'] },
  { text: '(*￣▽￣)b', tags: ['手勢', '讚', '可愛'] },
  { text: '(´▽｀)ノ♪', tags: ['人物', '打招呼', '聊天'] },
  { text: 'ヾ(•ω•`)o', tags: ['人物', '招手', '打招呼'] },
  { text: '(´｡• ᵕ •｡`)', tags: ['人物', '害羞', '柔和'] },
  { text: '(*´艸`*)', tags: ['人物', '害羞', '可愛'] },
  { text: '(ﾉ´ з `)ノ', tags: ['人物', '愛心', '可愛'] },
  { text: '╰(▔∀▔)╯', tags: ['人物', '開心', '特殊'] },
  { text: '(¬_¬)', tags: ['人物', '無言', '極簡'] },
  { text: '(￣ω￣;)', tags: ['人物', '困惑', '極簡'] },
  { text: 'ᕙ(⇀‸↼‶)ᕗ', tags: ['人物', '加油', '特殊'] },
  { text: 'ヽ(`⌒´メ)ノ', tags: ['人物', '生氣', '特殊'] },
  { text: '(ノಠ益ಠ)ノ彡┻━┻', tags: ['文字', '生氣', 'ASCII'] },
  { text: '┬──┬ ノ( ゜-゜ノ)', tags: ['文字', '回覆', 'ASCII'] },
  { text: 'ლ(╹◡╹ლ)', tags: ['人物', '擁抱', '可愛'] },
  { text: '(っ•ω•)っ♡', tags: ['動物', '熊', '愛心'] },
  { text: '(=｀ω´=)', tags: ['動物', '貓', '可愛'] },
  { text: '(=´ω｀=)', tags: ['動物', '貓', '柔和'] },
  { text: '૮ ˶ᵔ ᵕ ᵔ˶ ა', tags: ['動物', '狗', '可愛'] },
  { text: '(•ω•)', tags: ['動物', '熊', '極簡'] },
  { text: '（・⊝・∞）', tags: ['動物', '鳥', '特殊'] },
  { text: '(=^･ω･^=)', tags: ['動物', '貓', '極簡'] },
  { text: '(•ㅅ•)♡', tags: ['動物', '兔子', '愛心'] },
  { text: '♡(｡- ω -)', tags: ['愛心', '晚安', '柔和'] },
  { text: '♡〜٩( ˃́▿˂̀ )۶〜♡', tags: ['愛心', '開心', '可愛'] },
  { text: '˗ˏˋ ♡ ˎˊ˗', tags: ['愛心', '裝飾', '極簡'] },
  { text: '✧･ﾟ: *✧･ﾟ:*', tags: ['星星', '裝飾', '特殊'] },
  { text: '⋆｡°✩', tags: ['星星', '裝飾', '極簡'] },
  { text: '✿(˶ˊᵕˋ˶)✿', tags: ['花朵', '可愛', '裝飾'] },
  { text: '☘︎(ˊᵕˋ)☘︎', tags: ['花朵', '柔和', '裝飾'] },
  { text: '☕(˘▾˘☕)', tags: ['食物', '聊天', '可愛'] },
  { text: '🍰(｡•̀ᴗ-)✧', tags: ['食物', '恭喜', '可愛'] },
  { text: '☁︎( ˘ω˘ )☁︎', tags: ['天氣', '晚安', '柔和'] },
  { text: '☀︎(≧▽≦)☀︎', tags: ['天氣', '早安', '開心'] },
  { text: '｡ﾟﾟ･｡･ﾟﾟ｡', tags: ['裝飾', '柔和', '特殊'] },
  { text: '╭( ･ㅂ･)و ̑̑', tags: ['手勢', '加油', '可愛'] },
];

data.push(...[
  ['(•̀ᴗ•́)و', ['人物', '加油']], ['(˶˃ ᵕ ˂˶)', ['人物', '可愛']], ['(˶˘ ᵕ ˘˶)', ['人物', '柔和']],
  ['(˶ᵔ ᵕ ᵔ˶)♡', ['愛心', '可愛']], ['(•̀⤙•́)', ['人物', '認真']], ['(˘▽˘)', ['人物', '開心']],
  ['(￣▽￣)', ['人物', '極簡']], ['(´•‿•`)', ['人物', '聊天']], ['(｡•́︿•̀｡)', ['人物', '難過']],
  ['(╥_╥)', ['人物', '哭']], ['(っ╥﹏╥)っ', ['人物', '哭']], ['(´;︵;`)', ['人物', '難過']],
  ['(,,•﹏•,,)', ['人物', '害羞']], ['(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)', ['人物', '害羞']], ['(〃▽〃)', ['人物', '害羞']],
  ['(￣へ￣)', ['人物', '生氣']], ['(¬_¬ )', ['人物', '無言']], ['(•̀ω•́ )', ['人物', '認真']],
  ['(⊙﹏⊙)', ['人物', '驚訝']], ['(°ロ°) !', ['人物', '驚訝']], ['(╯°□°)╯', ['人物', '驚訝']],
  ['(｡•̀⤙•́｡)', ['人物', '回覆']], ['(￣^￣)ゞ', ['人物', '回覆']], ['(｀･ω･´)ゞ', ['人物', '回覆']],
  ['( ´ ▽ ` )', ['人物', '打招呼']], ['(｡･ω･)ﾉﾞ', ['人物', '打招呼']], ['(・ω・)ノ', ['人物', '招手']],
  ['(￣o￣) . z Z', ['人物', '晚安']], ['(∪｡∪)｡｡｡zzZ', ['人物', '晚安']], ['(˘ω˘)ｽﾔｧ', ['人物', '晚安']],
  ['(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', ['人物', '恭喜']], ['ヽ(≧▽≦)ノ', ['人物', '恭喜']], ['(≧∇≦)ﾉ', ['人物', '恭喜']],
  ['(人´∀`)', ['人物', '道謝']], ['(｡ᵕᴗᵕ｡)', ['人物', '道謝']], ['<(_ _)>', ['人物', '道歉', 'ASCII']],
  ['(シ_ _)シ', ['人物', '道歉', 'ASCII']], ['(；￣Д￣)', ['人物', '困惑']], ['(・_・;)', ['人物', '尷尬']],
  ['ᕙ( •̀ ᗜ •́ )ᕗ', ['人物', '加油']], ['ᕦ(ò_óˇ)ᕤ', ['人物', '加油']], ['ヽ(｀⌒´)ノ', ['人物', '加油']],
  ['o(≧▽≦)o', ['人物', '開心']], ['(ﾉ´ヮ`)ﾉ*:･ﾟ✧', ['人物', '開心']], ['(✧ω✧)', ['人物', '開心']],
  ['(づ｡◕‿‿◕｡)づ', ['人物', '擁抱']], ['⊂(･ω･*⊂)', ['人物', '擁抱']], ['(っ˘̩╭╮˘̩)っ', ['人物', '安慰']],
  ['(っ˘з(˘⌣˘ )', ['愛心', '擁抱']], ['( ˘ ³˘)♥', ['愛心', '可愛']], ['(♡˙︶˙♡)', ['愛心', '柔和']],
  ['♡(˘▽˘>ԅ( ˘▽˘ )', ['愛心', '擁抱']], ['♥(ˆ⌣ˆԅ)', ['愛心', '可愛']], ['(♥ω♥*)', ['愛心', '可愛']],
  ['(=①ω①=)', ['動物', '貓']], ['(=^-ω-^=)', ['動物', '貓']], ['ฅ(=･ω･=)ฅ', ['動物', '貓']],
  ['(=^･ｪ･^=)', ['動物', '貓']], ['(=^･ω･^=)', ['動物', '貓']], ['U´•ω•`U', ['動物', '狗']],
  ['ฅ^•ﻌ•^ฅ', ['動物', '狗']], ['(￫ω￩)', ['動物', '熊']], ['ᕙ(•ω•)ᕗ', ['動物', '熊']],
  ['(◕ω◕)', ['動物', '熊']], ['(•ө•)♡', ['動物', '鳥']], ['(•ㅅ•)', ['動物', '兔子']],
  ['ᘛ⁐̤ᕐᐷ', ['動物', '兔子']], ['(•̀ᴗ•́)و ̑̑', ['手勢', '加油']], ['(￣▽￣)b', ['手勢', '讚']],
  ['d=(´▽｀)=b', ['手勢', '讚']], ['(ง •̀_•́)ง', ['手勢', '加油']], ['(づ￣ ³￣)づ', ['手勢', '愛心']],
  ['✧◝(⁰▿⁰)◜✧', ['星星', '裝飾']], ['☆⌒(*＾-゜)v', ['星星', '加油']], ['★~(◡﹏◕✿)', ['星星', '可愛']],
  ['✿◠‿◠', ['花朵', '可愛']], ['❁´◡`❁', ['花朵', '柔和']], ['✾(˶ˊᵕˋ˶)✾', ['花朵', '可愛']],
  ['(っ˘ڡ˘ς)', ['食物', '可愛']], ['(っ˘ڡ˘ς)🍙', ['食物', '可愛']], ['☕︎(˘︶˘)', ['食物', '聊天']],
  ['☂(︶︹︺)', ['天氣', '難過']], ['☀︎٩(ˊᗜˋ*)و', ['天氣', '早安']], ['❄︎(˘ω˘)', ['天氣', '晚安']],
  ['｡ﾟ•┈୨♡୧┈•ﾟ｡', ['裝飾', '愛心']], ['╰┈➤ ✧', ['裝飾', '特殊']], ['⋆౨ৎ˚⟡˖', ['裝飾', '星星']],
  ['(╯°□°）╯︵ ┻━┻', ['文字', 'ASCII']], ['┬─┬ノ( º _ ºノ)', ['文字', 'ASCII']], ['(╯°□°)╯︵ ʞooqǝɔɐɟ', ['文字', 'ASCII']],
].map(([text, tags]) => ({ text, tags })));

data.push(...[
  ['☾⋆⁺₊✧', ['符號', '晚安', '裝飾']], ['⋆｡‧˚♡˚‧｡⋆', ['符號', '裝飾', '特殊']], ['♡⌒♡', ['符號', '愛心', '裝飾']],
  ['⋆.˚ ☾ ⋆.˚', ['符號', '天氣', '特殊']], ['⋆˙⟡♡⟡˙⋆', ['符號', '愛心', '特殊']], ['⌒☆⌒', ['符號', '星星', '裝飾']],
  ['✧˖°⌖.꙳✧˖°', ['符號', '星星', '裝飾']], ['─ ⋆⋅☆⋅⋆ ─', ['符號', '星星', '裝飾']], ['˚₊‧꒰ა ☆ ໒꒱ ‧₊˚', ['符號', '星星', '特殊']],
  ['⊹ ࣪ ˖꒰ঌ ♡ ໒꒱˖ ࣪ ⊹', ['符號', '愛心', '特殊']], ['꒰ა ♡ ໒꒱', ['符號', '愛心', '可愛']], ['♡₊˚ 🦢・₊✧', ['符號', '愛心', '特殊']],
  ['‧₊˚✧༺☆༻✧˚₊‧', ['符號', '星星', '特殊']], ['༺♡༻', ['符號', '愛心', '極簡']], ['✦•┈๑⋅⋯ ⋯⋅๑┈•✦', ['符號', '裝飾', '特殊']],
  ['╔══♡══╗', ['符號', '愛心', 'ASCII']], ['╰┈➤ ˎˊ˗', ['符號', '裝飾', '特殊']], ['⋆. ♡ ˚', ['符號', '愛心', '可愛']],
  ['₊˚⊹ ♡ ·', ['符號', '愛心', '柔和']], ['✿˚₊‧', ['符號', '花朵', '裝飾']], ['✿🌷✿', ['符號', '花朵', '特殊']],
  ['｡✦°‧', ['符號', '裝飾', '極簡']], ['⌗', ['符號', '極簡']], ['⋮', ['符號', '極簡']],
  ['⋆｡°✩☾⋆⁺₊✧', ['符號', '晚安', '星星']], ['⟡ ݁₊ .', ['符號', '極簡', '裝飾']], ['✦', ['符號', '可愛', '極簡']],
  ['૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა', ['特殊', '可愛', '人物']], ['(˵ •̀ ᴗ - ˵ ) ✧', ['特殊', '人物', '可愛']], ['(づ ᴗ _ᴗ)づ♡', ['特殊', '愛心', '擁抱']],
  ['( ｡ •̀ ᴖ •́ ｡)💢', ['特殊', '人物', '生氣']], ['ᕕ(⌐■_■)ᕗ ♪♬', ['特殊', '人物', '開心']], ['(╥﹏╥)૭', ['特殊', '人物', '哭']],
  ['(づ｡◕‿‿◕｡)づ☆', ['特殊', '人物', '星星']], ['(ง’̀-‘́)ง', ['特殊', '人物', '加油']], ['ᕙ(  •̀ ᗜ •́  )ᕗ', ['特殊', '人物', '加油']],
].map(([text, tags]) => ({ text, tags })));

// Google 搜尋欄與部分 App 不含罕見語音／加拿大原住民文字的字型。
// 顯示與複製時統一改用跨平台支援較穩定的近似字形。
const compatibilityReplacements = {
  'ᴗ': 'ω', 'ᵕ': '‿', 'ᵔ': '⌣', 'ᴖ': '⌒',
  'ᗜ': '▽', 'ᗒ': '•', 'ᗩ': '△', 'ᗕ': '•',
  'ᕕ': 'ヽ', 'ᕗ': 'ノ', 'ᕙ': '(', 'ᕦ': '(', 'ᕤ': ')',
  'ᐡ': '', 'ᘛ': '(', 'ᕐ': '·', 'ᐷ': ')',
  'ʃ': 'つ', 'ʞ': 'k', 'ɔ': 'c', 'ɐ': 'a', 'ɟ': 'f'
};
data.forEach(item => {
  item.text = [...item.text].map(char => compatibilityReplacements[char] || char).join('').replace('ദ്ദി', 'd');
});

const defaultCategories = [
  ['all', '全部'], ['updated', '最近更新'], ['recent', '最近使用'], ['favorites', '收藏'],
  ['動物', '動物'], ['人物', '人物'], ['手勢', '手勢'], ['愛心', '愛心'], ['符號', '符號'], ['裝飾', '裝飾'], ['more', '更多']
];
function getCategoryOrder() {
  const saved = readLocalList('kaomoji-category-order');
  const keys = defaultCategories.map(([key]) => key);
  const valid = saved.filter(key => keys.includes(key));
  return [...valid, ...keys.filter(key => !valid.includes(key))];
}
let categories = getCategoryOrder().map(key => defaultCategories.find(([candidate]) => candidate === key));
const categoryNames = Object.fromEntries(categories);
const filterGroups = {
  '圖案': ['動物', '人物', '手勢', '愛心', '星星', '花朵', '食物', '天氣', '符號', '裝飾', '文字'],
  '用途': ['打招呼', '道謝', '道歉', '加油', '恭喜', '晚安', '早安', '回覆', '聊天', '結尾'],
  '風格': ['可愛', '日系', '極簡', '柔和', '成熟', 'ASCII', '特殊']
};
const queryAliases = {
  哭: ['難過', '傷心', '委屈'], 難過: ['哭', '傷心', '委屈'], 傷心: ['哭', '難過'], 安慰: ['擁抱', '柔和'],
  貓: ['動物'], 狗: ['動物'], 熊: ['動物'], 招手: ['打招呼'], 你好: ['打招呼'], 哈囉: ['打招呼'],
  謝謝: ['道謝'], 感謝: ['道謝'], 對不起: ['道歉'], 抱歉: ['道歉'], 晚安: ['睡覺', '柔和'], 睡覺: ['晚安'],
  可愛: ['柔和'], 愛: ['愛心'], 喜歡: ['愛心'], 鼓勵: ['加油'], 恭賀: ['恭喜'], 生氣: ['憤怒'], 憤怒: ['生氣'],
  驚嚇: ['驚訝'], 早: ['早安'], 再見: ['結尾'], 掰掰: ['結尾']
};
const relatedSearches = {
  哭: ['難過', '安慰', '晚安'], 難過: ['哭', '安慰', '柔和'], 貓: ['動物', '熊', '可愛'],
  愛: ['愛心', '擁抱', '可愛'], 打招呼: ['招手', '早安', '結尾'], 加油: ['手勢', '恭喜', '讚']
};
const categoryEl = document.querySelector('#categories');
const listEl = document.querySelector('#kaomoji-list');
const listTitle = document.querySelector('#list-title');
const categoryDescription = document.querySelector('#category-description');
const countEl = document.querySelector('#result-count');
const emptyEl = document.querySelector('#empty-state');
const searchInputs = [...document.querySelectorAll('#search-input, #hero-search-input')];
const searchInput = document.querySelector('#hero-search-input');
const clearButton = document.querySelector('.clear-search');
const template = document.querySelector('#kaomoji-template');
const filterPanel = document.querySelector('#filter-panel');
const randomButton = document.querySelector('#random-button');
const relatedSearchesEl = document.querySelector('#related-searches');
const resetCategoryOrderButton = document.querySelector('#reset-category-order');
let activeCategory = 'all';
let expandedFilters = false;
let draggedCategory = null;
let dragOverCategory = null;
let touchTimer = null;
let touchReordering = false;
function readLocalList(key) {
  try { const value = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(value) ? [...new Set(value)] : []; }
  catch { return []; }
}
let favorites = readLocalList('kaomoji-favorites');
let recents = readLocalList('kaomoji-recents');

function save() {
  localStorage.setItem('kaomoji-favorites', JSON.stringify(favorites));
  localStorage.setItem('kaomoji-recents', JSON.stringify(recents));
}

function saveCategoryOrder() {
  localStorage.setItem('kaomoji-category-order', JSON.stringify(categories.map(([key]) => key)));
  resetCategoryOrderButton.hidden = categories.map(([key]) => key).join('|') === defaultCategories.map(([key]) => key).join('|');
}

function reorderCategories(fromKey, toKey) {
  if (!fromKey || !toKey || fromKey === toKey) return;
  const from = categories.findIndex(([key]) => key === fromKey);
  const to = categories.findIndex(([key]) => key === toKey);
  categories.splice(to, 0, categories.splice(from, 1)[0]);
  saveCategoryOrder(); renderCategories();
}

window.addEventListener('storage', event => {
  if (event.key === 'kaomoji-favorites') favorites = readLocalList('kaomoji-favorites');
  if (event.key === 'kaomoji-recents') recents = readLocalList('kaomoji-recents');
  if (event.key === 'kaomoji-favorites' || event.key === 'kaomoji-recents') renderList();
});

function matchesCategory(item) {
  if (activeCategory === 'all' || activeCategory === 'updated') return true;
  if (activeCategory === 'favorites') return favorites.includes(item.text);
  if (activeCategory === 'recent') return recents.includes(item.text);
  if (activeCategory === 'more') return true;
  return item.tags.includes(activeCategory);
}

function getSearchTerms(query) {
  const direct = queryAliases[query] || [];
  const reverse = Object.entries(queryAliases).filter(([, values]) => values.includes(query)).map(([key]) => key);
  return [...new Set([query, ...direct, ...reverse])];
}

function getVisibleItems() {
  const query = searchInput.value.trim().toLowerCase();
  let items = data.filter(item => matchesCategory(item));
  if (query) {
    const terms = getSearchTerms(query);
    items = items.map(item => {
      const tags = item.tags.join(' ').toLowerCase();
      const score = terms.reduce((best, term) => Math.max(best, item.text.includes(term) ? 4 : item.tags.includes(term) ? 3 : tags.includes(term) ? 2 : 0), 0);
      return { item, score };
    }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).map(({ item }) => item);
  }
  if (activeCategory === 'recent') items.sort((a, b) => recents.indexOf(a.text) - recents.indexOf(b.text));
  return items;
}

function renderRelatedSearches() {
  relatedSearchesEl.replaceChildren();
  const query = searchInput.value.trim();
  const suggestions = relatedSearches[query] || (query ? ['可愛', '打招呼', '加油'] : []);
  suggestions.forEach(term => {
    const button = document.createElement('button'); button.type = 'button'; button.textContent = term;
    button.addEventListener('click', () => setSearch(term)); relatedSearchesEl.append(button);
  });
}

function setSearch(value) {
  searchInputs.forEach(input => { input.value = value; });
  clearButton.classList.toggle('visible', Boolean(value)); renderList(); searchInput.focus();
}

function renderCategories() {
  categoryEl.replaceChildren();
  categories.forEach(([key, label]) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = `category-button${key === activeCategory || (key === 'more' && expandedFilters) ? ' active' : ''}`;
    button.textContent = label; button.dataset.category = key; button.draggable = true; button.title = '拖移以排序';
    button.addEventListener('click', () => {
      if (touchReordering) return;
      if (key === 'more') { expandedFilters = !expandedFilters; filterPanel.hidden = !expandedFilters; renderCategories(); return; }
      activeCategory = key; expandedFilters = false; filterPanel.hidden = true; renderCategories(); renderFilters(); renderList();
    });
    button.addEventListener('dragstart', event => { draggedCategory = key; button.classList.add('dragging'); event.dataTransfer.effectAllowed = 'move'; });
    button.addEventListener('dragend', () => { draggedCategory = null; dragOverCategory = null; categoryEl.classList.remove('reorder-mode'); renderCategories(); });
    button.addEventListener('dragover', event => { if (!draggedCategory || draggedCategory === key) return; event.preventDefault(); dragOverCategory = key; categoryEl.querySelectorAll('.drop-target').forEach(item => item.classList.remove('drop-target')); button.classList.add('drop-target'); categoryEl.classList.add('reorder-mode'); });
    button.addEventListener('drop', event => { event.preventDefault(); reorderCategories(draggedCategory, key); });
    button.addEventListener('pointerdown', event => {
      if (event.pointerType !== 'touch') return;
      touchTimer = window.setTimeout(() => { touchReordering = true; draggedCategory = key; categoryEl.classList.add('reorder-mode'); button.classList.add('dragging'); }, 350);
    });
    button.addEventListener('pointermove', event => {
      if (!touchReordering || !draggedCategory) return;
      event.preventDefault();
      const target = document.elementFromPoint(event.clientX, event.clientY)?.closest('.category-button');
      if (target && target.dataset.category !== draggedCategory) { dragOverCategory = target.dataset.category; categoryEl.querySelectorAll('.drop-target').forEach(item => item.classList.remove('drop-target')); target.classList.add('drop-target'); }
    });
    button.addEventListener('pointerup', () => {
      window.clearTimeout(touchTimer);
      if (touchReordering) { reorderCategories(draggedCategory, dragOverCategory); touchReordering = false; draggedCategory = null; dragOverCategory = null; }
    });
    button.addEventListener('pointercancel', () => { window.clearTimeout(touchTimer); touchReordering = false; draggedCategory = null; dragOverCategory = null; renderCategories(); });
    categoryEl.append(button);
  });
  saveCategoryOrder();
}

function renderFilters() {
  filterPanel.replaceChildren();
  Object.entries(filterGroups).forEach(([group, tags]) => {
    const wrapper = document.createElement('div'); wrapper.className = 'filter-group';
    const label = document.createElement('span'); label.textContent = group; wrapper.append(label);
    const options = document.createElement('div'); options.className = 'filter-options';
    tags.forEach(tag => {
      const button = document.createElement('button'); button.type = 'button'; button.className = `filter-option${activeCategory === tag ? ' active' : ''}`; button.textContent = tag;
      button.addEventListener('click', () => { activeCategory = tag; expandedFilters = false; filterPanel.hidden = true; renderCategories(); renderFilters(); renderList(); });
      options.append(button);
    });
    wrapper.append(options); filterPanel.append(wrapper);
  });
}

function renderList() {
  const items = getVisibleItems();
  listEl.replaceChildren();
  listTitle.textContent = searchInput.value.trim() ? `搜尋「${searchInput.value.trim()}」` : `${categoryNames[activeCategory] || activeCategory}顏文字`;
  const descriptions = { all: '從今天的心情開始挑選。', updated: '剛加入的顏文字。', recent: '你最近複製過的內容。', favorites: '留給下一次使用。', 動物: '貓、熊與各種可愛生物。', 人物: '日常情緒與表情。', 手勢: '用動作代替一句話。', 愛心: '把喜歡傳出去。', 符號: '特殊符號與裝飾性文字。', 裝飾: '讓訊息多一點氣氛。', more: '用完整分類找到剛剛好的表情。' };
  categoryDescription.textContent = searchInput.value.trim() ? '依名稱、用途、外觀與關鍵字篩選。' : descriptions[activeCategory];
  countEl.textContent = `${items.length} 個`;
  emptyEl.hidden = items.length > 0;
  if (!items.length) renderRelatedSearches();
  items.forEach(item => {
    const fragment = template.content.cloneNode(true);
    const row = fragment.querySelector('.kaomoji-row');
    const copy = fragment.querySelector('.kaomoji-copy');
    const text = fragment.querySelector('.kaomoji-text');
    const favorite = fragment.querySelector('.favorite-button');
    text.textContent = item.text;
    fragment.querySelector('.kaomoji-tags').innerHTML = item.tags.slice(0, 2).map(tag => `<i>${tag}</i>`).join('');
    copy.setAttribute('aria-label', `複製：${item.tags.slice(0, 2).join('、')} ${item.text}`);
    favorite.classList.toggle('active', favorites.includes(item.text));
    favorite.setAttribute('aria-label', favorites.includes(item.text) ? '取消收藏' : '加入收藏');
    copy.addEventListener('click', () => copyItem(item.text, row));
    favorite.addEventListener('click', () => toggleFavorite(item.text));
    listEl.append(fragment);
  });
}

async function copyItem(text, row) {
  try { await navigator.clipboard.writeText(text); }
  catch { const input = document.createElement('textarea'); input.value = text; document.body.append(input); input.select(); document.execCommand('copy'); input.remove(); }
  recents = [text, ...recents.filter(item => item !== text)].slice(0, 30); save();
  if (row) { row.classList.add('copied'); window.setTimeout(() => row.classList.remove('copied'), 800); }
}

function toggleFavorite(text) {
  favorites = favorites.includes(text) ? favorites.filter(item => item !== text) : [text, ...favorites];
  save(); renderList();
}

searchInputs.forEach(input => input.addEventListener('input', event => {
  searchInputs.forEach(other => { if (other !== event.target) other.value = event.target.value; });
  clearButton.classList.toggle('visible', Boolean(searchInput.value));
  renderList();
}));
clearButton.addEventListener('click', () => {
  searchInputs.forEach(input => { input.value = ''; });
  clearButton.classList.remove('visible'); searchInput.focus(); renderList();
});
document.querySelectorAll('.suggestions button:not(#random-button)').forEach(button => button.addEventListener('click', () => setSearch(button.textContent)));
document.querySelector('#reset-button').addEventListener('click', () => {
  searchInputs.forEach(input => { input.value = ''; });
  activeCategory = 'all'; clearButton.classList.remove('visible'); renderCategories(); renderList();
});
randomButton.addEventListener('click', async () => {
  const item = data[Math.floor(Math.random() * data.length)];
  await copyItem(item.text);
  const original = randomButton.textContent; randomButton.textContent = `已複製 ${item.text}`;
  window.setTimeout(() => { randomButton.textContent = original; }, 1200);
});
resetCategoryOrderButton.addEventListener('click', () => {
  categories = [...defaultCategories]; localStorage.removeItem('kaomoji-category-order'); saveCategoryOrder(); renderCategories();
});
document.addEventListener('keydown', event => {
  const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
  if (event.key === '/' && !isTyping) { event.preventDefault(); searchInput.focus(); }
  if (event.key === 'Escape' && isTyping && searchInput.value) { setSearch(''); }
});

renderCategories();
renderFilters();
renderList();
