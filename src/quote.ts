export type Quote = {
	id: string;
	text: string;
	author: string;
};

export type QuoteV1 = {
	id: string;
	text: string;
	source: string;
};

export const BuiltinQuotes: Array<Quote> = [
	{
		id: "1",
		text: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.\n\n我只教三件事：简单、耐心、慈悲。这三者是你最珍贵的宝藏。",
		author: "Lao Tzu\n老子",
	},
	{
		id: "2",
		text: "Do today what others won't and achieve tomorrow what others can't.\n\n今天做别人不愿做的事，明天才能做到别人做不到的事。",
		author: "Jerry Rice\n杰里·赖斯",
	},
	{
		id: "3",
		text: "In character, in manner, in style, in all things, the supreme excellence is simplicity.\n\n在品格、举止、风格和一切事物上，至高的卓越都是简单。",
		author: "Henry Wadsworth Longfellow\n亨利·沃兹沃思·朗费罗",
	},
	{
		id: "6",
		text: "All that we are is the result of what we have thought.\n\n我们的一切，皆是思想的结果。",
		author: "Buddha\n佛陀",
	},
	{
		id: "8",
		text: "Never leave that till tomorrow which you can do today.\n\n今天能做的事，绝不要留到明天。",
		author: "Benjamin Franklin\n本杰明·富兰克林",
	},
	{
		id: "11",
		text: "Tomorrow is often the busiest day of the week.\n\n明天往往是一周中最忙的一天。",
		author: "Spanish Proverb\n西班牙谚语",
	},
	{
		id: "12",
		text: "I can accept failure, everyone fails at something. But I can't accept not trying.\n\n我可以接受失败，每个人都会在某件事上失败。但我不能接受不去尝试。",
		author: "Michael Jordan\n迈克尔·乔丹",
	},
	{
		id: "13",
		text: "There’s a myth that time is money. In fact, time is more precious than money. It’s a nonrenewable resource. Once you’ve spent it, and if you’ve spent it badly, it’s gone forever.\n\n有一种迷思说时间就是金钱。事实上，时间比金钱更宝贵。它是一种不可再生的资源。一旦你把它花掉了，而且花得很糟，它就永远消失了。",
		author: "Neil A. Fiore\n尼尔·A·菲奥雷",
	},
	{
		id: "15",
		text: "There is only one success--to be able to spend your life in your own way.\n\n成功只有一种：能够按自己的方式度过一生。",
		author: "Christopher Morley\n克里斯托弗·莫利",
	},
	{
		id: "17",
		text: "We are still masters of our fate. We are still captains of our souls.\n\n我们仍是自己命运的主人，仍是自己灵魂的船长。",
		author: "Winston Churchill\n温斯顿·丘吉尔",
	},
	{
		id: "18",
		text: "Our truest life is when we are in dreams awake.\n\n当我们在清醒的梦中时，才是真正活着。",
		author: "Henry David Thoreau\n亨利·戴维·梭罗",
	},
	{
		id: "19",
		text: "The best way to make your dreams come true is to wake up.\n\n让梦想成真的最好方法，就是醒来。",
		author: "Paul Valery\n保罗·瓦莱里",
	},
	{
		id: "20",
		text: "Life without endeavor is like entering a jewel mine and coming out with empty hands.\n\n人生若无努力，就像走进宝石矿却空手而归。",
		author: "Japanese Proverb\n日本谚语",
	},
	{
		id: "21",
		text: "Happiness does not consist in pastimes and amusements but in virtuous activities.\n\n幸福不在消遣和娱乐中，而在有德性的行动中。",
		author: "Aristotle\n亚里士多德",
	},
	{
		id: "29",
		text: "This is your life and it's ending one minute at a time.\n\n这是你的人生，而它正一分一秒地走向终结。",
		author: "Tyler Durden, Fight Club\n泰勒·德顿，《搏击俱乐部》",
	},
	{
		id: "31",
		text: "Great achievement is usually born of great sacrifice, and is never the result of selfishness.\n\n伟大的成就通常源于巨大的牺牲，绝不是自私的产物。",
		author: "Napoleon Hill\n拿破仑·希尔",
	},
	{
		id: "33",
		text: "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.\n\n即使我知道明天世界将分崩离析，我今天仍会种下我的苹果树。",
		author: "Martin Luther\n马丁·路德",
	},
	{
		id: "34",
		text: "Great acts are made up of small deeds.\n\n伟大的行动由细小的事构成。",
		author: "Lao Tzu\n老子",
	},
	{
		id: "35",
		text: "The light that burns twice as bright burns half as long.\n\n光芒越是加倍明亮，燃烧的时间就越短。",
		author: "Dr. Tyrell, Blade Runner\n泰瑞尔博士，《银翼杀手》",
	},
	{
		id: "36",
		text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.\n\n完美不是再也无物可加，而是再也无物可减。",
		author: "Antoine de Saint-Exupery\n安托万·德·圣-埃克苏佩里",
	},
	{
		id: "37",
		text: "If you can't do great things, do small things in a great way.\n\n如果你做不了伟大的事，就把小事做得伟大。",
		author: "Napoleon Hill\n拿破仑·希尔",
	},
	{
		id: "38",
		text: "When I let go of what I am, I become what I might be.\n\n当我放下现在的自己，才能成为可能的自己。",
		author: "Lao Tzu\n老子",
	},
	{
		id: "39",
		text: "Do not go where the path may lead, go instead where there is no path and leave a trail.\n\n不要沿着已有的路走，而要走向无路之处，留下自己的足迹。",
		author: "Ralph Waldo Emerson\n拉尔夫·沃尔多·爱默生",
	},
	{
		id: "40",
		text: "Well done is better than well said.\n\n做得好胜过说得好。",
		author: "Benjamin Franklin\n本杰明·富兰克林",
	},
	{
		id: "41",
		text: "Whatever you think the world is withholding from you, you are withholding from the world.\n\n你以为世界没有给你的东西，其实是你没有给予世界。",
		author: "Eckhart Tolle\n埃克哈特·托利",
	},
	{
		id: "42",
		text: "Muddy water is best cleared by leaving it alone.\n\n浑水最好的澄清方式，是让它静置。",
		author: "Alan Watts\n艾伦·瓦茨",
	},
	{
		id: "43",
		text: "Do, or do not. There is no try.\n\n做，或者不做。没有试试看。",
		author: "Yoda\n尤达",
	},
	{
		id: "44",
		text: "The superior man is modest in his speech, but exceeds in his actions.\n\n君子言语谦逊，行动却超越言辞。",
		author: "Confucius\n孔子",
	},
	{
		id: "45",
		text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.\n\n乐观是通向成就的信念。没有希望和信心，什么都做不成。",
		author: "Helen Keller\n海伦·凯勒",
	},
	{
		id: "46",
		text: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.\n\n我们必须相信自己天生有某种才能，而无论付出怎样的代价，都必须实现它。",
		author: "Marie Skłodowska-Curie\n玛丽·斯克沃多夫斯卡-居里",
	},
	{
		id: "47",
		text: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.\n\n如果你看见生命中已有的，你会一直拥有更多。如果你盯着生命中没有的，你永远不会满足。",
		author: "Oprah Winfrey\n奥普拉·温弗瑞",
	},
	{
		id: "48",
		text: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.\n\n你可能会遭遇许多失败，但绝不能被失败击倒。事实上，也许正需要经历失败，才能知道自己是谁，知道自己能从何处重新站起，知道自己如何走出来。",
		author: "Maya Angelou\n玛雅·安杰洛",
	},
	{
		id: "50",
		text: "There are two kinds of people, those who do the work and those who take the credit. Try to be in the first group; there is less competition there.\n\n世上有两种人：做事的人和抢功的人。尽量做第一种人，因为那里竞争少一些。",
		author: "Indira Gandhi\n英迪拉·甘地",
	},
	{
		id: "51",
		text: "You can’t be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.\n\n你不能像那个站在滑梯顶端反复犹豫的孩子。你必须滑下去。",
		author: "Tina Fey\n蒂娜·菲",
	},
	{
		id: "52",
		text: "Above all, be the heroine of your life, not the victim.\n\n最重要的是，做自己人生的女主角，而不是受害者。",
		author: "Nora Ephron\n诺拉·艾芙隆",
	},
	{
		id: "53",
		text: "Learn from the mistakes of others. You can’t live long enough to make them all yourself.\n\n从别人的错误中学习。你没法活得足够久，把所有错误都亲自犯一遍。",
		author: "Eleanor Roosevelt\n埃莉诺·罗斯福",
	},
	{
		id: "54",
		text: "What you do makes a difference, and you have to decide what kind of difference you want to make.\n\n你的所作所为会带来改变，而你必须决定自己想带来怎样的改变。",
		author: "Jane Goodall\n珍·古道尔",
	},
	{
		id: "55",
		text: "One of the secrets to staying young is to always do things you don’t know how to do, to keep learning.\n\n保持年轻的秘诀之一，就是总去做那些你还不知道怎么做的事，不断学习。",
		author: "Ruth Reichl\n露丝·赖克尔",
	},
	{
		id: "56",
		text: "If you don’t risk anything, you risk even more.\n\n如果你什么风险都不冒，风险反而更大。",
		author: "Erica Jong\n埃丽卡·琼",
	},
	{
		id: "57",
		text: "When the whole world is silent, even one voice becomes powerful.\n\n当全世界沉默时，哪怕一个声音也会变得强大。",
		author: "Malala Yousafzai\n马拉拉·优素福扎伊",
	},
	{
		id: "58",
		text: "The most common way people give up their power is by thinking they don’t have any.\n\n人们放弃自身力量最常见的方式，就是以为自己没有力量。",
		author: "Alice Walker\n艾丽斯·沃克",
	},
	{
		id: "59",
		text: "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.\n\n我的人生哲学是：你不仅要对自己的生活负责，而且此刻尽力而为，会让你在下一刻处于最好的位置。",
		author: "Oprah Winfrey\n奥普拉·温弗瑞",
	},
	{
		id: "60",
		text: "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.\n\n不要被自己不知道的东西吓住。那可能是你最大的优势，并确保你以不同于所有人的方式做事。",
		author: "Sara Blakely\n萨拉·布莱克利",
	},
	{
		id: "61",
		text: "If I had to live my life again, I’d make the same mistakes, only sooner.\n\n如果让我重新活一次，我还会犯同样的错，只是会更早犯。",
		author: "Tallulah Bankhead\n塔卢拉·班克黑德",
	},
	{
		id: "62",
		text: "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.\n\n不要因为别人的想象有限而限制自己；也不要因为自己的想象有限而限制别人。",
		author: "Mae C. Jemison\n梅·C·杰米森",
	},
	{
		id: "63",
		text: "If you obey all the rules, you miss all the fun.\n\n如果你遵守所有规则，就会错过所有乐趣。",
		author: "Katharine Hepburn\n凯瑟琳·赫本",
	},
	{
		id: "64",
		text: "Life shrinks or expands in proportion to one’s courage.\n\n生命会随着勇气的大小而收缩或扩展。",
		author: "Anaïs Nin\n阿娜伊斯·宁",
	},
	{
		id: "65",
		text: "Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.\n\n长远来看，躲避危险并不比直接面对更安全。胆怯者和勇敢者一样常常被困住。",
		author: "Helen Keller\n海伦·凯勒",
	},
	{
		id: "66",
		text: "How wonderful it is that nobody need wait a single moment before beginning to improve the world.\n\n多么美好：没有人需要等待哪怕一刻，才开始改善这个世界。",
		author: "Anne Frank\n安妮·弗兰克",
	},
	{
		id: "67",
		text: "So often people are working hard at the wrong thing. Working on the right thing is probably more important than working hard.\n\n人们常常在错误的事情上努力。做正确的事，大概比努力本身更重要。",
		author: "Caterina Fake\n卡特琳娜·费克",
	},
	{
		id: "68",
		text: "There are still many causes worth sacrificing for, so much history yet to be made.\n\n仍有许多值得牺牲的事业，还有许多历史等待被创造。",
		author: "Michelle Obama\n米歇尔·奥巴马",
	},
	{
		id: "69",
		text: "Nothing is impossible; the word itself says ‘I’m possible’!\n\n没有什么不可能；这个词本身就在说“我可能”！",
		author: "Audrey Hepburn\n奥黛丽·赫本",
	},
	{
		id: "70",
		text: "You only live once, but if you do it right, once is enough.\n\n人只活一次，但如果活得正确，一次就足够。",
		author: "Mae West\n梅·韦斯特",
	},
	{
		id: "71",
		text: "We must use time creatively, in the knowledge that the time is always ripe to do right.\n\n我们必须创造性地利用时间，并明白做正确的事永远正当其时。",
		author: "Martin Luther King Jr.\n马丁·路德·金",
	},
	{
		id: "72",
		text: "Every birthday is a gift. Every day is a gift.\n\n每个生日都是一份礼物。每一天都是一份礼物。",
		author: "Aretha Franklin\n艾瑞莎·富兰克林",
	},
	{
		id: "73",
		text: "The quality, not the longevity, of one’s life is what is important.\n\n重要的是生命的质量，而不是寿命的长短。",
		author: "Martin Luther King Jr.\n马丁·路德·金",
	},
	{
		id: "76",
		text: "The minute a person whose word means a great deal to others dare to take the open-hearted and courageous way, many others follow.\n\n当一个话语对他人意义重大的人敢于走上坦诚而勇敢的道路，许多人都会随之跟上。",
		author: "Marian Anderson\n玛丽安·安德森",
	},
	{
		id: "77",
		text: "You cannot define a person on just one thing. You can’t just forget all these wonderful and good things that a person has done because one thing didn’t come off the way you thought it should come off.\n\n你不能只凭一件事定义一个人。不能因为一件事没有按你想的方式发生，就忘记这个人做过的所有美好而善良的事。",
		author: "Aretha Franklin\n艾瑞莎·富兰克林",
	},
	{
		id: "78",
		text: "If you do not have courage, you may not have the opportunity to use any of your other virtues.\n\n如果你没有勇气，也许就没有机会运用其他任何美德。",
		author: "Samuel L. Jackson\n塞缪尔·L·杰克逊",
	},
	{
		id: "80",
		text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.\n\n面对的事情不一定都能改变，但不去面对，任何事情都无法改变。",
		author: "James Baldwin\n詹姆斯·鲍德温",
	},
	{
		id: "81",
		text: "If you’re always trying to be normal you will never know how amazing you can be.\n\n如果你总想做个正常人，就永远不会知道自己可以多么惊人。",
		author: "Maya Angelou\n玛雅·安杰洛",
	},
	{
		id: "82",
		text: "If you find it in your heart to care for somebody else, you will have succeeded.\n\n如果你能在心里关怀另一个人，你就已经成功了。",
		author: "Maya Angelou\n玛雅·安杰洛",
	},
	{
		id: "83",
		text: "I’ve learned that whenever I decide something with an open heart, I usually make the right decision.\n\n我学到的是，每当我以敞开的心做决定时，通常都会做出正确的决定。",
		author: "Maya Angelou\n玛雅·安杰洛",
	},
	{
		id: "84",
		text: "Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness.\n\n每个人都必须决定，是走在创造性利他的光明中，还是走在毁灭性自私的黑暗里。",
		author: "Martin Luther King Jr.\n马丁·路德·金",
	},
	{
		id: "85",
		text: "An individual has not started living until he can rise above the narrow confines of his individualistic concerns to the broader concerns of all humanity.\n\n一个人若不能超越狭隘的个人关切，走向全人类更广阔的关切，就还没有真正开始生活。",
		author: "Martin Luther King Jr.\n马丁·路德·金",
	},
	{
		id: "86",
		text: "Those who are not looking for happiness are the most likely to find it, because those who are searching forget that the surest way to be happy is to seek happiness for others.\n\n不寻找幸福的人最可能找到幸福，因为寻找的人会忘记：获得幸福最可靠的方式，是为他人寻求幸福。",
		author: "Martin Luther King Jr.\n马丁·路德·金",
	},
	{
		id: "251201",
		text: "The gardener does not make a plant grow. The job of a gardener is to create optimal conditions.\n\n园丁并不能让植物生长。园丁的工作是创造最佳条件。",
		author: "Sir Ken Robinson\n肯·罗宾逊爵士",
	},
	{
		id: "251202",
		text: "I think everybody should get rich and famous and do everything they ever dreamed of so they can see that it's not the answer.\n\n我认为每个人都应该变得富有而出名，实现自己曾梦想的一切，这样他们就能看见，那并不是答案。",
		author: "Jim Carrey\n金·凯瑞",
	},
	{
		id: "251203",
		text: "It is difficult to get a man to understand something, when his salary depends on his not understanding it\n\n当一个人的薪水取决于他不理解某件事时，要让他理解这件事很难。",
		author: "Upton Sinclair\n厄普顿·辛克莱",
	},
	{
		id: "251204",
		text: "Don't give yourselves to these unnatural men — machine men, with machine minds and machine hearts. You are not machines, you are not cattle, you are men. You have the love of humanity in your hearts.\n\n不要把自己交给这些不自然的人——机器般的人，拥有机器般的头脑和机器般的心。你们不是机器，不是牲畜，你们是人。你们心中有对人类的爱。",
		author: "Charlie Chaplain\n查理·卓别林",
	},
	{
		id: "251205",
		text: "Machinery that gives abundance has left us in want. Our knowledge has made us cynical. Our cleverness, hard and unkind. We think too much and feel too little. More than machinery we need humanity. More than cleverness we need kindness and gentleness.\n\n带来丰裕的机器却让我们陷入匮乏。我们的知识让我们变得愤世嫉俗。我们的聪明冷酷而不仁。我们想得太多，感觉得太少。比起机器，我们更需要人性；比起聪明，我们更需要善良和温柔。",
		author: "Charlie Chaplain\n查理·卓别林",
	},
	{
		id: "251206",
		text: "Our very idea of productivity is premised on the idea of producing something new, whereas we do not tend to see maintenance and care as productive in the same way.\n\n我们对生产力的观念本身就建立在“产出新东西”之上，而我们通常并不以同样的方式把维护和照料视为生产。",
		author: "Jenny Odell\n珍妮·奥德尔",
	},
	{
		id: "251207",
		text: "To do nothing is to hold yourself still so that you can perceive what is actually there.\n\n什么都不做，就是让自己静下来，好看见真正存在的东西。",
		author: "Jenny Odell\n珍妮·奥德尔",
	},
	{
		id: "251209",
		text: "If you are unable to find the truth right where you are, where else do you expect to find it?\n\n如果你无法在自己所在之处找到真理，你还指望到哪里去找呢？",
		author: "Dogen\n道元",
	},
	{
		id: "251210",
		text: "A fool sees himself as another, but a wise man sees others as himself.\n\n愚者把自己看作他者，智者把他人看作自己。",
		author: "Dogen\n道元",
	},
	{
		id: "251211",
		text: "We come spinning out of nothingness, scattering stars like dust.\n\n我们从虚无中旋转而出，像尘埃一样撒落群星。",
		author: "Rumi\n鲁米",
	},
	{
		id: "251212",
		text: "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.\n\n让自己被真正热爱之物那奇异的牵引静静吸引。它不会把你引入歧途。",
		author: "Rumi\n鲁米",
	},
	{
		id: "251213",
		text: "The most difficult subjects can be explained to the most slow-witted man if he has not formed any idea of them already; but the simplest thing cannot be made clear to the most intelligent man if he is firmly persuaded that he knows already, without a shadow of a doubt, what is laid before him.\n\n最困难的主题也可以解释给最迟钝的人，只要他尚未对此形成成见；但最简单的事，也无法让最聪明的人明白，如果他坚信自己已经毫无疑问地知道摆在面前的是什么。",
		author: "Leo Tolstoy\n列夫·托尔斯泰",
	},
	{
		id: "251214",
		text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.\n\n被某人深深爱着会给你力量，而深深爱着某人会给你勇气。",
		author: "Not Lao Tzu\n并非老子",
	},
	{
		id: "251215",
		text: "People sometimes fail to live because they are always preparing to live.\n\n人们有时无法真正生活，是因为他们总是在为生活做准备。",
		author: "Alan Watts\n艾伦·瓦茨",
	},
	{
		id: "251216",
		text: "The privilege of a lifetime is to become who you really are.\n\n一生的特权，是成为真正的自己。",
		author: "Carl Jung\n卡尔·荣格",
	},
	{
		id: "251217",
		text: "Truth has to be discovered, not invented.\n\n真理必须被发现，而不是被发明。",
		author: "Osho\n奥修",
	},
	{
		id: "251218",
		text: "Slow is smooth, smooth is fast\n\n慢就是稳，稳就是快。",
		author: "Navy SEALs\n美国海豹突击队",
	},
];

// New quote IDs should start with the year/month it gets added (in the
// format YYMM00 where 00 is an incrementing sequence number - 01, 02 etc)