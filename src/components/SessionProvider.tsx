'use client'

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
    children: React.ReactNode;
    session: Session | null;
}

export const SessionProvider = ({ children, session }: Props) => {
    return (
        <Provider>
            {children}
        </Provider>
    );
}