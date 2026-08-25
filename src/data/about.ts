import type { Localized } from "./content";

export interface AboutSection {
  heading: Localized;
  body: Localized[];
  list?: Localized[];
}

export const aboutPage: {
  title: Localized;
  subtitle: Localized;
  intro: Localized;
  sections: AboutSection[];
  values: {
    heading: Localized;
    items: { title: Localized; body: Localized }[];
  };
  cta: {
    title: Localized;
    body: Localized;
    button: Localized;
  };
} = {
  title: { en: "About Whano", ar: "عن Whano" },
  subtitle: {
    en: "We were merchants first.",
    ar: "إحنا كنّا تجار أولًا.",
  },
  intro: {
    en: "Whano is built by Nomeda, a software and AI company based in Egypt. We build digital solutions for the MENA region — from Nezam, our modular ERP, to custom Shopify stores, to Whano.",
    ar: "Whano من إنتاج Nomeda، شركة برمجيات وذكاء اصطناعي مقرها مصر. بناء حلول رقمية لمنطقة الشرق الأوسط وشمال أفريقيا — من Nezam، نظام ERP المرن، لمتاجر Shopify المخصصة، لحد Whano.",
  },
  sections: [
    {
      heading: { en: "Why we built Whano", ar: "ليه بنّا Whano" },
      body: [
        {
          en: "We run our own Shopify stores. We know what happens after checkout — the WhatsApp messages that pile up, the order changes that come through chat, the delivery questions that pull you away from growing the business.",
          ar: "بنشغّل متاجر Shopify riêngّنا. عارفين اللي بيحصل بعد الدفع — رسائل الواتساب اللي بتتراكم، وتعديلات الطلب اللي بتيجي في الشات، وأسئلة التوصيل اللي بتشغلك عن تطوير الشغل.",
        },
        {
          en: "We tried other solutions. They either required a new number customers didn't know, or they sounded like a bot reading a script. Neither works when you need a real conversation.",
          ar: "جرّبنا حلول تانية. إما بتطلب رقم جديد عملاءك مش عارفينه، أو بتبان زى بوت بيقرا سكريبت. أيهم ما بيشتغلش لما تكون محتاج محادثة حقيقية.",
        },
        {
          en: "So we built Whano to connect Shopify to the WhatsApp number you already use. The automation handles the repetitive work. You step in when it matters.",
          ar: "فلذلك بنّينا Whano يوصل Shopify برقم الواتساب اللي بتستخدمه أصلًا. الأتمتة بتتعامل مع الشغل المتكرر. وإنت بتدخل لما الموقف يحتاجك.",
        },
      ],
    },
    {
      heading: { en: "About Nomeda", ar: "عن Nomeda" },
      body: [
        {
          en: "Nomeda is a bootstrapped software and AI company building for the MENA region. We believe software should be built for the people who use it — not translated from another market and labeled 'local.'",
          ar: "Nomeda شركة برمجيات وذكاء اصطناعي مستقلة بتبني للمنطقة. بنؤمن إن البرمجيات لازم تتبنى للناس اللي بتستخدمها — مش تترجم من سوق تاني وتتلقب بـ'محلية'.",
        },
        {
          en: "Our products: Nezam (modular ERP with AI), Whano (WhatsApp automation for Shopify), and custom Shopify store development.",
          ar: "منتجاتنا: Nezam (نظام ERP مرن بالذكاء الاصطناعي)، Whano (أتمتة واتساب لـ Shopify)، وبناء متاجر Shopify مخصصة.",
        },
      ],
      list: [
        { en: "Arabic-first interfaces, not afterthoughts", ar: "واجهات عربية أولًا، مش ملحق متأخر" },
        { en: "AI built in from day one", ar: "ذكاء اصطناعي مدمج من الأول" },
        { en: "Pay for what you use, no lock-in", ar: "ادفع اللي بتستخدمه، من غير اشتراك إجباري" },
      ],
    },
    {
      heading: { en: "Our stores", ar: "متاجرنا" },
      body: [
        {
          en: "We also build custom Shopify stores for brands in Egypt. Every store is designed, developed, and optimized for the Egyptian market.",
          ar: "بن build كمان متاجر Shopify مخصصة لبراندات في مصر. كل متجر بيتصمم وينبنى ويتوافق مع السوق المصري.",
        },
      ],
    },
  ],
  values: {
    heading: { en: "What drives us", ar: "اللي بيحرّكنا" },
    items: [
      {
        title: { en: "Innovation", ar: "الابتكار" },
        body: {
          en: "Pushing the boundaries of what software and AI can do for businesses in the MENA region.",
          ar: "ندفع حدود إمكانيات البرمجيات والذكاء الاصطناعي للشركات في المنطقة.",
        },
      },
      {
        title: { en: "Simplicity", ar: "البساطة" },
        body: {
          en: "Complex problems deserve elegant, simple solutions that anyone can use.",
          ar: "المشكلات المعقدة تستاهل حلول أنيقة وبسيطة أي حد يستخدمها.",
        },
      },
      {
        title: { en: "Transparency", ar: "الشفافية" },
        body: {
          en: "Open pricing, open communication, open source when possible.",
          ar: "أسعار واضحة، تواصل مفتوح، ومفتوح المصدر لما ينفع.",
        },
      },
    ],
  },
  cta: {
    title: { en: "Ready to try Whano?", ar: "جاهز تجرّب Whano؟" },
    body: {
      en: "Install Whano on your Shopify store and start automating post-purchase conversations.",
      ar: "ثبّت Whano على متجرك على Shopify وابدأ أتمتة محادثات ما بعد الشراء.",
    },
    button: { en: "Install on Shopify", ar: "ثبّت على Shopify" },
  },
};
