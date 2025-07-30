// Global variables
let currentSlide = 0;
let slideInterval;
let isDarkTheme = false;
let isSideMenuOpen = false;
let currentLanguage = 'ur'; // Default to Urdu

// Gallery images and content
const galleryContent = [
  { text: "Welcome to Our Gallery", color: "#667eea" },
  { text: "Innovation at Its Best", color: "#764ba2" },
  { text: "Excellence in Every Detail", color: "#f093fb" },
  { text: "Your Success is Our Priority", color: "#4facfe" }
];

// Translations
const translations = {
  en: {
    companyName: "My Company",
    navHome: "Home",
    navCommittee: "Committee",
    navEducation: "Education",
    navGallery: "Gallery",
    navTab5: "Tab 5",
    navTab6: "Tab 6",
    navContact: "Contact Us",
    navCommitteeSub1: "Committee",
    navCommitteeSub2: "Buildings",
    navEducationSub1: "Syllabus",
    navEducationSub2: "Classes",
    sideMenuTitle: "Menu",
    sideNavHome: "Home",
    sideNavCommittee: "Committee",
    sideNavEducation: "Education",
    sideNavGallery: "Gallery",
    sideNavTab5: "Tab 5",
    sideNavTab6: "Tab 6",
    sideNavContact: "Contact Us",
    sideNavCommitteeSub1: "Committee",
    sideNavCommitteeSub2: "Buildings",
    sideNavEducationSub1: "Syllabus",
    sideNavEducationSub2: "Classes",
    mainContent: "Welcome to our comprehensive platform where innovation meets excellence. We provide cutting-edge solutions tailored to meet your specific needs. Our team of experts is dedicated to delivering exceptional results that exceed expectations.",
    infoTitle1: "Innovation",
    infoDesc1: "Cutting-edge solutions that drive your business forward with the latest technology and methodologies.",
    infoLink1: "Learn More",
    infoTitle2: "Team Excellence",
    infoDesc2: "Our dedicated team of professionals ensures quality delivery and exceptional customer service.",
    infoLink2: "Meet Our Team",
    infoTitle3: "Growth",
    infoDesc3: "Strategic solutions designed to accelerate your business growth and maximize your potential.",
    infoLink3: "Our Strategy",
    infoTitle4: "Security",
    infoDesc4: "Robust security measures to protect your data and ensure business continuity at all times.",
    infoLink4: "Security Details",
    aboutTitle: "About Us",
    aboutDescription: "We are a forward-thinking company committed to delivering exceptional value to our clients. With years of experience and a passion for innovation, we help businesses achieve their goals through strategic solutions and dedicated support.",
    aboutLink: "Learn More About Us",
    aboutImage: "Company Image",
    storyTitle: "Our Story",
    storyContent1: "Founded with a vision to transform the digital landscape, our company has been at the forefront of innovation since our inception. We started as a small team of passionate developers and designers who believed that technology could make a real difference in people's lives.",
    storyContent2: "Today, we've grown into a comprehensive digital solutions provider, serving clients across multiple industries and continents. Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to excellence.",
    storyContent3: "We believe that success comes from understanding our clients' unique challenges and crafting solutions that not only meet their immediate needs but also position them for long-term growth and success.",
    teamTitle: "Our Team",
    teamSubtitle: "Meet the talented individuals who make our vision a reality",
    member1Name: "John Doe",
    member1Role: "CEO & Founder",
    member1Desc: "Visionary leader with 15+ years of experience in technology and business development.",
    member2Name: "Jane Smith",
    member2Role: "CTO",
    member2Desc: "Technical expert specializing in scalable architecture and emerging technologies.",
    member3Name: "Mike Johnson",
    member3Role: "Head of Design",
    member3Desc: "Creative director with a passion for user-centered design and brand development.",
    member4Name: "Sarah Wilson",
    member4Role: "Project Manager",
    member4Desc: "Experienced project manager ensuring timely delivery and client satisfaction.",
    valuesTitle: "Our Values",
    value1Title: "Innovation",
    value1Desc: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
    value2Title: "Integrity",
    value2Desc: "We maintain the highest ethical standards in all our business relationships and operations.",
    value3Title: "Collaboration",
    value3Desc: "We believe in the power of teamwork and foster a collaborative environment for success.",
    value4Title: "Excellence",
    value4Desc: "We strive for excellence in everything we do, from concept to delivery and beyond.",
    pageTitle: "About Us",
    pageSubtitle: "Learn more about our company, mission, and values",
    contactPageTitle: "Contact Us",
    contactPageSubtitle: "Get in touch with us. We'd love to hear from you!",
    formTitle: "Send us a Message",
    nameLabel: "Full Name *",
    emailLabel: "Email Address *",
    phoneLabel: "Phone Number",
    subjectLabel: "Subject *",
    selectOption: "Select a subject",
    generalOption: "General Inquiry",
    supportOption: "Technical Support",
    salesOption: "Sales Question",
    partnershipOption: "Partnership",
    otherOption: "Other",
    messageLabel: "Message *",
    submitBtn: "Send Message",
    infoTitle: "Contact Information",
    addressTitle: "Address",
    addressText: "123 Business Street, Suite 100\nCity, State 12345",
    phoneTitle: "Phone",
    phoneText: "+1 (555) 123-4567",
    emailTitle: "Email",
    emailText: "info@mycompany.com",
    hoursTitle: "Business Hours",
    hoursText: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM",
    mapTitle: "Find Us",
    mapPlaceholder: "Interactive Map Coming Soon",
    galleryPageTitle: "Gallery",
    galleryPageSubtitle: "Explore our collection of images and projects",
    galleryItem1Title: "Project Showcase",
    galleryItem1Desc: "Our latest project highlights and achievements",
    galleryItem2Title: "Team Events",
    galleryItem2Desc: "Behind the scenes with our amazing team",
    galleryItem3Title: "Office Space",
    galleryItem3Desc: "Our modern and inspiring work environment",
    galleryItem4Title: "Technology",
    galleryItem4Desc: "Cutting-edge technology and innovation",
    galleryItem5Title: "Growth & Success",
    galleryItem5Desc: "Our journey of continuous improvement",
    galleryItem6Title: "Awards & Recognition",
    galleryItem6Desc: "Celebrating our achievements and milestones",
    galleryItem7Title: "Partnerships",
    galleryItem7Desc: "Collaborating with industry leaders",
    galleryItem8Title: "Innovation",
    galleryItem8Desc: "Pushing boundaries and exploring new ideas",
    footerContent: "© 2024 My Company. All rights reserved. Professional services for modern businesses",
    langAttr: "en",
    dirClass: "ltr"
  },
  ur: {
    companyName: "میری کمپنی",
    navHome: "ہوم",
    navCommittee: "کمیٹی",
    navEducation: "تعلیم",
    navGallery: "گیلری",
    navTab5: "ٹیب 5",
    navTab6: "ٹیب 6",
    navContact: "ہم سے رابطہ کریں",
    navCommitteeSub1: "کمیٹی",
    navCommitteeSub2: "عمارتیں",
    navEducationSub1: "نصاب",
    navEducationSub2: "کلاسز",
    sideMenuTitle: "مینو",
    sideNavHome: "ہوم",
    sideNavCommittee: "کمیٹی",
    sideNavEducation: "تعلیم",
    sideNavGallery: "گیلری",
    sideNavTab5: "ٹیب 5",
    sideNavTab6: "ٹیب 6",
    sideNavContact: "ہم سے رابطہ کریں",
    sideNavCommitteeSub1: "کمیٹی",
    sideNavCommitteeSub2: "عمارتیں",
    sideNavEducationSub1: "نصاب",
    sideNavEducationSub2: "کلاسز",
    mainContent: "ہمارے جامع پلیٹ فارم میں خوش آمدید جہاں جدت اور عمدگی ملتی ہے۔ ہم آپ کی مخصوص ضروریات کے مطابق جدید حل فراہم کرتے ہیں۔ ہمارے ماہرین کی ٹیم غیر معمولی نتائج فراہم کرنے کے لیے وقف ہے جو توقعات سے بڑھ کر ہیں۔",
    infoTitle1: "جدت",
    infoDesc1: "جدید ٹیکنالوجی اور طریقوں کے ساتھ آپ کے کاروبار کو آگے بڑھانے والے جدید حل۔",
    infoLink1: "مزید جانیں",
    infoTitle2: "ٹیم کی عمدگی",
    infoDesc2: "ہمارے پیشہ ور افراد کی وقف ٹیم معیاری ترسیل اور غیر معمولی کسٹمر سروس کو یقینی بناتی ہے۔",
    infoLink2: "ہماری ٹیم سے ملیں",
    infoTitle3: "ترقی",
    infoDesc3: "آپ کے کاروبار کی ترقی کو تیز کرنے اور آپ کی صلاحیت کو زیادہ سے زیادہ بنانے کے لیے ڈیزائن کردہ حکمت عملی حل۔",
    infoLink3: "ہماری حکمت عملی",
    infoTitle4: "سیکیورٹی",
    infoDesc4: "آپ کے ڈیٹا کی حفاظت اور ہر وقت کاروباری تسلسل کو یقینی بنانے کے لیے مضبوط سیکیورٹی اقدامات۔",
    infoLink4: "سیکیورٹی کی تفصیلات",
    aboutTitle: "ہمارے بارے میں",
    aboutDescription: "ہم ایک پیش رفت پسند کمپنی ہیں جو اپنے گاہکوں کو غیر معمولی قیمت فراہم کرنے کے لیے وقف ہیں۔ سالوں کے تجربے اور جدت کے جذبے کے ساتھ، ہم حکمت عملی حل اور وقف سپورٹ کے ذریعے کاروباروں کو ان کے اہداف حاصل کرنے میں مدد کرتے ہیں۔",
    aboutLink: "ہمارے بارے میں مزید جانیں",
    aboutImage: "کمپنی کی تصویر",
    storyTitle: "ہماری کہانی",
    storyContent1: "ڈیجیٹل لینڈ اسکیپ کو تبدیل کرنے کے وژن کے ساتھ قائم، ہماری کمپنی ہماری شروعات سے ہی جدت کی پیش پیش رہی ہے۔ ہم نے شوقین ڈویلپرز اور ڈیزائنرز کی ایک چھوٹی سی ٹیم کے طور پر شروع کیا جو یقین رکھتے تھے کہ ٹیکنالوجی لوگوں کی زندگیوں میں حقیقی فرق لا سکتی ہے۔",
    storyContent2: "آج، ہم ایک جامع ڈیجیٹل حل فراہم کنندہ میں بڑھ گئے ہیں، جو متعدد صنعتوں اور براعظموں میں گاہکوں کی خدمت کرتے ہیں۔ ہمارا سفر مسلسل سیکھنے، موافقت، اور عمدگی کے لیے غیر متزلزل عزم سے نشان زد ہے۔",
    storyContent3: "ہم یقین رکھتے ہیں کہ کامیابی ہمارے گاہکوں کے منفرد چیلنجز کو سمجھنے اور ایسے حل تیار کرنے سے آتی ہے جو نہ صرف ان کی فوری ضروریات کو پورا کرتے ہیں بلکہ انہیں طویل مدتی ترقی اور کامیابی کے لیے بھی تیار کرتے ہیں۔",
    teamTitle: "ہماری ٹیم",
    teamSubtitle: "ان ہنر مند افراد سے ملیں جو ہمارے وژن کو حقیقت بناتے ہیں",
    member1Name: "جان ڈو",
    member1Role: "سی ای اور بانی",
    member1Desc: "ٹیکنالوجی اور کاروباری ترقی میں 15+ سال کے تجربے کے ساتھ بصیرت رکھنے والا رہنما۔",
    member2Name: "جین سمتھ",
    member2Role: "سی ٹی او",
    member2Desc: "قابل توسیع آرکیٹیکچر اور ابھرتی ہوئی ٹیکنالوجیز میں مہارت رکھنے والا تکنیکی ماہر۔",
    member3Name: "مائیک جانسن",
    member3Role: "ڈیزائن کے سربراہ",
    member3Desc: "صارف مرکز ڈیزائن اور برانڈ کی ترقی کے جذبے کے ساتھ تخلیقی ڈائریکٹر۔",
    member4Name: "سارہ ولسن",
    member4Role: "پروجیکٹ مینیجر",
    member4Desc: "بروقت ترسیل اور کسٹمر کی اطمینان کو یقینی بنانے والا تجربہ کار پروجیکٹ مینیجر۔",
    valuesTitle: "ہماری اقدار",
    value1Title: "جدت",
    value1Desc: "ہم مسلسل حدود کو آگے بڑھاتے ہیں اور جدید حل فراہم کرنے کے لیے نئی ٹیکنالوجیز کی تلاش کرتے ہیں۔",
    value2Title: "دیانت",
    value2Desc: "ہم اپنے تمام کاروباری تعلقات اور آپریشنز میں اعلیٰ اخلاقی معیارات برقرار رکھتے ہیں۔",
    value3Title: "تعاون",
    value3Desc: "ہم ٹیم ورک کی طاقت پر یقین رکھتے ہیں اور کامیابی کے لیے تعاون کی فضا کو فروغ دیتے ہیں۔",
    value4Title: "عمدگی",
    value4Desc: "ہم ہر کام میں عمدگی کے لیے کوشش کرتے ہیں، تصور سے ترسیل اور اس سے آگے تک۔",
    pageTitle: "ہمارے بارے میں",
    pageSubtitle: "ہماری کمپنی، مشن اور اقدار کے بارے میں مزید جانیں",
    contactPageTitle: "ہم سے رابطہ کریں",
    contactPageSubtitle: "ہم سے رابطہ کریں۔ ہم آپ سے سننا پسند کریں گے!",
    formTitle: "ہمیں پیغام بھیجیں",
    nameLabel: "پورا نام *",
    emailLabel: "ای میل ایڈریس *",
    phoneLabel: "فون نمبر",
    subjectLabel: "موضوع *",
    selectOption: "موضوع منتخب کریں",
    generalOption: "عام استفسار",
    supportOption: "تکنیکی سپورٹ",
    salesOption: "فروخت کا سوال",
    partnershipOption: "شراکت داری",
    otherOption: "دیگر",
    messageLabel: "پیغام *",
    submitBtn: "پیغام بھیجیں",
    infoTitle: "رابطے کی معلومات",
    addressTitle: "پتہ",
    addressText: "123 بزنس سٹریٹ، سوٹ 100\nشہر، ریاست 12345",
    phoneTitle: "فون",
    phoneText: "+1 (555) 123-4567",
    emailTitle: "ای میل",
    emailText: "info@mycompany.com",
    hoursTitle: "کاروباری اوقات",
    hoursText: "پیر - جمعہ: صبح 9:00 - شام 6:00\nہفتہ: صبح 10:00 - شام 4:00",
    mapTitle: "ہمیں تلاش کریں",
    mapPlaceholder: "انٹرایکٹو نقشہ جلد آ رہا ہے",
    galleryPageTitle: "گیلری",
    galleryPageSubtitle: "ہماری تصاویر اور پروجیکٹس کی مجموعہ کو دریافت کریں",
    galleryItem1Title: "پروجیکٹ شوکیس",
    galleryItem1Desc: "ہمارے تازہ ترین پروجیکٹ کی نمایاں خصوصیات اور کامیابیاں",
    galleryItem2Title: "ٹیم کے واقعات",
    galleryItem2Desc: "ہماری شاندار ٹیم کے ساتھ پردے کے پیچھے",
    galleryItem3Title: "دفتری جگہ",
    galleryItem3Desc: "ہمارا جدید اور متاثر کن کام کا ماحول",
    galleryItem4Title: "ٹیکنالوجی",
    galleryItem4Desc: "جدید ٹیکنالوجی اور جدت",
    galleryItem5Title: "ترقی اور کامیابی",
    galleryItem5Desc: "مسلسل بہتری کا ہمارا سفر",
    galleryItem6Title: "انعامات اور شناخت",
    galleryItem6Desc: "ہماری کامیابیوں اور سنگ میل کا جشن",
    galleryItem7Title: "شراکت داریاں",
    galleryItem7Desc: "صنعت کے رہنماؤں کے ساتھ تعاون",
    galleryItem8Title: "جدت",
    galleryItem8Desc: "حدود کو آگے بڑھانا اور نئے خیالات کی تلاش",
    footerContent: "© 2024 میری کمپنی۔ تمام حقوق محفوظ ہیں۔ جدید کاروباروں کے لیے پیشہ ورانہ خدمات",
    langAttr: "ur",
    dirClass: "rtl"
  }
};

