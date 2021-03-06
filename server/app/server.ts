import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { connect } from 'mongoose';
import { buildSchema } from 'type-graphql';

import { CategoriesResolver } from './resolvers/categories';
import { ProductResolver } from './resolvers/products';

// import { OrderResolver } from './resolvers/Order';
// import { UserResolver } from './resolvers/User';
// import { CartResolver } from './resolvers/Cart';

const main = async () => {
    const schema = await buildSchema({
        resolvers: [
            CategoriesResolver,
            ProductResolver,
            // UserResolver,
            // CartResolver,
            // OrderResolver
        ],
        emitSchemaFile: true,
        validate: false
    });

    const mongoose = await connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
    await mongoose.connection;

    const server = new ApolloServer({ schema });
    const app = Express();
    server.applyMiddleware({ app });

    app.listen({ port: 3333 }, () => {
        console.log(`Server is listening at http://localhost:3333${server.graphqlPath}`);
    });
}


main().catch(err => {
    console.error(err);
});