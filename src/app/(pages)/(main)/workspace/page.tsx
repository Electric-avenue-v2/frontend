import { getMe } from '~/entities/user/index.server';

const Page = async () => {
	const data = await getMe();

	console.log(data);
	return <div>1</div>;
};

export default Page;