// LocalStorage functions
function savePreferences() {
  localStorage.setItem('language', currentLanguage);
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

function loadPreferences() {
  const savedLanguage = localStorage.getItem('language');
  const savedTheme = localStorage.getItem('theme');
  
  if (savedLanguage) {
    currentLanguage = savedLanguage;
  } else {
    // Default to Urdu if no saved preference
    currentLanguage = 'ur';
  }
  
  if (savedTheme) {
    isDarkTheme = savedTheme === 'dark';
  }
  
  // Apply saved preferences
  applyLanguage(currentLanguage);
  applyTheme();
}

// Language switching function
function switchLang(lang) {
  currentLanguage = lang;
  applyLanguage(lang);
  savePreferences();
}

function applyLanguage(lang) {
  const t = translations[lang];
  const body = document.getElementById("mainBody");
  const sideMenu = document.getElementById("sideMenu");
  
  if (!body) return;
  
  // Update body class
  body.className = t.dirClass;
  if (isDarkTheme) {
    body.classList.add('dark');
  }
  
  // Update side menu class for RTL/LTR
  if (sideMenu) {
    sideMenu.className = 'side-menu';
    if (t.dirClass === 'rtl') {
      sideMenu.classList.add('rtl');
    }
  }
  
  // Update document language
  document.documentElement.lang = t.langAttr;
  
  // Update all translatable content
  updateContent(t);
  
  // Update button states
  updateButtonStates(lang);
}

function updateContent(t) {
  // Helper function to safely update element text
  const updateElement = (id, text) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerText = text;
    }
  };

  const updateElementHTML = (id, html) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = html;
    }
  };

  // Update all translatable content
  updateElement("companyName", t.companyName);
  updateElement("navHome", t.navHome);
  updateElement("navCommittee", t.navCommittee);
  updateElement("navEducation", t.navEducation);
  updateElement("navGallery", t.navGallery);
  updateElement("navTab5", t.navTab5);
  updateElement("navTab6", t.navTab6);
  updateElement("navContact", t.navContact);
  updateElement("navCommitteeSub1", t.navCommitteeSub1);
  updateElement("navCommitteeSub2", t.navCommitteeSub2);
  updateElement("navEducationSub1", t.navEducationSub1);
  updateElement("navEducationSub2", t.navEducationSub2);
  
  // Side menu content
  updateElement("sideMenuTitle", t.sideMenuTitle);
  updateElement("sideNavHome", t.sideNavHome);
  updateElement("sideNavCommittee", t.sideNavCommittee);
  updateElement("sideNavEducation", t.sideNavEducation);
  updateElement("sideNavGallery", t.sideNavGallery);
  updateElement("sideNavTab5", t.sideNavTab5);
  updateElement("sideNavTab6", t.sideNavTab6);
  updateElement("sideNavContact", t.sideNavContact);
  updateElement("sideNavCommitteeSub1", t.sideNavCommitteeSub1);
  updateElement("sideNavCommitteeSub2", t.sideNavCommitteeSub2);
  updateElement("sideNavEducationSub1", t.sideNavEducationSub1);
  updateElement("sideNavEducationSub2", t.sideNavEducationSub2);
  
  // Page content
  updateElement("mainContent", t.mainContent);
  updateElement("infoTitle1", t.infoTitle1);
  updateElement("infoDesc1", t.infoDesc1);
  updateElement("infoLink1", t.infoLink1);
  updateElement("infoTitle2", t.infoTitle2);
  updateElement("infoDesc2", t.infoDesc2);
  updateElement("infoLink2", t.infoLink2);
  updateElement("infoTitle3", t.infoTitle3);
  updateElement("infoDesc3", t.infoDesc3);
  updateElement("infoLink3", t.infoLink3);
  updateElement("infoTitle4", t.infoTitle4);
  updateElement("infoDesc4", t.infoDesc4);
  updateElement("infoLink4", t.infoLink4);
  updateElement("aboutTitle", t.aboutTitle);
  updateElement("aboutDescription", t.aboutDescription);
  updateElement("aboutLink", t.aboutLink);
  updateElement("aboutImage", t.aboutImage);
  
  // About page content
  updateElement("storyTitle", t.storyTitle);
  updateElement("storyContent1", t.storyContent1);
  updateElement("storyContent2", t.storyContent2);
  updateElement("storyContent3", t.storyContent3);
  updateElement("teamTitle", t.teamTitle);
  updateElement("teamSubtitle", t.teamSubtitle);
  updateElement("member1Name", t.member1Name);
  updateElement("member1Role", t.member1Role);
  updateElement("member1Desc", t.member1Desc);
  updateElement("member2Name", t.member2Name);
  updateElement("member2Role", t.member2Role);
  updateElement("member2Desc", t.member2Desc);
  updateElement("member3Name", t.member3Name);
  updateElement("member3Role", t.member3Role);
  updateElement("member3Desc", t.member3Desc);
  updateElement("member4Name", t.member4Name);
  updateElement("member4Role", t.member4Role);
  updateElement("member4Desc", t.member4Desc);
  updateElement("valuesTitle", t.valuesTitle);
  updateElement("value1Title", t.value1Title);
  updateElement("value1Desc", t.value1Desc);
  updateElement("value2Title", t.value2Title);
  updateElement("value2Desc", t.value2Desc);
  updateElement("value3Title", t.value3Title);
  updateElement("value3Desc", t.value3Desc);
  updateElement("value4Title", t.value4Title);
  updateElement("value4Desc", t.value4Desc);
  updateElement("pageTitle", t.pageTitle);
  updateElement("pageSubtitle", t.pageSubtitle);
  
  // Contact page content
  updateElement("contactPageTitle", t.contactPageTitle);
  updateElement("contactPageSubtitle", t.contactPageSubtitle);
  updateElement("formTitle", t.formTitle);
  updateElement("nameLabel", t.nameLabel);
  updateElement("emailLabel", t.emailLabel);
  updateElement("phoneLabel", t.phoneLabel);
  updateElement("subjectLabel", t.subjectLabel);
  updateElement("selectOption", t.selectOption);
  updateElement("generalOption", t.generalOption);
  updateElement("supportOption", t.supportOption);
  updateElement("salesOption", t.salesOption);
  updateElement("partnershipOption", t.partnershipOption);
  updateElement("otherOption", t.otherOption);
  updateElement("messageLabel", t.messageLabel);
  updateElement("submitBtn", t.submitBtn);
  updateElement("infoTitle", t.infoTitle);
  updateElement("addressTitle", t.addressTitle);
  updateElementHTML("addressText", t.addressText.replace('\n', '<br>'));
  updateElement("phoneTitle", t.phoneTitle);
  updateElement("phoneText", t.phoneText);
  updateElement("emailTitle", t.emailTitle);
  updateElement("emailText", t.emailText);
  updateElement("hoursTitle", t.hoursTitle);
  updateElementHTML("hoursText", t.hoursText.replace('\n', '<br>'));
  updateElement("mapTitle", t.mapTitle);
  updateElement("mapPlaceholder", t.mapPlaceholder);
  
  // Gallery page content
  updateElement("galleryPageTitle", t.galleryPageTitle);
  updateElement("galleryPageSubtitle", t.galleryPageSubtitle);
  
  // Gallery items
  updateElement("galleryItem1Title", t.galleryItem1Title);
  updateElement("galleryItem1Desc", t.galleryItem1Desc);
  updateElement("galleryItem2Title", t.galleryItem2Title);
  updateElement("galleryItem2Desc", t.galleryItem2Desc);
  updateElement("galleryItem3Title", t.galleryItem3Title);
  updateElement("galleryItem3Desc", t.galleryItem3Desc);
  updateElement("galleryItem4Title", t.galleryItem4Title);
  updateElement("galleryItem4Desc", t.galleryItem4Desc);
  updateElement("galleryItem5Title", t.galleryItem5Title);
  updateElement("galleryItem5Desc", t.galleryItem5Desc);
  updateElement("galleryItem6Title", t.galleryItem6Title);
  updateElement("galleryItem6Desc", t.galleryItem6Desc);
  updateElement("galleryItem7Title", t.galleryItem7Title);
  updateElement("galleryItem7Desc", t.galleryItem7Desc);
  updateElement("galleryItem8Title", t.galleryItem8Title);
  updateElement("galleryItem8Desc", t.galleryItem8Desc);
  
  updateElementHTML("footerContent", t.footerContent);
}

