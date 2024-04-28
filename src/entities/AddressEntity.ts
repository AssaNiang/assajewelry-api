import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { UserEntity } from "./UserEntity";


// @Entity({name: "address", schema: 'public'})
// export class AddressEntity {
//     @PrimaryGeneratedColumn()
//     id?: number;
  
//     @Column({ nullable: false })
//     street?: string;

//     @Column({ nullable: false })
//     city?: string;

//     @Column({ nullable: false })
//     country?: string;

//     @Column({ nullable: false })
//     zip?:number;
 
//     @ManyToOne(()=>UserEntity,(user)=>user.address,{ onDelete: 'CASCADE' })
//     @JoinColumn({ name: "id_user" })
//     user?:UserEntity
// }

              
