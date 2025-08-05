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

// Centralized translations object with better structure
const translations = {
  en: {
    // Banner/Header
    banner: {
      companyName: "My Company"
    },
    header: {
      loginLink: "Login",
      signupLink: "Sign Up"
    },
    
    // Navigation
    nav: {
      home: "Home",
      aboutUs: "About Us",
      education: "Education",
      gallery: "Gallery",
      tab5: "Tab 5",
      tab6: "Tab 6",
      contact: "Contact Us",
      committeeSub1: "Committee",
      committeeSub2: "Buildings",
      educationSub1: "Syllabus",
      educationSub2: "Classes"
    },
    
    // Side Menu
    sideMenu: {
      title: "Menu",
      home: "Home",
      aboutUs: "About Us",
      education: "Education",
      gallery: "Gallery",
      tab5: "Tab 5",
      tab6: "Tab 6",
      contact: "Contact Us",
      committeeSub1: "Committee",
      committeeSub2: "Buildings",
      educationSub1: "Syllabus",
      educationSub2: "Classes"
    },
    
    // Home Page Content
    home: {
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
      aboutImage: "Company Image"
    },
    
    // About Page Content
    about: {
      pageTitle: "About Us",
      pageSubtitle: "Learn more about our company, mission, and values",
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
      value4Desc: "We strive for excellence in everything we do, from concept to delivery and beyond."
    },
    
    // Contact Page Content
    contact: {
      pageTitle: "Contact Us",
      pageSubtitle: "Get in touch with us. We'd love to hear from you!",
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
      mapPlaceholder: "Interactive Map Coming Soon"
    },
    
    // Gallery Page Content
    gallery: {
      pageTitle: "Gallery",
      pageSubtitle: "Explore our collection of images and projects",
      item1Title: "Project Showcase",
      item1Desc: "Our latest project highlights and achievements",
      item2Title: "Team Events",
      item2Desc: "Behind the scenes with our amazing team",
      item3Title: "Office Space",
      item3Desc: "Our modern and inspiring work environment",
      item4Title: "Technology",
      item4Desc: "Cutting-edge technology and innovation",
      item5Title: "Growth & Success",
      item5Desc: "Our journey of continuous improvement",
      item6Title: "Awards & Recognition",
      item6Desc: "Celebrating our achievements and milestones",
      item7Title: "Partnerships",
      item7Desc: "Collaborating with industry leaders",
      item8Title: "Innovation",
      item8Desc: "Pushing boundaries and exploring new ideas"
    },
    
    // Footer
    footer: {
      content: "© 2024 My Company. All rights reserved. Professional services for modern businesses"
    },

    // Authentication Pages
    auth: {
      loginTitle: "Login",
      loginSubtitle: "Welcome back! Please sign in to your account",
      emailLabel: "Email Address",
      passwordLabel: "Password",
      rememberMeText: "Remember me",
      loginBtnText: "Sign In",
      noAccountText: "Don't have an account?",
      signupLink: "Create Account",
      orText: "or",
      googleLoginText: "Continue with Google",
      signupTitle: "Create Account",
      signupSubtitle: "Join us! Create your account to get started",
      firstNameLabel: "First Name",
      lastNameLabel: "Last Name",
      signupEmailLabel: "Email Address",
      signupPasswordLabel: "Password",
      confirmPasswordLabel: "Confirm Password",
      agreeTermsText: "I agree to the Terms of Service and Privacy Policy",
      newsletterText: "Subscribe to our newsletter for updates",
      signupBtnText: "Create Account",
      haveAccountText: "Already have an account?",
      loginLink: "Sign In",
      googleSignupText: "Continue with Google",
      newUserMessage: "New user? Sign up",
      existingUserMessage: "Already have an account? Log in"
    },
    
    // Language settings
    langAttr: "en",
    dirClass: "ltr"
  },
  
  ur: {
    // Banner/Header
    banner: {
      companyName: "میری کمپنی"
    },
    header: {
      loginLink: "لاگ ان",
      signupLink: "سائن اپ"
    },
    
    // Navigation
    nav: {
      home: "ہوم",
      aboutUs: "بارے میں",
      education: "تعلیم",
      gallery: "گیلری",
      tab5: "ٹیب 5",
      tab6: "ٹیب 6",
      contact: "ہم سے رابطہ کریں",
      committeeSub1: "کمیٹی",
      committeeSub2: "عمارتیں",
      educationSub1: "نصاب",
      educationSub2: "کلاسز"
    },
    
    // Side Menu
    sideMenu: {
      title: "مینو",
      home: "ہوم",
      aboutUs: "بارے میں",
      education: "تعلیم",
      gallery: "گیلری",
      tab5: "ٹیب 5",
      tab6: "ٹیب 6",
      contact: "ہم سے رابطہ کریں",
      committeeSub1: "کمیٹی",
      committeeSub2: "عمارتیں",
      educationSub1: "نصاب",
      educationSub2: "کلاسز"
    },
    
    // Home Page Content
    home: {
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
      aboutImage: "کمپنی کی تصویر"
    },
    
    // About Page Content
    about: {
      pageTitle: "ہمارے بارے میں",
      pageSubtitle: "ہماری کمپنی، مشن اور اقدار کے بارے میں مزید جانیں",
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
      value4Desc: "ہم ہر کام میں عمدگی کے لیے کوشش کرتے ہیں، تصور سے ترسیل اور اس سے آگے تک۔"
    },
    
    // Contact Page Content
    contact: {
      pageTitle: "ہم سے رابطہ کریں",
      pageSubtitle: "ہم سے رابطہ کریں۔ ہم آپ سے سننا پسند کریں گے!",
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
      mapPlaceholder: "انٹرایکٹو نقشہ جلد آ رہا ہے"
    },
    
    // Gallery Page Content
    gallery: {
      pageTitle: "گیلری",
      pageSubtitle: "ہماری تصاویر اور پروجیکٹس کی مجموعہ کو دریافت کریں",
      item1Title: "پروجیکٹ شوکیس",
      item1Desc: "ہمارے تازہ ترین پروجیکٹ کی نمایاں خصوصیات اور کامیابیاں",
      item2Title: "ٹیم کے واقعات",
      item2Desc: "ہماری شاندار ٹیم کے ساتھ پردے کے پیچھے",
      item3Title: "دفتری جگہ",
      item3Desc: "ہمارا جدید اور متاثر کن کام کا ماحول",
      item4Title: "ٹیکنالوجی",
      item4Desc: "جدید ٹیکنالوجی اور جدت",
      item5Title: "ترقی اور کامیابی",
      item5Desc: "مسلسل بہتری کا ہمارا سفر",
      item6Title: "انعامات اور شناخت",
      item6Desc: "ہماری کامیابیوں اور سنگ میل کا جشن",
      item7Title: "شراکت داریاں",
      item7Desc: "صنعت کے رہنماؤں کے ساتھ تعاون",
      item8Title: "جدت",
      item8Desc: "حدود کو آگے بڑھانا اور نئے خیالات کی تلاش"
    },
    
    // Footer
    footer: {
      content: "© 2024 میری کمپنی۔ تمام حقوق محفوظ ہیں۔ جدید کاروباروں کے لیے پیشہ ورانہ خدمات"
    },

    // Authentication Pages
    auth: {
      loginTitle: "لاگ ان",
      loginSubtitle: "خوش آمدید! براہ کرم اپنے اکاؤنٹ میں سائن ان کریں",
      emailLabel: "ای میل ایڈریس",
      passwordLabel: "پاس ورڈ",
      rememberMeText: "مجھے یاد رکھیں",
      loginBtnText: "سائن ان کریں",
      noAccountText: "اکاؤنٹ نہیں ہے؟",
      signupLink: "اکاؤنٹ بنائیں",
      orText: "یا",
      googleLoginText: "گوگل کے ساتھ جاری رکھیں",
      signupTitle: "اکاؤنٹ بنائیں",
      signupSubtitle: "ہمارے ساتھ شامل ہوں! شروع کرنے کے لیے اپنا اکاؤنٹ بنائیں",
      firstNameLabel: "پہلا نام",
      lastNameLabel: "آخری نام",
      signupEmailLabel: "ای میل ایڈریس",
      signupPasswordLabel: "پاس ورڈ",
      confirmPasswordLabel: "پاس ورڈ کی تصدیق کریں",
      agreeTermsText: "میں سروس کی شرائط اور رازداری کی پالیسی سے اتفاق کرتا/کرتی ہوں",
      newsletterText: "اپ ڈیٹس کے لیے ہمارے نیوز لیٹر کی سبسکرپشن کریں",
      signupBtnText: "اکاؤنٹ بنائیں",
      haveAccountText: "پہلے سے اکاؤنٹ ہے؟",
      loginLink: "سائن ان کریں",
      googleSignupText: "گوگل کے ساتھ جاری رکھیں",
      newUserMessage: "نیا صارف؟ سائن اپ کریں",
      existingUserMessage: "پہلے سے اکاؤنٹ ہے؟ لاگ ان کریں"
    },
    
    // Language settings
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

  // Banner content
  updateElement("companyName", t.banner.companyName);
  updateElement("headerLoginLink", t.header.loginLink);
  updateElement("headerSignupLink", t.header.signupLink);
  
  // Navigation content
  updateElement("navHome", t.nav.home);
  updateElement("navAboutUs", t.nav.aboutUs);
  updateElement("navEducation", t.nav.education);
  updateElement("navGallery", t.nav.gallery);
  updateElement("navTab5", t.nav.tab5);
  updateElement("navTab6", t.nav.tab6);
  updateElement("navContact", t.nav.contact);
  updateElement("navCommitteeSub1", t.nav.committeeSub1);
  updateElement("navCommitteeSub2", t.nav.committeeSub2);
  updateElement("navEducationSub1", t.nav.educationSub1);
  updateElement("navEducationSub2", t.nav.educationSub2);
  
  // Side menu content
  updateElement("sideMenuTitle", t.sideMenu.title);
  updateElement("sideNavHome", t.sideMenu.home);
  updateElement("sideNavAboutUs", t.sideMenu.aboutUs);
  updateElement("sideNavEducation", t.sideMenu.education);
  updateElement("sideNavGallery", t.sideMenu.gallery);
  updateElement("sideNavTab5", t.sideMenu.tab5);
  updateElement("sideNavTab6", t.sideMenu.tab6);
  updateElement("sideNavContact", t.sideMenu.contact);
  updateElement("sideNavCommitteeSub1", t.sideMenu.committeeSub1);
  updateElement("sideNavCommitteeSub2", t.sideMenu.committeeSub2);
  updateElement("sideNavEducationSub1", t.sideMenu.educationSub1);
  updateElement("sideNavEducationSub2", t.sideMenu.educationSub2);
  
  // Home page content
  updateElement("mainContent", t.home.mainContent);
  updateElement("infoTitle1", t.home.infoTitle1);
  updateElement("infoDesc1", t.home.infoDesc1);
  updateElement("infoLink1", t.home.infoLink1);
  updateElement("infoTitle2", t.home.infoTitle2);
  updateElement("infoDesc2", t.home.infoDesc2);
  updateElement("infoLink2", t.home.infoLink2);
  updateElement("infoTitle3", t.home.infoTitle3);
  updateElement("infoDesc3", t.home.infoDesc3);
  updateElement("infoLink3", t.home.infoLink3);
  updateElement("infoTitle4", t.home.infoTitle4);
  updateElement("infoDesc4", t.home.infoDesc4);
  updateElement("infoLink4", t.home.infoLink4);
  updateElement("aboutTitle", t.home.aboutTitle);
  updateElement("aboutDescription", t.home.aboutDescription);
  updateElement("aboutLink", t.home.aboutLink);
  updateElement("aboutImage", t.home.aboutImage);
  
  // About page content
  updateElement("pageTitle", t.about.pageTitle);
  updateElement("pageSubtitle", t.about.pageSubtitle);
  updateElement("storyTitle", t.about.storyTitle);
  updateElement("storyContent1", t.about.storyContent1);
  updateElement("storyContent2", t.about.storyContent2);
  updateElement("storyContent3", t.about.storyContent3);
  updateElement("teamTitle", t.about.teamTitle);
  updateElement("teamSubtitle", t.about.teamSubtitle);
  updateElement("member1Name", t.about.member1Name);
  updateElement("member1Role", t.about.member1Role);
  updateElement("member1Desc", t.about.member1Desc);
  updateElement("member2Name", t.about.member2Name);
  updateElement("member2Role", t.about.member2Role);
  updateElement("member2Desc", t.about.member2Desc);
  updateElement("member3Name", t.about.member3Name);
  updateElement("member3Role", t.about.member3Role);
  updateElement("member3Desc", t.about.member3Desc);
  updateElement("member4Name", t.about.member4Name);
  updateElement("member4Role", t.about.member4Role);
  updateElement("member4Desc", t.about.member4Desc);
  updateElement("valuesTitle", t.about.valuesTitle);
  updateElement("value1Title", t.about.value1Title);
  updateElement("value1Desc", t.about.value1Desc);
  updateElement("value2Title", t.about.value2Title);
  updateElement("value2Desc", t.about.value2Desc);
  updateElement("value3Title", t.about.value3Title);
  updateElement("value3Desc", t.about.value3Desc);
  updateElement("value4Title", t.about.value4Title);
  updateElement("value4Desc", t.about.value4Desc);
  
  // Contact page content
  updateElement("contactPageTitle", t.contact.pageTitle);
  updateElement("contactPageSubtitle", t.contact.pageSubtitle);
  updateElement("formTitle", t.contact.formTitle);
  updateElement("nameLabel", t.contact.nameLabel);
  updateElement("emailLabel", t.contact.emailLabel);
  updateElement("phoneLabel", t.contact.phoneLabel);
  updateElement("subjectLabel", t.contact.subjectLabel);
  updateElement("selectOption", t.contact.selectOption);
  updateElement("generalOption", t.contact.generalOption);
  updateElement("supportOption", t.contact.supportOption);
  updateElement("salesOption", t.contact.salesOption);
  updateElement("partnershipOption", t.contact.partnershipOption);
  updateElement("otherOption", t.contact.otherOption);
  updateElement("messageLabel", t.contact.messageLabel);
  updateElement("submitBtn", t.contact.submitBtn);
  updateElement("infoTitle", t.contact.infoTitle);
  updateElement("addressTitle", t.contact.addressTitle);
  updateElement("addressText", t.contact.addressText);
  updateElement("phoneTitle", t.contact.phoneTitle);
  updateElement("phoneText", t.contact.phoneText);
  updateElement("emailTitle", t.contact.emailTitle);
  updateElement("emailText", t.contact.emailText);
  updateElement("hoursTitle", t.contact.hoursTitle);
  updateElement("hoursText", t.contact.hoursText);
  updateElement("mapTitle", t.contact.mapTitle);
  updateElement("mapPlaceholder", t.contact.mapPlaceholder);
  
  // Gallery page content
  updateElement("galleryPageTitle", t.gallery.pageTitle);
  updateElement("galleryPageSubtitle", t.gallery.pageSubtitle);
  updateElement("galleryItem1Title", t.gallery.item1Title);
  updateElement("galleryItem1Desc", t.gallery.item1Desc);
  updateElement("galleryItem2Title", t.gallery.item2Title);
  updateElement("galleryItem2Desc", t.gallery.item2Desc);
  updateElement("galleryItem3Title", t.gallery.item3Title);
  updateElement("galleryItem3Desc", t.gallery.item3Desc);
  updateElement("galleryItem4Title", t.gallery.item4Title);
  updateElement("galleryItem4Desc", t.gallery.item4Desc);
  updateElement("galleryItem5Title", t.gallery.item5Title);
  updateElement("galleryItem5Desc", t.gallery.item5Desc);
  updateElement("galleryItem6Title", t.gallery.item6Title);
  updateElement("galleryItem6Desc", t.gallery.item6Desc);
  updateElement("galleryItem7Title", t.gallery.item7Title);
  updateElement("galleryItem7Desc", t.gallery.item7Desc);
  updateElement("galleryItem8Title", t.gallery.item8Title);
  updateElement("galleryItem8Desc", t.gallery.item8Desc);
  
  // Footer content
  updateElementHTML("footerContent", t.footer.content);

  // Authentication content (if elements exist)
  updateElement("loginTitle", t.auth.loginTitle);
  updateElement("loginSubtitle", t.auth.loginSubtitle);
  updateElement("emailLabel", t.auth.emailLabel);
  updateElement("passwordLabel", t.auth.passwordLabel);
  updateElement("rememberMeText", t.auth.rememberMeText);
  updateElement("loginBtnText", t.auth.loginBtnText);
  updateElement("noAccountText", t.auth.noAccountText);
  updateElement("signupLink", t.auth.signupLink);
  updateElement("orText", t.auth.orText);
  updateElement("googleLoginText", t.auth.googleLoginText);
  
  updateElement("signupTitle", t.auth.signupTitle);
  updateElement("signupSubtitle", t.auth.signupSubtitle);
  updateElement("firstNameLabel", t.auth.firstNameLabel);
  updateElement("lastNameLabel", t.auth.lastNameLabel);
  updateElement("signupEmailLabel", t.auth.signupEmailLabel);
  updateElement("signupPasswordLabel", t.auth.signupPasswordLabel);
  updateElement("confirmPasswordLabel", t.auth.confirmPasswordLabel);
  updateElement("agreeTermsText", t.auth.agreeTermsText);
  updateElement("newsletterText", t.auth.newsletterText);
  updateElement("signupBtnText", t.auth.signupBtnText);
  updateElement("haveAccountText", t.auth.haveAccountText);
  updateElement("loginLink", t.auth.loginLink);
  updateElement("googleSignupText", t.auth.googleSignupText);
  updateElement("newUserMessage", t.auth.newUserMessage);
  updateElement("existingUserMessage", t.auth.existingUserMessage);
}

function updateButtonStates(lang) {
  const enBtn = document.getElementById("enBtn");
  const urBtn = document.getElementById("urBtn");
  
  if (enBtn && urBtn) {
    enBtn.classList.toggle("active", lang === "en");
    urBtn.classList.toggle("active", lang === "ur");
  }
}

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  applyTheme();
  savePreferences();
}

