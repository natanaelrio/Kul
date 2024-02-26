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
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password", placeholder: "password" }
            },
            async authorize(credentials, req) {
                const data = [
                    {
                        email: 'rio@rio',
                        password: 'rio',
                        role: 'admin'
                    },
                    {
                        email: 'satu@satu',
                        password: 'satu',
                        role: 'admin'
                    },
                    {
                        email: 'dua@dua',
                        password: 'dua',
                        role: 'admin'
                    }
                    , {
                        email: 'user@user',
                        password: 'user',
                        role: 'user'
                    }]


                const { email, password } = credentials
                const dataCari = data.find(user => user.email === email)
                const emailData = dataCari.email
                const passwordData = dataCari.password
                const roleData = dataCari.role

                if (email == emailData && password == passwordData) {
                    return { ...dataCari, password: null, role: roleData }
                }
                return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role;
            return session;
        },
    },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }