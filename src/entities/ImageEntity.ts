import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { ProductEntity } from "./ProductEntity";


@Entity({name: "image", schema: 'public'})
export class ImageEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ nullable: false })
    image_url?: string;
 
    @ManyToOne(()=>ProductEntity,(product)=>product.images,{ onDelete: 'CASCADE' })
    @JoinColumn({ name: "id_product" })
    product?:ProductEntity

}