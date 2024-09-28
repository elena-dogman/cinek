import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const genreArray = [
  { id: '101', name: 'action' },
  { id: '102', name: 'detective' },
];
const GenreDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center text-sm text-white'>
        Genre <ChevronDown className='ml-1 size-5' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {genreArray.map((item) => (
          <DropdownMenuItem key={item?.id}>
            <Link href={`/genre/${item?.id}?genre=${item.name}`}>{item?.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
