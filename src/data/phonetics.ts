/**
 * Shadowing cards, one per day in rotation (array order = course order:
 * the easy, high-impact sounds first, the fine points later).
 *
 * Markup in `marked`: "(x)" = written but silent, "‿" = liaison or
 * enchaînement (the final consonant is carried over to the next word).
 * IPA has no slashes; syllables are separated by ".".
 */

import type { PhoneticsCard } from "../domain/types";

export const PHONETICS_CARDS: readonly PhoneticsCard[] = [
  {
    id: "u-ou",
    focus: "vowel",
    title: { TR: "u ve ou", EN: "u vs ou" },
    tip: {
      TR: "Fransızca «u» Türkçe «ü»dür: tu = «tü». «ou» ise Türkçe «u»dur: vous = «vu». İkisini karıştırmak anlamı değiştirir (rue «sokak», roue «tekerlek»).",
      EN: "French “u” is Turkish “ü”: lips tightly rounded, tongue forward (tu). “ou” is Turkish “u”, tongue pulled back (vous). Mixing them changes the word: rue “street”, roue “wheel”.",
    },
    items: [
      { marked: "tu, tou(t)", ipa: "ty, tu", meaning: { TR: "sen, her şey", EN: "you, all" } },
      { marked: "la ru(e), la rou(e)", ipa: "la ʁy, la ʁu", meaning: { TR: "sokak, tekerlek", EN: "the street, the wheel" } },
      { marked: "dessu(s), dessou(s)", ipa: "də.sy, də.su", meaning: { TR: "üstünde, altında", EN: "on top, underneath" } },
      { marked: "vu, vou(s)", ipa: "vy, vu", meaning: { TR: "görülmüş, siz", EN: "seen, you" } },
      { marked: "Vous‿ave(z) vu la lun(e) ?", ipa: "vu.za.ve vy la lyn", meaning: { TR: "Ayı gördünüz mü?", EN: "Did you see the moon?" } },
    ],
  },
  {
    id: "muet",
    focus: "muet",
    title: { TR: "Okunmayan harfler", EN: "Silent letters" },
    tip: {
      TR: "Gri, üstü çizili harfler yazılır ama söylenmez. Kelimeyi son sesli harfte bitir; sondaki ünsüzü ekleme.",
      EN: "Grey, struck-through letters are written but not said. End the word on its last vowel sound; do not add the final consonant.",
    },
    items: [
      { marked: "peti(t)", ipa: "pə.ti", meaning: { TR: "küçük", EN: "small" } },
      { marked: "gran(d)", ipa: "ɡʁɑ̃", meaning: { TR: "büyük", EN: "big, tall" } },
      { marked: "beaucou(p)", ipa: "bo.ku", meaning: { TR: "çok", EN: "a lot" } },
      { marked: "vou(s) parle(z)", ipa: "vu paʁ.le", meaning: { TR: "konuşuyorsunuz", EN: "you speak" } },
      { marked: "il(s) parl(ent)", ipa: "il paʁl", meaning: { TR: "konuşuyorlar", EN: "they speak" } },
    ],
  },
  {
    id: "rhythm",
    focus: "rhythm",
    title: { TR: "Ritim ve grup vurgusu", EN: "Rhythm and group stress" },
    tip: {
      TR: "Fransızcada heceler eşit uzunluktadır; kelime vurgusu yoktur, vurgu yalnız anlam grubunun son hecesine düşer (biraz uzar). Grup uzadıkça vurgu sona kayar: café → petit café → petit café crème.",
      EN: "French syllables are even in length; there is no word stress, only the last syllable of each meaning group is stressed (slightly longer). As the group grows, the stress moves to its end: café → petit café → petit café crème.",
    },
    items: [
      { marked: "un café", ipa: "œ̃ ka.fe", meaning: { TR: "bir kahve", EN: "a coffee" } },
      { marked: "un peti(t) café", ipa: "œ̃ pə.ti ka.fe", meaning: { TR: "küçük bir kahve", EN: "a small coffee" } },
      { marked: "un peti(t) café crèm(e)", ipa: "œ̃ pə.ti ka.fe kʁɛm", meaning: { TR: "küçük bir sütlü kahve", EN: "a small white coffee" } },
      { marked: "Je voudrai(s) un peti(t) café crèm(e).", ipa: "ʒə vu.dʁɛ œ̃ pə.ti ka.fe kʁɛm", meaning: { TR: "Küçük bir sütlü kahve istiyorum.", EN: "I would like a small white coffee." } },
      { marked: "Qu'es(t)-c(e) que c'es(t) ?", ipa: "kɛs kə sɛ", meaning: { TR: "Bu nedir?", EN: "What is it?" } },
    ],
  },
  {
    id: "liaison-obligatory",
    focus: "liaison",
    title: { TR: "Zorunlu ulama (liaison)", EN: "Obligatory liaison" },
    tip: {
      TR: "Normalde sessiz olan son ünsüz, sesliyle başlayan sonraki kelimeye bağlanır: tanımlık + isim, zamir + fiil. Türkçedeki ulamaya benzer («bir‿elma»). s ve x «z», d «t» okunur.",
      EN: "A normally silent final consonant is sounded and carried onto the next word when it starts with a vowel: article + noun, pronoun + verb. s and x sound “z”, d sounds “t”.",
    },
    items: [
      { marked: "les‿ami(s)", ipa: "le.za.mi", meaning: { TR: "arkadaşlar", EN: "the friends" } },
      { marked: "vous‿ave(z)", ipa: "vu.za.ve", meaning: { TR: "sizin var", EN: "you have" } },
      { marked: "un‿enfan(t)", ipa: "œ̃.nɑ̃.fɑ̃", meaning: { TR: "bir çocuk", EN: "a child" } },
      { marked: "ils‿on(t)", ipa: "il.zɔ̃", meaning: { TR: "onların var", EN: "they have" } },
      { marked: "chez‿eux", ipa: "ʃe.zø", meaning: { TR: "onların evinde", EN: "at their place" } },
    ],
  },
  {
    id: "e-closed-open",
    focus: "vowel",
    title: { TR: "é ve è", EN: "é vs è" },
    tip: {
      TR: "«é» kapalıdır: dudakları gülümser gibi ger, ağzı az aç. «è / ê / ai» açıktır: çeneyi biraz daha indir, Türkçe «e»den daha açık. -er, -ez, -é sonları «é»; -ait, -ais, -et sonları «è».",
      EN: "“é” is closed: spread the lips as in a smile, mouth nearly shut. “è / ê / ai” is open: drop the jaw a little more. Endings -er, -ez, -é give “é”; -ait, -ais, -et give “è”.",
    },
    items: [
      { marked: "l'été", ipa: "le.te", meaning: { TR: "yaz", EN: "summer" } },
      { marked: "la mèr(e)", ipa: "la mɛʁ", meaning: { TR: "anne", EN: "the mother" } },
      { marked: "le café, le lai(t)", ipa: "lə ka.fe, lə lɛ", meaning: { TR: "kahve, süt", EN: "coffee, milk" } },
      { marked: "parle(r), parlai(t)", ipa: "paʁ.le, paʁ.lɛ", meaning: { TR: "konuşmak, konuşuyordu", EN: "to speak, was speaking" } },
      { marked: "Ell(e)‿es(t) trè(s) fatigué(e).", ipa: "ɛ.lɛ tʁɛ fa.ti.ɡe", meaning: { TR: "Çok yorgun.", EN: "She is very tired." } },
    ],
  },
  {
    id: "nasal",
    focus: "nasal",
    title: { TR: "Genizsi sesler", EN: "Nasal vowels" },
    tip: {
      TR: "Türkçede genizsi sesli yoktur. Sesli harf + n/m genizden tek ses olur: dil damağa değmez, «n» sesi çıkmaz; hava burundan da geçer. Üç ses: «on» /ɔ̃/, «an/en» /ɑ̃/, «in/ain/un» /ɛ̃/.",
      EN: "Turkish has no nasal vowels. Vowel + n/m becomes one nasal sound: the tongue does not touch the roof of the mouth, so no “n” is heard; air also passes through the nose. Three sounds: “on” /ɔ̃/, “an/en” /ɑ̃/, “in/ain/un” /ɛ̃/.",
    },
    items: [
      { marked: "bonjour", ipa: "bɔ̃.ʒuʁ", meaning: { TR: "merhaba, günaydın", EN: "hello" } },
      { marked: "enfan(t)", ipa: "ɑ̃.fɑ̃", meaning: { TR: "çocuk", EN: "child" } },
      { marked: "pain", ipa: "pɛ̃", meaning: { TR: "ekmek", EN: "bread" } },
      { marked: "maison", ipa: "mɛ.zɔ̃", meaning: { TR: "ev", EN: "house" } },
      { marked: "un bon vin blan(c)", ipa: "œ̃ bɔ̃ vɛ̃ blɑ̃", meaning: { TR: "iyi bir beyaz şarap", EN: "a good white wine" } },
    ],
  },
  {
    id: "r",
    focus: "consonant",
    title: { TR: "Fransız r'si", EN: "The French r" },
    tip: {
      TR: "Türkçe «r» gibi dil ucunu titretme. Dil ucu alt dişlerin arkasında kalır; dilin arkası küçük dile yaklaşır ve hafif bir sürtünme (gargara gibi) çıkar. Önce «ka» de, sonra aynı yerden havayı sürtünerek geçir.",
      EN: "Do not tap or roll the tongue tip. Keep the tip behind the lower teeth; raise the back of the tongue toward the uvula and let the air rub through, like a soft gargle. Say “ka”, then let air scrape through the same spot.",
    },
    items: [
      { marked: "merci", ipa: "mɛʁ.si", meaning: { TR: "teşekkürler", EN: "thank you" } },
      { marked: "Pari(s)", ipa: "pa.ʁi", meaning: { TR: "Paris", EN: "Paris" } },
      { marked: "trè(s) bien", ipa: "tʁɛ bjɛ̃", meaning: { TR: "çok iyi", EN: "very good" } },
      { marked: "roug(e)", ipa: "ʁuʒ", meaning: { TR: "kırmızı", EN: "red" } },
      { marked: "Au revoir !", ipa: "o ʁə.vwaʁ", meaning: { TR: "Hoşça kal!", EN: "Goodbye!" } },
    ],
  },
  {
    id: "question-yesno",
    focus: "intonation",
    title: { TR: "Evet/hayır sorusu", EN: "Yes/no question intonation" },
    tip: {
      TR: "Türkçede soruyu «mı» yapar; Fransızcada çoğu zaman yalnız ses yapar. Düz cümlede ses sonda düşer, evet/hayır sorusunda son hecede yükselir: «Tu viens.» ↘ / «Tu viens ?» ↗",
      EN: "In everyday French the voice alone makes the question. A statement falls at the end; a yes/no question rises on the last syllable: “Tu viens.” ↘ / “Tu viens ?” ↗",
    },
    items: [
      { marked: "Tu vien(s) ?", ipa: "ty vjɛ̃", meaning: { TR: "Geliyor musun?", EN: "Are you coming?" } },
      { marked: "Ça va ?", ipa: "sa va", meaning: { TR: "İyi misin?", EN: "How are you? / All right?" } },
      { marked: "C'es(t) prê(t) ?", ipa: "sɛ pʁɛ", meaning: { TR: "Hazır mı?", EN: "Is it ready?" } },
      { marked: "Vous‿ave(z) faim ?", ipa: "vu.za.ve fɛ̃", meaning: { TR: "Acıktınız mı?", EN: "Are you hungry?" } },
      { marked: "Es(t)-c(e) que tu es prê(t) ?", ipa: "ɛs kə ty ɛ pʁɛ", meaning: { TR: "Hazır mısın?", EN: "Are you ready?" } },
    ],
  },
  {
    id: "verb-ent",
    focus: "muet",
    title: { TR: "Fiillerde sessiz -ent", EN: "Silent -ent in verbs" },
    tip: {
      TR: "Çoğul fiil sonu «-ent» hiç okunmaz: «ils parlent» = «il parl». Ama isim ve zarflarda «-ent» genizsi /ɑ̃/ olur: souvent. Önce kelimenin fiil olup olmadığına bak.",
      EN: "The plural verb ending “-ent” is never pronounced: “ils parlent” sounds like “il parl”. In nouns and adverbs “-ent” is the nasal /ɑ̃/: souvent. Check whether the word is a verb first.",
    },
    items: [
      { marked: "Elles‿écout(ent).", ipa: "ɛl.ze.kut", meaning: { TR: "Dinliyorlar.", EN: "They are listening." } },
      { marked: "Ils‿aim(ent) le café.", ipa: "il.zɛm lə ka.fe", meaning: { TR: "Kahveyi seviyorlar.", EN: "They like coffee." } },
      { marked: "Il(s) finiss(ent) à six‿heur(es).", ipa: "il fi.nis a si.zœʁ", meaning: { TR: "Saat altıda bitiriyorlar.", EN: "They finish at six." } },
      { marked: "souven(t), il(s) souri(ent)", ipa: "su.vɑ̃, il su.ʁi", meaning: { TR: "sık sık, gülümsüyorlar", EN: "often, they smile" } },
      { marked: "Les‿enfant(s) jou(ent) dehor(s).", ipa: "le.zɑ̃.fɑ̃ ʒu də.ɔʁ", meaning: { TR: "Çocuklar dışarıda oynuyor.", EN: "The children are playing outside." } },
    ],
  },
  {
    id: "eu",
    focus: "vowel",
    title: { TR: "eu ve œ", EN: "eu / œ (deux / sœur)" },
    tip: {
      TR: "«eu / œu» Türkçe «ö»dür. Hece sesliyle bitiyorsa kapalı «ö» (deux, bleu); ardından okunan bir ünsüz geliyorsa ağzı biraz daha aç (sœur, peur).",
      EN: "“eu / œu” is Turkish “ö”: say “é” with rounded lips. At the end of a syllable it is closed (deux, bleu); before a pronounced consonant open the mouth a little more (sœur, peur).",
    },
    items: [
      { marked: "deu(x)", ipa: "dø", meaning: { TR: "iki", EN: "two" } },
      { marked: "bleu", ipa: "blø", meaning: { TR: "mavi", EN: "blue" } },
      { marked: "la sœur", ipa: "la sœʁ", meaning: { TR: "kız kardeş", EN: "the sister" } },
      { marked: "J'ai peur.", ipa: "ʒe pœʁ", meaning: { TR: "Korkuyorum.", EN: "I am scared." } },
      { marked: "deux‿œu(fs)", ipa: "dø.zø", meaning: { TR: "iki yumurta", EN: "two eggs" } },
    ],
  },
  {
    id: "nasal-an",
    focus: "nasal",
    title: { TR: "Genizsi «an / en»", EN: "Nasal “an / en”" },
    tip: {
      TR: "Ağzı «a» der gibi aç, dudakları yuvarlama, sesi geriden ve burundan ver. Sonuna «n» ya da «ng» ekleme. Yazılışları: an, am, en, em.",
      EN: "Open the mouth as for “a”, keep the lips unrounded, and let the sound come from the back and through the nose. Add no “n” or “ng”. Spellings: an, am, en, em.",
    },
    items: [
      { marked: "maman", ipa: "ma.mɑ̃", meaning: { TR: "anne", EN: "mum" } },
      { marked: "le temp(s)", ipa: "lə tɑ̃", meaning: { TR: "zaman, hava", EN: "time, weather" } },
      { marked: "lent(e)men(t)", ipa: "lɑ̃t.mɑ̃", meaning: { TR: "yavaşça", EN: "slowly" } },
      { marked: "la chambr(e)", ipa: "la ʃɑ̃bʁ", meaning: { TR: "yatak odası", EN: "the bedroom" } },
      { marked: "J'aim(e) mange(r) en Franc(e).", ipa: "ʒɛm mɑ̃.ʒe ɑ̃ fʁɑ̃s", meaning: { TR: "Fransa'da yemek yemeyi seviyorum.", EN: "I like eating in France." } },
    ],
  },
  {
    id: "nasal-on",
    focus: "nasal",
    title: { TR: "Genizsi «on»", EN: "Nasal “on”" },
    tip: {
      TR: "«on» için dudakları «o» der gibi sıkıca yuvarla; «an» için dudaklar açık kalır. Tek fark dudaklardadır: lent /lɑ̃/ – long /lɔ̃/.",
      EN: "For “on” round the lips tightly as for “o”; for “an” the lips stay open. The lips make the whole difference: lent /lɑ̃/ – long /lɔ̃/.",
    },
    items: [
      { marked: "len(t), lon(g)", ipa: "lɑ̃, lɔ̃", meaning: { TR: "yavaş, uzun", EN: "slow, long" } },
      { marked: "nous‿avon(s)", ipa: "nu.za.vɔ̃", meaning: { TR: "bizim var", EN: "we have" } },
      { marked: "le mond(e)", ipa: "lə mɔ̃d", meaning: { TR: "dünya, insanlar", EN: "the world, people" } },
      { marked: "Combien ?", ipa: "kɔ̃.bjɛ̃", meaning: { TR: "Ne kadar?", EN: "How much?" } },
      { marked: "On‿y va !", ipa: "ɔ̃.ni.va", meaning: { TR: "Hadi gidelim!", EN: "Let's go!" } },
    ],
  },
  {
    id: "nasal-in",
    focus: "nasal",
    title: { TR: "Genizsi «in / ain / un»", EN: "Nasal “in / ain / un”" },
    tip: {
      TR: "Ağzı «è» der gibi aç, dudakları ger, sesi burundan ver. Yazılışları: in, im, ain, ein, (i)en. «un» eskiden ayrı bir sesti; bugün çoğu konuşucu onu da aynı söyler.",
      EN: "Open the mouth as for “è”, spread the lips and send the sound through the nose. Spellings: in, im, ain, ein, (i)en. “un” used to be a separate sound; most speakers today say it the same way.",
    },
    items: [
      { marked: "le vin", ipa: "lə vɛ̃", meaning: { TR: "şarap", EN: "wine" } },
      { marked: "demain matin", ipa: "də.mɛ̃ ma.tɛ̃", meaning: { TR: "yarın sabah", EN: "tomorrow morning" } },
      { marked: "importan(t)", ipa: "ɛ̃.pɔʁ.tɑ̃", meaning: { TR: "önemli", EN: "important" } },
      { marked: "J'ai faim.", ipa: "ʒe fɛ̃", meaning: { TR: "Acıktım.", EN: "I am hungry." } },
      { marked: "lundi", ipa: "lœ̃.di", meaning: { TR: "pazartesi", EN: "Monday" } },
    ],
  },
  {
    id: "enchainement",
    focus: "liaison",
    title: { TR: "Zincirleme (enchaînement)", EN: "Enchaînement" },
    tip: {
      TR: "Zaten okunan son ünsüz, sesliyle başlayan sonraki kelimeye geçer: «il est» = «i-lè». Liaison sessiz bir harfi uyandırır; enchaînement yalnız var olan sesi taşır. Türkçe ulamanın aynısı.",
      EN: "A final consonant that is already pronounced moves onto the next word when it starts with a vowel: “il est” = “i-lè”. Liaison wakes up a silent letter; enchaînement only moves a sound that is already there.",
    },
    items: [
      { marked: "Il‿es(t) là.", ipa: "i.lɛ la", meaning: { TR: "O burada.", EN: "He is here." } },
      { marked: "Ell(e)‿aim(e)", ipa: "ɛ.lɛm", meaning: { TR: "seviyor", EN: "she loves" } },
      { marked: "un(e)‿ami(e)", ipa: "y.na.mi", meaning: { TR: "bir kız arkadaş", EN: "a (female) friend" } },
      { marked: "avec‿ell(e)", ipa: "a.vɛ.kɛl", meaning: { TR: "onunla", EN: "with her" } },
      { marked: "pour‿un‿an", ipa: "pu.ʁœ̃.nɑ̃", meaning: { TR: "bir yıllığına", EN: "for a year" } },
    ],
  },
  {
    id: "e-caduc",
    focus: "vowel",
    title: { TR: "Düşen e (e caduc)", EN: "The dropped e (e caduc)" },
    tip: {
      TR: "le, je, petit içindeki «e» kısa ve gevşek bir «ö»ye yakındır, «é» değildir. Önünde tek ünsüz varsa günlük konuşmada düşer (sam'di); düşünce üç ünsüz yan yana gelecekse kalır (vendredi).",
      EN: "The “e” of le, je, petit is short and relaxed, close to a soft “eu”, never “é”. With one consonant before it, everyday speech drops it (sam'di); it stays when dropping it would put three consonants together (vendredi).",
    },
    items: [
      { marked: "sam(e)di", ipa: "sam.di", meaning: { TR: "cumartesi", EN: "Saturday" } },
      { marked: "vendredi", ipa: "vɑ̃.dʁə.di", meaning: { TR: "cuma", EN: "Friday" } },
      { marked: "maint(e)nan(t)", ipa: "mɛ̃t.nɑ̃", meaning: { TR: "şimdi", EN: "now" } },
      { marked: "Je n(e) sai(s) pas.", ipa: "ʒən sɛ pa", meaning: { TR: "Bilmiyorum.", EN: "I don't know." } },
      { marked: "le p(e)ti(t) déjeuner", ipa: "lə pti de.ʒœ.ne", meaning: { TR: "kahvaltı", EN: "breakfast" } },
    ],
  },
  {
    id: "final-consonants",
    focus: "consonant",
    title: { TR: "Okunan son ünsüzler (CaReFuL)", EN: "Pronounced final consonants (CaReFuL)" },
    tip: {
      TR: "Sondaki ünsüz genelde okunmaz; ama C, R, F, L çoğu zaman okunur (İngilizce «careful» ile hatırla). İstisnalar: -er ile biten fiillerde r okunmaz; monsieur'de de okunmaz.",
      EN: "Final consonants are usually silent, but C, R, F and L are usually pronounced (think “careful”). Exceptions: the r of -er verbs is silent, and so is the r of monsieur.",
    },
    items: [
      { marked: "un sac", ipa: "œ̃ sak", meaning: { TR: "bir çanta", EN: "a bag" } },
      { marked: "le chef", ipa: "lə ʃɛf", meaning: { TR: "şef, patron", EN: "the boss, the chef" } },
      { marked: "avril", ipa: "a.vʁil", meaning: { TR: "nisan", EN: "April" } },
      { marked: "la mer, parle(r)", ipa: "la mɛʁ, paʁ.le", meaning: { TR: "deniz, konuşmak", EN: "the sea, to speak" } },
      { marked: "Bonjour, monsieu(r) !", ipa: "bɔ̃.ʒuʁ mə.sjø", meaning: { TR: "Merhaba beyefendi!", EN: "Hello, sir!" } },
    ],
  },
  {
    id: "question-info",
    focus: "intonation",
    title: { TR: "Bilgi sorusu ve sayma", EN: "Information questions and lists" },
    tip: {
      TR: "Soru kelimesiyle başlayan soruda ses yüksek başlar ve sonda düşer. Sayarken her öğede ses biraz yükselir («devamı var»), son öğede düşer («bitti»).",
      EN: "A question with a question word starts high and falls at the end. In a list the voice rises a little on each item (“more to come”) and falls on the last one (“that's all”).",
    },
    items: [
      { marked: "Où es-tu ?", ipa: "u ɛ ty", meaning: { TR: "Neredesin?", EN: "Where are you?" } },
      { marked: "Qu'es(t)-c(e) que tu fai(s) ?", ipa: "kɛs kə ty fɛ", meaning: { TR: "Ne yapıyorsun?", EN: "What are you doing?" } },
      { marked: "Combien ça coût(e) ?", ipa: "kɔ̃.bjɛ̃ sa kut", meaning: { TR: "Bu ne kadar?", EN: "How much does it cost?" } },
      { marked: "du pain, du lai(t) e(t) des pomm(es)", ipa: "dy pɛ̃, dy lɛ e de pɔm", meaning: { TR: "ekmek, süt ve elma", EN: "bread, milk and apples" } },
      { marked: "lundi, mardi, mercredi", ipa: "lœ̃.di, maʁ.di, mɛʁ.kʁə.di", meaning: { TR: "pazartesi, salı, çarşamba", EN: "Monday, Tuesday, Wednesday" } },
    ],
  },
  {
    id: "ch-j",
    focus: "consonant",
    title: { TR: "ch ve j", EN: "ch vs j" },
    tip: {
      TR: "Kolay: «ch» Türkçe «ş»dir, «j» (ve e/i önündeki «g») Türkçe «j»dir (garaj). İngilizce gibi «ç» ya da «c» deme: chocolat = «şokola», je = «jö».",
      EN: "“ch” is the sound in English “shoe”; “j” (and “g” before e/i) is the sound in “measure”. Do not say “ch” as in “church” or “j” as in “jam”: chocolat = “sho-ko-la”.",
    },
    items: [
      { marked: "chou, jou(e)", ipa: "ʃu, ʒu", meaning: { TR: "lahana, yanak", EN: "cabbage, cheek" } },
      { marked: "le cha(t)", ipa: "lə ʃa", meaning: { TR: "kedi", EN: "the cat" } },
      { marked: "je mang(e)", ipa: "ʒə mɑ̃ʒ", meaning: { TR: "yiyorum", EN: "I eat" } },
      { marked: "le chocola(t) chau(d)", ipa: "lə ʃɔ.kɔ.la ʃo", meaning: { TR: "sıcak çikolata", EN: "hot chocolate" } },
      { marked: "Je cherch(e) le garag(e).", ipa: "ʒə ʃɛʁʃ lə ɡa.ʁaʒ", meaning: { TR: "Garajı arıyorum.", EN: "I am looking for the garage." } },
    ],
  },
  {
    id: "nasal-oral",
    focus: "nasal",
    title: { TR: "Genizsi mi, değil mi?", EN: "Nasal or not? (bon / bonne)" },
    tip: {
      TR: "n/m'den sonra sesli harf ya da ikinci bir n/m gelirse genizsilik kaybolur: sesli düz okunur ve «n» açıkça duyulur. Dişil hâller çoğunlukla böyledir: bon → bonne.",
      EN: "When n/m is followed by a vowel or a second n/m, the vowel is no longer nasal: it is a plain vowel and the “n” is clearly heard. Feminine forms often work this way: bon → bonne.",
    },
    items: [
      { marked: "bon, bonn(e)", ipa: "bɔ̃, bɔn", meaning: { TR: "iyi (eril, dişil)", EN: "good (masc., fem.)" } },
      { marked: "plein, plein(e)", ipa: "plɛ̃, plɛn", meaning: { TR: "dolu (eril, dişil)", EN: "full (masc., fem.)" } },
      { marked: "un, un(e)", ipa: "œ̃, yn", meaning: { TR: "bir (eril, dişil)", EN: "one, a (masc., fem.)" } },
      { marked: "italien, italienn(e)", ipa: "i.ta.ljɛ̃, i.ta.ljɛn", meaning: { TR: "İtalyan (eril, dişil)", EN: "Italian (masc., fem.)" } },
      { marked: "un‿an, un(e)‿anné(e)", ipa: "œ̃.nɑ̃, y.na.ne", meaning: { TR: "bir yıl, bir yıl (süre)", EN: "a year, a year (span)" } },
    ],
  },
  {
    id: "semi-vowels",
    focus: "consonant",
    title: { TR: "Yarı sesliler: oui, huit, ill, gn", EN: "Semi-vowels: oui, huit, ill, gn" },
    tip: {
      TR: "«oui» = «vi» değil, hızlı «u+i» (ui). «huit» = hızlı «ü+i». Seslinin ardındaki «ill / il» Türkçe «y»dir: travail = «travay». «gn» tek bir «ny» sesidir, dilin ortası damağa yapışır.",
      EN: "“oui” is a quick “ou+i”, not “vi”. “huit” is a quick French “u+i”. After a vowel “ill / il” is a “y” sound: travail = “tra-vay”. “gn” is one “ny” sound, middle of the tongue against the palate.",
    },
    items: [
      { marked: "oui", ipa: "wi", meaning: { TR: "evet", EN: "yes" } },
      { marked: "huit", ipa: "ɥit", meaning: { TR: "sekiz", EN: "eight" } },
      { marked: "le travail", ipa: "lə tʁa.vaj", meaning: { TR: "iş", EN: "work" } },
      { marked: "la fill(e)", ipa: "la fij", meaning: { TR: "kız", EN: "the girl, the daughter" } },
      { marked: "la montagn(e)", ipa: "la mɔ̃.taɲ", meaning: { TR: "dağ", EN: "the mountain" } },
    ],
  },
  {
    id: "h-muet-aspire",
    focus: "muet",
    title: { TR: "h muet ve h aspiré", EN: "h muet vs h aspiré" },
    tip: {
      TR: "Fransızcada «h» hiç okunmaz. Çoğu kelimede (h muet) yok sayılır: l'homme, les‿hôtels. Bazılarında (h aspiré) bir duvar gibidir: kesme ve ulama yapılmaz, le héros, les | haricots. Bunları sözlükte işaretli (*) ezberle.",
      EN: "French “h” is never pronounced. In most words (h muet) it is ignored: l'homme, les‿hôtels. In some (h aspiré) it acts like a wall: no elision and no liaison, le héros, les | haricots. Learn these from the dictionary mark (*).",
    },
    items: [
      { marked: "l'(h)omm(e)", ipa: "lɔm", meaning: { TR: "adam, insan", EN: "the man" } },
      { marked: "les‿(h)ôtel(s)", ipa: "le.zo.tɛl", meaning: { TR: "oteller", EN: "the hotels" } },
      { marked: "l'(h)eur(e)", ipa: "lœʁ", meaning: { TR: "saat", EN: "the time, the hour" } },
      { marked: "le (h)éro(s)", ipa: "lə e.ʁo", meaning: { TR: "kahraman", EN: "the hero" } },
      { marked: "les (h)arico(ts)", ipa: "le a.ʁi.ko", meaning: { TR: "fasulyeler", EN: "the beans" } },
    ],
  },
  {
    id: "liaison-forbidden",
    focus: "liaison",
    title: { TR: "Yasak ulama", EN: "Forbidden liaison" },
    tip: {
      TR: "Şu yerlerde ulama yapılmaz: «et»ten sonra, h aspiré ve «onze» önünde, tekil isim + sıfat arasında, isim özne + fiil arasında. Burada kelimeler arasında çok kısa bir sınır bırak.",
      EN: "Never link: after “et”, before an h aspiré or “onze”, between a singular noun and its adjective, between a noun subject and its verb. Leave a tiny boundary between the words here.",
    },
    items: [
      { marked: "un café e(t) un thé", ipa: "œ̃ ka.fe e œ̃ te", meaning: { TR: "bir kahve ve bir çay", EN: "a coffee and a tea" } },
      { marked: "les (h)éro(s)", ipa: "le e.ʁo", meaning: { TR: "kahramanlar", EN: "the heroes" } },
      { marked: "les onz(e) joueur(s)", ipa: "le ɔ̃z ʒwœʁ", meaning: { TR: "on bir oyuncu", EN: "the eleven players" } },
      { marked: "un‿enfan(t) intelligen(t)", ipa: "œ̃.nɑ̃.fɑ̃ ɛ̃.te.li.ʒɑ̃", meaning: { TR: "zeki bir çocuk", EN: "a clever child" } },
      { marked: "Les‿enfant(s) arriv(ent).", ipa: "le.zɑ̃.fɑ̃ a.ʁiv", meaning: { TR: "Çocuklar geliyor.", EN: "The children are arriving." } },
    ],
  },
  {
    id: "numbers",
    focus: "liaison",
    title: { TR: "Sayıların okunuşu", EN: "Numbers that change" },
    tip: {
      TR: "six, dix, huit, vingt, cent son harfi bağlama göre değişir: tek başına okunur (six = «sis»), ünsüz önünde düşer (si(x) livres), sesli önünde ulanır (six‿amis = «si-za-mi»). vingt'in t'si vingt-deux'de de okunur.",
      EN: "six, dix, huit, vingt, cent change their last sound: said alone it is heard (six = “sees”), before a consonant it drops (si(x) livres), before a vowel it links (six‿amis = “see-za-mee”). The t of vingt is also heard in vingt-deux.",
    },
    items: [
      { marked: "six, six‿ami(s), si(x) livr(es)", ipa: "sis, si.za.mi, si livʁ", meaning: { TR: "altı, altı arkadaş, altı kitap", EN: "six, six friends, six books" } },
      { marked: "dix, dix‿heur(es), di(x) minut(es)", ipa: "dis, di.zœʁ, di mi.nyt", meaning: { TR: "on, saat on, on dakika", EN: "ten, ten o'clock, ten minutes" } },
      { marked: "huit, huit‿an(s), hui(t) jour(s)", ipa: "ɥit, ɥi.tɑ̃, ɥi ʒuʁ", meaning: { TR: "sekiz, sekiz yaş, sekiz gün", EN: "eight, eight years, eight days" } },
      { marked: "vin(gt), vin(g)t‿an(s), vin(g)t-deu(x)", ipa: "vɛ̃, vɛ̃.tɑ̃, vɛ̃t.dø", meaning: { TR: "yirmi, yirmi yaş, yirmi iki", EN: "twenty, twenty years, twenty-two" } },
      { marked: "cen(t), cent‿euro(s), cen(t) livr(es)", ipa: "sɑ̃, sɑ̃.tø.ʁo, sɑ̃ livʁ", meaning: { TR: "yüz, yüz avro, yüz kitap", EN: "a hundred, a hundred euros, a hundred books" } },
    ],
  },
];

export function findPhoneticsCard(id: string): PhoneticsCard | undefined {
  return PHONETICS_CARDS.find((card) => card.id === id);
}
