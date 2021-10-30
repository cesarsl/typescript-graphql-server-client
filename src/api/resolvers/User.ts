import {
    Arg,
    FieldResolver,
    Query,
    Mutation,
    Resolver,
    Root
} from 'type-graphql';
import User from '../entity/User';

@Resolver(of => User)
export default class {
    @Query(() => String)
    allUsers() {
        return "All users"
    }
}
