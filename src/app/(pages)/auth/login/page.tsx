import { Suspense } from 'react';
import { LoginForm } from '~/features/auth';

const Page = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LoginForm />
		</Suspense>
	);
};

export default Page;
