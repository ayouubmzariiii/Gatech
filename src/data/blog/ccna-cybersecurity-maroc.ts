import type { Guide } from "../types";

const guide: Guide = {
  slug: "ccna-cybersecurity-maroc",
  category: "certifications",
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  readingMinutes: 7,
  relatedCerts: ["cisco-ccna-cybersecurity", "comptia-cysa-plus", "comptia-security-plus", "cisco-ccna"],
  title: {
    fr: "CCNA Cybersecurity au Maroc : examen 200-201, programme et préparation",
    ar: "CCNA Cybersecurity في المغرب: امتحان 200-201 والبرنامج والتحضير",
    en: "CCNA Cybersecurity in Morocco: 200-201 Exam, Syllabus and Prep",
  },
  seoTitle: {
    fr: "CCNA Cybersecurity Maroc : examen 200-201 expliqué",
    ar: "CCNA Cybersecurity في المغرب: شرح امتحان 200-201",
    en: "CCNA Cybersecurity Morocco: 200-201 Exam Explained",
  },
  seoDescription: {
    fr: "Ex-CyberOps Associate, le CCNA Cybersecurity (200-201) prépare au SOC. Domaines, format, plan de révision et prix au Maroc : lisez le guide.",
    ar: "شهادة CCNA Cybersecurity (امتحان 200-201) سابقا CyberOps Associate: المحاور والشكل وخطة المراجعة والسعر في المغرب. اقرأ الدليل الآن.",
    en: "Formerly CyberOps Associate, CCNA Cybersecurity (200-201) leads to SOC roles. Domains, format, study plan and price in Morocco: read the guide.",
  },
  excerpt: {
    fr: "Anciennement CyberOps Associate, le CCNA Cybersecurity valide les compétences d'un analyste SOC de niveau 1. Voici ce que couvre l'examen 200-201, comment il se passe et comment le préparer depuis le Maroc.",
    ar: "شهادة CCNA Cybersecurity، المعروفة سابقا باسم CyberOps Associate، تثبت كفاءات محلل SOC من المستوى الأول. إليك ما يغطيه امتحان 200-201 وكيف يجري وكيف تستعد له من المغرب.",
    en: "Formerly CyberOps Associate, CCNA Cybersecurity validates the skills of a Tier 1 SOC analyst. Here is what the 200-201 exam covers, how it works and how to prepare for it from Morocco.",
  },
  sections: {
    fr: [
      {
        heading: "Qu'est-ce que le CCNA Cybersecurity et pourquoi viser l'examen 200-201 ?",
        paragraphs: [
          "Le CCNA Cybersecurity est la certification de Cisco destinée aux futurs analystes en centre des opérations de sécurité (SOC). Elle se décroche en réussissant un seul examen, le 200-201, et valide une compétence très concrète : savoir lire une alerte, la replacer dans son contexte, la corréler avec d'autres traces et décider s'il s'agit d'un véritable incident.",
          "Si le nom vous semble nouveau, c'est normal. Jusqu'au début de l'année 2026, cette certification s'appelait « Cisco Certified CyberOps Associate ». Cisco l'a renommée CCNA Cybersecurity en février 2026, d'après ses annonces, en conservant le même code d'examen. Les personnes déjà titulaires de CyberOps Associate n'ont, à notre connaissance, aucune démarche à faire : leur titre est reconnu sous le nouveau nom. Comme toujours avec Cisco, le plus sûr reste de vérifier les détails à jour sur le site officiel de l'éditeur avant de s'inscrire.",
          "Pour un candidat au Maroc, l'intérêt est double : la marque Cisco est déjà très présente dans les infrastructures des opérateurs, des banques et des administrations, et le contenu de l'examen correspond directement au quotidien d'un analyste SOC de niveau 1.",
        ],
      },
      {
        heading: "Qu'est-ce qui change avec le passage de CyberOps Associate au CCNA Cybersecurity ?",
        paragraphs: [
          "Sur le fond, l'évolution est mesurée. Le code 200-201 reste identique, l'examen est toujours unique et les cinq grands domaines sont conservés. Le changement le plus notable est la version 1.2 du référentiel (blueprint), qui ajoute des objectifs liés à l'intelligence artificielle : comprendre comment l'IA est utilisée dans les outils de détection et d'analyse, et quels nouveaux risques elle introduit.",
          "Le nouveau nom rapproche aussi la certification de la famille CCNA, mieux identifiée par les recruteurs. Concrètement, un supérieur hiérarchique ou un service RH comprendra plus vite ce que représente « CCNA Cybersecurity » que l'ancien intitulé. Si vous aviez commencé à réviser avec des supports CyberOps Associate, ils restent largement utiles ; il suffit de compléter avec les objectifs ajoutés dans la v1.2.",
        ],
      },
      {
        heading: "Quel est le programme de l'examen 200-201 ?",
        paragraphs: [
          "Le référentiel officiel est organisé en cinq domaines. Ensemble, ils décrivent le parcours d'une alerte, de sa détection à son traitement selon les procédures de l'organisation.",
        ],
        list: [
          "Concepts de sécurité : triade CIA, modèles de contrôle d'accès, menaces, vulnérabilités, principes de défense en profondeur et vocabulaire d'un SOC.",
          "Surveillance de la sécurité (security monitoring) : sources de données (NetFlow, journaux, IDS/IPS, proxy), types de données et effets du chiffrement ou du NAT sur la visibilité.",
          "Analyse basée sur l'hôte (host-based analysis) : journaux Windows et Linux, processus, antivirus et EDR, interprétation des artefacts sur un poste ou un serveur.",
          "Analyse des intrusions réseau : lecture de captures de paquets, en-têtes de protocoles, signatures, identification des indicateurs de compromission.",
          "Politiques et procédures de sécurité : gestion des incidents, cadres de référence (par exemple NIST), profilage des actifs, chaîne de traçabilité des preuves.",
        ],
      },
      {
        heading: "Comment se déroule l'examen 200-201 ?",
        paragraphs: [
          "L'examen dure environ 120 minutes et se passe chez Pearson VUE, soit en ligne sous surveillance à distance (OnVUE) depuis chez vous ou votre bureau, soit dans un centre de test agréé. Il est proposé en anglais : un niveau de lecture technique correct est donc indispensable.",
          "Cisco ne publie ni le nombre exact de questions ni le score de réussite, qui peut varier selon la forme d'examen qui vous est attribuée. Attendez-vous à des questions à choix multiples, mais aussi à des exercices de type glisser-déposer et à des scénarios où il faut interpréter un extrait de journal ou une capture. Une fois obtenue, la certification est valable 3 ans ; elle se renouvelle en repassant un examen ou grâce aux crédits de formation continue Cisco (Continuing Education).",
        ],
      },
      {
        heading: "Quels postes vise le CCNA Cybersecurity au Maroc ?",
        paragraphs: [
          "Le débouché naturel est le poste d'analyste SOC de niveau 1 : surveiller les consoles SIEM, qualifier les alertes, écarter les faux positifs et escalader les incidents réels vers le niveau 2. Au Maroc, ces postes se trouvent chez les opérateurs télécoms, dans les banques et les assurances, chez les prestataires de services de sécurité managés et dans les centres de services (offshore) qui supervisent des clients européens.",
          "La certification est aussi utile à un administrateur réseau ou système qui souhaite se rapprocher de la sécurité, ou à un jeune diplômé qui veut prouver qu'il maîtrise déjà les réflexes d'un analyste. Elle ne remplace pas l'expérience, mais elle donne un langage commun avec les équipes en place et un argument concret lors d'un entretien. Pour aller plus loin sur ce métier, notre article consacré au métier d'analyste SOC au Maroc détaille les missions et l'évolution de carrière.",
        ],
      },
      {
        heading: "Comment préparer l'examen 200-201 en 6 à 8 semaines ?",
        paragraphs: [
          "Avec de bonnes bases réseau (modèle OSI, TCP/IP, adressage, services courants), un plan de 6 à 8 semaines à raison de 8 à 10 heures par semaine est réaliste. Sans ces bases, prévoyez d'abord quelques semaines de remise à niveau, par exemple avec le programme du CCNA généraliste.",
        ],
        list: [
          "Semaines 1 et 2 : concepts de sécurité et vocabulaire du SOC, révision des protocoles réseau.",
          "Semaines 3 et 4 : surveillance et analyse réseau, entraînement intensif sur Wireshark et sur la lecture de journaux.",
          "Semaine 5 : analyse côté hôte sous Windows et Linux, artefacts, processus et journaux système.",
          "Semaine 6 : politiques, procédures et gestion des incidents, puis lecture des nouveaux objectifs IA de la v1.2.",
          "Semaines 7 et 8 : examens blancs chronométrés, analyse de chaque erreur et révision ciblée des domaines faibles.",
        ],
      },
      {
        heading: "CCNA Cybersecurity, CySA+ ou Security+ : laquelle choisir ?",
        paragraphs: [
          "CompTIA Security+ couvre la sécurité de manière plus large : gouvernance, architecture, cryptographie, gestion des identités, opérations. C'est une excellente base généraliste, souvent exigée comme socle. Le CCNA Cybersecurity est plus resserré sur la détection et l'analyse, donc plus directement aligné sur un poste SOC.",
          "CompTIA CySA+ se situe un cran au-dessus : elle s'adresse à des analystes qui ont déjà quelques années d'expérience et ajoute la gestion des vulnérabilités, la chasse aux menaces et la réponse aux incidents plus avancée. Un parcours cohérent consiste à commencer par Security+ ou CCNA Cybersecurity selon votre profil, puis à viser CySA+ après une première expérience en SOC.",
        ],
      },
      {
        heading: "Où suivre une formation CCNA Cybersecurity au Maroc ?",
        paragraphs: [
          "GATech propose une préparation de 5 jours (40 heures) à l'examen 200-201, à partir de 10 900 MAD, voucher de l'examen officiel Cisco inclus. La formation suit les cinq domaines du référentiel avec des labs d'analyse de trafic et de journaux et des examens blancs, en présentiel à Casablanca ou à Rabat, ou en classe virtuelle en direct. GATech n'est pas Cisco Learning Partner : il s'agit d'une préparation indépendante à l'examen officiel.",
          "Plusieurs conditions peuvent réduire la facture : 10 % de remise pour une inscription réglée au moins 4 semaines avant la session, 15 % pour les étudiants et jeunes diplômés ou pour les groupes à partir de 3 participants d'une même entreprise, et un paiement en 3 fois sans frais pour les particuliers. Ces remises ne sont pas cumulables. Demandez un devis pour connaître les prochaines dates.",
        ],
      },
    ],
    ar: [
      {
        heading: "ما هي شهادة CCNA Cybersecurity ولماذا تستهدف امتحان 200-201؟",
        paragraphs: [
          "شهادة CCNA Cybersecurity هي شهادة Cisco الموجهة لمحللي مراكز عمليات الأمن (SOC) في بداية مسارهم. تحصل عليها باجتياز امتحان واحد هو 200-201، وهي تثبت مهارة عملية جدا: قراءة التنبيه ووضعه في سياقه وربطه بآثار أخرى ثم تحديد ما إذا كان حادثا حقيقيا.",
          "إذا بدا لك الاسم جديدا فذلك طبيعي، إذ كانت هذه الشهادة تحمل حتى بداية 2026 اسم Cisco Certified CyberOps Associate. وحسب إعلانات Cisco، أعيدت تسميتها CCNA Cybersecurity في فبراير 2026 مع الإبقاء على رمز الامتحان نفسه. ولا يحتاج حاملو CyberOps Associate إلى أي إجراء، فشهادتهم معترف بها تحت الاسم الجديد. ويبقى من الأفضل التحقق من التفاصيل المحدثة على موقع Cisco الرسمي قبل التسجيل.",
          "بالنسبة للمترشح في المغرب، تكمن الأهمية في أمرين: حضور Cisco القوي في بنيات المشغلين والبنوك والإدارات، وتطابق محتوى الامتحان مع العمل اليومي لمحلل SOC من المستوى الأول.",
        ],
      },
      {
        heading: "ما الذي تغير بالانتقال من CyberOps Associate إلى CCNA Cybersecurity؟",
        paragraphs: [
          "التغيير محدود في جوهره: الرمز 200-201 لم يتغير، والامتحان ما زال واحدا، والمحاور الخمسة الكبرى محفوظة. أبرز جديد هو الإصدار 1.2 من البرنامج الرسمي الذي يضيف أهدافا مرتبطة بالذكاء الاصطناعي، مثل فهم استعماله في أدوات الكشف والتحليل والمخاطر الجديدة التي يطرحها.",
          "كما يقرب الاسم الجديد الشهادة من عائلة CCNA التي يعرفها المسؤولون عن التوظيف بسهولة أكبر. وإذا كنت قد بدأت المراجعة بموارد CyberOps Associate، فهي ما زالت مفيدة في معظمها، ويكفي استكمالها بالأهداف المضافة في الإصدار 1.2.",
        ],
      },
      {
        heading: "ما هو برنامج امتحان 200-201؟",
        paragraphs: [
          "ينقسم البرنامج الرسمي إلى خمسة محاور تتتبع معا مسار التنبيه من رصده إلى معالجته وفق إجراءات المؤسسة.",
        ],
        list: [
          "مفاهيم الأمن: ثالوث السرية والسلامة والتوافر، نماذج التحكم في الولوج، التهديدات والثغرات، الدفاع المتعدد الطبقات ومصطلحات SOC.",
          "المراقبة الأمنية: مصادر البيانات مثل NetFlow والسجلات وIDS/IPS والوكلاء، وتأثير التشفير وNAT على الرؤية.",
          "التحليل على مستوى المضيف: سجلات Windows وLinux، العمليات، برامج الحماية وEDR، وتفسير الآثار على الحواسيب والخوادم.",
          "تحليل الاختراقات الشبكية: قراءة التقاطات الحزم، رؤوس البروتوكولات، التوقيعات، وتحديد مؤشرات الاختراق.",
          "السياسات والإجراءات الأمنية: تدبير الحوادث، الأطر المرجعية مثل NIST، توصيف الأصول وسلسلة حفظ الأدلة.",
        ],
      },
      {
        heading: "كيف يجري امتحان 200-201؟",
        paragraphs: [
          "يستغرق الامتحان حوالي 120 دقيقة ويُجرى عبر Pearson VUE، إما عن بعد تحت المراقبة (OnVUE) من المنزل أو المكتب، أو في مركز اختبار معتمد. وهو متاح باللغة الإنجليزية، لذا فالقدرة على قراءة النصوص التقنية ضرورية.",
          "لا تنشر Cisco العدد الدقيق للأسئلة ولا درجة النجاح التي قد تختلف حسب نسخة الامتحان. توقع أسئلة متعددة الاختيارات إلى جانب تمارين السحب والإفلات وسيناريوهات تتطلب تفسير مقتطف من سجل أو التقاط حزم. والشهادة صالحة لمدة 3 سنوات، وتجدد باجتياز امتحان أو عبر أرصدة التكوين المستمر لدى Cisco.",
        ],
      },
      {
        heading: "ما هي المناصب التي تفتحها CCNA Cybersecurity في المغرب؟",
        paragraphs: [
          "المنصب الطبيعي هو محلل SOC من المستوى الأول: مراقبة لوحات SIEM، فرز التنبيهات، استبعاد الإنذارات الكاذبة وتصعيد الحوادث الحقيقية إلى المستوى الثاني. وتوجد هذه المناصب في المغرب لدى مشغلي الاتصالات والبنوك وشركات التأمين ومقدمي خدمات الأمن المدارة ومراكز الخدمات التي تراقب عملاء أوروبيين.",
          "تفيد الشهادة أيضا مسؤول الشبكات أو الأنظمة الذي يرغب في التوجه نحو الأمن، أو الخريج الجديد الذي يريد إثبات امتلاكه لردود فعل المحلل. وهي لا تعوض الخبرة، لكنها تمنحك لغة مشتركة مع الفرق القائمة وحجة ملموسة في المقابلة. ويفصل مقالنا عن مهنة محلل SOC في المغرب المهام والتطور المهني.",
        ],
      },
      {
        heading: "كيف تستعد لامتحان 200-201 في 6 إلى 8 أسابيع؟",
        paragraphs: [
          "إذا كانت لديك أسس شبكية جيدة (نموذج OSI وTCP/IP والعنونة والخدمات الشائعة)، فإن خطة من 6 إلى 8 أسابيع بمعدل 8 إلى 10 ساعات أسبوعيا واقعية. وبدونها، خصص بضعة أسابيع أولا للتأهيل، مثلا عبر برنامج CCNA العام.",
        ],
        list: [
          "الأسبوعان 1 و2: مفاهيم الأمن ومصطلحات SOC ومراجعة بروتوكولات الشبكة.",
          "الأسبوعان 3 و4: المراقبة والتحليل الشبكي، مع تدريب مكثف على Wireshark وقراءة السجلات.",
          "الأسبوع 5: التحليل على مستوى المضيف في Windows وLinux، الآثار والعمليات وسجلات النظام.",
          "الأسبوع 6: السياسات والإجراءات وتدبير الحوادث، ثم أهداف الذكاء الاصطناعي الجديدة في الإصدار 1.2.",
          "الأسبوعان 7 و8: امتحانات تجريبية محددة الوقت، تحليل كل خطأ ومراجعة مركزة للمحاور الضعيفة.",
        ],
      },
      {
        heading: "CCNA Cybersecurity أم CySA+ أم Security+: أيها تختار؟",
        paragraphs: [
          "تغطي CompTIA Security+ الأمن بشكل أوسع: الحوكمة والهندسة والتشفير وتدبير الهويات والعمليات، وهي قاعدة عامة ممتازة. أما CCNA Cybersecurity فهي أكثر تركيزا على الكشف والتحليل، لذا فهي أقرب مباشرة إلى منصب في SOC.",
          "وتأتي CompTIA CySA+ في مستوى أعلى، إذ تستهدف محللين لديهم بضع سنوات من الخبرة وتضيف تدبير الثغرات وصيد التهديدات والاستجابة المتقدمة للحوادث. والمسار المنطقي هو البدء بـ Security+ أو CCNA Cybersecurity حسب ملفك، ثم التوجه إلى CySA+ بعد تجربة أولى في SOC.",
        ],
      },
      {
        heading: "أين تتابع تكوين CCNA Cybersecurity في المغرب؟",
        paragraphs: [
          "تقترح GATech تحضيرا لامتحان 200-201 لمدة 5 أيام (40 ساعة) ابتداء من 10900 درهم، مع قسيمة امتحان Cisco الرسمي. يتبع التكوين المحاور الخمسة للبرنامج مع مختبرات لتحليل حركة الشبكة والسجلات وامتحانات تجريبية، حضوريا في الدار البيضاء أو الرباط أو في قسم افتراضي مباشر. وGATech ليست شريك تكوين معتمدا لدى Cisco، بل تقدم تحضيرا مستقلا للامتحان الرسمي.",
          "يمكن تخفيض التكلفة عبر عدة عروض: خصم 10% عند الأداء قبل 4 أسابيع على الأقل من بداية الدورة، و15% للطلبة والخريجين الجدد أو للمجموعات ابتداء من 3 مشاركين من الشركة نفسها، والأداء على 3 دفعات بدون فوائد للأفراد. والخصومات غير قابلة للجمع. اطلب عرض سعر لمعرفة المواعيد القادمة.",
        ],
      },
    ],
    en: [
      {
        heading: "What is CCNA Cybersecurity and why take the 200-201 exam?",
        paragraphs: [
          "CCNA Cybersecurity is Cisco's certification for aspiring Security Operations Center (SOC) analysts. You earn it by passing a single exam, 200-201, and it validates a very practical skill: reading an alert, putting it in context, correlating it with other evidence and deciding whether it is a real incident.",
          "If the name sounds new, that is because until early 2026 this certification was called \"Cisco Certified CyberOps Associate\". According to Cisco's announcements, it was renamed CCNA Cybersecurity in February 2026, keeping the same exam code. Existing CyberOps Associate holders should not need to do anything: their credential is recognised under the new name. As always, check the current details on Cisco's official website before registering.",
          "For candidates in Morocco, the appeal is twofold: Cisco is already widely deployed across telecom operators, banks and public bodies, and the exam content maps directly to the daily work of a Tier 1 SOC analyst.",
        ],
      },
      {
        heading: "What changed when CyberOps Associate became CCNA Cybersecurity?",
        paragraphs: [
          "The change is mostly incremental. The 200-201 code is the same, there is still a single exam and the five main domains remain. The most notable update is version 1.2 of the blueprint, which adds AI-related objectives: understanding how AI is used in detection and analysis tools, and what new risks it introduces.",
          "The new name also places the certification in the CCNA family, which recruiters recognise more easily. If you started studying with CyberOps Associate materials, most of them remain useful; just add the objectives introduced in v1.2.",
        ],
      },
      {
        heading: "What does the 200-201 exam cover?",
        paragraphs: [
          "The official blueprint is organised into five domains which, together, follow an alert from detection to handling according to the organisation's procedures.",
        ],
        list: [
          "Security concepts: the CIA triad, access control models, threats, vulnerabilities, defence in depth and SOC terminology.",
          "Security monitoring: data sources (NetFlow, logs, IDS/IPS, proxies), data types and how encryption or NAT affect visibility.",
          "Host-based analysis: Windows and Linux logs, processes, antivirus and EDR, interpreting artefacts on endpoints and servers.",
          "Network intrusion analysis: reading packet captures, protocol headers, signatures and identifying indicators of compromise.",
          "Security policies and procedures: incident handling, frameworks such as NIST, asset profiling and chain of custody.",
        ],
      },
      {
        heading: "How does the 200-201 exam work?",
        paragraphs: [
          "The exam lasts about 120 minutes and is delivered by Pearson VUE, either online with remote proctoring (OnVUE) or at an authorised test centre. It is offered in English, so solid technical reading skills are essential.",
          "Cisco does not publish the exact number of questions or the passing score, which can vary by exam form. Expect multiple-choice questions as well as drag-and-drop items and scenarios where you interpret a log excerpt or a capture. The certification is valid for 3 years and can be renewed by passing an exam or earning Cisco Continuing Education credits.",
        ],
      },
      {
        heading: "Which jobs does CCNA Cybersecurity lead to in Morocco?",
        paragraphs: [
          "The natural target is a Tier 1 SOC analyst role: monitoring SIEM consoles, triaging alerts, ruling out false positives and escalating real incidents to Tier 2. In Morocco, these roles exist at telecom operators, banks and insurers, managed security service providers and offshore service centres monitoring European clients.",
          "The certification also helps a network or systems administrator move towards security, or a recent graduate prove they already have an analyst's reflexes. It does not replace experience, but it gives you a common language with existing teams and a concrete talking point in interviews. Our article on the SOC analyst role in Morocco covers the job and career path in more detail.",
        ],
      },
      {
        heading: "How do you prepare for the 200-201 exam in 6 to 8 weeks?",
        paragraphs: [
          "With solid networking basics (OSI model, TCP/IP, addressing, common services), a 6 to 8-week plan at 8 to 10 hours a week is realistic. Without them, plan a few weeks of catch-up first, for instance with the general CCNA syllabus.",
        ],
        list: [
          "Weeks 1–2: security concepts and SOC vocabulary, network protocol review.",
          "Weeks 3–4: monitoring and network analysis, intensive practice with Wireshark and log reading.",
          "Week 5: host-based analysis on Windows and Linux, artefacts, processes and system logs.",
          "Week 6: policies, procedures and incident handling, then the new AI objectives in v1.2.",
          "Weeks 7–8: timed practice exams, review of every mistake and targeted revision of weak domains.",
        ],
      },
      {
        heading: "CCNA Cybersecurity, CySA+ or Security+: which one should you choose?",
        paragraphs: [
          "CompTIA Security+ covers security more broadly: governance, architecture, cryptography, identity management and operations. It is an excellent general foundation. CCNA Cybersecurity is narrower and focused on detection and analysis, so it aligns more directly with a SOC role.",
          "CompTIA CySA+ sits one level higher: it targets analysts with a few years of experience and adds vulnerability management, threat hunting and more advanced incident response. A sensible path is to start with Security+ or CCNA Cybersecurity depending on your profile, then aim for CySA+ after some SOC experience.",
        ],
      },
      {
        heading: "Where can you train for CCNA Cybersecurity in Morocco?",
        paragraphs: [
          "GATech offers a 5-day (40-hour) 200-201 preparation starting at 10,900 MAD, with the voucher for the official Cisco exam included. The course follows the five blueprint domains with traffic and log analysis labs and practice exams, in class in Casablanca or Rabat, or as a live virtual classroom. GATech is not a Cisco Learning Partner: this is independent preparation for the official exam.",
          "Several offers can lower the cost: 10% off when you pay at least 4 weeks before the session, 15% for students and recent graduates or for groups of 3 or more from the same company, and 3 interest-free instalments for individuals. Discounts cannot be combined. Request a quote to see the next dates.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      { q: "CyberOps Associate et CCNA Cybersecurity, est-ce la même certification ?", a: "Oui. Cisco a renommé CyberOps Associate en CCNA Cybersecurity en février 2026. Le code d'examen 200-201 est inchangé et les titulaires existants sont reconnus sous le nouveau nom." },
      { q: "Combien de questions comporte l'examen 200-201 ?", a: "Cisco ne publie pas le nombre exact de questions ni le score de réussite. L'examen dure environ 120 minutes et mêle QCM, glisser-déposer et scénarios d'analyse." },
      { q: "Peut-on passer l'examen 200-201 depuis le Maroc ?", a: "Oui. L'examen est administré par Pearson VUE, en ligne sous surveillance (OnVUE) ou dans un centre de test agréé. Il est proposé en anglais." },
      { q: "Faut-il le CCNA pour passer le CCNA Cybersecurity ?", a: "Non, il n'y a aucun prérequis formel. De bonnes bases en réseaux TCP/IP sont toutefois fortement recommandées pour réussir l'analyse de trafic." },
      { q: "Combien de temps la certification reste-t-elle valable ?", a: "Elle est valable 3 ans. Vous la renouvelez en repassant un examen ou en cumulant des crédits de formation continue Cisco (Continuing Education)." },
    ],
    ar: [
      { q: "هل CyberOps Associate وCCNA Cybersecurity نفس الشهادة؟", a: "نعم. أعادت Cisco تسمية CyberOps Associate إلى CCNA Cybersecurity في فبراير 2026، مع الإبقاء على رمز الامتحان 200-201، ويُعترف بحاملي الشهادة الحاليين تحت الاسم الجديد." },
      { q: "كم عدد أسئلة امتحان 200-201؟", a: "لا تنشر Cisco العدد الدقيق للأسئلة ولا درجة النجاح. يستغرق الامتحان حوالي 120 دقيقة ويجمع بين أسئلة متعددة الاختيارات والسحب والإفلات وسيناريوهات التحليل." },
      { q: "هل يمكن اجتياز امتحان 200-201 من المغرب؟", a: "نعم. يُجرى الامتحان عبر Pearson VUE، عن بعد تحت المراقبة (OnVUE) أو في مركز اختبار معتمد، وهو متاح باللغة الإنجليزية." },
      { q: "هل يجب الحصول على CCNA قبل CCNA Cybersecurity؟", a: "لا، لا يوجد أي شرط مسبق رسمي، لكن الأسس الجيدة في شبكات TCP/IP موصى بها بقوة لإتقان تحليل حركة الشبكة." },
      { q: "ما مدة صلاحية الشهادة؟", a: "الشهادة صالحة لمدة 3 سنوات، وتجدد باجتياز امتحان أو بتجميع أرصدة التكوين المستمر لدى Cisco." },
    ],
    en: [
      { q: "Are CyberOps Associate and CCNA Cybersecurity the same certification?", a: "Yes. Cisco renamed CyberOps Associate to CCNA Cybersecurity in February 2026. The 200-201 exam code is unchanged and existing holders are recognised under the new name." },
      { q: "How many questions are on the 200-201 exam?", a: "Cisco does not publish the exact number of questions or the passing score. The exam lasts about 120 minutes and mixes multiple choice, drag-and-drop and analysis scenarios." },
      { q: "Can I take the 200-201 exam from Morocco?", a: "Yes. The exam is delivered by Pearson VUE, online with remote proctoring (OnVUE) or at an authorised test centre. It is offered in English." },
      { q: "Do I need CCNA before CCNA Cybersecurity?", a: "No, there are no formal prerequisites. Solid TCP/IP networking basics are nonetheless strongly recommended to handle traffic analysis." },
      { q: "How long is the certification valid?", a: "It is valid for 3 years. You renew it by passing an exam or earning Cisco Continuing Education credits." },
    ],
  },
};

export default guide;
