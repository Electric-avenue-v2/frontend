import clsx from 'clsx';
import { Loader2 } from 'lucide-react';
import type { FC } from 'react';
import styles from './loader.module.css';

interface LoaderProps {
	pageLoad?: boolean;
}

export const Loader: FC<LoaderProps> = ({ pageLoad }) => {
	return <Loader2 className={clsx(styles.loader, pageLoad && styles.pageLoad)} size={40} />;
};
