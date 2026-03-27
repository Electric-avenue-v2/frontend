// 'use client'
//
// import { useEffect, useState } from "react"
// import {
//   Command,
//   CommandInput,
//   CommandList,
//   CommandItem,
//   CommandEmpty,
// } from "~/shared/ui/command"
// import { useDebounce } from "~/shared/hooks/use-debounce"
//
// const SearchInput = ()=> {
//   const [query, setQuery] = useState("")
//   const [items, setItems] = useState([])
//   const [loading, setLoading] = useState(false)
//
//   const debouncedQuery = useDebounce(query, 300)
//
//   useEffect(() => {
//     if (!debouncedQuery) {
//       setItems([])
//       return
//     }
//
//     setLoading(true)
//     fetch(`/api/search?q=${debouncedQuery}`)
//       .then(res => res.json())
//       .then(setItems)
//       .finally(() => setLoading(false))
//   }, [debouncedQuery])
//
//   return (
//     <Command shouldFilter={false}>
//       <CommandInput
//         value={query}
//         onValueChange={setQuery}
//         placeholder="Search products..."
//       />
//
//       <CommandList className='absolute'>
//         {loading && <div className="px-3 py-2 text-sm">Loading...</div>}
//         {!loading && items.length === 0 && (
//           <CommandEmpty>No results</CommandEmpty>
//         )}
//
//         {items.map(item => (
//           <CommandItem
//             key={item.id}
//             value={item.name}
//             onSelect={() => console.log(item)}
//           >
//             {item.name}
//           </CommandItem>
//         ))}
//       </CommandList>
//     </Command>
//   )
// }
//
// export default SearchInput

const SearchInput = () => {
	return <div></div>;
};

export default SearchInput;