function updateButtonStates(lang) {
  const enBtn = document.getElementById("enBtn");
  const urBtn = document.getElementById("urBtn");
  
  if (enBtn) enBtn.classList.toggle("active", lang === "en");
  if (urBtn) urBtn.classList.toggle("active", lang === "ur");
}

// Theme toggle function
function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  applyTheme();
  savePreferences();
}

function applyTheme() {
  const body = document.getElementById("mainBody");
  const themeToggle = document.getElementById("themeToggle");
  
  if (!body) return;
  
  if (isDarkTheme) {
    body.classList.add('dark');
    if (themeToggle) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  } else {
    body.classList.remove('dark');
    if (themeToggle) {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }
}

// Side menu functions
function toggleSideMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  
  isSideMenuOpen = !isSideMenuOpen;
  
  if (isSideMenuOpen) {
    sideMenu.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeSideMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  
  isSideMenuOpen = false;
  sideMenu.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Gallery functions
function showSlide(index) {
  const slide = document.getElementById("gallerySlide");
  const content = document.getElementById("slideContent");
  
  if (!slide || !content) return;
  
  currentSlide = index;
  if (currentSlide >= galleryContent.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = galleryContent.length - 1;
  
  const slideData = galleryContent[currentSlide];
  content.innerText = slideData.text;
  slide.style.background = `linear-gradient(45deg, ${slideData.color}, ${slideData.color}dd)`;
  
  // Update dots
  updateDots();
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
  resetSlideInterval();
}

function goToSlide(index) {
  showSlide(index);
  resetSlideInterval();
}

function updateDots() {
  const dotsContainer = document.getElementById("carouselDots");
  if (!dotsContainer) return;
  
  dotsContainer.innerHTML = '';
  
  galleryContent.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `dot ${index === currentSlide ? 'active' : ''}`;
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

// Form submission handler
function handleSubmit(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // Here you would typically send the data to your server
  console.log('Form submitted:', data);
  
  // Show success message (you can customize this)
  alert('Thank you for your message! We will get back to you soon.');
  
  // Reset form
  event.target.reset();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load saved preferences
  loadPreferences();
  
  // Initialize gallery if it exists
  const gallerySlide = document.getElementById("gallerySlide");
  if (gallerySlide) {
    showSlide(0);
    resetSlideInterval();
  }
  
  // Add event listeners for form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
  }
}); 