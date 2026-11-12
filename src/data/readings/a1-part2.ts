import type { ReadingText } from "../../domain/types";

const texts: readonly ReadingText[] = [
  {
    id: "reading-demonstratives",
    lessonId: "demonstratives",
    level: "A1",
    title: { TR: "Cumartesi pazarı", EN: "A Saturday at the market" },
    paragraphs: [
      {
        fr: "Ce matin, je vais au marché avec ma mère et mon petit frère Paul. Cette semaine, nous préparons un grand repas pour toute la famille. Ce marché est grand et très joli. Ce samedi, beaucoup de gens sont là. Les marchands parlent fort et les enfants courent. J'aime cette ambiance. Nous avons un panier, une longue liste et beaucoup d'idées pour ce repas. Ce matin, tout le monde est de bonne humeur, et cette belle journée commence très bien.",
        TR: "Bu sabah annem ve küçük kardeşim Paul'le pazara gidiyorum. Bu hafta bütün aile için büyük bir yemek hazırlıyoruz. Bu pazar büyük ve çok güzel. Bu cumartesi çok insan var. Satıcılar yüksek sesle konuşuyor, çocuklar koşuyor. Bu havayı seviyorum. Bir sepetimiz, uzun bir listemiz ve bu yemek için bir sürü fikrimiz var. Bu sabah herkes neşeli ve bu güzel gün çok iyi başlıyor.",
        EN: "This morning I am going to the market with my mother and my little brother Paul. This week we are preparing a big meal for the whole family. This market is big and very pretty. This Saturday, a lot of people are here. The sellers talk loudly and the children run. I like this atmosphere. We have a basket, a long list and many ideas for this meal. This morning, everyone is in a good mood, and this beautiful day starts very well.",
      },
      {
        fr: "À cet étal, un vieux monsieur vend des fruits. Ma mère regarde ces pommes et ces poires. « Ces pommes sont petites, mais elles sont très bonnes », dit le marchand. « Cette poire est mûre aussi. Vous aimez ce fruit ? » Ma mère sourit et elle achète ces fruits pour le dessert. Paul regarde cette grosse orange, mais il ne demande rien. Cet enfant est timide, et cette timidité est adorable.",
        TR: "Bu tezgâhta yaşlı bir bey meyve satıyor. Annem bu elmalara ve bu armutlara bakıyor. “Bu elmalar küçük ama çok lezzetli” diyor satıcı. “Bu armut da olgun. Bu meyveyi seviyor musunuz?” Annem gülümsüyor ve tatlı için bu meyveleri alıyor. Paul bu iri portakala bakıyor ama hiçbir şey istemiyor. Bu çocuk utangaç ve bu utangaçlık çok sevimli.",
        EN: "At this stall, an old gentleman sells fruit. My mother looks at these apples and these pears. “These apples are small, but they are very good,” says the seller. “This pear is ripe too. Do you like this fruit?” My mother smiles and buys these fruits for dessert. Paul looks at this big orange, but he does not ask for anything. This child is shy, and this shyness is adorable.",
      },
      {
        fr: "Ensuite, nous visitons cet étal de légumes. Cette salade est fraîche, ces tomates sont rouges et ces carottes sont énormes. Ma mère n'aime pas ce prix, mais elle aime cet homme gentil. Il donne un bonbon à mon petit frère. Cet enfant adore les bonbons ! Paul dit merci et il mange ce bonbon tout de suite, avec un grand sourire. Cette gentillesse est rare, et ma mère achète tout de même ces légumes pour ce repas.",
        TR: "Sonra bu sebze tezgâhına gidiyoruz. Bu marul taze, bu domatesler kırmızı, bu havuçlar kocaman. Annem bu fiyatı beğenmiyor ama bu kibar adamı beğeniyor. Küçük kardeşime bir şeker veriyor. Bu çocuk şekere bayılıyor! Paul teşekkür ediyor ve bu şekeri hemen yiyor, kocaman bir gülümsemeyle. Bu nezaket nadir ve annem yine de bu sebzeleri bu yemek için alıyor.",
        EN: "Then we visit this vegetable stall. This lettuce is fresh, these tomatoes are red and these carrots are huge. My mother does not like this price, but she likes this kind man. He gives a sweet to my little brother. This child loves sweets! Paul says thank you and eats this sweet right away, with a big smile. This kindness is rare, and my mother buys these vegetables anyway for this meal.",
      },
      {
        fr: "À midi, j'ai faim. Cette boulangerie est célèbre. Je prends ce pain, cette baguette et ces croissants. « Ce pain est chaud ! » dit Paul. Nous mangeons ce croissant ensemble. Cet instant est délicieux. Ma mère aime ce café aussi : elle prend un petit café et elle regarde ces gens heureux. Elle adore ce marché et elle vient chaque semaine. Ce café est petit, cette terrasse est ensoleillée et ces tables sont toujours pleines.",
        TR: "Öğlen acıkıyorum. Bu fırın ünlü. Bu ekmeği, bu bageti ve bu kruvasanları alıyorum. “Bu ekmek sıcak!” diyor Paul. Bu kruvasanı birlikte yiyoruz. Bu an çok lezzetli. Annem bu kahveyi de seviyor: küçük bir kahve içiyor ve bu mutlu insanlara bakıyor. Bu pazara bayılıyor ve her hafta geliyor. Bu kafe küçük, bu teras güneşli ve bu masalar hep dolu.",
        EN: "At noon, I am hungry. This bakery is famous. I take this bread, this baguette and these croissants. “This bread is hot!” says Paul. We eat this croissant together. This moment is delicious. My mother likes this coffee too: she has a small coffee and watches these happy people. She loves this market and she comes every week. This café is small, this terrace is sunny and these tables are always full.",
      },
      {
        fr: "Cette semaine est spéciale, car mon père a un anniversaire. Son anniversaire est ce soir ! Nous allons préparer un dîner, un gâteau et une surprise. Ma grand-mère vient aussi cet après-midi. Elle apporte cette vieille recette de famille. Cette recette est un trésor : elle est très bonne, mais elle est difficile. Cette semaine, nous préparons aussi ces plats : cette soupe, ce poulet et cette tarte.",
        TR: "Bu hafta özel, çünkü babamın doğum günü var. Doğum günü bu akşam! Bir akşam yemeği, bir pasta ve bir sürpriz hazırlayacağız. Büyükannem de bu öğleden sonra geliyor. Bu eski aile tarifini getiriyor. Bu tarif bir hazine: çok lezzetli ama zor. Bu hafta ayrıca şu yemekleri de hazırlıyoruz: bu çorba, bu tavuk ve bu tart.",
        EN: "This week is special, because my father has a birthday. His birthday is this evening! We are going to prepare a dinner, a cake and a surprise. My grandmother is coming too this afternoon. She brings this old family recipe. This recipe is a treasure: it is very good, but it is difficult. This week we are also preparing these dishes: this soup, this chicken and this tart.",
      },
      {
        fr: "Cet après-midi, nous rentrons à la maison. Cette cuisine est petite, mais cet endroit est chaleureux. Je prépare cette salade, ma mère prépare ce gâteau et Paul mange ces bonbons ! Ma grand-mère regarde ces légumes et elle dit : « Ces légumes sont parfaits. » Nous travaillons ensemble avec joie, et cette journée passe vite. Cet après-midi, ces heures sont calmes, et ces odeurs de cuisine remplissent cette petite maison.",
        TR: "Bu öğleden sonra eve dönüyoruz. Bu mutfak küçük ama bu yer çok sıcak. Ben bu salatayı hazırlıyorum, annem bu pastayı hazırlıyor, Paul de bu şekerleri yiyor! Büyükannem bu sebzelere bakıp şöyle diyor: “Bu sebzeler mükemmel.” Neşeyle birlikte çalışıyoruz ve bu gün çabuk geçiyor. Bu öğleden sonra bu saatler sakin ve bu yemek kokuları bu küçük evi dolduruyor.",
        EN: "This afternoon, we go back home. This kitchen is small, but this place is warm. I prepare this salad, my mother prepares this cake and Paul eats these sweets! My grandmother looks at these vegetables and says: “These vegetables are perfect.” We work together happily, and this day goes by quickly. This afternoon, these hours are calm, and these cooking smells fill this small house.",
      },
      {
        fr: "Ce soir, toute la famille arrive. Mon père ouvre cette porte et il voit ces fleurs, ce gâteau et ces cadeaux. Il est très heureux. Nous chantons, nous rions et nous mangeons. Cette fête est simple, mais ces moments sont précieux. Cette année, je vais écrire ce souvenir dans mon cahier. J'aime cette famille. Ce soir, cet instant est mon plus beau cadeau.",
        TR: "Bu akşam bütün aile geliyor. Babam bu kapıyı açıyor ve bu çiçekleri, bu pastayı ve bu hediyeleri görüyor. Çok mutlu. Şarkı söylüyoruz, gülüyoruz ve yemek yiyoruz. Bu kutlama sade ama bu anlar çok değerli. Bu yıl bu anıyı defterime yazacağım. Bu aileyi seviyorum. Bu akşam bu an en güzel hediyem.",
        EN: "This evening, the whole family arrives. My father opens this door and sees these flowers, this cake and these gifts. He is very happy. We sing, we laugh and we eat. This party is simple, but these moments are precious. This year, I am going to write this memory in my notebook. I love this family. This evening, this moment is my best gift.",
      },
    ],
    questions: [
      {
        question: { fr: "Avec qui la narratrice va-t-elle au marché ?", TR: "Anlatıcı pazara kiminle gidiyor?", EN: "Who does the narrator go to the market with?" },
        options: ["Avec sa mère et son petit frère", "Avec son père et sa grand-mère", "Avec ses amis", "Toute seule"],
        answer: 0,
      },
      {
        question: { fr: "Que donne le marchand de légumes à Paul ?", TR: "Sebzeci Paul'e ne veriyor?", EN: "What does the vegetable seller give to Paul?" },
        options: ["Une pomme", "Une orange", "Un bonbon", "Un croissant"],
        answer: 2,
      },
      {
        question: { fr: "Pourquoi cette semaine est-elle spéciale ?", TR: "Bu hafta neden özel?", EN: "Why is this week special?" },
        options: ["Le père a un anniversaire", "L'anniversaire de la mère", "Paul a un cadeau", "La grand-mère part en voyage"],
        answer: 0,
      },
      {
        question: { fr: "Qu'apporte la grand-mère ?", TR: "Büyükanne ne getiriyor?", EN: "What does the grandmother bring?" },
        options: ["Un gâteau", "Des fleurs", "Une vieille recette", "Des fruits"],
        answer: 2,
      },
      {
        question: { fr: "Que va faire la narratrice cette année ?", TR: "Anlatıcı bu yıl ne yapacak?", EN: "What is the narrator going to do this year?" },
        options: ["Cuisiner pour ses amis", "Acheter une maison", "Écrire ce souvenir dans son cahier"],
        answer: 2,
      },
    ],
  },
  {
    id: "reading-partitive",
    lessonId: "partitive",
    level: "A1",
    title: { TR: "Haftalık alışveriş", EN: "The weekly shopping" },
    paragraphs: [
      {
        fr: "Le dimanche matin, je fais les courses pour la semaine. Je suis étudiante et j'habite avec ma colocataire, Inès. Nous mangeons bien, mais nous n'avons pas beaucoup d'argent. À la maison, nous avons du riz et de l'huile, mais nous n'avons pas de pain et pas de lait. Alors je prends un grand sac et une petite liste, et je pars au supermarché.",
        TR: "Pazar sabahları haftalık alışverişi yaparım. Öğrenciyim ve ev arkadaşım Inès'le birlikte yaşıyorum. İyi yeriz ama çok param yok. Evde pirinç ve yağ var ama ekmek ve süt yok. Bu yüzden büyük bir çanta ve küçük bir liste alıp süpermarkete gidiyorum.",
        EN: "On Sunday morning, I do the shopping for the week. I am a student and I live with my flatmate, Inès. We eat well, but we do not have a lot of money. At home, we have some rice and some oil, but we have no bread and no milk. So I take a big bag and a small list, and I leave for the supermarket.",
      },
      {
        fr: "Au supermarché, je commence par les fruits et les légumes. J'achète des pommes, des carottes et de la salade. Je prends aussi du citron pour le thé. Inès adore les tomates, alors je prends un kilo de tomates. Je ne prends pas de poivrons, car elle n'aime pas ça. Nous mangeons beaucoup de légumes, et nous ne mangeons pas de plats tout prêts.",
        TR: "Süpermarkette meyve ve sebzelerle başlıyorum. Elma, havuç ve marul alıyorum. Çay için biraz da limon alıyorum. Inès domatese bayılır, bu yüzden bir kilo domates alıyorum. Biber almıyorum, çünkü o sevmiyor. Çok sebze yeriz ve hazır yemek yemeyiz.",
        EN: "At the supermarket, I start with the fruit and vegetables. I buy apples, carrots and lettuce. I also take some lemon for tea. Inès loves tomatoes, so I take a kilo of tomatoes. I do not take any peppers, because she does not like them. We eat a lot of vegetables, and we do not eat ready-made meals.",
      },
      {
        fr: "Ensuite, je vais au rayon des produits laitiers. Je prends du lait, du fromage et de la crème. Le matin, Inès boit du café avec du lait, et moi, je bois du thé avec du sucre. Je ne prends pas de beurre, mais je prends de la confiture, parce que nous mangeons de la confiture au petit déjeuner. Je prends aussi des yaourts et des œufs.",
        TR: "Sonra süt ürünleri reyonuna gidiyorum. Süt, peynir ve krema alıyorum. Sabahları Inès sütlü kahve içer, ben ise şekerli çay içerim. Tereyağı almıyorum ama reçel alıyorum, çünkü kahvaltıda reçel yeriz. Yoğurt ve yumurta da alıyorum.",
        EN: "Next, I go to the dairy section. I take some milk, some cheese and some cream. In the morning, Inès drinks coffee with milk, and I drink tea with sugar. I do not take any butter, but I take some jam, because we eat jam for breakfast. I also take yoghurts and eggs.",
      },
      {
        fr: "Au rayon viande, je prends du poulet et du poisson. Je ne mange pas beaucoup de viande, seulement un peu de poulet le dimanche. Ma colocataire mange du poisson souvent. Après, je choisis les boissons : de l'eau, du jus d'orange et un peu de limonade pour les amis. Nous ne buvons pas de soda, car c'est trop sucré. Je ne prends pas de café, parce que nous avons déjà du café à la maison.",
        TR: "Et reyonunda tavuk ve balık alıyorum. Çok et yemem, yalnızca pazarları biraz tavuk yerim. Ev arkadaşım sık sık balık yer. Sonra içecekleri seçiyorum: su, portakal suyu ve arkadaşlar için biraz limonata. Gazlı içecek içmeyiz, çünkü çok şekerli. Kahve almıyorum, çünkü evde zaten kahve var.",
        EN: "In the meat section, I take some chicken and some fish. I do not eat a lot of meat, only a little chicken on Sunday. My flatmate eats fish often. After that, I choose the drinks: water, orange juice and a little lemonade for our friends. We do not drink fizzy drinks, because they are too sweet. I do not take any coffee, because we already have some coffee at home.",
      },
      {
        fr: "À midi, je prépare le déjeuner. Je fais de la soupe avec des légumes, de l'oignon et de l'ail. Je mets un peu de sel et un peu de poivre. Inès prépare des pâtes avec de la sauce tomate et du fromage. Nous mangeons avec du pain frais. Nous n'avons plus de pain, donc Inès va à la boulangerie. Elle achète de la baguette et elle prend aussi du gâteau pour le soir.",
        TR: "Öğlen yemeği hazırlıyorum. Sebzeli, soğanlı ve sarımsaklı bir çorba yapıyorum. Biraz tuz ve biraz karabiber koyuyorum. Inès domates soslu ve peynirli makarna hazırlıyor. Taze ekmekle yiyoruz. Ekmeğimiz kalmadı, bu yüzden Inès fırına gidiyor. Baget alıyor, akşam için de pasta alıyor.",
        EN: "At noon, I prepare lunch. I make soup with vegetables, onion and garlic. I put in a little salt and a little pepper. Inès prepares pasta with tomato sauce and cheese. We eat with fresh bread. We have no more bread, so Inès goes to the bakery. She buys some baguette and she also takes some cake for the evening.",
      },
      {
        fr: "Ce soir, des amis arrivent. Nous allons faire du gâteau, mais je n'ai pas de farine. Inès a de la farine, des œufs et du chocolat. Nous faisons un gâteau au chocolat avec de la crème. Nous avons de la chance : nous avons de bons amis, de la musique et de la bonne humeur. Je ne mets pas trop de sucre, parce que mes amis n'aiment pas les desserts très sucrés.",
        TR: "Bu akşam arkadaşlar geliyor. Pasta yapacağız ama benim unum yok. Inès'in unu, yumurtası ve çikolatası var. Kremalı bir çikolatalı pasta yapıyoruz. Şanslıyız: iyi arkadaşlarımız, müziğimiz ve neşemiz var. Çok şeker koymuyorum, çünkü arkadaşlarım çok tatlı tatlıları sevmez.",
        EN: "This evening, friends are coming. We are going to make a cake, but I have no flour. Inès has some flour, some eggs and some chocolate. We make a chocolate cake with cream. We are lucky: we have good friends, some music and a good mood. I do not put in too much sugar, because my friends do not like very sweet desserts.",
      },
      {
        fr: "Le soir, nos amis mangent du gâteau et boivent du thé. Nous parlons de la semaine. Je n'ai pas d'examen, donc je suis calme. Avec de l'organisation, du temps et un peu d'argent, nous mangeons bien. Cette liste de courses est vraiment utile : avec de la patience, on fait de bons repas sans dépenser trop d'argent.",
        TR: "Akşam arkadaşlarımız pasta yiyor ve çay içiyor. Haftadan söz ediyoruz. Sınavım yok, bu yüzden sakinim. Düzen, zaman ve biraz parayla iyi yiyoruz. Bu alışveriş listesi gerçekten yararlı: sabırla, çok para harcamadan güzel yemekler yapılıyor.",
        EN: "In the evening, our friends eat cake and drink tea. We talk about the week. I have no exam, so I am calm. With some organisation, some time and a little money, we eat well. This shopping list is really useful: with some patience, you make good meals without spending too much money.",
      },
    ],
    questions: [
      {
        question: { fr: "Avec qui la narratrice habite-t-elle ?", TR: "Anlatıcı kiminle yaşıyor?", EN: "Who does the narrator live with?" },
        options: ["Avec sa mère", "Toute seule", "Avec son frère", "Avec sa colocataire Inès"],
        answer: 3,
      },
      {
        question: { fr: "Qu'est-ce que la narratrice ne prend pas au supermarché ?", TR: "Anlatıcı süpermarkette ne almıyor?", EN: "What does the narrator not take at the supermarket?" },
        options: ["Du lait", "Du beurre", "Du fromage", "De la confiture"],
        answer: 1,
      },
      {
        question: { fr: "Que boit Inès le matin ?", TR: "Inès sabahları ne içiyor?", EN: "What does Inès drink in the morning?" },
        options: ["Du thé avec du sucre", "De l'eau", "Du jus d'orange", "Du café avec du lait"],
        answer: 3,
      },
      {
        question: { fr: "Pourquoi Inès va-t-elle à la boulangerie ?", TR: "Inès fırına neden gidiyor?", EN: "Why does Inès go to the bakery?" },
        options: ["Le gâteau est fini", "Elles n'ont plus de pain", "Elle aime la baguette chaude", "Ses amis arrivent"],
        answer: 1,
      },
      {
        question: { fr: "Qu'est-ce que la narratrice n'a pas pour le gâteau ?", TR: "Anlatıcının pasta için elinde ne yok?", EN: "What does the narrator not have for the cake?" },
        options: ["Du chocolat", "Des œufs", "De la crème", "De la farine"],
        answer: 3,
      },
    ],
  },
  {
    id: "reading-numbers-time",
    lessonId: "numbers-time",
    level: "A1",
    title: { TR: "Hugo'nun günü", EN: "Hugo's day" },
    paragraphs: [
      {
        fr: "Bonjour, je suis Hugo. J'ai trente-quatre ans et je suis professeur de musique. Aujourd'hui, nous sommes lundi trois mars. Cette journée est normale, mais très longue. Mon réveil sonne à sept heures. À sept heures et quart, je prends un café et du pain. À sept heures et demie, je regarde l'heure : je suis en retard, donc je suis très rapide, car mon bus passe à huit heures moins dix.",
        TR: "Merhaba, ben Hugo. Otuz dört yaşındayım ve müzik öğretmeniyim. Bugün pazartesi, üç mart. Bu gün sıradan ama çok uzun. Çalar saatim yediyi çalıyor. Yediyi çeyrek geçe kahve ve ekmek alıyorum. Yediyi yarımda saate bakıyorum: geç kaldım, bu yüzden çok hızlıyım, çünkü otobüsüm sekize on kala geliyor.",
        EN: "Hello, I am Hugo. I am thirty-four years old and I am a music teacher. Today is Monday the third of March. This day is normal, but very long. My alarm rings at seven o'clock. At a quarter past seven, I have a coffee and some bread. At half past seven, I look at the time: I am late, so I am very quick, because my bus comes at ten to eight.",
      },
      {
        fr: "Le bus arrive à l'école à huit heures vingt. Mon premier cours commence à neuf heures. Les élèves sont douze, et ils ont de dix à quatorze ans. Nous travaillons une heure, puis nous faisons une pause de quinze minutes. À dix heures et quart, un autre groupe arrive : ils sont vingt et un ! Le matin passe vite, et à midi, j'ai très faim. Il est midi moins cinq, et la cantine ouvre à midi.",
        TR: "Otobüs okula sekizi yirmi geçe varıyor. İlk dersim dokuzda başlıyor. Öğrenciler on iki kişi ve on ile on dört yaşındalar. Bir saat çalışıyoruz, sonra on beş dakika ara veriyoruz. Ona çeyrek kala başka bir grup geliyor: yirmi bir kişiler! Sabah çabuk geçiyor ve öğlen çok acıkıyorum. Öğlene beş var ve kantin on ikide açılıyor.",
        EN: "The bus arrives at the school at twenty past eight. My first class starts at nine o'clock. There are twelve students, and they are from ten to fourteen years old. We work for one hour, then we take a fifteen-minute break. At a quarter past ten, another group arrives: there are twenty-one of them! The morning goes quickly, and at noon, I am very hungry. It is five to twelve, and the canteen opens at noon.",
      },
      {
        fr: "À midi et demi, je mange à la cantine avec mes collègues. Le menu coûte neuf euros cinquante. Mon collègue Marc, qui a soixante-deux ans, adore parler de sa famille. Sa mère a quatre-vingt-sept ans et son père a quatre-vingt-onze ans ! Ils habitent ensemble. Marc dit que sa famille est très forte. Nous mangeons, nous rions, et à treize heures quinze, nous retournons au travail.",
        TR: "On ikiyi yarımda kantinde iş arkadaşlarımla yemek yiyorum. Menü dokuz avro elli. Altmış iki yaşındaki iş arkadaşım Marc ailesinden söz etmeyi çok sever. Annesi seksen yedi, babası doksan bir yaşında! Birlikte yaşıyorlar. Marc ailesinin çok güçlü olduğunu söylüyor. Yemek yiyoruz, gülüyoruz ve on üçü on beş geçe işe dönüyoruz.",
        EN: "At half past twelve, I eat at the canteen with my colleagues. The menu costs nine euros fifty. My colleague Marc, who is sixty-two years old, loves to talk about his family. His mother is eighty-seven and his father is ninety-one! They live together. Marc says his family is very strong. We eat, we laugh, and at one fifteen, we go back to work.",
      },
      {
        fr: "L'après-midi, nous avons une réunion à quatorze heures. Le directeur parle du concert de l'école. Il est prévu le premier mai, et la liste a déjà cent vingt personnes ! Je suis très content. Le concert commence à dix-huit heures trente. Nous avons soixante-dix chaises, mais nous allons aussi prendre quarante autres chaises. Le directeur note tout avec un grand sourire. La réunion finit à quinze heures dix.",
        TR: "Öğleden sonra saat on dörtte bir toplantımız var. Müdür okulun konserinden söz ediyor. Konser bir mayıs için planlandı ve listede şimdiden yüz yirmi kişi var! Çok memnunum. Konser on sekiz otuzda başlıyor. Yetmiş sandalyemiz var ama kırk sandalye daha alacağız. Müdür her şeyi kocaman bir gülümsemeyle not ediyor. Toplantı on beş on'da bitiyor.",
        EN: "In the afternoon, we have a meeting at two o'clock. The director talks about the school concert. It is planned for the first of May, and the list already has one hundred and twenty people! I am very happy. The concert starts at six thirty in the evening. We have seventy chairs, but we are also going to take forty other chairs. The director notes everything down with a big smile. The meeting ends at ten past three.",
      },
      {
        fr: "À dix-sept heures quarante-cinq, mon travail finit. Je prends le bus de dix-huit heures. Pendant le trajet, je regarde mon téléphone : ma sœur Clara a vingt-neuf ans et son anniversaire est le quatorze juillet. Je vais acheter un cadeau. Un livre coûte vingt-trois euros, un disque coûte dix-neuf euros quatre-vingts. Je préfère le disque, parce que ma sœur adore la musique.",
        TR: "On yedi kırk beşte işim bitiyor. Saat on sekizdeki otobüse biniyorum. Yol boyunca telefonuma bakıyorum: ablam Clara yirmi dokuz yaşında ve doğum günü on dört temmuz. Bir hediye alacağım. Bir kitap yirmi üç avro, bir plak on dokuz avro seksen. Plağı tercih ediyorum, çünkü ablam müziğe bayılıyor.",
        EN: "At a quarter to six, my work finishes. I take the six o'clock bus. During the ride, I look at my phone: my sister Clara is twenty-nine years old and her birthday is on the fourteenth of July. I am going to buy a gift. A book costs twenty-three euros, a record costs nineteen euros eighty. I prefer the record, because my sister loves music.",
      },
      {
        fr: "À dix-neuf heures, je rentre à la maison. Je prépare le dîner : des pâtes et une salade. Mon voisin, un vieux monsieur de quatre-vingt-trois ans, vient parfois manger avec moi. Ce soir, il arrive à dix-neuf heures trente. Nous mangeons et nous parlons de sa vie. Il dit qu'il a toujours vingt ans de cœur, et que le temps passe trop vite.",
        TR: "On dokuzda eve dönüyorum. Akşam yemeğini hazırlıyorum: makarna ve salata. Komşum, seksen üç yaşında yaşlı bir bey, ara sıra benimle yemek yemeye gelir. Bu akşam on dokuz otuzda geliyor. Yemek yiyoruz ve hayatından söz ediyoruz. Hâlâ yüreğinde yirmi yaşında olduğunu ve zamanın çok çabuk geçtiğini söylüyor.",
        EN: "At seven o'clock, I go back home. I prepare dinner: pasta and a salad. My neighbour, an old gentleman of eighty-three, sometimes comes to eat with me. This evening, he arrives at half past seven. We eat and we talk about his life. He says he is still twenty at heart, and that time goes by too fast.",
      },
      {
        fr: "À vingt-deux heures, je joue un peu de piano. À vingt-deux heures trente, je regarde le calendrier : demain, nous sommes mardi quatre mars. J'ai trois cours, une réunion et un repas avec ma sœur. À vingt-trois heures moins le quart, je ferme mon livre. À minuit, je dors déjà. Ma vie est simple, mais j'aime chaque heure de ma journée. Demain, mon réveil sonne encore à sept heures, et la journée recommence.",
        TR: "Yirmi ikide biraz piyano çalıyorum. Yirmi iki otuzda takvime bakıyorum: yarın salı, dört mart. Üç dersim, bir toplantım ve ablamla bir yemeğim var. Yirmi üçe çeyrek kala kitabımı kapatıyorum. Gece yarısı çoktan uyuyorum. Hayatım basit ama günümün her saatini seviyorum. Yarın çalar saatim yine yedide çalıyor ve gün yeniden başlıyor.",
        EN: "At ten o'clock, I play a little piano. At half past ten, I look at the calendar: tomorrow is Tuesday the fourth of March. I have three classes, a meeting and a meal with my sister. At a quarter to eleven, I close my book. At midnight, I am already asleep. My life is simple, but I love every hour of my day. Tomorrow, my alarm rings again at seven o'clock, and the day starts again.",
      },
    ],
    questions: [
      {
        question: { fr: "Quel est le métier de Hugo ?", TR: "Hugo'nun mesleği nedir?", EN: "What is Hugo's job?" },
        options: ["Médecin", "Directeur d'école", "Professeur de musique", "Chauffeur de bus"],
        answer: 2,
      },
      {
        question: { fr: "À quelle heure commence le premier cours ?", TR: "İlk ders saat kaçta başlıyor?", EN: "What time does the first class start?" },
        options: ["À neuf heures", "À huit heures vingt", "À huit heures", "À dix heures et quart"],
        answer: 0,
      },
      {
        question: { fr: "Quel âge a le père de Marc ?", TR: "Marc'ın babası kaç yaşında?", EN: "How old is Marc's father?" },
        options: ["Soixante-deux ans", "Quatre-vingt-sept ans", "Quatre-vingt-onze ans", "Quatre-vingt-trois ans"],
        answer: 2,
      },
      {
        question: { fr: "Quel cadeau préfère Hugo pour sa sœur ?", TR: "Hugo ablası için hangi hediyeyi tercih ediyor?", EN: "Which gift does Hugo prefer for his sister?" },
        options: ["Un livre", "Un disque", "Un piano"],
        answer: 1,
      },
      {
        question: { fr: "Que fait Hugo à vingt-deux heures ?", TR: "Hugo saat yirmi ikide ne yapıyor?", EN: "What does Hugo do at ten in the evening?" },
        options: ["Il dort", "Il prend le bus", "Il joue du piano", "Il prépare le dîner"],
        answer: 2,
      },
    ],
  },
  {
    id: "reading-modal-verbs",
    lessonId: "modal-verbs",
    level: "A1",
    title: { TR: "Cumartesi akşamı için bir parti", EN: "A party for Saturday night" },
    paragraphs: [
      {
        fr: "Je suis Sofia et j'ai vingt-huit ans. Samedi soir, je veux organiser une petite fête pour mes amis. Je veux inviter beaucoup de personnes, mais je ne peux pas avoir trop d'invités, parce que mon appartement est petit. Nous pouvons être dix ou douze, pas plus. Je dois donc choisir avec attention, et ce n'est pas facile : j'ai tant d'amis que je voudrais voir ! Je peux écrire une longue liste, mais je dois garder seulement les noms les plus importants.",
        TR: "Ben Sofia, yirmi sekiz yaşındayım. Cumartesi akşamı arkadaşlarım için küçük bir parti vermek istiyorum. Çok kişiyi davet etmek istiyorum ama çok fazla davetli olamaz, çünkü dairem küçük. On ya da on iki kişi olabiliriz, daha fazla değil. Bu yüzden dikkatle seçmeliyim ve bu kolay değil: görmek istediğim o kadar çok arkadaşım var ki! Uzun bir liste yazabilirim ama yalnızca en önemli isimleri tutmak zorundayım.",
        EN: "I am Sofia and I am twenty-eight years old. On Saturday evening, I want to organise a small party for my friends. I want to invite a lot of people, but I cannot have too many guests, because my flat is small. We can be ten or twelve, no more. So I have to choose carefully, and it is not easy: I have so many friends I would like to see! I can write a long list, but I have to keep only the most important names.",
      },
      {
        fr: "Je téléphone à Karim. « Allô Karim, tu peux venir samedi ? — Je voudrais bien, mais je dois travailler jusqu'à six heures. — Tu peux venir après le travail ? — Oui, je peux arriver à sept heures et demie. Qu'est-ce que tu veux comme boisson ? — Je ne veux rien, merci. — Alors, tu peux apporter du jus d'orange si tu veux. — D'accord, je peux faire ça ! »",
        TR: "Karim'i arıyorum. “Alo Karim, cumartesi gelebilir misin? — Çok isterdim ama altıya kadar çalışmak zorundayım. — İşten sonra gelebilir misin? — Evet, yediyi yarımda gelebilirim. İçecek olarak ne istersin? — Hiçbir şey istemem, sağ ol. — O zaman istersen portakal suyu getirebilirsin. — Tamam, onu yapabilirim!”",
        EN: "I phone Karim. “Hello Karim, can you come on Saturday? — I would like to, but I have to work until six. — Can you come after work? — Yes, I can arrive at half past seven. What do you want to drink? — I do not want anything, thanks. — Then you can bring some orange juice if you want. — OK, I can do that!”",
      },
      {
        fr: "Julie ne veut pas manger de viande. Elle est végétarienne, elle ne mange pas de viande. Je dois donc préparer des plats pour elle aussi. Elle peut manger du fromage, des légumes et de la salade. Elle veut aider, mais elle ne peut pas venir tôt : elle doit garder son petit frère jusqu'à huit heures. Je dis à Julie que ce n'est pas grave, et qu'elle peut arriver quand elle veut. Elle peut aussi apporter un dessert végétarien si elle veut.",
        TR: "Julie et yemek istemiyor. Vejetaryen, et yemiyor. Bu yüzden onun için de yemekler hazırlamalıyım. Peynir, sebze ve salata yiyebilir. Yardım etmek istiyor ama erken gelemez: sekize kadar küçük kardeşine bakmak zorunda. Julie'ye bunun önemli olmadığını ve istediği zaman gelebileceğini söylüyorum. İstersen vejetaryen bir tatlı da getirebileceğini ekliyorum.",
        EN: "Julie does not want to eat meat. She is a vegetarian, she does not eat meat. So I have to prepare dishes for her too. She can eat cheese, vegetables and salad. She wants to help, but she cannot come early: she has to look after her little brother until eight o'clock. I tell Julie it does not matter, and that she can arrive whenever she wants. She can also bring a vegetarian dessert if she wants.",
      },
      {
        fr: "Mes amis veulent danser, bien sûr. Nous pouvons mettre de la musique, mais nous devons faire attention aux voisins. Mon voisin, monsieur Petit, ne peut pas dormir quand le bruit est trop fort. Je veux être gentille avec mon voisin, alors je vais parler à monsieur Petit. Je peux aussi inviter monsieur Petit à la fête : il veut peut-être venir !",
        TR: "Arkadaşlarım elbette dans etmek istiyor. Müzik açabiliriz ama komşulara dikkat etmeliyiz. Komşum Bay Petit, gürültü çok yüksek olunca uyuyamaz. Komşuma karşı nazik olmak istiyorum, bu yüzden Bay Petit'yle konuşacağım. Onu partiye de davet edebilirim: belki gelmek ister!",
        EN: "My friends want to dance, of course. We can play some music, but we have to be careful with the neighbours. My neighbour, Mr Petit, cannot sleep when the noise is too loud. I want to be kind to my neighbour, so I am going to talk to Mr Petit. I can also invite Mr Petit to the party: maybe he wants to come!",
      },
      {
        fr: "Je dois acheter beaucoup de choses. Je veux faire un gâteau, mais je ne peux pas cuisiner seule. Mes parents veulent aider : ma mère peut préparer la salade et mon père veut apporter des chaises. Ils doivent arriver à cinq heures. Mon frère Adam veut venir aussi, mais il doit étudier pour un examen. Il dit qu'il peut venir seulement une heure, et je suis d'accord. Nous voulons tous une belle soirée, et ensemble, nous pouvons réussir.",
        TR: "Bir sürü şey almam gerekiyor. Pasta yapmak istiyorum ama tek başıma yemek yapamam. Ailem yardım etmek istiyor: annem salatayı hazırlayabilir, babam sandalye getirmek istiyor. Beşte gelmeleri gerekiyor. Kardeşim Adam da gelmek istiyor ama bir sınav için çalışmak zorunda. Yalnızca bir saat gelebileceğini söylüyor ve ben kabul ediyorum. Hepimiz güzel bir akşam istiyoruz ve birlikte başarabiliriz.",
        EN: "I have to buy a lot of things. I want to make a cake, but I cannot cook alone. My parents want to help: my mother can prepare the salad and my father wants to bring chairs. They have to arrive at five o'clock. My brother Adam wants to come too, but he has to study for an exam. He says he can come for only one hour, and I agree. We all want a lovely evening, and together we can succeed.",
      },
      {
        fr: "Samedi après-midi, mes amis Léo et Anna téléphonent. Ils veulent venir, mais ils doivent prendre le train, et le train est en retard. Ils ne peuvent pas arriver avant neuf heures. Je ne veux pas commencer sans eux, alors nous pouvons attendre un peu. Karim propose de jouer aux cartes. Tout le monde peut jouer, et personne ne doit être triste.",
        TR: "Cumartesi öğleden sonra arkadaşlarım Léo ve Anna arıyor. Gelmek istiyorlar ama trene binmek zorundalar ve tren gecikmeli. Dokuzdan önce varamazlar. Onlarsız başlamak istemiyorum, o yüzden biraz bekleyebiliriz. Karim kağıt oynamayı öneriyor. Herkes oynayabilir ve kimsenin üzgün olması gerekmiyor.",
        EN: "On Saturday afternoon, my friends Léo and Anna phone. They want to come, but they have to take the train, and the train is late. They cannot arrive before nine o'clock. I do not want to start without them, so we can wait a little. Karim suggests playing cards. Everyone can play, and nobody has to be sad.",
      },
      {
        fr: "À neuf heures, tout le monde est là. Qui veut du gâteau ? Chacun peut choisir sa part. Nous voulons danser, parler et rire. Monsieur Petit vient aussi : il veut seulement une heure, et il reste jusqu'à minuit ! Je dois dire merci à mes amis. Demain, nous devons ranger l'appartement, mais ce soir nous voulons seulement profiter de ce bon moment.",
        TR: "Dokuzda herkes burada. Kim pasta ister? Herkes kendi dilimini seçebilir. Dans etmek, konuşmak ve gülmek istiyoruz. Bay Petit de geliyor: yalnızca bir saat istiyor ama gece yarısına kadar kalıyor! Arkadaşlarıma teşekkür etmeliyim. Yarın daireyi toplamak zorundayız ama bu akşam yalnızca bu güzel anın tadını çıkarmak istiyoruz.",
        EN: "At nine o'clock, everyone is here. Who wants some cake? Everyone can choose their slice. We want to dance, talk and laugh. Mr Petit comes too: he wants only one hour, and he stays until midnight! I have to say thank you to my friends. Tomorrow, we have to tidy the flat, but tonight we only want to enjoy this good moment.",
      },
    ],
    questions: [
      {
        question: { fr: "Pourquoi Sofia ne peut-elle pas inviter trop de personnes ?", TR: "Sofia neden çok fazla kişiyi davet edemiyor?", EN: "Why can Sofia not invite too many people?" },
        options: ["Son appartement est petit", "Elle n'a pas d'argent", "Ses amis sont occupés"],
        answer: 0,
      },
      {
        question: { fr: "Que peut apporter Karim ?", TR: "Karim ne getirebilir?", EN: "What can Karim bring?" },
        options: ["Un gâteau", "Des chaises", "De la musique", "Du jus d'orange"],
        answer: 3,
      },
      {
        question: { fr: "Pourquoi Julie ne peut-elle pas venir tôt ?", TR: "Julie neden erken gelemiyor?", EN: "Why can Julie not come early?" },
        options: ["Elle doit étudier", "Elle doit garder son petit frère", "Elle doit prendre le train", "Elle doit travailler"],
        answer: 1,
      },
      {
        question: { fr: "Que veut faire le père de Sofia ?", TR: "Sofia'nın babası ne yapmak istiyor?", EN: "What does Sofia's father want to do?" },
        options: ["Préparer la salade", "Faire le gâteau", "Parler au voisin", "Apporter des chaises"],
        answer: 3,
      },
      {
        question: { fr: "Combien de temps monsieur Petit reste-t-il à la fête ?", TR: "Bay Petit partide ne kadar kalıyor?", EN: "How long does Mr Petit stay at the party?" },
        options: ["Une heure", "Jusqu'à minuit", "Jusqu'à neuf heures", "Il ne vient pas"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-places-prepositions",
    lessonId: "places-prepositions",
    level: "A1",
    title: { TR: "Lyon'dan bir mektup", EN: "A letter from Lyon" },
    paragraphs: [
      {
        fr: "Salut Ayşe ! Voici une lettre de Lyon, une grande ville en France. Je suis étudiant ici cette année. Je viens de Turquie, d'Istanbul, mais maintenant j'habite à Lyon avec un colocataire, Mathieu. Il vient du Canada, de Montréal, mais ses parents habitent en Italie, à Rome. Notre appartement est petit, mais très agréable, et je veux décrire cet endroit à mon amie.",
        TR: "Selam Ayşe! İşte Lyon'dan bir mektup, Fransa'da büyük bir şehir. Bu yıl burada öğrenciyim. Türkiye'den, İstanbul'dan geliyorum ama şimdi Lyon'da bir ev arkadaşımla, Mathieu'yle yaşıyorum. O Kanada'dan, Montréal'den geliyor ama ailesi İtalya'da, Roma'da yaşıyor. Dairemiz küçük ama çok hoş ve burayı arkadaşıma anlatmak istiyorum.",
        EN: "Hi Ayşe! Here is a letter from Lyon, a big city in France. I am a student here this year. I come from Turkey, from Istanbul, but now I live in Lyon with a flatmate, Mathieu. He comes from Canada, from Montreal, but his parents live in Italy, in Rome. Our flat is small, but very pleasant, and I want to describe this place to my friend.",
      },
      {
        fr: "Notre appartement est dans un vieil immeuble, à côté d'une boulangerie. Dans le salon, je vois un grand canapé. Devant le canapé, nous avons une petite table. Sur la table, je mets mes livres et mon thé. Sous la table, notre chat Biscuit dort toute la journée. Derrière le canapé, une grande fenêtre ouvre sur la rue. Le soir, la lumière entre dans le salon et tout est calme. Dans la cuisine, nous avons une table ronde, et sur la table, un vase bleu.",
        TR: "Dairemiz eski bir binada, bir fırının yanında. Oturma odasında büyük bir kanepe görüyorum. Kanepenin önünde küçük bir masamız var. Masanın üstüne kitaplarımı ve çayımı koyuyorum. Masanın altında kedimiz Biscuit bütün gün uyuyor. Kanepenin arkasında büyük bir pencere sokağa açılıyor. Akşamları ışık oturma odasına giriyor ve her şey sakin. Mutfakta yuvarlak bir masamız var ve masanın üstünde mavi bir vazo duruyor.",
        EN: "Our flat is in an old building, next to a bakery. In the living room, I see a big sofa. In front of the sofa, we have a small table. On the table, I put my books and my tea. Under the table, our cat Biscuit sleeps all day. Behind the sofa, a big window opens onto the street. In the evening, the light comes into the living room and everything is calm. In the kitchen, we have a round table, and on the table, a blue vase.",
      },
      {
        fr: "Ma chambre est petite. Mon lit est entre la fenêtre et l'armoire. Mon bureau est devant le mur. Sur le bureau, j'ai mon ordinateur et une photo de ma famille. Derrière l'ordinateur, je mets une lampe. Dans l'armoire, je range mes vêtements, et sous le lit, je garde ma valise. Mathieu aime ma chambre, mais il préfère sa chambre à côté de la cuisine. Sous la fenêtre, je mets une petite plante.",
        TR: "Odam küçük. Yatağım pencere ile dolabın arasında. Masam duvarın önünde. Masanın üstünde bilgisayarım ve ailemin bir fotoğrafı var. Bilgisayarın arkasına bir lamba koyuyorum. Dolapta kıyafetlerimi yerleştiriyorum, yatağın altında da bavulumu saklıyorum. Mathieu odamı seviyor ama mutfağın yanındaki odasını tercih ediyor. Pencerenin altına küçük bir bitki koyuyorum.",
        EN: "My room is small. My bed is between the window and the wardrobe. My desk is in front of the wall. On the desk, I have my computer and a photo of my family. Behind the computer, I put a lamp. In the wardrobe, I put away my clothes, and under the bed, I keep my suitcase. Mathieu likes my room, but he prefers his room next to the kitchen. Under the window, I put a small plant.",
      },
      {
        fr: "Notre quartier est très agréable. À côté de l'immeuble, je vois un grand parc. La gare est derrière le parc. Entre la banque et la pharmacie, un petit café sert un excellent thé, et je vais souvent à ce café. Le cinéma est à côté du café, et la bibliothèque est derrière le cinéma. Devant la bibliothèque, des étudiants lisent sur l'herbe quand le temps est beau.",
        TR: "Mahallemiz çok hoş. Binanın yanında büyük bir park görüyorum. İstasyon parkın arkasında. Banka ile eczanenin arasında küçük bir kafe mükemmel bir çay servis ediyor, ben de bu kafeye sık sık gidiyorum. Sinema kafenin yanında, kütüphane de sinemanın arkasında. Kütüphanenin önünde, hava güzel olunca öğrenciler çimenlerin üstünde okuyor.",
        EN: "Our neighbourhood is very pleasant. Next to the building, I see a big park. The station is behind the park. Between the bank and the pharmacy, a small café serves excellent tea, and I often go to this café. The cinema is next to the café, and the library is behind the cinema. In front of the library, students read on the grass when the weather is nice.",
      },
      {
        fr: "À l'université, mes amis viennent de pays différents. Ana vient du Brésil, Yuki vient du Japon, Lena vient d'Allemagne, Tom vient des États-Unis et Sara vient d'Espagne. Nous habitons en France, mais nous parlons beaucoup de nos pays. Devant l'université, nous mangeons ensemble à midi. Tom est toujours à côté de Sara, et moi, je suis entre Yuki et Ana.",
        TR: "Üniversitede arkadaşlarım farklı ülkelerden geliyor. Ana Brezilya'dan, Yuki Japonya'dan, Lena Almanya'dan, Tom Amerika Birleşik Devletleri'nden, Sara da İspanya'dan geliyor. Fransa'da yaşıyoruz ama ülkelerimizden çok söz ediyoruz. Üniversitenin önünde öğlenleri birlikte yemek yiyoruz. Tom hep Sara'nın yanında, ben de Yuki ile Ana'nın arasındayım.",
        EN: "At the university, my friends come from different countries. Ana comes from Brazil, Yuki comes from Japan, Lena comes from Germany, Tom comes from the United States and Sara comes from Spain. We live in France, but we talk a lot about our countries. In front of the university, we eat together at noon. Tom is always next to Sara, and I am between Yuki and Ana.",
      },
      {
        fr: "Le week-end, j'aime voyager. Le mois prochain, je vais en Allemagne, à Berlin, avec Lena. Mathieu va au Canada, à Montréal, pour voir sa famille. Un jour, je veux aller au Japon, à Tokyo, et aux États-Unis, à New York. Tom habite à New York, dans un petit appartement. Sur les photos, son salon est minuscule, mais sa vue sur la ville est magnifique. Sous le balcon, un parc minuscule complète ce joli tableau.",
        TR: "Hafta sonları seyahat etmeyi seviyorum. Gelecek ay Lena'yla Almanya'ya, Berlin'e gidiyorum. Mathieu ailesini görmek için Kanada'ya, Montréal'e gidiyor. Bir gün Japonya'ya, Tokyo'ya ve Amerika Birleşik Devletleri'ne, New York'a gitmek istiyorum. Tom New York'ta küçük bir dairede yaşıyor. Fotoğraflarda oturma odası minicik ama şehre manzarası muhteşem. Balkonun altında minicik bir park bu güzel tabloyu tamamlıyor.",
        EN: "At the weekend, I like to travel. Next month, I am going to Germany, to Berlin, with Lena. Mathieu is going to Canada, to Montreal, to see his family. One day, I want to go to Japan, to Tokyo, and to the United States, to New York. Tom lives in New York, in a small flat. In the photos, his living room is tiny, but his view of the city is magnificent. Under the balcony, a tiny park completes this pretty picture.",
      },
      {
        fr: "Tu habites toujours à Ankara, en Turquie ? Tu peux venir à Lyon en été. Tu peux dormir sur le canapé, devant la fenêtre, et Biscuit dort sous le canapé. Nous allons visiter la ville, le parc et le café entre la banque et la pharmacie. Je suis sûr que tu vas aimer cet endroit. À bientôt ! Emre",
        TR: "Hâlâ Türkiye'de, Ankara'da mı yaşıyorsun? Yazın Lyon'a gelebilirsin. Pencerenin önündeki kanepede uyuyabilirsin, Biscuit de kanepenin altında uyur. Şehri, parkı ve banka ile eczanenin arasındaki kafeyi gezeceğiz. Bu yeri seveceğinden eminim. Yakında görüşürüz! Emre",
        EN: "Do you still live in Ankara, in Turkey? You can come to Lyon in the summer. You can sleep on the sofa, in front of the window, and Biscuit sleeps under the sofa. We are going to visit the city, the park and the café between the bank and the pharmacy. I am sure you are going to like this place. See you soon! Emre",
      },
    ],
    questions: [
      {
        question: { fr: "D'où vient Emre ?", TR: "Emre nereli?", EN: "Where does Emre come from?" },
        options: ["De Turquie", "Du Canada", "D'Italie", "Du Japon"],
        answer: 0,
      },
      {
        question: { fr: "Où dort le chat Biscuit ?", TR: "Kedi Biscuit nerede uyuyor?", EN: "Where does the cat Biscuit sleep?" },
        options: ["Sur le canapé", "Sous le lit", "Sous la table", "Devant la fenêtre"],
        answer: 2,
      },
      {
        question: { fr: "Où se trouve le petit café ?", TR: "Küçük kafe nerede?", EN: "Where is the small café?" },
        options: ["Entre la banque et la pharmacie", "Derrière le cinéma", "À côté de la gare"],
        answer: 0,
      },
      {
        question: { fr: "D'où vient Tom ?", TR: "Tom nereden geliyor?", EN: "Where does Tom come from?" },
        options: ["Du Brésil", "D'Espagne", "Des États-Unis", "D'Allemagne"],
        answer: 2,
      },
      {
        question: { fr: "Où va Emre le mois prochain ?", TR: "Emre gelecek ay nereye gidiyor?", EN: "Where is Emre going next month?" },
        options: ["En Allemagne", "Au Canada", "Au Japon", "En Italie"],
        answer: 0,
      },
    ],
  },
  {
    id: "reading-reflexive-verbs",
    lessonId: "reflexive-verbs",
    level: "A1",
    title: { TR: "Hemşire Camille'in sabahı", EN: "A nurse's morning" },
    paragraphs: [
      {
        fr: "Je m'appelle Camille, j'ai vingt-six ans et je suis infirmière. Mon travail commence très tôt, alors ma routine est stricte. Mon réveil sonne à cinq heures et demie. Je me réveille toujours difficilement ! Je ne me lève pas tout de suite : je reste cinq minutes au lit, avec les yeux fermés, et je pense à la journée. Ensuite, je me lève et la machine commence. Je me répète chaque matin que cette routine est difficile, mais je m'habitue.",
        TR: "Adım Camille, yirmi altı yaşındayım ve hemşireyim. İşim çok erken başlıyor, bu yüzden günlük düzenim çok sıkı. Çalar saatim beş buçukta çalıyor. Her zaman zor uyanıyorum! Hemen kalkmıyorum: gözlerim kapalı, beş dakika yatakta kalıyor ve günü düşünüyorum. Sonra kalkıyorum ve makine çalışmaya başlıyor. Her sabah bu düzenin zor olduğunu kendime tekrarlıyorum ama alışıyorum.",
        EN: "My name is Camille, I am twenty-six years old and I am a nurse. My work starts very early, so my routine is strict. My alarm rings at half past five. I always wake up with difficulty! I do not get up right away: I stay in bed for five minutes, with my eyes closed, and I think about the day. Then I get up and the machine starts. Every morning I tell myself that this routine is difficult, but I get used to it.",
      },
      {
        fr: "Je me lave le visage, je me brosse les dents et je m'habille. Je mets un pantalon blanc et une chemise bleue. Mon chat, Pixel, se réveille aussi. Il s'étire, il se promène dans l'appartement et il regarde avec un air fatigué. Il n'aime pas se lever si tôt, tout comme sa maîtresse ! Je prépare un café, et nous nous reposons un petit moment dans la cuisine.",
        TR: "Yüzümü yıkıyorum, dişlerimi fırçalıyorum ve giyiniyorum. Beyaz bir pantolon ve mavi bir gömlek giyiyorum. Kedim Pixel de uyanıyor. Geriniyor, evin içinde dolaşıyor ve yorgun bir ifadeyle bakıyor. O da bu kadar erken kalkmayı sevmiyor, tıpkı sahibi gibi! Bir kahve hazırlıyorum ve mutfakta kısa bir süre dinleniyoruz.",
        EN: "I wash my face, I brush my teeth and I get dressed. I put on white trousers and a blue shirt. My cat, Pixel, wakes up too. He stretches, he walks around the flat and he looks around with a tired face. He does not like to get up so early, just like his owner! I make a coffee, and we rest for a little while in the kitchen.",
      },
      {
        fr: "Je me dépêche, car mon train passe à six heures vingt. À la gare, mon amie Laura attend déjà. Elle s'appelle Laura et elle est aussi infirmière. Nous nous retrouvons chaque matin. Nous nous disons bonjour, nous nous racontons notre soirée et nous nous plaignons un peu du froid. Dans le train, Laura s'endort souvent, mais je ne m'endors jamais. Je me prépare mentalement pour la journée et je regarde le paysage.",
        TR: "Acele ediyorum, çünkü trenim altıyı yirmi geçe kalkıyor. İstasyonda arkadaşım Laura çoktan bekliyor. Adı Laura ve o da hemşire. Her sabah buluşuyoruz. Günaydın diyoruz, akşamımızı anlatıyoruz ve soğuktan biraz yakınıyoruz. Trende Laura sık sık uyuyakalıyor ama ben hiç uyuyakalmıyorum. Günüm için zihnen hazırlanıyorum ve manzaraya bakıyorum.",
        EN: "I hurry, because my train leaves at twenty past six. At the station, my friend Laura is already waiting. Her name is Laura and she is also a nurse. We meet each other every morning. We say hello to each other, we tell each other about our evening and we complain a little about the cold. On the train, Laura often falls asleep, but I never fall asleep. I get ready mentally for the day and I look at the landscape.",
      },
      {
        fr: "À l'hôpital, nous nous préparons dans le vestiaire. Les patients se réveillent, les médecins se dépêchent et le travail commence. Je m'occupe de dix malades chaque matin. Je me lave les mains très souvent. Parfois, je m'inquiète pour un vieux monsieur qui ne se sent pas bien, alors je reste près de ce monsieur un peu plus longtemps. Les enfants s'amusent dans la salle de jeux.",
        TR: "Hastanede soyunma odasında hazırlanıyoruz. Hastalar uyanıyor, doktorlar acele ediyor ve iş başlıyor. Her sabah on hastayla ilgileniyorum. Ellerimi çok sık yıkıyorum. Bazen kendini iyi hissetmeyen yaşlı bir bey için endişeleniyorum, bu yüzden yanında biraz daha uzun kalıyorum. Çocuklar oyun odasında eğleniyor.",
        EN: "At the hospital, we get ready in the changing room. The patients wake up, the doctors hurry and the work begins. I take care of ten patients every morning. I wash my hands very often. Sometimes, I worry about an old gentleman who does not feel well, so I stay near him a little longer. The children have fun in the play room.",
      },
      {
        fr: "À midi, nous nous reposons un peu. Je ne me repose pas beaucoup, mais je mange vite et je m'arrête cinq minutes. Nous nous racontons nos week-ends et nous nous moquons gentiment de Paul, qui s'endort devant son sandwich. Il se fâche, mais il rit toujours. Nous nous entendons très bien et nous nous aidons beaucoup.",
        TR: "Öğlen biraz dinleniyoruz. Çok dinlenmiyorum ama hızlı yiyorum ve beş dakika duruyorum. Hafta sonlarımızı anlatıyoruz ve sandviçinin önünde uyuyakalan Paul'le nazikçe dalga geçiyoruz. Kızıyor ama hep gülüyor. Çok iyi anlaşıyoruz ve birbirimize çok yardım ediyoruz.",
        EN: "At noon, we rest a little. I do not rest much, but I eat quickly and I stop for five minutes. We tell each other about our weekends and we gently make fun of Paul, who falls asleep in front of his sandwich. He gets angry, but he always laughs. We get along very well and we help each other a lot.",
      },
      {
        fr: "Le soir, je rentre vers dix-sept heures. Je me douche, je me change et je m'allonge un peu. Mon ami Théo vient dîner. Nous nous téléphonons tous les jours, et nous nous disputons rarement. Pixel se couche toujours devant la porte, et il s'impatiente quand Théo arrive en retard. Après le dîner, nous nous promenons un peu au parc, malgré le froid.",
        TR: "Akşam saat on yedi civarında eve dönüyorum. Duş alıyorum, üstümü değiştiriyorum ve biraz uzanıyorum. Arkadaşım Théo yemeğe geliyor. Her gün telefonlaşıyoruz ve nadiren tartışıyoruz. Pixel hep kapının önüne yatıyor ve Théo geç geldiğinde sabırsızlanıyor. Yemekten sonra soğuğa rağmen parkta biraz yürüyoruz.",
        EN: "In the evening, I get home around five o'clock. I take a shower, I change and I lie down for a bit. My friend Théo comes for dinner. We phone each other every day, and we rarely argue. Pixel always lies down in front of the door, and he gets impatient when Théo arrives late. After dinner, we walk a little in the park, despite the cold.",
      },
      {
        fr: "À vingt-deux heures, je me couche. Je m'endors vite, parce que je suis fatiguée. Le week-end, je me lève plus tard, et ce moment est un vrai plaisir ! Et vous, à quelle heure vous levez-vous ? Vous vous réveillez facilement ? Vous vous couchez tôt ou tard ? Chacun a sa routine, et ma routine est simple, mais je me sens bien. Je me promène aussi un peu le dimanche.",
        TR: "Yirmi ikide yatıyorum. Çabuk uykuya dalıyorum, çünkü yorgunum. Hafta sonları daha geç kalkıyorum ve bu an gerçek bir zevk! Peki siz, saat kaçta kalkıyorsunuz? Kolay uyanıyor musunuz? Erken mi yoksa geç mi yatıyorsunuz? Herkesin kendi düzeni var, benimki basit ama kendimi iyi hissediyorum. Pazar günleri de biraz yürüyüşe çıkıyorum.",
        EN: "At ten o'clock, I go to bed. I fall asleep quickly, because I am tired. At the weekend, I get up later, and this moment is a real pleasure! And you, what time do you get up? Do you wake up easily? Do you go to bed early or late? Everyone has their routine, and mine is simple, but I feel good. I also take a little walk on Sundays.",
      },
    ],
    questions: [
      {
        question: { fr: "Quel est le métier de Camille ?", TR: "Camille'in mesleği nedir?", EN: "What is Camille's job?" },
        options: ["Médecin", "Boulangère", "Professeure", "Infirmière"],
        answer: 3,
      },
      {
        question: { fr: "À quelle heure sonne le réveil de Camille ?", TR: "Camille'in çalar saati kaçta çalıyor?", EN: "What time does Camille's alarm ring?" },
        options: ["À six heures vingt", "À cinq heures et demie", "À dix-sept heures", "À vingt-deux heures"],
        answer: 1,
      },
      {
        question: { fr: "Qui s'endort souvent dans le train ?", TR: "Trende kim sık sık uyuyakalıyor?", EN: "Who often falls asleep on the train?" },
        options: ["Camille", "Pixel", "Théo", "Laura"],
        answer: 3,
      },
      {
        question: { fr: "Pourquoi Camille s'inquiète-t-elle parfois à l'hôpital ?", TR: "Camille hastanede bazen neden endişeleniyor?", EN: "Why does Camille sometimes worry at the hospital?" },
        options: ["Un enfant s'amuse trop", "Un vieux monsieur ne se sent pas bien", "Elle est en retard", "Elle se perd"],
        answer: 1,
      },
      {
        question: { fr: "Que fait Camille le week-end ?", TR: "Camille hafta sonları ne yapıyor?", EN: "What does Camille do at the weekend?" },
        options: ["Elle se lève plus tard", "Elle se lève plus tôt", "Elle travaille à l'hôpital"],
        answer: 0,
      },
    ],
  },
  {
    id: "reading-imperative",
    lessonId: "imperative",
    level: "A1",
    title: { TR: "Komşuya bir not", EN: "A note for the house-sitter" },
    paragraphs: [
      {
        fr: "Salut Tom ! Merci beaucoup de garder mon appartement. Je pars en vacances pour une semaine et je veux tout expliquer. Prends un café et lis ce mot lentement, s'il te plaît, parce que chaque détail est important. Ne panique pas : la liste est longue, mais tout est simple. Tu es un ami formidable, et je suis très contente de ta visite.",
        TR: "Selam Tom! Dairemle ilgilendiğin için çok teşekkürler. Bir haftalığına tatile gidiyorum ve her şeyi anlatmak istiyorum. Bir kahve al ve bu notu yavaşça oku lütfen, çünkü her ayrıntı önemli. Panik yapma: liste uzun ama her şey basit. Harika bir arkadaşsın ve ziyaretine çok seviniyorum.",
        EN: "Hi Tom! Thank you very much for looking after my flat. I am going on holiday for a week and I want to explain everything. Have a coffee and read this note slowly, please, because every detail is important. Do not panic: the list is long, but everything is simple. You are a wonderful friend, and I am very happy about your visit.",
      },
      {
        fr: "Commençons par le chat. Mimi mange deux fois par jour. Le matin, ouvre une boîte et donne la nourriture dans son bol. Remplis aussi le bol d'eau. Le soir, répète la même chose. Ne donne pas de lait au chat : le lait est mauvais pour les chats. Joue un peu avec Mimi, car elle adore les petites balles rouges. Sois gentil et patient, elle est timide. Parle doucement et ne cours pas dans l'appartement.",
        TR: "Kediyle başlayalım. Mimi günde iki kez yemek yiyor. Sabah bir kutu aç ve mamayı kabına koy. Su kabını da doldur. Akşam aynı şeyi tekrarla. Kediye süt verme: süt kediler için kötü. Mimi'yle biraz oyna, çünkü küçük kırmızı toplara bayılır. Nazik ve sabırlı ol, o utangaç. Yavaş konuş ve dairenin içinde koşma.",
        EN: "Let us start with the cat. Mimi eats twice a day. In the morning, open a tin and put the food in her bowl. Fill the water bowl too. In the evening, repeat the same thing. Do not give milk to the cat: milk is bad for cats. Play a little with Mimi, because she loves small red balls. Be kind and patient, she is shy. Speak softly and do not run around the flat.",
      },
      {
        fr: "Les plantes maintenant. Arrose les plantes le mardi et le vendredi. Utilise un peu d'eau, pas trop. Regarde bien les feuilles : si elles sont jaunes, attends un jour. Ne touche pas à la grande plante verte du balcon, elle est très fragile. Ouvre la fenêtre de la cuisine le matin, mais ne laisse pas la fenêtre du salon ouverte la nuit. Le chat adore les fenêtres ! Ferme aussi les rideaux le soir et allume la petite lampe.",
        TR: "Şimdi bitkiler. Bitkileri salı ve cuma sula. Biraz su kullan, çok değil. Yapraklara iyi bak: sararmışlarsa bir gün bekle. Balkondaki büyük yeşil bitkiye dokunma, çok hassas. Sabah mutfak penceresini aç ama oturma odasının penceresini geceleyin açık bırakma. Kedi pencerelere bayılır! Akşamları perdeleri de kapat ve küçük lambayı yak.",
        EN: "Now the plants. Water the plants on Tuesday and Friday. Use a little water, not too much. Look carefully at the leaves: if they are yellow, wait a day. Do not touch the big green plant on the balcony, it is very fragile. Open the kitchen window in the morning, but do not leave the living room window open at night. The cat loves windows! Close the curtains too in the evening and turn on the small lamp.",
      },
      {
        fr: "Pour la maison : ferme la porte à clé chaque fois que tu sors. Éteins les lumières et ne laisse pas la télévision allumée. Mets les poubelles dehors le jeudi soir. Regarde le courrier tous les jours, prends les lettres et pose les lettres sur mon bureau. Si le voisin sonne, réponds poliment et dis que je suis en voyage. Ne perds jamais la clé, s'il te plaît ! Garde toujours la clé dans ta poche.",
        TR: "Ev için: her çıktığında kapıyı anahtarla kilitle. Işıkları kapat ve televizyonu açık bırakma. Çöpleri perşembe akşamı dışarı çıkar. Postaya her gün bak, mektupları al ve masama bırak. Komşu zili çalarsa kibarca cevap ver ve seyahatte olduğumu söyle. Anahtarı sakın kaybetme, lütfen! Anahtarı hep cebinde tut.",
        EN: "For the house: lock the door every time you go out. Turn off the lights and do not leave the television on. Put the bins outside on Thursday evening. Look at the post every day, take the letters and put the letters on my desk. If the neighbour rings, answer politely and say that I am travelling. Never lose the key, please! Always keep the key in your pocket.",
      },
      {
        fr: "Si tu as faim, mange ce que tu veux. Ouvre le frigo : prends du fromage, du pain et des fruits. Mais n'utilise pas ma vieille machine à café, elle est cassée ! Écoute de la musique, regarde un film, lis mes livres. Sois à l'aise, et n'invite pas trop de monde. Ne fais pas de bruit après dix heures du soir, car mes voisins dorment tôt.",
        TR: "Acıkırsan istediğini ye. Buzdolabını aç: peynir, ekmek ve meyve al. Ama eski kahve makinemi kullanma, bozuk! Müzik dinle, film izle, kitaplarımı oku. Rahat ol ve çok fazla kişi davet etme. Akşam ondan sonra gürültü yapma, çünkü komşularım erken uyur.",
        EN: "If you are hungry, eat what you want. Open the fridge: take some cheese, some bread and some fruit. But do not use my old coffee machine, it is broken! Listen to music, watch a film, read my books. Be comfortable, and do not invite too many people. Do not make noise after ten o'clock in the evening, because my neighbours sleep early.",
      },
      {
        fr: "Tu veux cuisiner ? Voici ma recette de crêpes, écrite comme dans un livre de cuisine. Mélangez la farine, les œufs et le lait. Ajoutez une pincée de sel. Attendez dix minutes. Chauffez la poêle, versez un peu de pâte et tournez la poêle. Retournez la crêpe, puis servez avec du sucre. Ne soyez pas pressé : la patience est le secret d'une bonne crêpe.",
        TR: "Yemek yapmak ister misin? İşte krep tarifim, bir yemek kitabındaki gibi yazılmış. Unu, yumurtaları ve sütü karıştırın. Bir tutam tuz ekleyin. On dakika bekleyin. Tavayı ısıtın, biraz hamur dökün ve tavayı çevirin. Krepi çevirin, sonra şekerle servis edin. Acele etmeyin: sabır, güzel bir krepin sırrıdır.",
        EN: "Do you want to cook? Here is my pancake recipe, written as in a cookbook. Mix the flour, the eggs and the milk. Add a pinch of salt. Wait ten minutes. Heat the pan, pour a little batter and tilt the pan. Turn the pancake over, then serve with sugar. Do not be in a hurry: patience is the secret of a good pancake.",
      },
      {
        fr: "Voilà, la liste est finie ! Relis ce mot si tu as un doute. Téléphone le dimanche soir, car j'aime avoir des nouvelles de Mimi. Passe une bonne semaine, profite bien de mon appartement et sois prudent. À mon retour, faisons des crêpes ensemble et racontons nos vacances. Allons-y, pas de stress ! À samedi prochain, et encore merci pour tout. Léa",
        TR: "İşte liste bitti! Şüphen olursa bu notu tekrar oku. Pazar akşamı telefon et, çünkü Mimi'nin haberlerini almayı seviyorum. İyi bir hafta geçir, dairemin tadını çıkar ve dikkatli ol. Döndüğümde birlikte krep yapalım ve tatillerimizi anlatalım. Hadi bakalım, stres yok! Haftaya cumartesi görüşürüz, her şey için tekrar teşekkürler. Léa",
        EN: "That is it, the list is finished! Read this note again if you have any doubt. Phone on Sunday evening, because I like to have news of Mimi. Have a good week, enjoy my flat and be careful. When I am back, let us make pancakes together and tell each other about our holidays. Let us go, no stress! See you next Saturday, and thank you again for everything. Léa",
      },
    ],
    questions: [
      {
        question: { fr: "Pourquoi Léa écrit-elle ce mot à Tom ?", TR: "Léa bu notu Tom'a neden yazıyor?", EN: "Why does Léa write this note to Tom?" },
        options: ["Elle déménage", "Elle invite Tom à dîner", "Elle part en vacances", "Elle cherche son chat"],
        answer: 2,
      },
      {
        question: { fr: "Qu'est-ce que Tom ne doit pas donner au chat ?", TR: "Tom kediye ne vermemeli?", EN: "What must Tom not give to the cat?" },
        options: ["Du lait", "Une petite balle", "De l'eau", "Une boîte de nourriture"],
        answer: 0,
      },
      {
        question: { fr: "Quels jours Tom arrose-t-il les plantes ?", TR: "Tom bitkileri hangi günler suluyor?", EN: "On which days does Tom water the plants?" },
        options: ["Le lundi et le jeudi", "Le mardi et le vendredi", "Le mercredi et le dimanche"],
        answer: 1,
      },
      {
        question: { fr: "Que ne doit-il pas faire après dix heures du soir ?", TR: "Akşam ondan sonra ne yapmamalı?", EN: "What must he not do after ten in the evening?" },
        options: ["Faire du bruit", "Écouter de la musique", "Ouvrir le frigo", "Lire un livre"],
        answer: 0,
      },
      {
        question: { fr: "Que vont faire Léa et Tom à son retour ?", TR: "Léa ve Tom, o döndüğünde ne yapacak?", EN: "What are Léa and Tom going to do when she is back?" },
        options: ["Aller au marché", "Arroser les plantes", "Faire des crêpes", "Jouer avec le chat"],
        answer: 2,
      },
    ],
  },
  {
    id: "reading-il-y-a-il-faut",
    lessonId: "il-y-a-il-faut",
    level: "A1",
    title: { TR: "Valmont'a hoş geldiniz", EN: "Welcome to Valmont" },
    paragraphs: [
      {
        fr: "Bienvenue à Valmont ! Je suis guide à l'office de tourisme, et je vais vous présenter notre petite ville. À Valmont, il y a environ dix mille habitants, un grand lac et une vieille église. Il n'y a pas de métro, mais il y a un petit bus jaune. En été, il y a beaucoup de touristes, et il y a aussi beaucoup de fêtes dans les rues.",
        TR: "Valmont'a hoş geldiniz! Turizm ofisinde rehberim ve size küçük şehrimizi tanıtacağım. Valmont'ta yaklaşık on bin nüfus, büyük bir göl ve eski bir kilise var. Metro yok ama küçük, sarı bir otobüs var. Yazın çok turist ve sokaklarda da pek çok şenlik oluyor.",
        EN: "Welcome to Valmont! I am a guide at the tourist office, and I am going to present our small town to you. In Valmont, there are about ten thousand inhabitants, a big lake and an old church. There is no metro, but there is a little yellow bus. In summer, there are a lot of tourists, and there are also a lot of festivals in the streets.",
      },
      {
        fr: "Au centre, il y a une place avec une fontaine. Le samedi, il y a un marché sur la place. Il y a des marchands de fromage, de pain et de fruits. Il n'y a pas de voitures sur la place, donc il faut marcher. Il faut aimer marcher à Valmont ! Il faut une demi-heure pour traverser toute la ville à pied, et il faut de bonnes chaussures, car les rues sont vieilles.",
        TR: "Merkezde çeşmeli bir meydan var. Cumartesi günleri meydanda bir pazar kuruluyor. Peynirciler, fırıncılar ve meyve satıcıları var. Meydanda araba yok, bu yüzden yürümek gerekiyor. Valmont'ta yürümeyi sevmek gerekir! Bütün şehri yürüyerek geçmek için yarım saat gerekiyor ve iyi ayakkabılar şart, çünkü sokaklar eski.",
        EN: "In the centre, there is a square with a fountain. On Saturday, there is a market on the square. There are cheese sellers, bread sellers and fruit sellers. There are no cars on the square, so you have to walk. You have to like walking in Valmont! You need half an hour to cross the whole town on foot, and you need good shoes, because the streets are old.",
      },
      {
        fr: "Pour visiter le château, il faut acheter un billet. Il faut dix euros pour un adulte, mais il n'y a pas de prix pour les enfants. Au château, il y a un musée avec des armures, des tableaux et une grande salle. Il ne faut pas toucher les objets. Il faut aussi parler doucement, parce qu'il y a souvent des groupes d'écoliers et il y a toujours un gardien très sérieux.",
        TR: "Şatoyu gezmek için bilet almak gerekiyor. Bir yetişkin için on avro gerekiyor ama çocuklar için ücret yok. Şatoda zırhlar, tablolar ve büyük bir salon içeren bir müze var. Eşyalara dokunmamak gerekiyor. Ayrıca yavaş konuşmak gerekiyor, çünkü sık sık okul grupları oluyor ve her zaman çok ciddi bir bekçi var.",
        EN: "To visit the castle, you have to buy a ticket. You need ten euros for an adult, but there is no price for children. In the castle, there is a museum with suits of armour, paintings and a big hall. You must not touch the objects. You also have to speak quietly, because there are often school groups and there is always a very serious guard.",
      },
      {
        fr: "Le lac est magnifique. Il y a des bateaux, des canards et une petite plage. Il y a aussi des cafés au bord de l'eau. En juillet, il fait très chaud, alors il faut mettre de la crème solaire et il faut boire beaucoup d'eau. Il n'y a pas beaucoup d'ombre sur la plage, donc il faut un chapeau. Le soir, il y a une lumière rose sur le lac, et il faut regarder ce moment.",
        TR: "Göl muhteşem. Tekneler, ördekler ve küçük bir plaj var. Su kenarında kafeler de var. Temmuzda hava çok sıcak, bu yüzden güneş kremi sürmek ve çok su içmek gerekiyor. Plajda fazla gölge yok, bu yüzden bir şapka gerekiyor. Akşamları gölün üstünde pembe bir ışık oluyor ve bu ana bakmak gerekiyor.",
        EN: "The lake is magnificent. There are boats, ducks and a small beach. There are also cafés by the water. In July, it is very hot, so you have to put on sun cream and you have to drink a lot of water. There is not much shade on the beach, so you need a hat. In the evening, there is a pink light on the lake, and you have to watch this moment.",
      },
      {
        fr: "Pour manger, il y a trois restaurants. Il y a un restaurant de poisson, une pizzeria et une crêperie. Il faut réserver le week-end, parce qu'il y a beaucoup de monde. Il n'y a pas de fast-food à Valmont, et cela est une très bonne chose ! À la crêperie, il y a de la musique le vendredi soir, et il y a toujours une longue file d'attente.",
        TR: "Yemek için üç restoran var. Bir balık restoranı, bir pizzacı ve bir krepçi var. Hafta sonu yer ayırtmak gerekiyor, çünkü çok kalabalık oluyor. Valmont'ta fast-food yok ve bu çok iyi bir şey! Krepçide cuma akşamları müzik var ve her zaman uzun bir kuyruk oluyor.",
        EN: "To eat, there are three restaurants. There is a fish restaurant, a pizzeria and a pancake house. You have to book at the weekend, because there are a lot of people. There is no fast food in Valmont, and that is a very good thing! At the pancake house, there is music on Friday evening, and there is always a long queue.",
      },
      {
        fr: "Pour dormir, il y a un hôtel et deux petites auberges, mais il n'y a pas de grand hôtel. Il faut réserver une chambre dès le printemps, car en été il n'y a plus de place. Il y a aussi un camping au bord du lac. À côté de la poste, il y a un distributeur d'argent, mais il n'y a pas de banque ouverte le dimanche. Il faut donc avoir un peu d'argent liquide.",
        TR: "Kalmak için bir otel ve iki küçük han var ama büyük bir otel yok. İlkbahardan itibaren oda ayırtmak gerekiyor, çünkü yazın yer kalmıyor. Gölün kıyısında bir de kamp alanı var. Postanenin yanında bir bankamatik var ama pazar günü açık banka yok. Bu yüzden biraz nakit para bulundurmak gerekiyor.",
        EN: "To sleep, there is a hotel and two small inns, but there is no big hotel. You have to book a room from the spring, because in summer there is no more space. There is also a campsite by the lake. Next to the post office, there is a cash machine, but there is no bank open on Sunday. So you need to have a little cash.",
      },
      {
        fr: "L'hiver, il fait froid et il y a de la neige. Il y a une patinoire sur la place, et il y a du chocolat chaud partout. Il faut un manteau, un bonnet et des gants. Il faut beaucoup de temps pour tout voir, mais il ne faut pas se dépêcher. Il faut seulement un peu de curiosité et un grand sourire. Il y a toujours une place pour vous à Valmont. À bientôt !",
        TR: "Kışın hava soğuk ve kar var. Meydanda bir buz pisti var ve her yerde sıcak çikolata var. Bir mont, bir bere ve eldiven gerekiyor. Her şeyi görmek için çok zaman gerekiyor ama acele etmemek gerekiyor. Yalnızca biraz merak ve kocaman bir gülümseme yeterli. Valmont'ta sizin için her zaman bir yer var. Yakında görüşmek üzere!",
        EN: "In winter, it is cold and there is snow. There is an ice rink on the square, and there is hot chocolate everywhere. You need a coat, a hat and gloves. You need a lot of time to see everything, but you must not hurry. You only need a little curiosity and a big smile. There is always a place for you in Valmont. See you soon!",
      },
    ],
    questions: [
      {
        question: { fr: "Qui parle dans ce texte ?", TR: "Bu metinde kim konuşuyor?", EN: "Who speaks in this text?" },
        options: ["Un habitant de Valmont", "Un guide de l'office de tourisme", "Un touriste", "Le directeur du château"],
        answer: 1,
      },
      {
        question: { fr: "Pourquoi faut-il marcher sur la place ?", TR: "Meydanda neden yürümek gerekiyor?", EN: "Why do you have to walk on the square?" },
        options: ["Il n'y a pas de bus", "Il n'y a pas de voitures sur la place", "La place est très petite"],
        answer: 1,
      },
      {
        question: { fr: "Combien coûte le château pour un adulte ?", TR: "Şato bir yetişkin için ne kadar?", EN: "How much does the castle cost for an adult?" },
        options: ["Cinq euros", "Dix euros", "Vingt euros", "Gratuit"],
        answer: 1,
      },
      {
        question: { fr: "Que faut-il faire le week-end au restaurant ?", TR: "Hafta sonu restoranda ne yapmak gerekiyor?", EN: "What do you have to do at the weekend at a restaurant?" },
        options: ["Arriver tôt", "Payer en espèces", "Prendre un menu", "Réserver"],
        answer: 3,
      },
      {
        question: { fr: "Qu'est-ce qu'il y a sur la place en hiver ?", TR: "Kışın meydanda ne var?", EN: "What is there on the square in winter?" },
        options: ["Un marché de poisson", "Une patinoire", "Une plage", "Un camping"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-stressed-pronouns",
    lessonId: "stressed-pronouns",
    level: "A1",
    title: { TR: "Arkadaşlarla bir akşam yemeği", EN: "A dinner with friends" },
    paragraphs: [
      {
        fr: "Samedi soir, j'invite mes amis chez moi. Je suis Lucas et je prépare un grand dîner pour eux. Nora, Hakim et sa petite amie Yasmine viennent. Moi, j'adore cuisiner, mais Nora, elle, déteste ça. Elle préfère manger ! Lui, Hakim, aime les deux : il aime cuisiner et il aime manger. Et Yasmine ? Elle, elle aime surtout parler et rire avec nous.",
        TR: "Cumartesi akşamı arkadaşlarımı evime davet ediyorum. Ben Lucas ve onlar için büyük bir akşam yemeği hazırlıyorum. Nora, Hakim ve kız arkadaşı Yasmine geliyor. Ben yemek yapmaya bayılırım ama Nora bundan nefret eder. O yemeyi tercih eder! Hakim ise ikisini de sever: hem yemek yapmayı hem yemeyi sever. Peki ya Yasmine? O en çok bizimle konuşmayı ve gülmeyi sever.",
        EN: "On Saturday evening, I invite my friends to my place. I am Lucas and I prepare a big dinner for them. Nora, Hakim and his girlfriend Yasmine are coming. Me, I love cooking, but Nora, she hates it. She prefers eating! Hakim, he likes both: he likes cooking and he likes eating. And Yasmine? She mostly likes talking and laughing with us.",
      },
      {
        fr: "Je téléphone à Nora. « Salut Nora, tu viens samedi ? — Oui, bien sûr ! Je viens chez toi vers sept heures. Tu cuisines pour nous ? — Oui, moi, je cuisine pour vous tous. — Super ! Toi, tu es un vrai chef. Moi, je peux apporter un dessert, mais je ne sais pas faire un gâteau. — Alors, achète un gâteau. Avec toi, il n'y a jamais de problème ! »",
        TR: "Nora'yı arıyorum. “Selam Nora, cumartesi geliyor musun? — Evet, tabii ki! Yediye doğru sana geliyorum. Bizim için yemek yapıyor musun? — Evet, ben hepiniz için yemek yapıyorum. — Harika! Sen gerçek bir şefsin. Ben bir tatlı getirebilirim ama pasta yapmayı bilmiyorum. — O zaman bir pasta satın al. Seninle hiçbir zaman sorun olmaz!”",
        EN: "I phone Nora. “Hi Nora, are you coming on Saturday? — Yes, of course! I am coming to your place around seven. Are you cooking for us? — Yes, me, I am cooking for all of you. — Great! You, you are a real chef. Me, I can bring a dessert, but I cannot make a cake. — Then buy a cake. With you, there is never a problem!”",
      },
      {
        fr: "Hakim est mon ami de l'école. Je mange souvent chez lui, avec sa famille. Eux, ils sont très gentils : ils m'invitent toujours à table. Yasmine travaille avec lui dans la même entreprise. Pour elle, le travail est une passion. Pour lui, la famille est plus importante. Ils sont différents, mais ensemble, ils sont heureux. Moi, je pense que l'amour est un équilibre. Pour eux, deux personnes différentes font un couple fort.",
        TR: "Hakim okul arkadaşım. Sık sık onun evinde, ailesiyle yemek yerim. Onlar çok kibar: beni her zaman sofraya davet ederler. Yasmine onunla aynı şirkette çalışıyor. Onun için iş bir tutku. Onun içinse aile daha önemli. Farklılar ama birlikte mutlular. Bence aşk bir dengedir. Onlar için iki farklı insan güçlü bir çift oluşturur.",
        EN: "Hakim is my friend from school. I often eat at his place, with his family. They are very kind: they always invite me to the table. Yasmine works with him in the same company. For her, work is a passion. For him, family is more important. They are different, but together they are happy. Me, I think love is a balance. For them, two different people make a strong couple.",
      },
      {
        fr: "Je prépare une soupe, du poisson et un dessert. Nora et Hakim aiment le poisson, mais Yasmine n'en mange pas. Moi non plus, je ne l'aime pas trop. Elle, elle préfère la viande, alors je fais aussi un poulet. Nous, nous mangeons tous quelque chose de différent ! Je pense à eux pendant toute la préparation. Pour moi, un bon repas est un cadeau pour mes amis.",
        TR: "Bir çorba, balık ve bir tatlı hazırlıyorum. Nora ve Hakim balığı sever ama Yasmine yemez. Ben de pek sevmem. O eti tercih ediyor, bu yüzden bir de tavuk yapıyorum. Biz hepimiz farklı bir şey yiyoruz! Bütün hazırlık boyunca onları düşünüyorum. Benim için güzel bir yemek, arkadaşlarım için bir hediyedir.",
        EN: "I prepare a soup, some fish and a dessert. Nora and Hakim like fish, but Yasmine does not eat any. Me neither, I do not like it much. She prefers meat, so I also make a chicken. We all eat something different! I think about them during the whole preparation. For me, a good meal is a gift for my friends.",
      },
      {
        fr: "À sept heures, Nora arrive avec un gâteau. « Voici un gâteau pour toi, Lucas ! Je ne cuisine pas, mais je pense à toi. » Je ris. Hakim et Yasmine arrivent juste après elle. Je les regarde : Yasmine est devant lui et elle porte une belle robe rouge. Lui, il a des fleurs dans les mains. Nous nous asseyons tous autour de la table, et le dîner commence. Moi, je suis assis à côté de Nora, et elle rit déjà.",
        TR: "Yedide Nora bir pastayla geliyor. “İşte sana bir pasta, Lucas! Yemek yapmam ama seni düşünüyorum.” Gülüyorum. Hakim ve Yasmine ondan hemen sonra geliyor. Onlara bakıyorum: Yasmine onun önünde ve güzel kırmızı bir elbise giyiyor. O ise ellerinde çiçeklerle. Hepimiz masanın etrafında oturuyoruz ve yemek başlıyor. Ben Nora'nın yanında oturuyorum ve o şimdiden gülüyor.",
        EN: "At seven o'clock, Nora arrives with a cake. “Here is a cake for you, Lucas! I do not cook, but I am thinking of you.” I laugh. Hakim and Yasmine arrive just after her. I look at them: Yasmine is in front of him and she wears a beautiful red dress. He has flowers in his hands. We all sit around the table, and the dinner begins. Me, I am sitting next to Nora, and she is already laughing.",
      },
      {
        fr: "Après le dîner, nous parlons de nos projets. Moi, je veux voyager en Asie. « Toi, Nora, qu'est-ce que tu veux faire ? — Moi aussi, je veux voyager », dit Nora. Nous pouvons partir ensemble. Hakim et Yasmine disent : « Nous, nous voulons rester ici. Eux, ils aiment leur ville. » Je réponds : « Vous êtes des gens heureux. Nous sommes différents de vous, mais nous pouvons voyager avec vous un jour. »",
        TR: "Yemekten sonra planlarımızdan söz ediyoruz. Ben Asya'ya seyahat etmek istiyorum. “Sen Nora, ne yapmak istiyorsun? — Ben de seyahat etmek istiyorum” diyor Nora. Birlikte gidebiliriz. Hakim ve Yasmine şöyle diyor: “Biz burada kalmak istiyoruz. Biz şehrimizi seviyoruz.” Cevap veriyorum: “Siz mutlu insanlarsınız. Sizden farklıyız ama bir gün sizinle seyahat edebiliriz.”",
        EN: "After dinner, we talk about our plans. Me, I want to travel in Asia. “You, Nora, what do you want to do? — Me too, I want to travel,” says Nora. We can leave together. Hakim and Yasmine say: “We, we want to stay here. We like our city.” I answer: “You are happy people. We are different from you, but we can travel with you one day.”",
      },
      {
        fr: "À minuit, ils partent. Je reste seul avec la vaisselle, mais Nora reste avec moi. Sans elle, je ne peux pas finir ! Nous écoutons de la musique et nous parlons un peu de la soirée. Je pense à mes amis et je suis heureux. Chez moi, il y a toujours une place pour eux, et pour vous aussi si vous voulez venir. Après tout, une table n'est jamais trop grande pour des amis.",
        TR: "Gece yarısı gidiyorlar. Bulaşıklarla yalnız kalıyorum ama Nora benimle kalıyor. O olmadan bitiremem! Müzik dinliyoruz ve akşamdan biraz söz ediyoruz. Arkadaşlarımı düşünüyorum ve mutluyum. Evimde onlar için her zaman bir yer var, gelmek isterseniz sizin için de. Ne de olsa bir masa, arkadaşlar için hiçbir zaman fazla büyük değildir.",
        EN: "At midnight, they leave. I stay alone with the washing-up, but Nora stays with me. Without her, I cannot finish! We listen to music and we talk a little about the evening. I think about my friends and I am happy. At my place, there is always room for them, and for you too if you want to come. After all, a table is never too big for friends.",
      },
    ],
    questions: [
      {
        question: { fr: "Qui aime beaucoup cuisiner ?", TR: "Kim yemek yapmayı çok seviyor?", EN: "Who loves cooking a lot?" },
        options: ["Nora", "Lucas", "Yasmine"],
        answer: 1,
      },
      {
        question: { fr: "Qu'apporte Nora au dîner ?", TR: "Nora yemeğe ne getiriyor?", EN: "What does Nora bring to the dinner?" },
        options: ["Des fleurs", "Un poulet", "Un gâteau", "Du poisson"],
        answer: 2,
      },
      {
        question: { fr: "Pourquoi Lucas fait-il aussi un poulet ?", TR: "Lucas neden bir de tavuk yapıyor?", EN: "Why does Lucas also make a chicken?" },
        options: ["Yasmine ne mange pas de poisson", "Hakim déteste le poisson", "Nora est végétarienne", "Il n'a pas de soupe"],
        answer: 0,
      },
      {
        question: { fr: "Que veut faire Lucas dans l'avenir ?", TR: "Lucas gelecekte ne yapmak istiyor?", EN: "What does Lucas want to do in the future?" },
        options: ["Rester dans sa ville", "Changer de travail", "Voyager en Asie", "Ouvrir un restaurant"],
        answer: 2,
      },
      {
        question: { fr: "Qui reste avec Lucas après minuit ?", TR: "Gece yarısından sonra Lucas'la kim kalıyor?", EN: "Who stays with Lucas after midnight?" },
        options: ["Nora", "Yasmine", "Hakim", "Personne"],
        answer: 0,
      },
    ],
  },
  {
    id: "reading-passe-compose-avoir",
    lessonId: "passe-compose-avoir",
    level: "A1",
    title: { TR: "Yoğun bir cumartesi", EN: "A busy Saturday" },
    paragraphs: [
      {
        fr: "Samedi dernier, j'ai eu une journée très chargée. Je m'appelle Léna et je suis étudiante. J'ai travaillé le matin dans un café, j'ai étudié l'après-midi et j'ai fêté l'anniversaire de ma sœur le soir. J'ai beaucoup fait, mais je n'ai pas eu le temps de me reposer. Aujourd'hui, j'ai envie de raconter cette journée, parce qu'elle est vraiment spéciale.",
        TR: "Geçen cumartesi çok yoğun bir günüm oldu. Adım Léna ve öğrenciyim. Sabah bir kafede çalıştım, öğleden sonra ders çalıştım ve akşam ablamın doğum gününü kutladım. Çok şey yaptım ama dinlenmeye vaktim olmadı. Bugün bu günü anlatmak istiyorum, çünkü gerçekten özel.",
        EN: "Last Saturday, I had a very busy day. My name is Léna and I am a student. I worked in a café in the morning, I studied in the afternoon and I celebrated my sister's birthday in the evening. I did a lot, but I did not have the time to rest. Today, I feel like telling about this day, because it is really special.",
      },
      {
        fr: "À sept heures, j'ai pris un café et j'ai mangé deux tartines. J'ai regardé ma liste et j'ai choisi mes priorités. Ensuite, j'ai travaillé au café pendant quatre heures. J'ai préparé des cafés, j'ai servi des clients et j'ai souri tout le temps. Un client a perdu son portefeuille, et nous avons cherché partout. Finalement, ma collègue Zoé a trouvé le portefeuille sous une chaise.",
        TR: "Yedide bir kahve içtim ve iki dilim ekmek yedim. Listeme baktım ve önceliklerimi seçtim. Sonra kafede dört saat çalıştım. Kahveler hazırladım, müşterilere servis yaptım ve hep gülümsedim. Bir müşteri cüzdanını kaybetti ve her yeri aradık. Sonunda iş arkadaşım Zoé cüzdanı bir sandalyenin altında buldu.",
        EN: "At seven o'clock, I had a coffee and I ate two slices of bread. I looked at my list and I chose my priorities. Then, I worked at the café for four hours. I prepared coffees, I served customers and I smiled all the time. A customer lost his wallet, and we looked everywhere. Finally, my colleague Zoé found the wallet under a chair.",
      },
      {
        fr: "À midi, j'ai mangé un sandwich avec Zoé. Nous avons parlé de nos examens. Après le travail, j'ai étudié trois heures à la bibliothèque. J'ai lu deux chapitres, j'ai écrit un résumé et j'ai fini mon exposé. Je n'ai pas compris un exercice, alors j'ai demandé de l'aide à un professeur. Il a expliqué la règle avec patience, et j'ai enfin compris. J'ai remercié ce professeur et j'ai rangé mes livres.",
        TR: "Öğlen Zoé'yle bir sandviç yedim. Sınavlarımızdan söz ettik. İşten sonra kütüphanede üç saat ders çalıştım. İki bölüm okudum, bir özet yazdım ve sunumumu bitirdim. Bir alıştırmayı anlamadım, bu yüzden bir öğretmenden yardım istedim. Kuralı sabırla açıkladı ve sonunda anladım. Bu öğretmene teşekkür ettim ve kitaplarımı topladım.",
        EN: "At noon, I ate a sandwich with Zoé. We talked about our exams. After work, I studied for three hours at the library. I read two chapters, I wrote a summary and I finished my presentation. I did not understand one exercise, so I asked a teacher for help. He explained the rule patiently, and I finally understood. I thanked this teacher and I put away my books.",
      },
      {
        fr: "À cinq heures, j'ai acheté un cadeau pour ma sœur Inès : un joli livre et du chocolat. J'ai hésité longtemps. J'ai vu un pull magnifique, mais je n'ai pas eu assez d'argent. J'ai attendu le bus vingt minutes, et j'ai répondu à un message de mon père. Il a demandé : « Tu as pensé au gâteau ? » Heureusement, j'ai pensé à tout, même au papier cadeau. J'ai aussi acheté une petite carte, et j'ai écrit un joli message.",
        TR: "Beşte ablam Inès için bir hediye aldım: güzel bir kitap ve çikolata. Uzun süre tereddüt ettim. Muhteşem bir kazak gördüm ama yeterli param olmadı. Otobüsü yirmi dakika bekledim ve babamın bir mesajına cevap verdim. “Pastayı düşündün mü?” diye sordu. Neyse ki her şeyi, hediye kâğıdını bile düşündüm. Ayrıca küçük bir kart aldım ve güzel bir mesaj yazdım.",
        EN: "At five o'clock, I bought a gift for my sister Inès: a nice book and some chocolate. I hesitated for a long time. I saw a magnificent jumper, but I did not have enough money. I waited for the bus for twenty minutes, and I answered a message from my father. He asked: “Did you think about the cake?” Luckily, I thought of everything, even the wrapping paper. I also bought a small card, and I wrote a nice message.",
      },
      {
        fr: "Chez mes parents, j'ai aidé ma mère. J'ai préparé une salade, mon père a fait un gâteau et ma sœur a mis la table. Mon frère a ouvert une bouteille de jus d'orange. Nous avons tout fini à huit heures, et les invités ont sonné à la porte. Mon oncle Karim a apporté un grand bouquet, et ma tante a donné une belle écharpe à Inès.",
        TR: "Ailemin evinde annemle yardım ettim. Bir salata hazırladım, babam bir pasta yaptı, ablam sofrayı kurdu. Kardeşim bir şişe portakal suyu açtı. Her şeyi sekizde bitirdik ve misafirler kapıyı çaldı. Amcam Karim büyük bir buket getirdi, teyzem de Inès'e güzel bir atkı verdi.",
        EN: "At my parents' place, I helped my mother. I prepared a salad, my father made a cake and my sister set the table. My brother opened a bottle of orange juice. We finished everything at eight o'clock, and the guests rang the doorbell. My uncle Karim brought a big bouquet, and my aunt gave a beautiful scarf to Inès.",
      },
      {
        fr: "Tout le monde a chanté, nous avons dansé, mon oncle a raconté des histoires drôles et mon père a pris beaucoup de photos. Inès a ouvert ses cadeaux et elle a dit : « Merci, j'ai adoré ! » Elle a bu un peu de jus, elle a mangé deux parts de gâteau et elle a beaucoup ri. Nous avons même entendu les voisins applaudir à travers le mur !",
        TR: "Herkes şarkı söyledi, dans ettik, amcam komik hikâyeler anlattı ve babam çok fotoğraf çekti. Inès hediyelerini açtı ve şöyle dedi: “Teşekkürler, bayıldım!” Biraz meyve suyu içti, iki dilim pasta yedi ve çok güldü. Hatta komşuların duvarın ardından alkışladığını bile duyduk!",
        EN: "Everyone sang, we danced, my uncle told funny stories and my father took a lot of photos. Inès opened her presents and she said: “Thank you, I loved it!” She drank a little juice, she ate two slices of cake and she laughed a lot. We even heard the neighbours applauding through the wall!",
      },
      {
        fr: "À minuit, j'ai nettoyé la cuisine et j'ai éteint les lumières. Le dimanche, j'ai dormi très tard et je n'ai rien fait. J'ai seulement lu un peu et j'ai regardé les photos de la fête. J'ai compris une chose : une journée chargée donne de beaux souvenirs. Et vous, qu'est-ce que vous avez fait samedi dernier ? Vous avez travaillé, vous avez étudié ou vous avez enfin pris du temps pour vous ?",
        TR: "Gece yarısı mutfağı temizledim ve ışıkları kapattım. Pazar günü çok geç saate kadar uyudum ve hiçbir şey yapmadım. Yalnızca biraz okudum ve partinin fotoğraflarına baktım. Bir şeyi anladım: yoğun bir gün güzel anılar bırakır. Peki ya siz, geçen cumartesi ne yaptınız? Çalıştınız mı, ders mi çalıştınız, yoksa sonunda kendinize zaman mı ayırdınız?",
        EN: "At midnight, I cleaned the kitchen and I turned off the lights. On Sunday, I slept very late and I did nothing. I only read a little and I looked at the photos of the party. I understood one thing: a busy day gives beautiful memories. And you, what did you do last Saturday? Did you work, did you study or did you finally take some time for yourself?",
      },
    ],
    questions: [
      {
        question: { fr: "Où Léna a-t-elle travaillé samedi matin ?", TR: "Léna cumartesi sabahı nerede çalıştı?", EN: "Where did Léna work on Saturday morning?" },
        options: ["Dans une bibliothèque", "Dans un magasin", "Dans une école", "Dans un café"],
        answer: 3,
      },
      {
        question: { fr: "Où Zoé a-t-elle trouvé le portefeuille ?", TR: "Zoé cüzdanı nerede buldu?", EN: "Where did Zoé find the wallet?" },
        options: ["Dans la rue", "Sur le comptoir", "Sous une chaise"],
        answer: 2,
      },
      {
        question: { fr: "Pourquoi Léna n'a-t-elle pas acheté le pull ?", TR: "Léna kazağı neden almadı?", EN: "Why did Léna not buy the jumper?" },
        options: ["Il est trop grand", "Elle a oublié", "Il coûte trop cher", "Elle n'a pas eu assez d'argent"],
        answer: 3,
      },
      {
        question: { fr: "Qui a fait le gâteau ?", TR: "Pastayı kim yaptı?", EN: "Who made the cake?" },
        options: ["Léna", "Son père", "Sa mère", "Sa tante"],
        answer: 1,
      },
      {
        question: { fr: "Qu'a fait Léna dimanche ?", TR: "Léna pazar günü ne yaptı?", EN: "What did Léna do on Sunday?" },
        options: ["Elle a travaillé au café", "Elle a étudié toute la journée", "Elle a dormi tard et elle n'a rien fait"],
        answer: 2,
      },
    ],
  },
  {
    id: "reading-passe-compose-etre",
    lessonId: "passe-compose-etre",
    level: "A1",
    title: { TR: "Paris'te bir hafta sonu", EN: "A weekend in Paris" },
    paragraphs: [
      {
        fr: "Le week-end dernier, je suis allée à Paris avec mon ami Jules. Nous sommes partis vendredi à dix-huit heures. Le train est arrivé à vingt et une heures. Nous sommes descendus du train, nous sommes sortis de la gare et nous sommes montés dans un taxi. J'ai été très contente : ce voyage est mon premier avec un ami. Jules, lui, est déjà venu à Paris trois fois.",
        TR: "Geçen hafta sonu arkadaşım Jules'le Paris'e gittim. Cuma günü on sekizde yola çıktık. Tren yirmi birde vardı. Trenden indik, istasyondan çıktık ve bir taksiye bindik. Çok mutlu oldum: bu yolculuk bir arkadaşımla ilk yolculuğum. Jules ise Paris'e daha önce üç kez gelmiş.",
        EN: "Last weekend, I went to Paris with my friend Jules. We left on Friday at six o'clock. The train arrived at nine o'clock. We got off the train, we went out of the station and we got into a taxi. I was very happy: this trip is my first with a friend. Jules, for his part, has already come to Paris three times.",
      },
      {
        fr: "Samedi, je me suis levée tôt et je me suis habillée vite. Jules ne s'est pas levé avant neuf heures. Nous sommes allés au café en bas de l'hôtel, puis nous sommes montés à la tour Eiffel. Nous sommes restés longtemps en haut : nous avons admiré la vue magnifique. Mon sac est tombé par terre, mais heureusement, un gentil monsieur est venu et il a ramassé mon sac.",
        TR: "Cumartesi erken kalktım ve çabucak giyindim. Jules dokuzdan önce kalkmadı. Otelin altındaki kafeye gittik, sonra Eyfel Kulesi'ne çıktık. Yukarıda uzun süre kaldık: muhteşem manzaraya hayran kaldık. Çantam yere düştü ama neyse ki nazik bir bey geldi ve çantamı yerden aldı.",
        EN: "On Saturday, I got up early and I got dressed quickly. Jules did not get up before nine o'clock. We went to the café downstairs from the hotel, then we went up the Eiffel Tower. We stayed at the top for a long time: we admired the magnificent view. My bag fell on the ground, but luckily, a kind gentleman came and picked up my bag.",
      },
      {
        fr: "Dimanche, nous sommes entrés dans un grand musée. Nous sommes restés trois heures. Ma cousine Élise est venue nous voir à midi. Elle est née à Paris, et elle est devenue guide touristique il y a deux ans. Elle est arrivée avec un sourire et un plan de la ville. Elle nous a montré les tableaux les plus célèbres, et nous sommes sortis très contents de cette visite.",
        TR: "Pazar günü büyük bir müzeye girdik. Üç saat kaldık. Kuzenim Élise öğlen bizi görmeye geldi. Paris'te doğdu ve iki yıl önce turist rehberi oldu. Bir gülümseme ve şehrin bir haritasıyla geldi. Bize en ünlü tabloları gösterdi ve bu ziyaretten çok memnun çıktık.",
        EN: "On Sunday, we went into a big museum. We stayed three hours. My cousin Élise came to see us at noon. She was born in Paris, and she became a tourist guide two years ago. She arrived with a smile and a map of the city. She showed us the most famous paintings, and we left very happy with this visit.",
      },
      {
        fr: "Le soir, nous sommes sortis au restaurant. Nous avons mangé du poisson, puis nous sommes rentrés à l'hôtel à minuit. Jules est monté dans la chambre le premier. Moi, je me suis couchée tout de suite et je me suis endormie en cinq minutes. Mais le matin suivant, notre réveil n'a pas sonné. Nous ne nous sommes pas réveillés à l'heure, et le désastre a commencé.",
        TR: "Akşam restorana çıktık. Balık yedik, sonra gece yarısı otele döndük. Jules odaya ilk çıkan oldu. Ben hemen yattım ve beş dakikada uykuya daldım. Ama ertesi sabah çalar saatimiz çalmadı. Zamanında uyanmadık ve felaket başladı.",
        EN: "In the evening, we went out to a restaurant. We ate fish, then we went back to the hotel at midnight. Jules went up to the room first. Me, I went to bed right away and I fell asleep in five minutes. But the next morning, our alarm did not ring. We did not wake up on time, and the disaster began.",
      },
      {
        fr: "Nous sommes partis très vite. Nous sommes arrivés à la gare à dix heures vingt, mais le train est déjà parti ! Jules est devenu pâle. Nous sommes restés immobiles pendant une minute, puis nous avons ri. Nous sommes retournés à l'hôtel, et nous avons pris un autre billet pour le soir. Ma mère a téléphoné : elle a lu mon message et elle a compris.",
        TR: "Çok hızlı yola çıktık. İstasyona on yirmide vardık ama tren çoktan kalkmıştı! Jules'ün yüzü soldu. Bir dakika hareketsiz kaldık, sonra güldük. Otele geri döndük ve akşam için başka bir bilet aldık. Annem aradı: mesajımı okudu ve anladı.",
        EN: "We left very quickly. We arrived at the station at twenty past ten, but the train had already left! Jules became pale. We stayed motionless for a minute, then we laughed. We went back to the hotel, and we took another ticket for the evening. My mother phoned: she saw my message and she understood.",
      },
      {
        fr: "Nous avons passé la journée à nous promener : nous sommes montés sur une colline, nous sommes descendus par un petit escalier et nous sommes entrés dans une boulangerie. Nous sommes restés dans un parc jusqu'au soir. Jules s'est assis sur un banc et il s'est endormi un moment. Quand le soleil est tombé, nous sommes allés à la gare, et cette fois, nous sommes arrivés en avance. Nous avons pris un café et nous avons regardé les gens.",
        TR: "Günü gezerek geçirdik: bir tepeye çıktık, küçük bir merdivenden indik ve bir fırına girdik. Akşama kadar bir parkta kaldık. Jules bir banka oturdu ve bir an uyuyakaldı. Güneş battığında istasyona gittik ve bu sefer erken vardık. Bir kahve içtik ve insanlara baktık.",
        EN: "We spent the day walking around: we went up a hill, we came down a small staircase and we went into a bakery. We stayed in a park until the evening. Jules sat down on a bench and fell asleep for a moment. When the sun went down, we went to the station, and this time, we arrived early. We had a coffee and we watched the people.",
      },
      {
        fr: "Lundi soir, nous sommes rentrés à la maison, fatigués mais heureux. Je suis revenue avec mille souvenirs. Jules est devenu un vrai fan de Paris, et il veut déjà retourner là-bas. Mes parents sont venus nous chercher à la gare. Et vous ? Où êtes-vous allés pendant vos dernières vacances ? Vous êtes partis en train, en voiture ou en avion ? Vous êtes restés longtemps ?",
        TR: "Pazartesi akşamı yorgun ama mutlu bir şekilde eve döndük. Binlerce anıyla geri geldim. Jules gerçek bir Paris hayranı oldu ve şimdiden oraya geri dönmek istiyor. Ailem bizi istasyondan almaya geldi. Peki ya siz? Son tatilinizde nereye gittiniz? Trenle mi, arabayla mı, uçakla mı gittiniz? Uzun süre kaldınız mı?",
        EN: "On Monday evening, we went back home, tired but happy. I came back with a thousand memories. Jules became a real fan of Paris, and he already wants to go back there. My parents came to pick us up at the station. And you? Where did you go during your last holidays? Did you leave by train, by car or by plane? Did you stay a long time?",
      },
    ],
    questions: [
      {
        question: { fr: "Avec qui la narratrice est-elle allée à Paris ?", TR: "Anlatıcı Paris'e kiminle gitti?", EN: "Who did the narrator go to Paris with?" },
        options: ["Avec sa cousine", "Avec ses parents", "Avec son ami Jules", "Toute seule"],
        answer: 2,
      },
      {
        question: { fr: "Que sont-ils montés visiter samedi ?", TR: "Cumartesi neyi gezmeye çıktılar?", EN: "What did they go up to visit on Saturday?" },
        options: ["La tour Eiffel", "Un musée", "Une colline", "Un hôtel"],
        answer: 0,
      },
      {
        question: { fr: "Quel est le métier d'Élise ?", TR: "Élise'in mesleği nedir?", EN: "What is Élise's job?" },
        options: ["Professeure", "Cuisinière", "Guide touristique", "Photographe"],
        answer: 2,
      },
      {
        question: { fr: "Pourquoi ont-ils raté le train du lundi matin ?", TR: "Pazartesi sabahı treni neden kaçırdılar?", EN: "Why did they miss the train on Monday morning?" },
        options: ["Le réveil n'a pas sonné", "Le taxi est arrivé en retard", "Ils sont allés au musée", "Jules est tombé"],
        answer: 0,
      },
      {
        question: { fr: "Quand sont-ils rentrés à la maison ?", TR: "Eve ne zaman döndüler?", EN: "When did they get back home?" },
        options: ["Dimanche soir", "Lundi soir", "Vendredi soir"],
        answer: 1,
      },
    ],
  },
  {
    id: "reading-c-est-il-est",
    lessonId: "c-est-il-est",
    level: "A1",
    title: { TR: "Aile albümüm", EN: "My family album" },
    paragraphs: [
      {
        fr: "Aujourd'hui, je montre mon album de photos à ma nouvelle collègue, Sara. Sur la première photo, c'est ma famille. C'est une grande famille ! Voici mes parents. C'est mon père, Jean. Il est ingénieur et il est très calme. C'est ma mère, Claire. Elle est professeure d'anglais et elle est toujours souriante. Mon père est français, et ma mère est italienne. Ils sont très heureux ensemble.",
        TR: "Bugün fotoğraf albümümü yeni iş arkadaşım Sara'ya gösteriyorum. İlk fotoğrafta ailem var. Büyük bir aile! İşte ana babam. Bu babam Jean. Mühendis ve çok sakin. Bu annem Claire. İngilizce öğretmeni ve her zaman güler yüzlü. Babam Fransız, annem İtalyan. Birlikte çok mutlular.",
        EN: "Today, I am showing my photo album to my new colleague, Sara. In the first photo, this is my family. It is a big family! Here are my parents. This is my father, Jean. He is an engineer and he is very calm. This is my mother, Claire. She is an English teacher and she is always smiling. My father is French, and my mother is Italian. They are very happy together.",
      },
      {
        fr: "Ce sont mes frères, Léo et Max. Léo est étudiant. Il est grand et il est sportif. Max est encore petit, il est au collège. C'est un garçon très drôle : il est blond, il est rapide et il est un peu timide avec les inconnus. Ce sont deux frères très différents, mais ils sont très proches. Ils sont toujours ensemble, même le week-end. C'est une belle amitié : ils sont des frères et des amis.",
        TR: "Bunlar erkek kardeşlerim Léo ve Max. Léo üniversite öğrencisi. Uzun boylu ve sportif. Max hâlâ küçük, ortaokulda. Çok komik bir çocuk: sarışın, hızlı ve yabancılara karşı biraz utangaç. Bunlar çok farklı iki kardeş ama çok yakınlar. Hafta sonu bile hep birlikteler. Bu güzel bir dostluk: hem kardeşler hem arkadaşlar.",
        EN: "These are my brothers, Léo and Max. Léo is a student. He is tall and he is sporty. Max is still small, he is at middle school. He is a very funny boy: he is blond, he is fast and he is a little shy with strangers. They are two very different brothers, but they are very close. They are always together, even at the weekend. It is a beautiful friendship: they are brothers and friends.",
      },
      {
        fr: "Là, c'est ma grand-mère. Elle est retraitée, mais elle est très active. C'est une cuisinière formidable ! Et voici mon grand-père. Il est boulanger. C'est un homme gentil et patient. Il est vieux maintenant, mais il est toujours fort. Ce sont mes grands-parents préférés, et ce sont aussi mes seuls grands-parents. Ils sont toujours contents de nous voir le dimanche.",
        TR: "Şurada büyükannem var. Emekli ama çok hareketli. Harika bir aşçı! Bu da büyükbabam. Fırıncı. Nazik ve sabırlı bir adam. Şimdi yaşlı ama hâlâ güçlü. Bunlar en sevdiğim büyükanne ve büyükbabam, aynı zamanda tek büyükanne ve büyükbabam. Bizi pazar günleri görünce hep memnun oluyorlar.",
        EN: "There, this is my grandmother. She is retired, but she is very active. She is a wonderful cook! And here is my grandfather. He is a baker. He is a kind and patient man. He is old now, but he is still strong. They are my favourite grandparents, and they are also my only grandparents. They are always happy to see us on Sunday.",
      },
      {
        fr: "Sur cette photo, ce sont mes amis de l'université : Emma, Hugo et Nadia. Emma est belge. Elle est journaliste maintenant. Hugo est étudiant en médecine. Il est très sérieux, mais il est aussi très drôle. Nadia est algérienne. C'est une fille très intelligente, et elle est avocate maintenant. Ce sont de vrais amis : ils sont toujours là quand j'ai un problème.",
        TR: "Bu fotoğrafta üniversiteden arkadaşlarım var: Emma, Hugo ve Nadia. Emma Belçikalı. Şimdi gazeteci. Hugo tıp öğrencisi. Çok ciddi ama aynı zamanda çok komik. Nadia Cezayirli. Çok zeki bir kız ve artık avukat. Bunlar gerçek arkadaşlar: bir sorunum olduğunda her zaman yanımdalar.",
        EN: "In this photo, these are my friends from university: Emma, Hugo and Nadia. Emma is Belgian. She is a journalist now. Hugo is a medical student. He is very serious, but he is also very funny. Nadia is Algerian. She is a very intelligent girl, and she is a lawyer now. They are real friends: they are always there when I have a problem.",
      },
      {
        fr: "Là, c'est notre maison. C'est une vieille maison : elle est belle, mais elle est petite. C'est dans un village, et c'est très calme. Et ici, c'est un restaurant. C'est un excellent restaurant, il est ouvert tous les jours. Il est près de la maison de mes grands-parents. C'est un endroit parfait pour les fêtes de famille. Le chef est un ami de mon père : il est italien, comme ma mère. Sa cuisine est simple, et c'est toujours délicieux.",
        TR: "Şurası evimiz. Eski bir ev: güzel ama küçük. Bir köyde ve çok sakin. Burası da bir restoran. Mükemmel bir restoran, her gün açık. Büyükannemle büyükbabamın evine yakın. Aile kutlamaları için mükemmel bir yer. Şef babamın bir arkadaşı: annem gibi İtalyan. Yemekleri sade ve her zaman lezzetli.",
        EN: "There, this is our house. It is an old house: it is beautiful, but it is small. It is in a village, and it is very quiet. And here, this is a restaurant. It is an excellent restaurant, it is open every day. It is near my grandparents' house. It is a perfect place for family parties. The chef is a friend of my father: he is Italian, like my mother. His cooking is simple, and it is always delicious.",
      },
      {
        fr: "Sara regarde l'heure. Il est quatre heures. « Il est déjà tard ? » demande-t-elle. Non, il est encore tôt pour partir. « C'est vraiment intéressant, dit-elle, mais c'est difficile de tout retenir ! » Je ris. C'est facile avec un peu de patience. C'est important d'avoir une famille et des amis, et c'est agréable de les présenter à une collègue. Sara est journaliste, comme Emma.",
        TR: "Sara saate bakıyor. Saat dört. “Çoktan geç oldu mu?” diye soruyor. Hayır, gitmek için hâlâ erken. “Gerçekten ilginç,” diyor, “ama her şeyi aklında tutmak zor!” Gülüyorum. Biraz sabırla kolay. Bir ailenin ve arkadaşların olması önemli, onları bir iş arkadaşına tanıtmak da güzel. Sara da Emma gibi gazeteci.",
        EN: "Sara looks at the time. It is four o'clock. “Is it already late?” she asks. No, it is still early to leave. “It is really interesting,” she says, “but it is difficult to remember everything!” I laugh. It is easy with a little patience. It is important to have a family and friends, and it is pleasant to introduce them to a colleague. Sara is a journalist, like Emma.",
      },
      {
        fr: "Je ferme l'album. Sara pose une dernière question : « Et cette petite fille, avec un grand chapeau ? Qui est-ce ? — C'est moi, à cinq ans ! » Elle rit aussi. Elle trouve la photo magnifique. « Tu es très jolie sur cette photo. » C'est un bon moment : une nouvelle amie, un vieil album, et beaucoup de sourires. Ce sont de petits bonheurs, mais ils sont précieux. Ce moment est court, mais il est inoubliable.",
        TR: "Albümü kapatıyorum. Sara son bir soru soruyor: “Peki büyük şapkalı şu küçük kız? Kim bu? — Bu benim, beş yaşında!” O da gülüyor. Fotoğrafı muhteşem buluyor. “Bu fotoğrafta çok güzelsin.” Güzel bir an: yeni bir arkadaş, eski bir albüm ve bir sürü gülümseme. Bunlar küçük mutluluklar ama değerliler. Bu an kısa ama unutulmaz.",
        EN: "I close the album. Sara asks one last question: “And this little girl, with a big hat? Who is it? — It is me, at five years old!” She laughs too. She finds the photo magnificent. “You are very pretty in this photo.” It is a good moment: a new friend, an old album, and a lot of smiles. They are small joys, but they are precious. This moment is short, but it is unforgettable.",
      },
    ],
    questions: [
      {
        question: { fr: "Qui est Sara ?", TR: "Sara kimdir?", EN: "Who is Sara?" },
        options: ["La sœur de la narratrice", "Une nouvelle collègue", "Une amie d'enfance", "Une voisine"],
        answer: 1,
      },
      {
        question: { fr: "Quel est le métier du grand-père ?", TR: "Büyükbabanın mesleği nedir?", EN: "What is the grandfather's job?" },
        options: ["Ingénieur", "Avocat", "Cuisinier", "Boulanger"],
        answer: 3,
      },
      {
        question: { fr: "De quelle nationalité est Nadia ?", TR: "Nadia hangi milliyetten?", EN: "What nationality is Nadia?" },
        options: ["Belge", "Algérienne", "Française", "Italienne"],
        answer: 1,
      },
      {
        question: { fr: "Comment est la maison de la famille ?", TR: "Ailenin evi nasıl?", EN: "What is the family's house like?" },
        options: ["Elle est grande et moderne", "Elle est vieille, belle et petite", "Elle est dans une ville bruyante"],
        answer: 1,
      },
      {
        question: { fr: "Qui est la petite fille avec un grand chapeau ?", TR: "Büyük şapkalı küçük kız kim?", EN: "Who is the little girl with a big hat?" },
        options: ["Nadia", "La narratrice", "Sara", "La mère"],
        answer: 1,
      },
    ],
  },
];

export default texts;
