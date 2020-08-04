import { Length } from 'class-validator';
import { ObjectId } from 'mongodb';
import { Field, InputType } from 'type-graphql';

import { Product } from '../../entities/Product';

@InputType()
export class ProductInput implements Partial<Product> {
    @Field()
    name: string;

    @Field()
    @Length(1, 255)
    description: string;

    @Field()
    color: string;

    @Field()
    stock: number;

    @Field()
    price: number;

    @Field(() => String)
    category_id: ObjectId;
}