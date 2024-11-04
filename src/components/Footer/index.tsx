import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { categoryArray, infoArray } from '~/constants/footerMenu';
import Menu from '../Menu';

const Footer = () => {
  return (
    <div className='grid grid-cols-1 gap-10 bg-[#1919119] px-10 py-20 md:grid-cols-2 lg:grid-cols-4'>
      <div>
        <h2 className='relative mb-5 border-b border-b-gray-600 py-2 text-base font-bold uppercase tracking-wide text-gray-600 dark:text-white'>
          About us <span className='absolute -bottom-[1.5px] left-0 z-10 inline-block h-1 w-16 bg-red-600'></span>
        </h2>
        <div className='max-w-20'>
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
        <p className='mt-5 max-w-72 text-sm leading-6 tracking-wide text-black dark:text-gray-200'>
          Your ultimate source for discovering and exploring movies from around the world. We bring you the latest, from
          blockbuster hits to hidden gems, with detailed insights on genres, casts, reviews, and more.
        </p>
      </div>
      <Menu
        title='Info'
        items={infoArray}
      />
      <Menu
        title='Category'
        items={categoryArray}
      />
      <div>
        <h2 className='relative mb-5 border-b border-b-gray-600 py-2 text-base font-bold uppercase tracking-wide text-white'>
          Contact us <span className='absolute -bottom-[1.5px] left-0 z-10 inline-block h-1 w-16 bg-red-600'></span>
        </h2>
        <div className='flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300'>
          <p>
            <Phone className='mr-1 inline-block w-4 text-gray-600 dark:text-white' /> <span>+7 (495) 123-4567</span>
          </p>
          <p>
            <Mail className='mr-1 inline-block w-4 text-gray-600 dark:text-white' /> <span>dogman.choli@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
