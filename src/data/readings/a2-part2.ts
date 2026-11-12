import type { ReadingText } from "../../domain/types";

const texts: readonly ReadingText[] = [
  {
    id: "reading-relative-ou",
    lessonId: "relative-ou",
    level: "A2",
    title: { TR: "Büyüdüğüm kasaba", EN: "The town where I grew up" },
    paragraphs: [
      {
        fr: "Je m'appelle Clara et j'ai vingt-huit ans. Aujourd'hui, je vous présente la petite ville où j'ai grandi. Elle se trouve dans le sud de la France, très près de la mer. Pour moi, c'est l'endroit où je me sens le mieux au monde, même si je travaille maintenant à Paris. Mes parents habitent toujours dans la maison où je suis née, et je rentre chez eux dès que j'ai quelques jours de repos.",
        TR: "Adım Clara, yirmi sekiz yaşındayım. Bugün size büyüdüğüm küçük kasabayı anlatacağım. Fransa'nın güneyinde, denize çok yakın bir yerde. Şimdi Paris'te çalışıyor olsam da, benim için dünyada en iyi hissettiğim yer orası. Annemle babam hâlâ doğduğum evde oturuyor; birkaç günlük iznim olur olmaz onlara dönüyorum.",
        EN: "My name is Clara and I am twenty-eight years old. Today I am going to tell you about the small town where I grew up. It is in the south of France, very close to the sea. For me it is the place where I feel best in the world, even though I now work in Paris. My parents still live in the house where I was born, and I go back to them as soon as I have a few days off.",
      },
      {
        fr: "Dans le centre, il y a une grande place où se tient le marché. Le samedi matin est le jour où les gens sortent de chez eux. Les marchands vendent des fruits, du fromage et des fleurs. Il y a aussi un petit café où mon grand-père lisait son journal le matin. Le patron, que je connais bien, me prépare encore mon chocolat chaud préféré quand j'arrive.",
        TR: "Merkezde pazarın kurulduğu büyük bir meydan var. Cumartesi sabahı herkesin evinden çıktığı gün. Satıcılar meyve, peynir ve çiçek satıyor. Dedemin sabahları gazetesini okuduğu küçük bir kafe de var. Her zaman tanıdığım patron, ben gelince hâlâ en sevdiğim sıcak çikolatayı hazırlıyor.",
        EN: "In the centre there is a big square where the market is held. Saturday morning is the day when everybody comes out of their homes. The sellers sell fruit, cheese and flowers. There is also a little café where my grandfather used to read his newspaper in the morning. The owner, whom I have known forever, still makes my favourite hot chocolate when I arrive.",
      },
      {
        fr: "Près de la place, il y a l'école où j'ai appris à lire. Elle est petite, mais la cour où nous jouions nous semblait immense. Je me souviens du jour où j'ai perdu ma première dent dans cette cour : j'étais très fière, mais ma maîtresse n'a pas ri. Elle m'a donné un petit cadeau. Dans la même rue, on trouve la boulangerie où ma mère achète son pain, et le parc où j'ai fait du vélo pour la première fois.",
        TR: "Meydanın yakınında okuma öğrendiğim okul var. Küçük bir okul ama oynadığımız avlu bize kocaman görünürdü. O avluda ilk dişimi kaybettiğim günü hatırlıyorum: çok gururluydum, ama öğretmenim gülmedi. Bana küçük bir hediye verdi. Aynı sokakta annemin ekmeğini aldığı fırın ve ilk kez bisiklete bindiğim park da var.",
        EN: "Near the square there is the school where I learned to read. It is small, but the playground where we played seemed huge to us. I remember the day when I lost my first tooth in that playground: I was very proud, but my teacher did not laugh. She gave me a little present. In the same street you find the bakery where my mother buys her bread, and the park where I rode a bike for the first time.",
      },
      {
        fr: "Bien sûr, il y a aussi la plage où nous allions l'été avec mes cousins. C'est la plage où j'ai fait mes premiers pas dans l'eau. Elle est claire et calme, et le soir, nous mangions des glaces dans le petit restaurant où travaillait mon oncle. Ce sont des souvenirs que je garde avec soin, et chaque fois que je sens l'odeur de la mer, je pense à ces soirées.",
        TR: "Elbette bir de yazın kuzenlerimle gittiğimiz plaj var. Suya ilk adımlarımı attığım plaj orası. Berrak ve sakin; akşamları amcamın çalıştığı küçük lokantada dondurma yerdik. Bunlar özenle sakladığım anılar ve deniz kokusunu her duyduğumda o akşamları düşünüyorum.",
        EN: "Of course there is also the beach where we went in the summer with my cousins. It is the beach where I took my first steps in the water. It is clear and calm, and in the evening we ate ice cream in the little restaurant where my uncle worked. These are memories that I keep carefully, and every time I smell the sea, I think of those evenings.",
      },
      {
        fr: "Aujourd'hui, la ville change un peu. On construit un grand parking là où il y avait un jardin, et je trouve ça triste. Le musée où j'allais avec mon école est fermé, mais on va le rouvrir l'année prochaine. Je suis contente de voir que beaucoup de jeunes restent dans la ville où ils sont nés, parce que maintenant il y a du travail pour eux. Ma meilleure amie, qui a ouvert une librairie près du port, est un bon exemple.",
        TR: "Bugün kasaba biraz değişiyor. Eskiden bahçe olan yere büyük bir otopark yapılıyor ve bunu üzücü buluyorum. Okulumla gittiğim müze kapalı, ama gelecek yıl yeniden açılacak. Birçok gencin doğduğu kasabada kaldığını görmek beni mutlu ediyor, çünkü artık onlara iş var. Limanın yanında bir kitabevi açan en iyi arkadaşım bunun güzel bir örneği.",
        EN: "Today the town is changing a little. They are building a big car park where there used to be a garden, and I find that sad. The museum where I went with my school is closed, but they are going to reopen it next year. I am happy to see that many young people stay in the town where they were born, because there is work for them now. My best friend, who opened a bookshop near the harbour, is a good example.",
      },
      {
        fr: "Le dimanche, mon père m'emmenait dans la forêt où nous cherchions des champignons. C'est l'endroit où j'ai vu mon premier renard, un matin d'automne. Je n'oublierai jamais la nuit où il a fait un orage terrible : nous étions dans la maison de mes grands-parents, et la lumière s'est éteinte. Mon grand-père a allumé des bougies, et il nous a raconté des histoires de loups.",
        TR: "Pazarları babam beni mantar aradığımız ormana götürürdü. İlk tilkiyi bir sonbahar sabahı gördüğüm yer orası. Korkunç bir fırtına koptuğu geceyi asla unutmayacağım: büyükanne ve büyükbabamın evindeydik ve ışık söndü. Büyükbabam mumları yaktı ve bize kurt hikâyeleri anlattı.",
        EN: "On Sundays my father took me to the forest where we looked for mushrooms. It is the place where I saw my first fox, one autumn morning. I will never forget the night when there was a terrible storm: we were in my grandparents' house, and the light went out. My grandfather lit candles, and he told us stories about wolves.",
      },
      {
        fr: "Le week-end dernier, j'ai pris le train pour rentrer. Ma mère m'attendait sur le quai de la gare où je suis partie à dix-huit ans. Nous sommes allées droit dans la maison où nous mangeons toujours le dimanche, avec la famille entière. Je ne sais pas quand je vais quitter Paris, mais je sais où est mon vrai chez-moi. Et vous, où êtes-vous né ? Pensez à l'endroit où vous vous sentez à la maison.",
        TR: "Geçen hafta sonu eve dönmek için trene bindim. Annem, on sekiz yaşında yola çıktığım gar peronunda beni bekliyordu. Doğruca pazar günleri hep bütün aileyle yemek yediğimiz eve gittik. Paris'ten ne zaman ayrılacağımı bilmiyorum, ama gerçek yuvamın nerede olduğunu biliyorum. Peki ya siz, nerede doğdunuz? Kendinizi evinizde hissettiğiniz yeri düşünün.",
        EN: "Last weekend I took the train to go home. My mother was waiting for me on the platform of the station where I left at the age of eighteen. We went straight to the house where we always eat on Sundays, with the whole family. I do not know when I am going to leave Paris, but I know where my real home is. And you, where were you born? Think of the place where you feel at home.",
      },
    ],
    questions: [
      {
        question: { fr: "Où Clara a-t-elle grandi ?", TR: "Clara nerede büyüdü?", EN: "Where did Clara grow up?" },
        options: ["À Paris", "Dans une petite ville près de la mer", "À la montagne", "Dans un village près d'un lac"],
        answer: 1,
      },
      {
        question: { fr: "Quand le marché a-t-il lieu ?", TR: "Pazar ne zaman kuruluyor?", EN: "When does the market take place?" },
        options: ["Le dimanche soir", "Le vendredi après-midi", "Le samedi matin"],
        answer: 2,
      },
      {
        question: { fr: "Qui travaillait dans le petit restaurant de la plage ?", TR: "Plajdaki küçük lokantada kim çalışıyordu?", EN: "Who worked in the little restaurant on the beach?" },
        options: ["Son oncle", "Son grand-père", "Sa mère", "Son cousin"],
        answer: 0,
      },
      {
        question: { fr: "Que construit-on là où il y avait un jardin ?", TR: "Eskiden bahçe olan yere ne yapılıyor?", EN: "What are they building where there used to be a garden?" },
        options: ["Un musée", "Un parking", "Une librairie"],
        answer: 1,
      },
      {
        question: { fr: "Comment Clara rentre-t-elle chez ses parents le week-end dernier ?", TR: "Clara geçen hafta sonu ailesinin evine nasıl döndü?", EN: "How did Clara go home to her parents last weekend?" },
        options: ["En voiture", "En avion", "À vélo", "En train"],
        answer: 3,
      },
    ],
  },
  {
    id: "reading-negation-forms",
    lessonId: "negation-forms",
    level: "A2",
    title: { TR: "Ekransız bir hafta", EN: "A week without screens" },
    paragraphs: [
      {
        fr: "Théo a vingt-deux ans et il passe beaucoup trop de temps sur son téléphone. Un soir, sa sœur Inès lui lance un défi : une semaine sans réseaux sociaux. Au début, il refuse. « Je ne peux pas vivre sans mon téléphone ! » dit-il. Mais Inès insiste, et à la fin il accepte. Il n'a plus le droit de regarder ses applications, et il ne doit jamais ouvrir ses messages avant le dîner.",
        TR: "Théo yirmi iki yaşında ve telefonunda çok fazla zaman geçiriyor. Bir akşam kız kardeşi Inès ona bir meydan okuma yapıyor: sosyal medyasız bir hafta. Başta reddediyor. “Telefonum olmadan yaşayamam!” diyor. Ama Inès ısrar ediyor ve sonunda kabul ediyor. Artık uygulamalarına bakma hakkı yok ve akşam yemeğinden önce mesajlarını asla açmamalı.",
        EN: "Théo is twenty-two years old and he spends far too much time on his phone. One evening his sister Inès gives him a challenge: a week without social media. At first he refuses. “I can't live without my phone!” he says. But Inès insists, and in the end he accepts. He is no longer allowed to look at his apps, and he must never open his messages before dinner.",
      },
      {
        fr: "Le premier jour est difficile. Le matin, Théo ne sait pas quoi faire dans le métro. Il n'a rien à lire et il ne regarde personne. D'habitude, il passe le trajet à regarder des vidéos. Alors il observe les gens autour de lui. Il ne les connaît pas, mais il remarque beaucoup de détails : un homme qui lit un vieux livre, une femme qui écoute de la musique et qui sourit.",
        TR: "İlk gün zor geçiyor. Sabah Théo metroda ne yapacağını bilmiyor. Okuyacak hiçbir şeyi yok ve kimseye bakmıyor. Normalde yolculuğu video izleyerek geçiriyor. Bu yüzden çevresindeki insanları gözlemliyor. Onları tanımıyor ama birçok ayrıntı fark ediyor: eski bir kitap okuyan bir adam, müzik dinleyen ve gülümseyen bir kadın.",
        EN: "The first day is difficult. In the morning, Théo does not know what to do on the metro. He has nothing to read and he does not look at anyone. Usually he spends the journey watching videos. So he watches the people around him. He does not know them, but he notices many details: a man reading an old book, a woman who listens to music and smiles.",
      },
      {
        fr: "Le deuxième jour, il n'a pas encore l'habitude. Au travail, il ne répond plus aux messages de ses amis, et ils s'inquiètent. Personne ne comprend pourquoi il ne répond pas. Son collègue Marc lui demande : « Tu n'as aucun problème, j'espère ? » Théo rit et explique le défi. Marc le trouve courageux : lui n'a jamais essayé, et il n'a que son téléphone pour se détendre le soir.",
        TR: "İkinci gün henüz alışmış değil. İşte arkadaşlarının mesajlarına artık cevap vermiyor ve onlar endişeleniyor. Neden cevap vermediğini kimse anlamıyor. İş arkadaşı Marc ona soruyor: “Umarım hiçbir sorunun yoktur?” Théo gülüp meydan okumayı anlatıyor. Marc onu cesur buluyor: kendisi hiç denememiş ve akşamları rahatlamak için yalnızca telefonu var.",
        EN: "On the second day he is not used to it yet. At work he no longer answers his friends' messages, and they get worried. Nobody understands why he does not answer. His colleague Marc asks him: “You don't have any problem, I hope?” Théo laughs and explains the challenge. Marc finds him brave: he himself has never tried, and he has only his phone to relax in the evening.",
      },
      {
        fr: "Le troisième soir, Théo ne reste pas devant l'écran. Il n'allume ni la télévision ni l'ordinateur. Il prend un vieux livre et il lit deux heures sans s'arrêter. Il ne lit presque jamais de livres ! Ensuite, il appelle sa grand-mère, qu'il ne voit plus beaucoup. Elle est très heureuse : « Tu ne m'appelles jamais le soir, ça me fait plaisir ! » dit-elle.",
        TR: "Üçüncü akşam Théo ekranın karşısında oturmuyor. Ne televizyonu ne bilgisayarı açıyor. Eski bir kitap alıp iki saat durmadan okuyor. Uzun zamandır kitap okumamıştı! Sonra artık pek göremediği büyükannesini arıyor. Büyükannesi çok mutlu: “Beni akşamları hiç aramazsın, çok sevindim!” diyor.",
        EN: "On the third evening Théo does not stay in front of a screen. He turns on neither the television nor the computer. He takes an old book and reads for two hours without stopping. He has not read a book for a long time! Then he calls his grandmother, whom he does not see much any more. She is very happy: “You never call me in the evening, I'm so pleased!” she says.",
      },
      {
        fr: "Vers la fin de la semaine, Théo se sent plus calme. Il ne dort plus mal, il ne pense plus à ses notifications et il ne se plaint plus de son manque de temps. Il a même fait du sport deux fois ! Inès est fière de lui, mais elle ne veut pas encore le féliciter : « Tu n'as pas encore fini, il reste un jour. » Théo sourit. Il n'a plus peur du silence.",
        TR: "Haftanın sonuna doğru Théo kendini daha sakin hissediyor. Artık kötü uyumuyor, bildirimlerini düşünmüyor ve zaman yokluğundan şikâyet etmiyor. Hatta iki kez spor bile yaptı! Inès ile gurur duyuyor ama henüz onu kutlamak istemiyor: “Henüz bitirmedin, bir gün daha var.” Théo gülümsüyor. Artık sessizlikten korkmuyor.",
        EN: "Towards the end of the week Théo feels calmer. He no longer sleeps badly, he no longer thinks about his notifications and he no longer complains about not having enough time. He has even done sport twice! Inès is proud of him, but she does not want to congratulate him yet: “You haven't finished yet, there is one day left.” Théo smiles. He is no longer afraid of silence.",
      },
      {
        fr: "De son côté, Inès n'est pas sûre que son frère va tenir jusqu'au bout. Il n'a jamais fini un défi, et il n'a jamais gardé une bonne habitude plus de deux jours. Elle ne dit rien à ses parents, car elle ne veut pas lui mettre la pression. Le soir, elle ne l'appelle pas et elle n'envoie pas de message. Elle n'a qu'un seul espoir : que son frère lui prouve le contraire.",
        TR: "Inès ise kardeşinin sonuna kadar dayanacağından emin değil. Théo hiçbir meydan okumayı bitirmedi ve hiçbir iyi alışkanlığı iki günden fazla sürdürmedi. Ailesine bir şey söylemiyor, çünkü ona baskı yapmak istemiyor. Akşamları onu aramıyor ve mesaj atmıyor. Tek bir umudu var: kardeşinin ona aksini kanıtlaması.",
        EN: "For her part, Inès is not sure that her brother will last to the end. He has never finished a challenge, and he has never kept a good habit for more than two days. She says nothing to her parents, because she does not want to put pressure on him. In the evening she does not call him and she does not send a message. She has only one hope: that her brother proves her wrong.",
      },
      {
        fr: "Le dernier soir, il reprend son téléphone. Il y a trois cents notifications, mais il n'en lit que dix. Presque rien d'important ne s'est passé ! Personne n'a eu besoin de lui. Théo comprend alors une chose : il ne veut plus être connecté en permanence. Désormais, il n'utilise ses applications que le week-end, et il n'ouvre plus jamais son téléphone à table.",
        TR: "Son akşam telefonunu geri alıyor. Üç yüz bildirim var ama yalnızca on tanesini okuyor. Neredeyse önemli hiçbir şey olmamış! Kimsenin ona ihtiyacı olmamış. Théo o zaman bir şeyi anlıyor: artık sürekli bağlantıda olmak istemiyor. Bundan sonra uygulamalarını yalnızca hafta sonları kullanıyor ve yemek sırasında telefonunu bir daha asla açmıyor.",
        EN: "On the last evening he takes his phone back. There are three hundred notifications, but he reads only ten of them. Almost nothing important has happened! Nobody needed him. Théo then understands one thing: he no longer wants to be connected all the time. From now on he uses his apps only at the weekend, and he never opens his phone during a meal again.",
      },
    ],
    questions: [
      {
        question: { fr: "Qui lance le défi à Théo ?", TR: "Théo'ya meydan okumayı kim yapıyor?", EN: "Who gives Théo the challenge?" },
        options: ["Sa grand-mère", "Sa sœur Inès", "Son collègue Marc"],
        answer: 1,
      },
      {
        question: { fr: "Que fait Théo dans le métro le premier jour ?", TR: "Théo ilk gün metroda ne yapıyor?", EN: "What does Théo do on the metro on the first day?" },
        options: ["Il regarde des vidéos", "Il lit un livre", "Il observe les gens", "Il dort"],
        answer: 2,
      },
      {
        question: { fr: "Pourquoi sa grand-mère est-elle contente ?", TR: "Büyükannesi neden mutlu?", EN: "Why is his grandmother happy?" },
        options: ["Il l'appelle le soir, ce qu'il ne fait jamais", "Il vient dîner chez elle", "Il lui offre un livre", "Il lui envoie un message"],
        answer: 0,
      },
      {
        question: { fr: "Combien de notifications Théo lit-il le dernier soir ?", TR: "Théo son akşam kaç bildirim okuyor?", EN: "How many notifications does Théo read on the last evening?" },
        options: ["Trois cents", "Dix", "Aucune"],
        answer: 1,
      },
      {
        question: { fr: "Que décide Théo à la fin ?", TR: "Théo sonunda ne karar veriyor?", EN: "What does Théo decide at the end?" },
        options: ["Il va supprimer tous ses comptes", "Il va acheter un nouveau téléphone", "Il n'utilisera ses applications que le week-end", "Il va refaire le défi chaque mois"],
        answer: 2,
      },
    ],
  },
  {
    id: "reading-time-expressions",
    lessonId: "time-expressions",
    level: "A2",
    title: { TR: "Montréal'den bir e-posta", EN: "An email from Montréal" },
    paragraphs: [
      {
        fr: "Chère Sophie, je t'écris de Montréal, où j'habite depuis trois mois. Il y a six mois, je ne pensais pas partir si loin ! Mais un jour, mon entreprise m'a proposé un poste ici, et j'ai accepté en une journée. Je suis arrivée il y a quatre-vingt-dix jours pile, avec deux valises et beaucoup d'idées dans la tête. Aujourd'hui, je suis contente de mon choix.",
        TR: "Sevgili Sophie, sana üç aydır yaşadığım Montréal'den yazıyorum. Altı ay önce bu kadar uzağa gideceğimi hiç düşünmüyordum! Ama bir gün şirketim bana burada bir pozisyon önerdi ve ben bir günde kabul ettim. Tam doksan gün önce, iki bavul ve kafamda bir sürü fikirle geldim. Bugün seçimimden memnunum.",
        EN: "Dear Sophie, I am writing to you from Montréal, where I have been living for three months. Six months ago I did not think at all that I would go so far away! But one day my company offered me a job here, and I accepted in a single day. I arrived ninety days ago exactly, with two suitcases and a lot of ideas in my head. Today I am happy with my choice.",
      },
      {
        fr: "Le début n'a pas été facile. Pendant les deux premières semaines, j'ai dormi dans un petit hôtel près de la gare, car je cherchais un appartement. J'ai trouvé le mien en dix jours, ce qui est rapide ici. Il est situé dans un quartier calme, et je vais y rester pendant un an au moins. Mon propriétaire, un monsieur très gentil, m'a même prêté une lampe et une table !",
        TR: "Başlangıç kolay olmadı. İlk iki hafta boyunca gara yakın küçük bir otelde kaldım, çünkü ev arıyordum. Kendi evimi on günde buldum, bu burada hızlı sayılır. Sakin bir semtte ve en az bir yıl orada kalacağım. Ev sahibim, çok nazik bir bey, bana bir lamba ve bir masa bile ödünç verdi!",
        EN: "The beginning was not easy. For the first two weeks I slept in a small hotel near the station, because I was looking for an apartment. I found mine in ten days, which is fast here. It is in a quiet neighbourhood, and I am going to stay there for at least a year. My landlord, a very kind man, even lent me a lamp and a table!",
      },
      {
        fr: "Au travail, ça se passe bien. Je suis dans l'équipe depuis le 1er septembre. Mes collègues sont sympathiques et ils m'aident beaucoup. Mon chef me dit que mon projet sera terminé dans deux mois. Il est vrai que je travaille beaucoup : je reste au bureau jusqu'à sept heures. Mais je prends toujours le temps de déjeuner avec mes collègues pendant une heure. C'est une habitude québécoise que j'aime.",
        TR: "İşte her şey yolunda gidiyor. Eylülün birinden beri ekibin içindeyim. İş arkadaşlarım sevimli ve bana çok yardım ediyorlar. Şefim projemin iki ay içinde biteceğini söylüyor. Doğru, çok çalışıyorum: saat yediye kadar ofiste kalıyorum. Ama iş arkadaşlarımla bir saat boyunca öğle yemeği yemek için her zaman zaman ayırıyorum. Hoşuma giden Quebec usulü bir alışkanlık bu.",
        EN: "At work everything is going well. I have been in the team since 1 September. My colleagues are friendly and they help me a lot. My boss tells me that my project will be finished in two months. It is true that I work a lot: I stay at the office until seven o'clock. But I always take the time to have lunch with my colleagues for an hour. It is a Quebec habit that I like.",
      },
      {
        fr: "Je dois te raconter une anecdote. Il y a deux semaines, je suis allée à un match de hockey avec des amis. Je n'avais jamais vu un match ! Nous avons crié pendant trois heures, et j'ai appris les règles en quelques minutes. Maintenant, je suis fan : je regarde les matchs à la télé depuis ce soir-là. Mon voisin dit que je parle déjà comme une vraie Québécoise.",
        TR: "Sana bir anekdot anlatmalıyım. İki hafta önce arkadaşlarımla bir hokey maçına gittim. Hiç maç görmemiştim! Üç saat boyunca bağırdık ve kuralları birkaç dakikada öğrendim. Şimdi taraftarım: o geceden beri maçları televizyondan izliyorum. Komşum şimdiden gerçek bir Quebecli gibi konuştuğumu söylüyor.",
        EN: "I must tell you an anecdote. Two weeks ago I went to an ice hockey game with friends. I had never seen a game! We shouted for three hours, and I learned the rules in a few minutes. Now I am a fan: I have been watching the games on TV since that night. My neighbour says that I already speak like a real Quebecer.",
      },
      {
        fr: "Ici, l'hiver commence en novembre. Il neige déjà, et il fait moins dix degrés ! En décembre, le thermomètre va descendre à moins vingt. Je me suis acheté un gros manteau il y a une semaine. Les gens disent que le froid dure jusqu'en avril, mais que l'été, en juillet, est magnifique. On m'a aussi conseillé de faire du ski : j'ai déjà réservé un week-end à la montagne, dans trois semaines.",
        TR: "Burada kış kasımda başlıyor. Şimdiden kar yağıyor ve hava eksi on derece! Aralıkta termometre eksi yirmiye düşecek. Bir hafta önce kendime kalın bir mont aldım. İnsanlar soğuğun nisana kadar sürdüğünü ama temmuzdaki yazın muhteşem olduğunu söylüyor. Bana kayak yapmamı da tavsiye ettiler: üç hafta sonrası için dağda bir hafta sonu bile ayırttım.",
        EN: "Here winter starts in November. It is already snowing, and it is minus ten degrees! In December the thermometer will drop to minus twenty. I bought myself a big coat a week ago. People say that the cold lasts until April, but that the summer, in July, is wonderful. I have also been advised to go skiing: I have already booked a weekend in the mountains, in three weeks.",
      },
      {
        fr: "Pour mes cours de français, j'étudie avec une collègue québécoise depuis septembre. Elle m'a dit il y a un mois que mon accent s'améliore. Nous nous voyons deux fois par semaine, pendant la pause de midi. Dans quinze jours, je passe un examen important. Je me prépare pendant une heure le soir, et je ne sors presque plus. Je t'écrirai dans trois semaines pour te donner mes résultats !",
        TR: "Fransızca derslerim için eylülden beri Quebecli bir iş arkadaşımla çalışıyorum. Bir ay önce aksanımın düzeldiğini söyledi. Haftada iki kez, öğle arasında görüşüyoruz. İki hafta sonra önemli bir sınava giriyorum. Akşamları bir saat hazırlanıyorum ve neredeyse hiç dışarı çıkmıyorum. Sonuçlarımı vermek için üç hafta sonra sana yazacağım!",
        EN: "For my French classes I have been studying with a Quebec colleague since September. She told me a month ago that my accent is improving. We meet twice a week, during the lunch break. In two weeks I am taking an important exam. I prepare for an hour in the evening, and I hardly go out any more. I will write to you in three weeks to give you my results!",
      },
      {
        fr: "Et toi, quand viens-tu me voir ? Tu m'as dit que tu pouvais venir dans six mois, mais c'est trop long ! Réfléchis bien : je t'attends depuis mon arrivée. Je suis sûre que tu vas adorer la ville. Réponds vite, je lis tes messages en un clin d'œil. Je t'embrasse très fort, et à bientôt, j'espère ! Maya",
        TR: "Peki sen, beni görmeye ne zaman geliyorsun? Altı ay içinde gelebileceğini söylemiştin ama bu çok uzun! İyi düşün: geldiğimden beri seni bekliyorum. Şehri çok seveceğinden eminim. Çabuk cevap ver, mesajlarını göz açıp kapayıncaya kadar okurum. Seni çok öpüyorum, umarım yakında görüşürüz! Maya",
        EN: "And you, when are you coming to see me? You told me you could come in six months, but that is too long! Think about it: I have been waiting for you since I arrived. I am sure you will love the city. Answer me quickly, I read your messages in the blink of an eye. Big hugs, and see you soon, I hope! Maya",
      },
    ],
    questions: [
      {
        question: { fr: "Depuis quand Maya habite-t-elle à Montréal ?", TR: "Maya ne zamandır Montréal'de yaşıyor?", EN: "How long has Maya been living in Montréal?" },
        options: ["Depuis trois semaines", "Depuis un an", "Depuis trois mois", "Depuis six mois"],
        answer: 2,
      },
      {
        question: { fr: "Combien de temps a-t-elle cherché son appartement ?", TR: "Dairesini ne kadar süre aradı?", EN: "How long did she look for her apartment?" },
        options: ["Dix jours", "Deux mois", "Une journée"],
        answer: 0,
      },
      {
        question: { fr: "Quand le projet de Maya sera-t-il terminé ?", TR: "Maya'nın projesi ne zaman bitecek?", EN: "When will Maya's project be finished?" },
        options: ["Dans deux semaines", "Dans deux mois", "Dans deux ans"],
        answer: 1,
      },
      {
        question: { fr: "Qu'est-ce que Maya a fait il y a deux semaines ?", TR: "Maya iki hafta önce ne yaptı?", EN: "What did Maya do two weeks ago?" },
        options: ["Elle a acheté un manteau", "Elle a fait du ski", "Elle a visité un musée", "Elle est allée voir un match de hockey"],
        answer: 3,
      },
      {
        question: { fr: "Pourquoi Maya trouve-t-elle que son amie est trop longue à venir ?", TR: "Maya, arkadaşının gelmesinin neden çok uzun sürdüğünü düşünüyor?", EN: "Why does Maya think her friend is taking too long to come?" },
        options: ["Parce qu'elle va partir en juillet", "Parce que son amie parle de venir dans six mois", "Parce que l'hiver est très court"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-venir-de-en-train-de",
    lessonId: "venir-de-en-train-de",
    level: "A2",
    title: { TR: "Çılgın bir sabah", EN: "A crazy morning" },
    paragraphs: [
      {
        fr: "Il est huit heures du matin chez la famille Moreau, et c'est le chaos. Camille, la mère, est en train de préparer le petit-déjeuner pendant que son mari Paul est en train de chercher ses clés. Elle vient de se lever, et elle a déjà trois choses à faire. Dans la cuisine, le café vient de commencer à couler, et le pain est en train de griller. Les enfants, eux, dorment encore.",
        TR: "Saat sabah sekiz, Moreau ailesinin evinde ortalık karışık. Anne Camille kahvaltıyı hazırlıyor, kocası Paul ise anahtarlarını arıyor. Camille yeni kalktı ve şimdiden yapacak üç işi var. Mutfakta kahve yeni akmaya başladı, ekmek de kızarıyor. Çocuklar ise hâlâ uyuyor.",
        EN: "It is eight o'clock in the morning at the Moreau family's house, and it is chaos. Camille, the mother, is preparing breakfast while her husband Paul is looking for his keys. She has just got up, and she already has three things to do. In the kitchen the coffee has just started to run, and the bread is toasting. The children are still asleep.",
      },
      {
        fr: "« Léo ! Emma ! Debout ! » crie Camille. Léo, huit ans, répond d'une petite voix : « Je viens de me réveiller, maman ! » En réalité, il est en train de lire une bande dessinée dans son lit. Sa sœur Emma, qui a quatorze ans, vient de recevoir un message d'une amie. Elle est en train de répondre, et elle n'entend rien. Camille soupire : elle connaît bien ses enfants.",
        TR: "“Léo! Emma! Kalkın!” diye bağırıyor Camille. Sekiz yaşındaki Léo küçük bir sesle cevap veriyor: “Şimdi uyandım anne!” Aslında yatağında bir çizgi roman okuyor. On dört yaşındaki kız kardeşi Emma ise bir arkadaşından yeni mesaj aldı. Cevap yazıyor ve hiçbir şey duymuyor. Camille iç çekiyor: çocuklarını iyi tanıyor.",
        EN: "“Léo! Emma! Get up!” shouts Camille. Léo, eight years old, answers in a small voice: “I've just woken up, Mum!” In reality he is reading a comic in his bed. His sister Emma, who is fourteen, has just received a message from a friend. She is replying, and she hears nothing. Camille sighs: she knows her children well.",
      },
      {
        fr: "À ce moment-là, le téléphone sonne. C'est la grand-mère, qui vient d'arriver à la gare. « Je suis en train de chercher un taxi, dit-elle. Je viens de voir votre voisin, il m'a dit bonjour ! » Camille est surprise : elle avait oublié que sa mère arrivait aujourd'hui. Elle regarde la maison : les chambres sont en désordre, la table n'est pas mise, et personne n'est prêt.",
        TR: "O sırada telefon çalıyor. Az önce gara varan büyükanne arıyor. “Taksi arıyorum,” diyor. “Az önce komşunuzu gördüm, bana merhaba dedi!” Camille şaşırıyor: annesinin bugün geleceğini unutmuştu. Eve bakıyor: odalar dağınık, masa kurulmamış ve kimse hazır değil.",
        EN: "At that moment the phone rings. It is the grandmother, who has just arrived at the station. “I'm looking for a taxi,” she says. “I've just seen your neighbour, he said hello to me!” Camille is surprised: she had forgotten that her mother was arriving today. She looks at the house: the bedrooms are messy, the table is not laid, and nobody is ready.",
      },
      {
        fr: "Paul, qui vient de trouver ses clés, entre dans la cuisine. « Qu'est-ce qui se passe ? » demande-t-il. « Ma mère vient d'appeler, elle arrive dans vingt minutes ! » répond Camille. Paul est en train de mettre sa veste, mais il l'enlève aussitôt : il va aider. Il met la table pendant que Camille est en train de ranger le salon. Ils travaillent vite, comme une équipe de sport.",
        TR: "Anahtarlarını yeni bulan Paul mutfağa giriyor. “Ne oluyor?” diye soruyor. “Annem az önce aradı, yirmi dakika sonra geliyor!” diye cevap veriyor Camille. Paul ceketini giyiyordu ama hemen çıkarıyor: yardım edecek. Camille oturma odasını toplarken o masayı kuruyor. Hızlı çalışıyorlar, bir spor takımı gibi.",
        EN: "Paul, who has just found his keys, comes into the kitchen. “What is going on?” he asks. “My mother has just called, she is arriving in twenty minutes!” answers Camille. Paul is putting on his jacket, but he takes it off at once: he is going to help. He lays the table while Camille is tidying the living room. They work fast, like a sports team.",
      },
      {
        fr: "Dans la chambre des enfants, c'est un autre problème. Léo est en train de jouer avec ses voitures, et il ne veut pas ranger. Emma vient de mettre de la musique très fort. Camille ouvre la porte : « Les enfants, votre grand-mère vient d'arriver à la gare ! Vous êtes en train de perdre du temps ! » Cette fois, les deux enfants comprennent. Ils se lèvent, et ils se mettent au travail.",
        TR: "Çocukların odasında başka bir sorun var. Léo arabalarıyla oynuyor ve toplamak istemiyor. Emma az önce müziği çok yüksek açtı. Camille kapıyı açıyor: “Çocuklar, büyükanneniz az önce gara geldi! Vakit kaybediyorsunuz!” Bu sefer ikisi de anlıyor. Kalkıp işe koyuluyorlar.",
        EN: "In the children's room there is another problem. Léo is playing with his cars, and he does not want to tidy up. Emma has just put music on very loud. Camille opens the door: “Children, your grandmother has just arrived at the station! You are wasting time!” This time both children understand. They get up and set to work.",
      },
      {
        fr: "Dans le salon, un nouveau problème apparaît : le chat vient de renverser un verre de jus d'orange sur le tapis. Paul est en train de chercher un chiffon quand Léo arrive à toute vitesse : « Papa, le chat vient de faire une bêtise ! » « Oui, je viens de le voir », répond Paul avec un soupir. Camille, qui est en train de ranger les livres, regarde la tache et n'ose rien dire. Il ne reste plus beaucoup de temps.",
        TR: "Oturma odasında yeni bir sorun çıkıyor: kedi halının üstüne bir bardak portakal suyu devirdi. Paul bir bez ararken Léo son hızla geliyor: “Baba, kedi az önce bir yaramazlık yaptı!” “Evet, az önce gördüm,” diye cevap veriyor Paul iç çekerek. Kitapları toplamakta olan Camille lekeye bakıyor ve bir şey söylemeye cesaret edemiyor. Çok fazla zaman kalmadı.",
        EN: "In the living room a new problem appears: the cat has just knocked a glass of orange juice onto the carpet. Paul is looking for a cloth when Léo arrives at full speed: “Dad, the cat has just done something naughty!” “Yes, I've just seen it,” answers Paul with a sigh. Camille, who is putting the books away, looks at the stain and does not dare to say anything. There is not much time left.",
      },
      {
        fr: "Dix-neuf minutes plus tard, la sonnette retentit. Camille vient de poser le dernier verre sur la table, et Paul est en train de sortir le gâteau du four. La grand-mère entre, regarde la maison propre, et sourit : « C'est une belle surprise ! Vous êtes en train de me préparer un vrai petit-déjeuner ? » Camille éclate de rire. Elle vient de survivre à la matinée la plus folle de la semaine !",
        TR: "On dokuz dakika sonra kapı zili çalıyor. Camille son bardağı masaya yeni koydu, Paul ise pastayı fırından çıkarıyor. Büyükanne giriyor, temiz eve bakıyor ve gülümsüyor: “Ne güzel bir sürpriz! Bana gerçek bir kahvaltı mı hazırlıyorsunuz?” Camille kahkahayı basıyor. Haftanın en çılgın sabahından yeni sağ çıktı!",
        EN: "Nineteen minutes later the doorbell rings. Camille has just put the last glass on the table, and Paul is taking the cake out of the oven. The grandmother comes in, looks at the clean house, and smiles: “What a lovely surprise! Are you preparing a real breakfast for me?” Camille bursts out laughing. She has just survived the craziest morning of the week!",
      },
    ],
    questions: [
      {
        question: { fr: "Que fait Paul au début du texte ?", TR: "Metnin başında Paul ne yapıyor?", EN: "What is Paul doing at the beginning of the text?" },
        options: ["Il prépare le petit-déjeuner", "Il cherche ses clés", "Il range le salon", "Il lit une bande dessinée"],
        answer: 1,
      },
      {
        question: { fr: "Que fait Léo dans son lit ?", TR: "Léo yatağında ne yapıyor?", EN: "What does Léo do in his bed?" },
        options: ["Il dort", "Il écoute de la musique", "Il lit une bande dessinée"],
        answer: 2,
      },
      {
        question: { fr: "Qui vient d'arriver à la gare ?", TR: "Gara yeni kim geldi?", EN: "Who has just arrived at the station?" },
        options: ["La grand-mère", "La voisine", "Une amie d'Emma"],
        answer: 0,
      },
      {
        question: { fr: "Dans combien de temps la grand-mère arrive-t-elle chez les Moreau ?", TR: "Büyükanne Moreau'ların evine kaç dakika sonra geliyor?", EN: "How soon does the grandmother arrive at the Moreaus' house?" },
        options: ["Dans une heure", "Dans vingt minutes", "Dans cinq minutes", "Demain"],
        answer: 1,
      },
      {
        question: { fr: "Que pense la grand-mère quand elle entre ?", TR: "Büyükanne içeri girerken ne düşünüyor?", EN: "What does the grandmother think when she comes in?" },
        options: ["Que la maison est en désordre", "Que le petit-déjeuner est froid", "Que la surprise est belle", "Qu'elle est trop tôt"],
        answer: 2,
      },
    ],
  },
  {
    id: "reading-adverbs-ment",
    lessonId: "adverbs-ment",
    level: "A2",
    title: { TR: "Bir yemek kursu", EN: "A cooking class" },
    paragraphs: [
      {
        fr: "Samedi dernier, j'ai suivi mon premier cours de cuisine. Je cuisine rarement chez moi, et mes amis disent que je mange mal. Heureusement, ma voisine Nadia m'a invité à venir avec elle. Le cours a lieu dans une petite cuisine moderne, près de la gare. Nous sommes arrivés à dix heures précises, et le professeur nous a accueillis chaleureusement avec un grand sourire.",
        TR: "Geçen cumartesi ilk yemek kursuma katıldım. Evde nadiren yemek yapıyorum ve arkadaşlarım kötü beslendiğimi söylüyor. Neyse ki komşum Nadia beni kendisiyle gelmeye davet etti. Kurs, gara yakın küçük, modern bir mutfakta yapılıyor. Saat tam ona vardık ve öğretmen bizi büyük bir gülümsemeyle sıcak bir şekilde karşıladı.",
        EN: "Last Saturday I took my first cooking class. I rarely cook at home, and my friends say that I eat badly. Luckily, my neighbour Nadia invited me to come with her. The class takes place in a small modern kitchen near the station. We arrived at ten o'clock sharp, and the teacher welcomed us warmly with a big smile.",
      },
      {
        fr: "Il s'appelle Bruno, il est italien, et il parle couramment français. Il nous a expliqué calmement le programme : nous allions préparer une soupe, des pâtes et un gâteau au chocolat. « Écoutez attentivement, a-t-il dit, et surtout, travaillez lentement. La cuisine n'est pas une course ! » Moi, j'ai aussitôt compris que j'étais dans le bon endroit.",
        TR: "Adı Bruno, İtalyan ve Fransızcayı akıcı konuşuyor. Programı bize sakin bir şekilde anlattı: bir çorba, makarna ve çikolatalı bir kek yapacaktık. “Dikkatle dinleyin,” dedi, “ve özellikle yavaş çalışın. Mutfak bir yarış değil!” Ben doğru yerde olduğumu hemen anladım.",
        EN: "His name is Bruno, he is Italian, and he speaks French fluently. He explained the programme to us calmly: we were going to prepare a soup, some pasta and a chocolate cake. “Listen carefully,” he said, “and above all, work slowly. Cooking is not a race!” I immediately understood that I was in the right place.",
      },
      {
        fr: "Pour la soupe, j'ai coupé les légumes très maladroitement. Nadia, elle, les coupait rapidement et proprement. Elle m'a gentiment montré comment tenir le couteau. Bruno a regardé mon travail et a répondu poliment : « C'est un bon début. » Je savais qu'il mentait un peu, mais j'ai apprécié son tact. Évidemment, les morceaux n'avaient pas tous la même taille !",
        TR: "Çorba için sebzeleri çok beceriksizce doğradım. Nadia ise onları hızlı ve temiz doğruyordu. Bıçağı nasıl tutacağımı nazikçe gösterdi. Bruno işime bakıp kibarca cevap verdi: “İyi bir başlangıç.” Biraz yalan söylediğini biliyordum ama inceliğini takdir ettim. Elbette parçaların hepsi aynı boyutta değildi!",
        EN: "For the soup I cut the vegetables very clumsily. Nadia cut hers quickly and neatly. She kindly showed me how to hold the knife. Bruno looked at my work and answered politely: “It's a good start.” I knew he was lying a little, but I appreciated his tact. Obviously, the pieces were not all the same size!",
      },
      {
        fr: "Après la soupe, nous avons préparé les pâtes. Cette fois, j'ai écouté attentivement et j'ai suivi exactement les instructions. Bruno nous a rappelé de saler l'eau généreusement et de remuer doucement la sauce. « Ne versez pas l'huile brusquement ! » a-t-il crié quand j'ai laissé tomber la bouteille. Nous avons éclaté de rire, et Bruno aussi. L'ambiance était vraiment agréable.",
        TR: "Sonra makarnayı hazırladık. Bu sefer dikkatle dinledim ve talimatları tam olarak uyguladım. Bruno bize suyu cömertçe tuzlamamızı ve sosu yavaşça karıştırmamızı hatırlattı. “Yağı aniden dökmeyin!” diye bağırdı, ben şişeyi düşürünce. Hepimiz kahkahayı bastık, Bruno da. Ortam gerçekten hoştu.",
        EN: "Then we prepared the pasta. This time I listened carefully and followed the instructions exactly. Bruno reminded us to salt the water generously and to stir the sauce gently. “Don't pour the oil suddenly!” he shouted when I dropped the bottle. We burst out laughing, and Bruno too. The atmosphere was really pleasant.",
      },
      {
        fr: "Le gâteau, enfin, a été la partie la plus difficile. Il fallait mélanger patiemment le chocolat et le beurre, puis ajouter lentement la farine. Nadia a réussi parfaitement. Moi, j'ai oublié le sucre et j'ai dû recommencer. Heureusement, il restait du temps. Quand le gâteau est sorti du four, il sentait merveilleusement bon, et nous avons attendu impatiemment le moment de goûter.",
        TR: "Kek ise en zor kısım oldu. Çikolatayı ve tereyağını sabırla karıştırmak, sonra unu yavaşça eklemek gerekiyordu. Nadia mükemmel başardı. Ben şekeri unuttum ve baştan başlamak zorunda kaldım. Neyse ki zaman kalmıştı. Kek fırından çıkınca harika kokuyordu ve tatma anını sabırsızlıkla bekledik.",
        EN: "The cake, finally, was the most difficult part. We had to mix the chocolate and the butter patiently, then add the flour slowly. Nadia succeeded perfectly. I forgot the sugar and had to start again. Luckily there was still time. When the cake came out of the oven it smelled wonderful, and we waited impatiently for the moment to taste it.",
      },
      {
        fr: "Pendant la pause, Bruno nous a raconté sa vie. Il est arrivé en France récemment, et il travaille dur depuis. Il parle de sa famille affectueusement : sa mère, dit-il, cuisine merveilleusement bien, et c'est elle qui lui a appris les secrets de la cuisine italienne. Nadia l'écoutait attentivement, et moi, je posais des questions timidement, car je ne voulais pas le déranger.",
        TR: "Mola sırasında Bruno bize hayatını anlattı. Fransa'ya yakın zamanda geldi ve o günden beri çok çalışıyor. Ailesinden sevgiyle söz ediyor: annesinin harika yemek yaptığını ve İtalyan mutfağının sırlarını ona öğretenin o olduğunu söylüyor. Nadia onu dikkatle dinliyordu, ben ise çekinerek sorular soruyordum, çünkü onu rahatsız etmek istemiyordum.",
        EN: "During the break Bruno told us about his life. He arrived in France recently, and he has been working hard since. He speaks about his family affectionately: his mother, he says, cooks wonderfully well, and it is she who taught him the secrets of Italian cooking. Nadia listened to him attentively, and I asked questions shyly, because I did not want to disturb him.",
      },
      {
        fr: "Pendant que le gâteau refroidissait, Bruno nous a distribué les recettes. Il les avait écrites soigneusement à la main, avec de petits dessins. « Gardez-les précieusement, a-t-il dit, et surtout, ne changez pas les quantités ! » Nadia a immédiatement pris une photo de la sienne. Moi, j'ai rangé la mienne délicatement dans mon sac, comme un trésor, et j'ai remercié Bruno chaleureusement.",
        TR: "Kek soğurken Bruno bize tarifleri dağıttı. Onları küçük çizimlerle birlikte, özenle elle yazmıştı. “Onları dikkatle saklayın,” dedi, “ve özellikle miktarları değiştirmeyin!” Nadia kendisininkinin hemen fotoğrafını çekti. Ben benimkini bir hazine gibi nazikçe çantama koydum ve Bruno'ya sıcak bir şekilde teşekkür ettim.",
        EN: "While the cake was cooling, Bruno handed out the recipes. He had written them carefully by hand, with little drawings. “Keep them safely,” he said, “and above all, don't change the quantities!” Nadia immediately took a photo of hers. I put mine gently in my bag, like a treasure, and I thanked Bruno warmly.",
      },
      {
        fr: "À midi, nous avons mangé ensemble ce que nous avions préparé. Franchement, la soupe était excellente, et même mes pâtes étaient correctes. Bruno m'a annoncé gentiment que j'avais beaucoup progressé. Il a ajouté avec un sourire : « Revenez régulièrement, et vous cuisinerez bientôt comme un chef. » Je me suis déjà inscrit pour le mois prochain. Maintenant, mes amis me demandent constamment des nouvelles de mes recettes !",
        TR: "Öğlen hazırladıklarımızı birlikte yedik. Açıkçası çorba mükemmeldi ve benim makarnam bile fena değildi. Bruno bana nazikçe çok ilerlediğimi söyledi. Gülümseyerek ekledi: “Düzenli olarak gelin, yakında bir şef gibi yemek yaparsınız.” Gelecek ay için şimdiden kaydoldum. Artık arkadaşlarım sürekli tariflerimi soruyor!",
        EN: "At noon we ate together what we had prepared. Frankly, the soup was excellent, and even my pasta was decent. Bruno kindly told me that I had made a lot of progress. He added with a smile: “Come back regularly, and you will soon cook like a chef.” I have already signed up for next month. Now my friends constantly ask me about my recipes!",
      },
    ],
    questions: [
      {
        question: { fr: "Qui a invité le narrateur au cours de cuisine ?", TR: "Anlatıcıyı yemek kursuna kim davet etti?", EN: "Who invited the narrator to the cooking class?" },
        options: ["Son professeur", "Sa voisine Nadia", "Sa mère", "Son ami Bruno"],
        answer: 1,
      },
      {
        question: { fr: "Quelle langue parle Bruno ?", TR: "Bruno hangi dili konuşuyor?", EN: "Which language does Bruno speak?" },
        options: ["L'italien seulement", "Il parle français couramment", "Il ne parle pas français"],
        answer: 1,
      },
      {
        question: { fr: "Que fait Nadia quand elle coupe les légumes ?", TR: "Nadia sebzeleri doğrarken ne yapıyor?", EN: "What does Nadia do when she cuts the vegetables?" },
        options: ["Elle les coupe maladroitement", "Elle les coupe rapidement et proprement", "Elle ne les coupe pas"],
        answer: 1,
      },
      {
        question: { fr: "Pourquoi le narrateur recommence-t-il le gâteau ?", TR: "Anlatıcı keki neden baştan yapıyor?", EN: "Why does the narrator start the cake again?" },
        options: ["Il a brûlé le gâteau", "Il a oublié le sucre", "Il a perdu la farine", "Le four ne marche pas"],
        answer: 1,
      },
      {
        question: { fr: "Que fait le narrateur à la fin ?", TR: "Anlatıcı sonunda ne yapıyor?", EN: "What does the narrator do at the end?" },
        options: ["Il quitte le cours", "Il s'inscrit pour le mois prochain", "Il invite ses amis à dîner", "Il achète un livre de cuisine"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-tout",
    lessonId: "tout",
    level: "A2",
    title: { TR: "Büyük bir pazar yemeği", EN: "A big Sunday lunch" },
    paragraphs: [
      {
        fr: "Tous les dimanches, la famille Bernard se réunit chez les grands-parents, à la campagne. Toute la famille est là : les parents, les oncles, les tantes, les cousins, et même le chien. C'est une tradition que tout le monde aime. Moi, Julie, j'ai quinze ans, et j'attends ce moment toute la semaine. Pour nous, le dimanche est le jour le plus important.",
        TR: "Her pazar Bernard ailesi kırsalda büyükanne ve büyükbabanın evinde toplanır. Bütün aile orada: anne baba, amcalar, teyzeler, kuzenler ve hatta köpek. Herkesin sevdiği bir gelenek bu. Ben, Julie, on beş yaşındayım ve bu anı bütün hafta boyunca bekliyorum. Bizim için pazar en önemli gündür.",
        EN: "Every Sunday the Bernard family gets together at the grandparents' house in the countryside. The whole family is there: parents, uncles, aunts, cousins, and even the dog. It is a tradition that everybody loves. I, Julie, am fifteen years old, and I wait for this moment all week. For us, Sunday is the most important day.",
      },
      {
        fr: "Ma grand-mère commence à cuisiner dès le samedi. Elle prépare tout elle-même : le rôti, les légumes, les tartes. Toute la maison sent bon dès le matin. Mon grand-père, lui, s'occupe du jardin. Il y passe toute la matinée et il ramène des tomates, des haricots et des fleurs. Il dit toujours que tout est meilleur quand on le cultive soi-même.",
        TR: "Büyükannem cumartesiden itibaren yemek yapmaya başlar. Her şeyi kendisi hazırlar: rosto, sebzeler, turtalar. Bütün ev sabahtan itibaren güzel kokar. Büyükbabam ise bahçeyle ilgilenir. Bütün sabahı orada geçirir ve domates, fasulye ve çiçek getirir. Her zaman, her şeyin kendi ektiğin zaman daha lezzetli olduğunu söyler.",
        EN: "My grandmother starts cooking as early as Saturday. She prepares everything herself: the roast, the vegetables, the tarts. The whole house smells good from the morning. My grandfather looks after the garden. He spends the whole morning there and brings back tomatoes, beans and flowers. He always says that everything is better when you grow it yourself.",
      },
      {
        fr: "Quand j'arrive, tous les cousins courent vers moi. Nous jouons au ballon dans le jardin toute l'après-midi, et nous rions tous ensemble. Mon petit cousin Hugo, qui a cinq ans, mange tout ce qu'il trouve : il a déjà mangé tout le pain avant le repas ! Ma tante Claire le regarde, rit et dit : « Hugo, laisse un peu de gâteau pour tout le monde ! »",
        TR: "Ben varınca bütün kuzenler bana doğru koşar. Bütün öğleden sonra bahçede top oynarız ve hep birlikte gülüşürüz. Beş yaşındaki küçük kuzenim Hugo bulduğu her şeyi yer: yemekten önce bütün ekmeği yedi bile! Teyzem Claire ona bakıp gülerek der ki: “Hugo, herkes için biraz pasta bırak!”",
        EN: "When I arrive, all the cousins run towards me. We play ball in the garden all afternoon, and we all laugh together. My little cousin Hugo, who is five, eats everything he finds: he has already eaten all the bread before the meal! My aunt Claire looks at him, laughs and says: “Hugo, leave a little cake for everybody!”",
      },
      {
        fr: "À table, tout le monde parle en même temps. Mon oncle Pierre raconte ses voyages, et toutes les femmes lui posent des questions. Mon père discute de politique, et tous les hommes ne sont pas d'accord, évidemment. Ma grand-mère répète : « Tout est prêt, mangez ! » Les assiettes passent de main en main. À la fin du repas, tout est vide, et tout le monde est content.",
        TR: "Sofrada herkes aynı anda konuşur. Pierre amcam seyahatlerini anlatır ve bütün kadınlar ona sorular sorar. Babam siyaset konuşur ve bütün erkekler, elbette, hemfikir değildir. Büyükannem tekrar eder: “Her şey hazır, yiyin!” Tabaklar elden ele geçer. Yemeğin sonunda her şey boştur ve herkes memnundur.",
        EN: "At the table everybody talks at the same time. My uncle Pierre tells about his travels, and all the women ask him questions. My father talks about politics, and not all the men agree, of course. My grandmother keeps saying: “Everything is ready, eat!” The plates pass from hand to hand. At the end of the meal everything is empty, and everybody is happy.",
      },
      {
        fr: "Après le déjeuner, nous faisons tous la vaisselle ensemble. J'ai tout lavé le mois dernier, et ma mère m'a dit : « Tu as tout fait seule, bravo ! » Ensuite, toute la famille va se promener dans la forêt. Nous marchons toutes les semaines sur le même chemin, mais nous découvrons toujours une nouveauté : un oiseau, un champignon ou une vieille cabane.",
        TR: "Öğle yemeğinden sonra hep birlikte bulaşıkları yıkarız. Geçen ay hepsini ben yıkadım ve annem dedi ki: “Hepsini tek başına yaptın, aferin!” Sonra bütün aile ormanda yürüyüşe çıkar. Her hafta aynı yolda yürürüz ama hep yeni bir şey keşfederiz: bir kuş, bir mantar ya da eski bir kulübe.",
        EN: "After lunch we all do the washing-up together. I washed everything last month, and my mother said to me: “You did it all by yourself, well done!” Then the whole family goes for a walk in the forest. We walk on the same path every week, but we always discover something new: a bird, a mushroom or an old hut.",
      },
      {
        fr: "Chez mes grands-parents, tout a sa place. Toutes les assiettes sont blanches, et tous les verres viennent de la même boîte. Mon grand-père répare tout lui-même : les chaises, les lampes, même la vieille radio. Ma grand-mère, elle, écrit tout dans un grand cahier : les recettes, les anniversaires, les dates importantes. Je trouve cette maison magique, parce que tout y semble simple et calme.",
        TR: "Büyükanne ve büyükbabamda her şeyin bir yeri var. Bütün tabaklar beyaz ve bütün bardaklar aynı kutudan geliyor. Büyükbabam her şeyi kendisi tamir eder: sandalyeleri, lambaları, hatta eski radyoyu. Büyükannem ise her şeyi büyük bir deftere yazar: tarifleri, doğum günlerini, önemli tarihleri. Bu evi sihirli buluyorum, çünkü orada her şey sade ve sakin görünüyor.",
        EN: "At my grandparents' house, everything has its place. All the plates are white, and all the glasses come from the same box. My grandfather repairs everything himself: the chairs, the lamps, even the old radio. My grandmother writes everything in a big notebook: the recipes, the birthdays, the important dates. I find this house magical, because everything there seems simple and calm.",
      },
      {
        fr: "Tous les étés, nous passons toute une semaine ici. Toutes les nuits, nous dormons avec la fenêtre ouverte, et tous les matins, le chant des oiseaux nous réveille. Mes cousins et moi, nous jouons toute la journée dehors, et nous rentrons seulement quand toutes les lumières de la ferme sont allumées. Pour moi, ce sont les meilleurs moments de toute l'année.",
        TR: "Her yaz burada bütün bir hafta geçiriyoruz. Bütün geceler pencere açık uyuyoruz ve her sabah kuşların cıvıltısı bizi uyandırıyor. Kuzenlerim ve ben bütün gün dışarıda oynuyoruz ve ancak çiftliğin bütün ışıkları yandığında eve dönüyoruz. Benim için bunlar bütün yılın en güzel anları.",
        EN: "Every summer we spend a whole week here. Every night we sleep with the window open, and every morning the singing of the birds wakes us up. My cousins and I play outside all day, and we only go in when all the lights of the farm are on. For me, these are the best moments of the whole year.",
      },
      {
        fr: "Le soir, nous rentrons tous fatigués mais heureux. Dans la voiture, je pense à toute cette journée et je souris. J'ai tout oublié : mes devoirs, mes problèmes, mon téléphone. Mes parents disent que je suis plus calme tous les lundis, après le week-end chez mes grands-parents. Ils ont peut-être raison : pour moi, rien ne remplace ces dimanches en famille.",
        TR: "Akşam hepimiz yorgun ama mutlu eve döneriz. Arabada bütün bu günü düşünür ve gülümserim. Her şeyi unuttum: ödevlerimi, sorunlarımı, telefonumu. Anne babam, büyükanne ve büyükbabamda geçen hafta sonundan sonra her pazartesi daha sakin olduğumu söylüyor. Belki haklılar: benim için hiçbir şey ailemle geçen bu pazarların yerini tutmaz.",
        EN: "In the evening we all go home tired but happy. In the car I think about this whole day and I smile. I have forgotten everything: my homework, my problems, my phone. My parents say that I am calmer every Monday after the weekend at my grandparents'. They may be right: for me, nothing replaces these Sundays with the family.",
      },
    ],
    questions: [
      {
        question: { fr: "Où la famille se réunit-elle le dimanche ?", TR: "Aile pazar günü nerede toplanıyor?", EN: "Where does the family meet on Sundays?" },
        options: ["Chez Julie", "Chez les grands-parents, à la campagne", "Au restaurant", "Chez l'oncle Pierre"],
        answer: 1,
      },
      {
        question: { fr: "Que fait le grand-père le matin ?", TR: "Büyükbaba sabahları ne yapıyor?", EN: "What does the grandfather do in the morning?" },
        options: ["Il cuisine le rôti", "Il s'occupe du jardin", "Il fait la vaisselle"],
        answer: 1,
      },
      {
        question: { fr: "Qu'a mangé Hugo avant le repas ?", TR: "Hugo yemekten önce ne yedi?", EN: "What did Hugo eat before the meal?" },
        options: ["Le gâteau", "Tout le pain", "Les tartes", "Les tomates"],
        answer: 1,
      },
      {
        question: { fr: "Qui raconte ses voyages à table ?", TR: "Sofrada seyahatlerini kim anlatıyor?", EN: "Who talks about his travels at the table?" },
        options: ["Le père de Julie", "Le grand-père", "L'oncle Pierre"],
        answer: 2,
      },
      {
        question: { fr: "Pourquoi Julie est-elle plus calme le lundi ?", TR: "Julie pazartesi günleri neden daha sakin?", EN: "Why is Julie calmer on Mondays?" },
        options: ["Parce qu'elle dort beaucoup", "Parce qu'elle passe le dimanche en famille", "Parce qu'elle a moins de devoirs", "Parce qu'elle n'a pas de téléphone"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-indefinites",
    lessonId: "indefinites",
    level: "A2",
    title: { TR: "Apartmandaki gizemli paket", EN: "The mysterious parcel in the building" },
    paragraphs: [
      {
        fr: "Dans mon immeuble, il y a plusieurs appartements et chaque famille a ses habitudes. Je suis Antoine, j'ai trente ans, et j'habite au troisième étage. Un matin, quand je sors, je vois quelque chose de bizarre devant ma porte : un gros paquet marron. Il n'y a aucun nom dessus et aucune adresse. Je regarde dans le couloir : il n'y a personne. Qui a laissé ce paquet ici ?",
        TR: "Apartmanımda birkaç daire var ve her ailenin kendi alışkanlıkları var. Ben Antoine, otuz yaşındayım ve üçüncü katta oturuyorum. Bir sabah dışarı çıkarken kapımın önünde tuhaf bir şey görüyorum: büyük, kahverengi bir paket. Üzerinde hiçbir isim, hiçbir adres yok. Koridora bakıyorum: kimse yok. Bu paketi buraya kim bıraktı?",
        EN: "In my building there are several apartments and each family has its own habits. I am Antoine, I am thirty, and I live on the third floor. One morning, as I go out, I see something strange in front of my door: a big brown parcel. There is no name on it and no address. I look in the corridor: there is nobody. Who left this parcel here?",
      },
      {
        fr: "Je décide de demander à mes voisins. Je sonne chez Mme Dubois, au deuxième. Elle est âgée et elle connaît tout le monde. Elle me dit : « Quelqu'un est venu hier soir, mais je n'ai pas vu son visage. » Elle n'a rien d'autre à raconter. Je frappe aussi chez M. Lemaire, qui habite en face. Il me répond : « Je n'ai aucune idée de qui peut être ce paquet ! »",
        TR: "Komşularıma sormaya karar veriyorum. İkinci kattaki Madame Dubois'nın kapısını çalıyorum. Yaşlı ve herkesi tanıyor. Bana şöyle diyor: “Dün akşam biri geldi ama yüzünü görmedim.” Anlatacak başka bir şeyi yok. Sonra karşıda oturan Bay Lemaire'in kapısını çalıyorum. Cevap veriyor: “Bu paketin kimin olduğuna dair hiçbir fikrim yok!”",
        EN: "I decide to ask my neighbours. I ring at Mrs Dubois's, on the second floor. She is old and she knows everybody. She tells me: “Someone came last night, but I did not see the face.” She has nothing else to tell. Then I knock at Mr Lemaire's, who lives opposite. He answers: “I have no idea whose parcel this could be!”",
      },
      {
        fr: "Je continue l'enquête. Chacun de mes voisins a une théorie différente. Certains pensent que c'est un cadeau pour quelqu'un de l'immeuble. D'autres disent qu'il faut appeler la police, parce que certains colis sont dangereux. Le petit Lucas, qui a huit ans, pense que c'est un trésor. Il me demande plusieurs fois : « On peut l'ouvrir, s'il te plaît ? » Je dis non, évidemment.",
        TR: "Soruşturmaya devam ediyorum. Komşularımın her birinin farklı bir teorisi var. Bazıları bunun binadaki birine hediye olduğunu düşünüyor. Diğerleri polisi aramak gerektiğini söylüyor, çünkü bazı paketler tehlikeli olabilir. Sekiz yaşındaki küçük Lucas bunun bir hazine olduğunu sanıyor. Bana birkaç kez soruyor: “Açabilir miyiz lütfen?” Elbette hayır diyorum.",
        EN: "I continue the investigation. Each of my neighbours has a different theory. Some think it is a present for someone in the building. Others say we must call the police, because some parcels are dangerous. Little Lucas, who is eight, thinks it is a treasure. He asks me several times: “Can we open it, please?” I say no, of course.",
      },
      {
        fr: "À midi, j'écris un petit mot et je le colle à la porte de l'immeuble : « Quelqu'un a perdu un paquet ? Contactez le troisième étage. » Je ne veux pas jeter le paquet, parce qu'il contient peut-être quelque chose d'important. Chaque fois que quelqu'un passe devant la porte, il lit mon message. Plusieurs personnes sourient, mais aucune ne réclame le paquet. L'après-midi passe, et rien ne se passe.",
        TR: "Öğlen küçük bir not yazıp bina kapısına yapıştırıyorum: “Biri paket mi kaybetti? Üçüncü kata başvurun.” Paketi atmak istemiyorum, çünkü belki önemli bir şey içeriyor. Kapının önünden biri her geçişinde mesajımı okuyor. Birkaç kişi gülümsüyor ama hiçbiri paketi sahiplenmiyor. Öğleden sonra geçiyor ve hiçbir şey olmuyor.",
        EN: "At noon I write a little note and stick it on the door of the building: “Has someone lost a parcel? Contact the third floor.” I do not want to throw the parcel away, because it may contain something important. Every time someone walks past the door, they read my message. Several people smile, but none of them claims the parcel. The afternoon goes by, and nothing happens.",
      },
      {
        fr: "Le soir, quelqu'un sonne à ma porte. C'est une jeune femme que je ne connais pas. Elle est très gênée. « Bonsoir, dit-elle, je cherche quelque chose de brun et de gros… Je suis la nouvelle voisine du quatrième. Hier, le livreur m'a dit qu'il laissait le paquet à l'étage au-dessous. Il s'est trompé de porte ! » Elle rit. « Je n'ai aucun problème avec mes voisins, mais j'ai un colis introuvable ! »",
        TR: "Akşam biri kapımı çalıyor. Tanımadığım genç bir kadın. Çok mahcup. “İyi akşamlar,” diyor, “kahverengi, büyük bir şey arıyorum… Dördüncü kattaki yeni komşuyum. Dün kurye bana paketi bir alt kata bıraktığını söyledi. Kapıyı şaşırmış!” Gülüyor. “Komşularımla hiçbir sorunum yok ama kayıp bir kolim var!”",
        EN: "In the evening someone rings at my door. It is a young woman I do not know. She is very embarrassed. “Good evening,” she says, “I am looking for something brown and big… I am the new neighbour on the fourth floor. Yesterday the delivery man told me he was leaving the parcel on the floor below. He got the wrong door!” She laughs. “I have no problem with my neighbours, but I have a lost parcel!”",
      },
      {
        fr: "Je lui donne le paquet avec plaisir. Elle l'ouvre devant moi : à l'intérieur, il y a plusieurs livres de cuisine et une belle lampe. Elle me propose un café pour me remercier, et j'accepte. Nous parlons longtemps, et chacun raconte un peu sa vie. Elle s'appelle Inès, elle est architecte, et elle déménage souvent. Je n'ai rien à faire ce soir, alors j'accepte avec joie.",
        TR: "Paketi memnuniyetle ona veriyorum. Önümde açıyor: içinde birkaç yemek kitabı ve güzel bir lamba var. Bana teşekkür etmek için kahve ikram ediyor ve kabul ediyorum. Uzun uzun konuşuyoruz, her birimiz hayatından biraz anlatıyor. Adı Inès, mimar ve sık sık taşınıyor. Bu akşam yapacak hiçbir şeyim yok, bu yüzden sevinçle kabul ediyorum.",
        EN: "I give her the parcel with pleasure. She opens it in front of me: inside there are several cookery books and a beautiful lamp. She offers me a coffee to thank me, and I accept. We talk for a long time, and each of us tells a little about his or her life. Her name is Inès, she is an architect, and she moves often. I have nothing to do tonight, so I accept with joy.",
      },
      {
        fr: "Mme Dubois, elle, a un autre talent : elle sait quelque chose sur chaque habitant. Elle me raconte que plusieurs locataires vont déménager et que certains attendent un bébé. Chacun a son secret, dit-elle, mais personne ne cache rien longtemps dans un immeuble comme le nôtre. Je souris : avec elle, aucune nouvelle ne reste secrète plus d'une journée.",
        TR: "Madame Dubois'nın ise başka bir yeteneği var: her sakin hakkında bir şey biliyor. Bana birkaç kiracının taşınacağını ve bazılarının bebek beklediğini anlatıyor. Herkesin bir sırrı var diyor ama bizimki gibi bir binada kimse hiçbir şeyi uzun süre saklayamaz. Gülümsüyorum: onunla hiçbir haber bir günden fazla sır kalmaz.",
        EN: "Mrs Dubois, for her part, has another talent: she knows something about every resident. She tells me that several tenants are going to move out and that some are expecting a baby. Everyone has a secret, she says, but nobody hides anything for long in a building like ours. I smile: with her, no piece of news stays secret for more than a day.",
      },
      {
        fr: "Le lendemain, je repense à cette histoire. Un simple colis a créé quelque chose de nouveau dans mon immeuble : plusieurs voisins se parlent maintenant, et certains ont même organisé un petit dîner. Mme Dubois dit à tout le monde qu'elle avait compris dès le début. Je n'en crois rien, mais je ne dis rien. Chaque immeuble a sa petite histoire, et voici la nôtre.",
        TR: "Ertesi gün bu hikâyeyi düşünüyorum. Basit bir koli, binamda yeni bir şey yarattı: birkaç komşu artık birbiriyle konuşuyor, bazıları küçük bir yemek bile düzenledi. Madame Dubois herkese en başından beri anladığını söylüyor. Ona hiç inanmıyorum ama bir şey demiyorum. Her binanın küçük bir hikâyesi var, işte bizimki bu.",
        EN: "The next day I think about this story again. A simple parcel has created something new in my building: several neighbours talk to each other now, and some have even organised a small dinner. Mrs Dubois tells everybody that she understood from the start. I do not believe a word of it, but I say nothing. Every building has its little story, and this is ours.",
      },
    ],
    questions: [
      {
        question: { fr: "Que trouve Antoine devant sa porte ?", TR: "Antoine kapısının önünde ne buluyor?", EN: "What does Antoine find in front of his door?" },
        options: ["Une lettre", "Un gros paquet sans nom", "Un sac de courses", "Une lampe"],
        answer: 1,
      },
      {
        question: { fr: "Que pense le petit Lucas du paquet ?", TR: "Küçük Lucas paket hakkında ne düşünüyor?", EN: "What does little Lucas think about the parcel?" },
        options: ["Que c'est dangereux", "Que c'est un cadeau", "Que c'est un trésor"],
        answer: 2,
      },
      {
        question: { fr: "Que fait Antoine à midi ?", TR: "Antoine öğlen ne yapıyor?", EN: "What does Antoine do at noon?" },
        options: ["Il appelle la police", "Il écrit un mot et le colle à la porte", "Il ouvre le paquet", "Il jette le paquet"],
        answer: 1,
      },
      {
        question: { fr: "Pourquoi le paquet était-il devant la porte d'Antoine ?", TR: "Paket neden Antoine'ın kapısının önündeydi?", EN: "Why was the parcel in front of Antoine's door?" },
        options: ["Le livreur s'est trompé de porte", "Antoine l'avait commandé", "Mme Dubois l'a posé là"],
        answer: 0,
      },
      {
        question: { fr: "Que contient le paquet ?", TR: "Paketin içinde ne var?", EN: "What is in the parcel?" },
        options: ["Des vêtements", "Des livres de cuisine et une lampe", "Des cadeaux pour enfants", "Des outils"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-conditionnel-politeness",
    lessonId: "conditionnel-politeness",
    level: "A2",
    title: { TR: "Brüksel'de kibar bir hafta sonu", EN: "A polite weekend in Brussels" },
    paragraphs: [
      {
        fr: "Mehmet est un étudiant turc qui apprend le français. Ce week-end, il voyage à Bruxelles avec sa sœur Aylin. Ils ne connaissent pas la ville, mais ils aimeraient tout voir en deux jours. Quand ils arrivent à l'hôtel, Mehmet s'approche de la réception. Il prend une grande respiration et dit : « Bonjour, madame. Je voudrais une chambre pour deux personnes, s'il vous plaît. »",
        TR: "Mehmet, Fransızca öğrenen Türk bir öğrenci. Bu hafta sonu kız kardeşi Aylin ile Brüksel'e seyahat ediyor. Şehri tanımıyorlar ama iki günde her şeyi görmek istiyorlar. Otele varınca Mehmet resepsiyona yaklaşıyor. Derin bir nefes alıp söylüyor: “Günaydın hanımefendi. İki kişilik bir oda istiyorum, lütfen.”",
        EN: "Mehmet is a Turkish student who is learning French. This weekend he is travelling to Brussels with his sister Aylin. They do not know the city, but they would like to see everything in two days. When they arrive at the hotel, Mehmet goes up to the reception desk. He takes a deep breath and says: “Hello, madam. I would like a room for two people, please.”",
      },
      {
        fr: "La réceptionniste sourit. « Bien sûr, monsieur. Voulez-vous une chambre avec vue sur la ville ? » Mehmet réfléchit. « Oui, ce serait parfait. Pourriez-vous aussi m'indiquer l'heure du petit-déjeuner ? » Elle répond : « Il commence à sept heures. Vous pourriez descendre vers huit heures, il y aurait moins de monde. » Mehmet la remercie : il trouve qu'elle est très aimable.",
        TR: "Resepsiyonist gülümsüyor. “Elbette efendim. Şehre bakan bir oda ister misiniz?” Mehmet düşünüyor. “Evet, mükemmel olurdu. Kahvaltı saatini de söyleyebilir misiniz?” Kadın cevap veriyor: “Yedide başlıyor. Sekize doğru inebilirsiniz, daha az kalabalık olur.” Mehmet ona teşekkür ediyor: çok nazik olduğunu düşünüyor.",
        EN: "The receptionist smiles. “Of course, sir. Would you like a room with a view of the city?” Mehmet thinks. “Yes, that would be perfect. Could you also tell me the breakfast time?” She answers: “It starts at seven. You could come down around eight, there would be fewer people.” Mehmet thanks her: he finds her very kind.",
      },
      {
        fr: "Dans la chambre, Aylin pose une question : « Tu pourrais demander un deuxième oreiller ? J'en voudrais un, j'ai mal au cou. » Mehmet téléphone à la réception : « Excusez-moi, madame, nous aurions besoin d'un oreiller supplémentaire. Pourriez-vous nous en apporter un ? » Cinq minutes plus tard, un employé frappe à la porte. Aylin rit : « Ton français est très poli ! »",
        TR: "Odada Aylin bir soru soruyor: “İkinci bir yastık isteyebilir misin? Bir tane isterdim, boynum ağrıyor.” Mehmet resepsiyonu arıyor: “Affedersiniz hanımefendi, fazladan bir yastığa ihtiyacımız olurdu. Bize bir tane getirebilir misiniz?” Beş dakika sonra bir çalışan kapıyı çalıyor. Aylin gülüyor: “Fransızcan çok kibar!”",
        EN: "In the room Aylin asks a question: “Could you ask for a second pillow? I would like one, my neck hurts.” Mehmet phones reception: “Excuse me, madam, we would need an extra pillow. Could you bring us one?” Five minutes later an employee knocks at the door. Aylin laughs: “Your French is very polite!”",
      },
      {
        fr: "Le soir, ils vont dans un petit restaurant belge. Le serveur arrive avec la carte. Mehmet dit : « Bonsoir, monsieur. Nous voudrions une table près de la fenêtre. » Puis il ajoute : « Je prendrais volontiers des moules-frites, et ma sœur aimerait peut-être la soupe du jour. » Le serveur note la commande et demande : « Voudriez-vous quelque chose à boire ? » Aylin répond : « Un jus d'orange, ce serait bien. »",
        TR: "Akşam küçük bir Belçika lokantasına gidiyorlar. Garson menüyle geliyor. Mehmet diyor ki: “İyi akşamlar efendim. Pencerenin yanında bir masa istiyoruz.” Sonra ekliyor: “Ben memnuniyetle midye ve patates kızartması alırdım, kız kardeşim belki günün çorbasını isterdi.” Garson siparişi yazıp soruyor: “İçecek bir şey ister misiniz?” Aylin cevap veriyor: “Bir portakal suyu iyi olurdu.”",
        EN: "In the evening they go to a small Belgian restaurant. The waiter arrives with the menu. Mehmet says: “Good evening, sir. We would like a table near the window.” Then he adds: “I would gladly have the mussels and chips, and my sister would perhaps like the soup of the day.” The waiter notes down the order and asks: “Would you like something to drink?” Aylin answers: “An orange juice would be nice.”",
      },
      {
        fr: "Après le repas, Mehmet voudrait payer, mais il n'est pas sûr de la bonne formule. Il lève la main et demande : « Pourriez-vous nous apporter l'addition, s'il vous plaît ? » Le serveur sourit : « Bien sûr. Je vous l'apporte tout de suite. » Mehmet est fier. Pendant le voyage, il a utilisé les formules de politesse dans toutes les situations, et personne n'a été impoli avec lui.",
        TR: "Yemekten sonra Mehmet ödemek istiyor ama doğru ifadeden emin değil. Elini kaldırıp soruyor: “Hesabı getirebilir misiniz lütfen?” Garson gülümsüyor: “Elbette. Hemen getiriyorum.” Mehmet gururlu. Seyahat boyunca kibarlık kalıplarını her durumda kullandı ve kimse ona kaba davranmadı.",
        EN: "After the meal Mehmet would like to pay, but he is not sure of the right phrase. He raises his hand and asks: “Could you bring us the bill, please?” The waiter smiles: “Of course. I'll bring it right away.” Mehmet is proud. During the trip he has used polite phrases in every situation, and nobody has been rude to him.",
      },
      {
        fr: "Quand ils sortent du restaurant, ils marchent un peu dans la rue. Aylin dit : « J'aimerais travailler à l'étranger plus tard. Je voudrais être architecte, et ce serait formidable de vivre dans une ville comme celle-ci. » Mehmet répond : « Moi, je voudrais enseigner le français. Nous pourrions même ouvrir une petite école ensemble ! » Ils rient, car ils savent que c'est un rêve, mais ils l'aiment beaucoup.",
        TR: "Lokantadan çıkarken sokakta biraz yürüyorlar. Aylin diyor ki: “İleride yurtdışında çalışmak isterdim. Mimar olmak isterim ve böyle bir şehirde yaşamak harika olurdu.” Mehmet cevap veriyor: “Ben Fransızca öğretmek isterim. Hatta birlikte küçük bir okul bile açabilirdik!” Bunun bir hayal olduğunu biliyorlar ama çok seviyorlar ve gülüyorlar.",
        EN: "As they leave the restaurant they walk a little in the street. Aylin says: “I would like to work abroad later. I would like to be an architect, and it would be wonderful to live in a city like this one.” Mehmet answers: “I would like to teach French. We could even open a little school together!” They laugh, because they know it is a dream, but they love it very much.",
      },
      {
        fr: "Dans la rue, ils s'arrêtent devant une dame âgée. Mehmet s'approche : « Excusez-moi, madame, pourriez-vous nous indiquer le chemin de la Grand-Place ? Nous aimerions y aller à pied. » La dame sourit : « Vous devriez prendre la deuxième rue à gauche. Ce serait plus rapide que le tram. » Mehmet la remercie : « Vous seriez très gentille de nous montrer sur le plan. » Elle accepte volontiers.",
        TR: "Sokakta yaşlı bir hanımın önünde duruyorlar. Mehmet yaklaşıyor: “Affedersiniz hanımefendi, bize Grand-Place'a giden yolu tarif edebilir misiniz? Oraya yürüyerek gitmek isteriz.” Hanım gülümsüyor: “Soldaki ikinci sokağa girmelisiniz. Tramvaydan daha hızlı olur.” Mehmet teşekkür ediyor: “Bize haritada göstermekle çok nazik davranmış olursunuz.” Kadın seve seve kabul ediyor.",
        EN: "In the street they stop in front of an elderly lady. Mehmet goes up to her: “Excuse me, madam, could you tell us the way to the Grand-Place? We would like to go there on foot.” The lady smiles: “You should take the second street on the left. It would be faster than the tram.” Mehmet thanks her: “You would be very kind to show us on the map.” She gladly agrees.",
      },
      {
        fr: "Sur le chemin du retour à l'hôtel, Aylin lui demande : « Qu'est-ce que tu aimerais faire demain ? » Mehmet répond : « J'aimerais visiter le musée de la bande dessinée, et nous pourrions aussi marcher dans le centre. Ce serait super de voir la Grand-Place illuminée ! » Aylin accepte avec joie. Ils rêvent déjà d'un deuxième voyage : « Nous irions à Paris, ça nous plairait beaucoup ! »",
        TR: "Otele dönerken Aylin ona soruyor: “Yarın ne yapmak isterdin?” Mehmet cevap veriyor: “Çizgi roman müzesini gezmek isterdim, sonra da şehir merkezinde yürüyebilirdik. Işıklandırılmış Grand-Place'ı görmek harika olurdu!” Aylin sevinçle kabul ediyor. İkinci bir seyahat hayali bile kuruyorlar: “Paris'e giderdik, çok hoşumuza giderdi!”",
        EN: "On the way back to the hotel Aylin asks him: “What would you like to do tomorrow?” Mehmet answers: “I would like to visit the comic strip museum, and then we could walk in the centre. It would be great to see the Grand-Place lit up!” Aylin accepts with joy. They are already dreaming of a second trip: “We would go to Paris, we would like it a lot!”",
      },
    ],
    questions: [
      {
        question: { fr: "Où voyagent Mehmet et Aylin ?", TR: "Mehmet ve Aylin nereye seyahat ediyor?", EN: "Where are Mehmet and Aylin travelling?" },
        options: ["À Paris", "À Bruxelles", "À Lisbonne", "À Istanbul"],
        answer: 1,
      },
      {
        question: { fr: "Qu'est-ce qu'Aylin voudrait avoir dans la chambre ?", TR: "Aylin odada ne istiyor?", EN: "What would Aylin like to have in the room?" },
        options: ["Une autre chambre", "Un deuxième oreiller", "Un petit-déjeuner"],
        answer: 1,
      },
      {
        question: { fr: "Que commande Mehmet au restaurant ?", TR: "Mehmet lokantada ne sipariş ediyor?", EN: "What does Mehmet order at the restaurant?" },
        options: ["Une soupe", "Des moules-frites", "Un jus d'orange", "Un gâteau"],
        answer: 1,
      },
      {
        question: { fr: "Comment Mehmet demande-t-il l'addition ?", TR: "Mehmet hesabı nasıl istiyor?", EN: "How does Mehmet ask for the bill?" },
        options: ["Il crie vers le serveur", "Il dit « Pourriez-vous nous apporter l'addition ? »", "Il la demande à sa sœur"],
        answer: 1,
      },
      {
        question: { fr: "Que voudrait faire Mehmet le lendemain ?", TR: "Mehmet ertesi gün ne yapmak istiyor?", EN: "What would Mehmet like to do the next day?" },
        options: ["Visiter le musée de la bande dessinée", "Rester à l'hôtel", "Partir à Paris", "Aller à la plage"],
        answer: 0,
      },
    ],
  },
  {
    id: "reading-imperative-pronouns",
    lessonId: "imperative-pronouns",
    level: "A2",
    title: { TR: "Annem hafta sonu evde yok", EN: "Mum is away for the weekend" },
    paragraphs: [
      {
        fr: "Ce vendredi soir, Sophie part pour un week-end chez sa sœur, à Lyon. Elle laisse ses deux enfants à la maison : Adam, seize ans, et Lola, dix ans. Elle est un peu inquiète, alors elle parle sans arrêt devant la porte. « Écoutez-moi bien, tous les deux, dit-elle. Je vous laisse une liste, lisez-la attentivement. Adam, regarde-moi : tu es le responsable, d'accord ? »",
        TR: "Bu cuma akşamı Sophie, Lyon'daki kız kardeşinin yanında hafta sonu geçirmek için yola çıkıyor. İki çocuğunu evde bırakıyor: on altı yaşındaki Adam ve on yaşındaki Lola. Biraz endişeli, bu yüzden kapının önünde durmadan konuşuyor. “İkiniz de beni iyi dinleyin,” diyor. “Size bir liste bırakıyorum, dikkatle okuyun. Adam, bana bak: sorumlu sensin, tamam mı?”",
        EN: "This Friday evening Sophie is leaving for a weekend at her sister's in Lyon. She is leaving her two children at home: Adam, sixteen, and Lola, ten. She is a little worried, so she talks non-stop at the door. “Listen to me carefully, both of you,” she says. “I'm leaving you a list, read it attentively. Adam, look at me: you are in charge, all right?”",
      },
      {
        fr: "Elle continue : « Les clés sont sur la table. Prends-les et mets-les dans ton sac, Adam. Ne les perds pas ! Lola, ton goûter est dans le frigo : prends-le demain à quatre heures. Ne le mange pas trop tôt. » Lola hoche la tête. Adam lève les yeux au ciel : « Maman, j'ai seize ans, ne me parle pas comme à un enfant ! » Sophie sourit : « Alors, montre-moi que tu es grand. »",
        TR: "Devam ediyor: “Anahtarlar masanın üstünde. Onları al ve çantana koy Adam. Kaybetme sakın! Lola, ikindi atıştırmalığın buzdolabında: yarın saat dörtte al onu. Çok erken yeme.” Lola başını sallıyor. Adam gözlerini devirip: “Anne, on altı yaşındayım, bana çocukmuşum gibi konuşma!” diyor. Sophie gülümsüyor: “O zaman bana büyük olduğunu göster.”",
        EN: "She goes on: “The keys are on the table. Take them and put them in your bag, Adam. Don't lose them! Lola, your snack is in the fridge: take it tomorrow at four o'clock. Don't eat it too early.” Lola nods. Adam rolls his eyes: “Mum, I'm sixteen, don't talk to me like a child!” Sophie smiles: “Then show me that you are grown up.”",
      },
      {
        fr: "Dans le salon, Sophie voit un paquet. « Adam, c'est le cadeau pour ton oncle ? Donne-le-moi, je vais l'emporter. » Adam le lui donne. Elle regarde alors Lola : « Lola, si ta grand-mère appelle, dis-lui bonjour de ma part, et parle-lui doucement, elle entend mal. Ne lui raconte pas que tu as mangé des bonbons hier soir ! » Lola rougit et regarde ses chaussures.",
        TR: "Oturma odasında Sophie bir paket görüyor. “Adam, bu amcan için hediye mi? Ver onu bana, götüreceğim.” Adam ona veriyor. Sonra Lola'ya bakıyor: “Lola, büyükannen ararsa benden ona selam söyle ve ona yavaş konuş, kulağı iyi duymuyor. Dün akşam şeker yediğini ona anlatma!” Lola kızarıyor ve ayakkabılarına bakıyor.",
        EN: "In the living room Sophie sees a parcel. “Adam, is that the present for your uncle? Give it to me, I'll take it with me.” Adam gives it to her. Then she looks at Lola: “Lola, if your grandmother calls, say hello to her from me, and speak to her gently, she hears badly. Don't tell her you ate sweets last night!” Lola blushes and looks at her shoes.",
      },
      {
        fr: "Dans le couloir, Sophie passe devant le miroir et regarde l'heure. « Mon train part dans quarante minutes ! Dépêchez-vous, aidez-moi à porter ma valise ! » Les deux enfants se précipitent. Adam prend la valise, Lola ouvre la porte. Avant de partir, Sophie ajoute : « Appelez-moi ce soir, à neuf heures, s'il vous plaît. Si vous avez un problème, ne m'attendez pas : dites-le à la voisine, elle est là. »",
        TR: "Koridorda Sophie aynanın önünden geçip saate bakıyor. “Trenim kırk dakika sonra kalkıyor! Acele edin, bavulumu taşımama yardım edin!” İki çocuk atılıyor. Adam bavulu alıyor, Lola kapıyı açıyor. Gitmeden önce Sophie ekliyor: “Bu akşam saat dokuzda beni arayın lütfen. Bir sorununuz olursa beni beklemeyin: komşuya söyleyin, o orada.”",
        EN: "In the hall Sophie walks past the mirror and looks at the time. “My train leaves in forty minutes! Hurry up, help me carry my suitcase!” The two children rush over. Adam takes the suitcase, Lola opens the door. Before leaving Sophie adds: “Call me this evening, at nine o'clock, please. If you have a problem, don't wait for me: tell the neighbour, she is there.”",
      },
      {
        fr: "Quand la porte se ferme, la maison devient silencieuse. Adam s'assoit sur le canapé. « Lola, viens ici, assieds-toi à côté de moi. On va faire un plan. » Lola s'assoit. « Regarde la liste de maman, lis-la à voix haute. » Elle lit : « Un : réveillez-vous à huit heures. Deux : lavez-vous les mains avant le repas. Trois : ne regardez pas la télé trop tard. » Les deux enfants se regardent et éclatent de rire.",
        TR: "Kapı kapanınca ev sessizleşiyor. Adam kanepeye oturuyor. “Lola, gel buraya, yanıma otur. Bir plan yapacağız.” Lola oturuyor. “Annemin listesine bak, yüksek sesle oku.” Lola okuyor: “Bir: sekizde uyanın. İki: yemekten önce ellerinizi yıkayın. Üç: televizyona çok geç saatte bakmayın.” İki çocuk birbirine bakıp kahkahayı basıyor.",
        EN: "When the door closes, the house becomes quiet. Adam sits down on the sofa. “Lola, come here, sit next to me. We're going to make a plan.” Lola sits down. “Look at Mum's list, read it out loud.” She reads: “One: wake up at eight. Two: wash your hands before the meal. Three: don't watch TV too late.” The two children look at each other and burst out laughing.",
      },
      {
        fr: "À neuf heures, le téléphone sonne. C'est Sophie. « Adam, passe-moi ta sœur, s'il te plaît. » Lola prend l'appareil. « Dis-moi ce que tu as mangé. Ne me mens pas ! » Lola répond qu'ils ont fait des pâtes. « Bravo ! Donne-moi encore Adam. Adam, écoute-moi : ferme la porte à clé, éteins la lumière du couloir, et appelle-moi demain matin. Ne t'endors pas trop tard, et ne laisse pas Lola devant la télé ! »",
        TR: "Saat dokuzda telefon çalıyor. Arayan Sophie. “Adam, kız kardeşini ver bana lütfen.” Lola telefonu alıyor. “Ne yediğini söyle bana. Bana yalan söyleme!” Lola makarna yaptıklarını söylüyor. “Aferin! Adam'ı bir daha ver bana. Adam, beni dinle: kapıyı kilitle, koridorun ışığını söndür ve yarın sabah beni ara. Çok geç uyuma ve Lola'yı televizyonun önünde bırakma!”",
        EN: "At nine o'clock the phone rings. It is Sophie. “Adam, put your sister on, please.” Lola takes the phone. “Tell me what you ate. Don't lie to me!” Lola answers that they made pasta. “Well done! Give me Adam again. Adam, listen to me: lock the door, turn off the hall light, and call me tomorrow morning. Don't go to sleep too late, and don't leave Lola in front of the TV!”",
      },
      {
        fr: "Le samedi matin, Adam se réveille tôt et va dans la chambre de sa sœur. « Lève-toi, Lola, il est neuf heures, le petit-déjeuner est prêt ! » Elle bâille et répond : « Laisse-moi dormir encore cinq minutes ! » Adam rit : « Non, dépêche-toi ! Je ne vais pas te le répéter ! » Dans la cuisine, il prépare des tartines. « Tiens, mange-les avant que le chocolat ne refroidisse. » Maman peut être tranquille.",
        TR: "Cumartesi sabahı Adam erken uyanıp kız kardeşinin odasına gidiyor. “Kalk Lola, saat dokuz, kahvaltı hazır!” Lola esneyerek cevap veriyor: “Beş dakika daha uyumama izin ver!” Adam gülüyor: “Hayır, acele et! Bunu sana tekrarlamayacağım!” Mutfakta tartinler hazırlıyor. “Al, çikolata soğumadan önce ye onları.” Annem içi rahat olabilir.",
        EN: "On Saturday morning Adam wakes up early and goes to his sister's room. “Get up, Lola, it's nine o'clock, breakfast is ready!” She yawns and answers: “Let me sleep five more minutes!” Adam laughs: “No, hurry up! I'm not going to repeat it to you!” In the kitchen he prepares slices of bread with spread. “Here, eat them before the chocolate gets cold.” Mum can be calm.",
      },
    ],
    questions: [
      {
        question: { fr: "Où Sophie part-elle pour le week-end ?", TR: "Sophie hafta sonu için nereye gidiyor?", EN: "Where is Sophie going for the weekend?" },
        options: ["À Paris", "Chez sa sœur, à Lyon", "Chez sa mère", "Au bord de la mer"],
        answer: 1,
      },
      {
        question: { fr: "Qui est le responsable à la maison ?", TR: "Evde sorumlu kim?", EN: "Who is in charge at home?" },
        options: ["Lola", "Adam", "La voisine"],
        answer: 1,
      },
      {
        question: { fr: "Que demande Sophie à Adam de lui donner avant de partir ?", TR: "Sophie gitmeden önce Adam'dan ne vermesini istiyor?", EN: "What does Sophie ask Adam to give her before leaving?" },
        options: ["Les clés", "Le cadeau pour son oncle", "La liste", "Son téléphone"],
        answer: 1,
      },
      {
        question: { fr: "À quelle heure les enfants doivent-ils appeler Sophie le soir ?", TR: "Çocuklar akşam Sophie'yi saat kaçta aramalı?", EN: "At what time must the children call Sophie in the evening?" },
        options: ["À huit heures", "À neuf heures", "À dix heures"],
        answer: 1,
      },
      {
        question: { fr: "Que prépare Adam le samedi matin ?", TR: "Adam cumartesi sabahı ne hazırlıyor?", EN: "What does Adam prepare on Saturday morning?" },
        options: ["Des œufs", "Un gâteau", "Du café", "Des tartines et du chocolat chaud"],
        answer: 3,
      },
    ],
  },
  {
    id: "reading-quel-lequel",
    lessonId: "quel-lequel",
    level: "A2",
    title: { TR: "Tatil için hangisi?", EN: "Which one for the holiday?" },
    paragraphs: [
      {
        fr: "Lucie et Thomas veulent partir en vacances, mais ils n'arrivent pas à choisir. Un samedi matin, ils entrent dans une agence de voyages. Une jeune conseillère, Mélanie, les accueille. « Bonjour ! Quelle destination vous intéresse ? » demande-t-elle. Lucie répond : « Nous ne savons pas. Nous aimons la mer et la montagne. » Mélanie sourit : « Alors, je vais vous montrer plusieurs possibilités. »",
        TR: "Lucie ve Thomas tatile çıkmak istiyorlar ama seçemiyorlar. Bir cumartesi sabahı bir seyahat acentesine giriyorlar. Genç bir danışman, Mélanie, onları karşılıyor. “Günaydın! Hangi destinasyon ilginizi çekiyor?” diye soruyor. Lucie cevap veriyor: “Bilmiyoruz. Denizi de dağı da seviyoruz.” Mélanie gülümsüyor: “O zaman size birkaç seçenek göstereyim.”",
        EN: "Lucie and Thomas want to go on holiday, but they cannot choose. One Saturday morning they walk into a travel agency. A young adviser, Mélanie, welcomes them. “Hello! Which destination interests you?” she asks. Lucie answers: “We don't know. We like the sea and the mountains.” Mélanie smiles: “Then I'm going to show you several possibilities.”",
      },
      {
        fr: "Elle sort trois brochures : l'Italie, la Grèce et le Portugal. « Quels pays connaissez-vous déjà ? » Thomas répond : « Nous connaissons l'Italie. Nous y sommes allés il y a deux ans. » Mélanie propose alors la Grèce et le Portugal. « Lequel préférez-vous ? » Lucie hésite : « Je ne sais pas. Quelle est la différence entre ces deux pays ? Et quelle est la meilleure saison ? »",
        TR: "Üç broşür çıkarıyor: İtalya, Yunanistan ve Portekiz. “Hangi ülkeleri zaten biliyorsunuz?” Thomas cevap veriyor: “İtalya'yı biliyoruz. İki yıl önce gittik.” O zaman Mélanie Yunanistan ile Portekiz'i öneriyor. “Hangisini tercih edersiniz?” Lucie tereddüt ediyor: “Bilmiyorum. Bu iki ülke arasındaki fark ne? Ve en iyi mevsim hangisi?”",
        EN: "She takes out three brochures: Italy, Greece and Portugal. “Which countries do you already know?” Thomas answers: “We know Italy. We went there two years ago.” Mélanie then suggests Greece and Portugal. “Which one do you prefer?” Lucie hesitates: “I don't know. What is the difference between these two countries? And which is the best season?”",
      },
      {
        fr: "Mélanie explique : « La Grèce est idéale en juin, car la mer est chaude. Le Portugal est agréable presque toute l'année. » Elle montre des photos de plages. « Quelles plages avez-vous envie de voir ? Celles-ci sont très tranquilles, et celles-là sont très animées. Lesquelles aimez-vous le plus ? » Thomas regarde les photos : « Quelle belle plage ! Je prendrais celle-ci. »",
        TR: "Mélanie açıklıyor: “Yunanistan haziranda idealdir, çünkü deniz sıcaktır. Portekiz neredeyse tüm yıl boyunca keyiflidir.” Plaj fotoğrafları gösteriyor. “Hangi plajları görmek istersiniz? Bunlar çok sakin, şunlar ise çok hareketli. En çok hangilerini seversiniz?” Thomas fotoğraflara bakıyor: “Ne güzel bir plaj! Ben bunu seçerdim.”",
        EN: "Mélanie explains: “Greece is ideal in June, because the sea is warm. Portugal is pleasant almost all year round.” She shows photos of beaches. “Which beaches do you want to see? These ones are very quiet, and those ones are very lively. Which ones do you like best?” Thomas looks at the photos: “What a beautiful beach! I would take this one.”",
      },
      {
        fr: "Il faut maintenant choisir l'hôtel. Mélanie présente deux hôtels à Lisbonne. « Voici l'hôtel Atlantique et l'hôtel Soleil. » Lucie demande : « Dans lequel les chambres sont-elles les plus grandes ? » « Dans l'hôtel Atlantique. Mais l'hôtel Soleil est plus près de la mer. » Thomas ajoute : « Quelle est la différence de prix ? » La conseillère répond : « Vingt euros par nuit. »",
        TR: "Şimdi otel seçmek gerekiyor. Mélanie, Lizbon'da iki otel sunuyor. “İşte Atlantique oteli ve Soleil oteli.” Lucie soruyor: “Hangisinde odalar daha büyük?” “Atlantique otelinde. Ama Soleil oteli denize daha yakın.” Thomas ekliyor: “Fiyat farkı ne kadar?” Danışman cevap veriyor: “Gecelik yirmi euro.”",
        EN: "Now they have to choose the hotel. Mélanie presents two hotels in Lisbon. “Here are the Atlantique hotel and the Soleil hotel.” Lucie asks: “In which one are the rooms the biggest?” “In the Atlantique. But the Soleil is closer to the sea.” Thomas adds: “What is the price difference?” The adviser answers: “Twenty euros per night.”",
      },
      {
        fr: "Lucie et Thomas se regardent. « Quelle décision difficile ! dit Thomas. J'aime l'hôtel Soleil, mais lequel est le plus économique ? » Mélanie sourit : « Si vous choisissez l'hôtel Atlantique, je peux vous proposer le petit-déjeuner gratuit. Quels repas préférez-vous prendre à l'hôtel ? » Lucie réfléchit : « Le petit-déjeuner uniquement. Le soir, nous voulons essayer les restaurants de la ville. »",
        TR: "Lucie ve Thomas birbirlerine bakıyor. “Ne zor bir karar!” diyor Thomas. “Soleil otelini seviyorum ama hangisi daha ekonomik?” Mélanie gülümsüyor: “Atlantique otelini seçerseniz size ücretsiz kahvaltı önerebilirim. Otelde hangi öğünleri yemeyi tercih edersiniz?” Lucie düşünüyor: “Sadece kahvaltı. Akşamları şehrin lokantalarını denemek istiyoruz.”",
        EN: "Lucie and Thomas look at each other. “What a difficult decision!” says Thomas. “I like the Soleil hotel, but which one is cheaper?” Mélanie smiles: “If you choose the Atlantique hotel, I can offer you free breakfast. Which meals do you prefer to have at the hotel?” Lucie thinks: “Breakfast only. In the evening we want to try the restaurants in the city.”",
      },
      {
        fr: "Mélanie leur montre aussi les billets d'avion. « Quel vol préférez-vous ? Celui du matin ou celui du soir ? » Thomas demande : « Lequel est le moins cher ? » « Celui du soir. Mais le vol du matin arrive plus tôt, et vous aurez une journée entière à Lisbonne. » Lucie hésite : « Quelle heure d'arrivée exactement ? » « Onze heures. » Ils choisissent le vol du matin.",
        TR: "Mélanie onlara uçak biletlerini de gösteriyor. “Hangi uçuşu tercih edersiniz? Sabah olanı mı, akşam olanı mı?” Thomas soruyor: “Hangisi daha ucuz?” “Akşam olanı. Ama sabah uçuşu daha erken varıyor ve Lizbon'da bütün bir gününüz olacak.” Lucie tereddüt ediyor: “Tam olarak hangi saatte varıyor?” “On bir.” Sabah uçuşunu seçiyorlar.",
        EN: "Mélanie also shows them the plane tickets. “Which flight do you prefer? The morning one or the evening one?” Thomas asks: “Which one is cheaper?” “The evening one. But the morning flight arrives earlier, and you will have a whole day in Lisbon.” Lucie hesitates: “What time exactly does it arrive?” “Eleven o'clock.” They choose the morning flight.",
      },
      {
        fr: "Mélanie leur parle aussi de la location de voiture. « Quelle voiture voulez-vous ? Voici trois modèles : une petite, une moyenne et une grande. » Thomas demande : « Laquelle consomme le moins ? » « La petite. Dans quelles villes pensez-vous aller ? » Lucie répond : « À Lisbonne et à Porto. » « Alors, la petite voiture est suffisante. Quelles options désirez-vous ? Le GPS ? Une assurance ? »",
        TR: "Mélanie onlara araba kiralamasından da söz ediyor. “Hangi arabayı istiyorsunuz? İşte üç model: küçük, orta ve büyük.” Thomas soruyor: “Hangisi en az yakıyor?” “Küçük olanı. Hangi şehirlere gitmeyi düşünüyorsunuz?” Lucie cevap veriyor: “Lizbon'a ve Porto'ya.” “O zaman küçük araba yeterli. Hangi seçenekleri istiyorsunuz? GPS? Sigorta?”",
        EN: "Mélanie also tells them about car rental. “Which car do you want? Here are three models: a small one, a medium one and a big one.” Thomas asks: “Which one uses the least?” “The small one. Which cities are you thinking of going to?” Lucie answers: “Lisbon and Porto.” “Then the small car is enough. Which options do you want? GPS? Insurance?”",
      },
      {
        fr: "Après réflexion, ils choisissent le Portugal et l'hôtel Atlantique pour une semaine en septembre. Mélanie imprime leur dossier. « Quelle date de départ préférez-vous ? » Ils décident du quatorze. Quand ils sortent de l'agence, Thomas dit : « Quel bonheur ! J'ai hâte d'être là-bas. » Lucie lui répond : « Moi aussi. Quels vêtements faut-il emporter ? Et lesquels est-ce qu'on laisse à la maison ? » Ils rient, et se mettent à faire leur liste.",
        TR: "Sonunda Eylül'de bir haftalığına Portekiz'i ve Atlantique otelini seçiyorlar. Mélanie dosyalarını yazdırıyor. “Hangi hareket tarihini tercih edersiniz?” Ayın on dördünde karar kılıyorlar. Acentadan çıkarken Thomas diyor ki: “Ne mutluluk! Orada olmak için sabırsızlanıyorum.” Lucie cevap veriyor: “Ben de. Hangi kıyafetleri götürmek gerekiyor? Hangilerini evde bırakacağız?” Gülüyorlar ve listelerini yapmaya koyuluyorlar.",
        EN: "In the end they choose Portugal and the Atlantique hotel for a week in September. Mélanie prints out their file. “Which departure date do you prefer?” They decide on the fourteenth. As they leave the agency, Thomas says: “What happiness! I can't wait to be there.” Lucie answers: “Me too. Which clothes do we need to take? And which ones do we leave at home?” They laugh, and start making their list.",
      },
    ],
    questions: [
      {
        question: { fr: "Où Lucie et Thomas vont-ils au début du texte ?", TR: "Lucie ve Thomas metnin başında nereye gidiyor?", EN: "Where do Lucie and Thomas go at the beginning of the text?" },
        options: ["Dans un hôtel", "Dans une agence de voyages", "Dans un restaurant", "À la gare"],
        answer: 1,
      },
      {
        question: { fr: "Quel pays Lucie et Thomas connaissent-ils déjà ?", TR: "Lucie ve Thomas hangi ülkeyi zaten biliyor?", EN: "Which country do Lucie and Thomas already know?" },
        options: ["La Grèce", "L'Italie", "Le Portugal"],
        answer: 1,
      },
      {
        question: { fr: "Quelle est la différence de prix entre les deux hôtels ?", TR: "İki otel arasındaki fiyat farkı ne kadar?", EN: "What is the price difference between the two hotels?" },
        options: ["Dix euros par nuit", "Vingt euros par nuit", "Cinquante euros par nuit"],
        answer: 1,
      },
      {
        question: { fr: "Pourquoi ne veulent-ils que le petit-déjeuner à l'hôtel ?", TR: "Otelde neden yalnızca kahvaltı istiyorlar?", EN: "Why do they only want breakfast at the hotel?" },
        options: ["Ils n'ont pas faim le soir", "Ils veulent essayer les restaurants de la ville", "Le dîner est trop cher", "Ils dînent chez des amis"],
        answer: 1,
      },
      {
        question: { fr: "Quand partent-ils ?", TR: "Ne zaman gidiyorlar?", EN: "When do they leave?" },
        options: ["Le quatorze septembre", "Le quatorze juin", "Le premier septembre", "Le quatorze juillet"],
        answer: 0,
      },
    ],
  },
  {
    id: "reading-connectors-sequence",
    lessonId: "connectors-sequence",
    level: "A2",
    title: { TR: "Bir sürü aksilikle dolu gün", EN: "A day full of mishaps" },
    paragraphs: [
      {
        fr: "Lundi dernier, Hugo a vécu la journée la plus compliquée de sa vie. Tout est arrivé à cause d'un petit détail : son réveil n'a pas sonné. Hugo s'est donc réveillé à huit heures vingt, au lieu de sept heures. Il avait un rendez-vous important à neuf heures, alors il a sauté du lit. D'abord, il a pris une douche rapide. Ensuite, il a cherché ses vêtements, mais il ne trouvait rien.",
        TR: "Geçen pazartesi Hugo hayatının en karışık gününü yaşadı. Her şey küçük bir ayrıntı yüzünden oldu: çalar saati çalmadı. Hugo bu yüzden yediyi beklerken sekizi yirmi geçe uyandı. Dokuzda önemli bir randevusu vardı, o yüzden yataktan fırladı. Önce hızlı bir duş aldı. Sonra kıyafetlerini aradı ama hiçbir şey bulamıyordu.",
        EN: "Last Monday Hugo lived through the most complicated day of his life. It all happened because of a small detail: his alarm clock did not ring. So Hugo woke up at twenty past eight instead of seven o'clock. He had an important appointment at nine, so he jumped out of bed. First he took a quick shower. Then he looked for his clothes, but he could not find anything.",
      },
      {
        fr: "Après quelques minutes, il a enfin trouvé une chemise propre. Puis il a mis ses chaussures. Il a voulu manger un morceau de pain, mais le pain était dur. Il n'a donc pas pris de petit-déjeuner. Il a couru vers l'arrêt de bus, mais le bus venait de partir. Hugo était très en colère, pourtant il a gardé son calme. Il a regardé l'heure : huit heures quarante.",
        TR: "Birkaç dakika sonra sonunda temiz bir gömlek buldu. Sonra ayakkabılarını giydi. Bir parça ekmek yemek istedi ama ekmek sertleşmişti. Bu yüzden kahvaltı yapmadı. Otobüs durağına koştu ama otobüs yeni kalkmıştı. Hugo çok kızgındı, yine de sakin kaldı. Saate baktı: sekiz kırk.",
        EN: "After a few minutes he finally found a clean shirt. Then he put on his shoes. He wanted to eat a piece of bread, but the bread was hard. So he did not have breakfast. He ran to the bus stop, but the bus had just left. Hugo was very angry, yet he stayed calm. He looked at the time: eight forty.",
      },
      {
        fr: "Il a donc décidé de prendre un taxi. Mais il n'y avait pas de taxi libre, alors il a appelé un ami. Malheureusement, son ami dormait encore. Hugo a ensuite essayé le vélo de son voisin. Le voisin était d'accord, mais le vélo avait un pneu crevé ! Finalement, Hugo a pris le métro. D'abord, il a changé à la gare du Nord, puis il a pris la ligne quatre. Après vingt minutes, il est arrivé.",
        TR: "Bunun üzerine taksi tutmaya karar verdi. Ama boş taksi yoktu, o yüzden bir arkadaşını aradı. Maalesef arkadaşı hâlâ uyuyordu. Hugo sonra komşusunun bisikletini denedi. Komşu razıydı ama bisikletin lastiği patlaktı! Sonunda Hugo metroya bindi. Önce Gare du Nord'da aktarma yaptı, sonra dördüncü hatta bindi. Yirmi dakika sonra vardı.",
        EN: "So he decided to take a taxi. But there was no free taxi, so he called a friend. Unfortunately his friend was still asleep. Hugo then tried his neighbour's bike. The neighbour agreed, but the bike had a flat tyre! In the end Hugo took the metro. First he changed at the Gare du Nord, then he took line four. After twenty minutes he arrived.",
      },
      {
        fr: "Il est arrivé à neuf heures dix, mais le directeur l'attendait encore. « Vous êtes en retard, a-t-il dit. Pourtant, vous avez l'air très fatigué. » Hugo a expliqué toute l'histoire : le réveil, le bus, le vélo, le métro. Le directeur a ri. « D'abord, asseyez-vous. Ensuite, buvez un café. Puis nous commencerons la réunion. » Hugo a été soulagé : son chef n'était pas fâché.",
        TR: "Dokuzu onu geçe vardı ama müdür hâlâ onu bekliyordu. “Geç kaldınız,” dedi. “Yine de çok yorgun görünüyorsunuz.” Hugo bütün hikâyeyi anlattı: çalar saat, otobüs, bisiklet, metro. Müdür güldü. “Önce oturun. Sonra bir kahve için. Sonra toplantıya başlayacağız.” Hugo rahatladı: şefi kızgın değildi.",
        EN: "He arrived at ten past nine, but the director was still waiting for him. “You are late,” he said. “Yet you look very tired.” Hugo explained the whole story: the alarm clock, the bus, the bike, the metro. The director laughed. “First, sit down. Then, have a coffee. After that we will start the meeting.” Hugo was relieved: his boss was not angry.",
      },
      {
        fr: "Pendant la pause café, Hugo a raconté à une collègue, Pauline, tout ce qui s'était passé. D'abord elle a ri, puis elle a pris un air sérieux. « Après une matinée pareille, tu dois être épuisé, a-t-elle dit. Alors, repose-toi un peu. » Hugo a répondu que c'était impossible, mais qu'il se reposerait le soir. Pauline a ajouté : « Enfin, moi, j'aurais pris un taxi dès le début ! »",
        TR: "Kahve molasında Hugo, iş arkadaşı Pauline'e olan her şeyi anlattı. Önce güldü, sonra ciddi bir ifade takındı. “Böyle bir sabahtan sonra bitkin olmalısın,” dedi. “O zaman biraz dinlen.” Hugo bunun imkânsız olduğunu ama akşam dinleneceğini söyledi. Pauline ekledi: “Ben olsam en başından bir taksi tutardım!”",
        EN: "During the coffee break Hugo told a colleague, Pauline, everything that had happened. First she laughed, then she put on a serious face. “After a morning like that, you must be exhausted,” she said. “So, rest a little.” Hugo answered that it was impossible, but that he would rest in the evening. Pauline added: “Anyway, I would have taken a taxi from the start!”",
      },
      {
        fr: "La réunion a duré deux heures. Hugo était fatigué, mais il a présenté son projet avec énergie. Après la réunion, il a déjeuné avec ses collègues, puis il a travaillé jusqu'à six heures. Le soir, il est rentré chez lui. Il a pris le même chemin, mais cette fois sans problème. Il pensait : « La journée a mal commencé, mais elle finit bien. »",
        TR: "Toplantı iki saat sürdü. Hugo yorgundu ama projesini enerjiyle sundu. Toplantıdan sonra iş arkadaşlarıyla öğle yemeği yedi, sonra altıya kadar çalıştı. Akşam eve döndü. Aynı yolu kullandı ama bu sefer sorunsuz. Şöyle düşünüyordu: “Gün kötü başladı ama iyi bitiyor.”",
        EN: "The meeting lasted two hours. Hugo was tired, but he presented his project with energy. After the meeting he had lunch with his colleagues, then he worked until six o'clock. In the evening he went home. He took the same route, but this time without any problem. He thought: “The day started badly, but it is ending well.”",
      },
      {
        fr: "Chez lui, il a regardé son réveil. Il a enfin compris : la pile était vide ! Il a donc acheté une pile neuve le lendemain, mais il a aussi installé une alarme sur son téléphone. Maintenant, Hugo a deux réveils. Il dit à tout le monde : « Je ne veux plus jamais vivre un lundi comme celui-là. » Ses collègues rient, pourtant ils sont d'accord avec lui.",
        TR: "Evde çalar saatine baktı. Sonunda anladı: pili bitmişti! Bu yüzden ertesi gün yeni bir pil aldı ama telefonuna da bir alarm kurdu. Artık Hugo'nun iki çalar saati var. Herkese diyor ki: “Bir daha hiçbir zaman böyle bir pazartesi yaşamak istemiyorum.” İş arkadaşları gülüyor ama onunla aynı fikirde.",
        EN: "At home he looked at his alarm clock. He finally understood: the battery was flat! So he bought a new battery the next day, but he also set an alarm on his phone. Now Hugo has two alarm clocks. He tells everybody: “I never want to live a Monday like that again.” His colleagues laugh, yet they agree with him.",
      },
    ],
    questions: [
      {
        question: { fr: "Pourquoi Hugo s'est-il réveillé en retard ?", TR: "Hugo neden geç uyandı?", EN: "Why did Hugo wake up late?" },
        options: ["Il s'est couché trop tard", "Son réveil n'a pas sonné", "Il était malade", "Son voisin l'a appelé"],
        answer: 1,
      },
      {
        question: { fr: "Pourquoi n'a-t-il pas pris de petit-déjeuner ?", TR: "Neden kahvaltı yapmadı?", EN: "Why did he not have breakfast?" },
        options: ["Il n'avait pas faim", "Le pain était dur", "Il n'avait pas de temps ni d'argent"],
        answer: 1,
      },
      {
        question: { fr: "Quel problème a eu le vélo du voisin ?", TR: "Komşunun bisikletinde ne sorun vardı?", EN: "What was wrong with the neighbour's bike?" },
        options: ["Il n'avait pas de frein", "Il avait un pneu crevé", "Il était trop petit", "Il était cassé"],
        answer: 1,
      },
      {
        question: { fr: "Que pense le directeur du retard d'Hugo ?", TR: "Müdür Hugo'nun gecikmesi hakkında ne düşünüyor?", EN: "What does the director think about Hugo's delay?" },
        options: ["Il est très fâché", "Il rit et reste gentil", "Il renvoie Hugo"],
        answer: 1,
      },
      {
        question: { fr: "Quelle était la cause du problème du réveil ?", TR: "Çalar saat sorununun nedeni neydi?", EN: "What was the cause of the alarm clock problem?" },
        options: ["Le réveil était cassé", "La pile était vide", "Hugo a oublié de le régler", "Il y a eu une panne d'électricité"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-verbs-infinitive-prepositions",
    lessonId: "verbs-infinitive-prepositions",
    level: "A2",
    title: { TR: "Gitar öğrenmek", EN: "Learning the guitar" },
    paragraphs: [
      {
        fr: "Karim a vingt-cinq ans et il travaille dans une banque. Un soir d'hiver, il décide de changer sa vie. Il a envie d'apprendre à jouer de la guitare, un rêve qu'il garde depuis l'enfance. Il commence à chercher un professeur sur internet. Après une heure, il trouve une annonce : « Cours de guitare pour débutants, deux fois par semaine. » Il essaie de téléphoner tout de suite.",
        TR: "Karim yirmi beş yaşında ve bir bankada çalışıyor. Bir kış akşamı hayatını değiştirmeye karar veriyor. Gitar çalmayı öğrenmek istiyor; çocukluğundan beri sakladığı bir hayal. İnternette öğretmen aramaya başlıyor. Bir saat sonra bir ilan buluyor: “Yeni başlayanlar için haftada iki gün gitar dersi.” Hemen telefon etmeye çalışıyor.",
        EN: "Karim is twenty-five and works in a bank. One winter evening he decides to change his life. He wants to learn to play the guitar, a dream that he has kept since childhood. He starts looking for a teacher on the internet. After an hour he finds an advertisement: “Guitar lessons for beginners, twice a week.” He tries to phone straight away.",
      },
      {
        fr: "Le professeur s'appelle Élodie. Elle répond à la deuxième sonnerie et accepte de le recevoir le samedi suivant. Karim est content, mais un peu inquiet. Il n'a jamais joué d'un instrument. Au début du cours, il hésite à toucher la guitare. Élodie le rassure : « Ne vous inquiétez pas, je vais vous aider à bien commencer. » Il apprend à tenir l'instrument et à poser les doigts.",
        TR: "Öğretmenin adı Élodie. İkinci çalışta cevap veriyor ve onu gelecek cumartesi kabul etmeyi kabul ediyor. Karim sevinçli ama biraz endişeli. Hiç bir enstrüman çalmadı. Dersin başında gitara dokunmaya çekiniyor. Élodie onu rahatlatıyor: “Endişelenmeyin, iyi başlamanız için size yardım edeceğim.” Enstrümanı tutmayı ve parmakları yerleştirmeyi öğreniyor.",
        EN: "The teacher's name is Élodie. She answers on the second ring and agrees to see him the following Saturday. Karim is happy, but a little worried. He has never played an instrument. At the start of the lesson he hesitates to touch the guitar. Élodie reassures him: “Don't worry, I'm going to help you get off to a good start.” He learns to hold the instrument and to place his fingers.",
      },
      {
        fr: "Les premières semaines sont difficiles. Karim essaie de jouer un accord simple, mais ses doigts font mal. Il pense plusieurs fois à abandonner. Pourtant, il continue. Un soir, il oublie de ranger sa guitare, et sa colocataire l'entend jouer. « Tu commences à bien jouer ! » dit-elle. Karim n'y croit pas, mais il est ravi. Il décide de s'entraîner trente minutes par jour, sans exception.",
        TR: "İlk haftalar zor geçiyor. Karim basit bir akor çalmaya çalışıyor ama parmakları acıyor. Birkaç kez bırakmayı düşünüyor. Yine de devam ediyor. Bir akşam gitarını yerine koymayı unutuyor ve ev arkadaşı onu çalarken duyuyor. “İyi çalmaya başlıyorsun!” diyor. Karim buna inanmıyor ama çok mutlu. Her gün otuz dakika, istisnasız antrenman yapmaya karar veriyor.",
        EN: "The first weeks are difficult. Karim tries to play a simple chord, but his fingers hurt. He thinks several times about giving up. Yet he carries on. One evening he forgets to put his guitar away, and his flatmate hears him play. “You're starting to play well!” she says. Karim does not believe it, but he is delighted. He decides to practise thirty minutes a day, without exception.",
      },
      {
        fr: "Au bout de deux mois, il réussit à jouer une vraie chanson. Il apprend à changer d'accord sans regarder ses mains. Élodie le félicite : « Vous avez fini d'apprendre les bases ! » Karim est fier, mais il sait qu'il a encore beaucoup à apprendre. Il n'arrête pas de répéter la même chanson, au point que sa colocataire demande avec un sourire : « S'il te plaît, essaie d'en jouer une autre ! »",
        TR: "İki ay sonra gerçek bir şarkı çalmayı başarıyor. Ellerine bakmadan akor değiştirmeyi öğreniyor. Élodie onu kutluyor: “Temelleri öğrenmeyi bitirdiniz!” Karim gururlu ama hâlâ öğreneceği çok şey olduğunu biliyor. Aynı şarkıyı tekrar tekrar çalmaktan vazgeçmiyor; öyle ki ev arkadaşı gülümseyerek soruyor: “Lütfen başka bir şarkı çalmayı dene!”",
        EN: "After two months he manages to play a real song. He learns to change chords without looking at his hands. Élodie congratulates him: “You have finished learning the basics!” Karim is proud, but he knows he still has a lot to learn. He does not stop repeating the same song, so much so that his flatmate asks with a smile: “Please, try to play another one!”",
      },
      {
        fr: "Karim décide donc d'apprendre une nouvelle chanson, plus difficile. Il a du mal à jouer le rythme, et il oublie souvent de compter les temps. Élodie lui conseille de ne pas aller trop vite : « Il faut apprendre à jouer lentement avant de jouer vite. » Il l'écoute et il essaie de ne pas se décourager. Chaque petit progrès l'aide à continuer.",
        TR: "Bunun üzerine Karim daha zor, yeni bir şarkı öğrenmeye karar veriyor. Ritmi tutturmakta zorlanıyor ve vuruşları saymayı sık sık unutuyor. Élodie ona çok hızlı gitmemesini öğütlüyor: “Hızlı çalmadan önce yavaş çalmayı öğrenmek gerekir.” Onu dinliyor ve cesaretini kırmamaya çalışıyor. Her küçük ilerleme devam etmesine yardım ediyor.",
        EN: "So Karim decides to learn a new, more difficult song. He has trouble playing the rhythm, and he often forgets to count the beats. Élodie advises him not to go too fast: “You must learn to play slowly before playing fast.” He listens to her and tries not to get discouraged. Every little step forward helps him to carry on.",
      },
      {
        fr: "Sa colocataire, Inès, est aussi musicienne. Elle l'aide à lire une partition et à choisir ses chansons. Elle essaie de lui donner des conseils sans le décourager. Karim a l'habitude de commencer à jouer le soir, après le travail, et il finit toujours par oublier l'heure. Un jour, il a même oublié de dîner !",
        TR: "Ev arkadaşı Inès de müzisyen. Nota okumasına ve şarkılarını seçmesine yardım ediyor. Onun cesaretini kırmadan öğüt vermeye çalışıyor. Karim akşamları, işten sonra çalmaya başlamayı alışkanlık edindi ve hep zamanı unutuyor. Bir gün akşam yemeğini yemeyi bile unuttu!",
        EN: "His flatmate, Inès, is also a musician. She helps him to read sheet music and to choose his songs. She tries to give him advice without discouraging him. Karim is in the habit of starting to play in the evening, after work, and he always ends up forgetting the time. One day he even forgot to have dinner!",
      },
      {
        fr: "Quelques mois plus tard, ses amis l'invitent à un petit concert dans un café. Karim hésite à accepter : jouer devant du monde, c'est un grand pas ! Il finit par dire oui, et il passe des semaines à répéter. Le soir du concert, il a peur de se tromper. Il respire profondément, il commence à jouer, et il réussit à finir sa chanson sans erreur. Les gens applaudissent longuement.",
        TR: "Birkaç ay sonra arkadaşları onu bir kafedeki küçük bir konsere davet ediyor. Karim kabul etmekte tereddüt ediyor: insanların önünde çalmak büyük bir adım! Sonunda evet diyor ve haftalarca prova yapıyor. Konser akşamı hata yapmaktan korkuyor. Derin nefes alıyor, çalmaya başlıyor ve şarkısını hatasız bitirmeyi başarıyor. İnsanlar uzun uzun alkışlıyor.",
        EN: "A few months later his friends invite him to a small concert in a café. Karim hesitates to accept: playing in front of people is a big step! He ends up saying yes, and he spends weeks rehearsing. On the night of the concert he is afraid of making a mistake. He breathes deeply, starts to play, and manages to finish his song without a single error. People applaud for a long time.",
      },
      {
        fr: "Après le concert, Élodie le félicite chaleureusement. « Vous avez réussi à vaincre votre peur, bravo ! » Karim sourit. Il a décidé de continuer à jouer toute sa vie, et il a même commencé à écrire sa propre chanson. Il pense à tout ce qu'il a appris : il a appris à jouer, mais surtout à ne pas abandonner. Il n'oubliera jamais d'être patient, et il ne cessera pas de rêver.",
        TR: "Konserden sonra Élodie onu sıcak bir şekilde kutluyor. “Korkunuzu yenmeyi başardınız, bravo!” Karim gülümsüyor. Ömrü boyunca çalmaya devam etmeye karar verdi ve hatta kendi şarkısını yazmaya bile başladı. Öğrendiği her şeyi düşünüyor: çalmayı öğrendi, ama en önemlisi vazgeçmemeyi. Sabırlı olmayı hiç unutmayacak ve hayal kurmaktan vazgeçmeyecek.",
        EN: "After the concert Élodie congratulates him warmly. “You managed to overcome your fear, bravo!” Karim smiles. He has decided to keep on playing all his life, and he has even started to write his own song. He thinks about everything he has learned: he has learned to play, but above all not to give up. He will never forget to be patient, and he will not stop dreaming.",
      },
    ],
    questions: [
      {
        question: { fr: "Qu'est-ce que Karim décide d'apprendre ?", TR: "Karim neyi öğrenmeye karar veriyor?", EN: "What does Karim decide to learn?" },
        options: ["Le piano", "La guitare", "Le violon", "La batterie"],
        answer: 1,
      },
      {
        question: { fr: "Où Karim trouve-t-il son professeur ?", TR: "Karim öğretmenini nerede buluyor?", EN: "Where does Karim find his teacher?" },
        options: ["Chez un ami", "À la banque", "Sur internet"],
        answer: 2,
      },
      {
        question: { fr: "Combien de temps Karim décide-t-il de s'entraîner par jour ?", TR: "Karim günde ne kadar antrenman yapmaya karar veriyor?", EN: "How long does Karim decide to practise each day?" },
        options: ["Dix minutes", "Une heure", "Trente minutes", "Deux heures"],
        answer: 2,
      },
      {
        question: { fr: "Pourquoi la colocataire demande-t-elle une autre chanson ?", TR: "Ev arkadaşı neden başka bir şarkı istiyor?", EN: "Why does the flatmate ask for another song?" },
        options: ["Elle n'aime pas la guitare", "Karim répète toujours la même chanson", "Elle veut dormir"],
        answer: 1,
      },
      {
        question: { fr: "Que fait Karim à la fin de l'histoire ?", TR: "Karim hikâyenin sonunda ne yapıyor?", EN: "What does Karim do at the end of the story?" },
        options: ["Il abandonne la guitare", "Il joue en concert et décide de continuer", "Il change de professeur", "Il vend sa guitare"],
        answer: 1,
      },
    ],
  },
];

export default texts;
