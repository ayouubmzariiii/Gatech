import type { Certification } from "../types";

const cert: Certification = {
  slug: "microsoft-sc-200",
  name: "Microsoft Security Operations Analyst (SC-200)",
  shortName: "SC-200",
  vendor: "Microsoft",
  examCode: "SC-200",
  level: "intermediate",
  category: "defensive",
  durationDays: 4,
  hours: 28,
  priceMAD: 9900,
  voucherIncluded: true,
  exam: {
    format: {
      fr: "Environ 40 à 60 questions (QCM, études de cas, glisser-déposer, requêtes KQL)",
      ar: "ما بين 40 و60 سؤالا تقريبا (أسئلة متعددة الاختيارات، دراسات حالة، سحب وإفلات، استعلامات KQL)",
      en: "Around 40–60 questions (multiple choice, case studies, drag-and-drop, KQL queries)",
    },
    duration: {
      fr: "100 minutes",
      ar: "100 دقيقة",
      en: "100 minutes",
    },
    passingScore: {
      fr: "700 sur une échelle de 1 à 1000",
      ar: "700 على سلم من 1 إلى 1000",
      en: "700 on a 1–1000 scale",
    },
    validity: {
      fr: "1 an, renouvelable gratuitement chaque année via une évaluation en ligne sur Microsoft Learn",
      ar: "سنة واحدة، قابلة للتجديد مجانا كل سنة عبر تقييم عن بعد على منصة Microsoft Learn",
      en: "1 year, renewable free of charge every year through an online assessment on Microsoft Learn",
    },
  },
  seoTitle: {
    fr: "Formation SC-200 au Maroc – Sentinel, Defender XDR",
    ar: "تكوين SC-200 في المغرب – Sentinel وDefender XDR",
    en: "SC-200 Training in Morocco – Sentinel & Defender XDR",
  },
  seoDescription: {
    fr: "Formation SC-200 (Defender XDR, Sentinel, KQL) à Casablanca, Rabat ou en ligne : 4 jours, voucher inclus, dès 9 900 MAD. Demandez le programme et les dates.",
    ar: "تكوين SC-200 حول Defender XDR وSentinel وKQL في الدار البيضاء أو الرباط أو عن بعد: 4 أيام مع قسيمة الامتحان، ابتداء من 9900 درهم. اطلب البرنامج الآن.",
    en: "SC-200 training (Defender XDR, Sentinel, KQL) in Casablanca, Rabat or online: 4 days, exam voucher included, from 9,900 MAD. Request the syllabus and dates.",
  },
  tagline: {
    fr: "Détectez, investiguez et répondez aux menaces avec Microsoft Defender XDR, Microsoft Sentinel et le langage KQL.",
    ar: "اكتشف التهديدات وحقق فيها واستجب لها باستعمال Microsoft Defender XDR وMicrosoft Sentinel ولغة KQL.",
    en: "Detect, investigate and respond to threats with Microsoft Defender XDR, Microsoft Sentinel and KQL.",
  },
  overview: {
    fr: [
      "L'examen SC-200 mène à la certification Microsoft Certified: Security Operations Analyst Associate. Il valide la capacité à protéger un environnement Microsoft en détectant, investiguant et traitant les menaces avec Microsoft Defender XDR (Defender for Endpoint, for Office 365, for Identity, for Cloud Apps), Microsoft Defender for Cloud et le SIEM/SOAR Microsoft Sentinel. Le langage KQL (Kusto Query Language) est au cœur de l'examen : chasse aux menaces, règles d'analyse et classeurs reposent sur lui.",
      "Au Maroc, de nombreuses entreprises utilisent déjà Microsoft 365 et Azure, et leurs licences E5 ou Defender sont souvent sous-exploitées faute d'analystes formés. Banques, assurances, opérateurs, administrations et MSSP qui montent des SOC à Casablanca et Rabat cherchent des profils capables de tirer parti de Sentinel et Defender XDR pour réduire le temps de détection. La loi 05-20 sur la cybersécurité, qui impose aux entités concernées de signaler les incidents à la DGSSI, ainsi que les obligations de la loi 09-08 et de la CNDP sur les données personnelles, rendent cette capacité de détection et de réponse indispensable.",
      "Notre formation de 4 jours (28 heures) suit les quatre domaines officiels du SC-200 avec des labs dans un tenant de démonstration : connecteurs de données Sentinel, règles d'analyse, playbooks, investigation d'incidents dans le portail Defender, et de nombreux exercices KQL. Elle se déroule en présentiel à Casablanca ou à Rabat, ou en classe virtuelle en direct, et le voucher d'examen est inclus dans le tarif.",
    ],
    ar: [
      "يؤدي امتحان SC-200 إلى شهادة Microsoft Certified: Security Operations Analyst Associate. ويثبت القدرة على حماية بيئة Microsoft عبر اكتشاف التهديدات والتحقيق فيها ومعالجتها باستعمال Microsoft Defender XDR (Defender for Endpoint وfor Office 365 وfor Identity وfor Cloud Apps)، وMicrosoft Defender for Cloud، ومنصة SIEM/SOAR المسماة Microsoft Sentinel. وتحتل لغة KQL (Kusto Query Language) مكانة محورية في الامتحان، إذ تعتمد عليها عمليات صيد التهديدات وقواعد التحليل ولوحات المتابعة.",
      "في المغرب، تستعمل مقاولات كثيرة Microsoft 365 وAzure، وغالبا ما تبقى تراخيص E5 أو Defender غير مستغلة بالكامل بسبب نقص المحللين المكونين. فالأبناك وشركات التأمين ومتعهدو الاتصالات والإدارات ومزودو خدمات الأمن المدبرة الذين ينشئون مراكز SOC في الدار البيضاء والرباط يبحثون عن كفاءات قادرة على الاستفادة من Sentinel وDefender XDR لتقليص زمن الاكتشاف. ويجعل القانون 05-20 المتعلق بالأمن السيبراني، الذي يلزم الجهات المعنية بالتصريح بالحوادث لدى DGSSI، إلى جانب التزامات القانون 09-08 وCNDP بشأن المعطيات الشخصية، هذه القدرة على الاكتشاف والاستجابة أمرا لا غنى عنه.",
      "يمتد تكويننا على 4 أيام (28 ساعة) ويغطي المجالات الأربعة الرسمية لامتحان SC-200 مع تمارين تطبيقية في بيئة تجريبية: موصلات البيانات في Sentinel، وقواعد التحليل، وplaybooks، والتحقيق في الحوادث عبر بوابة Defender، والعديد من تمارين KQL. ويجرى حضوريا في الدار البيضاء أو الرباط، أو في قسم افتراضي مباشر، وقسيمة الامتحان مدرجة في السعر.",
    ],
    en: [
      "The SC-200 exam leads to the Microsoft Certified: Security Operations Analyst Associate certification. It validates your ability to protect a Microsoft environment by detecting, investigating and remediating threats with Microsoft Defender XDR (Defender for Endpoint, for Office 365, for Identity, for Cloud Apps), Microsoft Defender for Cloud and the Microsoft Sentinel SIEM/SOAR. KQL (Kusto Query Language) sits at the heart of the exam: threat hunting, analytics rules and workbooks all rely on it.",
      "In Morocco, many organisations already run Microsoft 365 and Azure, and their E5 or Defender licences are often under-used for lack of trained analysts. Banks, insurers, telecom operators, public bodies and MSSPs building SOCs in Casablanca and Rabat want people who can get the most out of Sentinel and Defender XDR to cut detection time. Law 05-20 on cybersecurity, which requires in-scope entities to report incidents to the DGSSI, together with Law 09-08 and CNDP obligations on personal data, make this detection and response capability essential.",
      "Our 4-day (28-hour) course follows the four official SC-200 domains with labs in a demo tenant: Sentinel data connectors, analytics rules, playbooks, incident investigation in the Defender portal and plenty of KQL exercises. It runs in class in Casablanca or Rabat, or as a live virtual classroom, and the exam voucher is included in the price.",
    ],
  },
  audience: {
    fr: [
      "Analystes SOC niveau 1 et 2 travaillant dans un environnement Microsoft",
      "Administrateurs Microsoft 365 et Azure chargés de la sécurité de leur tenant",
      "Équipes sécurité de banques, d'assurances et d'administrations disposant de licences Defender ou E5",
      "Ingénieurs de MSSP et de centres d'offshoring opérant des SOC pour des clients européens",
      "Titulaires de Security+ ou CySA+ souhaitant se spécialiser sur la pile Microsoft",
    ],
    ar: [
      "محللو SOC من المستويين 1 و2 العاملون في بيئة Microsoft",
      "مديرو Microsoft 365 وAzure المكلفون بأمن بيئتهم",
      "فرق الأمن في الأبناك وشركات التأمين والإدارات التي تتوفر على تراخيص Defender أو E5",
      "مهندسو مزودي خدمات الأمن المدبرة ومراكز الأوفشورينغ الذين يشغلون SOC لفائدة زبناء أوروبيين",
      "حاملو شهادة Security+ أو CySA+ الراغبون في التخصص في منظومة Microsoft",
    ],
    en: [
      "Tier 1 and Tier 2 SOC analysts working in a Microsoft environment",
      "Microsoft 365 and Azure administrators responsible for their tenant's security",
      "Security teams at banks, insurers and public bodies with Defender or E5 licences",
      "Engineers at MSSPs and offshoring centres running SOCs for European clients",
      "Security+ or CySA+ holders who want to specialise in the Microsoft stack",
    ],
  },
  prerequisites: {
    fr: [
      "Connaissance de Microsoft 365, d'Azure et de Microsoft Entra ID (le niveau SC-900 ou AZ-900 est utile)",
      "Bases en sécurité opérationnelle : alertes, incidents, malwares, techniques MITRE ATT&CK",
      "Familiarité avec Windows, les journaux d'événements et idéalement un premier contact avec KQL",
      "Anglais technique en lecture ; l'examen est aussi disponible en français",
    ],
    ar: [
      "معرفة Microsoft 365 وAzure وMicrosoft Entra ID (يفيد مستوى SC-900 أو AZ-900)",
      "أساسيات الأمن العملياتي: التنبيهات والحوادث والبرمجيات الخبيثة وتقنيات MITRE ATT&CK",
      "الإلمام بنظام Windows وسجلات الأحداث، ويفضل الاطلاع الأولي على KQL",
      "قراءة الإنجليزية التقنية؛ والامتحان متاح أيضا باللغة الفرنسية",
    ],
    en: [
      "Familiarity with Microsoft 365, Azure and Microsoft Entra ID (SC-900 or AZ-900 level helps)",
      "Security operations basics: alerts, incidents, malware, MITRE ATT&CK techniques",
      "Comfort with Windows and event logs, and ideally some first exposure to KQL",
      "Reading-level technical English; the exam is also offered in French",
    ],
  },
  outcomes: {
    fr: [
      "Configurer Microsoft Sentinel : espace de travail, connecteurs de données et collecte des journaux",
      "Créer des règles d'analyse, des automatisations et des playbooks pour la détection et la réponse",
      "Investiguer et traiter les incidents dans le portail Microsoft Defender (XDR)",
      "Protéger postes, identités, messagerie et applications cloud avec la suite Defender",
      "Écrire des requêtes KQL pour la chasse aux menaces et l'analyse des journaux",
      "Aborder l'examen SC-200 avec une méthode éprouvée pour les études de cas",
    ],
    ar: [
      "ضبط Microsoft Sentinel: مساحة العمل وموصلات البيانات وجمع السجلات",
      "إنشاء قواعد التحليل والأتمتة وplaybooks للاكتشاف والاستجابة",
      "التحقيق في الحوادث ومعالجتها عبر بوابة Microsoft Defender (XDR)",
      "حماية الحواسيب والهويات والبريد الإلكتروني والتطبيقات السحابية بمجموعة Defender",
      "كتابة استعلامات KQL لصيد التهديدات وتحليل السجلات",
      "اجتياز امتحان SC-200 بمنهجية مجربة للتعامل مع دراسات الحالة",
    ],
    en: [
      "Configure Microsoft Sentinel: workspace, data connectors and log collection",
      "Build analytics rules, automation and playbooks for detection and response",
      "Investigate and remediate incidents in the Microsoft Defender (XDR) portal",
      "Protect endpoints, identities, email and cloud apps with the Defender suite",
      "Write KQL queries for threat hunting and log analysis",
      "Approach the SC-200 exam with a proven method for case studies",
    ],
  },
  modules: {
    fr: [
      "Domaine 1 – Gérer un environnement d'opérations de sécurité (Manage a security operations environment)",
      "Domaine 2 – Configurer les protections et les détections (Configure protections and detections)",
      "Domaine 3 – Gérer la réponse aux incidents (Manage incident response)",
      "Domaine 4 – Gérer les menaces de sécurité (Manage security threats)",
      "Atelier KQL : requêtes, fonctions et chasse aux menaces",
      "Préparation à l'examen : études de cas et examen blanc",
    ],
    ar: [
      "المجال 1 – تدبير بيئة عمليات الأمن (Manage a security operations environment)",
      "المجال 2 – ضبط الحماية والاكتشاف (Configure protections and detections)",
      "المجال 3 – تدبير الاستجابة للحوادث (Manage incident response)",
      "المجال 4 – تدبير التهديدات الأمنية (Manage security threats)",
      "ورشة KQL: الاستعلامات والدوال وصيد التهديدات",
      "التحضير للامتحان: دراسات حالة وامتحان تجريبي",
    ],
    en: [
      "Domain 1 – Manage a security operations environment",
      "Domain 2 – Configure protections and detections",
      "Domain 3 – Manage incident response",
      "Domain 4 – Manage security threats",
      "KQL workshop: queries, functions and threat hunting",
      "Exam preparation: case studies and practice exam",
    ],
  },
  careers: {
    fr: [
      "Analyste SOC niveau 2 / analyste opérations de sécurité",
      "Ingénieur Microsoft Sentinel / SIEM",
      "Threat hunter",
      "Ingénieur sécurité Microsoft 365 et Defender",
      "Consultant MSSP en détection et réponse",
    ],
    ar: [
      "محلل SOC من المستوى 2 / محلل عمليات الأمن",
      "مهندس Microsoft Sentinel / SIEM",
      "صائد التهديدات (Threat hunter)",
      "مهندس أمن Microsoft 365 وDefender",
      "مستشار في الاكتشاف والاستجابة لدى مزود خدمات أمن مدبرة",
    ],
    en: [
      "Tier 2 SOC analyst / security operations analyst",
      "Microsoft Sentinel / SIEM engineer",
      "Threat hunter",
      "Microsoft 365 and Defender security engineer",
      "MSSP detection and response consultant",
    ],
  },
  faqs: {
    fr: [
      {
        q: "Combien coûte la formation SC-200 au Maroc et que comprend le prix ?",
        a: "La formation est proposée à partir de 9 900 MAD. Ce tarif comprend les 4 jours de formation (28 heures) avec un formateur, les supports, les labs Sentinel et Defender, un examen blanc et le voucher pour l'examen officiel SC-200. Un devis entreprise peut être établi pour les équipes SOC.",
      },
      {
        q: "Quels moyens de paiement acceptez-vous ?",
        a: "Le paiement se fait en dirhams par virement bancaire ou par carte. Un paiement en plusieurs fois est possible sur demande, et les entreprises peuvent régler sur facture après validation du devis.",
      },
      {
        q: "La formation a-t-elle lieu en présentiel ou en ligne ?",
        a: "Les sessions sont organisées en présentiel à Casablanca et à Rabat, ou en classe virtuelle en direct, avec le même programme et les mêmes labs. Le format en ligne permet de suivre le cours depuis n'importe quelle ville du Maroc.",
      },
      {
        q: "Comment se passe l'examen SC-200 ?",
        a: "L'examen est administré par Pearson VUE, en ligne sous surveillance ou dans un centre agréé. Il dure 100 minutes, compte généralement entre 40 et 60 questions et le score requis est de 700 sur 1000. Une bonne pratique de KQL est indispensable pour réussir.",
      },
      {
        q: "La certification expire-t-elle ?",
        a: "Oui, la certification Security Operations Analyst Associate est valable un an. Elle se renouvelle gratuitement via une évaluation en ligne sur Microsoft Learn, accessible dans les six mois précédant l'expiration, sans repasser l'examen.",
      },
    ],
    ar: [
      {
        q: "كم يكلف تكوين SC-200 في المغرب وماذا يشمل السعر؟",
        a: "يبدأ سعر التكوين من 9900 درهم، ويشمل 4 أيام من التكوين (28 ساعة) مع مكون، والدعامات، وتمارين Sentinel وDefender، وامتحانا تجريبيا، وقسيمة الامتحان الرسمي SC-200. ويمكن إعداد عرض أسعار خاص بالمقاولات لفرق SOC.",
      },
      {
        q: "ما هي وسائل الأداء المتاحة؟",
        a: "يتم الأداء بالدرهم عبر حوالة بنكية أو بالبطاقة البنكية. ويمكن الأداء على دفعات بناء على طلب، كما يمكن للمقاولات الأداء بالفاتورة بعد المصادقة على عرض الأسعار.",
      },
      {
        q: "هل يجرى التكوين حضوريا أم عن بعد؟",
        a: "تنظم الدورات حضوريا في الدار البيضاء والرباط، أو في قسم افتراضي مباشر، بنفس البرنامج ونفس التمارين. ويتيح التكوين عن بعد المتابعة من أي مدينة في المغرب.",
      },
      {
        q: "كيف يجرى امتحان SC-200؟",
        a: "يدار الامتحان من طرف Pearson VUE، عن بعد تحت المراقبة أو في مركز معتمد. مدته 100 دقيقة، ويضم عادة ما بين 40 و60 سؤالا، والنقطة المطلوبة هي 700 من 1000. ويعد التمكن العملي من KQL ضروريا للنجاح.",
      },
      {
        q: "هل تنتهي صلاحية الشهادة؟",
        a: "نعم، شهادة Security Operations Analyst Associate صالحة لسنة واحدة، وتجدد مجانا عبر تقييم عن بعد على Microsoft Learn يتاح خلال الأشهر الستة السابقة لانتهاء الصلاحية، دون إعادة الامتحان.",
      },
    ],
    en: [
      {
        q: "How much does SC-200 training cost in Morocco and what is included?",
        a: "The course starts at 9,900 MAD. This covers 4 instructor-led days (28 hours), course materials, Sentinel and Defender labs, a practice exam and the voucher for the official SC-200 exam. Corporate quotes are available for SOC teams.",
      },
      {
        q: "Which payment methods do you accept?",
        a: "Payment is in dirhams by bank transfer or card. Instalments are possible on request, and companies can pay against an invoice once the quote is approved.",
      },
      {
        q: "Is the course held in class or online?",
        a: "Sessions run in class in Casablanca and Rabat, or as a live virtual classroom, with the same syllabus and labs. The online format lets you attend from anywhere in Morocco.",
      },
      {
        q: "How does the SC-200 exam work?",
        a: "The exam is delivered by Pearson VUE, online with remote proctoring or at an authorised test centre. It lasts 100 minutes, usually has 40 to 60 questions, and the passing score is 700 out of 1000. Hands-on KQL practice is essential to pass.",
      },
      {
        q: "Does the certification expire?",
        a: "Yes, the Security Operations Analyst Associate certification is valid for one year. It is renewed free of charge through an online assessment on Microsoft Learn, available in the six months before expiry, without retaking the exam.",
      },
    ],
  },
};

export default cert;
