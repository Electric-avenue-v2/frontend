import { Mail, Search, User } from 'lucide-react';
import Link from 'next/link';
// import { sessionApi } from '~/entities/session';
import { Category } from '~/features/categories';
// import { SearchInput } from '~/features/search';
import { Button } from '~/shared/ui/button/Button';
import { Input } from '~/shared/ui/input';
import { Logo } from '~/shared/ui/logo';
import { MobileMenu } from '~/widgets/header/ui/MobileMenu';

export const Header = async () => {
	// const user = await sessionApi.getSession()
	// const isAuth = !!user
	const isAuth = true;

	console.log(isAuth);

	return (
		<header className="bg-white p-2 rounded-xl shadow-md mt-2">
			<div className="flex items-center justify-around md:gap-4">
				<div className="md:hidden mr-2">
					<MobileMenu isAuth={isAuth} />
				</div>
				<div className="hidden md:flex items-center gap-2">
					<Logo />
					<Category />
				</div>
				<div className="relative w-full max-w-xl">
					<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
					<Input
						type="text"
						placeholder="Search products..."
						className="pl-10 focus-visible:ring-0"
					/>
					{/*<SearchInput />*/}
				</div>
				<div className="hidden md:flex gap-1">
					{isAuth ? (
						<>
							<Button size="icon" variant="link">
								<User />
							</Button>
							<Button size="icon" variant="link">
								<Mail className="color-primary" />
							</Button>
						</>
					) : (
						<Button asChild>
							<Link href="/auth/login">Login</Link>
						</Button>
					)}
				</div>
			</div>
		</header>
	);
};
