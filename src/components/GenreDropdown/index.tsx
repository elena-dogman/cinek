import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { getGenres } from '~/lib/getGenres';
import { Genres } from '../../../types';

const GenreDropDown = async () => {
  let data: Genres;

  try {
    data = await getGenres();
  } catch (error) {
    console.error('Error fetching genres:', error);
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center text-sm font-medium text-white'>
        Genre{' '}
        <ChevronDown
          className='ml-1'
          size={20}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data?.genres?.map((genre) => (
          <DropdownMenuItem key={genre?.id}>
            <Link href={`/genre/${genre?.id}?genre=${genre.name}`}>{genre?.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropDown;
