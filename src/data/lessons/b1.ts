/**
 * B1 grammar lessons, in teaching order. See ../lessons.ts for the rules
 * every lesson follows.
 */

import type { GrammarLesson } from "../../domain/types";

export const B1_LESSONS: readonly GrammarLesson[] = [
  {
    id: "plus-que-parfait",
    level: "B1",
    title: { TR: "Geçmişin geçmişi (plus-que-parfait)", EN: "The past perfect (plus-que-parfait)" },
    content: [
      {
        TR: "Yapısı: avoir ya da être'nin imparfait'si + geçmiş zaman ortacı (participe passé). Yardımcı fiil seçimi ve uyum passé composé ile aynıdır.\nj'avais mangé · tu avais fini · il avait vu\nnous étions partis · vous étiez venus · elles étaient arrivées",
        EN: "Form: the imparfait of avoir or être + the past participle. The choice of auxiliary and the agreement are the same as in the passé composé.\nj'avais mangé · tu avais fini · il avait vu\nnous étions partis · vous étiez venus · elles étaient arrivées",
      },
      {
        TR: "Geçmişteki bir olaydan DAHA ÖNCE olanı anlatır. Türkçedeki “-mıştı” gibi: Quand je suis arrivé, le film avait commencé = Vardığımda film başlamıştı.",
        EN: "It tells what happened BEFORE another past event, like English “had done”: Quand je suis arrivé, le film avait commencé = When I arrived, the film had started.",
      },
      {
        TR: "Sık kullanım: bir durumu açıklamak (parce que ile) ve déjà ile. Il était fatigué parce qu'il n'avait pas dormi. Olumsuzda ne ... pas yardımcı fiili sarar.",
        EN: "Common uses: explaining a situation (with parce que) and with déjà. Il était fatigué parce qu'il n'avait pas dormi. In the negative, ne ... pas wraps the auxiliary.",
      },
    ],
    examples: [
      {
        fr: "Quand nous sommes arrivés, le train était déjà parti.",
        translation: { TR: "Vardığımızda tren çoktan kalkmıştı.", EN: "When we arrived, the train had already left." },
      },
      {
        fr: "J'ai perdu le livre que tu m'avais donné.",
        translation: { TR: "Bana vermiş olduğun kitabı kaybettim.", EN: "I lost the book you had given me." },
      },
      {
        fr: "Elle était contente parce qu'elle avait réussi son examen.",
        translation: { TR: "Sınavını geçmiş olduğu için mutluydu.", EN: "She was happy because she had passed her exam." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "plus-que-parfait-1",
        text: "Quand je suis arrivé, ils ___ déjà mangé.",
        answers: ["avaient"],
        translation: { TR: "Vardığımda onlar çoktan yemişti.", EN: "When I arrived, they had already eaten." },
      },
      {
        type: "fill",
        id: "plus-que-parfait-2",
        text: "Elle était fatiguée parce qu'elle n'___ pas dormi.",
        answers: ["avait"],
        translation: { TR: "Uyumamış olduğu için yorgundu.", EN: "She was tired because she hadn't slept." },
      },
      {
        type: "fill",
        id: "plus-que-parfait-3",
        text: "Nous ___ partis avant la pluie.",
        answers: ["étions"],
        translation: { TR: "Yağmurdan önce çıkmıştık.", EN: "We had left before the rain." },
      },
      {
        type: "build",
        id: "plus-que-parfait-4",
        tokens: ["Le", "film", "avait", "déjà", "commencé"],
        translation: { TR: "Film çoktan başlamıştı.", EN: "The film had already started." },
      },
      {
        type: "free",
        id: "plus-que-parfait-5",
        prompt: { TR: "Fransızca yaz: “Kitabı çoktan okumuştum.”", EN: "Write in French: “I had already read the book.”" },
        answers: ["J'avais déjà lu le livre.", "Je l'avais déjà lu."],
      },
      {
        type: "free",
        id: "plus-que-parfait-6",
        prompt: { TR: "Fransızca yaz: “Vardığımda o (kadın) gitmişti.”", EN: "Write in French: “When I arrived, she had left.”" },
        answers: [
          "Quand je suis arrivé, elle était partie.",
          "Quand je suis arrivée, elle était partie.",
          "Quand je suis arrivé elle était partie.",
          "Quand je suis arrivée elle était partie.",
          "Quand je suis arrivé, elle était déjà partie.",
          "Quand je suis arrivée, elle était déjà partie.",
          "Elle était partie quand je suis arrivé.",
          "Elle était partie quand je suis arrivée.",
          "Elle était déjà partie quand je suis arrivé.",
          "Elle était déjà partie quand je suis arrivée.",
        ],
      },
    ],
  },
  {
    id: "conditionnel-uses",
    level: "B1",
    title: { TR: "Şart kipinin kullanımları (conditionnel)", EN: "Uses of the conditional" },
    content: [
      {
        TR: "Hatırlatma: futur kökü + imparfait ekleri.\nje voudrais · tu devrais · il pourrait\nnous aimerions · vous feriez · ils seraient",
        EN: "Reminder: future stem + imparfait endings.\nje voudrais · tu devrais · il pourrait\nnous aimerions · vous feriez · ils seraient",
      },
      {
        TR: "Öğüt ve istek: Tu devrais dormir plus (daha çok uyumalısın). À ta place, je partirais (yerinde olsam giderdim). J'aimerais voyager (seyahat etmek isterdim).",
        EN: "Advice and wishes: Tu devrais dormir plus (you should sleep more). À ta place, je partirais (in your place, I would leave). J'aimerais voyager (I would like to travel).",
      },
      {
        TR: "Doğrulanmamış bilgi (haberlerde): Selon la radio, il y aurait un accident. Türkçedeki duyulan geçmiş “-mış” gibi: “bir kaza olmuş”.",
        EN: "Unconfirmed information (in the news): Selon la radio, il y aurait un accident = According to the radio, there has apparently been an accident.",
      },
      {
        TR: "Geçmişten bakınca gelecek: ana fiil geçmişteyse “-acağını” conditionnel ile söylenir. Il a dit qu'il viendrait = Geleceğini söyledi.",
        EN: "The future seen from the past: after a past main verb, “would” is the conditional. Il a dit qu'il viendrait = He said he would come.",
      },
    ],
    examples: [
      {
        fr: "Tu devrais parler à ton professeur.",
        translation: { TR: "Öğretmeninle konuşmalısın.", EN: "You should talk to your teacher." },
      },
      {
        fr: "J'aimerais habiter au bord de la mer.",
        translation: { TR: "Deniz kenarında oturmak isterdim.", EN: "I would like to live by the sea." },
      },
      {
        fr: "Elle m'a dit qu'elle arriverait à huit heures.",
        translation: { TR: "Bana saat sekizde varacağını söyledi.", EN: "She told me she would arrive at eight." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "conditionnel-uses-1",
        text: "À ta place, je ___ un taxi. (prendre)",
        answers: ["prendrais"],
        translation: { TR: "Yerinde olsam taksiye binerdim.", EN: "In your place, I would take a taxi." },
      },
      {
        type: "fill",
        id: "conditionnel-uses-2",
        text: "Il m'a promis qu'il ___ demain. (venir)",
        answers: ["viendrait"],
        translation: { TR: "Bana yarın geleceğine söz verdi.", EN: "He promised me he would come tomorrow." },
      },
      {
        type: "fill",
        id: "conditionnel-uses-3",
        text: "Selon le journal, le ministre ___ démissionner. (vouloir)",
        answers: ["voudrait"],
        translation: { TR: "Gazeteye göre bakan istifa etmek istiyormuş.", EN: "According to the paper, the minister apparently wants to resign." },
      },
      {
        type: "build",
        id: "conditionnel-uses-4",
        tokens: ["Tu", "devrais", "dormir", "plus"],
        translation: { TR: "Daha çok uyumalısın.", EN: "You should sleep more." },
      },
      {
        type: "free",
        id: "conditionnel-uses-5",
        prompt: { TR: "Fransızca yaz: “Japonya'ya gitmek isterdim.”", EN: "Write in French: “I would like to go to Japan.”" },
        answers: [
          "J'aimerais aller au Japon.",
          "Je voudrais aller au Japon.",
          "J'aimerais bien aller au Japon.",
          "Je voudrais bien aller au Japon.",
        ],
      },
      {
        type: "free",
        id: "conditionnel-uses-6",
        prompt: { TR: "Fransızca yaz: “(O erkek) bize yazacağını söyledi.”", EN: "Write in French: “He said he would write to us.”" },
        answers: ["Il a dit qu'il nous écrirait.", "Il nous a dit qu'il nous écrirait."],
      },
    ],
  },
  {
    id: "si-present",
    level: "B1",
    title: { TR: "Gerçek koşul: si + présent", EN: "Real condition: si + present" },
    content: [
      {
        TR: "Olası, gerçek bir koşul için: si + présent. Ana cümlede üç seçenek var:\nprésent (genel doğru): Si on chauffe la glace, elle fond.\nfutur (tahmin): S'il pleut, nous resterons à la maison.\nimpératif (öğüt, emir): Si tu es fatigué, repose-toi.",
        EN: "For a possible, real condition: si + present. The main clause has three options:\npresent (general truth): Si on chauffe la glace, elle fond.\nfuture (prediction): S'il pleut, nous resterons à la maison.\nimperative (advice, order): Si tu es fatigué, repose-toi.",
      },
      {
        TR: "si'den sonra ASLA futur gelmez. Türkçede de “yarın yağmur yağarsa” deriz, gelecek eki koymayız; Fransızca da öyle: S'il pleut demain (S'il pleuvra değil).",
        EN: "Never use the future after si. Like English “if it rains tomorrow” (not “if it will rain”): S'il pleut demain, not S'il pleuvra.",
      },
      {
        TR: "Yazım: si + il → s'il, si + ils → s'ils. Ama si elle, si on kısalmaz.",
        EN: "Spelling: si + il → s'il, si + ils → s'ils. But si elle and si on do not shorten.",
      },
    ],
    examples: [
      {
        fr: "Si tu veux, on peut manger ensemble.",
        translation: { TR: "İstersen birlikte yemek yiyebiliriz.", EN: "If you want, we can eat together." },
      },
      {
        fr: "S'il fait beau samedi, nous irons à la plage.",
        translation: { TR: "Cumartesi hava güzel olursa plaja gideceğiz.", EN: "If the weather is nice on Saturday, we will go to the beach." },
      },
      {
        fr: "Si vous avez une question, levez la main.",
        translation: { TR: "Sorunuz varsa elinizi kaldırın.", EN: "If you have a question, raise your hand." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "si-present-1",
        text: "S'il ___ beau demain, on ira à la plage. (faire)",
        answers: ["fait"],
        translation: { TR: "Yarın hava güzel olursa plaja gideriz.", EN: "If the weather is nice tomorrow, we'll go to the beach." },
      },
      {
        type: "fill",
        id: "si-present-2",
        text: "Si tu as faim, ___ un sandwich ! (prendre)",
        answers: ["prends"],
        translation: { TR: "Acıktıysan bir sandviç al!", EN: "If you're hungry, have a sandwich!" },
      },
      {
        type: "fill",
        id: "si-present-3",
        text: "Si vous travaillez bien, vous ___ votre examen. (réussir, futur)",
        answers: ["réussirez"],
        translation: { TR: "İyi çalışırsanız sınavınızı geçeceksiniz.", EN: "If you work well, you will pass your exam." },
      },
      {
        type: "build",
        id: "si-present-4",
        tokens: ["S'il", "pleut,", "nous", "resterons", "ici"],
        translation: { TR: "Yağmur yağarsa burada kalacağız.", EN: "If it rains, we will stay here." },
      },
      {
        type: "free",
        id: "si-present-5",
        prompt: { TR: "Fransızca yaz: “Yarın vaktim olursa seni ararım.”", EN: "Write in French: “If I have time tomorrow, I'll call you.”" },
        answers: [
          "Si j'ai le temps demain, je t'appellerai.",
          "Si j'ai le temps demain je t'appellerai.",
          "Si j'ai du temps demain, je t'appellerai.",
          "Si j'ai le temps demain, je vais t'appeler.",
          "Si j'ai le temps demain, je t'appelle.",
          "Si j'ai le temps, je t'appellerai demain.",
          "Je t'appellerai demain si j'ai le temps.",
          "Je t'appellerai si j'ai le temps demain.",
          "Si j'ai le temps demain, je vous appellerai.",
          "Je vous appellerai demain si j'ai le temps.",
        ],
      },
    ],
  },
  {
    id: "si-imparfait",
    level: "B1",
    title: { TR: "Hayalî koşul: si + imparfait", EN: "Imaginary condition: si + imparfait" },
    content: [
      {
        TR: "Şu an gerçek olmayan ya da pek olası olmayan bir durum için: si + imparfait → conditionnel présent.\nSi j'avais de l'argent, j'achèterais une maison = Param olsa (olsaydı) bir ev alırdım.",
        EN: "For something unreal now or unlikely: si + imparfait → present conditional.\nSi j'avais de l'argent, j'achèterais une maison = If I had money, I would buy a house.",
      },
      {
        TR: "En sık hata: si'den sonra conditionnel. “Si j'aurais” YANLIŞ, Si j'avais doğru. Kısa kural: si'nin yanında -rais olmaz.",
        EN: "The most common mistake: a conditional after si. “Si j'aurais” is WRONG, Si j'avais is right. Short rule: no -rais next to si.",
      },
      {
        TR: "Tek başına Et si + imparfait bir öneridir: Et si on allait au cinéma ? = Ya sinemaya gitsek? Öğüt kalıbı: Si j'étais toi / À ta place, ...",
        EN: "On its own, Et si + imparfait is a suggestion: Et si on allait au cinéma ? = How about going to the cinema? For advice: Si j'étais toi / À ta place, ...",
      },
    ],
    examples: [
      {
        fr: "Si j'étais riche, je ferais le tour du monde.",
        translation: { TR: "Zengin olsam dünyayı dolaşırdım.", EN: "If I were rich, I would travel around the world." },
      },
      {
        fr: "Si tu habitais plus près, on se verrait plus souvent.",
        translation: { TR: "Daha yakında otursan daha sık görüşürdük.", EN: "If you lived closer, we would see each other more often." },
      },
      {
        fr: "Et si on partait ce week-end ?",
        translation: { TR: "Ya bu hafta sonu bir yere gitsek?", EN: "How about going away this weekend?" },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "si-imparfait-1",
        text: "Si j'___ riche, je voyagerais partout. (être)",
        answers: ["étais"],
        translation: { TR: "Zengin olsam her yere seyahat ederdim.", EN: "If I were rich, I would travel everywhere." },
      },
      {
        type: "fill",
        id: "si-imparfait-2",
        text: "Si nous avions une voiture, nous ___ à la montagne. (aller)",
        answers: ["irions"],
        translation: { TR: "Arabamız olsa dağa giderdik.", EN: "If we had a car, we would go to the mountains." },
      },
      {
        type: "fill",
        id: "si-imparfait-3",
        text: "Et si on ___ au restaurant ce soir ? (aller)",
        answers: ["allait"],
        translation: { TR: "Ya bu akşam restorana gitsek?", EN: "How about going to a restaurant tonight?" },
      },
      {
        type: "build",
        id: "si-imparfait-4",
        tokens: ["Si", "j'avais", "le", "temps,", "je", "lirais", "plus"],
        translation: { TR: "Vaktim olsa daha çok okurdum.", EN: "If I had time, I would read more." },
      },
      {
        type: "free",
        id: "si-imparfait-5",
        prompt: { TR: "Fransızca yaz: “Yerinde olsam ona söylerdim.”", EN: "Write in French: “If I were you, I would tell him.”" },
        answers: [
          "Si j'étais toi, je lui dirais.",
          "Si j'étais toi je lui dirais.",
          "Si j'étais à ta place, je lui dirais.",
          "À ta place, je lui dirais.",
          "Si j'étais vous, je lui dirais.",
          "Si j'étais à votre place, je lui dirais.",
          "À votre place, je lui dirais.",
          "Si j'étais toi, je le lui dirais.",
          "À ta place, je le lui dirais.",
        ],
      },
      {
        type: "free",
        id: "si-imparfait-6",
        prompt: { TR: "Fransızca yaz: “Fransızcayı iyi konuşsam Fransa'da çalışırdım.”", EN: "Write in French: “If I spoke French well, I would work in France.”" },
        answers: [
          "Si je parlais bien français, je travaillerais en France.",
          "Si je parlais bien français je travaillerais en France.",
          "Si je parlais bien le français, je travaillerais en France.",
          "Je travaillerais en France si je parlais bien français.",
          "Je travaillerais en France si je parlais bien le français.",
        ],
      },
    ],
  },
  {
    id: "si-plus-que-parfait",
    level: "B1",
    title: { TR: "Gerçekleşmemiş koşul ve conditionnel passé", EN: "Unreal past condition and the past conditional" },
    content: [
      {
        TR: "Conditionnel passé: avoir ya da être'nin conditionnel'i + participe passé.\nj'aurais aimé · tu aurais pu · il serait venu\nnous aurions dû · vous seriez partis · ils auraient su",
        EN: "Past conditional: the conditional of avoir or être + the past participle.\nj'aurais aimé · tu aurais pu · il serait venu\nnous aurions dû · vous seriez partis · ils auraient su",
      },
      {
        TR: "Pişmanlık ve sitem: J'aurais dû étudier = Çalışmalıydım. Tu aurais pu m'appeler ! = Beni arayabilirdin!",
        EN: "Regret and reproach: J'aurais dû étudier = I should have studied. Tu aurais pu m'appeler ! = You could have called me!",
      },
      {
        TR: "Geçmişte gerçekleşmemiş bir koşul: si + plus-que-parfait → conditionnel passé.\nSi j'avais su, je ne serais pas venu = Bilseydim gelmezdim.",
        EN: "A condition that did not happen in the past: si + plus-que-parfait → past conditional.\nSi j'avais su, je ne serais pas venu = If I had known, I wouldn't have come.",
      },
      {
        TR: "Sonuç ŞİMDİ ise ana cümle conditionnel présent olur: Si j'avais dormi, je ne serais pas fatigué maintenant.",
        EN: "If the result is NOW, the main clause takes the present conditional: Si j'avais dormi, je ne serais pas fatigué maintenant.",
      },
    ],
    examples: [
      {
        fr: "Si tu étais venu, tu aurais rencontré Marie.",
        translation: { TR: "Gelseydin Marie'yle tanışırdın.", EN: "If you had come, you would have met Marie." },
      },
      {
        fr: "J'aurais dû prendre un parapluie.",
        translation: { TR: "Şemsiye almalıydım.", EN: "I should have taken an umbrella." },
      },
      {
        fr: "Si nous avions écouté le guide, nous ne serions pas perdus.",
        translation: { TR: "Rehberi dinleseydik şimdi kaybolmuş olmazdık.", EN: "If we had listened to the guide, we wouldn't be lost." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "si-plus-que-parfait-1",
        text: "Si tu m'avais appelé, je ___ venu. (être)",
        answers: ["serais"],
        translation: { TR: "Beni arasaydın gelirdim.", EN: "If you had called me, I would have come." },
      },
      {
        type: "fill",
        id: "si-plus-que-parfait-2",
        text: "Si nous ___ partis plus tôt, nous n'aurions pas raté le train.",
        answers: ["étions"],
        translation: { TR: "Daha erken çıksaydık treni kaçırmazdık.", EN: "If we had left earlier, we wouldn't have missed the train." },
      },
      {
        type: "fill",
        id: "si-plus-que-parfait-3",
        text: "J'___ dû t'écouter.",
        answers: ["aurais"],
        translation: { TR: "Seni dinlemeliydim.", EN: "I should have listened to you." },
      },
      {
        type: "build",
        id: "si-plus-que-parfait-4",
        tokens: ["Si", "j'avais", "su,", "je", "serais", "resté"],
        translation: { TR: "Bilseydim kalırdım.", EN: "If I had known, I would have stayed." },
      },
      {
        type: "free",
        id: "si-plus-que-parfait-5",
        prompt: { TR: "Fransızca yaz: “Bilseydim sana yardım ederdim.”", EN: "Write in French: “If I had known, I would have helped you.”" },
        answers: [
          "Si j'avais su, je t'aurais aidé.",
          "Si j'avais su, je t'aurais aidée.",
          "Si j'avais su je t'aurais aidé.",
          "Si j'avais su je t'aurais aidée.",
          "Si j'avais su, je vous aurais aidé.",
          "Si j'avais su, je vous aurais aidée.",
          "Si j'avais su, je vous aurais aidés.",
          "Je t'aurais aidé si j'avais su.",
          "Je t'aurais aidée si j'avais su.",
          "Je vous aurais aidé si j'avais su.",
        ],
      },
      {
        type: "free",
        id: "si-plus-que-parfait-6",
        prompt: { TR: "Fransızca yaz: “Beni arayabilirdin!”", EN: "Write in French: “You could have called me!”" },
        answers: [
          "Tu aurais pu m'appeler !",
          "Vous auriez pu m'appeler !",
          "Tu aurais pu me téléphoner !",
          "Vous auriez pu me téléphoner !",
        ],
      },
    ],
  },
  {
    id: "futur-anterieur",
    level: "B1",
    title: { TR: "Önceki gelecek (futur antérieur)", EN: "The future perfect (futur antérieur)" },
    content: [
      {
        TR: "Yapısı: avoir ya da être'nin futur'ü + participe passé.\nj'aurai fini · tu auras mangé · il sera parti\nnous aurons vu · vous serez rentrés · elles seront arrivées",
        EN: "Form: the future of avoir or être + the past participle.\nj'aurai fini · tu auras mangé · il sera parti\nnous aurons vu · vous serez rentrés · elles seront arrivées",
      },
      {
        TR: "Gelecekteki bir olaydan önce bitmiş olacak eylemi anlatır: Quand j'aurai fini mes devoirs, je sortirai = Ödevlerimi bitirince çıkacağım. Türkçe “bitirince” zamanı göstermez; Fransızca gösterir: gelecekten söz ederken quand'dan sonra présent kullanılmaz.",
        EN: "It describes an action that will be finished before another future event: Quand j'aurai fini mes devoirs, je sortirai = When I have finished my homework, I will go out. When talking about the future, French never puts the present after quand.",
      },
      {
        TR: "Gelecekteki bir ana kadar bitmiş olacak iş: Demain à midi, j'aurai terminé = Yarın öğlene kadar bitirmiş olacağım.\nDikkat: j'aurai (futur) ile j'aurais (conditionnel) neredeyse aynı okunur, yazımı farklıdır.",
        EN: "Something finished by a future point: Demain à midi, j'aurai terminé = By noon tomorrow, I will have finished.\nCareful: j'aurai (future) and j'aurais (conditional) sound almost the same but are spelled differently.",
      },
    ],
    examples: [
      {
        fr: "Quand tu auras lu ce livre, tu comprendras.",
        translation: { TR: "Bu kitabı okuyunca anlayacaksın.", EN: "When you have read this book, you will understand." },
      },
      {
        fr: "Nous partirons quand les enfants se seront couchés.",
        translation: { TR: "Çocuklar yatınca çıkacağız.", EN: "We will leave when the children have gone to bed." },
      },
      {
        fr: "Dans un an, j'aurai fini mes études.",
        translation: { TR: "Bir yıl sonra okulumu bitirmiş olacağım.", EN: "In a year, I will have finished my studies." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "futur-anterieur-1",
        text: "Quand tu ___ fini, appelle-moi. (avoir)",
        answers: ["auras"],
        translation: { TR: "Bitirince beni ara.", EN: "When you have finished, call me." },
      },
      {
        type: "fill",
        id: "futur-anterieur-2",
        text: "Nous partirons quand les invités ___ arrivés. (être)",
        answers: ["seront"],
        translation: { TR: "Misafirler gelince çıkacağız.", EN: "We will leave when the guests have arrived." },
      },
      {
        type: "fill",
        id: "futur-anterieur-3",
        text: "Demain à midi, j'___ terminé ce travail.",
        answers: ["aurai"],
        translation: { TR: "Yarın öğlene kadar bu işi bitirmiş olacağım.", EN: "By noon tomorrow, I will have finished this work." },
      },
      {
        type: "build",
        id: "futur-anterieur-4",
        tokens: ["Quand", "j'aurai", "mangé,", "je", "partirai"],
        translation: { TR: "Yemeği yiyince gideceğim.", EN: "When I have eaten, I will leave." },
      },
      {
        type: "free",
        id: "futur-anterieur-5",
        prompt: {
          TR: "Fransızca yaz: “Dönünce seni arayacağım.” (rentrer, appeler; futur antérieur kullan)",
          EN: "Write in French: “When I'm back, I'll call you.” (rentrer, appeler; use the futur antérieur)",
        },
        answers: [
          "Quand je serai rentré, je t'appellerai.",
          "Quand je serai rentrée, je t'appellerai.",
          "Quand je serai rentré je t'appellerai.",
          "Quand je serai rentrée je t'appellerai.",
          "Je t'appellerai quand je serai rentré.",
          "Je t'appellerai quand je serai rentrée.",
          "Quand je serai rentré, je vous appellerai.",
          "Quand je serai rentrée, je vous appellerai.",
        ],
      },
    ],
  },
  {
    id: "subjonctif-formation",
    level: "B1",
    title: { TR: "Dilek kipi: çekimi (subjonctif)", EN: "The subjunctive: formation" },
    content: [
      {
        TR: "Subjonctif bir zaman değil, bir kiptir: olguyu değil isteği, gerekliliği, duyguyu anlatır. Neredeyse hep que'den sonra gelir. Türkçedeki “gelmen gerek”, “gelsin diye” yapılarına benzer: Il faut que tu viennes.",
        EN: "The subjunctive is not a tense but a mood: it expresses wish, necessity or feeling rather than fact. It almost always follows que. Il faut que tu viennes = You must come.",
      },
      {
        TR: "Düzenli çekim: présent'ın ils biçimini al, -ent'i at, şu ekleri ekle: -e, -es, -e, -ions, -iez, -ent.\nils parlent → que je parle · ils finissent → que tu finisses\nnous ve vous nous kökünü alır: ils prennent → que je prenne, ama que nous prenions.",
        EN: "Regular formation: take the ils form of the present, drop -ent, add -e, -es, -e, -ions, -iez, -ent.\nils parlent → que je parle · ils finissent → que tu finisses\nnous and vous use the nous stem: ils prennent → que je prenne, but que nous prenions.",
      },
      {
        TR: "Düzensizler (ezberle):\nêtre: sois, sois, soit, soyons, soyez, soient\navoir: aie, aies, ait, ayons, ayez, aient\naller: aille, ailles, aille, allions, alliez, aillent\nfaire: fasse, fasses, fasse, fassions, fassiez, fassent",
        EN: "Irregulars (learn by heart):\nêtre: sois, sois, soit, soyons, soyez, soient\navoir: aie, aies, ait, ayons, ayez, aient\naller: aille, ailles, aille, allions, alliez, aillent\nfaire: fasse, fasses, fasse, fassions, fassiez, fassent",
      },
      {
        TR: "pouvoir: puisse, puisses, puisse, puissions, puissiez, puissent\nsavoir: sache, saches, sache, sachions, sachiez, sachent\nvouloir: veuille, veuilles, veuille, voulions, vouliez, veuillent",
        EN: "pouvoir: puisse, puisses, puisse, puissions, puissiez, puissent\nsavoir: sache, saches, sache, sachions, sachiez, sachent\nvouloir: veuille, veuilles, veuille, voulions, vouliez, veuillent",
      },
    ],
    examples: [
      {
        fr: "Il faut que je parte maintenant.",
        translation: { TR: "Şimdi gitmem gerek.", EN: "I have to leave now." },
      },
      {
        fr: "Il faut que vous soyez à l'heure.",
        translation: { TR: "Zamanında gelmeniz gerek.", EN: "You must be on time." },
      },
      {
        fr: "Il faut qu'ils fassent attention.",
        translation: { TR: "Dikkat etmeleri gerek.", EN: "They need to be careful." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "subjonctif-formation-1",
        text: "Il faut que tu ___ ce soir. (finir)",
        answers: ["finisses"],
        translation: { TR: "Bu akşam bitirmen gerek.", EN: "You have to finish tonight." },
      },
      {
        type: "fill",
        id: "subjonctif-formation-2",
        text: "Il faut que nous ___ patients. (être)",
        answers: ["soyons"],
        translation: { TR: "Sabırlı olmamız gerek.", EN: "We need to be patient." },
      },
      {
        type: "fill",
        id: "subjonctif-formation-3",
        text: "Il faut qu'elle ___ ses devoirs. (faire)",
        answers: ["fasse"],
        translation: { TR: "Ödevlerini yapması gerek.", EN: "She has to do her homework." },
      },
      {
        type: "fill",
        id: "subjonctif-formation-4",
        text: "Il faut que vous ___ la vérité. (savoir)",
        answers: ["sachiez"],
        translation: { TR: "Gerçeği bilmeniz gerek.", EN: "You need to know the truth." },
      },
      {
        type: "build",
        id: "subjonctif-formation-5",
        tokens: ["Il", "faut", "que", "j'aille", "à", "la", "banque"],
        translation: { TR: "Bankaya gitmem gerek.", EN: "I have to go to the bank." },
      },
      {
        type: "free",
        id: "subjonctif-formation-6",
        prompt: { TR: "Fransızca yaz: “Sabırlı olman gerek.” (il faut que)", EN: "Write in French: “You need to be patient.” (il faut que)" },
        answers: [
          "Il faut que tu sois patient.",
          "Il faut que tu sois patiente.",
          "Il faut que vous soyez patient.",
          "Il faut que vous soyez patiente.",
          "Il faut que vous soyez patients.",
          "Il faut que vous soyez patientes.",
        ],
      },
    ],
  },
  {
    id: "subjonctif-necessity-will",
    level: "B1",
    title: { TR: "Subjonctif: gereklilik ve istek", EN: "Subjunctive: necessity and will" },
    content: [
      {
        TR: "Gereklilik: il faut que, il est nécessaire que, il est important que + subjonctif.\nKarşılaştır: Il faut dormir (genel olarak: uyumak gerek) ↔ Il faut que tu dormes (belirli biri: senin uyuman gerek).",
        EN: "Necessity: il faut que, il est nécessaire que, il est important que + subjunctive.\nCompare: Il faut dormir (in general: one must sleep) ↔ Il faut que tu dormes (a specific person: you must sleep).",
      },
      {
        TR: "İstek ve emir: vouloir que, souhaiter que, aimer que, préférer que, demander que, exiger que + subjonctif. Je veux que tu viennes = Gelmeni istiyorum.",
        EN: "Will and requests: vouloir que, souhaiter que, aimer que, préférer que, demander que, exiger que + subjunctive. Je veux que tu viennes = I want you to come.",
      },
      {
        TR: "Özne aynıysa que yok, mastar var: Je veux partir (Je veux que je parte DEĞİL). Türkçede de “gitmek istiyorum” ↔ “gitmeni istiyorum” farkı var.\nİstisna: espérer que + indicatif: J'espère que tu vas bien.",
        EN: "Same subject → no que, use the infinitive: Je veux partir (NOT Je veux que je parte).\nException: espérer que takes the indicative: J'espère que tu vas bien.",
      },
    ],
    examples: [
      {
        fr: "Il est important que tu dormes bien avant l'examen.",
        translation: { TR: "Sınavdan önce iyi uyuman önemli.", EN: "It's important that you sleep well before the exam." },
      },
      {
        fr: "Mes parents veulent que je devienne médecin.",
        translation: { TR: "Ailem doktor olmamı istiyor.", EN: "My parents want me to become a doctor." },
      },
      {
        fr: "Je souhaite que vous passiez de bonnes vacances.",
        translation: { TR: "İyi tatiller geçirmenizi dilerim.", EN: "I hope you have a good holiday." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "subjonctif-necessity-will-1",
        text: "Je veux que tu ___ avec nous. (venir)",
        answers: ["viennes"],
        translation: { TR: "Bizimle gelmeni istiyorum.", EN: "I want you to come with us." },
      },
      {
        type: "fill",
        id: "subjonctif-necessity-will-2",
        text: "Ma mère souhaite que nous ___ heureux. (être)",
        answers: ["soyons"],
        translation: { TR: "Annem mutlu olmamızı diliyor.", EN: "My mother wishes us to be happy." },
      },
      {
        type: "fill",
        id: "subjonctif-necessity-will-3",
        text: "Le professeur demande que les élèves ___ leur téléphone. (éteindre)",
        answers: ["éteignent"],
        translation: { TR: "Öğretmen öğrencilerin telefonlarını kapatmasını istiyor.", EN: "The teacher asks the pupils to switch off their phones." },
      },
      {
        type: "fill",
        id: "subjonctif-necessity-will-4",
        text: "J'espère que tu ___ bien. (aller)",
        answers: ["vas"],
        translation: { TR: "Umarım iyisindir.", EN: "I hope you are well." },
      },
      {
        type: "build",
        id: "subjonctif-necessity-will-5",
        tokens: ["Je", "voudrais", "que", "vous", "m'aidiez"],
        translation: { TR: "Bana yardım etmenizi isterim.", EN: "I would like you to help me." },
      },
      {
        type: "free",
        id: "subjonctif-necessity-will-6",
        prompt: { TR: "Fransızca yaz: “Erken gelmeni istiyorum.” (vouloir que)", EN: "Write in French: “I want you to come early.” (vouloir que)" },
        answers: [
          "Je veux que tu viennes tôt.",
          "Je veux que vous veniez tôt.",
          "Je voudrais que tu viennes tôt.",
          "Je voudrais que vous veniez tôt.",
          "Je veux que tu arrives tôt.",
          "Je veux que vous arriviez tôt.",
          "Je voudrais que tu arrives tôt.",
          "Je voudrais que vous arriviez tôt.",
          "Je veux que tu viennes en avance.",
          "Je veux que vous veniez en avance.",
        ],
      },
    ],
  },
  {
    id: "subjonctif-feelings-doubt",
    level: "B1",
    title: { TR: "Subjonctif: duygu, şüphe ve görüş", EN: "Subjunctive: feelings, doubt and opinion" },
    content: [
      {
        TR: "Duygu: être content / heureux / triste / désolé que, avoir peur que, regretter que, c'est dommage que + subjonctif.\nJe suis content que tu sois là = Burada olmana sevindim.",
        EN: "Feelings: être content / heureux / triste / désolé que, avoir peur que, regretter que, c'est dommage que + subjunctive.\nJe suis content que tu sois là = I'm glad you're here.",
      },
      {
        TR: "Şüphe ve olasılık: douter que, ne pas être sûr que, il est possible que + subjonctif. Je doute qu'il vienne.",
        EN: "Doubt and possibility: douter que, ne pas être sûr que, il est possible que + subjunctive. Je doute qu'il vienne.",
      },
      {
        TR: "Görüş: penser que, croire que, être sûr que OLUMLUYKEN indicatif alır, çünkü bir olgu gibi sunarsın. Olumsuzda (ya da devrik soruda) subjonctif alır:\nJe pense qu'il a raison ↔ Je ne pense pas qu'il ait raison.",
        EN: "Opinion: penser que, croire que, être sûr que take the indicative when AFFIRMATIVE, because you present a fact. In the negative (or an inverted question) they take the subjunctive:\nJe pense qu'il a raison ↔ Je ne pense pas qu'il ait raison.",
      },
      {
        TR: "Özne aynıysa de + mastar: Je suis content de te voir (Je suis content que je te voie DEĞİL).",
        EN: "Same subject → de + infinitive: Je suis content de te voir (NOT Je suis content que je te voie).",
      },
    ],
    examples: [
      {
        fr: "C'est dommage que tu ne puisses pas venir.",
        translation: { TR: "Gelemiyor olman yazık.", EN: "It's a pity you can't come." },
      },
      {
        fr: "J'ai peur qu'il soit trop tard.",
        translation: { TR: "Çok geç olmasından korkuyorum.", EN: "I'm afraid it's too late." },
      },
      {
        fr: "Je ne crois pas que ce soit vrai.",
        translation: { TR: "Bunun doğru olduğunu sanmıyorum.", EN: "I don't think it's true." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "subjonctif-feelings-doubt-1",
        text: "Je suis content que tu ___ là. (être)",
        answers: ["sois"],
        translation: { TR: "Burada olmana sevindim.", EN: "I'm glad you're here." },
      },
      {
        type: "fill",
        id: "subjonctif-feelings-doubt-2",
        text: "Je pense qu'il ___ raison. (avoir)",
        answers: ["a"],
        translation: { TR: "Bence o haklı.", EN: "I think he's right." },
      },
      {
        type: "fill",
        id: "subjonctif-feelings-doubt-3",
        text: "Je ne pense pas qu'il ___ raison. (avoir)",
        answers: ["ait"],
        translation: { TR: "Haklı olduğunu düşünmüyorum.", EN: "I don't think he's right." },
      },
      {
        type: "fill",
        id: "subjonctif-feelings-doubt-4",
        text: "Je doute qu'ils ___ venir. (pouvoir)",
        answers: ["puissent"],
        translation: { TR: "Gelebileceklerinden şüpheliyim.", EN: "I doubt they can come." },
      },
      {
        type: "build",
        id: "subjonctif-feelings-doubt-5",
        tokens: ["Je", "doute", "qu'il", "sache", "la", "réponse"],
        translation: { TR: "Cevabı bildiğinden şüpheliyim.", EN: "I doubt he knows the answer." },
      },
      {
        type: "free",
        id: "subjonctif-feelings-doubt-6",
        prompt: { TR: "Fransızca yaz: “Gitmene üzülüyorum.” (être triste que)", EN: "Write in French: “I'm sad that you're leaving.” (être triste que)" },
        answers: [
          "Je suis triste que tu partes.",
          "Je suis triste que vous partiez.",
        ],
      },
    ],
  },
  {
    id: "subjonctif-conjunctions",
    level: "B1",
    title: { TR: "Subjonctif isteyen bağlaçlar", EN: "Conjunctions that take the subjunctive" },
    content: [
      {
        TR: "Bu bağlaçlardan sonra subjonctif gelir:\npour que = -sın diye, -mesi için\navant que = -meden önce\nbien que = -mesine rağmen\nà condition que = -mek şartıyla\nsans que = -meden, -sızın",
        EN: "These conjunctions take the subjunctive:\npour que = so that\navant que = before\nbien que = although\nà condition que = provided that\nsans que = without",
      },
      {
        TR: "Bunlar ise indicatif alır, çünkü bir olguyu anlatırlar: parce que, pendant que, après que, depuis que. Dikkat: après que + indicatif (avant que'nin tersine).",
        EN: "These take the indicative, because they state a fact: parce que, pendant que, après que, depuis que. Careful: après que + indicative (unlike avant que).",
      },
      {
        TR: "Özne aynıysa que yerine edat + mastar: pour partir, avant de partir, sans parler, à condition de payer.\nJe travaille pour gagner ma vie ↔ Je travaille pour que mes enfants puissent étudier.",
        EN: "Same subject → preposition + infinitive instead of que: pour partir, avant de partir, sans parler, à condition de payer.\nJe travaille pour gagner ma vie ↔ Je travaille pour que mes enfants puissent étudier.",
      },
    ],
    examples: [
      {
        fr: "Je t'explique encore pour que tu comprennes.",
        translation: { TR: "Anlaman için tekrar açıklıyorum.", EN: "I'm explaining again so that you understand." },
      },
      {
        fr: "Bien qu'il soit malade, il est venu au travail.",
        translation: { TR: "Hasta olmasına rağmen işe geldi.", EN: "Although he is ill, he came to work." },
      },
      {
        fr: "Tu peux sortir à condition que tu rentres avant minuit.",
        translation: { TR: "Gece yarısından önce dönmen şartıyla çıkabilirsin.", EN: "You can go out provided that you're back before midnight." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "subjonctif-conjunctions-1",
        text: "Je t'explique pour que tu ___. (comprendre)",
        answers: ["comprennes"],
        translation: { TR: "Anlaman için açıklıyorum.", EN: "I'm explaining so that you understand." },
      },
      {
        type: "fill",
        id: "subjonctif-conjunctions-2",
        text: "Rentrons avant qu'il ___. (pleuvoir)",
        answers: ["pleuve"],
        translation: { TR: "Yağmur yağmadan dönelim.", EN: "Let's go home before it rains." },
      },
      {
        type: "fill",
        id: "subjonctif-conjunctions-3",
        text: "Bien qu'elle ___ fatiguée, elle travaille. (être)",
        answers: ["soit"],
        translation: { TR: "Yorgun olmasına rağmen çalışıyor.", EN: "Although she is tired, she is working." },
      },
      {
        type: "fill",
        id: "subjonctif-conjunctions-4",
        text: "Je fais la cuisine pendant que tu ___ la télé. (regarder)",
        answers: ["regardes"],
        translation: { TR: "Sen televizyon izlerken ben yemek yapıyorum.", EN: "I'm cooking while you watch TV." },
      },
      {
        type: "build",
        id: "subjonctif-conjunctions-5",
        tokens: ["Il", "est", "entré", "sans", "que", "je", "le", "voie"],
        translation: { TR: "Ben onu görmeden içeri girdi.", EN: "He came in without my seeing him." },
      },
      {
        type: "free",
        id: "subjonctif-conjunctions-6",
        prompt: { TR: "Fransızca yaz: “Yağmur yağmasına rağmen dışarı çıkıyoruz.” (bien que)", EN: "Write in French: “Although it's raining, we're going out.” (bien que)" },
        answers: [
          "Bien qu'il pleuve, nous sortons.",
          "Bien qu'il pleuve, on sort.",
          "Bien qu'il pleuve nous sortons.",
          "Bien qu'il pleuve on sort.",
          "Nous sortons bien qu'il pleuve.",
          "On sort bien qu'il pleuve.",
        ],
      },
    ],
  },
  {
    id: "relative-dont",
    level: "B1",
    title: { TR: "İlgi zamiri dont", EN: "The relative pronoun dont" },
    content: [
      {
        TR: "dont, ilgi cümlesinde “de + bir şey”in yerini tutar. de ile kullanılan fiiller: parler de, avoir besoin de, se souvenir de, rêver de, avoir peur de.\nLe livre dont je parle = Bahsettiğim kitap (je parle de ce livre).",
        EN: "dont replaces “de + something” in a relative clause. Verbs used with de: parler de, avoir besoin de, se souvenir de, rêver de, avoir peur de.\nLe livre dont je parle = The book I'm talking about (je parle de ce livre).",
      },
      {
        TR: "İsim ve sıfatlarla da: sahiplik (un ami dont le père est médecin = babası doktor olan bir arkadaş) ve de alan sıfatlar (être fier de → le fils dont je suis fier).",
        EN: "Also with nouns and adjectives: possession (un ami dont le père est médecin = a friend whose father is a doctor) and adjectives with de (être fier de → le fils dont je suis fier).",
      },
      {
        TR: "Seçim fiile bağlı: aimer qqch → que (le film que j'aime), parler de qqch → dont (le film dont je parle). Türkçede ikisi de “-diğim” olduğu için fiilin edatına bak.\ndont'tan sonra en tekrarlanmaz: le film dont je t'ai parlé (dont je t'en ai parlé DEĞİL).",
        EN: "The choice depends on the verb: aimer qqch → que (le film que j'aime), parler de qqch → dont (le film dont je parle).\nDo not repeat en after dont: le film dont je t'ai parlé (NOT dont je t'en ai parlé).",
      },
    ],
    examples: [
      {
        fr: "Voici le dictionnaire dont j'ai besoin.",
        translation: { TR: "İşte ihtiyacım olan sözlük.", EN: "Here is the dictionary I need." },
      },
      {
        fr: "C'est une ville dont je me souviens bien.",
        translation: { TR: "İyi hatırladığım bir şehir bu.", EN: "It's a city I remember well." },
      },
      {
        fr: "J'ai une voisine dont le fils est acteur.",
        translation: { TR: "Oğlu oyuncu olan bir komşum var.", EN: "I have a neighbour whose son is an actor." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "relative-dont-1",
        text: "C'est le film ___ je t'ai parlé.",
        answers: ["dont"],
        translation: { TR: "Sana bahsettiğim film bu.", EN: "That's the film I told you about." },
      },
      {
        type: "fill",
        id: "relative-dont-2",
        text: "Voici l'outil ___ tu as besoin.",
        answers: ["dont"],
        translation: { TR: "İşte ihtiyacın olan alet.", EN: "Here's the tool you need." },
      },
      {
        type: "fill",
        id: "relative-dont-3",
        text: "C'est la chanson ___ j'aime le plus.",
        answers: ["que"],
        translation: { TR: "En çok sevdiğim şarkı bu.", EN: "That's the song I like most." },
      },
      {
        type: "build",
        id: "relative-dont-4",
        tokens: ["J'ai", "un", "ami", "dont", "le", "père", "est", "pilote"],
        translation: { TR: "Babası pilot olan bir arkadaşım var.", EN: "I have a friend whose father is a pilot." },
      },
      {
        type: "free",
        id: "relative-dont-5",
        prompt: { TR: "Fransızca yaz: “Hayalini kurduğum ev bu.” (rêver de)", EN: "Write in French: “This is the house I dream of.” (rêver de)" },
        answers: [
          "C'est la maison dont je rêve.",
          "Voici la maison dont je rêve.",
          "C'est la maison dont j'ai rêvé.",
          "Voilà la maison dont je rêve.",
        ],
      },
    ],
  },
  {
    id: "relative-compound",
    level: "B1",
    title: { TR: "Edatlı ilgi zamirleri: lequel, auquel, duquel", EN: "Relatives after prepositions: lequel, auquel, duquel" },
    content: [
      {
        TR: "Edattan (avec, pour, sur, dans, sans, chez) sonra:\ninsan → qui: la personne avec qui je travaille\nnesne → lequel, isimle uyumlu: le stylo avec lequel j'écris, la table sur laquelle..., les amis pour lesquels..., les clés sans lesquelles...",
        EN: "After a preposition (avec, pour, sur, dans, sans, chez):\npeople → qui: la personne avec qui je travaille\nthings → lequel, agreeing with the noun: le stylo avec lequel j'écris, la table sur laquelle..., les amis pour lesquels..., les clés sans lesquelles...",
      },
      {
        TR: "à + lequel birleşir: auquel, à laquelle, auxquels, auxquelles (penser à, s'intéresser à, participer à).\nLe projet auquel je pense = Düşündüğüm proje.",
        EN: "à + lequel contracts: auquel, à laquelle, auxquels, auxquelles (penser à, s'intéresser à, participer à).\nLe projet auquel je pense = The project I'm thinking about.",
      },
      {
        TR: "de + lequel birleşir: duquel, de laquelle, desquels, desquelles. Tek başına de için dont kullanılır; duquel daha çok bileşik edatlardan sonra gelir: près duquel, à côté de laquelle, en face duquel.",
        EN: "de + lequel contracts: duquel, de laquelle, desquels, desquelles. For a plain de, use dont; duquel mostly follows compound prepositions: près duquel, à côté de laquelle, en face duquel.",
      },
      {
        TR: "Türkçede hepsi “-dığı” ile söylenir (üzerinde oturduğun sandalye); Fransızcada edat, ilgi zamirinin önüne gelir: la chaise sur laquelle tu es assis.",
        EN: "In English the preposition often goes to the end (the chair you're sitting on); in French it goes before the relative: la chaise sur laquelle tu es assis.",
      },
    ],
    examples: [
      {
        fr: "C'est la raison pour laquelle je suis parti.",
        translation: { TR: "Ayrılmamın nedeni bu.", EN: "That's the reason why I left." },
      },
      {
        fr: "Les sujets auxquels je m'intéresse sont variés.",
        translation: { TR: "İlgilendiğim konular çeşitli.", EN: "The subjects I'm interested in are varied." },
      },
      {
        fr: "La maison à côté de laquelle j'habite est à vendre.",
        translation: { TR: "Yanında oturduğum ev satılık.", EN: "The house next to which I live is for sale." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "relative-compound-1",
        text: "La chaise sur ___ tu es assis est cassée.",
        answers: ["laquelle"],
        translation: { TR: "Üzerinde oturduğun sandalye kırık.", EN: "The chair you're sitting on is broken." },
      },
      {
        type: "fill",
        id: "relative-compound-2",
        text: "Le collègue avec ___ je travaille est sympa.",
        answers: ["qui", "lequel"],
        translation: { TR: "Birlikte çalıştığım meslektaş hoş biri.", EN: "The colleague I work with is nice." },
      },
      {
        type: "fill",
        id: "relative-compound-3",
        text: "C'est un problème ___ je pense souvent.",
        answers: ["auquel"],
        translation: { TR: "Sık sık düşündüğüm bir sorun bu.", EN: "It's a problem I often think about." },
      },
      {
        type: "fill",
        id: "relative-compound-4",
        text: "Le parc près ___ j'habite est magnifique.",
        answers: ["duquel"],
        translation: { TR: "Yakınında oturduğum park harika.", EN: "The park near which I live is wonderful." },
      },
      {
        type: "build",
        id: "relative-compound-5",
        tokens: ["Voici", "le", "stylo", "avec", "lequel", "j'écris"],
        translation: { TR: "İşte yazdığım kalem.", EN: "Here is the pen I write with." },
      },
      {
        type: "free",
        id: "relative-compound-6",
        prompt: { TR: "Fransızca yaz: “Bu, için çalıştığım şirket.” (pour + lequel)", EN: "Write in French: “This is the company I work for.” (pour + lequel)" },
        answers: [
          "C'est l'entreprise pour laquelle je travaille.",
          "Voici l'entreprise pour laquelle je travaille.",
          "C'est la société pour laquelle je travaille.",
          "Voici la société pour laquelle je travaille.",
        ],
      },
    ],
  },
  {
    id: "ce-qui-ce-que-ce-dont",
    level: "B1",
    title: { TR: "Ce qui, ce que, ce dont", EN: "Ce qui, ce que, ce dont" },
    content: [
      {
        TR: "İlgi zamirinden önce bir isim yoksa (anlam: “… olan şey”) başına ce gelir:\nce qui → özne: Ce qui m'intéresse, c'est l'histoire.\nce que → nesne: Je ne comprends pas ce que tu dis.\nce dont → de alan fiil: Dis-moi ce dont tu as besoin.",
        EN: "When there is no noun before the relative (meaning “what / the thing that”), add ce:\nce qui → subject: Ce qui m'intéresse, c'est l'histoire.\nce que → object: Je ne comprends pas ce que tu dis.\nce dont → verb with de: Dis-moi ce dont tu as besoin.",
      },
      {
        TR: "Pratik test: arkasından hemen fiil geliyorsa ce qui; bir özne geliyorsa ce que; fiil de istiyorsa ce dont. Türkçede hepsi “-diğin şey / -en şey” olur.",
        EN: "Quick test: a verb comes right after → ce qui; a subject comes after → ce que; the verb needs de → ce dont.",
      },
      {
        TR: "tout ile sık kullanılır: tout ce que je sais (bildiğim her şey). Dolaylı sorularda da: Je ne sais pas ce qu'il veut.",
        EN: "Often with tout: tout ce que je sais (everything I know). Also in indirect questions: Je ne sais pas ce qu'il veut.",
      },
    ],
    examples: [
      {
        fr: "Ce qui est important, c'est la santé.",
        translation: { TR: "Önemli olan sağlık.", EN: "What matters is health." },
      },
      {
        fr: "Fais ce que tu veux.",
        translation: { TR: "Ne istiyorsan onu yap.", EN: "Do what you want." },
      },
      {
        fr: "Je ne sais pas ce dont il a peur.",
        translation: { TR: "Neden korktuğunu bilmiyorum.", EN: "I don't know what he's afraid of." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "ce-qui-ce-que-ce-dont-1",
        text: "___ me plaît ici, c'est le calme.",
        answers: ["Ce qui"],
        translation: { TR: "Burada hoşuma giden şey sessizlik.", EN: "What I like here is the quiet." },
      },
      {
        type: "fill",
        id: "ce-qui-ce-que-ce-dont-2",
        text: "Je ne comprends pas ___ tu dis.",
        answers: ["ce que"],
        translation: { TR: "Ne dediğini anlamıyorum.", EN: "I don't understand what you're saying." },
      },
      {
        type: "fill",
        id: "ce-qui-ce-que-ce-dont-3",
        text: "C'est exactement ___ j'ai besoin.",
        answers: ["ce dont"],
        translation: { TR: "Tam da ihtiyacım olan şey bu.", EN: "That's exactly what I need." },
      },
      {
        type: "fill",
        id: "ce-qui-ce-que-ce-dont-4",
        text: "Je ne sais pas ___ se passe.",
        answers: ["ce qui"],
        translation: { TR: "Ne olduğunu bilmiyorum.", EN: "I don't know what's going on." },
      },
      {
        type: "build",
        id: "ce-qui-ce-que-ce-dont-5",
        tokens: ["Raconte-moi", "tout", "ce", "que", "tu", "as", "vu"],
        translation: { TR: "Gördüğün her şeyi bana anlat.", EN: "Tell me everything you saw." },
      },
      {
        type: "free",
        id: "ce-qui-ce-que-ce-dont-6",
        prompt: { TR: "Fransızca yaz: “Söylediğin doğru değil.”", EN: "Write in French: “What you're saying isn't true.”" },
        answers: [
          "Ce que tu dis n'est pas vrai.",
          "Ce que vous dites n'est pas vrai.",
          "Ce que tu as dit n'est pas vrai.",
          "Ce que vous avez dit n'est pas vrai.",
          "Ce que tu dis est faux.",
          "Ce que vous dites est faux.",
        ],
      },
    ],
  },
  {
    id: "demonstrative-pronouns",
    level: "B1",
    title: { TR: "İşaret zamirleri: celui, celle, ceux, celles", EN: "Demonstrative pronouns: celui, celle, ceux, celles" },
    content: [
      {
        TR: "Bir ismi tekrarlamamak için: celui (eril tekil), celle (dişil tekil), ceux (eril çoğul), celles (dişil çoğul). Asla yalnız kullanılmaz; arkasından -ci / -là, qui / que / dont ya da de gelir.",
        EN: "To avoid repeating a noun: celui (masc. sing.), celle (fem. sing.), ceux (masc. pl.), celles (fem. pl.). Never used alone: they need -ci / -là, qui / que / dont, or de.",
      },
      {
        TR: "-ci / -là: “bu / şu”. Quelle robe ? Celle-ci ou celle-là ? = Hangi elbise? Bu mu şu mu?",
        EN: "-ci / -là: “this one / that one”. Quelle robe ? Celle-ci ou celle-là ? = Which dress? This one or that one?",
      },
      {
        TR: "+ qui / que / dont: Ce livre est celui que je préfère (tercih ettiğim). Ceux qui travaillent beaucoup... (çok çalışanlar).\n+ de: sahiplik, Türkçedeki “-ki” gibi: Ce n'est pas ma voiture, c'est celle de Paul = Paul'ünki.",
        EN: "+ qui / que / dont: Ce livre est celui que je préfère (the one I prefer). Ceux qui travaillent beaucoup... (those who work a lot).\n+ de: possession, like English “'s”: Ce n'est pas ma voiture, c'est celle de Paul = it's Paul's.",
      },
    ],
    examples: [
      {
        fr: "Ce gâteau-ci est meilleur que celui-là.",
        translation: { TR: "Bu pasta şundan daha iyi.", EN: "This cake is better than that one." },
      },
      {
        fr: "Ceux qui ont fini peuvent partir.",
        translation: { TR: "Bitirenler gidebilir.", EN: "Those who have finished can leave." },
      },
      {
        fr: "Ma chambre est plus petite que celle de mon frère.",
        translation: { TR: "Odam kardeşiminkinden daha küçük.", EN: "My room is smaller than my brother's." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "demonstrative-pronouns-1",
        text: "Ce n'est pas mon sac, c'est ___ de ma sœur.",
        answers: ["celui"],
        translation: { TR: "Bu benim çantam değil, kız kardeşiminki.", EN: "It's not my bag, it's my sister's." },
      },
      {
        type: "fill",
        id: "demonstrative-pronouns-2",
        text: "J'aime ces chaussures, mais je préfère ___-là.",
        answers: ["celles"],
        translation: { TR: "Bu ayakkabıları seviyorum ama şunları tercih ederim.", EN: "I like these shoes, but I prefer those." },
      },
      {
        type: "fill",
        id: "demonstrative-pronouns-3",
        text: "___ qui veulent partir peuvent partir.",
        answers: ["Ceux"],
        translation: { TR: "Gitmek isteyenler gidebilir.", EN: "Those who want to leave can leave." },
      },
      {
        type: "build",
        id: "demonstrative-pronouns-4",
        tokens: ["Cette", "chemise", "est", "plus", "belle", "que", "celle-ci"],
        translation: { TR: "Şu gömlek bundan daha güzel.", EN: "That shirt is nicer than this one." },
      },
      {
        type: "free",
        id: "demonstrative-pronouns-5",
        prompt: { TR: "Fransızca yaz: “Bu fotoğraflar Marie'ninkiler.” (celles de)", EN: "Write in French: “These photos are Marie's.” (celles de)" },
        answers: ["Ces photos sont celles de Marie.", "Ces photos, ce sont celles de Marie."],
      },
    ],
  },
  {
    id: "possessive-pronouns",
    level: "B1",
    title: { TR: "İyelik zamirleri: le mien, la tienne...", EN: "Possessive pronouns: le mien, la tienne..." },
    content: [
      {
        TR: "le mien = “benimki”. Sahibine değil, sahip olunan ŞEYE göre uyum yapar: ma voiture → la mienne, mes livres → les miens.",
        EN: "le mien = “mine”. It agrees with the THING owned, not with the owner: ma voiture → la mienne, mes livres → les miens.",
      },
      {
        TR: "je: le mien · la mienne · les miens · les miennes\ntu: le tien · la tienne · les tiens · les tiennes\nil/elle: le sien · la sienne · les siens · les siennes\nnous: le nôtre · la nôtre · les nôtres\nvous: le vôtre · la vôtre · les vôtres\nils/elles: le leur · la leur · les leurs",
        EN: "je: le mien · la mienne · les miens · les miennes\ntu: le tien · la tienne · les tiens · les tiennes\nil/elle: le sien · la sienne · les siens · les siennes\nnous: le nôtre · la nôtre · les nôtres\nvous: le vôtre · la vôtre · les vôtres\nils/elles: le leur · la leur · les leurs",
      },
      {
        TR: "Yazım: notre / votre (sıfat, şapkasız) ↔ le nôtre / le vôtre (zamir, şapkalı ve uzun o).\nà ve de ile birleşir: à + le mien → au mien, de + les miens → des miens.",
        EN: "Spelling: notre / votre (adjective, no accent) ↔ le nôtre / le vôtre (pronoun, circumflex and long o).\nThey contract with à and de: à + le mien → au mien, de + les miens → des miens.",
      },
    ],
    examples: [
      {
        fr: "Ton téléphone est plus récent que le mien.",
        translation: { TR: "Senin telefonun benimkinden daha yeni.", EN: "Your phone is newer than mine." },
      },
      {
        fr: "Ce ne sont pas nos valises, ce sont les leurs.",
        translation: { TR: "Bunlar bizim bavullarımız değil, onlarınki.", EN: "These aren't our suitcases, they're theirs." },
      },
      {
        fr: "J'ai oublié mon stylo, tu peux me prêter le tien ?",
        translation: { TR: "Kalemimi unuttum, bana seninkini ödünç verebilir misin?", EN: "I forgot my pen, can you lend me yours?" },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "possessive-pronouns-1",
        text: "Ta voiture est rouge, ___ est bleue. (à moi)",
        answers: ["la mienne"],
        translation: { TR: "Senin araban kırmızı, benimki mavi.", EN: "Your car is red, mine is blue." },
      },
      {
        type: "fill",
        id: "possessive-pronouns-2",
        text: "Ce ne sont pas tes clés, ce sont ___. (à moi)",
        answers: ["les miennes"],
        translation: { TR: "Bunlar senin anahtarların değil, benimkiler.", EN: "These aren't your keys, they're mine." },
      },
      {
        type: "fill",
        id: "possessive-pronouns-3",
        text: "Notre maison est petite, ___ est grande. (à vous)",
        answers: ["la vôtre"],
        translation: { TR: "Bizim evimiz küçük, sizinki büyük.", EN: "Our house is small, yours is big." },
      },
      {
        type: "fill",
        id: "possessive-pronouns-4",
        text: "Ils ont leurs idées et nous avons ___.",
        answers: ["les nôtres"],
        translation: { TR: "Onların fikirleri var, bizim de kendi fikirlerimiz var.", EN: "They have their ideas and we have ours." },
      },
      {
        type: "build",
        id: "possessive-pronouns-5",
        tokens: ["Ce", "stylo", "n'est", "pas", "le", "tien"],
        translation: { TR: "Bu kalem seninki değil.", EN: "This pen isn't yours." },
      },
      {
        type: "free",
        id: "possessive-pronouns-6",
        prompt: { TR: "Fransızca yaz: “Benim telefonum eski, seninki yeni.”", EN: "Write in French: “My phone is old, yours is new.”" },
        answers: [
          "Mon téléphone est vieux, le tien est neuf.",
          "Mon téléphone est vieux, mais le tien est neuf.",
          "Mon téléphone est vieux, le vôtre est neuf.",
          "Mon téléphone est vieux, mais le vôtre est neuf.",
          "Mon téléphone est vieux, le tien est nouveau.",
          "Mon téléphone est ancien, le tien est neuf.",
          "Mon téléphone est vieux et le tien est neuf.",
        ],
      },
    ],
  },
  {
    id: "double-pronouns",
    level: "B1",
    title: { TR: "Çift zamirler: me le, le lui, m'en, y en", EN: "Double pronouns: me le, le lui, m'en, y en" },
    content: [
      {
        TR: "İki nesne zamiri fiilden önce sabit bir sırayla dizilir:\nme / te / se / nous / vous → le / la / les → lui / leur → y → en\nIl me le donne. Je le lui donne. Je leur en parle. Il y en a.",
        EN: "Two object pronouns go before the verb in a fixed order:\nme / te / se / nous / vous → le / la / les → lui / leur → y → en\nIl me le donne. Je le lui donne. Je leur en parle. Il y en a.",
      },
      {
        TR: "Bileşik zamanlarda zamirler yardımcı fiilden önce gelir: Je le lui ai dit. Olumsuzda ne zamirlerden önce: Je ne le lui ai pas dit.",
        EN: "In compound tenses the pronouns go before the auxiliary: Je le lui ai dit. In the negative, ne comes before the pronouns: Je ne le lui ai pas dit.",
      },
      {
        TR: "Olumlu emir kipinde zamirler fiilden sonra, tire ile gelir; önce doğrudan nesne: Donne-le-moi ! Donne-la-lui !\nmoi / toi + en → m'en, t'en: Donne-m'en !\nOlumsuz emirde normal sıra döner: Ne me le donne pas.",
        EN: "In the affirmative imperative the pronouns follow the verb with hyphens, direct object first: Donne-le-moi ! Donne-la-lui !\nmoi / toi + en → m'en, t'en: Donne-m'en !\nIn the negative imperative the normal order returns: Ne me le donne pas.",
      },
    ],
    examples: [
      {
        fr: "Tu me prêtes ton vélo ? — Oui, je te le prête.",
        translation: { TR: "Bisikletini bana ödünç verir misin? — Evet, veririm.", EN: "Will you lend me your bike? — Yes, I'll lend it to you." },
      },
      {
        fr: "Elle a raconté l'histoire à ses parents ? — Non, elle ne la leur a pas racontée.",
        translation: { TR: "Hikâyeyi ailesine anlattı mı? — Hayır, anlatmadı.", EN: "Did she tell her parents the story? — No, she didn't tell it to them." },
      },
      {
        fr: "Tu as des pommes ? Donne-m'en deux, s'il te plaît.",
        translation: { TR: "Elman var mı? Bana iki tane ver lütfen.", EN: "Do you have apples? Give me two, please." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "double-pronouns-1",
        text: "Tu prêtes ta voiture à Marc ? — Oui, je ___ prête.",
        answers: ["la lui"],
        translation: { TR: "Arabanı Marc'a ödünç veriyor musun? — Evet, veriyorum.", EN: "Are you lending your car to Marc? — Yes, I'm lending it to him." },
      },
      {
        type: "fill",
        id: "double-pronouns-2",
        text: "Tu me donnes ce livre ? — Oui, je ___ donne.",
        answers: ["te le"],
        translation: { TR: "Bu kitabı bana verir misin? — Evet, veririm.", EN: "Will you give me this book? — Yes, I'll give it to you." },
      },
      {
        type: "fill",
        id: "double-pronouns-3",
        text: "Il y a du pain ? — Oui, il ___ a.",
        answers: ["y en"],
        translation: { TR: "Ekmek var mı? — Evet, var.", EN: "Is there any bread? — Yes, there is some." },
      },
      {
        type: "build",
        id: "double-pronouns-4",
        tokens: ["Je", "ne", "le", "lui", "ai", "pas", "dit"],
        translation: { TR: "Bunu ona söylemedim.", EN: "I didn't tell him / her." },
      },
      {
        type: "free",
        id: "double-pronouns-5",
        prompt: { TR: "Fransızca yaz: “Onu (kitabı) bana ver!”", EN: "Write in French: “Give it (the book) to me!”" },
        answers: ["Donne-le-moi !", "Donnez-le-moi !"],
      },
      {
        type: "free",
        id: "double-pronouns-6",
        prompt: { TR: "Fransızca yaz: “Ona bundan bahsetmedim.” (parler de, passé composé)", EN: "Write in French: “I didn't talk to him about it.” (parler de, passé composé)" },
        answers: ["Je ne lui en ai pas parlé."],
      },
    ],
  },
  {
    id: "passive-voice",
    level: "B1",
    title: { TR: "Edilgen çatı (voix passive)", EN: "The passive voice" },
    content: [
      {
        TR: "Edilgen: être (istenen zamanda) + participe passé, özneyle uyumlu. Türkçedeki “-ilmek / -nmek” gibi.\nLe chat mange la souris → La souris est mangée par le chat (fare kedi tarafından yenir).",
        EN: "Passive: être (in the tense you need) + past participle, agreeing with the subject.\nLe chat mange la souris → La souris est mangée par le chat (the mouse is eaten by the cat).",
      },
      {
        TR: "Zamanı être taşır:\nest construit (présent) · a été construit (passé composé)\nétait construit (imparfait) · sera construit (futur)",
        EN: "être carries the tense:\nest construit (present) · a été construit (passé composé)\nétait construit (imparfait) · sera construit (future)",
      },
      {
        TR: "Eylemi yapan genelde par ile gelir. Duygu ve durum fiillerinde de: aimé de, respecté de, connu de, entouré de, couvert de.",
        EN: "The agent usually comes with par. With verbs of feeling and state, de is used: aimé de, respecté de, connu de, entouré de, couvert de.",
      },
      {
        TR: "Konuşmada Fransızca edilgenden çok on'u sever, özellikle yapan belli değilse: On a volé mon vélo = Mon vélo a été volé (bisikletim çalındı).",
        EN: "In speech French often prefers on, especially when the agent is unknown: On a volé mon vélo = Mon vélo a été volé (my bike was stolen).",
      },
    ],
    examples: [
      {
        fr: "Ce pont a été construit en 1900.",
        translation: { TR: "Bu köprü 1900'de inşa edildi.", EN: "This bridge was built in 1900." },
      },
      {
        fr: "Les invités seront accueillis par le directeur.",
        translation: { TR: "Misafirler müdür tarafından karşılanacak.", EN: "The guests will be welcomed by the director." },
      },
      {
        fr: "Cette chanteuse est connue de tout le monde.",
        translation: { TR: "Bu şarkıcıyı herkes tanır.", EN: "This singer is known to everyone." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "passive-voice-1",
        text: "Cette maison ___ construite en 1950. (passé composé)",
        answers: ["a été"],
        translation: { TR: "Bu ev 1950'de inşa edildi.", EN: "This house was built in 1950." },
      },
      {
        type: "fill",
        id: "passive-voice-2",
        text: "Les résultats ___ publiés demain. (futur)",
        answers: ["seront"],
        translation: { TR: "Sonuçlar yarın yayımlanacak.", EN: "The results will be published tomorrow." },
      },
      {
        type: "fill",
        id: "passive-voice-3",
        text: "Ce professeur est aimé ___ tous ses élèves.",
        answers: ["de", "par"],
        translation: { TR: "Bu öğretmen bütün öğrencileri tarafından sevilir.", EN: "This teacher is loved by all his pupils." },
      },
      {
        type: "build",
        id: "passive-voice-4",
        tokens: ["La", "lettre", "a", "été", "écrite", "par", "Marie"],
        translation: { TR: "Mektup Marie tarafından yazıldı.", EN: "The letter was written by Marie." },
      },
      {
        type: "free",
        id: "passive-voice-5",
        prompt: { TR: "Fransızca yaz: “Bisikletim çalındı.”", EN: "Write in French: “My bike was stolen.”" },
        answers: [
          "Mon vélo a été volé.",
          "On a volé mon vélo.",
          "Ma bicyclette a été volée.",
          "On a volé ma bicyclette.",
        ],
      },
      {
        type: "free",
        id: "passive-voice-6",
        prompt: { TR: "Fransızca yaz: “Bu kitap herkes tarafından okunuyor.” (edilgen)", EN: "Write in French: “This book is read by everyone.” (passive)" },
        answers: ["Ce livre est lu par tout le monde.", "Ce livre est lu par tous."],
      },
    ],
  },
  {
    id: "gerondif",
    level: "B1",
    title: { TR: "Ulaç (gérondif): en + -ant", EN: "The gerund (gérondif): en + -ant" },
    content: [
      {
        TR: "Yapısı: en + participe présent. Participe présent: nous biçiminden -ons atılır, -ant eklenir.\nnous parlons → parlant · nous finissons → finissant · nous faisons → faisant\nDüzensiz: être → étant, avoir → ayant, savoir → sachant.",
        EN: "Form: en + present participle. Present participle: take the nous form, drop -ons, add -ant.\nnous parlons → parlant · nous finissons → finissant · nous faisons → faisant\nIrregular: être → étant, avoir → ayant, savoir → sachant.",
      },
      {
        TR: "Türkçedeki “-ken / -arak / -ince” gibidir:\naynı anda: Il chante en prenant sa douche (duş alırken).\ntarz: Elle a appris le français en regardant des films (izleyerek).\nkoşul: En partant maintenant, tu arriveras à l'heure (şimdi çıkarsan).",
        EN: "It works like English “while / by / if … -ing”:\nsimultaneity: Il chante en prenant sa douche (while showering).\nmanner: Elle a appris le français en regardant des films (by watching).\ncondition: En partant maintenant, tu arriveras à l'heure (if you leave now).",
      },
      {
        TR: "Gérondif'in öznesi ana cümlenin öznesiyle AYNI olmalı. “En sortant, la pluie a commencé” yanlış: çıkan yağmur değil. Dikkat: Türkçe “-ken” farklı özneye izin verir (ben çıkarken yağmur başladı), gérondif vermez.",
        EN: "The gérondif must have the SAME subject as the main verb. “En sortant, la pluie a commencé” is wrong: the rain did not go out.",
      },
    ],
    examples: [
      {
        fr: "Je fais mes devoirs en écoutant de la musique.",
        translation: { TR: "Müzik dinlerken ödevlerimi yapıyorum.", EN: "I do my homework while listening to music." },
      },
      {
        fr: "On apprend beaucoup en voyageant.",
        translation: { TR: "Seyahat ederek çok şey öğrenilir.", EN: "You learn a lot by travelling." },
      },
      {
        fr: "En prenant le métro, vous gagnerez du temps.",
        translation: { TR: "Metroya binerseniz zaman kazanırsınız.", EN: "If you take the metro, you'll save time." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "gerondif-1",
        text: "Je cuisine en ___ la radio. (écouter)",
        answers: ["écoutant"],
        translation: { TR: "Radyo dinlerken yemek yapıyorum.", EN: "I cook while listening to the radio." },
      },
      {
        type: "fill",
        id: "gerondif-2",
        text: "C'est en ___ qu'on devient forgeron. (forger)",
        answers: ["forgeant"],
        translation: { TR: "İnsan demir döve döve demirci olur.", EN: "Practice makes perfect (lit. by forging one becomes a blacksmith)." },
      },
      {
        type: "fill",
        id: "gerondif-3",
        text: "Il s'est cassé la jambe en ___ du ski. (faire)",
        answers: ["faisant"],
        translation: { TR: "Kayak yaparken bacağını kırdı.", EN: "He broke his leg while skiing." },
      },
      {
        type: "build",
        id: "gerondif-4",
        tokens: ["Elle", "lit", "en", "attendant", "le", "bus"],
        translation: { TR: "Otobüsü beklerken kitap okuyor.", EN: "She reads while waiting for the bus." },
      },
      {
        type: "free",
        id: "gerondif-5",
        prompt: { TR: "Fransızca yaz: “Fransızcayı şarkı dinleyerek öğrendim.”", EN: "Write in French: “I learned French by listening to songs.”" },
        answers: [
          "J'ai appris le français en écoutant des chansons.",
          "J'ai appris le français en écoutant des chansons françaises.",
        ],
      },
      {
        type: "free",
        id: "gerondif-6",
        prompt: { TR: "Fransızca yaz: “Yürürken telefonla konuşma!”", EN: "Write in French: “Don't phone while walking!”" },
        answers: [
          "Ne téléphone pas en marchant !",
          "Ne téléphonez pas en marchant !",
          "N'appelle pas en marchant !",
          "N'appelez pas en marchant !",
        ],
      },
    ],
  },
  {
    id: "participe-present",
    level: "B1",
    title: { TR: "Participe présent ve sıfat-fiil", EN: "Present participle vs verbal adjective" },
    content: [
      {
        TR: "en olmadan participe présent çoğunlukla yazı dilindedir ve qui + fiil yerine geçer: Les étudiants parlant français = les étudiants qui parlent français. DEĞİŞMEZ, uyum yapmaz.\nNeden de anlatabilir: Étant malade, il n'est pas venu (= comme il était malade).",
        EN: "Without en, the present participle is mostly written French and replaces qui + verb: Les étudiants parlant français = les étudiants qui parlent français. It is INVARIABLE.\nIt can also give a cause: Étant malade, il n'est pas venu (= as he was ill).",
      },
      {
        TR: "Sıfat-fiil (adjectif verbal) bir özelliktir ve sıfat gibi uyum yapar: une histoire intéressante, des enfants obéissants.\nKısa ölçüt: eylem (arkasında nesne var) → participe, değişmez. Özellik → sıfat, uyum yapar.",
        EN: "The verbal adjective describes a quality and agrees like an adjective: une histoire intéressante, des enfants obéissants.\nQuick test: an action (often with an object) → participle, invariable. A quality → adjective, agrees.",
      },
      {
        TR: "Bazı çiftlerin yazımı farklı: fatiguant / fatigant, convainquant / convaincant, précédant / précédent. Günlük konuşmada participe yerine qui + fiil kullan, yeter.",
        EN: "Some pairs are spelled differently: fatiguant / fatigant, convainquant / convaincant, précédant / précédent. In everyday speech, qui + verb instead of the participle is enough.",
      },
    ],
    examples: [
      {
        fr: "Nous cherchons un vendeur parlant anglais.",
        translation: { TR: "İngilizce konuşan bir satıcı arıyoruz.", EN: "We are looking for a salesperson who speaks English." },
      },
      {
        fr: "Ne sachant pas quoi dire, elle est restée silencieuse.",
        translation: { TR: "Ne diyeceğini bilemediği için sessiz kaldı.", EN: "Not knowing what to say, she stayed silent." },
      },
      {
        fr: "C'est une journée fatigante.",
        translation: { TR: "Yorucu bir gün.", EN: "It's a tiring day." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "participe-present-1",
        text: "On cherche une personne ___ l'espagnol. (parler)",
        answers: ["parlant"],
        translation: { TR: "İspanyolca konuşan birini arıyoruz.", EN: "We're looking for someone who speaks Spanish." },
      },
      {
        type: "fill",
        id: "participe-present-2",
        text: "Ce sont des histoires ___. (amuser, sıfat)",
        answers: ["amusantes"],
        translation: { TR: "Bunlar eğlenceli hikâyeler.", EN: "These are funny stories." },
      },
      {
        type: "fill",
        id: "participe-present-3",
        text: "___ malade, elle est restée chez elle. (être)",
        answers: ["Étant"],
        translation: { TR: "Hasta olduğu için evde kaldı.", EN: "Being ill, she stayed at home." },
      },
      {
        type: "build",
        id: "participe-present-4",
        tokens: ["Les", "personnes", "ayant", "un", "billet", "peuvent", "entrer"],
        translation: { TR: "Bileti olanlar girebilir.", EN: "People with a ticket may enter." },
      },
      {
        type: "free",
        id: "participe-present-5",
        prompt: { TR: "Fransızca yaz: “Bu iş çok yorucu.” (fatiguer → sıfat)", EN: "Write in French: “This job is very tiring.” (fatiguer → adjective)" },
        answers: ["Ce travail est très fatigant.", "Ce travail est vraiment fatigant."],
      },
    ],
  },
  {
    id: "reported-speech-present",
    level: "B1",
    title: { TR: "Dolaylı anlatım (şimdiki zaman)", EN: "Reported speech (present)" },
    content: [
      {
        TR: "Aktaran fiil şimdiki zamandaysa (il dit, elle demande) zamanlar değişmez; yalnız zamirler ve iyelikler değişir:\n« Je suis fatigué. » → Il dit qu'il est fatigué.",
        EN: "When the reporting verb is in the present (il dit, elle demande), tenses do not change; only pronouns and possessives do:\n« Je suis fatigué. » → Il dit qu'il est fatigué.",
      },
      {
        TR: "Evet/hayır sorusu → si (si + il → s'il):\n« Tu viens ? » → Il demande si je viens.\nSoru kelimesi olan soru → kelime kalır: où, quand, comment, pourquoi, qui:\n« Où habites-tu ? » → Il demande où j'habite.",
        EN: "Yes/no question → si (si + il → s'il):\n« Tu viens ? » → Il demande si je viens.\nQuestion with a question word → the word stays: où, quand, comment, pourquoi, qui:\n« Où habites-tu ? » → Il demande où j'habite.",
      },
      {
        TR: "qu'est-ce que → ce que, qu'est-ce qui → ce qui. Dolaylı soruda devrik yapı ve est-ce que olmaz:\n« Qu'est-ce que tu veux ? » → Il demande ce que je veux.\nEmir → de + mastar: « Ferme la porte ! » → Il me dit de fermer la porte.",
        EN: "qu'est-ce que → ce que, qu'est-ce qui → ce qui. No inversion and no est-ce que in an indirect question:\n« Qu'est-ce que tu veux ? » → Il demande ce que je veux.\nImperative → de + infinitive: « Ferme la porte ! » → Il me dit de fermer la porte.",
      },
    ],
    examples: [
      {
        fr: "Elle dit qu'elle arrive dans dix minutes.",
        translation: { TR: "On dakika içinde geldiğini söylüyor.", EN: "She says she's arriving in ten minutes." },
      },
      {
        fr: "Mon père demande si nous avons faim.",
        translation: { TR: "Babam aç olup olmadığımızı soruyor.", EN: "My father is asking if we're hungry." },
      },
      {
        fr: "Le serveur nous demande ce que nous voulons boire.",
        translation: { TR: "Garson ne içmek istediğimizi soruyor.", EN: "The waiter asks us what we want to drink." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "reported-speech-present-1",
        text: "Elle demande ___ tu viens ce soir.",
        answers: ["si"],
        translation: { TR: "Bu akşam gelip gelmediğini soruyor.", EN: "She's asking whether you're coming tonight." },
      },
      {
        type: "fill",
        id: "reported-speech-present-2",
        text: "Il me demande ___ je veux manger.",
        answers: ["ce que"],
        translation: { TR: "Bana ne yemek istediğimi soruyor.", EN: "He asks me what I want to eat." },
      },
      {
        type: "fill",
        id: "reported-speech-present-3",
        text: "Le médecin me dit ___ me reposer.",
        answers: ["de"],
        translation: { TR: "Doktor bana dinlenmemi söylüyor.", EN: "The doctor tells me to rest." },
      },
      {
        type: "build",
        id: "reported-speech-present-4",
        tokens: ["Il", "demande", "où", "nous", "habitons"],
        translation: { TR: "Nerede oturduğumuzu soruyor.", EN: "He asks where we live." },
      },
      {
        type: "free",
        id: "reported-speech-present-5",
        prompt: { TR: "Fransızca yaz: “Annem ne zaman geldiğimi soruyor.”", EN: "Write in French: “My mother is asking when I'm coming.”" },
        answers: [
          "Ma mère demande quand je viens.",
          "Ma mère me demande quand je viens.",
          "Ma mère demande quand j'arrive.",
          "Ma mère me demande quand j'arrive.",
        ],
      },
      {
        type: "free",
        id: "reported-speech-present-6",
        prompt: { TR: "Fransızca yaz: “(O erkek) yorgun olduğunu söylüyor.”", EN: "Write in French: “He says he is tired.”" },
        answers: ["Il dit qu'il est fatigué."],
      },
    ],
  },
  {
    id: "reported-speech-past",
    level: "B1",
    title: { TR: "Dolaylı anlatım (geçmiş): zaman uyumu", EN: "Reported speech (past): sequence of tenses" },
    content: [
      {
        TR: "Aktaran fiil geçmişteyse (il a dit, elle a demandé) zamanlar bir adım geriye kayar (concordance des temps):\nprésent → imparfait\npassé composé → plus-que-parfait\nfutur → conditionnel présent\nva + mastar → allait + mastar\nimparfait, plus-que-parfait, conditionnel: değişmez.",
        EN: "When the reporting verb is in the past (il a dit, elle a demandé), tenses shift back one step (concordance des temps):\npresent → imparfait\npassé composé → plus-que-parfait\nfuture → present conditional\nva + infinitive → allait + infinitive\nimparfait, plus-que-parfait, conditional: no change.",
      },
      {
        TR: "Zaman ve yer sözcükleri de kayar:\naujourd'hui → ce jour-là · hier → la veille\ndemain → le lendemain · la semaine prochaine → la semaine suivante\nici → là",
        EN: "Time and place words shift too:\naujourd'hui → ce jour-là · hier → la veille\ndemain → le lendemain · la semaine prochaine → la semaine suivante\nici → là",
      },
      {
        TR: "Türkçede “hasta olduğunu söyledi” derken zaman eki değişmez; Fransızca ise kaydırır: « Je suis malade » → Il a dit qu'il était malade.",
        EN: "English does the same shift: « Je suis malade » → Il a dit qu'il était malade (he said he was ill).",
      },
    ],
    examples: [
      {
        fr: "Elle m'a dit qu'elle habitait à Lyon.",
        translation: { TR: "Bana Lyon'da oturduğunu söyledi.", EN: "She told me she lived in Lyon." },
      },
      {
        fr: "Il a expliqué qu'il avait raté son train la veille.",
        translation: { TR: "Bir gün önce trenini kaçırdığını açıkladı.", EN: "He explained that he had missed his train the day before." },
      },
      {
        fr: "Ils ont promis qu'ils reviendraient le lendemain.",
        translation: { TR: "Ertesi gün döneceklerine söz verdiler.", EN: "They promised they would come back the next day." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "reported-speech-past-1",
        text: "« Je suis malade. » → Il a dit qu'il ___ malade.",
        answers: ["était"],
        translation: { TR: "Hasta olduğunu söyledi.", EN: "He said he was ill." },
      },
      {
        type: "fill",
        id: "reported-speech-past-2",
        text: "« J'ai perdu mes clés. » → Elle a dit qu'elle ___ perdu ses clés.",
        answers: ["avait"],
        translation: { TR: "Anahtarlarını kaybettiğini söyledi.", EN: "She said she had lost her keys." },
      },
      {
        type: "fill",
        id: "reported-speech-past-3",
        text: "« Je partirai demain. » → Il a dit qu'il partirait ___.",
        answers: ["le lendemain"],
        translation: { TR: "Ertesi gün gideceğini söyledi.", EN: "He said he would leave the next day." },
      },
      {
        type: "fill",
        id: "reported-speech-past-4",
        text: "« Tu viendras ? » → Elle m'a demandé si je ___. (venir)",
        answers: ["viendrais"],
        translation: { TR: "Bana gelip gelmeyeceğimi sordu.", EN: "She asked me if I would come." },
      },
      {
        type: "build",
        id: "reported-speech-past-5",
        tokens: ["Il", "m'a", "demandé", "ce", "que", "je", "faisais"],
        translation: { TR: "Bana ne yaptığımı sordu.", EN: "He asked me what I was doing." },
      },
      {
        type: "free",
        id: "reported-speech-past-6",
        prompt: { TR: "Fransızca yaz: “(O kadın) onu bir gün önce gördüğünü söyledi.” (onu = erkek)", EN: "Write in French: “She said she had seen him the day before.”" },
        answers: ["Elle a dit qu'elle l'avait vu la veille.", "Elle m'a dit qu'elle l'avait vu la veille."],
      },
    ],
  },
  {
    id: "expressing-cause",
    level: "B1",
    title: { TR: "Neden bildirmek", EN: "Expressing cause" },
    content: [
      {
        TR: "Cümleyle (fiille):\nparce que → “çünkü”, pourquoi sorusunun cevabı, nötr.\npuisque → “madem”, iki tarafın da bildiği neden: Puisque tu es là, aide-moi.\ncomme → cümlenin BAŞINDA: Comme il pleuvait, nous sommes restés.\ncar → yazı dili, ana cümleden SONRA gelir, asla başta değil.",
        EN: "With a clause (a verb):\nparce que → “because”, answers pourquoi, neutral.\npuisque → “since”, a cause both sides know: Puisque tu es là, aide-moi.\ncomme → at the START of the sentence: Comme il pleuvait, nous sommes restés.\ncar → written, comes AFTER the main clause, never first.",
      },
      {
        TR: "İsimle:\ngrâce à → olumlu neden, “sayesinde”: Grâce à toi, j'ai réussi.\nà cause de → olumsuz neden, “yüzünden”: À cause de la grève, le train est en retard.",
        EN: "With a noun:\ngrâce à → a positive cause, “thanks to”: Grâce à toi, j'ai réussi.\nà cause de → a negative cause, “because of”: À cause de la grève, le train est en retard.",
      },
      {
        TR: "Birleşmeleri unutma: à + le → au, de + le → du, de + les → des: grâce au soleil, à cause du bruit, à cause des travaux.",
        EN: "Don't forget the contractions: à + le → au, de + le → du, de + les → des: grâce au soleil, à cause du bruit, à cause des travaux.",
      },
    ],
    examples: [
      {
        fr: "Comme j'étais malade, je ne suis pas allé en cours.",
        translation: { TR: "Hasta olduğum için derse gitmedim.", EN: "As I was ill, I didn't go to class." },
      },
      {
        fr: "Puisque tu connais la ville, tu vas nous guider.",
        translation: { TR: "Madem şehri biliyorsun, bize sen rehberlik edeceksin.", EN: "Since you know the city, you'll guide us." },
      },
      {
        fr: "Le match a été annulé à cause de la pluie.",
        translation: { TR: "Maç yağmur yüzünden iptal edildi.", EN: "The match was cancelled because of the rain." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "expressing-cause-1",
        text: "___ il faisait beau, nous avons mangé dehors.",
        answers: ["Comme"],
        translation: { TR: "Hava güzel olduğu için dışarıda yedik.", EN: "As the weather was nice, we ate outside." },
      },
      {
        type: "fill",
        id: "expressing-cause-2",
        text: "J'ai réussi ___ mon professeur.",
        answers: ["grâce à"],
        translation: { TR: "Öğretmenim sayesinde başardım.", EN: "I succeeded thanks to my teacher." },
      },
      {
        type: "fill",
        id: "expressing-cause-3",
        text: "Le vol est annulé à cause ___ mauvais temps.",
        answers: ["du"],
        translation: { TR: "Uçuş kötü hava yüzünden iptal edildi.", EN: "The flight is cancelled because of the bad weather." },
      },
      {
        type: "fill",
        id: "expressing-cause-4",
        text: "___ tu es là, tu peux m'aider !",
        answers: ["Puisque", "Comme"],
        translation: { TR: "Madem buradasın, bana yardım edebilirsin!", EN: "Since you're here, you can help me!" },
      },
      {
        type: "build",
        id: "expressing-cause-5",
        tokens: ["Nous", "sommes", "en", "retard", "à", "cause", "des", "embouteillages"],
        translation: { TR: "Trafik sıkışıklığı yüzünden geç kaldık.", EN: "We're late because of the traffic jams." },
      },
      {
        type: "free",
        id: "expressing-cause-6",
        prompt: { TR: "Fransızca yaz: “Senin sayende Fransızca öğrendim.”", EN: "Write in French: “Thanks to you, I learned French.”" },
        answers: [
          "Grâce à toi, j'ai appris le français.",
          "Grâce à vous, j'ai appris le français.",
          "Grâce à toi j'ai appris le français.",
          "Grâce à vous j'ai appris le français.",
          "J'ai appris le français grâce à toi.",
          "J'ai appris le français grâce à vous.",
        ],
      },
    ],
  },
  {
    id: "expressing-consequence",
    level: "B1",
    title: { TR: "Sonuç bildirmek", EN: "Expressing consequence" },
    content: [
      {
        TR: "Bağlaçlar:\ndonc → “yani, bu yüzden”, genelde iki cümlenin arasında\nalors → konuşma dilinde “o zaman, bu yüzden”\nc'est pourquoi / c'est pour ça que → “bu yüzden”\npar conséquent → resmî, yazı dili\nIl pleut, donc je prends un parapluie.",
        EN: "Connectors:\ndonc → “so”, usually between the two clauses\nalors → spoken “so, then”\nc'est pourquoi / c'est pour ça que → “that's why”\npar conséquent → formal, written\nIl pleut, donc je prends un parapluie.",
      },
      {
        TR: "si bien que + indicatif → “öyle ki, sonuçta”: Il a beaucoup neigé, si bien que les routes sont fermées.",
        EN: "si bien que + indicative → “so that, with the result that”: Il a beaucoup neigé, si bien que les routes sont fermées.",
      },
      {
        TR: "Yoğunluk + sonuç, Türkçedeki “o kadar … ki”:\ntellement / si + sıfat ya da zarf + que: Il est tellement fatigué qu'il dort debout.\ntellement de / tant de + isim + que: J'ai tellement de travail que je ne peux pas sortir.\nHepsi indicatif alır: sonuç bir olgudur.",
        EN: "Intensity + result, “so … that”:\ntellement / si + adjective or adverb + que: Il est tellement fatigué qu'il dort debout.\ntellement de / tant de + noun + que: J'ai tellement de travail que je ne peux pas sortir.\nAll take the indicative: the result is a fact.",
      },
    ],
    examples: [
      {
        fr: "Je n'ai pas entendu mon réveil, donc je suis arrivé en retard.",
        translation: { TR: "Çalar saatimi duymadım, bu yüzden geç kaldım.", EN: "I didn't hear my alarm, so I arrived late." },
      },
      {
        fr: "Le musée était fermé, c'est pourquoi nous sommes allés au parc.",
        translation: { TR: "Müze kapalıydı, bu yüzden parka gittik.", EN: "The museum was closed, that's why we went to the park." },
      },
      {
        fr: "Il y avait tant de monde que nous ne sommes pas entrés.",
        translation: { TR: "O kadar kalabalıktı ki içeri girmedik.", EN: "There were so many people that we didn't go in." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "expressing-consequence-1",
        text: "Je suis malade, ___ je reste au lit.",
        answers: ["donc", "alors"],
        translation: { TR: "Hastayım, bu yüzden yatakta kalıyorum.", EN: "I'm ill, so I'm staying in bed." },
      },
      {
        type: "fill",
        id: "expressing-consequence-2",
        text: "Il parle ___ vite que je ne comprends rien.",
        answers: ["tellement", "si"],
        translation: { TR: "O kadar hızlı konuşuyor ki hiçbir şey anlamıyorum.", EN: "He speaks so fast that I don't understand anything." },
      },
      {
        type: "fill",
        id: "expressing-consequence-3",
        text: "J'ai ___ de travail que je ne peux pas venir.",
        answers: ["tellement", "tant"],
        translation: { TR: "O kadar çok işim var ki gelemiyorum.", EN: "I have so much work that I can't come." },
      },
      {
        type: "build",
        id: "expressing-consequence-4",
        tokens: ["Le", "train", "était", "en", "retard,", "si", "bien", "que", "j'ai", "raté", "mon", "rendez-vous"],
        translation: { TR: "Tren gecikmişti, öyle ki randevumu kaçırdım.", EN: "The train was late, so I missed my appointment." },
      },
      {
        type: "free",
        id: "expressing-consequence-5",
        prompt: { TR: "Fransızca yaz: “O kadar yorgundum ki hemen uyudum.” (tellement … que, s'endormir)", EN: "Write in French: “I was so tired that I fell asleep straight away.” (tellement … que, s'endormir)" },
        answers: [
          "J'étais tellement fatigué que je me suis endormi tout de suite.",
          "J'étais tellement fatiguée que je me suis endormie tout de suite.",
          "J'étais tellement fatigué que je me suis endormi immédiatement.",
          "J'étais tellement fatiguée que je me suis endormie immédiatement.",
          "J'étais tellement fatigué que je me suis tout de suite endormi.",
          "J'étais tellement fatiguée que je me suis tout de suite endormie.",
        ],
      },
    ],
  },
  {
    id: "expressing-opposition",
    level: "B1",
    title: { TR: "Karşıtlık ve tezat bildirmek", EN: "Expressing opposition and concession" },
    content: [
      {
        TR: "Basit karşıtlık: mais. “Yine de, ancak”: pourtant, cependant (daha resmî).\nIl est riche, pourtant il n'est pas heureux = Zengin, yine de mutlu değil.",
        EN: "Simple contrast: mais. “Yet, however”: pourtant, cependant (more formal).\nIl est riche, pourtant il n'est pas heureux = He's rich, yet he isn't happy.",
      },
      {
        TR: "İki olguyu karşılaştırmak: alors que / tandis que + indicatif (“oysa, -ken”):\nMoi, j'adore le sport, alors que mon frère le déteste.",
        EN: "Contrasting two facts: alors que / tandis que + indicative (“whereas”):\nMoi, j'adore le sport, alors que mon frère le déteste.",
      },
      {
        TR: "Tezat (bir şeye rağmen):\nbien que + subjonctif → “-mesine rağmen”: Bien qu'il soit tard, je travaille.\nmême si + indicatif → “-se bile”, si kuralları geçerli (futur yok): Même s'il pleut, je sortirai.\nmalgré + isim → “-e rağmen”: Malgré la pluie, nous sommes sortis.",
        EN: "Concession (in spite of something):\nbien que + subjunctive → “although”: Bien qu'il soit tard, je travaille.\nmême si + indicative → “even if”, si rules apply (no future): Même s'il pleut, je sortirai.\nmalgré + noun → “despite”: Malgré la pluie, nous sommes sortis.",
      },
    ],
    examples: [
      {
        fr: "Elle travaille le jour, tandis que son mari travaille la nuit.",
        translation: { TR: "O gündüz çalışıyor, kocası ise gece çalışıyor.", EN: "She works by day, whereas her husband works at night." },
      },
      {
        fr: "Malgré ses efforts, il n'a pas eu son permis.",
        translation: { TR: "Çabalarına rağmen ehliyetini alamadı.", EN: "Despite his efforts, he didn't get his licence." },
      },
      {
        fr: "Même si c'est difficile, je ne vais pas abandonner.",
        translation: { TR: "Zor olsa bile vazgeçmeyeceğim.", EN: "Even if it's difficult, I'm not going to give up." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "expressing-opposition-1",
        text: "___ la pluie, le match a eu lieu.",
        answers: ["Malgré"],
        translation: { TR: "Yağmura rağmen maç oynandı.", EN: "Despite the rain, the match took place." },
      },
      {
        type: "fill",
        id: "expressing-opposition-2",
        text: "Bien qu'il ___ tard, je ne suis pas fatigué. (être)",
        answers: ["soit"],
        translation: { TR: "Geç olmasına rağmen yorgun değilim.", EN: "Although it's late, I'm not tired." },
      },
      {
        type: "fill",
        id: "expressing-opposition-3",
        text: "Même si tu ___ en retard, viens ! (être)",
        answers: ["es"],
        translation: { TR: "Geç kalsan bile gel!", EN: "Even if you're late, come!" },
      },
      {
        type: "fill",
        id: "expressing-opposition-4",
        text: "Paul aime la ville, ___ sa femme préfère la campagne.",
        answers: ["alors que", "tandis que", "mais"],
        translation: { TR: "Paul şehri seviyor, oysa karısı kırsalı tercih ediyor.", EN: "Paul likes the city, whereas his wife prefers the countryside." },
      },
      {
        type: "build",
        id: "expressing-opposition-5",
        tokens: ["Il", "est", "riche,", "pourtant", "personne", "ne", "l'aime"],
        translation: { TR: "Zengin, yine de kimse onu sevmiyor.", EN: "He's rich, yet nobody likes him." },
      },
      {
        type: "free",
        id: "expressing-opposition-6",
        prompt: { TR: "Fransızca yaz: “Yorgun olmama rağmen çalışıyorum.” (bien que)", EN: "Write in French: “Although I'm tired, I'm working.” (bien que)" },
        answers: [
          "Bien que je sois fatigué, je travaille.",
          "Bien que je sois fatiguée, je travaille.",
          "Bien que je sois fatigué je travaille.",
          "Bien que je sois fatiguée je travaille.",
          "Je travaille bien que je sois fatigué.",
          "Je travaille bien que je sois fatiguée.",
        ],
      },
    ],
  },
  {
    id: "expressing-purpose",
    level: "B1",
    title: { TR: "Amaç bildirmek", EN: "Expressing purpose" },
    content: [
      {
        TR: "Özne aynıysa: pour / afin de + mastar (“-mek için”). afin de daha resmîdir.\nJ'économise pour acheter une voiture = Araba almak için para biriktiriyorum.",
        EN: "Same subject: pour / afin de + infinitive (“to, in order to”). afin de is more formal.\nJ'économise pour acheter une voiture = I'm saving to buy a car.",
      },
      {
        TR: "Özne farklıysa: pour que / afin que + subjonctif (“anlaman için, anlasın diye”).\nJe parle lentement pour que tu comprennes.",
        EN: "Different subject: pour que / afin que + subjunctive (“so that”).\nJe parle lentement pour que tu comprennes.",
      },
      {
        TR: "Bir şeyden kaçınmak:\npour ne pas + mastar (iki olumsuzluk sözcüğü de mastardan önce): Je pars tôt pour ne pas être en retard.\nde peur de + mastar / de peur que + subjonctif (“… korkusuyla”): Il ne dit rien de peur de se tromper.",
        EN: "Avoiding something:\npour ne pas + infinitive (both negative words before the infinitive): Je pars tôt pour ne pas être en retard.\nde peur de + infinitive / de peur que + subjunctive (“for fear of”): Il ne dit rien de peur de se tromper.",
      },
    ],
    examples: [
      {
        fr: "J'apprends le français pour travailler en France.",
        translation: { TR: "Fransa'da çalışmak için Fransızca öğreniyorum.", EN: "I'm learning French to work in France." },
      },
      {
        fr: "Je vous envoie le plan afin que vous trouviez la maison.",
        translation: { TR: "Evi bulmanız için size krokiyi gönderiyorum.", EN: "I'm sending you the map so that you find the house." },
      },
      {
        fr: "Elle a pris un taxi de peur de rater son avion.",
        translation: { TR: "Uçağını kaçırmaktan korktuğu için taksiye bindi.", EN: "She took a taxi for fear of missing her plane." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "expressing-purpose-1",
        text: "Je travaille ___ gagner de l'argent.",
        answers: ["pour", "afin de"],
        translation: { TR: "Para kazanmak için çalışıyorum.", EN: "I work to earn money." },
      },
      {
        type: "fill",
        id: "expressing-purpose-2",
        text: "Je vous écris afin que vous ___ la situation. (connaître)",
        answers: ["connaissiez"],
        translation: { TR: "Durumu bilmeniz için size yazıyorum.", EN: "I'm writing to you so that you know the situation." },
      },
      {
        type: "fill",
        id: "expressing-purpose-3",
        text: "Il ne dit rien de peur ___ se tromper.",
        answers: ["de"],
        translation: { TR: "Yanılmaktan korktuğu için hiçbir şey söylemiyor.", EN: "He says nothing for fear of being wrong." },
      },
      {
        type: "fill",
        id: "expressing-purpose-4",
        text: "Parle fort pour que tout le monde t'___. (entendre)",
        answers: ["entende"],
        translation: { TR: "Herkes seni duysun diye yüksek sesle konuş.", EN: "Speak loudly so that everyone hears you." },
      },
      {
        type: "build",
        id: "expressing-purpose-5",
        tokens: ["Je", "me", "lève", "tôt", "pour", "ne", "pas", "être", "en", "retard"],
        translation: { TR: "Geç kalmamak için erken kalkıyorum.", EN: "I get up early so as not to be late." },
      },
      {
        type: "free",
        id: "expressing-purpose-6",
        prompt: { TR: "Fransızca yaz: “Seni görmek için geldim.”", EN: "Write in French: “I came to see you.”" },
        answers: [
          "Je suis venu pour te voir.",
          "Je suis venue pour te voir.",
          "Je suis venu pour vous voir.",
          "Je suis venue pour vous voir.",
          "Je suis venu afin de te voir.",
          "Je suis venue afin de te voir.",
          "Je suis venu afin de vous voir.",
          "Je suis venue afin de vous voir.",
        ],
      },
    ],
  },
  {
    id: "time-clauses",
    level: "B1",
    title: { TR: "Zaman bildiren yan cümleler", EN: "Time clauses" },
    content: [
      {
        TR: "quand / lorsque (lorsque daha resmî) → “-dığında”\npendant que → “-ken”: Pendant que tu dors, je travaille.\ndès que → “-ir -mez”: Dès que j'arrive, je t'appelle.",
        EN: "quand / lorsque (lorsque is more formal) → “when”\npendant que → “while”: Pendant que tu dors, je travaille.\ndès que → “as soon as”: Dès que j'arrive, je t'appelle.",
      },
      {
        TR: "Gelecekten söz ederken quand, lorsque, dès que'den sonra futur (ya da futur antérieur) gelir: Quand je serai grand, je serai pilote. Türkçe “büyüyünce” ve İngilizce “when I grow up” gelecek eki almaz; Fransızca alır.",
        EN: "When talking about the future, quand, lorsque, dès que take the future (or futur antérieur): Quand je serai grand, je serai pilote. English says “when I grow up” in the present; French does not.",
      },
      {
        TR: "avant de + mastar (aynı özne) → “-meden önce”: Lave-toi les mains avant de manger. Özne farklıysa avant que + subjonctif.\naprès + mastar geçmiş (avoir / être + participe) → “-dikten sonra”: Après avoir mangé, il est parti. Après être rentrée, elle a dormi.",
        EN: "avant de + infinitive (same subject) → “before …-ing”: Lave-toi les mains avant de manger. With a different subject: avant que + subjunctive.\naprès + past infinitive (avoir / être + participle) → “after …-ing”: Après avoir mangé, il est parti. Après être rentrée, elle a dormi.",
      },
    ],
    examples: [
      {
        fr: "Lorsque je suis arrivé, tout le monde dormait.",
        translation: { TR: "Vardığımda herkes uyuyordu.", EN: "When I arrived, everyone was asleep." },
      },
      {
        fr: "Dès que tu auras ton diplôme, tu chercheras du travail.",
        translation: { TR: "Diplomanı alır almaz iş arayacaksın.", EN: "As soon as you have your degree, you'll look for work." },
      },
      {
        fr: "Après avoir lu la lettre, elle a pleuré.",
        translation: { TR: "Mektubu okuduktan sonra ağladı.", EN: "After reading the letter, she cried." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "time-clauses-1",
        text: "___ avoir fini ses devoirs, il est sorti.",
        answers: ["Après"],
        translation: { TR: "Ödevlerini bitirdikten sonra dışarı çıktı.", EN: "After finishing his homework, he went out." },
      },
      {
        type: "fill",
        id: "time-clauses-2",
        text: "Éteins la lumière avant ___ partir.",
        answers: ["de"],
        translation: { TR: "Çıkmadan önce ışığı kapat.", EN: "Turn off the light before leaving." },
      },
      {
        type: "fill",
        id: "time-clauses-3",
        text: "Dès que je ___ à Paris, je t'écrirai. (arriver)",
        answers: ["serai arrivé", "arriverai", "serai arrivée"],
        translation: { TR: "Paris'e varır varmaz sana yazacağım.", EN: "As soon as I get to Paris, I'll write to you." },
      },
      {
        type: "fill",
        id: "time-clauses-4",
        text: "Après ___ arrivés, nous avons dîné.",
        answers: ["être"],
        translation: { TR: "Vardıktan sonra akşam yemeği yedik.", EN: "After arriving, we had dinner." },
      },
      {
        type: "build",
        id: "time-clauses-5",
        tokens: ["Pendant", "que", "tu", "cuisines,", "je", "mets", "la", "table"],
        translation: { TR: "Sen yemek yaparken ben sofrayı kuruyorum.", EN: "While you cook, I'll set the table." },
      },
      {
        type: "free",
        id: "time-clauses-6",
        prompt: { TR: "Fransızca yaz: “Yemek yedikten sonra televizyon izledim.” (après + mastar geçmiş)", EN: "Write in French: “After eating, I watched TV.” (après + past infinitive)" },
        answers: [
          "Après avoir mangé, j'ai regardé la télé.",
          "Après avoir mangé, j'ai regardé la télévision.",
          "Après avoir mangé j'ai regardé la télé.",
          "Après avoir mangé j'ai regardé la télévision.",
          "J'ai regardé la télé après avoir mangé.",
          "J'ai regardé la télévision après avoir mangé.",
        ],
      },
    ],
  },
  {
    id: "mise-en-relief",
    level: "B1",
    title: { TR: "Vurgulama (mise en relief)", EN: "Emphasis (mise en relief)" },
    content: [
      {
        TR: "Bir öğeyi öne çıkarmak için: c'est … qui (özne) / c'est … que (geri kalan her şey). Türkçe bunu vurgu ve sözcük sırasıyla yapar (“Bardağı kıran Paul”).\nC'est Paul qui a cassé le verre. C'est ce verre que Paul a cassé. C'est hier que je l'ai vu.",
        EN: "To highlight one element: c'est … qui (subject) / c'est … que (everything else). English does the same with “it's … who / that”.\nC'est Paul qui a cassé le verre. C'est ce verre que Paul a cassé. C'est hier que je l'ai vu.",
      },
      {
        TR: "c'est … qui'den sonra fiil vurgulanan kişiye uyar. Vurgulu zamirleri kullan: moi, toi, lui, elle, nous, vous, eux, elles.\nC'est moi qui suis responsable. C'est nous qui avons gagné. C'est toi qui as raison.",
        EN: "After c'est … qui, the verb agrees with the highlighted person. Use stressed pronouns: moi, toi, lui, elle, nous, vous, eux, elles.\nC'est moi qui suis responsable. C'est nous qui avons gagné. C'est toi qui as raison.",
      },
      {
        TR: "Ce qui …, c'est … / Ce que …, c'est … / Ce dont …, c'est …: önce merak uyandırır, sonra söyler.\nCe qui me plaît, c'est la musique. Ce que je veux, c'est dormir. Ce dont j'ai besoin, c'est de vacances (de kalır).",
        EN: "Ce qui …, c'est … / Ce que …, c'est … / Ce dont …, c'est …: builds suspense, then says it.\nCe qui me plaît, c'est la musique. Ce que je veux, c'est dormir. Ce dont j'ai besoin, c'est de vacances (de stays).",
      },
    ],
    examples: [
      {
        fr: "C'est ma sœur qui a préparé le dîner.",
        translation: { TR: "Akşam yemeğini hazırlayan kız kardeşim.", EN: "It was my sister who made dinner." },
      },
      {
        fr: "C'est à Marseille que nous nous sommes rencontrés.",
        translation: { TR: "Tanıştığımız yer Marsilya'ydı.", EN: "It was in Marseille that we met." },
      },
      {
        fr: "Ce que je préfère, c'est le week-end.",
        translation: { TR: "En sevdiğim şey hafta sonu.", EN: "What I like best is the weekend." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "mise-en-relief-1",
        text: "C'est moi ___ ai fait ce gâteau.",
        answers: ["qui"],
        translation: { TR: "Bu pastayı yapan benim.", EN: "I'm the one who made this cake." },
      },
      {
        type: "fill",
        id: "mise-en-relief-2",
        text: "C'est à Lyon ___ je suis né.",
        answers: ["que"],
        translation: { TR: "Doğduğum yer Lyon.", EN: "It's in Lyon that I was born." },
      },
      {
        type: "fill",
        id: "mise-en-relief-3",
        text: "C'est toi qui ___ raison. (avoir)",
        answers: ["as"],
        translation: { TR: "Haklı olan sensin.", EN: "You're the one who's right." },
      },
      {
        type: "fill",
        id: "mise-en-relief-4",
        text: "___ je préfère, c'est le printemps.",
        answers: ["Ce que"],
        translation: { TR: "En sevdiğim mevsim ilkbahar.", EN: "What I prefer is spring." },
      },
      {
        type: "build",
        id: "mise-en-relief-5",
        tokens: ["Ce", "qui", "m'énerve,", "c'est", "le", "bruit"],
        translation: { TR: "Beni sinirlendiren şey gürültü.", EN: "What annoys me is the noise." },
      },
      {
        type: "free",
        id: "mise-en-relief-6",
        prompt: { TR: "Fransızca yaz: “Bunu yapan o (erkek)!” (c'est … qui)", EN: "Write in French: “He's the one who did it!” (c'est … qui)" },
        answers: [
          "C'est lui qui l'a fait !",
          "C'est lui qui a fait ça !",
          "C'est lui qui a fait cela !",
        ],
      },
    ],
  },
  {
    id: "opinion-argument",
    level: "B1",
    title: { TR: "Görüş bildirmek ve savunmak", EN: "Giving and justifying an opinion" },
    content: [
      {
        TR: "Görüşü başlatmak: à mon avis, selon moi, d'après moi, pour moi + cümle.\nje trouve que, je pense que, je crois que, il me semble que + indicatif.\nÀ mon avis, ce film est trop long.",
        EN: "Opening an opinion: à mon avis, selon moi, d'après moi, pour moi + clause.\nje trouve que, je pense que, je crois que, il me semble que + indicative.\nÀ mon avis, ce film est trop long.",
      },
      {
        TR: "Hatırlatma: olumsuz görüş ve şüphe subjonctif ister: je ne pense pas que, je ne crois pas que, je doute que. Değerlendirme de: il est important que, il est possible que.\nJe ne pense pas que ce soit une bonne idée.",
        EN: "Reminder: a negative opinion and doubt take the subjunctive: je ne pense pas que, je ne crois pas que, je doute que. So do judgements: il est important que, il est possible que.\nJe ne pense pas que ce soit une bonne idée.",
      },
      {
        TR: "Düşünceyi düzenlemek:\nd'un côté … de l'autre (côté) → bir yandan … öte yandan\nen revanche / par contre → buna karşılık\nde plus, en plus → üstelik\npar exemple → gerekçeyi örnekle\nbref, enfin → sonuç olarak",
        EN: "Organising your ideas:\nd'un côté … de l'autre (côté) → on the one hand … on the other\nen revanche / par contre → on the other hand, by contrast\nde plus, en plus → moreover\npar exemple → back it up with an example\nbref, enfin → in short",
      },
    ],
    examples: [
      {
        fr: "Selon moi, il faut protéger les forêts.",
        translation: { TR: "Bana göre ormanları korumak gerek.", EN: "In my view, we must protect the forests." },
      },
      {
        fr: "D'un côté, la ville est pratique ; de l'autre, elle est chère.",
        translation: { TR: "Bir yandan şehir pratik; öte yandan pahalı.", EN: "On the one hand, the city is convenient; on the other, it's expensive." },
      },
      {
        fr: "Je trouve que les réseaux sociaux sont utiles. En revanche, ils prennent beaucoup de temps.",
        translation: { TR: "Sosyal medyayı faydalı buluyorum. Buna karşılık çok zaman alıyor.", EN: "I find social media useful. On the other hand, it takes a lot of time." },
      },
    ],
    exercises: [
      {
        type: "fill",
        id: "opinion-argument-1",
        text: "À mon avis, ce film ___ trop long. (être)",
        answers: ["est"],
        translation: { TR: "Bence bu film çok uzun.", EN: "In my opinion, this film is too long." },
      },
      {
        type: "fill",
        id: "opinion-argument-2",
        text: "Je ne pense pas que ce ___ une bonne idée. (être)",
        answers: ["soit"],
        translation: { TR: "Bunun iyi bir fikir olduğunu düşünmüyorum.", EN: "I don't think it's a good idea." },
      },
      {
        type: "fill",
        id: "opinion-argument-3",
        text: "La ville est bruyante ; en ___, la campagne est calme.",
        answers: ["revanche"],
        translation: { TR: "Şehir gürültülü; buna karşılık kırsal sakin.", EN: "The city is noisy; by contrast, the countryside is calm." },
      },
      {
        type: "fill",
        id: "opinion-argument-4",
        text: "Il me semble que tu ___ raison. (avoir)",
        answers: ["as"],
        translation: { TR: "Bana öyle geliyor ki haklısın.", EN: "It seems to me that you're right." },
      },
      {
        type: "build",
        id: "opinion-argument-5",
        tokens: ["D'un", "côté,", "Paris", "est", "beau,", "de", "l'autre,", "c'est", "cher"],
        translation: { TR: "Bir yandan Paris güzel, öte yandan pahalı.", EN: "On the one hand Paris is beautiful, on the other it's expensive." },
      },
      {
        type: "free",
        id: "opinion-argument-6",
        prompt: { TR: "Fransızca yaz: “Onun (erkek) haklı olduğunu düşünmüyorum.”", EN: "Write in French: “I don't think he's right.”" },
        answers: ["Je ne pense pas qu'il ait raison.", "Je ne crois pas qu'il ait raison."],
      },
    ],
  },
];
