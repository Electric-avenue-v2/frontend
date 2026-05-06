import { LayoutGrid, Menu } from 'lucide-react';
import type { ComponentProps, FC } from 'react';
import { useState } from 'react';
import { Button } from '~/shared/ui/button/Button';
import { Logo } from '~/shared/ui/logo';
import { Separator } from '~/shared/ui/separator/Separator';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '~/shared/ui/sheet';
import { HeaderActions } from '~/widgets/header/ui/header-actions/HeaderActions';
import styles from './mobile-menu.module.css';

interface MobileMenuProps extends ComponentProps<'button'> {
	onOpenCategory: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ className, onOpenCategory, ...props }) => {
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const handleCategoryClick = () => {
		setIsSheetOpen(false);
		onOpenCategory();
	};

	return (
		<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className={className} aria-label="Open menu" {...props}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className={styles.sheetContent}>
				<SheetHeader>
					<SheetTitle>
						<Logo />
					</SheetTitle>
					<SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
				</SheetHeader>

				<div className={styles.contentWrapper}>
					<Button onClick={handleCategoryClick}>
						<LayoutGrid className={styles.gridIcon} />
						Catalog
					</Button>

					<Separator className={styles.separator} />

					<HeaderActions
						onClick={() => setIsSheetOpen(false)}
						className={styles.headerActions}
						shouldRenderText
						authButtonProps={{
							className: styles.navBtn,
							size: 'default',
							variant: 'ghost'
						}}
						noAuthButtonProps={{
							className: styles.loginBtn,
							size: 'default',
							variant: 'secondary'
						}}
					/>
				</div>
			</SheetContent>
		</Sheet>
	);
};
