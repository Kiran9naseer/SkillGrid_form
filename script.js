// script.js

// Language translations
const translations = {
    en: {
        "main-title": "🌍 SkillGrid — From Village/City to Global Opportunities",
        "main-description": "Imagine if your skills could reach people worldwide 💡",
        "section1-title": "🧍‍♀️ Section 1: About You",
        "q1-label": "1️⃣ What is your name? (Short Answer)",
        "q2-label": "2️⃣ Which country are you from? (Dropdown)",
        "q3-label": "3️⃣ What is the name of your village or city? (Short Answer)",
        "q4-label": "4️⃣ What is your age range?",
        "age-opt1": "Under 18 years",
        "age-opt2": "18–25",
        "age-opt3": "26–35",
        "age-opt4": "36–50",
        "age-opt5": "Over 50",
        "section2-title": "🧰 Section 2: Your Skills",
        "q5-label": "5️⃣ In which work are you an expert? (Checkboxes)",
        "skill-opt1": "Sewing/Tailoring",
        "skill-opt2": "Translation",
        "skill-opt3": "Graphic Design",
        "skill-opt4": "Video Editing",
        "skill-opt5": "Data Entry",
        "skill-opt6": "Wood/Metal Work",
        "skill-opt7": "Computer/Coding",
        "skill-opt8": "Other:",
        "q6-label": "6️⃣ How long have you been doing this work?",
        "exp-opt1": "Less than 6 months",
        "exp-opt2": "1–2 years",
        "exp-opt3": "3–5 years",
        "exp-opt4": "More than 5 years",
        "q7-label": "7️⃣ Have you ever received an online order?",
        "order-opt1": "Yes",
        "order-opt2": "No",
        "section3-title": "🌍 Section 3: About SkillGrid App",
        "q8-label": "8️⃣ If an app connects you with clients worldwide, would you use it?",
        "app-use-opt1": "Yes",
        "app-use-opt2": "Maybe",
        "app-use-opt3": "No",
        "q11-label": "9️⃣ Would you like the app to also provide training videos and skill improvement courses?",
        "training-opt1": "Yes, definitely",
        "training-opt2": "Maybe",
        "training-opt3": "No, only clients needed",
        "q12-label": "10️⃣ If the app offers an \"Auto-Translation Chat\" feature (translating English to Urdu/Hindi), would you use it?",
        "translation-opt1": "Yes, very important",
        "translation-opt2": "Maybe",
        "translation-opt3": "No, not needed",
        "section4-title": "🎯 Section 4: Future Vision",
        "q13-label": "11️⃣ If you start receiving orders from around the world while staying at home, how will your life change? (Paragraph)",
        "q14-label": "12️⃣ If you'd like, please provide your email (Optional)",
        "q15-label": "13️⃣ Would you like to become a Beta User (the first to use the app)?",
        "beta-opt1": "Yes",
        "beta-opt2": "No",
        "submit-btn": "Submit Form",
        "confirm-title": "✅ Confirmation Message",
        "confirm-text": "🙏 Thank you!\nYou're now on SkillGrid's Early Access List 💫\n🌍 From your village to the world — your skills matter!\n\n🚀 Updates & jobs only on Instagram:\n👉 @kiran.skillgrid\n\n🌸 Follow now to stay ahead!",
        "instagram-link": "https://www.instagram.com/kiran.skillgrid",
        "please-select-at-least-one-skill": "Please select at least one skill"
    },
    ur: {
        "main-title": "🌍 سکل گرڈ — گاؤں یا شہر سے دنیا تک کام کا موقعہ",
        "main-description": "سوچو اگر آپ کا ہنر دنیا بھر کے لوگوں تک پہنچ جائے 💡",
        "section1-title": "🧍‍♀️ سیکشن 1: آپ کا تعارف (About You)",
        "q1-label": "1️⃣ آپ کا نام کیا ہے؟ (مختصر جواب)",
        "q2-label": "2️⃣ آپ کس ملک سے تعلق رکھتے ہیں؟ (ڈراپ ڈاؤن)",
        "q3-label": "3️⃣ آپ کا گاؤں یا شہر کا نام کیا ہے؟ (مختصر جواب)",
        "q4-label": "4️⃣ آپ کی عمر کس رینج میں ہے؟",
        "age-opt1": "18 سال سے کم",
        "age-opt2": "18–25",
        "age-opt3": "26–35",
        "age-opt4": "36–50",
        "age-opt5": "50 سے زیادہ",
        "section2-title": "🧰 سیکشن 2: آپ کا ہنر (Your Skills)",
        "q5-label": "5️⃣ آپ کس کام میں ایکسپرٹ ہو؟ (چیک باکسز)",
        "skill-opt1": "سلائی / درزی",
        "skill-opt2": "ترجمہ / ترجمہ",
        "skill-opt3": "گرافک ڈیزائن",
        "skill-opt4": "ویڈیو ایڈیٹنگ",
        "skill-opt5": "ڈیٹا انٹری",
        "skill-opt6": "لکڑی یا دھات کا کام",
        "skill-opt7": "کمپیوٹر / کوڈنگ",
        "skill-opt8": "دوسرا (Other):",
        "q6-label": "6️⃣ یہ کام آپ کتنے وقت سے کر رہے ہو؟",
        "exp-opt1": "6 مہینے سے کم",
        "exp-opt2": "1–2 سال",
        "exp-opt3": "3–5 سال",
        "exp-opt4": "5 سال سے زیادہ",
        "q7-label": "7️⃣ کیا آپ کو کبھی آن لائن آرڈر ملا ہے؟",
        "order-opt1": "ہاں",
        "order-opt2": "نہیں",
        "section3-title": "🌍 سیکشن 3: سکل گرڈ ایپ کے بارے میں",
        "q8-label": "8️⃣ اگر ایک ایپ آپ کو دنیا بھر کے کلائنٹس سے کنیکٹ کر دے، تو کیا آپ اسے استعمال کریں گے؟",
        "app-use-opt1": "ہاں",
        "app-use-opt2": "شاید",
        "app-use-opt3": "نہیں",
        "q11-label": "9️⃣ کیا آپ چاہیں گے کہ ایپ آپ کو ٹریننگ ویڈیوز اور ہنر بہتر کرنے کے کورسز بھی دے؟",
        "training-opt1": "ہاں، ضرور",
        "training-opt2": "شاید",
        "training-opt3": "نہیں، صرف کلائنٹس چاہیے",
        "training-opt1": "ہاں، ضرور",
        "training-opt2": "شاید",
        "training-opt3": "نہیں، صرف کلائنٹس چاہیے",
        "q12-label": "10️⃣ اگر ایپ آپ کے لیے \"آٹو-ٹرانسلیشن چیٹ\" فیچر لائے (جو انگریزی کو اردو یا ہندی میں ٹرانسلیٹ کرے)، تو کیا آپ اسے استعمال کریں گے؟",
        "translation-opt1": "ہاں، بہت ضروری ہے",
        "translation-opt2": "شاید",
        "translation-opt3": "نہیں، ضرورت نہیں",
        "section4-title": "🎯 سیکشن 4: مستقبل کا وژن",
        "q13-label": "11️⃣ اگر آپ کو گھر بیٹھے دنیا بھر سے آرڈر ملنے لگیں تو آپ کی زندگی کیسے بدلے گی؟ (پیراگراف)",
        "q14-label": "12️⃣ اگر آپ چاہیں تو اپنا ای میل دیں (اختیاری)",
        "q15-label": "13️⃣ کیا آپ بیٹا یوزر بننا چاہیں گے (جو سب سے پहلے ایپ استعمال کریں)؟",
        "beta-opt1": "ہاں",
        "beta-opt2": "نہیں",
        "submit-btn": "فرم جمع کرائیں",
        "confirm-title": "✅ تصدیقی پیغام",
        "confirm-text": "🙏 شکریہ!\nاب آپ سکل گرڈ کی ایرلی ایکسس لسٹ پر ہیں 💫\n🌍 آپ کے گاؤں سے دنیا تک — آپ کے ہنر کی اہمیت ہے!\n\n🚀 اپ ڈیٹس اور نوکریاں صرف انسٹاگرام پر:\n👉 @kiran.skillgrid\n\n🌸 آگے رہنے کے لیے ابھی فالو کریں!",
        "instagram-link": "https://www.instagram.com/kiran.skillgrid",
        "please-select-at-least-one-skill": "براہ کرم کم از کم ایک مہارت منتخب کریں"
    },
    hi: {
        "main-title": "🌍 स्किलग्रिड — गांव या शहर से वैश्विक अवसरों तक",
        "main-description": "कल्पना करें कि अगर आपके कौशल दुनिया भर के लोगों तक पहुँच जाए 💡",
        "section1-title": "🧍‍♀️ अनुभाग 1: आपके बारे में (About You)",
        "q1-label": "1️⃣ आपका नाम क्या है? (संक्षिप्त उत्तर)",
        "q2-label": "2️⃣ आप किस देश से संबंधित हैं? (ड्रॉपडाउन)",
        "q3-label": "3️⃣ आपके गांव या शहर का नाम क्या है? (संक्षिप्त उत्तर)",
        "q4-label": "4️⃣ आपकी आयु किस सीमा में है?",
        "age-opt1": "18 वर्ष से कम",
        "age-opt2": "18–25",
        "age-opt3": "26–35",
        "age-opt4": "36–50",
        "age-opt5": "50 से अधिक",
        "section2-title": "🧰 अनुभाग 2: आपका कौशल (Your Skills)",
        "q5-label": "5️⃣ आप किस काम में विशेषज्ञ हैं? (चेकबॉक्स)",
        "skill-opt1": "सिलाई / दर्जी",
        "skill-opt2": "अनुवाद",
        "skill-opt3": "ग्राफिक डिज़ाइन",
        "skill-opt4": "वीडियो संपादन",
        "skill-opt5": "डेटा प्रविष्टि",
        "skill-opt6": "लकड़ी या धातु का काम",
        "skill-opt7": "कंप्यूटर / कोडिंग",
        "skill-opt8": "अन्य (Other):",
        "q6-label": "6️⃣ आप यह काम कितने समय से कर रहे हैं?",
        "exp-opt1": "6 महीने से कम",
        "exp-opt2": "1–2 वर्ष",
        "exp-opt3": "3–5 वर्ष",
        "exp-opt4": "5 वर्ष से अधिक",
        "q7-label": "7️⃣ क्या आपको कभी ऑनलाइन ऑर्डर मिला है?",
        "order-opt1": "हाँ",
        "order-opt2": "नहीं",
        "section3-title": "🌍 अनुभाग 3: स्किलग्रिड ऐप के बारे में",
        "q8-label": "8️⃣ अगर एक ऐप आपको दुनिया भर के ग्राहकों से जोड़ दे, तो क्या आप उसका उपयोग करेंगे?",
        "app-use-opt1": "हाँ",
        "app-use-opt2": "शायद",
        "app-use-opt3": "नहीं",
        "q11-label": "9️⃣ क्या आप चाहेंगे कि ऐप आपको प्रशिक्षण वीडियो और कौशल सुधार पाठ्यक्रम भी प्रदान करे?",
        "training-opt1": "हाँ, निश्चित रूप से",
        "training-opt2": "शायद",
        "training-opt3": "नहीं, केवल ग्राहक चाहिए",
        "training-opt1": "हाँ, निश्चित रूप से",
        "training-opt2": "शायद",
        "training-opt3": "नहीं, केवल ग्राहक चाहिए",
        "q12-label": "10️⃣ अगर ऐप आपके लिए \"ऑटो-अनुवाद चैट\" सुविधा लाए (जो अंग्रेजी को उर्दू या हिंदी में अनुवाद करे), तो क्या आप उसका उपयोग करेंगे?",
        "translation-opt1": "हाँ, बहुत ज़रूरी है",
        "translation-opt2": "शायद",
        "translation-opt3": "नहीं, आवश्यकता नहीं",
        "section4-title": "🎯 अनुभाग 4: भविष्य का दृष्टिकोण",
        "q13-label": "11️⃣ अगर आपको घर बैठे दुनिया भर से ऑर्डर मिलने लगें तो आपकी जिंदगी कैसे बदलेगी? (अनुच्छेद)",
        "q14-label": "12️⃣ अगर आप चाहें तो अपना ईमेल दें (वैकल्पिक)",
        "q15-label": "13️⃣ क्या आप बीटा उपयोगकर्ता बनना चाहेंगे (जो सबसे पहले ऐप का उपयोग करें)?",
        "beta-opt1": "हाँ",
        "beta-opt2": "नहीं",
        "submit-btn": "फॉर्म जमा करें",
        "confirm-title": "✅ पुष्टि संदेश",
        "confirm-text": "🙏 धन्यवाद!\nअब आप स्किलग्रिड की अरली एक्सेस सूची पर हैं 💫\n🌍 आपके गांव से दुनिया तक — आपके कौशल का महत्व है!\n\n🚀 अपडेट और नौकरियाँ केवल इंस्टाग्राम पर:\n👉 @kiran.skillgrid\n\n🌸 आगे रहने के लिए अब फॉलो करें!",
        "instagram-link": "https://www.instagram.com/kiran.skillgrid",
        "please-select-at-least-one-skill": "कृपया कम से कम एक कौशल चुनें"
    },
    ro: {
        "main-title": "🌍 SkillGrid — Gaon Ya Shehar Se Duniya Tak Kaam Ka Mauqa",
        "main-description": "Socho agar aapka hunar duniya bhar ke logon tak pohanch jaye 💡",
        "section1-title": "🧍‍♀️ Section 1: Aapka Taaruf (About You)",
        "q1-label": "1️⃣ Aapka naam kya hai? (Short Answer)",
        "q2-label": "2️⃣ Aap kis country se taluq rakhte hain? (Dropdown)",
        "q3-label": "3️⃣ Aapka gaon ya shehar ka naam kya hai? (Short Answer)",
        "q4-label": "4️⃣ Aapki umar kis range mein hai?",
        "age-opt1": "18 saal se kam",
        "age-opt2": "18–25",
        "age-opt3": "26–35",
        "age-opt4": "36–50",
        "age-opt5": "50 se zyada",
        "section2-title": "🧰 Section 2: Aapka Hunar (Your Skills)",
        "q5-label": "5️⃣ Aap kis kaam mein expert ho? (Checkboxes)",
        "skill-opt1": "Silai / Darzi",
        "skill-opt2": "Translation / Tarjuma",
        "skill-opt3": "Graphic Design",
        "skill-opt4": "Video Editing",
        "skill-opt5": "Data Entry",
        "skill-opt6": "Lakri ya Dhaat ka kaam",
        "skill-opt7": "Computer / Coding",
        "skill-opt8": "Dusra (Other):",
        "q6-label": "6️⃣ Ye kaam aap kitne time se kar rahe ho?",
        "exp-opt1": "6 mahine se kam",
        "exp-opt2": "1–2 saal",
        "exp-opt3": "3–5 saal",
        "exp-opt4": "5 saal se zyada",
        "q7-label": "7️⃣ Kya aapko kabhi online order mila hai?",
        "order-opt1": "Haan",
        "order-opt2": "Nahin",
        "section3-title": "🌍 Section 3: SkillGrid App ke bare mein",
        "q8-label": "8️⃣ Agar aik app aapko duniya bhar ke clients se connect kar de, to kya aap use karoge?",
        "app-use-opt1": "Haan",
        "app-use-opt2": "Shayad",
        "app-use-opt3": "Nahin",
        "q11-label": "9️⃣ Kya aap chahein ge ke app aapko training videos aur skill improvement courses bhi de?",
        "training-opt1": "Haan, zaroor",
        "training-opt2": "Shayad",
        "training-opt3": "Nahi, sirf clients chahiye",
        "training-opt1": "Haan, zaroor",
        "training-opt2": "Shayad",
        "training-opt3": "Nahi, sirf clients chahiye",
        "q12-label": "10️⃣ Agar app aapke liye “Auto-Translation Chat” feature laye (jo English ko Urdu ya Hindi mein translate kare), to kya aap use karoge?",
        "translation-opt1": "Haan, bohot zaroori hai",
        "translation-opt2": "Shayad",
        "translation-opt3": "Nahi, zarurat nahi",
        "section4-title": "🎯 Section 4: Future Vision",
        "q13-label": "11️⃣ Agar aapko ghar baithey duniya bhar se order milne lagay to aapki zindagi kaise badlegi? (Paragraph)",
        "q14-label": "12️⃣ Agar aap chahen to apna email dein (Optional)",
        "q15-label": "13️⃣ Kya aap Beta User banna chaheinge (jo sab se pehle app use karein)?",
        "beta-opt1": "Haan",
        "beta-opt2": "Nahin",
        "submit-btn": "Form Submit Karen",
        "confirm-title": "✅ Confirmation Message",
        "confirm-text": "🙏 Thank you!\nYou're now on SkillGrid's Early Access List 💫\n🌍 From your village to the world — your skills matter!\n\n🚀 Updates & jobs only on Instagram:\n👉 @kiran.skillgrid\n\n🌸 Follow now to stay ahead!",
        "instagram-link": "https://www.instagram.com/kiran.skillgrid",
        "please-select-at-least-one-skill": "Kripya kam se kam ek skill chune"
    }
};

