'use client';

import clsx from 'clsx';
import { useRef, useState } from 'react';
import type { ComponentProps, FC } from 'react';
import { useSuggestions } from '~/features/search-bar/hooks/suggestions.hooks';
import { useDebounce } from '~/shared/hooks';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '~/shared/ui/command';
import { Input } from '~/shared/ui/input';
import { Popover, PopoverAnchor, PopoverContent } from '~/shared/ui/popover';
import styles from './search-bar.module.css';

type SearchBarProps = ComponentProps<'div'>;

export const SearchBar: FC<SearchBarProps> = ({ className, ...props }) => {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState('');
	const debouncedValue = useDebounce<string>(search);
	const { data } = useSuggestions(debouncedValue);

	const wrapperRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={wrapperRef} className={clsx(styles.wrapper, className)} {...props}>
			<Popover open={open}>
				<Command>
					<PopoverAnchor asChild>
						<Input
							placeholder="Search products..."
							value={search}
							onChange={e => setSearch(e.target.value)}
							onFocus={() => setOpen(true)}
						/>
					</PopoverAnchor>

					<PopoverContent
						className={styles.popover}
						onOpenAutoFocus={e => e.preventDefault()}
						onInteractOutside={e => {
							const target = e.target;

							if (target instanceof Node && wrapperRef.current?.contains(target)) {
								e.preventDefault();
								return;
							}

							setOpen(false);
						}}
					>
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup
								heading={
									data?.searchSuggestions && data.searchSuggestions.length > 0
										? 'Popular'
										: undefined
								}
							>
								{data?.searchSuggestions.map(item => (
									<CommandItem key={item.id} onSelect={() => setOpen(false)}>
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
