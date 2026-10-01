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
    ar: "كنا تجارًا في البداية.",
  },
  intro: {
    en: "Whano is built by Nomeda, a software and AI company based in Egypt. We build digital solutions for the MENA region, including Nezam (our modular ERP), custom Shopify stores, and Whano.",
    ar: "Whano من إنتاج Nomeda، شركة برمجيات وذكاء اصطناعي مقرها مصر. نبني حلولاً رقمية لمنطقة الشرق الأوسط وشمال أفريقيا، تشمل Nezam (نظام ERP المرن)، ومتاجر Shopify المخصصة، وWhano.",
  },
  sections: [
    {
      heading: { en: "Why we built Whano", ar: "لماذا بنينا Whano" },
      body: [
        {
          en: "We run our own Shopify stores. We know what happens after checkout: the WhatsApp messages that pile up, the order changes that come through chat, and the delivery questions that pull you away from growing the business.",
          ar: "ندير متاجر Shopify بأنفسنا. نعرف ما يحدث بعد الدفع: رسائل واتساب تتراكم، وتعديلات طلبات تصل عبر المحادثات، وأسئلة توصيل تشغلك عن تطوير المتجر.",
        },
        {
          en: "We tried other solutions. They either required tedious WhatsApp API verification that took weeks, or they sounded like a stiff robot reading a script. Neither works when you need fast, natural conversations.",
          ar: "جرّبنا حلولًا أخرى، فكانت إما تتطلب إجراءات توثيق معقدة من Meta تستغرق أسابيع، وإما تبدو كروبوت يقرأ نصًا محفوظًا. لا هذا ولا ذاك يناسب محادثة سريعة وطبيعية.",
        },
        {
          en: "So we built Whano to connect Shopify to instant WhatsApp automation. The system handles the repetitive order flows under your store's brand. You get seamless delivery without the operational headache.",
          ar: "لذلك بنينا Whano ليربط Shopify بأتمتة واتساب فورية باسم متجرك. يتولى النظام تأكيد الطلبات وتعديلها ومتابعتها، فيما تركز أنت على نمو مبيعاتك من دون تعقيدات الإعداد.",
        },
      ],
    },
    {
      heading: { en: "About Nomeda", ar: "عن Nomeda" },
      body: [
        {
          en: "Nomeda is a bootstrapped software and AI company building for the MENA region. We believe software should be built for the people who use it, not translated from another market and labeled 'local.'",
          ar: "Nomeda شركة برمجيات وذكاء اصطناعي مستقلة تبني للمنطقة. نؤمن بأن البرمجيات يجب أن تُبنى لمن يستخدمها، لا أن تُترجم من سوق آخر وتُوصف بأنها 'محلية'.",
        },
        {
          en: "Our products: Nezam (modular ERP with AI), Whano (WhatsApp automation for Shopify), and custom Shopify store development.",
          ar: "منتجاتنا: Nezam (نظام ERP مرن بالذكاء الاصطناعي)، Whano (أتمتة واتساب لـ Shopify)، وبناء متاجر Shopify مخصصة.",
        },
      ],
      list: [
        { en: "Arabic-first interfaces, not afterthoughts", ar: "واجهات عربية أولًا، مش ملحق متأخر" },
        { en: "AI built in from day one", ar: "ذكاء اصطناعي مدمج من الأول" },
        { en: "Pay for what you use, no lock-in", ar: "ادفع مقابل ما تستخدمه، من دون اشتراك إجباري" },
      ],
    },
    {
      heading: { en: "Our stores", ar: "متاجرنا" },
      body: [
        {
          en: "We also build custom Shopify stores for brands in Egypt. Every store is designed, developed, and optimized for the Egyptian market.",
          ar: "نبني أيضًا متاجر Shopify مخصصة لعلامات تجارية في مصر. يُصمم كل متجر ويُبنى بما يوافق السوق المصري.",
        },
      ],
    },
  ],
  values: {
    heading: { en: "What drives us", ar: "ما الذي يحركنا" },
    items: [
      {
        title: { en: "Innovation", ar: "الابتكار" },
        body: {
          en: "Pushing the boundaries of what software and AI can do for businesses in the MENA region.",
          ar: "نوسّع حدود ما يمكن أن تقدمه البرمجيات والذكاء الاصطناعي لشركات المنطقة.",
        },
      },
      {
        title: { en: "Simplicity", ar: "البساطة" },
        body: {
          en: "Complex problems deserve elegant, simple solutions that anyone can use.",
          ar: "المشكلات المعقدة تستحق حلولًا أنيقة وبسيطة يستطيع الجميع استخدامها.",
        },
      },
      {
        title: { en: "Transparency", ar: "الشفافية" },
        body: {
          en: "Open pricing, open communication, open source when possible.",
          ar: "أسعار واضحة، وتواصل مفتوح، ومصدر مفتوح عندما يكون ذلك ممكنًا.",
        },
      },
    ],
  },
  cta: {
    title: { en: "Ready to try Whano?", ar: "هل أنت مستعد لتجربة Whano؟" },
    body: {
      en: "Install Whano on your Shopify store and start automating post-purchase conversations.",
      ar: "ثبّت Whano على متجرك على Shopify وابدأ أتمتة محادثات ما بعد الشراء.",
    },
    button: { en: "Install on Shopify", ar: "ثبّت على Shopify" },
  },
};
