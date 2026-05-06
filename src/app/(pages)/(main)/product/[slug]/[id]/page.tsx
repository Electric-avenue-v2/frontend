import type { FC } from 'react';

interface Props {
	params: Promise<{ id: string }>;
}

const Page: FC<Props> = () => {
	return <div></div>;
};

export default Page;
