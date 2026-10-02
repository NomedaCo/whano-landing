import type { Localized } from "./content";

export interface GuideSection {
  heading: Localized;
  body: Localized[];
}

export interface Guide {
  slug: string;
  eyebrow: Localized;
  title: Localized;
  description: Localized;
  intro: Localized;
  readingTime: Localized;
  sections: GuideSection[];
}

/**
 * Practical guides, written from the flows the product actually runs.
 * Nothing here is a claim about results; it is what to send, when, and why.
 */
export const guides: Guide[] = [
  {
    slug: "whatsapp-order-follow-up",
    eyebrow: { en: "Guide", ar: "دليل" },
    title: {
      en: "Post-purchase follow-up on WhatsApp: a practical guide for Shopify stores",
      ar: "متابعة ما بعد الشراء على واتساب: دليل عملي لمتاجر Shopify",
    },
    description: {
      en: "The four moments that matter after checkout, what to send in each, and the mistakes that turn follow-up into noise.",
      ar: "اللحظات الأربع التي تهم بعد إتمام الشراء، وما يُرسل في كل منها، والأخطاء التي تحوّل المتابعة إلى إزعاج.",
    },
    intro: {
      en: "Most stores lose their customer in the silence between checkout and delivery. This guide is the shortest path through that silence: four messages, sent at four moments, each with one clear job.",
      ar: "معظم المتاجر تفقد عميلها في الصمت بين إتمام الشراء والتسليم. هذا الدليل هو أقصر طريق عبر هذا الصمت: أربع رسائل في أربع لحظات، لكل واحدة مهمة واضحة.",
    },
    readingTime: { en: "6 min read", ar: "6 دقائق قراءة" },
    sections: [
      {
        heading: { en: "1. The confirmation, minutes after checkout", ar: "1. التأكيد، دقائق بعد الشراء" },
        body: [
          {
            en: "Send the order number, the items, the total and the shipping address, and end with what to do next: Confirm, Cancel, or Edit. This is the one message that prevents most of what follows — a customer who confirmed on day one does not ask who you are on day three.",
            ar: "أرسل رقم الطلب والمنتجات والإجمالي وعنوان الشحن، واختم بالخطوة التالية: تأكيد أو إلغاء أو تعديل. هذه هي الرسالة التي تمنع معظم ما يأتي بعدها — فالعميل الذي أكّد في اليوم الأول لا يسأل من أنتم في اليوم الثالث.",
          },
          {
            en: "Keep it one screen. If the order has many items, list the first few and say how many more there are.",
            ar: "اجعلها في شاشة واحدة. وإذا كان الطلب كثير البنود، اذكر أولها وقل كم بندًا آخر.",
          },
        ],
      },
      {
        heading: { en: "2. The reply, the moment it arrives", ar: "2. الرد، لحظة وصوله" },
        body: [
          {
            en: "A customer who taps Confirm should hear back immediately; one who asks for an edit should see the new total before they close the app. The window between a customer's message and your reply is where trust is either built or lost.",
            ar: "من يضغط تأكيد يجب أن يسمع ردًا فورًا، ومن يطلب تعديلًا يجب أن يرى الإجمالي الجديد قبل أن يغلق التطبيق. الفترة بين رسالة العميل وردّك هي حيث تُبنى الثقة أو تُفقد.",
          },
        ],
      },
      {
        heading: { en: "3. The tracking update, when you actually ship", ar: "3. تحديث التتبع، عند الشحن الفعلي" },
        body: [
          {
            en: "Not when the label is printed — when the parcel is handed over. Send the tracking number and an honest delivery window. A vague \"soon\" is worse than nothing, because it invites the question you are trying to avoid.",
            ar: "لا عند طباعة البوليصة، بل عند تسليم الشحنة. أرسل رقم التتبع وموعدًا واقعيًا للتوصيل. كلمة «قريبًا» المبهمة أسوأ من لا شيء، لأنها تستدعي السؤال الذي تحاول تجنّبه.",
          },
        ],
      },
      {
        heading: { en: "4. The rating request, after delivery", ar: "4. طلب التقييم، بعد التوصيل" },
        body: [
          {
            en: "Ask once, simply, after the parcel has arrived — not the same day it ships. If a customer says the experience was bad, the next message should be options, not a thank-you: exchange, return, or a human. That is what turns a private complaint into a fixed problem instead of a public review.",
            ar: "اسأل مرة واحدة وببساطة بعد وصول الشحنة — لا في يوم إرسالها. وإذا قال العميل إن التجربة سيئة، يجب أن تكون الرسالة التالية خيارات لا شكرًا: استبدال أو استرجاع أو شخص حقيقي. هذا ما يحوّل الشكوى الخاصة إلى مشكلة محلولة بدلًا من مراجعة علنية.",
          },
        ],
      },
      {
        heading: { en: "What not to do", ar: "ما يجب ألا تفعله" },
        body: [
          {
            en: "Do not send marketing inside the order conversation unless the customer opted in, do not ask for a review before delivery, and do not send the same message twice because the first one did not get a reply. Silence is data: it usually means the message arrived outside the customer's hours, not that they ignored you.",
            ar: "لا تُرسل عروضًا داخل محادثة الطلب إلا بموافقة العميل، ولا تطلب تقييمًا قبل التوصيل، ولا تُرسل الرسالة نفسها مرتين لأن الأولى لم تُجب. الصمت بيانات: يعني غالبًا أن الرسالة وصلت خارج ساعات العميل، لا أنه تجاهلك.",
          },
        ],
      },
    ],
  },
  {
    slug: "reduce-wismo",
    eyebrow: { en: "Guide", ar: "دليل" },
    title: {
      en: "How to cut \"where is my order?\" messages",
      ar: "كيف تُقلّل رسائل «طلبي فين؟»",
    },
    description: {
      en: "WISMO is not a support problem, it is a silence problem. Here is the sequence that removes most of it.",
      ar: "سؤال «طلبي فين؟» ليس مشكلة دعم، بل مشكلة صمت. هذا هو التسلسل الذي يزيل معظمه.",
    },
    intro: {
      en: "\"Where is my order?\" arrives for one reason: the customer knows less than you do. Every day between payment and delivery is a day they wonder — and wondering becomes a message, a cancellation, or a refund request.",
      ar: "يأتي سؤال «طلبي فين؟» لسبب واحد: العميل يعرف أقل مما تعرف. كل يوم بين الدفع والتسليم هو يوم يتساءل فيه — والتساؤل يصبح رسالة أو إلغاءً أو طلب استرجاع.",
    },
    readingTime: { en: "5 min read", ar: "5 دقائق قراءة" },
    sections: [
      {
        heading: { en: "Say what you know, when you know it", ar: "قل ما تعرفه، حين تعرفه" },
        body: [
          {
            en: "The order is confirmed, the parcel left the warehouse, the courier has it, it is out for delivery. Each of those is a fact you already have — and each one is a message the customer would otherwise have to ask for.",
            ar: "تم تأكيد الطلب، وخرجت الشحنة من المخزن، وهي مع شركة الشحن، وفي الطريق إليك. كل واحدة من هذه حقيقة تعرفها بالفعل — وكل واحدة رسالة سيسأل عنها العميل لو لم تُرسلها.",
          },
        ],
      },
      {
        heading: { en: "Give a window, not a wish", ar: "أعطِ موعدًا، لا أمنية" },
        body: [
          {
            en: "A real range — \"2 to 5 business days\" — beats \"soon\". If the carrier changes the date, send the new one. A customer who was told 2–5 days and hears nothing on day six is not impatient; they were misled.",
            ar: "نطاق حقيقي — «من 2 إلى 5 أيام عمل» — أفضل من «قريبًا». وإذا غيّرت شركة الشحن الموعد، أرسل الموعد الجديد. العميل الذي قيل له 2–5 أيام ولم يسمع شيئًا في اليوم السادس ليس نافد الصبر، بل أُعطي معلومة خاطئة.",
          },
        ],
      },
      {
        heading: { en: "Handle the exception before the customer finds it", ar: "تعامل مع الاستثناء قبل أن يكتشفه العميل" },
        body: [
          {
            en: "A failed delivery attempt, a wrong address, a postponed delivery: these are the moments that produce phone calls. When the carrier reports a problem, reach out first with the reason and the options — even a hard truth, said early, is better than a surprise.",
            ar: "محاولة توصيل فاشلة، أو عنوان خاطئ، أو تأجيل التسليم: هذه هي اللحظات التي تنتج المكالمات. عندما تبلغ شركة الشحن عن مشكلة، بادر بالتواصل مع السبب والخيارات — حتى الحقيقة الصعبة، إن قيلت مبكرًا، أفضل من مفاجأة.",
          },
        ],
      },
      {
        heading: { en: "Measure the silence, not the messages", ar: "قِس الصمت، لا الرسائل" },
        body: [
          {
            en: "Track two numbers: how many orders got their tracking update on the day they shipped, and how many support conversations were about delivery. The second falls when the first rises — that is the whole relationship.",
            ar: "تابع رقمين: كم طلبًا وصل إليه تحديث التتبع في يوم شحنه، وكم محادثة دعم كانت عن التوصيل. الثاني ينخفض عندما يرتفع الأول — وهذه هي العلاقة كاملة.",
          },
        ],
      },
    ],
  },
];

export function guideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