// Current language
let currentLanguage = 'en';

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`btn-${lang}`).classList.add('active');
    
    // Question 9 has been removed
    
    // Update all text elements
    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            // Special handling for the Instagram link element
            if (key === 'instagram-link') {
                element.href = translations[lang][key];
            }
            // Special handling for confirmation text to preserve link
            else if (key === 'confirm-text') {
                // Update only the text content, preserve the link
                const linkElement = document.getElementById('instagram-link');
                const linkHtml = linkElement ? linkElement.outerHTML : '@kiran.skillgrid';
                element.innerHTML = translations[lang][key].replace('@kiran.skillgrid', linkHtml);
            } 
            // Special handling for placeholder text
            else if (key === 'q10-placeholder') {
                document.getElementById('features').placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Apply RTL for Urdu
    if (lang === 'ur') {
        document.body.classList.add('urdu-text');
        document.body.classList.remove('hindi-text');
    } else if (lang === 'hi') {
        document.body.classList.add('hindi-text');
        document.body.classList.remove('urdu-text');
    } else {
        document.body.classList.remove('urdu-text', 'hindi-text');
    }
}

// Form submission handler
document.getElementById('skillgrid-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    let isValid = true;
    const requiredFields = this.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value || 
            (field.type === 'radio' && !field.checked)) {
            
            if (field.type !== 'radio' && field.type !== 'checkbox') {
                isValid = false;
                field.style.borderColor = '#dc3545';
            }
        } else {
            field.style.borderColor = '#e0e0e0';
        }
    });
    
    // Check if at least one checkbox is selected for skills
    const skillCheckboxes = document.querySelectorAll('input[name="skills"]');
    let skillSelected = false;
    skillCheckboxes.forEach(checkbox => {
        if (checkbox.checked) skillSelected = true;
    });
    
    if (!skillSelected) {
        isValid = false;
        alert(getTranslation('please-select-at-least-one-skill'));
        // Highlight the skills section
        document.getElementById('q5-label').style.color = '#dc3545';
        setTimeout(() => {
            document.getElementById('q5-label').style.color = '';
        }, 3000);
    } else {
        document.getElementById('q5-label').style.color = '';
    }
    
    // Question 9 has been removed
    
    if (isValid) {
        // Add animation effect on submit
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.innerHTML = 'Submitting...';
        submitBtn.disabled = true;
        
        // Simulate submission process
        setTimeout(() => {
            // Hide form and show confirmation
            this.style.opacity = '0';
            this.style.transform = 'translateY(-20px)';
            this.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                this.style.display = 'none';
                document.querySelector('.language-selector').style.display = 'none';
                // Show the new thank you screen
                showThankYou();
            }, 500);
        }, 1000);
    }
});

