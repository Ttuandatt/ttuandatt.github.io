export const languages = {
    vi: "Tiếng Việt",
    en: "English",
} as const;

export const defaultLang = "vi" as const;

export type Lang = keyof typeof languages;

export const ui = {
    vi: {
        // Nav
        "nav.about": "GIỚI THIỆU",
        "nav.experience": "KINH NGHIỆM",
        "nav.skills": "KỸ NĂNG",
        "nav.projects": "DỰ ÁN",
        "nav.contact": "LIÊN HỆ",
        "nav.resume": "CV",

        // Hero
        "hero.greeting": "Xin chào, tôi là",
        "hero.role": "Software Developer — trên hành trình trở thành Solution Architect",
        "hero.taglineHighlight": "Thiết kế & xây dựng hệ thống backend có khả năng mở rộng",
        "hero.taglineRest": " — từ code đến kiến trúc, sẵn sàng thích ứng với mọi tech stack.",

        // About
        "about.title": "Giới thiệu",
        "about.hi": "Xin chào! 👋",
        "about.bio1":
            "Tôi là <b>Phan Canh Tuan Dat</b> – Software Developer tập trung vào Java Spring Boot & AWS Cloud, đang trên hành trình phát triển thành <b>Solution Architect</b>.",
        "about.bio2":
            "Đã thực tập 6 tháng tại Amazon Web Services (AWS) với kinh nghiệm thực chiến: thiết kế Microservices, bảo mật hệ thống (JWT/OAuth2), mô hình hóa cơ sở dữ liệu quan hệ (MySQL, SQL Server) và triển khai Cloud Infrastructure trên AWS (ECS, RDS, Kafka, Redis).",
        "about.bio3":
            "Mục tiêu dài hạn: trở thành Solution Architect — người thiết kế giải pháp end-to-end, cân bằng giữa business requirements, chi phí và vận hành. Trên đường đi đó, tôi không ngừng đào sâu system design, cloud architecture và kỹ năng lãnh đạo kỹ thuật.",
        "about.email": "Email",
        "about.phone": "Điện thoại",
        "about.address": "Địa chỉ",
        "about.school": "Trường",
        "about.addressValue": "Tân Sơn Nhì, TP. Hồ Chí Minh, Việt Nam",
        "about.schoolValue": "Đại học Sài Gòn – Công nghệ Thông tin",
        "about.stat.months": "Tháng thực tập tại AWS",
        "about.stat.microservices": "Microservices đã xây",
        "about.stat.ielts": "Điểm IELTS",
        "about.stat.projects": "Dự án đã hoàn thành",

        // Experience
        "experience.title": "Kinh nghiệm",
        "experience.education": "Học vấn",
        "experience.certifications": "Chứng chỉ",

        // Skills
        "skills.title": "Tech Stack",
        "skills.backend": "Backend",
        "skills.database": "Database",
        "skills.cloud": "Cloud & DevOps",
        "skills.programming": "Lập trình & Công cụ",

        // Projects list
        "projects.title": "Dự án của tôi",
        "projects.development": "Đang phát triển",
        "projects.demoFor": "Demo cho",

        // Project detail
        "project.sourceCode": "Mã nguồn",
        "project.liveDemo": "Xem Demo",
        "project.about": "Về dự án.",
        "project.features": "Tính năng",
        "project.techStack": "Công nghệ",
        "project.demoCredentials": "Thông tin Demo",
        "project.emailLabel": "Email :",
        "project.passwordLabel": "Mật khẩu :",

        // Contact
        "contact.title": "Liên hệ",
        "contact.heading": "Hãy cùng hợp tác!",
        "contact.sub1": "Liên hệ tôi để trao đổi về dự án web",
        "contact.sub2": "hoặc đơn giản là để chào hỏi. 😉",
        "contact.form.name": "Tên",
        "contact.form.namePlaceholder": "Nhập tên của bạn",
        "contact.form.email": "Email",
        "contact.form.message": "Tin nhắn",
        "contact.form.messagePlaceholder": "Nhập tin nhắn của bạn",
        "contact.form.sending": "Đang gửi",
        "contact.form.submit": "Gửi",
        "contact.form.success": "👍 Đã gửi tin nhắn!",
        "contact.form.invalidEmail": "🙄 Email không hợp lệ!",
        "contact.form.failed": "😵 Gửi không thành công",

        // Footer
        "footer.copyright": "© Bản quyền",

        // Language switcher
        "lang.switchTo": "English",
    },
    en: {
        // Nav
        "nav.about": "ABOUT",
        "nav.experience": "EXPERIENCE",
        "nav.skills": "SKILLS",
        "nav.projects": "PROJECTS",
        "nav.contact": "CONTACT",
        "nav.resume": "RESUME",

        // Hero
        "hero.greeting": "Hi, I'm",
        "hero.role": "Software Developer — on the path to becoming a Solution Architect",
        "hero.taglineHighlight": "Designing & Developing scalable systems",
        "hero.taglineRest": ". From code to architecture.",

        // About
        "about.title": "About Me",
        "about.hi": "Hello there! 👋",
        "about.bio1":
            "I'm <b>Phan Canh Tuan Dat</b> – a Software Developer focused on Java Spring Boot & AWS Cloud, on the path to becoming a <b>Solution Architect</b>.",
        "about.bio2":
            "Completed a 6-month internship at Amazon Web Services (AWS) — hands-on experience designing microservices, securing systems with JWT/OAuth2, modeling relational databases (MySQL, SQL Server), and deploying Cloud Infrastructure on AWS (ECS, RDS, Kafka, Redis).",
        "about.bio3":
            "Long-term goal: grow into a Solution Architect who designs end-to-end solutions balancing business needs, cost, and operability. Along the way, I'm deepening my expertise in system design, cloud architecture, and technical leadership.",
        "about.email": "Email",
        "about.phone": "Phone",
        "about.address": "Address",
        "about.school": "University",
        "about.addressValue": "Tan Son Nhi, Ho Chi Minh City, Vietnam",
        "about.schoolValue": "Sai Gon University – Information Technology",
        "about.stat.months": "Months Interned at AWS",
        "about.stat.microservices": "Microservices Built",
        "about.stat.ielts": "IELTS Score",
        "about.stat.projects": "Projects Delivered",

        // Experience
        "experience.title": "Experience",
        "experience.education": "Education",
        "experience.certifications": "Certifications",

        // Skills
        "skills.title": "Tech Stack",
        "skills.backend": "Backend",
        "skills.database": "Database",
        "skills.cloud": "Cloud & DevOps",
        "skills.programming": "Programming & Tools",

        // Projects list
        "projects.title": "My Projects",
        "projects.development": "Under Development",
        "projects.demoFor": "Demo for",

        // Project detail
        "project.sourceCode": "Source Code",
        "project.liveDemo": "Live Demo",
        "project.about": "About the project.",
        "project.features": "Features",
        "project.techStack": "Tech Stack",
        "project.demoCredentials": "Demo Credentials",
        "project.emailLabel": "Email :",
        "project.passwordLabel": "Password :",

        // Contact
        "contact.title": "Contact",
        "contact.heading": "Let's collaborate!",
        "contact.sub1": "Contact me to discuss your web development needs",
        "contact.sub2": "or just to say hello. 😉",
        "contact.form.name": "Name",
        "contact.form.namePlaceholder": "Enter your Name",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.messagePlaceholder": "Enter your Message",
        "contact.form.sending": "Sending",
        "contact.form.submit": "Submit",
        "contact.form.success": "👍 Message Sent!",
        "contact.form.invalidEmail": "🙄 Invalid Email!",
        "contact.form.failed": "😵 Message not Sent",

        // Footer
        "footer.copyright": "© Copyright",

        // Language switcher
        "lang.switchTo": "Tiếng Việt",
    },
} as const;

export type UIKey = keyof (typeof ui)["vi"];
