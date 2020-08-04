import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';

import { Categories, CategoriesModel } from '../entities/Categories';
import { Product, ProductModel } from '../entities/Product';
import { ProductInput } from '../resolvers/types/products-input';

@Resolver(Product)
export class ProductResolver {
    @Query(_ => Product, { nullable: false })
    async returnSingleProduct(@Arg("id") id: string) {
        return await ProductModel.findById({ _id: id });
    }

    @Query(_ => [Product])
    async returnAllProducts() {
        return await ProductModel.find();
    }

    @Mutation(_ => Product)
    async createProduct(@Arg("data") { name, description, color, stock, price, category_id }: ProductInput): Promise<Product> {
        const product = (await ProductModel.create({
            name,
            description,
            color,
            stock,
            price,
            category_id
        })).save();

        return product;
    }

    @Mutation(_ => Boolean)
    async deleteProduct(@Arg("id") id: string) {
        await ProductModel.deleteOne({ id });
        return true;
    }

    @FieldResolver(_ => Categories)
    async category(@Root() product: Product): Promise<Categories | null> {
        return (await CategoriesModel.findById(product.category_id));
    }
}