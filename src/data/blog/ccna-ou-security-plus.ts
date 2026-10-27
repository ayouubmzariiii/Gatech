import type { Guide } from "../types";

const guide: Guide = {
  slug: "ccna-ou-security-plus",
  category: "comparatifs",
  datePublished: "2026-10-13",
  dateModified: "2026-10-27",
  readingMinutes: 8,
  relatedCerts: ["cisco-ccna", "comptia-security-plus", "cisco-ccna-cybersecurity"],
  title: {
    fr: "CCNA ou CompTIA Security+ : par laquelle commencer ?",
    ar: "CCNA أم CompTIA Security+: بأيهما تبدأ؟",
    en: "CCNA or CompTIA Security+: Which One Should You Start With?",
  },
  seoTitle: {
    fr: "CCNA ou Security+ : laquelle passer en premier ?",
    ar: "CCNA أم Security+: أيهما تجتاز أولًا؟",
    en: "CCNA vs Security+: Which One to Take First?",
  },
  seoDescription: {
    fr: "CCNA ou Security+ ? Contenu, examens, prix en MAD, métiers visés au Maroc et ordre conseillé selon votre profil. Trouvez votre point de départ.",
    ar: "CCNA أم Security+؟ المحتوى والامتحانات والسعر بالدرهم والوظائف في المغرب والترتيب المنصوح به حسب ملفك. اكتشف نقطة انطلاقك.",
    en: "CCNA or Security+? Content, exams, price in MAD, target jobs in Morocco and the recommended order for your profile. Find your starting point.",
  },
  excerpt: {
    fr: "Le CCNA valide les fondamentaux du réseau, le Security+ ceux de la cybersécurité. Le bon point de départ dépend surtout du métier que vous visez : voici comment trancher.",
    ar: "تثبت CCNA أساسيات الشبكات، وتثبت Security+ أساسيات الأمن السيبراني. ونقطة الانطلاق الصحيحة تتوقف أساسًا على الوظيفة التي تستهدفها: إليك كيف تحسم.",
    en: "CCNA validates networking fundamentals, Security+ validates cybersecurity fundamentals. The right starting point depends mostly on the job you are aiming for: here is how to decide.",
  },
  sections: {
    fr: [
      {
        heading: "CCNA ou Security+ : laquelle choisir en premier ?",
        paragraphs: [
          "La réponse courte : commencez par le CCNA si votre quotidien (ou votre objectif) tourne autour des réseaux, et par le Security+ si vous visez directement un poste en cybersécurité, par exemple dans un SOC. Les deux sont des certifications d'entrée de gamme reconnues, mais elles ne posent pas les mêmes fondations.",
          "Le Cisco CCNA (examen 200-301) valide votre capacité à installer, configurer et dépanner un réseau : commutation, routage, adressage IP, services réseau, bases de la sécurité et de l'automatisation. Le CompTIA Security+ (examen SY0-701) valide une culture générale de la cybersécurité : menaces et vulnérabilités, architecture sécurisée, opérations de sécurité, gestion des risques et conformité. Il est neutre vis-à-vis des constructeurs.",
          "Autrement dit, le CCNA vous apprend comment fonctionne le réseau que vous devrez protéger ; le Security+ vous apprend comment on le protège. Les deux savoirs sont complémentaires, et beaucoup de profils finissent par passer les deux.",
        ],
      },
      {
        heading: "Fondation réseau ou fondation sécurité : que valide chaque certification ?",
        paragraphs: [
          "Le CCNA est très concret : vous configurez des commutateurs et des routeurs Cisco, vous mettez en place des VLAN, du routage OSPF, des listes de contrôle d'accès, et vous apprenez à diagnostiquer une panne. C'est une certification technique, orientée équipements, dont une partie de l'examen prend la forme de simulations.",
          "Le Security+ est plus large et plus transversal. Il couvre les types d'attaques, la cryptographie, la gestion des identités et des accès, la sécurité du cloud et des terminaux, la réponse aux incidents et la gouvernance. Il ne vous rend pas expert d'un outil particulier, mais il vous donne le vocabulaire et les réflexes attendus d'un professionnel de la sécurité.",
        ],
        list: [
          "CCNA : réseaux IP, commutation, routage, services réseau, bases de la sécurité, automatisation.",
          "Security+ : menaces, architecture sécurisée, opérations de sécurité, gestion des risques, conformité.",
          "CCNA : orientation constructeur (Cisco), très pratique.",
          "Security+ : neutre vis-à-vis des constructeurs, plus conceptuel mais avec des questions pratiques.",
        ],
      },
      {
        heading: "CCNA vs Security+ : comment se passent les examens ?",
        paragraphs: [
          "Les deux examens sont exigeants pour un débutant, mais leur format diffère. Voici les chiffres officiels à connaître.",
        ],
        list: [
          "CCNA 200-301 : environ 120 minutes ; Cisco ne publie ni le nombre exact de questions ni le score de réussite ; QCM, glisser-déposer et simulations sur équipements Cisco ; passage via Pearson VUE, en centre ou en ligne.",
          "Security+ SY0-701 : 90 questions au maximum en 90 minutes ; QCM et questions de performance (mises en situation) ; score de réussite de 750 sur une échelle de 100 à 900.",
          "Validité : 3 ans pour les deux, renouvelables via la formation continue (Cisco Continuing Education ou CompTIA CE).",
        ],
      },
      {
        heading: "Quel est le prix du CCNA et du Security+ au Maroc ?",
        paragraphs: [
          "Chez GATech, les deux formations sont proposées au même tarif public : 10 900 MAD, voucher de l'examen officiel inclus. Chacune dure 5 jours (40 heures). Le prix ne départage donc pas les deux certifications : c'est votre projet professionnel qui doit trancher.",
          "Si vous prévoyez de passer les deux, budgétez-les comme deux étapes distinctes, idéalement espacées de quelques mois pour laisser le temps de consolider la première avant d'attaquer la seconde.",
        ],
      },
      {
        heading: "Quels métiers ouvrent le CCNA et le Security+ au Maroc ?",
        paragraphs: [
          "Le CCNA est la référence pour les postes d'infrastructure : technicien ou administrateur réseau, ingénieur support, intégrateur chez un opérateur télécom, une ESN ou un intégrateur de solutions. Dans un marché où beaucoup d'infrastructures d'entreprise reposent sur des équipements Cisco, c'est un argument concret sur un CV.",
          "Le Security+ vise plutôt les premiers postes en cybersécurité : analyste SOC de niveau 1, technicien sécurité, assistant RSSI, ou administrateur système qui prend en charge la sécurité. Il est aussi apprécié par les entreprises qui travaillent avec des clients internationaux, car c'est une certification connue au-delà d'un constructeur.",
          "Sur un CV, les recruteurs lisent les deux certifications différemment. Le CCNA est perçu comme une preuve de savoir-faire opérationnel : le candidat sait configurer et dépanner, il sera vite autonome sur l'infrastructure. Le Security+ est lu comme la preuve d'une culture sécurité structurée : le candidat parle le langage des risques, des contrôles et des incidents. Dans les deux cas, une ligne « certification » prend beaucoup plus de poids lorsqu'elle est accompagnée d'éléments concrets : un lab documenté, un stage, un projet de supervision ou de durcissement.",
          "Aucune de ces certifications ne garantit un emploi à elle seule : l'expérience, les projets personnels et la pratique en lab comptent autant. Mais chacune envoie un signal clair sur votre orientation.",
        ],
      },
      {
        heading: "Dans quel ordre passer CCNA et Security+ selon votre profil ?",
        paragraphs: [
          "Plutôt que de chercher la « meilleure » certification, partez de votre situation actuelle et du poste visé.",
        ],
        list: [
          "Technicien ou administrateur réseau : CCNA d'abord, pour consolider votre cœur de métier, puis Security+ pour évoluer vers la sécurité.",
          "Objectif SOC ou analyste sécurité : Security+ d'abord, puis Cisco CCNA Cybersecurity (examen 200-201), centré sur la surveillance et l'analyse d'incidents.",
          "Étudiant ou reconversion sans expérience réseau : CCNA d'abord si vous aimez la technique pure ; Security+ d'abord si la cybersécurité est votre objectif clair, en travaillant en parallèle les bases TCP/IP.",
          "Administrateur système : Security+ d'abord en général, car il couvre directement identités, terminaux et durcissement.",
        ],
      },
      {
        heading: "Quel plan d'étude sur 3 à 6 mois, et faut-il passer les deux ?",
        paragraphs: [
          "Voici deux plans indicatifs, à adapter à votre niveau de départ et au temps disponible (comptez quelques heures par semaine en plus de la formation).",
          "Pour un profil qui vise la cybersécurité à moyen terme, oui, c'est souvent un excellent duo. Un analyste qui comprend vraiment le routage, les VLAN et les flux réseau lit beaucoup mieux une alerte ou une capture de trafic. À l'inverse, un ingénieur réseau qui maîtrise les concepts de sécurité conçoit des architectures plus robustes.",
          "L'important est de ne pas tout mener de front. Passez la première, mettez-la en pratique quelques mois, puis enchaînez sur la seconde. Les recoupements (adressage IP, ports, protocoles, pare-feu, ACL) rendront la deuxième préparation plus fluide.",
        ],
        list: [
          "Parcours réseau, mois 1 : modèle OSI et TCP/IP, adressage IPv4 et sous-réseaux, premières configurations de commutateurs dans un simulateur.",
          "Parcours réseau, mois 2 : VLAN, trunking, routage statique et OSPF, ACL ; refaire chaque lab jusqu'à pouvoir le monter sans aide.",
          "Parcours réseau, mois 3 : services (DHCP, DNS, NAT), sans-fil, bases de la sécurité et de l'automatisation, examens blancs puis passage du CCNA.",
          "Parcours réseau, mois 4 à 6 : Security+ en s'appuyant sur les acquis réseau, en insistant sur la cryptographie, les identités et la gestion des risques.",
          "Parcours SOC, mois 1 : rappels réseau (ports, protocoles, captures Wireshark), puis menaces et types d'attaques du Security+.",
          "Parcours SOC, mois 2 : architecture sécurisée, identités et accès, opérations de sécurité ; entraînement sur les questions de performance.",
          "Parcours SOC, mois 3 : examens blancs et passage du Security+.",
          "Parcours SOC, mois 4 à 6 : CCNA Cybersecurity (200-201), avec analyse de journaux, de captures de trafic et d'alertes sur un lab personnel.",
        ],
      },
      {
        heading: "Et le CCNA Cybersecurity face au Security+ ?",
        paragraphs: [
          "Le Cisco CCNA Cybersecurity (examen 200-201, anciennement CyberOps Associate) est souvent comparé au Security+, car tous deux visent les premiers postes en cybersécurité. La différence tient au périmètre : le Security+ donne une culture sécurité large (menaces, architecture, identités, risques, conformité), tandis que le CCNA Cybersecurity est centré sur le travail d'un analyste SOC de niveau 1 : surveillance, analyse de journaux et de trafic réseau, détection et réponse aux incidents.",
          "Si vous hésitez entre les deux pour un poste SOC, le Security+ reste le meilleur premier pas, puis le CCNA Cybersecurity vient approfondir le volet opérationnel. Les deux formations sont au même tarif chez GATech (10 900 MAD, voucher inclus).",
          "Quant au « CCNA Security » que l'on trouve encore dans de nombreuses recherches, il n'existe plus : Cisco l'a retiré en février 2020 lors de la refonte de ses certifications. Pour un parcours sécurité chez Cisco aujourd'hui, c'est le CCNA (200-301) puis le CCNA Cybersecurity qu'il faut viser.",
        ],
      },
      {
        heading: "Comment GATech vous accompagne vers le CCNA ou le Security+ ?",
        paragraphs: [
          "GATech propose une formation CCNA et une formation CompTIA Security+ de 5 jours chacune, à 10 900 MAD, voucher d'examen officiel inclus, en présentiel ou en classe virtuelle. Pour la suite d'un parcours SOC, la formation Cisco CCNA Cybersecurity est proposée au même tarif. Consultez nos offres en cours et contactez-nous pour choisir l'ordre qui correspond à votre profil.",
        ],
      },
    ],
    ar: [
      {
        heading: "CCNA أم Security+: بأيهما تبدأ؟",
        paragraphs: [
          "الجواب المختصر: ابدأ بـ CCNA إذا كان عملك اليومي (أو هدفك) يدور حول الشبكات، وبـ Security+ إذا كنت تستهدف مباشرة وظيفة في الأمن السيبراني، كمركز عمليات الأمن SOC مثلًا. كلتاهما شهادة مبتدئة معترف بها، لكنهما لا تبنيان الأساس نفسه.",
          "تثبت Cisco CCNA (امتحان 200-301) قدرتك على تركيب الشبكة وإعدادها وإصلاح أعطالها: التبديل والتوجيه وعنونة IP وخدمات الشبكة وأساسيات الأمن والأتمتة. أما CompTIA Security+ (امتحان SY0-701) فتثبت ثقافة عامة في الأمن السيبراني: التهديدات والثغرات والبنية الآمنة وعمليات الأمن وإدارة المخاطر والامتثال، وهي محايدة تجاه المصنّعين.",
          "بعبارة أخرى، تعلّمك CCNA كيف تعمل الشبكة التي ستحميها، وتعلّمك Security+ كيف تحميها. المعرفتان متكاملتان، وكثير من المهنيين يحصلون على الاثنتين في النهاية.",
        ],
      },
      {
        heading: "أساس الشبكات أم أساس الأمن: ماذا تثبت كل شهادة؟",
        paragraphs: [
          "CCNA شهادة عملية جدًا: تُعدّ المبدّلات والموجّهات من Cisco، وتنشئ شبكات VLAN والتوجيه عبر OSPF وقوائم التحكم في الوصول، وتتعلم تشخيص الأعطال. إنها شهادة تقنية موجهة نحو المعدات، ويتضمن جزء من امتحانها محاكاة.",
          "أما Security+ فأوسع وأكثر شمولًا. تغطي أنواع الهجمات والتشفير وإدارة الهويات والوصول وأمن السحابة والأجهزة الطرفية والاستجابة للحوادث والحوكمة. لا تجعلك خبيرًا في أداة بعينها، لكنها تمنحك المصطلحات وردود الفعل المنتظرة من مهني في الأمن.",
        ],
        list: [
          "CCNA: شبكات IP، التبديل، التوجيه، خدمات الشبكة، أساسيات الأمن، الأتمتة.",
          "Security+: التهديدات، البنية الآمنة، عمليات الأمن، إدارة المخاطر، الامتثال.",
          "CCNA: موجهة نحو مصنّع (Cisco)، تطبيقية جدًا.",
          "Security+: محايدة تجاه المصنّعين، أكثر مفاهيمية مع أسئلة تطبيقية.",
        ],
      },
      {
        heading: "CCNA مقابل Security+: كيف تجري الامتحانات؟",
        paragraphs: [
          "الامتحانان صعبان بالنسبة للمبتدئ، لكن شكلهما مختلف. إليك الأرقام الرسمية التي يجب معرفتها.",
        ],
        list: [
          "CCNA 200-301: حوالي 120 دقيقة؛ لا تنشر Cisco العدد الدقيق للأسئلة ولا عتبة النجاح؛ أسئلة متعددة الاختيارات وسحب وإفلات ومحاكاة على معدات Cisco؛ يُجتاز عبر Pearson VUE في مركز أو عن بُعد.",
          "Security+ SY0-701: 90 سؤالًا كحد أقصى في 90 دقيقة؛ أسئلة متعددة الاختيارات وأسئلة أداء تطبيقية؛ عتبة النجاح 750 على سلم من 100 إلى 900.",
          "الصلاحية: 3 سنوات لكليهما، قابلة للتجديد عبر التكوين المستمر (Cisco Continuing Education أو CompTIA CE).",
        ],
      },
      {
        heading: "كم يكلف CCNA وSecurity+ في المغرب؟",
        paragraphs: [
          "في GATech، يُقدَّم التكوينان بالسعر المعلن نفسه: 10900 درهم، مع قسيمة الامتحان الرسمي. ويمتد كل منهما على 5 أيام (40 ساعة). إذن لا يفصل السعر بينهما، بل مشروعك المهني هو الذي يحسم.",
          "إذا كنت تنوي اجتياز الاثنتين، فخطط لهما كمرحلتين منفصلتين، ويُفضّل أن تفصل بينهما بضعة أشهر لترسيخ الأولى قبل الشروع في الثانية.",
        ],
      },
      {
        heading: "ما الوظائف التي تفتحها CCNA وSecurity+ في المغرب؟",
        paragraphs: [
          "تُعد CCNA المرجع لوظائف البنية التحتية: تقني أو مسؤول شبكات، مهندس دعم، أو مُدمج لدى مشغّل اتصالات أو شركة خدمات معلوماتية أو مُدمج حلول. وفي سوق تعتمد فيه كثير من شبكات المؤسسات على معدات Cisco، فهي ميزة ملموسة في السيرة الذاتية.",
          "أما Security+ فتستهدف أولى وظائف الأمن السيبراني: محلل SOC من المستوى الأول، تقني أمن، مساعد مسؤول أمن نظم المعلومات، أو مسؤول أنظمة يتولى مهام الأمن. كما تحظى بالتقدير لدى الشركات التي تعمل مع عملاء دوليين لأنها معروفة خارج إطار مصنّع واحد.",
          "في السيرة الذاتية، يقرأ المشغّلون الشهادتين بشكل مختلف. تُفهم CCNA كدليل على مهارة تشغيلية: المترشح يعرف كيف يُعدّ ويصلح الأعطال وسيصبح مستقلًا بسرعة في البنية التحتية. وتُقرأ Security+ كدليل على ثقافة أمنية منظمة: المترشح يتحدث لغة المخاطر والضوابط والحوادث. وفي الحالتين، يكتسب سطر الشهادة وزنًا أكبر بكثير حين يرافقه شيء ملموس: مختبر موثّق، أو تدريب، أو مشروع مراقبة أو تقوية.",
          "لا تضمن أي من الشهادتين وظيفة وحدها: الخبرة والمشاريع الشخصية والتطبيق في المختبرات مهمة بالقدر نفسه. لكن كل واحدة ترسل إشارة واضحة عن توجهك.",
        ],
      },
      {
        heading: "بأي ترتيب تجتاز CCNA وSecurity+ حسب ملفك؟",
        paragraphs: [
          "بدل البحث عن \"أفضل\" شهادة، انطلق من وضعك الحالي ومن الوظيفة التي تستهدفها.",
        ],
        list: [
          "تقني أو مسؤول شبكات: CCNA أولًا لترسيخ مهنتك الأساسية، ثم Security+ للانتقال نحو الأمن.",
          "هدفك SOC أو تحليل الأمن: Security+ أولًا، ثم Cisco CCNA Cybersecurity (امتحان 200-201) المركزة على المراقبة وتحليل الحوادث.",
          "طالب أو في طور تغيير المسار دون خبرة في الشبكات: CCNA أولًا إذا كنت تحب التقنية البحتة، وSecurity+ أولًا إذا كان الأمن السيبراني هدفك الواضح، مع العمل بالتوازي على أساسيات TCP/IP.",
          "مسؤول أنظمة: Security+ أولًا في الغالب، لأنها تغطي مباشرة الهويات والأجهزة الطرفية والتقوية.",
        ],
      },
      {
        heading: "ما خطة الدراسة على 3 إلى 6 أشهر، وهل تجتاز الشهادتين؟",
        paragraphs: [
          "إليك خطتين إرشاديتين، تُكيَّفان حسب مستواك وحسب الوقت المتاح لك (احسب بضع ساعات أسبوعيًا إضافة إلى التكوين).",
          "لمن يستهدف الأمن السيبراني على المدى المتوسط، نعم، فهما غالبًا ثنائي ممتاز. المحلل الذي يفهم حقًا التوجيه وشبكات VLAN وتدفقات الشبكة يقرأ التنبيه أو التقاط الحزم بشكل أفضل بكثير. وبالمقابل، يصمم مهندس الشبكات المُلمّ بمفاهيم الأمن بنيات أكثر متانة.",
          "الأهم ألا تخوض كل شيء في وقت واحد. اجتز الأولى، وطبّقها بضعة أشهر، ثم انتقل إلى الثانية. وستجعل نقاط التقاطع (عنونة IP والمنافذ والبروتوكولات والجدران النارية وقوائم ACL) التحضير الثاني أكثر سلاسة.",
        ],
        list: [
          "مسار الشبكات، الشهر 1: نموذجا OSI وTCP/IP، عنونة IPv4 والشبكات الفرعية، أولى إعدادات المبدّلات في محاكي.",
          "مسار الشبكات، الشهر 2: VLAN وtrunking والتوجيه الثابت وOSPF وقوائم ACL؛ أعد كل مختبر حتى تبنيه دون مساعدة.",
          "مسار الشبكات، الشهر 3: الخدمات (DHCP وDNS وNAT)، الشبكات اللاسلكية، أساسيات الأمن والأتمتة، امتحانات تجريبية ثم اجتياز CCNA.",
          "مسار الشبكات، الأشهر 4 إلى 6: Security+ بالاعتماد على مكتسبات الشبكات، مع التركيز على التشفير والهويات وإدارة المخاطر.",
          "مسار SOC، الشهر 1: مراجعة الشبكات (المنافذ والبروتوكولات والتقاطات Wireshark)، ثم التهديدات وأنواع الهجمات في Security+.",
          "مسار SOC، الشهر 2: البنية الآمنة، الهويات والوصول، عمليات الأمن؛ تدرّب على أسئلة الأداء.",
          "مسار SOC، الشهر 3: امتحانات تجريبية ثم اجتياز Security+.",
          "مسار SOC، الأشهر 4 إلى 6: CCNA Cybersecurity (200-201) مع تحليل السجلات والتقاطات الحزم والتنبيهات في مختبر شخصي.",
        ],
      },
      {
        heading: "وماذا عن CCNA Cybersecurity مقابل Security+؟",
        paragraphs: [
          "كثيرا ما تُقارن Cisco CCNA Cybersecurity (امتحان 200-201، المعروفة سابقا بـ CyberOps Associate) بـ Security+، لأن كلتيهما تستهدفان أولى وظائف الأمن السيبراني. والفرق في النطاق: تمنح Security+ ثقافة أمنية واسعة (التهديدات والبنية والهويات والمخاطر والامتثال)، بينما تركز CCNA Cybersecurity على عمل محلل SOC من المستوى الأول: المراقبة وتحليل السجلات وحركة الشبكة واكتشاف الحوادث والاستجابة لها.",
          "إذا كنت مترددا بينهما من أجل وظيفة في SOC، فإن Security+ تبقى أفضل خطوة أولى، ثم تأتي CCNA Cybersecurity لتعميق الجانب العملي. ويُقدَّم التكوينان بالسعر نفسه لدى GATech (10900 درهم مع القسيمة).",
          "أما «CCNA Security» التي ما تزال تظهر في كثير من عمليات البحث، فلم تعد موجودة: سحبتها Cisco في فبراير 2020 عند إعادة هيكلة شهاداتها. ولمسار أمني لدى Cisco اليوم، يجب استهداف CCNA (200-301) ثم CCNA Cybersecurity.",
        ],
      },
      {
        heading: "كيف ترافقك GATech نحو CCNA أو Security+؟",
        paragraphs: [
          "تقدم GATech تكوين CCNA وتكوين CompTIA Security+، لكل منهما 5 أيام بسعر 10900 درهم مع قسيمة الامتحان الرسمي، حضوريًا أو عبر فصل افتراضي مباشر. ولمواصلة مسار SOC، يُقدَّم تكوين Cisco CCNA Cybersecurity بالسعر نفسه. اطّلع على عروضنا الحالية وتواصل معنا لاختيار الترتيب الذي يناسب ملفك.",
        ],
      },
    ],
    en: [
      {
        heading: "CCNA or Security+: which should you take first?",
        paragraphs: [
          "The short answer: start with CCNA if your daily work (or your goal) revolves around networks, and with Security+ if you are aiming straight for a cybersecurity role, for example in a SOC. Both are well-recognised entry-level certifications, but they lay different foundations.",
          "Cisco CCNA (exam 200-301) validates your ability to install, configure and troubleshoot a network: switching, routing, IP addressing, network services, security basics and automation. CompTIA Security+ (exam SY0-701) validates broad cybersecurity knowledge: threats and vulnerabilities, secure architecture, security operations, risk management and compliance. It is vendor-neutral.",
          "In other words, CCNA teaches you how the network you will protect actually works; Security+ teaches you how to protect it. The two are complementary, and many professionals end up holding both.",
        ],
      },
      {
        heading: "Networking foundation or security foundation: what does each validate?",
        paragraphs: [
          "CCNA is very concrete: you configure Cisco switches and routers, set up VLANs, OSPF routing and access control lists, and learn to diagnose faults. It is a technical, device-oriented certification, and part of the exam takes the form of simulations.",
          "Security+ is broader and more cross-cutting. It covers attack types, cryptography, identity and access management, cloud and endpoint security, incident response and governance. It does not make you an expert in one tool, but it gives you the vocabulary and reflexes expected of a security professional.",
        ],
        list: [
          "CCNA: IP networking, switching, routing, network services, security basics, automation.",
          "Security+: threats, secure architecture, security operations, risk management, compliance.",
          "CCNA: vendor-oriented (Cisco), very hands-on.",
          "Security+: vendor-neutral, more conceptual but with performance-based questions.",
        ],
      },
      {
        heading: "CCNA vs Security+: what are the exams like?",
        paragraphs: [
          "Both exams are demanding for a beginner, but their formats differ. Here are the official figures to know.",
        ],
        list: [
          "CCNA 200-301: about 120 minutes; Cisco publishes neither the exact number of questions nor the passing score; multiple choice, drag-and-drop and simulations on Cisco devices; delivered by Pearson VUE, at a test centre or online.",
          "Security+ SY0-701: up to 90 questions in 90 minutes; multiple choice and performance-based questions; passing score of 750 on a 100–900 scale.",
          "Validity: 3 years for both, renewable through continuing education (Cisco Continuing Education or CompTIA CE).",
        ],
      },
      {
        heading: "How much do CCNA and Security+ cost in Morocco?",
        paragraphs: [
          "At GATech both courses have the same public price: MAD 10,900, official exam voucher included. Each lasts 5 days (40 hours). Price therefore does not separate the two: your career plan should decide.",
          "If you plan to take both, budget them as two separate steps, ideally a few months apart so you can consolidate the first before tackling the second.",
        ],
      },
      {
        heading: "Which jobs do CCNA and Security+ open in Morocco?",
        paragraphs: [
          "CCNA is the reference for infrastructure roles: network technician or administrator, support engineer, or integrator at a telecom operator, IT services company or solutions integrator. In a market where many corporate networks run on Cisco equipment, it is a concrete asset on a CV.",
          "Security+ targets first cybersecurity roles instead: tier-1 SOC analyst, security technician, assistant to the CISO, or a system administrator taking on security duties. It is also valued by companies working with international clients, since it is known beyond a single vendor.",
          "On a CV, recruiters read the two differently. CCNA is seen as proof of operational know-how: the candidate can configure and troubleshoot and will quickly be autonomous on the infrastructure. Security+ is read as proof of structured security knowledge: the candidate speaks the language of risks, controls and incidents. In both cases, a certification line carries far more weight when backed by something concrete: a documented lab, an internship, a monitoring or hardening project.",
          "Neither certification guarantees a job on its own: experience, personal projects and lab practice matter just as much. But each sends a clear signal about your direction.",
        ],
      },
      {
        heading: "In what order should you take CCNA and Security+ for your profile?",
        paragraphs: [
          "Rather than looking for the \"best\" certification, start from where you are now and the job you want.",
        ],
        list: [
          "Network technician or administrator: CCNA first to strengthen your core skills, then Security+ to move towards security.",
          "Aiming for a SOC or security analyst role: Security+ first, then Cisco CCNA Cybersecurity (exam 200-201), which focuses on monitoring and incident analysis.",
          "Student or career changer without networking experience: CCNA first if you enjoy pure technology; Security+ first if cybersecurity is your clear goal, while working on TCP/IP basics in parallel.",
          "System administrator: usually Security+ first, as it directly covers identities, endpoints and hardening.",
        ],
      },
      {
        heading: "What 3–6 month study plan, and should you take both?",
        paragraphs: [
          "Here are two indicative plans, to adapt to your starting level and available time (allow a few hours a week on top of the course).",
          "For anyone aiming at cybersecurity in the medium term, yes, it is often an excellent pair. An analyst who really understands routing, VLANs and traffic flows reads an alert or a packet capture far better. Conversely, a network engineer who masters security concepts designs sturdier architectures.",
          "The key is not to do everything at once. Pass the first, put it into practice for a few months, then move on to the second. The overlaps (IP addressing, ports, protocols, firewalls, ACLs) will make the second preparation smoother.",
        ],
        list: [
          "Network path, month 1: OSI and TCP/IP models, IPv4 addressing and subnetting, first switch configurations in a simulator.",
          "Network path, month 2: VLANs, trunking, static and OSPF routing, ACLs; repeat each lab until you can build it unaided.",
          "Network path, month 3: services (DHCP, DNS, NAT), wireless, security and automation basics, practice exams, then sit CCNA.",
          "Network path, months 4–6: Security+, building on your networking knowledge and focusing on cryptography, identities and risk management.",
          "SOC path, month 1: networking refresher (ports, protocols, Wireshark captures), then Security+ threats and attack types.",
          "SOC path, month 2: secure architecture, identity and access, security operations; practise performance-based questions.",
          "SOC path, month 3: practice exams and sit Security+.",
          "SOC path, months 4–6: CCNA Cybersecurity (200-201), analysing logs, packet captures and alerts in a personal lab.",
        ],
      },
      {
        heading: "What about CCNA Cybersecurity vs Security+?",
        paragraphs: [
          "Cisco CCNA Cybersecurity (exam 200-201, formerly CyberOps Associate) is often compared with Security+, since both target entry-level security jobs. The difference is scope: Security+ gives broad security knowledge (threats, architecture, identity, risk, compliance), while CCNA Cybersecurity focuses on the work of a Tier 1 SOC analyst: monitoring, log and network traffic analysis, incident detection and response.",
          "If you are torn between the two for a SOC role, Security+ is still the better first step, with CCNA Cybersecurity then deepening the hands-on side. Both courses cost the same at GATech (10,900 MAD, voucher included).",
          "As for the \"CCNA Security\" that still shows up in many searches, it no longer exists: Cisco retired it in February 2020 when it overhauled its certifications. For a security path with Cisco today, aim for CCNA (200-301) and then CCNA Cybersecurity.",
        ],
      },
      {
        heading: "How can GATech help you prepare for CCNA or Security+?",
        paragraphs: [
          "GATech offers a CCNA course and a CompTIA Security+ course, 5 days each, at MAD 10,900 with the official exam voucher included, in class or in a live virtual classroom. To continue on a SOC path, the Cisco CCNA Cybersecurity course is offered at the same price. Check our current offers and contact us to choose the order that fits your profile.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      { q: "CCNA ou Security+ : laquelle est la plus facile ?", a: "Cela dépend de votre profil. Le CCNA est souvent jugé plus technique en raison des simulations sur équipements Cisco ; le Security+ couvre un champ plus large de notions. Un profil réseau trouvera le CCNA plus naturel, un profil orienté sécurité le Security+." },
      { q: "Combien coûtent le CCNA et le Security+ chez GATech ?", a: "Les deux formations sont à 10 900 MAD chacune, pour 5 jours (40 heures), voucher de l'examen officiel inclus." },
      { q: "Combien de questions comportent les examens ?", a: "Le Security+ SY0-701 compte 90 questions au maximum en 90 minutes, avec un score de réussite de 750 sur 900. Pour le CCNA 200-301 (environ 120 minutes), Cisco ne publie pas le nombre exact de questions." },
      { q: "Quelle certification pour devenir analyste SOC ?", a: "Commencez plutôt par le Security+, puis poursuivez avec le Cisco CCNA Cybersecurity (200-201), centré sur la surveillance et l'analyse d'incidents. Des bases réseau solides restent indispensables." },
      { q: "Le CCNA Security existe-t-il encore ?", a: "Non. Cisco a retiré le CCNA Security en février 2020. Pour la sécurité, le parcours actuel est le CCNA (200-301) puis le CCNA Cybersecurity (200-201), orienté SOC." },
      { q: "Le CCNA et le Security+ expirent-ils ?", a: "Oui, les deux sont valables 3 ans. Le CCNA se renouvelle via un examen ou des crédits Cisco Continuing Education, le Security+ via le programme CompTIA CE." },
    ],
    ar: [
      { q: "CCNA أم Security+: أيهما أسهل؟", a: "يتوقف ذلك على ملفك. غالبًا ما تُعد CCNA أكثر تقنية بسبب المحاكاة على معدات Cisco، بينما تغطي Security+ نطاقًا أوسع من المفاهيم. صاحب الخلفية الشبكية سيجد CCNA أقرب إليه، وصاحب التوجه الأمني سيجد Security+ كذلك." },
      { q: "كم تكلف CCNA وSecurity+ لدى GATech؟", a: "يُقدَّم كل تكوين بسعر 10900 درهم، لمدة 5 أيام (40 ساعة)، مع قسيمة الامتحان الرسمي." },
      { q: "كم عدد أسئلة الامتحانين؟", a: "يضم امتحان Security+ SY0-701 ما يصل إلى 90 سؤالًا في 90 دقيقة، وعتبة النجاح 750 من 900. أما CCNA 200-301 (حوالي 120 دقيقة) فلا تنشر Cisco العدد الدقيق لأسئلته." },
      { q: "أي شهادة لتصبح محلل SOC؟", a: "ابدأ بـ Security+، ثم تابع بـ Cisco CCNA Cybersecurity (200-201) المركزة على المراقبة وتحليل الحوادث. وتبقى أساسيات الشبكات المتينة ضرورية." },
      { q: "هل ما تزال شهادة CCNA Security موجودة؟", a: "لا. سحبت Cisco شهادة CCNA Security في فبراير 2020. والمسار الحالي في الأمن هو CCNA (200-301) ثم CCNA Cybersecurity (200-201) الموجهة نحو SOC." },
      { q: "هل تنتهي صلاحية CCNA وSecurity+؟", a: "نعم، كلتاهما صالحة 3 سنوات. تُجدَّد CCNA بامتحان أو بأرصدة Cisco Continuing Education، وSecurity+ عبر برنامج CompTIA CE." },
    ],
    en: [
      { q: "CCNA or Security+: which is easier?", a: "It depends on your background. CCNA is often seen as more technical because of the simulations on Cisco devices; Security+ covers a wider range of concepts. A networking profile will find CCNA more natural, a security-minded one Security+." },
      { q: "How much do CCNA and Security+ cost at GATech?", a: "Both courses cost MAD 10,900 each, for 5 days (40 hours), official exam voucher included." },
      { q: "How many questions are on the exams?", a: "Security+ SY0-701 has up to 90 questions in 90 minutes, with a passing score of 750 out of 900. For CCNA 200-301 (about 120 minutes), Cisco does not publish the exact number of questions." },
      { q: "Which certification to become a SOC analyst?", a: "Start with Security+, then continue with Cisco CCNA Cybersecurity (200-201), which focuses on monitoring and incident analysis. Solid networking basics remain essential." },
      { q: "Does CCNA Security still exist?", a: "No. Cisco retired CCNA Security in February 2020. The current security path is CCNA (200-301) followed by CCNA Cybersecurity (200-201), which is SOC-focused." },
      { q: "Do CCNA and Security+ expire?", a: "Yes, both are valid for 3 years. CCNA is renewed by exam or Cisco Continuing Education credits, Security+ through the CompTIA CE program." },
    ],
  },
};

export default guide;
