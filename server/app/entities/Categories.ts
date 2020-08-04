import { Field, ID, ObjectType } from 'type-graphql';

import { getModelForClass, prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'The Categories model' })
export class Categories {
    @Field(() => ID)
    id: string;

    @Field()
    @Property()
    name: string;

    @Field()
    @Property()
    description: string;
}

export const CategoriesModel = getModelForClass(Categories);