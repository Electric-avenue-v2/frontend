import { serverFetcher } from '~/shared/api/server-fetcher';
import { GetMeDocument } from '~/entities/user';

const Page = async () => {
	const data = await serverFetcher(GetMeDocument);

	return <div>1</div>;
};

export default Page;
