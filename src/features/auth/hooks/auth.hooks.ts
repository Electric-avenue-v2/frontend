import type { VariablesOf } from '@graphql-typed-document-node/core';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import {
	LoginDocument,
	RegisterDocument,
	ResendOtpDocument,
	VerifyOtpDocument
} from '~/features/auth/api/auth.mutations';
import { AUTH_ERRORS } from '~/features/auth/model/auth.constants';
import { clientFetcher } from '~/shared/api';

export const useLogin = () => {
	type LoginVariables = VariablesOf<typeof LoginDocument>;
	const router = useRouter();

	return useMutation({
		mutationFn: (variables: LoginVariables) => clientFetcher(LoginDocument, variables),
		onSuccess: () => {
			router.push('/');
		},
		onError: (error, variables) => {
			if (error.message.includes(AUTH_ERRORS.UNCONFIRMED_EMAIL)) {
				toast.info('Please confirm your email to continue');

				const email = variables.input.email;
				const params = new URLSearchParams({ email });

				router.push(`/auth/verify?${params.toString()}`);
				return;
			}

			toast.error(error.message);
		}
	});
};

export const useRegister = () => {
	type RegisterVariables = VariablesOf<typeof RegisterDocument>;
	const router = useRouter();

	return useMutation({
		mutationFn: (variables: RegisterVariables) => clientFetcher(RegisterDocument, variables),
		onError: (error, variables) => {
			if (error.message.includes(AUTH_ERRORS.ALREADY_EXISTS)) {
				const params = new URLSearchParams({ email: variables.input.email });
				router.push(`/auth/login?${params.toString()}`);
			}

			toast.error(error.message);
		},
		onSuccess: (_, variables) => {
			const email = variables.input.email;
			const params = new URLSearchParams({ email });

			router.push(`/auth/verify?${params.toString()}`);
			return;
		}
	});
};

export const useVerifyOtp = () => {
	type VerifyOtpVariables = VariablesOf<typeof VerifyOtpDocument>;
	const router = useRouter();

	return useMutation({
		mutationFn: (variables: VerifyOtpVariables) => clientFetcher(VerifyOtpDocument, variables),
		onSuccess: () => {
			toast.success('You have successfully confirmed your email');
			router.push('/auth/login');
		},
		onError: error => toast.error(error.message)
	});
};

export const useResendOtp = () => {
	type ResendOtpVariables = VariablesOf<typeof ResendOtpDocument>;
	return useMutation({
		mutationFn: (variables: ResendOtpVariables) => clientFetcher(ResendOtpDocument, variables),
		onSuccess: () => toast.success('A new verification code has been sent to your email'),
		onError: error => toast.error(error.message)
	});
};
