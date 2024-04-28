import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SizeEntity } from "./SizeEntity";
import { UserEntity } from "./UserEntity";
import { ImageEntity } from "./ImageEntity";
// import { CollectionEntity } from "./CollectionEntity";
// import { OrderEntity } from "./OrderEntity";
import { CategoryEntity } from "./CategoryEntity";
import { CommentEntity } from "./CommentEntity";

@Entity({ name: "product", schema: "public" })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  name?: string;

  @Column({ nullable: false })
  price?: number;

  @Column({ nullable: false })
  description?: string;

  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    onDelete: "CASCADE"
  })
  @JoinColumn({ name: "id_category"})
  category?: CategoryEntity;

// Definir ca en premier ou faire ALTER TABLE product MODIFY id_category INT NOT NULL;
//  @ManyToOne(() => CategoryEntity, (category) => category.products, {
//    onDelete: "CASCADE",nullable:false
//  })
//  @JoinColumn({ name: "id_category"})
//  category?: CategoryEntity;




  // @ManyToOne(() => OrderEntity, (order) => order.products, {
  //   onDelete: "CASCADE",
  // })
  // @JoinColumn({ name: "id_order" })
  // order?: OrderEntity;

  // @ManyToOne(()=>CollectionEntity,(collection)=>collection.products,{ onDelete: 'CASCADE' })
  // @JoinColumn({ name: "id_collection" })
  // collection?:CollectionEntity

  @ManyToMany(() => SizeEntity, (size: SizeEntity) => size.products, {
    nullable: true,
  })
  //    @JoinTable()
  @JoinTable({ name: "product_size" })
  size?: SizeEntity[];

  // @ManyToMany(() => UserEntity, (user: UserEntity) => user.products, {
  //   nullable: true,
  // })
  // @JoinTable({ name: "comment" })
  // users?: UserEntity[];

  @OneToMany(() => ImageEntity, (image) => image.product, { cascade: true })
  images?: ImageEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.product, { cascade: true })
  comments?: CommentEntity[];

}
