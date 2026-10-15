import type { BlogImage } from "../types";

type Entry = { cover: BlogImage; figure: BlogImage & { afterSection: number } };

const u = (id: string) => `https://unsplash.com/photos/${id}`;

const cover = (slug: string, alt: BlogImage["alt"], author: string, id: string): BlogImage => ({
  src: `/blog/${slug}/cover.webp`,
  width: 1600,
  height: 900,
  alt,
  credit: { author, url: u(id) },
});

const figure = (
  slug: string,
  alt: BlogImage["alt"],
  author: string,
  id: string,
): BlogImage & { afterSection: number } => ({
  src: `/blog/${slug}/figure.webp`,
  width: 1200,
  height: 800,
  alt,
  credit: { author, url: u(id) },
  afterSection: 2,
});

/** Photos from Unsplash (Unsplash License: free for commercial use). */
export const blogImages: Record<string, Entry> = {
  "quelle-certification-cybersecurite-choisir": {
    cover: cover(
      "quelle-certification-cybersecurite-choisir",
      {
        fr: "Jeune femme prenant des notes dans un cahier devant son ordinateur portable, au bureau",
        ar: "شابة تدوّن ملاحظات في دفتر أمام حاسوبها المحمول في مكتب مضيء",
        en: "Young woman taking notes in a notebook beside her laptop at a desk",
      },
      "Vitaly Gariev",
      "Ad2TAPEhliE",
    ),
    figure: figure(
      "quelle-certification-cybersecurite-choisir",
      {
        fr: "Groupe d'étudiants souriants réunis autour d'un ordinateur portable dans un amphithéâtre",
        ar: "مجموعة من الطلاب المبتسمين يلتفّون حول حاسوب محمول في قاعة دراسية",
        en: "Group of smiling students gathered around a laptop in a lecture hall",
      },
      "Vitaly Gariev",
      "8gAbl776pc0",
    ),
  },
  "ceh-ou-oscp": {
    cover: cover(
      "ceh-ou-oscp",
      {
        fr: "Vue de dessus de mains tapant sur un ordinateur portable affichant du code",
        ar: "منظر علوي ليدين تكتبان على حاسوب محمول تظهر على شاشته شيفرة برمجية",
        en: "Top-down view of hands typing on a laptop showing code on screen",
      },
      "Rahul Mishra",
      "Bn4L8oSTIjc",
    ),
    figure: figure(
      "ceh-ou-oscp",
      {
        fr: "Deux professionnels travaillant sur des écrans affichant du code dans un open space",
        ar: "مهنيان يعملان أمام شاشات تعرض شيفرة برمجية في مكتب مفتوح",
        en: "Two professionals working at monitors displaying code in a bright open office",
      },
      "Compagnons",
      "Im_cQ6hQo10",
    ),
  },
  "prix-certifications-cybersecurite-maroc": {
    cover: cover(
      "prix-certifications-cybersecurite-maroc",
      {
        fr: "Calculatrice posée sur des documents chiffrés à côté d'un ordinateur portable sur un bureau",
        ar: "آلة حاسبة فوق وثائق مالية بجانب حاسوب محمول على مكتب عمل",
        en: "Calculator resting on financial documents next to a laptop on an office desk",
      },
      "Jakub Żerdzicki",
      "8wLZi9OhsWU",
    ),
    figure: figure(
      "prix-certifications-cybersecurite-maroc",
      {
        fr: "Main notant un budget dans un carnet, avec calculatrice et billets sur le bureau",
        ar: "يد تدوّن ميزانية في دفتر مع آلة حاسبة وأوراق نقدية على المكتب",
        en: "Hand writing a budget in a notebook with a calculator and banknotes nearby",
      },
      "Jakub Żerdzicki",
      "leLj_06wjJQ",
    ),
  },
  "security-plus-ou-ceh": {
    cover: cover(
      "security-plus-ou-ceh",
      {
        fr: "Cadenas rouge posé sur un clavier d'ordinateur rétroéclairé en vert, symbole de sécurité",
        ar: "قفل أحمر موضوع على لوحة مفاتيح حاسوب بإضاءة خضراء، رمزاً للأمن الرقمي",
        en: "Red padlock resting on a green backlit computer keyboard, symbolising digital security",
      },
      "FlyD",
      "mT7lXZPjk7U",
    ),
    figure: figure(
      "security-plus-ou-ceh",
      {
        fr: "Femme souriante qui apprend sur son ordinateur portable dans un bureau lumineux",
        ar: "امرأة مبتسمة تتعلّم على حاسوبها المحمول في مكتب مضيء",
        en: "Smiling woman learning on her laptop in a bright, modern office",
      },
      "Vitaly Gariev",
      "KwWY-gVlAvA",
    ),
  },
  "cissp-ou-cism": {
    cover: cover(
      "cissp-ou-cism",
      {
        fr: "Réunion de direction autour d'une table de conférence, avec un écran affichant des tableaux",
        ar: "اجتماع إداري حول طاولة مؤتمرات مع شاشة تعرض جداول بيانات",
        en: "Management meeting around a conference table with a screen showing spreadsheets",
      },
      "Beatriz Cattel",
      "3tCLyPBSQ5k",
    ),
    figure: figure(
      "cissp-ou-cism",
      {
        fr: "Portrait d'une responsable souriante en tailleur bleu dans un bureau moderne",
        ar: "صورة لمديرة مبتسمة ترتدي سترة زرقاء في مكتب عصري",
        en: "Portrait of a smiling female executive in a blue blazer in a modern office",
      },
      "Vitaly Gariev",
      "jI4HREHtae4",
    ),
  },
  "loi-05-20-cybersecurite-maroc": {
    cover: cover(
      "loi-05-20-cybersecurite-maroc",
      {
        fr: "Vue de la kasbah des Oudayas à Rabat depuis une avenue bordée de lampadaires",
        ar: "منظر قصبة الأوداية في الرباط من شارع تصطفّ فيه أعمدة الإنارة",
        en: "View of the Kasbah of the Udayas in Rabat from a lamp-lined avenue",
      },
      "Xhiliana",
      "upwxLZf0STM",
    ),
    figure: figure(
      "loi-05-20-cybersecurite-maroc",
      {
        fr: "Marteau de juge en bois posé sur un livre fermé, symbole du cadre juridique",
        ar: "مطرقة قاضٍ خشبية فوق كتاب مغلق، رمزاً للإطار القانوني",
        en: "Wooden judge's gavel resting on a closed book, symbolising the legal framework",
      },
      "Sasun Bughdaryan",
      "NB1dUts3ROU",
    ),
  },
  "iso-27001-maroc": {
    cover: cover(
      "iso-27001-maroc",
      {
        fr: "Équipe de quatre personnes examinant ensemble des documents autour d'une table",
        ar: "فريق من أربعة أشخاص يراجعون وثائق معاً حول طاولة عمل",
        en: "Team of four people reviewing documents together around a table",
      },
      "Andreea Avramescu",
      "wR56AUlEsE4",
    ),
    figure: figure(
      "iso-27001-maroc",
      {
        fr: "Deux collègues en costume passant en revue un document dans un bureau",
        ar: "زميلان ببدلات رسمية يراجعان وثيقة معاً في مكتب",
        en: "Two colleagues in business suits reviewing a document together in an office",
      },
      "Vitaly Gariev",
      "8k5j5z6ZYT4",
    ),
  },
  "devenir-pentester-maroc": {
    cover: cover(
      "devenir-pentester-maroc",
      {
        fr: "Deux développeurs analysant ensemble du code affiché sur un écran au bureau",
        ar: "مطوّران يحلّلان معاً شيفرة برمجية معروضة على شاشة في المكتب",
        en: "Two developers analysing code together on a monitor in an office",
      },
      "Mushvig Niftaliyev",
      "HQRrEUTBfaU",
    ),
    figure: figure(
      "devenir-pentester-maroc",
      {
        fr: "Deux jeunes hommes concentrés devant un ordinateur dans une salle éclairée en violet",
        ar: "شابان مركّزان أمام حاسوب في غرفة بإضاءة بنفسجية",
        en: "Two young men focused on a computer in a purple-lit room",
      },
      "Fethi Benattallah",
      "XC_hspTxews",
    ),
  },
  "reussir-examen-ceh-v13": {
    cover: cover(
      "reussir-examen-ceh-v13",
      {
        fr: "Notes de révision manuscrites, surligneur et post-it sur un bureau d'étude",
        ar: "ملاحظات مراجعة مكتوبة بخط اليد وقلم تمييز وأوراق لاصقة على مكتب",
        en: "Handwritten revision notes, a highlighter and sticky notes on a study desk",
      },
      "Yen Vu",
      "3Hcz2zvPqBI",
    ),
    figure: figure(
      "reussir-examen-ceh-v13",
      {
        fr: "Homme à lunettes concentré sur son ordinateur portable, un stylo à la bouche",
        ar: "رجل بنظارات يركّز على حاسوبه المحمول وقلم في فمه أثناء المراجعة",
        en: "Man in glasses concentrating on his laptop with a pen in his mouth",
      },
      "Vitaly Gariev",
      "l_pGKO3rVx4",
    ),
  },
  "comptia-security-plus-sy0-701": {
    cover: cover(
      "comptia-security-plus-sy0-701",
      {
        fr: "Salle serveurs d'un datacenter avec baies et chemins de câbles réseau",
        ar: "قاعة خوادم في مركز بيانات مع خزائن ومسارات كابلات الشبكة",
        en: "Data centre server room with racks and overhead network cable trays",
      },
      "Taylor Vick",
      "aWslrFhs1w4",
    ),
    figure: figure(
      "comptia-security-plus-sy0-701",
      {
        fr: "Deux professionnels de l'informatique à lunettes travaillant devant un écran",
        ar: "مهنيان في تقنية المعلومات يرتديان نظارات ويعملان أمام شاشة",
        en: "Two IT professionals in glasses working together in front of a monitor",
      },
      "Litoon Dev",
      "E8pqwxaS6ko",
    ),
  },
  "preparer-oscp-maroc": {
    cover: cover(
      "preparer-oscp-maroc",
      {
        fr: "Personne travaillant tard sur un ordinateur portable sous une petite lampe de bureau",
        ar: "شخص يعمل في وقت متأخر على حاسوب محمول تحت مصباح مكتب صغير",
        en: "Person working late on a laptop under a small desk lamp",
      },
      "Ewan Buck",
      "Ob9OKJosZT0",
    ),
    figure: figure(
      "preparer-oscp-maroc",
      {
        fr: "Écran d'ordinateur portable affichant du code dans une pièce plongée dans le noir",
        ar: "شاشة حاسوب محمول تعرض شيفرة برمجية في غرفة مظلمة",
        en: "Laptop screen displaying code in a dark, blue-lit room at night",
      },
      "Faizi Sheikh",
      "SUJu6bTIBhE",
    ),
  },
  "analyste-soc-maroc": {
    cover: cover(
      "analyste-soc-maroc",
      {
        fr: "Opérateur face à un mur d'écrans de surveillance dans un centre de supervision",
        ar: "مشغّل أمام جدار من شاشات المراقبة في مركز للإشراف والمتابعة",
        en: "Operator facing a wall of monitoring screens in an operations centre",
      },
      "Tasha Kostyuk",
      "TtMKq3lJm-U",
    ),
    figure: figure(
      "analyste-soc-maroc",
      {
        fr: "Analyste travaillant de nuit devant plusieurs écrans affichant des données et du code",
        ar: "محلّل يعمل ليلاً أمام عدة شاشات تعرض بيانات وشيفرة برمجية",
        en: "Analyst working at night in front of several screens showing data and code",
      },
      "Abu Saeid",
      "fdGTi4IcaJc",
    ),
  },
  "reconversion-cybersecurite-maroc": {
    cover: cover(
      "reconversion-cybersecurite-maroc",
      {
        fr: "Côte de Casablanca avec le phare d'El Hank et les vagues de l'Atlantique",
        ar: "ساحل الدار البيضاء مع منارة العنق وأمواج المحيط الأطلسي",
        en: "Casablanca coastline with the El Hank lighthouse and Atlantic waves",
      },
      "Danny Lau",
      "Yq1uy_xc1pI",
    ),
    figure: figure(
      "reconversion-cybersecurite-maroc",
      {
        fr: "Homme souriant en veste travaillant sur son ordinateur portable dans un bureau",
        ar: "رجل مبتسم يرتدي سترة ويعمل على حاسوبه المحمول في مكتب",
        en: "Smiling man in a blazer working on his laptop in an office",
      },
      "Vitaly Gariev",
      "3EUgUg4e3nE",
    ),
  },
  "former-equipes-cybersecurite-entreprise": {
    cover: cover(
      "former-equipes-cybersecurite-entreprise",
      {
        fr: "Formatrice animant une session devant des collaborateurs attentifs en salle de réunion",
        ar: "مدرّبة تقدّم جلسة تدريبية أمام موظفين منتبهين في قاعة اجتماعات",
        en: "Trainer leading a session in front of attentive employees in a meeting room",
      },
      "Vitaly Gariev",
      "ddW9WMz77F0",
    ),
    figure: figure(
      "former-equipes-cybersecurite-entreprise",
      {
        fr: "Femme présentant au tableau blanc à son équipe lors d'un atelier",
        ar: "امرأة تقدّم عرضاً أمام السبورة البيضاء لفريقها خلال ورشة عمل",
        en: "Woman presenting at a whiteboard to her team during a workshop",
      },
      "Vitaly Gariev",
      "piULICqeV5Y",
    ),
  },
  "meilleur-centre-formation-cybersecurite-maroc": {
    cover: cover(
      "meilleur-centre-formation-cybersecurite-maroc",
      {
        fr: "Adultes en formation avec leurs ordinateurs portables autour d'une grande table de réunion",
        ar: "متدرّبون بالغون مع حواسيبهم المحمولة حول طاولة اجتماعات كبيرة في قاعة مضيئة",
        en: "Adult learners with laptops seated around a long table in a bright training room",
      },
      "Christina @ wocintechchat.com",
      "faEfWCdOKIg",
    ),
    figure: figure(
      "meilleur-centre-formation-cybersecurite-maroc",
      {
        fr: "Minaret de la mosquée Hassan II à Casablanca sous un ciel bleu intense",
        ar: "مئذنة مسجد الحسن الثاني في الدار البيضاء تحت سماء زرقاء صافية",
        en: "Minaret of the Hassan II Mosque in Casablanca under a deep blue sky",
      },
      "Chaoyue Ding",
      "tvn5IIZtnEU",
    ),
  },
  "ceh-v14": {
    cover: cover(
      "ceh-v14",
      {
        fr: "Puce marquée AI sur un circuit imprimé aux pistes lumineuses vertes",
        ar: "شريحة مكتوب عليها AI على لوحة دوائر إلكترونية بمسارات خضراء مضيئة",
        en: "Chip labelled AI on a circuit board with glowing green traces",
      },
      "Immo Wegmann",
      "w69Z8K-HGQU",
    ),
    figure: figure(
      "ceh-v14",
      {
        fr: "Rendu 3D d'un processeur moderne monté sur une carte électronique éclairée",
        ar: "تصوير ثلاثي الأبعاد لمعالج حديث مثبّت على لوحة إلكترونية مضيئة",
        en: "3D render of a modern processor mounted on an illuminated circuit board",
      },
      "Brecht Corbeel",
      "LTnZEjcLneo",
    ),
  },
  "ccna-ou-security-plus": {
    cover: cover(
      "ccna-ou-security-plus",
      {
        fr: "Câbles Ethernet noirs branchés à l'arrière d'un équipement réseau",
        ar: "كابلات إيثرنت سوداء موصولة بالجهة الخلفية لجهاز شبكة",
        en: "Black Ethernet cables plugged into the back of a network device",
      },
      "Manuel Luikenga",
      "y4GHs9GEFdM",
    ),
    figure: figure(
      "ccna-ou-security-plus",
      {
        fr: "Écran de sécurité indiquant réseaux protégés, absence de virus et applications à jour",
        ar: "شاشة أمان تشير إلى شبكات محمية وغياب الفيروسات وتطبيقات محدّثة",
        en: "Security screen showing safe networks, no viruses and up-to-date apps",
      },
      "Zulfugar Karimov",
      "-nBClEqKKVM",
    ),
  },
  "ccna-cybersecurity-maroc": {
    cover: cover(
      "ccna-cybersecurity-maroc",
      {
        fr: "Vue de dessus d'une personne travaillant devant trois écrans lumineux dans le noir",
        ar: "منظر علوي لشخص يعمل أمام ثلاث شاشات مضيئة في الظلام",
        en: "Top-down view of a person working at three bright monitors in the dark",
      },
      "Max Duzij",
      "qAjJk-un3BI",
    ),
    figure: figure(
      "ccna-cybersecurity-maroc",
      {
        fr: "Tableau de bord de supervision affichant des indicateurs et des courbes sur un écran",
        ar: "لوحة متابعة تعرض مؤشرات ومنحنيات بيانية على شاشة",
        en: "Monitoring dashboard displaying metrics and trend charts on a screen",
      },
      "Stephen Dawson",
      "qwtCeJ5cLYs",
    ),
  },
  "certification-cissp-maroc": {
    cover: cover(
      "certification-cissp-maroc",
      {
        fr: "Responsable présentant une stratégie sur un écran à des collègues en réunion",
        ar: "مسؤول يعرض استراتيجية على شاشة أمام زملائه خلال اجتماع",
        en: "Manager presenting a strategy on a screen to colleagues in a meeting",
      },
      "Vitaly Gariev",
      "SvYifX5HkeQ",
    ),
    figure: figure(
      "certification-cissp-maroc",
      {
        fr: "Portrait d'un dirigeant en veste sombre assis à son bureau",
        ar: "صورة لمدير تنفيذي بسترة داكنة يجلس إلى مكتبه",
        en: "Portrait of an executive in a dark blazer seated at his desk",
      },
      "Ratul Puri",
      "xQLiFkWCSvM",
    ),
  },
  "formation-cybersecurite-en-ligne-maroc": {
    cover: cover(
      "formation-cybersecurite-en-ligne-maroc",
      {
        fr: "Ordinateur portable affichant une visioconférence avec de nombreux participants, près d'une tasse",
        ar: "حاسوب محمول يعرض مكالمة فيديو مع مشاركين كثيرين بجانب كوب",
        en: "Laptop showing a video call with many participants beside a mug",
      },
      "Chris Montgomery",
      "smgTvepind4",
    ),
    figure: figure(
      "formation-cybersecurite-en-ligne-maroc",
      {
        fr: "Femme souriante saluant de la main lors d'un appel vidéo sur son ordinateur",
        ar: "امرأة مبتسمة تلوّح بيدها خلال مكالمة فيديو على حاسوبها",
        en: "Smiling woman waving during a video call on her laptop",
      },
      "Vitaly Gariev",
      "nSj0hdQUrW0",
    ),
  },
  "metiers-cybersecurite-maroc": {
    cover: cover(
      "metiers-cybersecurite-maroc",
      {
        fr: "Deux professionnelles en discussion à une table devant une grande baie vitrée",
        ar: "مهنيتان تتحاوران حول طاولة أمام نافذة زجاجية كبيرة",
        en: "Two professional women talking at a table by a large window",
      },
      "Christina @ wocintechchat.com",
      "LQ1t-8Ms5PY",
    ),
    figure: figure(
      "metiers-cybersecurite-maroc",
      {
        fr: "Jeune employé en chemise travaillant sur ordinateur dans un bureau d'ingénierie",
        ar: "موظف شاب بقميص يعمل على حاسوب في مكتب هندسي",
        en: "Young employee in a shirt working at a computer in an engineering office",
      },
      "ThisisEngineering",
      "WN1ZZaWY2fU",
    ),
  },
  "voucher-certification-gratuit": {
    cover: cover(
      "voucher-certification-gratuit",
      {
        fr: "Étudiante concentrée rédigeant un examen à son bureau, vue à travers une fenêtre",
        ar: "طالبة مركّزة تكتب إجابات امتحان على مكتبها، تُرى من خلال نافذة",
        en: "Focused student writing an exam at her desk, seen through a window",
      },
      "Yanhao Fang",
      "QR-XQbUVC1s",
    ),
    figure: figure(
      "voucher-certification-gratuit",
      {
        fr: "Jeune femme vérifiant attentivement un message sur son smartphone sur un quai de gare",
        ar: "شابة تتحقق بانتباه من رسالة على هاتفها الذكي في رصيف محطة قطار",
        en: "Young woman carefully checking a message on her smartphone at a train platform",
      },
      "Daria Nepriakhina",
      "_XR5rkprHQU",
    ),
  },
  "certifications-cybersecurite-gratuites": {
    cover: cover(
      "certifications-cybersecurite-gratuites",
      {
        fr: "Mains tapant sur un clavier d'ordinateur portable à côté d'un carnet de notes manuscrites",
        ar: "يدان تكتبان على لوحة مفاتيح حاسوب محمول بجانب دفتر ملاحظات مكتوبة بخط اليد",
        en: "Hands typing on a laptop keyboard beside a notebook of handwritten notes",
      },
      "Daria Glakteeva",
      "2w0IdiEI-hg",
    ),
    figure: figure(
      "certifications-cybersecurite-gratuites",
      {
        fr: "Étudiants travaillant sur leurs ordinateurs dans une grande salle de bibliothèque universitaire",
        ar: "طلاب يعملون على حواسيبهم في قاعة مكتبة جامعية كبيرة ذات رفوف خشبية",
        en: "Students working on laptops in a large university library reading room",
      },
      "Zoshua Colah",
      "Ma7aOy5mMp0",
    ),
  },
};
