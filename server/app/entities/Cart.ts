import { __Type } from 'graphql';
import { Field, ID, ObjectType } from 'type-graphql';

import { getModelForClass, prop } from '@typegoose/typegoose';
import { Ref } from '../types';
import { Product } from './Product';

@ObjectType({ description: 'The Cart model' })
export class Cart {
    @Field(() => ID)
    id: string;

    @Field(__Type => String)
    @prop({ ref: Product, required: true })
    products: Ref<Product>;

    _doc: any;
}

export const CartModel = getModelForClass(Cart);