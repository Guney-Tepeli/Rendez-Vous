/**
 * A2 grammar lessons, in teaching order. See ../lessons.ts for the rules
 * every lesson follows.
 */

import type { GrammarLesson } from "../../domain/types";

export const A2_LESSONS: readonly GrammarLesson[] = [
  {
    id: "passe-compose-negation",
    level: "A2",
    title: { TR: "Passé composé: olumsuzluk, zarflar, sorular", EN: "Passé composé: negation, adverbs, questions" },
    content: [
      {
        TR: "Olumsuzda ne ... pas yalnız yardımcı fiili (avoir / être) sarar; participe dışarıda kalır:\nJ'ai mangé → Je n'ai pas mangé.\nIl est venu → Il n'est pas venu.",
        EN: "In the negative, ne ... pas wraps only the auxiliary (avoir / être); the participle stays outside:\nJ'ai mangé → Je n'ai pas mangé.\nIl est venu → Il n'est pas venu.",
      },
      {
        TR: "Kısa zarflar (bien, mal, déjà, beaucoup, trop, toujours) yardımcı fiil ile participe arasına girer:\nJ'ai bien dormi. · Tu as déjà vu ce film ?",
        EN: "Short adverbs (bien, mal, déjà, beaucoup, trop, toujours) go between the auxiliary and the participle:\nJ'ai bien dormi. · Tu as déjà vu ce film ?",
      },
      {
        TR: "Soru sormanın üç yolu var:\nTu as mangé ? (yalnız tonlama, günlük dil)\nEst-ce que tu as mangé ?\nAs-tu mangé ? (devrik: özne yardımcı fiilin arkasına geçer; iki sesli harf arasına -t- girer: A-t-il fini ?)",
        EN: "There are three ways to ask:\nTu as mangé ? (intonation only, everyday speech)\nEst-ce que tu as mangé ?\nAs-tu mangé ? (inversion: the subject moves after the auxiliary; -t- goes between two vowels: A-t-il fini ?)",
      },
    ],
    examples: [
      {
        fr: "Je n'ai pas vu Marie.",
        translation: { TR: "Marie'yi görmedim.", EN: "I didn't see Marie." },
      },
      {
        fr: "Nous avons bien mangé hier.",
        translation: { TR: "Dün iyi yemek yedik.", EN: "We ate well yesterday." },
      },
      {
        fr: "Est-ce que tu as fini ton travail ?",
        translation: { TR: "İşini bitirdin mi?", EN: "Have you finished your work?" },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "passe-compose-negation-1",
        text: "Je ___ ai pas compris.",
        answers: ["n'"],
        translation: { TR: "Anlamadım.", EN: "I didn't understand." },
      },
      {
        type: "fill",
        id: "passe-compose-negation-2",
        text: "Vous avez ___ dormi ? (iyi / well)",
        answers: ["bien"],
        translation: { TR: "İyi uyudunuz mu?", EN: "Did you sleep well?" },
      },
      {
        type: "build",
        id: "passe-compose-negation-3",
        tokens: ["Nous", "n'avons", "pas", "vu", "le", "film"],
        translation: { TR: "Filmi görmedik.", EN: "We didn't see the film." },
      },
      {
        type: "free",
        id: "passe-compose-negation-4",
        prompt: { TR: "Fransızca yaz: “Dün akşam yemek yemedim.”", EN: "Write in French: “I didn't eat last night.”" },
        answers: ["Je n'ai pas mangé hier soir.", "Hier soir, je n'ai pas mangé.", "Hier soir je n'ai pas mangé."],
      },
      {
        type: "free",
        id: "passe-compose-negation-5",
        prompt: { TR: "Fransızca yaz: “Filmi gördün mü?”", EN: "Write in French: “Did you see the film?”" },
        answers: [
          "Tu as vu le film ?",
          "Est-ce que tu as vu le film ?",
          "As-tu vu le film ?",
          "Vous avez vu le film ?",
          "Est-ce que vous avez vu le film ?",
          "Avez-vous vu le film ?",
        ],
      },
    ],
  },
  {
    id: "participle-agreement",
    level: "A2",
    title: { TR: "Être ile uyum ve dönüşlü fiiller", EN: "Agreement with être and reflexive verbs" },
    content: [
      {
        TR: "Yardımcı fiil être ise participe özneye bir sıfat gibi uyar: dişil için +e, çoğul için +s.\nIl est allé · Elle est allée\nIls sont partis · Elles sont parties",
        EN: "When the auxiliary is être, the participle agrees with the subject like an adjective: +e for feminine, +s for plural.\nIl est allé · Elle est allée\nIls sont partis · Elles sont parties",
      },
      {
        TR: "Dönüşlü fiiller (se lever, se coucher…) passé composé'de her zaman être alır:\nje me suis levé(e) · tu t'es levé(e) · il s'est levé · elle s'est levée\nnous nous sommes levé(e)s · vous vous êtes levé(e)(s) · ils se sont levés · elles se sont levées",
        EN: "Reflexive verbs (se lever, se coucher…) always take être in the passé composé:\nje me suis levé(e) · tu t'es levé(e) · il s'est levé · elle s'est levée\nnous nous sommes levé(e)s · vous vous êtes levé(e)(s) · ils se sont levés · elles se sont levées",
      },
      {
        TR: "Olumsuzda dönüşlü zamir yardımcı fiile yapışık kalır, ikisi birlikte ne ... pas içine girer:\nJe ne me suis pas levé.\nÇoğu zaman uyum yalnız yazıda görünür: allé ve allée aynı okunur.",
        EN: "In the negative the reflexive pronoun stays glued to the auxiliary, and both go inside ne ... pas:\nJe ne me suis pas levé.\nMost of the time the agreement is only visible in writing: allé and allée sound the same.",
      },
    ],
    examples: [
      {
        fr: "Elle est arrivée à huit heures.",
        translation: { TR: "O (kadın) saat sekizde geldi.", EN: "She arrived at eight o'clock." },
      },
      {
        fr: "Nous nous sommes promenés au parc.",
        translation: { TR: "Parkta yürüyüş yaptık.", EN: "We went for a walk in the park." },
      },
      {
        fr: "Marie ne s'est pas couchée tard.",
        translation: { TR: "Marie geç yatmadı.", EN: "Marie didn't go to bed late." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "participle-agreement-1",
        text: "Elles sont ___ hier. (partir)",
        answers: ["parties"],
        translation: { TR: "Onlar (kadınlar) dün gittiler.", EN: "They (women) left yesterday." },
      },
      {
        type: "fill",
        id: "participle-agreement-2",
        text: "Ma sœur s'est ___ à sept heures. (se lever)",
        answers: ["levée"],
        translation: { TR: "Kız kardeşim saat yedide kalktı.", EN: "My sister got up at seven." },
      },
      {
        type: "build",
        id: "participle-agreement-3",
        tokens: ["Je", "me", "suis", "réveillé", "tôt"],
        translation: { TR: "Erken uyandım.", EN: "I woke up early." },
      },
      {
        type: "free",
        id: "participle-agreement-4",
        prompt: { TR: "Fransızca yaz: “Anna Paris'e gitti.”", EN: "Write in French: “Anna went to Paris.”" },
        answers: ["Anna est allée à Paris."],
      },
      {
        type: "free",
        id: "participle-agreement-5",
        prompt: { TR: "Fransızca yaz: “Erken yattık.”", EN: "Write in French: “We went to bed early.”" },
        answers: [
          "Nous nous sommes couchés tôt.",
          "Nous nous sommes couchées tôt.",
          "On s'est couchés tôt.",
          "On s'est couchées tôt.",
          "On s'est couché tôt.",
        ],
      },
    ],
  },
  {
    id: "imparfait",
    level: "A2",
    title: { TR: "Imparfait (hikâye geçmişi)", EN: "The imparfait" },
    content: [
      {
        TR: "Şimdiki zamanın nous hâlini al, -ons'u at, şu ekleri ekle:\nje parlais · tu parlais · il/elle parlait\nnous parlions · vous parliez · ils/elles parlaient\nnous finissons → je finissais · nous faisons → je faisais",
        EN: "Take the nous form of the present, drop -ons, add these endings:\nje parlais · tu parlais · il/elle parlait\nnous parlions · vous parliez · ils/elles parlaient\nnous finissons → je finissais · nous faisons → je faisais",
      },
      {
        TR: "Tek istisna être: kök ét- olur.\nj'étais · tu étais · il/elle était\nnous étions · vous étiez · ils/elles étaient\nYazıma dikkat: nous mangeons → je mangeais, nous commençons → je commençais.",
        EN: "The only exception is être: the stem is ét-.\nj'étais · tu étais · il/elle était\nnous étions · vous étiez · ils/elles étaient\nWatch the spelling: nous mangeons → je mangeais, nous commençons → je commençais.",
      },
      {
        TR: "Ne zaman? Geçmişte bir durumu betimlerken (hava, yaş, duygu, ortam) ve alışkanlıklarda. Türkçedeki “-yordu” (Yağmur yağıyordu) ve “-ırdı” (Her yaz köye giderdik) çoğunlukla imparfait'dir. Sık eşlikçiler: avant, d'habitude, tous les jours, quand j'étais petit.",
        EN: "When? To describe a situation in the past (weather, age, feelings, setting) and for habits: “was doing”, “used to do”. Frequent companions: avant, d'habitude, tous les jours, quand j'étais petit.",
      },
    ],
    examples: [
      {
        fr: "Quand j'étais petit, j'habitais à Izmir.",
        translation: { TR: "Küçükken İzmir'de otururdum.", EN: "When I was little, I lived in Izmir." },
      },
      {
        fr: "Il faisait beau et les enfants jouaient.",
        translation: { TR: "Hava güzeldi ve çocuklar oynuyordu.", EN: "The weather was nice and the children were playing." },
      },
      {
        fr: "Avant, nous allions à la plage tous les étés.",
        translation: { TR: "Eskiden her yaz plaja giderdik.", EN: "We used to go to the beach every summer." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "imparfait-1",
        text: "Quand j'étais enfant, je ___ beaucoup. (lire)",
        answers: ["lisais"],
        translation: { TR: "Çocukken çok okurdum.", EN: "When I was a child, I used to read a lot." },
      },
      {
        type: "fill",
        id: "imparfait-2",
        text: "Il ___ très froid ce jour-là. (faire)",
        answers: ["faisait"],
        translation: { TR: "O gün hava çok soğuktu.", EN: "It was very cold that day." },
      },
      {
        type: "build",
        id: "imparfait-3",
        tokens: ["Nous", "habitions", "à", "Ankara"],
        translation: { TR: "Ankara'da otururduk.", EN: "We used to live in Ankara." },
      },
      {
        type: "free",
        id: "imparfait-4",
        prompt: { TR: "Fransızca yaz: “Hava güzeldi.”", EN: "Write in French: “The weather was nice.”" },
        answers: ["Il faisait beau."],
      },
      {
        type: "free",
        id: "imparfait-5",
        prompt: { TR: "Fransızca yaz: “Her gün parkta oynardık.”", EN: "Write in French: “We used to play in the park every day.”" },
        answers: [
          "Nous jouions au parc tous les jours.",
          "On jouait au parc tous les jours.",
          "Tous les jours, nous jouions au parc.",
          "Tous les jours nous jouions au parc.",
          "Tous les jours, on jouait au parc.",
          "Tous les jours on jouait au parc.",
          "Nous jouions dans le parc tous les jours.",
          "On jouait dans le parc tous les jours.",
          "Tous les jours, nous jouions dans le parc.",
          "Tous les jours, on jouait dans le parc.",
        ],
      },
    ],
  },
  {
    id: "imparfait-passe-compose",
    level: "A2",
    title: { TR: "Imparfait mi, passé composé mü?", EN: "Imparfait or passé composé?" },
    content: [
      {
        TR: "Bir film gibi düşün: imparfait dekordur (ne oluyordu, her şey nasıldı), passé composé ise olaydır (ne oldu, biten bir eylem).\nJe regardais la télé quand le téléphone a sonné.\n= Televizyon izliyordum (dekor), telefon çaldı (olay).",
        EN: "Think of a film: the imparfait is the set (what was going on, how things were), the passé composé is the event (what happened, a finished action).\nJe regardais la télé quand le téléphone a sonné.\n= I was watching TV (set) when the phone rang (event).",
      },
      {
        TR: "Türkçe ipucu: “-yordu / -ırdı” → çoğunlukla imparfait; tek seferlik “-dı” → çoğunlukla passé composé. Bitmiş, sınırlı bir süre de olay sayılır: J'ai habité deux ans à Lyon (Lyon'da iki yıl yaşadım).",
        EN: "Rule of thumb: “was doing / used to do” → usually imparfait; a one-off “did” → usually passé composé. A finished, limited stretch of time also counts as an event: J'ai habité deux ans à Lyon (I lived in Lyon for two years).",
      },
      {
        TR: "İşaret kelimeler:\npassé composé → hier, soudain, un jour, une fois, trois fois\nimparfait → souvent, toujours, d'habitude, tous les jours, avant",
        EN: "Signal words:\npassé composé → hier, soudain, un jour, une fois, trois fois\nimparfait → souvent, toujours, d'habitude, tous les jours, avant",
      },
    ],
    examples: [
      {
        fr: "Il pleuvait quand je suis sorti.",
        translation: { TR: "Dışarı çıktığımda yağmur yağıyordu.", EN: "It was raining when I went out." },
      },
      {
        fr: "Nous dormions quand tu as téléphoné.",
        translation: { TR: "Sen telefon ettiğinde uyuyorduk.", EN: "We were sleeping when you called." },
      },
      {
        fr: "D'habitude je prenais le bus, mais hier j'ai pris un taxi.",
        translation: { TR: "Genelde otobüse binerdim ama dün taksiye bindim.", EN: "I usually took the bus, but yesterday I took a taxi." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "imparfait-passe-compose-1",
        text: "Je lisais quand Paul ___ arrivé.",
        answers: ["est"],
        translation: { TR: "Paul geldiğinde okuyordum.", EN: "I was reading when Paul arrived." },
      },
      {
        type: "fill",
        id: "imparfait-passe-compose-2",
        text: "Il ___ beau et nous sommes allés à la plage. (faire)",
        answers: ["faisait"],
        translation: { TR: "Hava güzeldi ve plaja gittik.", EN: "The weather was nice and we went to the beach." },
      },
      {
        type: "build",
        id: "imparfait-passe-compose-3",
        tokens: ["Je", "dormais", "quand", "tu", "as", "téléphoné"],
        translation: { TR: "Sen telefon ettiğinde uyuyordum.", EN: "I was sleeping when you called." },
      },
      {
        type: "free",
        id: "imparfait-passe-compose-4",
        prompt: { TR: "Fransızca yaz: “Yağmur yağıyordu.”", EN: "Write in French: “It was raining.”" },
        answers: ["Il pleuvait."],
      },
      {
        type: "free",
        id: "imparfait-passe-compose-5",
        prompt: {
          TR: "Fransızca yaz: “Telefon çaldığında televizyon izliyordum.”",
          EN: "Write in French: “I was watching TV when the phone rang.”",
        },
        answers: [
          "Je regardais la télé quand le téléphone a sonné.",
          "Je regardais la télévision quand le téléphone a sonné.",
          "Quand le téléphone a sonné, je regardais la télé.",
          "Quand le téléphone a sonné je regardais la télé.",
          "Quand le téléphone a sonné, je regardais la télévision.",
          "Quand le téléphone a sonné je regardais la télévision.",
        ],
      },
    ],
  },
  {
    id: "direct-object-pronouns",
    level: "A2",
    title: { TR: "Nesne zamirleri (COD)", EN: "Direct object pronouns" },
    content: [
      {
        TR: "Doğrudan nesne, fiilden hemen sonra edatsız gelen isimdir. Onun yerine zamir kullanılır:\nme (m') · te (t') · le · la · l'\nnous · vous · les\nJe vois Paul → Je le vois.",
        EN: "The direct object is the noun that comes right after the verb with no preposition. A pronoun can replace it:\nme (m') · te (t') · le · la · l'\nnous · vous · les\nJe vois Paul → Je le vois.",
      },
      {
        TR: "Zamir çekimli fiilin ÖNÜNE gelir, tıpkı Türkçede olduğu gibi: Je la connais = Onu tanıyorum. Sesli harften önce le / la → l' olur: Je l'aime.",
        EN: "The pronoun goes BEFORE the conjugated verb, unlike English: Je la connais = I know her. Before a vowel, le / la become l': Je l'aime.",
      },
      {
        TR: "Olumsuzda ne zamirden önce gelir, pas fiilden sonra:\nJe ne le vois pas.",
        EN: "In the negative, ne comes before the pronoun and pas after the verb:\nJe ne le vois pas.",
      },
    ],
    examples: [
      {
        fr: "Tu connais Marie ? Oui, je la connais.",
        translation: { TR: "Marie'yi tanıyor musun? Evet, onu tanıyorum.", EN: "Do you know Marie? Yes, I know her." },
      },
      {
        fr: "Les clés ? Je les cherche.",
        translation: { TR: "Anahtarlar mı? Onları arıyorum.", EN: "The keys? I'm looking for them." },
      },
      {
        fr: "Il ne nous écoute pas.",
        translation: { TR: "Bizi dinlemiyor.", EN: "He isn't listening to us." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "direct-object-pronouns-1",
        text: "Le film ? Je ___ regarde ce soir.",
        answers: ["le"],
        translation: { TR: "Film mi? Onu bu akşam izliyorum.", EN: "The film? I'm watching it tonight." },
      },
      {
        type: "fill",
        id: "direct-object-pronouns-2",
        text: "Cette chanson ? Je ___ aime beaucoup.",
        answers: ["l'"],
        translation: { TR: "Bu şarkı mı? Onu çok seviyorum.", EN: "This song? I like it a lot." },
      },
      {
        type: "build",
        id: "direct-object-pronouns-3",
        tokens: ["Je", "ne", "les", "vois", "pas"],
        translation: { TR: "Onları görmüyorum.", EN: "I don't see them." },
      },
      {
        type: "free",
        id: "direct-object-pronouns-4",
        prompt: { TR: "Fransızca yaz: “Onu (kadını) tanıyorum.”", EN: "Write in French: “I know her.”" },
        answers: ["Je la connais."],
      },
      {
        type: "free",
        id: "direct-object-pronouns-5",
        prompt: { TR: "Fransızca yaz: “Seni seviyorum.”", EN: "Write in French: “I love you.”" },
        answers: ["Je t'aime.", "Je vous aime."],
      },
    ],
  },
  {
    id: "indirect-object-pronouns",
    level: "A2",
    title: { TR: "Dolaylı nesne zamirleri (COI)", EN: "Indirect object pronouns" },
    content: [
      {
        TR: "à + kişi yerine dolaylı nesne zamiri gelir:\nme (m') · te (t') · lui\nnous · vous · leur\nJe parle à Paul → Je lui parle.\nlui hem “ona (erkeğe)” hem “ona (kadına)” demektir. leur'ün sonunda -s yoktur.",
        EN: "An indirect object pronoun replaces à + person:\nme (m') · te (t') · lui\nnous · vous · leur\nJe parle à Paul → Je lui parle.\nlui means both “to him” and “to her”. leur has no -s.",
      },
      {
        TR: "à ile kurulan fiiller: parler à, téléphoner à, répondre à, écrire à, donner à, dire à, demander à. Türkçedeki “-e” hâline benzer: Ona telefon ediyorum = Je lui téléphone.",
        EN: "Verbs built with à: parler à, téléphoner à, répondre à, écrire à, donner à, dire à, demander à.",
      },
      {
        TR: "Dikkat: Türkçe ve Fransızca her zaman örtüşmez. appeler (aramak) ve aider (yardım etmek) doğrudan nesne alır: Je l'appelle. Je l'aide. Yeri COD ile aynı: fiilden önce, Je ne lui parle pas.",
        EN: "Careful: English and French do not always match. appeler (to call) and aider (to help) take a direct object: Je l'appelle. Je l'aide. Position as for direct objects: before the verb, Je ne lui parle pas.",
      },
    ],
    examples: [
      {
        fr: "Je téléphone à ma mère. Je lui téléphone tous les jours.",
        translation: { TR: "Anneme telefon ediyorum. Ona her gün telefon ediyorum.", EN: "I call my mother. I call her every day." },
      },
      {
        fr: "Tu leur écris souvent ?",
        translation: { TR: "Onlara sık yazar mısın?", EN: "Do you often write to them?" },
      },
      {
        fr: "Elle ne me répond pas.",
        translation: { TR: "Bana cevap vermiyor.", EN: "She doesn't answer me." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "indirect-object-pronouns-1",
        text: "Tu parles à tes parents ? Oui, je ___ parle.",
        answers: ["leur"],
        translation: { TR: "Annenle babanla konuşuyor musun? Evet, onlarla konuşuyorum.", EN: "Do you talk to your parents? Yes, I talk to them." },
      },
      {
        type: "fill",
        id: "indirect-object-pronouns-2",
        text: "J'écris à Julie. Je ___ écris une lettre.",
        answers: ["lui"],
        translation: { TR: "Julie'ye yazıyorum. Ona bir mektup yazıyorum.", EN: "I'm writing to Julie. I'm writing her a letter." },
      },
      {
        type: "build",
        id: "indirect-object-pronouns-3",
        tokens: ["Il", "ne", "me", "répond", "pas"],
        translation: { TR: "Bana cevap vermiyor.", EN: "He doesn't answer me." },
      },
      {
        type: "free",
        id: "indirect-object-pronouns-4",
        prompt: { TR: "Fransızca yaz: “Ona telefon ediyorum.”", EN: "Write in French: “I'm calling him.” (use téléphoner)" },
        answers: ["Je lui téléphone."],
      },
      {
        type: "free",
        id: "indirect-object-pronouns-5",
        prompt: { TR: "Fransızca yaz: “Onlara bir hediye veriyoruz.”", EN: "Write in French: “We are giving them a present.”" },
        answers: ["Nous leur donnons un cadeau.", "On leur donne un cadeau."],
      },
    ],
  },
  {
    id: "pronoun-y",
    level: "A2",
    title: { TR: "Y zamiri", EN: "The pronoun y" },
    content: [
      {
        TR: "y bir yeri gösterir: “oraya / orada”. à, en, dans, chez + yer yerine gelir:\nTu vas à Paris ? Oui, j'y vais.\nElle est chez Marc ? Oui, elle y est.",
        EN: "y stands for a place: “there”. It replaces à, en, dans, chez + place:\nTu vas à Paris ? Oui, j'y vais.\nElle est chez Marc ? Oui, elle y est.",
      },
      {
        TR: "y ayrıca à + şey (kişi değil) yerine gelir:\nJe pense à mon examen → J'y pense.\nTu réponds à la question ? → Oui, j'y réponds.\nKişi için lui / leur kullanılır: Je réponds au professeur → Je lui réponds.",
        EN: "y also replaces à + thing (not a person):\nJe pense à mon examen → J'y pense.\nTu réponds à la question ? → Oui, j'y réponds.\nFor a person use lui / leur: Je réponds au professeur → Je lui réponds.",
      },
      {
        TR: "Yeri diğer zamirlerle aynı: fiilden önce. Je n'y vais pas. Sık kalıplar: On y va ! (Hadi gidelim!), il y a.",
        EN: "Position as for the other pronouns: before the verb. Je n'y vais pas. Common phrases: On y va ! (Let's go!), il y a.",
      },
    ],
    examples: [
      {
        fr: "Tu habites à Lyon ? Oui, j'y habite.",
        translation: { TR: "Lyon'da mı oturuyorsun? Evet, orada oturuyorum.", EN: "Do you live in Lyon? Yes, I live there." },
      },
      {
        fr: "Elle va chez le médecin demain. Elle y va à dix heures.",
        translation: { TR: "Yarın doktora gidiyor. Oraya saat onda gidiyor.", EN: "She's going to the doctor's tomorrow. She's going there at ten." },
      },
      {
        fr: "Les vacances ? Je n'y pense pas.",
        translation: { TR: "Tatil mi? Onu düşünmüyorum.", EN: "The holidays? I'm not thinking about them." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "pronoun-y-1",
        text: "La plage ? Nous ___ allons demain.",
        answers: ["y"],
        translation: { TR: "Plaj mı? Oraya yarın gidiyoruz.", EN: "The beach? We're going there tomorrow." },
      },
      {
        type: "fill",
        id: "pronoun-y-2",
        text: "Tu penses à ton travail ? Oui, j'___ pense souvent.",
        answers: ["y"],
        translation: { TR: "İşini düşünüyor musun? Evet, onu sık düşünüyorum.", EN: "Do you think about your work? Yes, I often think about it." },
      },
      {
        type: "build",
        id: "pronoun-y-3",
        tokens: ["Je", "n'y", "vais", "pas"],
        translation: { TR: "Oraya gitmiyorum.", EN: "I'm not going there." },
      },
      {
        type: "free",
        id: "pronoun-y-4",
        prompt: { TR: "Fransızca yaz: “Oraya gidiyoruz.”", EN: "Write in French: “We are going there.”" },
        answers: ["Nous y allons.", "On y va."],
      },
      {
        type: "free",
        id: "pronoun-y-5",
        prompt: { TR: "Fransızca yaz: “Onu düşünüyorum.” (sınavı)", EN: "Write in French: “I'm thinking about it.” (the exam)" },
        answers: ["J'y pense."],
      },
    ],
  },
  {
    id: "pronoun-en",
    level: "A2",
    title: { TR: "En zamiri", EN: "The pronoun en" },
    content: [
      {
        TR: "en, de + şey yerine gelir: “ondan, ondan biraz”. Partitif (du, de la, des) ve de ile kurulan fiiller:\nTu veux du café ? Oui, j'en veux.\nJ'ai besoin d'une voiture → J'en ai besoin.",
        EN: "en replaces de + thing: “some, of it, of them”. Partitives (du, de la, des) and verbs built with de:\nTu veux du café ? Oui, j'en veux.\nJ'ai besoin d'une voiture → J'en ai besoin.",
      },
      {
        TR: "Miktarlarla: en fiilden önce, sayı ya da miktar fiilden sonra kalır:\nTu as des frères ? J'en ai deux.\nIl y a beaucoup de touristes ? Oui, il y en a beaucoup.\nOlumsuz: Je n'en ai pas.",
        EN: "With quantities: en goes before the verb, the number or amount stays after it:\nTu as des frères ? J'en ai deux.\nIl y a beaucoup de touristes ? Oui, il y en a beaucoup.\nNegative: Je n'en ai pas.",
      },
      {
        TR: "Türkçede “İki tane var” deriz, neyin olduğunu söylemeyiz. Fransızca bu boşluğu en ile doldurur; “J'ai deux.” tek başına eksik kalır.",
        EN: "English can say “I have two” with nothing in between. French needs en there: “J'ai deux.” on its own sounds incomplete.",
      },
    ],
    examples: [
      {
        fr: "Du pain ? J'en achète tous les jours.",
        translation: { TR: "Ekmek mi? Her gün alıyorum.", EN: "Bread? I buy some every day." },
      },
      {
        fr: "Tu as des sœurs ? Oui, j'en ai une.",
        translation: { TR: "Kız kardeşin var mı? Evet, bir tane var.", EN: "Do you have sisters? Yes, I have one." },
      },
      {
        fr: "Des pommes ? Il y en a trois.",
        translation: { TR: "Elma mı? Üç tane var.", EN: "Apples? There are three." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "pronoun-en-1",
        text: "Tu veux de l'eau ? Oui, j'___ veux bien.",
        answers: ["en"],
        translation: { TR: "Su ister misin? Evet, isterim.", EN: "Do you want some water? Yes, I'd like some." },
      },
      {
        type: "fill",
        id: "pronoun-en-2",
        text: "Il a des enfants ? Oui, il ___ a trois.",
        answers: ["en"],
        translation: { TR: "Çocukları var mı? Evet, üç tane.", EN: "Does he have children? Yes, he has three." },
      },
      {
        type: "build",
        id: "pronoun-en-3",
        tokens: ["Je", "n'en", "ai", "pas"],
        translation: { TR: "Bende yok.", EN: "I don't have any." },
      },
      {
        type: "free",
        id: "pronoun-en-4",
        prompt: { TR: "Fransızca yaz: “İki tane var bende.”", EN: "Write in French: “I have two (of them).”" },
        answers: ["J'en ai deux.", "J'en ai 2."],
      },
      {
        type: "free",
        id: "pronoun-en-5",
        prompt: { TR: "Fransızca yaz: “Ona ihtiyacım var.” (bir arabaya)", EN: "Write in French: “I need one.” (a car)" },
        answers: ["J'en ai besoin."],
      },
    ],
  },
  {
    id: "pronouns-with-infinitive-and-past",
    level: "A2",
    title: { TR: "Zamirin yeri: mastar ve passé composé", EN: "Pronoun position: infinitive and passé composé" },
    content: [
      {
        TR: "Çekimli fiil + mastar (aller, vouloir, pouvoir, devoir + mastar): zamir ait olduğu fiilin, yani mastarın önüne gelir:\nJe vais le voir. · Je veux lui parler. · Je ne peux pas y aller.",
        EN: "Conjugated verb + infinitive (aller, vouloir, pouvoir, devoir + infinitive): the pronoun goes before the verb it belongs to, the infinitive:\nJe vais le voir. · Je veux lui parler. · Je ne peux pas y aller.",
      },
      {
        TR: "Passé composé'de zamir yardımcı fiilin önüne gelir:\nJe l'ai vu. · Je lui ai parlé. · Je n'y suis pas allé. · Je n'en ai pas mangé.",
        EN: "In the passé composé the pronoun goes before the auxiliary:\nJe l'ai vu. · Je lui ai parlé. · Je n'y suis pas allé. · Je n'en ai pas mangé.",
      },
      {
        TR: "avoir ile participe normalde uyum yapmaz. Tek durum: doğrudan nesne zamiri (la, les, l') önde ise participe ona uyar:\nLa lettre ? Je l'ai écrite.\nLes films ? Je les ai vus.\nlui, leur, y, en için uyum yoktur. Çoğu zaman yalnız yazıda görünür; écrite, prise, faite gibi kelimelerde duyulur.",
        EN: "With avoir the participle normally does not agree. One case: when a direct object pronoun (la, les, l') comes before, the participle agrees with it:\nLa lettre ? Je l'ai écrite.\nLes films ? Je les ai vus.\nNo agreement for lui, leur, y, en. Usually only visible in writing; you hear it in words like écrite, prise, faite.",
      },
    ],
    examples: [
      {
        fr: "Je vais les inviter samedi.",
        translation: { TR: "Onları cumartesi davet edeceğim.", EN: "I'm going to invite them on Saturday." },
      },
      {
        fr: "Ta mère ? Je lui ai téléphoné hier.",
        translation: { TR: "Annen mi? Ona dün telefon ettim.", EN: "Your mother? I called her yesterday." },
      },
      {
        fr: "Ces photos ? Je les ai prises à Rome.",
        translation: { TR: "Bu fotoğraflar mı? Onları Roma'da çektim.", EN: "These photos? I took them in Rome." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "pronouns-with-infinitive-and-past-1",
        text: "Marie ? Je vais ___ appeler ce soir.",
        answers: ["l'"],
        translation: { TR: "Marie mi? Onu bu akşam arayacağım.", EN: "Marie? I'm going to call her tonight." },
      },
      {
        type: "fill",
        id: "pronouns-with-infinitive-and-past-2",
        text: "Les clés ? Je les ai ___ dans la cuisine. (trouver)",
        answers: ["trouvées"],
        translation: { TR: "Anahtarlar mı? Onları mutfakta buldum.", EN: "The keys? I found them in the kitchen." },
      },
      {
        type: "build",
        id: "pronouns-with-infinitive-and-past-3",
        tokens: ["Je", "lui", "ai", "parlé", "hier"],
        translation: { TR: "Onunla dün konuştum.", EN: "I spoke to him yesterday." },
      },
      {
        type: "free",
        id: "pronouns-with-infinitive-and-past-4",
        prompt: { TR: "Fransızca yaz: “Onu gördüm.” (filmi)", EN: "Write in French: “I saw it.” (the film)" },
        answers: ["Je l'ai vu."],
      },
      {
        type: "free",
        id: "pronouns-with-infinitive-and-past-5",
        prompt: { TR: "Fransızca yaz: “Onlarla konuşmak istiyorum.”", EN: "Write in French: “I want to talk to them.”" },
        answers: ["Je veux leur parler."],
      },
    ],
  },
  {
    id: "futur-simple",
    level: "A2",
    title: { TR: "Gelecek zaman (futur simple)", EN: "Simple future (futur simple)" },
    content: [
      {
        TR: "Mastar + -ai, -as, -a, -ons, -ez, -ont (ekler avoir'ın şimdiki zamanına benzer). -re ile bitenlerde son -e düşer: prendre → je prendrai.\nje parlerai · tu parleras · il/elle parlera\nnous parlerons · vous parlerez · ils/elles parleront",
        EN: "Infinitive + -ai, -as, -a, -ons, -ez, -ont (the endings look like avoir in the present). Verbs in -re drop the final -e: prendre → je prendrai.\nje parlerai · tu parleras · il/elle parlera\nnous parlerons · vous parlerez · ils/elles parleront",
      },
      {
        TR: "Düzensiz kökler (ekler aynı):\nêtre → ser- · avoir → aur- · aller → ir- · faire → fer-\npouvoir → pourr- · venir → viendr- · voir → verr-\nvouloir → voudr- · devoir → devr-\nj'irai, tu seras, nous aurons, ils feront…",
        EN: "Irregular stems (same endings):\nêtre → ser- · avoir → aur- · aller → ir- · faire → fer-\npouvoir → pourr- · venir → viendr- · voir → verr-\nvouloir → voudr- · devoir → devr-\nj'irai, tu seras, nous aurons, ils feront…",
      },
      {
        TR: "Türkçedeki “-ecek / -acak”. Planlar, tahminler, sözler için; futur proche'a göre daha uzak ve biraz daha resmî. Dikkat: quand'dan sonra gelecek kastediliyorsa futur kullanılır: Quand je serai grand… (Büyüyünce…).",
        EN: "Like “will”. For plans, predictions, promises; further away and a bit more formal than the futur proche. Careful: after quand, French uses the future when the future is meant: Quand je serai grand… (When I grow up…).",
      },
    ],
    examples: [
      {
        fr: "Demain, nous visiterons le musée.",
        translation: { TR: "Yarın müzeyi gezeceğiz.", EN: "Tomorrow we will visit the museum." },
      },
      {
        fr: "L'année prochaine, j'irai en France.",
        translation: { TR: "Gelecek yıl Fransa'ya gideceğim.", EN: "Next year I will go to France." },
      },
      {
        fr: "Tu seras là ce soir ?",
        translation: { TR: "Bu akşam orada olacak mısın?", EN: "Will you be there tonight?" },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "futur-simple-1",
        text: "Demain, je ___ mes grands-parents. (voir)",
        answers: ["verrai"],
        translation: { TR: "Yarın büyükannemle büyükbabamı göreceğim.", EN: "Tomorrow I will see my grandparents." },
      },
      {
        type: "fill",
        id: "futur-simple-2",
        text: "Nous ___ en vacances en juillet. (partir)",
        answers: ["partirons"],
        translation: { TR: "Temmuzda tatile gideceğiz.", EN: "We will go on holiday in July." },
      },
      {
        type: "build",
        id: "futur-simple-3",
        tokens: ["Ils", "feront", "leurs", "devoirs", "demain"],
        translation: { TR: "Ödevlerini yarın yapacaklar.", EN: "They will do their homework tomorrow." },
      },
      {
        type: "free",
        id: "futur-simple-4",
        prompt: { TR: "Fransızca yaz: “Yarın orada olacağım.”", EN: "Write in French: “I will be there tomorrow.”" },
        answers: ["Je serai là demain.", "Demain, je serai là.", "Demain je serai là.", "J'y serai demain.", "Demain, j'y serai.", "Demain j'y serai."],
      },
      {
        type: "free",
        id: "futur-simple-5",
        prompt: { TR: "Fransızca yaz: “Gelecek yıl Fransa'ya gideceğiz.”", EN: "Write in French: “Next year we will go to France.”" },
        answers: [
          "L'année prochaine, nous irons en France.",
          "L'année prochaine nous irons en France.",
          "Nous irons en France l'année prochaine.",
          "L'année prochaine, on ira en France.",
          "L'année prochaine on ira en France.",
          "On ira en France l'année prochaine.",
        ],
      },
    ],
  },
  {
    id: "comparatives",
    level: "A2",
    title: { TR: "Karşılaştırma", EN: "Comparatives" },
    content: [
      {
        TR: "Sıfatla: plus (daha) / moins (daha az) / aussi (kadar) + sıfat + que. Sıfat yine uyum yapar:\nElle est plus grande que son frère.\nTürkçede karşılaştırılan önce gelir (“Paris'ten daha büyük”); Fransızcada que'dan sonra: plus grand que Paris.",
        EN: "With adjectives: plus (more) / moins (less) / aussi (as) + adjective + que. The adjective still agrees:\nElle est plus grande que son frère.",
      },
      {
        TR: "İsimle: plus de / moins de / autant de + isim + que:\nJ'ai autant de livres que toi.\nFiille: fiil + plus / moins / autant + que: Il travaille plus que moi.\nque'dan sonra vurgulu zamir gelir: moi, toi, lui, elle…",
        EN: "With nouns: plus de / moins de / autant de + noun + que:\nJ'ai autant de livres que toi.\nWith verbs: verb + plus / moins / autant + que: Il travaille plus que moi.\nAfter que use the stressed pronouns: moi, toi, lui, elle…",
      },
      {
        TR: "Düzensizler: bon (iyi, sıfat) → meilleur, “plus bon” denmez. bien (iyi, zarf) → mieux.\nCe café est meilleur. · Il chante mieux que moi.",
        EN: "Irregular: bon (good, adjective) → meilleur, never “plus bon”. bien (well, adverb) → mieux.\nCe café est meilleur. · Il chante mieux que moi.",
      },
    ],
    examples: [
      {
        fr: "Paris est plus grand que Lyon.",
        translation: { TR: "Paris Lyon'dan daha büyük.", EN: "Paris is bigger than Lyon." },
      },
      {
        fr: "Ma sœur a autant d'amis que moi.",
        translation: { TR: "Kız kardeşimin benim kadar arkadaşı var.", EN: "My sister has as many friends as me." },
      },
      {
        fr: "Ce gâteau est meilleur que l'autre.",
        translation: { TR: "Bu pasta diğerinden daha iyi.", EN: "This cake is better than the other one." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "comparatives-1",
        text: "Le train est ___ rapide que le bus.",
        answers: ["plus"],
        translation: { TR: "Tren otobüsten daha hızlı.", EN: "The train is faster than the bus." },
      },
      {
        type: "fill",
        id: "comparatives-2",
        text: "Tu parles français ___ que moi ! (bien)",
        answers: ["mieux"],
        translation: { TR: "Fransızcayı benden daha iyi konuşuyorsun!", EN: "You speak French better than me!" },
      },
      {
        type: "build",
        id: "comparatives-3",
        tokens: ["Elle", "est", "aussi", "grande", "que", "moi"],
        translation: { TR: "O benim kadar uzun.", EN: "She is as tall as me." },
      },
      {
        type: "free",
        id: "comparatives-4",
        prompt: { TR: "Fransızca yaz: “Bu pasta daha iyi.”", EN: "Write in French: “This cake is better.”" },
        answers: ["Ce gâteau est meilleur."],
      },
      {
        type: "free",
        id: "comparatives-5",
        prompt: { TR: "Fransızca yaz: “Onun benden daha çok kitabı var.”", EN: "Write in French: “He has more books than me.”" },
        answers: ["Il a plus de livres que moi.", "Elle a plus de livres que moi."],
      },
    ],
  },
  {
    id: "superlatives",
    level: "A2",
    title: { TR: "En üstünlük (superlatif)", EN: "Superlatives" },
    content: [
      {
        TR: "le / la / les + plus (en) / moins (en az) + sıfat. Türkçedeki “en”:\nC'est la plus belle ville. (en güzel şehir)\nİsimden sonra gelen sıfatlarda tanımlık tekrarlanır: le restaurant le plus cher.",
        EN: "le / la / les + plus (most) / moins (least) + adjective:\nC'est la plus belle ville. (the most beautiful city)\nWith adjectives placed after the noun, the article is repeated: le restaurant le plus cher.",
      },
      {
        TR: "“…-in en …” için de kullanılır: le plus grand pays du monde (dünyanın en büyük ülkesi), la plus jeune de la classe.",
        EN: "“in / of” after a superlative is de: le plus grand pays du monde (the biggest country in the world), la plus jeune de la classe.",
      },
      {
        TR: "bon → le meilleur / la meilleure / les meilleurs (en iyi, sıfat). bien → le mieux (en iyi şekilde, zarf, değişmez):\nC'est mon meilleur ami. · Léa chante le mieux.",
        EN: "bon → le meilleur / la meilleure / les meilleurs (the best, adjective). bien → le mieux (the best, adverb, never changes):\nC'est mon meilleur ami. · Léa chante le mieux.",
      },
    ],
    examples: [
      {
        fr: "C'est le restaurant le plus cher de la ville.",
        translation: { TR: "Bu şehrin en pahalı restoranı.", EN: "It's the most expensive restaurant in town." },
      },
      {
        fr: "Marc est le plus grand de la classe.",
        translation: { TR: "Marc sınıfın en uzunu.", EN: "Marc is the tallest in the class." },
      },
      {
        fr: "C'est la meilleure pizza du monde !",
        translation: { TR: "Bu dünyanın en iyi pizzası!", EN: "It's the best pizza in the world!" },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "superlatives-1",
        text: "C'est ma ___ amie. (en iyi / best)",
        answers: ["meilleure"],
        translation: { TR: "O benim en iyi arkadaşım.", EN: "She's my best friend." },
      },
      {
        type: "fill",
        id: "superlatives-2",
        text: "C'est l'hôtel le ___ cher de Paris. (en az / least)",
        answers: ["moins"],
        translation: { TR: "Bu Paris'in en ucuz (en az pahalı) oteli.", EN: "It's the least expensive hotel in Paris." },
      },
      {
        type: "build",
        id: "superlatives-3",
        tokens: ["C'est", "la", "plus", "belle", "ville"],
        translation: { TR: "Bu en güzel şehir.", EN: "It's the most beautiful city." },
      },
      {
        type: "free",
        id: "superlatives-4",
        prompt: { TR: "Fransızca yaz: “O (erkek) sınıfın en uzunu.”", EN: "Write in French: “He is the tallest in the class.”" },
        answers: ["Il est le plus grand de la classe.", "C'est le plus grand de la classe."],
      },
      {
        type: "free",
        id: "superlatives-5",
        prompt: { TR: "Fransızca yaz: “O (erkek) benim en iyi arkadaşım.”", EN: "Write in French: “He is my best friend.”" },
        answers: ["C'est mon meilleur ami.", "Il est mon meilleur ami."],
      },
    ],
  },
  {
    id: "relative-qui-que",
    level: "A2",
    title: { TR: "İlgi zamirleri: qui ve que", EN: "Relative pronouns: qui and que" },
    content: [
      {
        TR: "İlgi zamiri iki cümleyi birleştirir. qui, arkasından gelen fiilin öznesidir; qui'den sonra doğrudan fiil gelir:\nJ'ai un ami. Il habite à Nice. → J'ai un ami qui habite à Nice.",
        EN: "A relative pronoun joins two sentences. qui is the subject of the verb that follows; right after qui comes a verb:\nJ'ai un ami. Il habite à Nice. → J'ai un ami qui habite à Nice.",
      },
      {
        TR: "que nesnedir; que'dan sonra bir özne gelir (je, tu, Paul…):\nLe livre que je lis est intéressant.\nSesli harften önce que → qu' olur; qui hiç kısalmaz: le café qu'il aime, l'ami qui arrive.",
        EN: "que is the object; after que comes a subject (je, tu, Paul…):\nLe livre que je lis est intéressant.\nBefore a vowel que becomes qu'; qui never shortens: le café qu'il aime, l'ami qui arrive.",
      },
      {
        TR: "Türkçe ipucu: “Nice'te oturan arkadaş” (-an / -en) → çoğunlukla qui. “Okuduğum kitap” (-dığı / -diğim) → çoğunlukla que.",
        EN: "Shortcut: if the next word is a verb, use qui; if it is a subject (a noun or je, tu, il…), use que. English often drops “that” (the book I'm reading); French never drops que.",
      },
    ],
    examples: [
      {
        fr: "C'est la femme qui travaille avec moi.",
        translation: { TR: "Benimle çalışan kadın bu.", EN: "That's the woman who works with me." },
      },
      {
        fr: "Le film que nous avons vu était super.",
        translation: { TR: "İzlediğimiz film harikaydı.", EN: "The film we saw was great." },
      },
      {
        fr: "Voilà le café qu'il aime.",
        translation: { TR: "İşte sevdiği kafe.", EN: "Here's the café he likes." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "relative-qui-que-1",
        text: "J'ai un frère ___ habite à Berlin.",
        answers: ["qui"],
        translation: { TR: "Berlin'de oturan bir erkek kardeşim var.", EN: "I have a brother who lives in Berlin." },
      },
      {
        type: "fill",
        id: "relative-qui-que-2",
        text: "La robe ___ tu portes est belle.",
        answers: ["que"],
        translation: { TR: "Giydiğin elbise güzel.", EN: "The dress you're wearing is beautiful." },
      },
      {
        type: "build",
        id: "relative-qui-que-3",
        tokens: ["C'est", "le", "livre", "que", "je", "lis"],
        translation: { TR: "Okuduğum kitap bu.", EN: "This is the book I'm reading." },
      },
      {
        type: "free",
        id: "relative-qui-que-4",
        prompt: { TR: "Fransızca yaz: “Fransızca konuşan bir arkadaşım var.”", EN: "Write in French: “I have a friend who speaks French.”" },
        answers: ["J'ai un ami qui parle français.", "J'ai une amie qui parle français."],
      },
      {
        type: "free",
        id: "relative-qui-que-5",
        prompt: { TR: "Fransızca yaz: “Okuduğum kitap ilginç.”", EN: "Write in French: “The book I'm reading is interesting.”" },
        answers: ["Le livre que je lis est intéressant.", "Le livre que j'ai lu est intéressant."],
      },
    ],
  },
  {
    id: "relative-ou",
    level: "A2",
    title: { TR: "İlgi zamiri où", EN: "The relative pronoun où" },
    content: [
      {
        TR: "où bir yeri gösterir; à / dans / en + yer yerine gelir:\nla ville où j'habite = oturduğum şehir\nC'est le café où nous nous sommes rencontrés.",
        EN: "où points to a place; it replaces à / dans / en + place:\nla ville où j'habite = the city where I live\nC'est le café où nous nous sommes rencontrés.",
      },
      {
        TR: "où zaman için de kullanılır (quand değil!):\nle jour où je suis arrivé = geldiğim gün\nl'année où il est né = doğduğu yıl",
        EN: "où is also used for time (not quand!):\nle jour où je suis arrivé = the day (when) I arrived\nl'année où il est né = the year he was born",
      },
      {
        TR: "où mu que mu? Fiile bak. Fiil yer tamlayıcısı alıyorsa (aller à, habiter à) → où. Doğrudan nesne alıyorsa (visiter qqch) → que:\nla ville où je vais · la ville que je visite",
        EN: "où or que? Look at the verb. If it takes a place complement (aller à, habiter à) → où. If it takes a direct object (visiter qqch) → que:\nla ville où je vais · la ville que je visite",
      },
    ],
    examples: [
      {
        fr: "C'est la maison où j'ai grandi.",
        translation: { TR: "Bu, büyüdüğüm ev.", EN: "This is the house where I grew up." },
      },
      {
        fr: "Le restaurant où nous mangeons est près d'ici.",
        translation: { TR: "Yemek yediğimiz restoran buraya yakın.", EN: "The restaurant where we eat is near here." },
      },
      {
        fr: "Il neigeait le jour où elle est partie.",
        translation: { TR: "Onun gittiği gün kar yağıyordu.", EN: "It was snowing the day she left." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "relative-ou-1",
        text: "C'est la ville ___ je suis né.",
        answers: ["où"],
        translation: { TR: "Bu, doğduğum şehir.", EN: "This is the city where I was born." },
      },
      {
        type: "fill",
        id: "relative-ou-2",
        text: "Le jour ___ il est arrivé, il pleuvait.",
        answers: ["où"],
        translation: { TR: "Onun geldiği gün yağmur yağıyordu.", EN: "The day he arrived, it was raining." },
      },
      {
        type: "build",
        id: "relative-ou-3",
        tokens: ["Voilà", "le", "café", "où", "je", "travaille"],
        translation: { TR: "İşte çalıştığım kafe.", EN: "Here's the café where I work." },
      },
      {
        type: "free",
        id: "relative-ou-4",
        prompt: { TR: "Fransızca yaz: “Oturduğum şehir çok güzel.”", EN: "Write in French: “The city where I live is very beautiful.”" },
        answers: ["La ville où j'habite est très belle.", "La ville où j'habite est très jolie."],
      },
      {
        type: "free",
        id: "relative-ou-5",
        prompt: { TR: "Fransızca yaz: “Geldiğim gün yağmur yağıyordu.”", EN: "Write in French: “The day I arrived, it was raining.”" },
        answers: [
          "Le jour où je suis arrivé, il pleuvait.",
          "Le jour où je suis arrivée, il pleuvait.",
          "Le jour où je suis arrivé il pleuvait.",
          "Le jour où je suis arrivée il pleuvait.",
          "Il pleuvait le jour où je suis arrivé.",
          "Il pleuvait le jour où je suis arrivée.",
        ],
      },
    ],
  },
  {
    id: "negation-forms",
    level: "A2",
    title: { TR: "Diğer olumsuzluklar", EN: "Other negations" },
    content: [
      {
        TR: "ne ... pas gibi fiili sarar:\nne ... jamais = hiç, asla\nne ... rien = hiçbir şey\nne ... personne = hiç kimse\nne ... plus = artık ... değil\nne ... pas encore = henüz ... değil",
        EN: "Like ne ... pas, they wrap the verb:\nne ... jamais = never\nne ... rien = nothing\nne ... personne = nobody\nne ... plus = no longer, not any more\nne ... pas encore = not yet",
      },
      {
        TR: "Türkçede de çift olumsuzluk var: “Hiçbir şey görmedim” = Je n'ai rien vu. Passé composé'de jamais, rien, plus, pas encore participe'den önce; personne ise sonra gelir:\nJe n'ai rien vu. · Je n'ai vu personne.\nÖzne olarak: Personne n'est venu. Rien n'est simple.",
        EN: "In the passé composé, jamais, rien, plus, pas encore go before the participle; personne goes after it:\nJe n'ai rien vu. · Je n'ai vu personne.\nAs a subject: Personne n'est venu. Rien n'est simple.",
      },
      {
        TR: "ne ... que olumsuz değildir, “sadece” demektir. que, sınırlanan şeyin önüne gelir:\nJe n'ai que dix euros = Sadece on avrom var.",
        EN: "ne ... que is not negative; it means “only”. que goes right before what is restricted:\nJe n'ai que dix euros = I only have ten euros.",
      },
    ],
    examples: [
      {
        fr: "Il ne mange jamais de viande.",
        translation: { TR: "Hiç et yemez.", EN: "He never eats meat." },
      },
      {
        fr: "Je n'ai vu personne.",
        translation: { TR: "Kimseyi görmedim.", EN: "I didn't see anybody." },
      },
      {
        fr: "Nous n'avons qu'une voiture.",
        translation: { TR: "Sadece bir arabamız var.", EN: "We only have one car." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "negation-forms-1",
        text: "Je ne fume ___, j'ai arrêté.",
        answers: ["plus"],
        translation: { TR: "Artık sigara içmiyorum, bıraktım.", EN: "I don't smoke any more, I stopped." },
      },
      {
        type: "fill",
        id: "negation-forms-2",
        text: "Il n'a ___ vu.",
        answers: ["rien"],
        translation: { TR: "Hiçbir şey görmedi.", EN: "He didn't see anything." },
      },
      {
        type: "build",
        id: "negation-forms-3",
        tokens: ["Je", "n'ai", "vu", "personne"],
        translation: { TR: "Kimseyi görmedim.", EN: "I didn't see anybody." },
      },
      {
        type: "free",
        id: "negation-forms-4",
        prompt: { TR: "Fransızca yaz: “Paris'e hiç gitmedim.”", EN: "Write in French: “I have never been to Paris.”" },
        answers: ["Je ne suis jamais allé à Paris.", "Je ne suis jamais allée à Paris.", "Je n'ai jamais été à Paris."],
      },
      {
        type: "free",
        id: "negation-forms-5",
        prompt: { TR: "Fransızca yaz: “Sadece bir erkek kardeşim var.”", EN: "Write in French: “I only have one brother.”" },
        answers: ["Je n'ai qu'un frère.", "Je n'ai qu'un seul frère.", "J'ai seulement un frère.", "J'ai un seul frère."],
      },
    ],
  },
  {
    id: "time-expressions",
    level: "A2",
    title: { TR: "Zaman ifadeleri", EN: "Time expressions" },
    content: [
      {
        TR: "depuis + şimdiki zaman: geçmişte başlayıp hâlâ süren şey.\nJ'habite ici depuis trois ans = Üç yıldır burada oturuyorum.\nTürkçedeki gibi şimdiki zaman kullanılır; İngilizcedeki “I have lived” gibi geçmiş zaman kullanma.",
        EN: "depuis + present: something that started in the past and is still going on.\nJ'habite ici depuis trois ans = I have lived here for three years.\nFrench uses the present here, not a past tense.",
      },
      {
        TR: "il y a + geçmiş = … önce: Je suis arrivé il y a deux jours (iki gün önce).\ndans + gelecek = … sonra: Le train part dans dix minutes (on dakika sonra).",
        EN: "il y a + past = … ago: Je suis arrivé il y a deux jours (two days ago).\ndans + future = in …: Le train part dans dix minutes (in ten minutes).",
      },
      {
        TR: "pendant = boyunca, kapalı bir süre: J'ai dormi pendant huit heures.\nen = bir işin ne kadar sürede yapıldığı: J'ai fini en une heure (bir saatte bitirdim). Ay, yıl ve mevsimlerle de: en mai, en 2020, en été.",
        EN: "pendant = for / during, a closed stretch: J'ai dormi pendant huit heures.\nen = how long something takes: J'ai fini en une heure (I finished in an hour). Also with months, years and seasons: en mai, en 2020, en été.",
      },
    ],
    examples: [
      {
        fr: "J'apprends le français depuis six mois.",
        translation: { TR: "Altı aydır Fransızca öğreniyorum.", EN: "I have been learning French for six months." },
      },
      {
        fr: "Il est parti il y a une heure.",
        translation: { TR: "Bir saat önce gitti.", EN: "He left an hour ago." },
      },
      {
        fr: "Je reviens dans cinq minutes.",
        translation: { TR: "Beş dakika sonra dönüyorum.", EN: "I'll be back in five minutes." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "time-expressions-1",
        text: "J'habite à Istanbul ___ dix ans.",
        answers: ["depuis"],
        translation: { TR: "On yıldır İstanbul'da oturuyorum.", EN: "I have lived in Istanbul for ten years." },
      },
      {
        type: "fill",
        id: "time-expressions-2",
        text: "Nous partons ___ deux jours.",
        answers: ["dans"],
        translation: { TR: "İki gün sonra yola çıkıyoruz.", EN: "We are leaving in two days." },
      },
      {
        type: "build",
        id: "time-expressions-3",
        tokens: ["J'ai", "dormi", "pendant", "huit", "heures"],
        translation: { TR: "Sekiz saat uyudum.", EN: "I slept for eight hours." },
      },
      {
        type: "free",
        id: "time-expressions-4",
        prompt: { TR: "Fransızca yaz: “İki yıldır Fransızca öğreniyorum.”", EN: "Write in French: “I have been learning French for two years.”" },
        answers: [
          "J'apprends le français depuis deux ans.",
          "J'étudie le français depuis deux ans.",
          "J'apprends le français depuis 2 ans.",
          "J'étudie le français depuis 2 ans.",
        ],
      },
      {
        type: "free",
        id: "time-expressions-5",
        prompt: { TR: "Fransızca yaz: “Bir saat önce geldi.”", EN: "Write in French: “He arrived an hour ago.”" },
        answers: ["Il est arrivé il y a une heure.", "Elle est arrivée il y a une heure."],
      },
    ],
  },
  {
    id: "venir-de-en-train-de",
    level: "A2",
    title: { TR: "Venir de ve être en train de", EN: "Venir de and être en train de" },
    content: [
      {
        TR: "venir de + mastar = az önce yapmış olmak (yakın geçmiş):\nJe viens de manger = Az önce yemek yedim.\nje viens · tu viens · il/elle vient\nnous venons · vous venez · ils/elles viennent\nSesli harften önce de → d': Il vient d'arriver.",
        EN: "venir de + infinitive = to have just done something (recent past):\nJe viens de manger = I have just eaten.\nje viens · tu viens · il/elle vient\nnous venons · vous venez · ils/elles viennent\nBefore a vowel de becomes d': Il vient d'arriver.",
      },
      {
        TR: "être en train de + mastar = tam şu anda bir şeyin ortasında olmak:\nJe suis en train de travailler = Şu an çalışıyorum (meşgulüm).\nNormal şimdiki zaman da doğrudur; bu kalıp “tam şimdi, sürüyor” vurgusu katar.",
        EN: "être en train de + infinitive = to be in the middle of doing something:\nJe suis en train de travailler = I'm (busy) working right now.\nThe plain present is also correct; this phrase stresses “right now, in progress”.",
      },
      {
        TR: "futur proche ile üç zaman noktası: je viens de manger → je suis en train de manger → je vais manger. Geçmişte imparfait ile: J'étais en train de dormir quand tu as appelé.",
        EN: "With the futur proche you get three points in time: je viens de manger → je suis en train de manger → je vais manger. In the past, with the imparfait: J'étais en train de dormir quand tu as appelé.",
      },
    ],
    examples: [
      {
        fr: "Le film vient de commencer.",
        translation: { TR: "Film az önce başladı.", EN: "The film has just started." },
      },
      {
        fr: "Ne parle pas, je suis en train de travailler !",
        translation: { TR: "Konuşma, şu an çalışıyorum!", EN: "Don't talk, I'm working!" },
      },
      {
        fr: "Nous venons d'arriver à la gare.",
        translation: { TR: "İstasyona az önce vardık.", EN: "We have just arrived at the station." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "venir-de-en-train-de-1",
        text: "Je ___ de finir mes devoirs.",
        answers: ["viens"],
        translation: { TR: "Ödevlerimi az önce bitirdim.", EN: "I have just finished my homework." },
      },
      {
        type: "fill",
        id: "venir-de-en-train-de-2",
        text: "Elle est ___ train de cuisiner.",
        answers: ["en"],
        translation: { TR: "Şu an yemek yapıyor.", EN: "She is cooking right now." },
      },
      {
        type: "build",
        id: "venir-de-en-train-de-3",
        tokens: ["Nous", "venons", "d'arriver", "à", "Paris"],
        translation: { TR: "Paris'e az önce vardık.", EN: "We have just arrived in Paris." },
      },
      {
        type: "free",
        id: "venir-de-en-train-de-4",
        prompt: { TR: "Fransızca yaz: “Az önce yemek yedim.”", EN: "Write in French: “I have just eaten.”" },
        answers: ["Je viens de manger."],
      },
      {
        type: "free",
        id: "venir-de-en-train-de-5",
        prompt: { TR: "Fransızca yaz: “Tam şu an çalışıyorum.”", EN: "Write in French: “I'm working right now.” (in the middle of it)" },
        answers: [
          "Je suis en train de travailler.",
          "Je suis en train de travailler maintenant.",
          "Maintenant, je suis en train de travailler.",
          "Maintenant je suis en train de travailler.",
        ],
      },
    ],
  },
  {
    id: "adverbs-ment",
    level: "A2",
    title: { TR: "-ment ile biten zarflar", EN: "Adverbs in -ment" },
    content: [
      {
        TR: "Sıfatın dişil hâli + -ment (Türkçedeki “-ce / -ca” ya da “… bir şekilde”):\nlent → lente → lentement (yavaşça)\nheureux → heureuse → heureusement (neyse ki)\nEril hâl sesli harfle bitiyorsa onu al: vrai → vraiment, poli → poliment.",
        EN: "Feminine form of the adjective + -ment (like English -ly):\nlent → lente → lentement (slowly)\nheureux → heureuse → heureusement (luckily)\nIf the masculine ends in a vowel, use it: vrai → vraiment, poli → poliment.",
      },
      {
        TR: "-ant → -amment, -ent → -emment; ikisi de «aman» okunur:\ncourant → couramment · évident → évidemment · récent → récemment\nİstisna: lent → lentement.\nDüzensiz: bon → bien, mauvais → mal, gentil → gentiment.",
        EN: "-ant → -amment, -ent → -emment; both are pronounced “a-man”:\ncourant → couramment · évident → évidemment · récent → récemment\nException: lent → lentement.\nIrregular: bon → bien, mauvais → mal, gentil → gentiment.",
      },
      {
        TR: "Yeri: çekimli fiilden sonra: Il parle lentement. Passé composé'de uzun -ment zarfları genelde participe'den sonra gelir: Il a répondu poliment. (Kısa zarflar bien, déjà ise arada kalır.)",
        EN: "Position: after the conjugated verb: Il parle lentement. In the passé composé long -ment adverbs usually come after the participle: Il a répondu poliment. (Short ones like bien, déjà stay in between.)",
      },
    ],
    examples: [
      {
        fr: "Elle parle couramment anglais.",
        translation: { TR: "İngilizceyi akıcı konuşuyor.", EN: "She speaks English fluently." },
      },
      {
        fr: "Parlez lentement, s'il vous plaît.",
        translation: { TR: "Yavaş konuşun, lütfen.", EN: "Speak slowly, please." },
      },
      {
        fr: "Heureusement, il ne pleut pas.",
        translation: { TR: "Neyse ki yağmur yağmıyor.", EN: "Luckily, it isn't raining." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "adverbs-ment-1",
        text: "Il conduit ___ la nuit. (prudent)",
        answers: ["prudemment"],
        translation: { TR: "Gece dikkatli araba sürer.", EN: "He drives carefully at night." },
      },
      {
        type: "fill",
        id: "adverbs-ment-2",
        text: "Elle a répondu ___ au professeur. (poli)",
        answers: ["poliment"],
        translation: { TR: "Öğretmene kibarca cevap verdi.", EN: "She answered the teacher politely." },
      },
      {
        type: "build",
        id: "adverbs-ment-3",
        tokens: ["Je", "parle", "couramment", "turc"],
        translation: { TR: "Türkçeyi akıcı konuşurum.", EN: "I speak Turkish fluently." },
      },
      {
        type: "free",
        id: "adverbs-ment-4",
        prompt: { TR: "Fransızca yaz: “Yavaş konuş.”", EN: "Write in French: “Speak slowly.”" },
        answers: ["Parle lentement.", "Parlez lentement."],
      },
      {
        type: "free",
        id: "adverbs-ment-5",
        prompt: { TR: "Fransızca yaz: “Gerçekten yorgunum.”", EN: "Write in French: “I'm really tired.”" },
        answers: ["Je suis vraiment fatigué.", "Je suis vraiment fatiguée."],
      },
    ],
  },
  {
    id: "tout",
    level: "A2",
    title: { TR: "Tout, toute, tous, toutes", EN: "Tout, toute, tous, toutes" },
    content: [
      {
        TR: "tout + tanımlık + isim = bütün, tüm. İsme uyar:\ntout le gâteau (bütün pasta) · toute la journée (bütün gün)\ntous les enfants · toutes les femmes",
        EN: "tout + article + noun = all, the whole. It agrees with the noun:\ntout le gâteau (the whole cake) · toute la journée (all day)\ntous les enfants · toutes les femmes",
      },
      {
        TR: "tous les / toutes les + zaman = her: tous les jours (her gün), tous les lundis (her pazartesi), toutes les semaines (her hafta).",
        EN: "tous les / toutes les + time = every: tous les jours (every day), tous les lundis (every Monday), toutes les semaines (every week).",
      },
      {
        TR: "Tek başına tout = her şey: Tout est prêt. Passé composé'de araya girer: J'ai tout compris.\ntout le monde = herkes (“bütün dünya” değil!). Fiil tekildir: Tout le monde est là.",
        EN: "On its own tout = everything: Tout est prêt. In the passé composé it goes in between: J'ai tout compris.\ntout le monde = everybody (not “the whole world”!). The verb is singular: Tout le monde est là.",
      },
    ],
    examples: [
      {
        fr: "J'ai travaillé toute la journée.",
        translation: { TR: "Bütün gün çalıştım.", EN: "I worked all day." },
      },
      {
        fr: "Nous allons au marché tous les samedis.",
        translation: { TR: "Her cumartesi pazara gideriz.", EN: "We go to the market every Saturday." },
      },
      {
        fr: "Tout le monde aime les vacances.",
        translation: { TR: "Herkes tatili sever.", EN: "Everybody loves holidays." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "tout-1",
        text: "Il a mangé ___ la pizza.",
        answers: ["toute"],
        translation: { TR: "Bütün pizzayı yedi.", EN: "He ate the whole pizza." },
      },
      {
        type: "fill",
        id: "tout-2",
        text: "Je fais du sport ___ les matins.",
        answers: ["tous"],
        translation: { TR: "Her sabah spor yaparım.", EN: "I do sport every morning." },
      },
      {
        type: "build",
        id: "tout-3",
        tokens: ["Tout", "le", "monde", "est", "là"],
        translation: { TR: "Herkes burada.", EN: "Everybody is here." },
      },
      {
        type: "free",
        id: "tout-4",
        prompt: { TR: "Fransızca yaz: “Her şeyi anladım.”", EN: "Write in French: “I understood everything.”" },
        answers: ["J'ai tout compris."],
      },
      {
        type: "free",
        id: "tout-5",
        prompt: { TR: "Fransızca yaz: “Her gün Fransızca çalışıyorum.”", EN: "Write in French: “I study French every day.”" },
        answers: [
          "J'étudie le français tous les jours.",
          "Tous les jours, j'étudie le français.",
          "Tous les jours j'étudie le français.",
          "J'apprends le français tous les jours.",
          "Tous les jours, j'apprends le français.",
          "Tous les jours j'apprends le français.",
        ],
      },
    ],
  },
  {
    id: "indefinites",
    level: "A2",
    title: { TR: "Belgisiz kelimeler", EN: "Indefinite words" },
    content: [
      {
        TR: "quelqu'un = birisi, quelque chose = bir şey. Karşıtları personne ve rien:\nIl y a quelqu'un ? Non, il n'y a personne.\nSıfatla de kullanılır: quelque chose de bon (iyi bir şey).",
        EN: "quelqu'un = someone, quelque chose = something. Their opposites are personne and rien:\nIl y a quelqu'un ? Non, il n'y a personne.\nWith an adjective add de: quelque chose de bon (something good).",
      },
      {
        TR: "chaque + tekil isim = her: chaque jour, chaque étudiant.\nchacun / chacune = her biri (zamir): Chacun a son livre.",
        EN: "chaque + singular noun = each, every: chaque jour, chaque étudiant.\nchacun / chacune = each one (pronoun): Chacun a son livre.",
      },
      {
        TR: "plusieurs = birkaç, birden çok (her zaman çoğul, değişmez): plusieurs fois.\ncertains / certaines = bazı, bazıları: Certains étudiants travaillent le soir.\naucun / aucune + ne = hiç (bir tane bile): Je n'ai aucune idée. Her zaman tekil.",
        EN: "plusieurs = several (always plural, never changes): plusieurs fois.\ncertains / certaines = some, certain ones: Certains étudiants travaillent le soir.\naucun / aucune + ne = not a single, no: Je n'ai aucune idée. Always singular.",
      },
    ],
    examples: [
      {
        fr: "Quelqu'un a téléphoné ce matin.",
        translation: { TR: "Bu sabah biri telefon etti.", EN: "Someone called this morning." },
      },
      {
        fr: "J'ai plusieurs amis à Paris.",
        translation: { TR: "Paris'te birkaç arkadaşım var.", EN: "I have several friends in Paris." },
      },
      {
        fr: "Je n'ai aucun problème.",
        translation: { TR: "Hiçbir sorunum yok.", EN: "I have no problem at all." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "indefinites-1",
        text: "Tu veux boire ___ chose ?",
        answers: ["quelque"],
        translation: { TR: "Bir şey içmek ister misin?", EN: "Do you want something to drink?" },
      },
      {
        type: "fill",
        id: "indefinites-2",
        text: "Je n'ai ___ idée.",
        answers: ["aucune"],
        translation: { TR: "Hiçbir fikrim yok.", EN: "I have no idea." },
      },
      {
        type: "build",
        id: "indefinites-3",
        tokens: ["Chaque", "étudiant", "a", "un", "livre"],
        translation: { TR: "Her öğrencinin bir kitabı var.", EN: "Each student has a book." },
      },
      {
        type: "free",
        id: "indefinites-4",
        prompt: { TR: "Fransızca yaz: “Kapıda biri var.”", EN: "Write in French: “There is someone at the door.”" },
        answers: ["Il y a quelqu'un à la porte."],
      },
      {
        type: "free",
        id: "indefinites-5",
        prompt: { TR: "Fransızca yaz: “Paris'e birkaç kez gittim.”", EN: "Write in French: “I have been to Paris several times.”" },
        answers: [
          "Je suis allé à Paris plusieurs fois.",
          "Je suis allée à Paris plusieurs fois.",
          "Je suis allé plusieurs fois à Paris.",
          "Je suis allée plusieurs fois à Paris.",
        ],
      },
    ],
  },
  {
    id: "conditionnel-politeness",
    level: "A2",
    title: { TR: "Kibarlık için conditionnel", EN: "The conditional for politeness" },
    content: [
      {
        TR: "Futur kökü + imparfait ekleri (-ais, -ais, -ait, -ions, -iez, -aient):\nje parlerais · tu parlerais · il/elle parlerait\nnous parlerions · vous parleriez · ils/elles parleraient\nDüzensiz kökler futur ile aynı: je serais, j'aurais, je pourrais, je voudrais, j'irais, je ferais.",
        EN: "Future stem + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient):\nje parlerais · tu parlerais · il/elle parlerait\nnous parlerions · vous parleriez · ils/elles parleraient\nSame irregular stems as the future: je serais, j'aurais, je pourrais, je voudrais, j'irais, je ferais.",
      },
      {
        TR: "Kibar rica: “Je veux” sert duyulur, je voudrais (isterdim / rica ediyorum) kibardır.\nJe voudrais un café, s'il vous plaît.\nPourriez-vous m'aider ? = Bana yardım edebilir misiniz?\nTu pourrais fermer la porte ?",
        EN: "Polite requests: “Je veux” sounds blunt, je voudrais (I would like) is polite.\nJe voudrais un café, s'il vous plaît.\nPourriez-vous m'aider ? = Could you help me?\nTu pourrais fermer la porte ?",
      },
      {
        TR: "İstek ve hayaller: J'aimerais visiter le Japon (Japonya'yı gezmek isterdim). Ce serait super ! (Harika olurdu!)",
        EN: "Wishes and dreams: J'aimerais visiter le Japon (I'd love to visit Japan). Ce serait super ! (That would be great!)",
      },
    ],
    examples: [
      {
        fr: "Je voudrais un croissant, s'il vous plaît.",
        translation: { TR: "Bir kruvasan rica ediyorum.", EN: "I'd like a croissant, please." },
      },
      {
        fr: "Pourriez-vous parler plus lentement ?",
        translation: { TR: "Daha yavaş konuşabilir misiniz?", EN: "Could you speak more slowly?" },
      },
      {
        fr: "J'aimerais habiter au bord de la mer.",
        translation: { TR: "Deniz kenarında yaşamak isterdim.", EN: "I would love to live by the sea." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "conditionnel-politeness-1",
        text: "Je ___ une table pour deux, s'il vous plaît. (vouloir)",
        answers: ["voudrais"],
        translation: { TR: "İki kişilik bir masa rica ediyorum.", EN: "I'd like a table for two, please." },
      },
      {
        type: "fill",
        id: "conditionnel-politeness-2",
        text: "___-vous m'aider ? (pouvoir)",
        answers: ["Pourriez"],
        translation: { TR: "Bana yardım edebilir misiniz?", EN: "Could you help me?" },
      },
      {
        type: "build",
        id: "conditionnel-politeness-3",
        tokens: ["J'aimerais", "visiter", "le", "Japon"],
        translation: { TR: "Japonya'yı gezmek isterdim.", EN: "I'd love to visit Japan." },
      },
      {
        type: "free",
        id: "conditionnel-politeness-4",
        prompt: { TR: "Fransızca yaz: “Bir kahve rica ediyorum, lütfen.”", EN: "Write in French: “I'd like a coffee, please.”" },
        answers: [
          "Je voudrais un café, s'il vous plaît.",
          "Je voudrais un café s'il vous plaît.",
          "Je voudrais un café, s'il te plaît.",
          "Je voudrais un café s'il te plaît.",
          "J'aimerais un café, s'il vous plaît.",
          "J'aimerais un café s'il vous plaît.",
          "J'aimerais un café, s'il te plaît.",
          "J'aimerais un café s'il te plaît.",
        ],
      },
      {
        type: "free",
        id: "conditionnel-politeness-5",
        prompt: { TR: "Fransızca yaz: “Bana yardım edebilir misiniz?”", EN: "Write in French: “Could you help me?”" },
        answers: [
          "Pourriez-vous m'aider ?",
          "Est-ce que vous pourriez m'aider ?",
          "Vous pourriez m'aider ?",
          "Pourrais-tu m'aider ?",
          "Est-ce que tu pourrais m'aider ?",
          "Tu pourrais m'aider ?",
        ],
      },
    ],
  },
  {
    id: "imperative-pronouns",
    level: "A2",
    title: { TR: "Emir kipi ve zamirler", EN: "The imperative with pronouns" },
    content: [
      {
        TR: "Olumlu emirde zamir fiilin ARKASINA, tireyle gelir. me ve te → moi ve toi olur:\nPrends-le ! · Regarde-la ! · Parle-lui !\nAide-moi ! · Écoute-moi !",
        EN: "In a positive command the pronoun goes AFTER the verb, with a hyphen. me and te become moi and toi:\nPrends-le ! · Regarde-la ! · Parle-lui !\nAide-moi ! · Écoute-moi !",
      },
      {
        TR: "Olumsuz emirde zamir yine fiilin önüne döner:\nNe le prends pas ! · Ne me regarde pas !",
        EN: "In a negative command the pronoun goes back before the verb:\nNe le prends pas ! · Ne me regarde pas !",
      },
      {
        TR: "İki zamir: önce le / la / les, sonra moi / lui / nous / leur:\nDonne-le-moi ! (Onu bana ver!) · Montre-la-lui !\nDönüşlü fiiller: Lève-toi ! · Asseyez-vous ! · Dépêchons-nous !\nOlumsuz: Ne te lève pas !",
        EN: "Two pronouns: first le / la / les, then moi / lui / nous / leur:\nDonne-le-moi ! (Give it to me!) · Montre-la-lui !\nReflexive verbs: Lève-toi ! · Asseyez-vous ! · Dépêchons-nous !\nNegative: Ne te lève pas !",
      },
    ],
    examples: [
      {
        fr: "Donne-le-moi, s'il te plaît.",
        translation: { TR: "Onu bana ver, lütfen.", EN: "Give it to me, please." },
      },
      {
        fr: "Ne le dis pas à Paul !",
        translation: { TR: "Bunu Paul'e söyleme!", EN: "Don't tell Paul!" },
      },
      {
        fr: "Lève-toi, il est huit heures !",
        translation: { TR: "Kalk, saat sekiz!", EN: "Get up, it's eight o'clock!" },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "imperative-pronouns-1",
        text: "Réveille-___ ! Il est tard.",
        answers: ["toi"],
        translation: { TR: "Uyan! Geç oldu.", EN: "Wake up! It's late." },
      },
      {
        type: "fill",
        id: "imperative-pronouns-2",
        text: "Le gâteau ? Ne ___ touche pas !",
        answers: ["le"],
        translation: { TR: "Pasta mı? Ona dokunma!", EN: "The cake? Don't touch it!" },
      },
      {
        type: "build",
        id: "imperative-pronouns-3",
        tokens: ["Ne", "me", "regarde", "pas"],
        translation: { TR: "Bana bakma!", EN: "Don't look at me!" },
      },
      {
        type: "free",
        id: "imperative-pronouns-4",
        prompt: { TR: "Fransızca yaz: “Onu bana ver!” (kitabı)", EN: "Write in French: “Give it to me!” (the book)" },
        answers: ["Donne-le-moi !", "Donnez-le-moi !"],
      },
      {
        type: "free",
        id: "imperative-pronouns-5",
        prompt: { TR: "Fransızca yaz: “Kalk!”", EN: "Write in French: “Get up!”" },
        answers: ["Lève-toi !", "Levez-vous !"],
      },
    ],
  },
  {
    id: "quel-lequel",
    level: "A2",
    title: { TR: "Quel ve lequel", EN: "Quel and lequel" },
    content: [
      {
        TR: "quel = hangi, ne. İsme uyar, dördü de aynı okunur («kel»):\nquel (eril tekil) · quelle (dişil tekil)\nquels (eril çoğul) · quelles (dişil çoğul)\nQuel livre ? · Quelle heure est-il ? · Quels sont tes films préférés ?",
        EN: "quel = which, what. It agrees with the noun; all four sound the same (“kel”):\nquel (masc. sing.) · quelle (fem. sing.)\nquels (masc. pl.) · quelles (fem. pl.)\nQuel livre ? · Quelle heure est-il ? · Quels sont tes films préférés ?",
      },
      {
        TR: "Ünlem için de: Quelle belle journée ! (Ne güzel bir gün!) · Quel dommage ! (Ne yazık!)",
        EN: "Also in exclamations: Quelle belle journée ! (What a lovely day!) · Quel dommage ! (What a pity!)",
      },
      {
        TR: "lequel / laquelle / lesquels / lesquelles = hangisi, hangileri. quel + isim yerine geçer, isim tekrarlanmaz:\nJ'ai deux robes. Laquelle préfères-tu ?",
        EN: "lequel / laquelle / lesquels / lesquelles = which one(s). It replaces quel + noun, so the noun is not repeated:\nJ'ai deux robes. Laquelle préfères-tu ?",
      },
    ],
    examples: [
      {
        fr: "Quelle est ton adresse ?",
        translation: { TR: "Adresin ne?", EN: "What is your address?" },
      },
      {
        fr: "Quels livres est-ce que tu lis ?",
        translation: { TR: "Hangi kitapları okuyorsun?", EN: "Which books are you reading?" },
      },
      {
        fr: "Il y a trois gâteaux. Lequel veux-tu ?",
        translation: { TR: "Üç pasta var. Hangisini istiyorsun?", EN: "There are three cakes. Which one do you want?" },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "quel-lequel-1",
        text: "___ heure est-il ?",
        answers: ["Quelle"],
        translation: { TR: "Saat kaç?", EN: "What time is it?" },
      },
      {
        type: "fill",
        id: "quel-lequel-2",
        text: "Voici deux pulls. ___ préfères-tu ?",
        answers: ["Lequel"],
        translation: { TR: "İşte iki kazak. Hangisini tercih edersin?", EN: "Here are two jumpers. Which one do you prefer?" },
      },
      {
        type: "build",
        id: "quel-lequel-3",
        tokens: ["Quelle", "est", "ta", "couleur", "préférée"],
        translation: { TR: "En sevdiğin renk hangisi?", EN: "What is your favourite colour?" },
      },
      {
        type: "free",
        id: "quel-lequel-4",
        prompt: { TR: "Fransızca yaz: “Hangi kitabı okuyorsun?”", EN: "Write in French: “Which book are you reading?”" },
        answers: [
          "Quel livre lis-tu ?",
          "Quel livre est-ce que tu lis ?",
          "Tu lis quel livre ?",
          "Quel livre lisez-vous ?",
          "Quel livre est-ce que vous lisez ?",
          "Vous lisez quel livre ?",
        ],
      },
      {
        type: "free",
        id: "quel-lequel-5",
        prompt: { TR: "Fransızca yaz: “Hangisini istiyorsun?” (bir elbise)", EN: "Write in French: “Which one do you want?” (a dress)" },
        answers: [
          "Laquelle veux-tu ?",
          "Laquelle est-ce que tu veux ?",
          "Tu veux laquelle ?",
          "Laquelle voulez-vous ?",
          "Laquelle est-ce que vous voulez ?",
          "Vous voulez laquelle ?",
        ],
      },
    ],
  },
  {
    id: "connectors-sequence",
    level: "A2",
    title: { TR: "Bağlaçlar: sıra ve mantık", EN: "Connectors: sequence and logic" },
    content: [
      {
        TR: "Sıralama: d'abord (önce), ensuite / puis (sonra), après (daha sonra), enfin (en sonunda).\nD'abord je me lève, ensuite je prends une douche, puis je mange, enfin je pars.",
        EN: "Sequence: d'abord (first), ensuite / puis (then), après (afterwards), enfin (finally).\nD'abord je me lève, ensuite je prends une douche, puis je mange, enfin je pars.",
      },
      {
        TR: "Sonuç: donc / alors = bu yüzden, o hâlde. alors daha çok konuşma dilindedir.\nIl pleut, donc je reste à la maison.",
        EN: "Result: donc / alors = so. alors is more conversational.\nIl pleut, donc je reste à la maison.",
      },
      {
        TR: "Karşıtlık: mais = ama. pourtant = yine de, buna rağmen (beklenmedik bir durumu gösterir):\nIl est riche, pourtant il n'est pas heureux.",
        EN: "Contrast: mais = but. pourtant = yet, even so (shows something unexpected):\nIl est riche, pourtant il n'est pas heureux.",
      },
    ],
    examples: [
      {
        fr: "D'abord on mange, ensuite on regarde un film.",
        translation: { TR: "Önce yemek yiyoruz, sonra film izliyoruz.", EN: "First we eat, then we watch a film." },
      },
      {
        fr: "J'étais fatigué, donc je me suis couché tôt.",
        translation: { TR: "Yorgundum, bu yüzden erken yattım.", EN: "I was tired, so I went to bed early." },
      },
      {
        fr: "Il fait froid, pourtant elle ne porte pas de manteau.",
        translation: { TR: "Hava soğuk, yine de mont giymiyor.", EN: "It's cold, yet she isn't wearing a coat." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "connectors-sequence-1",
        text: "___, je me lève. Ensuite, je prends un café.",
        answers: ["D'abord"],
        translation: { TR: "Önce kalkarım. Sonra bir kahve içerim.", EN: "First I get up. Then I have a coffee." },
      },
      {
        type: "fill",
        id: "connectors-sequence-2",
        text: "Il pleut, ___ je prends mon parapluie.",
        answers: ["donc", "alors"],
        translation: { TR: "Yağmur yağıyor, bu yüzden şemsiyemi alıyorum.", EN: "It's raining, so I'm taking my umbrella." },
      },
      {
        type: "build",
        id: "connectors-sequence-3",
        tokens: ["Je", "suis", "fatigué", "mais", "content"],
        translation: { TR: "Yorgunum ama mutluyum.", EN: "I'm tired but happy." },
      },
      {
        type: "free",
        id: "connectors-sequence-4",
        prompt: { TR: "Fransızca yaz: “Yağmur yağıyor, bu yüzden evde kalıyorum.”", EN: "Write in French: “It's raining, so I'm staying at home.”" },
        answers: [
          "Il pleut, donc je reste à la maison.",
          "Il pleut donc je reste à la maison.",
          "Il pleut, alors je reste à la maison.",
          "Il pleut alors je reste à la maison.",
          "Il pleut, donc je reste chez moi.",
          "Il pleut donc je reste chez moi.",
          "Il pleut, alors je reste chez moi.",
          "Il pleut alors je reste chez moi.",
        ],
      },
      {
        type: "free",
        id: "connectors-sequence-5",
        prompt: { TR: "Fransızca yaz: “O zengin ama mutlu değil.”", EN: "Write in French: “He is rich but he isn't happy.”" },
        answers: [
          "Il est riche mais il n'est pas heureux.",
          "Il est riche, mais il n'est pas heureux.",
          "Il est riche mais pas heureux.",
          "Il est riche, mais pas heureux.",
        ],
      },
    ],
  },
  {
    id: "verbs-infinitive-prepositions",
    level: "A2",
    title: { TR: "Fiil + à / de + mastar", EN: "Verb + à / de + infinitive" },
    content: [
      {
        TR: "Bazı fiiller mastara doğrudan bağlanır: aimer, vouloir, pouvoir, aller (J'aime danser). Bazıları ise à ya da de ister. Hangisinin geldiği bir kurala bağlı değil; fiille birlikte ezberlenir.",
        EN: "Some verbs join an infinitive directly: aimer, vouloir, pouvoir, aller (J'aime danser). Others need à or de. There is no rule for which one; learn it together with the verb.",
      },
      {
        TR: "+ à: commencer à, apprendre à, réussir à, aider à\nJ'apprends à nager. (Yüzmeyi öğreniyorum.)\n+ de: essayer de, oublier de, décider de, arrêter de, finir de\nJ'ai oublié de fermer la porte. Sesli harften önce d': Il a décidé d'arrêter.",
        EN: "+ à: commencer à, apprendre à, réussir à, aider à\nJ'apprends à nager. (I'm learning to swim.)\n+ de: essayer de, oublier de, décider de, arrêter de, finir de\nJ'ai oublié de fermer la porte. Before a vowel d': Il a décidé d'arrêter.",
      },
      {
        TR: "İpucu: fiili kalıp olarak öğren: “essayer de faire”, “apprendre à faire”. Mastarı olumsuz yaparken ne pas birlikte mastarın önüne gelir: J'ai décidé de ne pas partir.",
        EN: "Tip: learn the verb as a chunk: “essayer de faire”, “apprendre à faire”. To make the infinitive negative, ne pas go together before it: J'ai décidé de ne pas partir.",
      },
    ],
    examples: [
      {
        fr: "Il commence à pleuvoir.",
        translation: { TR: "Yağmur yağmaya başlıyor.", EN: "It's starting to rain." },
      },
      {
        fr: "N'oublie pas d'acheter du pain !",
        translation: { TR: "Ekmek almayı unutma!", EN: "Don't forget to buy bread!" },
      },
      {
        fr: "Nous essayons de comprendre.",
        translation: { TR: "Anlamaya çalışıyoruz.", EN: "We are trying to understand." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "verbs-infinitive-prepositions-1",
        text: "J'apprends ___ conduire.",
        answers: ["à"],
        translation: { TR: "Araba sürmeyi öğreniyorum.", EN: "I'm learning to drive." },
      },
      {
        type: "fill",
        id: "verbs-infinitive-prepositions-2",
        text: "Elle a décidé ___ partir.",
        answers: ["de"],
        translation: { TR: "Gitmeye karar verdi.", EN: "She decided to leave." },
      },
      {
        type: "build",
        id: "verbs-infinitive-prepositions-3",
        tokens: ["Tu", "essaies", "de", "dormir"],
        translation: { TR: "Uyumaya çalışıyorsun.", EN: "You are trying to sleep." },
      },
      {
        type: "free",
        id: "verbs-infinitive-prepositions-4",
        prompt: { TR: "Fransızca yaz: “Sigarayı bıraktım.”", EN: "Write in French: “I stopped smoking.”" },
        answers: ["J'ai arrêté de fumer."],
      },
      {
        type: "free",
        id: "verbs-infinitive-prepositions-5",
        prompt: { TR: "Fransızca yaz: “Kapıyı kapatmayı unuttum.”", EN: "Write in French: “I forgot to close the door.”" },
        answers: ["J'ai oublié de fermer la porte."],
      },
    ],
  },
];
