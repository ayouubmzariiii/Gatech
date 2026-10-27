import { fixBidiDeep } from "@/lib/bidi";
import type { Localized } from "@/lib/i18n";
import type { BlogCategory, BlogPost, Guide } from "../types";
import { blogImages } from "./images";

import choisir from "./quelle-certification-cybersecurite-choisir";
import cehOscp from "./ceh-ou-oscp";
import secPlusCeh from "./security-plus-ou-ceh";
import prix from "./prix-certifications-cybersecurite-maroc";
import cisspCism from "./cissp-ou-cism";
import loi0520 from "./loi-05-20-cybersecurite-maroc";
import iso27001 from "./iso-27001-maroc";
import pentester from "./devenir-pentester-maroc";
import reussirCeh from "./reussir-examen-ceh-v13";
import securityPlus from "./comptia-security-plus-sy0-701";
import oscpPrep from "./preparer-oscp-maroc";
import soc from "./analyste-soc-maroc";
import reconversion from "./reconversion-cybersecurite-maroc";
import entreprise from "./former-equipes-cybersecurite-entreprise";
import meilleurCentre from "./meilleur-centre-formation-cybersecurite-maroc";
import cehV14 from "./ceh-v14";
import voucherGratuit from "./voucher-certification-gratuit";
import certifsGratuites from "./certifications-cybersecurite-gratuites";
import ccnaOuSecPlus from "./ccna-ou-security-plus";
import ccnaCyber from "./ccna-cybersecurity-maroc";
import cisspMaroc from "./certification-cissp-maroc";
import enLigne from "./formation-cybersecurite-en-ligne-maroc";
import metiers from "./metiers-cybersecurite-maroc";
import pareFeu from "./fortigate-palo-alto-ou-check-point";

/** Fixes "+" placement in Arabic text (see lib/bidi). */
const withArabicBidi = (g: Guide): Guide => {
  const out = { ...g } as Record<string, unknown>;
  for (const [k, v] of Object.entries(g)) {
    if (v && typeof v === "object" && !Array.isArray(v) && "ar" in v) out[k] = { ...v, ar: fixBidiDeep((v as { ar: unknown }).ar) };
  }
  return out as unknown as Guide;
};

const withImages = (g: Guide): BlogPost => {
  const images = blogImages[g.slug];
  if (!images) throw new Error(`Missing photos for blog post "${g.slug}" in src/data/blog/images.ts`);
  return { ...g, cover: images.cover, figure: images.figure };
};

/** Editorial order: strategic posts first, newest first within the same date. */
export const posts: BlogPost[] = [
  meilleurCentre, cehV14, voucherGratuit, certifsGratuites, choisir, metiers, prix, cehOscp, ccnaOuSecPlus, pareFeu, enLigne, cisspMaroc, ccnaCyber, reussirCeh, securityPlus, secPlusCeh, oscpPrep, soc, reconversion,
  entreprise, cisspCism, loi0520, iso27001, pentester,
].map((g) => withImages(withArabicBidi(g)));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Posts that mention a certification. */
export const postsForCert = (certSlug: string) => posts.filter((p) => p.relatedCerts.includes(certSlug));

export const blogCategories: BlogCategory[] = ["certifications", "comparatifs", "carrieres", "conformite", "entreprises"];

export const categoryLabels: Record<BlogCategory, Localized> = {
  certifications: { fr: "Certifications", ar: "الشهادات", en: "Certifications" },
  comparatifs: { fr: "Comparatifs", ar: "مقارنات", en: "Comparisons" },
  carrieres: { fr: "Carrières", ar: "المسارات المهنية", en: "Careers" },
  conformite: { fr: "Réglementation & conformité", ar: "التنظيم والامتثال", en: "Regulation & compliance" },
  entreprises: { fr: "Entreprises", ar: "الشركات", en: "Business" },
};

