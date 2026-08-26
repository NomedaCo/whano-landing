import type { Localized } from "./content";

export interface LegalSection {
  heading: Localized;
  paragraphs?: Localized[];
  bullets?: Localized[];
  links?: Array<{ label: Localized; href: string }>;
}

export const termsSections: LegalSection[] = [
  {
    heading: { en: "1. Acceptance of these terms", ar: "1. الموافقة على الشروط" },
    paragraphs: [
      {
        en: "These Terms of Service govern your use of Whano, a WhatsApp automation service for Shopify merchants operated by NomedaCo (\"Whano\", \"we\", \"us\", or \"our\"). By requesting access to or using the service, you agree to these terms.",
        ar: "تحدد شروط الخدمة هذه قواعد استخدامك لخدمة Whano، وهي خدمة لأتمتة التواصل عبر واتساب لمتاجر Shopify وتديرها NomedaCo (ويُشار إليها بـ\"Whano\" أو \"نحن\"). بطلب الوصول إلى الخدمة أو استخدامها، فأنت توافق على هذه الشروط.",
      },
    ],
  },
  {
    heading: { en: "2. What Whano provides", ar: "2. الخدمة التي يقدّمها Whano" },
    paragraphs: [
      {
        en: "Whano connects with a Shopify store to automate WhatsApp order confirmations, order changes, shipping updates, review requests, and related customer conversations on behalf of the store. The exact features available to you depend on your configuration and plan.",
        ar: "يربط Whano متجر Shopify بخدمة أتمتة رسائل واتساب لتأكيد الطلبات وتعديلاتها وتحديثات الشحن وطلبات التقييم والمحادثات المرتبطة بالعملاء نيابة عن المتجر. وتعتمد الميزات المتاحة لك على إعداداتك وباقتك.",
      },
    ],
  },
  {
    heading: { en: "3. Your account and responsibilities", ar: "3. حسابك ومسؤولياتك" },
    bullets: [
      {
        en: "You must have authorization and permission to operate the Shopify store connected to Whano.",
        ar: "يجب أن تكون مخولًا بإدارة متجر Shopify المرتبط بـ Whano ولتوجيه الرسائل لعملائه.",
      },
      {
        en: "You are responsible for your account credentials, store configuration, message templates, and the accuracy of information supplied to the service.",
        ar: "أنت مسؤول عن بيانات اعتماد حسابك وإعدادات متجرك وقوالب الرسائل ودقة المعلومات التي تقدمها إلى الخدمة.",
      },
      {
        en: "You must use Whano in accordance with Shopify's terms, WhatsApp's policies, and applicable law.",
        ar: "يجب أن تستخدم Whano بما يتوافق مع شروط Shopify وسياسات واتساب والقوانين المعمول بها.",
      },
    ],
  },
  {
    heading: { en: "4. Messages and customer consent", ar: "4. الرسائل وموافقة العملاء" },
    paragraphs: [
      {
        en: "You are responsible for having the lawful basis and any consent required to contact your customers. You are also responsible for the content of messages sent through your store. Whano does not replace your responsibility to follow messaging, marketing, consumer-protection, or privacy rules.",
        ar: "أنت مسؤول عن وجود الأساس القانوني وأي موافقات لازمة للتواصل مع عملائك. كما أنك مسؤول عن محتوى الرسائل المرسلة من خلال متجرك. لا يعفيك Whano من مسؤوليتك عن الالتزام بقواعد المراسلة والتسويق وحماية المستهلك والخصوصية.",
      },
    ],
  },
  {
    heading: { en: "5. Points, pricing, and payment", ar: "5. النقاط والأسعار والدفع" },
    paragraphs: [
      {
        en: "Whano uses message points. You purchase a points pack and points are consumed when configured automations run. Prices, included points, and the cost of an automation are shown before purchase and may change for future purchases. Unless required by law or agreed in writing, purchased points are non-refundable and cannot be exchanged for cash.",
        ar: "يستخدم Whano نظام نقاط للرسائل. تشتري باقة نقاط، وتُستهلك النقاط عند تشغيل الأتمتة التي أعددتها. تُعرض الأسعار وعدد النقاط وتكلفة الأتمتة قبل الشراء، وقد تتغير في المشتريات اللاحقة. ما لم يقتضِ القانون أو يُتفق كتابيًا على خلاف ذلك، لا تُرد قيمة النقاط المشتراة ولا يمكن استبدالها نقدًا.",
      },
    ],
  },
  {
    heading: { en: "6. Third-party services", ar: "6. الخدمات التابعة لأطراف أخرى" },
    paragraphs: [
      {
        en: "Whano relies on Shopify, WhatsApp, hosting providers, payment providers, and other infrastructure services. Their availability and terms are outside our control. A change or interruption by a third party may affect the service.",
        ar: "يعتمد Whano على Shopify وواتساب ومقدمي الاستضافة والدفع وخدمات البنية التحتية الأخرى. ولا نتحكم في توافر هذه الخدمات أو شروطها. وقد يؤثر أي تغيير أو انقطاع لدى طرف ثالث في الخدمة.",
      },
    ],
  },
  {
    heading: { en: "7. Availability and liability", ar: "7. التوافر والمسؤولية" },
    paragraphs: [
      {
        en: "The service is provided on an \"as available\" basis. We do not guarantee that every message will be delivered, that every customer question will be understood, or that the service will be uninterrupted. To the extent allowed by law, NomedaCo is not liable for indirect, incidental, special, or consequential losses arising from your use of Whano. Nothing in these terms excludes liability that cannot legally be excluded.",
        ar: "تُقدّم الخدمة حسب توافرها. ولا نضمن تسليم كل رسالة أو فهم كل استفسار من العملاء أو استمرار الخدمة دون انقطاع. وإلى الحد الذي يسمح به القانون، لا تتحمل NomedaCo مسؤولية الخسائر غير المباشرة أو العرضية أو الخاصة أو التبعية الناتجة عن استخدامك لـ Whano. ولا يستبعد أي حكم في هذه الشروط مسؤولية لا يجوز استبعادها قانونًا.",
      },
    ],
  },
  {
    heading: { en: "8. Suspension and termination", ar: "8. الإيقاف وإنهاء الاستخدام" },
    paragraphs: [
      {
        en: "You may stop using Whano at any time. We may suspend or terminate access if you breach these terms, misuse the service, create a risk to customers or infrastructure, or if we are required to do so by law. After termination, we handle data according to the Privacy Policy.",
        ar: "يجوز لك التوقف عن استخدام Whano في أي وقت. ويجوز لنا تعليق الوصول أو إنهاؤه إذا خالفت هذه الشروط أو أسأت استخدام الخدمة أو تسببت في خطر على العملاء أو البنية التحتية أو إذا أُلزمنا بذلك قانونًا. بعد الإنهاء، نتعامل مع البيانات وفقًا لسياسة الخصوصية.",
      },
    ],
  },
  {
    heading: { en: "9. Changes to these terms", ar: "9. التعديلات على الشروط" },
    paragraphs: [
      {
        en: "We may update these terms as the service changes. We will update the date on this page and, where appropriate, notify you through the service or by email. Continued use after an update means you accept the updated terms.",
        ar: "قد نحدّث هذه الشروط مع تطور الخدمة. سنحدّث التاريخ الموجود في هذه الصفحة، وسنخطرك عند الاقتضاء من خلال الخدمة أو البريد الإلكتروني. ويعني استمرارك في الاستخدام بعد التحديث موافقتك على الشروط المعدّلة.",
      },
    ],
  },
  {
    heading: { en: "10. Contact", ar: "10. التواصل معنا" },
    paragraphs: [
      {
        en: "For questions about these terms, contact us at",
        ar: "للاستفسارات المتعلقة بهذه الشروط، تواصل معنا عبر",
      },
    ],
    links: [{ label: { en: "contact@nomeda.tech", ar: "contact@nomeda.tech" }, href: "mailto:contact@nomeda.tech" }],
  },
];

