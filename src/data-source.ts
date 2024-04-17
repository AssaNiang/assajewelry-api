import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { ProductEntity } from "./entities/ProductEntity";
import { AddressEntity } from "./entities/AddressEntity";
import { CategoryEntity } from "./entities/CategoryEntity";
// import { CollectionEntity } from "./entities/CollectionEntity";
import { ImageEntity } from "./entities/ImageEntity";
import { OrderEntity } from "./entities/OrderEntity";
import { SizeEntity } from "./entities/SizeEntity";
import { UserEntity } from "./entities/UserEntity";

dotenv.config({path: ".env.local"});

const AppDataSource = new DataSource({
    type : "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [ProductEntity,AddressEntity,CategoryEntity,ImageEntity,OrderEntity,SizeEntity,UserEntity]
});
export default AppDataSource;
