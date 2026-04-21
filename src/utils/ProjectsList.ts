import {
    JavaIcon,
    SpringIcon,
    KafkaIcon,
    RedisIcon,
    MysqlIcon,
    PostgresIcon,
    AwsIcon,
    DockerIcon,
    GithubActionsIcon,
    GitIcon,
    PythonIcon,
    TsIcon,
    ReactIcon,
    NextIcon,
    NestJsIcon,
    RestApiIcon,
} from "../assets/Icons"

import {
    TodolistLogo,
    AwsWorkshopLogo,
    WarehouseLogo,
    BlogTranslationLogo,
    IeltsLogo,
} from "../assets/Logos"

import {
    TodolistShot,
    AwsWorkshopShot,
    WarehouseShot,
    BlogTranslationShot,
    IeltsShot,
} from "../assets/Shots"

import {
    TodolistMockup,
    AwsWorkshopMockup,
    WarehouseMockup,
    BlogTranslationMockup,
    IeltsMockup,
} from "../assets/Mockup"

import type { Localized } from "../i18n"


type ProjectsListType = {
    Name: string,
    ShortDesc: Localized,
    Desc: Localized,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: Localized,
        icon: ImageMetadata
    }[],
    features: {
        title: Localized,
        description: Localized
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

const TechInfo = {
    Java: {
        title: "Java",
        description: {
            vi: "Ngôn ngữ đa dụng, kiểu tĩnh mạnh — dùng xây dựng core backend services.",
            en: "General-purpose, strongly-typed language used to build the core backend services.",
        },
        icon: JavaIcon
    },
    Spring: {
        title: "Spring Boot",
        description: {
            vi: "Framework Java để xây microservices production-grade với auto-configuration và embedded server.",
            en: "Java framework for building production-grade microservices with auto-configuration and embedded servers.",
        },
        icon: SpringIcon
    },
    SpringSecurity: {
        title: "Spring Security",
        description: {
            vi: "Framework xác thực & phân quyền với JWT, OAuth2 và bảo mật cấp method.",
            en: "Authentication and authorization framework with JWT, OAuth2, and method-level security.",
        },
        icon: SpringIcon
    },
    Hibernate: {
        title: "Hibernate / JPA",
        description: {
            vi: "ORM map object Java sang database quan hệ, dùng JPA Specifications cho query động.",
            en: "ORM for mapping Java objects to relational databases with JPA Specifications for dynamic queries.",
        },
        icon: SpringIcon
    },
    Kafka: {
        title: "Apache Kafka",
        description: {
            vi: "Nền tảng event streaming phân tán cho messaging bất đồng bộ giữa services và replay event.",
            en: "Distributed event streaming platform for async inter-service messaging and event replay.",
        },
        icon: KafkaIcon
    },
    Redis: {
        title: "Redis",
        description: {
            vi: "In-memory data store dùng cho cache, Pub/Sub, rate limiting và blacklist token.",
            en: "In-memory data store used for caching, Pub/Sub, rate limiting, and token blacklisting.",
        },
        icon: RedisIcon
    },
    MySQL: {
        title: "MySQL",
        description: {
            vi: "Cơ sở dữ liệu quan hệ mã nguồn mở, lưu trữ dữ liệu giao dịch.",
            en: "Open-source relational database for transactional data storage.",
        },
        icon: MysqlIcon
    },
    Postgres: {
        title: "PostgreSQL",
        description: {
            vi: "RDBMS nâng cao mã nguồn mở, hỗ trợ JSONB cho schema linh hoạt.",
            en: "Advanced open-source RDBMS with JSONB support for flexible schema.",
        },
        icon: PostgresIcon
    },
    AWS: {
        title: "AWS Cloud",
        description: {
            vi: "Amazon Web Services — ECS Fargate, RDS, ElastiCache, S3, ALB, Route 53, CloudFront, v.v.",
            en: "Amazon Web Services — ECS Fargate, RDS, ElastiCache, S3, ALB, Route 53, CloudFront, and more.",
        },
        icon: AwsIcon
    },
    Docker: {
        title: "Docker",
        description: {
            vi: "Nền tảng container hóa cho development local và triển khai cloud nhất quán.",
            en: "Containerization platform for consistent local development and cloud deployment.",
        },
        icon: DockerIcon
    },
    GithubActions: {
        title: "GitHub Actions",
        description: {
            vi: "CI/CD tự động — build, push ECR, deploy ECS mỗi khi merge vào main.",
            en: "CI/CD automation — build, push to ECR, and deploy to ECS on every merge to main.",
        },
        icon: GithubActionsIcon
    },
    Git: {
        title: "Git",
        description: {
            vi: "Hệ thống quản lý mã nguồn phân tán.",
            en: "Distributed version control for source code management.",
        },
        icon: GitIcon
    },
    Python: {
        title: "Python",
        description: {
            vi: "Dùng để serve model ML và viết các script phụ trợ.",
            en: "Used for ML model serving and auxiliary scripting.",
        },
        icon: PythonIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: {
            vi: "Superset có kiểu của JavaScript, dùng cho code frontend và backend an toàn kiểu.",
            en: "Typed superset of JavaScript used for type-safe frontend and backend code.",
        },
        icon: TsIcon
    },
    React: {
        title: "React",
        description: {
            vi: "Thư viện UI component-based, là nền tảng của phần frontend.",
            en: "Component-based UI library powering the frontend.",
        },
        icon: ReactIcon
    },
    Next: {
        title: "Next.js",
        description: {
            vi: "Framework React với App Router, Server Components và SSR/SSG.",
            en: "React framework with App Router, Server Components, and SSR/SSG.",
        },
        icon: NextIcon
    },
    NestJS: {
        title: "NestJS",
        description: {
            vi: "Framework Node.js hiện đại với kiến trúc module hóa, DI và decorator.",
            en: "Progressive Node.js framework with modular architecture, DI, and decorators.",
        },
        icon: NestJsIcon
    },
    REST: {
        title: "REST API",
        description: {
            vi: "Kiểu kiến trúc thiết kế API stateless, hướng tài nguyên.",
            en: "Architectural style for designing stateless, resource-oriented APIs.",
        },
        icon: RestApiIcon
    },
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "SaaS Task Management",
        ShortDesc: {
            vi: "SaaS giống Todoist xây bằng Spring Boot microservices, Kafka, Redis và AWS ECS Fargate — JWT/OAuth2, thông báo realtime, gán nhãn task bằng AI.",
            en: "Todoist-like SaaS built with Spring Boot microservices, Kafka, Redis, and AWS ECS Fargate — featuring JWT/OAuth2 auth, real-time notifications, and AI task labeling.",
        },
        Desc: {
            vi: "Nền tảng quản lý công việc cấp production, xây trong 6 tháng thực tập tại AWS Vietnam. Hệ thống tách business logic thành 6 microservices độc lập giao tiếp qua Apache Kafka và triển khai trên AWS ECS Fargate. Tôi đảm nhiệm toàn bộ Auth Service — tạo/xác thực JWT, đăng nhập OAuth2 Google, xác thực OTP qua email, quản lý session bằng Redis và bảo mật mật khẩu bằng BCrypt. Ngoài ra tích hợp service với Spring Cloud Gateway, đóng gói Docker và viết pipeline GitHub Actions giảm một nửa thời gian release thủ công.",
            en: "A production-grade task management platform built during a 6-month internship at AWS Vietnam. The system decomposes business logic into 6 independent microservices communicating via Apache Kafka and deployed on AWS ECS Fargate. I designed and owned the entire Auth Service — JWT token generation/validation, OAuth2 Google login, OTP email verification, Redis-backed session handling, and BCrypt password security. I also integrated the service with Spring Cloud Gateway, containerized everything with Docker, and wrote GitHub Actions pipelines that cut manual release time in half.",
        },
        Logo: TodolistLogo,
        Shot: TodolistShot,
        Mockup: TodolistMockup,
        Theme: "#FF9900",
        Status: "completed",
        Link: "https://youtu.be/gOVHkb54aeM",
        Source: "https://github.com/gnuh24/aws-todo-list-project",
        Tech: [TechInfo.Java, TechInfo.Spring, TechInfo.SpringSecurity, TechInfo.Hibernate, TechInfo.Kafka, TechInfo.Redis, TechInfo.MySQL, TechInfo.AWS, TechInfo.Docker, TechInfo.GithubActions, TechInfo.Python, TechInfo.React],
        features: [
            {
                title: { vi: "Xác thực JWT + OAuth2", en: "JWT + OAuth2 Authentication" },
                description: {
                    vi: "Hệ thống JWT 2 token (access + refresh) ký bằng HMAC-SHA256, đăng nhập OAuth2 Google và blacklist token bằng Redis cho logout an toàn.",
                    en: "Dual-token JWT system (access + refresh) with HMAC-SHA256 signing, Google OAuth2 social login, and Redis-backed token blacklisting for secure logout.",
                },
            },
            {
                title: { vi: "Xác thực OTP qua Email", en: "OTP Email Verification" },
                description: {
                    vi: "Mã OTP có TTL 3 phút lưu trong Redis để kích hoạt tài khoản, reset mật khẩu và đổi email — publish qua Kafka tới Notification Service.",
                    en: "Time-limited OTP codes (3 min TTL) stored in Redis for account activation, password reset, and email updates — published via Kafka to the Notification Service.",
                },
            },
            {
                title: { vi: "API Gateway với JWT Filter", en: "API Gateway with JWT Filter" },
                description: {
                    vi: "Spring Cloud Gateway với global filter validate token và inject header user context (X-User-Id, X-User-Email, X-User-Role) trước khi định tuyến downstream.",
                    en: "Spring Cloud Gateway with a global filter that validates tokens and injects user context headers (X-User-Id, X-User-Email, X-User-Role) before routing downstream.",
                },
            },
            {
                title: { vi: "Phân quyền theo Role", en: "Role-Based Access Control" },
                description: {
                    vi: "4 cấp quyền mỗi project — Owner, Admin, Member, Viewer — thực thi ở tầng service bằng Spring Security.",
                    en: "4 permission levels per project — Owner, Admin, Member, Viewer — enforced at the service layer with Spring Security.",
                },
            },
            {
                title: { vi: "Kiến trúc Event-Driven với Kafka", en: "Kafka Event-Driven Architecture" },
                description: {
                    vi: "Event bất đồng bộ giữa Auth, Taskflow và Notification — tách rời, replay được và dễ mở rộng.",
                    en: "Async events between Auth, Taskflow, and Notification services — decoupled, replayable, and scalable.",
                },
            },
            {
                title: { vi: "Gán nhãn Task bằng AI", en: "AI Task Labeling" },
                description: {
                    vi: "Service ML Python Flask phân loại nhãn task tự động qua model đã train, consume qua REST bởi Taskflow Service.",
                    en: "Python Flask ML service classifies task labels automatically using a trained model, consumed via REST by the Taskflow Service.",
                },
            },
            {
                title: { vi: "Triển khai AWS ECS Fargate", en: "AWS ECS Fargate Deployment" },
                description: {
                    vi: "Triển khai container serverless với auto-scaling, ALB, RDS Aurora, ElastiCache Redis và S3 — tối ưu chi phí ~$30/tháng.",
                    en: "Serverless container deployment with auto-scaling, ALB, RDS Aurora, ElastiCache Redis, and S3 — cost-optimized at ~$30/month.",
                },
            },
            {
                title: { vi: "CI/CD với GitHub Actions", en: "CI/CD with GitHub Actions" },
                description: {
                    vi: "Pipeline tự động build → push ECR → deploy ECS, giảm 50% thời gian release thủ công.",
                    en: "Automated build → push to ECR → deploy to ECS pipeline, reducing manual release time by 50%.",
                },
            },
        ],
        hideProject: false,
        LogoSize: 60,
        versions: []
    },
    {
        Name: "IELTS Helper",
        ShortDesc: {
            vi: "Nền tảng luyện IELTS full-stack với chấm essay bằng AI (rubric 4 tiêu chí), Reading tự chấm, quản lý lớp học và dashboard theo vai trò.",
            en: "Full-stack IELTS prep platform with AI-powered essay scoring (4-criteria rubric), auto-graded Reading, classroom management, and role-based dashboards.",
        },
        Desc: {
            vi: "IELTS Helper giải quyết nỗi đau thực tế khi luyện IELTS: feedback Writing chậm (1–3 ngày → dưới 5 phút), chấm điểm thiếu nhất quán và nội dung phân mảnh. Reading tự chấm cho lời giải tức thì; module Writing dùng queue BullMQ async để offload việc chấm sang OpenAI GPT-4o (Gemini fallback) và stream kết quả về qua SSE. Hệ thống hỗ trợ 3 vai trò Learner, Instructor, Admin với dashboard riêng, quản lý lớp học qua invite code và CMS nội dung có theo dõi phiên bản.",
            en: "IELTS Helper solves real pain points in IELTS prep: slow writing feedback (1–3 days → under 5 minutes), inconsistent scoring, and fragmented content. Auto-graded Reading delivers instant explanations, while the Writing module uses an async BullMQ queue to offload scoring to OpenAI GPT-4o (with Gemini fallback) and stream results back via SSE. The system supports Learners, Instructors, and Admins with distinct dashboards, classroom management with invite codes, and a full content CMS with version tracking.",
        },
        Logo: IeltsLogo,
        Shot: IeltsShot,
        Mockup: IeltsMockup,
        Theme: "#7C3AED",
        Status: "development",
        Link: "https://github.com/Ttuandatt",
        Source: "https://github.com/Ttuandatt",
        Tech: [TechInfo.Next, TechInfo.NestJS, TechInfo.TypeScript, TechInfo.Postgres, TechInfo.Redis, TechInfo.Docker, TechInfo.REST],
        features: [
            {
                title: { vi: "Chấm Essay bằng AI", en: "AI-Powered Essay Scoring" },
                description: {
                    vi: "Chấm theo 4 tiêu chí IELTS (Task Response, Coherence, Lexical Resource, Grammar) qua OpenAI GPT-4o với Google Gemini làm fallback. Dưới 5 phút/lần.",
                    en: "IELTS 4-criteria scoring (Task Response, Coherence, Lexical Resource, Grammar) via OpenAI GPT-4o with Google Gemini as fallback. Under 5 min turnaround.",
                },
            },
            {
                title: { vi: "Pipeline chấm bất đồng bộ", en: "Async Scoring Pipeline" },
                description: {
                    vi: "Queue BullMQ + Redis với priority, 3 lần retry, backoff tăng dần. API trả 202 ngay lập tức; client poll hoặc nghe qua SSE để nhận cập nhật realtime.",
                    en: "BullMQ + Redis queue with priority, 3 retries, exponential backoff. API returns 202 immediately; client polls or listens via SSE for real-time updates.",
                },
            },
            {
                title: { vi: "Reading tự chấm", en: "Auto-Graded Reading" },
                description: {
                    vi: "6 dạng câu hỏi IELTS (MCQ, Short Answer, Matching Headings, T/F/NG, Diagram Labeling, Sentence Completion) kèm giải thích chi tiết từng câu.",
                    en: "6 IELTS question types (MCQ, Short Answer, Matching Headings, T/F/NG, Diagram Labeling, Sentence Completion) with instant per-question explanations.",
                },
            },
            {
                title: { vi: "Quản lý lớp học", en: "Classroom Management" },
                description: {
                    vi: "Lớp ảo do Instructor dẫn với invite code 8 ký tự, cấu trúc Topic → Lesson và thông báo cho cả lớp.",
                    en: "Instructor-led virtual classrooms with 8-char invite codes, hierarchical Topics → Lessons, and class-wide announcements.",
                },
            },
            {
                title: { vi: "Phân quyền theo Role", en: "Role-Based Access Control" },
                description: {
                    vi: "3 vai trò Learner / Instructor / Admin enforce bằng NestJS guards và JWT claims. Silent refresh token qua Axios interceptor.",
                    en: "Learner / Instructor / Admin roles enforced with NestJS guards and JWT claims. Silent token refresh via Axios interceptor.",
                },
            },
            {
                title: { vi: "Theo dõi phiên bản nội dung", en: "Content Versioning" },
                description: {
                    vi: "Mọi chỉnh sửa passage, question và prompt đều log editor, timestamp và diff — audit trail đầy đủ.",
                    en: "Every passage, question, and prompt edit is logged with editor ID, timestamp, and diff — full audit trail for compliance.",
                },
            },
            {
                title: { vi: "i18n song ngữ", en: "Bilingual i18n" },
                description: {
                    vi: "Custom i18n provider với tiếng Việt + tiếng Anh, đổi ngôn ngữ realtime, dark/light theming.",
                    en: "Custom i18n provider with Vietnamese and English translations, real-time language switching, dark/light theming.",
                },
            },
            {
                title: { vi: "Prisma schema 14 bảng", en: "14-Table Prisma Schema" },
                description: {
                    vi: "Schema PostgreSQL 15 bao quát users, content, submissions, classrooms, notifications và async import job.",
                    en: "PostgreSQL 15 schema covering users, content, submissions, classrooms, notifications, and async import jobs.",
                },
            },
        ],
        hideProject: false,
        LogoSize: 60,
        versions: []
    },
    {
        Name: "AWS Workshop",
        ShortDesc: {
            vi: "Workshop triển khai AWS đầy đủ với 35+ bước hướng dẫn chi tiết về VPC, ECS Fargate, ALB, RDS, CloudFront, v.v. Song ngữ (EN/VI).",
            en: "Comprehensive AWS deployment workshop with 35+ step-by-step guides covering VPC, ECS Fargate, ALB, RDS, CloudFront, and more. Bilingual (EN/VI).",
        },
        Desc: {
            vi: "Workshop song ngữ Anh–Việt ghi lại toàn bộ quá trình triển khai nền tảng SaaS Task Management lên AWS. Là deliverable chính của kỳ thực tập, tài liệu này vừa là production doc vừa là resource học tập cho thực tập sinh sau. Nội dung gồm thiết kế network, security groups, ECS task definitions, Cloud Map service discovery, ALB path-based routing, Cross-Region Replication cho DR và quy trình tear-down tránh phát sinh chi phí.",
            en: "A bilingual (English & Vietnamese) workshop documenting the full deployment of the SaaS Task Management platform on AWS. Created as a primary internship deliverable, it serves as both production documentation and a learning resource for future interns. Covers network design, security groups, ECS task definitions, Cloud Map service discovery, ALB path-based routing, Cross-Region Replication for disaster recovery, and tear-down procedures to avoid cost surprises.",
        },
        Logo: AwsWorkshopLogo,
        Shot: AwsWorkshopShot,
        Mockup: AwsWorkshopMockup,
        Theme: "#FF9900",
        Status: "completed",
        Link: "https://ttuandatt.github.io/AWS-Workshop/",
        Source: "https://github.com/Ttuandatt/AWS-Workshop",
        Tech: [TechInfo.AWS, TechInfo.Docker, TechInfo.Git],
        features: [
            {
                title: { vi: "35+ bước triển khai", en: "35+ Deployment Steps" },
                description: {
                    vi: "Hướng dẫn trọn bộ từ tạo VPC đến CloudFront distribution, mỗi bước kèm screenshot và giải thích.",
                    en: "Full walkthrough from VPC creation to CloudFront distribution, each step with screenshots and explanations.",
                },
            },
            {
                title: { vi: "Thiết kế Network", en: "Network Setup" },
                description: {
                    vi: "VPC (10.0.0.0/16), public/private subnet qua 2 AZ, Internet Gateway, route tables và Security Groups cho ALB, ECS, RDS, Redis.",
                    en: "VPC (10.0.0.0/16), public/private subnets across 2 AZs, Internet Gateway, route tables, and Security Groups for ALB, ECS, RDS, Redis.",
                },
            },
            {
                title: { vi: "Triển khai Backend", en: "Backend Deployment" },
                description: {
                    vi: "ECR repos, ECS Cluster với Fargate, Task Definition cho mỗi microservice, rolling update, ALB path-based routing, Cloud Map service discovery.",
                    en: "ECR repos, ECS Cluster with Fargate, Task Definitions per microservice, rolling updates, ALB path-based routing, Cloud Map service discovery.",
                },
            },
            {
                title: { vi: "Tầng dữ liệu", en: "Data Layer" },
                description: {
                    vi: "Provision RDS MySQL, ElastiCache Redis cluster và Kafka trên ECS — kèm setup backup, replication và monitoring.",
                    en: "RDS MySQL provisioning, ElastiCache Redis cluster, and Kafka on ECS — with backup, replication, and monitoring setup.",
                },
            },
            {
                title: { vi: "Triển khai Frontend", en: "Frontend Deployment" },
                description: {
                    vi: "S3 static hosting, CloudFront distribution với custom domain, ACM SSL và Cross-Region Replication (CRR) cho DR.",
                    en: "S3 static hosting, CloudFront distribution with custom domain, ACM SSL, and Cross-Region Replication (CRR) for disaster recovery.",
                },
            },
            {
                title: { vi: "Hướng dẫn Clean Up", en: "Clean Up Guide" },
                description: {
                    vi: "Hướng dẫn tear-down từng bước để tránh phát sinh chi phí AWS sau workshop.",
                    en: "Step-by-step tear-down instructions to avoid unexpected AWS charges after the workshop.",
                },
            },
            {
                title: { vi: "Tài liệu song ngữ", en: "Bilingual Documentation" },
                description: {
                    vi: "Có bản tiếng Anh và tiếng Việt, giúp kiến thức AWS tiếp cận được cộng đồng dev Việt Nam.",
                    en: "Available in both English and Vietnamese, making AWS knowledge accessible to the Vietnamese developer community.",
                },
            },
        ],
        hideProject: false,
        LogoSize: 60,
        versions: []
    },
    {
        Name: "Warehouse Management",
        ShortDesc: {
            vi: "App desktop quản lý kho — tracking tồn kho, sản phẩm và nhập/xuất — làm Team Leader với Java SE theo kiến trúc 3-Tier nghiêm ngặt.",
            en: "Desktop app for inventory tracking, product management, and stock movements — built as Team Leader with Java SE following strict 3-Tier Architecture.",
        },
        Desc: {
            vi: "Ứng dụng desktop tôi dẫn dắt phát triển với vai trò Team Leader trong team 3 người. Hệ thống tuân theo kiến trúc 3-Tier (GUI → BUS → DAO) với DAO + DTO pattern để tách business logic khỏi data access. Tôi engineer Data Access Layer dùng raw SQL qua PreparedStatement để chống SQL Injection, xây module Authentication bảo mật, triển khai Inventory Management (CRUD sản phẩm, nhập/xuất kho), và thiết kế layout chính bằng Java Swing/JavaFX phù hợp với workflow của nhân viên kho. Thời gian: 03/2024 – 09/2024.",
            en: "A desktop application I led development of as Team Leader of a 3-person team. The system follows 3-Tier Architecture (GUI → BUS → DAO) with DAO and DTO patterns to decouple business logic from data access. I engineered the Data Access Layer with raw SQL via PreparedStatement to prevent SQL Injection, built the secure Authentication module, implemented core Inventory Management (Product CRUD, Stock In/Out), and designed the main layout with Java Swing/JavaFX for an intuitive warehouse-staff experience. Timeline: Mar 2024 – Sep 2024.",
        },
        Logo: WarehouseLogo,
        Shot: WarehouseShot,
        Mockup: WarehouseMockup,
        Theme: "#1E3A8A",
        Status: "completed",
        Link: "https://github.com/Ttuandatt/Warehouse_Management",
        Source: "https://github.com/Ttuandatt/Warehouse_Management",
        Tech: [TechInfo.Java, TechInfo.MySQL, TechInfo.Git],
        features: [
            {
                title: { vi: "Kiến trúc 3-Tier", en: "3-Tier Architecture" },
                description: {
                    vi: "Phân tầng GUI → BUS → DAO nghiêm ngặt, tách biệt concern và dễ bảo trì.",
                    en: "Strict GUI → BUS → DAO layering ensures separation of concerns and maintainability.",
                },
            },
            {
                title: { vi: "DAO + DTO Pattern", en: "DAO + DTO Patterns" },
                description: {
                    vi: "DAO tách logic lưu trữ; DTO vận chuyển dữ liệu giữa các tầng an toàn.",
                    en: "Data Access Objects decouple persistence logic; DTOs carry data across layers safely.",
                },
            },
            {
                title: { vi: "Chống SQL Injection", en: "SQL Injection Prevention" },
                description: {
                    vi: "Toàn bộ query database dùng PreparedStatement với parameterized input.",
                    en: "All database queries use PreparedStatement with parameterized inputs to prevent injection attacks.",
                },
            },
            {
                title: { vi: "Xác thực bảo mật", en: "Secure Authentication" },
                description: {
                    vi: "Module Login/Logout với validate credential và quản lý session.",
                    en: "Login/Logout module with credential validation and session tracking.",
                },
            },
            {
                title: { vi: "Quản lý kho", en: "Inventory Management" },
                description: {
                    vi: "CRUD sản phẩm đầy đủ, tracking nhập/xuất kho với validate và audit trail.",
                    en: "Full Product CRUD, Stock-In and Stock-Out tracking, with validation and audit trails.",
                },
            },
            {
                title: { vi: "UI Java Swing / JavaFX", en: "Java Swing / JavaFX UI" },
                description: {
                    vi: "UI desktop trực quan, thiết kế phù hợp workflow nhân viên kho.",
                    en: "Intuitive desktop UI designed for warehouse staff workflows.",
                },
            },
            {
                title: { vi: "Lãnh đạo team", en: "Team Leadership" },
                description: {
                    vi: "Dẫn dắt team 3 người qua full lifecycle — kiến trúc, phân việc và code review.",
                    en: "Led a 3-person team through the full development lifecycle — architecture, task allocation, and code review.",
                },
            },
        ],
        hideProject: false,
        LogoSize: 60,
        versions: []
    },
    {
        Name: "AWS Blog Translation",
        ShortDesc: {
            vi: "Dịch 3 blog kỹ thuật AWS từ tiếng Anh sang tiếng Việt — về FSx for NetApp ONTAP, HPC trong hàng không và Elastic Beanstalk với Amazon Q.",
            en: "Translated 3 AWS technical blogs from English to Vietnamese — covering FSx for NetApp ONTAP, HPC in Aerospace, and Elastic Beanstalk with Amazon Q.",
        },
        Desc: {
            vi: "Trong kỳ thực tập tại AWS Vietnam, tôi đã dịch 3 blog kỹ thuật AWS từ tiếng Anh sang tiếng Việt để kiến thức cloud dễ tiếp cận hơn với cộng đồng dev Việt. Mỗi bản dịch đòi hỏi hiểu sâu khái niệm kỹ thuật — từ chiến lược replication của Amazon FSx for NetApp ONTAP, kiến trúc HPC cho CFD hàng không, tới troubleshoot Elastic Beanstalk có AI hỗ trợ với Amazon Q Developer CLI. Công việc này giúp tôi rèn kỹ năng viết kỹ thuật và hiểu sâu hơn về AWS từ storage, compute đến AI tooling.",
            en: "As part of my AWS Vietnam internship, I translated 3 technical AWS blogs from English to Vietnamese, making cloud knowledge more accessible to the Vietnamese developer community. Each translation required deep understanding of the technical concepts — covering Amazon FSx for NetApp ONTAP replication strategies, HPC architectures for aerospace CFD simulations, and AI-assisted Elastic Beanstalk troubleshooting with Amazon Q Developer CLI. The work sharpened my technical writing skills and deepened my AWS expertise across storage, compute, and AI tooling.",
        },
        Logo: BlogTranslationLogo,
        Shot: BlogTranslationShot,
        Mockup: BlogTranslationMockup,
        Theme: "#0EA5E9",
        Status: "completed",
        Link: "https://github.com/Ttuandatt",
        Source: "https://github.com/Ttuandatt",
        Tech: [TechInfo.AWS, TechInfo.Git],
        features: [
            {
                title: { vi: "FSx for NetApp ONTAP", en: "FSx for NetApp ONTAP" },
                description: {
                    vi: "Replication dữ liệu scalable với Amazon FSx for NetApp ONTAP và NetApp SnapMirror — bảo vệ dữ liệu cross-region và tối ưu hiệu năng.",
                    en: "Scalable data replication with Amazon FSx for NetApp ONTAP and NetApp SnapMirror — covering cross-region data protection and performance optimization.",
                },
            },
            {
                title: { vi: "HPC cho hàng không", en: "HPC for Aerospace" },
                description: {
                    vi: "High-Performance Computing trên AWS cho đổi mới ngành hàng không — CFD, phân tích kết cấu, auto-scaling và tối ưu chi phí.",
                    en: "High-Performance Computing on AWS for aerospace innovation — CFD simulations, structural analysis, auto-scaling, and cost optimization.",
                },
            },
            {
                title: { vi: "Elastic Beanstalk + Amazon Q", en: "Elastic Beanstalk + Amazon Q" },
                description: {
                    vi: "Troubleshoot Elastic Beanstalk có AI hỗ trợ qua Amazon Q Developer CLI — workflow debug thực tế và best practices.",
                    en: "AI-assisted troubleshooting of Elastic Beanstalk environments using Amazon Q Developer CLI — practical debugging workflows and best practices.",
                },
            },
            {
                title: { vi: "Chính xác kỹ thuật", en: "Technical Accuracy" },
                description: {
                    vi: "Giữ độ chính xác kỹ thuật trong khi điều chỉnh câu chữ cho người đọc tiếng Việt — không paraphrase mất thông tin.",
                    en: "Preserved technical precision while adapting phrasing for Vietnamese readers — no lossy paraphrasing.",
                },
            },
            {
                title: { vi: "Tác động cộng đồng", en: "Community Impact" },
                description: {
                    vi: "Thu hẹp khoảng cách ngôn ngữ cho dev Việt khi tiếp cận AWS storage, HPC và cloud AI-assisted.",
                    en: "Bridged the language gap for Vietnamese developers exploring AWS storage, HPC, and AI-assisted cloud operations.",
                },
            },
        ],
        hideProject: false,
        LogoSize: 60,
        versions: []
    },
]
