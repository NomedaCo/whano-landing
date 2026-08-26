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
    en: "Whano is built by Nomeda, a software and AI company based in Egypt. We build digital solutions for the MENA region, including Nezam (our modular ERP), custom Shopify stores, and Whano.",
    ar: "Whano من إنتاج Nomeda، شركة برمجيات وذكاء اصطناعي مقرها مصر. نبني حلولاً رقمية لمنطقة الشرق الأوسط وشمال أفريقيا، تشمل Nezam (نظام ERP المرن)، ومتاجر Shopify المخصصة، وWhano.",
  },
  sections: [
    {
      heading: { en: "Why we built Whano", ar: "ليه بنّا Whano" },
      body: [
        {
          en: "We run our own Shopify stores. We know what happens after checkout: the WhatsApp messages that pile up, the order changes that come through chat, and the delivery questions that pull you away from growing the business.",
          ar: "بنشغّل متاجر Shopify بأنفسنا. عارفين اللي بيحصل بعد الدفع: رسائل الواتساب اللي بتتراكم، وتعديلات الطلب في الشات، وأسئلة التوصيل اللي بتشغلك عن تطوير الشغل.",
        },
        {
          en: "We tried other solutions. They either required tedious WhatsApp API verification that took weeks, or they sounded like a stiff robot reading a script. Neither works when you need fast, natural conversations.",
          ar: "جرّبنا حلول تانية. إما بتطلب إجراءات توثيق معقدة من Meta بتاخد أسابيع، أو بتبان زي روبوت جامد بيقرا سكريبت محفوظ. الطريقتين مابيشتغلوش لما تكون محتاج سرعة ومحادثة طبيعية.",
        },
        {
          en: "So we built Whano to connect Shopify to instant WhatsApp automation. The system handles the repetitive order flows under your store's brand. You get seamless delivery without the operational headache.",
          ar: "فلذلك بنّينا Whano عشان يربط Shopify بأتمتة واتساب فورية باسم متجرك. النظام بيتعامل مع تأكيد وتعديل ومتابعة الطلبات، وإنت بتركز في نمو مبيعاتك من غير وجع دماغ الإعدادات.",
        },
      ],
    },
    {
      heading: { en: "About Nomeda", ar: "عن Nomeda" },
      body: [
        {
          en: "Nomeda is a bootstrapped software and AI company building for the MENA region. We believe software should be built for the people who use it, not translated from another market and labeled 'local.'",
          ar: "Nomeda شركة برمجيات وذكاء اصطناعي مستقلة بتبني للمنطقة. بنؤمن إن البرمجيات لازم تتبنى للناس اللي بتستخدمها، مش تترجم من سوق تاني وتتلقب بـ'محلية'.",
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
