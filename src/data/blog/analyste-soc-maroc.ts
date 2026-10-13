import type { Guide } from "../types";

const guide: Guide = {
  slug: "analyste-soc-maroc",
  category: "carrieres",
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  readingMinutes: 6,
  relatedCerts: ["comptia-security-plus", "cnd-v3", "comptia-cysa-plus", "chfi-v11"],
  title: {
    fr: "Devenir analyste SOC au Maroc : missions, compétences, certifications",
    ar: "أن تصبح محلل SOC في المغرب: المهام والكفاءات والشهادات",
    en: "Becoming a SOC Analyst in Morocco: Duties, Skills and Certifications",
  },
  seoTitle: {
    fr: "Analyste SOC au Maroc : missions, compétences, certifs",
    ar: "محلل SOC في المغرب: المهام والكفاءات والشهادات",
    en: "SOC Analyst in Morocco: Duties, Skills, Certifications",
  },
  seoDescription: {
    fr: "Analyste SOC au Maroc : rôles L1/L2/L3, missions, outils, compétences, certifications et où trouver un emploi SOC à Casablanca. Construisez votre parcours.",
    ar: "محلل SOC في المغرب: أدوار L1 وL2 وL3 والمهام والأدوات والكفاءات والشهادات وأين تجد وظيفة SOC في الدار البيضاء. ابدأ اليوم في بناء مسارك المهني بخطوات واضحة.",
    en: "SOC analyst in Morocco: L1/L2/L3 roles, daily tasks, tools, skills, certifications and where to find SOC jobs in Casablanca. Start building your career path.",
  },
  excerpt: {
    fr: "L'analyste SOC surveille, trie et traite les alertes de sécurité d'une organisation, souvent en équipe et en horaires décalés. Missions, niveaux L1 à L3, compétences, certifications et pistes concrètes pour décrocher un premier poste au Maroc.",
    ar: "يراقب محلل SOC تنبيهات الأمن في المؤسسة ويفرزها ويعالجها، غالبا ضمن فريق وبنظام المناوبات. إليك المهام والمستويات من L1 إلى L3 والكفاءات والشهادات وخطوات عملية للحصول على أول وظيفة في المغرب.",
    en: "A SOC analyst monitors, triages and handles an organisation's security alerts, often in a team and on shifts. Here are the duties, L1 to L3 levels, skills, certifications and practical steps to land a first job in Morocco.",
  },
  sections: {
    fr: [
      {
        heading: "Qu'est-ce qu'un analyste SOC et que fait-il concrètement ?",
        paragraphs: [
          "Un SOC (Security Operations Center) est l'équipe qui surveille en continu la sécurité d'une organisation : postes de travail, serveurs, réseau, cloud, comptes utilisateurs. L'analyste SOC en est le maillon central. Son rôle : repérer les événements suspects parmi des milliers de journaux, déterminer s'il s'agit d'une vraie menace ou d'un faux positif, puis déclencher la bonne réponse avant que l'incident ne prenne de l'ampleur.",
          "Au Maroc, ce métier est l'une des portes d'entrée les plus accessibles en cybersécurité. Il demande de la rigueur et de bonnes bases techniques plutôt qu'une longue expérience, et il offre une progression claire, du premier niveau de triage jusqu'à la chasse aux menaces. C'est aussi un poste où l'on apprend vite, parce qu'on voit chaque jour de vraies attaques, de vraies erreurs de configuration et de vrais comportements d'utilisateurs.",
        ],
      },
      {
        heading: "Analyste SOC L1, L2, L3 : quelles différences de rôle ?",
        paragraphs: [
          "La plupart des SOC organisent leurs équipes en trois niveaux. Les intitulés varient d'une structure à l'autre, mais la logique reste la même : plus on monte, plus l'analyse est profonde et moins le travail est guidé par des procédures.",
        ],
        list: [
          "Niveau 1 (L1) : surveillance des consoles, tri des alertes, qualification selon les procédures (playbooks), escalade des cas avérés vers le niveau 2. C'est le poste d'entrée habituel.",
          "Niveau 2 (L2) : investigation approfondie des incidents escaladés, corrélation de sources multiples, confinement (isolement d'un poste, blocage d'un compte), recommandations de remédiation.",
          "Niveau 3 (L3) : incidents complexes, chasse aux menaces (threat hunting), analyse de logiciels malveillants, forensique, création et amélioration des règles de détection.",
          "Autour de ces niveaux : ingénieurs SIEM et détection, analystes threat intelligence, responsables d'équipe et managers SOC.",
        ],
      },
      {
        heading: "À quoi ressemble la journée d'un analyste SOC ?",
        paragraphs: [
          "Le cœur du travail, c'est le triage d'alertes. Une alerte remonte dans le SIEM ou la console EDR : connexion depuis un pays inhabituel, exécution de PowerShell suspecte, trafic vers un domaine malveillant connu. L'analyste vérifie le contexte, consulte les journaux associés, compare avec des sources de renseignement sur les menaces, puis décide : fermer comme faux positif, documenter, ou escalader.",
          "Lorsqu'un incident est confirmé, la réponse s'enclenche : isolement de la machine, réinitialisation d'identifiants, recherche d'autres postes touchés, communication avec les équipes informatiques. Chaque étape est tracée dans un outil de ticketing, car la documentation sert ensuite à l'amélioration des règles et, le cas échéant, aux obligations de notification.",
          "Les grandes familles d'outils que l'on retrouve dans la plupart des SOC sont les suivantes. Les éditeurs varient selon les organisations ; ce qui compte, c'est de comprendre ce que fait chaque famille.",
        ],
        list: [
          "SIEM : collecte, corrélation et recherche dans les journaux de toute l'infrastructure.",
          "EDR / XDR : visibilité et réponse sur les postes de travail et les serveurs.",
          "SOAR : automatisation des tâches répétitives et orchestration de la réponse.",
          "Plateformes de threat intelligence : indicateurs de compromission, réputation d'adresses IP et de domaines.",
          "Analyse réseau (IDS/IPS, NDR, captures de paquets) et bacs à sable pour l'analyse de fichiers suspects.",
          "Outils de ticketing et de gestion des incidents.",
        ],
      },
      {
        heading: "Quelles compétences faut-il pour devenir analyste SOC ?",
        paragraphs: [
          "Les recruteurs recherchent d'abord un socle technique solide et une vraie capacité d'analyse. Les outils s'apprennent sur le poste ; la compréhension de ce qui est normal ou anormal dans un système, beaucoup moins.",
        ],
        list: [
          "Réseau : TCP/IP, DNS, HTTP, protocoles courants, lecture de journaux de pare-feu et de proxy.",
          "Systèmes : journaux d'événements Windows, Active Directory, fonctionnement de Linux.",
          "Connaissance des attaques : phishing, rançongiciels, mouvements latéraux, et le référentiel MITRE ATT&CK.",
          "Langages de requête et scripting : savoir écrire une recherche dans un SIEM, automatiser une tâche en Python ou PowerShell.",
          "Savoir-être : rigueur, calme sous pression, rédaction claire en français et en anglais, travail en équipe et transmission propre entre deux équipes.",
        ],
      },
      {
        heading: "Quelles certifications pour devenir analyste SOC au Maroc ?",
        paragraphs: [
          "Aucune certification n'est obligatoire, mais elles aident à passer le filtrage RH et à structurer l'apprentissage. Un parcours logique, du débutant à l'analyste confirmé, peut ressembler à ceci :",
        ],
        list: [
          "CompTIA Security+ (SY0-701) : le socle des fondamentaux de la sécurité, souvent demandé pour un poste L1. Formation de 5 jours, à partir de 10 900 MAD voucher inclus.",
          "Certified Network Defender v3 (CND, examen 312-38) : la défense du réseau, la surveillance et la réponse aux incidents côté infrastructure. 5 jours, à partir de 15 900 MAD.",
          "CompTIA CySA+ (CS0-003) : la certification orientée analyste par excellence, centrée sur la détection, l'analyse de comportements et la gestion des vulnérabilités. 5 jours, à partir de 12 900 MAD.",
          "CHFI v11 (examen 312-49) : l'investigation numérique et la forensique, utile pour évoluer vers le L3 ou la réponse à incident. 5 jours, à partir de 19 900 MAD.",
        ],
      },
      {
        heading: "Où trouver un emploi SOC à Casablanca, Rabat et ailleurs au Maroc ?",
        paragraphs: [
          "Les postes SOC se concentrent surtout dans l'axe Casablanca-Rabat, avec des opportunités aussi à Tanger, Fès ou Marrakech et de plus en plus en télétravail partiel. Plusieurs types d'employeurs recrutent des analystes : les banques et assurances, qui ont souvent leur propre SOC ; les opérateurs télécoms ; les prestataires de services de sécurité managés (MSSP), qui surveillent plusieurs clients à la fois ; les centres d'offshoring et de services partagés qui opèrent des SOC pour des clients européens ; et le secteur public ainsi que les opérateurs d'importance vitale, concernés par la loi 05-20 et le référentiel de la DGSSI.",
          "Un point à connaître avant de postuler : un SOC fonctionne souvent 24 heures sur 24, 7 jours sur 7. Les postes L1 impliquent donc fréquemment des horaires en rotation, des nuits ou des week-ends, selon des modalités qui varient d'un employeur à l'autre. Pour un SOC qui surveille des clients européens depuis le Maroc, la maîtrise du français et de l'anglais est un atout majeur.",
        ],
      },
      {
        heading: "Comment décrocher un premier poste d'analyste SOC ?",
        paragraphs: [
          "Le premier poste est souvent le plus difficile à obtenir, car beaucoup d'offres demandent déjà de l'expérience. La clé est de montrer que vous savez faire, même sans expérience professionnelle en SOC.",
        ],
        list: [
          "Montez un petit lab à domicile : un SIEM open source, deux machines virtuelles, et générez puis analysez vos propres attaques.",
          "Pratiquez sur des plateformes d'entraînement défensif (exercices de type « blue team », challenges d'analyse de journaux).",
          "Documentez vos analyses sur un blog ou un dépôt GitHub : c'est un portfolio que les recruteurs peuvent consulter.",
          "Visez une certification reconnue, comme Security+ pour commencer, puis CySA+.",
          "Ciblez les MSSP et les centres d'offshoring, qui recrutent régulièrement des profils juniors, et les stages de fin d'études.",
          "Préparez l'entretien : on vous demandera souvent d'analyser une alerte ou un journal en direct et d'expliquer votre raisonnement.",
        ],
      },
      {
        heading: "Se former au métier d'analyste SOC avec GATech",
        paragraphs: [
          "GATech propose au Maroc l'ensemble de ce parcours : Security+, CND v3, CySA+ et CHFI v11, en salle à Casablanca et à Rabat ou en classe virtuelle, avec le voucher d'examen officiel inclus. Nos conseillers peuvent évaluer votre niveau et vous indiquer par quelle certification commencer.",
          "Pour alléger le budget : 10 % de remise pour une inscription anticipée, 15 % pour les groupes d'au moins trois collaborateurs d'une même entreprise, 15 % pour les étudiants et jeunes diplômés, ou un paiement en trois fois sans frais pour les particuliers (remises non cumulables). Demandez votre devis et lancez votre carrière SOC.",
        ],
      },
    ],
    ar: [
      {
        heading: "من هو محلل SOC وماذا يفعل فعليا؟",
        paragraphs: [
          "مركز العمليات الأمنية SOC (Security Operations Center) هو الفريق الذي يراقب أمن المؤسسة بشكل مستمر: محطات العمل والخوادم والشبكة والسحابة وحسابات المستخدمين. ومحلل SOC هو الحلقة المركزية فيه. تتمثل مهمته في رصد الأحداث المشبوهة وسط آلاف السجلات، وتحديد ما إذا كانت تهديدا حقيقيا أم إنذارا كاذبا، ثم إطلاق الاستجابة المناسبة قبل أن يتفاقم الحادث.",
          "في المغرب، تُعد هذه المهنة من أسهل المداخل إلى مجال الأمن السيبراني. فهي تتطلب الدقة وأسسا تقنية جيدة أكثر مما تتطلب خبرة طويلة، وتوفر مسارا واضحا للتطور، من الفرز في المستوى الأول إلى البحث الاستباقي عن التهديدات. كما أنها وظيفة يتعلم فيها المرء بسرعة، لأنه يرى يوميا هجمات حقيقية وأخطاء إعداد حقيقية وسلوكيات مستخدمين حقيقية.",
        ],
      },
      {
        heading: "محلل SOC من المستوى L1 وL2 وL3: ما الفرق بين الأدوار؟",
        paragraphs: [
          "تنظم أغلب مراكز SOC فرقها في ثلاثة مستويات. تختلف المسميات من مؤسسة إلى أخرى، لكن المنطق يبقى واحدا: كلما ارتفع المستوى، تعمق التحليل وقل الاعتماد على الإجراءات المحددة مسبقا.",
        ],
        list: [
          "المستوى 1 (L1): مراقبة الشاشات وفرز التنبيهات وتصنيفها وفق الإجراءات (playbooks) وتصعيد الحالات المؤكدة إلى المستوى 2. وهي وظيفة الدخول المعتادة.",
          "المستوى 2 (L2): تحقيق معمق في الحوادث المصعدة وربط مصادر متعددة والاحتواء (عزل جهاز أو حظر حساب) وتقديم توصيات المعالجة.",
          "المستوى 3 (L3): الحوادث المعقدة والبحث الاستباقي عن التهديدات (threat hunting) وتحليل البرمجيات الخبيثة والتحليل الجنائي الرقمي وإنشاء قواعد الكشف وتحسينها.",
          "حول هذه المستويات: مهندسو SIEM والكشف ومحللو استخبارات التهديدات ورؤساء الفرق ومديرو SOC.",
        ],
      },
      {
        heading: "كيف يبدو يوم عمل محلل SOC؟",
        paragraphs: [
          "جوهر العمل هو فرز التنبيهات. يظهر تنبيه في SIEM أو في واجهة EDR: تسجيل دخول من بلد غير معتاد، أو تنفيذ مشبوه لـ PowerShell، أو حركة نحو نطاق خبيث معروف. يتحقق المحلل من السياق ويراجع السجلات المرتبطة ويقارن مع مصادر استخبارات التهديدات، ثم يقرر: إغلاق التنبيه كإنذار كاذب، أو توثيقه، أو تصعيده.",
          "عند تأكيد الحادث، تنطلق الاستجابة: عزل الجهاز وإعادة تعيين بيانات الدخول والبحث عن أجهزة أخرى متأثرة والتواصل مع فرق المعلوميات. تُسجل كل خطوة في أداة تذاكر، لأن التوثيق يُستعمل بعد ذلك لتحسين القواعد، وعند الاقتضاء للوفاء بالتزامات التبليغ.",
          "هذه هي العائلات الرئيسية للأدوات الموجودة في أغلب مراكز SOC. يختلف المزودون من مؤسسة إلى أخرى، والمهم هو فهم وظيفة كل عائلة.",
        ],
        list: [
          "SIEM: جمع السجلات من كامل البنية التحتية وربطها والبحث فيها.",
          "EDR / XDR: الرؤية والاستجابة على محطات العمل والخوادم.",
          "SOAR: أتمتة المهام المتكررة وتنسيق الاستجابة.",
          "منصات استخبارات التهديدات: مؤشرات الاختراق وسمعة عناوين IP والنطاقات.",
          "تحليل الشبكة (IDS/IPS وNDR والتقاط الحزم) وبيئات sandbox لتحليل الملفات المشبوهة.",
          "أدوات التذاكر وإدارة الحوادث.",
        ],
      },
      {
        heading: "ما الكفاءات المطلوبة لتصبح محلل SOC؟",
        paragraphs: [
          "يبحث المشغلون أولا عن أساس تقني متين وقدرة حقيقية على التحليل. فالأدوات تُتعلم أثناء العمل، أما فهم ما هو عادي أو غير عادي في نظام معلوماتي فيتطلب وقتا أطول بكثير.",
        ],
        list: [
          "الشبكات: TCP/IP وDNS وHTTP والبروتوكولات الشائعة وقراءة سجلات الجدار الناري والـ proxy.",
          "الأنظمة: سجلات أحداث Windows وActive Directory وطريقة عمل Linux.",
          "معرفة الهجمات: التصيد الاحتيالي وبرامج الفدية والتنقل الجانبي وإطار MITRE ATT&CK.",
          "لغات الاستعلام والبرمجة النصية: كتابة بحث في SIEM وأتمتة مهمة بـ Python أو PowerShell.",
          "المهارات الشخصية: الدقة والهدوء تحت الضغط والكتابة الواضحة بالفرنسية والإنجليزية والعمل الجماعي والتسليم المنظم بين المناوبات.",
        ],
      },
      {
        heading: "ما الشهادات التي تساعدك على أن تصبح محلل SOC في المغرب؟",
        paragraphs: [
          "لا توجد شهادة إلزامية، لكن الشهادات تساعد على اجتياز الفرز الأولي لدى الموارد البشرية وتنظيم التعلم. ويمكن أن يبدو المسار المنطقي، من المبتدئ إلى المحلل المتمرس، على النحو التالي:",
        ],
        list: [
          "CompTIA Security+ (SY0-701): أساسيات الأمن، وغالبا ما تُطلب لوظيفة L1. تكوين لمدة 5 أيام، ابتداء من 10900 درهم مع قسيمة الامتحان.",
          "Certified Network Defender v3 (CND، امتحان 312-38): الدفاع عن الشبكة والمراقبة والاستجابة للحوادث على مستوى البنية التحتية. 5 أيام، ابتداء من 15900 درهم.",
          "CompTIA CySA+ (CS0-003): شهادة المحلل بامتياز، تركز على الكشف وتحليل السلوكيات وإدارة الثغرات. 5 أيام، ابتداء من 12900 درهم.",
          "CHFI v11 (امتحان 312-49): التحقيق الرقمي والتحليل الجنائي، مفيدة للانتقال إلى المستوى L3 أو إلى الاستجابة للحوادث. 5 أيام، ابتداء من 19900 درهم.",
        ],
      },
      {
        heading: "أين تجد وظيفة SOC في الدار البيضاء والرباط وباقي مدن المغرب؟",
        paragraphs: [
          "تتركز وظائف SOC أساسا في محور الدار البيضاء-الرباط، مع فرص أيضا في طنجة وفاس ومراكش، وبشكل متزايد مع العمل الجزئي عن بعد. وتوظف عدة أنواع من المؤسسات محللين: الأبناك وشركات التأمين التي غالبا ما تمتلك مركز SOC خاصا بها، ومشغلو الاتصالات، ومزودو خدمات الأمن المُدارة (MSSP) الذين يراقبون عدة عملاء في آن واحد، ومراكز الأوفشورينغ والخدمات المشتركة التي تشغّل مراكز SOC لعملاء أوروبيين، والقطاع العام والفاعلون ذوو الأهمية الحيوية المعنيون بالقانون 05-20 وبمرجع DGSSI.",
          "نقطة يجب معرفتها قبل التقدم: يعمل مركز SOC في الغالب على مدار الساعة وطيلة أيام الأسبوع. لذلك تتضمن وظائف L1 كثيرا مناوبات دورية أو ليالي أو عطل نهاية الأسبوع، وفق ترتيبات تختلف من مشغل إلى آخر. وبالنسبة لمراكز SOC التي تخدم عملاء أوروبيين من المغرب، يشكل إتقان الفرنسية والإنجليزية ميزة كبيرة.",
        ],
      },
      {
        heading: "كيف تحصل على أول وظيفة كمحلل SOC؟",
        paragraphs: [
          "غالبا ما تكون الوظيفة الأولى هي الأصعب، لأن كثيرا من العروض تشترط خبرة سابقة. والمفتاح هو أن تُظهر قدرتك على القيام بالعمل، حتى دون خبرة مهنية في SOC.",
        ],
        list: [
          "أنشئ مختبرا صغيرا في المنزل: SIEM مفتوح المصدر وآلتان افتراضيتان، ثم نفّذ هجماتك الخاصة وحللها.",
          "تدرب على منصات التدريب الدفاعي (تمارين blue team وتحديات تحليل السجلات).",
          "وثّق تحليلاتك في مدونة أو مستودع GitHub: إنه ملف إنجازات يمكن للمشغلين الاطلاع عليه.",
          "استهدف شهادة معترفا بها، مثل Security+ للبداية ثم CySA+.",
          "ركز على مزودي MSSP ومراكز الأوفشورينغ التي توظف بانتظام ملفات مبتدئة، وعلى تداريب نهاية الدراسة.",
          "استعد للمقابلة: كثيرا ما سيُطلب منك تحليل تنبيه أو سجل مباشرة وشرح طريقة تفكيرك.",
        ],
      },
      {
        heading: "تكوّن في مهنة محلل SOC مع GATech",
        paragraphs: [
          "تقترح GATech في المغرب هذا المسار كاملا: Security+ وCND v3 وCySA+ وCHFI v11، حضوريا في الدار البيضاء والرباط أو عن بعد في قسم افتراضي مباشر، مع قسيمة الامتحان الرسمية. ويمكن لمستشارينا تقييم مستواك وإرشادك إلى الشهادة التي تبدأ بها.",
          "لتخفيف الميزانية: خصم 10% للتسجيل المبكر، و15% للمجموعات ابتداء من ثلاثة موظفين من نفس الشركة، و15% للطلبة والخريجين الجدد، أو الأداء على 3 دفعات بدون فوائد للأفراد (الخصومات غير قابلة للجمع). اطلب عرض السعر وانطلق في مسارك المهني في SOC.",
        ],
      },
    ],
    en: [
      {
        heading: "What is a SOC analyst and what do they actually do?",
        paragraphs: [
          "A SOC (Security Operations Center) is the team that continuously monitors an organisation's security: workstations, servers, network, cloud and user accounts. The SOC analyst is its central link. The job is to spot suspicious events among thousands of logs, decide whether they are a real threat or a false positive, then trigger the right response before the incident grows.",
          "In Morocco, this is one of the most accessible entry points into cybersecurity. It requires rigour and solid technical foundations rather than long experience, and it offers a clear progression, from first-level triage to threat hunting. It is also a role where you learn fast, because every day you see real attacks, real misconfigurations and real user behaviour.",
        ],
      },
      {
        heading: "SOC analyst L1, L2, L3: how do the roles differ?",
        paragraphs: [
          "Most SOCs organise their teams into three tiers. Job titles vary from one organisation to another, but the logic is the same: the higher you go, the deeper the analysis and the less the work is driven by procedures.",
        ],
        list: [
          "Tier 1 (L1): monitoring consoles, triaging alerts, qualifying them according to playbooks, escalating confirmed cases to tier 2. This is the usual entry-level role.",
          "Tier 2 (L2): in-depth investigation of escalated incidents, correlation of multiple sources, containment (isolating a host, blocking an account), remediation recommendations.",
          "Tier 3 (L3): complex incidents, threat hunting, malware analysis, forensics, and building and tuning detection rules.",
          "Around these tiers: SIEM and detection engineers, threat intelligence analysts, team leads and SOC managers.",
        ],
      },
      {
        heading: "What does a SOC analyst's day look like?",
        paragraphs: [
          "The heart of the job is alert triage. An alert appears in the SIEM or EDR console: a login from an unusual country, suspicious PowerShell execution, traffic to a known malicious domain. The analyst checks the context, reviews related logs, compares with threat intelligence sources, then decides: close as a false positive, document, or escalate.",
          "When an incident is confirmed, the response begins: isolating the machine, resetting credentials, looking for other affected hosts, communicating with IT teams. Every step is recorded in a ticketing tool, because documentation then feeds rule improvement and, where applicable, notification obligations.",
          "These are the main tool families found in most SOCs. Vendors vary between organisations; what matters is understanding what each family does.",
        ],
        list: [
          "SIEM: collecting, correlating and searching logs from the whole infrastructure.",
          "EDR / XDR: visibility and response on workstations and servers.",
          "SOAR: automating repetitive tasks and orchestrating the response.",
          "Threat intelligence platforms: indicators of compromise, IP address and domain reputation.",
          "Network analysis (IDS/IPS, NDR, packet captures) and sandboxes for analysing suspicious files.",
          "Ticketing and incident management tools.",
        ],
      },
      {
        heading: "What skills do you need to become a SOC analyst?",
        paragraphs: [
          "Recruiters look first for a solid technical foundation and genuine analytical ability. Tools are learned on the job; understanding what is normal or abnormal in a system takes much longer.",
        ],
        list: [
          "Networking: TCP/IP, DNS, HTTP, common protocols, reading firewall and proxy logs.",
          "Systems: Windows event logs, Active Directory, how Linux works.",
          "Attack knowledge: phishing, ransomware, lateral movement, and the MITRE ATT&CK framework.",
          "Query languages and scripting: writing a SIEM search, automating a task in Python or PowerShell.",
          "Soft skills: rigour, calm under pressure, clear writing in French and English, teamwork and clean shift handovers.",
        ],
      },
      {
        heading: "Which certifications help you become a SOC analyst in Morocco?",
        paragraphs: [
          "No certification is mandatory, but they help you pass HR screening and give structure to your learning. A logical path, from beginner to experienced analyst, could look like this:",
        ],
        list: [
          "CompTIA Security+ (SY0-701): the core security fundamentals, often requested for an L1 role. 5-day training, from 10,900 MAD with the voucher included.",
          "Certified Network Defender v3 (CND, exam 312-38): network defence, monitoring and infrastructure-side incident response. 5 days, from 15,900 MAD.",
          "CompTIA CySA+ (CS0-003): the analyst certification par excellence, focused on detection, behaviour analysis and vulnerability management. 5 days, from 12,900 MAD.",
          "CHFI v11 (exam 312-49): digital investigation and forensics, useful for moving to L3 or incident response. 5 days, from 19,900 MAD.",
        ],
      },
      {
        heading: "Where can you find SOC jobs in Casablanca, Rabat and elsewhere in Morocco?",
        paragraphs: [
          "SOC roles are concentrated mainly along the Casablanca–Rabat axis, with opportunities in Tangier, Fez or Marrakech too, and increasingly with partial remote work. Several types of employers hire analysts: banks and insurers, which often run their own SOC; telecom operators; managed security service providers (MSSPs), which monitor several clients at once; offshoring and shared-services centres operating SOCs for European clients; and the public sector and critical infrastructure operators covered by Law 05-20 and the DGSSI framework.",
          "One thing to know before applying: a SOC often runs 24/7. L1 roles therefore frequently involve rotating shifts, nights or weekends, with arrangements that vary between employers. For a SOC serving European clients from Morocco, fluency in French and English is a major asset.",
        ],
      },
      {
        heading: "How do you land your first SOC analyst job?",
        paragraphs: [
          "The first job is often the hardest to get, because many postings already ask for experience. The key is to show that you can do the work, even without professional SOC experience.",
        ],
        list: [
          "Build a small home lab: an open-source SIEM, two virtual machines, then generate and analyse your own attacks.",
          "Practise on defensive training platforms (blue team exercises, log analysis challenges).",
          "Document your analyses on a blog or GitHub repository: a portfolio recruiters can actually look at.",
          "Aim for a recognised certification, such as Security+ to start, then CySA+.",
          "Target MSSPs and offshoring centres, which regularly hire junior profiles, as well as end-of-studies internships.",
          "Prepare for the interview: you will often be asked to analyse an alert or a log live and explain your reasoning.",
        ],
      },
      {
        heading: "Training for a SOC analyst career with GATech",
        paragraphs: [
          "GATech offers the whole path in Morocco: Security+, CND v3, CySA+ and CHFI v11, in the classroom in Casablanca and Rabat or live online, with the official exam voucher included. Our advisers can assess your level and tell you which certification to start with.",
          "To ease the budget: 10% off for early registration, 15% for groups of at least three colleagues from the same company, 15% for students and recent graduates, or three interest-free instalments for individuals (discounts cannot be combined). Request your quote and launch your SOC career.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      {
        q: "Peut-on devenir analyste SOC sans diplôme en cybersécurité ?",
        a: "Oui. Beaucoup d'analystes viennent de l'administration système, du réseau ou du support informatique. Un bon socle technique, un lab personnel documenté et une certification comme Security+ ou CySA+ permettent de compenser l'absence de diplôme spécialisé.",
      },
      {
        q: "Quelle certification choisir pour un premier poste SOC ?",
        a: "CompTIA Security+ est souvent le meilleur point de départ pour un poste L1, car elle couvre les fondamentaux demandés par les recruteurs. CySA+ vient ensuite pour valider des compétences d'analyste, et le CND v3 renforce la partie défense réseau.",
      },
      {
        q: "Le travail en SOC implique-t-il des horaires de nuit ?",
        a: "Souvent, oui, surtout au niveau L1. Beaucoup de SOC fonctionnent 24 heures sur 24, ce qui implique des rotations, des nuits ou des week-ends. Les modalités varient selon l'employeur : posez la question dès l'entretien.",
      },
      {
        q: "Quelle est la différence entre un analyste SOC et un pentesteur ?",
        a: "L'analyste SOC est du côté défensif (blue team) : il détecte et traite les attaques en cours. Le pentesteur est du côté offensif (red team) : il simule des attaques pour trouver les failles avant les attaquants. Les deux métiers se complètent et certains professionnels passent de l'un à l'autre.",
      },
      {
        q: "Où se trouvent les emplois SOC au Maroc ?",
        a: "Principalement à Casablanca et Rabat, dans les banques, assurances, opérateurs télécoms, prestataires de sécurité managée (MSSP), centres d'offshoring et dans le secteur public. Des postes existent aussi à Tanger, Fès ou Marrakech, parfois en télétravail partiel.",
      },
    ],
    ar: [
      {
        q: "هل يمكن أن أصبح محلل SOC دون شهادة جامعية في الأمن السيبراني؟",
        a: "نعم. كثير من المحللين يأتون من إدارة الأنظمة أو الشبكات أو الدعم المعلوماتي. أسس تقنية جيدة ومختبر شخصي موثق وشهادة مثل Security+ أو CySA+ تعوض غياب الشهادة الجامعية المتخصصة.",
      },
      {
        q: "أي شهادة أختار لأول وظيفة في SOC؟",
        a: "غالبا ما تكون CompTIA Security+ أفضل نقطة انطلاق لوظيفة L1، لأنها تغطي الأساسيات التي يطلبها المشغلون. تأتي بعدها CySA+ لإثبات كفاءات المحلل، بينما تعزز CND v3 جانب الدفاع عن الشبكات.",
      },
      {
        q: "هل يتطلب العمل في SOC مناوبات ليلية؟",
        a: "في الغالب نعم، خاصة في المستوى L1. تعمل كثير من مراكز SOC على مدار الساعة، ما يعني مناوبات دورية أو ليالي أو عطل نهاية الأسبوع. تختلف الترتيبات من مشغل لآخر، لذا اطرح السؤال منذ المقابلة.",
      },
      {
        q: "ما الفرق بين محلل SOC ومختبر الاختراق؟",
        a: "يعمل محلل SOC في الجانب الدفاعي (blue team): يكتشف الهجمات الجارية ويعالجها. أما مختبر الاختراق فيعمل في الجانب الهجومي (red team): يحاكي الهجمات لاكتشاف الثغرات قبل المهاجمين. المهنتان متكاملتان، وينتقل بعض المهنيين من إحداهما إلى الأخرى.",
      },
      {
        q: "أين توجد وظائف SOC في المغرب؟",
        a: "أساسا في الدار البيضاء والرباط، لدى الأبناك وشركات التأمين ومشغلي الاتصالات ومزودي خدمات الأمن المُدارة (MSSP) ومراكز الأوفشورينغ والقطاع العام. وتوجد وظائف أيضا في طنجة وفاس ومراكش، أحيانا مع العمل الجزئي عن بعد.",
      },
    ],
    en: [
      {
        q: "Can you become a SOC analyst without a cybersecurity degree?",
        a: "Yes. Many analysts come from system administration, networking or IT support. A solid technical foundation, a documented home lab and a certification such as Security+ or CySA+ can make up for the lack of a specialised degree.",
      },
      {
        q: "Which certification should you choose for a first SOC job?",
        a: "CompTIA Security+ is often the best starting point for an L1 role, as it covers the fundamentals recruiters ask for. CySA+ comes next to validate analyst skills, and CND v3 strengthens the network defence side.",
      },
      {
        q: "Does SOC work involve night shifts?",
        a: "Often, yes, especially at L1. Many SOCs run 24/7, which means rotating shifts, nights or weekends. Arrangements vary by employer, so ask during the interview.",
      },
      {
        q: "What is the difference between a SOC analyst and a pentester?",
        a: "A SOC analyst works on the defensive side (blue team), detecting and handling ongoing attacks. A pentester works on the offensive side (red team), simulating attacks to find weaknesses before attackers do. The two roles complement each other, and some professionals move from one to the other.",
      },
      {
        q: "Where are SOC jobs located in Morocco?",
        a: "Mainly in Casablanca and Rabat, in banks, insurers, telecom operators, managed security service providers (MSSPs), offshoring centres and the public sector. Roles also exist in Tangier, Fez or Marrakech, sometimes with partial remote work.",
      },
    ],
  },
};

export default guide;
