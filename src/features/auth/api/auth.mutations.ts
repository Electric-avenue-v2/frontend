import { graphql } from '~/shared/api/gql';

export const RegisterDocument = graphql(`
	mutation Register($input: RegisterInput!) {
		register(input: $input) {
			userId
		}
	}
`);

export const LoginDocument = graphql(`
	mutation Login($input: LoginInput!) {
		login(input: $input) {
			accessToken
			refreshToken
		}
	}
`);

export const LogoutDocument = graphql(`
	mutation Logout {
		logout {
			message
		}
	}
`);

export const VerifyOtpDocument = graphql(`
	mutation VerifyOtp($input: VerifyOtpInput!) {
		verifyOtp(input: $input) {
			message
		}
	}
`);

export const ResendOtpDocument = graphql(`
	mutation ResendOtp($input: ResendOtpInput!) {
		resendOtp(input: $input) {
			message
		}
	}
`);
