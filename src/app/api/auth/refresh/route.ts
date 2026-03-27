import { type NextRequest, NextResponse } from 'next/server';
import { configService } from '~/shared/config';

export async function GET(request: NextRequest) {
	const refreshToken = request.cookies.get('refreshToken')?.value;

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}

	try {
		const cookies = await Utils.refreshSession(refreshToken);

		if (!cookies) {
			const res = NextResponse.redirect(new URL('/auth/login', request.url));
			Utils.clearAuthCookies(res);
			return res;
		}

		const redirectTo = Utils.getSafeRedirect(request);
		const res = NextResponse.redirect(new URL(redirectTo, request.url));
		Utils.attachCookies(res, cookies);

		return res;
	} catch {
		const res = NextResponse.redirect(new URL('/auth/login', request.url));
		Utils.clearAuthCookies(res);
		return res;
	}
}

export async function POST(request: NextRequest) {
	const refreshToken = request.cookies.get('refreshToken')?.value;

	if (!refreshToken) {
		return NextResponse.json({ ok: false }, { status: 401 });
	}

	try {
		const cookies = await Utils.refreshSession(refreshToken);

		if (!cookies) {
			const res = NextResponse.json({ ok: false }, { status: 401 });
			Utils.clearAuthCookies(res);
			return res;
		}

		const res = NextResponse.json({ ok: true });
		Utils.attachCookies(res, cookies);

		return res;
	} catch {
		const res = NextResponse.json({ ok: false }, { status: 500 });
		Utils.clearAuthCookies(res);
		return res;
	}
}

class Utils {
	static async refreshSession(refreshToken: string) {
		const response = await fetch(configService.getOrThrow('NEXT_PUBLIC_GRAPHQL_ENDPOINT'), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-refresh-token': refreshToken
			},
			body: JSON.stringify({
				query: 'mutation Refresh { refresh { accessToken }}'
			})
		});

		const body = await response.json();

		if (!response.ok || body.errors || !body.data?.refresh) return null;

		const cookies = response.headers.getSetCookie();
		return cookies.length ? cookies : null;
	}

	static clearAuthCookies(res: NextResponse) {
		res.cookies.delete('accessToken');
		res.cookies.delete('refreshToken');
	}

	static attachCookies(res: NextResponse, cookies: string[]) {
		for (const cookie of cookies) {
			res.headers.append('set-cookie', cookie);
		}
	}

	static getSafeRedirect(request: NextRequest) {
		const redirect = request.nextUrl.searchParams.get('redirect');

		if (!redirect || !redirect.startsWith('/')) {
			return '/workspace';
		}

		return redirect;
	}
}
