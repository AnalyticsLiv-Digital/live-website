import { NextResponse } from 'next/server';

export function middleware(req) {
    const url = req.nextUrl;
    const pathname = url.pathname; 
    const host = req.headers.get('host') || ''; 

    // Only process requests to `/robots.txt`
    if (pathname === '/robots.txt') {

        if (host === 'analyticsliv.com' ) {
            // Let Next.js serve the static `robots.txt` from the public folder
            return NextResponse.next();
        } else {
            // Redirect subdomain requests to the API route for dynamic `robots.txt`
            url.pathname = '/api/robots'; // Rewrite the URL to point to the API route
            return NextResponse.rewrite(url);
        }
    }

    // For all other routes, continue as normal
    return NextResponse.next();
}



export const config = {
    matcher: '/robots.txt', // Apply middleware only to `/robots.txt`
};
