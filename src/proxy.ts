import { errors, jwtVerify } from 'jose';
import { type NextRequest, NextResponse } from 'next/server';

const secret = new TextEncoder().encode(process.env.AT_SECRET);

type AuthStatus = 'authenticated' | 'expired' | 'unauthenticated';

async function getAuthStatus(req: NextRequest): Promise<AuthStatus> {
	const accessToken = req.cookies.get('accessToken')?.value;

	if (!accessToken) {
		const refreshToken = req.cookies.get('refreshToken')?.value;
		return refreshToken ? 'expired' : 'unauthenticated';
	}
	try {
		await jwtVerify(accessToken, secret);
		return 'authenticated';
	} catch (e) {
		if (e instanceof errors.JWTExpired) {
			const refreshToken = req.cookies.get('refreshToken')?.value;
			return refreshToken ? 'expired' : 'unauthenticated';
		}
		return 'unauthenticated';
	}
}

export default async function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const status = await getAuthStatus(request);

	if (pathname.startsWith('/auth')) {
		if (status === 'authenticated') {
			return NextResponse.redirect(new URL('/', request.url));
		}

		return NextResponse.next(); // expired & unauthenticated
	}

	if (pathname.startsWith('/workspace')) {
		if (status === 'authenticated') {
			return NextResponse.next();
		}

		if (status === 'expired') {
			const refreshUrl = new URL('/api/auth/refresh', request.url);
			refreshUrl.searchParams.set('redirect', pathname);
			return NextResponse.redirect(refreshUrl);
		}

		return NextResponse.redirect(new URL('/auth/login', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/auth/:path*', '/workspace/:path*']
};
