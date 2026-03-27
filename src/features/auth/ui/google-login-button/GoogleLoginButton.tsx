'use client';

import { type CodeResponse, useGoogleLogin } from '@react-oauth/google';
import { Button } from '~/shared/ui/button/Button';
import styles from './google-login-btn.module.css';
import { GoogleIcon } from '~/shared/icons/GoogleIcon';

type GoogleAuthCodeResponse = Omit<CodeResponse, 'error' | 'error_description' | 'error_uri'>;

export const GoogleLoginButton = () => {
	const login = useGoogleLogin({
		flow: 'auth-code',
		onSuccess: (codeResponse: GoogleAuthCodeResponse) => {
			console.log('Auth code:', codeResponse.code);
		},
		onError: error => {
			console.error('Google login failed:', error);
		}
	});

	return (
		<Button className={styles.btn} type="button" variant="outline" onClick={() => login()}>
			<GoogleIcon className={styles.icon} />
			Sign in with Google
		</Button>
	);
};
