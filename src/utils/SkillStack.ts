import {
    JavaIcon,
    SpringIcon,
    KafkaIcon,
    RedisIcon,
    MysqlIcon,
    SqlServerIcon,
    PostgresIcon,
    AwsIcon,
    DockerIcon,
    GithubActionsIcon,
    GitIcon,
    RestApiIcon,
    PythonIcon,
    TsIcon,
    JsIcon,
    ReactIcon,
    NextIcon,
    NestJsIcon,
    VsCodeIcon,
} from "../assets/Icons";
import { GithubIcon } from "../assets/SVGs";

export const BackendStack = [
    { name: "Java", icon: JavaIcon, link: "https://www.oracle.com/java/" },
    { name: "Spring Boot", icon: SpringIcon, link: "https://spring.io/projects/spring-boot" },
    { name: "Spring Security", icon: SpringIcon, link: "https://spring.io/projects/spring-security" },
    { name: "Hibernate / JPA", icon: SpringIcon, link: "https://hibernate.org/" },
    { name: "REST API", icon: RestApiIcon, link: "https://developer.mozilla.org/en-US/docs/Glossary/REST" },
    { name: "Microservices", icon: SpringIcon, link: "https://spring.io/microservices" },
    { name: "Apache Kafka", icon: KafkaIcon, link: "https://kafka.apache.org/" },
    { name: "Redis", icon: RedisIcon, link: "https://redis.io/" },
    { name: "NestJS", icon: NestJsIcon, link: "https://nestjs.com/" },
];

export const DatabaseStack = [
    { name: "MySQL", icon: MysqlIcon, link: "https://www.mysql.com/" },
    { name: "SQL Server", icon: SqlServerIcon, link: "https://www.microsoft.com/en-us/sql-server" },
    { name: "PostgreSQL", icon: PostgresIcon, link: "https://www.postgresql.org/" },
    { name: "Redis Cache", icon: RedisIcon, link: "https://redis.io/docs/latest/develop/use/patterns/" },
];

export const CloudStack = [
    { name: "AWS", icon: AwsIcon, link: "https://aws.amazon.com/" },
    { name: "ECS Fargate", icon: AwsIcon, link: "https://aws.amazon.com/fargate/" },
    { name: "EC2 / VPC / IAM", icon: AwsIcon, link: "https://aws.amazon.com/ec2/" },
    { name: "RDS / S3", icon: AwsIcon, link: "https://aws.amazon.com/rds/" },
    { name: "Route 53", icon: AwsIcon, link: "https://aws.amazon.com/route53/" },
    { name: "Docker", icon: DockerIcon, link: "https://www.docker.com/" },
    { name: "GitHub Actions", icon: GithubActionsIcon, link: "https://github.com/features/actions" },
    { name: "Git", icon: GitIcon, link: "https://git-scm.com/" },
    { name: "GitHub", icon: GithubIcon, link: "https://github.com/" },
];

export const ProgrammingStack = [
    { name: "Java", icon: JavaIcon, link: "https://www.oracle.com/java/" },
    { name: "TypeScript", icon: TsIcon, link: "https://www.typescriptlang.org/" },
    { name: "JavaScript", icon: JsIcon, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Python", icon: PythonIcon, link: "https://www.python.org/" },
    { name: "React", icon: ReactIcon, link: "https://react.dev/" },
    { name: "Next.js", icon: NextIcon, link: "https://nextjs.org/" },
    { name: "VS Code", icon: VsCodeIcon, link: "https://code.visualstudio.com/" },
];
