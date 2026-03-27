import { Mail, Menu, User } from 'lucide-react';
import { type FC } from 'react';
import { Category } from '~/features/categories';
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

interface MobileMenuProps {
	isAuth: boolean;
}

const authBtns = [
	{
		link: '',
		icon: <Mail className="mr-2 h-4 w-4" />,
		text: 'Messages'
	},
	{
		link: '',
		icon: <User className="mr-2 h-4 w-4" />,
		text: 'Profile'
	}
];

export const MobileMenu: FC<MobileMenuProps> = ({ isAuth }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<Menu className="h-6 w-6" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-[300px] sm:w-[350px]">
				<SheetHeader>
					<SheetTitle>
						<div className="flex justify-center">
							<Logo />
						</div>
					</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>

				<div className="flex flex-col p-3">
					<div className="flex flex-col">
						<div className="w-full [&>button]:w-full [&>button]:justify-start [&>button]:p-4.5">
							<Category />
						</div>
						<Separator className="my-2.5" />

						{isAuth ? (
							authBtns.map((btn, ind) => (
								<Button key={ind} variant="ghost" className="justify-start p-4.5 mb-2">
									{btn.icon}
									{btn.text}
								</Button>
							))
						) : (
							<Button className="w-full">Login</Button>
						)}
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};
