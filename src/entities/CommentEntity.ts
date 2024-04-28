import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./ProductEntity";
import { UserEntity } from "./UserEntity";

@Entity({name: "comment", schema: 'public'})
export class CommentEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ nullable: false })
    comment_text?: string;

    // @Column({ nullable: false })
    // created_at?: Date;
    @Column({ nullable: false, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at?: Date;

    // @Column({ nullable: false })
    // image?: string;
    
    // @OneToMany(()=>ProductEntity,(product)=>product.category,{cascade: true})
    // products?:ProductEntity[];

    @ManyToOne(() => ProductEntity, (product) => product.comments, {
        onDelete: "CASCADE"
      })
      @JoinColumn({ name: "id_product"})
      product?: ProductEntity;

    @ManyToOne(() => UserEntity, (user) => user.comments, {
        onDelete: "CASCADE"
      })
      @JoinColumn({ name: "id_user"})
      user?: UserEntity;
}