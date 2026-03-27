import { serverFetcher } from '~/shared/api/server-fetcher';

const me = `
	query Me {
			me {
					id
					email
					firstName
			}
	}
`;

const Page = async () => {
	const data = await serverFetcher<{ users: { id: string; email: string; firstName: string }[] }>(me);
	console.log(data);

	return <div>1</div>;
};

export default Page;
