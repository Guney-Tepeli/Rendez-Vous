import type { ReadingText } from "../../domain/types";

// Compact builders keep the 13 texts readable; the data is plain.
const p = (fr: string, TR: string, EN: string) => ({ fr, TR, EN });
const q = (fr: string, TR: string, EN: string, options: string[], answer: number) => ({
  question: { fr, TR, EN },
  options,
  answer,
});

const texts: readonly ReadingText[] = [
  {
    id: "reading-reading-rules",
    lessonId: "reading-rules",
    level: "A1",
    title: { TR: "Küçük bir kasaba", EN: "A small town" },
    paragraphs: [
      p(
        "Bonjour ! Je suis Marie et je suis française. J'habite dans une petite ville près de Paris. Il y a un château, une église et une rue avec des boutiques. Le matin, il fait beau et le ciel est bleu. J'aime beaucoup la ville et je suis très contente ici. Les gens sont gentils et les rues sont jolies. Vous parlez français ? Alors, bienvenue !",
        "Merhaba! Ben Marie, Fransızım. Paris'in yakınında küçük bir kasabada oturuyorum. Bir şato, bir kilise ve dükkânlarla dolu bir sokak var. Sabahları hava güzel ve gökyüzü mavi. Kasabayı çok seviyorum ve burada çok mutluyum. İnsanlar kibar ve sokaklar güzel. Fransızca konuşuyor musunuz? O hâlde hoş geldiniz!",
        "Hello! I am Marie and I am French. I live in a small town near Paris. There is a castle, a church and a street with shops. In the morning the weather is nice and the sky is blue. I like the town a lot and I am very happy here. The people are kind and the streets are pretty. Do you speak French? Then welcome!",
      ),
      p(
        "Le matin, je mange un croissant chaud et je regarde la rue. Dans la rue, il y a une boulangerie. Le boulanger est Bruno. Il est toujours content. Il fait des gâteaux, des tartes et des baguettes. Chez lui, il y a une bonne odeur de beurre. Bonjour, Bruno ! Bonjour, Marie !",
        "Sabahları sıcak bir kruvasan yiyorum ve sokağa bakıyorum. Sokakta bir fırın var. Fırıncı Bruno. Her zaman neşeli. Pastalar, turtalar ve baget yapıyor. Onun dükkânında güzel bir tereyağı kokusu var. Günaydın Bruno! Günaydın Marie!",
        "In the morning I eat a warm croissant and look at the street. In the street there is a bakery. The baker is Bruno. He is always happy. He makes cakes, tarts and baguettes. At his shop there is a good smell of butter. Hello, Bruno! Hello, Marie!",
      ),
      p(
        "Chloé est une amie. Elle travaille à l'école. Elle est professeur. Elle a douze élèves et un petit chat blanc. Le chat est Mouchoir. Il est très drôle. Chloé et moi, nous aimons la musique. Le soir, nous écoutons des chansons à la maison. Chloé chante bien, mais moi, je chante mal. Nous rions beaucoup !",
        "Chloé bir arkadaşım. Okulda çalışıyor. Öğretmen. On iki öğrencisi ve küçük beyaz bir kedisi var. Kedi Mouchoir. Çok komik. Chloé ve ben müziği severiz. Akşamları evde şarkı dinleriz. Chloé güzel şarkı söyler ama ben kötü söylerim. Çok gülüyoruz!",
        "Chloé is a friend. She works at the school. She is a teacher. She has twelve pupils and a small white cat. The cat is Mouchoir. He is very funny. Chloé and I love music. In the evening we listen to songs at home. Chloé sings well, but I sing badly. We laugh a lot!",
      ),
      p(
        "Le samedi, il y a un grand marché. Il y a beaucoup de choses : des fruits, des légumes, des fromages, des poissons et des fleurs. Un monsieur vend des oignons et des champignons. Une madame vend des pots de miel. Les prix sont bons. Les gens parlent, rient et choisissent des produits frais. Le marché est un bel endroit, vraiment.",
        "Cumartesi günleri büyük bir pazar var. Bir sürü şey var: meyve, sebze, peynir, balık ve çiçek. Bir bey soğan ve mantar satıyor. Bir hanım bal kavanozları satıyor. Fiyatlar uygun. İnsanlar konuşuyor, gülüyor ve taze ürünler seçiyor. Pazar gerçekten güzel bir yer.",
        "On Saturdays there is a big market. There are many things: fruit, vegetables, cheese, fish and flowers. A man sells onions and mushrooms. A lady sells jars of honey. The prices are good. People talk, laugh and choose fresh products. The market is a lovely place, really.",
      ),
      p(
        "Après le marché, nous mangeons à la maison. Chloé fait une soupe de légumes. Moi, je prépare une salade verte avec des tomates. Nous mangeons sur le balcon, et le soleil est chaud. Un oiseau noir chante dans l'arbre. Il y a un peu de vent, mais il fait chaud. Quel beau jour !",
        "Pazardan sonra evde yemek yeriz. Chloé sebze çorbası yapar. Ben domatesli yeşil bir salata hazırlarım. Balkonda yeriz ve güneş sıcak. Ağaçta siyah bir kuş ötüyor. Biraz rüzgâr var ama hava sıcak. Ne güzel bir gün!",
        "After the market we eat at home. Chloé makes a vegetable soup. I prepare a green salad with tomatoes. We eat on the balcony, and the sun is warm. A black bird sings in the tree. There is a little wind, but it is warm. What a beautiful day!",
      ),
      p(
        "L'après-midi, nous visitons le château. Il est vieux et très grand. Dans le jardin, il y a un bassin avec des poissons rouges. Un guide parle de l'histoire de la ville. Il explique les rois, les reines et les batailles. Les enfants écoutent avec attention. Moi, j'aime les tableaux dans la grande salle.",
        "Öğleden sonra şatoyu geziyoruz. Eski ve çok büyük. Bahçede kırmızı balıklı bir havuz var. Bir rehber şehrin tarihinden söz ediyor. Kralları, kraliçeleri ve savaşları anlatıyor. Çocuklar dikkatle dinliyor. Ben büyük salondaki tabloları seviyorum.",
        "In the afternoon we visit the castle. It is old and very big. In the garden there is a pond with goldfish. A guide talks about the history of the town. He explains the kings, the queens and the battles. The children listen with attention. I like the paintings in the big hall.",
      ),
      p(
        "Après le château, nous marchons près de la rivière. L'eau est claire et froide. Il y a des canards et un pont en bois. Un pêcheur attend un poisson depuis une heure. Nous regardons les bateaux blancs. Chloé joue avec un chien joyeux. Les enfants lancent des miettes dans l'eau. Dans le parc, un vieux monsieur lit un journal sur un banc. Il y a une grande paix, ici.",
        "Şatodan sonra nehrin yanında yürüyoruz. Su berrak ve soğuk. Ördekler ve tahta bir köprü var. Bir balıkçı bir saattir balık bekliyor. Beyaz teknelere bakıyoruz. Chloé neşeli bir köpekle oynuyor. Çocuklar suya ekmek kırıntısı atıyor. Parkta yaşlı bir bey bankta gazete okuyor. Burada huzur var.",
        "After the castle we walk near the river. The water is clear and cold. There are ducks and a wooden bridge. A fisherman has been waiting for a fish for an hour. We look at the white boats. Chloé plays with a happy dog. The children throw crumbs into the water. In the park an old man reads a newspaper on a bench. There is peace here.",
      ),
      p(
        "Le soir, je suis un peu fatiguée, mais heureuse. Je regarde la télévision avec le chat noir. Bonsoir, la ville ! Bonsoir, Chloé ! Demain, je travaille, mais je suis contente. J'aime la vie ici. Et vous ? Vous habitez en France ? Vous aimez la ville ? Au revoir, et à bientôt !",
        "Akşamları biraz yorgunum ama mutluyum. Siyah kediyle televizyon izliyorum. İyi akşamlar kasaba! İyi akşamlar Chloé! Yarın çalışıyorum ama mutluyum. Buradaki hayatı seviyorum. Ya siz? Fransa'da mı oturuyorsunuz? Kasabayı seviyor musunuz? Görüşmek üzere, hoşça kalın!",
        "In the evening I am a little tired, but happy. I watch television with the black cat. Good evening, town! Good evening, Chloé! Tomorrow I work, but I am happy. I like the life here. And you? Do you live in France? Do you like the town? Goodbye, and see you soon!",
      ),
    ],
    questions: [
      q("Où habite Marie ?", "Marie nerede oturuyor?", "Where does Marie live?", ["Dans une petite ville près de Paris", "À Lyon", "Dans un château", "À la campagne"], 0),
      q("Que fait Bruno ?", "Bruno ne iş yapıyor?", "What does Bruno do?", ["Il est professeur", "Il est boulanger", "Il vend des fleurs", "Il est guide"], 1),
      q("De quelle couleur est le chat de Chloé ?", "Chloé'nin kedisi ne renk?", "What colour is Chloé's cat?", ["Noir", "Rouge", "Blanc"], 2),
      q("Quand est-ce que les amies vont au marché ?", "Arkadaşlar pazara ne zaman gider?", "When do the friends go to the market?", ["Le samedi", "Le soir", "Le lundi", "Le dimanche"], 0),
      q("Où est-ce que Marie et Chloé mangent ?", "Marie ile Chloé nerede yemek yer?", "Where do Marie and Chloé eat?", ["Au restaurant", "Au château", "Sur le balcon", "Au marché"], 2),
    ],
  },
  {
    id: "reading-etre-avoir",
    lessonId: "etre-avoir",
    level: "A1",
    title: { TR: "Karim, öğrenci", EN: "Karim, a student" },
    paragraphs: [
      p(
        "Bonjour, je suis Karim. Je suis turc, mais je suis à Lyon pour les études. J'ai vingt ans. Je suis étudiant en informatique. Je suis grand et j'ai les cheveux noirs. J'ai des lunettes rondes et un petit sac bleu pour les livres. Aujourd'hui, je suis content, parce que c'est dimanche et nous sommes tous à la maison. Voici une journée avec les amis.",
        "Merhaba, ben Karim. Türküm ama eğitim için Lyon'dayım. Yirmi yaşındayım. Bilgisayar bilimleri öğrencisiyim. Uzunum ve saçlarım siyah. Yuvarlak gözlüğüm ve kitaplar için küçük mavi bir çantam var. Bugün mutluyum, çünkü pazar ve hepimiz evdeyiz. İşte arkadaşlarla bir gün.",
        "Hello, I am Karim. I am Turkish, but I am in Lyon to study. I am twenty years old. I am a computer science student. I am tall and I have black hair. I have round glasses and a small blue bag for books. Today I am happy, because it is Sunday and we are all at home. Here is a day with friends.",
      ),
      p(
        "L'appartement est petit, mais il est confortable. Il a deux pièces : une chambre et un salon. Il a aussi une petite cuisine et une salle de bains. Dans la chambre, il y a un lit, une table et une chaise. Dans le salon, il y a un canapé bleu et une grande télévision. Le balcon est minuscule, mais il est très agréable. Nous sommes deux dans l'appartement : Julien et moi.",
        "Daire küçük ama rahat. İki odası var: bir yatak odası ve bir salon. Ayrıca küçük bir mutfağı ve bir banyosu var. Yatak odasında bir yatak, bir masa ve bir sandalye var. Salonda mavi bir kanepe ve büyük bir televizyon var. Balkon çok küçük ama çok keyifli. Dairede iki kişiyiz: Julien ve ben.",
        "The flat is small, but it is comfortable. It has two rooms: a bedroom and a living room. It also has a small kitchen and a bathroom. In the bedroom there is a bed, a table and a chair. In the living room there is a blue sofa and a big television. The balcony is tiny, but it is very pleasant. There are two of us in the flat: Julien and me.",
      ),
      p(
        "Julien est français. Il a vingt-deux ans et il est de Marseille. Il est étudiant en médecine. Il a beaucoup de cours, alors il est souvent fatigué. Mais il est toujours de bonne humeur ! Il est sportif et très drôle. Il a un vélo rouge et une guitare. Il est un peu désordonné, mais il est gentil. Nous sommes de bons amis.",
        "Julien Fransız. Yirmi iki yaşında ve Marsilyalı. Tıp öğrencisi. Çok dersi var, bu yüzden sık sık yorgun. Ama her zaman keyfi yerinde! Sportif ve çok komik. Kırmızı bir bisikleti ve bir gitarı var. Biraz dağınık ama iyi biri. İyi arkadaşız.",
        "Julien is French. He is twenty-two and he is from Marseille. He is a medicine student. He has a lot of classes, so he is often tired. But he is always in a good mood! He is sporty and very funny. He has a red bike and a guitar. He is a bit untidy, but he is kind. We are good friends.",
      ),
      p(
        "Nous avons aussi deux amies : Sofia et Léa. Sofia est espagnole. Elle a un frère et deux sœurs. Elle est blonde et elle a les yeux verts. Elle est très calme. Léa est canadienne. Elle est de Montréal. Elle a un chien énorme, il est adorable ! Les deux amies sont sympathiques et elles sont toujours à l'heure. Moi, je suis souvent en retard !",
        "Ayrıca iki arkadaşımız var: Sofia ve Léa. Sofia İspanyol. Bir erkek ve iki kız kardeşi var. Sarışın ve yeşil gözlü. Çok sakin. Léa Kanadalı. Montréal'li. Kocaman bir köpeği var, çok sevimli! İki arkadaş cana yakın ve her zaman vaktinde. Ben ise sık sık geç kalıyorum!",
        "We also have two friends: Sofia and Léa. Sofia is Spanish. She has a brother and two sisters. She is blonde and she has green eyes. She is very calm. Léa is Canadian. She is from Montreal. She has a huge dog, he is adorable! The two friends are nice and they are always on time. I am often late!",
      ),
      p(
        "L'université est grande. Elle a une bibliothèque, un restaurant et un stade. Les professeurs sont sympathiques. Le professeur d'informatique a soixante ans, mais il est très moderne. Le restaurant universitaire est bon et bon marché. Les étudiants sont nombreux : ils sont plus de mille ! Nous avons un examen lundi. Nous sommes stressés ! Julien a peur. Moi, j'ai des notes, mais je suis nerveux aussi. Sofia et Léa sont calmes : elles sont chanceuses.",
        "Üniversite büyük. Bir kütüphanesi, bir restoranı ve bir stadyumu var. Öğretmenler cana yakın. Bilgisayar hocasının altmış yaşında ama çok modern. Üniversite lokantası iyi ve ucuz. Öğrenciler çok kalabalık: bin kişiden fazlalar! Pazartesi bir sınavımız var. Stresliyiz! Julien korkuyor. Benim notlarım var ama ben de gerginim. Sofia ile Léa sakin: şanslılar.",
        "The university is big. It has a library, a restaurant and a stadium. The teachers are nice. The computer science teacher is sixty, but he is very modern. The university canteen is good and cheap. The students are numerous: there are more than a thousand of them! We have an exam on Monday. We are stressed! Julien is afraid. I have my notes, but I am nervous too. Sofia and Léa are calm: they are lucky.",
      ),
      p(
        "Il est midi. Nous sommes dans le parc avec les amis. Le soleil est chaud. Nous avons chaud et nous avons soif. Léa a une grande bouteille d'eau. Julien a faim, alors il a des sandwichs. Sofia a un ballon, et nous sommes tous heureux. Le chien de Léa est avec nous. Il a très envie de jouer !",
        "Öğle oldu. Arkadaşlarla parktayız. Güneş sıcak. Sıcaklıyoruz ve susadık. Léa'nın büyük bir su şişesi var. Julien'in karnı aç, bu yüzden sandviçleri var. Sofia'nın bir topu var ve hepimiz mutluyuz. Léa'nın köpeği bizimle. Çok oynamak istiyor!",
        "It is noon. We are in the park with our friends. The sun is hot. We are hot and we are thirsty. Léa has a big bottle of water. Julien is hungry, so he has sandwiches. Sofia has a ball, and we are all happy. Léa's dog is with us. He really wants to play!",
      ),
      p(
        "Le soir, nous sommes à la maison. Nous sommes fatigués, mais nous sommes heureux. Julien est sur le canapé. Il a une guitare. Moi, j'ai un livre. Sofia et Léa sont chez elles, mais elles sont avec nous par téléphone. Dehors, il fait nuit, et la ville est belle. Quelle bonne journée ! Et vous ? Vous êtes étudiant ? Vous avez des amis ? Vous êtes content aujourd'hui ?",
        "Akşam evdeyiz. Yorgunuz ama mutluyuz. Julien kanepede. Elinde bir gitar var. Benim de bir kitabım var. Sofia ile Léa kendi evlerinde ama telefonla bizimle. Dışarıda hava karanlık ve şehir güzel. Ne güzel bir gün! Ya siz? Öğrenci misiniz? Arkadaşlarınız var mı? Bugün mutlu musunuz?",
        "In the evening we are at home. We are tired, but we are happy. Julien is on the sofa. He has a guitar. I have a book. Sofia and Léa are at their homes, but they are with us on the phone. Outside it is night, and the city is beautiful. What a good day! And you? Are you a student? Do you have friends? Are you happy today?",
      ),
    ],
    questions: [
      q("Qui est Karim ?", "Karim kim?", "Who is Karim?", ["Un professeur français", "Un étudiant turc à Lyon", "Un médecin canadien"], 1),
      q("Julien est de quelle ville ?", "Julien hangi şehirli?", "Which city is Julien from?", ["De Montréal", "De Marseille", "De Lyon", "D'Espagne"], 1),
      q("Qui a un chien énorme ?", "Kocaman bir köpeği olan kim?", "Who has a huge dog?", ["Sofia", "Julien", "Léa", "Karim"], 2),
      q("Pourquoi est-ce que les amis ont soif au parc ?", "Arkadaşlar parkta neden susuyor?", "Why are the friends thirsty at the park?", ["Parce qu'ils ont chaud", "Parce qu'ils ont un examen", "Parce qu'ils sont fatigués"], 0),
      q("Qui a peur de l'examen ?", "Sınavdan korkan kim?", "Who is afraid of the exam?", ["Sofia", "Léa", "Julien", "Le professeur"], 2),
    ],
  },
  {
    id: "reading-er-verbs",
    lessonId: "er-verbs",
    level: "A1",
    title: { TR: "Bordeaux'da bir aile", EN: "A family in Bordeaux" },
    paragraphs: [
      p(
        "Je suis Thomas et j'habite à Bordeaux avec la famille. Nous aimons la ville, parce qu'elle est belle et tranquille. Le matin, j'écoute la radio et je prépare le café. Papa cherche le journal, Maman téléphone à une amie et la petite sœur chante dans la salle de bains. Chaque matin, la maison est pleine de bruit !",
        "Ben Thomas ve ailemle Bordeaux'da oturuyorum. Bu şehri seviyoruz, çünkü güzel ve sakin. Sabahları radyo dinliyorum ve kahve hazırlıyorum. Babam gazeteyi arıyor, annem bir arkadaşına telefon ediyor, küçük kız kardeşim banyoda şarkı söylüyor. Her sabah ev gürültüyle dolu!",
        "I am Thomas and I live in Bordeaux with the family. We like this city, because it is beautiful and quiet. In the morning I listen to the radio and I make the coffee. Dad looks for the newspaper, Mum phones a friend and the little sister sings in the bathroom. Every morning the house is full of noise!",
      ),
      p(
        "Papa travaille dans une banque. Il arrive dans le bureau très tôt et il commence la journée avec un thé. Maman travaille à l'hôpital. Elle soigne les malades et elle aide les médecins. Le soir, elle rentre fatiguée, mais elle chante toujours un peu. Papa et Maman adorent le métier, et nous respectons beaucoup le travail des parents.",
        "Babam bir bankada çalışıyor. Ofise çok erken geliyor ve güne bir çayla başlıyor. Annem hastanede çalışıyor. Hastalara bakıyor ve doktorlara yardım ediyor. Akşamları yorgun eve dönüyor ama hep biraz şarkı söylüyor. Babam ve annem mesleklerini çok seviyor, biz de anne babanın işine çok saygı duyuyoruz.",
        "Dad works in a bank. He arrives at the office very early and he starts the day with a tea. Mum works at the hospital. She looks after the sick and she helps the doctors. In the evening she comes home tired, but she always sings a little. Dad and Mum love the job, and we respect the parents' work a lot.",
      ),
      p(
        "Moi, j'étudie l'histoire à l'université. Je regarde des films historiques et je visite les musées de la ville. Je travaille aussi dans un petit café le samedi. Je prépare des sandwichs et je parle avec les clients. Tu aimes l'histoire ? Alors, tu adores peut-être les vieux châteaux de la région. Bordeaux est plein de trésors, et j'adore ça !",
        "Ben üniversitede tarih okuyorum. Tarihî filmler izliyorum ve şehrin müzelerini geziyorum. Cumartesi günleri küçük bir kafede de çalışıyorum. Sandviç hazırlıyorum ve müşterilerle konuşuyorum. Sen tarihi seviyor musun? O zaman belki bölgenin eski şatolarına bayılırsın. Bordeaux hazinelerle dolu ve ben buna bayılıyorum!",
        "I study history at the university. I watch historical films and I visit the museums of the city. I also work in a small café on Saturdays. I make sandwiches and I talk with the customers. Do you like history? Then maybe you love the old castles of the region. Bordeaux is full of treasures, and I love that!",
      ),
      p(
        "La petite sœur, c'est Camille. Elle étudie à l'école primaire. Elle adore dessiner et elle aime beaucoup le piano. Camille regarde les dessins animés et elle écoute toujours la même chanson. Elle danse dans le salon et elle trouve le chat très drôle. Moi, je pense qu'elle a un grand talent. Je cherche un professeur de musique pour elle, et nous demandons des conseils.",
        "Küçük kız kardeşim Camille. İlkokulda okuyor. Resim yapmaya bayılıyor ve piyanoyu çok seviyor. Camille çizgi film izliyor ve hep aynı şarkıyı dinliyor. Salonda dans ediyor ve kediyi çok komik buluyor. Bence büyük bir yeteneği var. Onun için bir müzik öğretmeni arıyorum ve tavsiye soruyoruz.",
        "The little sister is Camille. She studies at primary school. She loves drawing and she likes the piano a lot. Camille watches cartoons and she always listens to the same song. She dances in the living room and she finds the cat very funny. I think she has a great talent. I am looking for a music teacher for her, and we ask for advice.",
      ),
      p(
        "Le dimanche, nous invitons les grands-parents. Mamie cuisine une tarte et Papi apporte une bouteille de vin. Nous dînons ensemble dans le jardin. Les enfants jouent avec un ballon, les adultes bavardent et le chien mange sous la table. Mamie demande : « Vous aimez la tarte ? » Nous répondons : « Nous adorons ! » Mamie sourit, et Papi raconte une histoire.",
        "Pazar günleri büyükanne ve büyükbabayı davet ediyoruz. Büyükanne bir tart pişiriyor, büyükbaba bir şişe şarap getiriyor. Bahçede birlikte akşam yemeği yiyoruz. Çocuklar topla oynuyor, yetişkinler sohbet ediyor ve köpek masanın altında yiyor. Büyükanne soruyor: «Tartayı seviyor musunuz?» Biz yanıtlıyoruz: «Bayılıyoruz!» Büyükanne gülümsüyor, büyükbaba bir hikâye anlatıyor.",
        "On Sundays we invite the grandparents. Grandma cooks a tart and Grandpa brings a bottle of wine. We have dinner together in the garden. The children play with a ball, the adults chat and the dog eats under the table. Grandma asks: “Do you like the tart?” We answer: “We love it!” Grandma smiles, and Grandpa tells a story.",
      ),
      p(
        "Les amis habitent près de la maison. Antoine et Léo jouent avec moi dans le parc. Ils arrivent à midi et nous parlons de tout : de l'école, des voyages, des films. Léo rêve de Paris, mais Antoine préfère la campagne. Moi, j'adore Bordeaux et les rues de la ville. Nous marchons beaucoup et nous découvrons toujours un nouveau café.",
        "Arkadaşlar evin yakınında oturuyor. Antoine ve Léo benimle parkta oynuyor. Öğlen geliyorlar ve her şeyden söz ediyoruz: okuldan, seyahatlerden, filmlerden. Léo Paris'i hayal ediyor ama Antoine kırı tercih ediyor. Ben Bordeaux'ya ve şehrin sokaklarına bayılıyorum. Çok yürüyoruz ve hep yeni bir kafe keşfediyoruz.",
        "The friends live near the house. Antoine and Léo play with me in the park. They arrive at noon and we talk about everything: school, trips, films. Léo dreams of Paris, but Antoine prefers the countryside. I love Bordeaux and the streets of the city. We walk a lot and we always discover a new café.",
      ),
      p(
        "Le mercredi, Camille et moi, nous aidons Maman à la maison. Camille range les livres, je nettoie la cuisine et nous écoutons la radio. Ensuite, nous visitons le marché de la ville, nous achetons des pommes et nous rentrons à la maison. Maman remercie les enfants et elle prépare un gâteau pour le soir.",
        "Çarşamba günleri Camille'le ben evde anneme yardım ediyoruz. Camille kitapları topluyor, ben mutfağı temizliyorum ve radyo dinliyoruz. Sonra şehrin pazarını geziyoruz, elma alıyoruz ve eve dönüyoruz. Annem çocuklara teşekkür ediyor ve akşam için bir pasta hazırlıyor.",
        "On Wednesdays Camille and I help Mum at home. Camille tidies the books, I clean the kitchen and we listen to the radio. Then we visit the market of the city, we buy apples and we go back home. Mum thanks the children and she prepares a cake for the evening.",
      ),
      p(
        "Le soir, la famille est ensemble. Nous mangeons, nous écoutons la musique et nous parlons de la journée. Camille chante, Papa danse un peu et Maman rit. Vous aussi, vous parlez avec la famille le soir ? Vous cuisinez ensemble ? Vous regardez un film ? Chez nous, c'est comme ça. Je pense que la vie est simple quand on aime les gens autour de soi.",
        "Akşamları aile bir arada. Yemek yiyoruz, müzik dinliyoruz ve günden söz ediyoruz. Camille şarkı söylüyor, babam biraz dans ediyor, annem gülüyor. Siz de akşamları ailenizle konuşuyor musunuz? Birlikte yemek pişiriyor musunuz? Bir film izliyor musunuz? Bizde böyle. Bence çevremizdeki insanları sevince hayat basit.",
        "In the evening the family is together. We eat, we listen to music and we talk about the day. Camille sings, Dad dances a little and Mum laughs. Do you also talk with your family in the evening? Do you cook together? Do you watch a film? At our place, it is like that. I think life is simple when you love the people around you.",
      ),
    ],
    questions: [
      q("Où habite Thomas ?", "Thomas nerede oturuyor?", "Where does Thomas live?", ["À Paris", "À Lyon", "À Bordeaux"], 2),
      q("Où travaille la mère de Thomas ?", "Thomas'nın annesi nerede çalışıyor?", "Where does Thomas's mother work?", ["Dans une banque", "Dans un café", "À l'école", "À l'hôpital"], 3),
      q("Que fait Thomas le samedi ?", "Thomas cumartesi günleri ne yapıyor?", "What does Thomas do on Saturdays?", ["Il danse dans le salon", "Il travaille dans un café", "Il visite les grands-parents"], 1),
      q("Qui cherche un professeur de musique pour Camille ?", "Camille için müzik öğretmeni arayan kim?", "Who is looking for a music teacher for Camille?", ["Antoine", "Léo", "Thomas", "Papi"], 2),
      q("Avec qui est-ce que la famille dîne le dimanche ?", "Aile pazar günleri kimle akşam yemeği yiyor?", "Who does the family have dinner with on Sundays?", ["Avec les voisins", "Avec les grands-parents", "Avec les amis de Thomas", "Avec les collègues"], 1),
    ],
  },
  {
    id: "reading-ne-pas",
    lessonId: "ne-pas",
    level: "A1",
    title: { TR: "Kırda bir hafta sonu", EN: "A weekend in the countryside" },
    paragraphs: [
      p(
        "Sophie adore la campagne. Paul, lui, adore la ville. Le week-end, Sophie invite Paul dans une petite maison près d'un village. Paul n'est pas très content. Il n'aime pas le silence et il n'aime pas les animaux. Il dit : « Je n'ai pas envie de partir. À la campagne, il n'y a pas de cinéma et il n'y a pas de café ! » Sophie sourit et elle ne change pas d'avis.",
        "Sophie kırı çok seviyor. Paul ise şehri seviyor. Hafta sonu Sophie, Paul'ü bir köyün yakınındaki küçük bir eve davet ediyor. Paul pek mutlu değil. Sessizliği sevmiyor, hayvanları da sevmiyor. Şöyle diyor: «Gitmek istemiyorum. Kırda sinema yok, kafe yok!» Sophie gülümsüyor ve fikrini değiştirmiyor.",
        "Sophie loves the countryside. Paul, on the other hand, loves the city. At the weekend Sophie invites Paul to a small house near a village. Paul is not very happy. He does not like silence and he does not like animals. He says: “I don't feel like leaving. In the countryside there is no cinema and there is no café!” Sophie smiles and she does not change her mind.",
      ),
      p(
        "Dans la voiture, Paul regarde le téléphone. Il n'a pas de réseau ! Il n'a pas de messages et il n'a pas d'internet. Il est nerveux. Sophie rit : « Tu n'écoutes pas la radio ? Tu ne regardes pas le paysage ? Il est magnifique ! » Paul ne répond pas. Il regarde les champs verts et il ne parle pas pendant dix minutes.",
        "Arabada Paul telefona bakıyor. Hiç sinyal yok! Mesaj yok, internet yok. Gergin. Sophie gülüyor: «Radyo dinlemiyor musun? Manzaraya bakmıyor musun? Muhteşem!» Paul cevap vermiyor. Yeşil tarlalara bakıyor ve on dakika boyunca konuşmuyor.",
        "In the car Paul looks at the phone. He has no signal! He has no messages and he has no internet. He is nervous. Sophie laughs: “Aren't you listening to the radio? Aren't you looking at the landscape? It is magnificent!” Paul does not answer. He looks at the green fields and he does not talk for ten minutes.",
      ),
      p(
        "La maison est vieille, mais elle est jolie. Il n'y a pas de télévision et il n'y a pas de voisins. Il y a un jardin avec des fleurs et un grand arbre. Paul entre dans la cuisine. Il n'y a pas de lave-vaisselle et il n'y a pas de micro-ondes ! Sophie préfère la maison simple. Elle ne cherche pas le confort moderne, elle cherche le calme.",
        "Ev eski ama güzel. Televizyon yok, komşu yok. Çiçekli bir bahçe ve büyük bir ağaç var. Paul mutfağa giriyor. Bulaşık makinesi yok, mikrodalga da yok! Sophie bu sade evi tercih ediyor. Modern konforu aramıyor, huzuru arıyor.",
        "The house is old, but it is pretty. There is no television and there are no neighbours. There is a garden with flowers and a big tree. Paul goes into the kitchen. There is no dishwasher and there is no microwave! Sophie prefers this simple house. She is not looking for modern comfort, she is looking for calm.",
      ),
      p(
        "Le matin, un coq chante très fort. Paul ne dort pas bien. Il n'est pas de bonne humeur. Sophie prépare un petit déjeuner : elle cuisine des œufs et elle coupe des tomates. Paul ne mange pas beaucoup. Il n'a pas faim et le coq est trop bruyant. Sophie ne rit pas, mais elle sourit. Elle comprend bien l'ami de la ville.",
        "Sabah bir horoz çok yüksek sesle ötüyor. Paul iyi uyumuyor. Keyfi yerinde değil. Sophie bir kahvaltı hazırlıyor: yumurta pişiriyor ve domates doğruyor. Paul fazla yemiyor. Karnı aç değil ve horoz çok gürültülü. Sophie gülmüyor ama gülümsüyor. Şehirli arkadaşını iyi anlıyor.",
        "In the morning a rooster sings very loudly. Paul does not sleep well. He is not in a good mood. Sophie prepares a breakfast: she cooks eggs and she cuts tomatoes. Paul does not eat much. He is not hungry and the rooster is too noisy. Sophie does not laugh, but she smiles. She understands her city friend well.",
      ),
      p(
        "Après le petit déjeuner, ils marchent dans la forêt. Paul n'aime pas les insectes et il n'aime pas la boue. Il n'a pas de bonnes chaussures. Sophie ne parle pas : elle écoute les oiseaux. Soudain, Paul regarde un écureuil. L'animal ne bouge pas. Paul ne respire pas. Il est fasciné ! « Il est adorable », dit-il doucement.",
        "Kahvaltıdan sonra ormanda yürüyorlar. Paul böcekleri sevmiyor, çamuru da sevmiyor. İyi ayakkabıları yok. Sophie konuşmuyor: kuşları dinliyor. Birden Paul bir sincaba bakıyor. Hayvan kıpırdamıyor. Paul nefes almıyor. Büyülenmiş! «Çok sevimli,» diyor usulca.",
        "After breakfast they walk in the forest. Paul does not like insects and he does not like mud. He does not have good shoes. Sophie does not speak: she listens to the birds. Suddenly Paul looks at a squirrel. The animal does not move. Paul does not breathe. He is fascinated! “He is adorable,” he says softly.",
      ),
      p(
        "À midi, ils mangent près d'une rivière. Sophie a des sandwichs et des fruits. Paul n'a pas de pain, mais il a une bouteille de jus. Ils ne mangent pas vite. Ils regardent l'eau et ils écoutent les oiseaux. Paul oublie le téléphone. Il ne cherche pas le réseau et il ne lit pas les messages. Il est calme, et c'est nouveau !",
        "Öğlen bir nehrin yanında yemek yiyorlar. Sophie'nin sandviçleri ve meyveleri var. Paul'ün ekmeği yok ama bir şişe meyve suyu var. Hızlı yemiyorlar. Suya bakıyor ve kuşları dinliyorlar. Paul telefonu unutuyor. Sinyal aramıyor ve mesajları okumuyor. Sakin ve bu yeni bir şey!",
        "At noon they eat near a river. Sophie has sandwiches and fruit. Paul has no bread, but he has a bottle of juice. They do not eat fast. They look at the water and they listen to the birds. Paul forgets the phone. He does not look for signal and he does not read messages. He is calm, and that is new!",
      ),
      p(
        "Le soir, Sophie allume un feu. Il n'y a pas de télévision, alors ils parlent. Paul raconte des histoires de la ville et Sophie écoute. Ils rient beaucoup. Paul n'est pas triste, il n'est pas stressé. Il avoue : « Ce n'est pas mal, la campagne ! » Sophie ne répond pas, mais elle est très contente.",
        "Akşam Sophie bir ateş yakıyor. Televizyon yok, bu yüzden konuşuyorlar. Paul şehirden hikâyeler anlatıyor, Sophie dinliyor. Çok gülüyorlar. Paul üzgün değil, stresli de değil. İtiraf ediyor: «Kır fena değil!» Sophie cevap vermiyor ama çok memnun.",
        "In the evening Sophie lights a fire. There is no television, so they talk. Paul tells stories about the city and Sophie listens. They laugh a lot. Paul is not sad, he is not stressed. He admits: “The countryside is not bad!” Sophie does not answer, but she is very happy.",
      ),
      p(
        "Dimanche, Paul ne regarde pas l'heure. Sophie est surprise : « Tu n'as pas hâte de rentrer ? » Il répond : « Non, pas vraiment ! » Maintenant, Paul adore le silence, mais il n'adore pas le coq. Le week-end suivant, il invite Sophie en ville, et elle n'est pas contente.",
        "Pazar günü Paul saate bakmıyor. Sophie şaşırıyor: «Dönmek için acele etmiyor musun?» Paul cevap veriyor: «Hayır, pek değil!» Artık Paul sessizliği seviyor ama horozu sevmiyor. Sonraki hafta sonu Sophie'yi şehre davet ediyor, Sophie ise memnun değil.",
        "On Sunday Paul does not look at the time. Sophie is surprised: “Aren't you in a hurry to go home?” He answers: “No, not really!” Now Paul loves the silence, but he does not love the rooster. The following weekend he invites Sophie to the city, and she is not happy.",
      ),
    ],
    questions: [
      q("Pourquoi Paul n'est-il pas content au début ?", "Paul başta neden mutlu değil?", "Why is Paul not happy at the start?", ["Il n'aime pas le silence et les animaux", "Il n'a pas de voiture", "Il n'aime pas Sophie"], 0),
      q("Qu'est-ce qu'il n'y a pas dans la maison ?", "Evde ne yok?", "What is there not in the house?", ["Un jardin", "Une cuisine", "Une télévision", "Un arbre"], 2),
      q("Qu'est-ce que Paul regarde dans la forêt ?", "Paul ormanda neye bakıyor?", "What does Paul look at in the forest?", ["Un coq", "Un écureuil", "Un chien"], 1),
      q("Que fait Sophie le soir ?", "Sophie akşam ne yapıyor?", "What does Sophie do in the evening?", ["Elle regarde la télévision", "Elle cherche le réseau", "Elle allume un feu", "Elle prépare un gâteau"], 2),
      q("Qu'est-ce que Paul n'adore pas à la fin ?", "Paul sonunda neyi sevmiyor?", "What does Paul not love at the end?", ["Le silence", "Le coq", "La rivière", "La forêt"], 1),
    ],
  },
  {
    id: "reading-futur-proche",
    lessonId: "futur-proche",
    level: "A1",
    title: { TR: "Roma yolculuğu", EN: "The trip to Rome" },
    paragraphs: [
      p(
        "Demain, c'est le grand jour ! Nadia et Inès vont voyager à Rome. Elles vont visiter la ville pendant trois jours. Nadia est très excitée. Le soir, elle écrit dans un petit carnet : « Demain matin, je vais quitter la maison à six heures. Je vais arriver à l'aéroport très tôt. Je ne vais pas dormir beaucoup, mais ça n'est pas grave ! »",
        "Yarın büyük gün! Nadia ve Inès Roma'ya seyahat edecek. Şehri üç gün gezecekler. Nadia çok heyecanlı. Akşam küçük bir deftere şunu yazıyor: «Yarın sabah altıda evden çıkacağım. Havalimanına çok erken varacağım. Çok uyumayacağım ama önemli değil!»",
        "Tomorrow is the big day! Nadia and Inès are going to travel to Rome. They are going to visit the city for three days. Nadia is very excited. In the evening she writes in a small notebook: “Tomorrow morning I am going to leave the house at six o'clock. I am going to arrive at the airport very early. I am not going to sleep much, but it doesn't matter!”",
      ),
      p(
        "Le soir, Nadia prépare la valise. Elle va choisir des vêtements légers, parce que le soleil va être chaud. Elle va aussi acheter un guide de Rome. Inès téléphone et elle demande : « Tu vas vérifier le passeport ? » Nadia rit. « Oui, je vais chercher le passeport maintenant ! » Les deux amies ne vont pas oublier les billets non plus.",
        "Akşam Nadia valizi hazırlıyor. Hafif kıyafetler seçecek, çünkü güneş sıcak olacak. Ayrıca Roma için bir rehber kitap alacak. Inès telefon ediyor ve soruyor: «Pasaportu kontrol edecek misin?» Nadia gülüyor. «Evet, pasaportu şimdi arayacağım!» İki arkadaş biletleri de unutmayacak.",
        "In the evening Nadia prepares the suitcase. She is going to choose light clothes, because the sun is going to be hot. She is also going to buy a guide to Rome. Inès phones and asks: “Are you going to check the passport?” Nadia laughs. “Yes, I am going to look for the passport now!” The two friends are not going to forget the tickets either.",
      ),
      p(
        "Après le dîner, Nadia téléphone à Maman. Maman est un peu triste, mais elle est contente. Elle dit : « Tu vas être prudente ? Tu vas donner des nouvelles ? Tu vas porter le sac devant toi dans le métro ? » Nadia répond : « Oui, Maman, je vais être très prudente. Nous allons envoyer des photos chaque soir. Tu vas voir Rome avec nous ! » Maman rit : « D'accord, je vais attendre les photos avec impatience. »",
        "Akşam yemeğinden sonra Nadia annesine telefon ediyor. Annesi biraz üzgün ama memnun. Diyor ki: «Dikkatli olacak mısın? Haber verecek misin? Metroda çantayı önünde taşıyacak mısın?» Nadia yanıtlıyor: «Evet anne, çok dikkatli olacağım. Her akşam fotoğraf göndereceğiz. Roma'yı bizimle göreceksin!» Annesi gülüyor: «Tamam, fotoğrafları sabırsızlıkla bekleyeceğim.»",
        "After dinner Nadia phones Mum. Mum is a little sad, but she is happy. She says: “Are you going to be careful? Are you going to send news? Are you going to carry the bag in front of you on the metro?” Nadia answers: “Yes, Mum, I am going to be very careful. We are going to send photos every evening. You are going to see Rome with us!” Mum laughs: “All right, I am going to wait for the photos impatiently.”",
      ),
      p(
        "Inès a un plan très précis. Elle explique : « Lundi, nous allons arriver à l'hôtel et nous allons déposer les valises. Après, nous allons marcher dans le centre. Nous allons regarder la fontaine de Trevi et nous allons manger une glace. Mardi, nous allons visiter le Colisée. Mercredi, nous allons rencontrer un ami d'Inès, Marco. »",
        "Inès'in çok kesin bir planı var. Anlatıyor: «Pazartesi otele varacağız ve valizleri bırakacağız. Sonra merkezde yürüyeceğiz. Trevi Çeşmesi'ne bakacağız ve dondurma yiyeceğiz. Salı günü Kolezyum'u gezeceğiz. Çarşamba günü bir arkadaşla, Marco'yla buluşacağız.»",
        "Inès has a very precise plan. She explains: “On Monday we are going to arrive at the hotel and we are going to drop off the suitcases. After that we are going to walk in the centre. We are going to look at the Trevi fountain and we are going to eat an ice cream. On Tuesday we are going to visit the Colosseum. On Wednesday we are going to meet a friend, Marco.”",
      ),
      p(
        "Nadia écoute et elle est un peu inquiète. Elle dit : « Nous allons marcher beaucoup, alors nous allons porter des chaussures confortables. Et le soir ? Nous allons danser ? » Inès répond : « Nous allons dîner dans un petit restaurant. Marco va recommander une pizzeria. Tu vas adorer la cuisine italienne, j'en suis sûre ! »",
        "Nadia dinliyor ve biraz endişeli. Diyor ki: «Çok yürüyeceğiz, bu yüzden rahat ayakkabılar giyeceğiz. Peki akşam? Dans mı edeceğiz?» Inès yanıtlıyor: «Küçük bir restoranda akşam yemeği yiyeceğiz. Marco bir pizzacı önerecek. İtalyan mutfağına bayılacaksın, eminim!»",
        "Nadia listens and she is a little worried. She says: “We are going to walk a lot, so we are going to wear comfortable shoes. And in the evening? Are we going to dance?” Inès answers: “We are going to have dinner in a small restaurant. Marco is going to recommend a pizzeria. You are going to love Italian cuisine, I am sure!”",
      ),
      p(
        "Le matin, le taxi arrive. Le chauffeur est sympathique. Il demande : « Vous allez rester longtemps à Rome ? » Nadia répond : « Trois jours seulement. Nous allons travailler dur pour tout voir ! » Le chauffeur sourit : « Vous allez être fatiguées, mais vous allez adorer. La ville va vous surprendre. » Il adore Rome, alors il va donner un conseil : la glace à la pistache est la meilleure.",
        "Sabah taksi geliyor. Şoför cana yakın. Soruyor: «Roma'da uzun süre kalacak mısınız?» Nadia cevap veriyor: «Sadece üç gün. Her şeyi görmek için çok çalışacağız!» Şoför gülümsüyor: «Yorulacaksınız ama bayılacaksınız. Şehir sizi şaşırtacak.» Roma'ya bayılıyor, bu yüzden bir tavsiye verecek: Antep fıstıklı dondurma en iyisi.",
        "In the morning the taxi arrives. The driver is friendly. He asks: “Are you going to stay in Rome for long?” Nadia answers: “Only three days. We are going to work hard to see everything!” The driver smiles: “You are going to be tired, but you are going to love it. The city is going to surprise you.” He loves Rome, so he is going to give some advice: the pistachio ice cream is the best.",
      ),
      p(
        "À l'aéroport, les deux amies regardent le tableau des départs. L'avion va partir dans une heure. Nadia est nerveuse : elle n'aime pas voler. Inès parle doucement : « Tu vas écouter la musique et tu vas regarder un film. Tout va être parfait. » Nadia respire, elle sourit et elle dit : « D'accord, je vais essayer ! »",
        "Havalimanında iki arkadaş kalkış tablosuna bakıyor. Uçak bir saat sonra kalkacak. Nadia gergin: uçmayı sevmiyor. Inès yumuşak bir sesle konuşuyor: «Müzik dinleyeceksin ve bir film izleyeceksin. Her şey mükemmel olacak.» Nadia nefes alıyor, gülümsüyor ve diyor ki: «Tamam, deneyeceğim!»",
        "At the airport the two friends look at the departures board. The plane is going to leave in an hour. Nadia is nervous: she does not like flying. Inès speaks gently: “You are going to listen to music and you are going to watch a film. Everything is going to be perfect.” Nadia breathes, she smiles and she says: “All right, I am going to try!”",
      ),
      p(
        "Dans l'avion, Nadia ferme les yeux. Elle pense déjà à Rome. Elle va photographier les monuments, elle va écrire des cartes postales et elle va envoyer un message à la famille. Et vous ? Vous allez voyager bientôt ? Vous allez visiter une grande ville ? Alors, bon voyage, et n'oubliez pas : la meilleure chose, c'est le premier jour !",
        "Uçakta Nadia gözlerini kapatıyor. Şimdiden Roma'yı düşünüyor. Anıtların fotoğrafını çekecek, kartpostallar yazacak ve aileye mesaj gönderecek. Ya siz? Yakında seyahat edecek misiniz? Büyük bir şehri gezecek misiniz? O zaman iyi yolculuklar ve unutmayın: en güzel şey ilk gündür!",
        "On the plane Nadia closes her eyes. She is already thinking about Rome. She is going to photograph the monuments, she is going to write postcards and she is going to send a message to the family. And you? Are you going to travel soon? Are you going to visit a big city? Then have a good trip, and don't forget: the best thing is the first day!",
      ),
    ],
    questions: [
      q("Où vont Nadia et Inès ?", "Nadia ve Inès nereye gidiyor?", "Where are Nadia and Inès going?", ["À Rome", "À Paris", "À Madrid"], 0),
      q("Combien de temps vont-elles rester ?", "Ne kadar kalacaklar?", "How long are they going to stay?", ["Une semaine", "Deux jours", "Trois jours", "Un mois"], 2),
      q("Qui va recommander une pizzeria ?", "Pizzacı önerecek olan kim?", "Who is going to recommend a pizzeria?", ["Le chauffeur de taxi", "Marco", "Nadia", "L'hôtel"], 1),
      q("Pourquoi Nadia est-elle nerveuse à l'aéroport ?", "Nadia havalimanında neden gergin?", "Why is Nadia nervous at the airport?", ["Elle n'aime pas voler", "Elle oublie le passeport", "Elle n'a pas de billet"], 0),
      q("Que va faire Nadia pendant le voyage ?", "Nadia yolculuk sırasında ne yapacak?", "What is Nadia going to do during the trip?", ["Travailler dur", "Écrire des cartes postales", "Dormir à l'hôtel", "Rester à la maison"], 1),
    ],
  },
  {
    id: "reading-articles",
    lessonId: "articles",
    level: "A1",
    title: { TR: "Yeni daire", EN: "The new flat" },
    paragraphs: [
      p(
        "Emma a un nouvel appartement ! C'est un petit appartement dans le centre de la ville. Il y a une chambre, un salon et une cuisine. L'immeuble est vieux, mais l'escalier est joli. Il y a un ascenseur, mais il est en panne, alors les amis montent les meubles par l'escalier. C'est le troisième étage ! Emma est très heureuse. Elle a une amie, Julie, et un ami, Hugo, pour le déménagement. Le samedi matin, les trois amis arrivent avec des cartons.",
        "Emma'nın yeni bir dairesi var! Şehrin merkezinde küçük bir daire. Bir yatak odası, bir salon ve bir mutfak var. Bina eski ama merdiven güzel. Bir asansör var ama bozuk, bu yüzden arkadaşlar mobilyaları merdivenle çıkarıyor. Üçüncü kat! Emma çok mutlu. Taşınma için bir kız arkadaşı Julie ve bir erkek arkadaşı Hugo var. Cumartesi sabahı üç arkadaş kolilerle geliyor.",
        "Emma has a new flat! It is a small flat in the city centre. There is a bedroom, a living room and a kitchen. The building is old, but the staircase is pretty. There is a lift, but it is out of order, so the friends carry the furniture up the stairs. It is the third floor! Emma is very happy. She has a friend, Julie, and a friend, Hugo, for the move. On Saturday morning the three friends arrive with boxes.",
      ),
      p(
        "Dans le salon, il y a un canapé et une table. Hugo porte le canapé et Julie porte la table. Emma regarde le salon et elle réfléchit : « La télévision est là, la lampe est ici, et le tapis est devant la fenêtre. » Il y a aussi des étagères pour les livres. Emma aime les livres. Elle a des romans, des dictionnaires et un grand atlas. Dans le salon, il y a aussi une cheminée et un beau parquet.",
        "Salonda bir kanepe ve bir masa var. Hugo kanepeyi, Julie masayı taşıyor. Emma salona bakıyor ve düşünüyor: «Televizyon orada, lamba burada, halı da pencerenin önünde.» Kitaplar için raflar da var. Emma kitapları seviyor. Romanları, sözlükleri ve büyük bir atlası var. Salonda ayrıca bir şömine ve güzel bir parke var.",
        "In the living room there is a sofa and a table. Hugo carries the sofa and Julie carries the table. Emma looks at the living room and she thinks: “The television is there, the lamp is here, and the rug is in front of the window.” There are also shelves for the books. Emma likes books. She has novels, dictionaries and a big atlas. In the living room there is also a fireplace and a beautiful wooden floor.",
      ),
      p(
        "La cuisine est petite, mais elle est pratique. Il y a un frigo, une cuisinière et un évier. Julie ouvre un carton : il y a des assiettes, des verres, une casserole et une poêle. « Voilà la vaisselle ! » dit-elle. Hugo cherche le four, mais Emma explique : « Il y a un four dans la cuisinière. L'appartement n'est pas grand, mais la cuisine est complète. »",
        "Mutfak küçük ama kullanışlı. Bir buzdolabı, bir ocak ve bir evye var. Julie bir koli açıyor: tabaklar, bardaklar, bir tencere ve bir tava var. «İşte tabaklar bardaklar!» diyor. Hugo fırını arıyor ama Emma açıklıyor: «Ocağın içinde bir fırın var. Daire büyük değil ama mutfak eksiksiz.»",
        "The kitchen is small, but it is practical. There is a fridge, a cooker and a sink. Julie opens a box: there are plates, glasses, a saucepan and a frying pan. “Here are the dishes!” she says. Hugo looks for the oven, but Emma explains: “There is an oven in the cooker. The flat is not big, but the kitchen is complete.”",
      ),
      p(
        "Dans la chambre, il y a un lit, une armoire et une petite table de nuit. Emma installe la lampe, le réveil et un cadre avec une photo. Julie regarde la fenêtre : la vue est magnifique ! On voit la rue, une boulangerie, un café et l'église. « C'est une très bonne situation, dit-elle. Tu as le marché, la station de métro et le parc à côté. »",
        "Yatak odasında bir yatak, bir dolap ve küçük bir komodin var. Emma lambayı, çalar saati ve fotoğraflı bir çerçeveyi yerleştiriyor. Julie pencereye bakıyor: manzara muhteşem! Sokak, bir fırın, bir kafe ve kilise görünüyor. «Çok iyi bir konum,» diyor. «Pazar, metro istasyonu ve park yanı başında.»",
        "In the bedroom there is a bed, a wardrobe and a small bedside table. Emma sets up the lamp, the alarm clock and a frame with a photo. Julie looks at the window: the view is magnificent! You can see the street, a bakery, a café and the church. “It is a very good location,” she says. “You have the market, the metro station and the park next door.”",
      ),
      p(
        "À midi, les amis ont faim. Hugo adore la pizza, Julie préfère la salade, et Emma aime le chocolat. Ils téléphonent à une pizzeria. Le livreur arrive avec une pizza, une salade et un gâteau. Les trois amis mangent par terre, dans le salon, et ils rient. Dans un appartement vide, la pizza a un goût de fête !",
        "Öğlen arkadaşların karnı acıkıyor. Hugo pizzaya bayılıyor, Julie salatayı tercih ediyor, Emma çikolatayı seviyor. Bir pizzacıya telefon ediyorlar. Kurye bir pizza, bir salata ve bir pastayla geliyor. Üç arkadaş salonda yerde yemek yiyor ve gülüyorlar. Boş bir dairede pizzanın bir bayram tadı var!",
        "At noon the friends are hungry. Hugo loves pizza, Julie prefers salad, and Emma likes chocolate. They phone a pizzeria. The delivery man arrives with a pizza, a salad and a cake. The three friends eat on the floor, in the living room, and they laugh. In an empty flat, pizza tastes like a party!",
      ),
      p(
        "Après le repas, il y a encore beaucoup de travail. Emma ouvre des cartons de vêtements, de chaussures et de cadeaux. Il y a une surprise : un tableau de la grand-mère ! Le tableau est ancien, mais l'image est belle. Emma regarde le mur et elle décide : « Le tableau va rester dans la chambre, devant le lit. » Hugo mesure le mur, et Julie cherche un marteau.",
        "Yemekten sonra hâlâ çok iş var. Emma elbise, ayakkabı ve hediye kolileri açıyor. Bir sürpriz var: büyükanneden bir tablo! Tablo eski ama resim güzel. Emma duvara bakıyor ve karar veriyor: «Tablo yatak odasında, yatağın karşısında kalacak.» Hugo duvarı ölçüyor, Julie bir çekiç arıyor.",
        "After the meal there is still a lot of work. Emma opens boxes of clothes, shoes and gifts. There is a surprise: a painting from her grandmother! The painting is old, but the picture is beautiful. Emma looks at the wall and she decides: “The painting is going to stay in the bedroom, in front of the bed.” Hugo measures the wall, and Julie looks for a hammer.",
      ),
      p(
        "Le soir, l'appartement est presque terminé. Les amis sont fatigués. Emma regarde l'appartement : la cuisine est prête, le salon est confortable et la chambre est calme. Elle remercie Julie et Hugo : « Merci pour l'aide ! Dimanche, vous allez venir dîner ! » Dans la rue, la ville est silencieuse. Pour Emma, c'est le début d'une nouvelle vie.",
        "Akşam daire neredeyse bitti. Arkadaşlar yorgun. Emma daireye bakıyor: mutfak hazır, salon rahat, yatak odası sakin. Julie ve Hugo'ya teşekkür ediyor: «Yardım için sağ olun! Pazar günü akşam yemeğine geleceksiniz!» Sokakta şehir sessiz. Emma için bu yeni bir hayatın başlangıcı.",
        "In the evening the flat is almost finished. The friends are tired. Emma looks at the flat: the kitchen is ready, the living room is comfortable and the bedroom is calm. She thanks Julie and Hugo: “Thank you for the help! On Sunday you are going to come to dinner!” In the street the city is quiet. For Emma, it is the start of a new life.",
      ),
    ],
    questions: [
      q("Où est l'appartement d'Emma ?", "Emma'nın dairesi nerede?", "Where is Emma's flat?", ["À la campagne", "Près de la mer", "Dans le centre de la ville"], 2),
      q("Qui porte la table ?", "Masayı kim taşıyor?", "Who carries the table?", ["Julie", "Hugo", "Emma", "Le livreur"], 0),
      q("Qu'est-ce qu'il y a dans la cuisinière ?", "Ocağın içinde ne var?", "What is there in the cooker?", ["Un frigo", "Un four", "Une poêle", "Une table"], 1),
      q("Que mangent les amis à midi ?", "Arkadaşlar öğlen ne yiyor?", "What do the friends eat at noon?", ["Une soupe", "Des sandwichs", "Une pizza, une salade et une tarte"], 2),
      q("Où est le tableau de la grand-mère d'Emma ?", "Emma'nın büyükannesinin tablosu nerede olacak?", "Where is Emma's grandmother's painting going to be?", ["Dans la chambre", "Dans la cuisine", "Dans le salon", "Devant la fenêtre"], 0),
    ],
  },
  {
    id: "reading-plural-agreement",
    lessonId: "plural-agreement",
    level: "A1",
    title: { TR: "Sınıf arkadaşlarım", EN: "The people in my class" },
    paragraphs: [
      p(
        "Chère Anna, je suis Lina et je suis une nouvelle correspondante. J'ai quinze ans et j'habite à Nantes. Je vais décrire la classe, parce que les élèves sont très différents. Nous sommes vingt : douze filles et huit garçons. Les garçons sont gentils et les filles sont sympathiques. Tout le monde est content, et l'ambiance est joyeuse.",
        "Sevgili Anna, ben Lina ve yeni bir mektup arkadaşınım. On beş yaşındayım ve Nantes'ta oturuyorum. Sınıfı anlatacağım, çünkü öğrenciler çok farklı. Yirmi kişiyiz: on iki kız ve sekiz erkek. Erkekler kibar, kızlar cana yakın. Herkes memnun ve ortam neşeli.",
        "Dear Anna, I am Lina and I am a new penfriend. I am fifteen and I live in Nantes. I am going to describe the class, because the pupils are very different. There are twenty of us: twelve girls and eight boys. The boys are kind and the girls are friendly. Everybody is happy, and the atmosphere is cheerful.",
      ),
      p(
        "La meilleure amie, c'est Zoé. Elle est petite, blonde et très drôle. Elle est sportive et elle est toujours heureuse. Zoé et moi, nous sommes inséparables ! Nous avons aussi un ami, Karim. Il est grand, brun et timide. Quand Zoé, Karim et moi sommes ensemble, nous sommes contents. Les trois amis sont toujours à la même table.",
        "En iyi arkadaş Zoé. Ufak tefek, sarışın ve çok komik. Sportif ve her zaman mutlu. Zoé ile ben ayrılmaz ikiliyiz! Bir de arkadaşımız Karim var. Uzun boylu, esmer ve utangaç. Zoé, Karim ve ben bir aradayken memnunuz. Üç arkadaş hep aynı masada.",
        "My best friend is Zoé. She is small, blonde and very funny. She is sporty and she is always happy. Zoé and I are inseparable! We also have a friend, Karim. He is tall, dark-haired and shy. When Zoé, Karim and I are together, we are happy. The three friends are always at the same table.",
      ),
      p(
        "Les professeurs sont différents aussi. La professeure de français est une femme calme et patiente. Les cours d'histoire sont longs, mais ils sont intéressants. Le professeur de sport est énergique. Les élèves adorent les matchs de basket. Les garçons sont rapides, les filles sont actives et les équipes sont toujours équilibrées. Les journaux de l'école parlent des résultats.",
        "Öğretmenler de farklı. Fransızca öğretmeni sakin ve sabırlı bir kadın. Tarih dersleri uzun ama ilginç. Spor öğretmeni enerjik. Öğrenciler basketbol maçlarına bayılıyor. Erkekler hızlı, kızlar aktif ve takımlar hep dengeli. Okul gazeteleri sonuçlardan söz ediyor.",
        "The teachers are different too. The French teacher is a calm and patient woman. The history lessons are long, but they are interesting. The sports teacher is energetic. The pupils love the basketball matches. The boys are fast, the girls are active and the teams are always balanced. The school newspapers talk about the results.",
      ),
      p(
        "À midi, nous mangeons à la cantine. Les plats sont variés : les légumes sont frais, les fruits sont mûrs et les gâteaux sont délicieux. Les garçons sont gourmands, les filles sont curieuses et elles goûtent tout. Les tables sont longues et les chaises sont confortables. Les cuisiniers sont sympathiques et ils sont toujours souriants. Les repas sont des moments heureux et bruyants.",
        "Öğlen kantinde yemek yiyoruz. Yemekler çeşitli: sebzeler taze, meyveler olgun, pastalar nefis. Erkekler oburluk ediyor, kızlar meraklı ve her şeyi tadıyor. Masalar uzun ve sandalyeler rahat. Aşçılar cana yakın ve hep gülümsüyorlar. Öğle yemekleri mutlu ve gürültülü anlar.",
        "At noon we eat in the canteen. The dishes are varied: the vegetables are fresh, the fruits are ripe and the cakes are delicious. The boys are greedy, the girls are curious and they taste everything. The tables are long and the chairs are comfortable. The cooks are nice and they are always smiling. The meals are happy and noisy moments.",
      ),
      p(
        "Dans la classe, il y a aussi des élèves étrangers. Deux garçons sont espagnols et trois filles sont italiennes. Elles sont curieuses et elles sont très bonnes en français. Un élève est japonais. Il est poli et discret, mais il est aussi très créatif. Les élèves étrangers sont heureux ici. Les autres sont fiers des nouveaux camarades.",
        "Sınıfta yabancı öğrenciler de var. İki erkek İspanyol, üç kız İtalyan. Meraklılar ve Fransızcada çok iyiler. Bir öğrenci Japon. Nazik ve ketum ama aynı zamanda çok yaratıcı. Yabancı öğrenciler burada mutlu. Diğerleri bu yeni arkadaşlarla gurur duyuyor.",
        "In the class there are also foreign pupils. Two boys are Spanish and three girls are Italian. They are curious and they are very good at French. One pupil is Japanese. He is polite and discreet, but he is also very creative. The foreign pupils are happy here. The others are proud of these new classmates.",
      ),
      p(
        "Le week-end, nous organisons des sorties. Les filles aiment les musées, les garçons préfèrent les stades. Nous visitons aussi des châteaux, des bateaux historiques et des marchés. Dans le port, les bateaux sont blancs et grands. Les chevaux de la plage sont beaux. Les enfants sont émerveillés. Les animaux sont une grande joie pour les petits et les adultes.",
        "Hafta sonları geziler düzenliyoruz. Kızlar müzeleri seviyor, erkekler stadyumları tercih ediyor. Ayrıca şatoları, tarihî gemileri ve pazarları geziyoruz. Limanda tekneler beyaz ve büyük. Plajın atları çok güzel. Çocuklar hayran kalıyor. Hayvanlar hem küçükler hem büyükler için büyük bir mutluluk.",
        "At the weekend we organise outings. The girls like museums, the boys prefer stadiums. We also visit castles, historic ships and markets. In the harbour the boats are white and big. The horses on the beach are beautiful. The children are amazed. Animals are a great joy for the little ones and the adults.",
      ),
      p(
        "Le professeur donne souvent des devoirs. Les exercices sont faciles, mais les problèmes de maths sont difficiles. Les élèves sont fatigués le soir et les cartables sont lourds. Zoé est nerveuse avant les examens, mais Karim est calme. Pour une fête, les élèves apportent des gâteaux et des cadeaux. Les professeurs sont touchés, et les élèves sont fiers.",
        "Öğretmen sık sık ödev veriyor. Alıştırmalar kolay ama matematik problemleri zor. Öğrenciler akşamları yorgun ve çantalar ağır. Zoé sınavlardan önce gergin ama Karim sakin. Bir kutlama için öğrenciler pastalar ve hediyeler getiriyor. Öğretmenler duygulanıyor, öğrenciler gururlu.",
        "The teacher often gives homework. The exercises are easy, but the maths problems are difficult. The pupils are tired in the evening and the schoolbags are heavy. Zoé is nervous before exams, but Karim is calm. For a party the pupils bring cakes and gifts. The teachers are touched, and the pupils are proud.",
      ),
      p(
        "Voilà, Anna, c'est la classe ! Et toi ? Les camarades sont comment ? Les garçons sont sportifs ? Les filles sont curieuses ? Le professeur est sévère ou gentil ? Tu es heureuse à l'école ? J'attends la réponse avec impatience. Toute la classe et moi, nous sommes très contents de parler avec une nouvelle amie. Amitiés, Lina.",
        "İşte Anna, sınıf böyle! Ya sen? Sınıf arkadaşları nasıl? Erkekler sportif mi? Kızlar meraklı mı? Öğretmen sert mi, kibar mı? Okulda mutlu musun? Cevabını sabırsızlıkla bekliyorum. Bütün sınıf ve ben yeni bir arkadaşla konuşmaktan çok memnunuz. Sevgiler, Lina.",
        "So there you are, Anna, that is the class! And you? What are the classmates like? Are the boys sporty? Are the girls curious? Is the teacher strict or kind? Are you happy at school? I am waiting for your answer impatiently. The whole class and I are very glad to talk with a new friend. Best wishes, Lina.",
      ),
    ],
    questions: [
      q("Où habite Lina ?", "Lina nerede oturuyor?", "Where does Lina live?", ["À Lyon", "À Paris", "À Nantes"], 2),
      q("Combien de garçons y a-t-il dans la classe ?", "Sınıfta kaç erkek var?", "How many boys are there in the class?", ["Douze", "Vingt", "Huit", "Quinze"], 2),
      q("Comment est Zoé ?", "Zoé nasıl biri?", "What is Zoé like?", ["Grande et timide", "Petite, blonde et sportive", "Brune et calme"], 1),
      q("Qui est japonais ?", "Japon olan kim?", "Who is Japanese?", ["Un élève", "Karim", "Le professeur", "Zoé"], 0),
      q("Pourquoi Lina écrit-elle à Anna ?", "Lina neden Anna'ya yazıyor?", "Why is Lina writing to Anna?", ["Elle a un examen", "Elle est une nouvelle correspondante", "Elle cherche un professeur", "Elle déménage"], 1),
    ],
  },
  {
    id: "reading-adjective-position",
    lessonId: "adjective-position",
    level: "A1",
    title: { TR: "Eski bir dostu ziyaret", EN: "Visiting an old friend" },
    paragraphs: [
      p(
        "Léa a un vieil ami, Henri. Il habite dans un petit village en Provence. Léa a une nouvelle voiture rouge et elle décide de rendre visite à Henri. Elle quitte la grande ville le samedi matin. La voiture est petite, mais elle est confortable. La route est longue, mais le paysage est magnifique. Léa écoute une bonne chanson et elle regarde les collines vertes. Elle est heureuse.",
        "Léa'nın eski bir arkadaşı var, Henri. Provence'ta küçük bir köyde oturuyor. Léa'nın yeni kırmızı bir arabası var ve Henri'yi ziyaret etmeye karar veriyor. Cumartesi sabahı büyük şehri terk ediyor. Araba küçük ama rahat. Yol uzun ama manzara muhteşem. Léa güzel bir şarkı dinliyor ve yeşil tepelere bakıyor. Mutlu.",
        "Léa has an old friend, Henri. He lives in a small village in Provence. Léa has a new red car and she decides to visit Henri. She leaves the big city on Saturday morning. The car is small, but it is comfortable. The road is long, but the landscape is magnificent. Léa listens to a good song and she looks at the green hills. She is happy.",
      ),
      p(
        "Le village est joli. Il y a une vieille église, une petite place et un beau café. Les maisons sont jaunes, roses et blanches. Un jeune garçon joue avec un chien noir. Une vieille dame vend des fleurs sur la place. Léa arrête la voiture devant une grande maison bleue. C'est la maison d'Henri. Il attend dans le jardin avec un grand sourire.",
        "Köy güzel. Eski bir kilise, küçük bir meydan ve güzel bir kafe var. Evler sarı, pembe ve beyaz. Genç bir oğlan siyah bir köpekle oynuyor. Yaşlı bir hanım meydanda çiçek satıyor. Léa arabayı büyük mavi bir evin önünde durduruyor. Bu Henri'nin evi. Bahçede büyük bir gülümsemeyle bekliyor.",
        "The village is pretty. There is an old church, a small square and a beautiful café. The houses are yellow, pink and white. A young boy plays with a black dog. An old lady sells flowers on the square. Léa stops the car in front of a big blue house. It is Henri's house. He waits in the garden with a big smile.",
      ),
      p(
        "Henri est un vieil homme charmant. Il a soixante-dix ans, mais il est jeune dans la tête. Il a une grande barbe blanche et des yeux bleus. Il porte un chapeau marron et une chemise verte. Il embrasse Léa : « Quel bon plaisir ! Tu es toujours la même jeune fille. » Léa rit. Elle aime beaucoup le vieil ami drôle.",
        "Henri çekici yaşlı bir adam. Yetmiş yaşında ama kafası genç. Büyük beyaz bir sakalı ve mavi gözleri var. Kahverengi bir şapka ve yeşil bir gömlek giyiyor. Léa'yı öpüyor: «Ne büyük keyif! Hâlâ aynı genç kızsın.» Léa gülüyor. Komik yaşlı arkadaşı çok seviyor.",
        "Henri is a charming old man. He is seventy, but he is young in his head. He has a big white beard and blue eyes. He wears a brown hat and a green shirt. He kisses Léa: “What a pleasure! You are still the same young girl.” Léa laughs. She likes the funny old friend very much.",
      ),
      p(
        "La maison d'Henri est belle. Il a un bel escalier en bois, une grande cuisine claire et un vieux piano. Dans le salon, il y a un grand tableau italien et un tapis persan. Henri montre un nouvel appartement à l'étage : « C'est un petit studio. Les jeunes touristes aiment la vue. » Léa regarde la jolie fenêtre ronde et elle sourit.",
        "Henri'nin evi güzel. Ahşap güzel bir merdiveni, aydınlık büyük bir mutfağı ve eski bir piyanosu var. Salonda büyük bir İtalyan tablosu ve bir Acem halısı var. Henri üst katta yeni bir daire gösteriyor: «Küçük bir stüdyo. Genç turistler manzarayı seviyor.» Léa güzel yuvarlak pencereye bakıyor ve gülümsüyor.",
        "Henri's house is beautiful. It has a beautiful wooden staircase, a big bright kitchen and an old piano. In the living room there is a big Italian painting and a Persian rug. Henri shows a new flat upstairs: “It is a small studio. The young tourists like the view.” Léa looks at the pretty round window and she smiles.",
      ),
      p(
        "À midi, Henri prépare un bon repas. Il y a un gros poulet, une salade verte et un fromage français délicieux. Léa goûte une tarte, et elle dit : « C'est une excellente tarte ! » Henri répond : « C'est une vieille recette de la famille. » Ils mangent dans le jardin, sous un vieil arbre. Le soleil est chaud, et la journée est belle.",
        "Öğlen Henri güzel bir yemek hazırlıyor. Koca bir tavuk, yeşil bir salata ve nefis bir Fransız peyniri var. Léa bir tartı tadıyor ve diyor ki: «Mükemmel bir tart!» Henri yanıtlıyor: «Ailenin eski bir tarifi.» Eski bir ağacın altında, bahçede yiyorlar. Güneş sıcak ve gün güzel.",
        "At noon Henri prepares a good meal. There is a big chicken, a green salad and a delicious French cheese. Léa tastes a tart, and she says: “It is an excellent tart!” Henri answers: “It is an old family recipe.” They eat in the garden, under an old tree. The sun is warm, and the day is beautiful.",
      ),
      p(
        "L'après-midi, ils marchent dans le village. Ils visitent le vieux moulin et le nouveau marché. Ils achètent un bon pain chaud, un fromage de chèvre et une bouteille de jus. Un jeune artiste peint un joli paysage. Léa achète un petit tableau avec un bateau blanc. Henri présente un vieil ami, le boulanger. Tout le monde est gentil. Les gens ici sont souriants, et les enfants sont mignons. Léa pense : « La petite vie ici est un vrai bonheur. »",
        "Öğleden sonra köyde yürüyorlar. Eski değirmeni ve yeni pazarı geziyorlar. Sıcak güzel bir ekmek, bir keçi peyniri ve bir şişe meyve suyu alıyorlar. Genç bir ressam güzel bir manzara çiziyor. Léa beyaz tekneli küçük bir tablo alıyor. Henri eski bir dostunu, fırıncıyı tanıtıyor. Herkes kibar. Buradaki insanlar güler yüzlü, çocuklar da sevimli. Léa düşünüyor: «Buradaki küçük hayat gerçek bir mutluluk.»",
        "In the afternoon they walk in the village. They visit the old mill and the new market. They buy a good warm bread, a goat's cheese and a bottle of juice. A young artist paints a pretty landscape. Léa buys a small painting with a white boat. Henri introduces an old friend, the baker. Everybody is kind. The people here are smiling, and the children are cute. Léa thinks: “The small life here is real happiness.”",
      ),
      p(
        "Le soir, Léa est fatiguée mais contente. Henri propose une bonne tisane et un bon film. Ils regardent un vieux film américain dans le grand salon. Léa dort dans le petit studio, devant la jolie fenêtre ronde. Le lendemain, elle quitte le village avec une belle photo, un nouveau tableau et un grand sourire. Elle est un peu triste, mais elle est impatiente de revenir. Elle va revenir bientôt !",
        "Akşam Léa yorgun ama memnun. Henri güzel bir bitki çayı ve güzel bir film öneriyor. Büyük salonda eski bir Amerikan filmi izliyorlar. Léa küçük stüdyoda, güzel yuvarlak pencerenin önünde uyuyor. Ertesi gün köyden güzel bir fotoğraf, yeni bir tablo ve büyük bir gülümsemeyle ayrılıyor. Biraz üzgün ama geri dönmek için sabırsız. Yakında geri gelecek!",
        "In the evening Léa is tired but happy. Henri suggests a good herbal tea and a good film. They watch an old American film in the big living room. Léa sleeps in the small studio, in front of the pretty round window. The next day she leaves the village with a beautiful photo, a new painting and a big smile. She is a little sad, but she is eager to come back. She is going to come back soon!",
      ),
    ],
    questions: [
      q("Comment est la voiture de Léa ?", "Léa'nın arabası nasıl?", "What is Léa's car like?", ["Vieille et noire", "Nouvelle et rouge", "Petite et bleue"], 1),
      q("Où habite Henri ?", "Henri nerede oturuyor?", "Where does Henri live?", ["Dans une grande ville", "Près de la mer", "Dans un petit village en Provence", "À Paris"], 2),
      q("Comment est Henri ?", "Henri nasıl biri?", "What is Henri like?", ["Un vieil homme charmant avec une barbe blanche", "Un jeune garçon timide", "Un artiste italien", "Un boulanger"], 0),
      q("Que mangent Léa et Henri dans le jardin ?", "Léa ve Henri bahçede ne yiyor?", "What do Léa and Henri eat in the garden?", ["Une pizza", "Un poulet, une salade, un fromage et une tarte", "Un poisson"], 1),
      q("Qu'est-ce que Léa achète au village ?", "Léa köyde ne satın alıyor?", "What does Léa buy in the village?", ["Un vieux piano", "Un chien noir", "Un petit tableau", "Une maison"], 2),
    ],
  },
  {
    id: "reading-questions",
    lessonId: "questions",
    level: "A1",
    title: { TR: "Genç bir aşçıyla röportaj", EN: "An interview with a young chef" },
    paragraphs: [
      p(
        "Clara est journaliste. Aujourd'hui, elle visite un petit restaurant à Lyon. Le chef est Mehdi. Il est jeune et il est très populaire. Clara arrive avec un carnet et un stylo. Elle sourit et elle demande : « Bonjour, Mehdi. Est-ce que vous êtes prêt pour l'interview ? » Mehdi répond : « Oui, bien sûr ! J'adore les questions, alors je réponds à tout. »",
        "Clara bir gazeteci. Bugün Lyon'da küçük bir restoranı ziyaret ediyor. Şef Mehdi. Genç ve çok popüler. Clara bir not defteri ve bir kalemle geliyor. Gülümsüyor ve soruyor: «Günaydın Mehdi. Röportaj için hazır mısınız?» Mehdi cevap veriyor: «Evet, tabii! Sorulara bayılıyorum, o yüzden her şeye cevap veririm.»",
        "Clara is a journalist. Today she visits a small restaurant in Lyon. The chef is Mehdi. He is young and he is very popular. Clara arrives with a notebook and a pen. She smiles and she asks: “Hello, Mehdi. Are you ready for the interview?” Mehdi answers: “Yes, of course! I love questions, so I answer everything.”",
      ),
      p(
        "Clara commence : « Où est-ce que vous habitez ? » Mehdi répond : « J'habite à Lyon, près de la gare. » Clara continue : « Vous êtes de Lyon ? » — « Non, je suis de Tunis. J'arrive en France à vingt ans. » Clara note la réponse. Elle demande encore : « Comment est-ce que vous trouvez la vie ici ? » — « Je trouve que la vie est belle ! »",
        "Clara başlıyor: «Nerede oturuyorsunuz?» Mehdi yanıtlıyor: «Lyon'da, istasyonun yakınında oturuyorum.» Clara devam ediyor: «Lyonlu musunuz?» — «Hayır, Tunuslu'yum. Fransa'ya yirmi yaşında geldim.» Clara cevabı not ediyor. Yine soruyor: «Buradaki hayatı nasıl buluyorsunuz?» — «Hayatın güzel olduğunu düşünüyorum!»",
        "Clara begins: “Where do you live?” Mehdi answers: “I live in Lyon, near the station.” Clara continues: “Are you from Lyon?” — “No, I am from Tunis. I arrived in France at twenty.” Clara notes the answer. She asks again: “How do you find life here?” — “I find that life is beautiful!”",
      ),
      p(
        "Clara pose une nouvelle question : « Pourquoi est-ce que vous cuisinez ? » Mehdi sourit : « Parce que j'adore les gens, et la cuisine est un bon moyen pour parler avec eux. » — « Qui est le professeur de cuisine ? » — « C'est la grand-mère d'une amie, et aussi un chef français. » Clara note encore : « Qu'est-ce que vous préparez aujourd'hui ? » Mehdi rit : « Et vous, qu'est-ce que vous aimez ? »",
        "Clara yeni bir soru soruyor: «Neden yemek yapıyorsunuz?» Mehdi gülümsüyor: «Çünkü insanları seviyorum ve yemek onlarla konuşmak için güzel bir yol.» — «Yemek hocası kim?» — «Bir arkadaşın büyükannesi, bir de Fransız bir şef.» Clara bir not daha alıyor: «Bugün ne hazırlıyorsunuz?» Mehdi gülüyor: «Ya siz, ne seviyorsunuz?»",
        "Clara asks a new question: “Why do you cook?” Mehdi smiles: “Because I love people, and cooking is a good way to talk with them.” — “Who is the cooking teacher?” — “A friend's grandmother, and also a French chef.” Clara notes again: “What are you preparing today?” Mehdi laughs: “And you, what do you like?”",
      ),
      p(
        "Clara répond : « J'aime les tartes et les salades. » Mehdi dit : « Alors, aujourd'hui, nous avons une tarte de légumes et une salade tiède ! » Clara demande : « Combien de clients est-ce que vous avez chaque jour ? » — « Nous avons trente clients à midi, quarante le soir. » — « Quand est-ce que vous fermez ? » — « Le lundi, nous fermons. C'est le jour de repos. »",
        "Clara yanıtlıyor: «Turtaları ve salataları seviyorum.» Mehdi diyor ki: «O hâlde bugün sebzeli tart ve ılık salata var!» Clara soruyor: «Her gün kaç müşteriniz oluyor?» — «Öğlen otuz, akşam kırk müşterimiz var.» — «Ne zaman kapatıyorsunuz?» — «Pazartesi günleri kapatıyoruz. Dinlenme günü.»",
        "Clara answers: “I like tarts and salads.” Mehdi says: “Then today we have a vegetable tart and a warm salad!” Clara asks: “How many customers do you have each day?” — “We have thirty customers at noon, forty in the evening.” — “When do you close?” — “On Mondays we close. It is the rest day.”",
      ),
      p(
        "Clara pose encore des questions sur la journée. « Quand est-ce que vous commencez le travail ? » — « Le matin, très tôt. J'arrive dans le restaurant, j'allume le four et je prépare la pâte. » — « Combien de plats est-ce que vous préparez ? » — « Environ quarante. » — « Est-ce que vous êtes fatigué le soir ? » — « Oui, mais je suis heureux. Pourquoi est-ce que je vais changer de métier ? »",
        "Clara günle ilgili sorular sormaya devam ediyor. «İşe ne zaman başlıyorsunuz?» — «Sabah, çok erken. Restorana geliyorum, fırını yakıyorum ve hamuru hazırlıyorum.» — «Kaç çeşit yemek hazırlıyorsunuz?» — «Yaklaşık kırk.» — «Akşamları yorgun oluyor musunuz?» — «Evet ama mutluyum. Neden mesleği değiştireyim ki?»",
        "Clara keeps asking questions about the day. “When do you start work?” — “In the morning, very early. I arrive in the restaurant, I light the oven and I prepare the dough.” — “How many dishes do you prepare?” — “About forty.” — “Are you tired in the evening?” — “Yes, but I am happy. Why am I going to change job?”",
      ),
      p(
        "Clara regarde la cuisine : « Qui travaille avec vous ? » Mehdi montre trois personnes : « Voici Nina, Ahmed et Paul. Nina prépare les desserts, Ahmed cuisine la viande et Paul travaille en salle. » Clara sourit : « Où est-ce que vous achetez les légumes ? » — « Dans le marché de la ville, tous les matins. Les produits sont frais, et les producteurs sont des amis ! »",
        "Clara mutfağa bakıyor: «Sizinle kim çalışıyor?» Mehdi üç kişiyi gösteriyor: «Bu Nina, Ahmed ve Paul. Nina tatlıları hazırlıyor, Ahmed eti pişiriyor, Paul salonda çalışıyor.» Clara gülümsüyor: «Sebzeleri nereden alıyorsunuz?» — «Şehrin pazarından, her sabah. Ürünler taze ve üreticiler arkadaşım!»",
        "Clara looks at the kitchen: “Who works with you?” Mehdi shows three people: “This is Nina, Ahmed and Paul. Nina prepares the desserts, Ahmed cooks the meat and Paul works in the dining room.” Clara smiles: “Where do you buy the vegetables?” — “At the city market, every morning. The products are fresh, and the producers are friends!”",
      ),
      p(
        "Maintenant, c'est Mehdi qui pose une question : « Et vous, Clara ? Vous habitez où ? Vous cuisinez aussi ? » Clara rit : « Je n'ai pas le talent ! Je mange, j'écris et j'adore ça. » Mehdi demande encore : « Quand est-ce que l'article va sortir ? » — « Dimanche prochain. Beaucoup de gens vont lire l'article, alors vous allez avoir beaucoup de clients ! »",
        "Şimdi soruyu Mehdi soruyor: «Ya siz Clara? Nerede oturuyorsunuz? Siz de yemek yapıyor musunuz?» Clara gülüyor: «Benim yeteneğim yok! Yiyorum, yazıyorum ve buna bayılıyorum.» Mehdi yine soruyor: «Yazı ne zaman çıkacak?» — «Gelecek pazar. Çok insan yazıyı okuyacak, yani çok müşteriniz olacak!»",
        "Now it is Mehdi who asks a question: “And you, Clara? Where do you live? Do you cook too?” Clara laughs: “I don't have the talent! I eat, I write and I love it.” Mehdi asks again: “When is the article going to come out?” — “Next Sunday. Many people are going to read the article, so you are going to have a lot of customers!”",
      ),
      p(
        "À la fin de l'entretien, Clara pose une dernière question : « Qu'est-ce que vous rêvez d'ouvrir un jour ? » Mehdi répond : « Un grand restaurant à Tunis, avec des amis. » Clara note la réponse et elle remercie. Elle demande : « Est-ce que je goûte la tarte ? » Mehdi répond : « Bien sûr ! Vous mangez, et vous dites : est-ce que vous aimez ? »",
        "Röportajın sonunda Clara son bir soru soruyor: «Bir gün neyi açmayı hayal ediyorsunuz?» Mehdi yanıtlıyor: «Tunus'ta arkadaşlarla büyük bir restoran.» Clara cevabı not ediyor ve teşekkür ediyor. Soruyor: «Tartayı tadayım mı?» Mehdi yanıtlıyor: «Tabii! Yiyorsunuz ve söylüyorsunuz: beğendiniz mi?»",
        "At the end of the interview Clara asks a last question: “What do you dream of opening one day?” Mehdi answers: “A big restaurant in Tunis, with friends.” Clara notes the answer and she thanks him. She asks: “Shall I taste the tart?” Mehdi answers: “Of course! You eat, and you say: do you like it?”",
      ),
    ],
    questions: [
      q("Qui est Clara ?", "Clara kim?", "Who is Clara?", ["Une cliente", "Une cuisinière", "Une journaliste", "Une professeure"], 2),
      q("D'où est Mehdi ?", "Mehdi nereli?", "Where is Mehdi from?", ["De Lyon", "De Tunis", "De Paris"], 1),
      q("Pourquoi est-ce que Mehdi cuisine ?", "Mehdi neden yemek yapıyor?", "Why does Mehdi cook?", ["Parce qu'il adore les gens et la cuisine", "Parce qu'il est riche", "Parce qu'il n'a pas de travail"], 0),
      q("Quand est-ce que le restaurant est fermé ?", "Restoran ne zaman kapalı?", "When is the restaurant closed?", ["Le samedi", "Le dimanche", "Le lundi", "Le soir"], 2),
      q("Quand est-ce que l'article va sortir ?", "Yazı ne zaman çıkacak?", "When is the article going to come out?", ["Dimanche prochain", "Demain", "Le lundi"], 0),
    ],
  },
  {
    id: "reading-aller-venir-contractions",
    lessonId: "aller-venir-contractions",
    level: "A1",
    title: { TR: "Şehirde bir cumartesi", EN: "A Saturday in the city" },
    paragraphs: [
      p(
        "Le samedi, la ville de Strasbourg est très animée. Tom habite dans le quartier de la gare. Le matin, il va au marché avec Lola, la sœur. Ils viennent de la maison à pied, parce que le marché est près. Dans la rue, ils voient des gens qui vont au travail, d'autres qui viennent de la boulangerie avec une baguette. Les cafés sont pleins et les enfants viennent de l'école de musique avec des violons. Tom aime l'ambiance du samedi.",
        "Cumartesi günü Strasbourg çok hareketli. Tom istasyon semtinde oturuyor. Sabah kız kardeşi Lola ile pazara gidiyor. Evden yürüyerek geliyorlar, çünkü pazar yakın. Sokakta işe giden insanlar ve fırından bir baget ile gelenler görüyorlar. Kafeler dolu ve çocuklar kemanlarla müzik okulundan geliyor. Tom cumartesi havasını seviyor.",
        "On Saturday the city of Strasbourg is very lively. Tom lives in the station district. In the morning he goes to the market with his sister Lola. They come from the house on foot, because the market is close. In the street they see people who go to work, others who come from the bakery with a baguette. The cafés are full and the children come from the music school with violins. Tom likes the Saturday atmosphere.",
      ),
      p(
        "Au marché, un vendeur crie : « Les fruits viennent du jardin, les fromages viennent de la montagne ! » Lola achète des pommes. Tom regarde les poissons. Une dame vient de l'autre côté de la place avec un panier. Elle va aux légumes, puis aux fleurs. Les touristes viennent des hôtels et ils vont aux petits stands. Tout le monde parle, rit et choisit.",
        "Pazarda bir satıcı bağırıyor: «Meyveler bahçeden, peynirler dağdan geliyor!» Lola elma alıyor. Tom balıklara bakıyor. Bir hanım meydanın öbür tarafından bir sepetle geliyor. Önce sebzelere, sonra çiçeklere gidiyor. Turistler otellerden geliyor ve küçük tezgâhlara gidiyorlar. Herkes konuşuyor, gülüyor ve seçiyor.",
        "At the market a seller shouts: “The fruit comes from the garden, the cheeses come from the mountain!” Lola buys apples. Tom looks at the fish. A lady comes from the other side of the square with a basket. She goes to the vegetables, then to the flowers. The tourists come from the hotels and they go to the small stalls. Everybody talks, laughs and chooses.",
      ),
      p(
        "Après le marché, Tom et Lola vont à la banque. Lola a besoin de papiers. Ensuite, ils vont à la poste, parce que Tom envoie une lettre. Dans la rue, ils rencontrent un ami, Karim. Il vient de la piscine. Il dit : « Je viens de la piscine et je vais au café. Vous venez avec moi ? » Les deux amis acceptent, et le trio va au café de l'hôtel de ville.",
        "Pazardan sonra Tom ve Lola bankaya gidiyor. Lola'nın evraklara ihtiyacı var. Sonra postaneye gidiyorlar, çünkü Tom bir mektup gönderiyor. Sokakta bir arkadaşla, Karim'le karşılaşıyorlar. Yüzme havuzundan geliyor. Diyor ki: «Havuzdan geliyorum ve kafeye gidiyorum. Benimle geliyor musunuz?» İki arkadaş kabul ediyor ve üçlü belediye binasının kafesine gidiyor.",
        "After the market Tom and Lola go to the bank. Lola needs some papers. Then they go to the post office, because Tom is sending a letter. In the street they meet a friend, Karim. He comes from the swimming pool. He says: “I come from the swimming pool and I am going to the café. Are you coming with me?” The two friends accept, and the trio goes to the café at the town hall.",
      ),
      p(
        "Au café, le serveur arrive avec un sourire. Il vient de la cuisine. Les amis commandent des cafés et un chocolat chaud. Karim parle des vacances : « La famille vient de Marseille. Nous allons à la mer en été. » Tom écoute et il rêve. Lola dit : « Moi, je vais à la montagne. Les enfants des voisins vont aux Alpes chaque hiver. »",
        "Kafede garson gülümseyerek geliyor. Mutfaktan geliyor. Arkadaşlar kahve ve sıcak çikolata sipariş ediyor. Karim tatilden söz ediyor: «Ailem Marsilyalı. Yazın denize gidiyoruz.» Tom dinliyor ve hayal kuruyor. Lola diyor ki: «Ben dağa gidiyorum. Komşuların çocukları her kış Alpler'e gidiyor.»",
        "At the café the waiter arrives with a smile. He comes from the kitchen. The friends order coffees and a hot chocolate. Karim talks about his holidays: “My parents come from Marseille. We go to the sea in summer.” Tom listens and dreams. Lola says: “I go to the mountains. The neighbours' children go to the Alps every winter.”",
      ),
      p(
        "L'après-midi, les trois amis vont au cinéma. Ils viennent du centre-ville et ils marchent un peu. Devant le cinéma, il y a beaucoup de monde. Des étudiants viennent de l'université, des familles viennent du parc. Le cinéma est vieux, mais l'écran est grand et la salle est confortable. Le film est drôle, et les spectateurs rient aux scènes comiques. Karim dit : « Je vais aux toilettes ! » Tom et Lola rient encore plus.",
        "Öğleden sonra üç arkadaş sinemaya gidiyor. Şehir merkezinden geliyorlar ve biraz yürüyorlar. Sinemanın önünde çok kalabalık var. Üniversiteden öğrenciler, parktan aileler geliyor. Sinema eski ama perde büyük ve salon rahat. Film komik ve seyirciler komik sahnelere gülüyor. Karim diyor ki: «Tuvalete gidiyorum!» Tom ve Lola daha çok gülüyor.",
        "In the afternoon the three friends go to the cinema. They come from the city centre and they walk a little. In front of the cinema there are a lot of people. Students come from the university, families come from the park. The cinema is old, but the screen is big and the hall is comfortable. The film is funny, and the audience laughs at the comic scenes. Karim says: “I am going to the toilets!” Tom and Lola laugh even more.",
      ),
      p(
        "Après le film, Lola téléphone à une amie. L'amie vient de l'hôpital, parce qu'elle travaille là-bas. Elle est infirmière. Elle dit : « Je viens de l'hôpital et je vais à la maison. Vous venez dîner ? » Tom accepte. Les deux amis vont chez l'infirmière, et Karim va à l'arrêt de bus. Il dit au revoir et il va à la maison.",
        "Filmden sonra Lola bir arkadaşına telefon ediyor. Arkadaşı hastaneden geliyor, çünkü orada çalışıyor. Hemşire. Diyor ki: «Hastaneden geliyorum ve eve gidiyorum. Akşam yemeğine geliyor musunuz?» Tom kabul ediyor. İki arkadaş hemşirenin evine gidiyor, Karim ise otobüs durağına gidiyor. Hoşça kal diyor ve eve gidiyor.",
        "After the film Lola phones a friend. The friend comes from the hospital, because she works there. She is a nurse. She says: “I come from the hospital and I am going home. Are you coming for dinner?” Tom accepts. The two friends go to the nurse's place, and Karim goes to the bus stop. He says goodbye and he goes home.",
      ),
      p(
        "Le soir, Tom et Lola rentrent chez eux. Ils viennent de l'autre quartier et ils sont fatigués. Dans la rue, les lumières de la ville sont belles. Tom pense : « Où est-ce que nous allons demain ? Au musée ? Au parc ? À la cathédrale ? » Lola rit : « Demain, nous allons au lit ! » La ville est calme, et la journée est finie.",
        "Akşam Tom ve Lola eve dönüyor. Öbür semtten geliyorlar ve yorgunlar. Sokakta şehrin ışıkları güzel. Tom düşünüyor: «Yarın nereye gidiyoruz? Müzeye mi? Parka mı? Katedrale mi?» Lola gülüyor: «Yarın yatağa gidiyoruz!» Şehir sakin ve gün bitti.",
        "In the evening Tom and Lola go home. They come from the other district and they are tired. In the street the lights of the city are beautiful. Tom thinks: “Where are we going tomorrow? To the museum? To the park? To the cathedral?” Lola laughs: “Tomorrow we are going to bed!” The city is calm, and the day is over.",
      ),
    ],
    questions: [
      q("Où est-ce que Tom et Lola vont d'abord ?", "Tom ve Lola önce nereye gidiyor?", "Where do Tom and Lola go first?", ["Au marché", "Au cinéma", "À la banque", "À l'hôpital"], 0),
      q("D'où vient Karim ?", "Karim nereden geliyor?", "Where does Karim come from?", ["De la banque", "De la piscine", "Du marché"], 1),
      q("Où est-ce que les trois amis vont l'après-midi ?", "Üç arkadaş öğleden sonra nereye gidiyor?", "Where do the three friends go in the afternoon?", ["Au musée", "À la piscine", "Au café", "Au cinéma"], 3),
      q("Pourquoi est-ce que l'amie de Lola vient de l'hôpital ?", "Lola'nın arkadaşı neden hastaneden geliyor?", "Why does Lola's friend come from the hospital?", ["Elle est infirmière", "Elle est malade", "Elle est professeure"], 0),
      q("Où est-ce que Karim va à la fin ?", "Karim sonunda nereye gidiyor?", "Where does Karim go at the end?", ["Chez l'infirmière", "À la maison", "Au cinéma", "Au café"], 1),
    ],
  },
  {
    id: "reading-faire-prendre",
    lessonId: "faire-prendre",
    level: "A1",
    title: { TR: "Yoğun bir pazar günü", EN: "A busy Sunday" },
    paragraphs: [
      p(
        "Le dimanche, Sarah fait toujours beaucoup de choses. Le matin, elle regarde la fenêtre : il fait beau, mais il fait un peu froid. Elle met un pull et un pantalon chaud. Elle prend une douche, puis elle prend un café avec un croissant. Louis, le mari de Sarah, dort encore. Alors elle fait le café pour deux et elle met la table dans la cuisine.",
        "Pazar günleri Sarah hep çok şey yapar. Sabah pencereye bakıyor: hava güzel ama biraz soğuk. Bir kazak ve sıcak bir pantolon giyiyor. Duş alıyor, sonra bir kruvasanla kahve içiyor. Sarah'nın kocası Louis hâlâ uyuyor. Bu yüzden iki kişilik kahve yapıyor ve mutfakta sofrayı kuruyor.",
        "On Sundays Sarah always does a lot of things. In the morning she looks at the window: the weather is nice, but it is a little cold. She puts on a jumper and warm trousers. She takes a shower, then she has a coffee with a croissant. Louis, Sarah's husband, is still asleep. So she makes the coffee for two and she lays the table in the kitchen.",
      ),
      p(
        "Quand Louis arrive dans la cuisine, il demande : « Qu'est-ce que tu fais ? » Sarah répond : « Je fais les courses, puis je fais du sport. Et toi ? » Louis prend un croissant et il dit : « Moi, je fais la cuisine. Je prends le temps ! » Ils rient. Louis met la radio, et la musique remplit la maison. Le dimanche commence bien.",
        "Louis mutfağa gelince soruyor: «Ne yapıyorsun?» Sarah yanıtlıyor: «Alışveriş yapıyorum, sonra spor yapıyorum. Sen?» Louis bir kruvasan alıyor ve diyor ki: «Ben yemek yapıyorum. Zamanımı alıyorum!» Gülüşüyorlar. Louis radyoyu açıyor ve müzik evi dolduruyor. Pazar güzel başlıyor.",
        "When Louis arrives in the kitchen he asks: “What are you doing?” Sarah answers: “I am doing the shopping, then I am doing some sport. And you?” Louis takes a croissant and says: “Me, I am cooking. I am taking the time!” They laugh. Louis puts on the radio, and the music fills the house. The Sunday starts well.",
      ),
      p(
        "Sarah prend le bus pour le marché. Dans le bus, une dame demande : « Vous faites les courses aussi ? » — « Oui, nous faisons les courses chaque dimanche. » Au marché, Sarah prend des légumes, des pommes et une grande salade. Elle prend aussi un sac pour les fruits. Elle fait attention aux prix. Le vendeur dit : « Vous prenez trop de pommes, vous allez faire une tarte ! » Sarah sourit : « Excellente idée. »",
        "Sarah pazara otobüse biniyor. Otobüste bir hanım soruyor: «Siz de alışveriş mi yapıyorsunuz?» — «Evet, her pazar alışveriş yapıyoruz.» Pazarda Sarah sebze, elma ve büyük bir marul alıyor. Meyveler için bir de çanta alıyor. Fiyatlara dikkat ediyor. Satıcı diyor ki: «Çok elma alıyorsunuz, tart yapacaksınız!» Sarah gülümsüyor: «Mükemmel fikir.»",
        "Sarah takes the bus to the market. On the bus a lady asks: “Are you doing the shopping too?” — “Yes, we do the shopping every Sunday.” At the market Sarah takes vegetables, apples and a big lettuce. She also takes a bag for the fruit. She pays attention to the prices. The seller says: “You are taking too many apples, you are going to make a tart!” Sarah smiles: “Excellent idea.”",
      ),
      p(
        "Après le marché, Sarah fait du sport dans le parc. Elle met des baskets et elle fait une heure de course à pied. Dans le parc, des gens font du yoga, d'autres font du vélo. Une femme prend des photos des arbres. Les enfants font du bruit avec un ballon. Sarah comprend pourquoi elle adore le dimanche : tout le monde fait une chose agréable.",
        "Pazardan sonra Sarah parkta spor yapıyor. Spor ayakkabıları giyiyor ve bir saat koşuyor. Parkta bazı insanlar yoga yapıyor, bazıları bisiklete biniyor. Bir kadın ağaçların fotoğrafını çekiyor. Çocuklar bir topla gürültü yapıyor. Sarah pazar gününü neden sevdiğini anlıyor: herkes keyifli bir şey yapıyor.",
        "After the market Sarah does sport in the park. She puts on trainers and she runs for an hour. In the park some people do yoga, others ride bikes. A woman takes photos of the trees. The children make noise with a ball. Sarah understands why she loves Sunday: everybody does something enjoyable.",
      ),
      p(
        "À midi, Sarah rentre. Louis fait déjà le déjeuner. Il met une casserole sur le feu et il fait une soupe. Le chat prend la place devant la porte. Sarah prend une assiette, elle met les couverts et elle fait un grand sourire. Ils mangent ensemble. Louis dit : « Tu fais très bien le sport, mais moi, je fais mieux la cuisine ! »",
        "Öğlen Sarah eve dönüyor. Louis öğle yemeğini hazırlıyor bile. Bir tencereyi ocağa koyuyor ve çorba yapıyor. Kedi kapının önünde yerini alıyor. Sarah bir tabak alıyor, çatal bıçakları koyuyor ve kocaman gülümsüyor. Birlikte yiyorlar. Louis diyor ki: «Sen sporu çok iyi yapıyorsun ama ben yemeği daha iyi yapıyorum!»",
        "At noon Sarah comes home. Louis is already making lunch. He puts a saucepan on the stove and he makes a soup. The cat takes its place in front of the door. Sarah takes a plate, she puts out the cutlery and she gives a big smile. They eat together. Louis says: “You do sport very well, but I cook better!”",
      ),
      p(
        "L'après-midi, deux amis arrivent : Inès et Marc. Ils prennent le métro et ils apportent un gâteau. Ils font souvent une promenade avec Sarah et Louis le dimanche. Aujourd'hui, ils prennent le thé dans le salon et ils font un jeu de société. Marc apprend le jeu à Louis. Louis ne comprend pas tout, mais il apprend vite. Ils font beaucoup de bruit !",
        "Öğleden sonra iki arkadaş, Inès ve Marc geliyor. Metroya biniyorlar ve bir pasta getiriyorlar. Pazar günleri sık sık Sarah ve Louis'yle yürüyüş yapıyorlar. Bugün salonda çay içiyorlar ve bir kutu oyunu oynuyorlar. Marc oyunu Louis'ye öğretiyor. Louis her şeyi anlamıyor ama çabuk öğreniyor. Çok gürültü yapıyorlar!",
        "In the afternoon two friends arrive: Inès and Marc. They take the metro and they bring a cake. They often go for a walk with Sarah and Louis on Sundays. Today they have tea in the living room and they play a board game. Marc teaches the game to Louis. Louis does not understand everything, but he learns fast. They make a lot of noise!",
      ),
      p(
        "Le soir, les amis rentrent. Il fait nuit et il fait froid. Marc et Inès prennent un taxi, parce que le métro est lent. Sarah et Louis font la vaisselle ensemble et ils mettent la maison en ordre. Sarah dit : « Qu'est-ce que nous faisons demain ? » Louis répond : « Demain, nous allons travailler, mais nous allons prendre un café ensemble. » Avant de dormir, Sarah met le réveil et elle prend un livre. Louis fait déjà des rêves de cuisine. Le dimanche est vraiment un jour parfait.",
        "Akşam arkadaşlar dönüyor. Hava karanlık ve soğuk. Marc ve Inès bir taksiye biniyor, çünkü metro yavaş. Sarah ve Louis birlikte bulaşıkları yıkıyor ve evi toparlıyorlar. Sarah diyor ki: «Yarın ne yapıyoruz?» Louis yanıtlıyor: «Yarın çalışacağız ama birlikte bir kahve içeceğiz.» Uyumadan önce Sarah çalar saati kuruyor ve bir kitap alıyor. Louis şimdiden yemek rüyaları görüyor. Pazar gerçekten mükemmel bir gün.",
        "In the evening the friends go home. It is dark and it is cold. Marc and Inès take a taxi, because the metro is slow. Sarah and Louis do the dishes together and they tidy the house. Sarah says: “What are we doing tomorrow?” Louis answers: “Tomorrow we are going to work, but we are going to have a coffee together.” Before sleeping Sarah sets the alarm clock and she takes a book. Louis is already having kitchen dreams. Sunday is really a perfect day.",
      ),
    ],
    questions: [
      q("Quel temps est-ce qu'il fait le matin ?", "Sabah hava nasıl?", "What is the weather like in the morning?", ["Il fait chaud", "Il fait beau, mais un peu froid", "Il fait mauvais"], 1),
      q("Que fait Louis dimanche ?", "Louis pazar günü ne yapıyor?", "What does Louis do on Sunday?", ["Il fait du sport", "Il fait la cuisine", "Il fait les courses", "Il prend le bus"], 1),
      q("Comment est-ce que Sarah va au marché ?", "Sarah pazara nasıl gidiyor?", "How does Sarah go to the market?", ["Elle prend le métro", "Elle prend un taxi", "Elle prend le bus"], 2),
      q("Qu'est-ce que Marc apprend à Louis ?", "Marc, Louis'ye neyi öğretiyor?", "What does Marc teach Louis?", ["Un jeu de société", "Le yoga", "Le français", "La cuisine"], 0),
      q("Pourquoi est-ce que Marc et Inès prennent un taxi ?", "Marc ve Inès neden taksiye biniyor?", "Why do Marc and Inès take a taxi?", ["Parce qu'ils n'aiment pas marcher", "Parce que le métro est lent", "Parce que Sarah est fatiguée"], 1),
    ],
  },
  {
    id: "reading-ir-verbs",
    lessonId: "ir-verbs",
    level: "A1",
    title: { TR: "Sınavlar bitti, tatil başlıyor", EN: "Exams finished, holidays begin" },
    paragraphs: [
      p(
        "Chloé et Nathan étudient à Toulouse. La semaine finit bien : ils finissent les examens et ils réussissent tout ! Le vendredi, ils sortent de la salle avec un grand sourire. Nathan dit : « Je finis enfin ! Je suis libre ! » Chloé répond : « Moi aussi, je finis aujourd'hui. Nous sommes contents, parce que nous réussissons, mais nous sommes aussi très fatigués. »",
        "Chloé ve Nathan Toulouse'da okuyor. Hafta güzel bitiyor: sınavları bitiriyorlar ve her şeyi başarıyorlar! Cuma günü büyük bir gülümsemeyle salondan çıkıyorlar. Nathan diyor ki: «Sonunda bitiriyorum! Özgürüm!» Chloé yanıtlıyor: «Ben de bugün bitiriyorum. Başardığımız için mutluyuz ama çok da yorgunuz.»",
        "Chloé and Nathan study in Toulouse. The week ends well: they finish their exams and they pass everything! On Friday they leave the room with a big smile. Nathan says: “I am finally finishing! I am free!” Chloé answers: “Me too, I finish today. We are happy, because we pass, but we are also very tired.”",
      ),
      p(
        "Le week-end, ils dorment beaucoup. Nathan dort jusqu'à midi, mais Chloé sort tôt. Elle achète des croissants. Dans la rue, elle voit des amis qui sortent du café. Ils partent ensemble en vacances et ils choisissent un endroit. Les amis demandent : « Vous partez aussi ? Où est-ce que vous allez ? »",
        "Hafta sonu çok uyuyorlar. Nathan öğlene kadar uyuyor ama Chloé erken çıkıyor. Kruvasan alıyor. Sokakta kafeden çıkan arkadaşlarını görüyor. Birlikte tatile çıkıyorlar ve bir yer seçiyorlar. Arkadaşlar soruyor: «Siz de gidiyor musunuz? Nereye gidiyorsunuz?»",
        "At the weekend they sleep a lot. Nathan sleeps until noon, but Chloé goes out early. She buys croissants. In the street she sees friends who are leaving the café. They are going on holiday together and they choose a place. The friends ask: “Are you leaving too? Where are you going?”",
      ),
      p(
        "Chloé réfléchit. Elle et Nathan ne savent pas encore. Ils choisissent d'abord un pays. Nathan propose l'Espagne et Chloé propose le Portugal. Ils réfléchissent longtemps, ils comparent les prix, puis ils choisissent le Portugal, parce que la mer est belle et la nourriture est excellente. Chloé finit la réservation du logement en une heure.",
        "Chloé düşünüyor. O ve Nathan henüz bilmiyorlar. Önce bir ülke seçiyorlar. Nathan İspanya'yı, Chloé Portekiz'i öneriyor. Uzun uzun düşünüyorlar, fiyatları karşılaştırıyorlar, sonra Portekiz'i seçiyorlar, çünkü deniz güzel ve yemekler mükemmel. Chloé konaklama rezervasyonunu bir saatte bitiriyor.",
        "Chloé thinks. She and Nathan do not know yet. They first choose a country. Nathan suggests Spain and Chloé suggests Portugal. They think for a long time, they compare the prices, then they choose Portugal, because the sea is beautiful and the food is excellent. Chloé finishes the booking of the accommodation in an hour.",
      ),
      p(
        "Le lundi, c'est le départ. Chloé remplit les valises. Nathan finit les sandwichs pour le voyage. Très tôt le matin, le taxi arrive. Le chauffeur demande : « Vous partez où ? » — « Nous partons à Lisbonne ! » Le chauffeur sourit : « Vous réussissez bien les examens, alors vous méritez les vacances. » Chloé et Nathan rient, et le taxi part.",
        "Pazartesi yola çıkış günü. Chloé valizleri dolduruyor. Nathan yolculuk için sandviçleri bitiriyor. Sabahın erken saatinde taksi geliyor. Şoför soruyor: «Nereye gidiyorsunuz?» — «Lizbon'a gidiyoruz!» Şoför gülümsüyor: «Sınavları iyi başarıyorsunuz, o hâlde tatili hak ediyorsunuz.» Chloé ve Nathan gülüyor ve taksi hareket ediyor.",
        "On Monday it is the departure. Chloé fills the suitcases. Nathan finishes the sandwiches for the trip. Very early in the morning the taxi arrives. The driver asks: “Where are you leaving for?” — “We are leaving for Lisbon!” The driver smiles: “You are passing your exams well, so you deserve the holidays.” Chloé and Nathan laugh, and the taxi leaves.",
      ),
      p(
        "À Lisbonne, ils dorment dans un petit hôtel. Le serveur sert un petit déjeuner délicieux : des fruits, des croissants frais et un café. Le matin, ils sortent visiter la ville. Ils choisissent un vieux tram jaune et ils partent vers le château. Ils grandissent aussi un peu : ils apprennent des mots portugais et ils réussissent à commander une glace !",
        "Lizbon'da küçük bir otelde uyuyorlar. Garson nefis bir kahvaltı servis ediyor: meyve, taze kruvasan ve bir kahve. Sabah şehri gezmeye çıkıyorlar. Eski sarı bir tramvayı seçiyorlar ve şatoya doğru yola çıkıyorlar. Biraz da büyüyorlar: Portekizce kelimeler öğreniyorlar ve dondurma sipariş etmeyi başarıyorlar!",
        "In Lisbon they sleep in a small hotel. The waiter serves a delicious breakfast: fruit, fresh croissants and a coffee. In the morning they go out to visit the city. They choose an old yellow tram and they set off towards the castle. They also grow a little: they learn Portuguese words and they manage to order an ice cream!",
      ),
      p(
        "Le troisième jour, ils partent pour la plage. Chloé choisit une place près de la mer, et Nathan remplit une bouteille d'eau. Ils finissent les sandwichs, puis ils dorment un peu sous le parasol. Des enfants sortent de l'eau avec des seaux. Un vendeur sert des glaces. Nathan choisit une glace à la fraise, Chloé choisit une glace au citron. Tout est parfait ! Ils réussissent même à nager avec les poissons.",
        "Üçüncü gün plaja gidiyorlar. Chloé denizin yanında bir yer seçiyor, Nathan bir şişeyi suyla dolduruyor. Sandviçleri bitiriyorlar, sonra şemsiyenin altında biraz uyuyorlar. Çocuklar kovalarla sudan çıkıyor. Bir satıcı dondurma servis ediyor. Nathan çilekli, Chloé limonlu dondurma seçiyor. Her şey mükemmel! Hatta balıklarla birlikte yüzmeyi başarıyorlar.",
        "On the third day they leave for the beach. Chloé chooses a spot near the sea, and Nathan fills a bottle with water. They finish the sandwiches, then they sleep a little under the parasol. Children come out of the water with buckets. A seller serves ice creams. Nathan chooses a strawberry ice cream, Chloé chooses a lemon one. Everything is perfect! They even manage to swim with the fish.",
      ),
      p(
        "Le soir, Chloé et Nathan sortent dîner. Ils choisissent un restaurant près de la mer. Le serveur sert un poisson grillé, et les deux amis finissent tout ! Ils réfléchissent aux jours suivants : « Nous partons demain pour la plage, après-demain nous visitons un village. » Nathan dort mal, parce qu'il est trop excité. Il pense au voyage, et il sourit.",
        "Akşam Chloé ve Nathan yemeğe çıkıyor. Denizin yanında bir restoran seçiyorlar. Garson ızgara balık servis ediyor ve iki arkadaş her şeyi bitiriyor! Sonraki günleri düşünüyorlar: «Yarın plaja gidiyoruz, öbür gün bir köyü geziyoruz.» Nathan kötü uyuyor, çünkü çok heyecanlı. Yolculuğu düşünüyor ve gülümsüyor.",
        "In the evening Chloé and Nathan go out for dinner. They choose a restaurant near the sea. The waiter serves grilled fish, and the two friends finish everything! They think about the following days: “We leave tomorrow for the beach, the day after tomorrow we visit a village.” Nathan sleeps badly, because he is too excited. He thinks about the trip, and he smiles.",
      ),
      p(
        "Le dernier jour, ils partent tard. L'avion part à midi, et Chloé finit les valises à la dernière minute. Dans l'avion, Nathan dort tout le temps. Chloé regarde la mer et elle pense : « Les vacances finissent toujours trop vite. » À l'arrivée, ils sortent de l'aéroport et ils choisissent déjà la prochaine destination !",
        "Son gün geç yola çıkıyorlar. Uçak öğlen kalkıyor ve Chloé valizleri son dakikada bitiriyor. Uçakta Nathan sürekli uyuyor. Chloé denize bakıyor ve düşünüyor: «Tatiller hep çok çabuk bitiyor.» Varışta havalimanından çıkıyorlar ve şimdiden bir sonraki yeri seçiyorlar!",
        "On the last day they leave late. The plane leaves at noon, and Chloé finishes the suitcases at the last minute. On the plane Nathan sleeps all the time. Chloé looks at the sea and she thinks: “Holidays always finish too quickly.” On arrival they leave the airport and they are already choosing the next destination!",
      ),
    ],
    questions: [
      q("Quel jour est-ce que Chloé et Nathan finissent les examens ?", "Chloé ve Nathan sınavları hangi gün bitiriyor?", "Which day do Chloé and Nathan finish their exams?", ["Le lundi", "Le vendredi", "Le dimanche"], 1),
      q("Quel pays est-ce qu'ils choisissent ?", "Hangi ülkeyi seçiyorlar?", "Which country do they choose?", ["L'Espagne", "L'Italie", "La Grèce", "Le Portugal"], 3),
      q("Pourquoi est-ce qu'ils choisissent le pays ?", "Neden bu ülkeyi seçiyorlar?", "Why do they choose this country?", ["La mer est belle et la nourriture est excellente", "Les billets sont gratuits", "Ils ont des amis là-bas"], 0),
      q("Que choisissent-ils pour visiter la ville ?", "Şehri gezmek için neyi seçiyorlar?", "What do they choose to visit the city?", ["Un taxi", "Un vieux tram jaune", "Un vélo", "Un bateau"], 1),
      q("Que fait Nathan dans l'avion ?", "Nathan uçakta ne yapıyor?", "What does Nathan do on the plane?", ["Il dort tout le temps", "Il finit un livre", "Il regarde la mer"], 0),
    ],
  },
  {
    id: "reading-possessives",
    lessonId: "possessives",
    level: "A1",
    title: { TR: "Konuk aileye mektup", EN: "A letter to the host family" },
    paragraphs: [
      p(
        "Chers Monsieur et Madame Martin, je suis Yasmine, votre future étudiante. J'ai seize ans et j'arrive à Nantes en septembre pour mon séjour linguistique. Je suis très contente, mais aussi un peu nerveuse. Voici une petite présentation de ma famille, de ma maison et de mes passions. J'aime parler de ma vie avant notre rencontre.",
        "Sevgili Bay ve Bayan Martin, ben Yasmine, gelecekteki öğrenciniz. On altı yaşındayım ve dil kursum için eylülde Nantes'a geliyorum. Çok mutluyum ama biraz da heyecanlıyım. Ailemin, evimin ve ilgi alanlarımın kısa bir tanıtımı burada. Karşılaşmamızdan önce hayatımdan söz etmeyi seviyorum.",
        "Dear Mr and Mrs Martin, I am Yasmine, your future student. I am sixteen and I arrive in Nantes in September for my language stay. I am very happy, but also a little nervous. Here is a short introduction to my family, my house and my interests. I like to talk about my life before our meeting.",
      ),
      p(
        "Ma famille est grande. Mon père est ingénieur et ma mère est médecin. Mon père aime son travail, mais il rentre tard. Ma mère adore ses patients, et elle parle souvent de son hôpital. J'ai deux frères et une sœur. Mon frère aîné est Omar, ma sœur est Lina et mon petit frère est Adam. Mes frères et ma sœur sont mes meilleurs amis.",
        "Ailem kalabalık. Babam mühendis, annem doktor. Babam işini seviyor ama geç dönüyor. Annem hastalarına bayılıyor ve sık sık hastanesinden söz ediyor. İki erkek ve bir kız kardeşim var. Ağabeyim Omar, kız kardeşim Lina, küçük kardeşim Adam. Kardeşlerim benim en iyi arkadaşlarım.",
        "My family is big. My father is an engineer and my mother is a doctor. My father likes his job, but he comes home late. My mother loves her patients, and she often talks about her hospital. I have two brothers and a sister. My older brother is Omar, my sister is Lina and my little brother is Adam. My brothers and my sister are my best friends.",
      ),
      p(
        "Omar est étudiant. Son université est loin, alors il prend le bus tous les jours. Il aime sa vie et ses études. Lina a douze ans. Son école est près de notre maison. Elle adore ses amies et sa professeure d'anglais. Adam a six ans. Son jouet préféré est une voiture rouge, et son chat dort toujours sur sa chaise. Ma grand-mère habite avec nous : sa chambre est au rez-de-chaussée et son sourire est magnifique.",
        "Omar öğrenci. Üniversitesi uzak, bu yüzden her gün otobüse biniyor. Hayatını ve derslerini seviyor. Lina on iki yaşında. Okulu evimize yakın. Arkadaşlarına ve İngilizce öğretmenine bayılıyor. Adam altı yaşında. En sevdiği oyuncak kırmızı bir araba ve kedisi hep sandalyesinde uyuyor. Büyükannem bizimle oturuyor: odası zemin katta ve gülümsemesi muhteşem.",
        "Omar is a student. His university is far, so he takes the bus every day. He likes his life and his studies. Lina is twelve. Her school is near our house. She loves her friends and her English teacher. Adam is six. His favourite toy is a red car, and his cat always sleeps on his chair. My grandmother lives with us: her room is on the ground floor and her smile is magnificent.",
      ),
      p(
        "Notre maison est dans un quartier calme. Nos voisins sont gentils et leurs enfants jouent souvent avec Adam. Mon amie Sara habite à côté. Son frère et ses parents viennent souvent chez nous. Notre maison a un grand salon, une cuisine ouverte et trois chambres. Dans notre jardin, il y a des fleurs, un olivier et une petite table. Ma mère prépare le thé dehors, et nos amis adorent leurs soirées chez nous.",
        "Evimiz sakin bir semtte. Komşularımız kibar ve çocukları sık sık Adam'la oynuyor. Arkadaşım Sara yan evde oturuyor. Erkek kardeşi ve ailesi sık sık bize geliyor. Evimizde büyük bir salon, açık bir mutfak ve üç oda var. Bahçemizde çiçekler, bir zeytin ağacı ve küçük bir masa var. Annem çayı dışarıda hazırlıyor, arkadaşlarımız da bizdeki akşamlara bayılıyor.",
        "Our house is in a quiet neighbourhood. Our neighbours are kind and their children often play with Adam. My friend Sara lives next door. Her brother and her parents often come to our place. Our house has a big living room, an open kitchen and three bedrooms. In our garden there are flowers, an olive tree and a small table. My mother prepares the tea outside, and our friends love their evenings at our place.",
      ),
      p(
        "Mes passions ? J'adore la musique et la lecture. Ma guitare est dans ma chambre et mes livres sont partout. Mon auteur préféré écrit des romans d'aventure. Je joue aussi au football avec mes cousins. Leurs matchs sont toujours drôles ! Mon rêve est de visiter Paris avec mes amies et de goûter vos spécialités. Votre région est célèbre pour ses galettes, n'est-ce pas ? Je prépare aussi un cadeau pour vos enfants : un petit livre de contes de mon pays.",
        "İlgi alanlarım mı? Müziğe ve okumaya bayılıyorum. Gitarım odamda, kitaplarım her yerde. En sevdiğim yazar macera romanları yazıyor. Kuzenlerimle futbol da oynuyorum. Maçları hep çok eğlenceli! Hayalim arkadaşlarımla Paris'i gezmek ve sizin yöresel lezzetlerinizi tatmak. Bölgeniz galetleriyle ünlü, değil mi? Çocuklarınız için de bir hediye hazırlıyorum: ülkemden küçük bir masal kitabı.",
        "My interests? I love music and reading. My guitar is in my room and my books are everywhere. My favourite author writes adventure novels. I also play football with my cousins. Their matches are always funny! My dream is to visit Paris with my friends and to taste your specialities. Your region is famous for its galettes, isn't it? I am also preparing a gift for your children: a small book of tales from my country.",
      ),
      p(
        "Maintenant, j'ai quelques questions sur votre famille. Comment sont vos enfants ? Quel âge est-ce qu'ils ont ? Votre maison est grande ? Est-ce que votre chien aime les visiteurs ? Votre adresse exacte, c'est quoi ? Et vos habitudes : quand est-ce que vous dînez ? J'aime beaucoup votre idée de partager vos repas avec mes camarades.",
        "Şimdi ailenizle ilgili birkaç sorum var. Çocuklarınız nasıl? Kaç yaşındalar? Eviniz büyük mü? Köpeğiniz misafirleri seviyor mu? Tam adresiniz ne? Ve alışkanlıklarınız: akşam yemeğini ne zaman yersiniz? Yemeklerinizi arkadaşlarımla paylaşma fikrinize bayılıyorum.",
        "Now I have a few questions about your family. What are your children like? How old are they? Is your house big? Does your dog like visitors? What is your exact address? And your habits: when do you have dinner? I like your idea of sharing your meals with my classmates very much.",
      ),
      p(
        "Mes parents vous remercient pour votre accueil. Mon père dit : « Merci pour votre gentillesse ! » Ma mère envoie ses amitiés à Madame Martin, et mon père salue votre mari. Mes frères et ma sœur disent bonjour à vos enfants. Voici mon adresse électronique, et voici mon numéro de téléphone. Je suis impatiente de rencontrer votre famille et de découvrir votre ville. À bientôt ! Votre étudiante, Yasmine.",
        "Ailem ağırlamanız için size teşekkür ediyor. Babam diyor ki: «Nezaketiniz için teşekkürler!» Annem Madame Martin'e selamlarını gönderiyor, babam eşinize selam söylüyor. Kardeşlerim çocuklarınıza merhaba diyor. İşte elektronik posta adresim ve işte telefon numaram. Ailenizle tanışmak ve şehrinizi keşfetmek için sabırsızlanıyorum. Görüşmek üzere! Öğrenciniz Yasmine.",
        "My parents thank you for your welcome. My father says: “Thank you for your kindness!” My mother sends her best wishes to Mrs Martin, and my father greets your husband. My brothers and my sister say hello to your children. Here is my email address, and here is my phone number. I am eager to meet your family and to discover your city. See you soon! Your student, Yasmine.",
      ),
    ],
    questions: [
      q("Qui est Yasmine ?", "Yasmine kim?", "Who is Yasmine?", ["Une future étudiante en séjour linguistique", "La fille de Madame Martin", "Une professeure d'anglais"], 0),
      q("Quel est le métier de la mère de Yasmine ?", "Yasmine'in annesinin mesleği ne?", "What is Yasmine's mother's job?", ["Ingénieure", "Professeure", "Médecin", "Journaliste"], 2),
      q("Qui a six ans ?", "Altı yaşında olan kim?", "Who is six?", ["Omar", "Adam", "Lina", "Sara"], 1),
      q("Que fait Yasmine avec ses cousins ?", "Yasmine kuzenleriyle ne yapıyor?", "What does Yasmine do with her cousins?", ["Elle joue au football", "Elle chante", "Elle visite Paris", "Elle prépare le thé"], 0),
      q("Qu'est-ce qu'il y a dans le jardin de Yasmine ?", "Yasmine'in bahçesinde ne var?", "What is there in Yasmine's garden?", ["Un chat et un chien", "Des fleurs, un olivier et une petite table", "Une grande piscine"], 1),
    ],
  },
];

export default texts;
