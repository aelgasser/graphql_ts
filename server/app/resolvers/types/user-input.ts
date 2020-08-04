import { IsEmail, Length } from 'class-validator';
import { ObjectId } from 'mongodb';
import { Field, ID, InputType } from 'type-graphql';

import { User } from '../../entities/User';

@InputType()
export class UserInput implements Partial<User> {
    @Field()
    @Length(1, 255)
    username: string;

    @Field()
    @IsEmail()
    email: string;

    @Field(() => ID)
    cart_id: ObjectId;
}