function applyTheme() {
  const body = document.getElementById("mainBody");
  const themeToggle = document.getElementById("themeToggle");
  
  if (!body || !themeToggle) return;
  
  if (isDarkTheme) {
    body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.remove('dark');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

function toggleSideMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  
  if (!sideMenu || !overlay) return;
  
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
  // In RTL mode, reverse the direction
  const body = document.getElementById("mainBody");
  const isRTL = body.classList.contains('rtl');
  
  if (isRTL) {
    direction = -direction;
  }
  
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

// Login form submission handler
function handleLoginSubmit(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');
  const remember = formData.get('remember');
  
  // Here you would typically send the data to Supabase
  console.log('Login form submitted:', { email, password, remember });
  
  // For now, just show a placeholder message
  alert('Login functionality will be connected to Supabase later.');
  
  // Reset form
  event.target.reset();
}

// Signup form submission handler
function handleSignupSubmit(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(event.target);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');
  const agreeTerms = formData.get('agreeTerms');
  const newsletter = formData.get('newsletter');
  
  // Basic validation
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  
  if (!agreeTerms) {
    alert('Please agree to the Terms of Service and Privacy Policy.');
    return;
  }
  
  // Here you would typically send the data to Supabase
  console.log('Signup form submitted:', { 
    firstName, 
    lastName, 
    email, 
    password, 
    agreeTerms, 
    newsletter 
  });
  
  // For now, just show a placeholder message
  alert('Signup functionality will be connected to Supabase later.');
  
  // Reset form
  event.target.reset();
}

// Initialize dropdown functionality for touch devices
function initializeDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    
    link.addEventListener('click', function(e) {
      // Check if it's a touch device or if it's in the side menu
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || dropdown.closest('.side-menu')) {
        e.preventDefault();
        
        // Close other dropdowns
        dropdowns.forEach(other => {
          if (other !== dropdown) {
            other.classList.remove('active');
          }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
      }
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load saved preferences immediately
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
  
  // Add event listeners for authentication forms
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener('submit', handleLoginSubmit);
  }
  
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener('submit', handleSignupSubmit);
  }
  
  // Initialize dropdown functionality
  initializeDropdowns();
});

// Load preferences immediately for faster page transitions
loadPreferences();

// Also load preferences when DOM is ready as backup
document.addEventListener('DOMContentLoaded', function() {
  // Load saved preferences immediately
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
  
  // Initialize dropdown functionality
  initializeDropdowns();
}); 