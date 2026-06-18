import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const getDbConfig = (): TypeOrmModuleOptions => ({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "5432")
})

