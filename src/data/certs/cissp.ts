import type { Certification } from "../types";

const cert: Certification = {
  slug: "cissp",
  name: "Certified Information Systems Security Professional (CISSP)",
  shortName: "CISSP",
  vendor: "ISC2",
  examCode: "CISSP",
  level: "expert",
  category: "governance",
  popular: true,
  durationDays: 5,
  hours: 40,
  priceMAD: 23900,
  voucherIncluded: true,
  exam: {
    format: {
      fr: "CAT (test adaptatif) en anglais : 100 à 150 questions",
      ar: "امتحان تكيفي CAT باللغة الإنجليزية: من 100 إلى 150 سؤالًا",
      en: "CAT (computerized adaptive testing) in English: 100–150 items",
    },
    duration: {
      fr: "3 heures",
      ar: "3 ساعات",
      en: "3 hours",
    },
    passingScore: {
      fr: "700 / 1000 (score pondéré)",
      ar: "700 من 1000 (درجة موزونة)",
      en: "700 out of 1000 (scaled score)",
    },
    validity: {
      fr: "3 ans, renouvelable via 120 CPE et la cotisation annuelle ISC2",
      ar: "3 سنوات، قابلة للتجديد عبر 120 ساعة CPE والاشتراك السنوي لدى ISC2",
      en: "3 years, renewable with 120 CPE credits and the ISC2 annual fee",
    },
  },
  seoTitle: {
    fr: "Formation CISSP Maroc : préparation complète + voucher",
    ar: "تكوين CISSP في المغرب: تحضير شامل مع قسيمة الامتحان",
    en: "CISSP Training Morocco: Full Prep Course + Exam Voucher",
  },
  seoDescription: {
    fr: "Préparez le CISSP au Maroc : 5 jours sur les 8 domaines ISC2, voucher d'examen inclus, à Casablanca, Rabat ou en ligne. Demandez votre devis dès maintenant.",
    ar: "استعد لشهادة CISSP في المغرب: تكوين لمدة 5 أيام يغطي المجالات 8 لـ ISC2 مع قسيمة الامتحان، في الدار البيضاء أو الرباط أو عن بُعد. اطلب عرض السعر الآن.",
    en: "Prepare for CISSP in Morocco: 5-day course on all 8 ISC2 domains, exam voucher included, in Casablanca, Rabat or live online. Request your quote today.",
  },
  tagline: {
    fr: "La référence mondiale des responsables sécurité, préparée en 5 jours intensifs avec voucher d'examen inclus.",
    ar: "المرجع العالمي لمسؤولي أمن المعلومات، في تكوين مكثف لمدة 5 أيام مع قسيمة الامتحان.",
    en: "The global benchmark for security leaders, prepared in 5 intensive days with the exam voucher included.",
  },
  overview: {
    fr: [
      "Le CISSP d'ISC2 valide une vision d'ensemble de la sécurité de l'information : gouvernance et gestion des risques, architecture, réseaux, gestion des identités, opérations et sécurité du développement. Ce n'est pas une certification d'outil : l'examen évalue votre capacité à raisonner en manager, à arbitrer entre risque, coût et besoin métier, et à choisir la réponse la plus adaptée au contexte de l'organisation.",
      "Au Maroc, le CISSP est fréquemment cité dans les offres de RSSI, d'architecte sécurité ou de consultant GRC, notamment dans les banques, les assurances, les opérateurs télécoms, les centres d'offshoring et les cabinets de conseil. Il complète bien une démarche de conformité à la loi 05-20 relative à la cybersécurité ou à la DNSSI, car il couvre les fondamentaux attendus d'un responsable de la sécurité des systèmes d'information.",
      "Notre préparation de 5 jours (40 heures) parcourt les 8 domaines du référentiel officiel, avec des questions d'entraînement au format adaptatif, des études de cas et une méthode pour lire les questions « à la manière ISC2 ». Le voucher d'examen est inclus : vous passez l'examen dans un centre Pearson VUE à la date de votre choix, une fois prêt.",
    ],
    ar: [
      "تُثبت شهادة CISSP الصادرة عن ISC2 امتلاكك رؤية شاملة لأمن المعلومات: الحوكمة وإدارة المخاطر، والهندسة الأمنية، والشبكات، وإدارة الهويات، والعمليات، وأمن تطوير البرمجيات. وهي ليست شهادة مرتبطة بأداة معيّنة، إذ يقيس الامتحان قدرتك على التفكير كمدير، والموازنة بين المخاطر والتكلفة وحاجيات المؤسسة، واختيار الإجابة الأنسب لسياقها.",
      "في المغرب، تُذكر شهادة CISSP كثيرًا في عروض العمل الخاصة بمسؤولي أمن نظم المعلومات (RSSI) ومهندسي الأمن ومستشاري GRC، خاصة في الأبناك وشركات التأمين ومتعهدي الاتصالات ومراكز الأوفشورينغ ومكاتب الاستشارة. كما تُكمّل مسار الامتثال للقانون 05-20 المتعلق بالأمن السيبراني وللتوجيه الوطني لأمن نظم المعلومات (DNSSI)، لأنها تغطي الأسس المنتظرة من أي مسؤول عن أمن نظم المعلومات.",
      "يغطي تكويننا الممتد على 5 أيام (40 ساعة) المجالات الثمانية للمنهج الرسمي، مع أسئلة تدريبية بنمط الامتحان التكيفي ودراسات حالة ومنهجية لقراءة الأسئلة بطريقة ISC2. قسيمة الامتحان مشمولة في السعر، وتجتاز الامتحان في مركز Pearson VUE في التاريخ الذي تختاره عندما تكون مستعدًا.",
    ],
    en: [
      "ISC2's CISSP validates a broad, management-level view of information security: governance and risk management, security architecture, networking, identity management, operations and secure software development. It is not a tool certification. The exam measures your ability to think like a manager, weigh risk against cost and business need, and pick the answer that best fits the organization's context.",
      "In Morocco, CISSP regularly appears in job postings for CISOs, security architects and GRC consultants, especially in banking, insurance, telecom operators, offshoring centers and consulting firms. It also fits well with compliance work under Law 05-20 on cybersecurity and the DNSSI, since it covers the fundamentals expected from anyone responsible for information system security.",
      "Our 5-day (40-hour) preparation walks through all 8 domains of the official outline, with adaptive-style practice questions, case studies and a method for reading questions the ISC2 way. The exam voucher is included: you sit the exam at a Pearson VUE test center on the date of your choice, once you are ready.",
    ],
  },
  audience: {
    fr: [
      "RSSI, adjoints RSSI et responsables de la sécurité des SI",
      "Architectes et ingénieurs sécurité visant un rôle de management",
      "Consultants GRC, auditeurs IT et responsables conformité",
      "DSI et responsables infrastructure en charge de la sécurité",
      "Profils SOC ou réseau expérimentés souhaitant évoluer vers la gouvernance",
    ],
    ar: [
      "مسؤولو أمن نظم المعلومات (RSSI) ونوابهم",
      "مهندسو ومصممو الأمن الراغبون في الانتقال إلى مهام التدبير",
      "مستشارو GRC ومدققو تكنولوجيا المعلومات ومسؤولو الامتثال",
      "مديرو نظم المعلومات ومسؤولو البنية التحتية المكلفون بالأمن",
      "أطر SOC أو الشبكات ذوو الخبرة الراغبون في التوجه نحو الحوكمة",
    ],
    en: [
      "CISOs, deputy CISOs and information security managers",
      "Security architects and engineers moving into management roles",
      "GRC consultants, IT auditors and compliance officers",
      "CIOs and infrastructure managers responsible for security",
      "Experienced SOC or network professionals moving toward governance",
    ],
  },
  prerequisites: {
    fr: [
      "5 ans d'expérience professionnelle rémunérée et cumulée dans au moins 2 des 8 domaines du CISSP",
      "Dispense d'1 an possible avec un diplôme de niveau bac+4/bac+5 (ou équivalent) ou une certification reconnue par ISC2",
      "Sans l'expérience requise, vous pouvez réussir l'examen et devenir « Associate of ISC2 », le temps d'acquérir l'expérience",
      "Lecture fluide de l'anglais technique : l'examen CAT se passe en anglais",
    ],
    ar: [
      "5 سنوات من الخبرة المهنية المؤدى عنها في مجالين على الأقل من المجالات الثمانية لـ CISSP",
      "إمكانية الإعفاء من سنة واحدة بشهادة جامعية مناسبة (أو ما يعادلها) أو بشهادة مهنية معترف بها من ISC2",
      "في غياب الخبرة المطلوبة، يمكنك اجتياز الامتحان والحصول على صفة Associate of ISC2 إلى حين استكمال الخبرة",
      "قراءة جيدة للإنجليزية التقنية، لأن امتحان CAT يُجرى باللغة الإنجليزية",
    ],
    en: [
      "5 years of cumulative, paid work experience in at least 2 of the 8 CISSP domains",
      "A 1-year waiver is possible with a relevant four-year degree (or regional equivalent) or an ISC2-approved credential",
      "Without the required experience, you can pass the exam and become an Associate of ISC2 while you build it",
      "Comfortable reading technical English: the CAT exam is delivered in English",
    ],
  },
  outcomes: {
    fr: [
      "Construire et piloter un programme de sécurité aligné sur les objectifs métier",
      "Conduire une analyse de risques et justifier les mesures de traitement auprès de la direction",
      "Concevoir des architectures sécurisées : cryptographie, modèles de sécurité, sécurité physique",
      "Encadrer la gestion des identités et des accès, la sécurité réseau et les opérations de sécurité",
      "Organiser la réponse aux incidents, la continuité d'activité et la reprise après sinistre",
      "Intégrer la sécurité dans le cycle de développement logiciel",
    ],
    ar: [
      "بناء برنامج للأمن وقيادته بما يتوافق مع أهداف المؤسسة",
      "إجراء تحليل للمخاطر وتبرير تدابير المعالجة أمام الإدارة العليا",
      "تصميم بنى معلوماتية آمنة: التشفير ونماذج الأمن والأمن المادي",
      "الإشراف على إدارة الهويات والولوج وأمن الشبكات والعمليات الأمنية",
      "تنظيم الاستجابة للحوادث واستمرارية النشاط والتعافي من الكوارث",
      "إدماج الأمن في دورة تطوير البرمجيات",
    ],
    en: [
      "Build and run a security program aligned with business objectives",
      "Lead a risk assessment and justify treatment decisions to senior management",
      "Design secure architectures: cryptography, security models, physical security",
      "Oversee identity and access management, network security and security operations",
      "Organize incident response, business continuity and disaster recovery",
      "Embed security into the software development lifecycle",
    ],
  },
  modules: {
    fr: [
      "Domaine 1 : Sécurité et gestion des risques",
      "Domaine 2 : Sécurité des actifs",
      "Domaine 3 : Architecture et ingénierie de la sécurité",
      "Domaine 4 : Sécurité des communications et des réseaux",
      "Domaine 5 : Gestion des identités et des accès (IAM)",
      "Domaine 6 : Évaluation et tests de sécurité",
      "Domaine 7 : Opérations de sécurité",
      "Domaine 8 : Sécurité du développement logiciel",
    ],
    ar: [
      "المجال 1: الأمن وإدارة المخاطر",
      "المجال 2: أمن الأصول",
      "المجال 3: هندسة الأمن وبنيته",
      "المجال 4: أمن الاتصالات والشبكات",
      "المجال 5: إدارة الهويات والولوج (IAM)",
      "المجال 6: تقييم الأمن واختباره",
      "المجال 7: العمليات الأمنية",
      "المجال 8: أمن تطوير البرمجيات",
    ],
    en: [
      "Domain 1: Security and Risk Management",
      "Domain 2: Asset Security",
      "Domain 3: Security Architecture and Engineering",
      "Domain 4: Communication and Network Security",
      "Domain 5: Identity and Access Management (IAM)",
      "Domain 6: Security Assessment and Testing",
      "Domain 7: Security Operations",
      "Domain 8: Software Development Security",
    ],
  },
  careers: {
    fr: [
      "Responsable de la sécurité des systèmes d'information (RSSI / CISO)",
      "Architecte sécurité",
      "Consultant ou manager GRC",
      "Auditeur sécurité des SI",
      "Responsable sécurité opérationnelle / manager SOC",
    ],
    ar: [
      "مسؤول أمن نظم المعلومات (RSSI / CISO)",
      "مهندس معماري للأمن",
      "مستشار أو مدير GRC",
      "مدقق أمن نظم المعلومات",
      "مسؤول الأمن العملياتي / مدير SOC",
    ],
    en: [
      "Chief Information Security Officer (CISO)",
      "Security architect",
      "GRC consultant or manager",
      "Information systems security auditor",
      "Security operations lead / SOC manager",
    ],
  },
  faqs: {
    fr: [
      {
        q: "Combien coûte la formation CISSP au Maroc et que comprend le prix ?",
        a: "La formation est proposée à partir de 23 900 MAD. Ce prix comprend les 5 jours de préparation (40 heures) avec formateur, les supports de cours, les questions d'entraînement et le voucher de l'examen CISSP. Un devis détaillé vous est envoyé sur demande.",
      },
      {
        q: "Quels sont les moyens de paiement acceptés ?",
        a: "Vous pouvez régler par virement bancaire ou par carte. Un paiement en plusieurs fois est possible sur demande. Pour les entreprises, nous établissons un devis et une facture au nom de la société.",
      },
      {
        q: "La formation a-t-elle lieu en présentiel ou en ligne ?",
        a: "Les sessions sont organisées en présentiel à Casablanca ou à Rabat, ou en classe virtuelle en direct avec le formateur. Le contenu et le voucher sont identiques dans les deux formats. La formation est dispensée en français ou en anglais selon la session, avec des supports en anglais pour coller à la terminologie de l'examen.",
      },
      {
        q: "Où et comment passer l'examen CISSP depuis le Maroc ?",
        a: "L'examen se passe sur ordinateur dans un centre de test Pearson VUE. En anglais, il suit le format adaptatif (CAT) : 100 à 150 questions en 3 heures, avec un score de réussite de 700 sur 1000. Vous choisissez votre date et votre centre au moment de la réservation avec le voucher.",
      },
      {
        q: "Puis-je passer le CISSP sans 5 ans d'expérience ?",
        a: "Oui. Vous pouvez passer l'examen sans avoir l'expérience requise. En cas de réussite, vous devenez « Associate of ISC2 » et disposez de 6 ans pour acquérir les 5 ans d'expérience exigés (4 ans avec une dispense). La certification CISSP complète est délivrée après validation de l'expérience et l'endossement de votre candidature.",
      },
    ],
    ar: [
      {
        q: "كم تبلغ تكلفة تكوين CISSP في المغرب وماذا يشمل السعر؟",
        a: "يبدأ سعر التكوين من 23900 درهم. ويشمل 5 أيام من التحضير (40 ساعة) مع مكوّن، ودعامات التكوين، وأسئلة التدريب، وقسيمة امتحان CISSP. نرسل لك عرض سعر مفصلًا عند الطلب.",
      },
      {
        q: "ما هي طرق الأداء المتاحة؟",
        a: "يمكنك الأداء عبر تحويل بنكي أو بالبطاقة البنكية، ويمكن الأداء على دفعات بناءً على طلبك. وبالنسبة للشركات، نُعدّ عرض سعر وفاتورة باسم المؤسسة.",
      },
      {
        q: "هل يُقدَّم التكوين حضوريًا أم عن بُعد؟",
        a: "تُنظَّم الدورات حضوريًا في الدار البيضاء أو الرباط، أو عن بُعد في قسم افتراضي مباشر مع المكوّن. المحتوى وقسيمة الامتحان متطابقان في الصيغتين. ويُقدَّم التكوين بالفرنسية أو الإنجليزية حسب الدورة، مع دعامات بالإنجليزية للتعود على مصطلحات الامتحان.",
      },
      {
        q: "أين وكيف أجتاز امتحان CISSP من المغرب؟",
        a: "يُجرى الامتحان على الحاسوب في مركز اختبار Pearson VUE. وباللغة الإنجليزية يعتمد الصيغة التكيفية CAT: من 100 إلى 150 سؤالًا في 3 ساعات، ويتطلب النجاح 700 من 1000. تختار التاريخ والمركز عند الحجز باستعمال القسيمة.",
      },
      {
        q: "هل يمكنني اجتياز CISSP دون 5 سنوات من الخبرة؟",
        a: "نعم، يمكنك اجتياز الامتحان دون توفر الخبرة المطلوبة. وعند النجاح تحصل على صفة Associate of ISC2 ولديك 6 سنوات لاستكمال 5 سنوات من الخبرة (4 سنوات في حال الإعفاء). وتُمنح شهادة CISSP الكاملة بعد التحقق من الخبرة والمصادقة على ملفك.",
      },
    ],
    en: [
      {
        q: "How much does CISSP training cost in Morocco and what is included?",
        a: "The course starts at 23,900 MAD. The price covers 5 instructor-led days (40 hours), course materials, practice questions and the CISSP exam voucher. A detailed quote is available on request.",
      },
      {
        q: "Which payment methods do you accept?",
        a: "You can pay by bank transfer or card. Payment in installments is possible on request. For companies, we issue a quote and an invoice in the company's name.",
      },
      {
        q: "Is the training held in class or online?",
        a: "Sessions run in class in Casablanca or Rabat, or as a live virtual classroom with the instructor. Content and voucher are the same in both formats. Training is delivered in French or English depending on the session, with English materials to match the exam terminology.",
      },
      {
        q: "Where and how do I take the CISSP exam from Morocco?",
        a: "The exam is computer-based at a Pearson VUE test center. In English it uses the adaptive (CAT) format: 100 to 150 items in 3 hours, with a passing score of 700 out of 1000. You pick your date and center when you book with the voucher.",
      },
      {
        q: "Can I take CISSP without 5 years of experience?",
        a: "Yes. You can sit the exam without the required experience. If you pass, you become an Associate of ISC2 and have 6 years to earn the 5 years of experience (4 years with a waiver). The full CISSP is awarded once your experience is verified and your application endorsed.",
      },
    ],
  },
};

export default cert;
