import { ProductEntity } from "../entities/ProductEntity";
import { Product} from "../models/interfaces/Product";

//sachant que je ne veux pas le id_categorie je fais un mapper pour avoir un object que je souhaite avec mes images et le nom de la categorie pour cela je fais une interface et j'utilise la fonction dans mon service
// export const mapProductEntity = (productEntity: ProductEntity): Product => {
    
export const mapProductEntity = (productEntity: ProductEntity): Product => {
    const product: Product = {
        id: productEntity.id,
        name: productEntity.name,
        price: productEntity.price,
        description: productEntity.description,
        category: productEntity.category ? productEntity.category.name : undefined,
        comment:productEntity.comments ? productEntity.comments.map(comment => ({ comment_text: comment.comment_text!, created_at: comment.created_at! })).filter(comment => comment.comment_text !== undefined) : [],
        image: productEntity.images ? productEntity.images.map(image => image.image_url!).filter(url => url !== undefined) : [],
        size: productEntity.size ? productEntity.size.map(size => size.name).filter(name => name !== undefined) as string[] : []
    };
    return product;
}

 