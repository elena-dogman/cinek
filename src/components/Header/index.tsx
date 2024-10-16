import Image from 'next/image';
import Link from 'next/link';
import GenreDropdown from '../GenreDropdown';
import SearchInput from '../SearchInput';
import ThemeToggler from '../ThemeToggler';
const Header = () => {
  return (
    <div className='sticky z-50 flex w-full items-center justify-between gap-4 bg-main p-4 backdrop-blur-2xl transition-colors md:gap-0'>
      <div className='top-0 max-h-8 max-w-20'>
        <Link href={'/'}>
          <Image
            src='/assets/cinek.png'
            alt='Logo'
            width='300'
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
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
