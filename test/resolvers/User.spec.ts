import UserResolver from '../../src/api/resolvers/User';
import { expect } from 'chai';

describe('UserResolver tests', () => {
    it('check allUsers', () => {
        const userResolver = new UserResolver();

        expect(userResolver.allUsers()).to.equal('All users')
    })
})