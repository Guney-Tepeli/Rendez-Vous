/**
 * A1 grammar lessons, in teaching order. See ../lessons.ts for the rules
 * every lesson follows.
 */

import type { GrammarLesson } from "../../domain/types";

export const A1_LESSONS: readonly GrammarLesson[] = [
  {
    id: "reading-rules",
    level: "A1",
    title: { TR: "Okuma kuralları", EN: "Reading rules" },
    content: [
      {
        TR: "Fransızcada kelime sonundaki ünsüz çoğu zaman okunmaz: petit → «pöti», vous → «vu», grand → «gran». Sondaki -e de okunmaz: table → «tabl».",
        EN: "A consonant at the end of a French word is usually silent: petit → “puh-tee”, vous → “voo”, grand → “gran”. A final -e is silent too: table → “tabl”.",
      },
      {
        TR: "İstisna: c, r, f, l ile biten kelimelerde son harf genelde okunur (İngilizce CaReFuL kelimesindeki ünsüzler): avec, bonjour, neuf, il.",
        EN: "Exception: a final c, r, f or l is usually pronounced (the consonants of CaReFuL): avec, bonjour, neuf, il.",
      },
      {
        TR: "Harf grupları tek ses verir:\nou → «u» (vous)\noi → «ua» (moi)\nau, eau → «o» (beau)\nch → «ş» (chat)",
        EN: "Letter groups make one sound:\nou → “oo” (vous)\noi → “wa” (moi)\nau, eau → “o” (beau)\nch → “sh” (chat)",
      },
      {
        TR: "Bazı harfler bulunduğu yere göre değişir: c, e / i / y önünde «s» (cinéma), a / o / u önünde «k» (café); ç her zaman «s» (français). g, e / i önünde «j» (rouge), a / o / u önünde «g» (gare). h hiç okunmaz: hôtel → «otel», homme → «om».",
        EN: "Some letters change with their neighbours: c is “s” before e / i / y (cinéma) and “k” before a / o / u (café); ç is always “s” (français). g is “zh” before e / i (rouge) and a hard “g” before a / o / u (gare). h is never pronounced: hôtel → “o-tel”, homme → “om”.",
      },
      {
        TR: "Türkçe konuşanların tipik hatası her harfi okumaktır. Yanlış: petit → «pe-tit», vous → «vus», table → «ta-ble». Doğru: «pöti», «vu», «tabl». İkinci hata ou'yu «ov», oi'yi «oy» okumaktır. Doğru: vous → «vu», moi → «mua».",
        EN: "The typical mistake of Turkish speakers is to pronounce every letter. Wrong: petit → “pe-tit”, vous → “vus”, table → “ta-ble”. Right: “puh-tee”, “voo”, “tabl”. A second mistake is reading ou as “ov” and oi as “oy”. Right: vous → “voo”, moi → “mwa”.",
      },
      {
        TR: "Nasıl hatırlarsın: yazıya değil kulağa güven. Yeni bir kelimede önce son harfe bak: c, r, f, l mi (CaReFuL)? Değilse sustur. Sonra harf gruplarını (ou, oi, au, eau, ch) tek ses say ve kelimeyi yüksek sesle söyle.",
        EN: "How to remember: trust your ear, not the spelling. In a new word look at the last letter first: is it c, r, f or l (CaReFuL)? If not, silence it. Then count letter groups (ou, oi, au, eau, ch) as one sound and say the word out loud.",
      },
    ],
    examples: [
      {
        fr: "Le chat est petit.",
        translation: { TR: "Kedi küçük.", EN: "The cat is small." },
      },
      {
        fr: "Bonsoir, il fait beau.",
        translation: { TR: "İyi akşamlar, hava güzel.", EN: "Good evening, the weather is nice." },
      },
      {
        fr: "Vous parlez avec moi ?",
        translation: { TR: "Benimle mi konuşuyorsunuz?", EN: "Are you talking with me?" },
      },
      {
        fr: "Un café, s'il vous plaît.",
        translation: { TR: "Bir kahve lütfen.", EN: "A coffee, please." },
      },
      {
        fr: "Merci beaucoup, au revoir !",
        translation: { TR: "Çok teşekkürler, hoşça kal!", EN: "Thank you very much, goodbye!" },
      },
      {
        fr: "Le garçon est grand.",
        translation: { TR: "Oğlan uzun boylu.", EN: "The boy is tall." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "reading-1",
        text: "Comment allez-___ ?",
        answers: ["vous"],
        translation: { TR: "Nasılsınız?", EN: "How are you? (formal)" },
      },
      {
        type: "fill",
        id: "reading-2",
        text: "Il fait ___ aujourd'hui.",
        answers: ["beau"],
        translation: { TR: "Bugün hava güzel.", EN: "The weather is nice today." },
      },
      {
        type: "build",
        id: "reading-3",
        tokens: ["Le", "chat", "est", "petit"],
        translation: { TR: "Kedi küçük.", EN: "The cat is small." },
      },
      {
        type: "free",
        id: "reading-4",
        prompt: { TR: "Fransızca yaz: “İyi akşamlar”", EN: "Write in French: “Good evening”" },
        answers: ["Bonsoir"],
      },
      {
        type: "fill",
        id: "reading-rules-5",
        text: "Au ___ !",
        answers: ["revoir"],
        translation: { TR: "Hoşça kal!", EN: "Goodbye!" },
      },
      {
        type: "choice",
        id: "reading-rules-6",
        text: "Quel mot contient le son « ou » ?",
        options: ["moi", "chat", "vous", "beau"],
        answer: 2,
        translation: { TR: "Hangi kelimede «u» sesi var?", EN: "Which word contains the “oo” sound?" },
      },
      {
        type: "choice",
        id: "reading-rules-7",
        text: "Quel mot a une lettre finale prononcée ?",
        options: ["petit", "avec", "grand", "vous"],
        answer: 1,
        translation: { TR: "Hangi kelimenin son harfi okunur?", EN: "Which word has a pronounced final letter?" },
      },
      {
        type: "free",
        id: "reading-rules-8",
        prompt: { TR: "Fransızca yaz: “Teşekkürler.”", EN: "Write in French: “Thank you.”" },
        answers: ["Merci"],
      },
      {
        type: "build",
        id: "reading-rules-9",
        tokens: ["Un", "café", "s'il", "vous", "plaît"],
        translation: { TR: "Bir kahve lütfen.", EN: "A coffee, please." },
      },
      {
        type: "choice",
        id: "reading-rules-10",
        text: "Quel mot se termine par une lettre muette ?",
        options: ["bonjour", "neuf", "avec", "grand"],
        answer: 3,
        translation: { TR: "Hangi kelimenin son harfi okunmaz?", EN: "Which word ends in a silent letter?" },
      },
      {
        type: "free",
        id: "reading-rules-11",
        prompt: { TR: "Fransızca yaz: “Hoşça kal.”", EN: "Write in French: “Goodbye.”" },
        answers: ["Au revoir"],
      },
      {
        type: "free",
        id: "reading-rules-12",
        prompt: { TR: "Fransızca yaz: “Çok teşekkürler.”", EN: "Write in French: “Thank you very much.”" },
        answers: ["Merci beaucoup"],
      },
    ],
  },
  {
    id: "etre-avoir",
    level: "A1",
    title: { TR: "Être ve avoir", EN: "Être and avoir" },
    content: [
      {
        TR: "être = olmak. Kim olduğunu, nerede ve nasıl olduğunu söyler.\nje suis · tu es · il/elle est\nnous sommes · vous êtes · ils/elles sont",
        EN: "être = to be. It says who, where and how you are.\nje suis · tu es · il/elle est\nnous sommes · vous êtes · ils/elles sont",
      },
      {
        TR: "avoir = sahip olmak.\nj'ai · tu as · il/elle a\nnous avons · vous avez · ils/elles ont",
        EN: "avoir = to have.\nj'ai · tu as · il/elle a\nnous avons · vous avez · ils/elles ont",
      },
      {
        TR: "Dikkat: yaş avoir ile söylenir. “Yirmi yaşındayım” = J'ai vingt ans (kelimesi kelimesine: yirmi yılım var).",
        EN: "Careful: age uses avoir. “I am twenty” = J'ai vingt ans (literally: I have twenty years).",
      },
      {
        TR: "avoir ile söylenen birkaç durum Türkçedeki “-im var” kalıbına benzer: j'ai faim (acıktım), j'ai soif (susadım), j'ai froid (üşüyorum), j'ai chaud (sıcak basıyor), j'ai peur (korkuyorum). Hepsi avoir ile; Fransızcada “ben acıyım” denmez.",
        EN: "Some states use avoir, much like the Turkish “I have …” pattern: j'ai faim (I'm hungry), j'ai soif (I'm thirsty), j'ai froid (I'm cold), j'ai chaud (I'm hot), j'ai peur (I'm afraid). All with avoir; French never says “I am hungry” with être.",
      },
      {
        TR: "Tipik hatalar. Yanlış: Je suis 20 ans. · Je suis faim. · Elle étudiante. Doğru: J'ai vingt ans. · J'ai faim. · Elle est étudiante. Türkçede üçüncü kişide “-dir” düşer (“O öğrenci”), Fransızcada fiil asla düşmez.",
        EN: "Typical mistakes. Wrong: Je suis 20 ans. · Je suis faim. · Elle étudiante. Right: J'ai vingt ans. · J'ai faim. · Elle est étudiante. Turkish drops the verb in the third person (“O öğrenci”); French never drops it.",
      },
      {
        TR: "Nasıl hatırlarsın: kim olduğun ya da nasıl olduğun için être (“-im, -sin”); sahip olduğun, yaşın ve bedensel durumların için avoir (“var”). j' + ai ve je + suis'i her gün yüksek sesle say.",
        EN: "How to remember: être for who or how you are (the Turkish “-im, -sin” endings); avoir for what you have, your age and bodily states (“var”). Say j'ai and je suis out loud every day.",
      },
    ],
    examples: [
      {
        fr: "Je suis étudiant.",
        translation: { TR: "Ben öğrenciyim.", EN: "I am a student." },
      },
      {
        fr: "Tu as un chat ?",
        translation: { TR: "Kedin var mı?", EN: "Do you have a cat?" },
      },
      {
        fr: "Nous sommes à Paris.",
        translation: { TR: "Paris'teyiz.", EN: "We are in Paris." },
      },
      {
        fr: "J'ai faim.",
        translation: { TR: "Acıktım.", EN: "I'm hungry." },
      },
      {
        fr: "Vous êtes turc ?",
        translation: { TR: "Türk müsünüz?", EN: "Are you Turkish?" },
      },
      {
        fr: "Ils ont deux enfants.",
        translation: { TR: "İki çocukları var.", EN: "They have two children." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "etre-avoir-1",
        text: "Je ___ turc.",
        answers: ["suis"],
        translation: { TR: "Ben Türküm.", EN: "I am Turkish." },
      },
      {
        type: "fill",
        id: "etre-avoir-2",
        text: "Elle ___ deux frères.",
        answers: ["a"],
        translation: { TR: "Onun iki erkek kardeşi var.", EN: "She has two brothers." },
      },
      {
        type: "build",
        id: "etre-avoir-3",
        tokens: ["Nous", "sommes", "à", "Paris"],
        translation: { TR: "Paris'teyiz.", EN: "We are in Paris." },
      },
      {
        type: "free",
        id: "etre-avoir-4",
        prompt: { TR: "Fransızca yaz: “Yirmi yaşındayım.”", EN: "Write in French: “I am twenty years old.”" },
        answers: ["J'ai vingt ans.", "J'ai 20 ans."],
      },
      {
        type: "fill",
        id: "etre-avoir-5",
        text: "Tu ___ étudiant ?",
        answers: ["es"],
        translation: { TR: "Öğrenci misin?", EN: "Are you a student?" },
      },
      {
        type: "fill",
        id: "etre-avoir-6",
        text: "Nous ___ faim.",
        answers: ["avons"],
        translation: { TR: "Acıktık.", EN: "We are hungry." },
      },
      {
        type: "choice",
        id: "etre-avoir-7",
        text: "Ils ___ à Lyon.",
        options: ["est", "sont", "ont", "sommes"],
        answer: 1,
        translation: { TR: "Lyon'dalar.", EN: "They are in Lyon." },
      },
      {
        type: "choice",
        id: "etre-avoir-8",
        text: "J'___ vingt ans.",
        options: ["suis", "as", "ai", "est"],
        answer: 2,
        translation: { TR: "Yirmi yaşındayım.", EN: "I am twenty years old." },
      },
      {
        type: "free",
        id: "etre-avoir-9",
        prompt: { TR: "Fransızca yaz: “Üşüyorum.”", EN: "Write in French: “I am cold.”" },
        answers: ["J'ai froid."],
      },
      {
        type: "build",
        id: "etre-avoir-10",
        tokens: ["Vous", "êtes", "à", "Lyon"],
        translation: { TR: "Lyon'dasınız.", EN: "You are in Lyon." },
      },
      {
        type: "choice",
        id: "etre-avoir-11",
        text: "Vous ___ faim ?",
        options: ["avez", "êtes", "avons", "ont"],
        answer: 0,
        translation: { TR: "Aç mısınız?", EN: "Are you hungry?" },
      },
      {
        type: "free",
        id: "etre-avoir-12",
        prompt: { TR: "Fransızca yaz: “Biz öğrenciyiz.”", EN: "Write in French: “We are students.”" },
        answers: ["Nous sommes étudiants.", "Nous sommes étudiantes.", "On est étudiants.", "On est étudiantes."],
      },
    ],
  },
  {
    id: "er-verbs",
    level: "A1",
    title: { TR: "1. grup fiiller (-er)", EN: "Group 1 verbs (-er)" },
    content: [
      {
        TR: "Fransızca fiillerin çoğu -er ile biter ve aynı kalıbı izler. -er atılır, şu ekler gelir:\nje parle · tu parles · il/elle parle\nnous parlons · vous parlez · ils/elles parlent",
        EN: "Most French verbs end in -er and follow one pattern. Drop -er and add:\nje parle · tu parles · il/elle parle\nnous parlons · vous parlez · ils/elles parlent",
      },
      {
        TR: "Kulağa dikkat: parle, parles ve parlent aynı okunur («parl»). -e, -es, -ent ekleri yazılır ama söylenmez. Yalnız -ons ve -ez duyulur.",
        EN: "Listen: parle, parles and parlent sound the same (“parl”). The endings -e, -es, -ent are written but not said. Only -ons and -ez are heard.",
      },
      {
        TR: "Küçük istisnalar: manger → nous mangeons (g yumuşak kalsın diye e eklenir), commencer → nous commençons (ç). Sesli harfle başlayan fiilde je → j': j'aime, j'habite, j'écoute. Mastarı -er ile biten ama düzensiz tek fiil aller'dir, ona ayrı bakacağız.",
        EN: "Small exceptions: manger → nous mangeons (an extra e keeps the g soft), commencer → nous commençons (ç). Before a vowel je becomes j': j'aime, j'habite, j'écoute. The only common -er verb that is irregular is aller; we will look at it separately.",
      },
      {
        TR: "Tipik hatalar. Yanlış: Je parler français. · Nous parle français. · Parle français. Doğru: Je parle français. · Nous parlons français. Türkçede özne düşebilir (konuşuyorum), Fransızcada je / tu / il ... zorunludur ve fiil çekilir, mastar kalmaz.",
        EN: "Typical mistakes. Wrong: Je parler français. · Nous parle français. · Parle français. Right: Je parle français. · Nous parlons français. Turkish can drop the subject (konuşuyorum); French needs je / tu / il ... and the verb must be conjugated, not left in the infinitive.",
      },
      {
        TR: "Nasıl hatırlarsın: önce -er'i at (parl-), sonra eki yapıştır: -e, -es, -e, -ons, -ez, -ent. Bu altı eki bir şarkı gibi söyle. Bir kez öğrendin mi yüzlerce fiil (chanter, travailler, écouter, regarder) aynı kalıpla çekilir.",
        EN: "How to remember: drop -er (parl-) and stick on the ending: -e, -es, -e, -ons, -ez, -ent. Chant those six endings like a song. Once you know them, hundreds of verbs (chanter, travailler, écouter, regarder) follow the same pattern.",
      },
    ],
    examples: [
      {
        fr: "Je parle français.",
        translation: { TR: "Fransızca konuşuyorum.", EN: "I speak French." },
      },
      {
        fr: "Nous habitons à Istanbul.",
        translation: { TR: "İstanbul'da oturuyoruz.", EN: "We live in Istanbul." },
      },
      {
        fr: "Ils aiment le chocolat.",
        translation: { TR: "Çikolatayı severler.", EN: "They like chocolate." },
      },
      {
        fr: "J'habite à Paris.",
        translation: { TR: "Paris'te oturuyorum.", EN: "I live in Paris." },
      },
      {
        fr: "Vous travaillez à Lyon ?",
        translation: { TR: "Lyon'da mı çalışıyorsunuz?", EN: "Do you work in Lyon?" },
      },
      {
        fr: "Nous mangeons ici.",
        translation: { TR: "Burada yemek yiyoruz.", EN: "We eat here." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "er-verbs-1",
        text: "Tu ___ anglais ? (parler)",
        answers: ["parles"],
        translation: { TR: "İngilizce konuşuyor musun?", EN: "Do you speak English?" },
      },
      {
        type: "fill",
        id: "er-verbs-2",
        text: "Nous ___ le café. (aimer)",
        answers: ["aimons"],
        translation: { TR: "Kahveyi severiz.", EN: "We like coffee." },
      },
      {
        type: "build",
        id: "er-verbs-3",
        tokens: ["Elle", "habite", "à", "Lyon"],
        translation: { TR: "O (kadın) Lyon'da oturuyor.", EN: "She lives in Lyon." },
      },
      {
        type: "free",
        id: "er-verbs-4",
        prompt: { TR: "Fransızca yaz: “Fransızca konuşuyorum.”", EN: "Write in French: “I speak French.”" },
        answers: ["Je parle français."],
      },
      {
        type: "fill",
        id: "er-verbs-5",
        text: "Nous ___ ici. (manger)",
        answers: ["mangeons"],
        translation: { TR: "Burada yemek yiyoruz.", EN: "We eat here." },
      },
      {
        type: "choice",
        id: "er-verbs-6",
        text: "Vous ___ français ?",
        options: ["parlons", "parlez", "parle", "parlent"],
        answer: 1,
        translation: { TR: "Fransızca konuşuyor musunuz?", EN: "Do you speak French?" },
      },
      {
        type: "choice",
        id: "er-verbs-7",
        text: "Elles ___ à Lyon.",
        options: ["habitent", "habites", "habitons", "habite"],
        answer: 0,
        translation: { TR: "Lyon'da oturuyorlar.", EN: "They live in Lyon." },
      },
      {
        type: "free",
        id: "er-verbs-8",
        prompt: { TR: "Fransızca yaz: “Biz Paris'te oturuyoruz.”", EN: "Write in French: “We live in Paris.”" },
        answers: ["Nous habitons à Paris.", "On habite à Paris."],
      },
      {
        type: "build",
        id: "er-verbs-9",
        tokens: ["Nous", "travaillons", "à", "Lyon"],
        translation: { TR: "Lyon'da çalışıyoruz.", EN: "We work in Lyon." },
      },
      {
        type: "choice",
        id: "er-verbs-10",
        text: "J'___ Paris.",
        options: ["aimons", "aimes", "aime", "aiment"],
        answer: 2,
        translation: { TR: "Paris'i seviyorum.", EN: "I love Paris." },
      },
      {
        type: "free",
        id: "er-verbs-11",
        prompt: { TR: "Fransızca yaz: “Onlar Fransızca konuşuyor.”", EN: "Write in French: “They speak French.”" },
        answers: ["Ils parlent français.", "Elles parlent français."],
      },
      {
        type: "free",
        id: "er-verbs-12",
        prompt: { TR: "Fransızca yaz: “Ben öğrenciyim ve Lyon'da oturuyorum.”", EN: "Write in French: “I am a student and I live in Lyon.”" },
        answers: ["Je suis étudiant et j'habite à Lyon.", "Je suis étudiante et j'habite à Lyon."],
      },
    ],
  },
  {
    id: "ne-pas",
    level: "A1",
    title: { TR: "Olumsuzluk: ne ... pas", EN: "Negation: ne ... pas" },
    content: [
      {
        TR: "Olumsuz cümlede fiil ne ile pas arasına alınır:\nJe parle → Je ne parle pas.",
        EN: "To make a sentence negative, wrap the verb in ne and pas:\nJe parle → Je ne parle pas.",
      },
      {
        TR: "Fiil sesli harfle (ya da okunmayan h ile) başlıyorsa ne → n' olur:\nIl habite ici → Il n'habite pas ici.",
        EN: "Before a vowel (or a silent h) ne becomes n':\nIl habite ici → Il n'habite pas ici.",
      },
      {
        TR: "Olumsuzdan sonra un / une / des → de olur:\nJ'ai une voiture → Je n'ai pas de voiture.",
        EN: "After a negative, un / une / des become de:\nJ'ai une voiture → Je n'ai pas de voiture.",
      },
      {
        TR: "Konuşmada ne çoğu zaman düşer: Je sais pas. Yazıda ikisini de yaz. Aynı kalıpta başka olumsuzlar da var: ne ... jamais (asla), ne ... plus (artık yok), ne ... rien (hiçbir şey): Je ne mange jamais de viande. İstisna: être'den sonra un / une / des değişmez: Je ne suis pas un enfant.",
        EN: "In speech ne often disappears: Je sais pas. In writing keep both. Other negations use the same frame: ne ... jamais (never), ne ... plus (no longer), ne ... rien (nothing): Je ne mange jamais de viande. Exception: after être, un / une / des do not change: Je ne suis pas un enfant.",
      },
      {
        TR: "Tipik hatalar. Yanlış: Je pas parle anglais. · Je ne parle anglais. · Je n'ai pas une voiture. Doğru: Je ne parle pas anglais. · Je n'ai pas de voiture. Türkçede olumsuzluk fiile yapışan tek bir ektir (-me); Fransızcada iki parçadır ve ikisi de gerekir.",
        EN: "Typical mistakes. Wrong: Je pas parle anglais. · Je ne parle anglais. · Je n'ai pas une voiture. Right: Je ne parle pas anglais. · Je n'ai pas de voiture. Turkish negates with one suffix on the verb (-me); French uses two parts and needs both.",
      },
      {
        TR: "Nasıl hatırlarsın: sandviç. Ekmekler ne ve pas, içindeki fiil. Fiil ünlüyle başlıyorsa n' olur. Olumsuzda miktar sıfırdır, bu yüzden un / une / des → de: “hiç araba yok” = pas de voiture.",
        EN: "How to remember: a sandwich. The bread is ne and pas, the verb is the filling. If the verb starts with a vowel it is n'. In a negative the quantity is zero, so un / une / des → de: “no car at all” = pas de voiture.",
      },
    ],
    examples: [
      {
        fr: "Je ne parle pas italien.",
        translation: { TR: "İtalyanca konuşmuyorum.", EN: "I don't speak Italian." },
      },
      {
        fr: "Il n'habite pas ici.",
        translation: { TR: "O burada oturmuyor.", EN: "He doesn't live here." },
      },
      {
        fr: "Je n'ai pas de voiture.",
        translation: { TR: "Arabam yok.", EN: "I don't have a car." },
      },
      {
        fr: "Nous n'habitons pas à Paris.",
        translation: { TR: "Paris'te oturmuyoruz.", EN: "We don't live in Paris." },
      },
      {
        fr: "Je n'ai plus faim.",
        translation: { TR: "Artık aç değilim.", EN: "I'm not hungry any more." },
      },
      {
        fr: "Elle ne parle jamais anglais.",
        translation: { TR: "O asla İngilizce konuşmaz.", EN: "She never speaks English." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "ne-pas-1",
        text: "Je ne sais ___.",
        answers: ["pas"],
        translation: { TR: "Bilmiyorum.", EN: "I don't know." },
      },
      {
        type: "fill",
        id: "ne-pas-2",
        text: "Elle ___ aime pas le poisson.",
        answers: ["n'"],
        translation: { TR: "O balığı sevmez.", EN: "She doesn't like fish." },
      },
      {
        type: "build",
        id: "ne-pas-3",
        tokens: ["Nous", "ne", "sommes", "pas", "fatigués"],
        translation: { TR: "Yorgun değiliz.", EN: "We are not tired." },
      },
      {
        type: "free",
        id: "ne-pas-4",
        prompt: { TR: "Fransızca yaz: “Kedim yok.”", EN: "Write in French: “I don't have a cat.”" },
        answers: ["Je n'ai pas de chat."],
      },
      {
        type: "fill",
        id: "ne-pas-5",
        text: "Il n'a pas ___ frère.",
        answers: ["de"],
        translation: { TR: "Onun erkek kardeşi yok.", EN: "He doesn't have a brother." },
      },
      {
        type: "choice",
        id: "ne-pas-6",
        text: "Je ___ parle pas anglais.",
        options: ["ne", "n'", "non", "pas"],
        answer: 0,
        translation: { TR: "İngilizce konuşmuyorum.", EN: "I don't speak English." },
      },
      {
        type: "choice",
        id: "ne-pas-7",
        text: "Elle n'a pas ___ voiture.",
        options: ["un", "une", "de", "des"],
        answer: 2,
        translation: { TR: "Onun arabası yok.", EN: "She doesn't have a car." },
      },
      {
        type: "free",
        id: "ne-pas-8",
        prompt: { TR: "Fransızca yaz: “Ben Türk değilim.”", EN: "Write in French: “I am not Turkish.”" },
        answers: ["Je ne suis pas turc.", "Je ne suis pas turque."],
      },
      {
        type: "build",
        id: "ne-pas-9",
        tokens: ["Elle", "n'habite", "pas", "à", "Lyon"],
        translation: { TR: "O (kadın) Lyon'da oturmuyor.", EN: "She doesn't live in Lyon." },
      },
      {
        type: "choice",
        id: "ne-pas-10",
        text: "Tu ___ as pas faim.",
        options: ["ne", "n'", "non", "pas"],
        answer: 1,
        translation: { TR: "Aç değilsin.", EN: "You are not hungry." },
      },
      {
        type: "free",
        id: "ne-pas-11",
        prompt: { TR: "Fransızca yaz: “Fransızca konuşmuyoruz.”", EN: "Write in French: “We don't speak French.”" },
        answers: ["Nous ne parlons pas français.", "On ne parle pas français."],
      },
      {
        type: "free",
        id: "ne-pas-12",
        prompt: { TR: "Fransızca yaz: “Aç değilim ve üşümüyorum.”", EN: "Write in French: “I'm not hungry and I'm not cold.”" },
        answers: ["Je n'ai pas faim et je n'ai pas froid.", "Je n'ai pas faim et pas froid.", "Je n'ai pas faim, je n'ai pas froid."],
      },
    ],
  },
  {
    id: "futur-proche",
    level: "A1",
    title: { TR: "Yakın gelecek (futur proche)", EN: "Near future (futur proche)" },
    content: [
      {
        TR: "Birazdan ya da yakında yapacağın şey için: aller (şimdiki zaman) + fiilin mastarı.\nJe vais manger = Yemek yiyeceğim.",
        EN: "For what you are about to do: aller (present tense) + the infinitive.\nJe vais manger = I am going to eat.",
      },
      {
        TR: "aller düzensizdir, ezberle:\nje vais · tu vas · il/elle va\nnous allons · vous allez · ils/elles vont",
        EN: "aller is irregular, learn it by heart:\nje vais · tu vas · il/elle va\nnous allons · vous allez · ils/elles vont",
      },
      {
        TR: "Olumsuzda ne ... pas yalnız aller'i sarar:\nIl ne va pas venir.",
        EN: "In the negative, ne ... pas wraps only aller:\nIl ne va pas venir.",
      },
      {
        TR: "Zaman ifadeleri yardımcı olur: demain (yarın), ce soir (bu akşam), bientôt (yakında), la semaine prochaine (gelecek hafta). Soru: Tu vas manger ? / Est-ce que tu vas manger ? Aller'in kendisi de mastar olabilir: Je vais aller à Paris (Paris'e gideceğim).",
        EN: "Time words help: demain (tomorrow), ce soir (tonight), bientôt (soon), la semaine prochaine (next week). Question: Tu vas manger ? / Est-ce que tu vas manger ? Aller can itself be the infinitive: Je vais aller à Paris (I'm going to go to Paris).",
      },
      {
        TR: "Tipik hatalar. Yanlış: Je vais mange. · Je vais mangeons. · Je manger demain. Doğru: Je vais manger. Türkçede -ecek eki tek fiile yapışır; Fransızcada iki fiil var: çekilen aller ve olduğu gibi kalan mastar.",
        EN: "Typical mistakes. Wrong: Je vais mange. · Je vais mangeons. · Je manger demain. Right: Je vais manger. Turkish uses one suffix (-ecek) on one verb; French has two verbs: the conjugated aller and an infinitive that stays as it is.",
      },
      {
        TR: "Nasıl hatırlarsın: “yemeye gidiyorum” = je vais manger. Önce aller'i özneye göre çek (vais, vas, va, allons, allez, vont), sonra mastarı değiştirmeden ekle. Olumsuzda ve soruda yalnız aller yer değiştirir.",
        EN: "How to remember: “I'm going to eat” = je vais manger. Conjugate aller for the subject first (vais, vas, va, allons, allez, vont), then add the infinitive unchanged. In negatives and questions only aller moves.",
      },
    ],
    examples: [
      {
        fr: "Je vais manger.",
        translation: { TR: "Yemek yiyeceğim.", EN: "I am going to eat." },
      },
      {
        fr: "Nous allons visiter Paris demain.",
        translation: { TR: "Yarın Paris'i gezeceğiz.", EN: "We are going to visit Paris tomorrow." },
      },
      {
        fr: "Il ne va pas venir.",
        translation: { TR: "O gelmeyecek.", EN: "He is not going to come." },
      },
      {
        fr: "Tu vas travailler demain ?",
        translation: { TR: "Yarın çalışacak mısın?", EN: "Are you going to work tomorrow?" },
      },
      {
        fr: "Elles vont habiter à Lyon.",
        translation: { TR: "Lyon'da oturacaklar.", EN: "They are going to live in Lyon." },
      },
      {
        fr: "Je ne vais pas parler anglais.",
        translation: { TR: "İngilizce konuşmayacağım.", EN: "I'm not going to speak English." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "futur-proche-1",
        text: "Je ___ acheter du pain.",
        answers: ["vais"],
        translation: { TR: "Ekmek alacağım.", EN: "I am going to buy bread." },
      },
      {
        type: "fill",
        id: "futur-proche-2",
        text: "Ils ___ arriver ce soir.",
        answers: ["vont"],
        translation: { TR: "Bu akşam varacaklar.", EN: "They are going to arrive tonight." },
      },
      {
        type: "build",
        id: "futur-proche-3",
        tokens: ["Tu", "vas", "regarder", "un", "film"],
        translation: { TR: "Bir film izleyeceksin.", EN: "You are going to watch a film." },
      },
      {
        type: "free",
        id: "futur-proche-4",
        prompt: { TR: "Fransızca yaz: “Yemek yiyeceğiz.”", EN: "Write in French: “We are going to eat.”" },
        answers: ["Nous allons manger.", "On va manger."],
      },
      {
        type: "fill",
        id: "futur-proche-5",
        text: "Nous ___ habiter à Lyon.",
        answers: ["allons"],
        translation: { TR: "Lyon'da oturacağız.", EN: "We are going to live in Lyon." },
      },
      {
        type: "choice",
        id: "futur-proche-6",
        text: "Elle ___ manger.",
        options: ["vais", "vas", "va", "vont"],
        answer: 2,
        translation: { TR: "Yemek yiyecek.", EN: "She is going to eat." },
      },
      {
        type: "choice",
        id: "futur-proche-7",
        text: "Je vais ___ demain.",
        options: ["parlé", "parler", "parle", "parlons"],
        answer: 1,
        translation: { TR: "Yarın konuşacağım.", EN: "I'm going to talk tomorrow." },
      },
      {
        type: "free",
        id: "futur-proche-8",
        prompt: { TR: "Fransızca yaz: “Yarın çalışacağım.”", EN: "Write in French: “I'm going to work tomorrow.”" },
        answers: ["Je vais travailler demain.", "Demain, je vais travailler.", "Demain je vais travailler."],
      },
      {
        type: "build",
        id: "futur-proche-9",
        tokens: ["Je", "ne", "vais", "pas", "manger"],
        translation: { TR: "Yemek yemeyeceğim.", EN: "I'm not going to eat." },
      },
      {
        type: "choice",
        id: "futur-proche-10",
        text: "Vous ne ___ pas travailler.",
        options: ["allons", "va", "vont", "allez"],
        answer: 3,
        translation: { TR: "Çalışmayacaksınız.", EN: "You are not going to work." },
      },
      {
        type: "free",
        id: "futur-proche-11",
        prompt: { TR: "Fransızca yaz: “Lyon'da oturacaksınız.”", EN: "Write in French: “You are going to live in Lyon.”" },
        answers: ["Vous allez habiter à Lyon.", "Tu vas habiter à Lyon."],
      },
      {
        type: "free",
        id: "futur-proche-12",
        prompt: { TR: "Fransızca yaz: “Yemek yemeyeceğiz.”", EN: "Write in French: “We are not going to eat.”" },
        answers: ["Nous n'allons pas manger.", "On ne va pas manger."],
      },
    ],
  },
  {
    id: "articles",
    level: "A1",
    title: { TR: "Artikeller: le, la, un, une", EN: "Articles: le, la, un, une" },
    content: [
      {
        TR: "Türkçede artikel yok; Fransızcada her ismin önünde bir artikel durur ve her isim ya eril (m) ya dişildir (f). Belirli artikel bilinen, belli bir şeyi gösterir:\nle (eril) · la (dişil) · l' (sesli harf ya da okunmayan h önünde) · les (çoğul)\nle livre · la table · l'ami · les livres",
        EN: "Every French noun comes with an article and is either masculine (m) or feminine (f). The definite article points to something known or specific:\nle (masc.) · la (fem.) · l' (before a vowel or silent h) · les (plural)\nle livre · la table · l'ami · les livres",
      },
      {
        TR: "Belirsiz artikel Türkçedeki “bir” gibidir:\nun (eril) · une (dişil) · des (çoğul, “birkaç / bazı”)\nun livre · une table · des livres\nTürkçede çoğulda “bir” düşer (kitaplar); Fransızcada des yine yazılır.",
        EN: "The indefinite article works like “a / an”:\nun (masc.) · une (fem.) · des (plural, “some”)\nun livre · une table · des livres\nEnglish drops the article in the plural (books); French still needs des.",
      },
      {
        TR: "Cinsiyet ipuçları: -tion, -té, -ette, -ure ile bitenler çoğunlukla dişil (la nation, la liberté); -ment, -age, -eau ile bitenler çoğunlukla eril (le moment, le fromage, le bateau). Kesin kural yok: her ismi artikeliyle birlikte ezberle.",
        EN: "Gender cues: nouns ending in -tion, -té, -ette, -ure are mostly feminine (la nation, la liberté); -ment, -age, -eau mostly masculine (le moment, le fromage, le bateau). There is no sure rule: learn every noun together with its article.",
      },
      {
        TR: "Sevmek, sevmemek gibi fiillerde genel anlam için belirli artikel kullanılır: J'aime le chocolat = Çikolatayı (genel olarak) severim.",
        EN: "With verbs of liking, French uses the definite article for things in general: J'aime le chocolat = I like chocolate.",
      },
      {
        TR: "İstisnalar: -age çoğu zaman eril ama la plage, la page, l'image dişil. Cinsiyetle anlamı değişenler: le tour (tur, gezi) / la tour (kule), le poste (iş, görev) / la poste (postane). Bir erkek de kadın da le professeur olabilir; kadın için la professeure de duyulur.",
        EN: "Exceptions: -age is mostly masculine but la plage, la page, l'image are feminine. Some words change meaning with gender: le tour (tour, trip) / la tour (tower), le poste (job, post) / la poste (post office). Both a man and a woman can be le professeur; la professeure is also heard for a woman.",
      },
      {
        TR: "Tipik hatalar. Türkçede artikel olmadığı için unutulur. Yanlış: J'ai chat. · J'ai un voiture. · Il aime chocolat. Doğru: J'ai un chat. · J'ai une voiture. · Il aime le chocolat. Cinsiyeti tahmin etmek yerine ismi artikeliyle öğren.",
        EN: "Typical mistakes. Turkish has no articles, so they get forgotten. Wrong: J'ai chat. · J'ai un voiture. · Il aime chocolat. Right: J'ai un chat. · J'ai une voiture. · Il aime le chocolat. Do not guess the gender; learn each noun with its article.",
      },
      {
        TR: "Nasıl hatırlarsın: sözlüğe «livre» değil «le livre», «table» değil «la table» yaz. İstersen eril isimleri mavi, dişilleri kırmızı kalemle yaz. Olumsuzda unutma: J'ai un chat → Je n'ai pas de chat.",
        EN: "How to remember: write “le livre” and “la table”, never the bare noun. If it helps, write masculine nouns in blue and feminine ones in red. And remember the negative: J'ai un chat → Je n'ai pas de chat.",
      },
    ],
    examples: [
      {
        fr: "J'ai un chat et une voiture.",
        translation: { TR: "Bir kedim ve bir arabam var.", EN: "I have a cat and a car." },
      },
      {
        fr: "L'hôtel est petit.",
        translation: { TR: "Otel küçük.", EN: "The hotel is small." },
      },
      {
        fr: "Les enfants aiment le chocolat.",
        translation: { TR: "Çocuklar çikolatayı sever.", EN: "Children like chocolate." },
      },
      {
        fr: "Une amie habite à Lyon.",
        translation: { TR: "Bir arkadaşım (kız) Lyon'da oturuyor.", EN: "A friend (female) lives in Lyon." },
      },
      {
        fr: "Le professeur n'a pas de voiture.",
        translation: { TR: "Öğretmenin arabası yok.", EN: "The teacher doesn't have a car." },
      },
      {
        fr: "Les enfants vont manger le fromage.",
        translation: { TR: "Çocuklar peyniri yiyecek.", EN: "The children are going to eat the cheese." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "articles-1",
        text: "J'ai ___ voiture.",
        answers: ["une"],
        translation: { TR: "Bir arabam var.", EN: "I have a car." },
      },
      {
        type: "fill",
        id: "articles-2",
        text: "___ hôtel est petit.",
        answers: ["L'"],
        translation: { TR: "Otel küçük.", EN: "The hotel is small." },
      },
      {
        type: "fill",
        id: "articles-3",
        text: "Nous avons ___ amis à Paris.",
        answers: ["des"],
        translation: { TR: "Paris'te arkadaşlarımız var.", EN: "We have friends in Paris." },
      },
      {
        type: "build",
        id: "articles-4",
        tokens: ["Les", "enfants", "aiment", "le", "chocolat"],
        translation: { TR: "Çocuklar çikolatayı sever.", EN: "Children like chocolate." },
      },
      {
        type: "free",
        id: "articles-5",
        prompt: { TR: "Fransızca yaz: “Bir kedim var.”", EN: "Write in French: “I have a cat.”" },
        answers: ["J'ai un chat."],
      },
      {
        type: "fill",
        id: "articles-6",
        text: "J'aime ___ musique.",
        answers: ["la"],
        translation: { TR: "Müziği severim.", EN: "I like music." },
      },
      {
        type: "choice",
        id: "articles-7",
        text: "___ amie habite à Lyon.",
        options: ["La", "Le", "L'", "Les"],
        answer: 2,
        translation: { TR: "Arkadaş (kız) Lyon'da oturuyor.", EN: "The friend lives in Lyon." },
      },
      {
        type: "choice",
        id: "articles-8",
        text: "Elle a ___ chien.",
        options: ["une", "des", "un", "les"],
        answer: 2,
        translation: { TR: "Onun bir köpeği var.", EN: "She has a dog." },
      },
      {
        type: "free",
        id: "articles-9",
        prompt: { TR: "Fransızca yaz: “Öğretmen müziği sever.”", EN: "Write in French: “The teacher likes music.”" },
        answers: ["Le professeur aime la musique.", "La professeur aime la musique.", "La professeure aime la musique."],
      },
      {
        type: "build",
        id: "articles-10",
        tokens: ["Une", "amie", "habite", "à", "Paris"],
        translation: { TR: "Bir arkadaşım (kız) Paris'te oturuyor.", EN: "A friend (female) lives in Paris." },
      },
      {
        type: "choice",
        id: "articles-11",
        text: "Quel mot est féminin ?",
        options: ["le fromage", "la nation", "le moment", "le bateau"],
        answer: 1,
        translation: { TR: "Hangi kelime dişil?", EN: "Which word is feminine?" },
      },
      {
        type: "free",
        id: "articles-12",
        prompt: { TR: "Fransızca yaz: “Arabam yok.”", EN: "Write in French: “I don't have a car.”" },
        answers: ["Je n'ai pas de voiture."],
      },
    ],
  },
  {
    id: "plural-agreement",
    level: "A1",
    title: { TR: "Çoğul ve sıfat uyumu", EN: "Plurals and adjective agreement" },
    content: [
      {
        TR: "İsmin çoğulu çoğunlukla -s ile yapılır ve bu -s okunmaz: un livre → des livres. Çoğulu kulak değil artikel söyler (le / les).\nÖzel durumlar:\n-eau, -eu → -x: un bateau → des bateaux\n-al → -aux: un journal → des journaux\n-s, -x, -z ile bitenler değişmez: un fils → des fils",
        EN: "Nouns usually take -s in the plural, and the -s is silent: un livre → des livres. You hear the plural in the article (le / les), not the noun.\nSpecial cases:\n-eau, -eu → -x: un bateau → des bateaux\n-al → -aux: un journal → des journaux\nnouns in -s, -x, -z don't change: un fils → des fils",
      },
      {
        TR: "Türkçede sıfat hiç değişmez (küçük kız, küçük çocuklar). Fransızcada sıfat ismin cinsiyetine ve sayısına uyar:\ndişil → -e: petit → petite\nçoğul → -s: petits, petites\nZaten -e ile biten sıfat dişilde değişmez: rouge → rouge.",
        EN: "An adjective agrees with its noun in gender and number:\nfeminine → -e: petit → petite\nplural → -s: petits, petites\nAn adjective already ending in -e stays the same in the feminine: rouge → rouge.",
      },
      {
        TR: "Dikkat: dişil -e, sessiz son ünsüzü duyulur yapar: petit «pöti» → petite «pötit», grand «gran» → grande «grand».\nBazı düzensiz dişiller: heureux → heureuse · sportif → sportive · italien → italienne",
        EN: "Listen: the feminine -e makes the silent final consonant heard: petit “puh-tee” → petite “puh-teet”.\nSome irregular feminines: heureux → heureuse · sportif → sportive · italien → italienne",
      },
      {
        TR: "Karışık bir grupta (erkek + kadın) sıfat eril çoğul olur: Paul et Marie sont contents.",
        EN: "For a mixed group (men and women) the adjective is masculine plural: Paul et Marie sont contents.",
      },
      {
        TR: "Düzensizler: un œil → des yeux, un travail → des travaux. Sıfatlarda da aynı: beau → beaux, nouveau → nouveaux, normal → normaux. Dişilde ünsüz ikilenenler: bon → bonne, gentil → gentille. Eril ve dişili aynı olanlar: jeune, rouge, triste, facile.",
        EN: "Irregular ones: un œil → des yeux, un travail → des travaux. Adjectives do the same: beau → beaux, nouveau → nouveaux, normal → normaux. Some double the consonant in the feminine: bon → bonne, gentil → gentille. Same for both genders: jeune, rouge, triste, facile.",
      },
      {
        TR: "Tipik hatalar. Türkçede sıfat değişmez, bu yüzden unutulur. Yanlış: Elle est heureux. · Les filles sont content. · des bateau. Doğru: Elle est heureuse. · Les filles sont contentes. · des bateaux. Bir de çoğul -s'yi sesli okumak: «livrs» değil, «livr».",
        EN: "Typical mistakes. Turkish adjectives never change, so agreement gets forgotten. Wrong: Elle est heureux. · Les filles sont content. · des bateau. Right: Elle est heureuse. · Les filles sont contentes. · des bateaux. Another one: pronouncing the plural -s. It is “livr”, not “livrs”.",
      },
      {
        TR: "Nasıl hatırlarsın: sıfat ismin aynasıdır. Cümleyi kurarken önce ismin cinsiyetine ve sayısına bak (dişil çoğul mu?), sonra sıfata -e, -s ya da -es ekle. Çoğulu kulakla değil artikelden duy: le / les, un / des.",
        EN: "How to remember: the adjective is the noun's mirror. First check the noun's gender and number (feminine plural?), then add -e, -s or -es to the adjective. Hear the plural in the article, not the noun: le / les, un / des.",
      },
    ],
    examples: [
      {
        fr: "Les journaux sont intéressants.",
        translation: { TR: "Gazeteler ilginç.", EN: "The newspapers are interesting." },
      },
      {
        fr: "Elle est petite et heureuse.",
        translation: { TR: "O (kadın) ufak tefek ve mutlu.", EN: "She is small and happy." },
      },
      {
        fr: "Les filles sont grandes.",
        translation: { TR: "Kızlar uzun boylu.", EN: "The girls are tall." },
      },
      {
        fr: "Les chevaux sont grands.",
        translation: { TR: "Atlar iri.", EN: "The horses are big." },
      },
      {
        fr: "Les filles sont gentilles.",
        translation: { TR: "Kızlar nazik.", EN: "The girls are kind." },
      },
      {
        fr: "Paul et Marie sont fatigués.",
        translation: { TR: "Paul ile Marie yorgun.", EN: "Paul and Marie are tired." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "plural-agreement-1",
        text: "Les bateaux sont ___. (grand)",
        answers: ["grands"],
        translation: { TR: "Gemiler büyük.", EN: "The boats are big." },
      },
      {
        type: "fill",
        id: "plural-agreement-2",
        text: "Elle est ___. (heureux)",
        answers: ["heureuse"],
        translation: { TR: "O (kadın) mutlu.", EN: "She is happy." },
      },
      {
        type: "fill",
        id: "plural-agreement-3",
        text: "J'achète des ___. (journal)",
        answers: ["journaux"],
        translation: { TR: "Gazeteler alıyorum.", EN: "I buy newspapers." },
      },
      {
        type: "build",
        id: "plural-agreement-4",
        tokens: ["Les", "filles", "sont", "contentes"],
        translation: { TR: "Kızlar memnun.", EN: "The girls are happy." },
      },
      {
        type: "free",
        id: "plural-agreement-5",
        prompt: { TR: "Fransızca yaz: “Onlar (kadınlar) yorgun.”", EN: "Write in French: “They (women) are tired.”" },
        answers: ["Elles sont fatiguées."],
      },
      {
        type: "fill",
        id: "plural-agreement-6",
        text: "Les ___ sont petits. (cheval)",
        answers: ["chevaux"],
        translation: { TR: "Atlar küçük.", EN: "The horses are small." },
      },
      {
        type: "choice",
        id: "plural-agreement-7",
        text: "Les filles sont ___.",
        options: ["content", "contents", "contentes", "contente"],
        answer: 2,
        translation: { TR: "Kızlar memnun.", EN: "The girls are happy." },
      },
      {
        type: "choice",
        id: "plural-agreement-8",
        text: "Elle est ___.",
        options: ["heureux", "heureuse", "heureuxe", "heureus"],
        answer: 1,
        translation: { TR: "O (kadın) mutlu.", EN: "She is happy." },
      },
      {
        type: "free",
        id: "plural-agreement-9",
        prompt: { TR: "Fransızca yaz: “Kediler küçük.”", EN: "Write in French: “The cats are small.”" },
        answers: ["Les chats sont petits."],
      },
      {
        type: "build",
        id: "plural-agreement-10",
        tokens: ["Les", "voitures", "ne", "sont", "pas", "grandes"],
        translation: { TR: "Arabalar büyük değil.", EN: "The cars are not big." },
      },
      {
        type: "choice",
        id: "plural-agreement-11",
        text: "Paul et Marie sont ___.",
        options: ["contente", "contents", "contentes", "content"],
        answer: 1,
        translation: { TR: "Paul ile Marie memnun.", EN: "Paul and Marie are happy." },
      },
      {
        type: "free",
        id: "plural-agreement-12",
        prompt: { TR: "Fransızca yaz: “Çocuklar yorgun değil.”", EN: "Write in French: “The children are not tired.”" },
        answers: ["Les enfants ne sont pas fatigués."],
      },
    ],
  },
  {
    id: "adjective-position",
    level: "A1",
    title: { TR: "Sıfatın yeri", EN: "Where the adjective goes" },
    content: [
      {
        TR: "Türkçenin tersine, Fransızcada sıfat çoğunlukla isimden SONRA gelir:\nkırmızı bir araba → une voiture rouge\nilginç bir kitap → un livre intéressant\nRenkler ve milliyetler her zaman sonra gelir.",
        EN: "Most French adjectives come AFTER the noun:\na red car → une voiture rouge\nan interesting book → un livre intéressant\nColours and nationalities always come after.",
      },
      {
        TR: "Kısa ve çok sık kullanılan birkaç sıfat ise isimden ÖNCE gelir: beau, joli, bon, mauvais, grand, petit, jeune, vieux, nouveau. Hatırlatıcı: güzellik, yaş, iyi/kötü, boyut.\nun petit chat · une jolie maison · un bon restaurant",
        EN: "A few short, very common adjectives go BEFORE the noun: beau, joli, bon, mauvais, grand, petit, jeune, vieux, nouveau. Memory aid: beauty, age, good/bad, size.\nun petit chat · une jolie maison · un bon restaurant",
      },
      {
        TR: "beau, nouveau, vieux sesli harfle başlayan eril bir ismin önünde biçim değiştirir: bel, nouvel, vieil.\nun bel hôtel · un nouvel appartement · un vieil ami\nDişilleri: belle · nouvelle · vieille",
        EN: "beau, nouveau, vieux change before a masculine noun starting with a vowel: bel, nouvel, vieil.\nun bel hôtel · un nouvel appartement · un vieil ami\nFeminine: belle · nouvelle · vieille",
      },
      {
        TR: "Bazı sıfatların anlamı yerine göre değişir: un grand homme (ünlü adam) ≠ un homme grand (uzun boylu adam); un pauvre homme (zavallı adam) ≠ un homme pauvre (yoksul adam). Önce gelen sıfat da ismin cinsiyetine ve sayısına uyar: une petite maison, des petits chats.",
        EN: "A few adjectives change meaning with position: un grand homme (a great man) ≠ un homme grand (a tall man); un pauvre homme (a poor wretch) ≠ un homme pauvre (a man without money). An adjective in front still agrees with the noun: une petite maison, des petits chats.",
      },
      {
        TR: "Tipik hatalar. Türkçe sırasını aktarmak: J'ai une rouge voiture. · Il a un français ami. Doğru: J'ai une voiture rouge. · Il a un ami français. Tersi de olur: J'ai un chat petit ✗ → J'ai un petit chat. Bir de uyumu unutmak: une petit maison ✗ → une petite maison.",
        EN: "Typical mistakes. Copying the Turkish order: J'ai une rouge voiture. · Il a un français ami. Right: J'ai une voiture rouge. · Il a un ami français. The reverse happens too: J'ai un chat petit ✗ → J'ai un petit chat. And forgetting agreement: une petit maison ✗ → une petite maison.",
      },
      {
        TR: "Nasıl hatırlarsın: BAGS. Beauty (beau, joli), Age (jeune, vieux, nouveau), Goodness (bon, mauvais), Size (grand, petit): bu sıfatlar önde. Renk, milliyet, biçim gibi geri kalanlar arkada. Tereddüt edersen sıfatı arkaya koy; çoğunlukla doğrudur.",
        EN: "How to remember: BAGS. Beauty (beau, joli), Age (jeune, vieux, nouveau), Goodness (bon, mauvais), Size (grand, petit) go in front. The rest (colour, nationality, shape) go after. When in doubt put the adjective after; it is usually right.",
      },
    ],
    examples: [
      {
        fr: "J'ai une voiture rouge.",
        translation: { TR: "Kırmızı bir arabam var.", EN: "I have a red car." },
      },
      {
        fr: "Il a une jolie maison.",
        translation: { TR: "Onun güzel bir evi var.", EN: "He has a pretty house." },
      },
      {
        fr: "Nous avons un nouvel appartement.",
        translation: { TR: "Yeni bir dairemiz var.", EN: "We have a new flat." },
      },
      {
        fr: "Paul a une voiture bleue.",
        translation: { TR: "Paul'ün mavi bir arabası var.", EN: "Paul has a blue car." },
      },
      {
        fr: "Nous avons un bon professeur.",
        translation: { TR: "İyi bir öğretmenimiz var.", EN: "We have a good teacher." },
      },
      {
        fr: "J'ai un ami français.",
        translation: { TR: "Fransız bir arkadaşım var.", EN: "I have a French friend." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "adjective-position-1",
        text: "J'ai un ___ ami. (vieux)",
        answers: ["vieil"],
        translation: { TR: "Eski bir arkadaşım var.", EN: "I have an old friend." },
      },
      {
        type: "fill",
        id: "adjective-position-2",
        text: "Elle a une robe ___. (noir)",
        answers: ["noire"],
        translation: { TR: "Onun siyah bir elbisesi var.", EN: "She has a black dress." },
      },
      {
        type: "build",
        id: "adjective-position-3",
        tokens: ["Il", "a", "une", "jolie", "maison"],
        translation: { TR: "Onun güzel bir evi var.", EN: "He has a pretty house." },
      },
      {
        type: "free",
        id: "adjective-position-4",
        prompt: { TR: "Fransızca yaz: “Küçük bir kedim var.”", EN: "Write in French: “I have a small cat.”" },
        answers: ["J'ai un petit chat."],
      },
      {
        type: "free",
        id: "adjective-position-5",
        prompt: { TR: "Fransızca yaz: “Kırmızı bir arabam var.”", EN: "Write in French: “I have a red car.”" },
        answers: ["J'ai une voiture rouge."],
      },
      {
        type: "fill",
        id: "adjective-position-6",
        text: "Elle a une ___ maison. (joli)",
        answers: ["jolie"],
        translation: { TR: "Onun güzel bir evi var.", EN: "She has a pretty house." },
      },
      {
        type: "choice",
        id: "adjective-position-7",
        text: "Quelle phrase est correcte ?",
        options: ["Il a un français ami.", "Il a un ami français.", "Il a un ami française.", "Il a une ami français."],
        answer: 1,
        translation: { TR: "Hangi cümle doğru?", EN: "Which sentence is correct?" },
      },
      {
        type: "choice",
        id: "adjective-position-8",
        text: "Quelle phrase est correcte ?",
        options: ["J'ai un chat petit.", "J'ai une petite chat.", "J'ai un petit chat.", "J'ai des petit chat."],
        answer: 2,
        translation: { TR: "Hangi cümle doğru?", EN: "Which sentence is correct?" },
      },
      {
        type: "free",
        id: "adjective-position-9",
        prompt: { TR: "Fransızca yaz: “Mavi bir arabam var.”", EN: "Write in French: “I have a blue car.”" },
        answers: ["J'ai une voiture bleue."],
      },
      {
        type: "build",
        id: "adjective-position-10",
        tokens: ["Elle", "a", "un", "petit", "chien"],
        translation: { TR: "Onun küçük bir köpeği var.", EN: "She has a small dog." },
      },
      {
        type: "choice",
        id: "adjective-position-11",
        text: "Nous avons un ___ appartement.",
        options: ["nouvel", "nouveau", "nouvelle", "nouveaux"],
        answer: 0,
        translation: { TR: "Yeni bir dairemiz var.", EN: "We have a new flat." },
      },
      {
        type: "free",
        id: "adjective-position-12",
        prompt: { TR: "Fransızca yaz: “Fransız bir arkadaşım yok.”", EN: "Write in French: “I don't have a French friend.”" },
        answers: ["Je n'ai pas d'ami français.", "Je n'ai pas d'amie française."],
      },
    ],
  },
  {
    id: "questions",
    level: "A1",
    title: { TR: "Soru sormak", EN: "Asking questions" },
    content: [
      {
        TR: "Türkçedeki “mi” ekinin Fransızcada karşılığı yok. Evet/hayır sorusu için üç yol var:\n1. Sadece sesi yükselt: Tu parles français ?\n2. Başa est-ce que ekle: Est-ce que tu parles français ?\n3. Devrik yapı (resmi, şimdilik tanıman yeter): Parles-tu français ?",
        EN: "A yes/no question can be made three ways:\n1. Just raise your voice: Tu parles français ?\n2. Put est-ce que in front: Est-ce que tu parles français ?\n3. Inversion (formal, just recognise it for now): Parles-tu français ?",
      },
      {
        TR: "Soru kelimeleri:\noù = nerede/nereye · quand = ne zaman · comment = nasıl\npourquoi = neden (cevap: parce que = çünkü)\ncombien (de) = kaç, ne kadar · qui = kim · que / quoi = ne",
        EN: "Question words:\noù = where · quand = when · comment = how\npourquoi = why (answer: parce que = because)\ncombien (de) = how many, how much · qui = who · que / quoi = what",
      },
      {
        TR: "Soru kelimesi est-ce que ile başa gelir ya da konuşmada sona kalır:\nOù est-ce que tu habites ? = Tu habites où ?\n“Ne” için: başta que (sesli harften önce qu'), sonda quoi:\nQu'est-ce que tu manges ? = Tu manges quoi ?",
        EN: "The question word goes in front with est-ce que, or at the end in casual speech:\nOù est-ce que tu habites ? = Tu habites où ?\nFor “what”: que at the front (qu' before a vowel), quoi at the end:\nQu'est-ce que tu manges ? = Tu manges quoi ?",
      },
      {
        TR: "Sesli harften önce est-ce que → est-ce qu': Est-ce qu'il parle anglais ? Olumsuz bir soruya “evet” demek için oui değil si kullanılır: Tu n'aimes pas le café ? — Si, j'aime le café. (Aksine, seviyorum.)",
        EN: "Before a vowel est-ce que becomes est-ce qu': Est-ce qu'il parle anglais ? To say “yes” to a negative question use si, not oui: Tu n'aimes pas le café ? — Si, j'aime le café. (On the contrary, I do.)",
      },
      {
        TR: "Tipik hatalar. Yanlış: Pourquoi ? — Pour que... (cevapta) · Est-ce que tu parles-tu français ? (iki kez soru) · Combien frères ? Doğru: Pourquoi ? — Parce que... · Est-ce que tu parles français ? · Combien de frères ? Türkçedeki sona eklenen “mi” gibi bir şey yok; soru yapısı başa gelir ya da sesle yapılır.",
        EN: "Typical mistakes. Wrong: Pourquoi ? — Pour que... (as the answer) · Est-ce que tu parles-tu français ? (asking twice) · Combien frères ? Right: Pourquoi ? — Parce que... · Est-ce que tu parles français ? · Combien de frères ? There is no question suffix like Turkish “mi”; the question is built at the front or with your voice.",
      },
      {
        TR: "Nasıl hatırlarsın: üç seviye. Ses yükseltmek = günlük konuşma, est-ce que = her yerde güvenli, devrik yapı = resmi. Başlangıçta ilk ikisi yeter. Kalıp: soru kelimesi + est-ce que + özne + fiil.",
        EN: "How to remember: three levels. Rising voice = everyday speech, est-ce que = safe everywhere, inversion = formal. At the start the first two are enough. Pattern: question word + est-ce que + subject + verb.",
      },
    ],
    examples: [
      {
        fr: "Est-ce que vous parlez anglais ?",
        translation: { TR: "İngilizce konuşuyor musunuz?", EN: "Do you speak English?" },
      },
      {
        fr: "Où est-ce que tu habites ?",
        translation: { TR: "Nerede oturuyorsun?", EN: "Where do you live?" },
      },
      {
        fr: "Tu as combien de frères ?",
        translation: { TR: "Kaç erkek kardeşin var?", EN: "How many brothers do you have?" },
      },
      {
        fr: "Pourquoi est-ce que tu ne manges pas ? — Parce que je n'ai pas faim.",
        translation: { TR: "Neden yemiyorsun? — Çünkü aç değilim.", EN: "Why aren't you eating? — Because I'm not hungry." },
      },
      {
        fr: "Quand est-ce que tu vas travailler ?",
        translation: { TR: "Ne zaman çalışacaksın?", EN: "When are you going to work?" },
      },
      {
        fr: "Tu n'aimes pas le café ? — Si, j'aime le café.",
        translation: { TR: "Kahve sevmiyor musun? — Hayır, seviyorum.", EN: "Don't you like coffee? — Yes, I do." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "questions-1",
        text: "___ est-ce que tu habites ? — À Lyon.",
        answers: ["Où"],
        translation: { TR: "Nerede oturuyorsun? — Lyon'da.", EN: "Where do you live? — In Lyon." },
      },
      {
        type: "fill",
        id: "questions-2",
        text: "Qu'est-ce que tu ___ ? (manger)",
        answers: ["manges"],
        translation: { TR: "Ne yiyorsun?", EN: "What are you eating?" },
      },
      {
        type: "build",
        id: "questions-3",
        tokens: ["Est-ce", "que", "tu", "parles", "français"],
        translation: { TR: "Fransızca konuşuyor musun?", EN: "Do you speak French?" },
      },
      {
        type: "free",
        id: "questions-4",
        prompt: { TR: "Fransızca yaz: “Nerede oturuyorsun?”", EN: "Write in French: “Where do you live?”" },
        answers: [
          "Où est-ce que tu habites ?",
          "Tu habites où ?",
          "Où habites-tu ?",
          "Où tu habites ?",
          "Où est-ce que vous habitez ?",
          "Vous habitez où ?",
          "Où habitez-vous ?",
        ],
      },
      {
        type: "free",
        id: "questions-5",
        prompt: { TR: "Fransızca yaz: “İngilizce konuşuyor musun?”", EN: "Write in French: “Do you speak English?”" },
        answers: [
          "Est-ce que tu parles anglais ?",
          "Tu parles anglais ?",
          "Parles-tu anglais ?",
          "Est-ce que vous parlez anglais ?",
          "Vous parlez anglais ?",
          "Parlez-vous anglais ?",
        ],
      },
      {
        type: "fill",
        id: "questions-6",
        text: "___ est-ce que tu vas travailler ? — Demain.",
        answers: ["Quand"],
        translation: { TR: "Ne zaman çalışacaksın? — Yarın.", EN: "When are you going to work? — Tomorrow." },
      },
      {
        type: "choice",
        id: "questions-7",
        text: "___ habitez-vous ? — À Lyon.",
        options: ["Quand", "Qui", "Où", "Pourquoi"],
        answer: 2,
        translation: { TR: "Nerede oturuyorsunuz? — Lyon'da.", EN: "Where do you live? — In Lyon." },
      },
      {
        type: "choice",
        id: "questions-8",
        text: "Pourquoi tu ne manges pas ? — ___ je n'ai pas faim.",
        options: ["Pour que", "Pourquoi", "Parce que", "Que"],
        answer: 2,
        translation: { TR: "Neden yemiyorsun? — Çünkü aç değilim.", EN: "Why aren't you eating? — Because I'm not hungry." },
      },
      {
        type: "free",
        id: "questions-9",
        prompt: { TR: "Fransızca yaz: “Kaç erkek kardeşin var?”", EN: "Write in French: “How many brothers do you have?”" },
        answers: ["Tu as combien de frères ?", "Combien de frères est-ce que tu as ?", "Combien de frères as-tu ?", "Vous avez combien de frères ?", "Combien de frères est-ce que vous avez ?", "Combien de frères avez-vous ?"],
      },
      {
        type: "build",
        id: "questions-10",
        tokens: ["Où", "est-ce", "que", "vous", "habitez"],
        translation: { TR: "Nerede oturuyorsunuz?", EN: "Where do you live?" },
      },
      {
        type: "choice",
        id: "questions-11",
        text: "Tu n'aimes pas le café ? — ___, j'aime le café.",
        options: ["Non", "Si", "Aussi", "Peut-être"],
        answer: 1,
        translation: { TR: "Kahve sevmiyor musun? — Hayır, seviyorum.", EN: "Don't you like coffee? — Yes, I do." },
      },
      {
        type: "free",
        id: "questions-12",
        prompt: { TR: "Fransızca yaz: “Neden Fransızca konuşmuyorsun?”", EN: "Write in French: “Why don't you speak French?”" },
        answers: ["Pourquoi est-ce que tu ne parles pas français ?", "Pourquoi tu ne parles pas français ?", "Pourquoi ne parles-tu pas français ?", "Pourquoi est-ce que vous ne parlez pas français ?", "Pourquoi vous ne parlez pas français ?", "Pourquoi ne parlez-vous pas français ?"],
      },
    ],
  },
  {
    id: "aller-venir-contractions",
    level: "A1",
    title: { TR: "Aller, venir ve au / du", EN: "Aller, venir and au / du" },
    content: [
      {
        TR: "aller (gitmek) düzensizdir: je vais · tu vas · il/elle va · nous allons · vous allez · ils/elles vont\nvenir (gelmek) de öyle:\nje viens · tu viens · il/elle vient\nnous venons · vous venez · ils/elles viennent",
        EN: "aller (to go) is irregular: je vais · tu vas · il/elle va · nous allons · vous allez · ils/elles vont\nSo is venir (to come):\nje viens · tu viens · il/elle vient\nnous venons · vous venez · ils/elles viennent",
      },
      {
        TR: "Türkçede yön ekleri isme yapışır (sinemaya, sinemadan). Fransızcada edat (à = -e/-de, de = -den) önce gelir ve le / les ile kaynaşır:\nà + le = au · à + les = aux\nde + le = du · de + les = des",
        EN: "The prepositions à (to/at) and de (from/of) merge with le and les:\nà + le = au · à + les = aux\nde + le = du · de + les = des",
      },
      {
        TR: "la ve l' ile kaynaşma olmaz:\nJe vais au cinéma · à la plage · à l'école\nJe viens du marché · de la gare · de l'hôpital",
        EN: "la and l' never merge:\nJe vais au cinéma · à la plage · à l'école\nJe viens du marché · de la gare · de l'hôpital",
      },
      {
        TR: "Şehir adlarında artikel ve kaynaşma yoktur: Je vais à Paris, je viens de Paris. Bazı şehirlerde artikel adın parçasıdır: Le Havre → Je vais au Havre. Soru: Tu viens d'où ? (Nereden geliyorsun?) venir ailesi: devenir (olmak), revenir (geri gelmek) aynı çekilir. Ek bilgi: venir de + mastar = az önce yaptı: Je viens de manger (Az önce yedim).",
        EN: "City names take no article and no contraction: Je vais à Paris, je viens de Paris. In some cities the article is part of the name: Le Havre → Je vais au Havre. Question: Tu viens d'où ? (Where do you come from?) The venir family (devenir = to become, revenir = to come back) is conjugated the same way. Bonus: venir de + infinitive = just did: Je viens de manger (I just ate).",
      },
      {
        TR: "Tipik hatalar. Yanlış: Je vais à le cinéma. · Je viens de le marché. · Je vais au plage. · Il vient du Paris. Doğru: Je vais au cinéma. · Je viens du marché. · Je vais à la plage. · Il vient de Paris. Türkçedeki -e / -den ekleri hiç kaynaşmaz, bu yüzden Fransızcadaki kaynaşma gözden kaçar.",
        EN: "Typical mistakes. Wrong: Je vais à le cinéma. · Je viens de le marché. · Je vais au plage. · Il vient du Paris. Right: Je vais au cinéma. · Je viens du marché. · Je vais à la plage. · Il vient de Paris. Turkish -e / -den never fuse with anything, so the French fusion is easy to miss.",
      },
      {
        TR: "Nasıl hatırlarsın: kaynaşma yalnız le ve les ile olur. à le → au, de le → du, à les → aux, de les → des. La ve l' ile hiç kaynaşmaz. Cümlede le görürsen kendine sor: à / de + le = ? Sonra yaz.",
        EN: "How to remember: fusion happens only with le and les. à le → au, de le → du, à les → aux, de les → des. La and l' never fuse. When you see le, ask yourself: à / de + le = ? Then write it.",
      },
    ],
    examples: [
      {
        fr: "Je vais au cinéma ce soir.",
        translation: { TR: "Bu akşam sinemaya gidiyorum.", EN: "I am going to the cinema tonight." },
      },
      {
        fr: "Elle vient de la gare.",
        translation: { TR: "O (kadın) istasyondan geliyor.", EN: "She is coming from the station." },
      },
      {
        fr: "Les enfants vont au parc.",
        translation: { TR: "Çocuklar parka gidiyor.", EN: "The children are going to the park." },
      },
      {
        fr: "Tu viens d'où ?",
        translation: { TR: "Nereden geliyorsun?", EN: "Where do you come from?" },
      },
      {
        fr: "Elle va à l'hôpital.",
        translation: { TR: "Hastaneye gidiyor.", EN: "She is going to the hospital." },
      },
      {
        fr: "Les enfants vont aux toilettes.",
        translation: { TR: "Çocuklar tuvalete gidiyor.", EN: "The children are going to the toilets." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "aller-venir-contractions-1",
        text: "Je vais ___ cinéma.",
        answers: ["au"],
        translation: { TR: "Sinemaya gidiyorum.", EN: "I am going to the cinema." },
      },
      {
        type: "fill",
        id: "aller-venir-contractions-2",
        text: "Il vient ___ marché.",
        answers: ["du"],
        translation: { TR: "O pazardan geliyor.", EN: "He is coming from the market." },
      },
      {
        type: "fill",
        id: "aller-venir-contractions-3",
        text: "Nous ___ de Lyon. (venir)",
        answers: ["venons"],
        translation: { TR: "Lyon'dan geliyoruz.", EN: "We come from Lyon." },
      },
      {
        type: "build",
        id: "aller-venir-contractions-4",
        tokens: ["Elle", "va", "à", "la", "plage"],
        translation: { TR: "O (kadın) plaja gidiyor.", EN: "She is going to the beach." },
      },
      {
        type: "free",
        id: "aller-venir-contractions-5",
        prompt: { TR: "Fransızca yaz: “Okula gidiyorum.”", EN: "Write in French: “I am going to school.”" },
        answers: ["Je vais à l'école."],
      },
      {
        type: "fill",
        id: "aller-venir-contractions-6",
        text: "Tu viens ___ gare ?",
        answers: ["de la"],
        translation: { TR: "İstasyondan mı geliyorsun?", EN: "Are you coming from the station?" },
      },
      {
        type: "choice",
        id: "aller-venir-contractions-7",
        text: "Je vais ___ école.",
        options: ["au", "à l'", "à la", "aux"],
        answer: 1,
        translation: { TR: "Okula gidiyorum.", EN: "I'm going to school." },
      },
      {
        type: "choice",
        id: "aller-venir-contractions-8",
        text: "Elle vient ___ marché.",
        options: ["de la", "du", "de l'", "des"],
        answer: 1,
        translation: { TR: "Pazardan geliyor.", EN: "She comes from the market." },
      },
      {
        type: "free",
        id: "aller-venir-contractions-9",
        prompt: { TR: "Fransızca yaz: “Sinemaya gidiyoruz.”", EN: "Write in French: “We are going to the cinema.”" },
        answers: ["Nous allons au cinéma.", "On va au cinéma."],
      },
      {
        type: "build",
        id: "aller-venir-contractions-10",
        tokens: ["Ils", "viennent", "de", "la", "gare"],
        translation: { TR: "İstasyondan geliyorlar.", EN: "They are coming from the station." },
      },
      {
        type: "choice",
        id: "aller-venir-contractions-11",
        text: "Les enfants vont ___ parc.",
        options: ["aux", "à la", "à l'", "au"],
        answer: 3,
        translation: { TR: "Çocuklar parka gidiyor.", EN: "The children are going to the park." },
      },
      {
        type: "free",
        id: "aller-venir-contractions-12",
        prompt: { TR: "Fransızca yaz: “Yarın okula gitmeyeceğim.”", EN: "Write in French: “I'm not going to go to school tomorrow.”" },
        answers: ["Je ne vais pas aller à l'école demain.", "Demain, je ne vais pas aller à l'école.", "Demain je ne vais pas aller à l'école.", "Je ne vais pas à l'école demain.", "Demain, je ne vais pas à l'école.", "Demain je ne vais pas à l'école."],
      },
    ],
  },
  {
    id: "faire-prendre",
    level: "A1",
    title: { TR: "Faire, prendre, mettre", EN: "Faire, prendre, mettre" },
    content: [
      {
        TR: "faire = yapmak, etmek:\nje fais · tu fais · il/elle fait\nnous faisons · vous faites · ils/elles font\nvous faites (faisez değil), tıpkı vous êtes gibi. Kalıplar: faire du sport, faire les courses (alışveriş), il fait beau (hava güzel).",
        EN: "faire = to do, to make:\nje fais · tu fais · il/elle fait\nnous faisons · vous faites · ils/elles font\nvous faites (not faisez), just like vous êtes. Set phrases: faire du sport, faire les courses (shopping), il fait beau (nice weather).",
      },
      {
        TR: "prendre = almak (otobüs, kahve, yemek):\nje prends · tu prends · il/elle prend\nnous prenons · vous prenez · ils/elles prennent\napprendre (öğrenmek) ve comprendre (anlamak) aynı çekilir.",
        EN: "prendre = to take (a bus, a coffee, a meal):\nje prends · tu prends · il/elle prend\nnous prenons · vous prenez · ils/elles prennent\napprendre (to learn) and comprendre (to understand) work the same way.",
      },
      {
        TR: "mettre = koymak, giymek:\nje mets · tu mets · il/elle met\nnous mettons · vous mettez · ils/elles mettent",
        EN: "mettre = to put, to put on:\nje mets · tu mets · il/elle met\nnous mettons · vous mettez · ils/elles mettent",
      },
      {
        TR: "Hava durumu faire ile söylenir: il fait beau (güzel), il fait froid (soğuk), il fait chaud (sıcak), il fait mauvais (kötü). prendre “yemek, içmek, binmek, almak” için geniş kullanılır: prendre un café, prendre le bus, prendre une douche (duş almak). mettre'in ailesi: permettre (izin vermek), promettre (söz vermek). Üç fiilde de vous faites ve ils font gibi sapmalara dikkat.",
        EN: "Weather uses faire: il fait beau (nice), il fait froid (cold), il fait chaud (hot), il fait mauvais (bad). prendre covers “to eat, drink, ride, take”: prendre un café, prendre le bus, prendre une douche. The family of mettre: permettre (to allow), promettre (to promise). Watch the oddities in vous faites and ils font.",
      },
      {
        TR: "Tipik hatalar. Yanlış: Vous faisez du sport. · Ils fonts. · Je prend le bus. · Je fais le bus. Doğru: Vous faites du sport. · Ils font. · Je prends le bus. Tekilde -s, -s, -t: je prends, tu prends, il prend. Türkçede “binmek” ve “yapmak” ayrı fiiller, Fransızcada otobüs için faire değil prendre.",
        EN: "Typical mistakes. Wrong: Vous faisez du sport. · Ils fonts. · Je prend le bus. · Je fais le bus. Right: Vous faites du sport. · Ils font. · Je prends le bus. Singular endings are -s, -s, -t: je prends, tu prends, il prend. For a bus you take, not do: prendre, not faire.",
      },
      {
        TR: "Nasıl hatırlarsın: faire için üç sapmayı ezberle: vous faites, ils font, nous faisons (okunuşu «fözõ»). prendre ve mettre'te tekil aynı kalıp: -s, -s, -t (prend, met: d ve t kalır). apprendre ve comprendre prendre gibi çekilir, yani bir fiilde dört fiil öğrenmiş olursun.",
        EN: "How to remember: learn faire's three oddities: vous faites, ils font, nous faisons (said “fuh-zon”). Prendre and mettre share one singular pattern: -s, -s, -t (prend, met). Apprendre and comprendre follow prendre, so one verb gives you four.",
      },
    ],
    examples: [
      {
        fr: "Qu'est-ce que tu fais ce soir ?",
        translation: { TR: "Bu akşam ne yapıyorsun?", EN: "What are you doing tonight?" },
      },
      {
        fr: "Je prends le bus.",
        translation: { TR: "Otobüse biniyorum.", EN: "I take the bus." },
      },
      {
        fr: "Nous apprenons le français.",
        translation: { TR: "Fransızca öğreniyoruz.", EN: "We are learning French." },
      },
      {
        fr: "Il fait froid aujourd'hui.",
        translation: { TR: "Bugün hava soğuk.", EN: "It's cold today." },
      },
      {
        fr: "Elle prend un café.",
        translation: { TR: "Kahve içiyor.", EN: "She is having a coffee." },
      },
      {
        fr: "Vous mettez un manteau ?",
        translation: { TR: "Mont mu giyiyorsunuz?", EN: "Are you putting on a coat?" },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "faire-prendre-1",
        text: "Vous ___ du sport ? (faire)",
        answers: ["faites"],
        translation: { TR: "Spor yapıyor musunuz?", EN: "Do you do sport?" },
      },
      {
        type: "fill",
        id: "faire-prendre-2",
        text: "Ils ___ le métro. (prendre)",
        answers: ["prennent"],
        translation: { TR: "Metroya biniyorlar.", EN: "They take the metro." },
      },
      {
        type: "fill",
        id: "faire-prendre-3",
        text: "Je ne ___ pas. (comprendre)",
        answers: ["comprends"],
        translation: { TR: "Anlamıyorum.", EN: "I don't understand." },
      },
      {
        type: "build",
        id: "faire-prendre-4",
        tokens: ["Elle", "met", "un", "manteau"],
        translation: { TR: "O (kadın) bir palto giyiyor.", EN: "She puts on a coat." },
      },
      {
        type: "free",
        id: "faire-prendre-5",
        prompt: { TR: "Fransızca yaz: “Fransızca öğreniyoruz.”", EN: "Write in French: “We are learning French.”" },
        answers: ["Nous apprenons le français.", "On apprend le français."],
      },
      {
        type: "fill",
        id: "faire-prendre-6",
        text: "Elle ___ un café. (prendre)",
        answers: ["prend"],
        translation: { TR: "Kahve içiyor.", EN: "She is having a coffee." },
      },
      {
        type: "choice",
        id: "faire-prendre-7",
        text: "Nous ___ du sport.",
        options: ["faites", "font", "faisons", "faisez"],
        answer: 2,
        translation: { TR: "Spor yapıyoruz.", EN: "We do sport." },
      },
      {
        type: "choice",
        id: "faire-prendre-8",
        text: "Ils ___ le bus.",
        options: ["prend", "prennent", "prenons", "prenez"],
        answer: 1,
        translation: { TR: "Otobüse biniyorlar.", EN: "They take the bus." },
      },
      {
        type: "free",
        id: "faire-prendre-9",
        prompt: { TR: "Fransızca yaz: “Otobüse biniyorum.”", EN: "Write in French: “I take the bus.”" },
        answers: ["Je prends le bus."],
      },
      {
        type: "build",
        id: "faire-prendre-10",
        tokens: ["Nous", "prenons", "le", "métro", "ce", "soir"],
        translation: { TR: "Bu akşam metroya biniyoruz.", EN: "We are taking the metro tonight." },
      },
      {
        type: "choice",
        id: "faire-prendre-11",
        text: "Tu ___ un manteau.",
        options: ["mets", "mettes", "mettez", "mettent"],
        answer: 0,
        translation: { TR: "Mont giyiyorsun.", EN: "You put on a coat." },
      },
      {
        type: "free",
        id: "faire-prendre-12",
        prompt: { TR: "Fransızca yaz: “Yarın spor yapacağım.”", EN: "Write in French: “I'm going to do sport tomorrow.”" },
        answers: ["Je vais faire du sport demain.", "Demain, je vais faire du sport.", "Demain je vais faire du sport."],
      },
    ],
  },
  {
    id: "ir-verbs",
    level: "A1",
    title: { TR: "-ir fiilleri: finir ve partir", EN: "-ir verbs: finir and partir" },
    content: [
      {
        TR: "2. grup fiiller (finir, choisir, réussir) çoğulda -iss- alır:\nje finis · tu finis · il/elle finit\nnous finissons · vous finissez · ils/elles finissent",
        EN: "Group 2 verbs (finir, choisir, réussir) add -iss- in the plural:\nje finis · tu finis · il/elle finit\nnous finissons · vous finissez · ils/elles finissent",
      },
      {
        TR: "partir, sortir, dormir -ir ile biter ama 2. grup değildir. Tekilde gövdenin son ünsüzü düşer, -iss- yoktur:\nje pars · tu pars · il/elle part\nnous partons · vous partez · ils/elles partent\nsortir: je sors, nous sortons · dormir: je dors, nous dormons",
        EN: "partir, sortir, dormir end in -ir but are not group 2. The singular drops the last consonant of the stem, and there is no -iss-:\nje pars · tu pars · il/elle part\nnous partons · vous partez · ils/elles partent\nsortir: je sors, nous sortons · dormir: je dors, nous dormons",
      },
      {
        TR: "Mastardan grubu anlayamazsın. Yeni bir -ir fiilinde nous biçimine bak: -issons varsa finir gibi çekilir.",
        EN: "The infinitive doesn't tell you the group. Check the nous form of a new -ir verb: if it has -issons, it follows finir.",
      },
      {
        TR: "Sık kullanılan 2. grup fiiller: finir (bitirmek), choisir (seçmek), réussir (başarmak), grandir (büyümek), réfléchir (düşünmek). Sık kullanılan kısa gövdeli olanlar: partir, sortir, dormir, sentir, servir. Dikkat: ouvrir (açmak) -ir ile biter ama -er gibi çekilir: j'ouvre la porte.",
        EN: "Common group 2 verbs: finir (to finish), choisir (to choose), réussir (to succeed), grandir (to grow), réfléchir (to think). Common short-stem ones: partir, sortir, dormir, sentir, servir. Careful: ouvrir (to open) ends in -ir but is conjugated like an -er verb: j'ouvre la porte.",
      },
      {
        TR: "Tipik hatalar. Yanlış: Je finisse. · Nous finons. · Nous partissons. · Je partis. Doğru: Je finis. · Nous finissons. · Nous partons. · Je pars. -iss- yalnız finir kalıbında ve yalnız çoğulda (nous, vous, ils / elles) görünür; partir kalıbında hiç yoktur.",
        EN: "Typical mistakes. Wrong: Je finisse. · Nous finons. · Nous partissons. · Je partis. Right: Je finis. · Nous finissons. · Nous partons. · Je pars. The -iss- appears only in the finir pattern and only in the plural (nous, vous, ils / elles); the partir pattern never has it.",
      },
      {
        TR: "Nasıl hatırlarsın: nous biçimine bak. -issons varsa finir gibi çekilir (tekil: -is, -is, -it). Yoksa partir gibi: gövde kısalır (par-, sor-, dor-) ve tekil -s, -s, -t olur. Yeni bir -ir fiilini sözlükte nasıl çekildiğine bakarak öğren.",
        EN: "How to remember: look at the nous form. If it has -issons, it works like finir (singular -is, -is, -it). If not, it works like partir: the stem shortens (par-, sor-, dor-) and the singular is -s, -s, -t. Learn each new -ir verb by checking how it conjugates.",
      },
    ],
    examples: [
      {
        fr: "Je finis le travail.",
        translation: { TR: "İşi bitiriyorum.", EN: "I am finishing the work." },
      },
      {
        fr: "Nous partons demain.",
        translation: { TR: "Yarın yola çıkıyoruz.", EN: "We are leaving tomorrow." },
      },
      {
        fr: "Le bébé dort bien.",
        translation: { TR: "Bebek iyi uyuyor.", EN: "The baby sleeps well." },
      },
      {
        fr: "Elle choisit un restaurant.",
        translation: { TR: "Bir restoran seçiyor.", EN: "She is choosing a restaurant." },
      },
      {
        fr: "Vous sortez ce soir ?",
        translation: { TR: "Bu akşam dışarı çıkıyor musunuz?", EN: "Are you going out tonight?" },
      },
      {
        fr: "Je ne dors pas bien.",
        translation: { TR: "İyi uyumuyorum.", EN: "I don't sleep well." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "ir-verbs-1",
        text: "Nous ___ le travail. (finir)",
        answers: ["finissons"],
        translation: { TR: "İşi bitiriyoruz.", EN: "We are finishing the work." },
      },
      {
        type: "fill",
        id: "ir-verbs-2",
        text: "Tu ___ ce soir ? (sortir)",
        answers: ["sors"],
        translation: { TR: "Bu akşam dışarı çıkıyor musun?", EN: "Are you going out tonight?" },
      },
      {
        type: "fill",
        id: "ir-verbs-3",
        text: "Ils ___ un film. (choisir)",
        answers: ["choisissent"],
        translation: { TR: "Bir film seçiyorlar.", EN: "They choose a film." },
      },
      {
        type: "build",
        id: "ir-verbs-4",
        tokens: ["Le", "bébé", "dort", "bien"],
        translation: { TR: "Bebek iyi uyuyor.", EN: "The baby sleeps well." },
      },
      {
        type: "free",
        id: "ir-verbs-5",
        prompt: { TR: "Fransızca yaz: “Yarın yola çıkıyorum.”", EN: "Write in French: “I am leaving tomorrow.”" },
        answers: ["Je pars demain.", "Demain, je pars.", "Demain je pars."],
      },
      {
        type: "fill",
        id: "ir-verbs-6",
        text: "Vous ___ un restaurant. (choisir)",
        answers: ["choisissez"],
        translation: { TR: "Bir restoran seçiyorsunuz.", EN: "You are choosing a restaurant." },
      },
      {
        type: "choice",
        id: "ir-verbs-7",
        text: "Nous ___ demain.",
        options: ["partissons", "partons", "partez", "partent"],
        answer: 1,
        translation: { TR: "Yarın yola çıkıyoruz.", EN: "We are leaving tomorrow." },
      },
      {
        type: "choice",
        id: "ir-verbs-8",
        text: "Ils ___ le travail.",
        options: ["finissent", "finit", "finisent", "finissons"],
        answer: 0,
        translation: { TR: "İşi bitiriyorlar.", EN: "They finish the work." },
      },
      {
        type: "free",
        id: "ir-verbs-9",
        prompt: { TR: "Fransızca yaz: “Ben iyi uyuyorum.”", EN: "Write in French: “I sleep well.”" },
        answers: ["Je dors bien."],
      },
      {
        type: "build",
        id: "ir-verbs-10",
        tokens: ["Elle", "ne", "choisit", "pas", "le", "restaurant"],
        translation: { TR: "O (kadın) restoranı seçmiyor.", EN: "She is not choosing the restaurant." },
      },
      {
        type: "choice",
        id: "ir-verbs-11",
        text: "Tu ___ bien.",
        options: ["dormes", "dort", "dormis", "dors"],
        answer: 3,
        translation: { TR: "İyi uyuyorsun.", EN: "You sleep well." },
      },
      {
        type: "free",
        id: "ir-verbs-12",
        prompt: { TR: "Fransızca yaz: “Yarın Paris'ten ayrılacağız.”", EN: "Write in French: “We are going to leave Paris tomorrow.”" },
        answers: ["Nous allons partir de Paris demain.", "Demain, nous allons partir de Paris.", "Demain nous allons partir de Paris.", "On va partir de Paris demain.", "Demain, on va partir de Paris.", "Demain on va partir de Paris."],
      },
    ],
  },
  {
    id: "possessives",
    level: "A1",
    title: { TR: "İyelik sıfatları: mon, ma, mes", EN: "Possessives: mon, ma, mes" },
    content: [
      {
        TR: "Türkçede iyelik bir ektir (kitabım, kitabın). Fransızcada ismin önüne bir sözcük gelir ve bu sözcük SAHİBE değil, sahip olunan isme uyar (eril / dişil / çoğul):\nbenim: mon · ma · mes\nsenin: ton · ta · tes\nonun: son · sa · ses",
        EN: "The possessive word agrees with the thing owned, not with the owner (masc. / fem. / plural):\nmy: mon · ma · mes\nyour: ton · ta · tes\nhis/her: son · sa · ses",
      },
      {
        TR: "Çoğul sahipler:\nbizim: notre · nos\nsizin: votre · vos\nonların: leur · leurs\nnotre, votre, leur eril ve dişilde aynıdır.",
        EN: "Plural owners:\nour: notre · nos\nyour: votre · vos\ntheir: leur · leurs\nnotre, votre, leur are the same for masculine and feminine.",
      },
      {
        TR: "son / sa sahibin cinsiyetini söylemez, tıpkı Türkçedeki “onun” gibi: sa voiture = onun arabası (erkeğin de olabilir, kadının da). Seçimi voiture'ün dişil olması yapar.",
        EN: "son / sa doesn't tell the owner's gender: sa voiture = his car or her car. It is sa because voiture is feminine.",
      },
      {
        TR: "Sesli harfle başlayan dişil isimden önce ma / ta / sa yerine mon / ton / son gelir, kulağa rahat gelsin diye: mon amie, ton école, son adresse.",
        EN: "Before a feminine noun starting with a vowel, use mon / ton / son instead of ma / ta / sa, for the sound: mon amie, ton école, son adresse.",
      },
      {
        TR: "Türkçedeki -in / -ün eki Fransızcada de ile kurulur: la voiture de Paul = Paul'ün arabası. Birden çok sahip için çoğul biçimler: leurs enfants (onların çocukları). Son / sa / ses bazen karışıklık yaratır: son frère hem Paul'ün hem Marie'nin kardeşi olabilir; bağlam söyler.",
        EN: "Where Turkish uses the -in / -ün suffix, French uses de: la voiture de Paul = Paul's car. For several owners use the plural forms: leurs enfants (their children). Son / sa / ses can be unclear: son frère can be Paul's or Marie's brother; the context tells.",
      },
      {
        TR: "Tipik hatalar. Yanlış: ma père · son mère (kadın bir erkeğin annesini anlatırken de) · Paul et son voiture · mon amie ✓ ama ma amie ✗. Doğru: mon père · sa mère · sa voiture · mon amie. Seçimi sahip değil, sahip olunan isim belirler: père eril, mère dişil.",
        EN: "Typical mistakes. Wrong: ma père · son mère · Paul et son voiture · ma amie. Right: mon père · sa mère · sa voiture · mon amie. The owner does not decide the form; the thing owned does: père is masculine, mère is feminine.",
      },
      {
        TR: "Nasıl hatırlarsın: önce ismin cinsiyetine ve sayısına bak, sahibin kişisine sonra bak. Tek eril → mon / ton / son; tek dişil → ma / ta / sa; çoğul → mes / tes / ses. Sesli harfle başlayan dişil isimde mon / ton / son.",
        EN: "How to remember: look at the noun's gender and number first, the owner's person second. Singular masculine → mon / ton / son; singular feminine → ma / ta / sa; plural → mes / tes / ses. Before a vowel use mon / ton / son.",
      },
    ],
    examples: [
      {
        fr: "Ma sœur habite à Lyon.",
        translation: { TR: "Kız kardeşim Lyon'da oturuyor.", EN: "My sister lives in Lyon." },
      },
      {
        fr: "Mon amie est italienne.",
        translation: { TR: "(Kadın) arkadaşım İtalyan.", EN: "My friend is Italian." },
      },
      {
        fr: "Ils aiment leurs enfants.",
        translation: { TR: "Çocuklarını seviyorlar.", EN: "They love their children." },
      },
      {
        fr: "La voiture de Paul est rouge.",
        translation: { TR: "Paul'ün arabası kırmızı.", EN: "Paul's car is red." },
      },
      {
        fr: "Vos enfants sont grands.",
        translation: { TR: "Çocuklarınız büyük.", EN: "Your children are big." },
      },
      {
        fr: "Il aime sa mère.",
        translation: { TR: "Annesini seviyor.", EN: "He loves his mother." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "possessives-1",
        text: "___ voiture est rouge. (benim)",
        answers: ["Ma"],
        translation: { TR: "Arabam kırmızı.", EN: "My car is red." },
      },
      {
        type: "fill",
        id: "possessives-2",
        text: "___ école est grande. (benim)",
        answers: ["Mon"],
        translation: { TR: "Okulum büyük.", EN: "My school is big." },
      },
      {
        type: "fill",
        id: "possessives-3",
        text: "Nous aimons ___ professeur. (bizim)",
        answers: ["notre"],
        translation: { TR: "Öğretmenimizi seviyoruz.", EN: "We like our teacher." },
      },
      {
        type: "build",
        id: "possessives-4",
        tokens: ["Elle", "aime", "ses", "enfants"],
        translation: { TR: "O (kadın) çocuklarını seviyor.", EN: "She loves her children." },
      },
      {
        type: "free",
        id: "possessives-5",
        prompt: { TR: "Fransızca yaz: “Onun arabası kırmızı.”", EN: "Write in French: “His car is red.”" },
        answers: ["Sa voiture est rouge."],
      },
      {
        type: "fill",
        id: "possessives-6",
        text: "___ amis habitent à Paris. (onların)",
        answers: ["Leurs"],
        translation: { TR: "Onların arkadaşları Paris'te oturuyor.", EN: "Their friends live in Paris." },
      },
      {
        type: "choice",
        id: "possessives-7",
        text: "Elle aime ___ père.",
        options: ["sa", "son", "ses", "leur"],
        answer: 1,
        translation: { TR: "Babasını seviyor.", EN: "She loves her father." },
      },
      {
        type: "choice",
        id: "possessives-8",
        text: "Nous aimons ___ voiture.",
        options: ["nos", "votre", "notre", "leur"],
        answer: 2,
        translation: { TR: "Arabamızı seviyoruz.", EN: "We love our car." },
      },
      {
        type: "free",
        id: "possessives-9",
        prompt: { TR: "Fransızca yaz: “Annem Lyon'da oturuyor.”", EN: "Write in French: “My mother lives in Lyon.”" },
        answers: ["Ma mère habite à Lyon."],
      },
      {
        type: "build",
        id: "possessives-10",
        tokens: ["Notre", "professeur", "est", "gentil"],
        translation: { TR: "Öğretmenimiz nazik.", EN: "Our teacher is kind." },
      },
      {
        type: "choice",
        id: "possessives-11",
        text: "Ils parlent avec ___ enfants.",
        options: ["leur", "leurs", "sa", "son"],
        answer: 1,
        translation: { TR: "Çocuklarıyla konuşuyorlar.", EN: "They talk with their children." },
      },
      {
        type: "free",
        id: "possessives-12",
        prompt: { TR: "Fransızca yaz: “Kız kardeşim Paris'te oturmuyor.”", EN: "Write in French: “My sister doesn't live in Paris.”" },
        answers: ["Ma sœur n'habite pas à Paris."],
      },
    ],
  },
  {
    id: "demonstratives",
    level: "A1",
    title: { TR: "İşaret sıfatları: ce, cet, cette, ces", EN: "Demonstratives: ce, cet, cette, ces" },
    content: [
      {
        TR: "“Bu / şu” isme göre değişir:\nce (eril): ce livre\ncet (sesli harfle ya da okunmayan h ile başlayan eril): cet homme, cet hôtel\ncette (dişil): cette maison\nces (çoğul): ces enfants",
        EN: "“This / that” changes with the noun:\nce (masc.): ce livre\ncet (masc. before a vowel or silent h): cet homme, cet hôtel\ncette (fem.): cette maison\nces (plural): ces enfants",
      },
      {
        TR: "cet ve cette aynı okunur («set»). Fark yalnız yazıda.",
        EN: "cet and cette sound the same (“set”). The difference is only in writing.",
      },
      {
        TR: "Fransızca genelde “bu” ile “şu”yu ayırmaz. Gerekirse isme -ci (bu) ya da -là (şu) eklenir: ce livre-ci / ce livre-là. Zaman ifadelerinde çok kullanılır: ce matin, ce soir, cette semaine.",
        EN: "French usually doesn't separate “this” and “that”. When needed, add -ci (this) or -là (that): ce livre-ci / ce livre-là. Very common in time phrases: ce matin, ce soir, cette semaine.",
      },
      {
        TR: "cet yalnız eril isimlerin önünde gelir: cet homme, cet hôtel, cet après-midi (öğleden sonra eril sayılır). Dişil isimde sesli harf olsa bile cette kalır: cette amie, cette école. Zaman kalıpları: ce matin, ce soir, cette nuit, cette semaine, ces jours-ci (bu günlerde).",
        EN: "Cet appears only before masculine nouns: cet homme, cet hôtel, cet après-midi (afternoon is masculine). A feminine noun starting with a vowel still takes cette: cette amie, cette école. Time phrases: ce matin, ce soir, cette nuit, cette semaine, ces jours-ci (these days).",
      },
      {
        TR: "Tipik hatalar. Yanlış: ce maison · cet maison · cette homme · ce hôtel. Doğru: cette maison · cet hôtel · cet homme. Türkçede “bu” hiç değişmez; Fransızcada ismin cinsiyeti ve baş harfi seçimi belirler. Ayrıca artikelle birlikte kullanma: ce le livre ✗ → ce livre.",
        EN: "Typical mistakes. Wrong: ce maison · cet maison · cette homme · ce hôtel. Right: cette maison · cet hôtel · cet homme. Turkish “bu” never changes; in French the noun's gender and first letter decide. Also do not combine it with an article: ce le livre ✗ → ce livre.",
      },
      {
        TR: "Nasıl hatırlarsın: ce / cet / cette / ces artikelin yerine geçer; artikel zaten orada olmasın. Dört biçimi tabloya yaz: ce (m) · cet (m + sesli) · cette (f) · ces (çoğul). Sorular: dişil mi? → cette, her zaman. Eril ve sesli harf mi? → cet.",
        EN: "How to remember: ce / cet / cette / ces replace the article, so do not add one. Write the four forms in a table: ce (m) · cet (m + vowel) · cette (f) · ces (plural). Feminine? → cette, always. Masculine and a vowel? → cet.",
      },
    ],
    examples: [
      {
        fr: "Ce livre est intéressant.",
        translation: { TR: "Bu kitap ilginç.", EN: "This book is interesting." },
      },
      {
        fr: "Cet hôtel est grand.",
        translation: { TR: "Bu otel büyük.", EN: "This hotel is big." },
      },
      {
        fr: "Je vais partir cette semaine.",
        translation: { TR: "Bu hafta yola çıkacağım.", EN: "I am going to leave this week." },
      },
      {
        fr: "Cette maison est petite.",
        translation: { TR: "Bu ev küçük.", EN: "This house is small." },
      },
      {
        fr: "Ces enfants sont gentils.",
        translation: { TR: "Bu çocuklar nazik.", EN: "These children are kind." },
      },
      {
        fr: "Elle aime ce restaurant.",
        translation: { TR: "Bu restoranı seviyor.", EN: "She likes this restaurant." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "demonstratives-1",
        text: "___ homme est grand.",
        answers: ["Cet"],
        translation: { TR: "Bu adam uzun boylu.", EN: "This man is tall." },
      },
      {
        type: "fill",
        id: "demonstratives-2",
        text: "___ maison est jolie.",
        answers: ["Cette"],
        translation: { TR: "Bu ev güzel.", EN: "This house is pretty." },
      },
      {
        type: "fill",
        id: "demonstratives-3",
        text: "J'aime ___ chaussures.",
        answers: ["ces"],
        translation: { TR: "Bu ayakkabıları beğeniyorum.", EN: "I like these shoes." },
      },
      {
        type: "build",
        id: "demonstratives-4",
        tokens: ["Ce", "soir", "nous", "sortons"],
        translation: { TR: "Bu akşam dışarı çıkıyoruz.", EN: "Tonight we are going out." },
      },
      {
        type: "free",
        id: "demonstratives-5",
        prompt: { TR: "Fransızca yaz: “Bu kitap ilginç.”", EN: "Write in French: “This book is interesting.”" },
        answers: ["Ce livre est intéressant.", "Ce livre-ci est intéressant."],
      },
      {
        type: "fill",
        id: "demonstratives-6",
        text: "___ après-midi, je vais travailler.",
        answers: ["Cet"],
        translation: { TR: "Bu öğleden sonra çalışacağım.", EN: "This afternoon I'm going to work." },
      },
      {
        type: "choice",
        id: "demonstratives-7",
        text: "___ amie est française.",
        options: ["Ce", "Cet", "Cette", "Ces"],
        answer: 2,
        translation: { TR: "Bu arkadaş (kız) Fransız.", EN: "This friend is French." },
      },
      {
        type: "choice",
        id: "demonstratives-8",
        text: "___ hôtels sont grands.",
        options: ["Cet", "Ces", "Cette", "Ce"],
        answer: 1,
        translation: { TR: "Bu oteller büyük.", EN: "These hotels are big." },
      },
      {
        type: "free",
        id: "demonstratives-9",
        prompt: { TR: "Fransızca yaz: “Bu araba kırmızı.”", EN: "Write in French: “This car is red.”" },
        answers: ["Cette voiture est rouge.", "Cette voiture-ci est rouge."],
      },
      {
        type: "build",
        id: "demonstratives-10",
        tokens: ["Ces", "enfants", "vont", "à", "l'école"],
        translation: { TR: "Bu çocuklar okula gidiyor.", EN: "These children are going to school." },
      },
      {
        type: "choice",
        id: "demonstratives-11",
        text: "Je prends ___ livre.",
        options: ["cette", "cet", "ces", "ce"],
        answer: 3,
        translation: { TR: "Bu kitabı alıyorum.", EN: "I'm taking this book." },
      },
      {
        type: "free",
        id: "demonstratives-12",
        prompt: { TR: "Fransızca yaz: “Bu hafta bu restorana gideceğiz.”", EN: "Write in French: “We are going to go to this restaurant this week.”" },
        answers: ["Nous allons aller à ce restaurant cette semaine.", "Cette semaine, nous allons aller à ce restaurant.", "Cette semaine nous allons aller à ce restaurant.", "On va aller à ce restaurant cette semaine.", "Cette semaine, on va aller à ce restaurant.", "Cette semaine on va aller à ce restaurant.", "Nous allons à ce restaurant cette semaine.", "On va à ce restaurant cette semaine.", "Cette semaine, nous allons à ce restaurant.", "Cette semaine, on va à ce restaurant."],
      },
    ],
  },
  {
    id: "partitive",
    level: "A1",
    title: { TR: "Bölümleme artikeli: du, de la", EN: "Partitive: du, de la" },
    content: [
      {
        TR: "Türkçede “Ekmek yiyorum” derken isme hiçbir şey eklenmez. Fransızcada sayılamayan bir şeyin belirsiz bir miktarı için bölümleme artikeli gerekir:\ndu (eril) · de la (dişil) · de l' (sesli harf önünde) · des (çoğul)\nJe mange du pain. · Je prends de la soupe. · Je prends de l'eau.",
        EN: "For an unspecified amount of something you can't count, French needs the partitive article (“some”):\ndu (masc.) · de la (fem.) · de l' (before a vowel) · des (plural)\nJe mange du pain. · Je prends de la soupe. · Je prends de l'eau.",
      },
      {
        TR: "Farkı gör: J'aime le pain = ekmeği (genel olarak) severim. Je mange du pain = (biraz) ekmek yiyorum.",
        EN: "See the difference: J'aime le pain = I like bread (in general). Je mange du pain = I am eating (some) bread.",
      },
      {
        TR: "Olumsuzdan sonra hepsi de / d' olur:\nJe ne mange pas de viande. · Je ne prends pas d'eau.",
        EN: "After a negative they all become de / d':\nJe ne mange pas de viande. · Je ne prends pas d'eau.",
      },
      {
        TR: "Miktar sözcüklerinden sonra da yalnız de gelir:\nbeaucoup de sucre · un peu de lait · un kilo de pommes · une bouteille d'eau",
        EN: "After words of quantity, only de:\nbeaucoup de sucre · un peu de lait · un kilo de pommes · une bouteille d'eau",
      },
      {
        TR: "Sevmek, nefret etmek, tercih etmek fiilleri genel anlam taşır, bu yüzden belirli artikelle gelir: J'aime le café. · Je déteste la viande. · Je préfère le thé. Miktar sözcükleri hep de ile gelir: beaucoup de, un peu de, trop de, assez de, un kilo de, une bouteille de.",
        EN: "Verbs of liking, hating and preferring express a general idea, so they take the definite article: J'aime le café. · Je déteste la viande. · Je préfère le thé. Quantity words always take de: beaucoup de, un peu de, trop de, assez de, un kilo de, une bouteille de.",
      },
      {
        TR: "Tipik hatalar. Yanlış: Je mange pain. · Je prends de la eau. · Je ne mange pas du pain. · beaucoup du sucre. Doğru: Je mange du pain. · Je prends de l'eau. · Je ne mange pas de pain. · beaucoup de sucre. Türkçede “ekmek yiyorum” der geçeriz; Fransızcada artikel yazmak zorunlu.",
        EN: "Typical mistakes. Wrong: Je mange pain. · Je prends de la eau. · Je ne mange pas du pain. · beaucoup du sucre. Right: Je mange du pain. · Je prends de l'eau. · Je ne mange pas de pain. · beaucoup de sucre. Turkish just says “ekmek yiyorum”; in French the article is compulsory.",
      },
      {
        TR: "Nasıl hatırlarsın: sayabiliyor musun? Bir croissant, iki croissant → un / des. Sayamıyorsan (su, süt, ekmek, para, sabır) → du / de la / de l'. “Biraz” diye düşün: du pain = biraz ekmek. Olumsuz ve miktar sözcüğünden sonra hepsi de / d'.",
        EN: "How to remember: can you count it? One croissant, two croissants → un / des. If you cannot (water, milk, bread, money, patience) → du / de la / de l'. Think “some”: du pain = some bread. After a negative or a quantity word, all of them become de / d'.",
      },
    ],
    examples: [
      {
        fr: "Je mange du pain le matin.",
        translation: { TR: "Sabahları ekmek yerim.", EN: "I eat bread in the morning." },
      },
      {
        fr: "Elle ne prend pas de sucre.",
        translation: { TR: "O (kadın) şeker almıyor.", EN: "She doesn't take sugar." },
      },
      {
        fr: "J'achète un kilo de tomates.",
        translation: { TR: "Bir kilo domates alıyorum.", EN: "I buy a kilo of tomatoes." },
      },
      {
        fr: "Nous achetons du fromage.",
        translation: { TR: "Peynir alıyoruz.", EN: "We are buying cheese." },
      },
      {
        fr: "Tu ne prends pas de sucre ?",
        translation: { TR: "Şeker almıyor musun?", EN: "Don't you take sugar?" },
      },
      {
        fr: "Nous avons beaucoup de pain.",
        translation: { TR: "Çok ekmeğimiz var.", EN: "We have a lot of bread." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "partitive-1",
        text: "Je prends ___ eau.",
        answers: ["de l'"],
        translation: { TR: "Su alıyorum.", EN: "I'll have some water." },
      },
      {
        type: "fill",
        id: "partitive-2",
        text: "Il mange ___ viande.",
        answers: ["de la"],
        translation: { TR: "O et yiyor.", EN: "He eats meat." },
      },
      {
        type: "fill",
        id: "partitive-3",
        text: "Nous n'avons pas ___ lait.",
        answers: ["de"],
        translation: { TR: "Sütümüz yok.", EN: "We don't have any milk." },
      },
      {
        type: "build",
        id: "partitive-4",
        tokens: ["Elle", "achète", "un", "kilo", "de", "pommes"],
        translation: { TR: "O (kadın) bir kilo elma alıyor.", EN: "She buys a kilo of apples." },
      },
      {
        type: "free",
        id: "partitive-5",
        prompt: { TR: "Fransızca yaz: “Ekmek alıyorum.”", EN: "Write in French: “I am buying bread.”" },
        answers: ["J'achète du pain.", "Je prends du pain."],
      },
      {
        type: "fill",
        id: "partitive-6",
        text: "Elle prend ___ sucre.",
        answers: ["du"],
        translation: { TR: "Şeker alıyor.", EN: "She takes sugar." },
      },
      {
        type: "choice",
        id: "partitive-7",
        text: "Nous mangeons ___ soupe.",
        options: ["du", "de la", "de l'", "des"],
        answer: 1,
        translation: { TR: "Çorba yiyoruz.", EN: "We are eating soup." },
      },
      {
        type: "choice",
        id: "partitive-8",
        text: "Je ne prends pas ___ lait.",
        options: ["du", "de la", "de", "d'"],
        answer: 2,
        translation: { TR: "Süt almıyorum.", EN: "I don't take milk." },
      },
      {
        type: "free",
        id: "partitive-9",
        prompt: { TR: "Fransızca yaz: “Peynir yiyorum.”", EN: "Write in French: “I'm eating cheese.”" },
        answers: ["Je mange du fromage."],
      },
      {
        type: "build",
        id: "partitive-10",
        tokens: ["Nous", "avons", "beaucoup", "de", "pain"],
        translation: { TR: "Çok ekmeğimiz var.", EN: "We have a lot of bread." },
      },
      {
        type: "choice",
        id: "partitive-11",
        text: "Elle aime ___ chocolat.",
        options: ["le", "du", "de", "des"],
        answer: 0,
        translation: { TR: "Çikolatayı sever.", EN: "She likes chocolate." },
      },
      {
        type: "free",
        id: "partitive-12",
        prompt: { TR: "Fransızca yaz: “Yarın biraz ekmek alacağım.”", EN: "Write in French: “Tomorrow I'm going to buy some bread.”" },
        answers: ["Je vais acheter du pain demain.", "Demain, je vais acheter du pain.", "Demain je vais acheter du pain.", "Je vais acheter un peu de pain demain.", "Demain, je vais acheter un peu de pain.", "Demain je vais acheter un peu de pain."],
      },
    ],
  },
  {
    id: "numbers-time",
    level: "A1",
    title: { TR: "Sayılar, saat ve tarih", EN: "Numbers, time and dates" },
    content: [
      {
        TR: "20'den sonra: vingt, trente, quarante, cinquante, soixante. 21 = vingt et un, 22 = vingt-deux.\n70'ten sonra Fransızca hesap yapar:\n70 = soixante-dix (60+10) · 71 = soixante et onze\n80 = quatre-vingts (4×20) · 81 = quatre-vingt-un\n90 = quatre-vingt-dix · 100 = cent",
        EN: "After 20: vingt, trente, quarante, cinquante, soixante. 21 = vingt et un, 22 = vingt-deux.\nFrom 70, French does arithmetic:\n70 = soixante-dix (60+10) · 71 = soixante et onze\n80 = quatre-vingts (4×20) · 81 = quatre-vingt-un\n90 = quatre-vingt-dix · 100 = cent",
      },
      {
        TR: "Saat: Quelle heure est-il ? — Il est trois heures.\net quart (çeyrek geçiyor) · et demie (buçuk) · moins le quart (çeyrek var)\nmidi = öğlen 12 · minuit = gece 12. Resmi saatte 24 saat kullanılır: 14 h = quatorze heures.",
        EN: "Time: Quelle heure est-il ? — Il est trois heures.\net quart (quarter past) · et demie (half past) · moins le quart (quarter to)\nmidi = noon · minuit = midnight. Official times use the 24-hour clock: 14 h = quatorze heures.",
      },
      {
        TR: "Tarih: le + sayı + ay: le 14 juillet. Ayın biri için premier: le premier mai. Gün ve ay adları küçük harfle yazılır. Nous sommes lundi = Bugün pazartesi.",
        EN: "Dates: le + number + month: le 14 juillet. The first is premier: le premier mai. Days and months take no capital letter. Nous sommes lundi = Today is Monday.",
      },
      {
        TR: "Küçük istisnalar: “et” yalnız 21, 31, 41, 51, 61 ve 71'de gelir (vingt et un, soixante et onze); 81 ve 91'de gelmez (quatre-vingt-un, quatre-vingt-onze). quatre-vingts sonunda başka sayı yoksa -s alır: quatre-vingts ama quatre-vingt-deux. Saatte heure: une heure (tekil), deux heures (çoğul).",
        EN: "Small exceptions: “et” appears only in 21, 31, 41, 51, 61 and 71 (vingt et un, soixante et onze); not in 81 and 91 (quatre-vingt-un, quatre-vingt-onze). Quatre-vingts takes an -s only when nothing follows: quatre-vingts but quatre-vingt-deux. In times: une heure (singular), deux heures (plural).",
      },
      {
        TR: "Tipik hatalar. Yanlış: vingt-un · quatre-vingt et un · Il est trois et demie · Il est trois heure et demi. Doğru: vingt et un · quatre-vingt-un · Il est trois heures et demie. Ayrıca Belçika'da duyduğun septante ve nonante standart Fransa Fransızcasında yoktur: soixante-dix, quatre-vingt-dix de.",
        EN: "Typical mistakes. Wrong: vingt-un · quatre-vingt et un · Il est trois et demie · Il est trois heure et demi. Right: vingt et un · quatre-vingt-un · Il est trois heures et demie. Also, septante and nonante (heard in Belgium) are not standard in France: say soixante-dix and quatre-vingt-dix.",
      },
      {
        TR: "Nasıl hatırlarsın: sayıyı bir hesap gibi oku. 70 = 60 + 10, 80 = 4 × 20, 90 = 4 × 20 + 10. Saati hep aynı iskelete oturt: Il est + sayı + heure(s) + (et quart / et demie / moins le quart / moins dix). Günde bir kez saati Fransızca söyle.",
        EN: "How to remember: read a number like a sum. 70 = 60 + 10, 80 = 4 × 20, 90 = 4 × 20 + 10. Always put the time in the same frame: Il est + number + heure(s) + (et quart / et demie / moins le quart / moins dix). Say the time in French once a day.",
      },
    ],
    examples: [
      {
        fr: "Il est huit heures et demie.",
        translation: { TR: "Saat sekiz buçuk.", EN: "It is half past eight." },
      },
      {
        fr: "Mon anniversaire est le premier mai.",
        translation: { TR: "Doğum günüm bir mayısta.", EN: "My birthday is on the first of May." },
      },
      {
        fr: "J'ai soixante-dix euros.",
        translation: { TR: "Yetmiş avrom var.", EN: "I have seventy euros." },
      },
      {
        fr: "Nous sommes le quatorze juillet.",
        translation: { TR: "Bugün 14 Temmuz.", EN: "It is the 14th of July." },
      },
      {
        fr: "Il est trois heures moins le quart.",
        translation: { TR: "Saat üçe çeyrek var.", EN: "It is a quarter to three." },
      },
      {
        fr: "J'ai quatre-vingt-dix euros.",
        translation: { TR: "Doksan avrom var.", EN: "I have ninety euros." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "numbers-time-1",
        text: "Il est sept heures et ___. (7:30)",
        answers: ["demie"],
        translation: { TR: "Saat yedi buçuk.", EN: "It is half past seven." },
      },
      {
        type: "fill",
        id: "numbers-time-2",
        text: "Mon grand-père a ___ ans. (80)",
        answers: ["quatre-vingts", "80"],
        translation: { TR: "Dedem seksen yaşında.", EN: "My grandfather is eighty." },
      },
      {
        type: "fill",
        id: "numbers-time-3",
        text: "Nous sommes le ___ mai. (1)",
        answers: ["premier", "1er"],
        translation: { TR: "Bugün bir mayıs.", EN: "Today is the first of May." },
      },
      {
        type: "build",
        id: "numbers-time-4",
        tokens: ["Il", "est", "midi", "et", "quart"],
        translation: { TR: "Saat on ikiyi çeyrek geçiyor.", EN: "It is a quarter past twelve." },
      },
      {
        type: "free",
        id: "numbers-time-5",
        prompt: { TR: "Fransızca yaz: “Saat dokuz.”", EN: "Write in French: “It is nine o'clock.”" },
        answers: ["Il est neuf heures.", "Il est 9 heures.", "Il est 9 h.", "Il est 9h."],
      },
      {
        type: "fill",
        id: "numbers-time-6",
        text: "Il est cinq heures ___ quart.",
        answers: ["et"],
        translation: { TR: "Saat beşi çeyrek geçiyor.", EN: "It is a quarter past five." },
      },
      {
        type: "choice",
        id: "numbers-time-7",
        text: "71 = ___",
        options: ["soixante-onze", "soixante et onze", "septante et un", "soixante-dix-un"],
        answer: 1,
        translation: { TR: "71 nasıl yazılır?", EN: "How do you write 71?" },
      },
      {
        type: "choice",
        id: "numbers-time-8",
        text: "Il est trois heures ___. (3:30)",
        options: ["et demi", "et quart", "et demie", "moins demie"],
        answer: 2,
        translation: { TR: "Saat üç buçuk.", EN: "It is half past three." },
      },
      {
        type: "free",
        id: "numbers-time-9",
        prompt: { TR: "Fransızca yaz: “Saat sekiz buçuk.”", EN: "Write in French: “It is half past eight.”" },
        answers: ["Il est huit heures et demie.", "Il est 8 heures et demie.", "Il est 8 h 30.", "Il est 8h30.", "Il est huit heures trente.", "Il est 8 heures 30."],
      },
      {
        type: "build",
        id: "numbers-time-10",
        tokens: ["Il", "est", "trois", "heures", "moins", "le", "quart"],
        translation: { TR: "Saat üçe çeyrek var.", EN: "It is a quarter to three." },
      },
      {
        type: "choice",
        id: "numbers-time-11",
        text: "80 = ___",
        options: ["quatre-vingts", "quatre-vingt", "octante", "vingt-quatre"],
        answer: 0,
        translation: { TR: "80 nasıl yazılır?", EN: "How do you write 80?" },
      },
      {
        type: "free",
        id: "numbers-time-12",
        prompt: { TR: "Fransızca yaz: “Saat yedide okula gideceğim.”", EN: "Write in French: “I'm going to go to school at seven.”" },
        answers: ["Je vais aller à l'école à sept heures.", "À sept heures, je vais aller à l'école.", "À sept heures je vais aller à l'école.", "Je vais à l'école à sept heures.", "À sept heures, je vais à l'école.", "À sept heures je vais à l'école.", "Je vais aller à l'école à 7 heures.", "Je vais à l'école à 7 heures.", "Je vais aller à l'école à 7 h.", "Je vais à l'école à 7 h.", "Je vais aller à l'école à 7h.", "Je vais à l'école à 7h."],
      },
    ],
  },
  {
    id: "modal-verbs",
    level: "A1",
    title: { TR: "İstemek, -ebilmek, -meli: vouloir, pouvoir, devoir", EN: "Modal verbs: vouloir, pouvoir, devoir" },
    content: [
      {
        TR: "Üçü de düzensizdir ve arkalarından mastar gelir:\nvouloir (istemek): je veux · tu veux · il/elle veut · nous voulons · vous voulez · ils/elles veulent\npouvoir (-ebilmek): je peux · tu peux · il/elle peut · nous pouvons · vous pouvez · ils/elles peuvent\ndevoir (-meli, zorunda olmak): je dois · tu dois · il/elle doit · nous devons · vous devez · ils/elles doivent",
        EN: "All three are irregular and take an infinitive after them:\nvouloir (to want): je veux · tu veux · il/elle veut · nous voulons · vous voulez · ils/elles veulent\npouvoir (can): je peux · tu peux · il/elle peut · nous pouvons · vous pouvez · ils/elles peuvent\ndevoir (must, have to): je dois · tu dois · il/elle doit · nous devons · vous devez · ils/elles doivent",
      },
      {
        TR: "Türkçede bu anlamlar fiile ek olarak eklenir (gelebilirim, gelmeliyim). Fransızcada ayrı bir fiildir ve asıl fiil mastarda kalır: Je peux venir. Je dois partir.\nOlumsuzda ne ... pas yalnız çekimli fiili sarar: Je ne peux pas venir.",
        EN: "The main verb stays in the infinitive: Je peux venir. Je dois partir.\nIn the negative, ne ... pas wraps only the conjugated verb: Je ne peux pas venir.",
      },
      {
        TR: "Kibar istek için je veux değil je voudrais (isterdim) de: Je voudrais un café, s'il vous plaît. Dükkânda je veux kaba duyulur.",
        EN: "For a polite request say je voudrais (I would like), not je veux: Je voudrais un café, s'il vous plaît. In a shop je veux sounds rude.",
      },
      {
        TR: "Birkaç ek kullanım. Rica: Je peux entrer ? (Girebilir miyim?) · Vous pouvez répéter ? (Tekrar edebilir misiniz?). devoir + isim = borçlu olmak: Je dois dix euros. Je veux bien = olur, isterim (kabul). vouloir dire = demek istemek: Qu'est-ce que ça veut dire ?",
        EN: "A few extra uses. Requests: Je peux entrer ? (May I come in?) · Vous pouvez répéter ? (Can you repeat?). devoir + noun = to owe: Je dois dix euros. Je veux bien = sure, I'd like that. vouloir dire = to mean: Qu'est-ce que ça veut dire ?",
      },
      {
        TR: "Tipik hatalar. Yanlış: Je peux venir pas. · Je veux manges. · Je dois pars. · Je peux parles français. Doğru: Je ne peux pas venir. · Je veux manger. · Je dois partir. · Je peux parler français. İki fiilden yalnız ilki çekilir, ikincisi mastar kalır. Bir de dükkânda Je veux un café kabadır, Je voudrais de.",
        EN: "Typical mistakes. Wrong: Je peux venir pas. · Je veux manges. · Je dois pars. · Je peux parles français. Right: Je ne peux pas venir. · Je veux manger. · Je dois partir. · Je peux parler français. Of the two verbs only the first is conjugated; the second stays an infinitive. And in a shop Je veux un café is rude; say Je voudrais.",
      },
      {
        TR: "Nasıl hatırlarsın: modal + mastar, hep aynı iskelet. veux / peux tekilde -x ile biter (je veux, tu veux, je peux, tu peux); il / elle -t alır (veut, peut). Kibar istek için kalıbı ezberle: Je voudrais + isim ya da mastar.",
        EN: "How to remember: modal + infinitive, always the same frame. Veux / peux end in -x in the singular (je veux, tu veux, je peux, tu peux); il / elle take -t (veut, peut). For polite requests memorise the frame: Je voudrais + noun or infinitive.",
      },
    ],
    examples: [
      {
        fr: "Je voudrais un café, s'il vous plaît.",
        translation: { TR: "Bir kahve rica ediyorum.", EN: "I would like a coffee, please." },
      },
      {
        fr: "Tu peux parler lentement ?",
        translation: { TR: "Yavaş konuşabilir misin?", EN: "Can you speak slowly?" },
      },
      {
        fr: "Nous devons partir.",
        translation: { TR: "Gitmemiz gerekiyor.", EN: "We have to leave." },
      },
      {
        fr: "Vous pouvez répéter, s'il vous plaît ?",
        translation: { TR: "Tekrar edebilir misiniz lütfen?", EN: "Can you repeat, please?" },
      },
      {
        fr: "Je dois travailler ce soir.",
        translation: { TR: "Bu akşam çalışmam gerek.", EN: "I have to work tonight." },
      },
      {
        fr: "Ils veulent habiter à Paris.",
        translation: { TR: "Paris'te oturmak istiyorlar.", EN: "They want to live in Paris." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "modal-verbs-1",
        text: "Je ___ un thé, s'il vous plaît.",
        answers: ["voudrais"],
        translation: { TR: "Bir çay rica ediyorum.", EN: "I would like a tea, please." },
      },
      {
        type: "fill",
        id: "modal-verbs-2",
        text: "Ils ___ travailler demain. (devoir)",
        answers: ["doivent"],
        translation: { TR: "Yarın çalışmaları gerekiyor.", EN: "They have to work tomorrow." },
      },
      {
        type: "fill",
        id: "modal-verbs-3",
        text: "Vous ___ venir ? (pouvoir)",
        answers: ["pouvez"],
        translation: { TR: "Gelebilir misiniz?", EN: "Can you come?" },
      },
      {
        type: "build",
        id: "modal-verbs-4",
        tokens: ["Je", "ne", "peux", "pas", "venir"],
        translation: { TR: "Gelemem.", EN: "I can't come." },
      },
      {
        type: "free",
        id: "modal-verbs-5",
        prompt: { TR: "Fransızca yaz: “Fransızca öğrenmek istiyorum.”", EN: "Write in French: “I want to learn French.”" },
        answers: ["Je veux apprendre le français.", "Je voudrais apprendre le français."],
      },
      {
        type: "fill",
        id: "modal-verbs-6",
        text: "Nous ___ partir demain. (devoir)",
        answers: ["devons"],
        translation: { TR: "Yarın gitmemiz gerek.", EN: "We have to leave tomorrow." },
      },
      {
        type: "choice",
        id: "modal-verbs-7",
        text: "Tu ___ venir ?",
        options: ["peut", "pouvez", "peux", "peuvent"],
        answer: 2,
        translation: { TR: "Gelebilir misin?", EN: "Can you come?" },
      },
      {
        type: "choice",
        id: "modal-verbs-8",
        text: "Elle ne ___ pas venir.",
        options: ["peux", "peut", "peuvent", "pouvez"],
        answer: 1,
        translation: { TR: "O (kadın) gelemiyor.", EN: "She can't come." },
      },
      {
        type: "free",
        id: "modal-verbs-9",
        prompt: { TR: "Fransızca yaz: “Gelemiyorum.”", EN: "Write in French: “I can't come.”" },
        answers: ["Je ne peux pas venir."],
      },
      {
        type: "build",
        id: "modal-verbs-10",
        tokens: ["Vous", "devez", "parler", "lentement"],
        translation: { TR: "Yavaş konuşmanız gerek.", EN: "You have to speak slowly." },
      },
      {
        type: "choice",
        id: "modal-verbs-11",
        text: "Pour être poli : Je ___ un café.",
        options: ["veux", "veut", "voulons", "voudrais"],
        answer: 3,
        translation: { TR: "Kibar olmak için: Bir kahve isterim.", EN: "To be polite: I'd like a coffee." },
      },
      {
        type: "free",
        id: "modal-verbs-12",
        prompt: { TR: "Fransızca yaz: “Yarın Paris'e gitmek istiyoruz.”", EN: "Write in French: “We want to go to Paris tomorrow.”" },
        answers: ["Nous voulons aller à Paris demain.", "Demain, nous voulons aller à Paris.", "Demain nous voulons aller à Paris.", "On veut aller à Paris demain.", "Demain, on veut aller à Paris.", "Demain on veut aller à Paris."],
      },
    ],
  },
  {
    id: "places-prepositions",
    level: "A1",
    title: { TR: "Yer bildiren edatlar", EN: "Prepositions of place" },
    content: [
      {
        TR: "Türkçede tek ek yeter (Paris'te, Fransa'ya). Fransızcada aynı edat hem “-de” hem “-e” demektir, ama edat yerin türüne göre değişir:\nşehir → à: à Paris, à Istanbul\ndişil ülke (çoğu -e ile biter) → en: en France, en Turquie\neril ülke → au: au Japon, au Canada\nçoğul ülke → aux: aux États-Unis",
        EN: "One preposition means both “in” and “to”, but it depends on the place:\ncity → à: à Paris, à Istanbul\nfeminine country (most end in -e) → en: en France, en Turquie\nmasculine country → au: au Japon, au Canada\nplural country → aux: aux États-Unis",
      },
      {
        TR: "“-den” için: de Paris, de France, du Japon, des États-Unis (de + le = du, bildiğin kural).",
        EN: "For “from”: de Paris, de France, du Japon, des États-Unis (de + le = du, the rule you know).",
      },
      {
        TR: "Konum edatları da Türkçenin tersine ismin önüne gelir:\ndans (içinde) · sur (üstünde) · sous (altında)\ndevant (önünde) · derrière (arkasında) · entre (arasında)\nà côté de (yanında) → à côté du cinéma, à côté de la gare",
        EN: "Position words:\ndans (in) · sur (on) · sous (under)\ndevant (in front of) · derrière (behind) · entre (between)\nà côté de (next to) → à côté du cinéma, à côté de la gare",
      },
      {
        TR: "İstisnalar: sesli harfle başlayan eril ülkelerde de en kullanılır: en Iran, en Israël. “-den” için sesli harf önünde d': d'Italie, d'Iran. Adalar çoğunlukla à: à Cuba, à Chypre. Birden fazla ülke adı çoğul gelirse: aux États-Unis, aux Pays-Bas (Hollanda), des Pays-Bas.",
        EN: "Exceptions: masculine countries that start with a vowel also take en: en Iran, en Israël. For “from”, d' before a vowel: d'Italie, d'Iran. Islands mostly take à: à Cuba, à Chypre. Plural country names: aux États-Unis, aux Pays-Bas (the Netherlands), des Pays-Bas.",
      },
      {
        TR: "Tipik hatalar. Yanlış: J'habite à France. · Je vais à Italie. · Je viens de le Japon. · Il est en Paris. Doğru: J'habite en France. · Je vais en Italie. · Je viens du Japon. · Il est à Paris. Türkçede tek ek (-de, -e) hepsini karşılar; Fransızcada yerin türü (şehir, dişil ülke, eril ülke) edatı seçer. sur (üstünde) ve sous (altında) kolay karışır.",
        EN: "Typical mistakes. Wrong: J'habite à France. · Je vais à Italie. · Je viens de le Japon. · Il est en Paris. Right: J'habite en France. · Je vais en Italie. · Je viens du Japon. · Il est à Paris. Turkish has one suffix (-de, -e) for all of these; French picks the preposition by the kind of place (city, feminine country, masculine country). Sur (on) and sous (under) are easy to mix up.",
      },
      {
        TR: "Nasıl hatırlarsın: ülke -e ile bitiyorsa çoğunlukla dişildir (la France, l'Italie, la Turquie) → en. Diğerleri eril (le Japon, le Canada) → au. Şehir her zaman à. Konum edatları için bir kutu çiz: kutunun içi dans, üstü sur, altı sous, önü devant, arkası derrière.",
        EN: "How to remember: a country ending in -e is usually feminine (la France, l'Italie, la Turquie) → en. Others are masculine (le Japon, le Canada) → au. A city is always à. For position words draw a box: inside is dans, on top is sur, under is sous, in front is devant, behind is derrière.",
      },
    ],
    examples: [
      {
        fr: "J'habite en Turquie, à Istanbul.",
        translation: { TR: "Türkiye'de, İstanbul'da oturuyorum.", EN: "I live in Turkey, in Istanbul." },
      },
      {
        fr: "Le chat est sous la table.",
        translation: { TR: "Kedi masanın altında.", EN: "The cat is under the table." },
      },
      {
        fr: "La banque est à côté de la poste.",
        translation: { TR: "Banka postanenin yanında.", EN: "The bank is next to the post office." },
      },
      {
        fr: "Il habite aux États-Unis.",
        translation: { TR: "Amerika'da oturuyor.", EN: "He lives in the United States." },
      },
      {
        fr: "Nous venons d'Italie.",
        translation: { TR: "İtalya'dan geliyoruz.", EN: "We come from Italy." },
      },
      {
        fr: "Le chat est devant la porte.",
        translation: { TR: "Kedi kapının önünde.", EN: "The cat is in front of the door." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "places-prepositions-1",
        text: "Elle habite ___ Japon.",
        answers: ["au"],
        translation: { TR: "O (kadın) Japonya'da oturuyor.", EN: "She lives in Japan." },
      },
      {
        type: "fill",
        id: "places-prepositions-2",
        text: "Nous allons ___ Italie.",
        answers: ["en"],
        translation: { TR: "İtalya'ya gidiyoruz.", EN: "We are going to Italy." },
      },
      {
        type: "fill",
        id: "places-prepositions-3",
        text: "Le livre est ___ la table. (üstünde)",
        answers: ["sur"],
        translation: { TR: "Kitap masanın üstünde.", EN: "The book is on the table." },
      },
      {
        type: "build",
        id: "places-prepositions-4",
        tokens: ["Le", "café", "est", "à", "côté", "du", "cinéma"],
        translation: { TR: "Kafe sinemanın yanında.", EN: "The café is next to the cinema." },
      },
      {
        type: "free",
        id: "places-prepositions-5",
        prompt: { TR: "Fransızca yaz: “Türkiye'de oturuyorum.”", EN: "Write in French: “I live in Turkey.”" },
        answers: ["J'habite en Turquie.", "Je vis en Turquie."],
      },
      {
        type: "fill",
        id: "places-prepositions-6",
        text: "Ils habitent ___ Canada.",
        answers: ["au"],
        translation: { TR: "Kanada'da oturuyorlar.", EN: "They live in Canada." },
      },
      {
        type: "choice",
        id: "places-prepositions-7",
        text: "Elle va ___ Italie.",
        options: ["au", "à", "en", "aux"],
        answer: 2,
        translation: { TR: "İtalya'ya gidiyor.", EN: "She is going to Italy." },
      },
      {
        type: "choice",
        id: "places-prepositions-8",
        text: "Je viens ___ Japon.",
        options: ["de", "du", "des", "d'"],
        answer: 1,
        translation: { TR: "Japonya'dan geliyorum.", EN: "I come from Japan." },
      },
      {
        type: "free",
        id: "places-prepositions-9",
        prompt: { TR: "Fransızca yaz: “Fransa'da oturuyorum.”", EN: "Write in French: “I live in France.”" },
        answers: ["J'habite en France.", "Je vis en France."],
      },
      {
        type: "build",
        id: "places-prepositions-10",
        tokens: ["Ils", "viennent", "des", "États-Unis"],
        translation: { TR: "Amerika'dan geliyorlar.", EN: "They come from the United States." },
      },
      {
        type: "choice",
        id: "places-prepositions-11",
        text: "Le chat dort ___ la table.",
        options: ["derrière", "entre", "dans", "sous"],
        answer: 3,
        translation: { TR: "Kedi masanın altında uyuyor.", EN: "The cat is sleeping under the table." },
      },
      {
        type: "free",
        id: "places-prepositions-12",
        prompt: { TR: "Fransızca yaz: “Yarın Japonya'ya gideceğiz.”", EN: "Write in French: “We are going to go to Japan tomorrow.”" },
        answers: ["Nous allons aller au Japon demain.", "Demain, nous allons aller au Japon.", "Demain nous allons aller au Japon.", "Nous allons au Japon demain.", "On va aller au Japon demain.", "On va au Japon demain.", "Demain, on va au Japon.", "Demain on va au Japon.", "Demain, on va aller au Japon.", "Demain on va aller au Japon.", "Demain, nous allons au Japon.", "Demain nous allons au Japon."],
      },
    ],
  },
  {
    id: "reflexive-verbs",
    level: "A1",
    title: { TR: "Dönüşlü fiiller: se lever, s'appeler", EN: "Reflexive verbs: se lever, s'appeler" },
    content: [
      {
        TR: "Dönüşlü fiil, eylemin öznenin kendisine yöneldiğini söyler; Türkçedeki -n- eki gibi (yıkamak → yıkanmak). Mastarda se vardır: se laver. Çekimde se özneye uyar:\nje me lave · tu te laves · il/elle se lave\nnous nous lavons · vous vous lavez · ils/elles se lavent",
        EN: "A reflexive verb is something the subject does to itself. The infinitive has se: se laver (to wash oneself). The pronoun matches the subject:\nje me lave · tu te laves · il/elle se lave\nnous nous lavons · vous vous lavez · ils/elles se lavent",
      },
      {
        TR: "Sesli harften önce me, te, se → m', t', s': je m'appelle, tu t'appelles, il s'habille.",
        EN: "Before a vowel, me, te, se → m', t', s': je m'appelle, tu t'appelles, il s'habille.",
      },
      {
        TR: "İki yazım değişikliği:\nse lever: je me lève, tu te lèves, il se lève, ils se lèvent ama nous nous levons\ns'appeler: je m'appelle (çift l), ama nous nous appelons",
        EN: "Two spelling changes:\nse lever: je me lève, tu te lèves, il se lève, ils se lèvent but nous nous levons\ns'appeler: je m'appelle (double l), but nous nous appelons",
      },
      {
        TR: "Olumsuzda zamir fiilden ayrılmaz, ne ... pas ikisini birlikte sarar: Je ne me lève pas tôt.",
        EN: "In the negative the pronoun stays with the verb, and ne ... pas wraps both: Je ne me lève pas tôt.",
      },
      {
        TR: "Bazı fiillerin anlamı dönüşlüde değişir: appeler (çağırmak) → s'appeler (adı olmak), lever (kaldırmak) → se lever (kalkmak), promener → se promener (gezmek). Çoğulda “birbirini” anlamı da çıkar: Ils se parlent (birbirleriyle konuşurlar). Mastarla: Je vais me coucher (Yatacağım): zamir özneye uyar, fiil mastar kalır.",
        EN: "Some verbs change meaning when reflexive: appeler (to call) → s'appeler (to be named), lever (to lift) → se lever (to get up), promener → se promener (to go for a walk). In the plural it can also mean “each other”: Ils se parlent (They talk to each other). With an infinitive: Je vais me coucher (I'm going to bed): the pronoun matches the subject, the verb stays an infinitive.",
      },
      {
        TR: "Tipik hatalar. Yanlış: Je me appelle. · Il se lève pas. · Je vais se coucher. · Je lave (kendimi yıkamak isterken). Doğru: Je m'appelle. · Il ne se lève pas. · Je vais me coucher. · Je me lave. Je lave la voiture ise “arabayı yıkıyorum” demektir.",
        EN: "Typical mistakes. Wrong: Je me appelle. · Il se lève pas. · Je vais se coucher. · Je lave (meaning “I wash myself”). Right: Je m'appelle. · Il ne se lève pas. · Je vais me coucher. · Je me lave. Je lave la voiture means “I wash the car”.",
      },
      {
        TR: "Nasıl hatırlarsın: zamiri özneyle eşle: je → me, tu → te, il → se, nous → nous, vous → vous, ils → se. “Kendimi, kendini” diye çevir. Her sabah rutinini Fransızca anlat: je me lève, je me lave, je m'habille, je me couche.",
        EN: "How to remember: match the pronoun to the subject: je → me, tu → te, il → se, nous → nous, vous → vous, ils → se. Translate it as “myself, yourself”. Describe your morning routine in French: je me lève, je me lave, je m'habille, je me couche.",
      },
    ],
    examples: [
      {
        fr: "Je m'appelle Ayşe.",
        translation: { TR: "Adım Ayşe.", EN: "My name is Ayşe." },
      },
      {
        fr: "Elle se lève à sept heures.",
        translation: { TR: "O (kadın) saat yedide kalkar.", EN: "She gets up at seven." },
      },
      {
        fr: "Nous nous couchons tard.",
        translation: { TR: "Geç yatarız.", EN: "We go to bed late." },
      },
      {
        fr: "Je vais me coucher tôt.",
        translation: { TR: "Erken yatacağım.", EN: "I'm going to go to bed early." },
      },
      {
        fr: "Elle s'habille vite.",
        translation: { TR: "Hızlı giyiniyor.", EN: "She gets dressed quickly." },
      },
      {
        fr: "Ils se parlent beaucoup.",
        translation: { TR: "Birbirleriyle çok konuşurlar.", EN: "They talk to each other a lot." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "reflexive-verbs-1",
        text: "Je ___ lève à six heures.",
        answers: ["me"],
        translation: { TR: "Saat altıda kalkarım.", EN: "I get up at six." },
      },
      {
        type: "fill",
        id: "reflexive-verbs-2",
        text: "Comment tu ___ appelles ?",
        answers: ["t'"],
        translation: { TR: "Adın ne?", EN: "What is your name?" },
      },
      {
        type: "fill",
        id: "reflexive-verbs-3",
        text: "Vous ___ couchez tard.",
        answers: ["vous"],
        translation: { TR: "Geç yatıyorsunuz.", EN: "You go to bed late." },
      },
      {
        type: "build",
        id: "reflexive-verbs-4",
        tokens: ["Ils", "ne", "se", "lèvent", "pas", "tôt"],
        translation: { TR: "Erken kalkmazlar.", EN: "They don't get up early." },
      },
      {
        type: "free",
        id: "reflexive-verbs-5",
        prompt: { TR: "Fransızca yaz: “Adım Ali.”", EN: "Write in French: “My name is Ali.”" },
        answers: ["Je m'appelle Ali."],
      },
      {
        type: "fill",
        id: "reflexive-verbs-6",
        text: "Nous ___ levons à sept heures.",
        answers: ["nous"],
        translation: { TR: "Saat yedide kalkarız.", EN: "We get up at seven." },
      },
      {
        type: "choice",
        id: "reflexive-verbs-7",
        text: "Il ___ appelle Paul.",
        options: ["m'", "t'", "s'", "se"],
        answer: 2,
        translation: { TR: "Adı Paul.", EN: "His name is Paul." },
      },
      {
        type: "choice",
        id: "reflexive-verbs-8",
        text: "Je vais ___ coucher.",
        options: ["se", "me", "te", "nous"],
        answer: 1,
        translation: { TR: "Yatacağım.", EN: "I'm going to go to bed." },
      },
      {
        type: "free",
        id: "reflexive-verbs-9",
        prompt: { TR: "Fransızca yaz: “Sen erken kalkıyorsun.”", EN: "Write in French: “You get up early.”" },
        answers: ["Tu te lèves tôt.", "Vous vous levez tôt."],
      },
      {
        type: "build",
        id: "reflexive-verbs-10",
        tokens: ["Elle", "se", "couche", "à", "dix", "heures"],
        translation: { TR: "Saat onda yatıyor.", EN: "She goes to bed at ten." },
      },
      {
        type: "choice",
        id: "reflexive-verbs-11",
        text: "Tu ne ___ lèves pas tôt.",
        options: ["te", "t'", "me", "se"],
        answer: 0,
        translation: { TR: "Erken kalkmıyorsun.", EN: "You don't get up early." },
      },
      {
        type: "free",
        id: "reflexive-verbs-12",
        prompt: { TR: "Fransızca yaz: “Yarın erken kalkmayacağım.”", EN: "Write in French: “I'm not going to get up early tomorrow.”" },
        answers: ["Je ne vais pas me lever tôt demain.", "Demain, je ne vais pas me lever tôt.", "Demain je ne vais pas me lever tôt."],
      },
    ],
  },
  {
    id: "imperative",
    level: "A1",
    title: { TR: "Emir kipi", EN: "The imperative" },
    content: [
      {
        TR: "Emir kipinin üç biçimi var, Türkçedeki gibi: konuş · konuşalım · konuşun. Şimdiki zaman biçimini al, özneyi at:\ntu parles → Parle !\nnous parlons → Parlons !\nvous parlez → Parlez !",
        EN: "The imperative has three forms: tu, nous, vous. Take the present tense and drop the subject:\ntu parles → Parle !\nnous parlons → Parlons !\nvous parlez → Parlez !",
      },
      {
        TR: "-er fiillerinde (ve aller'de) tu biçimi -s'yi kaybeder: tu manges → Mange ! · tu vas → Va !\nDiğer fiiller -s'yi korur: Finis ! · Prends ! · Viens !",
        EN: "-er verbs (and aller) lose the -s in the tu form: tu manges → Mange ! · tu vas → Va !\nOther verbs keep it: Finis ! · Prends ! · Viens !",
      },
      {
        TR: "Düzensiz olanlar:\nêtre: sois · soyons · soyez\navoir: aie · ayons · ayez\naller: va · allons · allez\nOlumsuz emir: Ne parle pas ! · Ne mangez pas !",
        EN: "Irregular ones:\nêtre: sois · soyons · soyez\navoir: aie · ayons · ayez\naller: va · allons · allez\nNegative: Ne parle pas ! · Ne mangez pas !",
      },
      {
        TR: "Dönüşlü fiilde olumlu emirde zamir fiilin arkasına geçer ve tire ile bağlanır; te, toi olur: Lève-toi ! Levons-nous ! Levez-vous ! Olumsuzda zamir yerinde kalır: Ne te lève pas ! Kibar olmak için s'il te plaît / s'il vous plaît ekle. Vas-y ! = Haydi, git!",
        EN: "With reflexive verbs the positive imperative puts the pronoun after the verb with a hyphen, and te becomes toi: Lève-toi ! Levons-nous ! Levez-vous ! In the negative the pronoun stays in front: Ne te lève pas ! Add s'il te plaît / s'il vous plaît to be polite. Vas-y ! = Go on!",
      },
      {
        TR: "Tipik hatalar. Yanlış: Parles ! · Tu mange ! · Ne pas parle ! · Viens tu ! Doğru: Parle ! · Mange ! · Ne parle pas ! · Viens ! Emirde özne zamiri yoktur (Türkçedeki gibi); ve -er fiillerinde tu biçiminin sonundaki -s düşer.",
        EN: "Typical mistakes. Wrong: Parles ! · Tu mange ! · Ne pas parle ! · Viens tu ! Right: Parle ! · Mange ! · Ne parle pas ! · Viens ! The imperative has no subject pronoun (like Turkish), and -er verbs drop the -s of the tu form.",
      },
      {
        TR: "Nasıl hatırlarsın: emir = şimdiki zaman − özne. Tekil -er fiillerinde son -s'yi at. Resmi ya da kibar konuşuyorsan vous biçimini kullan (Parlez !). Olumsuzda ne ... pas fiili sarar, tıpkı her zamanki gibi.",
        EN: "How to remember: imperative = present tense minus the subject. Drop the final -s of singular -er verbs. When you are formal or polite use the vous form (Parlez !). In the negative ne ... pas wraps the verb as usual.",
      },
    ],
    examples: [
      {
        fr: "Écoute bien !",
        translation: { TR: "İyi dinle!", EN: "Listen carefully!" },
      },
      {
        fr: "Allons au cinéma !",
        translation: { TR: "Sinemaya gidelim!", EN: "Let's go to the cinema!" },
      },
      {
        fr: "Soyez patients !",
        translation: { TR: "Sabırlı olun!", EN: "Be patient!" },
      },
      {
        fr: "Prenez le bus !",
        translation: { TR: "Otobüse binin!", EN: "Take the bus!" },
      },
      {
        fr: "Lève-toi, il est sept heures !",
        translation: { TR: "Kalk, saat yedi!", EN: "Get up, it is seven o'clock!" },
      },
      {
        fr: "Ne mangez pas le gâteau !",
        translation: { TR: "Pastayı yemeyin!", EN: "Don't eat the cake!" },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "imperative-1",
        text: "___ la porte, s'il te plaît ! (fermer, tu)",
        answers: ["Ferme"],
        translation: { TR: "Kapıyı kapat lütfen!", EN: "Close the door, please!" },
      },
      {
        type: "fill",
        id: "imperative-2",
        text: "___ sages, les enfants ! (être, vous)",
        answers: ["Soyez"],
        translation: { TR: "Uslu olun çocuklar!", EN: "Be good, children!" },
      },
      {
        type: "fill",
        id: "imperative-3",
        text: "___ au parc ! (aller, nous)",
        answers: ["Allons"],
        translation: { TR: "Parka gidelim!", EN: "Let's go to the park!" },
      },
      {
        type: "build",
        id: "imperative-4",
        tokens: ["Ne", "parle", "pas", "trop", "vite"],
        translation: { TR: "Çok hızlı konuşma!", EN: "Don't speak too fast!" },
      },
      {
        type: "free",
        id: "imperative-5",
        prompt: { TR: "Fransızca yaz: “Buraya gel!”", EN: "Write in French: “Come here!”" },
        answers: ["Viens ici !", "Venez ici !"],
      },
      {
        type: "fill",
        id: "imperative-6",
        text: "___-toi, il est sept heures !",
        answers: ["Lève"],
        translation: { TR: "Kalk, saat yedi!", EN: "Get up, it is seven o'clock!" },
      },
      {
        type: "choice",
        id: "imperative-7",
        text: "(parler, tu) ___ lentement !",
        options: ["Parles", "Parle", "Parlez", "Parlons"],
        answer: 1,
        translation: { TR: "Yavaş konuş!", EN: "Speak slowly!" },
      },
      {
        type: "choice",
        id: "imperative-8",
        text: "(finir, vous) ___ le travail !",
        options: ["Finis", "Finissons", "Finissez", "Finez"],
        answer: 2,
        translation: { TR: "İşi bitirin!", EN: "Finish the work!" },
      },
      {
        type: "free",
        id: "imperative-9",
        prompt: { TR: "Fransızca yaz: “Otobüse bin!”", EN: "Write in French: “Take the bus!”" },
        answers: ["Prends le bus !", "Prenez le bus !"],
      },
      {
        type: "build",
        id: "imperative-10",
        tokens: ["Écoutez", "bien", "le", "professeur"],
        translation: { TR: "Öğretmeni iyi dinleyin.", EN: "Listen carefully to the teacher." },
      },
      {
        type: "choice",
        id: "imperative-11",
        text: "(être, tu) ___ gentil !",
        options: ["Sois", "Es", "Soyez", "Étais"],
        answer: 0,
        translation: { TR: "Nazik ol!", EN: "Be kind!" },
      },
      {
        type: "free",
        id: "imperative-12",
        prompt: { TR: "Fransızca yaz: “Bu akşam sinemaya gidelim!”", EN: "Write in French: “Let's go to the cinema tonight!”" },
        answers: ["Allons au cinéma ce soir !", "Ce soir, allons au cinéma !", "Ce soir allons au cinéma !"],
      },
    ],
  },
  {
    id: "il-y-a-il-faut",
    level: "A1",
    title: { TR: "Il y a ve il faut", EN: "Il y a and il faut" },
    content: [
      {
        TR: "il y a = var. Türkçedeki “var” gibi tek biçimdir, tekil ve çoğulda değişmez:\nIl y a un parc. · Il y a des enfants.\nSoru: Est-ce qu'il y a un café ici ? · Qu'est-ce qu'il y a ? (Ne var? / Ne oldu?)",
        EN: "il y a = there is / there are. It never changes for singular or plural:\nIl y a un parc. · Il y a des enfants.\nQuestion: Est-ce qu'il y a un café ici ? · Qu'est-ce qu'il y a ? (What's the matter?)",
      },
      {
        TR: "yok = il n'y a pas de (sesli harf önünde d'). Olumsuzdaki de kuralı burada da geçerli:\nIl n'y a pas de pain. · Il n'y a pas d'eau.",
        EN: "there isn't / aren't any = il n'y a pas de (d' before a vowel). The usual de-after-negative rule:\nIl n'y a pas de pain. · Il n'y a pas d'eau.",
      },
      {
        TR: "il faut = gerekir, lazım. Arkasından mastar ya da isim gelir; özne her zaman il'dir:\nIl faut partir. (Gitmek lazım.)\nIl faut du temps. (Zaman lazım.)\nDikkat: Il ne faut pas fumer = sigara içilmemeli (yasak). “Gerek yok” anlamına gelmez.",
        EN: "il faut = it is necessary, one must. It takes an infinitive or a noun; the subject is always il:\nIl faut partir. (We have to go.)\nIl faut du temps. (It takes time.)\nCareful: Il ne faut pas fumer = you must not smoke. It does not mean “you don't have to”.",
      },
      {
        TR: "il y a zaman için de kullanılır: il y a deux ans = iki yıl önce. Konuşmada il düşebilir: Y a un problème. il faut kuralı: il ne faut pas = yapılmamalı, yasak. “Gerek yok” demek için il ne faut pas değil, pas besoin de kalıbı kullanılır (ileride göreceksin).",
        EN: "il y a also expresses time: il y a deux ans = two years ago. In speech il can disappear: Y a un problème. A note on il faut: il ne faut pas = must not, forbidden. To say “there is no need” you do not use il ne faut pas but pas besoin de (you will see it later).",
      },
      {
        TR: "Tipik hatalar. Yanlış: Il a un parc ici. (o sahip) · Il y a pas de pain. (yazıda) · Je faut partir. · Il faut je partir. Doğru: Il y a un parc ici. · Il n'y a pas de pain. · Il faut partir. Türkçedeki “var / yok” iki farklı fiile bölünür: il y a / il n'y a pas. il faut'ta özne hep il'dir, fiil hiç çekilmez.",
        EN: "Typical mistakes. Wrong: Il a un parc ici. (he owns one) · Il y a pas de pain. (in writing) · Je faut partir. · Il faut je partir. Right: Il y a un parc ici. · Il n'y a pas de pain. · Il faut partir. Turkish “var / yok” becomes il y a / il n'y a pas. In il faut the subject is always il and the verb never changes.",
      },
      {
        TR: "Nasıl hatırlarsın: il y a'yı tek bir kelime gibi ezberle, içindeki y “orada” demektir (“orada var”). Olumsuzda il n'y a pas de: ne ... pas ikisini sarar, artikel de olur. il faut + mastar ya da isim; fiil değişmez, çekimini düşünmene gerek yok.",
        EN: "How to remember: learn il y a as one word; the y means “there” (“there is”). In the negative: il n'y a pas de; ne ... pas wraps both and the article becomes de. il faut + infinitive or noun; the verb never changes, so there is no conjugation to think about.",
      },
    ],
    examples: [
      {
        fr: "Il y a trois chambres dans l'appartement.",
        translation: { TR: "Dairede üç oda var.", EN: "There are three bedrooms in the flat." },
      },
      {
        fr: "Il n'y a pas de lait.",
        translation: { TR: "Süt yok.", EN: "There is no milk." },
      },
      {
        fr: "Il faut acheter du pain.",
        translation: { TR: "Ekmek almak lazım.", EN: "We need to buy bread." },
      },
      {
        fr: "Qu'est-ce qu'il y a ?",
        translation: { TR: "Ne var? / Ne oldu?", EN: "What is there? / What's wrong?" },
      },
      {
        fr: "Il faut beaucoup de temps.",
        translation: { TR: "Çok zaman lazım.", EN: "It takes a lot of time." },
      },
      {
        fr: "Il ne faut pas parler ici.",
        translation: { TR: "Burada konuşulmamalı.", EN: "You must not talk here." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "il-y-a-il-faut-1",
        text: "Il y ___ un problème.",
        answers: ["a"],
        translation: { TR: "Bir sorun var.", EN: "There is a problem." },
      },
      {
        type: "fill",
        id: "il-y-a-il-faut-2",
        text: "Il n'y a pas ___ eau.",
        answers: ["d'"],
        translation: { TR: "Su yok.", EN: "There is no water." },
      },
      {
        type: "fill",
        id: "il-y-a-il-faut-3",
        text: "Il ___ travailler.",
        answers: ["faut"],
        translation: { TR: "Çalışmak lazım.", EN: "We have to work." },
      },
      {
        type: "build",
        id: "il-y-a-il-faut-4",
        tokens: ["Il", "y", "a", "beaucoup", "de", "monde"],
        translation: { TR: "Çok kalabalık.", EN: "There are a lot of people." },
      },
      {
        type: "free",
        id: "il-y-a-il-faut-5",
        prompt: { TR: "Fransızca yaz: “Ekmek yok.”", EN: "Write in French: “There is no bread.”" },
        answers: ["Il n'y a pas de pain."],
      },
      {
        type: "fill",
        id: "il-y-a-il-faut-6",
        text: "Il n'y a pas ___ café ici.",
        answers: ["de"],
        translation: { TR: "Burada kafe yok.", EN: "There is no café here." },
      },
      {
        type: "choice",
        id: "il-y-a-il-faut-7",
        text: "___ un parc ici ?",
        options: ["Est-ce qu'il a", "Est-ce que y a", "Est-ce qu'il y a", "Est-ce qu'ils y a"],
        answer: 2,
        translation: { TR: "Burada bir park var mı?", EN: "Is there a park here?" },
      },
      {
        type: "choice",
        id: "il-y-a-il-faut-8",
        text: "Il ___ partir.",
        options: ["fait", "faut", "faux", "faudra"],
        answer: 1,
        translation: { TR: "Gitmek lazım.", EN: "We have to leave." },
      },
      {
        type: "free",
        id: "il-y-a-il-faut-9",
        prompt: { TR: "Fransızca yaz: “Burada bir park var.”", EN: "Write in French: “There is a park here.”" },
        answers: ["Il y a un parc ici."],
      },
      {
        type: "build",
        id: "il-y-a-il-faut-10",
        tokens: ["Il", "ne", "faut", "pas", "fumer", "ici"],
        translation: { TR: "Burada sigara içilmez.", EN: "You must not smoke here." },
      },
      {
        type: "choice",
        id: "il-y-a-il-faut-11",
        text: "Il n'y a pas ___ pain.",
        options: ["du", "des", "un", "de"],
        answer: 3,
        translation: { TR: "Ekmek yok.", EN: "There is no bread." },
      },
      {
        type: "free",
        id: "il-y-a-il-faut-12",
        prompt: { TR: "Fransızca yaz: “Yarın çok çalışmak lazım.”", EN: "Write in French: “We have to work a lot tomorrow.”" },
        answers: ["Il faut beaucoup travailler demain.", "Demain, il faut beaucoup travailler.", "Demain il faut beaucoup travailler.", "Il faut travailler beaucoup demain."],
      },
    ],
  },
  {
    id: "stressed-pronouns",
    level: "A1",
    title: { TR: "Vurgulu zamirler: moi, toi, lui", EN: "Stressed pronouns: moi, toi, lui" },
    content: [
      {
        TR: "Özne zamirlerinin (je, tu, il…) bir de vurgulu biçimi var:\nmoi · toi · lui · elle\nnous · vous · eux · elles",
        EN: "Subject pronouns (je, tu, il…) have a stressed form too:\nmoi · toi · lui · elle\nnous · vous · eux · elles",
      },
      {
        TR: "Edattan sonra bunlar kullanılır: avec moi (benimle), pour toi (senin için), chez lui (onun evinde). chez = -in evinde / -in yanında: Je dîne chez eux.",
        EN: "Use them after prepositions: avec moi (with me), pour toi (for you), chez lui (at his place). chez = at someone's home: Je dîne chez eux.",
      },
      {
        TR: "Vurgu ve kısa cevaplar için de kullanılır; Türkçede “Ben mi? Ben Türküm.” derken vurguladığın gibi:\nMoi, je suis turc.\nQui parle français ? — Moi !\nJ'aime le café. — Moi aussi ! (Ben de!)\nJe n'aime pas le thé. — Moi non plus. (Ben de sevmem.)",
        EN: "Also for emphasis and short answers:\nMoi, je suis turc.\nQui parle français ? — Moi !\nJ'aime le café. — Moi aussi ! (Me too!)\nJe n'aime pas le thé. — Moi non plus. (Me neither.)",
      },
      {
        TR: "Ek kullanımlar. c'est + vurgulu zamir: C'est moi ! (Benim!) · Ce sont eux. (Onlar.) İki özneyi birleştirirken: Lui et moi, nous habitons à Lyon. (O ve ben ...) Soru sormak için: Et toi ? (Ya sen?) -même ekiyle: moi-même (kendim). chez + vurgulu: chez moi = benim evimde.",
        EN: "More uses. c'est + stressed pronoun: C'est moi ! (It's me!) · Ce sont eux. (It's them.) To join two subjects: Lui et moi, nous habitons à Lyon. (He and I ...) To ask back: Et toi ? (And you?) With -même: moi-même (myself). chez + stressed: chez moi = at my place.",
      },
      {
        TR: "Tipik hatalar. Yanlış: Tu viens avec je ? · C'est je. · Avec il. · Moi non (Ben de değil diye). Doğru: Tu viens avec moi ? · C'est moi. · Avec lui. · Moi non plus. Özne zamirleri (je, tu, il) edattan sonra tek başına gelmez; vurgulu biçim gerekir.",
        EN: "Typical mistakes. Wrong: Tu viens avec je ? · C'est je. · Avec il. · Moi non (meaning “me neither”). Right: Tu viens avec moi ? · C'est moi. · Avec lui. · Moi non plus. Subject pronouns (je, tu, il) cannot stand alone after a preposition; the stressed form is needed.",
      },
      {
        TR: "Nasıl hatırlarsın: yalnız dört biçim değişir: je → moi, tu → toi, il → lui, ils → eux. Geri kalanı aynı: elle, nous, vous, elles. Kural: edattan sonra ya da fiilsiz kalan cümlede (kısa cevaplarda) vurgulu zamir kullan. Benim için olumlu: moi aussi, olumsuz: moi non plus.",
        EN: "How to remember: only four forms change: je → moi, tu → toi, il → lui, ils → eux. The rest stay the same: elle, nous, vous, elles. Rule: use the stressed pronoun after a preposition and in short answers without a verb. Positive: moi aussi; negative: moi non plus.",
      },
    ],
    examples: [
      {
        fr: "Tu viens avec moi ?",
        translation: { TR: "Benimle geliyor musun?", EN: "Are you coming with me?" },
      },
      {
        fr: "Moi, j'aime le café. — Moi aussi !",
        translation: { TR: "Ben kahveyi severim. — Ben de!", EN: "I like coffee. — Me too!" },
      },
      {
        fr: "Ce cadeau est pour toi.",
        translation: { TR: "Bu hediye senin için.", EN: "This present is for you." },
      },
      {
        fr: "C'est moi !",
        translation: { TR: "Benim!", EN: "It's me!" },
      },
      {
        fr: "Lui et moi, nous habitons à Lyon.",
        translation: { TR: "O ve ben Lyon'da oturuyoruz.", EN: "He and I live in Lyon." },
      },
      {
        fr: "Et toi, tu es turc ?",
        translation: { TR: "Peki sen, Türk müsün?", EN: "And you, are you Turkish?" },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "stressed-pronouns-1",
        text: "Tu viens avec ___ ? (ben)",
        answers: ["moi"],
        translation: { TR: "Benimle geliyor musun?", EN: "Are you coming with me?" },
      },
      {
        type: "fill",
        id: "stressed-pronouns-2",
        text: "Nous dînons chez ___. (o, erkek)",
        answers: ["lui"],
        translation: { TR: "Onun evinde akşam yemeği yiyoruz.", EN: "We are having dinner at his place." },
      },
      {
        type: "fill",
        id: "stressed-pronouns-3",
        text: "J'aime le thé. — Moi ___ !",
        answers: ["aussi"],
        translation: { TR: "Çayı severim. — Ben de!", EN: "I like tea. — Me too!" },
      },
      {
        type: "build",
        id: "stressed-pronouns-4",
        tokens: ["Ce", "cadeau", "est", "pour", "elle"],
        translation: { TR: "Bu hediye onun (kadın) için.", EN: "This present is for her." },
      },
      {
        type: "free",
        id: "stressed-pronouns-5",
        prompt: { TR: "Fransızca yaz: “Benimle geliyor musun?”", EN: "Write in French: “Are you coming with me?”" },
        answers: [
          "Tu viens avec moi ?",
          "Est-ce que tu viens avec moi ?",
          "Viens-tu avec moi ?",
          "Vous venez avec moi ?",
          "Est-ce que vous venez avec moi ?",
          "Venez-vous avec moi ?",
        ],
      },
      {
        type: "fill",
        id: "stressed-pronouns-6",
        text: "Je parle avec ___. (o, kadın)",
        answers: ["elle"],
        translation: { TR: "Onunla konuşuyorum.", EN: "I'm talking with her." },
      },
      {
        type: "choice",
        id: "stressed-pronouns-7",
        text: "Je viens avec ___.",
        options: ["je", "me", "mon", "moi"],
        answer: 3,
        translation: { TR: "Seninle değil, benimle geliyorum.", EN: "I'm coming with me." },
      },
      {
        type: "choice",
        id: "stressed-pronouns-8",
        text: "Ils habitent chez ___. (onlar, erkek)",
        options: ["ils", "eux", "leur", "lui"],
        answer: 1,
        translation: { TR: "Onların evinde oturuyorlar.", EN: "They live at their place." },
      },
      {
        type: "free",
        id: "stressed-pronouns-9",
        prompt: { TR: "Fransızca yaz: “Ben de Türküm.”", EN: "Write in French: “I am Turkish too.”" },
        answers: ["Moi aussi, je suis turc.", "Moi aussi, je suis turque.", "Moi aussi je suis turc.", "Moi aussi je suis turque.", "Je suis turc aussi.", "Je suis turque aussi.", "Je suis aussi turc.", "Je suis aussi turque."],
      },
      {
        type: "build",
        id: "stressed-pronouns-10",
        tokens: ["Il", "habite", "chez", "eux"],
        translation: { TR: "O (erkek) onların evinde oturuyor.", EN: "He lives at their place." },
      },
      {
        type: "choice",
        id: "stressed-pronouns-11",
        text: "Je n'aime pas le thé. — Moi ___.",
        options: ["aussi", "non", "non plus", "pas"],
        answer: 2,
        translation: { TR: "Çayı sevmiyorum. — Ben de sevmem.", EN: "I don't like tea. — Me neither." },
      },
      {
        type: "free",
        id: "stressed-pronouns-12",
        prompt: { TR: "Fransızca yaz: “Yarın onlarla (erkekler) Paris'e gideceğiz.”", EN: "Write in French: “Tomorrow we are going to go to Paris with them (men).”" },
        answers: ["Nous allons aller à Paris avec eux demain.", "Demain, nous allons aller à Paris avec eux.", "Demain nous allons aller à Paris avec eux.", "Nous allons à Paris avec eux demain.", "On va aller à Paris avec eux demain.", "On va à Paris avec eux demain.", "Demain, on va à Paris avec eux.", "Demain on va à Paris avec eux.", "Demain, on va aller à Paris avec eux.", "Demain on va aller à Paris avec eux.", "Demain, nous allons à Paris avec eux.", "Demain nous allons à Paris avec eux.", "Avec eux, nous allons aller à Paris demain."],
      },
    ],
  },
  {
    id: "passe-compose-avoir",
    level: "A1",
    title: { TR: "Geçmiş zaman: avoir ile passé composé", EN: "Past tense: passé composé with avoir" },
    content: [
      {
        TR: "Bitmiş bir geçmiş eylem için (Türkçedeki -di gibi): avoir (şimdiki zaman) + geçmiş ortaç.\nJ'ai mangé = Yedim. · Nous avons parlé = Konuştuk.",
        EN: "For a finished action in the past: avoir (present) + past participle.\nJ'ai mangé = I ate / I have eaten. · Nous avons parlé = We spoke.",
      },
      {
        TR: "Düzenli ortaçlar:\n-er → -é: parler → parlé\n-ir (2. grup) → -i: finir → fini\n-re fiillerinin çoğu → -u: attendre → attendu, vendre → vendu",
        EN: "Regular participles:\n-er → -é: parler → parlé\n-ir (group 2) → -i: finir → fini\nmost -re verbs → -u: attendre → attendu, vendre → vendu",
      },
      {
        TR: "Sık kullanılan düzensizler, ezberle:\navoir → eu · être → été · faire → fait\nprendre → pris · mettre → mis · voir → vu\nboire → bu · lire → lu · dire → dit · écrire → écrit\npouvoir → pu · vouloir → voulu · devoir → dû",
        EN: "Common irregulars, learn them by heart:\navoir → eu · être → été · faire → fait\nprendre → pris · mettre → mis · voir → vu\nboire → bu · lire → lu · dire → dit · écrire → écrit\npouvoir → pu · vouloir → voulu · devoir → dû",
      },
      {
        TR: "Olumsuzda ne ... pas yalnız avoir'ı sarar: Je n'ai pas mangé.",
        EN: "In the negative, ne ... pas wraps only avoir: Je n'ai pas mangé.",
      },
      {
        TR: "Zaman ifadeleri: hier (dün), hier soir (dün akşam), la semaine dernière (geçen hafta), déjà (zaten, daha önce). “Henüz değil” için ne ... pas encore: Je n'ai pas encore fini. “Hiç” için ne ... jamais: Je n'ai jamais mangé ça. Avoir ile ortaç özneye uymaz: Elle a mangé, Ils ont mangé, ortaç aynı kalır.",
        EN: "Time words: hier (yesterday), hier soir (last night), la semaine dernière (last week), déjà (already, before). “Not yet” is ne ... pas encore: Je n'ai pas encore fini. “Never” is ne ... jamais: Je n'ai jamais mangé ça. With avoir the participle does not agree with the subject: Elle a mangé, Ils ont mangé; the participle stays the same.",
      },
      {
        TR: "Tipik hatalar. Yanlış: Je mange hier. · J'ai manger. · J'ai prendu. · J'ai faisé. Doğru: J'ai mangé hier. · J'ai mangé. · J'ai pris. · J'ai fait. Düzenli kalıbı düzensiz fiile uygulamak (prendu, faisé) çok yaygındır. -er fiillerinde ortaç mastarla aynı okunur («manjé»): yazarken -é mi -er mi diye dur ve düşün: “yedim” = ortaç = -é.",
        EN: "Typical mistakes. Wrong: Je mange hier. · J'ai manger. · J'ai prendu. · J'ai faisé. Right: J'ai mangé hier. · J'ai mangé. · J'ai pris. · J'ai fait. Applying the regular pattern to irregular verbs (prendu, faisé) is very common. For -er verbs the participle sounds like the infinitive (“man-jay”): when writing, stop and ask yourself: is it -é or -er? “I ate” = participle = -é.",
      },
      {
        TR: "Nasıl hatırlarsın: formül avoir + ortaç. Ortaçları gruplara böl: -er → -é, -ir → -i, -re → -u ve kısa bir ezber listesi (fait, pris, mis, vu, eu, été). Kart tut: “prendre → pris”. Her gün “Hier, j'ai ...” ile üç cümle yaz.",
        EN: "How to remember: formula avoir + participle. Sort participles into groups: -er → -é, -ir → -i, -re → -u, plus a short memorised list (fait, pris, mis, vu, eu, été). Keep flash cards: “prendre → pris”. Write three sentences a day starting with “Hier, j'ai ...”.",
      },
    ],
    examples: [
      {
        fr: "Hier, j'ai mangé au restaurant.",
        translation: { TR: "Dün restoranda yemek yedim.", EN: "Yesterday I ate at the restaurant." },
      },
      {
        fr: "Nous avons fini le travail.",
        translation: { TR: "İşi bitirdik.", EN: "We finished the work." },
      },
      {
        fr: "Elle n'a pas compris.",
        translation: { TR: "O (kadın) anlamadı.", EN: "She didn't understand." },
      },
      {
        fr: "Hier soir, nous avons regardé un film.",
        translation: { TR: "Dün akşam bir film izledik.", EN: "Last night we watched a film." },
      },
      {
        fr: "Tu as déjà mangé ?",
        translation: { TR: "Yemek yedin mi?", EN: "Have you already eaten?" },
      },
      {
        fr: "Je n'ai pas encore fini.",
        translation: { TR: "Henüz bitirmedim.", EN: "I haven't finished yet." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "passe-compose-avoir-1",
        text: "Hier, j'___ regardé un film.",
        answers: ["ai"],
        translation: { TR: "Dün bir film izledim.", EN: "Yesterday I watched a film." },
      },
      {
        type: "fill",
        id: "passe-compose-avoir-2",
        text: "Nous avons ___ le bus. (prendre)",
        answers: ["pris"],
        translation: { TR: "Otobüse bindik.", EN: "We took the bus." },
      },
      {
        type: "fill",
        id: "passe-compose-avoir-3",
        text: "Tu as ___ tes devoirs ? (faire)",
        answers: ["fait"],
        translation: { TR: "Ödevlerini yaptın mı?", EN: "Did you do your homework?" },
      },
      {
        type: "build",
        id: "passe-compose-avoir-4",
        tokens: ["Ils", "n'ont", "pas", "fini"],
        translation: { TR: "Bitirmediler.", EN: "They haven't finished." },
      },
      {
        type: "free",
        id: "passe-compose-avoir-5",
        prompt: { TR: "Fransızca yaz: “Dün Fransızca konuştum.”", EN: "Write in French: “Yesterday I spoke French.”" },
        answers: ["Hier, j'ai parlé français.", "Hier j'ai parlé français.", "J'ai parlé français hier."],
      },
      {
        type: "fill",
        id: "passe-compose-avoir-6",
        text: "J'ai ___ mon travail. (finir)",
        answers: ["fini"],
        translation: { TR: "İşimi bitirdim.", EN: "I finished my work." },
      },
      {
        type: "choice",
        id: "passe-compose-avoir-7",
        text: "Hier, j'ai ___ français.",
        options: ["parler", "parlé", "parle", "parlée"],
        answer: 1,
        translation: { TR: "Dün Fransızca konuştum.", EN: "Yesterday I spoke French." },
      },
      {
        type: "choice",
        id: "passe-compose-avoir-8",
        text: "Nous avons ___ un film.",
        options: ["regarder", "regarde", "regardons", "regardé"],
        answer: 3,
        translation: { TR: "Bir film izledik.", EN: "We watched a film." },
      },
      {
        type: "free",
        id: "passe-compose-avoir-9",
        prompt: { TR: "Fransızca yaz: “Dün bir film izledim.”", EN: "Write in French: “I watched a film yesterday.”" },
        answers: ["Hier, j'ai regardé un film.", "Hier j'ai regardé un film.", "J'ai regardé un film hier."],
      },
      {
        type: "build",
        id: "passe-compose-avoir-10",
        tokens: ["Elle", "a", "pris", "le", "bus"],
        translation: { TR: "Otobüse bindi.", EN: "She took the bus." },
      },
      {
        type: "choice",
        id: "passe-compose-avoir-11",
        text: "Elle a ___ un manteau. (mettre)",
        options: ["mettu", "mis", "mit", "mise"],
        answer: 1,
        translation: { TR: "Mont giydi.", EN: "She put on a coat." },
      },
      {
        type: "free",
        id: "passe-compose-avoir-12",
        prompt: { TR: "Fransızca yaz: “Dün ekmek almadım.”", EN: "Write in French: “I didn't buy bread yesterday.”" },
        answers: ["Hier, je n'ai pas acheté de pain.", "Hier je n'ai pas acheté de pain.", "Je n'ai pas acheté de pain hier."],
      },
    ],
  },
  {
    id: "passe-compose-etre",
    level: "A1",
    title: { TR: "Geçmiş zaman: être ile passé composé", EN: "Past tense: passé composé with être" },
    content: [
      {
        TR: "Bir grup fiil geçmişte avoir değil être alır. Çoğu bir hareket ya da durum değişikliği anlatır. İngilizce hatırlatıcı DR MRS VANDERTRAMP:\ndevenir, revenir, monter, rester, sortir, venir, aller, naître, descendre, entrer, rentrer, tomber, retourner, arriver, mourir, partir",
        EN: "A group of verbs takes être instead of avoir. Most describe movement or a change of state. Memory aid DR MRS VANDERTRAMP:\ndevenir, revenir, monter, rester, sortir, venir, aller, naître, descendre, entrer, rentrer, tomber, retourner, arriver, mourir, partir",
      },
      {
        TR: "être ile ortaç, sıfat gibi özneye uyar (dişil -e, çoğul -s):\nil est allé · elle est allée\nils sont allés · elles sont allées\nÇoğu zaman okunuş değişmez, yalnız yazı değişir.",
        EN: "With être, the participle agrees with the subject like an adjective (fem. -e, plural -s):\nil est allé · elle est allée\nils sont allés · elles sont allées\nUsually you can't hear it; only the spelling changes.",
      },
      {
        TR: "Düzensiz ortaçlar: venir → venu · naître → né · mourir → mort.\nDönüşlü fiiller de hep être alır: Je me suis levé(e).",
        EN: "Irregular participles: venir → venu · naître → né · mourir → mort.\nReflexive verbs always take être too: Je me suis levé(e).",
      },
      {
        TR: "Aynı fiil bazen être, bazen avoir alır. Nesnesi (neyi?) varsa avoir, yoksa être: Je suis sorti (çıktım) ↔ J'ai sorti la voiture (arabayı çıkardım). Aynısı monter, descendre, rentrer, retourner için de geçerli: Elle est montée / Elle a monté les valises. vous için uyum kişiye bağlıdır: Vous êtes allé (bir erkek), allée (bir kadın), allés (birkaç kişi).",
        EN: "The same verb sometimes takes être, sometimes avoir. With an object (what?) use avoir, without one use être: Je suis sorti (I went out) ↔ J'ai sorti la voiture (I took the car out). The same goes for monter, descendre, rentrer, retourner: Elle est montée / Elle a monté les valises. With vous the agreement depends on who you address: Vous êtes allé (one man), allée (one woman), allés (several people).",
      },
      {
        TR: "Tipik hatalar. Yanlış: J'ai allé à Paris. · Je suis mangé. · Elle est allé. · Ils sont parti. Doğru: Je suis allé à Paris. · J'ai mangé. · Elle est allée. · Ils sont partis. İki ayrı hata var: yardımcı fiili yanlış seçmek ve ortaç uyumunu unutmak. Uyum duyulmaz ama yazılır; yazıda puan kaybettirir.",
        EN: "Typical mistakes. Wrong: J'ai allé à Paris. · Je suis mangé. · Elle est allé. · Ils sont parti. Right: Je suis allé à Paris. · J'ai mangé. · Elle est allée. · Ils sont partis. Two separate errors: choosing the wrong auxiliary and forgetting agreement. Agreement is not heard but it is written, so it costs you in writing.",
      },
      {
        TR: "Nasıl hatırlarsın: hareket mantığı. Gitmek, gelmek, çıkmak, girmek, düşmek, kalmak, doğmak, ölmek: bu fiiller être alır; dönüşlüler de. Yazarken kendine sor: özne dişil mi? Çoğul mu? Öyleyse ortaca -e, -s ya da -es ekle.",
        EN: "How to remember: think of motion. Going, coming, leaving, entering, falling, staying, being born, dying: these take être, and so do reflexive verbs. When writing ask yourself: is the subject feminine? Plural? Then add -e, -s or -es to the participle.",
      },
    ],
    examples: [
      {
        fr: "Elle est arrivée hier.",
        translation: { TR: "O (kadın) dün geldi.", EN: "She arrived yesterday." },
      },
      {
        fr: "Nous sommes allés au cinéma.",
        translation: { TR: "Sinemaya gittik.", EN: "We went to the cinema." },
      },
      {
        fr: "Je suis né à Istanbul.",
        translation: { TR: "İstanbul'da doğdum.", EN: "I was born in Istanbul." },
      },
      {
        fr: "Elles sont parties hier soir.",
        translation: { TR: "Dün akşam gittiler (kadınlar).", EN: "They (women) left last night." },
      },
      {
        fr: "Je suis tombée dans la rue.",
        translation: { TR: "Sokakta düştüm (kadın).", EN: "I fell in the street (female speaker)." },
      },
      {
        fr: "Marie et Paul sont arrivés ce matin.",
        translation: { TR: "Marie ile Paul bu sabah geldi.", EN: "Marie and Paul arrived this morning." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "passe-compose-etre-1",
        text: "Marie est ___ à Paris. (aller)",
        answers: ["allée"],
        translation: { TR: "Marie Paris'e gitti.", EN: "Marie went to Paris." },
      },
      {
        type: "fill",
        id: "passe-compose-etre-2",
        text: "Ils ___ partis hier.",
        answers: ["sont"],
        translation: { TR: "Dün gittiler.", EN: "They left yesterday." },
      },
      {
        type: "fill",
        id: "passe-compose-etre-3",
        text: "Elles sont ___ ce matin. (venir)",
        answers: ["venues"],
        translation: { TR: "Bu sabah geldiler.", EN: "They (women) came this morning." },
      },
      {
        type: "build",
        id: "passe-compose-etre-4",
        tokens: ["Nous", "sommes", "restés", "à", "la", "maison"],
        translation: { TR: "Evde kaldık.", EN: "We stayed at home." },
      },
      {
        type: "free",
        id: "passe-compose-etre-5",
        prompt: { TR: "Fransızca yaz: “Dün akşam dışarı çıktım.”", EN: "Write in French: “I went out last night.”" },
        answers: [
          "Je suis sorti hier soir.",
          "Je suis sortie hier soir.",
          "Hier soir, je suis sorti.",
          "Hier soir, je suis sortie.",
          "Hier soir je suis sorti.",
          "Hier soir je suis sortie.",
        ],
      },
      {
        type: "fill",
        id: "passe-compose-etre-6",
        text: "Il est ___ à Paris. (arriver)",
        answers: ["arrivé"],
        translation: { TR: "Paris'e vardı.", EN: "He arrived in Paris." },
      },
      {
        type: "choice",
        id: "passe-compose-etre-7",
        text: "Je ___ allé à Lyon.",
        options: ["ai", "suis", "es", "est"],
        answer: 1,
        translation: { TR: "Lyon'a gittim.", EN: "I went to Lyon." },
      },
      {
        type: "choice",
        id: "passe-compose-etre-8",
        text: "Elles sont ___ hier soir.",
        options: ["partis", "parti", "partie", "parties"],
        answer: 3,
        translation: { TR: "Dün akşam gittiler (kadınlar).", EN: "They (women) left last night." },
      },
      {
        type: "free",
        id: "passe-compose-etre-9",
        prompt: { TR: "Fransızca yaz: “Dün Paris'e gittim.”", EN: "Write in French: “I went to Paris yesterday.”" },
        answers: ["Hier, je suis allé à Paris.", "Hier, je suis allée à Paris.", "Hier je suis allé à Paris.", "Hier je suis allée à Paris.", "Je suis allé à Paris hier.", "Je suis allée à Paris hier."],
      },
      {
        type: "build",
        id: "passe-compose-etre-10",
        tokens: ["Elle", "est", "restée", "à", "la", "maison"],
        translation: { TR: "Evde kaldı.", EN: "She stayed at home." },
      },
      {
        type: "choice",
        id: "passe-compose-etre-11",
        text: "Nous ___ restés à la maison.",
        options: ["avons", "êtes", "sommes", "ont"],
        answer: 2,
        translation: { TR: "Evde kaldık.", EN: "We stayed at home." },
      },
      {
        type: "free",
        id: "passe-compose-etre-12",
        prompt: { TR: "Fransızca yaz: “Dün akşam evde kalmadım.”", EN: "Write in French: “I didn't stay at home last night.”" },
        answers: ["Hier soir, je ne suis pas resté à la maison.", "Hier soir, je ne suis pas restée à la maison.", "Hier soir je ne suis pas resté à la maison.", "Hier soir je ne suis pas restée à la maison.", "Je ne suis pas resté à la maison hier soir.", "Je ne suis pas restée à la maison hier soir.", "Hier soir, je ne suis pas resté chez moi.", "Hier soir, je ne suis pas restée chez moi.", "Hier soir je ne suis pas resté chez moi.", "Hier soir je ne suis pas restée chez moi.", "Je ne suis pas resté chez moi hier soir.", "Je ne suis pas restée chez moi hier soir."],
      },
    ],
  },
  {
    id: "c-est-il-est",
    level: "A1",
    title: { TR: "C'est mi, il est mi?", EN: "C'est or il est?" },
    content: [
      {
        TR: "İkisi de “o …” ya da “bu …” diye çevrilir ama yapıları farklı.\nc'est + artikelli / iyelikli isim ya da özel isim:\nC'est un médecin. · C'est mon frère. · C'est Paul.\nÇoğulda ce sont: Ce sont mes amis.",
        EN: "Both translate as “he/she/it is”, but they take different things.\nc'est + a noun with an article or possessive, or a name:\nC'est un médecin. · C'est mon frère. · C'est Paul.\nPlural: ce sont: Ce sont mes amis.",
      },
      {
        TR: "il / elle est + sıfat, ya da artikelsiz meslek / milliyet (Türkçedeki gibi artikelsiz: “O doktor.”):\nIl est médecin. · Elle est française. · Il est grand.",
        EN: "il / elle est + an adjective, or a profession / nationality with no article:\nIl est médecin. · Elle est française. · Il est grand.",
      },
      {
        TR: "Kısa kural: un, une, mon, le … varsa c'est; artikel yoksa il / elle est.\nBir durumu ya da şeyi genel olarak yorumlarken c'est + eril sıfat: Paris ? C'est beau ! · C'est difficile.",
        EN: "Quick rule: un, une, mon, le … → c'est; no article → il / elle est.\nTo comment on a situation or a thing in general: c'est + masculine adjective: Paris ? C'est beau ! · C'est difficile.",
      },
      {
        TR: "Meslek sıfatla genişlerse artikel gelir ve c'est kullanılır: Il est médecin → C'est un excellent médecin. Saat ve hava için hep il: Il est trois heures. Il fait beau. Tarih için c'est: C'est le cinq mai. Genel yorumda c'est + eril sıfat değişmez: C'est bon ! C'est facile ! Vurgulu zamirle: C'est moi. C'est lui.",
        EN: "If a profession gets an adjective it takes an article and c'est: Il est médecin → C'est un excellent médecin. Time and weather always use il: Il est trois heures. Il fait beau. For dates use c'est: C'est le cinq mai. In general comments c'est + masculine adjective never changes: C'est bon ! C'est facile ! With stressed pronouns: C'est moi. C'est lui.",
      },
      {
        TR: "Tipik hatalar. Yanlış: Il est un médecin. · C'est médecin. · Elle est ma amie. · C'est grand. (bir kişi için) Doğru: C'est un médecin. · Il est médecin. · C'est mon amie. · Il est grand. Türkçede “o doktor” ile “o bir doktor” neredeyse aynı; Fransızcada artikel varsa c'est, yoksa il est.",
        EN: "Typical mistakes. Wrong: Il est un médecin. · C'est médecin. · Elle est ma amie. · C'est grand. (about a person) Right: C'est un médecin. · Il est médecin. · C'est mon amie. · Il est grand. In Turkish “o doktor” and “o bir doktor” are almost the same; in French with an article use c'est, without one use il est.",
      },
      {
        TR: "Nasıl hatırlarsın: “Kim bu?” sorusunun cevabı c'est (artikelli, özel isimli); “Nasıl biri / ne iş yapıyor?” sorusunun cevabı il / elle est (çıplak sıfat, meslek, milliyet). Bir şey hakkında genel bir yargı veriyorsan c'est + eril sıfat.",
        EN: "How to remember: the answer to “Who is this?” is c'est (article, proper name); the answer to “What is he like / what does he do?” is il / elle est (bare adjective, profession, nationality). For a general judgement about something use c'est + masculine adjective.",
      },
    ],
    examples: [
      {
        fr: "C'est mon amie Léa. Elle est italienne.",
        translation: { TR: "Bu arkadaşım Léa. O İtalyan.", EN: "This is my friend Léa. She is Italian." },
      },
      {
        fr: "Il est professeur.",
        translation: { TR: "O öğretmen.", EN: "He is a teacher." },
      },
      {
        fr: "Paris ? C'est magnifique !",
        translation: { TR: "Paris mi? Muhteşem!", EN: "Paris? It's wonderful!" },
      },
      {
        fr: "Mon voisin ? C'est un ingénieur.",
        translation: { TR: "Komşum mu? Mühendis.", EN: "My neighbour? He is an engineer." },
      },
      {
        fr: "Marie ? Elle est française.",
        translation: { TR: "Marie mi? Fransız.", EN: "Marie? She is French." },
      },
      {
        fr: "Apprendre le français, c'est difficile.",
        translation: { TR: "Fransızca öğrenmek zor.", EN: "Learning French is difficult." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "c-est-il-est-1",
        text: "___ un bon restaurant.",
        answers: ["C'est"],
        translation: { TR: "Bu iyi bir restoran.", EN: "It's a good restaurant." },
      },
      {
        type: "fill",
        id: "c-est-il-est-2",
        text: "Mon père ? ___ médecin.",
        answers: ["Il est"],
        translation: { TR: "Babam mı? O doktor.", EN: "My father? He is a doctor." },
      },
      {
        type: "fill",
        id: "c-est-il-est-3",
        text: "___ mes amis.",
        answers: ["Ce sont", "C'est"],
        translation: { TR: "Bunlar arkadaşlarım.", EN: "These are my friends." },
      },
      {
        type: "build",
        id: "c-est-il-est-4",
        tokens: ["Elle", "est", "très", "sympa"],
        translation: { TR: "O (kadın) çok cana yakın.", EN: "She is very nice." },
      },
      {
        type: "free",
        id: "c-est-il-est-5",
        prompt: { TR: "Fransızca yaz: “O (erkek) öğretmen.”", EN: "Write in French: “He is a teacher.”" },
        answers: ["Il est professeur.", "Il est prof.", "C'est un professeur.", "C'est un prof."],
      },
      {
        type: "fill",
        id: "c-est-il-est-6",
        text: "Marie ? ___ une amie.",
        answers: ["C'est"],
        translation: { TR: "Marie mi? Bir arkadaşım.", EN: "Marie? She is a friend." },
      },
      {
        type: "choice",
        id: "c-est-il-est-7",
        text: "Paul ? ___ professeur.",
        options: ["C'est", "Il est", "Ce sont", "Elle est"],
        answer: 1,
        translation: { TR: "Paul mü? Öğretmen.", EN: "Paul? He is a teacher." },
      },
      {
        type: "choice",
        id: "c-est-il-est-8",
        text: "___ ma sœur.",
        options: ["Elle est", "Il est", "C'est", "Ils sont"],
        answer: 2,
        translation: { TR: "Bu benim kız kardeşim.", EN: "This is my sister." },
      },
      {
        type: "free",
        id: "c-est-il-est-9",
        prompt: { TR: "Fransızca yaz: “Annem öğretmen.”", EN: "Write in French: “My mother is a teacher.”" },
        answers: ["Ma mère est professeur.", "Ma mère est professeure.", "Ma mère est prof.", "Ma mère, elle est professeur.", "Ma mère, elle est professeure.", "Ma mère, elle est prof."],
      },
      {
        type: "build",
        id: "c-est-il-est-10",
        tokens: ["C'est", "un", "très", "bon", "restaurant"],
        translation: { TR: "Çok iyi bir restoran.", EN: "It's a very good restaurant." },
      },
      {
        type: "choice",
        id: "c-est-il-est-11",
        text: "Les Dupont ? ___ turcs.",
        options: ["C'est", "Ils sont", "Ce sont", "Il est"],
        answer: 1,
        translation: { TR: "Dupont'lar mı? Türk'ler.", EN: "The Duponts? They are Turkish." },
      },
      {
        type: "free",
        id: "c-est-il-est-12",
        prompt: { TR: "Fransızca yaz: “Kız kardeşim doktor ve çok nazik.”", EN: "Write in French: “My sister is a doctor and she is very kind.”" },
        answers: ["Ma sœur est médecin et elle est très gentille.", "Ma sœur est médecin. Elle est très gentille.", "Ma sœur est médecin, elle est très gentille.", "Ma sœur est docteur et elle est très gentille.", "Ma sœur est docteur. Elle est très gentille."],
      },
    ],
  },
];
