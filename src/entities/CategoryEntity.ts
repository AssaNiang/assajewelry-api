import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./ProductEntity";

@Entity({name: "category", schema: 'public'})
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ nullable: false })
    nom?: string;

    @Column({ nullable: false })
    description?: string;

    @Column({ nullable: false })
    image?: string;
    
    @OneToMany(()=>ProductEntity,(product)=>product.category,{cascade: true})
    products?:ProductEntity[]
    
    // @OneToMany( (product) => product.categorie)
    // products?: ProductEntity[];

    // public deleteProducts(products: ProductEntity[]){
    //     this.products = [];
    //     products.map((product) => product.categorie = undefined);
    // }
}