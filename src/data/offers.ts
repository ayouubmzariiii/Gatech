import type { Localized } from "@/lib/i18n";

/**
 * Commercial offers shown on the catalog, home and every certification price card.
 * These are public commitments: edit or remove them here (one place) if your terms change.
 */
export interface Offer {
  id: "early-bird" | "group" | "instalments" | "student";
  /** Short badge, e.g. "-10 %". */
  badge: Localized;
  title: Localized;
  text: Localized;
}

export const offers: Offer[] = [
  {
    id: "early-bird",
    badge: { fr: "−10 %", ar: "−10%", en: "−10%" },
    title: { fr: "Inscription anticipée", ar: "التسجيل المبكر", en: "Early bird" },
    text: {
      fr: "10 % de remise pour toute inscription réglée au moins 4 semaines avant le début de la session.",
      ar: "خصم 10% على كل تسجيل يُؤدّى ثمنه قبل 4 أسابيع على الأقل من بداية الدورة.",
      en: "10% off when you register and pay at least 4 weeks before the session starts.",
    },
  },
  {
    id: "group",
    badge: { fr: "−15 %", ar: "−15%", en: "−15%" },
    title: { fr: "Tarif groupe", ar: "سعر المجموعات", en: "Group rate" },
    text: {
      fr: "15 % de remise dès 3 participants d'une même entreprise inscrits à la même session.",
      ar: "خصم 15% ابتداءً من 3 مشاركين من نفس الشركة في نفس الدورة.",
      en: "15% off from 3 participants from the same company in the same session.",
    },
  },
  {
    id: "student",
    badge: { fr: "−15 %", ar: "−15%", en: "−15%" },
    title: { fr: "Étudiants & jeunes diplômés", ar: "الطلبة والخريجون الجدد", en: "Students & recent graduates" },
    text: {
      fr: "15 % de remise sur présentation d'une carte d'étudiant valide ou d'un diplôme de moins de 12 mois.",
      ar: "خصم 15% عند تقديم بطاقة طالب سارية أو شهادة لم يمرّ عليها أكثر من 12 شهرًا.",
      en: "15% off with a valid student card or a diploma obtained less than 12 months ago.",
    },
  },
  {
    id: "instalments",
    badge: { fr: "3×", ar: "3×", en: "3×" },
    title: { fr: "Paiement en 3 fois sans frais", ar: "الأداء على 3 دفعات بدون فوائد", en: "Pay in 3 interest-free instalments" },
    text: {
      fr: "Pour les particuliers : réglez en 3 mensualités sans frais. Le voucher d'examen est émis après la 2e mensualité.",
      ar: "للأفراد: ادفع على 3 أقساط شهرية بدون فوائد. تُصدر قسيمة الامتحان بعد أداء القسط الثاني.",
      en: "For individuals: pay in 3 monthly instalments at no extra cost. The exam voucher is issued after the 2nd instalment.",
    },
  },
];

/** Shown under the offers: discounts never stack. */
export const offersNote: Localized = {
  fr: "Remises non cumulables entre elles. Conditions détaillées sur le devis.",
  ar: "الخصومات غير قابلة للجمع فيما بينها. الشروط المفصلة في عرض السعر.",
  en: "Discounts cannot be combined. Full terms are stated on the quote.",
};
