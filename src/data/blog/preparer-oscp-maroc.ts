import type { Guide } from "../types";

const guide: Guide = {
  slug: "preparer-oscp-maroc",
  category: "certifications",
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  readingMinutes: 7,
  relatedCerts: ["oscp", "ceh-v13", "comptia-pentest-plus"],
  title: {
    fr: "Préparer l'OSCP+ depuis le Maroc : plan de préparation réaliste",
    ar: "التحضير لشهادة OSCP+ من المغرب: خطة تحضير واقعية",
    en: "Preparing for OSCP+ from Morocco: A Realistic Study Plan",
  },
  seoTitle: {
    fr: "OSCP Maroc : plan de préparation OSCP+ en 12 semaines",
    ar: "OSCP في المغرب: خطة تحضير OSCP+ في 12 أسبوعا",
    en: "OSCP in Morocco: A 12-Week OSCP+ Preparation Plan",
  },
  seoDescription: {
    fr: "Préparation OSCP+ au Maroc : prérequis, contenu PEN-200, plan sur 12 semaines, Active Directory, examen à distance et rapport. Lancez votre plan.",
    ar: "التحضير لـ OSCP+ في المغرب: المتطلبات ومحتوى PEN-200 وخطة من 12 أسبوعا وActive Directory والامتحان عن بعد والتقرير. ابدأ خطة تحضيرك الآن بثقة وتنظيم.",
    en: "OSCP+ preparation in Morocco: prerequisites, PEN-200 content, a 12-week plan, Active Directory, the remote exam and the report. Start your plan today.",
  },
  excerpt: {
    fr: "L'OSCP+ ne se prépare pas en un week-end, mais il se prépare très bien depuis le Maroc. Voici un plan réaliste de 12 semaines, des prérequis jusqu'au rapport final, avec les points logistiques à anticiper pour l'examen à distance.",
    ar: "لا يمكن التحضير لـ OSCP+ في عطلة نهاية أسبوع، لكن يمكن التحضير له جيدا من المغرب. إليك خطة واقعية من 12 أسبوعا، من المتطلبات الأساسية إلى التقرير النهائي، مع النقاط اللوجستية التي يجب الاستعداد لها في الامتحان عن بعد.",
    en: "You cannot prepare for OSCP+ in a weekend, but you can prepare for it very well from Morocco. Here is a realistic 12-week plan, from prerequisites to the final report, with the logistics to plan for the remote exam.",
  },
  sections: {
    fr: [
      {
        heading: "Combien de temps faut-il pour préparer l'OSCP+ depuis le Maroc ?",
        paragraphs: [
          "Réponse courte : comptez environ 12 semaines de travail régulier si vous avez déjà de solides bases en Linux, en réseau et en web, et plutôt 5 à 6 mois si vous partez de plus loin. Il n'existe pas de raccourci : l'examen OSCP+ d'OffSec est 100 % pratique. Vous disposez de 23 h 45 min pour compromettre un ensemble Active Directory et plusieurs machines autonomes, sous surveillance à distance, puis de 24 heures pour remettre un rapport de pentest. Il faut 70 points sur 100.",
          "La bonne nouvelle, c'est que tout se passe en ligne : le cours PEN-200, les labs et l'examen. Préparer l'OSCP+ depuis Casablanca, Rabat, Marrakech ou Agadir ne pose donc aucun problème de fond, à condition d'organiser son temps, sa connexion et son matériel. Ce guide propose un plan réaliste, pensé pour quelqu'un qui travaille à côté et peut dégager 12 à 15 heures par semaine.",
        ],
      },
      {
        heading: "Quels prérequis avant de commencer le PEN-200 ?",
        paragraphs: [
          "Le PEN-200 n'est pas un cours d'initiation. Beaucoup de candidats perdent des semaines dans les labs parce qu'il leur manque une base qu'ils auraient pu consolider avant. Vérifiez honnêtement que vous êtes à l'aise avec les points suivants :",
        ],
        list: [
          "Linux : navigation en ligne de commande, permissions, processus, services, tâches planifiées, lecture de fichiers de configuration.",
          "Windows : utilisateurs et groupes, services, registre, PowerShell de base, notions d'Active Directory (domaine, contrôleur, Kerberos).",
          "Réseau : modèle TCP/IP, ports courants, DNS, HTTP, SMB, FTP, SSH, et lecture d'une capture simple.",
          "Scripting : savoir lire, modifier et corriger un script Python ou Bash, et adapter un exploit public plutôt que le lancer à l'aveugle.",
          "Web : fonctionnement des requêtes HTTP, cookies, formulaires, et compréhension des failles classiques (injection SQL, inclusion de fichiers, upload, injection de commandes).",
        ],
      },
      {
        heading: "Que contient le cours PEN-200 et comment l'aborder ?",
        paragraphs: [
          "Le PEN-200 (Penetration Testing with Kali Linux) est le cours officiel associé à l'OSCP+. Il couvre toute la chaîne d'un test d'intrusion : collecte d'informations passive et active, scan de vulnérabilités, attaques d'applications web, recherche et adaptation d'exploits publics, attaques de mots de passe, élévation de privilèges Windows et Linux, redirection de ports et pivot, Metasploit, puis attaque et énumération d'Active Directory. Chaque module se termine par des exercices, et des labs de type « challenge » reproduisent des réseaux complets.",
          "L'erreur la plus fréquente consiste à lire le cours d'une traite puis à se lancer dans les labs. Il vaut mieux alterner : un module, ses exercices, puis une ou deux machines qui mobilisent ce que vous venez d'apprendre. Le cours sert ensuite de référence : vous y reviendrez souvent pendant les labs.",
        ],
      },
      {
        heading: "Quel plan de préparation OSCP+ sur 12 semaines ?",
        paragraphs: [
          "Ce plan suppose environ 12 à 15 heures par semaine, par exemple deux soirées et une demi-journée le week-end. Adaptez-le à votre niveau : si une phase vous semble facile, avancez ; si elle bloque, prolongez-la plutôt que de sauter une étape.",
        ],
        list: [
          "Semaines 1 et 2 : remise à niveau Linux, Windows et réseau ; installation de Kali, de votre outil de prise de notes et d'un modèle de rapport.",
          "Semaines 3 et 4 : modules PEN-200 sur la collecte d'informations, le scan et les attaques web, avec les exercices associés.",
          "Semaines 5 et 6 : exploits publics, attaques de mots de passe, élévation de privilèges Linux et Windows ; premières machines des labs.",
          "Semaines 7 et 8 : pivot, redirection de ports, Metasploit puis Active Directory ; rythme cible de trois à quatre machines par semaine.",
          "Semaines 9 et 10 : labs « challenge » complets en conditions réelles, en chronométrant chaque machine et en rédigeant les notes au propre.",
          "Semaine 11 : examen blanc de 24 heures sur un ensemble que vous n'avez jamais vu, suivi de la rédaction complète d'un rapport.",
          "Semaine 12 : révision des points faibles, relecture de vos fiches méthodologiques, repos et préparation logistique de l'examen.",
        ],
      },
      {
        heading: "Comment travailler les labs : énumération, notes et méthode ?",
        paragraphs: [
          "Dans les labs comme à l'examen, la plupart des blocages viennent d'une énumération incomplète, pas d'un manque de technique. Prenez l'habitude de suivre la même routine sur chaque cible, et de la noter dans une checklist que vous enrichirez au fil des semaines.",
          "La prise de notes est votre meilleure alliée. Utilisez un outil structuré (Obsidian, CherryTree, Joplin ou autre) avec un dossier par machine : résultats de scan, pistes testées, identifiants trouvés, commandes exactes, captures d'écran. À l'examen, ces notes deviennent directement le squelette de votre rapport.",
        ],
        list: [
          "Scan complet de tous les ports TCP, puis scan ciblé des services et vérification des ports UDP les plus courants.",
          "Énumération service par service : versions, partages SMB, répertoires web, utilisateurs, fichiers accessibles.",
          "Recherche d'exploits publics correspondant aux versions trouvées, lecture du code avant toute exécution.",
          "Après l'accès initial : énumération locale systématique pour l'élévation de privilèges.",
          "Capture de la preuve (fichier local.txt ou proof.txt, commande et adresse IP visibles sur la même capture).",
          "Si vous êtes bloqué depuis plus d'une heure : changez de cible ou revenez à l'énumération.",
        ],
      },
      {
        heading: "Comment s'entraîner sur Active Directory pour l'OSCP+ ?",
        paragraphs: [
          "L'ensemble Active Directory pèse lourd dans la note finale : il est difficile d'atteindre 70 points sans le compromettre. Il mérite donc une préparation dédiée. Maîtrisez l'énumération d'un domaine (utilisateurs, groupes, sessions, partages, droits), les attaques Kerberos comme le Kerberoasting et l'AS-REP Roasting, la réutilisation d'identifiants et de hachages, ainsi que les mouvements latéraux entre machines.",
          "Entraînez-vous sur les environnements AD des labs PEN-200, puis montez votre propre petit domaine avec deux ou trois machines virtuelles si votre ordinateur le permet. Reproduire une attaque dans un lab que vous avez construit vous oblige à comprendre pourquoi elle fonctionne, ce qui fait souvent la différence le jour J. Consultez aussi le guide officiel de l'examen OffSec : le format de l'ensemble AD et les règles évoluent, et seule la version à jour fait foi.",
        ],
      },
      {
        heading: "Passer l'examen OSCP+ depuis le Maroc : logistique, rapport et mental",
        paragraphs: [
          "L'examen se déroule en ligne, sous surveillance à distance par webcam et partage d'écran, avec vérification d'une pièce d'identité au démarrage. Au moment de réserver votre créneau, vérifiez soigneusement le fuseau horaire affiché : le Maroc vit habituellement à l'heure UTC+1, mais revient à UTC+0 pendant le mois de Ramadan. Choisissez une heure de démarrage qui vous permet de bien dormir la veille.",
          "Le rapport compte autant que l'exploitation : une machine compromise mais mal documentée peut ne rapporter aucun point. Rédigez des étapes reproductibles, avec les commandes, les captures et les preuves exigées. Si vous avez préparé un modèle et tenu vos notes pendant l'épreuve, la rédaction prend quelques heures, pas une journée entière.",
          "Côté mental, l'OSCP+ teste aussi votre endurance. Planifiez des pauses, mangez, dormez quelques heures si nécessaire. Ne pas réussir du premier coup est fréquent et n'a rien d'humiliant : analysez vos notes, identifiez ce qui a bloqué et repartez avec un plan.",
        ],
        list: [
          "Connexion internet stable, idéalement fibre ou ADSL filaire, avec une solution de secours 4G/5G testée à l'avance.",
          "Webcam fonctionnelle, pièce d'identité officielle valide, pièce calme et bien éclairée.",
          "Ordinateur avec assez de mémoire pour Kali, onduleur ou batterie chargée en cas de coupure électrique.",
          "Relecture des règles d'examen OffSec, notamment les restrictions sur Metasploit et les outils automatisés.",
          "Modèle de rapport prêt et testé, et journée de repos prévue le lendemain pour la rédaction.",
        ],
      },
      {
        heading: "Se préparer à l'OSCP+ avec un accompagnement GATech",
        paragraphs: [
          "Le PEN-200 est conçu pour l'auto-apprentissage, et beaucoup de candidats s'essoufflent seuls. GATech propose un accompagnement de 10 jours (80 heures de coaching guidé) à partir de 29 900 MAD, avec l'accès aux labs PEN-200 et une tentative d'examen OSCP+ inclus, en salle ou en classe virtuelle. Si vous avez besoin de consolider vos bases avant, le CEH v13 ou le CompTIA PenTest+ constituent des étapes intermédiaires cohérentes.",
          "Plusieurs offres permettent d'alléger le coût : 10 % de remise pour une inscription anticipée, 15 % pour les groupes d'au moins trois participants d'une même entreprise, 15 % pour les étudiants et jeunes diplômés, ou un paiement en trois fois sans frais pour les particuliers (remises non cumulables). Contactez nos conseillers pour évaluer votre niveau et caler votre plan de 12 semaines.",
        ],
      },
    ],
    ar: [
      {
        heading: "كم من الوقت يتطلب التحضير لشهادة OSCP+ من المغرب؟",
        paragraphs: [
          "الجواب المختصر: خصص حوالي 12 أسبوعا من العمل المنتظم إذا كانت لديك أسس متينة في Linux والشبكات والويب، وما بين 5 و6 أشهر إذا كنت تنطلق من مستوى أقل. لا توجد طرق مختصرة: امتحان OSCP+ من OffSec تطبيقي بالكامل. لديك 23 ساعة و45 دقيقة لاختراق بيئة Active Directory وعدة آلات مستقلة تحت المراقبة عن بعد، ثم 24 ساعة لتسليم تقرير اختبار الاختراق. ويتطلب النجاح 70 نقطة من أصل 100.",
          "الخبر الجيد أن كل شيء يتم عبر الإنترنت: تكوين PEN-200 والمختبرات والامتحان. لذلك فالتحضير من الدار البيضاء أو الرباط أو مراكش أو أكادير ممكن تماما، بشرط تنظيم وقتك واتصالك بالإنترنت وعتادك. يقترح هذا الدليل خطة واقعية لشخص يعمل بدوام كامل ويستطيع تخصيص 12 إلى 15 ساعة أسبوعيا.",
        ],
      },
      {
        heading: "ما المتطلبات الأساسية قبل البدء في PEN-200؟",
        paragraphs: [
          "PEN-200 ليس تكوينا للمبتدئين. يضيع كثير من المترشحين أسابيع في المختبرات بسبب نقص كان بإمكانهم تداركه مسبقا. تأكد بصدق من تمكنك من النقاط التالية:",
        ],
        list: [
          "Linux: التنقل في سطر الأوامر والصلاحيات والعمليات والخدمات والمهام المجدولة وقراءة ملفات الإعداد.",
          "Windows: المستخدمون والمجموعات والخدمات والسجل وأساسيات PowerShell ومفاهيم Active Directory (النطاق ووحدة التحكم وKerberos).",
          "الشبكات: نموذج TCP/IP والمنافذ الشائعة وDNS وHTTP وSMB وFTP وSSH وقراءة التقاط بسيط لحركة الشبكة.",
          "البرمجة النصية: قراءة سكربت Python أو Bash وتعديله وتصحيحه، وتكييف ثغرة منشورة بدل تشغيلها دون فهم.",
          "الويب: طريقة عمل طلبات HTTP والكوكيز والنماذج، والثغرات الكلاسيكية (حقن SQL وتضمين الملفات ورفع الملفات وحقن الأوامر).",
        ],
      },
      {
        heading: "ماذا يتضمن تكوين PEN-200 وكيف تتعامل معه؟",
        paragraphs: [
          "PEN-200 (Penetration Testing with Kali Linux) هو التكوين الرسمي المرتبط بـ OSCP+. يغطي سلسلة اختبار الاختراق كاملة: جمع المعلومات السلبي والنشط، وفحص الثغرات، ومهاجمة تطبيقات الويب، والبحث عن الثغرات المنشورة وتكييفها، وهجمات كلمات المرور، ورفع الصلاحيات في Windows وLinux، وإعادة توجيه المنافذ والتنقل داخل الشبكة، وMetasploit، ثم تعداد Active Directory ومهاجمته. ينتهي كل محور بتمارين، وتحاكي مختبرات التحدي شبكات كاملة.",
          "الخطأ الأكثر شيوعا هو قراءة التكوين كاملا ثم الانتقال إلى المختبرات. الأفضل هو التناوب: محور واحد وتمارينه، ثم آلة أو آلتان تستعملان ما تعلمته للتو. وبعد ذلك يصبح التكوين مرجعا تعود إليه باستمرار.",
        ],
      },
      {
        heading: "كيف تبدو خطة التحضير لـ OSCP+ في 12 أسبوعا؟",
        paragraphs: [
          "تفترض هذه الخطة حوالي 12 إلى 15 ساعة أسبوعيا، مثلا أمسيتين ونصف يوم في عطلة نهاية الأسبوع. كيّفها مع مستواك: إذا بدت لك مرحلة سهلة فتقدم، وإذا تعثرت فمددها بدل القفز على خطوة.",
        ],
        list: [
          "الأسبوعان 1 و2: مراجعة Linux وWindows والشبكات، وتثبيت Kali وأداة تدوين الملاحظات ونموذج التقرير.",
          "الأسبوعان 3 و4: محاور PEN-200 حول جمع المعلومات والفحص وهجمات الويب مع تمارينها.",
          "الأسبوعان 5 و6: الثغرات المنشورة وهجمات كلمات المرور ورفع الصلاحيات في Linux وWindows، وأولى آلات المختبرات.",
          "الأسبوعان 7 و8: التنقل داخل الشبكة وإعادة توجيه المنافذ وMetasploit ثم Active Directory، بمعدل ثلاث إلى أربع آلات أسبوعيا.",
          "الأسبوعان 9 و10: مختبرات تحدٍّ كاملة في ظروف حقيقية، مع توقيت كل آلة وتحرير ملاحظات منظمة.",
          "الأسبوع 11: امتحان تجريبي لمدة 24 ساعة على بيئة لم ترها من قبل، يليه تحرير تقرير كامل.",
          "الأسبوع 12: معالجة نقاط الضعف ومراجعة بطاقاتك المنهجية والراحة والتحضير اللوجستي للامتحان.",
        ],
      },
      {
        heading: "كيف تشتغل في المختبرات: التعداد والملاحظات والمنهجية؟",
        paragraphs: [
          "في المختبرات كما في الامتحان، تأتي أغلب حالات التعثر من تعداد غير مكتمل وليس من نقص في التقنيات. اعتد على تطبيق الروتين نفسه على كل هدف، ودوّنه في قائمة تحقق تطورها أسبوعا بعد أسبوع.",
          "تدوين الملاحظات هو أفضل حليف لك. استعمل أداة منظمة (Obsidian أو CherryTree أو Joplin أو غيرها) مع مجلد لكل آلة: نتائج الفحص والمسارات المجربة وبيانات الدخول والأوامر الدقيقة ولقطات الشاشة. يوم الامتحان، تصبح هذه الملاحظات الهيكل المباشر لتقريرك.",
        ],
        list: [
          "فحص كامل لجميع منافذ TCP، ثم فحص موجه للخدمات والتحقق من منافذ UDP الأكثر شيوعا.",
          "تعداد كل خدمة على حدة: الإصدارات ومشاركات SMB ومجلدات الويب والمستخدمون والملفات المتاحة.",
          "البحث عن ثغرات منشورة تطابق الإصدارات المكتشفة، وقراءة الكود قبل أي تشغيل.",
          "بعد الوصول الأولي: تعداد محلي منهجي من أجل رفع الصلاحيات.",
          "التقاط الدليل (ملف local.txt أو proof.txt مع ظهور الأمر وعنوان IP في اللقطة نفسها).",
          "إذا تعثرت لأكثر من ساعة: غيّر الهدف أو عد إلى التعداد.",
        ],
      },
      {
        heading: "كيف تتدرب على Active Directory من أجل OSCP+؟",
        paragraphs: [
          "تحظى بيئة Active Directory بوزن كبير في النقطة النهائية، إذ يصعب بلوغ 70 نقطة دون اختراقها. لذلك تستحق تحضيرا خاصا. أتقن تعداد النطاق (المستخدمون والمجموعات والجلسات والمشاركات والصلاحيات)، وهجمات Kerberos مثل Kerberoasting وAS-REP Roasting، وإعادة استعمال بيانات الدخول والـ hashes، والتنقل الجانبي بين الآلات.",
          "تدرب على بيئات AD في مختبرات PEN-200، ثم أنشئ نطاقك الصغير الخاص بآلتين أو ثلاث آلات افتراضية إذا سمح حاسوبك بذلك. إعادة تنفيذ هجوم في مختبر بنيته بنفسك تجبرك على فهم سبب نجاحه، وهذا ما يصنع الفرق غالبا يوم الامتحان. اطلع أيضا على دليل الامتحان الرسمي من OffSec: فشكل بيئة AD والقواعد يتطوران، والنسخة المحدثة وحدها هي المرجع.",
        ],
      },
      {
        heading: "اجتياز امتحان OSCP+ من المغرب: اللوجستيك والتقرير والجانب الذهني",
        paragraphs: [
          "يُجرى الامتحان عبر الإنترنت تحت المراقبة عن بعد بواسطة الكاميرا ومشاركة الشاشة، مع التحقق من وثيقة الهوية عند الانطلاق. عند حجز موعدك، تحقق جيدا من المنطقة الزمنية المعروضة: يعتمد المغرب عادة توقيت UTC+1، لكنه يعود إلى UTC+0 خلال شهر رمضان. اختر ساعة انطلاق تسمح لك بنوم جيد في الليلة السابقة.",
          "التقرير لا يقل أهمية عن الاختراق: فآلة مخترقة دون توثيق جيد قد لا تمنحك أي نقطة. اكتب خطوات قابلة لإعادة التنفيذ مع الأوامر ولقطات الشاشة والأدلة المطلوبة. وإذا أعددت نموذجا مسبقا ودوّنت ملاحظاتك أثناء الامتحان، فإن التحرير يستغرق بضع ساعات وليس يوما كاملا.",
          "على المستوى الذهني، يختبر OSCP+ قدرتك على التحمل أيضا. خطط لفترات راحة، وتناول طعامك، ونم بضع ساعات إذا لزم الأمر. عدم النجاح من المحاولة الأولى أمر شائع ولا يدعو إلى الإحراج: حلل ملاحظاتك وحدد ما عرقلك وعد بخطة واضحة.",
        ],
        list: [
          "اتصال إنترنت مستقر، ويفضل أن يكون سلكيا عبر الألياف أو ADSL، مع حل احتياطي 4G/5G مجرب مسبقا.",
          "كاميرا تعمل ووثيقة هوية رسمية سارية وغرفة هادئة وجيدة الإضاءة.",
          "حاسوب بذاكرة كافية لتشغيل Kali، وجهاز UPS أو بطارية مشحونة تحسبا لانقطاع الكهرباء.",
          "قراءة متأنية لقواعد امتحان OffSec، خاصة القيود المفروضة على Metasploit والأدوات الآلية.",
          "نموذج تقرير جاهز ومجرب، ويوم راحة مخطط له بعد الامتحان من أجل التحرير.",
        ],
      },
      {
        heading: "التحضير لـ OSCP+ مع مواكبة GATech",
        paragraphs: [
          "صُمم PEN-200 للتعلم الذاتي، ويفقد كثير من المترشحين حماسهم حين يشتغلون بمفردهم. تقترح GATech مواكبة لمدة 10 أيام (80 ساعة من التأطير الموجه) ابتداء من 29900 درهم، مع الولوج إلى مختبرات PEN-200 ومحاولة امتحان OSCP+ واحدة، حضوريا أو عن بعد في قسم افتراضي مباشر. وإذا كنت بحاجة إلى تقوية أسسك أولا، فإن CEH v13 أو CompTIA PenTest+ يشكلان مرحلتين وسيطتين منطقيتين.",
          "تساعدك عدة عروض على تخفيف التكلفة: خصم 10% للتسجيل المبكر، و15% للمجموعات ابتداء من ثلاثة مشاركين من نفس الشركة، و15% للطلبة والخريجين الجدد، أو الأداء على 3 دفعات بدون فوائد للأفراد (الخصومات غير قابلة للجمع). تواصل مع مستشارينا لتقييم مستواك وضبط خطتك ذات 12 أسبوعا.",
        ],
      },
    ],
    en: [
      {
        heading: "How long does it take to prepare for OSCP+ from Morocco?",
        paragraphs: [
          "Short answer: plan for about 12 weeks of steady work if you already have solid Linux, networking and web foundations, and closer to 5 or 6 months if you are starting further back. There is no shortcut: OffSec's OSCP+ exam is 100% hands-on. You get 23 hours 45 minutes to compromise an Active Directory set and several standalone machines under remote proctoring, then 24 hours to submit a pentest report. You need 70 out of 100 points.",
          "The good news is that everything happens online: the PEN-200 course, the labs and the exam. Preparing from Casablanca, Rabat, Marrakech or Agadir is perfectly workable, as long as you organise your time, your connection and your hardware. This guide offers a realistic plan for someone who works full time and can free up 12 to 15 hours a week.",
        ],
      },
      {
        heading: "What prerequisites do you need before starting PEN-200?",
        paragraphs: [
          "PEN-200 is not an introductory course. Many candidates lose weeks in the labs because of a gap they could have filled beforehand. Check honestly that you are comfortable with the following:",
        ],
        list: [
          "Linux: command line navigation, permissions, processes, services, scheduled tasks, reading configuration files.",
          "Windows: users and groups, services, registry, basic PowerShell, Active Directory concepts (domain, domain controller, Kerberos).",
          "Networking: the TCP/IP model, common ports, DNS, HTTP, SMB, FTP, SSH, and reading a simple packet capture.",
          "Scripting: reading, editing and fixing a Python or Bash script, and adapting a public exploit instead of running it blindly.",
          "Web: how HTTP requests, cookies and forms work, and the classic flaws (SQL injection, file inclusion, file upload, command injection).",
        ],
      },
      {
        heading: "What does the PEN-200 course cover and how should you approach it?",
        paragraphs: [
          "PEN-200 (Penetration Testing with Kali Linux) is the official course behind OSCP+. It covers the full pentest chain: passive and active information gathering, vulnerability scanning, web application attacks, finding and adapting public exploits, password attacks, Windows and Linux privilege escalation, port forwarding and pivoting, Metasploit, then Active Directory enumeration and attacks. Each module ends with exercises, and challenge labs reproduce complete networks.",
          "The most common mistake is to read the whole course first and only then open the labs. Alternate instead: one module, its exercises, then one or two machines that use what you just learned. The course then becomes your reference, and you will return to it often.",
        ],
      },
      {
        heading: "What does a 12-week OSCP+ preparation plan look like?",
        paragraphs: [
          "This plan assumes around 12 to 15 hours a week, for example two evenings plus half a day at the weekend. Adjust it to your level: if a phase feels easy, move on; if you get stuck, extend it rather than skipping a step.",
        ],
        list: [
          "Weeks 1–2: refresh Linux, Windows and networking; set up Kali, your note-taking tool and a report template.",
          "Weeks 3–4: PEN-200 modules on information gathering, scanning and web attacks, with their exercises.",
          "Weeks 5–6: public exploits, password attacks, Linux and Windows privilege escalation; first lab machines.",
          "Weeks 7–8: pivoting, port forwarding, Metasploit, then Active Directory; aim for three or four machines a week.",
          "Weeks 9–10: full challenge labs under real conditions, timing each machine and writing clean notes.",
          "Week 11: a 24-hour mock exam on a set you have never seen, followed by a complete report.",
          "Week 12: work on weak spots, review your methodology sheets, rest and prepare exam logistics.",
        ],
      },
      {
        heading: "How should you work the labs: enumeration, notes and method?",
        paragraphs: [
          "In the labs as in the exam, most dead ends come from incomplete enumeration, not from missing techniques. Get into the habit of running the same routine on every target and keep it in a checklist you improve week after week.",
          "Note-taking is your best ally. Use a structured tool (Obsidian, CherryTree, Joplin or similar) with one folder per machine: scan results, leads tried, credentials found, exact commands, screenshots. On exam day, these notes become the skeleton of your report.",
        ],
        list: [
          "Full TCP port scan, then targeted service scans and a check of the most common UDP ports.",
          "Service-by-service enumeration: versions, SMB shares, web directories, users, readable files.",
          "Search for public exploits matching the versions found, and read the code before running anything.",
          "After initial access: systematic local enumeration for privilege escalation.",
          "Capture the proof (local.txt or proof.txt, with the command and IP address visible in the same screenshot).",
          "Stuck for more than an hour? Switch targets or go back to enumeration.",
        ],
      },
      {
        heading: "How do you practise Active Directory for OSCP+?",
        paragraphs: [
          "The Active Directory set carries heavy weight in the final score: reaching 70 points without compromising it is difficult. It deserves dedicated preparation. Master domain enumeration (users, groups, sessions, shares, permissions), Kerberos attacks such as Kerberoasting and AS-REP Roasting, credential and hash reuse, and lateral movement between machines.",
          "Train on the AD environments in the PEN-200 labs, then build your own small domain with two or three virtual machines if your computer allows it. Reproducing an attack in a lab you built forces you to understand why it works, which often makes the difference on the day. Also read OffSec's official exam guide: the AD set format and the rules evolve, and only the current version counts.",
        ],
      },
      {
        heading: "Taking the OSCP+ exam from Morocco: logistics, report and mindset",
        paragraphs: [
          "The exam is taken online under remote proctoring via webcam and screen sharing, with an ID check at the start. When booking your slot, check the displayed time zone carefully: Morocco normally runs on UTC+1 but switches back to UTC+0 during Ramadan. Choose a start time that lets you sleep well the night before.",
          "The report matters as much as the exploitation: a compromised but poorly documented machine may earn no points. Write reproducible steps with the commands, screenshots and required proofs. If you prepared a template and kept notes during the exam, writing takes a few hours, not a full day.",
          "Mentally, OSCP+ also tests your endurance. Plan breaks, eat, and sleep a few hours if needed. Not passing on the first attempt is common and nothing to be ashamed of: review your notes, identify what blocked you and come back with a plan.",
        ],
        list: [
          "A stable internet connection, ideally wired fibre or ADSL, with a 4G/5G backup tested in advance.",
          "A working webcam, a valid official ID, and a quiet, well-lit room.",
          "A computer with enough memory for Kali, plus a UPS or charged battery in case of a power cut.",
          "A careful read of OffSec's exam rules, especially the restrictions on Metasploit and automated tools.",
          "A tested report template, and a rest day planned afterwards for writing.",
        ],
      },
      {
        heading: "Preparing for OSCP+ with GATech coaching",
        paragraphs: [
          "PEN-200 is designed for self-study, and many candidates run out of steam alone. GATech offers a 10-day programme (80 hours of guided coaching) from 29,900 MAD, with PEN-200 lab access and one OSCP+ exam attempt included, in the classroom or live online. If you need to strengthen your foundations first, CEH v13 or CompTIA PenTest+ are sensible intermediate steps.",
          "Several offers help reduce the cost: 10% off for early registration, 15% for groups of at least three participants from the same company, 15% for students and recent graduates, or three interest-free instalments for individuals (discounts cannot be combined). Contact our advisers to assess your level and set up your 12-week plan.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      {
        q: "Peut-on passer l'examen OSCP+ depuis le Maroc ?",
        a: "Oui. L'examen OSCP+ se passe entièrement en ligne, sous surveillance à distance par webcam et partage d'écran. Il suffit d'une connexion internet stable, d'une webcam, d'une pièce d'identité valide et d'un endroit calme. Vérifiez le fuseau horaire au moment de réserver votre créneau.",
      },
      {
        q: "Combien d'heures par semaine faut-il pour préparer l'OSCP+ ?",
        a: "Pour un plan de 12 semaines, comptez environ 12 à 15 heures par semaine si vous avez déjà de bonnes bases en Linux, réseau et web. Avec des bases plus fragiles, prévoyez plutôt 5 à 6 mois au même rythme.",
      },
      {
        q: "Faut-il avoir le CEH avant de préparer l'OSCP+ ?",
        a: "Non, ce n'est pas obligatoire. Mais si vos bases offensives sont encore légères, le CEH v13 ou le CompTIA PenTest+ permettent d'acquérir la méthodologie et le vocabulaire du pentest avant d'attaquer les labs PEN-200, plus exigeants.",
      },
      {
        q: "Quel score faut-il pour réussir l'OSCP+ ?",
        a: "Il faut obtenir 70 points sur 100. Les points se gagnent en compromettant l'ensemble Active Directory et les machines autonomes, à condition de documenter chaque accès avec les preuves demandées dans le rapport, remis dans les 24 heures qui suivent l'épreuve pratique.",
      },
      {
        q: "Combien coûte une préparation OSCP+ accompagnée au Maroc ?",
        a: "Chez GATech, la préparation OSCP+ démarre à 29 900 MAD. Ce tarif comprend 10 jours de coaching (80 heures), l'accès aux labs PEN-200 et une tentative d'examen. Des remises sont possibles (inscription anticipée, groupe, étudiant) ainsi qu'un paiement en trois fois.",
      },
    ],
    ar: [
      {
        q: "هل يمكن اجتياز امتحان OSCP+ من المغرب؟",
        a: "نعم. يُجرى امتحان OSCP+ بالكامل عبر الإنترنت تحت المراقبة عن بعد بواسطة الكاميرا ومشاركة الشاشة. يكفي اتصال إنترنت مستقر وكاميرا ووثيقة هوية سارية ومكان هادئ. تحقق من المنطقة الزمنية عند حجز موعدك.",
      },
      {
        q: "كم ساعة أسبوعيا يتطلب التحضير لـ OSCP+؟",
        a: "في خطة من 12 أسبوعا، خصص حوالي 12 إلى 15 ساعة أسبوعيا إذا كانت لديك أسس جيدة في Linux والشبكات والويب. أما إذا كانت أسسك أضعف، فتوقع ما بين 5 و6 أشهر بالوتيرة نفسها.",
      },
      {
        q: "هل يجب الحصول على CEH قبل التحضير لـ OSCP+؟",
        a: "لا، ليس ذلك إلزاميا. لكن إذا كانت أسسك الهجومية ما تزال محدودة، فإن CEH v13 أو CompTIA PenTest+ يساعدانك على اكتساب منهجية اختبار الاختراق ومصطلحاته قبل الانتقال إلى مختبرات PEN-200 الأكثر تطلبا.",
      },
      {
        q: "ما النقطة المطلوبة للنجاح في OSCP+؟",
        a: "يجب الحصول على 70 نقطة من أصل 100. تُكتسب النقاط باختراق بيئة Active Directory والآلات المستقلة، بشرط توثيق كل وصول بالأدلة المطلوبة في التقرير الذي يُسلَّم خلال 24 ساعة بعد الامتحان التطبيقي.",
      },
      {
        q: "كم تكلف مواكبة التحضير لـ OSCP+ في المغرب؟",
        a: "لدى GATech يبدأ التحضير لـ OSCP+ من 29900 درهم. ويشمل هذا السعر 10 أيام من المواكبة (80 ساعة) والولوج إلى مختبرات PEN-200 ومحاولة امتحان واحدة. وتتوفر خصومات (التسجيل المبكر والمجموعات والطلبة) وإمكانية الأداء على 3 دفعات.",
      },
    ],
    en: [
      {
        q: "Can you take the OSCP+ exam from Morocco?",
        a: "Yes. The OSCP+ exam is taken entirely online under remote proctoring via webcam and screen sharing. You need a stable internet connection, a webcam, a valid ID and a quiet place. Check the time zone when you book your slot.",
      },
      {
        q: "How many hours a week do you need to prepare for OSCP+?",
        a: "For a 12-week plan, count on about 12 to 15 hours a week if you already have good Linux, networking and web foundations. With weaker foundations, expect 5 to 6 months at the same pace.",
      },
      {
        q: "Do you need CEH before preparing for OSCP+?",
        a: "No, it is not mandatory. But if your offensive foundations are still light, CEH v13 or CompTIA PenTest+ help you learn pentest methodology and vocabulary before tackling the more demanding PEN-200 labs.",
      },
      {
        q: "What score do you need to pass OSCP+?",
        a: "You need 70 out of 100 points. Points are earned by compromising the Active Directory set and the standalone machines, provided each access is documented with the required proofs in the report, submitted within 24 hours of the hands-on exam.",
      },
      {
        q: "How much does coached OSCP+ preparation cost in Morocco?",
        a: "At GATech, OSCP+ preparation starts at 29,900 MAD. The price includes 10 days of coaching (80 hours), PEN-200 lab access and one exam attempt. Discounts are available (early bird, group, student), as well as payment in three instalments.",
      },
    ],
  },
};

export default guide;