export const privacySections: LegalSection[] = [
  {
    heading: { en: "1. Overview", ar: "1. نظرة عامة" },
    paragraphs: [
      {
        en: "This Privacy Policy explains how Whano, operated by NomedaCo, collects and uses information when a Shopify merchant connects a store to the service.",
        ar: "توضح سياسة الخصوصية هذه كيفية جمع Whano، الذي تديره NomedaCo، للمعلومات واستخدامها عندما يربط تاجر Shopify متجره بالخدمة.",
      },
    ],
  },
  {
    heading: { en: "2. Information we receive", ar: "2. المعلومات التي نستقبلها" },
    bullets: [
      {
        en: "Shop information such as the store domain, merchant contact details, and Shopify connection information.",
        ar: "معلومات المتجر، مثل نطاق المتجر وبيانات تواصل التاجر ومعلومات الاتصال بـ Shopify.",
      },
      {
        en: "Order, product, fulfillment, and customer information needed to run the automations you enable, including names, phone numbers, items, totals, and shipping status.",
        ar: "معلومات الطلبات والمنتجات والتنفيذ والعملاء اللازمة لتشغيل الأتمتة التي فعّلتها، ومنها الأسماء وأرقام الهاتف والمنتجات والإجماليات وحالة الشحن.",
      },
      {
        en: "Store branding settings, connection state, and messages sent or received through Whano.",
        ar: "إعدادات هوية المتجر، وحالة الاتصال، والرسائل المرسلة أو المستلمة من خلال Whano.",
      },
      {
        en: "Account, billing, support, and usage information.",
        ar: "معلومات الحساب والفواتير والدعم والاستخدام.",
      },
    ],
  },
  {
    heading: { en: "3. How we use information", ar: "3. طريقة استخدام المعلومات" },
    bullets: [
      {
        en: "To connect Shopify and WhatsApp and deliver the automations you configure.",
        ar: "لربط Shopify بواتساب وتنفيذ الأتمتة التي تضبطها.",
      },
      {
        en: "To show order, message, review, and usage information in the merchant dashboard.",
        ar: "لعرض معلومات الطلبات والرسائل والتقييمات والاستخدام في لوحة تحكم التاجر.",
      },
      {
        en: "To generate product recommendations and conversational replies when those features are enabled.",
        ar: "لإنشاء اقتراحات المنتجات والردود الحوارية عند تفعيل هذه الميزات.",
      },
      {
        en: "To provide support, process payments, detect abuse, maintain security, and improve reliability using aggregated or anonymized information where possible.",
        ar: "لتقديم الدعم ومعالجة المدفوعات واكتشاف إساءة الاستخدام والحفاظ على الأمان وتحسين الاعتمادية، باستخدام معلومات مجمعة أو مجهّلة كلما أمكن.",
      },
    ],
  },
  {
    heading: { en: "4. When information is shared", ar: "4. متى نشارك المعلومات" },
    paragraphs: [
      {
        en: "We do not sell your data. We share only what is needed with service providers that help us operate Whano, including Shopify, WhatsApp, hosting and database providers, payment processors, email delivery providers, and AI or workflow providers used to produce enabled features. We may also disclose information when required by law or to protect the service and its users.",
        ar: "لا نبيع بياناتك. نشارك فقط المعلومات اللازمة مع مقدمي الخدمات الذين يساعدوننا في تشغيل Whano، ومنهم Shopify وواتساب ومقدمو الاستضافة وقواعد البيانات ومعالجو الدفع وخدمات إرسال البريد ومقدمو الذكاء الاصطناعي أو سير العمل المستخدمون لتشغيل الميزات المفعّلة. وقد نكشف المعلومات إذا طلب القانون ذلك أو لحماية الخدمة ومستخدميها.",
      },
    ],
  },
  {
    heading: { en: "5. Retention and deletion", ar: "5. الاحتفاظ بالبيانات وحذفها" },
    paragraphs: [
      {
        en: "We retain information while your account is active or as needed to provide the service, meet legal obligations, resolve disputes, and enforce agreements. When you delete your account, we begin deleting personal data within 30 days, subject to backups, legal requirements, and information that has been anonymized.",
        ar: "نحتفظ بالمعلومات طوال فترة نشاط حسابك أو بالقدر اللازم لتقديم الخدمة والوفاء بالالتزامات القانونية وحل النزاعات وتنفيذ الاتفاقات. عند حذف حسابك، نبدأ حذف البيانات الشخصية خلال 30 يومًا، مع مراعاة النسخ الاحتياطية والمتطلبات القانونية والمعلومات المجهّلة.",
      },
    ],
  },
  {
    heading: { en: "6. Security", ar: "6. الأمان" },
    paragraphs: [
      {
        en: "We use reasonable technical and organizational measures to protect information, including encrypted connections, access controls, and encrypted storage for sensitive connection credentials. No online service can guarantee absolute security.",
        ar: "نستخدم تدابير تقنية وتنظيمية معقولة لحماية المعلومات، ومنها الاتصالات المشفّرة وضوابط الوصول وتخزين بيانات اعتماد الاتصال الحساسة بصورة مشفّرة. ولا يمكن لأي خدمة عبر الإنترنت أن تضمن أمانًا مطلقًا.",
      },
    ],
  },
  {
    heading: { en: "7. Your choices and rights", ar: "7. اختياراتك وحقوقك" },
    paragraphs: [
      {
        en: "Depending on where you live, you may have rights to access, correct, export, restrict, or delete personal information. You may also disconnect WhatsApp or uninstall Whano. Contact us at privacy@nomeda.tech to make a request. We may need to verify your identity before responding.",
        ar: "بحسب مكان إقامتك، قد تتمتع بحقوق الوصول إلى معلوماتك الشخصية وتصحيحها وتصديرها وتقييد معالجتها وحذفها. كما يمكنك فصل واتساب أو إلغاء تثبيت Whano. تواصل معنا عبر privacy@nomeda.tech لتقديم طلب، وقد نحتاج إلى التحقق من هويتك قبل الرد.",
      },
    ],
  },
  {
    heading: { en: "8. Customer data", ar: "8. بيانات عملاء المتجر" },
    paragraphs: [
      {
        en: "When you provide customer data to Whano, you remain responsible for having the right to provide it and for giving customers any notices required by law. We process that data only to provide the service to your store and according to your instructions.",
        ar: "عند تزويد Whano ببيانات العملاء، تظل مسؤولًا عن امتلاك الحق في تقديمها وعن تزويد العملاء بأي إشعارات يطلبها القانون. نعالج هذه البيانات فقط لتقديم الخدمة لمتجرك ووفقًا لتعليماتك.",
      },
    ],
  },
  {
    heading: { en: "9. Cookies", ar: "9. ملفات تعريف الارتباط" },
    paragraphs: [
      {
        en: "The website uses only cookies or browser storage that are necessary for basic functionality, such as remembering your language preference. We do not use advertising cookies on this landing page.",
        ar: "يستخدم الموقع فقط ملفات تعريف الارتباط أو تخزين المتصفح اللازم للوظائف الأساسية، مثل تذكر اختيار اللغة. ولا نستخدم ملفات تعريف ارتباط إعلانية في صفحة الهبوط هذه.",
      },
    ],
  },
  {
    heading: { en: "10. Contact", ar: "10. التواصل معنا" },
    paragraphs: [
      {
        en: "For privacy questions or requests, contact us at",
        ar: "لأسئلة أو طلبات الخصوصية، تواصل معنا عبر",
      },
    ],
    links: [{ label: { en: "privacy@nomeda.tech", ar: "privacy@nomeda.tech" }, href: "mailto:privacy@nomeda.tech" }],
  },
];
