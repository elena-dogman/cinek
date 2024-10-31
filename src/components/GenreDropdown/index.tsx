import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { fetchGenres } from '~/lib/getGenres';
import { Genre } from '../../../types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const GenreDropdown = async () => {
  const genres = await fetchGenres();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center text-sm text-white'>
        Жанр <ChevronDown className='ml-1 size-5' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Выберите жанр</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {genres.map((item: Genre) => (
          <DropdownMenuItem key={item?.id}>
            <Link href={`/genre/${item?.id}?genre=${item.genre}`}>{item?.genre}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