// Helper function to get translation
function getTranslation(key) {
    return translations[currentLanguage][key] || translations['en'][key];
}

// Initialize with English
changeLanguage('en');

// Handle other skill input
document.getElementById('other-skill').addEventListener('focus', function() {
    // Auto-check the "Other" checkbox when typing in the text field
    const otherCheckbox = document.querySelector('input[value="other"]');
    if (otherCheckbox) {
        otherCheckbox.checked = true;
    }
});

// Language dictionary for thank you messages
const thankYouMessages = {
    en: {
        title: "✅ Confirmation",
        message: "🙏 Thank you!\nYou're now on SkillGrid's Early Access List 💫\n🌍 From your village to the world — your skills matter!",
        button: "🌸 Follow @kiran.skillgrid",
        note: "🚀 Updates & jobs only on Instagram"
    },
   roman: {
    title: "✅ Tasdeeq Ho Gayi!",
    message: "🙏 Shukriya!\nAap ab SkillGrid ke Early Access List me shamil ho gaye hain 💫\n🌍 Gaon ya shehar se duniya tak — aapka hunar qeemti hai!",
    button: "🌸 Follow karo @kiran.skillgrid",
    note: "🚀 Updates aur jobs sirf Instagram par milenge"
    },

    urdu: {
        title: "✅ تصدیق",
        message: "🙏 شکریہ!\nاب آپ سکل گرڈ کی ایرلی ایکسس لسٹ پر ہیں 💫\n🌍 آپ کے گاؤں سے دنیا تک — آپ کے ہنر کی اہمیت ہے!",
        button: "🌸 فالو کریں @kiran.skillgrid",
        note: "🚀 اپ ڈیٹس اور نوکریاں صرف انسٹاگرام پر"
    },
    hi: {
        title: "✅ पुष्टि",
        message: "🙏 धन्यवाद!\nअब आप स्किलग्रिड की अरली एक्सेस सूची पर हैं 💫\n🌍 आपके गांव से दुनिया तक — आपके कौशल का महत्व है!",
        button: "🌸 फॉलो करें @kiran.skillgrid",
        note: "🚀 अपडेट और नौकरियाँ केवल इंस्टाग्राम पर"
    }
};

