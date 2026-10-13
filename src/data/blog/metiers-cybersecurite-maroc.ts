import type { Guide } from "../types";

const guide: Guide = {
  slug: "metiers-cybersecurite-maroc",
  category: "carrieres",
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  readingMinutes: 8,
  relatedCerts: ["comptia-security-plus", "ceh-v13", "comptia-cysa-plus", "cissp", "iso-27001-lead-implementer", "chfi-v11"],
  title: {
    fr: "Métiers de la cybersécurité au Maroc : rôles et certifications",
    ar: "مهن الأمن السيبراني في المغرب: الأدوار والمهارات والشهادات",
    en: "Cybersecurity Jobs in Morocco: Roles, Skills and Certifications",
  },
  seoTitle: {
    fr: "Métiers de la cybersécurité au Maroc : le guide",
    ar: "مهن الأمن السيبراني في المغرب: دليل شامل",
    en: "Cybersecurity Jobs in Morocco: Roles & Skills",
  },
  seoDescription: {
    fr: "Analyste SOC, pentester, RSSI, GRC, cloud : missions, compétences et certifications de 8 métiers cyber au Maroc. Trouvez votre voie.",
    ar: "محلل SOC، مختبر اختراق، RSSI، الحوكمة، السحابة: مهام ومهارات وشهادات 8 مهن في الأمن السيبراني بالمغرب. اكتشف مسارك الآن.",
    en: "SOC analyst, pentester, CISO, GRC, cloud: missions, skills and certifications for 8 cybersecurity jobs in Morocco. Find your path.",
  },
  excerpt: {
    fr: "La cybersécurité ne se résume pas au hacking : de l'analyste SOC au RSSI, en passant par l'auditeur ISO 27001, chaque métier demande des compétences et des certifications différentes. Tour d'horizon des principaux rôles recherchés au Maroc.",
    ar: "لا يقتصر الأمن السيبراني على الاختراق: من محلل SOC إلى RSSI مروراً بمدقق ISO 27001، تتطلب كل مهنة مهارات وشهادات مختلفة. جولة في أهم الأدوار المطلوبة في المغرب.",
    en: "Cybersecurity is not just hacking: from SOC analyst to CISO, by way of ISO 27001 auditor, each job calls for different skills and certifications. Here is an overview of the main roles in demand in Morocco.",
  },
  sections: {
    fr: [
      {
        heading: "Quels sont les principaux métiers de la cybersécurité au Maroc ?",
        paragraphs: [
          "Les métiers de la cybersécurité se répartissent en trois grandes familles : la défense opérationnelle (surveiller, détecter, répondre), l'offensive (tester les défenses comme le ferait un attaquant) et la gouvernance (définir les règles, gérer les risques, auditer la conformité). Au Maroc, on retrouve ces trois familles dans les banques, les opérateurs télécoms, les centres d'offshoring, les cabinets de conseil et l'administration.",
          "Ce guide passe en revue huit rôles parmi les plus recherchés : analyste SOC, pentester, spécialiste de la réponse aux incidents et du forensic, ingénieur sécurité réseau, consultant GRC, auditeur ou consultant ISO 27001, RSSI et ingénieur sécurité cloud. Pour chacun : les missions, les compétences clés, les certifications utiles et le niveau d'accès.",
          "Un conseil avant d'entrer dans le détail : ne choisissez pas un métier uniquement parce qu'il paraît spectaculaire. Le pentest attire beaucoup, mais les postes de défense et de gouvernance sont nombreux et offrent d'excellentes perspectives. Le meilleur choix est celui qui correspond à votre formation initiale, à votre goût pour la technique ou pour l'organisation, et à votre capacité à apprendre en continu, car tous ces métiers évoluent vite.",
        ],
      },
      {
        heading: "Analyste SOC et pentester : les deux portes d'entrée techniques",
        paragraphs: [
          "L'analyste SOC (Security Operations Center) surveille en continu les alertes remontées par le SIEM, trie les faux positifs, qualifie les incidents et escalade les cas sérieux. Il doit maîtriser les réseaux, les systèmes Windows et Linux, la lecture de logs et les techniques d'attaque courantes. C'est souvent le premier poste d'un profil junior. CompTIA Security+ pose les bases, puis CompTIA CySA+ valide les compétences d'analyse et de détection. Nous détaillons ce parcours dans notre article dédié au métier d'analyste SOC au Maroc.",
          "Le pentester, ou testeur d'intrusion, attaque les systèmes d'un client avec son autorisation pour identifier les vulnérabilités avant les vrais attaquants, puis rédige un rapport exploitable. Il lui faut une solide culture réseau et système, des bases de scripting et beaucoup de pratique. Le CEH v13 est une première étape reconnue par les recruteurs ; les profils plus avancés visent ensuite des certifications pratiques comme l'OSCP+. Le parcours complet est décrit dans notre guide pour devenir pentester au Maroc.",
        ],
      },
      {
        heading: "Réponse aux incidents et forensic : intervenir après l'attaque",
        paragraphs: [
          "Quand une attaque est confirmée, le spécialiste de la réponse aux incidents prend le relais : contenir la menace, éradiquer l'accès de l'attaquant, restaurer les systèmes et tirer les leçons. L'analyste forensic, lui, collecte et analyse les preuves numériques (disques, mémoire, journaux, mobiles) en préservant leur intégrité, notamment lorsqu'une procédure judiciaire est envisagée.",
          "Ces rôles s'adressent rarement à des débutants complets : on y arrive généralement après une expérience en SOC ou en administration système. Les compétences clés sont la connaissance des systèmes de fichiers, l'analyse mémoire, la chronologie d'événements et la rigueur documentaire.",
        ],
        list: [
          "Certifications utiles : CHFI v11 pour l'investigation numérique, CySA+ pour la détection et la réponse",
          "Niveau : intermédiaire à confirmé",
          "Employeurs : SOC internes de grands groupes, prestataires de sécurité managée, cabinets spécialisés",
        ],
      },
      {
        heading: "Ingénieur sécurité et sécurité réseau : construire les défenses",
        paragraphs: [
          "L'ingénieur sécurité conçoit, déploie et maintient les briques de protection : pare-feu, IDS/IPS, VPN, segmentation réseau, gestion des identités, durcissement des serveurs, outils EDR. C'est un métier très technique, souvent occupé par d'anciens administrateurs réseau ou système qui se spécialisent.",
          "Les bases réseau sont incontournables : un CCNA reste un excellent socle, complété par Security+ pour la vision sécurité globale ou par CND pour la défense réseau. Avec l'expérience, l'ingénieur sécurité peut évoluer vers l'architecture sécurité, où le CISSP devient un atout.",
        ],
      },
      {
        heading: "GRC, conformité et ISO 27001 : la sécurité côté gouvernance",
        paragraphs: [
          "Le consultant GRC (gouvernance, risques et conformité) traduit les exigences réglementaires et métier en politiques de sécurité, conduit les analyses de risques et suit les plans d'action. Au Maroc, la loi 05-20 relative à la cybersécurité et les exigences sectorielles, notamment dans la banque et l'assurance, renforcent ce besoin.",
          "Proche de ce rôle, l'auditeur ou consultant ISO 27001 accompagne la mise en place d'un système de management de la sécurité de l'information (SMSI) ou vérifie sa conformité. Ces métiers demandent moins de technique pure que d'aptitude à structurer, rédiger, convaincre et dialoguer avec les directions.",
        ],
        list: [
          "Compétences : analyse de risques, rédaction de politiques, connaissance des normes et réglementations, communication",
          "Certifications utiles : ISO 27001 Lead Implementer pour piloter un SMSI, puis CISM ou CISSP avec l'expérience",
          "Niveau : accessible aux juristes, auditeurs ou chefs de projet IT en reconversion, avec une montée en compétence technique",
        ],
      },
      {
        heading: "RSSI / CISO : piloter la sécurité de toute l'organisation",
        paragraphs: [
          "Le responsable de la sécurité des systèmes d'information (RSSI, ou CISO) définit la stratégie de sécurité, arbitre les budgets, rend compte à la direction générale et coordonne les équipes techniques comme les prestataires. C'est un poste de management qui exige une vision transverse : technique, juridique, organisationnelle et métier.",
          "On n'y accède qu'après plusieurs années d'expérience, souvent en passant par l'ingénierie sécurité, le conseil GRC ou la gestion d'un SOC. Le CISSP est la certification de référence pour ce niveau, avec le CISM pour les profils orientés management.",
        ],
      },
      {
        heading: "Ingénieur sécurité cloud : un rôle en pleine montée",
        paragraphs: [
          "Avec la migration des applications vers Azure, AWS ou Google Cloud, les entreprises cherchent des profils capables de sécuriser ces environnements : gestion des identités et des accès, configuration sécurisée, chiffrement, journalisation, surveillance de la posture de sécurité. L'ingénieur sécurité cloud combine des compétences d'ingénieur sécurité classique et une bonne maîtrise des services cloud.",
          "Le socle reste le même : Security+ pour les fondamentaux, puis les certifications sécurité propres à chaque fournisseur cloud. Le CISSP couvre également l'architecture et la sécurité cloud pour les profils seniors.",
          "Point important : la sécurité cloud n'est pas un métier pour débutant absolu. Les recruteurs attendent généralement une expérience préalable en administration système, en réseau ou en sécurité, puis une spécialisation sur une ou deux plateformes. Construire d'abord des bases solides reste donc la stratégie la plus sûre.",
        ],
      },
      {
        heading: "Quels secteurs recrutent des profils cybersécurité au Maroc ?",
        paragraphs: [
          "La demande se concentre surtout à Casablanca et Rabat, mais touche des secteurs variés. Chacun a ses priorités : conformité réglementaire pour la finance, protection d'infrastructures critiques pour les télécoms, surveillance pour le compte de clients internationaux pour l'offshoring.",
        ],
        list: [
          "Banques et établissements financiers : SOC internes, GRC, conformité",
          "Assurances : gestion des risques, protection des données",
          "Opérateurs télécoms : sécurité réseau, réponse aux incidents",
          "Offshoring et prestataires de sécurité managée (MSSP) : analystes SOC, ingénieurs",
          "Secteur public et établissements publics : gouvernance, conformité à la loi 05-20",
          "Cabinets de conseil et d'audit : pentest, ISO 27001, GRC",
        ],
      },
      {
        heading: "Se former à ces métiers avec GATech",
        paragraphs: [
          "GATech prépare à la plupart des certifications citées dans ce guide, en salle à Casablanca et Rabat ou en classe virtuelle en direct, avec le voucher d'examen officiel inclus : CompTIA Security+ dès 10 900 MAD, CySA+ dès 12 900 MAD, ISO 27001 Lead Implementer dès 17 900 MAD, CHFI v11 dès 19 900 MAD, CEH v13 dès 21 900 MAD et CISSP dès 23 900 MAD.",
          "Pour alléger le budget : 10 % de remise en inscription anticipée, 15 % pour les groupes dès 3 participants, 15 % pour les étudiants et jeunes diplômés, ou paiement en 3 fois sans frais pour les particuliers. Contactez-nous pour identifier la certification la plus adaptée au métier que vous visez.",
        ],
      },
    ],
    en: [
      {
        heading: "What are the main cybersecurity jobs in Morocco?",
        paragraphs: [
          "Cybersecurity jobs fall into three broad families: operational defence (monitoring, detecting, responding), offensive security (testing defences the way an attacker would) and governance (setting the rules, managing risk, auditing compliance). In Morocco, all three are found in banks, telecom operators, offshoring centres, consulting firms and government.",
          "This guide reviews eight of the most sought-after roles: SOC analyst, pentester, incident response and forensics specialist, network security engineer, GRC consultant, ISO 27001 auditor or consultant, CISO and cloud security engineer. For each: missions, key skills, useful certifications and entry level.",
          "A word of advice before the details: do not pick a job just because it looks spectacular. Pentesting attracts many people, but defence and governance roles are numerous and offer excellent prospects. The best choice matches your background, your taste for technology or for organisation, and your ability to keep learning, because all of these jobs evolve quickly.",
        ],
      },
      {
        heading: "SOC analyst and pentester: the two technical entry points",
        paragraphs: [
          "A SOC (Security Operations Center) analyst continuously monitors alerts raised by the SIEM, filters out false positives, qualifies incidents and escalates serious cases. The role requires solid networking, Windows and Linux knowledge, log reading and familiarity with common attack techniques. It is often a junior's first job. CompTIA Security+ lays the foundations, then CompTIA CySA+ validates analysis and detection skills. We cover this path in our dedicated article on becoming a SOC analyst in Morocco.",
          "A pentester attacks a client's systems with permission to find vulnerabilities before real attackers do, then writes an actionable report. It takes strong networking and systems knowledge, some scripting and a lot of practice. CEH v13 is a first step recruiters recognise; more advanced profiles then aim for practical certifications such as OSCP+. The full path is described in our guide to becoming a pentester in Morocco.",
        ],
      },
      {
        heading: "Incident response and forensics: stepping in after an attack",
        paragraphs: [
          "Once an attack is confirmed, the incident responder takes over: containing the threat, removing the attacker's access, restoring systems and drawing lessons. The forensic analyst collects and analyses digital evidence (disks, memory, logs, mobile devices) while preserving its integrity, especially when legal proceedings are possible.",
          "These roles are rarely for complete beginners: people usually get there after experience in a SOC or in system administration. Key skills include file systems, memory analysis, event timelines and rigorous documentation.",
        ],
        list: [
          "Useful certifications: CHFI v11 for digital investigation, CySA+ for detection and response",
          "Level: intermediate to experienced",
          "Employers: in-house SOCs of large groups, managed security providers, specialist firms",
        ],
      },
      {
        heading: "Security engineer and network security: building the defences",
        paragraphs: [
          "A security engineer designs, deploys and maintains protective building blocks: firewalls, IDS/IPS, VPNs, network segmentation, identity management, server hardening and EDR tools. It is a very technical job, often held by former network or system administrators who have specialised.",
          "Networking basics are essential: CCNA remains an excellent foundation, complemented by Security+ for the overall security picture or CND for network defence. With experience, a security engineer can move into security architecture, where CISSP becomes an asset.",
        ],
      },
      {
        heading: "GRC, compliance and ISO 27001: security on the governance side",
        paragraphs: [
          "A GRC (governance, risk and compliance) consultant turns regulatory and business requirements into security policies, runs risk assessments and tracks action plans. In Morocco, Law 05-20 on cybersecurity and sector requirements, particularly in banking and insurance, strengthen this need.",
          "Close to this role, the ISO 27001 auditor or consultant helps set up an information security management system (ISMS) or checks its compliance. These jobs require less pure technical depth than the ability to structure, write, persuade and work with senior management.",
        ],
        list: [
          "Skills: risk analysis, policy writing, knowledge of standards and regulations, communication",
          "Useful certifications: ISO 27001 Lead Implementer to run an ISMS, then CISM or CISSP with experience",
          "Level: open to lawyers, auditors or IT project managers changing careers, with some technical upskilling",
        ],
      },
      {
        heading: "CISO: leading security across the organisation",
        paragraphs: [
          "The Chief Information Security Officer (RSSI in French) sets the security strategy, allocates budgets, reports to top management and coordinates technical teams and providers. It is a management role that demands a cross-cutting view: technical, legal, organisational and business.",
          "It is reached only after several years of experience, often via security engineering, GRC consulting or running a SOC. CISSP is the reference certification at this level, with CISM for management-oriented profiles.",
        ],
      },
      {
        heading: "Cloud security engineer: a fast-growing role",
        paragraphs: [
          "As applications move to Azure, AWS or Google Cloud, companies look for people who can secure these environments: identity and access management, secure configuration, encryption, logging and security posture monitoring. A cloud security engineer combines classic security engineering with a good command of cloud services.",
          "The foundation stays the same: Security+ for the fundamentals, then each cloud provider's own security certifications. CISSP also covers architecture and cloud security for senior profiles.",
          "One caveat: cloud security is not a role for absolute beginners. Recruiters usually expect prior experience in system administration, networking or security, followed by specialisation on one or two platforms. Building solid foundations first remains the safest strategy.",
        ],
      },
      {
        heading: "Which sectors hire cybersecurity profiles in Morocco?",
        paragraphs: [
          "Demand is concentrated mainly in Casablanca and Rabat but spans many sectors. Each has its own priorities: regulatory compliance in finance, protecting critical infrastructure in telecoms, monitoring on behalf of international clients in offshoring.",
        ],
        list: [
          "Banks and financial institutions: in-house SOCs, GRC, compliance",
          "Insurers: risk management, data protection",
          "Telecom operators: network security, incident response",
          "Offshoring and managed security service providers (MSSPs): SOC analysts, engineers",
          "Public sector and public bodies: governance, Law 05-20 compliance",
          "Consulting and audit firms: pentesting, ISO 27001, GRC",
        ],
      },
      {
        heading: "Train for these jobs with GATech",
        paragraphs: [
          "GATech prepares you for most of the certifications in this guide, in class in Casablanca and Rabat or as a live virtual class, with the official exam voucher included: CompTIA Security+ from 10,900 MAD, CySA+ from 12,900 MAD, ISO 27001 Lead Implementer from 17,900 MAD, CHFI v11 from 19,900 MAD, CEH v13 from 21,900 MAD and CISSP from 23,900 MAD.",
          "To ease the budget: 10% off for early registration, 15% off for groups of 3 or more, 15% off for students and recent graduates, or 3 interest-free instalments for individuals. Contact us to find the certification that best fits the job you are aiming for.",
        ],
      },
    ],
    ar: [
      {
        heading: "ما هي أهم مهن الأمن السيبراني في المغرب؟",
        paragraphs: [
          "تنقسم مهن الأمن السيبراني إلى ثلاث عائلات كبرى: الدفاع العملياتي (المراقبة والرصد والاستجابة)، والأمن الهجومي (اختبار الدفاعات كما يفعل المهاجم)، والحوكمة (وضع القواعد وتدبير المخاطر وتدقيق المطابقة). وفي المغرب نجد هذه العائلات الثلاث في الأبناك ومشغلي الاتصالات ومراكز الأوفشورينغ ومكاتب الاستشارة والإدارة العمومية.",
          "يستعرض هذا الدليل ثمانية أدوار من بين الأكثر طلباً: محلل SOC، ومختبر الاختراق، وأخصائي الاستجابة للحوادث والتحقيق الرقمي، ومهندس أمن الشبكات، ومستشار GRC، ومدقق أو مستشار ISO 27001، والمسؤول عن أمن نظم المعلومات (RSSI)، ومهندس أمن السحابة. ولكل منها: المهام والمهارات الأساسية والشهادات المفيدة ومستوى الولوج.",
          "نصيحة قبل الدخول في التفاصيل: لا تختر مهنة لمجرد أنها تبدو مثيرة. فاختبار الاختراق يجذب الكثيرين، لكن وظائف الدفاع والحوكمة كثيرة وتوفر آفاقاً ممتازة. والاختيار الأفضل هو الذي يناسب تكوينك الأساسي وميلك إلى التقنية أو التنظيم وقدرتك على التعلم المستمر، لأن كل هذه المهن تتطور بسرعة.",
        ],
      },
      {
        heading: "محلل SOC ومختبر الاختراق: بوابتا الدخول التقنيتان",
        paragraphs: [
          "يراقب محلل SOC (مركز العمليات الأمنية) باستمرار التنبيهات الصادرة عن SIEM، ويستبعد الإنذارات الكاذبة، ويصنف الحوادث ويصعّد الحالات الخطيرة. ويتطلب الدور إلماماً جيداً بالشبكات وأنظمة Windows وLinux وقراءة السجلات وتقنيات الهجوم الشائعة. وغالباً ما يكون أول وظيفة للمبتدئ. تضع CompTIA Security+ الأسس، ثم تُثبت CompTIA CySA+ مهارات التحليل والرصد. ونفصّل هذا المسار في مقالنا المخصص لمهنة محلل SOC في المغرب.",
          "أما مختبر الاختراق فيهاجم أنظمة العميل بإذنه لاكتشاف الثغرات قبل المهاجمين الحقيقيين، ثم يحرر تقريراً قابلاً للتنفيذ. ويحتاج إلى ثقافة قوية في الشبكات والأنظمة وأساسيات البرمجة النصية وكثير من الممارسة. تُعد CEH v13 خطوة أولى يعترف بها المشغلون، ثم يتجه الأكثر تقدماً نحو شهادات تطبيقية مثل OSCP+. ونشرح المسار الكامل في دليلنا لتصبح مختبر اختراق في المغرب.",
        ],
      },
      {
        heading: "الاستجابة للحوادث والتحقيق الرقمي: التدخل بعد الهجوم",
        paragraphs: [
          "عند تأكيد الهجوم، يتولى أخصائي الاستجابة للحوادث المهمة: احتواء التهديد وإزالة وصول المهاجم واستعادة الأنظمة واستخلاص الدروس. أما محلل التحقيق الرقمي فيجمع الأدلة الرقمية ويحللها (الأقراص والذاكرة والسجلات والهواتف) مع الحفاظ على سلامتها، خاصة عند احتمال اللجوء إلى القضاء.",
          "نادراً ما تناسب هذه الأدوار المبتدئين تماماً: إذ يُوصَل إليها عادة بعد تجربة في SOC أو في إدارة الأنظمة. ومن أهم المهارات معرفة أنظمة الملفات وتحليل الذاكرة وبناء التسلسل الزمني للأحداث والدقة في التوثيق.",
        ],
        list: [
          "شهادات مفيدة: CHFI v11 للتحقيق الرقمي، وCySA+ للرصد والاستجابة",
          "المستوى: متوسط إلى متقدم",
          "المشغلون: مراكز SOC الداخلية للمجموعات الكبرى، ومزودو الأمن المُدار، والمكاتب المتخصصة",
        ],
      },
      {
        heading: "مهندس الأمن وأمن الشبكات: بناء الدفاعات",
        paragraphs: [
          "يصمم مهندس الأمن ويُنشئ ويصون مكونات الحماية: الجدران النارية وIDS/IPS وVPN وتقسيم الشبكة وتدبير الهويات وتقوية الخوادم وأدوات EDR. وهي مهنة تقنية جداً يشغلها غالباً مسؤولو شبكات أو أنظمة سابقون تخصصوا في الأمن.",
          "أساسيات الشبكات لا غنى عنها: تظل CCNA قاعدة ممتازة، تكملها Security+ للرؤية الأمنية الشاملة أو CND للدفاع عن الشبكات. ومع الخبرة يمكن لمهندس الأمن التطور نحو هندسة الأمن المعمارية، حيث تصبح CISSP ميزة حقيقية.",
        ],
      },
      {
        heading: "الحوكمة والمطابقة وISO 27001: الأمن من زاوية التدبير",
        paragraphs: [
          "يترجم مستشار GRC (الحوكمة والمخاطر والمطابقة) المتطلبات التنظيمية والمهنية إلى سياسات أمنية، ويجري تحليلات المخاطر ويتتبع خطط العمل. وفي المغرب، يعزز القانون 05-20 المتعلق بالأمن السيبراني والمتطلبات القطاعية، خاصة في الأبناك والتأمين، هذه الحاجة.",
          "وقريباً من هذا الدور، يواكب مدقق أو مستشار ISO 27001 إرساء نظام تدبير أمن المعلومات أو يتحقق من مطابقته. وتتطلب هذه المهن قدرة على الهيكلة والتحرير والإقناع والتواصل مع الإدارات العليا أكثر من العمق التقني الصرف.",
        ],
        list: [
          "المهارات: تحليل المخاطر وصياغة السياسات ومعرفة المعايير والتشريعات والتواصل",
          "شهادات مفيدة: ISO 27001 Lead Implementer لقيادة نظام تدبير أمن المعلومات، ثم CISM أو CISSP مع الخبرة",
          "المستوى: متاح لرجال القانون والمدققين ومديري مشاريع المعلوميات في إطار إعادة التوجيه، مع تقوية تقنية",
        ],
      },
      {
        heading: "RSSI / CISO: قيادة أمن المؤسسة بأكملها",
        paragraphs: [
          "يحدد المسؤول عن أمن نظم المعلومات (RSSI أو CISO) الاستراتيجية الأمنية، ويقرر في الميزانيات، ويرفع التقارير إلى الإدارة العامة، وينسق بين الفرق التقنية والمزودين. إنه منصب تدبيري يتطلب رؤية شاملة: تقنية وقانونية وتنظيمية ومهنية.",
          "لا يُبلغ هذا المنصب إلا بعد سنوات من الخبرة، غالباً عبر هندسة الأمن أو استشارات GRC أو إدارة SOC. وتعد CISSP الشهادة المرجعية في هذا المستوى، إلى جانب CISM للملفات ذات التوجه التدبيري.",
        ],
      },
      {
        heading: "مهندس أمن السحابة: دور في تصاعد مستمر",
        paragraphs: [
          "مع انتقال التطبيقات إلى Azure وAWS وGoogle Cloud، تبحث الشركات عن كفاءات قادرة على تأمين هذه البيئات: تدبير الهويات والصلاحيات، والإعداد الآمن، والتشفير، والتسجيل، ومراقبة الوضعية الأمنية. ويجمع مهندس أمن السحابة بين مهارات مهندس الأمن التقليدي وإتقان جيد للخدمات السحابية.",
          "تبقى القاعدة نفسها: Security+ للأساسيات، ثم الشهادات الأمنية الخاصة بكل مزود سحابي. كما تغطي CISSP هندسة الأمن والسحابة للملفات المتقدمة.",
          "ملاحظة مهمة: أمن السحابة ليس مهنة للمبتدئين تماماً. فالمشغلون ينتظرون عادة خبرة سابقة في إدارة الأنظمة أو الشبكات أو الأمن، ثم تخصصاً في منصة أو منصتين. لذا يبقى بناء أسس متينة أولاً الاستراتيجية الأكثر أماناً.",
        ],
      },
      {
        heading: "ما القطاعات التي توظف كفاءات الأمن السيبراني في المغرب؟",
        paragraphs: [
          "يتركز الطلب أساساً في الدار البيضاء والرباط، لكنه يشمل قطاعات متنوعة، لكل منها أولوياته: المطابقة التنظيمية في المالية، وحماية البنيات التحتية الحساسة في الاتصالات، والمراقبة لحساب عملاء دوليين في الأوفشورينغ.",
        ],
        list: [
          "الأبناك والمؤسسات المالية: مراكز SOC داخلية والحوكمة والمطابقة",
          "شركات التأمين: تدبير المخاطر وحماية المعطيات",
          "مشغلو الاتصالات: أمن الشبكات والاستجابة للحوادث",
          "الأوفشورينغ ومزودو الأمن المُدار (MSSP): محللو SOC ومهندسون",
          "القطاع العام والمؤسسات العمومية: الحوكمة والمطابقة مع القانون 05-20",
          "مكاتب الاستشارة والتدقيق: اختبار الاختراق وISO 27001 والحوكمة",
        ],
      },
      {
        heading: "تكوّن في هذه المهن مع GATech",
        paragraphs: [
          "تُحضّر GATech لأغلب الشهادات المذكورة في هذا الدليل، حضورياً في الدار البيضاء والرباط أو في قسم افتراضي مباشر، مع قسيمة الامتحان الرسمية: CompTIA Security+ ابتداءً من 10900 درهم، وCySA+ من 12900 درهم، وISO 27001 Lead Implementer من 17900 درهم، وCHFI v11 من 19900 درهم، وCEH v13 من 21900 درهم، وCISSP من 23900 درهم.",
          "ولتخفيف الميزانية: خصم 10% للتسجيل المبكر، و15% للمجموعات ابتداءً من 3 مشاركين، و15% للطلبة والخريجين الجدد، أو الأداء على 3 دفعات بدون فوائد للأفراد. تواصل معنا لتحديد الشهادة الأنسب للمهنة التي تستهدفها.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      { q: "Quel métier de la cybersécurité choisir quand on débute ?", a: "Le poste d'analyste SOC est la porte d'entrée la plus fréquente pour un profil junior. Avec une base réseau et système, CompTIA Security+ puis CySA+ constituent un parcours cohérent." },
      { q: "Faut-il être développeur pour travailler en cybersécurité ?", a: "Non. Savoir lire et écrire des scripts simples aide beaucoup, surtout en pentest et en SOC, mais les métiers GRC, audit ou ISO 27001 reposent davantage sur l'analyse, la rédaction et la communication." },
      { q: "Quelle certification pour devenir RSSI ?", a: "Le CISSP est la référence pour les postes de direction sécurité, souvent complété par le CISM. Ces certifications exigent plusieurs années d'expérience professionnelle pour obtenir le titre complet." },
      { q: "Peut-on travailler en cybersécurité sans profil technique ?", a: "Oui, notamment en GRC, conformité ou audit ISO 27001. Une formation ISO 27001 Lead Implementer permet à des juristes, auditeurs ou chefs de projet de s'orienter vers la gouvernance de la sécurité." },
      { q: "Où trouver un emploi en cybersécurité au Maroc ?", a: "Les banques, assurances, opérateurs télécoms, centres d'offshoring, prestataires de sécurité managée, cabinets de conseil et le secteur public recrutent, principalement à Casablanca et Rabat." },
    ],
    en: [
      { q: "Which cybersecurity job should I choose as a beginner?", a: "SOC analyst is the most common entry point for junior profiles. With a networking and systems background, CompTIA Security+ followed by CySA+ makes a coherent path." },
      { q: "Do I need to be a developer to work in cybersecurity?", a: "No. Being able to read and write simple scripts helps a lot, especially in pentesting and SOC work, but GRC, audit and ISO 27001 roles rely more on analysis, writing and communication." },
      { q: "Which certification leads to a CISO role?", a: "CISSP is the reference for security leadership roles, often complemented by CISM. Both require several years of professional experience to obtain the full credential." },
      { q: "Can I work in cybersecurity without a technical background?", a: "Yes, particularly in GRC, compliance or ISO 27001 auditing. ISO 27001 Lead Implementer training lets lawyers, auditors or project managers move into security governance." },
      { q: "Where can I find a cybersecurity job in Morocco?", a: "Banks, insurers, telecom operators, offshoring centres, managed security providers, consulting firms and the public sector all hire, mainly in Casablanca and Rabat." },
    ],
    ar: [
      { q: "أي مهنة في الأمن السيبراني أختار كمبتدئ؟", a: "تعد وظيفة محلل SOC بوابة الدخول الأكثر شيوعاً للمبتدئين. ومع أساس في الشبكات والأنظمة، تشكل CompTIA Security+ ثم CySA+ مساراً متناسقاً." },
      { q: "هل يجب أن أكون مطوراً للعمل في الأمن السيبراني؟", a: "لا. تساعد القدرة على قراءة وكتابة سكريبتات بسيطة كثيراً، خاصة في اختبار الاختراق وSOC، لكن مهن الحوكمة والتدقيق وISO 27001 تعتمد أكثر على التحليل والتحرير والتواصل." },
      { q: "ما الشهادة التي تقود إلى منصب RSSI؟", a: "تعد CISSP المرجع لمناصب قيادة الأمن، وغالباً ما تُكمَّل بـCISM. وتتطلب الشهادتان عدة سنوات من الخبرة المهنية للحصول على اللقب الكامل." },
      { q: "هل يمكن العمل في الأمن السيبراني دون خلفية تقنية؟", a: "نعم، خاصة في الحوكمة والمطابقة وتدقيق ISO 27001. يتيح تكوين ISO 27001 Lead Implementer لرجال القانون والمدققين ومديري المشاريع التوجه نحو حوكمة الأمن." },
      { q: "أين أجد وظيفة في الأمن السيبراني بالمغرب؟", a: "توظف الأبناك وشركات التأمين ومشغلو الاتصالات ومراكز الأوفشورينغ ومزودو الأمن المُدار ومكاتب الاستشارة والقطاع العام، أساساً في الدار البيضاء والرباط." },
    ],
  },
};

export default guide;
