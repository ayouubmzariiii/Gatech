import type { Guide } from "../types";

const guide: Guide = {
  slug: "reussir-examen-ceh-v13",
  category: "certifications",
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  readingMinutes: 7,
  relatedCerts: ["ceh-v13", "comptia-security-plus", "oscp"],
  title: {
    fr: "Réussir l'examen CEH v13 du premier coup : méthode et conseils",
    ar: "النجاح في امتحان CEH v13 من المحاولة الأولى: المنهجية والنصائح",
    en: "Pass the CEH v13 Exam on Your First Attempt: Method and Tips",
  },
  seoTitle: {
    fr: "Examen CEH v13 : la méthode pour réussir du premier coup",
    ar: "امتحان CEH v13: منهجية النجاح من المحاولة الأولى",
    en: "CEH v13 Exam: How to Pass on Your First Attempt",
  },
  seoDescription: {
    fr: "Examen CEH v13 (312-50) : format, 20 modules, plan de révision sur 4 à 6 semaines et conseils pour le jour J. Réussissez du premier coup.",
    ar: "امتحان CEH v13 (312-50): الشكل، الوحدات الـ20، خطة مراجعة من 4 إلى 6 أسابيع ونصائح ليوم الامتحان. اتبع منهجيتنا وانجح من المحاولة الأولى بكل ثقة.",
    en: "CEH v13 exam (312-50): format, the 20 modules, a 4–6 week study plan and exam-day tips. Follow our method and pass on your first attempt.",
  },
  excerpt: {
    fr: "125 questions, 4 heures et un seuil de réussite qui dépend de la forme de l'examen : le CEH v13 se réussit avec une méthode, pas avec du bachotage. Voici le format, un plan de révision réaliste et les erreurs à éviter.",
    ar: "125 سؤالا و4 ساعات وعتبة نجاح تختلف حسب نسخة الامتحان: يُجتاز CEH v13 بمنهجية واضحة لا بالحفظ. إليك شكل الامتحان وخطة مراجعة واقعية والأخطاء التي يجب تجنبها.",
    en: "125 questions, 4 hours and a passing score that depends on the exam form: CEH v13 is passed with a method, not by cramming. Here is the format, a realistic study plan and the mistakes to avoid.",
  },
  sections: {
    fr: [
      {
        heading: "Comment se déroule l'examen CEH v13 (312-50) ?",
        paragraphs: [
          "L'examen CEH v13 d'EC-Council, code 312-50, comporte 125 questions à choix multiples à traiter en 4 heures. Il n'y a pas de seuil unique : selon la forme de l'examen qui vous est attribuée, le score requis se situe entre 60 % et 85 %, car EC-Council pondère chaque série de questions en fonction de sa difficulté. Concrètement, il faut viser large et ne pas calculer au plus juste.",
          "L'épreuve se passe en anglais, soit en ligne sous surveillance à distance, soit dans un centre de test agréé. Les questions ne se limitent pas aux définitions : beaucoup présentent un scénario, une sortie d'outil ou une commande à interpréter. Bonne nouvelle pour les candidats au Maroc : suivre une formation officielle dispense de la procédure d'éligibilité exigée des candidats autodidactes.",
        ],
        list: [
          "Code d'examen : 312-50 (CEH v13, dit « CEH AI »)",
          "Format : 125 QCM, 4 heures",
          "Score requis : de 60 % à 85 % selon la forme de l'examen",
          "Modalités : surveillance à distance ou centre de test agréé",
          "Validité : 3 ans, renouvelable via 120 crédits ECE et la cotisation annuelle EC-Council",
        ],
      },
      {
        heading: "Quels sont les 20 modules du CEH v13 et comment les regrouper ?",
        paragraphs: [
          "Le programme officiel compte 20 modules. Les apprendre dans l'ordre comme une liste de chapitres est la meilleure façon de s'y perdre. Regroupez-les plutôt selon les phases d'une attaque : vous retiendrez mieux la logique, et c'est exactement ainsi que les questions de scénario sont construites.",
        ],
        list: [
          "Fondamentaux : introduction au hacking éthique (concepts, cadre légal, méthodologies, place de l'IA)",
          "Reconnaissance : footprinting et reconnaissance, scan de réseaux, énumération, analyse de vulnérabilités",
          "Compromission de systèmes : piratage de systèmes (system hacking), menaces liées aux malwares",
          "Attaques réseau et contournement : sniffing, ingénierie sociale, déni de service, détournement de session, contournement des IDS, pare-feux et honeypots",
          "Applications web : piratage de serveurs web, piratage d'applications web, injection SQL",
          "Surfaces modernes : réseaux sans fil, plateformes mobiles, IoT et OT, cloud computing",
          "Transversal : cryptographie",
        ],
      },
      {
        heading: "Quel plan de révision pour réussir le CEH en 4 à 6 semaines ?",
        paragraphs: [
          "Pour un profil qui a déjà des bases en réseau, Linux et Windows, quatre à six semaines de révision régulière après la formation suffisent généralement. Comptez une à deux heures par jour en semaine et une séance plus longue le week-end. Si vous partez de plus loin, étirez le plan plutôt que de le compresser.",
        ],
        list: [
          "Semaine 1 : fondamentaux et reconnaissance. Révisez le modèle TCP/IP, les ports courants et les options de Nmap ; refaites les labs de footprinting et de scan.",
          "Semaine 2 : énumération, vulnérabilités et system hacking. Travaillez les protocoles (SMB, SNMP, LDAP), la lecture de scores CVSS, l'escalade de privilèges et le craquage de mots de passe.",
          "Semaine 3 : malwares, sniffing, ingénierie sociale, DoS, détournement de session et évasion. Apprenez à reconnaître une attaque à partir d'une capture ou d'un symptôme.",
          "Semaine 4 : web, injection SQL, sans fil, mobile, IoT/OT, cloud et cryptographie. Insistez sur l'OWASP Top 10, les types de chiffrement et les algorithmes de hachage.",
          "Semaines 5 et 6 (si possible) : examens blancs chronométrés de 125 questions, analyse de chaque erreur, fiches sur les points faibles et révision ciblée des modules les moins maîtrisés.",
        ],
      },
      {
        heading: "Pourquoi pratiquer les labs même pour un examen en QCM ?",
        paragraphs: [
          "On entend souvent que le CEH « se réussit en apprenant par cœur ». C'est l'erreur la plus coûteuse. Une bonne partie des questions vous montre le résultat d'un outil et vous demande ce qu'il signifie ou quelle commande l'a produit. Si vous avez lancé ces outils vous-même, la réponse devient évidente ; sinon, vous hésitez entre deux propositions plausibles.",
          "Les labs officiels du CEH v13 reproduisent des environnements complets où l'on enchaîne les phases d'une attaque. Refaites les exercices clés au moins deux fois, en notant pour chaque outil son rôle, sa syntaxe de base et ce que montre sa sortie.",
        ],
        list: [
          "Nmap : types de scan, options de détection de services et de systèmes",
          "Wireshark et tcpdump : filtres, reconnaissance d'un scan ou d'un empoisonnement ARP",
          "Metasploit : modules, payloads, sessions Meterpreter",
          "Burp Suite et sqlmap : interception de requêtes, injections SQL",
          "Hydra, John the Ripper, Hashcat : attaques de mots de passe",
          "Outils assistés par IA vus en formation : ce qu'ils automatisent et leurs limites",
        ],
      },
      {
        heading: "Le jour de l'examen : en ligne ou en centre de test, comment s'organiser ?",
        paragraphs: [
          "Depuis Casablanca, Rabat ou n'importe quelle ville du Maroc, la surveillance à distance est souvent la solution la plus simple, à condition de préparer son environnement. En centre de test, la logistique est prise en charge, mais il faut réserver un créneau et prévoir le trajet. Dans les deux cas, 4 heures, c'est long : la gestion de l'énergie compte autant que les connaissances.",
        ],
        list: [
          "En ligne : testez la webcam, le micro et la connexion la veille ; une pièce calme, un bureau dégagé, aucun second écran",
          "Pièce d'identité officielle en cours de validité, au nom exact de l'inscription",
          "Gestion du temps : environ 1 minute 50 par question ; marquez les questions difficiles et revenez-y à la fin",
          "Lisez chaque mot de la question : « NOT », « BEST », « FIRST » changent tout",
          "Éliminez d'abord les réponses impossibles, puis choisissez la plus précise",
          "Ne laissez aucune question sans réponse",
        ],
      },
      {
        heading: "Quelles erreurs font échouer à l'examen CEH ?",
        paragraphs: [
          "Les échecs au CEH ont rarement une seule cause. Ils viennent le plus souvent d'une préparation déséquilibrée : trop de lecture, pas assez de pratique, et aucun entraînement en conditions réelles.",
        ],
        list: [
          "Se fier uniquement aux banques de questions : les formulations changent et la compréhension compte davantage",
          "Négliger les modules jugés « faciles » comme la cryptographie, le cloud ou l'IoT, qui pèsent pourtant dans le score",
          "Confondre des notions proches : types de scan, d'attaques DoS, de malwares ou de chiffrement",
          "Ne jamais faire d'examen blanc complet de 4 heures avant le jour J",
          "Passer l'examen trop tard après la formation : idéalement dans les quatre à six semaines qui suivent",
        ],
      },
      {
        heading: "Et après le CEH : CEH Practical, CEH Master et suite de carrière",
        paragraphs: [
          "Une fois le 312-50 obtenu, deux suites logiques s'offrent à vous. La première est le CEH Practical : 6 heures, 20 challenges sur un environnement réel, avec un seuil de 70 %. Il répond à la critique d'un CEH « trop théorique », et ceux qui réussissent les deux examens obtiennent le titre de CEH Master.",
          "La seconde consiste à monter en niveau. Si vous visez le métier de pentesteur, l'OSCP+ d'OffSec est l'étape exigeante suivante, avec un examen entièrement pratique. Si vous découvrez encore la sécurité, CompTIA Security+ reste un excellent socle à consolider en parallèle. Au Maroc, banques, opérateurs télécoms, cabinets d'audit et centres d'offshoring citent régulièrement le CEH dans leurs offres, notamment depuis que la loi 05-20 renforce les obligations d'audit de sécurité.",
        ],
      },
      {
        heading: "Préparer le CEH v13 avec GATech au Maroc",
        paragraphs: [
          "Chez GATech, la formation CEH v13 dure 5 jours (40 heures) à Casablanca, à Rabat ou en classe virtuelle en direct. Elle alterne cours et labs officiels, avec un formateur qui vous accompagne jusqu'à l'examen. Le tarif démarre à 21 900 MAD, voucher d'examen 312-50 inclus.",
          "Plusieurs offres allègent le budget : 10 % de remise en cas d'inscription anticipée (au moins 4 semaines avant la session), 15 % pour les groupes dès 3 participants d'une même entreprise, 15 % pour les étudiants et jeunes diplômés, et un paiement en 3 fois sans frais pour les particuliers. Les remises ne sont pas cumulables. Contactez-nous pour connaître les prochaines dates et recevoir votre devis.",
        ],
      },
    ],
    ar: [
      {
        heading: "كيف يجري امتحان CEH v13 (312-50)؟",
        paragraphs: [
          "يتكون امتحان CEH v13 من EC-Council، ورمزه 312-50، من 125 سؤالا متعدد الاختيارات تُجاب في 4 ساعات. لا توجد عتبة نجاح موحدة: فحسب نسخة الامتحان التي تُسند إليك، تتراوح النقطة المطلوبة بين 60 % و85 %، لأن EC-Council تزن كل مجموعة أسئلة حسب صعوبتها. عمليا، استهدف نتيجة مريحة ولا تعتمد على الحد الأدنى.",
          "يُجرى الامتحان باللغة الإنجليزية، إما عن بعد تحت المراقبة أو في مركز امتحانات معتمد. ولا تقتصر الأسئلة على التعاريف: فكثير منها يعرض سيناريو أو مخرجات أداة أو أمرا ينبغي تأويله. وخبر جيد للمترشحين في المغرب: متابعة تكوين رسمي تعفي من مسطرة الأهلية المفروضة على المترشحين الذين يتعلمون ذاتيا.",
        ],
        list: [
          "رمز الامتحان: 312-50 (CEH v13 المعروف بـ « CEH AI »)",
          "الشكل: 125 سؤالا متعدد الاختيارات في 4 ساعات",
          "نقطة النجاح: من 60 % إلى 85 % حسب نسخة الامتحان",
          "طريقة الاجتياز: مراقبة عن بعد أو مركز امتحانات معتمد",
          "الصلاحية: 3 سنوات، قابلة للتجديد عبر 120 رصيد ECE ورسوم العضوية السنوية لدى EC-Council",
        ],
      },
      {
        heading: "ما هي الوحدات الـ20 لـ CEH v13 وكيف تجمعها؟",
        paragraphs: [
          "يضم البرنامج الرسمي 20 وحدة. وحفظها بالترتيب كقائمة فصول هو أسرع طريق للتيه. الأفضل أن تجمعها حسب مراحل الهجوم: ستستوعب المنطق بشكل أفضل، وهكذا بالضبط تُبنى أسئلة السيناريوهات.",
        ],
        list: [
          "الأساسيات: مقدمة في الاختراق الأخلاقي (المفاهيم، الإطار القانوني، المنهجيات، دور الذكاء الاصطناعي)",
          "الاستطلاع: البصمة والاستطلاع، مسح الشبكات، التعداد، تحليل الثغرات",
          "اختراق الأنظمة: System Hacking، تهديدات البرمجيات الخبيثة",
          "هجمات الشبكة والتحايل: التنصت (Sniffing)، الهندسة الاجتماعية، حجب الخدمة، اختطاف الجلسات، التحايل على IDS والجدران النارية وhoneypots",
          "تطبيقات الويب: اختراق خوادم الويب، اختراق تطبيقات الويب، حقن SQL",
          "الأسطح الحديثة: الشبكات اللاسلكية، المنصات المحمولة، IoT وOT، الحوسبة السحابية",
          "مجال عرضاني: التشفير",
        ],
      },
      {
        heading: "ما خطة المراجعة للنجاح في CEH خلال 4 إلى 6 أسابيع؟",
        paragraphs: [
          "بالنسبة لمن يملك أساسا في الشبكات وLinux وWindows، تكفي عادة أربعة إلى ستة أسابيع من المراجعة المنتظمة بعد التكوين. خصص ساعة إلى ساعتين يوميا خلال الأسبوع وحصة أطول في نهايته. وإن كان مستواك أضعف، فمدّد الخطة بدل ضغطها.",
        ],
        list: [
          "الأسبوع 1: الأساسيات والاستطلاع. راجع نموذج TCP/IP والمنافذ الشائعة وخيارات Nmap، وأعد مختبرات البصمة والمسح.",
          "الأسبوع 2: التعداد والثغرات واختراق الأنظمة. اشتغل على البروتوكولات (SMB وSNMP وLDAP) وقراءة نقاط CVSS وتصعيد الصلاحيات وكسر كلمات المرور.",
          "الأسبوع 3: البرمجيات الخبيثة والتنصت والهندسة الاجتماعية وحجب الخدمة واختطاف الجلسات والتحايل. تعلّم التعرف على الهجوم من خلال التقاط حزم أو عرض من أعراضه.",
          "الأسبوع 4: الويب وحقن SQL واللاسلكي والمحمول وIoT/OT والسحابة والتشفير. ركّز على OWASP Top 10 وأنواع التشفير وخوارزميات التجزئة.",
          "الأسبوعان 5 و6 (إن أمكن): امتحانات تجريبية موقوتة من 125 سؤالا، وتحليل كل خطأ، وبطاقات لنقاط الضعف، ومراجعة موجهة للوحدات الأقل تمكنا.",
        ],
      },
      {
        heading: "لماذا تتدرب على المختبرات رغم أن الامتحان أسئلة اختيارية؟",
        paragraphs: [
          "كثيرا ما يقال إن CEH « يُجتاز بالحفظ ». وهذا أكثر الأخطاء كلفة. فجزء مهم من الأسئلة يعرض مخرجات أداة ويسألك عن معناها أو عن الأمر الذي أنتجها. إذا كنت قد شغّلت هذه الأدوات بنفسك، يصبح الجواب بديهيا؛ وإلا ستتردد بين خيارين معقولين.",
          "تعيد مختبرات CEH v13 الرسمية بناء بيئات كاملة تتسلسل فيها مراحل الهجوم. أعد التمارين الأساسية مرتين على الأقل، ودوّن لكل أداة دورها وصيغتها الأساسية وما تُظهره مخرجاتها.",
        ],
        list: [
          "Nmap: أنواع المسح وخيارات كشف الخدمات وأنظمة التشغيل",
          "Wireshark وtcpdump: المرشحات، والتعرف على عملية مسح أو تسميم ARP",
          "Metasploit: الوحدات والحمولات وجلسات Meterpreter",
          "Burp Suite وsqlmap: اعتراض الطلبات وحقن SQL",
          "Hydra وJohn the Ripper وHashcat: هجمات كلمات المرور",
          "الأدوات المدعومة بالذكاء الاصطناعي التي تُدرّس في التكوين: ما تؤتمته وحدودها",
        ],
      },
      {
        heading: "يوم الامتحان: عن بعد أم في مركز امتحانات، كيف تستعد؟",
        paragraphs: [
          "من الدار البيضاء أو الرباط أو أي مدينة مغربية أخرى، تبقى المراقبة عن بعد في الغالب الخيار الأبسط، بشرط تهيئة محيطك جيدا. أما في مركز الامتحانات فالجانب اللوجستي مؤمَّن، لكن يجب حجز موعد والتخطيط للتنقل. وفي الحالتين، 4 ساعات مدة طويلة: تدبير طاقتك لا يقل أهمية عن معارفك.",
        ],
        list: [
          "عن بعد: اختبر الكاميرا والميكروفون والاتصال في اليوم السابق؛ غرفة هادئة ومكتب فارغ ودون شاشة ثانية",
          "وثيقة هوية رسمية سارية تحمل الاسم نفسه المسجل به",
          "تدبير الوقت: حوالي دقيقة و50 ثانية لكل سؤال؛ علّم الأسئلة الصعبة وعد إليها في النهاية",
          "اقرأ كل كلمة في السؤال: « NOT » و« BEST » و« FIRST » تغيّر كل شيء",
          "استبعد أولا الأجوبة المستحيلة ثم اختر الأدق",
          "لا تترك أي سؤال دون جواب",
        ],
      },
      {
        heading: "ما الأخطاء التي تؤدي إلى الرسوب في امتحان CEH؟",
        paragraphs: [
          "نادرا ما يكون للرسوب في CEH سبب واحد. ففي الغالب يعود إلى تحضير غير متوازن: قراءة كثيرة وتطبيق قليل، ودون أي تدريب في ظروف حقيقية.",
        ],
        list: [
          "الاعتماد فقط على بنوك الأسئلة: الصياغات تتغير والفهم هو الأهم",
          "إهمال الوحدات التي تبدو « سهلة » مثل التشفير والسحابة وIoT، رغم أنها تُحتسب في النتيجة",
          "الخلط بين مفاهيم متقاربة: أنواع المسح أو هجمات حجب الخدمة أو البرمجيات الخبيثة أو التشفير",
          "عدم اجتياز أي امتحان تجريبي كامل لمدة 4 ساعات قبل يوم الامتحان",
          "اجتياز الامتحان بعد مدة طويلة من التكوين: الأفضل خلال الأسابيع الأربعة إلى الستة الموالية",
        ],
      },
      {
        heading: "وماذا بعد CEH: CEH Practical وCEH Master والمسار المهني",
        paragraphs: [
          "بعد الحصول على 312-50، أمامك خياران منطقيان. الأول هو CEH Practical: 6 ساعات و20 تحديا في بيئة حقيقية بعتبة نجاح 70 %. وهو يرد على الانتقاد القائل إن CEH « نظري أكثر من اللازم »، ومن ينجح في الامتحانين يحصل على لقب CEH Master.",
          "الخيار الثاني هو الارتقاء في المستوى. إذا كان هدفك مهنة مختبر الاختراق، فإن OSCP+ من OffSec هي الخطوة الموالية الأكثر تطلبا بامتحان تطبيقي بالكامل. وإن كنت ما تزال في بداية مسارك الأمني، فإن CompTIA Security+ تبقى أساسا ممتازا يمكن تعزيزه بالتوازي. وفي المغرب، تذكر الأبناك وشركات الاتصالات ومكاتب الافتحاص ومراكز الأوفشورينغ شهادة CEH بانتظام في عروض العمل، خاصة مع تعزيز القانون 05-20 لالتزامات افتحاص الأمن.",
        ],
      },
      {
        heading: "التحضير لـ CEH v13 مع GATech في المغرب",
        paragraphs: [
          "في GATech، يمتد تكوين CEH v13 على 5 أيام (40 ساعة) في الدار البيضاء أو الرباط أو في قسم افتراضي مباشر. ويجمع بين الدروس والمختبرات الرسمية، مع مكوّن يرافقك حتى يوم الامتحان. يبدأ السعر من 21900 درهم مع قسيمة امتحان 312-50.",
          "وتخفف عدة عروض من الميزانية: خصم 10 % عند التسجيل المبكر (4 أسابيع على الأقل قبل الدورة)، وخصم 15 % للمجموعات ابتداء من 3 مشاركين من نفس الشركة، وخصم 15 % للطلبة والخريجين الجدد، والأداء على 3 أقساط بدون فوائد للأفراد. الخصومات غير قابلة للجمع. تواصل معنا لمعرفة مواعيد الدورات القادمة والحصول على عرض السعر.",
        ],
      },
    ],
    en: [
      {
        heading: "How does the CEH v13 exam (312-50) work?",
        paragraphs: [
          "EC-Council's CEH v13 exam, code 312-50, consists of 125 multiple-choice questions to be answered in 4 hours. There is no single cut score: depending on the exam form you receive, the passing score ranges from 60% to 85%, because EC-Council weights each question set according to its difficulty. In practice, aim well above the minimum rather than counting on a narrow margin.",
          "The exam is taken in English, either online with remote proctoring or at an authorised test centre. Questions go beyond definitions: many present a scenario, a tool output or a command to interpret. Good news for candidates in Morocco: attending official training exempts you from the eligibility application required of self-study candidates.",
        ],
        list: [
          "Exam code: 312-50 (CEH v13, branded \"CEH AI\")",
          "Format: 125 multiple-choice questions, 4 hours",
          "Passing score: 60% to 85% depending on the exam form",
          "Delivery: remote proctoring or authorised test centre",
          "Validity: 3 years, renewable with 120 ECE credits and the EC-Council annual membership fee",
        ],
      },
      {
        heading: "What are the 20 CEH v13 modules and how should you group them?",
        paragraphs: [
          "The official syllabus has 20 modules. Learning them in order like a list of chapters is the surest way to get lost. Group them by attack phase instead: you will remember the logic better, and that is exactly how scenario questions are built.",
        ],
        list: [
          "Foundations: introduction to ethical hacking (concepts, legal framework, methodologies, the role of AI)",
          "Reconnaissance: footprinting and reconnaissance, network scanning, enumeration, vulnerability analysis",
          "System compromise: system hacking, malware threats",
          "Network attacks and evasion: sniffing, social engineering, denial of service, session hijacking, evading IDS, firewalls and honeypots",
          "Web applications: hacking web servers, hacking web applications, SQL injection",
          "Modern attack surfaces: wireless networks, mobile platforms, IoT and OT, cloud computing",
          "Cross-cutting: cryptography",
        ],
      },
      {
        heading: "What study plan will get you through CEH in 4 to 6 weeks?",
        paragraphs: [
          "If you already have a grounding in networking, Linux and Windows, four to six weeks of steady revision after the course is usually enough. Plan one to two hours a day on weekdays and a longer session at the weekend. If you are starting further back, stretch the plan rather than compress it.",
        ],
        list: [
          "Week 1: foundations and reconnaissance. Revise the TCP/IP model, common ports and Nmap options; redo the footprinting and scanning labs.",
          "Week 2: enumeration, vulnerabilities and system hacking. Work on protocols (SMB, SNMP, LDAP), reading CVSS scores, privilege escalation and password cracking.",
          "Week 3: malware, sniffing, social engineering, DoS, session hijacking and evasion. Learn to recognise an attack from a capture or a symptom.",
          "Week 4: web, SQL injection, wireless, mobile, IoT/OT, cloud and cryptography. Focus on the OWASP Top 10, encryption types and hashing algorithms.",
          "Weeks 5 and 6 (if possible): timed 125-question practice exams, review of every mistake, notes on weak areas and targeted revision of the modules you know least.",
        ],
      },
      {
        heading: "Why practise in the labs for a multiple-choice exam?",
        paragraphs: [
          "You often hear that CEH \"can be passed by memorising\". That is the most expensive mistake. Many questions show you a tool's output and ask what it means or which command produced it. If you have run those tools yourself, the answer is obvious; if not, you hesitate between two plausible options.",
          "The official CEH v13 labs recreate full environments where you chain the phases of an attack. Redo the key exercises at least twice, noting for each tool its purpose, its basic syntax and what its output shows.",
        ],
        list: [
          "Nmap: scan types, service and OS detection options",
          "Wireshark and tcpdump: filters, spotting a scan or ARP poisoning",
          "Metasploit: modules, payloads, Meterpreter sessions",
          "Burp Suite and sqlmap: intercepting requests, SQL injection",
          "Hydra, John the Ripper, Hashcat: password attacks",
          "AI-assisted tools covered in class: what they automate and where they fall short",
        ],
      },
      {
        heading: "Exam day: online or at a test centre, how should you prepare?",
        paragraphs: [
          "From Casablanca, Rabat or any other city in Morocco, remote proctoring is often the simplest option, provided you prepare your environment. At a test centre the logistics are handled for you, but you need to book a slot and plan the journey. Either way, 4 hours is long: managing your energy matters as much as what you know.",
        ],
        list: [
          "Online: test your webcam, microphone and connection the day before; a quiet room, a clear desk, no second screen",
          "A valid official ID matching the exact name on your registration",
          "Time management: about 1 minute 50 seconds per question; flag hard questions and come back at the end",
          "Read every word: \"NOT\", \"BEST\" and \"FIRST\" change everything",
          "Eliminate impossible answers first, then pick the most precise one",
          "Never leave a question unanswered",
        ],
      },
      {
        heading: "Which mistakes make candidates fail the CEH exam?",
        paragraphs: [
          "CEH failures rarely have a single cause. Most often they come from unbalanced preparation: too much reading, not enough practice and no rehearsal under real conditions.",
        ],
        list: [
          "Relying only on question banks: wording changes and understanding matters more",
          "Neglecting \"easy\" modules such as cryptography, cloud or IoT, which still count towards your score",
          "Mixing up similar concepts: scan types, DoS attacks, malware families or encryption types",
          "Never sitting a full 4-hour practice exam before the real one",
          "Booking the exam too long after the course: ideally within four to six weeks",
        ],
      },
      {
        heading: "After CEH: CEH Practical, CEH Master and your next career step",
        paragraphs: [
          "Once you hold the 312-50, there are two logical next steps. The first is the CEH Practical: 6 hours, 20 challenges in a live environment, with a 70% pass mark. It answers the criticism that CEH is \"too theoretical\", and candidates who pass both exams earn the CEH Master title.",
          "The second is to move up a level. If you are aiming for a pentester role, OffSec's OSCP+ is the demanding next step, with a fully hands-on exam. If you are still new to security, CompTIA Security+ remains an excellent foundation to strengthen in parallel. In Morocco, banks, telecom operators, audit firms and offshoring centres regularly mention CEH in their job ads, especially as law 05-20 strengthens security audit requirements.",
        ],
      },
      {
        heading: "Prepare for CEH v13 with GATech in Morocco",
        paragraphs: [
          "At GATech, the CEH v13 course runs for 5 days (40 hours) in Casablanca, in Rabat or as a live virtual classroom. It combines lectures with the official labs, and your instructor supports you all the way to the exam. Prices start at 21,900 MAD, with the 312-50 exam voucher included.",
          "Several offers ease the budget: 10% off for early registration (at least 4 weeks before the session), 15% off for groups of 3 or more from the same company, 15% off for students and recent graduates, and 3 interest-free instalments for individuals. Discounts cannot be combined. Contact us for upcoming dates and your quote.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      {
        q: "Quel est le score requis pour réussir l'examen CEH v13 ?",
        a: "Il n'existe pas de score unique. Selon la forme de l'examen 312-50 qui vous est attribuée, le seuil se situe entre 60 % et 85 %. Visez donc nettement au-dessus du minimum lors de vos examens blancs.",
      },
      {
        q: "Combien de temps faut-il pour préparer l'examen CEH ?",
        a: "Pour un profil ayant des bases en réseau, Linux et Windows, comptez la formation de 5 jours puis quatre à six semaines de révision régulière, avec des examens blancs chronométrés. Un débutant aura besoin de plus de temps.",
      },
      {
        q: "Peut-on passer l'examen CEH en ligne depuis le Maroc ?",
        a: "Oui. L'examen peut se passer en ligne sous surveillance à distance, depuis chez soi ou son bureau, ou dans un centre de test agréé. En ligne, il faut une webcam, un micro, une connexion stable et une pièce calme.",
      },
      {
        q: "L'examen CEH v13 est-il disponible en français ?",
        a: "L'examen 312-50 se passe en anglais. La formation peut être suivie en français, mais il est conseillé de réviser avec la terminologie anglaise des outils et des attaques pour ne pas être surpris le jour J.",
      },
      {
        q: "Quelle est la différence entre CEH, CEH Practical et CEH Master ?",
        a: "Le CEH (312-50) est l'examen QCM de 4 heures. Le CEH Practical est une épreuve pratique de 6 heures avec 20 challenges et un seuil de 70 %. Réussir les deux donne le titre de CEH Master.",
      },
    ],
    ar: [
      {
        q: "ما هي النقطة المطلوبة للنجاح في امتحان CEH v13؟",
        a: "لا توجد نقطة موحدة. فحسب نسخة امتحان 312-50 التي تُسند إليك، تتراوح العتبة بين 60 % و85 %. لذلك استهدف نتائج أعلى بوضوح من الحد الأدنى في امتحاناتك التجريبية.",
      },
      {
        q: "كم من الوقت يتطلب التحضير لامتحان CEH؟",
        a: "لمن يملك أساسا في الشبكات وLinux وWindows، احسب التكوين الممتد على 5 أيام ثم أربعة إلى ستة أسابيع من المراجعة المنتظمة مع امتحانات تجريبية موقوتة. أما المبتدئ فسيحتاج وقتا أطول.",
      },
      {
        q: "هل يمكن اجتياز امتحان CEH عن بعد من المغرب؟",
        a: "نعم. يمكن اجتياز الامتحان عن بعد تحت المراقبة من المنزل أو المكتب، أو في مركز امتحانات معتمد. وعن بعد يلزمك كاميرا وميكروفون واتصال مستقر وغرفة هادئة.",
      },
      {
        q: "هل امتحان CEH v13 متوفر باللغة الفرنسية أو العربية؟",
        a: "يُجتاز امتحان 312-50 باللغة الإنجليزية. ويمكن متابعة التكوين بالفرنسية، لكن يُنصح بالمراجعة بالمصطلحات الإنجليزية للأدوات والهجمات حتى لا تُفاجأ يوم الامتحان.",
      },
      {
        q: "ما الفرق بين CEH وCEH Practical وCEH Master؟",
        a: "CEH (312-50) هو امتحان الأسئلة المتعددة الاختيارات لمدة 4 ساعات. أما CEH Practical فامتحان تطبيقي لمدة 6 ساعات يضم 20 تحديا بعتبة 70 %. والنجاح في الاثنين يمنح لقب CEH Master.",
      },
    ],
    en: [
      {
        q: "What score do you need to pass the CEH v13 exam?",
        a: "There is no single score. Depending on the 312-50 exam form you receive, the cut score ranges from 60% to 85%. Aim clearly above the minimum in your practice exams.",
      },
      {
        q: "How long does it take to prepare for the CEH exam?",
        a: "If you have a grounding in networking, Linux and Windows, allow for the 5-day course followed by four to six weeks of steady revision with timed practice exams. Beginners will need more time.",
      },
      {
        q: "Can I take the CEH exam online from Morocco?",
        a: "Yes. You can sit the exam online with remote proctoring from home or the office, or at an authorised test centre. Online, you need a webcam, a microphone, a stable connection and a quiet room.",
      },
      {
        q: "Is the CEH v13 exam available in French?",
        a: "The 312-50 exam is taken in English. You can attend the course in French, but it is wise to revise with the English terminology for tools and attacks so you are not caught off guard on exam day.",
      },
      {
        q: "What is the difference between CEH, CEH Practical and CEH Master?",
        a: "CEH (312-50) is the 4-hour multiple-choice exam. CEH Practical is a 6-hour hands-on exam with 20 challenges and a 70% pass mark. Passing both earns you the CEH Master title.",
      },
    ],
  },
};

export default guide;
