import type { Guide } from "../types";

const guide: Guide = {
  slug: "iso-27001-maroc",
  category: "conformite",
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 7,
  relatedCerts: ["iso-27001-lead-implementer", "cism", "cissp"],
  title: {
    fr: "Certification ISO 27001 au Maroc : guide entreprises et professionnels",
    ar: "الإشهاد ISO 27001 في المغرب: دليل للمقاولات والمهنيين",
    en: "ISO 27001 Certification in Morocco: A Guide for Companies and Pros",
  },
  seoTitle: {
    fr: "Certification ISO 27001 Maroc : entreprises et experts",
    ar: "الإشهاد ISO 27001 في المغرب: دليل المقاولات والمهنيين",
    en: "ISO 27001 Certification in Morocco: Complete Guide",
  },
  seoDescription: {
    fr: "ISO 27001 au Maroc : certifier son SMSI ou devenir Lead Implementer, nouveautés de la version 2022, étapes clés et enjeux. Lisez notre guide pratique.",
    ar: "ISO 27001 في المغرب: إشهاد نظام إدارة أمن المعلومات أو الحصول على شهادة Lead Implementer، ومستجدات نسخة 2022 ومراحل التطبيق. اكتشف دليلنا العملي الآن.",
    en: "ISO 27001 in Morocco: certifying your ISMS vs becoming a Lead Implementer, what changed in 2022, key steps and benefits. Read our practical guide.",
  },
  excerpt: {
    fr: "ISO 27001 désigne à la fois la certification d'un système de management de la sécurité de l'information et des certifications individuelles comme Lead Implementer. Ce guide clarifie la différence, résume la version 2022 et détaille les étapes pour une entreprise marocaine.",
    ar: "يشير ISO 27001 في الوقت نفسه إلى إشهاد نظام لإدارة أمن المعلومات وإلى شهادات فردية مثل Lead Implementer. يوضح هذا الدليل الفرق بينهما، ويلخص نسخة 2022، ويفصّل المراحل بالنسبة لمقاولة مغربية.",
    en: "ISO 27001 refers both to certifying an information security management system and to individual credentials such as Lead Implementer. This guide clears up the difference, sums up the 2022 edition and walks through the steps for a Moroccan company.",
  },
  sections: {
    fr: [
      {
        heading: "Certification ISO 27001 : de quoi parle-t-on exactement ?",
        paragraphs: [
          "L'ISO/IEC 27001 est la norme internationale qui définit les exigences d'un système de management de la sécurité de l'information (SMSI). Elle ne prescrit pas une liste d'outils à installer : elle impose une méthode pour identifier les risques pesant sur l'information, choisir les mesures adaptées, les appliquer, les mesurer et les améliorer en continu.",
          "Lorsqu'on parle de « certification ISO 27001 », deux réalités différentes se cachent derrière la même expression, et la confusion est fréquente dans les appels d'offres comme dans les offres d'emploi au Maroc :",
        ],
        list: [
          "La certification d'une organisation : c'est le SMSI d'une entreprise, sur un périmètre défini, qui est audité et certifié conforme à la norme.",
          "La certification d'une personne : c'est un professionnel qui démontre sa maîtrise de la norme, par exemple en tant que ISO/IEC 27001 Lead Implementer ou Lead Auditor.",
        ],
      },
      {
        heading: "Certifier son entreprise : le rôle de l'organisme accrédité",
        paragraphs: [
          "Une entreprise ne peut pas s'auto-déclarer certifiée. La certification est délivrée par un organisme de certification indépendant, idéalement accrédité par un organisme d'accréditation reconnu (membre de l'IAF, par exemple), ce qui garantit que le certificat sera reconnu par les clients étrangers. Avant de choisir un certificateur, vérifiez son accréditation et son périmètre.",
          "L'audit initial se déroule en deux étapes : une revue documentaire et de préparation (étape 1), puis un audit sur site de la mise en œuvre réelle (étape 2). Le certificat est valable trois ans, avec des audits de surveillance annuels, puis un audit de renouvellement. Le certificat mentionne un périmètre précis : un site, une activité, un service. Une entreprise peut donc commencer par le périmètre le plus exposé, par exemple son centre de services offshore ou son hébergement.",
        ],
      },
      {
        heading: "Se certifier soi-même : Lead Implementer ou Lead Auditor ?",
        paragraphs: [
          "Pour les professionnels, les certifications individuelles les plus répandues sont proposées par des organismes comme PECB. Elles ne certifient pas une entreprise, mais attestent qu'une personne sait mettre en œuvre ou auditer un SMSI.",
          "Les deux profils sont complémentaires, mais ils ne se recrutent pas pour les mêmes missions. Une entreprise qui démarre son projet a d'abord besoin d'un Lead Implementer ; un consultant qui vise les missions d'audit, ou un auditeur interne, s'orientera vers le Lead Auditor.",
        ],
        list: [
          "ISO/IEC 27001 Lead Implementer : concevoir et déployer un SMSI, conduire l'analyse de risques, rédiger la déclaration d'applicabilité, préparer l'organisation à l'audit de certification.",
          "ISO/IEC 27001 Lead Auditor : planifier et conduire des audits internes ou de certification, selon les principes de l'ISO 19011 et de l'ISO/IEC 17021-1.",
          "En pratique, un RSSI, un consultant GRC ou un chef de projet conformité tire le plus de valeur du Lead Implementer.",
        ],
      },
      {
        heading: "ISO/IEC 27001:2022 : ce qui a changé",
        paragraphs: [
          "La version 2022 de la norme a remplacé l'édition 2013. Les clauses 4 à 10, qui décrivent le système de management, ont été légèrement ajustées (notamment sur la planification des changements et le suivi des processus). Le changement le plus visible concerne l'Annexe A, alignée sur l'ISO/IEC 27002:2022 : les 114 mesures réparties en 14 domaines ont été regroupées en 93 mesures organisées en 4 thèmes.",
          "Onze mesures sont nouvelles, dont la veille sur les menaces (threat intelligence), la sécurité des services cloud, la préparation des TIC à la continuité d'activité, la gestion des configurations, la suppression des informations, le masquage des données, la prévention des fuites de données, la surveillance des activités, le filtrage web et le codage sécurisé. Un amendement publié en 2024 a par ailleurs ajouté la prise en compte du changement climatique dans l'analyse du contexte. La période de transition depuis la version 2013 est terminée : les certificats en cours de validité se réfèrent désormais à l'édition 2022.",
        ],
        list: [
          "Mesures organisationnelles : 37",
          "Mesures liées aux personnes : 8",
          "Mesures physiques : 14",
          "Mesures technologiques : 34",
        ],
      },
      {
        heading: "Les étapes de mise en œuvre d'un SMSI",
        paragraphs: [
          "La durée d'un projet varie selon la taille de l'organisation, la maturité existante et le périmètre retenu. Les étapes, elles, restent les mêmes, et l'ordre compte : sauter l'analyse de contexte ou l'appréciation des risques fragilise tout le reste.",
          "Les écueils les plus fréquents sont connus : un périmètre trop large dès le départ, une analyse de risques copiée d'un modèle générique, une documentation produite pour l'auditeur mais ignorée par les équipes, ou une direction qui se désengage après le lancement. Un SMSI réussi est un système qui vit : les risques sont réévalués lorsque l'activité change, les incidents alimentent les actions correctives et les indicateurs sont réellement suivis en comité. Les étapes clés :",
        ],
        list: [
          "Obtenir l'engagement de la direction et définir le périmètre du SMSI",
          "Analyser le contexte, les parties intéressées et les exigences légales (loi 05-20, loi 09-08, exigences sectorielles)",
          "Rédiger la politique de sécurité et définir les rôles et responsabilités",
          "Conduire l'appréciation des risques et choisir le traitement de chaque risque",
          "Établir la déclaration d'applicabilité (SoA) en justifiant chaque mesure de l'Annexe A retenue ou exclue",
          "Déployer les mesures, documenter, sensibiliser et former les équipes",
          "Mesurer l'efficacité par des indicateurs, réaliser l'audit interne et la revue de direction",
          "Traiter les non-conformités, puis engager l'audit de certification",
        ],
      },
      {
        heading: "Pourquoi les entreprises marocaines visent l'ISO 27001",
        paragraphs: [
          "Au Maroc, la décision de se certifier est rarement purement interne. Elle répond le plus souvent à une demande du marché ou de l'environnement réglementaire.",
          "Ce qui revient le plus souvent dans les projets :",
        ],
        list: [
          "Clients de l'offshoring et du nearshoring : les donneurs d'ordre européens demandent fréquemment un certificat ISO 27001 ou des garanties équivalentes avant de confier des données ou des processus.",
          "Secteur bancaire et financier : les banques et leurs prestataires évoluent dans un cadre de contrôle exigeant, et la norme fournit un langage commun avec les auditeurs.",
          "Marchés publics et grands comptes : certains appels d'offres valorisent ou exigent une certification de sécurité.",
          "Alignement avec la loi 05-20 et la DNSSI : la DNSSI s'inspirant de l'ISO/IEC 27002, un SMSI ISO 27001 constitue une base solide pour les entités concernées par la loi.",
          "Protection des données personnelles : le SMSI aide à démontrer la sécurité des traitements exigée par la loi 09-08.",
        ],
      },
      {
        heading: "Comment la certification Lead Implementer accélère le projet",
        paragraphs: [
          "Faire certifier son SMSI sans personne capable de le piloter en interne revient souvent à dépendre entièrement d'un consultant externe. Former un ou deux collaborateurs au Lead Implementer permet de garder la maîtrise du projet, de dialoguer d'égal à égal avec l'organisme de certification et de faire vivre le système après l'audit. Pour un RSSI qui pilote le programme plus largement, le CISM ou le CISSP complètent bien cette compétence.",
          "GATech propose au Maroc la formation PECB ISO/IEC 27001 Lead Implementer sur 5 jours (35 heures), basée sur la version 2022, examen PECB inclus, dès 17 900 MAD, en présentiel à Casablanca, à Rabat ou en ligne. Les frais annuels de maintien de la certification PECB ne sont pas inclus.",
        ],
      },
    ],
    ar: [
      {
        heading: "الإشهاد ISO 27001: عن ماذا نتحدث بالضبط؟",
        paragraphs: [
          "معيار ISO/IEC 27001 هو المعيار الدولي الذي يحدد متطلبات نظام إدارة أمن المعلومات (ISMS). ولا يفرض قائمة أدوات يجب تثبيتها، بل يفرض منهجية لتحديد المخاطر التي تهدد المعلومات، واختيار التدابير الملائمة، وتطبيقها، وقياسها، وتحسينها بشكل مستمر.",
          "وعندما نتحدث عن «الإشهاد ISO 27001»، فإن العبارة نفسها تخفي واقعين مختلفين، والخلط بينهما شائع في طلبات العروض كما في إعلانات التوظيف بالمغرب:",
        ],
        list: [
          "إشهاد المؤسسة: يتم افتحاص نظام إدارة أمن المعلومات لمقاولة ما، ضمن نطاق محدد، والإشهاد بمطابقته للمعيار.",
          "إشهاد الشخص: يُثبت مهني تمكّنه من المعيار، مثلًا بصفته ISO/IEC 27001 Lead Implementer أو Lead Auditor.",
        ],
      },
      {
        heading: "إشهاد مقاولتك: دور الهيئة المعتمدة",
        paragraphs: [
          "لا يمكن لأي مقاولة أن تعلن نفسها مُشهَدة. فالإشهاد تمنحه هيئة إشهاد مستقلة، يُفضَّل أن تكون معتمدة من طرف هيئة اعتماد معترف بها (عضو في IAF مثلًا)، مما يضمن الاعتراف بالشهادة لدى الزبناء الأجانب. وقبل اختيار هيئة الإشهاد، تحقق من اعتمادها ومن نطاقه.",
          "يجري الافتحاص الأولي على مرحلتين: مراجعة وثائقية وتقييم للجاهزية (المرحلة 1)، ثم افتحاص ميداني للتطبيق الفعلي (المرحلة 2). وتكون الشهادة صالحة لمدة ثلاث سنوات، مع افتحاصات تتبع سنوية، ثم افتحاص للتجديد. وتحدد الشهادة نطاقًا دقيقًا: موقعًا أو نشاطًا أو خدمة. لذلك يمكن للمقاولة أن تبدأ بالنطاق الأكثر عرضة للمخاطر، مثل مركز خدمات الأوفشورينغ أو خدمات الإيواء.",
        ],
      },
      {
        heading: "الحصول على شهادة فردية: Lead Implementer أم Lead Auditor؟",
        paragraphs: [
          "بالنسبة للمهنيين، تقدم هيئات مثل PECB الشهادات الفردية الأكثر انتشارًا. وهي لا تُشهِد مقاولة، بل تُثبت أن الشخص قادر على تطبيق نظام لإدارة أمن المعلومات أو افتحاصه.",
          "الملفان متكاملان، لكنهما لا يُطلبان للمهام نفسها. فالمقاولة التي تبدأ مشروعها تحتاج أولًا إلى Lead Implementer، أما المستشار الذي يستهدف مهام الافتحاص، أو المفتحص الداخلي، فيتجه نحو Lead Auditor.",
        ],
        list: [
          "ISO/IEC 27001 Lead Implementer: تصميم نظام إدارة أمن المعلومات ونشره، وإجراء تحليل المخاطر، وصياغة بيان قابلية التطبيق، وإعداد المؤسسة لافتحاص الإشهاد.",
          "ISO/IEC 27001 Lead Auditor: تخطيط الافتحاصات الداخلية أو افتحاصات الإشهاد وإجراؤها، وفق مبادئ ISO 19011 وISO/IEC 17021-1.",
          "عمليًا، يستفيد مسؤول أمن نظم المعلومات أو مستشار GRC أو رئيس مشروع الامتثال أكثر من شهادة Lead Implementer.",
        ],
      },
      {
        heading: "ISO/IEC 27001:2022: ما الذي تغيّر؟",
        paragraphs: [
          "حلّت نسخة 2022 من المعيار محل نسخة 2013. وقد عُدّلت البنود من 4 إلى 10، التي تصف نظام الإدارة، تعديلًا طفيفًا (خصوصًا ما يتعلق بتخطيط التغييرات وتتبع العمليات). أما التغيير الأبرز فيخص الملحق A الذي أصبح منسجمًا مع ISO/IEC 27002:2022: إذ جُمعت التدابير الـ 114 الموزعة على 14 مجالًا في 93 تدبيرًا منظمة في 4 محاور.",
          "ومن بينها 11 تدبيرًا جديدًا، منها رصد التهديدات (threat intelligence)، وأمن الخدمات السحابية، وجاهزية تكنولوجيا المعلومات لاستمرارية النشاط، وتدبير الإعدادات، وحذف المعلومات، وإخفاء المعطيات، ومنع تسرب المعطيات، ومراقبة الأنشطة، وتصفية الويب، والبرمجة الآمنة. كما أضاف تعديل صدر سنة 2024 أخذ التغير المناخي بعين الاعتبار عند تحليل السياق. وقد انتهت الفترة الانتقالية من نسخة 2013، وأصبحت الشهادات السارية تستند الآن إلى نسخة 2022.",
        ],
        list: [
          "تدابير تنظيمية: 37",
          "تدابير متعلقة بالأشخاص: 8",
          "تدابير مادية: 14",
          "تدابير تكنولوجية: 34",
        ],
      },
      {
        heading: "مراحل إرساء نظام لإدارة أمن المعلومات",
        paragraphs: [
          "تختلف مدة المشروع حسب حجم المؤسسة ومستوى نضجها والنطاق المختار، غير أن المراحل تبقى هي نفسها، وترتيبها مهم: فإغفال تحليل السياق أو تقييم المخاطر يُضعف كل ما يليه.",
          "أما الأخطاء الأكثر شيوعًا فمعروفة: نطاق واسع جدًا منذ البداية، وتحليل مخاطر منسوخ من نموذج عام، ووثائق تُعَدّ من أجل المفتحص لكن الفرق تتجاهلها، أو إدارة تفقد اهتمامها بعد انطلاق المشروع. فالنظام الناجح نظام حي: يُعاد تقييم المخاطر كلما تغير النشاط، وتُغذّي الحوادث الإجراءات التصحيحية، وتُتابَع المؤشرات فعليًا داخل لجنة مختصة. وفي ما يلي المراحل الأساسية:",
        ],
        list: [
          "الحصول على التزام الإدارة العليا وتحديد نطاق النظام",
          "تحليل السياق والأطراف المعنية والمتطلبات القانونية (القانون 05-20، القانون 09-08، المتطلبات القطاعية)",
          "صياغة السياسة الأمنية وتحديد الأدوار والمسؤوليات",
          "إجراء تقييم المخاطر واختيار طريقة معالجة كل خطر",
          "إعداد بيان قابلية التطبيق (SoA) مع تبرير كل تدبير من الملحق A تم اعتماده أو استبعاده",
          "تنفيذ التدابير والتوثيق وتحسيس الفرق وتكوينها",
          "قياس الفعالية عبر مؤشرات، وإجراء الافتحاص الداخلي ومراجعة الإدارة",
          "معالجة حالات عدم المطابقة، ثم الانتقال إلى افتحاص الإشهاد",
        ],
      },
      {
        heading: "لماذا تسعى المقاولات المغربية إلى ISO 27001؟",
        paragraphs: [
          "في المغرب، نادرًا ما يكون قرار الإشهاد داخليًا محضًا، بل يستجيب في الغالب لطلب السوق أو لمتطلبات الإطار التنظيمي.",
          "وأكثر الدوافع تكرارًا في المشاريع:",
        ],
        list: [
          "زبناء الأوفشورينغ والنيرشورينغ: كثيرًا ما يطلب الزبناء الأوروبيون شهادة ISO 27001 أو ضمانات مماثلة قبل تفويض معطيات أو عمليات.",
          "القطاع البنكي والمالي: تعمل الأبناك ومزودوها في إطار رقابي صارم، ويوفر المعيار لغة مشتركة مع المفتحصين.",
          "الصفقات العمومية والزبناء الكبار: بعض طلبات العروض تُثمّن أو تشترط إشهادًا أمنيًا.",
          "الانسجام مع القانون 05-20 والتوجيه DNSSI: بما أن DNSSI مستوحى من ISO/IEC 27002، فإن نظامًا وفق ISO 27001 يشكل أساسًا متينًا للهيئات الخاضعة للقانون.",
          "حماية المعطيات الشخصية: يساعد النظام على إثبات أمن المعالجات الذي يفرضه القانون 09-08.",
        ],
      },
      {
        heading: "كيف تُسرّع شهادة Lead Implementer المشروع",
        paragraphs: [
          "إن السعي إلى إشهاد نظام إدارة أمن المعلومات دون وجود شخص قادر على قيادته داخليًا يعني غالبًا الاعتماد الكلي على مستشار خارجي. أما تكوين متعاون أو اثنين في Lead Implementer فيتيح الحفاظ على التحكم في المشروع، والتحاور مع هيئة الإشهاد على قدم المساواة، وضمان استمرارية النظام بعد الافتحاص. وبالنسبة لمسؤول أمن نظم المعلومات الذي يقود البرنامج بشكل أوسع، تشكل CISM أو CISSP تكملة جيدة لهذه الكفاءة.",
          "تقترح GATech في المغرب تكوين PECB ISO/IEC 27001 Lead Implementer على مدى 5 أيام (35 ساعة)، وفق نسخة 2022، مع امتحان PECB، ابتداءً من 17900 درهم، حضوريًا في الدار البيضاء أو الرباط أو عن بُعد. ولا تشمل هذه التكلفة رسوم الصيانة السنوية لشهادة PECB.",
        ],
      },
    ],
    en: [
      {
        heading: "ISO 27001 certification: what exactly are we talking about?",
        paragraphs: [
          "ISO/IEC 27001 is the international standard that sets the requirements for an information security management system (ISMS). It does not prescribe a list of tools to install: it requires a method for identifying risks to information, choosing suitable controls, applying them, measuring them and continually improving them.",
          "The phrase \"ISO 27001 certification\" covers two different things, and they are often confused in Moroccan tenders and job ads alike:",
        ],
        list: [
          "Certifying an organization: a company's ISMS, for a defined scope, is audited and certified as conforming to the standard.",
          "Certifying a person: a professional demonstrates mastery of the standard, for example as an ISO/IEC 27001 Lead Implementer or Lead Auditor.",
        ],
      },
      {
        heading: "Certifying your company: the role of the accredited body",
        paragraphs: [
          "A company cannot declare itself certified. Certification is issued by an independent certification body, ideally accredited by a recognized accreditation body (an IAF member, for instance), which ensures the certificate will be recognized by foreign clients. Before choosing a certifier, check its accreditation and scope.",
          "The initial audit has two stages: a documentation and readiness review (stage 1), then an on-site audit of actual implementation (stage 2). The certificate is valid for three years, with annual surveillance audits followed by a recertification audit. The certificate states a precise scope: a site, an activity, a service. A company can therefore start with its most exposed scope, such as its offshore delivery centre or its hosting.",
        ],
      },
      {
        heading: "Getting certified yourself: Lead Implementer or Lead Auditor?",
        paragraphs: [
          "For professionals, the most widespread individual certifications are offered by bodies such as PECB. They do not certify a company; they attest that a person can implement or audit an ISMS.",
          "The two profiles complement each other but are not hired for the same work. A company starting its project first needs a Lead Implementer; a consultant targeting audit engagements, or an internal auditor, should go for Lead Auditor.",
        ],
        list: [
          "ISO/IEC 27001 Lead Implementer: design and deploy an ISMS, run the risk assessment, write the Statement of Applicability, prepare the organization for the certification audit.",
          "ISO/IEC 27001 Lead Auditor: plan and conduct internal or certification audits, following the principles of ISO 19011 and ISO/IEC 17021-1.",
          "In practice, a CISO, GRC consultant or compliance project manager gets the most value from Lead Implementer.",
        ],
      },
      {
        heading: "ISO/IEC 27001:2022: what changed",
        paragraphs: [
          "The 2022 edition replaced the 2013 one. Clauses 4 to 10, which describe the management system, were slightly adjusted (notably on planning changes and monitoring processes). The most visible change is in Annex A, now aligned with ISO/IEC 27002:2022: the 114 controls spread across 14 domains were consolidated into 93 controls organized in 4 themes.",
          "Eleven controls are new, including threat intelligence, information security for cloud services, ICT readiness for business continuity, configuration management, information deletion, data masking, data leakage prevention, monitoring activities, web filtering and secure coding. An amendment published in 2024 also added climate change considerations to the analysis of context. The transition period from the 2013 edition is over: valid certificates now refer to the 2022 edition.",
        ],
        list: [
          "Organizational controls: 37",
          "People controls: 8",
          "Physical controls: 14",
          "Technological controls: 34",
        ],
      },
      {
        heading: "The steps to implement an ISMS",
        paragraphs: [
          "Project length depends on the size of the organization, its existing maturity and the chosen scope. The steps, however, stay the same, and order matters: skipping the context analysis or risk assessment weakens everything that follows.",
          "The usual pitfalls are well known: a scope that is too broad from day one, a risk assessment copied from a generic template, documentation written for the auditor but ignored by staff, or management losing interest after kickoff. A successful ISMS is a living system: risks are reassessed when the business changes, incidents feed corrective actions and metrics are genuinely reviewed by a committee. The key steps:",
        ],
        list: [
          "Secure management commitment and define the ISMS scope",
          "Analyze the context, interested parties and legal requirements (Law 05-20, Law 09-08, sector rules)",
          "Write the security policy and define roles and responsibilities",
          "Carry out the risk assessment and choose how to treat each risk",
          "Produce the Statement of Applicability (SoA), justifying each Annex A control included or excluded",
          "Implement controls, document, raise awareness and train staff",
          "Measure effectiveness with metrics, run the internal audit and management review",
          "Address nonconformities, then go for the certification audit",
        ],
      },
      {
        heading: "Why Moroccan companies pursue ISO 27001",
        paragraphs: [
          "In Morocco, the decision to get certified is rarely purely internal. It usually responds to pressure from the market or the regulatory environment.",
          "The drivers that come up most often:",
        ],
        list: [
          "Offshoring and nearshoring clients: European customers frequently ask for an ISO 27001 certificate or equivalent assurance before entrusting data or processes.",
          "Banking and finance: banks and their suppliers operate under demanding oversight, and the standard gives them a common language with auditors.",
          "Public tenders and large accounts: some tenders reward or require a security certification.",
          "Alignment with Law 05-20 and the DNSSI: since the DNSSI draws on ISO/IEC 27002, an ISO 27001 ISMS is a solid foundation for entities covered by the law.",
          "Personal data protection: the ISMS helps demonstrate the processing security required by Law 09-08.",
        ],
      },
      {
        heading: "How Lead Implementer certification speeds up the project",
        paragraphs: [
          "Certifying an ISMS without anyone in-house able to run it often means depending entirely on an outside consultant. Training one or two staff members as Lead Implementers keeps the project under your control, lets you deal with the certification body as an equal and keeps the system alive after the audit. For a CISO running the broader programme, CISM or CISSP complement this skill set well.",
          "GATech offers the PECB ISO/IEC 27001 Lead Implementer course in Morocco over 5 days (35 hours), based on the 2022 edition, PECB exam included, from 17,900 MAD, in class in Casablanca or Rabat, or online. PECB annual certification maintenance fees are not included.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      {
        q: "Une personne peut-elle être « certifiée ISO 27001 » ?",
        a: "Au sens strict, seule une organisation (son SMSI) est certifiée ISO 27001. Une personne obtient une certification de compétence sur la norme, comme ISO/IEC 27001 Lead Implementer ou Lead Auditor, délivrée par un organisme de certification des personnes comme PECB.",
      },
      {
        q: "Combien de temps faut-il pour certifier une entreprise ISO 27001 au Maroc ?",
        a: "Cela dépend de la taille de l'organisation, de sa maturité et du périmètre choisi. Un périmètre restreint dans une organisation déjà structurée avance beaucoup plus vite qu'un déploiement à l'échelle d'un groupe. Il faut aussi prévoir le temps de faire fonctionner le SMSI (indicateurs, audit interne, revue de direction) avant l'audit de certification.",
      },
      {
        q: "Combien de mesures compte l'Annexe A de l'ISO 27001:2022 ?",
        a: "L'Annexe A de l'ISO/IEC 27001:2022 compte 93 mesures réparties en 4 thèmes : organisationnelles (37), liées aux personnes (8), physiques (14) et technologiques (34). Elle remplace les 114 mesures en 14 domaines de la version 2013.",
      },
      {
        q: "Faut-il choisir Lead Implementer ou Lead Auditor ?",
        a: "Choisissez Lead Implementer si vous devez construire ou piloter un SMSI dans votre organisation ou chez des clients. Choisissez Lead Auditor si votre rôle principal est d'auditer des SMSI, en interne ou pour un organisme de certification. Beaucoup de professionnels commencent par le Lead Implementer.",
      },
      {
        q: "Combien coûte la formation ISO 27001 Lead Implementer chez GATech ?",
        a: "La formation PECB ISO/IEC 27001 Lead Implementer démarre à 17 900 MAD pour 5 jours (35 heures), supports, étude de cas et examen PECB inclus. Les frais annuels de maintien de la certification PECB, dus une fois le certificat obtenu, ne sont pas compris.",
      },
    ],
    ar: [
      {
        q: "هل يمكن لشخص أن يكون «مُشهَدًا ISO 27001»؟",
        a: "بالمعنى الدقيق، المؤسسة وحدها (أي نظامها لإدارة أمن المعلومات) هي التي تحصل على الإشهاد ISO 27001. أما الشخص فيحصل على شهادة كفاءة في المعيار، مثل ISO/IEC 27001 Lead Implementer أو Lead Auditor، تمنحها هيئة لإشهاد الأشخاص مثل PECB.",
      },
      {
        q: "كم من الوقت يستغرق إشهاد مقاولة ISO 27001 في المغرب؟",
        a: "يتوقف ذلك على حجم المؤسسة ونضجها والنطاق المختار. فنطاق محدود داخل مؤسسة منظمة أصلًا يتقدم أسرع بكثير من نشر النظام على مستوى مجموعة كاملة. كما يجب تخصيص وقت لتشغيل النظام (المؤشرات، الافتحاص الداخلي، مراجعة الإدارة) قبل افتحاص الإشهاد.",
      },
      {
        q: "كم عدد تدابير الملحق A في ISO 27001:2022؟",
        a: "يضم الملحق A من ISO/IEC 27001:2022 ما مجموعه 93 تدبيرًا موزعة على 4 محاور: تنظيمية (37)، ومتعلقة بالأشخاص (8)، ومادية (14)، وتكنولوجية (34). وهو يحل محل التدابير الـ 114 الموزعة على 14 مجالًا في نسخة 2013.",
      },
      {
        q: "هل أختار Lead Implementer أم Lead Auditor؟",
        a: "اختر Lead Implementer إذا كان عليك بناء أو قيادة نظام لإدارة أمن المعلومات داخل مؤسستك أو لدى الزبناء. واختر Lead Auditor إذا كان دورك الأساسي هو افتحاص هذه الأنظمة، داخليًا أو لحساب هيئة إشهاد. ويبدأ كثير من المهنيين بشهادة Lead Implementer.",
      },
      {
        q: "كم تبلغ تكلفة تكوين ISO 27001 Lead Implementer لدى GATech؟",
        a: "يبدأ سعر تكوين PECB ISO/IEC 27001 Lead Implementer من 17900 درهم لمدة 5 أيام (35 ساعة)، ويشمل الدعامات ودراسة الحالة وامتحان PECB. أما رسوم الصيانة السنوية لشهادة PECB، المستحقة بعد الحصول عليها، فغير مشمولة.",
      },
    ],
    en: [
      {
        q: "Can a person be \"ISO 27001 certified\"?",
        a: "Strictly speaking, only an organization (its ISMS) is certified to ISO 27001. A person earns a competence certification on the standard, such as ISO/IEC 27001 Lead Implementer or Lead Auditor, issued by a personnel certification body such as PECB.",
      },
      {
        q: "How long does it take to certify a company to ISO 27001 in Morocco?",
        a: "It depends on the organization's size, maturity and chosen scope. A narrow scope in an already structured organization moves much faster than a group-wide rollout. You also need time to run the ISMS (metrics, internal audit, management review) before the certification audit.",
      },
      {
        q: "How many controls are in Annex A of ISO 27001:2022?",
        a: "Annex A of ISO/IEC 27001:2022 contains 93 controls in 4 themes: organizational (37), people (8), physical (14) and technological (34). It replaces the 114 controls in 14 domains of the 2013 edition.",
      },
      {
        q: "Should I choose Lead Implementer or Lead Auditor?",
        a: "Choose Lead Implementer if you need to build or run an ISMS in your organization or for clients. Choose Lead Auditor if your main role is auditing ISMSs, internally or for a certification body. Many professionals start with Lead Implementer.",
      },
      {
        q: "How much does ISO 27001 Lead Implementer training cost at GATech?",
        a: "The PECB ISO/IEC 27001 Lead Implementer course starts at 17,900 MAD for 5 days (35 hours), including materials, the case study and the PECB exam. PECB annual certification maintenance fees, due once you hold the certificate, are not included.",
      },
    ],
  },
};

export default guide;
