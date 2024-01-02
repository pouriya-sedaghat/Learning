import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '../../../utils/db';
import User from '../../../models/user';
import bcrypt from 'bcryptjs';

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    callbacks: {

        async jwt({ token, user }) {
            if (user?._id) token._id = user._id;
            if (user?.isAdmin) token.isAdmin = user.isAdmin;
            return token;
        },
        async session({ session, token }) {
            if (token?._id) session.user._id = token._id;
            if (token?._id) session.user._id = token._id;
            return session;
        }
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                await db.connect();
                const user = await User.findOne({
                    email: credentials.email
                });
                if (user && bcrypt.compareSync(credentials.password, user.password)) {
                    return {
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        isAdmin: user.isAdmin,
                        _id: user._id,
                        image: 'f'
                    }
                }
                throw new Error('Email or password is incorrect');
            }
        })
    ]
})