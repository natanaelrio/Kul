import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials
                if (email !== 'rio@rio' || password !== 'rio') {
                    return null
                }
                return { id: '1234', name: 'rio', email: 'rio@kwkw.com' }
            }
        })
    ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }