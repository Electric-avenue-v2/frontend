import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { type FC } from 'react';
import { getProductById } from '~/entities/product/index.server';
import { ProductDetailsWidget } from '~/widgets/product-details';
import { getProductJsonLd, getProductMetadata } from './_lib/product-page-seo';

type ProductPageProps = PageProps<'/product/[slug]/[id]'>;

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
	const { id } = await params;
	const product = await getProductById(id);

	return getProductMetadata(product);
}

const Page: FC<ProductPageProps> = async ({ params }) => {
	const { id, slug } = await params;
	const product = await getProductById(id);

	if (product.slug !== slug) {
		notFound();
	}

	const structuredData = getProductJsonLd(product);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData).replace(/</g, '\\u003c')
				}}
			/>
			<ProductDetailsWidget product={product} />
		</>
	);
};

export default Page;
