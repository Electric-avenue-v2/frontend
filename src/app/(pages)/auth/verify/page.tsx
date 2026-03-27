import { redirect } from 'next/navigation';
import { ConfirmationForm } from '~/features/auth';

const Page = async (props: PageProps<'/auth/verify'>) => {
	const searchParams = await props.searchParams;
	const { email } = searchParams;

	if (typeof email !== 'string') {
		return redirect('/auth/login');
	}

	return <ConfirmationForm email={email} />;
};

export default Page;
