import Image from 'next/image';
import Link from 'next/link';
import GenreDropdown from '../GenreDropdown';
import SearchInput from '../SearchInput';
const Header = () => {
  return (
    <div className='flex w-full items-center justify-between bg-main p-4'>
      <div className='max-h-8 max-w-20'>
        <Link href={'/'}>
          <Image
            src='/assets/cinek.png'
            alt='Logo'
            width='200'
            height='100'
            priority={true}
            className='cursor-pointer'
          />
        </Link>
      </div>
      {/* others */}
      <div className='flex items-center space-x-2'>
        <GenreDropdown />
        <SearchInput />
        {/* theme */}
      </div>
    </div>
  );
};

export default Header;
