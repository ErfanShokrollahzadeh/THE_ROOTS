import React from 'react';
import './globals.css';

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1>My Vercel Next App</h1>
                </header>
                <main>{children}</main>
                <footer>
                    <p>© 2023 My Vercel Next App</p>
                </footer>
            </body>
        </html>
    );
};

export default Layout;