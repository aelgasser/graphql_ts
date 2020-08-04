import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { Categories, CategoriesModel } from '../entities/Categories';
import { CategoriesInput } from './types/categories-input';

@Resolver(Categories)
export class CategoriesResolver {
    @Query(_ => Categories, { nullable: false })
    async returnSingleCategory(@Arg("id") id: string) {
        return await CategoriesModel.findById({ _id: id });
    }

    @Query(_ => [Categories])
    async returnAllCategories() {
        return await CategoriesModel.find();
    }

    @Mutation(_ => Categories)
    async createCategory(@Arg("data") { name, description }: CategoriesInput): Promise<Categories> {
        const category = (await CategoriesModel.create({
            name,
            description,
        })).save();

        return category;
    }

    @Mutation(_ => Boolean)
    async deleteCategory(@Arg("id") id: string) {
        await CategoriesModel.deleteOne({ _id: id });

        return true;
    }
}