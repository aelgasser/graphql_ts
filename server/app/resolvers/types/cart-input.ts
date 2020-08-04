import { ObjectId } from 'mongodb';
import { Field, ID, InputType } from 'type-graphql';

import { Cart } from '../../entities/Cart';

@InputType()
export class CartInput implements Partial<Cart> {
    @Field(() => ID)
    products?: ObjectId;
}