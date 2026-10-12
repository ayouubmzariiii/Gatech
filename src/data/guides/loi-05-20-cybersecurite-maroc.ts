import type { Guide } from "../types";

const guide: Guide = {
  slug: "loi-05-20-cybersecurite-maroc",
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 7,
  relatedCerts: [
    "iso-27001-lead-implementer",
    "cism",
    "cissp",
    "cnd-v3",
    "comptia-cysa-plus",
  ],
  title: {
    fr: "Loi 05-20 sur la cybersécurité au Maroc : obligations et compétences",
    ar: "القانون 05-20 المتعلق بالأمن السيبراني في المغرب: الالتزامات والكفاءات",
    en: "Morocco's Law 05-20 on Cybersecurity: Obligations and Skills",
  },
  seoTitle: {
    fr: "Loi 05-20 cybersécurité Maroc : obligations et DGSSI",
    ar: "القانون 05-20 للأمن السيبراني بالمغرب: الالتزامات",
    en: "Morocco Law 05-20 on Cybersecurity: Obligations Guide",
  },
  seoDescription: {
    fr: "Loi 05-20, décret d'application, DNSSI, rôle de la DGSSI et du maCERT : obligations des entités concernées et compétences utiles. Lisez notre guide complet.",
    ar: "القانون 05-20 ومرسومه التطبيقي والتوجيه الوطني DNSSI ودور DGSSI وmaCERT: التزامات الهيئات المعنية والكفاءات اللازمة للامتثال. اطلع على دليلنا الكامل الآن.",
    en: "Law 05-20, its implementing decree, the DNSSI, the role of DGSSI and maCERT: what affected entities must do and which skills help. Read our complete guide now.",
  },
  excerpt: {
    fr: "Promulguée en 2020, la loi 05-20 fixe le cadre de la cybersécurité au Maroc pour les administrations, les établissements publics, les infrastructures d'importance vitale et certains opérateurs. Ce guide résume qui est concerné, ce qui est attendu et quelles compétences mobiliser pour s'y conformer.",
    ar: "يضع القانون 05-20، الصادر سنة 2020، الإطار القانوني للأمن السيبراني في المغرب بالنسبة للإدارات والمؤسسات العمومية والبنيات التحتية ذات الأهمية الحيوية وبعض المتعهدين. يلخص هذا الدليل الجهات المعنية والالتزامات المطلوبة والكفاءات اللازمة للامتثال.",
    en: "Enacted in 2020, Law 05-20 sets Morocco's cybersecurity framework for government bodies, public institutions, critical infrastructure and certain operators. This guide sums up who is affected, what is expected and which skills help you comply.",
  },
  sections: {
    fr: [
      {
        heading: "Qu'est-ce que la loi 05-20 relative à la cybersécurité ?",
        paragraphs: [
          "La loi n° 05-20 relative à la cybersécurité a été promulguée en juillet 2020. Elle est le premier texte législatif marocain consacré spécifiquement à la sécurité des systèmes d'information. Avant elle, l'essentiel des règles reposait sur des textes réglementaires et sur des référentiels comme la DNSSI. La loi donne désormais une base légale à ces exigences, précise qui doit les appliquer et confie à une autorité nationale le pouvoir d'en contrôler le respect.",
          "Elle a été complétée par un décret d'application (décret n° 2-21-406, adopté en 2021), qui détaille notamment les modalités de mise en œuvre pour les différentes catégories d'entités, ainsi que par des décisions et référentiels publiés par l'autorité nationale. En pratique, il faut donc lire la loi avec son décret et avec les documents techniques de la DGSSI : c'est cet ensemble qui définit ce qu'une organisation doit concrètement mettre en place.",
          "L'esprit du texte est simple : la cybersécurité n'est plus un sujet purement technique laissé à la discrétion de chaque DSI, mais une obligation de gouvernance, avec des responsabilités identifiées, des mesures minimales, des contrôles et des sanctions en cas de manquement.",
        ],
      },
      {
        heading: "Le rôle de la DGSSI et du maCERT",
        paragraphs: [
          "La Direction Générale de la Sécurité des Systèmes d'Information (DGSSI), rattachée à l'Administration de la Défense nationale, est l'autorité nationale de la cybersécurité visée par la loi. Elle élabore les référentiels, accompagne les entités concernées, qualifie certains prestataires (par exemple les prestataires d'audit de sécurité) et contrôle l'application des obligations.",
          "Le maCERT, centre de veille, de détection et de réponse aux attaques informatiques, est placé au sein de la DGSSI. C'est l'interlocuteur opérationnel en cas d'incident : il publie des bulletins d'alerte sur les vulnérabilités, reçoit les déclarations d'incidents et peut appuyer les organisations touchées. Pour une équipe sécurité marocaine, suivre ses bulletins fait partie de l'hygiène de base.",
        ],
        list: [
          "Élaboration et diffusion des référentiels nationaux, dont la DNSSI",
          "Réception et traitement des déclarations d'incidents de sécurité",
          "Qualification de prestataires de services de cybersécurité",
          "Homologation de certains systèmes d'information sensibles",
          "Contrôle du respect des obligations et sensibilisation",
        ],
      },
      {
        heading: "Quelles entités sont concernées par la loi 05-20 ?",
        paragraphs: [
          "La loi ne s'applique pas uniformément à toutes les entreprises du pays. Elle vise d'abord la sphère publique et les acteurs dont la défaillance aurait un impact important sur la nation. Le niveau d'exigence varie selon la catégorie : les infrastructures d'importance vitale supportent les obligations les plus lourdes.",
          "Les entreprises privées qui ne relèvent d'aucune de ces catégories ne sont pas directement assujetties. Elles sont toutefois souvent concernées indirectement, comme fournisseurs ou sous-traitants d'une entité soumise, qui leur répercute des exigences contractuelles de sécurité. Pour savoir précisément si votre organisation est visée, il faut se référer au texte de la loi, à son décret et, au besoin, interroger la DGSSI.",
        ],
        list: [
          "Administrations de l'État et collectivités territoriales",
          "Établissements et entreprises publics, et autres personnes morales de droit public",
          "Infrastructures d'importance vitale (IIV) disposant de systèmes d'information sensibles, dans des secteurs comme l'énergie, la finance, la santé, les transports ou les télécommunications",
          "Exploitants de réseaux publics de télécommunications et fournisseurs d'accès à Internet",
          "Prestataires de services de cybersécurité et certains prestataires de services numériques ou éditeurs de plateformes",
        ],
      },
      {
        heading: "Les principales obligations à respecter",
        paragraphs: [
          "Les obligations se répartissent en trois familles : la gouvernance (qui est responsable et selon quelle politique), la gestion des risques et des mesures techniques, et la relation avec l'autorité nationale (déclarations, audits, contrôles). Pour les infrastructures d'importance vitale, s'y ajoutent des exigences renforcées, comme l'homologation des systèmes sensibles avant leur mise en service et des règles sur l'hébergement de leurs données sensibles.",
          "Le texte prévoit des sanctions en cas de manquement. Leur montant et leurs conditions dépendant de la nature de l'infraction et de la catégorie d'entité, référez-vous directement à la loi plutôt qu'à des chiffres repris sans source.",
        ],
        list: [
          "Adopter une politique de sécurité des systèmes d'information (PSSI) conforme aux référentiels de la DGSSI",
          "Désigner un responsable de la sécurité des systèmes d'information, doté de l'indépendance et des moyens nécessaires",
          "Inventorier et classifier les actifs informationnels selon leur sensibilité",
          "Conduire une analyse des risques et mettre en place des mesures de protection proportionnées",
          "Déclarer à la DGSSI (maCERT) les incidents de sécurité dès qu'ils sont détectés",
          "Faire réaliser des audits de sécurité, selon le cas par des prestataires qualifiés",
          "Pour les IIV : faire homologuer les systèmes d'information sensibles et respecter les règles d'hébergement des données sensibles",
        ],
      },
      {
        heading: "DNSSI, loi 09-08 et CNDP : comment s'articulent les textes ?",
        paragraphs: [
          "La Directive Nationale de la Sécurité des Systèmes d'Information (DNSSI), publiée par la DGSSI en 2013, est le référentiel de mesures de sécurité de référence pour les administrations et les infrastructures d'importance vitale. Elle s'inspire largement de la norme ISO/IEC 27002 et couvre l'organisation de la sécurité, la gestion des actifs, la sécurité physique, le contrôle d'accès, l'exploitation, la gestion des incidents et la continuité d'activité. Une organisation qui a déjà construit un SMSI selon l'ISO 27001 dispose donc d'une base solide pour démontrer sa conformité à la DNSSI.",
          "La loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel poursuit un autre objectif : protéger les droits des personnes. Elle est contrôlée par la CNDP (Commission nationale de contrôle de la protection des données à caractère personnel) et s'applique à toute organisation, publique ou privée, qui traite des données personnelles. Elle impose notamment des formalités auprès de la CNDP et une obligation de sécuriser les données traitées.",
          "Les deux régimes se complètent : une même fuite de données peut constituer un incident à déclarer au titre de la loi 05-20 et un manquement à la sécurité des données personnelles au regard de la loi 09-08. D'où l'intérêt d'une gouvernance unique, où le RSSI et le responsable de la conformité données personnelles travaillent avec les mêmes registres, la même analyse de risques et la même procédure de gestion des incidents.",
        ],
      },
      {
        heading: "Quelles compétences et certifications pour se mettre en conformité ?",
        paragraphs: [
          "La conformité à la loi 05-20 est avant tout un chantier d'organisation, mais elle exige aussi des compétences techniques pour détecter et traiter les incidents. Peu d'organisations disposent de tous ces profils en interne ; la montée en compétences des équipes existantes est souvent la voie la plus réaliste.",
        ],
        list: [
          "ISO/IEC 27001 Lead Implementer (PECB) : construire un SMSI, conduire l'analyse de risques, rédiger la PSSI et la déclaration d'applicabilité, préparer les audits. C'est la compétence la plus directement liée à la DNSSI.",
          "CISM (ISACA) : piloter le programme de sécurité, rendre compte à la direction et gérer les incidents ; adapté au futur RSSI.",
          "CISSP (ISC2) : vision large couvrant architecture, gestion des risques, sécurité des réseaux et opérations, pour les responsables sécurité expérimentés.",
          "CND v3 (EC-Council) : protéger, détecter et répondre au niveau réseau, pour les administrateurs systèmes et réseaux.",
          "CompTIA CySA+ : analyse des journaux, gestion des vulnérabilités et réponse aux incidents, pour les analystes SOC qui alimentent les déclarations au maCERT.",
        ],
      },
      {
        heading: "Par où commencer, et comment GATech peut vous aider",
        paragraphs: [
          "Une démarche pragmatique consiste à vérifier d'abord si votre organisation relève de la loi et à quelle catégorie, puis à réaliser un état des lieux par rapport à la DNSSI, à désigner un responsable de la sécurité, à formaliser la procédure de déclaration d'incidents et enfin à planifier les audits. Chacune de ces étapes repose sur des personnes formées.",
          "GATech propose au Maroc des formations préparant aux certifications citées, examen officiel inclus : ISO 27001 Lead Implementer dès 19 900 MAD (5 jours), CISM dès 24 900 MAD (4 jours), CISSP dès 27 900 MAD (5 jours), CND v3 dès 18 900 MAD (5 jours) et CySA+ dès 12 900 MAD (5 jours), en présentiel ou en ligne.",
          "Ce guide est fourni à titre d'information générale et ne constitue pas un conseil juridique. Pour une analyse de votre situation, consultez les textes officiels, la DGSSI ou un juriste spécialisé.",
        ],
      },
    ],
    ar: [
      {
        heading: "ما هو القانون 05-20 المتعلق بالأمن السيبراني؟",
        paragraphs: [
          "صدر القانون رقم 05-20 المتعلق بالأمن السيبراني في يوليوز 2020، وهو أول نص تشريعي مغربي مخصص تحديدًا لأمن نظم المعلومات. قبله، كانت معظم القواعد تستند إلى نصوص تنظيمية وإلى مرجعيات مثل التوجيه الوطني DNSSI. أما اليوم فقد منح القانون هذه المتطلبات أساسًا تشريعيًا، وحدد الجهات الملزمة بتطبيقها، وأسند إلى سلطة وطنية صلاحية مراقبة احترامها.",
          "وقد استُكمل القانون بمرسوم تطبيقي (المرسوم رقم 2-21-406 الصادر سنة 2021) يحدد كيفيات التطبيق بالنسبة لمختلف فئات الهيئات، إضافة إلى قرارات ومرجعيات تصدرها السلطة الوطنية. لذلك ينبغي عمليًا قراءة القانون إلى جانب مرسومه والوثائق التقنية الصادرة عن DGSSI، فهذه المجموعة هي التي تحدد ما يتعين على المؤسسة إرساؤه فعليًا.",
          "وفكرة النص واضحة: لم يعد الأمن السيبراني شأنًا تقنيًا محضًا يُترك لتقدير كل مديرية لنظم المعلومات، بل أصبح التزامًا في مجال الحكامة، بمسؤوليات محددة، وتدابير دنيا، ومراقبة، وعقوبات في حالة الإخلال.",
        ],
      },
      {
        heading: "دور DGSSI وmaCERT",
        paragraphs: [
          "المديرية العامة لأمن نظم المعلومات (DGSSI)، التابعة لإدارة الدفاع الوطني، هي السلطة الوطنية للأمن السيبراني المشار إليها في القانون. تتولى إعداد المرجعيات، ومواكبة الهيئات المعنية، وتأهيل بعض مقدمي الخدمات (مثل مقدمي خدمات افتحاص الأمن)، ومراقبة تطبيق الالتزامات.",
          "أما maCERT، مركز اليقظة والرصد والتصدي للهجمات المعلوماتية، فيوجد داخل DGSSI. وهو المخاطَب العملي عند وقوع حادث: ينشر نشرات تنبيه بشأن الثغرات، ويتلقى التصريحات بالحوادث، ويمكنه دعم المؤسسات المتضررة. وتُعد متابعة نشراته جزءًا من الممارسات الأساسية لأي فريق أمن في المغرب.",
        ],
        list: [
          "إعداد ونشر المرجعيات الوطنية، ومنها DNSSI",
          "تلقي ومعالجة التصريحات بحوادث الأمن",
          "تأهيل مقدمي خدمات الأمن السيبراني",
          "المصادقة (homologation) على بعض نظم المعلومات الحساسة",
          "مراقبة احترام الالتزامات والتحسيس",
        ],
      },
      {
        heading: "ما هي الهيئات المعنية بالقانون 05-20؟",
        paragraphs: [
          "لا يُطبَّق القانون بالطريقة نفسها على جميع مقاولات البلاد، بل يستهدف أساسًا القطاع العام والجهات التي قد يكون لتعطلها أثر كبير على الوطن. ويختلف مستوى المتطلبات حسب الفئة، إذ تتحمل البنيات التحتية ذات الأهمية الحيوية أثقل الالتزامات.",
          "أما المقاولات الخاصة التي لا تندرج ضمن أي من هذه الفئات فليست خاضعة للقانون مباشرة، لكنها كثيرًا ما تتأثر به بشكل غير مباشر بصفتها مزودًا أو مناولًا لهيئة خاضعة تفرض عليها متطلبات أمنية تعاقدية. ولمعرفة ما إذا كانت مؤسستك معنية بدقة، يجب الرجوع إلى نص القانون ومرسومه، والاستفسار لدى DGSSI عند الحاجة.",
        ],
        list: [
          "إدارات الدولة والجماعات الترابية",
          "المؤسسات والمقاولات العمومية وباقي الأشخاص الاعتباريين الخاضعين للقانون العام",
          "البنيات التحتية ذات الأهمية الحيوية التي تتوفر على نظم معلومات حساسة، في قطاعات مثل الطاقة والمالية والصحة والنقل والاتصالات",
          "مستغلو شبكات الاتصالات العامة ومزودو الولوج إلى الإنترنت",
          "مقدمو خدمات الأمن السيبراني وبعض مقدمي الخدمات الرقمية وناشري المنصات",
        ],
      },
      {
        heading: "أهم الالتزامات الواجب احترامها",
        paragraphs: [
          "تنقسم الالتزامات إلى ثلاث مجموعات: الحكامة (من المسؤول ووفق أي سياسة)، وتدبير المخاطر والتدابير التقنية، والعلاقة مع السلطة الوطنية (التصريحات والافتحاصات والمراقبة). وتُضاف إلى ذلك متطلبات معززة بالنسبة للبنيات التحتية ذات الأهمية الحيوية، مثل المصادقة على النظم الحساسة قبل تشغيلها، وقواعد تتعلق بإيواء معطياتها الحساسة.",
          "وينص القانون على عقوبات في حالة الإخلال. وبما أن مبالغها وشروطها تختلف حسب طبيعة المخالفة وفئة الهيئة، يُستحسن الرجوع مباشرة إلى نص القانون بدل الاعتماد على أرقام متداولة دون مصدر.",
        ],
        list: [
          "اعتماد سياسة لأمن نظم المعلومات (PSSI) مطابقة لمرجعيات DGSSI",
          "تعيين مسؤول عن أمن نظم المعلومات يتمتع بالاستقلالية والوسائل اللازمة",
          "جرد الأصول المعلوماتية وتصنيفها حسب درجة حساسيتها",
          "إجراء تحليل للمخاطر ووضع تدابير حماية متناسبة",
          "التصريح لدى DGSSI (maCERT) بحوادث الأمن فور رصدها",
          "إخضاع النظم لافتحاصات أمنية، يُجريها عند الاقتضاء مقدمو خدمات مؤهَّلون",
          "بالنسبة للبنيات الحيوية: المصادقة على نظم المعلومات الحساسة واحترام قواعد إيواء المعطيات الحساسة",
        ],
      },
      {
        heading: "DNSSI والقانون 09-08 وCNDP: كيف تتكامل النصوص؟",
        paragraphs: [
          "التوجيه الوطني لأمن نظم المعلومات (DNSSI)، الذي نشرته DGSSI سنة 2013، هو المرجع الأساسي لتدابير الأمن بالنسبة للإدارات والبنيات التحتية ذات الأهمية الحيوية. وهو مستوحى إلى حد كبير من معيار ISO/IEC 27002، ويشمل تنظيم الأمن، وتدبير الأصول، والأمن المادي، ومراقبة الولوج، والاستغلال، وتدبير الحوادث، واستمرارية النشاط. لذلك فإن المؤسسة التي أرست نظامًا لإدارة أمن المعلومات وفق ISO 27001 تملك قاعدة متينة لإثبات مطابقتها للتوجيه DNSSI.",
          "أما القانون 09-08 المتعلق بحماية الأشخاص الذاتيين تجاه معالجة المعطيات ذات الطابع الشخصي، فيرمي إلى هدف آخر هو حماية حقوق الأشخاص. وتسهر على مراقبته اللجنة الوطنية لمراقبة حماية المعطيات ذات الطابع الشخصي (CNDP)، ويُطبَّق على كل مؤسسة عامة أو خاصة تعالج معطيات شخصية، إذ يفرض بالخصوص إجراءات لدى CNDP وواجب تأمين المعطيات المعالَجة.",
          "والنظامان متكاملان: فتسرب واحد للمعطيات قد يشكل حادثًا يجب التصريح به بموجب القانون 05-20، وفي الوقت نفسه إخلالًا بأمن المعطيات الشخصية في إطار القانون 09-08. ومن هنا أهمية حكامة موحدة يعمل فيها مسؤول أمن نظم المعلومات ومسؤول الامتثال لحماية المعطيات بالسجلات نفسها، وتحليل المخاطر نفسه، ومسطرة تدبير الحوادث نفسها.",
        ],
      },
      {
        heading: "ما هي الكفاءات والشهادات التي تساعد على الامتثال؟",
        paragraphs: [
          "الامتثال للقانون 05-20 هو أولًا ورش تنظيمي، لكنه يتطلب أيضًا كفاءات تقنية لرصد الحوادث ومعالجتها. وقليلة هي المؤسسات التي تتوفر على جميع هذه الملفات داخليًا، لذا يبقى تطوير كفاءات الفرق الحالية غالبًا الخيار الأكثر واقعية.",
        ],
        list: [
          "ISO/IEC 27001 Lead Implementer (PECB): إرساء نظام لإدارة أمن المعلومات، وإجراء تحليل المخاطر، وصياغة السياسة الأمنية وبيان قابلية التطبيق، والتحضير للافتحاصات. وهي الكفاءة الأكثر ارتباطًا بالتوجيه DNSSI.",
          "CISM (ISACA): قيادة برنامج الأمن، ورفع التقارير إلى الإدارة، وتدبير الحوادث؛ مناسبة لمسؤول أمن نظم المعلومات المستقبلي.",
          "CISSP (ISC2): رؤية شاملة تغطي الهندسة الأمنية وتدبير المخاطر وأمن الشبكات والعمليات، لمسؤولي الأمن ذوي الخبرة.",
          "CND v3 (EC-Council): الحماية والرصد والاستجابة على مستوى الشبكة، لمسيري الأنظمة والشبكات.",
          "CompTIA CySA+: تحليل السجلات، وتدبير الثغرات، والاستجابة للحوادث، لمحللي SOC الذين يُعدّون التصريحات الموجهة إلى maCERT.",
        ],
      },
      {
        heading: "من أين تبدأ، وكيف يمكن لـ GATech مساعدتك",
        paragraphs: [
          "يقوم النهج العملي على التحقق أولًا مما إذا كانت مؤسستك خاضعة للقانون وضمن أي فئة، ثم إجراء تشخيص للوضع مقارنة بالتوجيه DNSSI، وتعيين مسؤول عن الأمن، وصياغة مسطرة التصريح بالحوادث، وأخيرًا برمجة الافتحاصات. وكل خطوة من هذه الخطوات تعتمد على أشخاص مكوَّنين.",
          "تقترح GATech في المغرب تكوينات تُعِدّ للشهادات المذكورة، مع الامتحان الرسمي: ISO 27001 Lead Implementer ابتداءً من 19900 درهم (5 أيام)، وCISM ابتداءً من 24900 درهم (4 أيام)، وCISSP ابتداءً من 27900 درهم (5 أيام)، وCND v3 ابتداءً من 18900 درهم (5 أيام)، وCySA+ ابتداءً من 12900 درهم (5 أيام)، حضوريًا أو عن بُعد.",
          "يُقدَّم هذا الدليل لأغراض إخبارية عامة ولا يُعد استشارة قانونية. ولتحليل وضعيتك الخاصة، يُرجى الرجوع إلى النصوص الرسمية أو إلى DGSSI أو إلى مستشار قانوني متخصص.",
        ],
      },
    ],
    en: [
      {
        heading: "What is Law 05-20 on cybersecurity?",
        paragraphs: [
          "Law No. 05-20 on cybersecurity was enacted in July 2020. It is Morocco's first statute dedicated specifically to information systems security. Before it, most rules came from regulations and from frameworks such as the DNSSI. The law gives those requirements a legal footing, specifies who must apply them and empowers a national authority to check compliance.",
          "It is supplemented by an implementing decree (Decree No. 2-21-406, adopted in 2021), which sets out how the obligations apply to each category of entity, and by decisions and frameworks issued by the national authority. In practice, you need to read the law together with its decree and the DGSSI's technical documents: that combination defines what an organization actually has to put in place.",
          "The idea behind the text is straightforward: cybersecurity is no longer a purely technical matter left to each IT department, but a governance obligation, with named responsibilities, minimum measures, controls and penalties for non-compliance.",
        ],
      },
      {
        heading: "The role of the DGSSI and maCERT",
        paragraphs: [
          "The General Directorate for Information Systems Security (DGSSI), which reports to the National Defence Administration, is the national cybersecurity authority referred to in the law. It drafts frameworks, supports the entities concerned, qualifies certain providers (security audit providers, for example) and monitors compliance.",
          "maCERT, the national centre for monitoring, detecting and responding to cyberattacks, sits within the DGSSI. It is the operational contact when an incident occurs: it publishes vulnerability alerts, receives incident reports and can assist affected organizations. For any Moroccan security team, following its bulletins is basic hygiene.",
        ],
        list: [
          "Drafting and publishing national frameworks, including the DNSSI",
          "Receiving and handling security incident reports",
          "Qualifying cybersecurity service providers",
          "Approving (homologating) certain sensitive information systems",
          "Monitoring compliance and raising awareness",
        ],
      },
      {
        heading: "Which organizations does Law 05-20 apply to?",
        paragraphs: [
          "The law does not apply uniformly to every company in the country. It primarily targets the public sector and organizations whose failure would have a serious national impact. Requirements vary by category, with critical infrastructure operators carrying the heaviest load.",
          "Private companies outside these categories are not directly subject to the law. They are, however, often affected indirectly as suppliers or subcontractors of a covered entity that passes security requirements down through contracts. To know exactly whether your organization is covered, refer to the law, its decree and, if needed, ask the DGSSI.",
        ],
        list: [
          "State administrations and local authorities",
          "Public institutions and state-owned companies, and other public-law legal entities",
          "Critical infrastructure (infrastructures d'importance vitale, IIV) operating sensitive information systems, in sectors such as energy, finance, health, transport or telecoms",
          "Public telecom network operators and internet service providers",
          "Cybersecurity service providers and certain digital service providers or platform publishers",
        ],
      },
      {
        heading: "The main obligations",
        paragraphs: [
          "Obligations fall into three groups: governance (who is accountable, under which policy), risk management and technical measures, and the relationship with the national authority (incident reporting, audits, inspections). Critical infrastructure operators face additional requirements, such as having sensitive systems approved before they go live and rules on where their sensitive data is hosted.",
          "The law provides for penalties in case of non-compliance. Since amounts and conditions depend on the type of breach and the category of entity, check the law itself rather than figures quoted without a source.",
        ],
        list: [
          "Adopt an information systems security policy (ISSP) aligned with DGSSI frameworks",
          "Appoint an information systems security officer with the independence and resources the role requires",
          "Inventory and classify information assets by sensitivity",
          "Carry out a risk assessment and implement proportionate safeguards",
          "Report security incidents to the DGSSI (maCERT) as soon as they are detected",
          "Have security audits performed, by qualified providers where required",
          "For critical infrastructure: obtain approval for sensitive information systems and follow the hosting rules for sensitive data",
        ],
      },
      {
        heading: "DNSSI, Law 09-08 and the CNDP: how do the texts fit together?",
        paragraphs: [
          "The National Information Systems Security Directive (DNSSI), published by the DGSSI in 2013, is the reference catalogue of security measures for government bodies and critical infrastructure. It draws heavily on ISO/IEC 27002 and covers security organization, asset management, physical security, access control, operations, incident management and business continuity. An organization that has already built an ISO 27001 ISMS therefore has a strong basis for demonstrating DNSSI compliance.",
          "Law 09-08 on the protection of individuals with regard to the processing of personal data has a different goal: protecting people's rights. It is overseen by the CNDP (the national data protection commission) and applies to any public or private organization processing personal data. Among other things, it requires filings with the CNDP and an obligation to secure the data being processed.",
          "The two regimes complement each other: a single data leak can be both an incident to report under Law 05-20 and a personal data security failure under Law 09-08. That is why a single governance model works best, with the CISO and the data protection lead sharing the same registers, the same risk assessment and the same incident procedure.",
        ],
      },
      {
        heading: "Which skills and certifications help you comply?",
        paragraphs: [
          "Compliance with Law 05-20 is first and foremost an organizational project, but it also requires technical skills to detect and handle incidents. Few organizations have every profile in-house, so upskilling existing teams is often the most realistic route.",
        ],
        list: [
          "ISO/IEC 27001 Lead Implementer (PECB): build an ISMS, run the risk assessment, write the security policy and Statement of Applicability, prepare for audits. This is the skill set most closely tied to the DNSSI.",
          "CISM (ISACA): run the security programme, report to management and manage incidents; suited to future CISOs.",
          "CISSP (ISC2): broad coverage of architecture, risk management, network security and operations, for experienced security leaders.",
          "CND v3 (EC-Council): protect, detect and respond at network level, for system and network administrators.",
          "CompTIA CySA+: log analysis, vulnerability management and incident response, for SOC analysts who feed incident reports to maCERT.",
        ],
      },
      {
        heading: "Where to start, and how GATech can help",
        paragraphs: [
          "A pragmatic approach is to first check whether and in which category your organization falls under the law, then run a gap assessment against the DNSSI, appoint a security officer, formalize the incident reporting procedure and finally schedule audits. Each of these steps depends on trained people.",
          "GATech offers training in Morocco for the certifications above, official exam included: ISO 27001 Lead Implementer from 19,900 MAD (5 days), CISM from 24,900 MAD (4 days), CISSP from 27,900 MAD (5 days), CND v3 from 18,900 MAD (5 days) and CySA+ from 12,900 MAD (5 days), in class or online.",
          "This guide is provided for general information only and does not constitute legal advice. For an assessment of your situation, consult the official texts, the DGSSI or a qualified lawyer.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      {
        q: "Mon entreprise privée est-elle soumise à la loi 05-20 ?",
        a: "Pas nécessairement. La loi vise surtout les administrations, les établissements et entreprises publics, les infrastructures d'importance vitale et certains opérateurs (télécoms, fournisseurs d'accès, prestataires de cybersécurité et de services numériques). Une entreprise privée hors de ces catégories n'est pas directement assujettie, mais ses clients soumis à la loi peuvent lui imposer des exigences contractuelles. En cas de doute, consultez le texte et son décret ou interrogez la DGSSI.",
      },
      {
        q: "À qui déclarer un incident de cybersécurité au Maroc ?",
        a: "Les entités soumises à la loi 05-20 déclarent leurs incidents de sécurité à l'autorité nationale, la DGSSI, via son centre opérationnel maCERT. Si l'incident touche des données personnelles, il faut aussi évaluer ses obligations au regard de la loi 09-08 et de la CNDP.",
      },
      {
        q: "Quelle différence entre la loi 05-20 et la DNSSI ?",
        a: "La loi 05-20 est un texte législatif qui fixe les obligations, les acteurs concernés et les sanctions. La DNSSI, publiée par la DGSSI en 2013, est un référentiel technique de mesures de sécurité, inspiré de l'ISO/IEC 27002, qui sert de base pour mettre en œuvre ces obligations dans les administrations et les infrastructures d'importance vitale.",
      },
      {
        q: "La certification ISO 27001 suffit-elle pour être conforme à la loi 05-20 ?",
        a: "Non, pas automatiquement. Un SMSI certifié ISO 27001 couvre une grande partie des mesures attendues par la DNSSI et facilite fortement la conformité, mais la loi impose aussi des obligations propres : déclaration d'incidents à la DGSSI, homologation de certains systèmes, recours à des prestataires qualifiés pour certains audits. Il faut donc compléter le SMSI par ces exigences spécifiques.",
      },
      {
        q: "Quelle certification choisir pour piloter la conformité à la loi 05-20 ?",
        a: "Pour construire le dispositif de gouvernance et la PSSI, l'ISO 27001 Lead Implementer est la plus directement utile. Pour un RSSI qui pilote le programme et rend compte à la direction, le CISM ou le CISSP sont des choix solides. Pour les équipes techniques chargées de détecter et traiter les incidents, le CND v3 et la CySA+ sont plus adaptés.",
      },
    ],
    ar: [
      {
        q: "هل تخضع مقاولتي الخاصة للقانون 05-20؟",
        a: "ليس بالضرورة. يستهدف القانون أساسًا الإدارات والمؤسسات والمقاولات العمومية والبنيات التحتية ذات الأهمية الحيوية وبعض المتعهدين (الاتصالات، ومزودو الولوج إلى الإنترنت، ومقدمو خدمات الأمن السيبراني والخدمات الرقمية). والمقاولة الخاصة خارج هذه الفئات ليست خاضعة له مباشرة، لكن زبناءها الخاضعين للقانون قد يفرضون عليها متطلبات تعاقدية. وعند الشك، يُرجى الرجوع إلى النص ومرسومه أو الاستفسار لدى DGSSI.",
      },
      {
        q: "لمن يتم التصريح بحادث سيبراني في المغرب؟",
        a: "تصرّح الهيئات الخاضعة للقانون 05-20 بحوادث الأمن لدى السلطة الوطنية DGSSI عبر مركزها العملياتي maCERT. وإذا كان الحادث يمس معطيات شخصية، فيجب أيضًا تقييم الالتزامات المترتبة بموجب القانون 09-08 وتجاه CNDP.",
      },
      {
        q: "ما الفرق بين القانون 05-20 والتوجيه DNSSI؟",
        a: "القانون 05-20 نص تشريعي يحدد الالتزامات والجهات المعنية والعقوبات. أما DNSSI، الذي نشرته DGSSI سنة 2013، فهو مرجع تقني لتدابير الأمن مستوحى من ISO/IEC 27002، يُعتمد أساسًا لتنزيل هذه الالتزامات داخل الإدارات والبنيات التحتية ذات الأهمية الحيوية.",
      },
      {
        q: "هل يكفي الإشهاد ISO 27001 للامتثال للقانون 05-20؟",
        a: "ليس تلقائيًا. فنظام إدارة أمن المعلومات المُشهَد وفق ISO 27001 يغطي جزءًا كبيرًا من التدابير التي يتطلبها DNSSI ويسهّل الامتثال كثيرًا، لكن القانون يفرض أيضًا التزامات خاصة: التصريح بالحوادث لدى DGSSI، والمصادقة على بعض النظم، واللجوء إلى مقدمي خدمات مؤهَّلين في بعض الافتحاصات. لذا يجب استكمال النظام بهذه المتطلبات الخاصة.",
      },
      {
        q: "أي شهادة أختار لقيادة الامتثال للقانون 05-20؟",
        a: "لإرساء منظومة الحكامة وسياسة أمن نظم المعلومات، تُعد شهادة ISO 27001 Lead Implementer الأكثر فائدة مباشرة. ولمسؤول أمن نظم المعلومات الذي يقود البرنامج ويرفع التقارير إلى الإدارة، تبقى CISM أو CISSP خيارًا متينًا. أما الفرق التقنية المكلفة برصد الحوادث ومعالجتها، فتناسبها CND v3 وCySA+.",
      },
    ],
    en: [
      {
        q: "Is my private company subject to Law 05-20?",
        a: "Not necessarily. The law mainly targets government bodies, public institutions and state-owned companies, critical infrastructure and certain operators (telecoms, internet service providers, cybersecurity and digital service providers). A private company outside these categories is not directly covered, but clients that are covered may impose contractual requirements on it. If in doubt, check the law and its decree or ask the DGSSI.",
      },
      {
        q: "Who do you report a cybersecurity incident to in Morocco?",
        a: "Entities covered by Law 05-20 report security incidents to the national authority, the DGSSI, through its operational centre maCERT. If the incident involves personal data, you also need to assess your obligations under Law 09-08 and towards the CNDP.",
      },
      {
        q: "What is the difference between Law 05-20 and the DNSSI?",
        a: "Law 05-20 is a statute that sets obligations, the parties concerned and penalties. The DNSSI, published by the DGSSI in 2013, is a technical catalogue of security measures inspired by ISO/IEC 27002, used as the basis for implementing those obligations in government bodies and critical infrastructure.",
      },
      {
        q: "Is ISO 27001 certification enough to comply with Law 05-20?",
        a: "Not automatically. An ISO 27001-certified ISMS covers much of what the DNSSI expects and makes compliance far easier, but the law also has specific obligations: incident reporting to the DGSSI, approval of certain systems and the use of qualified providers for some audits. You need to add these requirements on top of the ISMS.",
      },
      {
        q: "Which certification is best for leading Law 05-20 compliance?",
        a: "For building the governance framework and security policy, ISO 27001 Lead Implementer is the most directly useful. For a CISO who runs the programme and reports to management, CISM or CISSP are solid choices. For technical teams that detect and handle incidents, CND v3 and CySA+ are a better fit.",
      },
    ],
  },
};

export default guide;
