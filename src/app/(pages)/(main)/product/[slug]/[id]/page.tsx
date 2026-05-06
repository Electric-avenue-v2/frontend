import type { FC } from 'react';

interface Props {
	params: Promise<{ id: string }>;
}

const Page: FC<Props> = ({ params }) => {
	return <div></div>;
};

export default Page;
