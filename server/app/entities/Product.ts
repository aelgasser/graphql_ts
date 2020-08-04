import { __Type } from 'graphql';
import { Field, ID, Int, ObjectType } from 'type-graphql';

import { getModelForClass, prop as Property } from '@typegoose/typegoose';
import { Ref } from '../types';
import { Categories } from './Categories';

@ObjectType({ description: 'The product model' })
export class Product {
    @Field(() => ID)
    id: string;

    @Field()
    @Property()
    name: string;

    @Field()
    @Property()
    description: string;


    @Field()
    @Property()
    color: string;

    @Field(_type => Int)
    @Property()
    stock: number;

    @Field(__Type => Int)
    @Property()
    price: number;

    @Field(__Type => String)
    @Property({ ref: Categories })
    category_id: Ref<Categories>;

    _doc?: any;
}

export const ProductModel = getModelForClass(Product);