// Detect form language from currentLanguage variable
function detectFormLanguage() {
    // Get language from currentLanguage variable and map to required codes
    if (currentLanguage) {
        // Map current language codes to required codes
        const languageMap = {
            'en': 'en',
            'ro': 'roman',
            'ur': 'urdu',
            'hi': 'hi'
        };
        const mappedLang = languageMap[currentLanguage];
        return mappedLang || 'roman'; // Default to Roman Urdu
    }
    
    // Default to Roman Urdu
    return 'roman';
}

// Typewriter effect function
function typeText(element, text, delay = 50, skipTyping = false) {
    if (skipTyping) {
        element.innerHTML = text.replace(/\n/g, '<br>');
        return Promise.resolve();
    }

    return new Promise(resolve => {
        element.innerHTML = '';
        let i = 0;
        const lines = text.split('\n');
        let currentLine = 0;
        
        function type() {
            if (currentLine < lines.length) {
                if (i < lines[currentLine].length) {
                    element.innerHTML += lines[currentLine].charAt(i);
                    i++;
                    setTimeout(type, delay);
                } else {
                    if (currentLine < lines.length - 1) {
                        element.innerHTML += '<br>';
                        currentLine++;
                        i = 0;
                        setTimeout(type, delay);
                    } else {
                        resolve();
                    }
                }
            } else {
                resolve();
            }
        }
        
        type();
    });
}

