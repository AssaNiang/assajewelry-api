export interface Product {
    id?: number;
    name?: string;
    price?: number;
    description?: string;
    category?: string;
    // comment?:string[]; 
    comment?: { comment_text: string; created_at: Date; }[];
    image?: string[];
    size?:string[];

}