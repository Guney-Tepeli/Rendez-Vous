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
    ],
  },
];