// Show thank you screen
// CALL THIS FUNCTION FROM YOUR FORM SUBMIT HANDLER:
// showThankYou() for animated typing
// showThankYou(true) for instant text display (skips typing)
function showThankYou(skipTyping = false) {
    // Hide the form if it exists
    const form = document.getElementById('skillgrid-form') || document.querySelector('form');
    if (form) {
        form.style.display = 'none';
    }
    
    // Detect language
    const lang = detectFormLanguage();
    const messages = thankYouMessages[lang] || thankYouMessages.roman; // Default to Roman Urdu
    
    // Set language-specific classes for RTL support
    const thankArea = document.getElementById('thankArea');
    // Add hidden class to start with
    // thankArea.classList.add('hidden');
    
    if (lang === 'urdu') {
        thankArea.classList.add('urdu-text');
    } else if (lang === 'hi') {
        thankArea.classList.add('hindi-text');
    }
    
    // Set content
    document.getElementById('thankTitle').textContent = messages.title;
    
    // Set Instagram button content (href is already correct in HTML)
    const instagramBtn = document.getElementById('instagramBtn');
    if (instagramBtn) {
        instagramBtn.textContent = messages.button;
        // Always ensure the href is correct
        instagramBtn.href = 'https://www.instagram.com/kiran.skillgrid';
    }
    
    document.getElementById('noteLine').textContent = messages.note;
    
    // Show thank area by removing hidden class
    thankArea.classList.remove('hidden');
    
    // Type the message
    const typedMessageElement = document.getElementById('typedMessage');
    typeText(typedMessageElement, messages.message, 30, skipTyping).then(() => {
        // Ensure content is properly displayed after typing
        if (skipTyping) {
            typedMessageElement.innerHTML = messages.message.replace(/\n/g, '<br>');
        }
    });
    
    // Scroll to thank you area
    thankArea.scrollIntoView({ behavior: 'smooth' });
}

// Add animation to form sections when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.form-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add hover effects to form inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});