/** H1 and intro of each category page (unique per category and language). */
export const categoryPages: Record<BlogCategory, { heading: Localized; intro: Localized }> = {
  certifications: {
    heading: {
      fr: "Articles sur les certifications cybersécurité",
      ar: "مقالات حول شهادات الأمن السيبراني",
      en: "Cybersecurity certification articles",
    },
    intro: {
      fr: "Programmes, examens, prix en dirhams et méthodes de préparation : tout ce qu'il faut savoir sur le CEH v13, CompTIA Security+, l'OSCP+, le CISSP, Cisco CCNA et les autres certifications reconnues par les employeurs marocains.",
      ar: "البرامج والامتحانات والأسعار بالدرهم وطرق التحضير: كل ما تحتاج معرفته عن CEH v13 و CompTIA Security+ و OSCP+ و CISSP و Cisco CCNA وباقي الشهادات التي يعترف بها المشغّلون في المغرب.",
      en: "Syllabi, exams, prices in dirhams and preparation methods: everything you need to know about CEH v13, CompTIA Security+, OSCP+, CISSP, Cisco CCNA and the other certifications Moroccan employers recognise.",
    },
  },
  comparatifs: {
    heading: { fr: "Comparatifs de certifications cybersécurité", ar: "مقارنات بين شهادات الأمن السيبراني", en: "Cybersecurity certification comparisons" },
    intro: {
      fr: "CEH ou OSCP+, Security+ ou CEH, CISSP ou CISM : nos comparatifs mettent les certifications côte à côte (examen, niveau, prix, reconnaissance) pour vous aider à choisir la bonne au bon moment de votre carrière.",
      ar: "CEH أم OSCP+، Security+ أم CEH، CISSP أم CISM: تضع مقارناتنا الشهادات جنبًا إلى جنب (الامتحان، المستوى، السعر، الاعتراف) لمساعدتك على اختيار المناسبة في الوقت المناسب من مسارك.",
      en: "CEH or OSCP+, Security+ or CEH, CISSP or CISM: our comparisons put certifications side by side (exam, level, price, recognition) to help you pick the right one at the right point in your career.",
    },
  },
  carrieres: {
    heading: { fr: "Carrières en cybersécurité au Maroc", ar: "المهن في الأمن السيبراني بالمغرب", en: "Cybersecurity careers in Morocco" },
    intro: {
      fr: "Pentester, analyste SOC, reconversion : les métiers de la cybersécurité au Maroc, les compétences attendues par les recruteurs et le parcours de certifications pour décrocher votre premier poste ou évoluer.",
      ar: "مختبر الاختراق، محلل SOC، إعادة التوجيه المهني: مهن الأمن السيبراني في المغرب، والكفاءات التي يطلبها المشغّلون، ومسار الشهادات للحصول على أول وظيفة أو للتطور.",
      en: "Pentester, SOC analyst, career change: cybersecurity jobs in Morocco, the skills recruiters expect and the certification path to land your first role or move up.",
    },
  },
  conformite: {
    heading: { fr: "Réglementation et conformité cybersécurité au Maroc", ar: "تنظيم الأمن السيبراني والامتثال في المغرب", en: "Cybersecurity regulation and compliance in Morocco" },
    intro: {
      fr: "Loi 05-20, DNSSI, loi 09-08 et ISO 27001 : ce que la réglementation marocaine impose aux organisations et les compétences qui permettent à vos équipes d'y répondre.",
      ar: "القانون 05-20 و DNSSI والقانون 09-08 و ISO 27001: ما يفرضه التنظيم المغربي على المؤسسات، والكفاءات التي تمكّن فرقك من الاستجابة له.",
      en: "Law 05-20, the DNSSI, law 09-08 and ISO 27001: what Moroccan regulation requires from organisations and the skills that help your teams comply.",
    },
  },
  entreprises: {
    heading: { fr: "Formation cybersécurité pour les entreprises", ar: "تكوين الأمن السيبراني للشركات", en: "Cybersecurity training for companies" },
    intro: {
      fr: "Former vos équipes IT, SOC et management : besoins par profil, formats intra-entreprise, budget, financement et plan de formation annuel pour renforcer la sécurité de votre organisation au Maroc.",
      ar: "تكوين فرقك التقنية وفرق SOC والإدارة: الاحتياجات حسب الملف، صيغ التكوين داخل الشركة، الميزانية، التمويل ومخطط التكوين السنوي لتعزيز أمن مؤسستك في المغرب.",
      en: "Training your IT, SOC and management teams: needs by role, in-house formats, budget, funding and a yearly training plan to strengthen your organisation's security in Morocco.",
    },
  },
};

export const postsInCategory = (c: BlogCategory) => posts.filter((p) => p.category === c);

/** Related posts: same category first, then posts sharing a certification. */
export function relatedPosts(post: BlogPost, n = 3) {
  const others = posts.filter((p) => p.slug !== post.slug);
  const score = (p: BlogPost) =>
    (p.category === post.category ? 2 : 0) + p.relatedCerts.filter((c) => post.relatedCerts.includes(c)).length;
  return others.sort((a, b) => score(b) - score(a)).slice(0, n);
}

/** Articles promoted from hub pages (catalog, business, cities, footer): the pillar/cluster entry points. */
export const featuredPostSlugs = {
  catalog: ["meilleur-centre-formation-cybersecurite-maroc", "quelle-certification-cybersecurite-choisir", "prix-certifications-cybersecurite-maroc"],
  business: ["former-equipes-cybersecurite-entreprise", "loi-05-20-cybersecurite-maroc", "iso-27001-maroc"],
  cities: ["meilleur-centre-formation-cybersecurite-maroc", "reconversion-cybersecurite-maroc", "quelle-certification-cybersecurite-choisir"],
  footer: [
    "meilleur-centre-formation-cybersecurite-maroc",
    "quelle-certification-cybersecurite-choisir",
    "prix-certifications-cybersecurite-maroc",
    "ceh-ou-oscp",
    "analyste-soc-maroc",
  ],
} as const;

export const postsBySlugs = (slugs: readonly string[]) => slugs.map((s) => getPost(s)).filter((p) => p !== undefined);

/** Anchor id for a section heading. */
export const sectionId = (i: number) => `section-${i + 1}`;
