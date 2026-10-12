import type { Guide } from "../types";

const guide: Guide = {
  slug: "security-plus-ou-ceh",
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 7,
  relatedCerts: ["comptia-security-plus", "ceh-v13", "comptia-cysa-plus"],
  title: {
    fr: "CompTIA Security+ ou CEH v13 pour débuter en cybersécurité ?",
    ar: "CompTIA Security+ أم CEH v13 لبدء مسارك في الأمن السيبراني؟",
    en: "CompTIA Security+ or CEH v13 to Start in Cybersecurity?",
  },
  seoTitle: {
    fr: "Security+ ou CEH : par quelle certification débuter ?",
    ar: "Security+ أم CEH: بأي شهادة تبدأ في الأمن السيبراني؟",
    en: "Security+ vs CEH: Which Should Beginners Choose?",
  },
  seoDescription: {
    fr: "Security+ ou CEH v13 pour débuter ? Contenu, prérequis, examen, prix en MAD et débouchés comparés pour choisir le bon ordre. Lisez notre guide complet.",
    ar: "Security+ أم CEH v13 للمبتدئين؟ مقارنة المحتوى والمتطلبات والامتحان والسعر بالدرهم والآفاق المهنية لاختيار الترتيب الصحيح. اقرأ دليلنا الكامل الآن.",
    en: "Security+ or CEH v13 for beginners? We compare scope, prerequisites, exam, price in MAD and career outcomes to help you pick the right order. Read the guide.",
  },
  excerpt: {
    fr: "Security+ pose les fondamentaux de la sécurité défensive, le CEH v13 enseigne la méthodologie de l'attaquant. Pour un débutant, l'ordre dans lequel on les passe compte autant que le choix lui-même.",
    ar: "ترسي Security+ أسس الأمن الدفاعي، بينما تُعلّم CEH v13 منهجية المهاجم. وبالنسبة للمبتدئ، يهم ترتيب اجتيازهما بقدر ما يهم الاختيار نفسه.",
    en: "Security+ lays the foundations of defensive security, while CEH v13 teaches the attacker's methodology. For a beginner, the order you take them in matters as much as the choice itself.",
  },
  sections: {
    fr: [
      {
        heading: "Security+ et CEH v13 : deux portes d'entrée très différentes",
        paragraphs: [
          "Quand on veut se lancer en cybersécurité, deux noms reviennent presque toujours : CompTIA Security+ et le CEH (Certified Ethical Hacker) d'EC-Council. Les deux sont connus des recruteurs, les deux s'obtiennent après une formation de 5 jours, et les deux apparaissent dans de nombreuses offres d'emploi. Pourtant, ils ne répondent pas à la même question.",
          "Security+ répond à « comment protège-t-on un système d'information ? ». Le CEH v13 répond à « comment un attaquant s'y prend-il pour le compromettre ? ». L'un construit le socle défensif sur lequel repose tout métier de la sécurité, l'autre enseigne la méthodologie offensive. Pour un débutant, comprendre cette différence évite de dépenser du temps et de l'argent dans une certification qui arrive trop tôt.",
        ],
      },
      {
        heading: "Ce que couvre chaque certification : fondamentaux défensifs ou méthodologie offensive ?",
        paragraphs: [
          "Security+ (SY0-701) est une certification neutre vis-à-vis des éditeurs, qui couvre l'ensemble des fondamentaux : menaces, vulnérabilités et attaques courantes, architecture sécurisée, gestion des identités et des accès, cryptographie, sécurité du cloud et Zero Trust, opérations de sécurité, réponse aux incidents, gouvernance et gestion des risques. C'est une vue d'ensemble du métier, du pare-feu à la politique de sécurité.",
          "Le CEH v13 se concentre sur les techniques d'attaque, phase par phase : reconnaissance, scan et énumération, analyse de vulnérabilités, exploitation de systèmes, attaques web, sans fil, mobiles, cloud et IoT, ingénierie sociale, contournement des défenses, et, nouveauté de la version « CEH AI », l'usage de l'intelligence artificielle par les attaquants comme par les défenseurs. Il est très concret sur les outils (Nmap, Metasploit, Burp Suite…), mais part du principe que les bases réseau et système sont acquises.",
        ],
        list: [
          "Security+ : vision large et défensive, idéale pour comprendre comment tout s'articule.",
          "CEH v13 : vision offensive et outillée, idéale pour comprendre comment les attaques fonctionnent réellement.",
          "Point commun : les deux renforcent la capacité à dialoguer avec les équipes SOC, audit et infrastructure.",
        ],
      },
      {
        heading: "Prérequis : quel niveau faut-il avoir pour chacune ?",
        paragraphs: [
          "Security+ est classée niveau débutant. Aucun prérequis n'est obligatoire ; CompTIA recommande un niveau Network+ et idéalement environ deux ans d'expérience en administration IT avec une composante sécurité. En pratique, un technicien support, un administrateur réseau junior ou un lauréat d'école d'ingénieurs ou de l'OFPPT avec de bonnes bases TCP/IP peut s'y préparer.",
          "Le CEH v13 est de niveau intermédiaire. Il suppose des bases solides en réseaux TCP/IP, la pratique de Windows et de la ligne de commande Linux, et des notions de sécurité ; EC-Council recommande deux ans d'expérience, l'inscription via une formation officielle dispensant de la procédure d'éligibilité. Sans socle préalable, on risque d'apprendre à lancer des outils sans vraiment comprendre ce qu'ils révèlent.",
        ],
      },
      {
        heading: "Format d'examen et prix au Maroc : la comparaison concrète",
        paragraphs: [
          "Les deux examens se passent en anglais et peuvent se passer en ligne sous surveillance. Voici les éléments factuels côte à côte, avec les tarifs publics de nos formations (voucher d'examen inclus).",
          "La différence de format a une conséquence pratique sur la préparation. Les questions « performance-based » de Security+ vous demandent par exemple de configurer un paramètre, d'associer des contrôles à des scénarios ou d'analyser une situation, ce qui récompense la compréhension plutôt que la mémorisation. Le CEH, avec ses 125 questions en 4 heures, teste surtout l'étendue de vos connaissances et votre capacité à rester concentré sur une longue série de scénarios techniques.",
        ],
        list: [
          "Code d'examen : Security+ – SY0-701 (Pearson VUE) ; CEH v13 – 312-50 (EC-Council).",
          "Format : Security+ – 90 questions maximum, QCM et mises en situation « performance-based » ; CEH v13 – 125 QCM.",
          "Durée : Security+ – 90 minutes ; CEH v13 – 4 heures.",
          "Seuil de réussite : Security+ – 750 sur une échelle de 100 à 900 ; CEH v13 – 60 % à 85 % selon la forme de l'examen.",
          "Validité : Security+ – 3 ans, renouvelable via le programme CompTIA CE ; CEH v13 – 3 ans, renouvelable via 120 crédits ECE et la cotisation annuelle.",
          "Formation : Security+ – 5 jours (35 heures) ; CEH v13 – 5 jours (40 heures).",
          "Prix public au Maroc : Security+ – à partir de 9 900 MAD ; CEH v13 – à partir de 24 900 MAD.",
        ],
      },
      {
        heading: "Quels débouchés après Security+ ou le CEH v13 ?",
        paragraphs: [
          "Security+ ouvre surtout des postes d'entrée en sécurité défensive : analyste SOC niveau 1, technicien ou administrateur sécurité, support sécurité chez un prestataire de services managés, assistant RSSI. Elle est largement reconnue à l'international et figure dans le cadre DoD 8140 américain ; au Maroc, banques, opérateurs télécoms, centres d'offshoring et intégrateurs de Casablanca et Rabat la connaissent comme un gage de fondamentaux solides. Elle mène naturellement vers CompTIA CySA+ (à partir de 12 900 MAD), la certification des analystes SOC de niveau 2.",
          "Le CEH v13 vise davantage les postes orientés évaluation de la sécurité : pentesteur junior, auditeur technique, consultant en sécurité offensive, ou analyste qui veut mieux comprendre les attaques qu'il détecte. Il est très présent dans les offres d'emploi et les filtres RH, et constitue une étape fréquente vers des certifications plus pratiques comme l'OSCP+. Pour un tout premier poste, il pèse davantage s'il s'appuie sur une première expérience technique.",
          "Dans les deux cas, une certification ne remplace pas l'expérience : elle facilite le premier entretien et structure vos connaissances, mais ce sont vos projets, vos labs et vos premières missions qui convaincront dans la durée.",
        ],
      },
      {
        heading: "Dans quel ordre les passer quand on débute ?",
        paragraphs: [
          "Pour la majorité des débutants, l'ordre le plus logique est Security+ d'abord, puis le CEH v13. Security+ donne le vocabulaire, les concepts et la vision d'ensemble qui rendent le CEH beaucoup plus digeste ; c'est aussi l'investissement le plus accessible pour valider son intérêt pour le domaine. Le CEH vient ensuite ajouter la perspective de l'attaquant sur un socle déjà solide.",
          "Il existe des exceptions. Un administrateur système ou réseau avec plusieurs années d'expérience et une appétence claire pour l'offensif peut commencer directement par le CEH v13. À l'inverse, quelqu'un qui vise un poste SOC ou de gouvernance peut enchaîner Security+ puis CySA+ et n'aborder le CEH que plus tard, pour comprendre les techniques adverses.",
        ],
        list: [
          "Vous débutez ou venez du support IT : Security+, puis CEH v13 ou CySA+ selon votre orientation.",
          "Vous êtes administrateur expérimenté et attiré par le pentest : CEH v13 directement, puis une certification pratique.",
          "Vous visez le SOC et la détection : Security+, puis CySA+ ; le CEH en complément.",
        ],
      },
      {
        heading: "Se former à Security+ et au CEH v13 au Maroc",
        paragraphs: [
          "GATech propose les deux formations à Casablanca, à Rabat ou en classe virtuelle en direct, avec le voucher d'examen inclus : Security+ à partir de 9 900 MAD et CEH v13 à partir de 24 900 MAD. Si vous ne savez pas par où commencer, nos conseillers peuvent évaluer votre niveau et vous proposer un parcours cohérent avec votre projet professionnel.",
        ],
      },
    ],
    ar: [
      {
        heading: "Security+ وCEH v13: بوابتان مختلفتان تماما لدخول المجال",
        paragraphs: [
          "عندما ترغب في دخول مجال الأمن السيبراني، يتكرر اسمان في كل مرة تقريبا: CompTIA Security+ وشهادة CEH (Certified Ethical Hacker) من EC-Council. كلتاهما معروفة لدى المشغلين، وكلتاهما يتم الحصول عليها بعد تكوين من 5 أيام، وكلتاهما حاضرة في كثير من عروض الشغل. ومع ذلك، فهما لا تجيبان عن السؤال نفسه.",
          "تجيب Security+ عن سؤال «كيف نحمي نظام المعلومات؟»، بينما تجيب CEH v13 عن سؤال «كيف يتصرف المهاجم لاختراقه؟». الأولى تبني الأساس الدفاعي الذي ترتكز عليه كل مهن الأمن، والثانية تُعلّم المنهجية الهجومية. وبالنسبة للمبتدئ، يتيح فهم هذا الفرق تجنب إنفاق الوقت والمال على شهادة تأتي في وقت مبكر جدا.",
        ],
      },
      {
        heading: "ماذا تغطي كل شهادة: أسس دفاعية أم منهجية هجومية؟",
        paragraphs: [
          "Security+ (SY0-701) شهادة محايدة تجاه المورّدين، تغطي مجمل الأسس: التهديدات والثغرات والهجمات الشائعة، والبنية الآمنة، وتدبير الهويات والولوج، والتشفير، وأمن السحابة ونموذج Zero Trust، وعمليات الأمن، والاستجابة للحوادث، والحكامة وتدبير المخاطر. إنها نظرة شاملة على المهنة، من جدار الحماية إلى سياسة الأمن.",
          "أما CEH v13 فتركز على تقنيات الهجوم مرحلة بمرحلة: الاستطلاع، والمسح والتعداد، وتحليل الثغرات، واختراق الأنظمة، وهجمات الويب والشبكات اللاسلكية والأجهزة المحمولة والسحابة وإنترنت الأشياء، والهندسة الاجتماعية، والتحايل على وسائل الحماية، إضافة إلى الجديد في نسخة «CEH AI»: توظيف الذكاء الاصطناعي من طرف المهاجمين والمدافعين. وهي عملية جدا في ما يخص الأدوات (Nmap وMetasploit وBurp Suite وغيرها)، لكنها تفترض أن أساسيات الشبكات والأنظمة مكتسبة مسبقا.",
        ],
        list: [
          "Security+: رؤية واسعة ودفاعية، مثالية لفهم كيفية ترابط مختلف العناصر.",
          "CEH v13: رؤية هجومية تعتمد على الأدوات، مثالية لفهم كيفية عمل الهجمات فعليا.",
          "القاسم المشترك: كلتاهما تعزز القدرة على التواصل مع فرق SOC والتدقيق والبنية التحتية.",
        ],
      },
      {
        heading: "المتطلبات المسبقة: ما المستوى المطلوب لكل شهادة؟",
        paragraphs: [
          "تُصنف Security+ في مستوى المبتدئين. لا توجد متطلبات إلزامية، لكن CompTIA توصي بمستوى Network+ ويفضل حوالي سنتين من الخبرة في إدارة الأنظمة مع جانب أمني. وعمليا، يمكن لتقني الدعم أو متصرف الشبكات المبتدئ أو خريج مدرسة مهندسين أو OFPPT يملك أساسا جيدا في TCP/IP أن يستعد لها.",
          "أما CEH v13 فمن المستوى المتوسط. وتفترض أساسا متينا في شبكات TCP/IP، والتمكن من Windows ومن سطر أوامر Linux، ومبادئ في الأمن. وتوصي EC-Council بخبرة سنتين، علما أن التسجيل عبر تكوين رسمي يُعفي من مسطرة الأهلية. ودون هذا الأساس، قد تتعلم تشغيل الأدوات دون أن تفهم حقا ما تكشفه.",
        ],
      },
      {
        heading: "شكل الامتحان والسعر في المغرب: مقارنة ملموسة",
        paragraphs: [
          "يُجرى الامتحانان باللغة الإنجليزية، ويمكن اجتيازهما عن بعد تحت المراقبة. إليك المعطيات الأساسية جنبا إلى جنب، مع الأسعار العمومية لتكويناتنا (قسيمة الامتحان مشمولة).",
          "ولاختلاف الشكل أثر عملي على طريقة التحضير. فالأسئلة التطبيقية performance-based في Security+ تطلب منك مثلا ضبط إعداد معين، أو ربط وسائل الحماية بسيناريوهات، أو تحليل وضعية، وهو ما يكافئ الفهم بدل الحفظ. أما CEH، بأسئلتها الـ 125 في 4 ساعات، فتختبر أساسا اتساع معارفك وقدرتك على الحفاظ على تركيزك خلال سلسلة طويلة من السيناريوهات التقنية.",
        ],
        list: [
          "رمز الامتحان: Security+ – SY0-701 (Pearson VUE)؛ CEH v13 – 312-50 (EC-Council).",
          "الشكل: Security+ – 90 سؤالا كحد أقصى، أسئلة متعددة الاختيارات وأسئلة تطبيقية performance-based؛ CEH v13 – 125 سؤالا متعدد الاختيارات.",
          "المدة: Security+ – 90 دقيقة؛ CEH v13 – 4 ساعات.",
          "عتبة النجاح: Security+ – 750 على سلم من 100 إلى 900؛ CEH v13 – من 60 % إلى 85 % حسب نسخة الامتحان.",
          "الصلاحية: Security+ – 3 سنوات، قابلة للتجديد عبر برنامج CompTIA CE؛ CEH v13 – 3 سنوات، قابلة للتجديد عبر 120 رصيد ECE والرسوم السنوية.",
          "التكوين: Security+ – 5 أيام (35 ساعة)؛ CEH v13 – 5 أيام (40 ساعة).",
          "السعر العمومي في المغرب: Security+ – ابتداء من 9900 درهم؛ CEH v13 – ابتداء من 24900 درهم.",
        ],
      },
      {
        heading: "ما الآفاق المهنية بعد Security+ أو CEH v13؟",
        paragraphs: [
          "تفتح Security+ أساسا مناصب الدخول في الأمن الدفاعي: محلل SOC من المستوى الأول، تقني أو متصرف في الأمن، دعم أمني لدى مزود خدمات مُدارة، مساعد لمسؤول أمن نظم المعلومات. وهي معترف بها على نطاق واسع دوليا وتندرج ضمن إطار DoD 8140 الأمريكي، وفي المغرب تعرفها الأبناك ومتعهدو الاتصالات ومراكز الأوفشورينغ والمندمجون في الدار البيضاء والرباط كضمانة لأسس متينة. وتقود بشكل طبيعي نحو CompTIA CySA+ (ابتداء من 12900 درهم)، شهادة محللي SOC من المستوى الثاني.",
          "أما CEH v13 فتستهدف أكثر المناصب المرتبطة بتقييم الأمن: مختبر اختراق مبتدئ، مدقق تقني، مستشار في الأمن الهجومي، أو محلل يرغب في فهم أفضل للهجمات التي يرصدها. وهي حاضرة بقوة في عروض الشغل وفي معايير الفرز لدى الموارد البشرية، وتمثل خطوة شائعة نحو شهادات أكثر تطبيقا مثل OSCP+. وبالنسبة لأول منصب، يزداد وزنها عندما تستند إلى خبرة تقنية أولى.",
          "وفي الحالتين، لا تعوّض الشهادة الخبرة: فهي تسهّل الحصول على المقابلة الأولى وتنظم معارفك، لكن مشاريعك ومختبراتك ومهامك الأولى هي ما سيُقنع المشغلين على المدى البعيد.",
        ],
      },
      {
        heading: "بأي ترتيب تجتازهما عندما تكون مبتدئا؟",
        paragraphs: [
          "بالنسبة لأغلب المبتدئين، يبقى الترتيب الأكثر منطقية هو Security+ أولا ثم CEH v13. فـ Security+ تمنح المصطلحات والمفاهيم والرؤية الشاملة التي تجعل استيعاب CEH أسهل بكثير، كما أنها الاستثمار الأيسر للتأكد من اهتمامك بالمجال. ثم تأتي CEH لتضيف منظور المهاجم فوق أساس متين.",
          "وتوجد استثناءات. فمتصرف الأنظمة أو الشبكات ذو الخبرة الممتدة لعدة سنوات والميل الواضح نحو الجانب الهجومي يمكنه البدء مباشرة بـ CEH v13. وعلى العكس، يمكن لمن يستهدف منصبا في SOC أو في الحكامة أن يجتاز Security+ ثم CySA+، ولا يتطرق إلى CEH إلا لاحقا لفهم تقنيات الخصوم.",
        ],
        list: [
          "أنت مبتدئ أو قادم من الدعم المعلوماتي: Security+ ثم CEH v13 أو CySA+ حسب توجهك.",
          "أنت متصرف متمرس ومهتم باختبار الاختراق: CEH v13 مباشرة ثم شهادة تطبيقية.",
          "تستهدف SOC والرصد: Security+ ثم CySA+، مع CEH كتكملة.",
        ],
      },
      {
        heading: "التكوين في Security+ وCEH v13 بالمغرب",
        paragraphs: [
          "تقترح GATech التكوينين في الدار البيضاء أو الرباط أو عن بعد في قسم افتراضي مباشر، مع قسيمة الامتحان مشمولة: Security+ ابتداء من 9900 درهم وCEH v13 ابتداء من 24900 درهم. وإن لم تكن متأكدا من أين تبدأ، يمكن لمستشارينا تقييم مستواك واقتراح مسار منسجم مع مشروعك المهني.",
        ],
      },
    ],
    en: [
      {
        heading: "Security+ and CEH v13: two very different entry points",
        paragraphs: [
          "When you want to get into cybersecurity, two names come up almost every time: CompTIA Security+ and EC-Council's CEH (Certified Ethical Hacker). Both are known to recruiters, both are earned after a 5-day course, and both appear in many job ads. Yet they do not answer the same question.",
          "Security+ answers \"how do you protect an information system?\". CEH v13 answers \"how does an attacker go about compromising it?\". One builds the defensive foundation every security job relies on; the other teaches offensive methodology. For a beginner, understanding this difference avoids spending time and money on a certification that comes too early.",
        ],
      },
      {
        heading: "What does each certification cover: defensive fundamentals or offensive methodology?",
        paragraphs: [
          "Security+ (SY0-701) is a vendor-neutral certification covering the full set of fundamentals: common threats, vulnerabilities and attacks, secure architecture, identity and access management, cryptography, cloud security and Zero Trust, security operations, incident response, governance and risk management. It is a bird's-eye view of the profession, from the firewall to the security policy.",
          "CEH v13 focuses on attack techniques, phase by phase: reconnaissance, scanning and enumeration, vulnerability analysis, system hacking, web, wireless, mobile, cloud and IoT attacks, social engineering, evading defences and, new in the \"CEH AI\" version, the use of artificial intelligence by attackers and defenders alike. It is very hands-on with tools (Nmap, Metasploit, Burp Suite and others), but it assumes you already have networking and systems basics.",
        ],
        list: [
          "Security+: a broad, defensive view, ideal for understanding how everything fits together.",
          "CEH v13: an offensive, tool-driven view, ideal for understanding how attacks actually work.",
          "Common ground: both improve your ability to work with SOC, audit and infrastructure teams.",
        ],
      },
      {
        heading: "Prerequisites: what level do you need for each?",
        paragraphs: [
          "Security+ is rated beginner level. There are no mandatory prerequisites; CompTIA recommends Network+ level knowledge and ideally around two years of IT administration experience with a security component. In practice, a help desk technician, a junior network administrator or an engineering school or OFPPT graduate with good TCP/IP basics can prepare for it.",
          "CEH v13 is intermediate level. It assumes solid TCP/IP networking, hands-on Windows and Linux command-line skills and some security knowledge; EC-Council recommends two years of experience, and enrolling through official training waives the eligibility application. Without that foundation, you risk learning to run tools without really understanding what they reveal.",
        ],
      },
      {
        heading: "Exam format and price in Morocco: the concrete comparison",
        paragraphs: [
          "Both exams are taken in English and can be sat online with remote proctoring. Here are the facts side by side, with the public prices of our training (exam voucher included).",
          "The difference in format has a practical impact on how you prepare. Security+ performance-based questions ask you, for example, to configure a setting, match controls to scenarios or analyse a situation, which rewards understanding over memorisation. CEH, with its 125 questions in 4 hours, mainly tests the breadth of your knowledge and your ability to stay focused through a long series of technical scenarios.",
        ],
        list: [
          "Exam code: Security+ – SY0-701 (Pearson VUE); CEH v13 – 312-50 (EC-Council).",
          "Format: Security+ – up to 90 questions, multiple choice and performance-based; CEH v13 – 125 multiple-choice questions.",
          "Duration: Security+ – 90 minutes; CEH v13 – 4 hours.",
          "Passing score: Security+ – 750 on a 100–900 scale; CEH v13 – 60% to 85% depending on the exam form.",
          "Validity: Security+ – 3 years, renewable through CompTIA CE; CEH v13 – 3 years, renewable with 120 ECE credits and the annual fee.",
          "Training: Security+ – 5 days (35 hours); CEH v13 – 5 days (40 hours).",
          "Public price in Morocco: Security+ – from 9,900 MAD; CEH v13 – from 24,900 MAD.",
        ],
      },
      {
        heading: "What jobs can Security+ or CEH v13 lead to?",
        paragraphs: [
          "Security+ mainly opens entry-level defensive roles: tier 1 SOC analyst, security technician or administrator, security support at a managed services provider, assistant to a CISO. It is widely recognised internationally and is part of the US DoD 8140 framework; in Morocco, banks, telecom operators, offshoring centres and integrators in Casablanca and Rabat know it as proof of solid fundamentals. It leads naturally to CompTIA CySA+ (from 12,900 MAD), the certification for tier 2 SOC analysts.",
          "CEH v13 targets roles focused on security assessment: junior pentester, technical auditor, offensive security consultant, or an analyst who wants to better understand the attacks they detect. It is very present in job ads and HR filters and is a common step towards more practical certifications such as OSCP+. For a very first job, it carries more weight when backed by some prior technical experience.",
          "Either way, a certification does not replace experience: it helps you land the first interview and structures your knowledge, but your projects, labs and first assignments are what will convince employers over time.",
        ],
      },
      {
        heading: "In what order should beginners take them?",
        paragraphs: [
          "For most beginners, the most logical order is Security+ first, then CEH v13. Security+ provides the vocabulary, concepts and big picture that make CEH much easier to absorb; it is also the more affordable investment to confirm your interest in the field. CEH then adds the attacker's perspective on top of a solid foundation.",
          "There are exceptions. A system or network administrator with several years of experience and a clear interest in offensive security can start directly with CEH v13. Conversely, someone aiming for a SOC or governance role can take Security+ then CySA+ and come to CEH later, to understand adversary techniques.",
        ],
        list: [
          "You are starting out or coming from IT support: Security+, then CEH v13 or CySA+ depending on your direction.",
          "You are an experienced administrator drawn to pentesting: CEH v13 directly, then a hands-on certification.",
          "You are aiming for the SOC and detection: Security+, then CySA+, with CEH as a complement.",
        ],
      },
      {
        heading: "Training for Security+ and CEH v13 in Morocco",
        paragraphs: [
          "GATech offers both courses in Casablanca, Rabat or live online, with the exam voucher included: Security+ from 9,900 MAD and CEH v13 from 24,900 MAD. If you are not sure where to start, our advisers can assess your level and suggest a path that fits your career plans.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      {
        q: "Peut-on passer le CEH v13 sans avoir Security+ ?",
        a: "Oui, Security+ n'est pas un prérequis du CEH v13. Il faut toutefois de bonnes bases en réseaux TCP/IP, Windows et Linux. Pour un débutant sans expérience, commencer par Security+ rend la préparation du CEH nettement plus confortable.",
      },
      {
        q: "Security+ est-elle suffisante pour décrocher un premier emploi en cybersécurité ?",
        a: "Elle aide beaucoup à passer le premier filtre, notamment pour des postes d'analyste SOC niveau 1 ou de technicien sécurité, mais aucune certification ne garantit un emploi. L'associer à des labs personnels, des projets ou une première expérience IT renforce nettement une candidature.",
      },
      {
        q: "Quelle est la différence de prix entre Security+ et le CEH v13 au Maroc ?",
        a: "Chez GATech, la formation Security+ démarre à 9 900 MAD et la formation CEH v13 à 24 900 MAD, voucher d'examen inclus dans les deux cas. L'écart reflète notamment le coût de l'examen et des labs officiels EC-Council.",
      },
      {
        q: "Les examens Security+ et CEH v13 sont-ils en français ?",
        a: "Non, les deux examens se passent en anglais. Nos formations sont animées en français (ou en anglais sur demande), avec la terminologie technique anglaise utilisée à l'examen, afin que vous ne soyez pas surpris le jour J.",
      },
      {
        q: "Après Security+, faut-il choisir le CEH v13 ou CySA+ ?",
        a: "Cela dépend de votre orientation. Si vous visez le test d'intrusion ou l'audit technique, le CEH v13 est la suite logique. Si vous visez la détection et la réponse aux incidents en SOC, CySA+ est plus adaptée. Beaucoup finissent par combiner les deux perspectives.",
      },
    ],
    ar: [
      {
        q: "هل يمكن اجتياز CEH v13 دون الحصول على Security+؟",
        a: "نعم، Security+ ليست شرطا مسبقا لـ CEH v13. لكن يلزم أساس جيد في شبكات TCP/IP وWindows وLinux. وبالنسبة للمبتدئ دون خبرة، فإن البدء بـ Security+ يجعل التحضير لـ CEH أكثر يسرا بشكل واضح.",
      },
      {
        q: "هل تكفي Security+ للحصول على أول وظيفة في الأمن السيبراني؟",
        a: "تساعد كثيرا على تجاوز الفرز الأولي، خاصة لمناصب محلل SOC من المستوى الأول أو تقني الأمن، لكن لا توجد شهادة تضمن الوظيفة. ويعزز الجمع بينها وبين مختبرات شخصية أو مشاريع أو خبرة معلوماتية أولى ملف الترشيح بشكل كبير.",
      },
      {
        q: "ما الفرق في السعر بين Security+ وCEH v13 في المغرب؟",
        a: "لدى GATech يبدأ تكوين Security+ من 9900 درهم وتكوين CEH v13 من 24900 درهم، مع قسيمة الامتحان مشمولة في الحالتين. ويعكس هذا الفرق بالخصوص تكلفة الامتحان والمختبرات الرسمية لـ EC-Council.",
      },
      {
        q: "هل يُجرى امتحانا Security+ وCEH v13 باللغة الفرنسية؟",
        a: "لا، يُجرى الامتحانان باللغة الإنجليزية. وتُقدَّم تكويناتنا بالفرنسية (أو بالإنجليزية عند الطلب) مع اعتماد المصطلحات التقنية الإنجليزية المستعملة في الامتحان، حتى لا تتفاجأ يوم الاجتياز.",
      },
      {
        q: "بعد Security+، هل أختار CEH v13 أم CySA+؟",
        a: "يتوقف ذلك على توجهك. إذا كنت تستهدف اختبار الاختراق أو التدقيق التقني، فإن CEH v13 هي الخطوة المنطقية التالية. وإذا كنت تستهدف الرصد والاستجابة للحوادث داخل SOC، فإن CySA+ أنسب. وكثيرون ينتهي بهم الأمر إلى الجمع بين المنظورين.",
      },
    ],
    en: [
      {
        q: "Can I take CEH v13 without Security+?",
        a: "Yes, Security+ is not a prerequisite for CEH v13. You do need good TCP/IP networking, Windows and Linux basics, though. For a beginner with no experience, starting with Security+ makes CEH preparation much more comfortable.",
      },
      {
        q: "Is Security+ enough to land a first cybersecurity job?",
        a: "It helps a lot in getting past the first screening, especially for tier 1 SOC analyst or security technician roles, but no certification guarantees a job. Pairing it with personal labs, projects or some IT experience makes an application much stronger.",
      },
      {
        q: "What is the price difference between Security+ and CEH v13 in Morocco?",
        a: "At GATech, Security+ training starts at 9,900 MAD and CEH v13 training at 24,900 MAD, with the exam voucher included in both cases. The gap mainly reflects the cost of the exam and EC-Council's official labs.",
      },
      {
        q: "Are the Security+ and CEH v13 exams available in French?",
        a: "No, both exams are taken in English. Our courses are taught in French (or English on request), using the English technical terminology you will see in the exam, so there are no surprises on the day.",
      },
      {
        q: "After Security+, should I choose CEH v13 or CySA+?",
        a: "It depends on your direction. If you are aiming for penetration testing or technical auditing, CEH v13 is the logical next step. If you are aiming for detection and incident response in a SOC, CySA+ is a better fit. Many people end up combining both perspectives.",
      },
    ],
  },
};

export default guide;
