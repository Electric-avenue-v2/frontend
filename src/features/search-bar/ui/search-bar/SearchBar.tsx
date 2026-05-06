'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { ComponentProps, FC } from 'react';
import { useSuggestions } from '~/features/search-bar/hooks/suggestions.hooks';
import { useDebounce } from '~/shared/hooks';
import { Button } from '~/shared/ui/button';
import { Command, CommandGroup, CommandItem, CommandList } from '~/shared/ui/command';
import { Input } from '~/shared/ui/input';
import { Popover, PopoverAnchor, PopoverContent } from '~/shared/ui/popover';
import styles from './search-bar.module.css';

type SearchBarProps = ComponentProps<'div'>;

export const SearchBar: FC<SearchBarProps> = ({ className, ...props }) => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState('');
	const debouncedValue = useDebounce<string>(search);
	const { data } = useSuggestions(debouncedValue);

	const goToSearch = (value: string) => {
		const q = value.trim();
		if (!q) return;

		setOpen(false);
		router.push(`/search?q=${encodeURIComponent(q)}`);
	};

	const hasSuggestions = (data?.searchSuggestions?.length ?? 0) > 0;
	const shouldShowPopover = open && search.length > 0 && hasSuggestions;

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<Popover open={shouldShowPopover} onOpenChange={setOpen}>
				<Command className="overflow-visible">
					<PopoverAnchor asChild>
						<div className={styles.inputWrapper}>
							<Input
								placeholder="Search products..."
								value={search}
								className={styles.input}
								onChange={e => {
									setSearch(e.target.value);
									if (!open) setOpen(true);
								}}
								onFocus={() => setOpen(true)}
								onKeyDown={e => {
									if (e.key === 'Enter') goToSearch(search);
								}}
							/>
							<Button
								type="button"
								variant='ghost'
								size="icon"
								className={styles.searchButton}
								onClick={() => goToSearch(search)}
								aria-label="Search"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle cx="11" cy="11" r="8" />
									<path d="m21 21-4.3-4.3" />
								</svg>
							</Button>
						</div>
					</PopoverAnchor>

					<PopoverContent
						className={clsx(styles.popover, 'p-0')}
						onOpenAutoFocus={e => e.preventDefault()}
						onCloseAutoFocus={e => e.preventDefault()}
						align="start"
					>
						<CommandList>
							<CommandGroup heading="Popular">
								{data?.searchSuggestions.map(item => (
									<CommandItem
										key={item.id}
										value={item.title}
										onSelect={() => goToSearch(item.title)}
									>
										{item.title}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</PopoverContent>
				</Command>
			</Popover>
		</div>
	);
};