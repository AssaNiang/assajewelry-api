import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { SizeEntity } from "./SizeEntity";
import { UserEntity } from "./UserEntity";
import { ImageEntity } from "./ImageEntity";
import { CollectionEntity } from "./CollectionEntity";
import { OrderEntity } from "./OrderEntity";
import { CategoryEntity } from "./CategoryEntity";

@Entity({name: "product", schema: 'public'})
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ nullable: false })
    name?: string;

    @Column({ nullable: false })
    price?:number;

    @Column({ nullable: false })
    description?: string;

   @ManyToOne(()=>CategoryEntity,(category)=>category.products,{ onDelete: 'CASCADE' })
   @JoinColumn({ name: "id_category" })
   category?:CategoryEntity

   @ManyToOne(()=>OrderEntity,(order)=>order.products,{ onDelete: 'CASCADE' })
   @JoinColumn({ name: "id_order" })
   order?:OrderEntity

   @ManyToOne(()=>CollectionEntity,(collection)=>collection.products,{ onDelete: 'CASCADE' })
   @JoinColumn({ name: "id_collection" })
   collection?:CollectionEntity 

   @ManyToMany(()=>SizeEntity,(size:SizeEntity)=>size.products,{ cascade: true, nullable: true })
   @JoinTable()
   size?:SizeEntity[]

   @ManyToMany(()=>UserEntity,(user:UserEntity)=>user.products,{ cascade: true, nullable: true })
   @JoinTable()
   users?:UserEntity[]

   @OneToMany(()=>ImageEntity,(image)=>image.product,{cascade: true})
   images?:ImageEntity[]
}


