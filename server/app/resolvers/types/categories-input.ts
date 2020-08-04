import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

import { Categories } from '../../../app/entities/Categories';

@InputType()
export class CategoriesInput implements Partial<Categories> {
    @Field()
    name: string;

    @Field()
    @Length(1, 255)
    description: string;
}