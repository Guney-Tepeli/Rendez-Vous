import type { ReadingText } from "../../domain/types";

const texts: readonly ReadingText[] = [
  {
    id: "reading-passe-compose-negation",
    lessonId: "passe-compose-negation",
    level: "A2",
    title: { TR: "Bir hafta sonu felaketi", EN: "A weekend that went wrong" },
    paragraphs: [
      {
        fr: "Samedi dernier, mon week-end n'a pas bien commencé. Je n'ai pas entendu mon réveil et je me suis levé très tard. Je n'ai pas pris de petit déjeuner et je n'ai pas eu le temps de me doucher. Mon ami Karim a téléphoné trois fois, mais je n'ai pas répondu. À dix heures, j'ai quitté la maison très vite.",
        TR: "Geçen cumartesi hafta sonum iyi başlamadı. Çalar saatimi duymadım ve çok geç kalktım. Kahvaltı etmedim, duş almaya da vaktim olmadı. Arkadaşım Karim üç kez telefon etti ama cevap vermedim. Saat ona doğru evden çok hızlı çıktım.",
        EN: "Last Saturday my weekend did not start well. I did not hear my alarm clock and I got up very late. I did not have breakfast and I did not have time to shower. My friend Karim called three times, but I did not answer. At ten o'clock I left the house very quickly.",
      },
      {
        fr: "Karim a attendu devant la gare. Il n'a pas souri. « As-tu bien dormi ? » a-t-il demandé. J'ai répondu : « Trop bien ! Je suis désolé, je n'ai pas regardé l'heure. » Il a ri, et nous avons acheté deux billets pour Rouen. Le train est parti à dix heures vingt, et nous avons couru jusqu'au quai.",
        TR: "Karim garın önünde bekledi. Gülümsemedi. « İyi uyudun mu? » diye sordu. Ben de şöyle cevap verdim: « Çok iyi! Üzgünüm, saate bakmadım. » O güldü ve Rouen için iki bilet aldık. Tren ona yirmi kala kalktı ve biz perona kadar koştuk.",
        EN: "Karim waited in front of the station. He did not smile. \"Did you sleep well?\" he asked. I answered: \"Too well! I am sorry, I did not look at the time.\" He laughed, and we bought two tickets for Rouen. The train left at ten twenty, and we ran all the way to the platform.",
      },
      {
        fr: "Dans le train, nous avons beaucoup parlé. Karim a déjà visité Rouen trois fois, mais moi, je n'ai pas encore vu cette ville. « Est-ce que tu as lu un guide ? » a demandé Karim. « Non, je n'ai pas eu le temps ! » J'ai ouvert mon sac et j'ai trouvé un vieux plan de la ville. Karim a bien rigolé, parce que ce plan a vingt ans.",
        TR: "Trende çok konuştuk. Karim Rouen'ı daha önce üç kez gezmişti ama ben bu şehri henüz görmedim. « Bir rehber okudun mu? » diye sordu Karim. « Hayır, vaktim olmadı! » Çantamı açtım ve eski bir şehir planı buldum. Karim çok güldü, çünkü bu plan yirmi yıllık.",
        EN: "In the train we talked a lot. Karim has already visited Rouen three times, but I have not seen this city yet. \"Did you read a guide?\" Karim asked. \"No, I did not have time!\" I opened my bag and found an old map of the city. Karim laughed a lot, because this map is twenty years old.",
      },
      {
        fr: "Le contrôleur a demandé les billets. Karim a cherché dans son sac, dans sa veste, dans sa poche, mais il n'a pas trouvé son portefeuille. « Mais où est-il ? A-t-il disparu ? » a-t-il dit. En fait, il a laissé son portefeuille sur la table de sa cuisine ! Par chance, nous avons acheté les billets avant le départ, et le contrôleur n'a pas fait de problème.",
        TR: "Kontrolör biletleri istedi. Karim çantasında, ceketinde, cebinde aradı ama cüzdanını bulamadı. « Ama nerede? Kayboldu mu? » dedi. Aslında cüzdanını mutfak masasının üstünde bırakmıştı! Neyse ki biletleri yola çıkmadan önce almıştık ve kontrolör sorun çıkarmadı.",
        EN: "The ticket inspector asked for the tickets. Karim looked in his bag, in his jacket, in his pocket, but he did not find his wallet. \"But where is it? Did it disappear?\" he said. In fact, he had left his wallet on his kitchen table! Luckily, we bought the tickets before the departure, and the inspector did not make a problem.",
      },
      {
        fr: "À Rouen, il a beaucoup plu. Nous n'avons pas pris de parapluie, alors nous avons couru de magasin en magasin. Nous avons vu la grande cathédrale sous la pluie, mais nous n'avons pas fait de photos, parce que mon téléphone est tombé dans une flaque d'eau. Nous avons bien ri, et nous n'avons pas pensé à nos vêtements mouillés.",
        TR: "Rouen'da çok yağmur yağdı. Şemsiye almadık, bu yüzden dükkândan dükkâna koştuk. Büyük katedrali yağmurun altında gördük ama fotoğraf çekmedik, çünkü telefonum bir su birikintisine düştü. Çok güldük ve ıslak kıyafetlerimizi aklımıza bile getirmedik.",
        EN: "In Rouen it rained a lot. We did not take an umbrella, so we ran from shop to shop. We saw the big cathedral in the rain, but we did not take photos, because my phone fell into a puddle. We laughed a lot, and we did not think about our wet clothes.",
      },
      {
        fr: "À midi, nous avons mangé dans une petite crêperie. Karim n'a pas pris de dessert, mais moi, j'ai commandé deux crêpes au chocolat. Le serveur a demandé : « Avez-vous aimé le repas ? » Nous avons répondu oui, bien sûr. Karim n'a pas payé, car il n'a pas pris son argent : j'ai payé pour deux. Il a promis de payer la prochaine fois.",
        TR: "Öğlen küçük bir krepçide yemek yedik. Karim tatlı almadı ama ben çikolatalı iki krep sipariş ettim. Garson sordu: « Yemeği beğendiniz mi? » Elbette evet dedik. Karim ödemedi, çünkü parasını almamıştı: iki kişilik ben ödedim. Bir sonraki sefer ödeyeceğine söz verdi.",
        EN: "At noon we ate in a small crêperie. Karim did not have a dessert, but I ordered two chocolate crêpes. The waiter asked: \"Did you like the meal?\" We said yes, of course. Karim did not pay, because he did not take his money: I paid for two. He promised to pay next time.",
      },
      {
        fr: "Après le repas, nous avons voulu visiter le musée, mais nous n'avons pas eu de chance : il a fermé à une heure, et nous avons mangé trop longtemps. Karim n'a pas protesté. Nous avons acheté une carte postale, nous avons marché le long du fleuve et nous avons pris un chocolat chaud. Je n'ai pas écrit la carte, parce que mon stylo n'a pas marché. Karim a ri encore une fois, et nous n'avons pas parlé du musée.",
        TR: "Yemekten sonra müzeyi gezmek istedik ama şansımız yaver gitmedi: saat birde kapandı ve biz çok uzun yemek yemiştik. Karim itiraz etmedi. Bir kartpostal aldık, nehir boyunca yürüdük ve sıcak çikolata içtik. Kartı yazmadım, çünkü kalemim çalışmadı. Karim bir kez daha güldü ve müzeden söz etmedik.",
        EN: "After the meal we wanted to visit the museum, but we were not lucky: it closed at one o'clock, and we ate for too long. Karim did not protest. We bought a postcard, we walked along the river and we had a hot chocolate. I did not write the card, because my pen did not work. Karim laughed once again, and we did not talk about the museum.",
      },
      {
        fr: "Le soir, nous sommes rentrés fatigués et mouillés. Est-ce que ce week-end a été raté ? Bien sûr que non ! Je n'ai pas dormi dans le train, nous n'avons pas vu le soleil, mais nous avons passé une belle journée. Dimanche, je n'ai pas quitté mon lit, et j'ai très bien dormi.",
        TR: "Akşam yorgun ve ıslak döndük. Bu hafta sonu berbat mıydı? Elbette hayır! Trende uyumadım, güneşi görmedik ama güzel bir gün geçirdik. Pazar günü yatağımdan çıkmadım ve çok iyi uyudum.",
        EN: "In the evening we came home tired and wet. Was this weekend a failure? Of course not! I did not sleep in the train, we did not see the sun, but we had a nice day. On Sunday I did not leave my bed, and I slept very well.",
      },
    ],
    questions: [
      {
        question: { fr: "Pourquoi le narrateur arrive-t-il en retard à la gare ?", TR: "Anlatıcı neden gara geç geliyor?", EN: "Why does the narrator arrive late at the station?" },
        options: ["Il n'a pas entendu son réveil.", "Il a perdu son billet.", "Il a manqué le bus.", "Il a travaillé tard."],
        answer: 0,
      },
      {
        question: { fr: "Où vont les deux amis ?", TR: "İki arkadaş nereye gidiyor?", EN: "Where do the two friends go?" },
        options: ["À Lyon", "À Rouen", "À Paris"],
        answer: 1,
      },
      {
        question: { fr: "Quel objet Karim n'a-t-il pas avec lui ?", TR: "Karim'in yanında hangi eşya yok?", EN: "Which object does Karim not have with him?" },
        options: ["Son téléphone", "Son sac", "Son portefeuille", "Sa veste"],
        answer: 2,
      },
      {
        question: { fr: "Pourquoi le narrateur ne fait-il pas de photos de la cathédrale ?", TR: "Katedralin neden fotoğrafı yok?", EN: "Why are there no photos of the cathedral?" },
        options: ["La nuit est tombée.", "Le téléphone est tombé dans l'eau.", "La cathédrale a fermé.", "Karim n'a pas aimé la ville."],
        answer: 1,
      },
      {
        question: { fr: "Que fait le narrateur le dimanche ?", TR: "Anlatıcı pazar günü ne yapıyor?", EN: "What does the narrator do on Sunday?" },
        options: ["Il visite Rouen encore une fois.", "Il reste au lit et dort bien.", "Il téléphone à Karim."],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-participle-agreement",
    lessonId: "participle-agreement",
    level: "A2",
    title: { TR: "Lizbon'da bir hafta", EN: "A week in Lisbon" },
    paragraphs: [
      {
        fr: "Le mois dernier, ma sœur Léa et moi, nous sommes parties au Portugal. Nous sommes arrivées à Lisbonne un jeudi matin, après un long voyage. Notre amie Sarah est venue nous chercher à l'aéroport. Elle est restée avec nous jusqu'au dimanche. Ses deux frères sont arrivés le soir, et nous sommes sortis ensemble pour dîner.",
        TR: "Geçen ay kız kardeşim Léa ile ben Portekiz'e gittik. Uzun bir yolculuktan sonra bir perşembe sabahı Lizbon'a vardık. Arkadaşımız Sarah bizi havalimanına almaya geldi. Pazara kadar bizimle kaldı. İki erkek kardeşi akşam geldi ve birlikte yemeğe çıktık.",
        EN: "Last month my sister Léa and I went to Portugal. We arrived in Lisbon on a Thursday morning, after a long trip. Our friend Sarah came to pick us up at the airport. She stayed with us until Sunday. Her two brothers arrived in the evening, and we went out together for dinner.",
      },
      {
        fr: "Le vendredi, Léa ne s'est pas levée tôt, mais moi, je me suis réveillée à sept heures. Je me suis habillée vite et je suis sortie seule dans la rue. Je me suis promenée près du fleuve et je suis entrée dans une petite boulangerie. Quand je suis rentrée à l'hôtel, Léa s'est réveillée et elle s'est plainte : « Pourquoi tu n'es pas restée avec moi ? »",
        TR: "Cuma günü Léa erken kalkmadı ama ben yedide uyandım. Hızlıca giyindim ve tek başıma sokağa çıktım. Nehrin yanında yürüdüm, sonra küçük bir fırına girdim. Otele döndüğümde Léa uyandı ve sızlandı: « Neden benimle kalmadın? »",
        EN: "On Friday Léa did not get up early, but I woke up at seven. I got dressed quickly and went out alone into the street. I walked near the river, then I went into a small bakery. When I came back to the hotel, Léa woke up and complained: \"Why didn't you stay with me?\"",
      },
      {
        fr: "L'après-midi, nous sommes montées dans le célèbre tramway jaune. Deux touristes japonaises sont descendues avec nous au sommet de la colline. Léa est tombée devant un café, mais elle s'est vite relevée et elle a ri. Nous nous sommes assises à une terrasse et nous avons regardé la ville. Elle est très belle, avec ses toits rouges et ses rues étroites.",
        TR: "Öğleden sonra ünlü sarı tramvaya bindik. İki Japon turist tepenin zirvesinde bizimle birlikte indi. Léa bir kafenin önünde düştü ama çabuk kalktı ve güldü. Bir terasa oturduk ve şehre baktık. Kırmızı çatıları ve dar sokaklarıyla gerçekten çok güzel.",
        EN: "In the afternoon we got on the famous yellow tram. Two Japanese tourists got off with us at the top of the hill. Léa fell in front of a café, but she quickly got up and laughed. We sat down on a terrace and looked at the city. It is really beautiful, with its red roofs and its narrow streets.",
      },
      {
        fr: "Le vendredi soir, Léa et moi, nous sommes allées dans un grand magasin. Nous nous sommes dépêchées, parce que le magasin ferme à six heures. Nous sommes sorties avec trois sacs. Léa est entrée dans une boutique de chaussures, et elle est ressortie avec deux paires ! Elle s'est excusée : « Je me suis un peu perdue dans les prix. » Nous nous sommes bien amusées.",
        TR: "Cuma akşamı Léa ile ben büyük bir mağazaya gittik. Acele ettik, çünkü mağaza altıda kapanıyor. Üç poşetle çıktık. Léa bir ayakkabı dükkânına girdi ve iki çiftle çıktı! Özür diledi: « Fiyatlar arasında biraz kayboldum. » Çok eğlendik.",
        EN: "On Friday evening Léa and I went to a department store. We hurried, because the shop closes at six o'clock. We came out with three bags. Léa went into a shoe shop, and she came out again with two pairs! She apologised: \"I got a bit lost in the prices.\" We had a lot of fun.",
      },
      {
        fr: "Le samedi, nous nous sommes perdues dans le vieux quartier. Nous nous sommes arrêtées devant une petite église, nous nous sommes reposées un moment et nous sommes parties dans la mauvaise direction. Deux vieilles dames sont passées et elles se sont arrêtées pour nous aider. Elles sont restées dix minutes avec nous et elles sont venues jusqu'à la bonne rue.",
        TR: "Cumartesi eski mahallede kayboldık. Küçük bir kilisenin önünde durduk, bir süre dinlendik, sonra yanlış yöne gittik. İki yaşlı hanım geçti ve bize yardım etmek için durdu. Bizimle on dakika kaldılar ve doğru sokağa kadar geldiler.",
        EN: "On Saturday we got lost in the old district. We stopped in front of a small church, we rested for a moment, then we left in the wrong direction. Two old ladies walked by and stopped to help us. They stayed ten minutes with us and came all the way to the right street.",
      },
      {
        fr: "Après cela, nous sommes allées à Belém en bus. Nous sommes descendues devant la tour et nous sommes entrées dans un petit musée. Léa est montée au sommet, mais moi, je ne suis pas montée : je suis restée en bas avec Sarah, parce que j'ai peur de la hauteur. Deux amies de Sarah sont arrivées à midi et nous nous sommes embrassées. Elles sont reparties à trois heures.",
        TR: "Bundan sonra otobüsle Belém'e gittik. Kulenin önünde indik ve küçük bir müzeye girdik. Léa tepeye çıktı ama ben çıkmadım: Sarah ile aşağıda kaldım, çünkü yükseklik korkum var. Sarah'nın iki arkadaşı öğlen geldi ve birbirimizi öptük. Saat üçte yeniden gittiler.",
        EN: "After that we went to Belém by bus. We got off in front of the tower and we went into a small museum. Léa went up to the top, but I did not go up: I stayed at the bottom with Sarah, because I am afraid of heights. Two friends of Sarah arrived at noon and we kissed each other. They left again at three o'clock.",
      },
      {
        fr: "Le soir, les frères de Sarah sont arrivés en retard et ils se sont excusés. Nous nous sommes bien amusés ! Léa et Sarah se sont mises à danser, et moi, je me suis assise avec le petit frère. Nous ne nous sommes pas couchés avant deux heures du matin. Je ne me suis pas ennuyée une seconde.",
        TR: "Akşam Sarah'nın erkek kardeşleri geç geldi ve özür diledi. Çok eğlendik! Léa ile Sarah dansa başladı, ben de küçük kardeşin yanına oturdum. Sabah ikiye kadar yatmadık. Bir saniye bile sıkılmadım.",
        EN: "In the evening Sarah's brothers arrived late and apologised. We had a lot of fun! Léa and Sarah started to dance, and I sat down with the little brother. We did not go to bed until two in the morning. I was not bored for a single second.",
      },
      {
        fr: "Dimanche, Sarah est partie très tôt, et nous sommes restées à l'hôtel jusqu'à midi. Mes parents ne sont pas venus avec nous, mais ils sont restés à la maison et ils ont gardé le chat. Nous sommes rentrées à Paris le soir. Léa s'est endormie dans l'avion, et moi, je suis descendue la première à l'arrivée. Une belle semaine !",
        TR: "Pazar günü Sarah çok erken gitti, biz de öğlene kadar otelde kaldık. Annemle babam bizimle gelmedi, evde kaldılar ve kediye baktılar. Akşam Paris'e döndük. Léa uçakta uyuyakaldı, ben de varışta ilk inen oldum. Güzel bir haftaydı!",
        EN: "On Sunday Sarah left very early, and we stayed at the hotel until noon. My parents did not come with us, but they stayed at home and looked after the cat. We returned to Paris in the evening. Léa fell asleep on the plane, and I got off first on arrival. A lovely week!",
      },
    ],
    questions: [
      {
        question: { fr: "Qui est venu chercher les deux sœurs à l'aéroport ?", TR: "İki kız kardeşi havalimanında kim karşıladı?", EN: "Who came to pick up the two sisters at the airport?" },
        options: ["Leurs parents", "Leur amie Sarah", "Deux touristes", "Les frères de Sarah"],
        answer: 1,
      },
      {
        question: { fr: "Qu'est-ce que la narratrice fait vendredi matin ?", TR: "Anlatıcı cuma sabahı ne yapıyor?", EN: "What does the narrator do on Friday morning?" },
        options: ["Elle dort jusqu'à midi.", "Elle se promène seule près du fleuve.", "Elle visite une église avec Léa."],
        answer: 1,
      },
      {
        question: { fr: "Qui est tombé devant un café ?", TR: "Bir kafenin önünde kim düştü?", EN: "Who fell in front of a café?" },
        options: ["La narratrice", "Sarah", "Léa", "Une touriste"],
        answer: 2,
      },
      {
        question: { fr: "Qui a aidé les sœurs quand elles se sont perdues ?", TR: "Kız kardeşler kaybolunca onlara kim yardım etti?", EN: "Who helped the sisters when they got lost?" },
        options: ["Deux vieilles dames", "Les frères de Sarah", "Un serveur", "Un policier"],
        answer: 0,
      },
      {
        question: { fr: "Que font les parents pour la semaine de voyage ?", TR: "Ebeveynler hafta boyunca ne yapıyor?", EN: "What do the parents do during the week?" },
        options: ["Ils voyagent au Portugal.", "Ils restent à la maison avec le chat.", "Ils attendent à l'aéroport.", "Ils téléphonent à Sarah."],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-imparfait",
    lessonId: "imparfait",
    level: "A2",
    title: { TR: "Çocukluğumun köyü", EN: "The village of my childhood" },
    paragraphs: [
      {
        fr: "Quand j'étais petit, j'habitais dans un village près de Bordeaux avec mes parents et ma sœur Julie. Notre maison était petite, mais elle avait un grand jardin. Mon père travaillait à la mairie et ma mère était institutrice. Nous n'avions pas de voiture, alors nous allions partout à pied ou à vélo. Le village était calme et les rues étaient presque vides.",
        TR: "Küçükken anne babamla ve kız kardeşim Julie ile Bordeaux yakınlarında bir köyde oturuyordum. Evimiz küçüktü ama büyük bir bahçesi vardı. Babam belediyede çalışıyordu, annem de öğretmendi. Arabamız yoktu, bu yüzden her yere yürüyerek ya da bisikletle gidiyorduk. Köy sessizdi ve sokaklar neredeyse bomboştu.",
        EN: "When I was small, I lived in a village near Bordeaux with my parents and my sister Julie. Our house was small, but it had a big garden. My father worked at the town hall and my mother was a schoolteacher. We had no car, so we went everywhere on foot or by bike. The village was quiet and the streets were almost empty.",
      },
      {
        fr: "Le dimanche, nous rendions visite à mes grands-parents. Ils habitaient dans une vieille ferme au bout du village. Ma grand-mère se levait à cinq heures du matin. Elle préparait le pain, elle donnait à manger aux poules et elle chantait toujours la même chanson. Mon grand-père lisait le journal dans la cuisine et il buvait son café très chaud.",
        TR: "Pazar günleri büyükanne ve büyükbabamı ziyaret ederdik. Köyün ucundaki eski bir çiftlikte otururlardı. Büyükannem sabah beşte kalkardı. Ekmek hazırlar, tavuklara yem verir ve hep aynı şarkıyı söylerdi. Büyükbabam mutfakta gazete okur ve kahvesini çok sıcak içerdi.",
        EN: "On Sundays we visited my grandparents. They lived in an old farm at the end of the village. My grandmother got up at five in the morning. She made bread, she fed the chickens and she always sang the same song. My grandfather read the newspaper in the kitchen and drank his coffee very hot.",
      },
      {
        fr: "À midi, nous mangions dans la cuisine, autour d'une grande table en bois. Il y avait toujours de la soupe, du fromage et des fruits du jardin. Ma grand-mère faisait aussi des tartes aux pommes. Julie et moi, nous mangions trop de gâteau et nous avions mal au ventre, mais nous voulions encore une part. Mon grand-père riait et il disait : « Les enfants, vous étiez affamés ! »",
        TR: "Öğlen mutfakta, büyük ahşap bir masanın etrafında yemek yerdik. Hep çorba, peynir ve bahçeden meyve olurdu. Büyükannem ayrıca elmalı turta yapardı. Julie ile ben çok fazla pasta yerdik ve karnımız ağrırdı ama yine de bir dilim daha isterdik. Büyükbabam gülerdi ve şöyle derdi: « Çocuklar, açlıktan ölüyordunuz! »",
        EN: "At noon we ate in the kitchen, around a big wooden table. There was always soup, cheese and fruit from the garden. My grandmother also made apple pies. Julie and I ate too much cake and we had a stomach ache, but we still wanted another piece. My grandfather laughed and said: \"Children, you were starving!\"",
      },
      {
        fr: "L'après-midi, Julie et moi, nous jouions dehors. Nous construisions des cabanes dans le jardin, nous faisions du vélo sur le chemin et nous cherchions des escargots après la pluie. En été, il faisait souvent très chaud, alors nous nous baignions dans la rivière avec les voisins. L'eau était froide, mais nous ne sortions pas avant le soir.",
        TR: "Öğleden sonra Julie ile ben dışarıda oynardık. Bahçede kulübeler yapar, patikada bisiklete biner, yağmurdan sonra salyangoz arardık. Yazın genellikle çok sıcak olurdu, bu yüzden komşularla nehirde yüzerdik. Su soğuktu ama akşama kadar çıkmazdık.",
        EN: "In the afternoon Julie and I played outside. We built huts in the garden, we rode our bikes on the path and we looked for snails after the rain. In summer it was often very hot, so we swam in the river with the neighbours. The water was cold, but we did not get out before the evening.",
      },
      {
        fr: "À l'école, j'avais un maître très gentil, monsieur Roux. Il parlait avec une voix douce et il avait toujours une blague pour nous. Nous apprenions à lire, à écrire et à compter. Je n'aimais pas beaucoup les mathématiques, mais j'adorais la musique. Je chantais dans la chorale de l'école, et ma mère venait écouter nos concerts avec ma grand-mère.",
        TR: "Okulda çok nazik bir öğretmenim vardı, Bay Roux. Yumuşak bir sesle konuşurdu ve bizim için hep bir esprisi olurdu. Okumayı, yazmayı ve saymayı öğreniyorduk. Matematiği pek sevmezdim ama müziğe bayılırdım. Okul korosunda şarkı söylerdim, annem de büyükannemle birlikte konserlerimizi dinlemeye gelirdi.",
        EN: "At school I had a very kind teacher, Mr Roux. He spoke in a soft voice and he always had a joke for us. We learned to read, to write and to count. I did not like mathematics very much, but I loved music. I sang in the school choir, and my mother came to listen to our concerts with my grandmother.",
      },
      {
        fr: "En hiver, il neigeait parfois et nous restions à la maison. Le soir, mon père allumait le feu et ma mère racontait des histoires. Nous regardions la télévision le samedi soir, et nous allions au lit à huit heures. Les journées étaient longues et lentes, mais nous ne nous ennuyions pas.",
        TR: "Kışın ara sıra kar yağardı ve biz evde kalırdık. Akşamları babam ateşi yakardı, annem de hikâyeler anlatırdı. Televizyonu cumartesi akşamları izlerdik ve saat sekizde yatağa giderdik. Günler uzun ve yavaştı ama biz hiç sıkılmazdık.",
        EN: "In winter it sometimes snowed and we stayed at home. In the evening my father lit the fire and my mother told stories. We watched television on Saturday evenings, and we went to bed at eight o'clock. The days were long and slow, but we were never bored.",
      },
      {
        fr: "En juillet, il y avait la fête du village. Les gens venaient sur la place, les musiciens jouaient de l'accordéon, les femmes préparaient des gâteaux et les hommes jouaient aux boules. Julie et moi, nous dansions avec les autres enfants. Ma mère portait une belle robe bleue, et mon père chantait avec ses amis. À minuit, nous regardions le feu d'artifice, et je m'endormais dans les bras de mon père. Je sens encore l'odeur des gâteaux.",
        TR: "Temmuzda köyün şenliği olurdu. İnsanlar meydana gelirdi, müzisyenler akordeon çalardı, kadınlar pasta hazırlardı, erkekler bocce oynardı. Julie ile ben diğer çocuklarla dans ederdik. Annem güzel mavi bir elbise giyerdi, babam da arkadaşlarıyla şarkı söylerdi. Gece yarısı havai fişeklere bakardık ve ben babamın kollarında uyuyakalırdım. Hâlâ pastaların kokusunu duyuyorum.",
        EN: "In July there was the village fair. People came to the square, the musicians played the accordion, the women prepared cakes and the men played boules. Julie and I danced with the other children. My mother wore a beautiful blue dress, and my father sang with his friends. At midnight we watched the fireworks, and I fell asleep in my father's arms. I can still smell the cakes.",
      },
      {
        fr: "Aujourd'hui, j'habite en ville et je travaille beaucoup. Mais je pense souvent à cette époque. Les voisins se parlaient dans la rue, les enfants jouaient ensemble, et les dimanches avaient une odeur de pain chaud. Nous étions simples et nous étions heureux.",
        TR: "Bugün şehirde oturuyorum ve çok çalışıyorum. Ama sık sık o döneme dönüp bakıyorum. Komşular sokakta konuşurdu, çocuklar birlikte oynardı ve pazarların sıcak ekmek kokusu vardı. Sadeydik ve mutluyduk.",
        EN: "Today I live in a city and I work a lot. But I often think about that time. The neighbours talked to each other in the street, the children played together, and Sundays smelled of warm bread. We were simple and we were happy.",
      },
    ],
    questions: [
      {
        question: { fr: "Quel était le métier du père du narrateur ?", TR: "Anlatıcının babasının mesleği neydi?", EN: "What was the narrator's father's job?" },
        options: ["Il travaillait à la mairie.", "Il était fermier.", "Il était maître d'école.", "Il travaillait dans un café."],
        answer: 0,
      },
      {
        question: { fr: "Que faisait la grand-mère à cinq heures du matin ?", TR: "Büyükanne sabah beşte ne yapardı?", EN: "What did the grandmother do at five in the morning?" },
        options: ["Elle lisait le journal.", "Elle préparait le pain et nourrissait les poules.", "Elle faisait du vélo."],
        answer: 1,
      },
      {
        question: { fr: "Pourquoi les enfants avaient-ils mal au ventre ?", TR: "Çocukların karnı neden ağrırdı?", EN: "Why did the children have a stomach ache?" },
        options: ["Ils buvaient de l'eau froide.", "Ils mangeaient trop de gâteau.", "Ils ne mangeaient pas assez.", "Ils couraient trop."],
        answer: 1,
      },
      {
        question: { fr: "Que faisaient les enfants en été ?", TR: "Çocuklar yazın ne yapardı?", EN: "What did the children do in summer?" },
        options: ["Ils restaient à la ferme.", "Ils jouaient à la télévision.", "Ils se baignaient dans la rivière.", "Ils partaient en vacances."],
        answer: 2,
      },
      {
        question: { fr: "Qu'est-ce que le narrateur aimait à l'école ?", TR: "Anlatıcı okulda neyi severdi?", EN: "What did the narrator like at school?" },
        options: ["Les mathématiques", "La musique", "Le sport"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-imparfait-passe-compose",
    lessonId: "imparfait-passe-compose",
    level: "A2",
    title: { TR: "Kaçan köpek", EN: "The runaway dog" },
    paragraphs: [
      {
        fr: "C'était un dimanche d'octobre. Il faisait froid et il pleuvait. À cette époque, j'habitais à Lille avec mon colocataire Hugo et notre chien Biscotte. D'habitude, nous sortions le chien à huit heures, mais ce jour-là, nous dormions encore à neuf heures, parce que nous étions très fatigués après une longue semaine de travail.",
        TR: "Ekim ayında bir pazar günüydü. Hava soğuktu ve yağmur yağıyordu. O dönemde Lille'de ev arkadaşım Hugo ve köpeğimiz Biscotte ile birlikte oturuyordum. Normalde köpeği sekizde dışarı çıkarırdık ama o gün dokuzda hâlâ uyuyorduk, çünkü uzun bir iş haftasından sonra çok yorgunduk.",
        EN: "It was a Sunday in October. It was cold and it was raining. At that time I lived in Lille with my flatmate Hugo and our dog Biscotte. Usually we took the dog out at eight o'clock, but that day we were still sleeping at nine, because we were very tired after a long week of work.",
      },
      {
        fr: "Soudain, le téléphone a sonné. C'était notre voisine, madame Petit. Elle était très inquiète : la porte du jardin était ouverte et Biscotte courait dans la rue. Hugo et moi, nous nous sommes levés en une seconde, nous avons mis nos manteaux et nous sommes sortis sans petit déjeuner. Dehors, la pluie tombait toujours.",
        TR: "Birden telefon çaldı. Komşumuz Madame Petit'ydi. Çok endişeliydi: bahçe kapısı açıktı ve Biscotte sokakta koşuyordu. Hugo ile ben bir saniyede kalktık, montlarımızı giydik ve kahvaltı etmeden çıktık. Dışarıda yağmur hâlâ yağıyordu.",
        EN: "Suddenly the phone rang. It was our neighbour, Madame Petit. She was very worried: the garden gate was open and Biscotte was running in the street. Hugo and I got up in one second, we put on our coats and we went out without breakfast. Outside, the rain was still falling.",
      },
      {
        fr: "Dans la rue, nous avons cherché partout. Il y avait beaucoup de monde au marché, et les gens achetaient des légumes sous leurs parapluies. Nous avons demandé à un marchand s'il avait vu un petit chien blanc. Il tenait une saucisse dans la main et il a répondu avec un sourire : « Oui, un chien blanc est passé par ici, et il a pris une saucisse ! »",
        TR: "Sokakta her yeri aradık. Pazarda çok kalabalık vardı ve insanlar şemsiyelerinin altında sebze alıyordu. Bir satıcıya küçük beyaz bir köpek görüp görmediğini sorduk. Elinde bir sosis tutuyordu ve gülümseyerek cevap verdi: « Evet, beyaz bir köpek buradan geçti ve bir sosis aldı! »",
        EN: "In the street we looked everywhere. There were a lot of people at the market, and people were buying vegetables under their umbrellas. We asked a seller if he had seen a little white dog. He was holding a sausage in his hand and he answered with a smile: \"Yes, a white dog went by here, and it took a sausage!\"",
      },
      {
        fr: "Nous avons couru vers le parc. Des enfants jouaient au ballon près de la fontaine, et Biscotte jouait avec eux ! Elle était mouillée, sale et très heureuse. Quand elle a vu Hugo, elle a sauté dans ses bras. Une petite fille avait déjà sa laisse à la main et elle a demandé : « Il est à vous, ce chien ? »",
        TR: "Parka doğru koştuk. Çocuklar çeşmenin yanında top oynuyordu ve Biscotte onlarla oynuyordu! Islaktı, kirliydi ve çok mutluydu. Hugo'yu görünce kucağına atladı. Küçük bir kızın elinde zaten tasması vardı ve sordu: « Bu köpek sizin mi? »",
        EN: "We ran to the park. Some children were playing ball near the fountain, and Biscotte was playing with them! She was wet, dirty and very happy. When she saw Hugo, she jumped into his arms. A little girl already had her lead in her hand and she asked: \"Is this dog yours?\"",
      },
      {
        fr: "Hugo a répondu oui et il a remercié les enfants. Moi, je me suis assis sur un banc : j'étais fatigué, mais j'étais soulagé. Le propriétaire du kiosque à côté du parc nous a offert deux cafés chauds. Nous avons bu un café chaud, alors que Biscotte dormait déjà sous le banc.",
        TR: "Hugo evet diye cevap verdi ve çocuklara teşekkür etti. Ben bir banka oturdum: yorgundum ama içim rahatlamıştı. Parkın yanındaki büfenin sahibi bize iki sıcak kahve ikram etti. Biscotte bankın altında çoktan uyurken biz sakin sakin içtik.",
        EN: "Hugo said yes and he thanked the children. I sat down on a bench: I was tired, but I was relieved. The owner of the kiosk next to the park offered us two hot coffees. We drank quietly, while Biscotte was already sleeping under the bench.",
      },
      {
        fr: "Sur le chemin du retour, nous avons croisé madame Petit devant sa maison. Elle portait encore son pyjama et ses pantoufles, parce qu'elle cherchait le chien dans le quartier. Quand elle a vu Biscotte, elle a ouvert les bras et elle a crié de joie. Le chien lui a léché la main, et nous avons ri. Il faisait encore froid, mais le soleil commençait à sortir derrière les nuages. Hugo a promis de réparer la porte le lendemain.",
        TR: "Dönüş yolunda evinin önünde Madame Petit ile karşılaştık. Hâlâ pijamalı ve terlikliydi, çünkü köpeği mahallede arıyordu. Biscotte'u görünce kollarını açtı ve sevinçten bağırdı. Köpek onun elini yaladı ve biz güldük. Hava hâlâ soğuktu ama güneş bulutların arkasından çıkmaya başlıyordu. Hugo ertesi gün kapıyı onarmaya söz verdi.",
        EN: "On the way back we met Madame Petit in front of her house. She was still wearing her pyjamas and her slippers, because she was looking for the dog in the neighbourhood. When she saw Biscotte, she opened her arms and she shouted with joy. The dog licked her hand, and we laughed. It was still cold, but the sun was starting to come out behind the clouds. Hugo promised to repair the gate the next day.",
      },
      {
        fr: "Le soir, nous avons donné un bain à Biscotte, parce qu'elle sentait mauvais. Elle n'aimait pas l'eau et elle tremblait. Hugo préparait le dîner et moi, je séchais le chien avec une grande serviette. Après le repas, nous avons regardé un film, et Biscotte s'est endormie sur mes pieds.",
        TR: "Akşam Biscotte'u yıkadık, çünkü kötü kokuyordu. Suyu sevmiyordu ve titriyordu. Hugo akşam yemeğini hazırlıyordu, ben de köpeği büyük bir havluyla kurutuyordum. Yemekten sonra bir film izledik ve Biscotte ayaklarımın üstünde uyuyakaldı.",
        EN: "In the evening we gave Biscotte a bath, because she smelled bad. She did not like water and she was shaking. Hugo was preparing dinner and I was drying the dog with a big towel. After the meal we watched a film, and Biscotte fell asleep on my feet.",
      },
      {
        fr: "Le lendemain, quand je me suis réveillé, le soleil brillait. Nous avons réparé la porte du jardin et nous avons apporté un gâteau à madame Petit. Elle était contente et elle a dit : « Votre chien est un petit voleur ! » Maintenant, nous fermons toujours la porte, et le dimanche, nous nous levons à huit heures.",
        TR: "Ertesi gün uyandığımda güneş parlıyordu. Bahçe kapısını onardık ve Madame Petit'ye bir pasta götürdük. Memnun oldu ve şöyle dedi: « Köpeğiniz küçük bir hırsız! » Artık kapıyı hep kapatıyoruz ve pazar günleri sekizde kalkıyoruz.",
        EN: "The next day, when I woke up, the sun was shining. We repaired the garden gate and we brought a cake to Madame Petit. She was happy and she said: \"Your dog is a little thief!\" Now we always close the gate, and on Sundays we get up at eight o'clock.",
      },
    ],
    questions: [
      {
        question: { fr: "Pourquoi Hugo et le narrateur dormaient-ils encore à neuf heures ?", TR: "Hugo ve anlatıcı neden dokuzda hâlâ uyuyordu?", EN: "Why were Hugo and the narrator still sleeping at nine?" },
        options: ["Ils étaient fatigués après la semaine.", "Ils étaient malades.", "Il pleuvait trop.", "Le réveil ne marchait pas."],
        answer: 0,
      },
      {
        question: { fr: "Qui a téléphoné ce matin-là ?", TR: "O sabah kim telefon etti?", EN: "Who called that morning?" },
        options: ["Hugo", "La voisine", "Un enfant"],
        answer: 1,
      },
      {
        question: { fr: "Qu'est-ce que le chien a pris au marché ?", TR: "Köpek pazarda ne aldı?", EN: "What did the dog take at the market?" },
        options: ["Un fromage", "Un gâteau", "Une saucisse", "Un légume"],
        answer: 2,
      },
      {
        question: { fr: "Où est le chien quand les deux amis arrivent ?", TR: "İki arkadaş köpeği bulduğunda köpek neredeydi?", EN: "Where was the dog when the two friends found it?" },
        options: ["Dans le jardin", "Au marché", "Au parc avec des enfants", "Chez la voisine"],
        answer: 2,
      },
      {
        question: { fr: "Que font les deux amis le lendemain ?", TR: "İki arkadaş ertesi gün ne yapıyor?", EN: "What do the two friends do the next day?" },
        options: ["Ils vendent le chien.", "Ils réparent la porte et apportent un gâteau.", "Ils déménagent à Paris."],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-direct-object-pronouns",
    lessonId: "direct-object-pronouns",
    level: "A2",
    title: { TR: "Büyükannenin doğum günü", EN: "Grandma's birthday" },
    paragraphs: [
      {
        fr: "Samedi, c'est l'anniversaire de ma grand-mère. Elle a soixante-dix ans. Ma mère organise la fête et elle compte sur nous, mon frère Théo et moi. Je l'aime beaucoup, ma grand-mère, alors je veux une belle fête pour elle. Maman a une liste dans la main, et elle nous regarde avec un grand sourire : « Voilà le travail de la semaine ! »",
        TR: "Cumartesi büyükannemin doğum günü. Yetmiş yaşına giriyor. Annem partiyi organize ediyor ve bizden, kardeşim Théo'dan ve benden, yardım bekliyor. Büyükannemi çok seviyorum, bu yüzden onun için güzel bir parti istiyorum. Annemin elinde bir liste var ve bize büyük bir gülümsemeyle bakıyor: « İşte haftanın işi! »",
        EN: "On Saturday it is my grandmother's birthday. She is seventy years old. My mother is organising the party and she counts on us, my brother Théo and me. I love her very much, my grandmother, so I want a beautiful party for her. Mum has a list in her hand, and she looks at us with a big smile: \"Here is the work of the week!\"",
      },
      {
        fr: "Le matin, maman m'appelle : « Emma, tu connais le pâtissier de la rue Victor-Hugo ? Tu le vois aujourd'hui et tu commandes le gâteau. » Je réponds : « Oui, je le connais. Je le vois à midi. » Je cherche son adresse sur mon téléphone, mais je ne la trouve pas. Alors j'appelle mon amie Clara. Elle la connaît, cette rue, et elle m'explique le chemin.",
        TR: "Sabah annem bana telefon ediyor: « Emma, Victor-Hugo Sokağı'ndaki pastacıyı tanıyor musun? Bugün onu görürsün ve pastayı sipariş edersin. » Cevap veriyorum: « Evet, onu tanıyorum. Öğlen onu görüyorum. » Telefonumda adresini arıyorum ama bulamıyorum. Bu yüzden arkadaşım Clara'yı arıyorum. O bu sokağı biliyor ve bana yolu anlatıyor.",
        EN: "In the morning Mum calls me: \"Emma, do you know the baker in Victor-Hugo Street? You see him today and you order the cake.\" I answer: \"Yes, I know him. I see him at noon.\" I look for his address on my phone, but I cannot find it. So I call my friend Clara. She knows this street, and she explains the way to me.",
      },
      {
        fr: "Théo adore cuisiner. Il prépare la salade et les petits sandwichs. « Tu m'aides avec les tomates ? Je les lave et je les coupe. » Je les trouve dans le frigo et je les lave avec lui. Maman invite les cousins, les voisins et les amis de Mamie. Elle les appelle un par un et elle ne les oublie pas. Je l'écoute au téléphone : elle les remercie déjà.",
        TR: "Théo yemek yapmaya bayılıyor. Salatayı ve küçük sandviçleri hazırlıyor. « Domateslerde bana yardım eder misin? Onları yıkarım ve keserim. » Onları buzdolabında buluyorum ve onunla birlikte yıkıyorum. Annem kuzenleri, komşuları ve büyükannenin arkadaşlarını davet ediyor. Onları tek tek arıyor ve hiçbirini unutmuyor. Onu telefonda dinliyorum: şimdiden onlara teşekkür ediyor.",
        EN: "Théo loves cooking. He prepares the salad and the little sandwiches. \"Will you help me with the tomatoes? I wash them and I cut them.\" I find them in the fridge and I wash them with him. Mum invites the cousins, the neighbours and Grandma's friends. She calls them one by one and she does not forget them. I listen to her on the phone: she is already thanking them.",
      },
      {
        fr: "Dans la cuisine, maman prépare le plat principal : un poulet avec des pommes de terre. Elle le met au four à midi et elle le surveille souvent. Les pommes de terre, elle les coupe en petits morceaux. La sauce, elle la goûte deux fois. « Elle est bonne ? » demande-t-elle. Je la goûte aussi : « Oui, je la trouve parfaite. » Théo, lui, ne la goûte pas, parce qu'il n'aime pas le poivre.",
        TR: "Mutfakta annem ana yemeği hazırlıyor: patatesli tavuk. Onu öğlen fırına koyuyor ve sık sık kontrol ediyor. Patatesleri küçük parçalara kesiyor. Sosu iki kez tadıyor. « İyi mi? » diye soruyor. Ben de tadıyorum: « Evet, bence mükemmel. » Théo ise tatmıyor, çünkü biberi sevmiyor.",
        EN: "In the kitchen Mum prepares the main dish: a chicken with potatoes. She puts it in the oven at noon and she watches it often. The potatoes, she cuts them into small pieces. The sauce, she tastes it twice. \"Is it good?\" she asks. I taste it too: \"Yes, I find it perfect.\" Théo, for his part, does not taste it, because he does not like pepper.",
      },
      {
        fr: "Vendredi soir, nous décorons le jardin. Les ballons ? Théo les gonfle. Les guirlandes ? Je les accroche aux arbres. La grande table ? Papa la porte avec son voisin et il la place sous le tilleul. Les chaises, nous les sortons de la cave. Papa nous regarde, il nous félicite : « Elle ne vous reconnaît pas, votre grand-mère, quand elle voit ça ! »",
        TR: "Cuma akşamı bahçeyi süslüyoruz. Balonlar mı? Théo onları şişiriyor. Girlandlar mı? Ben onları ağaçlara asıyorum. Büyük masa mı? Babam onu komşusuyla taşıyor ve ıhlamur ağacının altına koyuyor. Sandalyeleri bodrumdan çıkarıyoruz. Babam bize bakıyor, bizi tebrik ediyor: « Büyükannen bunu görünce sizi tanımaz! »",
        EN: "On Friday evening we decorate the garden. The balloons? Théo blows them up. The garlands? I hang them in the trees. The big table? Dad carries it with his neighbour and he puts it under the lime tree. The chairs, we bring them up from the cellar. Dad looks at us, he congratulates us: \"Your grandmother will not recognise you when she sees this!\"",
      },
      {
        fr: "Mon cadeau, c'est une écharpe en laine. Je la choisis dans une boutique du centre, je la paie et je l'emballe avec du papier rouge. Papa achète un bouquet de roses : il les aime, parce qu'elles sentent bon. Il les met dans un grand vase et il le place sur la table du jardin. Maman regarde le bouquet et elle le trouve magnifique.",
        TR: "Benim hediyem yünlü bir atkı. Onu şehir merkezindeki bir dükkândan seçiyorum, ödüyorum ve kırmızı kâğıtla paketliyorum. Babam bir demet gül alıyor: onları seviyor, çünkü güzel kokuyorlar. Onları büyük bir vazoya koyuyor ve vazoyu bahçe masasının üstüne yerleştiriyor. Annem buketine bakıyor ve onu muhteşem buluyor.",
        EN: "My present is a woollen scarf. I choose it in a shop in the town centre, I pay for it and I wrap it in red paper. Dad buys a bunch of roses: he likes them, because they smell good. He puts them in a big vase and he places it on the garden table. Mum looks at the bouquet and she finds it magnificent.",
      },
      {
        fr: "Samedi, papa attend Mamie à la gare. Il la conduit à la maison en voiture. Nous nous cachons derrière la porte et nous ne la laissons pas entrer. Quand elle ouvre, nous crions : « Joyeux anniversaire ! » Elle nous regarde, elle ne nous croit pas et elle nous embrasse, un par un. Elle pleure un peu, mais elle rit aussi.",
        TR: "Cumartesi babam büyükanneyi istasyonda bekliyor. Onu arabayla eve getiriyor. Kapının arkasına saklanıyoruz ve onu içeri bırakmıyoruz. Kapıyı açınca bağırıyoruz: « İyi ki doğdun! » Bize bakıyor, bize inanmıyor, sonra bizi tek tek öpüyor. Biraz ağlıyor ama gülüyor da.",
        EN: "On Saturday Dad waits for Grandma at the station. He drives her to the house. We hide behind the door and we do not let her in. When she opens it, we shout: \"Happy birthday!\" She looks at us, she does not believe us, then she kisses us, one by one. She cries a little, but she laughs too.",
      },
      {
        fr: "À la fête, Mamie me regarde : « Tu m'aimes, hein, ma petite Emma ? » Je réponds : « Je t'adore, Mamie. Nous t'aimons beaucoup. » Elle ouvre le cadeau de Théo, un livre de cuisine, et elle le regarde longtemps. Le gâteau est magnifique : les cousins le photographient, et elle le coupe en vingt parts. Les invités le mangent avec plaisir.",
        TR: "Parti sırasında büyükanne bana bakıyor: « Beni seviyorsun, değil mi, küçük Emma'm? » Cevap veriyorum: « Sana bayılıyorum, büyükanne. Seni çok seviyoruz. » Théo'nun hediyesini, bir yemek kitabını açıyor ve uzun uzun bakıyor. Pasta harika: kuzenler onu fotoğraflıyor ve o da pastayı yirmi dilime kesiyor. Davetliler onu keyifle yiyor.",
        EN: "During the party Grandma looks at me: \"You love me, don't you, my little Emma?\" I answer: \"I adore you, Grandma. We love you a lot.\" She opens Théo's present, a cookbook, and she looks at it for a long time. The cake is magnificent: the cousins photograph it, and she cuts it into twenty pieces. The guests eat it with pleasure.",
      },
    ],
    questions: [
      {
        question: { fr: "Qui organise la fête ?", TR: "Partiyi kim organize ediyor?", EN: "Who organises the party?" },
        options: ["Le père", "La mère", "Théo", "La grand-mère"],
        answer: 1,
      },
      {
        question: { fr: "Que doit faire Emma chez le pâtissier ?", TR: "Emma pastanede ne yapmalı?", EN: "What must Emma do at the baker's?" },
        options: ["Acheter du pain", "Commander le gâteau", "Faire la salade"],
        answer: 1,
      },
      {
        question: { fr: "Que prépare Théo pour la fête ?", TR: "Théo parti için ne hazırlıyor?", EN: "What does Théo prepare for the party?" },
        options: ["Des ballons et des chaises", "La salade et des sandwichs", "Un cadeau et un gâteau", "La musique"],
        answer: 1,
      },
      {
        question: { fr: "Qui va chercher la grand-mère à la gare ?", TR: "Büyükanneyi istasyondan kim alıyor?", EN: "Who picks up Grandma at the station?" },
        options: ["Emma", "La mère", "Le père", "Un voisin"],
        answer: 2,
      },
      {
        question: { fr: "Quel est le cadeau de Théo ?", TR: "Théo'nun hediyesi nedir?", EN: "What is Théo's present?" },
        options: ["Un gâteau", "Un livre de cuisine", "Un téléphone", "Des fleurs"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-indirect-object-pronouns",
    lessonId: "indirect-object-pronouns",
    level: "A2",
    title: { TR: "Şehirdeki öğrenci", EN: "A student in the city" },
    paragraphs: [
      {
        fr: "Je m'appelle Chloé, j'ai vingt ans et j'étudie à Nantes. Ma famille habite loin, alors je téléphone à mes parents tous les dimanches. Je leur parle de mes cours, de mes amis et de mon petit appartement. Ma mère me répond toujours avec beaucoup de questions : « Tu manges bien ? Tu dors assez ? » Je lui réponds que oui, et elle me croit à moitié.",
        TR: "Adım Chloé, yirmi yaşındayım ve Nantes'ta okuyorum. Ailem uzakta oturuyor, bu yüzden anne babama her pazar telefon ediyorum. Onlara derslerimden, arkadaşlarımdan ve küçük dairemden söz ediyorum. Annem bana hep bir sürü soruyla cevap veriyor: « İyi yiyor musun? Yeterince uyuyor musun? » Ben ona evet diyorum, o da bana yarı yarıya inanıyor.",
        EN: "My name is Chloé, I am twenty years old and I study in Nantes. My family lives far away, so I phone my parents every Sunday. I talk to them about my classes, my friends and my little flat. My mother always answers me with lots of questions: \"Are you eating well? Are you sleeping enough?\" I answer her yes, and she half believes me.",
      },
      {
        fr: "Mon père, lui, ne parle pas beaucoup, mais il m'envoie souvent un message. Il me demande si j'ai assez d'argent. Je lui réponds que oui, et il me dit : « Je t'envoie un peu d'argent quand même. » Je lui dis merci, et il me répond par une petite photo de notre jardin. Il me manque, ce jardin, et il me manque beaucoup.",
        TR: "Babam ise pek konuşmaz ama bana sık sık mesaj gönderir. Yeterli param olup olmadığını soruyor. Ona evet diyorum, o da bana şöyle diyor: « Yine de sana biraz para gönderiyorum. » Ona teşekkür ediyorum, o da bana bahçemizin küçük bir fotoğrafıyla cevap veriyor. Bu bahçeyi çok özlüyorum.",
        EN: "My father, for his part, does not talk much, but he often sends me a message. He asks me if I have enough money. I answer him yes, and he says to me: \"I am sending you a little money anyway.\" I say thank you to him, and he answers me with a small photo of our garden. I miss that garden, I miss it a lot.",
      },
      {
        fr: "Mon frère Adam a quinze ans. Je lui écris des lettres, parce qu'il adore recevoir du courrier. Il ne me répond pas toujours, mais il m'envoie des photos de son chat. Je lui téléphone aussi pour ses devoirs : je lui explique les mathématiques et je lui donne des conseils. Il me raconte ses journées, et je l'écoute avec plaisir.",
        TR: "Kardeşim Adam on beş yaşında. Ona mektup yazıyorum, çünkü posta almayı çok seviyor. Bana her zaman cevap vermiyor ama kedisinin fotoğraflarını gönderiyor. Ona ödevleri için de telefon ediyorum: ona matematiği anlatıyorum ve öğüt veriyorum. Bana günlerini anlatıyor, ben de onu zevkle dinliyorum.",
        EN: "My brother Adam is fifteen. I write letters to him, because he loves receiving mail. He does not always answer me, but he sends me photos of his cat. I also phone him about his homework: I explain mathematics to him and I give him advice. He tells me about his days, and I listen to him with pleasure.",
      },
      {
        fr: "Dans mon appartement, j'habite avec deux colocataires, Lola et Inès. Nous nous parlons beaucoup. Je leur prête mes livres, elles me prêtent leurs vêtements. Je ne leur demande pas toujours la permission, mais elles ne se fâchent pas. Le soir, Lola nous prépare un thé et Inès nous raconte ses histoires de travail. Elle nous fait rire !",
        TR: "Dairemde iki ev arkadaşımla, Lola ve Inès ile oturuyorum. Çok konuşuyoruz. Onlara kitaplarımı ödünç veriyorum, onlar da bana kıyafetlerini ödünç veriyor. Her zaman onlardan izin istemiyorum ama kızmıyorlar. Akşamları Lola bize çay hazırlıyor ve Inès bize iş hikâyelerini anlatıyor. Bizi güldürüyor!",
        EN: "In my flat I live with two flatmates, Lola and Inès. We talk to each other a lot. I lend them my books, they lend me their clothes. I do not always ask them for permission, but they do not get angry. In the evening Lola makes us a tea and Inès tells us her work stories. She makes us laugh!",
      },
      {
        fr: "À l'université, mon professeur d'histoire, monsieur Girard, nous donne beaucoup de travail. Je lui écris quand je ne comprends pas, et il me répond vite. Il nous explique les dates et il nous montre des cartes anciennes. Aujourd'hui, un étudiant lui pose une question sur la guerre, et il lui répond avec patience. Il nous plaît, ce professeur, parce qu'il nous parle comme à des adultes.",
        TR: "Üniversitede tarih öğretmenim Bay Girard bize çok ödev veriyor. Anlamadığımda ona yazıyorum, o da bana çabuk cevap veriyor. Bize tarihleri anlatıyor ve eski haritalar gösteriyor. Bugün bir öğrenci ona savaş hakkında bir soru soruyor, o da ona sabırla cevap veriyor. Bu öğretmeni seviyoruz, çünkü bizimle yetişkinlermiş gibi konuşuyor.",
        EN: "At university my history teacher, Mr Girard, gives us a lot of work. I write to him when I do not understand, and he answers me quickly. He explains the dates to us and he shows us old maps. Today a student asks him a question about the war, and he answers him with patience. We like him, this teacher, because he talks to us like adults.",
      },
      {
        fr: "Samedi, c'est l'anniversaire de Lola. Je lui offre un livre, Inès lui offre des fleurs et nous lui chantons une chanson. Elle nous remercie et elle nous dit : « Vous me gâtez ! » Nous lui souhaitons une très belle année. Je lui demande : « Tu veux un gâteau aux fruits ou au chocolat ? » Elle me sourit et elle me répond : « Au chocolat, bien sûr ! »",
        TR: "Cumartesi Lola'nın doğum günü. Ona bir kitap hediye ediyorum, Inès ona çiçek hediye ediyor ve ona bir şarkı söylüyoruz. Bize teşekkür ediyor ve diyor ki: « Beni şımartıyorsunuz! » Ona çok güzel bir yıl diliyoruz. Ona soruyorum: « Meyveli mi, çikolatalı mı bir pasta istersin? » Bana gülümsüyor ve cevap veriyor: « Çikolatalı, tabii ki! »",
        EN: "On Saturday it is Lola's birthday. I give her a book, Inès gives her flowers and we sing her a song. She thanks us and she says to us: \"You spoil me!\" We wish her a very good year. I ask her: \"Do you want a fruit cake or a chocolate cake?\" She smiles at me and she answers me: \"Chocolate, of course!\"",
      },
      {
        fr: "Ma tante Sophie habite à Rennes. Elle m'écrit une carte postale tous les mois et elle m'envoie toujours un petit chocolat. Je lui réponds par un long message. Elle me demande des nouvelles de mes études, et je lui parle de mes projets. Quand je lui rends visite, elle nous prépare, à Adam et à moi, un grand repas. Elle me sourit et elle me dit : « Tu me manques, ma petite Chloé. »",
        TR: "Teyzem Sophie Rennes'te oturuyor. Bana her ay bir kartpostal yazıyor ve her zaman küçük bir çikolata gönderiyor. Ona uzun bir mesajla cevap veriyorum. Bana derslerimin haberini soruyor, ben de ona planlarımdan söz ediyorum. Onu ziyaret ettiğimde bize, Adam'a ve bana, büyük bir yemek hazırlıyor. Bana gülümsüyor ve diyor ki: « Seni özlüyorum, küçük Chloé'm. »",
        EN: "My aunt Sophie lives in Rennes. She writes me a postcard every month and she always sends me a little chocolate. I answer her with a long message. She asks me for news of my studies, and I talk to her about my plans. When I visit her, she prepares a big meal for us, for Adam and me. She smiles at me and she says to me: \"I miss you, my little Chloé.\"",
      },
      {
        fr: "Le soir, je pense à ma famille et à mes amis. Je leur écris un long message. Je leur dis que je vais bien et que j'aime ma vie ici. Ils me manquent, et je leur manque aussi, je crois. Demain, je leur téléphone encore, et ma mère me pose ses questions.",
        TR: "Akşam ailemi ve arkadaşlarımı düşünüyorum. Onlara uzun bir mesaj yazıyorum. Onlara iyi olduğumu ve burada hayatımı sevdiğimi söylüyorum. Onları özlüyorum, sanırım onlar da beni özlüyor. Yarın onlara yine telefon edeceğim ve annem bana sorularını soracak.",
        EN: "In the evening I think about my family and my friends. I write them a long message. I tell them that I am fine and that I like my life here. I miss them, and they miss me too, I think. Tomorrow I will phone them again, and my mother will ask me her questions.",
      },
    ],
    questions: [
      {
        question: { fr: "Quand Chloé téléphone-t-elle à ses parents ?", TR: "Chloé ebeveynlerine ne zaman telefon ediyor?", EN: "When does Chloé phone her parents?" },
        options: ["Tous les dimanches", "Tous les soirs", "Le samedi", "Le matin"],
        answer: 0,
      },
      {
        question: { fr: "Que fait le père de Chloé quand elle dit qu'elle a assez d'argent ?", TR: "Chloé yeterli parası olduğunu söyleyince babası ne yapıyor?", EN: "What does Chloé's father do when she says she has enough money?" },
        options: ["Il ne la croit pas.", "Il lui envoie un peu d'argent quand même.", "Il lui téléphone.", "Il lui rend visite."],
        answer: 1,
      },
      {
        question: { fr: "Comment Chloé aide-t-elle son frère Adam ?", TR: "Chloé kardeşi Adam'a nasıl yardım ediyor?", EN: "How does Chloé help her brother Adam?" },
        options: ["Elle lui explique les mathématiques.", "Elle lui prête de l'argent.", "Elle lui achète des livres."],
        answer: 0,
      },
      {
        question: { fr: "Pourquoi les étudiants aiment-ils monsieur Girard ?", TR: "Öğrenciler Bay Girard'ı neden seviyor?", EN: "Why do the students like Mr Girard?" },
        options: ["Il ne donne pas de travail.", "Il leur parle comme à des adultes.", "Il est très jeune.", "Il leur offre des cadeaux."],
        answer: 1,
      },
      {
        question: { fr: "Quel parfum de gâteau Lola choisit-elle ?", TR: "Lola hangi pastayı istiyor?", EN: "Which cake does Lola want?" },
        options: ["Aux pommes", "Au chocolat", "À la fraise"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-pronoun-y",
    lessonId: "pronoun-y",
    level: "A2",
    title: { TR: "Lyon'da bir hafta", EN: "A week in Lyon" },
    paragraphs: [
      {
        fr: "Je m'appelle Nadia et j'habite à Lyon avec mon mari Paul. Nous aimons notre ville : nous y sommes heureux et nous y avons beaucoup d'amis. Ma semaine est bien organisée, avec des endroits que je connais par cœur. Tu veux savoir où je vais ? Je te raconte ma semaine, lieu par lieu.",
        TR: "Adım Nadia ve kocam Paul ile Lyon'da oturuyorum. Şehrimizi seviyoruz: burada mutluyuz ve burada çok arkadaşımız var. Haftam iyi organize edilmiş, ezbere bildiğim yerlerle dolu. Nereye gittiğimi öğrenmek ister misin? Sana haftamı yer yer anlatıyorum.",
        EN: "My name is Nadia and I live in Lyon with my husband Paul. We love our city: we are happy there and we have many friends there. My week is well organised, with places that I know by heart. Do you want to know where I go? I tell you about my week, place by place.",
      },
      {
        fr: "Le lundi, je vais à la bibliothèque. J'y vais à neuf heures, et j'y reste jusqu'à midi. J'y travaille sur mon mémoire d'histoire. Mon amie Julie y vient aussi, mais elle y arrive après dix heures, parce qu'elle déteste le matin. Nous y mangeons un sandwich et nous y parlons à voix basse, comme deux espionnes.",
        TR: "Pazartesi günleri kütüphaneye gidiyorum. Oraya dokuzda gidiyorum ve öğlene kadar orada kalıyorum. Orada tarih tezim üzerinde çalışıyorum. Arkadaşım Julie de oraya geliyor ama ondan sonra geliyor, çünkü sabahtan nefret ediyor. Orada bir sandviç yiyoruz ve iki casus gibi fısıltıyla konuşuyoruz.",
        EN: "On Monday I go to the library. I go there at nine o'clock, and I stay there until noon. I work there on my history thesis. My friend Julie comes there too, but she arrives there after ten, because she hates the morning. We eat a sandwich there and we talk in whispers there, like two spies.",
      },
      {
        fr: "Le mardi, je vais à la salle de sport. Paul n'y va pas : il préfère courir au parc. Il y court le matin, avant le travail. Moi, je suis calme : j'y fais du yoga et un peu de vélo. Mon professeur de yoga y est souvent et il connaît les habitués. Quand j'arrive, il me dit toujours : « Ah, Nadia, vous voilà ! »",
        TR: "Salı günleri spor salonuna gidiyorum. Paul oraya gitmiyor: parkta koşmayı tercih ediyor. Orada, işten önce sabahları koşuyor. Ben sakinim: orada yoga yapıyorum ve biraz bisiklet sürüyorum. Yoga öğretmenim orada sık sık bulunuyor ve müdavimleri tanıyor. Ben gelince bana hep şöyle diyor: « Ah, Nadia, buradasınız! »",
        EN: "On Tuesday I go to the gym. Paul does not go there: he prefers running in the park. He runs there in the morning, before work. I am calm: I do yoga there and a little cycling. My yoga teacher is often there and he knows the regulars. When I arrive, he always says to me: \"Ah, Nadia, there you are!\"",
      },
      {
        fr: "Le jeudi, je vais chez le dentiste. Son cabinet est au centre-ville : j'y vais à pied, parce qu'il n'y a pas de parking là-bas. J'y reste une demi-heure. Je n'aime pas le dentiste, mais j'y vais tous les six mois, car Paul me répète que c'est important. Il y va aussi, lui, et il y pense toujours à l'avance. Nous y allons souvent ensemble, et nous y prenons un rendez-vous pour deux.",
        TR: "Perşembe günleri dişçiye gidiyorum. Muayenehanesi şehir merkezinde: oraya yürüyerek gidiyorum, çünkü orada otopark yok. Orada yarım saat kalıyorum. Dişçiyi sevmiyorum ama altı ayda bir oraya gidiyorum, çünkü Paul bana bunun önemli olduğunu tekrarlıyor. O da oraya gidiyor ve oraya her zaman önceden düşünüyor. Sık sık birlikte gidiyoruz ve orada iki kişilik randevu alıyoruz.",
        EN: "On Thursday I go to the dentist's. His surgery is in the town centre: I go there on foot, because there is no car park there. I stay there for half an hour. I do not like the dentist, but I go there every six months, because Paul keeps telling me that it is important. He goes there too, and he always thinks about it in advance. We often go there together, and we make an appointment there for two.",
      },
      {
        fr: "Le samedi matin, nous allons au marché. Nous y achetons des légumes, du fromage et du pain. Mon vendeur préféré y est le samedi, avec son grand chapeau. Quand je lui demande le prix, il sourit. Les prix ? Je n'y pense pas trop : le marché, c'est un plaisir. Au retour, nous passons chez Julie. Nous y buvons un café et nous y restons une heure.",
        TR: "Cumartesi sabahları pazara gidiyoruz. Orada sebze, peynir ve ekmek alıyoruz. En sevdiğim satıcı her cumartesi orada, büyük şapkasıyla. Ona fiyatı sorunca gülümsüyor. Fiyatlar mı? Onları fazla düşünmüyorum: pazar bir zevk. Dönüşte Julie'nin evine uğruyoruz. Orada bir kahve içiyoruz ve bir saat kalıyoruz.",
        EN: "On Saturday morning we go to the market. We buy vegetables, cheese and bread there. My favourite seller is there every Saturday, with his big hat. When I ask him the price, he smiles. The prices? I do not think about them too much: the market is a pleasure. On the way back we stop at Julie's. We drink a coffee there and we stay there for an hour.",
      },
      {
        fr: "Mes parents habitent en Bretagne. Nous y allons en train deux fois par an. Nous y restons une semaine, et ma mère nous attend toujours à la gare. L'été prochain, nous n'y allons pas, parce que nous préférons visiter l'Italie. Ma mère répond : « L'Italie ? Je n'y suis pas encore allée ! » Alors, peut-être, nous invitons ma mère.",
        TR: "Ailem Bretagne'da oturuyor. Oraya yılda iki kez trenle gidiyoruz. Orada bir hafta kalıyoruz ve annem bizi her zaman istasyonda bekliyor. Gelecek yaz oraya gitmiyoruz, çünkü İtalya'yı gezmeyi tercih ediyoruz. Annem cevap veriyor: « İtalya mı? Oraya henüz gitmedim! » Belki annemi davet ederiz.",
        EN: "My parents live in Brittany. We go there by train twice a year. We stay there for a week, and my mother always waits for us at the station. Next summer we are not going there, because we prefer to visit Italy. My mother answers: \"Italy? I have not been there yet!\" So, maybe, we invite my mother.",
      },
      {
        fr: "Paul m'écrit un message : « Tu penses à la réunion de demain ? » Je réponds : « Oui, j'y pense. » Il travaille dans une banque, et il répond vite à ses mails. Moi, je ne réponds pas aux mails le week-end : je n'y réponds pas avant lundi. Et toi, tu t'intéresses au sport ? Moi, je m'y intéresse un peu, mais pas beaucoup.",
        TR: "Paul bana bir mesaj yazıyor: « Yarınki toplantıyı düşünüyor musun? » Cevap veriyorum: « Evet, onu düşünüyorum. » Bir bankada çalışıyor ve e-postalarına çabuk cevap veriyor. Ben hafta sonu e-postalara cevap vermiyorum: pazartesiden önce onlara cevap vermiyorum. Peki ya sen, spora ilgin var mı? Benim biraz ilgim var ama çok değil.",
        EN: "Paul writes me a message: \"Are you thinking about tomorrow's meeting?\" I answer: \"Yes, I am thinking about it.\" He works in a bank, and he answers his emails quickly. I do not answer emails at the weekend: I do not answer them before Monday. And you, are you interested in sport? I am a little interested in it, but not a lot.",
      },
      {
        fr: "Le soir, nous dînons souvent chez des amis. Chez Clara et Marc ? Nous y allons à pied, parce que leur appartement est près de chez nous. Nous y arrivons à huit heures, et ils nous attendent avec un bon repas. Voilà ma vie à Lyon : des endroits simples et des gens que j'aime. Et toi, tu y viens bientôt ?",
        TR: "Akşamları sık sık arkadaşlarda yemeğe gidiyoruz. Clara ve Marc'ın evine mi? Oraya yürüyerek gidiyoruz, çünkü apartman dairesi bize yakın. Oraya sekizde varıyoruz ve onlar bizi güzel bir yemekle bekliyor. İşte Lyon'daki hayatım: sade yerler ve sevdiğim insanlar. Peki sen, yakında buraya geliyor musun?",
        EN: "In the evening we often have dinner at friends' houses. At Clara and Marc's? We go there on foot, because their flat is close to ours. We arrive there at eight o'clock, and they wait for us with a good meal. That is my life in Lyon: simple places and people I love. And you, are you coming here soon?",
      },
    ],
    questions: [
      {
        question: { fr: "Où Nadia travaille-t-elle sur son mémoire ?", TR: "Nadia tezi üzerinde nerede çalışıyor?", EN: "Where does Nadia work on her thesis?" },
        options: ["À la maison", "À la bibliothèque", "À la salle de sport", "Au café"],
        answer: 1,
      },
      {
        question: { fr: "Que préfère faire Paul le matin ?", TR: "Paul sabahları ne yapmayı tercih ediyor?", EN: "What does Paul prefer to do in the morning?" },
        options: ["Faire du yoga", "Courir au parc", "Aller au marché"],
        answer: 1,
      },
      {
        question: { fr: "Que font Nadia et Paul le samedi matin ?", TR: "Nadia ile Paul cumartesi sabahı ne yapıyor?", EN: "What do Nadia and Paul do on Saturday morning?" },
        options: ["Ils vont à la banque.", "Ils vont chez Julie.", "Ils vont au marché puis chez Julie.", "Ils restent au lit."],
        answer: 2,
      },
      {
        question: { fr: "Pourquoi Nadia ne va-t-elle pas en Bretagne l'été prochain ?", TR: "Nadia gelecek yaz neden Bretagne'a gitmiyor?", EN: "Why is Nadia not going to Brittany next summer?" },
        options: ["Elle est malade.", "Ses parents sont absents.", "Ils préfèrent visiter l'Italie.", "Paul travaille trop."],
        answer: 2,
      },
      {
        question: { fr: "Comment Nadia et Paul vont-ils chez Clara et Marc ?", TR: "Nadia ile Paul Clara ile Marc'ın evine nasıl gidiyor?", EN: "How do Nadia and Paul go to Clara and Marc's?" },
        options: ["En voiture", "À pied", "En train"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-pronoun-en",
    lessonId: "pronoun-en",
    level: "A2",
    title: { TR: "Boş buzdolabı", EN: "The empty fridge" },
    paragraphs: [
      {
        fr: "Dimanche soir, j'ouvre mon frigo et je fais la grimace. Il est presque vide ! Il y a un yaourt, deux œufs et un peu de beurre. Mon colocataire Élie arrive dans la cuisine et il me demande : « Tu as du lait ? » Je réponds : « Oui, j'en ai un peu, mais je n'en ai pas beaucoup. » Nous n'avons pas de légumes, pas de pain et pas de fromage.",
        TR: "Pazar akşamı buzdolabımı açıyorum ve yüzümü buruşturuyorum. Neredeyse bomboş! Bir yoğurt, iki yumurta ve biraz tereyağı var. Ev arkadaşım Élie mutfağa geliyor ve soruyor: « Sütün var mı? » Cevap veriyorum: « Evet, biraz var ama çok değil. » Sebzemiz yok, ekmeğimiz yok, peynirimiz de yok.",
        EN: "On Sunday evening I open my fridge and I pull a face. It is almost empty! There is a yoghurt, two eggs and a little butter. My flatmate Élie comes into the kitchen and asks me: \"Do you have any milk?\" I answer: \"Yes, I have a little, but I do not have a lot.\" We have no vegetables, no bread and no cheese.",
      },
      {
        fr: "Nous faisons une liste. Du pain ? Nous en achetons deux baguettes. Des pommes de terre ? Nous en prenons un kilo. Des oignons ? Nous en avons déjà trois, c'est assez. Du riz ? Il y en a dans le placard, mais il n'y en a pas beaucoup. Élie écrit la liste sur son téléphone, et moi, je regarde la liste avec inquiétude : elle est longue.",
        TR: "Bir liste yapıyoruz. Ekmek mi? İki baget alıyoruz. Patates mi? Bir kilo alıyoruz. Soğan mı? Zaten üç tane var, yeter. Pirinç mi? Dolapta var ama çok değil. Élie listeyi telefonuna yazıyor, ben de listeye endişeyle bakıyorum: uzun.",
        EN: "We make a list. Bread? We buy two baguettes. Potatoes? We take a kilo. Onions? We already have three, that is enough. Rice? There is some in the cupboard, but there is not a lot. Élie writes the list on his phone, and I look at the list with worry: it is long.",
      },
      {
        fr: "Au supermarché, il y a beaucoup de monde. Les tomates ? Il y en a beaucoup, et elles sont rouges. Élie en prend un kilo. Moi, je prends des bananes : j'en mange tous les matins. Je n'en prends pas trop, parce qu'elles sont chères cette semaine. Nous cherchons du lait, et nous en trouvons au fond du magasin.",
        TR: "Süpermarkette çok kalabalık var. Domatesler mi? Çok var ve kırmızılar. Élie bir kilo alıyor. Ben muz alıyorum: her sabah yiyorum. Fazla almıyorum, çünkü bu hafta pahalılar. Süt arıyoruz ve mağazanın en arkasında buluyoruz.",
        EN: "At the supermarket there are lots of people. The tomatoes? There are lots, and they are red. Élie takes a kilo. I take bananas: I eat some every morning. I do not take too many, because they are expensive this week. We look for milk, and we find some at the back of the shop.",
      },
      {
        fr: "Élie adore le fromage. Il en achète trois sortes. Moi, j'en mange peu. Il me demande : « Tu veux du fromage ? — Non, merci, je n'en veux pas. — Du chocolat ? — Oui, j'en veux ! » Il rit et il met deux tablettes dans le chariot. Je lui dis que nous n'en avons pas besoin, mais il répond : « Si, j'en ai besoin pour mon moral. »",
        TR: "Élie peyniri çok seviyor. Üç çeşit alıyor. Ben az yiyorum. Bana soruyor: « Peynir ister misin? — Hayır, teşekkürler, istemem. — Çikolata? — Evet, isterim! » Gülüyor ve sepete iki tablet atıyor. Ona buna ihtiyacımız olmadığını söylüyorum ama o cevap veriyor: « Hayır, moralim için ihtiyacım var. »",
        EN: "Élie loves cheese. He buys three kinds. I eat only a little. He asks me: \"Do you want some cheese?\" \"No, thank you, I do not want any.\" \"Some chocolate?\" \"Yes, I want some!\" He laughs and puts two bars in the trolley. I tell him that we do not need any, but he answers: \"Yes, I need some for my morale.\"",
      },
      {
        fr: "À la caisse, la caissière nous demande : « Vous avez des sacs ? » Je réponds : « Non, nous n'en avons pas. » Nous en achetons deux. Elle nous dit : « Vous avez besoin d'un ticket ? » Élie répond : « Oui, j'en ai besoin pour mon budget. » Nous payons, et nous rentrons à pied avec quatre sacs lourds.",
        TR: "Kasada kasiyer bize soruyor: « Poşetiniz var mı? » Cevap veriyorum: « Hayır, yok. » İki tane satın alıyoruz. Bize diyor ki: « Fişe ihtiyacınız var mı? » Élie cevap veriyor: « Evet, bütçem için ihtiyacım var. » Ödüyoruz ve dört ağır poşetle yürüyerek eve dönüyoruz.",
        EN: "At the checkout the cashier asks us: \"Do you have any bags?\" I answer: \"No, we do not have any.\" We buy two. She says to us: \"Do you need a receipt?\" Élie answers: \"Yes, I need one for my budget.\" We pay, and we walk home with four heavy bags.",
      },
      {
        fr: "Pour la semaine, nous préparons un petit menu. Lundi, des pâtes : nous en avons besoin d'un paquet. Mardi, du poulet : Élie en achète un demi. Mercredi, de la salade : nous en avons trois. Jeudi, de la pizza : nous en commandons une. Vendredi, du riz : il y en a déjà dans le placard. Élie dit que nous en mangeons beaucoup, mais il en veut encore. Moi, je n'en ai pas envie : je préfère le dessert !",
        TR: "Hafta için küçük bir menü hazırlıyoruz. Pazartesi makarna: bir pakete ihtiyacımız var. Salı tavuk: Élie yarım tane alıyor. Çarşamba salata: üç tane var. Perşembe pizza: bir tane sipariş ediyoruz. Cuma pirinç: dolapta zaten var. Élie çok yediğimizi söylüyor ama yine de istiyor. Benim canım istemiyor: ben tatlıyı tercih ediyorum!",
        EN: "For the week we prepare a little menu. Monday, pasta: we need a packet. Tuesday, chicken: Élie buys half of one. Wednesday, salad: we have three. Thursday, pizza: we order one. Friday, rice: there is already some in the cupboard. Élie says that we eat a lot of it, but he wants some more. I do not feel like any: I prefer dessert!",
      },
      {
        fr: "Le soir, Élie cuisine une soupe. Il demande : « Il faut de l'huile. — Il y en a dans le placard. — Et du sel ? » Nous en cherchons partout, mais nous n'en trouvons pas. Par chance, madame Bernard, notre voisine, en a toujours. Elle nous en donne un petit pot et elle nous dit avec un sourire : « Vous êtes des étudiants, vous n'avez pas de réserves ! »",
        TR: "Akşam Élie çorba pişiriyor. Soruyor: « Yağ lazım. — Dolapta var. — Ya tuz? » Her yerde arıyoruz ama bulamıyoruz. Neyse ki komşumuz Madame Bernard'ın hep vardır. Bize küçük bir kavanoz veriyor ve gülümseyerek diyor ki: « Siz öğrencisiniz, yedeğiniz yok! »",
        EN: "In the evening Élie cooks a soup. He asks: \"We need oil.\" \"There is some in the cupboard.\" \"And salt?\" We look for some everywhere, but we do not find any. Luckily, Madame Bernard, our neighbour, always has some. She gives us a small jar and says to us with a smile: \"You are students, you have no supplies!\"",
      },
      {
        fr: "Nous mangeons la soupe avec du pain et du fromage. Il en reste pour demain, et c'est une bonne nouvelle. Élie parle de ses vacances à la mer : il en parle souvent, mais il n'en a pas encore réservé. Je le regarde, et je pense : demain, il faut faire attention, parce que le frigo est plein, mais le porte-monnaie est vide !",
        TR: "Çorbayı ekmek ve peynirle yiyoruz. Yarına da kalıyor ve bu iyi bir haber. Élie deniz tatilinden söz ediyor: sık sık söz ediyor ama henüz rezervasyon yapmadı. Ona bakıyorum ve düşünüyorum: yarın dikkat etmek lazım, çünkü buzdolabı dolu ama cüzdan boş!",
        EN: "We eat the soup with bread and cheese. There is some left for tomorrow, and that is good news. Élie talks about his holidays at the seaside: he often talks about them, but he has not booked anything yet. I look at him, and I think: tomorrow we must be careful, because the fridge is full, but the wallet is empty!",
      },
    ],
    questions: [
      {
        question: { fr: "Qu'est-ce qu'il y a dans le frigo au début ?", TR: "Başlangıçta buzdolabında ne var?", EN: "What is in the fridge at the beginning?" },
        options: ["Beaucoup de légumes", "Un yaourt, deux œufs et un peu de beurre", "Du fromage et du pain", "Il est vide"],
        answer: 1,
      },
      {
        question: { fr: "Combien de baguettes les colocataires achètent-ils ?", TR: "Ev arkadaşları kaç baget alıyor?", EN: "How many baguettes do the flatmates buy?" },
        options: ["Une", "Deux", "Trois", "Quatre"],
        answer: 1,
      },
      {
        question: { fr: "Pourquoi le narrateur prend-il peu de bananes ?", TR: "Anlatıcı neden az muz alıyor?", EN: "Why does the narrator take few bananas?" },
        options: ["Il n'aime pas les bananes.", "Elles sont chères cette semaine.", "Il n'y en a pas dans le magasin."],
        answer: 1,
      },
      {
        question: { fr: "Qui donne du sel aux deux amis ?", TR: "İki arkadaşa tuzu kim veriyor?", EN: "Who gives salt to the two friends?" },
        options: ["La caissière", "Un marchand", "Leur voisine", "Leur mère"],
        answer: 2,
      },
      {
        question: { fr: "De quoi Élie parle-t-il souvent ?", TR: "Élie sık sık neden söz ediyor?", EN: "What does Élie often talk about?" },
        options: ["De son travail", "De ses vacances à la mer", "De sa famille"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-pronouns-with-infinitive-and-past",
    lessonId: "pronouns-with-infinitive-and-past",
    level: "A2",
    title: { TR: "Taşınma günü", EN: "Moving day" },
    paragraphs: [
      {
        fr: "Samedi, je déménage. Mon appartement est trop petit, alors je vais habiter dans un grand studio près du parc. Ma sœur Anaïs veut m'aider, et nos amis peuvent venir aussi. Je dois préparer mes affaires, et il reste du travail. Mes cousins ? Je vais les inviter pour le repas du soir, parce que je veux les remercier de leur aide.",
        TR: "Cumartesi taşınıyorum. Dairem çok küçük, bu yüzden parkın yakınındaki büyük bir stüdyoda oturacağım. Kız kardeşim Anaïs bana yardım etmek istiyor, arkadaşlarımız da gelebilir. Eşyalarımı hazırlamam lazım ve yapılacak iş var. Kuzenlerim mi? Onları akşam yemeğine davet edeceğim, çünkü yardımları için onlara teşekkür etmek istiyorum.",
        EN: "On Saturday I am moving house. My flat is too small, so I am going to live in a big studio near the park. My sister Anaïs wants to help me, and our friends can come too. I must prepare my things, and there is work left. My cousins? I am going to invite them for the evening meal, because I want to thank them for their help.",
      },
      {
        fr: "Mes livres ? Je les ai déjà mis dans des cartons. Mes vêtements ? Je les ai pliés hier soir. Mes photos de voyage, je les ai trouvées dans un tiroir : je les ai prises à Istanbul, et je veux les garder. Ma vieille lampe ? Je ne veux pas la garder, je vais la donner à ma voisine. Je lui ai téléphoné ce matin, et elle a dit oui.",
        TR: "Kitaplarım mı? Onları çoktan kolilere koydum. Kıyafetlerim mi? Onları dün akşam katladım. Seyahat fotoğraflarımı bir çekmecede buldum: onları İstanbul'da çekmiştim ve saklamak istiyorum. Eski lambam mı? Onu saklamak istemiyorum, komşuma vereceğim. Ona bu sabah telefon ettim ve evet dedi.",
        EN: "My books? I have already put them in boxes. My clothes? I folded them yesterday evening. My travel photos, I found them in a drawer: I took them in Istanbul, and I want to keep them. My old lamp? I do not want to keep it, I am going to give it to my neighbour. I phoned her this morning, and she said yes.",
      },
      {
        fr: "Le propriétaire du nouveau studio doit nous donner les clés vendredi. Je l'ai appelé hier, mais il n'a pas répondu. Je dois le rappeler ce soir. Je ne peux pas déménager sans les clés ! Anaïs a un double chez elle ? Non, je lui ai demandé, mais elle n'en a pas. Alors je vais attendre l'appel du propriétaire.",
        TR: "Yeni stüdyonun sahibi cuma günü bize anahtarları vermeli. Onu dün aradım ama cevap vermedi. Onu bu akşam yeniden aramam lazım. Anahtarlar olmadan taşınamam! Anaïs'in evinde bir yedek var mı? Hayır, ona sordum ama yok. O zaman ev sahibinin telefonunu bekleyeceğim.",
        EN: "The owner of the new studio must give us the keys on Friday. I called him yesterday, but he did not answer. I must call him back this evening. I cannot move without the keys! Does Anaïs have a spare at her place? No, I asked her, but she does not have one. So I am going to wait for the owner's call.",
      },
      {
        fr: "Pour le transport, je vais demander un camion à mon oncle. Mes amis Hugo et Léna ? Je les ai invités et ils ont dit oui. Je veux leur offrir un bon repas : je vais commander des pizzas, et je vais en commander dix, parce que nous sommes nombreux. Ma sœur trouve que c'est beaucoup, mais je la rassure : nous allons les manger, c'est sûr.",
        TR: "Taşıma için amcamdan bir kamyon isteyeceğim. Arkadaşlarım Hugo ile Léna mı? Onları davet ettim ve evet dediler. Onlara güzel bir yemek ısmarlamak istiyorum: pizza sipariş edeceğim ve on tane sipariş edeceğim, çünkü kalabalığız. Kız kardeşim bunun çok olduğunu düşünüyor ama onu rahatlatıyorum: onları yiyeceğiz, emin ol.",
        EN: "For the transport I am going to ask my uncle for a lorry. My friends Hugo and Léna? I invited them and they said yes. I want to offer them a good meal: I am going to order pizzas, and I am going to order ten of them, because there are many of us. My sister thinks that it is a lot, but I reassure her: we are going to eat them, for sure.",
      },
      {
        fr: "Samedi matin, mon oncle est arrivé avec le camion. Nous avons porté le canapé : quatre personnes ont dû le monter par l'escalier. La grande table, nous l'avons portée à deux. Les chaises, Hugo les a montées une par une. Anaïs a fait la liste des cartons, et je l'ai remerciée de son aide. Léna a pris un café avec moi et je l'ai invitée à dîner.",
        TR: "Cumartesi sabahı amcam kamyonla geldi. Kanepeyi taşıdık: dört kişi onu merdivenden çıkarmak zorunda kaldı. Büyük masayı iki kişi taşıdık. Sandalyeleri Hugo tek tek çıkardı. Anaïs kolilerin listesini yaptı ve ben ona yardımı için teşekkür ettim. Léna benimle bir kahve içti ve ben onu yemeğe davet ettim.",
        EN: "On Saturday morning my uncle arrived with the lorry. We carried the sofa: four people had to take it up the stairs. The big table, we carried it with two people. The chairs, Hugo took them up one by one. Anaïs made the list of the boxes, and I thanked her for her help. Léna had a coffee with me and I invited her to dinner.",
      },
      {
        fr: "À midi, j'ai pensé à ma plante verte. Je l'ai laissée dans mon ancien appartement ! Je dois y retourner. Anaïs ne peut pas m'accompagner, alors j'y suis allé seul. Je n'ai pas trouvé ma plante : ma voisine l'a déjà prise chez elle. « Je l'ai arrosée et je l'ai aimée, elle est trop belle ! » a-t-elle dit. Je n'ai pas voulu la reprendre, et je lui ai laissé ma plante.",
        TR: "Öğlen yeşil bitkimi düşündüm. Onu eski dairemde bırakmıştım! Oraya geri dönmem lazım. Anaïs bana eşlik edemiyor, bu yüzden oraya tek başıma gittim. Bitkimi bulamadım: komşum onu çoktan evine almış. « Onu suladım ve sevdim, çok güzel! » dedi. Onu geri almak istemedim ve bitkimi ona bıraktım.",
        EN: "At noon I thought of my green plant. I left it in my old flat! I must go back there. Anaïs cannot come with me, so I went there alone. I did not find my plant: my neighbour had already taken it to her place. \"I watered it and I loved it, it is too beautiful!\" she said. I did not want to take it back, and I left my plant with her.",
      },
      {
        fr: "Mon oncle nous a aussi prêté des couvertures. Il a dit : « Vous pouvez les garder. » Je les ai rangées dans un grand sac et je les ai mises dans le coffre du camion. Ma mère a envoyé un message : elle veut venir me voir dimanche, et je vais l'accueillir avec du thé. Je ne l'ai pas encore rappelée, mais je vais le faire ce soir, avant le repas.",
        TR: "Amcam bize battaniye de ödünç verdi. Dedi ki: « Onları saklayabilirsiniz. » Onları büyük bir çantaya yerleştirdim ve kamyonun bagajına koydum. Annem bir mesaj gönderdi: pazar günü beni görmeye gelmek istiyor ve ben onu çayla karşılayacağım. Onu henüz geri aramadım ama bu akşam yemekten önce bunu yapacağım.",
        EN: "My uncle also lent us some blankets. He said: \"You can keep them.\" I put them in a big bag and I put them in the back of the lorry. My mother sent a message: she wants to come and see me on Sunday, and I am going to welcome her with tea. I have not called her back yet, but I am going to do it this evening, before the meal.",
      },
      {
        fr: "Le soir, nous avons mangé les pizzas par terre, au milieu des cartons. Nous les avons mangées avec plaisir ! Ma sœur m'a dit : « Tu vas aimer cet endroit. » Je lui ai répondu : « Je l'aime déjà. » Demain, nous allons ranger la cuisine, et Anaïs va m'aider. Je ne peux pas oublier cette journée : je vais la raconter à mes parents.",
        TR: "Akşam pizzaları kolilerin arasında yerde yedik. Büyük bir keyifle yedik! Kız kardeşim bana dedi: « Burayı seveceksin. » Ona cevap verdim: « Şimdiden seviyorum. » Yarın mutfağı toplayacağız ve Anaïs bana yardım edecek. Bu günü unutamam: onu anne babama anlatacağım.",
        EN: "In the evening we ate the pizzas on the floor, among the boxes. We ate them with great pleasure! My sister said to me: \"You are going to like this place.\" I answered her: \"I already like it.\" Tomorrow we are going to tidy the kitchen, and Anaïs is going to help me. I cannot forget this day: I am going to tell it to my parents.",
      },
    ],
    questions: [
      {
        question: { fr: "Pourquoi le narrateur déménage-t-il ?", TR: "Anlatıcı neden taşınıyor?", EN: "Why is the narrator moving?" },
        options: ["Son appartement est trop petit.", "Il change de travail.", "Son appartement est trop cher.", "Il quitte la ville."],
        answer: 0,
      },
      {
        question: { fr: "Quel problème a-t-il avec le propriétaire ?", TR: "Ev sahibiyle ilgili sorunu nedir?", EN: "What problem does he have with the owner?" },
        options: ["Le propriétaire n'a pas répondu à son appel.", "Le propriétaire a perdu les clés.", "Le propriétaire a vendu le studio."],
        answer: 0,
      },
      {
        question: { fr: "Combien de pizzas le narrateur veut-il commander ?", TR: "Anlatıcı kaç pizza sipariş etmek istiyor?", EN: "How many pizzas does the narrator want to order?" },
        options: ["Quatre", "Six", "Dix", "Vingt"],
        answer: 2,
      },
      {
        question: { fr: "Qui a donné un camion pour le déménagement ?", TR: "Taşınma için kamyonu kim getirdi?", EN: "Who brought a lorry for the move?" },
        options: ["Hugo", "L'oncle du narrateur", "Le propriétaire", "La voisine"],
        answer: 1,
      },
      {
        question: { fr: "Où est la plante verte à la fin ?", TR: "Yeşil bitki sonunda nerede?", EN: "Where is the green plant at the end?" },
        options: ["Dans le nouveau studio", "Chez la voisine", "Chez Anaïs"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-futur-simple",
    lessonId: "futur-simple",
    level: "A2",
    title: { TR: "Gelecek yıla dair bir mektup", EN: "Letter about next year" },
    paragraphs: [
      {
        fr: "Chère Inès, je t'écris une longue lettre, parce que j'ai une grande nouvelle : l'année prochaine, je partirai étudier au Canada ! Je serai à Montréal en septembre et j'y resterai un an. Je suis très heureuse, mais j'ai un peu peur. Je sais que ma vie changera beaucoup, et je veux te raconter mes projets avant le départ.",
        TR: "Sevgili Inès, sana uzun bir mektup yazıyorum, çünkü büyük bir haberim var: gelecek yıl Kanada'ya okumaya gideceğim! Eylülde Montréal'de olacağım ve orada bir yıl kalacağım. Çok mutluyum ama biraz korkuyorum. Hayatımın çok değişeceğini biliyorum ve gitmeden önce sana planlarımı anlatmak istiyorum.",
        EN: "Dear Inès, I am writing you a long letter, because I have big news: next year I will leave to study in Canada! I will be in Montreal in September and I will stay there for a year. I am very happy, but I am a little afraid. I know that my life will change a lot, and I want to tell you about my plans before I leave.",
      },
      {
        fr: "Je ferai mon master d'informatique à l'université. J'aurai des cours le matin et je travaillerai le soir dans une bibliothèque. Je prendrai le métro tous les jours, avec mon sac lourd et mon café. J'espère que je comprendrai l'accent québécois ! Mes professeurs parleront vite, mais je poserai beaucoup de questions et je comprendrai peu à peu.",
        TR: "Üniversitede bilgisayar bilimi yüksek lisansımı yapacağım. Sabahları derslerim olacak ve akşamları bir kütüphanede çalışacağım. Ağır çantam ve kahvemle her gün metroya bineceğim. Umarım Quebec aksanını anlarım! Öğretmenlerim hızlı konuşacak ama ben çok soru soracağım ve yavaş yavaş anlayacağım.",
        EN: "I will do my master's degree in computer science at the university. I will have classes in the morning and I will work in a library in the evening. I will take the metro every day, with my heavy bag and my coffee. I hope that I will understand the Quebec accent! My teachers will speak fast, but I will ask lots of questions and I will understand little by little.",
      },
      {
        fr: "Je chercherai un appartement près de l'université. Je louerai une petite chambre et je partagerai la cuisine avec deux étudiants. J'achèterai des vêtements chauds, parce qu'il fera très froid en hiver : il y aura de la neige de novembre à avril. Je verrai la neige pour la première fois de ma vie, et je suis sûre que je serai comme une enfant !",
        TR: "Üniversiteye yakın bir daire arayacağım. Küçük bir oda kiralayacağım ve mutfağı iki öğrenciyle paylaşacağım. Sıcak kıyafetler alacağım, çünkü kışın çok soğuk olacak: kasımdan nisana kadar kar olacak. Karı hayatımda ilk kez göreceğim ve eminim bir çocuk gibi olacağım!",
        EN: "I will look for a flat near the university. I will rent a small room and I will share the kitchen with two students. I will buy warm clothes, because it will be very cold in winter: there will be snow from November to April. I will see snow for the first time in my life, and I am sure that I will be like a child!",
      },
      {
        fr: "Mes journées seront longues, mais je trouverai du temps pour le sport. Je courrai dans le parc le week-end, je m'inscrirai dans un club de yoga et j'apprendrai à patiner. Le dimanche, je préparerai un grand repas et j'inviterai mes colocataires. Nous mangerons de la cuisine du monde : ils cuisineront un plat de leur pays, et moi, je ferai ma tarte aux pommes. Tu verras, ce sera délicieux !",
        TR: "Günlerim uzun olacak ama spor için vakit bulacağım. Hafta sonları parkta koşacağım, bir yoga kulübüne yazılacağım ve buz pateni yapmayı öğreneceğim. Pazar günleri büyük bir yemek hazırlayacağım ve ev arkadaşlarımı davet edeceğim. Dünya mutfağından yiyeceğiz: onlar kendi ülkelerinden bir yemek pişirecek, ben de elmalı turtamı yapacağım. Göreceksin, nefis olacak!",
        EN: "My days will be long, but I will find time for sport. I will run in the park at the weekend, I will join a yoga club and I will learn to skate. On Sunday I will prepare a big meal and I will invite my flatmates. We will eat food from around the world: they will cook a dish from their country, and I will make my apple tart. You will see, it will be delicious!",
      },
      {
        fr: "Tu viendras me voir ? Tu pourras venir en décembre, pour Noël. Nous irons patiner, nous ferons du ski, nous boirons du chocolat chaud et nous mangerons des crêpes au sirop d'érable. Mes parents viendront au printemps, et ma sœur voudra visiter New York : nous irons là-bas en bus, et nous verrons les grands immeubles et la statue de la Liberté.",
        TR: "Beni görmeye gelecek misin? Aralıkta, Noel için gelebilirsin. Buz pateni yapacağız, kayak yapacağız, sıcak çikolata içeceğiz ve akçaağaç şuruplu krep yiyeceğiz. Annemle babam ilkbaharda gelecek ve kız kardeşim New York'u görmek isteyecek: oraya otobüsle gideceğiz ve yüksek binaları ve Özgürlük Anıtı'nı göreceğiz.",
        EN: "Will you come to see me? You will be able to come in December, for Christmas. We will go skating, we will ski, we will drink hot chocolate and we will eat pancakes with maple syrup. My parents will come in spring, and my sister will want to visit New York: we will go there by bus, and we will see the tall buildings and the Statue of Liberty.",
      },
      {
        fr: "Avant le départ, je devrai faire beaucoup de choses. Je demanderai mon visa en juin, j'achèterai mon billet d'avion en juillet et je vendrai mon vélo en août. Je finirai mon travail à la mairie à la fin de l'été, et je dirai au revoir à mes collègues. Mes amis organiseront une petite fête, et je pleurerai un peu, c'est sûr.",
        TR: "Gitmeden önce çok şey yapmam gerekecek. Haziranda vizemi isteyeceğim, temmuzda uçak biletimi alacağım ve ağustosta bisikletimi satacağım. Yazın sonunda belediyedeki işimi bitireceğim ve iş arkadaşlarıma veda edeceğim. Arkadaşlarım küçük bir parti düzenleyecek ve biraz ağlayacağım, bu kesin.",
        EN: "Before I leave, I will have to do many things. I will apply for my visa in June, I will buy my plane ticket in July and I will sell my bike in August. I will finish my job at the town hall at the end of the summer, and I will say goodbye to my colleagues. My friends will organise a little party, and I will cry a little, for sure.",
      },
      {
        fr: "Mes parents sont un peu tristes. Ma mère dit qu'elle pleurera à l'aéroport, et mon père dit qu'il m'appellera tous les soirs. Ils m'enverront des colis avec des gâteaux et des photos du chat. Je leur écrirai souvent et je leur montrerai la ville par vidéo. Nous ne serons pas loin : deux ou trois clics, et nous nous verrons.",
        TR: "Annem ile babam biraz üzgün. Annem havalimanında ağlayacağını söylüyor, babam da beni her akşam arayacağını. Bana kekler ve kedinin fotoğraflarının olduğu paketler gönderecekler. Onlara sık sık yazacağım ve şehri onlara görüntülü göstereceğim. Uzakta olmayacağız: birkaç tık ve birbirimizi göreceğiz.",
        EN: "My parents are a little sad. My mother says that she will cry at the airport, and my father says that he will call me every evening. They will send me parcels with cakes and photos of the cat. I will write to them often and I will show them the city by video. We will not be far away: a few clicks, and we will see each other.",
      },
      {
        fr: "Quand je serai là-bas, je parlerai français tous les jours, et je ferai des progrès en anglais aussi. Je rencontrerai des gens de beaucoup de pays. Je ne serai pas seule : tu m'écriras, j'espère, et nous nous téléphonerons le dimanche. Et toi, que feras-tu l'année prochaine ? Tu resteras à Lyon ? Tu auras ton diplôme en juin ? Réponds vite ! Je t'embrasse très fort, Samia.",
        TR: "Orada olduğumda her gün Fransızca konuşacağım ve İngilizcemi de geliştireceğim. Pek çok ülkeden insanlarla tanışacağım. Yalnız olmayacağım: sen de bana yazarsın umarım ve pazar günleri telefonda konuşuruz. Peki sen, gelecek yıl ne yapacaksın? Lyon'da mı kalacaksın? Haziranda diplomanı alacak mısın? Çabuk cevap ver! Seni çok sıkı öpüyorum, Samia.",
        EN: "When I am over there, I will speak French every day, and I will make progress in English too. I will meet people from many countries. I will not be alone: you will write to me, I hope, and we will phone each other on Sundays. And you, what will you do next year? Will you stay in Lyon? Will you get your degree in June? Answer quickly! I hug you very tight, Samia.",
      },
    ],
    questions: [
      {
        question: { fr: "Où Samia partira-t-elle l'année prochaine ?", TR: "Samia gelecek yıl nereye gidecek?", EN: "Where will Samia go next year?" },
        options: ["À Lyon", "À Montréal", "À New York"],
        answer: 1,
      },
      {
        question: { fr: "Qu'est-ce que Samia étudiera ?", TR: "Samia ne okuyacak?", EN: "What will Samia study?" },
        options: ["L'histoire", "La médecine", "L'informatique", "Le droit"],
        answer: 2,
      },
      {
        question: { fr: "Quand Inès pourra-t-elle venir la voir ?", TR: "Inès onu görmeye ne zaman gelebilecek?", EN: "When will Inès be able to come and see her?" },
        options: ["En juin", "En décembre", "Au printemps", "En août"],
        answer: 1,
      },
      {
        question: { fr: "Que fera Samia en août ?", TR: "Samia ağustosta ne yapacak?", EN: "What will Samia do in August?" },
        options: ["Elle achètera son billet.", "Elle demandera son visa.", "Elle vendra son vélo.", "Elle partira à Montréal."],
        answer: 2,
      },
      {
        question: { fr: "Que fera Samia avec Inès le dimanche ?", TR: "Samia pazar günleri Inès ile ne yapacak?", EN: "What will Samia do with Inès on Sundays?" },
        options: ["Elles patineront ensemble.", "Elles se téléphoneront.", "Elles visiteront New York."],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-comparatives",
    lessonId: "comparatives",
    level: "A2",
    title: { TR: "İki şehir, bir karar", EN: "Two cities, one decision" },
    paragraphs: [
      {
        fr: "J'ai un grand choix à faire. Mon entreprise m'offre un poste à Grenoble, mais j'habite à Toulouse avec ma femme Sonia et j'aime cette ville. Toulouse est plus grande que Grenoble : elle a plus d'habitants et plus de magasins. Mais Grenoble est aussi belle que Toulouse, avec ses montagnes blanches. Alors, où allons-nous vivre ? Sonia et moi, nous faisons une liste.",
        TR: "Vermem gereken büyük bir karar var. Şirketim bana Grenoble'da bir pozisyon teklif ediyor ama ben eşim Sonia ile Toulouse'da oturuyorum ve bu şehri seviyorum. Toulouse Grenoble'dan daha büyük: daha çok nüfusu ve daha çok mağazası var. Ama Grenoble de Toulouse kadar güzel, beyaz dağlarıyla. Peki nerede yaşayacağız? Sonia ile ben bir liste yapıyoruz.",
        EN: "I have a big choice to make. My company is offering me a job in Grenoble, but I live in Toulouse with my wife Sonia and I like this city. Toulouse is bigger than Grenoble: it has more inhabitants and more shops. But Grenoble is as beautiful as Toulouse, with its white mountains. So where are we going to live? Sonia and I make a list.",
      },
      {
        fr: "À Grenoble, je gagnerai plus d'argent : le salaire est meilleur de trois cents euros par mois. Mais les loyers sont plus chers là-bas : un appartement coûte autant qu'à Paris. À Toulouse, la vie est moins chère, et nous avons un appartement plus grand, avec un balcon. Sonia rit et dit : « Tu gagneras plus, mais nous aurons moins d'espace ! »",
        TR: "Grenoble'da daha çok para kazanacağım: maaş ayda üç yüz avro daha iyi. Ama orada kiralar daha pahalı: bir daire Paris kadar tutuyor. Toulouse'da hayat daha ucuz ve balkonlu, daha büyük bir dairemiz var. Sonia gülerek diyor ki: « Daha çok kazanacaksın ama daha az yerimiz olacak! »",
        EN: "In Grenoble I will earn more money: the salary is better by three hundred euros a month. But the rents are more expensive there: a flat costs as much as in Paris. In Toulouse life is cheaper, and we have a bigger flat, with a balcony. Sonia laughs and says: \"You will earn more, but we will have less space!\"",
      },
      {
        fr: "Le climat est différent. En été, il fait plus chaud à Toulouse qu'à Grenoble, et en hiver, il neige plus à Grenoble. Sonia aime la neige autant que moi, mais elle skie mieux que moi. Moi, je skie moins bien qu'elle, et je tombe plus souvent. Elle me dit : « Tu seras meilleur après une saison ! » Je ne la crois pas beaucoup.",
        TR: "İklim farklı. Yazın Toulouse'da Grenoble'dan daha sıcak, kışın ise Grenoble'da daha çok kar yağıyor. Sonia karı benim kadar seviyor ama benden daha iyi kayıyor. Ben ondan daha kötü kayıyorum ve daha sık düşüyorum. Bana diyor ki: « Bir sezon sonra daha iyi olacaksın! » Ona pek inanmıyorum.",
        EN: "The climate is different. In summer it is hotter in Toulouse than in Grenoble, and in winter it snows more in Grenoble. Sonia likes snow as much as me, but she skis better than me. I ski less well than her, and I fall more often. She tells me: \"You will be better after one season!\" I do not believe her much.",
      },
      {
        fr: "Mon travail à Grenoble est plus intéressant, mais je travaillerai plus d'heures qu'ici. Mon futur patron est aussi gentil que mon patron actuel, et mes collègues sont aussi compétents que moi. Pourtant, à Toulouse, j'ai de bons horaires et je rentre à six heures. Là-bas, je rentrerai plus tard, et nous aurons moins de temps ensemble.",
        TR: "Grenoble'daki işim daha ilginç ama burada olduğundan daha çok saat çalışacağım. Gelecekteki patronum şimdiki patronum kadar nazik ve iş arkadaşlarım benim kadar yetkin. Yine de Toulouse'da çalışma saatlerim iyi ve altıda eve dönüyorum. Orada daha geç döneceğim ve birlikte daha az zamanımız olacak.",
        EN: "My job in Grenoble is more interesting, but I will work more hours than here. My future boss is as kind as my current boss, and my colleagues are as competent as me. Still, in Toulouse I have good hours and I get home at six. Over there I will get home later, and we will have less time together.",
      },
      {
        fr: "Mes parents habitent plus près de Toulouse que de Grenoble. Ma mère dit : « Tu seras plus loin de nous, mais tu seras plus heureux ! » Mon frère Adil a autant de travail que moi, mais il voyage plus. Il me répond : « Un train, c'est aussi rapide qu'un avion, et c'est meilleur pour la planète. Nous nous verrons autant qu'avant. »",
        TR: "Annem ile babam Grenoble'dan çok Toulouse'a yakın oturuyor. Annem diyor ki: « Bizden daha uzakta olacaksın ama daha mutlu olacaksın! » Kardeşim Adil'in de benim kadar işi var ama o daha çok seyahat ediyor. Bana cevap veriyor: « Tren uçak kadar hızlı ve gezegen için daha iyi. Eskisi kadar görüşeceğiz. »",
        EN: "My parents live closer to Toulouse than to Grenoble. My mother says: \"You will be further from us, but you will be happier!\" My brother Adil has as much work as me, but he travels more. He answers me: \"A train is as fast as a plane, and it is better for the planet. We will see each other as much as before.\"",
      },
      {
        fr: "Nous comparons aussi les loisirs. À Toulouse, il y a plus de cinémas, plus de restaurants et plus de musées. À Grenoble, il y a moins de sorties le soir, mais il y a autant de randonnées que de visites culturelles. Sonia dit que les gens sont plus sportifs à Grenoble. Moi, je cours moins vite qu'elle, mais je marche aussi longtemps. Nous trouvons que les deux villes sont aussi agréables l'une que l'autre.",
        TR: "Boş zaman etkinliklerini de karşılaştırıyoruz. Toulouse'da daha çok sinema, daha çok restoran ve daha çok müze var. Grenoble'da akşam çıkacak yer daha az ama yürüyüşler kültürel gezilerle aynı sayıda. Sonia, Grenoble'da insanların daha sportif olduğunu söylüyor. Ben ondan daha yavaş koşuyorum ama o kadar uzun yürüyorum. İki şehrin de birbiri kadar hoş olduğunu düşünüyoruz.",
        EN: "We also compare leisure activities. In Toulouse there are more cinemas, more restaurants and more museums. In Grenoble there are fewer evening outings, but there are as many hikes as cultural visits. Sonia says that people are more sporty in Grenoble. I run less fast than her, but I walk as long. We find that the two cities are as pleasant as each other.",
      },
      {
        fr: "Sonia est plus patiente que moi, et elle réfléchit mieux. Elle dit : « À Grenoble, un an, ce n'est pas plus long qu'ici : c'est une aventure. Nous avons autant de courage que les autres. » Je pense que son idée est meilleure que la mienne. Elle parle aussi mieux anglais que moi, alors elle trouvera du travail aussi vite que moi.",
        TR: "Sonia benden daha sabırlı ve daha iyi düşünüyor. Diyor ki: « Grenoble'da bir yıl burada olduğundan daha uzun değil: bu bir macera. Diğerleri kadar cesaretimiz var. » Onun fikrinin benimkinden daha iyi olduğunu düşünüyorum. İngilizceyi de benden daha iyi konuşuyor, bu yüzden benim kadar çabuk iş bulacak.",
        EN: "Sonia is more patient than me, and she thinks better. She says: \"In Grenoble, one year is not longer than here: it is an adventure. We have as much courage as other people.\" I think that her idea is better than mine. She also speaks English better than me, so she will find work as fast as me.",
      },
      {
        fr: "Nous avons décidé. Nous partirons à Grenoble pour un an. Un an, ce n'est pas long, et Toulouse sera toujours aussi belle quand nous reviendrons. Je téléphone à mon patron dès demain, et ma femme commence déjà les cartons. Le salaire sera meilleur, la vie sera moins calme, mais nous serons ensemble.",
        TR: "Karar verdik. Bir yıllığına Grenoble'a gideceğiz. Bir yıl uzun değil ve döndüğümüzde Toulouse yine aynı derecede güzel olacak. Yarın patronuma telefon ediyorum ve eşim şimdiden kolileri hazırlamaya başlıyor. Maaş daha iyi olacak, hayat daha az sakin olacak ama birlikte olacağız.",
        EN: "We have decided. We will go to Grenoble for a year. A year is not long, and Toulouse will be just as beautiful when we come back. I call my boss tomorrow, and my wife is already starting the boxes. The salary will be better, life will be less calm, but we will be together.",
      },
    ],
    questions: [
      {
        question: { fr: "Quelle ville est plus grande ?", TR: "Hangi şehir daha büyük?", EN: "Which city is bigger?" },
        options: ["Grenoble", "Toulouse", "Elles ont la même taille."],
        answer: 1,
      },
      {
        question: { fr: "Quel est l'avantage de Grenoble pour le salaire ?", TR: "Maaş açısından Grenoble'ın avantajı nedir?", EN: "What is Grenoble's advantage for salary?" },
        options: ["Le salaire est meilleur de trois cents euros.", "Les loyers sont moins chers.", "Le salaire est le même.", "Il n'y a pas d'avantage."],
        answer: 0,
      },
      {
        question: { fr: "Qui skie mieux ?", TR: "Kim daha iyi kayıyor?", EN: "Who skis better?" },
        options: ["Le narrateur", "Sonia", "Adil"],
        answer: 1,
      },
      {
        question: { fr: "Pourquoi le narrateur aura-t-il moins de temps avec Sonia à Grenoble ?", TR: "Anlatıcı Grenoble'da Sonia ile neden daha az zaman geçirecek?", EN: "Why will the narrator have less time with Sonia in Grenoble?" },
        options: ["Il voyagera beaucoup.", "Il travaillera plus d'heures.", "Il skiera tous les jours.", "Sonia travaillera la nuit."],
        answer: 1,
      },
      {
        question: { fr: "Quelle est la décision à la fin ?", TR: "Sonunda karar nedir?", EN: "What is the decision at the end?" },
        options: ["Ils restent à Toulouse.", "Ils partent à Grenoble pour un an.", "Ils déménagent à Paris.", "Ils ne décident pas."],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-superlatives",
    lessonId: "superlatives",
    level: "A2",
    title: { TR: "Fransa turumdan rekorlar", EN: "Records from my tour of France" },
    paragraphs: [
      {
        fr: "Cet été, j'ai fait un tour de France en train avec mon meilleur ami, Yanis. Nous avons voyagé trois semaines, avec deux sacs à dos et un petit budget. Au retour, nous avons voulu faire un classement de notre voyage. Voici donc mes records : le plus beau, le plus long, le meilleur, le moins cher. Tu vas voir, c'est un jeu amusant !",
        TR: "Bu yaz en iyi arkadaşım Yanis ile trenle Fransa turu yaptım. İki sırt çantası ve küçük bir bütçeyle üç hafta seyahat ettik. Dönüşte gezimizin bir sıralamasını yapmak istedik. İşte rekorlarım: en güzeli, en uzunu, en iyisi, en ucuzu. Göreceksin, eğlenceli bir oyun!",
        EN: "This summer I did a tour of France by train with my best friend, Yanis. We travelled for three weeks, with two backpacks and a small budget. When we got back, we wanted to make a ranking of our trip. So here are my records: the most beautiful, the longest, the best, the cheapest. You will see, it is a fun game!",
      },
      {
        fr: "La plus belle ville ? Pour moi, c'est Annecy. Son lac est le plus joli de la région, et ses petites rues sont les plus charmantes du voyage. Yanis préfère Lyon, mais pour lui, la plus belle ville, c'est aussi la plus grande ! Nous ne sommes pas d'accord, mais nous nous amusons beaucoup pendant ces discussions.",
        TR: "En güzel şehir mi? Bence Annecy. Gölü bölgenin en güzeli ve küçük sokakları gezinin en büyüleyicileri. Yanis Lyon'u tercih ediyor ama ona göre en güzel şehir aynı zamanda en büyük şehir! Aynı fikirde değiliz ama bu tartışmalarda çok eğleniyoruz.",
        EN: "The most beautiful city? For me, it is Annecy. Its lake is the prettiest in the region, and its little streets are the most charming of the trip. Yanis prefers Lyon, but for him the most beautiful city is also the biggest! We do not agree, but we have a lot of fun in these discussions.",
      },
      {
        fr: "Le meilleur repas ? À Lyon, dans un petit restaurant de quartier. C'est le restaurant le moins cher de la rue, mais c'est aussi le meilleur de la ville, selon la serveuse. Le plat le plus étonnant ? Une soupe d'oignons avec du fromage, servie dans un bol énorme. Le dessert le plus sucré ? Une tarte aux noix, sans doute. Yanis en a mangé trois parts.",
        TR: "En iyi yemek mi? Lyon'da küçük bir mahalle lokantasında. Sokağın en ucuz lokantası ama garsona göre şehrin en iyisi de o. En şaşırtıcı yemek mi? Peynirli soğan çorbası, kocaman bir kasede servis edildi. En tatlı tatlı mı? Muhtemelen bir cevizli tart. Yanis üç dilim yedi.",
        EN: "The best meal? In Lyon, in a small neighbourhood restaurant. It is the cheapest restaurant in the street, but it is also the best in the city, according to the waitress. The most surprising dish? An onion soup with cheese, served in an enormous bowl. The sweetest dessert? A walnut tart, probably. Yanis ate three slices.",
      },
      {
        fr: "Le trajet le plus long ? De Strasbourg à Biarritz, douze heures de train. Le train le plus confortable ? Le TGV entre Paris et Bordeaux : il est aussi le plus rapide de notre voyage. Le moment le plus difficile ? Le retard de trois heures à Dijon, avec le plus petit café de la gare et les plus mauvais sandwichs du monde.",
        TR: "En uzun yolculuk mu? Strasbourg'dan Biarritz'e, on iki saatlik tren. En rahat tren mi? Paris ile Bordeaux arasındaki TGV: aynı zamanda gezimizin en hızlısı. En zor an mı? Dijon'da üç saatlik gecikme; istasyonun en küçük kafesi ve dünyanın en kötü sandviçleriyle.",
        EN: "The longest journey? From Strasbourg to Biarritz, twelve hours of train. The most comfortable train? The TGV between Paris and Bordeaux: it is also the fastest of our trip. The hardest moment? The three-hour delay in Dijon, with the smallest café in the station and the worst sandwiches in the world.",
      },
      {
        fr: "L'hôtel le plus cher se trouve à Nice, mais c'est aussi le plus confortable de nos hôtels. L'hôtel le moins cher est une auberge de jeunesse à Toulouse : les lits sont les plus durs de France, mais l'ambiance y est la meilleure ! La nuit la plus bruyante ? À Marseille, près du port, avec les voisins les plus fêtards de la ville.",
        TR: "En pahalı otel Nice'te ama aynı zamanda otellerimizin en rahatı. En ucuz otel Toulouse'daki bir gençlik yurdu: yatakları Fransa'nın en sertleri ama ortamı en iyisi! En gürültülü gece mi? Marsilya'da, limanın yanında, şehrin en eğlence düşkünü komşularıyla.",
        EN: "The most expensive hotel is in Nice, but it is also the most comfortable of our hotels. The cheapest hotel is a youth hostel in Toulouse: the beds are the hardest in France, but the atmosphere there is the best! The noisiest night? In Marseille, near the port, with the most party-loving neighbours in the city.",
      },
      {
        fr: "La personne la plus gentille ? Une serveuse à Nice, qui nous a donné les meilleurs conseils de la région. La plus drôle ? Yanis, bien sûr, et c'est aussi le plus fatigué à la fin du voyage. Le plus gros dormeur du groupe ? C'est lui, il a dormi dans les trains ! Moi, je suis le plus curieux : je pose des questions aux gens.",
        TR: "En nazik kişi mi? Nice'te bir garson; bize bölgenin en iyi tavsiyelerini verdi. En komik kim? Elbette Yanis ve gezinin sonunda en yorgun olan da o. Grubun en büyük uykucusu mu? O, trenlerde uyudu! Ben ise en meraklısıyım: insanlara soru soruyorum.",
        EN: "The kindest person? A waitress in Nice, who gave us the best advice in the region. The funniest? Yanis, of course, and he is also the most tired at the end of the trip. The biggest sleeper of the group? It is him, he slept in the trains! I am the most curious: I ask people questions.",
      },
      {
        fr: "Le paysage le plus spectaculaire ? Les falaises d'Étretat, au nord. C'est la plage la plus belle de notre voyage, et aussi la plus froide ! Yanis a fait la baignade la plus courte de sa vie : deux minutes. La chose la plus drôle, c'était son cri quand il est entré dans l'eau. Les mouettes ont fui, les touristes ont ri, et moi, j'ai pris la photo la plus amusante de mon téléphone.",
        TR: "En muhteşem manzara mı? Kuzeydeki Étretat kayalıkları. Gezimizin en güzel plajı ve aynı zamanda en soğuğu! Yanis hayatının en kısa yüzmesini yaptı: iki dakika. En komik şey suya girerken attığı çığlıktı. Martılar kaçtı, turistler güldü, ben de telefonumdaki en eğlenceli fotoğrafı çektim.",
        EN: "The most spectacular landscape? The cliffs of Étretat, in the north. It is the most beautiful beach of our trip, and also the coldest! Yanis took the shortest swim of his life: two minutes. The funniest thing was his cry when he went into the water. The seagulls fled, the tourists laughed, and I took the funniest photo on my phone.",
      },
      {
        fr: "Et le plus beau moment ? Un lever de soleil à Marseille, sur la mer, à six heures du matin. C'était le plus calme et le plus magnifique du voyage. Je suis sûr que ce souvenir sera le meilleur de ma vie d'étudiant. L'année prochaine, nous ferons un nouveau classement, peut-être en Italie !",
        TR: "Ve en güzel an mı? Marsilya'da sabah altıda denizin üstünde bir gün doğumu. Yolculuğun en sakin ve en muhteşem anıydı. Bu anının öğrencilik hayatımın en iyisi olacağından eminim. Gelecek yıl yeni bir sıralama yapacağız, belki İtalya'da!",
        EN: "And the most beautiful moment? A sunrise in Marseille, over the sea, at six in the morning. It was the calmest and the most magnificent of the trip. I am sure that this memory will be the best of my student life. Next year we will make a new ranking, maybe in Italy!",
      },
    ],
    questions: [
      {
        question: { fr: "Avec qui le narrateur voyage-t-il ?", TR: "Anlatıcı kiminle seyahat ediyor?", EN: "Who does the narrator travel with?" },
        options: ["Sa sœur", "Son meilleur ami Yanis", "Ses parents", "Un collègue"],
        answer: 1,
      },
      {
        question: { fr: "Quelle ville le narrateur trouve-t-il la plus belle ?", TR: "Anlatıcı hangi şehri en güzel buluyor?", EN: "Which city does the narrator find the most beautiful?" },
        options: ["Lyon", "Nice", "Annecy"],
        answer: 2,
      },
      {
        question: { fr: "Quel est le trajet le plus long du voyage ?", TR: "Gezinin en uzun yolculuğu hangisi?", EN: "What is the longest journey of the trip?" },
        options: ["Paris - Bordeaux", "Strasbourg - Biarritz", "Nice - Marseille", "Lyon - Dijon"],
        answer: 1,
      },
      {
        question: { fr: "Pourquoi l'auberge de Toulouse est-elle la meilleure ?", TR: "Toulouse'daki yurt neden en iyisi?", EN: "Why is the Toulouse hostel the best?" },
        options: ["Les lits sont très confortables.", "Elle est la plus belle.", "L'ambiance y est la meilleure.", "Elle est gratuite."],
        answer: 2,
      },
      {
        question: { fr: "Quel est le plus beau moment du voyage ?", TR: "Gezinin en güzel anı nedir?", EN: "What is the most beautiful moment of the trip?" },
        options: ["Un repas à Lyon", "Un lever de soleil à Marseille", "Un concert à Nice"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-relative-qui-que",
    lessonId: "relative-qui-que",
    level: "A2",
    title: { TR: "Bit pazarında bir pazar", EN: "A Sunday at the flea market" },
    paragraphs: [
      {
        fr: "Dimanche matin, ma copine Lila m'a invitée au marché aux puces de Saint-Ouen. C'est un grand marché qui se trouve près du métro. Lila est une fille qui adore les vieux objets, et moi, je suis une personne qui aime les promenades. Nous avons pris le métro à neuf heures, et nous sommes arrivées devant les premiers stands avec les touristes qui cherchaient des souvenirs.",
        TR: "Pazar sabahı arkadaşım Lila beni Saint-Ouen bit pazarına davet etti. Metronun yakınında bulunan büyük bir pazar. Lila eski eşyalara bayılan bir kız, ben de gezmeyi seven biriyim. Saat dokuzda metroya bindik ve hatıra arayan turistlerle birlikte ilk tezgâhların önüne vardık.",
        EN: "On Sunday morning my friend Lila invited me to the flea market of Saint-Ouen. It is a big market that is near the metro. Lila is a girl who loves old objects, and I am a person who likes walks. We took the metro at nine o'clock, and we arrived in front of the first stalls with the tourists who were looking for souvenirs.",
      },
      {
        fr: "Au premier stand, une vendeuse qui portait un grand chapeau nous a montré des tasses anciennes. « Ces tasses, que ma grand-mère utilisait, sont très rares », a-t-elle dit. Lila a pris la tasse bleue qu'elle préférait et elle a demandé le prix. La vendeuse, qui était très aimable, a répondu : « Pour vous, huit euros. » Lila a payé avec les pièces qu'elle avait dans sa poche.",
        TR: "İlk tezgâhta büyük şapka takan bir satıcı bize eski fincanlar gösterdi. « Büyükannemin kullandığı bu fincanlar çok nadirdir » dedi. Lila en sevdiği mavi fincanı aldı ve fiyatı sordu. Çok nazik olan satıcı cevap verdi: « Sizin için sekiz avro. » Lila cebindeki bozuk paralarla ödedi.",
        EN: "At the first stall a seller who was wearing a big hat showed us some old cups. \"These cups, which my grandmother used, are very rare,\" she said. Lila took the blue cup that she preferred and she asked the price. The seller, who was very kind, answered: \"For you, eight euros.\" Lila paid with the coins that she had in her pocket.",
      },
      {
        fr: "Plus loin, nous avons vu un vieux monsieur qui vendait des disques. Il y avait un disque que mon père adorait quand il était jeune, et je l'ai reconnu. Le monsieur, qui écoutait de la musique avec ses clients, m'a fait un prix : dix euros. J'ai accepté, et je pense que mon père sera très content du cadeau que je vais lui faire.",
        TR: "Biraz ileride plak satan yaşlı bir beyefendi gördük. Babamın gençken bayıldığı bir plak vardı ve onu tanıdım. Müşterileriyle müzik dinleyen beyefendi bana bir fiyat yaptı: on avro. Kabul ettim ve babamın ona yapacağım hediyeden çok memnun olacağını düşünüyorum.",
        EN: "Further on we saw an old gentleman who was selling records. There was a record that my father loved when he was young, and I recognised it. The gentleman, who was listening to music with his customers, gave me a price: ten euros. I accepted, and I think that my father will be very happy with the present that I am going to give him.",
      },
      {
        fr: "Lila a trouvé une lampe qu'elle voulait pour sa chambre. C'était une lampe verte qui était dans une vitrine, entre un miroir et une horloge. Le vendeur, qui parlait avec un voisin, nous a vues et il est venu nous aider. Lila a regardé le prix et elle a dit : « Ce n'est pas cher pour une lampe que je vais garder dix ans ! »",
        TR: "Lila odası için istediği bir lamba buldu. Bir ayna ile bir saatin arasında, vitrinde duran yeşil bir lambaydı. Komşusuyla konuşan satıcı bizi gördü ve yardıma geldi. Lila fiyata baktı ve dedi ki: « On yıl saklayacağım bir lamba için pahalı değil! »",
        EN: "Lila found a lamp that she wanted for her bedroom. It was a green lamp that was in a display case, between a mirror and a clock. The seller, who was talking with a neighbour, saw us and came to help us. Lila looked at the price and said: \"That is not expensive for a lamp that I am going to keep for ten years!\"",
      },
      {
        fr: "Nous avons aussi croisé un homme qui vendait des cartes postales. Lila a choisi une carte qui montre la tour Eiffel, et moi, j'ai pris une carte que ma grand-mère aimait. L'homme, qui connaissait l'histoire de ses cartes, nous a raconté des anecdotes que nous avons écoutées avec plaisir. Un client qui attendait derrière nous a même applaudi, et le vendeur a salué avec un grand sourire.",
        TR: "Ayrıca kartpostal satan bir adamın yanından geçtik. Lila Eyfel Kulesi'ni gösteren bir kart seçti, ben de büyükannemin sevdiği bir kart aldım. Kartlarının hikâyesini bilen adam bize keyifle dinlediğimiz anekdotlar anlattı. Arkamızda bekleyen bir müşteri hatta alkışladı ve satıcı koca bir gülümsemeyle selam verdi.",
        EN: "We also met a man who was selling postcards. Lila chose a card that shows the Eiffel Tower, and I took a card that my grandmother liked. The man, who knew the story of his cards, told us anecdotes that we listened to with pleasure. A customer who was waiting behind us even applauded, and the seller bowed with a big smile.",
      },
      {
        fr: "À midi, nous avons mangé des frites que le vendeur a servies dans un cornet, avec une sauce que Lila n'aime pas. Un jeune homme qui jouait de la guitare chantait une chanson que nous connaissons bien. Nous avons chanté avec lui, et les gens qui passaient ont applaudi. C'était un moment simple que je n'oublierai pas.",
        TR: "Öğlen satıcının külahta servis ettiği patates kızartması yedik; Lila'nın sevmediği bir sosla. Gitar çalan genç bir adam çok iyi bildiğimiz bir şarkı söylüyordu. Onunla birlikte şarkı söyledik ve geçenler alkışladı. Unutmayacağım basit bir andı.",
        EN: "At noon we ate chips that the seller served in a paper cone, with a sauce that Lila does not like. A young man who was playing the guitar was singing a song that we know well. We sang with him, and the people who were walking by applauded. It was a simple moment that I will not forget.",
      },
      {
        fr: "Plus tard, un petit accident : Lila a posé le téléphone qu'elle tenait sur un stand, et elle l'a oublié. Un enfant qui passait par là l'a trouvé, et sa mère, qui cherchait la propriétaire, nous a vues. Elle a rendu l'appareil à Lila, qui l'a remerciée avec un grand sourire. Une vraie chance !",
        TR: "Daha sonra küçük bir kaza oldu: Lila elinde tuttuğu telefonu bir tezgâhın üstüne koydu ve unuttu. Oradan geçen bir çocuk onu buldu ve sahibini arayan annesi bizi gördü. Telefonu Lila'ya geri verdi, Lila da ona kocaman bir gülümsemeyle teşekkür etti. Ne şans!",
        EN: "Later, a little accident: Lila put down the phone that she was holding on a stall, and she forgot it. A child who was passing by found it, and his mother, who was looking for the owner, saw us. She gave the phone back to Lila, who thanked her with a big smile. What luck!",
      },
      {
        fr: "Le soir, j'ai posé sur la table les objets que j'ai achetés : le disque que mon père adore, une écharpe rouge qui était très belle et un livre que j'ai trouvé dans une caisse. Mon colocataire, qui regardait un match, m'a demandé : « C'est quoi, ces objets que tu rapportes ? » J'ai souri : « Des trésors ! »",
        TR: "Akşam satın aldığım eşyaları masaya koydum: babamın bayıldığı plak, çok güzel olan kırmızı bir atkı ve bir kasada bulduğum bir kitap. Maç izleyen ev arkadaşım bana sordu: « Getirdiğin bu şeyler ne? » Gülümsedim: « Hazineler! »",
        EN: "In the evening I put on the table the objects that I bought: the record that my father loves, a red scarf that was very beautiful and a book that I found in a crate. My flatmate, who was watching a match, asked me: \"What are these things that you are bringing back?\" I smiled: \"Treasures!\"",
      },
    ],
    questions: [
      {
        question: { fr: "Où se passe l'histoire ?", TR: "Hikâye nerede geçiyor?", EN: "Where does the story take place?" },
        options: ["Dans un supermarché", "Dans un marché aux puces", "Dans un musée"],
        answer: 1,
      },
      {
        question: { fr: "Qu'est-ce que Lila achète à la première vendeuse ?", TR: "Lila ilk satıcıdan ne alıyor?", EN: "What does Lila buy from the first seller?" },
        options: ["Une lampe", "Une tasse bleue", "Un disque", "Un chapeau"],
        answer: 1,
      },
      {
        question: { fr: "Pourquoi la narratrice achète-t-elle le disque ?", TR: "Anlatıcı plağı neden alıyor?", EN: "Why does the narrator buy the record?" },
        options: ["Son père aimait ce disque.", "Elle veut écouter de la musique.", "Il est gratuit.", "Son colocataire le demande."],
        answer: 0,
      },
      {
        question: { fr: "Qui retrouve le téléphone de Lila ?", TR: "Lila'nın telefonunu kim buluyor?", EN: "Who finds Lila's phone?" },
        options: ["Un vendeur", "Un enfant", "La narratrice"],
        answer: 1,
      },
      {
        question: { fr: "Que fait le colocataire de la narratrice le soir ?", TR: "Anlatıcının ev arkadaşı akşam ne yapıyor?", EN: "What does the narrator's flatmate do in the evening?" },
        options: ["Il cuisine.", "Il regarde un match.", "Il écoute des disques.", "Il dort."],
        answer: 1,
      },
    ],
  },
];

export default texts;
