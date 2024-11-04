import Link from 'next/link';

type MenuProps = {
  title: string;
  items: { title: string; href: string }[];
};

const Menu = ({ title, items }: MenuProps) => {
  return (
    <div>
      <h2 className='relative mb-5 border-b border-b-gray-600 py-2 text-base font-bold uppercase tracking-wide text-white'>
        {title} <span className='absolute -bottom-[1.5px] left-0 z-10 inline-block h-1 w-16 bg-red-600'></span>
      </h2>
      <div className='flex flex-col text-gray-300'>
        {items.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className='hover: group mb-1 flex cursor-pointer items-center gap-x-3 border-b border-b-gray-300 py-1 text-sm text-gray-600 duration-200 hover:border-b-gray-600 hover:text-black dark:border-b-[#222] dark:text-gray-300 dark:hover:border-b-white dark:hover:text-white'
          >
            <span className='inline-flex h-2 w-2 rounded-full border border-red-700 duration-200 group-hover:bg-red-700'></span>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
