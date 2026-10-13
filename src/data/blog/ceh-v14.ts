import type { Guide } from "../types";

const guide: Guide = {
  slug: "ceh-v14",
  category: "certifications",
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  readingMinutes: 7,
  relatedCerts: ["ceh-v13", "oscp", "comptia-pentest-plus"],
  title: {
    fr: "CEH v14 : ce que l'on sait, prévisions et faut-il attendre ?",
    ar: "CEH v14: ما نعرفه، التوقعات، وهل يجب الانتظار؟",
    en: "CEH v14: What We Know, Predictions and Should You Wait?",
  },
  seoTitle: {
    fr: "CEH v14 : date de sortie, nouveautés et prévisions",
    ar: "CEH v14: موعد الإصدار والجديد والتوقعات",
    en: "CEH v14: Release Date, Changes and Predictions",
  },
  seoDescription: {
    fr: "CEH v14 est-il sorti ? Ce que l'on sait, ce qu'il pourrait changer face au CEH v13 et pourquoi ne pas attendre. Lisez notre analyse.",
    ar: "هل صدر CEH v14؟ ما نعرفه رسميًا، والتوقعات مقارنة بـ CEH v13، ولماذا لا داعي للانتظار للحصول على شهادتك في المغرب. اقرأ تحليلنا الآن.",
    en: "Is CEH v14 out? What we know, what may change versus CEH v13 and why waiting rarely pays off. Read our analysis now.",
  },
  excerpt: {
    fr: "À ce jour, EC-Council n'a ni annoncé ni publié de CEH v14 : la version en vigueur reste le CEH v13. Voici ce que l'historique des versions laisse prévoir, et pourquoi attendre n'est généralement pas une bonne idée.",
    ar: "حتى اليوم، لم تعلن EC-Council عن CEH v14 ولم تصدره: النسخة المعتمدة ما تزال CEH v13. إليك ما يوحي به تاريخ الإصدارات، ولماذا لا يُنصح عادةً بالانتظار.",
    en: "To date, EC-Council has neither announced nor released CEH v14: the current version is still CEH v13. Here is what the version history suggests, and why waiting is usually not a good idea.",
  },
  sections: {
    fr: [
      {
        heading: "Le CEH v14 est-il sorti ?",
        paragraphs: [
          "Non. Au 13 octobre 2026, EC-Council n'a ni annoncé ni publié de CEH v14. La version officielle en vigueur est le CEH v13, présenté sous le nom « CEH AI », lancé le 23 septembre 2024 et évalué par l'examen 312-50v13. Toutes les formations officielles, les labs et les vouchers d'examen vendus aujourd'hui portent sur cette version.",
          "Si vous tombez sur des pages qui décrivent en détail le « programme du CEH v14 » ou annoncent une date de sortie précise, méfiez-vous : rien d'officiel n'a été communiqué à ce jour. Tout ce qui suit sur le v14 relève donc de la prévision, fondée sur l'historique des versions et sur l'évolution du métier. Pour une information fiable, la seule source à surveiller est le site officiel d'EC-Council, eccouncil.org.",
        ],
      },
      {
        heading: "À quel rythme EC-Council publie-t-il une nouvelle version du CEH ?",
        paragraphs: [
          "Le CEH existe depuis le début des années 2000 et a été régulièrement mis à jour pour suivre l'évolution des attaques. Sur les dernières versions, le rythme est assez lisible : une nouvelle version environ tous les deux ans.",
          "Ce calendrier n'a rien d'une règle écrite : EC-Council ne s'engage pas sur une date, et l'écart entre deux versions a déjà varié. Il permet seulement de dire qu'une nouvelle version finira par arriver, sans pouvoir annoncer quand.",
        ],
        list: [
          "CEH v10 : vers 2018",
          "CEH v11 : vers 2020",
          "CEH v12 : 2022",
          "CEH v13 (« CEH AI ») : 23 septembre 2024, examen 312-50v13",
          "CEH v14 : non annoncé à ce jour",
        ],
      },
      {
        heading: "Qu'a apporté le CEH v13, la version actuelle ?",
        paragraphs: [
          "Le CEH v13 conserve la structure qui fait la réputation du programme : 20 modules couvrant la reconnaissance, le scan, l'énumération, l'exploitation des systèmes, les malwares, l'ingénierie sociale, les attaques web, sans fil, mobiles, IoT, OT et cloud, ainsi que la cryptographie.",
          "Sa principale nouveauté est l'intégration de l'intelligence artificielle dans les cinq phases du hacking éthique : reconnaissance, scan, obtention d'accès, maintien d'accès et effacement des traces. Le candidat apprend à utiliser des outils assistés par l'IA pour accélérer la collecte d'informations, l'analyse de vulnérabilités ou l'écriture de scripts, tout en gardant un regard critique sur leurs résultats.",
          "L'examen de connaissances reste composé de 125 questions à choix multiples en 4 heures. Le CEH Practical, optionnel, ajoute 20 challenges sur un environnement réel en 6 heures, et la réussite des deux épreuves donne accès au titre CEH Master.",
        ],
      },
      {
        heading: "Que pourrait contenir le CEH v14 ? Nos prévisions",
        paragraphs: [
          "Insistons : il s'agit de prévisions, pas d'informations. Rien d'officiel n'a été publié sur le contenu d'un éventuel CEH v14. En observant l'évolution des versions précédentes et celle du marché, plusieurs tendances semblent toutefois probables.",
        ],
        list: [
          "Sécurité de l'IA et des LLM : après l'IA comme outil de l'attaquant (v13), le v14 pourrait probablement traiter davantage les attaques contre les systèmes d'IA eux-mêmes, comme l'injection de prompt, l'empoisonnement de données ou la fuite d'informations via un modèle.",
          "Cloud et conteneurs : les modules cloud seraient probablement approfondis, avec plus de place pour Kubernetes, les erreurs de configuration et les identités cloud.",
          "OT et IoT : avec la multiplication des objets connectés et des systèmes industriels exposés, ces sujets pourraient gagner en importance.",
          "Davantage de pratique : la tendance des dernières versions va vers plus de labs et de scénarios concrets, une évolution qui devrait logiquement se poursuivre.",
        ],
      },
      {
        heading: "CEH v13 vs CEH v14 : quelles différences attendre ?",
        paragraphs: [
          "Faute d'annonce officielle, la comparaison ne peut opposer qu'une version réelle à une version supposée. Voici, point par point, ce que l'on sait du v13 et ce que l'on peut raisonnablement anticiper pour le v14.",
        ],
        list: [
          "Statut : CEH v13 en vigueur depuis septembre 2024 ; CEH v14 non annoncé, rien d'officiel. Concrètement, la seule version que vous pouvez préparer et passer aujourd'hui est le v13.",
          "Intelligence artificielle : v13 centré sur l'IA comme outil du hacker éthique ; v14 probablement élargi à la sécurité des systèmes d'IA. Les entreprises déploient des assistants et des chatbots, et il faudra bien savoir les tester.",
          "Programme : v13 en 20 modules ; v14 probablement proche dans sa structure, avec des contenus actualisés. Historiquement, chaque version a fait évoluer les outils et les exemples plus que le squelette méthodologique.",
          "Examen : v13 avec 125 QCM en 4 heures (312-50v13) ; format du v14 inconnu à ce jour. Un nouveau code d'examen accompagnerait vraisemblablement la nouvelle version, comme pour les précédentes.",
          "Pratique : v13 avec labs officiels et CEH Practical optionnel ; v14 avec probablement encore plus de mises en situation. Les recruteurs valorisent de plus en plus la preuve de savoir-faire, pas seulement la théorie.",
        ],
      },
      {
        heading: "Faut-il attendre le CEH v14 pour se certifier ?",
        paragraphs: [
          "Dans la grande majorité des cas, non. D'abord parce que personne ne sait quand le v14 sortira : attendre une version non annoncée peut vous faire perdre des mois, voire davantage. Ensuite parce qu'une certification CEH ne « périme » pas à la sortie d'une nouvelle version. Elle reste valable 3 ans et se maintient grâce aux crédits de formation continue ECE (EC-Council Continuing Education), quel que soit le numéro de version obtenu.",
          "Côté employeurs, les offres d'emploi demandent en général « CEH », pas une version précise. Un CEH v13 obtenu aujourd'hui sera reconnu de la même manière qu'un CEH v14 obtenu plus tard. Enfin, les compétences se transfèrent : la méthodologie du pentest, les protocoles réseau, les techniques d'exploitation et l'usage raisonné de l'IA ne disparaîtront pas avec une mise à jour.",
          "La seule situation où attendre peut se défendre : vous comptez commencer votre préparation dans plusieurs mois et une nouvelle version a été officiellement annoncée entre-temps. Dans ce cas, mieux vaut vérifier sur eccouncil.org quelle version sera disponible à la date prévue de votre examen.",
        ],
      },
      {
        heading: "Comment se préparer dès maintenant pour rester à jour ?",
        paragraphs: [
          "La meilleure façon de ne pas craindre une nouvelle version est de travailler dès aujourd'hui les compétences vers lesquelles le CEH évolue. Elles vous serviront quelle que soit la date de sortie du v14, et elles ont de la valeur sur le terrain indépendamment de toute certification.",
          "Quelques heures par semaine suffisent pour progresser régulièrement. L'essentiel est de pratiquer sur des environnements légaux : vos propres labs, les labs officiels de votre formation ou des plateformes de challenges prévues à cet effet, jamais sur des systèmes qui ne vous appartiennent pas.",
        ],
        list: [
          "Bases de la sécurité de l'IA et des LLM : comprendre l'injection de prompt, les fuites de données via un modèle et les risques liés aux plugins et agents ; le Top 10 OWASP pour les applications LLM est un bon point de départ.",
          "Cloud et conteneurs : savoir créer un petit environnement sur un fournisseur cloud, repérer un stockage mal configuré ou des droits IAM trop larges, lancer et inspecter des conteneurs Docker, découvrir les bases de Kubernetes.",
          "Scripting : écrire de petits scripts en Python, Bash ou PowerShell pour automatiser une reconnaissance ou trier des résultats, et pouvoir relire un script généré par une IA avant de l'exécuter.",
          "Labs et CTF : enchaîner des machines vulnérables et des challenges de type Capture The Flag pour entretenir les réflexes d'énumération et d'exploitation, en documentant chaque exercice comme un mini-rapport.",
        ],
      },
      {
        heading: "Comment GATech aligne-t-elle sa formation sur la version officielle ?",
        paragraphs: [
          "Chez GATech, la formation CEH suit toujours la version officielle en vigueur, aujourd'hui le CEH v13. Elle dure 5 jours (40 heures), alterne cours et pratique sur les labs officiels, et inclut le voucher de l'examen 312-50. Le tarif public est de 21 900 MAD.",
          "Lorsqu'EC-Council publiera une nouvelle version, nos sessions basculeront sur le nouveau programme dès que les supports officiels seront disponibles. Vous pouvez consulter la page de la formation CEH v13 ou nos offres en cours, et nous contacter pour connaître les prochaines dates à Casablanca, Rabat ou en classe virtuelle.",
        ],
      },
    ],
    ar: [
      {
        heading: "هل صدر CEH v14؟",
        paragraphs: [
          "لا. حتى 13 أكتوبر 2026، لم تعلن EC-Council عن CEH v14 ولم تصدره. النسخة الرسمية المعتمدة حاليًا هي CEH v13، المعروفة باسم \"CEH AI\"، التي أُطلقت في 23 سبتمبر 2024 ويُقيَّم المترشحون فيها عبر امتحان 312-50v13. وكل الدورات الرسمية والمختبرات وقسائم الامتحان المتاحة اليوم تخص هذه النسخة.",
          "إذا صادفت صفحات تصف \"برنامج CEH v14\" بالتفصيل أو تعلن موعد إصدار محددًا، فتعامل معها بحذر: لم يُنشر أي شيء رسمي حتى الآن. لذلك فكل ما يلي بشأن v14 هو توقعات مبنية على تاريخ الإصدارات وتطور المهنة. وللحصول على معلومة موثوقة، المصدر الوحيد الذي ينبغي متابعته هو الموقع الرسمي eccouncil.org.",
        ],
      },
      {
        heading: "ما وتيرة إصدار EC-Council لنسخ CEH الجديدة؟",
        paragraphs: [
          "توجد شهادة CEH منذ بداية الألفية، وقد حُدّثت بانتظام لمواكبة تطور الهجمات. وفي النسخ الأخيرة تبدو الوتيرة واضحة نسبيًا: نسخة جديدة كل سنتين تقريبًا.",
          "هذه ليست قاعدة مكتوبة، فـ EC-Council لا تلتزم بمواعيد، وقد تفاوتت المدة بين النسخ من قبل. كل ما يمكن قوله هو أن نسخة جديدة ستصدر يومًا ما، دون معرفة متى.",
        ],
        list: [
          "CEH v10: حوالي 2018",
          "CEH v11: حوالي 2020",
          "CEH v12: 2022",
          "CEH v13 (\"CEH AI\"): 23 سبتمبر 2024، امتحان 312-50v13",
          "CEH v14: لم يُعلن عنه حتى الآن",
        ],
      },
      {
        heading: "ماذا قدّمت CEH v13، النسخة الحالية؟",
        paragraphs: [
          "تحافظ CEH v13 على البنية التي صنعت سمعة البرنامج: 20 وحدة تغطي الاستطلاع والمسح والتعداد واختراق الأنظمة والبرمجيات الخبيثة والهندسة الاجتماعية، وهجمات الويب والشبكات اللاسلكية والأجهزة المحمولة وIoT وOT والسحابة، إضافة إلى التشفير.",
          "أبرز جديدها هو دمج الذكاء الاصطناعي في المراحل الخمس للاختراق الأخلاقي: الاستطلاع، والمسح، والحصول على الوصول، والحفاظ عليه، ومحو الآثار. يتعلم المترشح استخدام أدوات مدعومة بالذكاء الاصطناعي لتسريع جمع المعلومات وتحليل الثغرات وكتابة السكربتات، مع الحفاظ على نظرة نقدية لنتائجها.",
          "يبقى امتحان المعارف مكوّنًا من 125 سؤالًا متعدد الاختيارات في 4 ساعات. أما CEH Practical الاختياري فيضيف 20 تحديًا في بيئة حقيقية خلال 6 ساعات، ويمنح النجاح في الامتحانين لقب CEH Master.",
        ],
      },
      {
        heading: "ماذا قد تتضمن CEH v14؟ توقعاتنا",
        paragraphs: [
          "نؤكد: هذه توقعات وليست معلومات. لم يُنشر أي شيء رسمي حول محتوى CEH v14 محتملة. لكن بالنظر إلى النسخ السابقة وإلى السوق، تبدو عدة اتجاهات مرجّحة.",
        ],
        list: [
          "أمن الذكاء الاصطناعي ونماذج LLM: بعد الذكاء الاصطناعي كأداة للمهاجم (v13)، من المرجح أن تتناول v14 الهجمات على أنظمة الذكاء الاصطناعي نفسها، مثل حقن الأوامر وتسميم البيانات وتسريب المعلومات عبر النموذج.",
          "السحابة والحاويات: من المرجح تعميق وحدات السحابة مع مساحة أكبر لـ Kubernetes وأخطاء الإعداد والهويات السحابية.",
          "OT وIoT: مع تزايد الأجهزة المتصلة والأنظمة الصناعية المكشوفة، قد تكتسب هذه المواضيع أهمية أكبر.",
          "تطبيق عملي أكثر: اتجهت النسخ الأخيرة نحو مختبرات وسيناريوهات واقعية أكثر، ومن المنطقي أن يستمر هذا الاتجاه.",
        ],
      },
      {
        heading: "CEH v13 مقابل CEH v14: ما الفروق المتوقعة؟",
        paragraphs: [
          "في غياب إعلان رسمي، لا يمكن للمقارنة إلا أن تضع نسخة حقيقية أمام نسخة مفترضة. إليك ما نعرفه عن v13 وما يمكن توقعه بشكل معقول من v14.",
        ],
        list: [
          "الوضع: CEH v13 معتمدة منذ سبتمبر 2024؛ CEH v14 لم يُعلن عنها، ولا شيء رسمي. عمليًا، v13 هي النسخة الوحيدة التي يمكنك التحضير لها واجتيازها اليوم.",
          "الذكاء الاصطناعي: v13 تركز عليه كأداة للمخترق الأخلاقي؛ v14 على الأرجح تتوسع إلى تأمين أنظمة الذكاء الاصطناعي. فالشركات تنشر مساعدات وروبوتات محادثة، ولا بد من اختبارها.",
          "البرنامج: v13 في 20 وحدة؛ v14 على الأرجح ببنية قريبة ومحتوى محدَّث. تاريخيًا، غيّرت كل نسخة الأدوات والأمثلة أكثر مما غيّرت المنهجية الأساسية.",
          "الامتحان: v13 بـ 125 سؤالًا في 4 ساعات (312-50v13)؛ شكل امتحان v14 غير معروف. ومن المرجح أن ترافق النسخة الجديدة رمز امتحان جديد كما في السابق.",
          "التطبيق: v13 بمختبرات رسمية وCEH Practical اختياري؛ v14 على الأرجح بسيناريوهات عملية أكثر. فالمشغّلون يقدّرون بشكل متزايد إثبات المهارة العملية لا النظرية فقط.",
        ],
      },
      {
        heading: "كيف تستعد من الآن لتبقى مواكبًا؟",
        paragraphs: [
          "أفضل طريقة لعدم القلق من نسخة جديدة هي أن تعمل من اليوم على المهارات التي يتجه إليها CEH. ستفيدك أيًّا كان موعد صدور v14، ولها قيمة في الميدان بمعزل عن أي شهادة.",
          "تكفي بضع ساعات أسبوعيًا للتقدم بانتظام. الأهم هو التدرب في بيئات قانونية: مختبراتك الخاصة، أو المختبرات الرسمية لتكوينك، أو منصات التحديات المخصصة لذلك، وليس أبدًا على أنظمة لا تملكها.",
        ],
        list: [
          "أساسيات أمن الذكاء الاصطناعي ونماذج LLM: فهم حقن الأوامر وتسريب البيانات عبر النموذج ومخاطر الإضافات والوكلاء؛ ويُعد OWASP Top 10 لتطبيقات LLM نقطة انطلاق جيدة.",
          "السحابة والحاويات: إنشاء بيئة صغيرة لدى مزوّد سحابي، ورصد تخزين سيئ الإعداد أو صلاحيات IAM واسعة، وتشغيل حاويات Docker وفحصها، والتعرف على أساسيات Kubernetes.",
          "كتابة السكربتات: كتابة سكربتات صغيرة بـ Python أو Bash أو PowerShell لأتمتة الاستطلاع أو فرز النتائج، والقدرة على مراجعة سكربت مولَّد بالذكاء الاصطناعي قبل تشغيله.",
          "المختبرات وCTF: التدرب على آلات مصابة بثغرات وتحديات Capture The Flag للحفاظ على ردود فعل التعداد والاستغلال، مع توثيق كل تمرين كتقرير مصغّر.",
        ],
      },
      {
        heading: "هل يجب انتظار CEH v14 قبل الحصول على الشهادة؟",
        paragraphs: [
          "في أغلب الحالات، لا. أولًا لأن لا أحد يعرف موعد صدور v14، وانتظار نسخة غير معلنة قد يكلفك أشهرًا أو أكثر. ثانيًا لأن شهادة CEH لا \"تنتهي\" بصدور نسخة جديدة؛ فهي صالحة 3 سنوات وتُجدَّد عبر أرصدة التكوين المستمر ECE، أيًّا كان رقم النسخة.",
          "أما المشغّلون فيطلبون عادةً \"CEH\" دون تحديد نسخة. وشهادة CEH v13 تحصل عليها اليوم ستُعترف بها بالطريقة نفسها التي ستُعترف بها CEH v14 لاحقًا. كما أن المهارات قابلة للنقل: منهجية اختبار الاختراق وبروتوكولات الشبكات وتقنيات الاستغلال والاستخدام الواعي للذكاء الاصطناعي لن تختفي مع أي تحديث.",
          "الحالة الوحيدة التي قد يكون فيها الانتظار مبررًا: إذا كنت تنوي بدء التحضير بعد عدة أشهر وأُعلن رسميًا عن نسخة جديدة في الأثناء. حينها تحقق من eccouncil.org لمعرفة النسخة المتاحة في موعد امتحانك.",
        ],
      },
      {
        heading: "كيف تحافظ GATech على مواءمة تكوينها مع النسخة الرسمية؟",
        paragraphs: [
          "في GATech، يتبع تكوين CEH دائمًا النسخة الرسمية المعتمدة، وهي اليوم CEH v13. يمتد على 5 أيام (40 ساعة)، ويجمع بين الدروس والتطبيق في المختبرات الرسمية، ويشمل قسيمة امتحان 312-50. السعر المعلن هو 21900 درهم.",
          "عندما تصدر EC-Council نسخة جديدة، ستنتقل دوراتنا إلى البرنامج الجديد بمجرد توفر المواد الرسمية. اطّلع على صفحة تكوين CEH v13 أو على عروضنا الحالية، وتواصل معنا لمعرفة المواعيد القادمة في الدار البيضاء أو الرباط أو عبر الفصل الافتراضي.",
        ],
      },
    ],
    en: [
      {
        heading: "Has CEH v14 been released?",
        paragraphs: [
          "No. As of 13 October 2026, EC-Council has neither announced nor released CEH v14. The current official version is CEH v13, branded \"CEH AI\", launched on 23 September 2024 and assessed by exam 312-50v13. All official courses, labs and exam vouchers sold today cover this version.",
          "If you come across pages describing the \"CEH v14 syllabus\" in detail or giving a precise release date, be careful: nothing official has been published so far. Everything below about v14 is therefore a prediction, based on the version history and on how the profession is evolving. For reliable news, the only source to watch is EC-Council's official website, eccouncil.org.",
        ],
      },
      {
        heading: "How often does EC-Council release a new CEH version?",
        paragraphs: [
          "CEH has existed since the early 2000s and has been updated regularly to keep pace with attacks. Over the latest versions the rhythm is fairly clear: a new version about every two years.",
          "This is not a written rule: EC-Council does not commit to dates, and the gap between versions has varied before. It only tells us that a new version will come eventually, not when.",
        ],
        list: [
          "CEH v10: around 2018",
          "CEH v11: around 2020",
          "CEH v12: 2022",
          "CEH v13 (\"CEH AI\"): 23 September 2024, exam 312-50v13",
          "CEH v14: not announced to date",
        ],
      },
      {
        heading: "What did CEH v13, the current version, bring?",
        paragraphs: [
          "CEH v13 keeps the structure that built the program's reputation: 20 modules covering reconnaissance, scanning, enumeration, system hacking, malware, social engineering, web, wireless, mobile, IoT, OT and cloud attacks, plus cryptography.",
          "Its main novelty is AI integrated across the five phases of ethical hacking: reconnaissance, scanning, gaining access, maintaining access and covering tracks. Candidates learn to use AI-assisted tools to speed up information gathering, vulnerability analysis or scripting, while keeping a critical eye on the results.",
          "The knowledge exam is still 125 multiple-choice questions in 4 hours. The optional CEH Practical adds 20 challenges in a live environment over 6 hours, and passing both earns the CEH Master title.",
        ],
      },
      {
        heading: "What might CEH v14 include? Our predictions",
        paragraphs: [
          "To be clear: these are predictions, not facts. Nothing official has been published about the content of a possible CEH v14. Looking at previous versions and at the market, however, several trends seem likely.",
        ],
        list: [
          "AI and LLM security: after AI as the attacker's tool (v13), v14 will probably cover attacks against AI systems themselves, such as prompt injection, data poisoning or data leakage through a model.",
          "Cloud and containers: cloud modules would probably go deeper, with more room for Kubernetes, misconfigurations and cloud identities.",
          "OT and IoT: with more connected devices and exposed industrial systems, these topics could gain weight.",
          "More hands-on work: recent versions have moved towards more labs and realistic scenarios, a trend that should logically continue.",
        ],
      },
      {
        heading: "CEH v13 vs CEH v14: what differences to expect?",
        paragraphs: [
          "Without an official announcement, the comparison can only set a real version against an assumed one. Here is what we know about v13 and what we can reasonably expect from v14.",
        ],
        list: [
          "Status: CEH v13 current since September 2024; CEH v14 not announced, nothing official. In practice, v13 is the only version you can prepare for and sit today.",
          "Artificial intelligence: v13 focuses on AI as the ethical hacker's tool; v14 probably extended to securing AI systems. Companies are deploying assistants and chatbots, and someone will need to test them.",
          "Syllabus: v13 has 20 modules; v14 probably similar in structure, with updated content. Historically, each version changed tools and examples more than the core methodology.",
          "Exam: v13 has 125 multiple-choice questions in 4 hours (312-50v13); the v14 format is unknown. A new version would likely come with a new exam code, as before.",
          "Practice: v13 has official labs and an optional CEH Practical; v14 probably even more scenario-based work. Recruiters increasingly value proof of hands-on skill, not just theory.",
        ],
      },
      {
        heading: "How can you prepare now to stay up to date?",
        paragraphs: [
          "The best way not to fear a new version is to build, starting today, the skills CEH is moving towards. They will serve you whenever v14 comes out, and they are valuable in the field regardless of any certification.",
          "A few hours a week is enough to progress steadily. The key is to practise in legal environments: your own labs, the official labs from your course or challenge platforms built for that purpose, never on systems you do not own.",
        ],
        list: [
          "AI and LLM security basics: understand prompt injection, data leakage through a model and the risks of plugins and agents; the OWASP Top 10 for LLM applications is a good starting point.",
          "Cloud and containers: build a small environment with a cloud provider, spot misconfigured storage or overly broad IAM permissions, run and inspect Docker containers, learn Kubernetes basics.",
          "Scripting: write small Python, Bash or PowerShell scripts to automate reconnaissance or sort results, and be able to review an AI-generated script before running it.",
          "Labs and CTFs: work through vulnerable machines and Capture The Flag challenges to keep your enumeration and exploitation reflexes sharp, documenting each exercise as a mini report.",
        ],
      },
      {
        heading: "Should you wait for CEH v14 before getting certified?",
        paragraphs: [
          "In most cases, no. First, nobody knows when v14 will come out: waiting for an unannounced version can cost you months or more. Second, a CEH certification does not \"expire\" when a new version is released. It is valid for 3 years and is maintained through ECE (EC-Council Continuing Education) credits, whatever version number you earned.",
          "Employers generally ask for \"CEH\", not a specific version. A CEH v13 earned today will be recognised the same way as a CEH v14 earned later. And the skills transfer: pentest methodology, network protocols, exploitation techniques and sensible use of AI will not disappear with an update.",
          "The only case where waiting makes sense: you plan to start preparing in several months and a new version has been officially announced in the meantime. Then check eccouncil.org to see which version will be available on your planned exam date.",
        ],
      },
      {
        heading: "How does GATech keep its training aligned with the official version?",
        paragraphs: [
          "At GATech, the CEH course always follows the current official version, today CEH v13. It lasts 5 days (40 hours), mixes lectures with practice in the official labs, and includes the 312-50 exam voucher. The public price is MAD 21,900.",
          "When EC-Council releases a new version, our sessions will switch to the new syllabus as soon as the official materials are available. See the CEH v13 course page or our current offers, and contact us for the next dates in Casablanca, Rabat or in a virtual classroom.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      { q: "Quelle est la date de sortie du CEH v14 ?", a: "Aucune. Au 13 octobre 2026, EC-Council n'a ni annoncé ni publié de CEH v14. Le rythme passé (une version environ tous les deux ans) ne permet pas de prédire une date précise ; surveillez eccouncil.org pour toute annonce officielle." },
      { q: "Quelle est la version actuelle du CEH ?", a: "Le CEH v13, dit « CEH AI », lancé le 23 septembre 2024. Son examen porte le code 312-50v13 et comporte 125 questions à choix multiples en 4 heures." },
      { q: "Mon CEH v13 deviendra-t-il obsolète à la sortie du v14 ?", a: "Non. La certification reste valable 3 ans et se renouvelle avec des crédits ECE, indépendamment de la version. Les employeurs demandent généralement « CEH » sans préciser de version." },
      { q: "Faut-il attendre le CEH v14 pour commencer sa préparation ?", a: "Généralement non : la date est inconnue et les compétences du v13 restent valables. Attendre n'a de sens que si une nouvelle version a été officiellement annoncée avant votre date d'examen prévue." },
      { q: "Que contiendra le CEH v14 ?", a: "Rien d'officiel n'a été publié. Nos prévisions, basées sur les tendances : plus de sécurité de l'IA et des LLM, du cloud et des conteneurs, de l'OT/IoT et davantage de pratique. Ce sont des hypothèses, pas des annonces." },
    ],
    ar: [
      { q: "ما موعد صدور CEH v14؟", a: "لا يوجد موعد. حتى 13 أكتوبر 2026، لم تعلن EC-Council عن CEH v14 ولم تصدره. والوتيرة السابقة (نسخة كل سنتين تقريبًا) لا تسمح بتوقع تاريخ دقيق؛ تابع eccouncil.org لأي إعلان رسمي." },
      { q: "ما النسخة الحالية من CEH؟", a: "النسخة الحالية هي CEH v13، المعروفة باسم \"CEH AI\"، التي أُطلقت في 23 سبتمبر 2024. رمز امتحانها 312-50v13 ويتكون من 125 سؤالًا متعدد الاختيارات في 4 ساعات." },
      { q: "هل ستصبح شهادة CEH v13 متجاوزة عند صدور v14؟", a: "لا. تبقى الشهادة صالحة 3 سنوات وتُجدَّد بأرصدة ECE بغض النظر عن النسخة. والمشغّلون يطلبون عادةً \"CEH\" دون تحديد نسخة." },
      { q: "هل يجب انتظار CEH v14 لبدء التحضير؟", a: "عمومًا لا: الموعد مجهول ومهارات v13 تبقى صالحة. الانتظار مبرر فقط إذا أُعلن رسميًا عن نسخة جديدة قبل موعد امتحانك المخطط له." },
      { q: "ماذا ستتضمن CEH v14؟", a: "لم يُنشر أي شيء رسمي. توقعاتنا المبنية على الاتجاهات: مزيد من أمن الذكاء الاصطناعي ونماذج LLM، والسحابة والحاويات، وOT/IoT، وتطبيق عملي أكثر. هذه فرضيات وليست إعلانات." },
    ],
    en: [
      { q: "What is the CEH v14 release date?", a: "There is none. As of 13 October 2026, EC-Council has neither announced nor released CEH v14. The past rhythm (a version about every two years) does not allow a precise date; watch eccouncil.org for official news." },
      { q: "What is the current CEH version?", a: "CEH v13, branded \"CEH AI\", launched on 23 September 2024. Its exam code is 312-50v13, with 125 multiple-choice questions in 4 hours." },
      { q: "Will my CEH v13 become obsolete when v14 is released?", a: "No. The certification stays valid for 3 years and is renewed with ECE credits regardless of version. Employers usually ask for \"CEH\" without specifying a version." },
      { q: "Should I wait for CEH v14 before starting to prepare?", a: "Generally not: the date is unknown and v13 skills remain relevant. Waiting only makes sense if a new version is officially announced before your planned exam date." },
      { q: "What will CEH v14 include?", a: "Nothing official has been published. Our trend-based predictions: more AI and LLM security, cloud and containers, OT/IoT and more hands-on work. These are assumptions, not announcements." },
    ],
  },
};

export default guide;
