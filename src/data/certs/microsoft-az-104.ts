import type { Certification } from "../types";

const cert: Certification = {
  slug: "microsoft-az-104",
  name: "Microsoft Azure Administrator (AZ-104)",
  shortName: "AZ-104",
  vendor: "Microsoft",
  examCode: "AZ-104",
  level: "intermediate",
  category: "cloud",
  durationDays: 4,
  hours: 28,
  priceMAD: 9900,
  voucherIncluded: true,
  exam: {
    format: {
      fr: "Environ 40 à 60 questions (QCM, études de cas, glisser-déposer et éventuellement des labs)",
      ar: "ما بين 40 و60 سؤالا تقريبا (أسئلة متعددة الاختيارات، دراسات حالة، سحب وإفلات، وأحيانا تمارين تطبيقية)",
      en: "Around 40–60 questions (multiple choice, case studies, drag-and-drop and possibly labs)",
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
    fr: "Formation Azure AZ-104 au Maroc – Azure Administrator",
    ar: "تكوين Azure AZ-104 في المغرب – مدير Azure",
    en: "Azure AZ-104 Training in Morocco – Azure Administrator",
  },
  seoDescription: {
    fr: "Formation AZ-104 Azure Administrator à Casablanca, Rabat ou en ligne : 4 jours, voucher d'examen inclus, dès 9 900 MAD. Demandez le programme et les dates.",
    ar: "تكوين AZ-104 لإدارة Azure في الدار البيضاء أو الرباط أو عن بعد: 4 أيام مع قسيمة الامتحان، ابتداء من 9900 درهم. اطلب البرنامج والمواعيد القادمة الآن.",
    en: "AZ-104 Azure Administrator training in Casablanca, Rabat or live online: 4 days, exam voucher included, from 9,900 MAD. Request the syllabus and dates.",
  },
  tagline: {
    fr: "Administrez, sécurisez et supervisez des environnements Microsoft Azure avec la certification Azure Administrator Associate.",
    ar: "أدر بيئات Microsoft Azure وأمّنها وراقبها بفضل شهادة Azure Administrator Associate.",
    en: "Administer, secure and monitor Microsoft Azure environments with the Azure Administrator Associate certification.",
  },
  overview: {
    fr: [
      "L'examen AZ-104 mène à la certification Microsoft Certified: Azure Administrator Associate. Il valide la capacité à mettre en œuvre, gérer et superviser un environnement Azure : identités et gouvernance avec Microsoft Entra ID, stockage, machines virtuelles et conteneurs, réseaux virtuels, ainsi que la sauvegarde et la surveillance des ressources. C'est la certification d'administration cloud la plus demandée de l'écosystème Microsoft et un socle naturel avant les parcours sécurité (AZ-500, SC-200) ou architecture (AZ-305).",
      "Au Maroc, l'adoption du cloud s'accélère : banques et assurances, opérateurs télécoms, administrations engagées dans la transformation numérique et centres d'offshoring de Casablanca, Rabat et Technopolis migrent une partie de leurs charges vers Azure, souvent en mode hybride avec leur Active Directory existant. Ces projets doivent respecter la loi 05-20 sur la cybersécurité et les directives de la DGSSI, ainsi que la loi 09-08 sur la protection des données personnelles sous le contrôle de la CNDP, notamment pour le choix des régions d'hébergement et les transferts de données hors du Maroc. Les administrateurs capables de configurer correctement identités, réseaux et politiques de gouvernance sont donc très recherchés.",
      "Notre formation de 4 jours (28 heures) suit les cinq domaines officiels de l'AZ-104 et repose sur des labs dans un abonnement Azure : création d'utilisateurs et de rôles RBAC, Azure Policy, comptes de stockage, VM et App Service, VNet peering, NSG, sauvegarde et Azure Monitor. Elle se déroule en présentiel à Casablanca ou à Rabat, ou en classe virtuelle en direct, et le voucher d'examen est inclus dans le tarif.",
    ],
    ar: [
      "يؤدي امتحان AZ-104 إلى شهادة Microsoft Certified: Azure Administrator Associate. ويثبت القدرة على تنفيذ وتدبير ومراقبة بيئة Azure: الهويات والحكامة عبر Microsoft Entra ID، والتخزين، والآلات الافتراضية والحاويات، والشبكات الافتراضية، إضافة إلى النسخ الاحتياطي ومراقبة الموارد. وهي أكثر شهادات إدارة السحابة طلبا في منظومة Microsoft، وأساس طبيعي قبل مسارات الأمن (AZ-500 وSC-200) أو الهندسة (AZ-305).",
      "في المغرب، يتسارع اعتماد السحابة: فالأبناك وشركات التأمين ومتعهدو الاتصالات والإدارات المنخرطة في التحول الرقمي ومراكز الأوفشورينغ في الدار البيضاء والرباط وتكنوبوليس تنقل جزءا من أنظمتها إلى Azure، غالبا بشكل هجين مع Active Directory القائم. ويجب أن تحترم هذه المشاريع القانون 05-20 المتعلق بالأمن السيبراني وتوجيهات DGSSI، وكذا القانون 09-08 لحماية المعطيات الشخصية تحت مراقبة CNDP، خاصة عند اختيار مناطق الاستضافة ونقل المعطيات خارج المغرب. لذلك يزداد الطلب على المسؤولين القادرين على ضبط الهويات والشبكات وسياسات الحكامة بشكل سليم.",
      "يمتد تكويننا على 4 أيام (28 ساعة) ويغطي المجالات الخمسة الرسمية لامتحان AZ-104، ويعتمد على تمارين تطبيقية داخل اشتراك Azure: إنشاء المستخدمين وأدوار RBAC، وAzure Policy، وحسابات التخزين، والآلات الافتراضية وApp Service، وربط الشبكات VNet peering، وNSG، والنسخ الاحتياطي وAzure Monitor. ويجرى حضوريا في الدار البيضاء أو الرباط، أو في قسم افتراضي مباشر، وقسيمة الامتحان مدرجة في السعر.",
    ],
    en: [
      "The AZ-104 exam leads to the Microsoft Certified: Azure Administrator Associate certification. It validates your ability to implement, manage and monitor an Azure environment: identities and governance with Microsoft Entra ID, storage, virtual machines and containers, virtual networks, plus backup and resource monitoring. It is the most in-demand cloud administration certification in the Microsoft ecosystem and a natural foundation before the security (AZ-500, SC-200) or architecture (AZ-305) tracks.",
      "In Morocco, cloud adoption is accelerating: banks and insurers, telecom operators, public bodies pursuing digital transformation and the offshoring centres of Casablanca, Rabat and Technopolis are moving workloads to Azure, often in hybrid mode alongside their existing Active Directory. These projects must comply with Law 05-20 on cybersecurity and DGSSI guidelines, as well as Law 09-08 on personal data protection overseen by the CNDP, especially when choosing hosting regions and transferring data outside Morocco. Administrators who can correctly configure identities, networks and governance policies are therefore in high demand.",
      "Our 4-day (28-hour) course follows the five official AZ-104 domains and is built around labs in an Azure subscription: creating users and RBAC roles, Azure Policy, storage accounts, VMs and App Service, VNet peering, NSGs, backup and Azure Monitor. It runs in class in Casablanca or Rabat, or as a live virtual classroom, and the exam voucher is included in the price.",
    ],
  },
  audience: {
    fr: [
      "Administrateurs systèmes Windows/Linux souhaitant évoluer vers le cloud Azure",
      "Ingénieurs infrastructure et réseau impliqués dans des projets de migration vers Azure",
      "Équipes IT de banques, d'assurances et d'administrations adoptant Microsoft 365 et Azure",
      "Consultants et ingénieurs support en centres d'offshoring travaillant sur des clients Azure",
      "Professionnels de la sécurité voulant maîtriser la plateforme avant l'AZ-500 ou le SC-200",
    ],
    ar: [
      "مديرو أنظمة Windows/Linux الراغبون في التحول نحو سحابة Azure",
      "مهندسو البنية التحتية والشبكات المشاركون في مشاريع الانتقال إلى Azure",
      "الفرق المعلوماتية في الأبناك وشركات التأمين والإدارات التي تعتمد Microsoft 365 وAzure",
      "المستشارون ومهندسو الدعم في مراكز الأوفشورينغ العاملون مع زبناء Azure",
      "مهنيو الأمن الراغبون في إتقان المنصة قبل AZ-500 أو SC-200",
    ],
    en: [
      "Windows/Linux system administrators moving into the Azure cloud",
      "Infrastructure and network engineers involved in Azure migration projects",
      "IT teams at banks, insurers and public bodies adopting Microsoft 365 and Azure",
      "Consultants and support engineers in offshoring centres serving Azure customers",
      "Security professionals who want to master the platform before AZ-500 or SC-200",
    ],
  },
  prerequisites: {
    fr: [
      "Au moins six mois d'expérience pratique en administration d'Azure recommandée par Microsoft",
      "Bonnes bases en systèmes d'exploitation, virtualisation, réseaux (TCP/IP, DNS, VPN) et annuaires",
      "Notions de PowerShell, Azure CLI et des modèles ARM/Bicep appréciées",
      "Anglais technique en lecture ; l'examen est aussi disponible en français",
    ],
    ar: [
      "توصي Microsoft بستة أشهر على الأقل من الخبرة العملية في إدارة Azure",
      "أساس جيد في أنظمة التشغيل والمحاكاة الافتراضية والشبكات (TCP/IP وDNS وVPN) وخدمات الدليل",
      "يستحسن الإلمام بـ PowerShell وAzure CLI وقوالب ARM/Bicep",
      "قراءة الإنجليزية التقنية؛ والامتحان متاح أيضا باللغة الفرنسية",
    ],
    en: [
      "At least six months of hands-on Azure administration experience, as recommended by Microsoft",
      "Solid grounding in operating systems, virtualisation, networking (TCP/IP, DNS, VPN) and directory services",
      "Familiarity with PowerShell, Azure CLI and ARM/Bicep templates is a plus",
      "Reading-level technical English; the exam is also offered in French",
    ],
  },
  outcomes: {
    fr: [
      "Gérer les utilisateurs, groupes et rôles dans Microsoft Entra ID et appliquer le contrôle d'accès RBAC",
      "Mettre en place la gouvernance avec Azure Policy, les groupes d'administration, les verrous et les étiquettes",
      "Configurer et sécuriser les comptes de stockage, la réplication et l'accès par SAS ou identités",
      "Déployer et gérer des machines virtuelles, des conteneurs et des applications App Service",
      "Concevoir et sécuriser des réseaux virtuels : peering, NSG, DNS, équilibrage de charge et connexions hybrides",
      "Superviser et protéger les ressources avec Azure Monitor, Azure Backup et Site Recovery",
    ],
    ar: [
      "تدبير المستخدمين والمجموعات والأدوار في Microsoft Entra ID وتطبيق التحكم في الولوج RBAC",
      "إرساء الحكامة عبر Azure Policy ومجموعات الإدارة والأقفال والوسوم",
      "ضبط حسابات التخزين وتأمينها، والنسخ المتماثل، والولوج عبر SAS أو الهويات",
      "نشر وتدبير الآلات الافتراضية والحاويات وتطبيقات App Service",
      "تصميم الشبكات الافتراضية وتأمينها: peering وNSG وDNS وموازنة الحمل والربط الهجين",
      "مراقبة الموارد وحمايتها عبر Azure Monitor وAzure Backup وSite Recovery",
    ],
    en: [
      "Manage users, groups and roles in Microsoft Entra ID and apply RBAC access control",
      "Implement governance with Azure Policy, management groups, resource locks and tags",
      "Configure and secure storage accounts, replication and access via SAS or identities",
      "Deploy and manage virtual machines, containers and App Service applications",
      "Design and secure virtual networks: peering, NSGs, DNS, load balancing and hybrid connectivity",
      "Monitor and protect resources with Azure Monitor, Azure Backup and Site Recovery",
    ],
  },
  modules: {
    fr: [
      "Domaine 1 – Gérer les identités et la gouvernance Azure (Manage Azure identities and governance)",
      "Domaine 2 – Mettre en œuvre et gérer le stockage (Implement and manage storage)",
      "Domaine 3 – Déployer et gérer les ressources de calcul Azure (Deploy and manage Azure compute resources)",
      "Domaine 4 – Mettre en œuvre et gérer les réseaux virtuels (Implement and manage virtual networking)",
      "Domaine 5 – Surveiller et maintenir les ressources Azure (Monitor and maintain Azure resources)",
      "Préparation à l'examen : études de cas et examen blanc",
    ],
    ar: [
      "المجال 1 – تدبير هويات Azure والحكامة (Manage Azure identities and governance)",
      "المجال 2 – تنفيذ وتدبير التخزين (Implement and manage storage)",
      "المجال 3 – نشر وتدبير موارد الحوسبة في Azure (Deploy and manage Azure compute resources)",
      "المجال 4 – تنفيذ وتدبير الشبكات الافتراضية (Implement and manage virtual networking)",
      "المجال 5 – مراقبة موارد Azure وصيانتها (Monitor and maintain Azure resources)",
      "التحضير للامتحان: دراسات حالة وامتحان تجريبي",
    ],
    en: [
      "Domain 1 – Manage Azure identities and governance",
      "Domain 2 – Implement and manage storage",
      "Domain 3 – Deploy and manage Azure compute resources",
      "Domain 4 – Implement and manage virtual networking",
      "Domain 5 – Monitor and maintain Azure resources",
      "Exam preparation: case studies and practice exam",
    ],
  },
  careers: {
    fr: [
      "Administrateur cloud Azure",
      "Ingénieur systèmes et infrastructure hybride",
      "Ingénieur support cloud en centre d'offshoring",
      "Ingénieur DevOps / exploitation cloud junior",
      "Consultant Microsoft Azure",
    ],
    ar: [
      "مدير سحابة Azure",
      "مهندس أنظمة وبنية تحتية هجينة",
      "مهندس دعم سحابي في مركز أوفشورينغ",
      "مهندس DevOps / استغلال سحابي مبتدئ",
      "مستشار Microsoft Azure",
    ],
    en: [
      "Azure cloud administrator",
      "Systems and hybrid infrastructure engineer",
      "Cloud support engineer in an offshoring centre",
      "Junior DevOps / cloud operations engineer",
      "Microsoft Azure consultant",
    ],
  },
  faqs: {
    fr: [
      {
        q: "Combien coûte la formation AZ-104 au Maroc et que comprend le prix ?",
        a: "La formation est proposée à partir de 9 900 MAD. Ce tarif comprend les 4 jours de formation (28 heures) avec un formateur, les supports, les labs dans Azure, un examen blanc et le voucher pour l'examen officiel AZ-104. Un devis entreprise peut être établi pour les groupes.",
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
        q: "Comment se passe l'examen AZ-104 ?",
        a: "L'examen est administré par Pearson VUE, en ligne sous surveillance depuis chez vous ou dans un centre agréé. Il dure 100 minutes, compte généralement entre 40 et 60 questions et le score requis est de 700 sur 1000. Il est disponible en anglais et en français, entre autres langues.",
      },
      {
        q: "La certification expire-t-elle ?",
        a: "Oui, la certification Azure Administrator Associate est valable un an. Vous pouvez la renouveler gratuitement en réussissant une évaluation en ligne sur Microsoft Learn, ouverte dans les six mois précédant la date d'expiration, sans repasser l'examen.",
      },
    ],
    ar: [
      {
        q: "كم يكلف تكوين AZ-104 في المغرب وماذا يشمل السعر؟",
        a: "يبدأ سعر التكوين من 9900 درهم، ويشمل 4 أيام من التكوين (28 ساعة) مع مكون، والدعامات، والتمارين التطبيقية على Azure، وامتحانا تجريبيا، وقسيمة الامتحان الرسمي AZ-104. ويمكن إعداد عرض أسعار خاص بالمقاولات للمجموعات.",
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
        q: "كيف يجرى امتحان AZ-104؟",
        a: "يدار الامتحان من طرف Pearson VUE، عن بعد تحت المراقبة من المنزل أو في مركز معتمد. مدته 100 دقيقة، ويضم عادة ما بين 40 و60 سؤالا، والنقطة المطلوبة هي 700 من 1000. وهو متاح بالإنجليزية والفرنسية ولغات أخرى.",
      },
      {
        q: "هل تنتهي صلاحية الشهادة؟",
        a: "نعم، شهادة Azure Administrator Associate صالحة لسنة واحدة. ويمكن تجديدها مجانا باجتياز تقييم عن بعد على Microsoft Learn، يفتح خلال الأشهر الستة السابقة لتاريخ انتهاء الصلاحية، دون إعادة الامتحان.",
      },
    ],
    en: [
      {
        q: "How much does AZ-104 training cost in Morocco and what is included?",
        a: "The course starts at 9,900 MAD. This covers 4 instructor-led days (28 hours), course materials, Azure labs, a practice exam and the voucher for the official AZ-104 exam. Corporate quotes are available for groups.",
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
        q: "How does the AZ-104 exam work?",
        a: "The exam is delivered by Pearson VUE, either online with remote proctoring or at an authorised test centre. It lasts 100 minutes, usually has 40 to 60 questions, and the passing score is 700 out of 1000. It is available in English, French and other languages.",
      },
      {
        q: "Does the certification expire?",
        a: "Yes, the Azure Administrator Associate certification is valid for one year. You can renew it free of charge by passing an online assessment on Microsoft Learn, available in the six months before expiry, without retaking the exam.",
      },
    ],
  },
};

export default cert;
