import { Field, InputType } from 'type-graphql';

import { Order } from '../../entities/Order';

@InputType()
export class OrderInput implements Partial<Order> {
    @Field()
    user_id: string;

    @Field()
    paid: boolean;

    @Field()
    date: Date;
}