import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMagnifyingGlassPlus, HiOutlineEye } from 'react-icons/hi2';

const BookCard = ({ book }) => {
  // If book or book.volumeInfo is not provided, set default values
  if (!book || !book.volumeInfo) {
    const volumeInfo = {
      title: 'UNKNOWN TITLE',
      authors: ['UNKNOWN AUTHOR'],
      imageLinks: {
        thumbnail: '/default-thumbnail.jpg',
      },
    };
    book = { volumeInfo: volumeInfo };
  }

  const { volumeInfo } = book;

  return (
    <div className='transition-transform duration-500 hover:scale-105 w-full m-3' style={{ border: '2px solid #cfcfcf', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
      {/* The book cover */}
      <div className='relative flex items-center justify-center' style={{ width: '100%', height: '230px' }}>
        <Link href={`/${book.id}`}>
          <Image
            src={volumeInfo.imageLinks?.thumbnail || '/default-thumbnail.jpg'}
            alt={`Cover of ${volumeInfo.title}`}
            width="150"
            height="150"
            className='mx-auto'

          />
        </Link>
      </div>
      {/* The book title and author */}
      <div className='px-4 py-3 text-center'>
        <p className='text-md font-semibold tracking-tight text-gray-900' style={{ lineHeight: '1.4', marginBottom: '0.5rem' }}>
          {/* Truncate the title if it's too long */}
          {volumeInfo.title.length > 30
            ? `${volumeInfo.title.slice(0, 30).toUpperCase()}...`
            : volumeInfo.title.toUpperCase()}
        </p>
        <p className='text-sm text-gray-700' style={{ lineHeight: '1.4', marginBottom: '1rem' }}>
          {/* List the author(s) or show "Unknown author" */}
          {volumeInfo.authors
            ? volumeInfo.authors
              .map((author) => author.toUpperCase())
              .join(', ')
              .slice(0, 40) +
            (volumeInfo.authors.join(', ').length > 40 ? '...' : '')
            : 'UNKNOWN AUTHOR'}
        </p>
        {/* Buttons for preview and showing details */}
        <div className='flex items-center justify-center gap-2'>
          <Link href={`${volumeInfo.previewLink}`} rel="noopener noreferrer" target="_blank">
            <button
              type='button'
              className='inline-flex items-center justify-center text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg px-4 py-2'
              style={{ transition: 'background-color 0.3s, box-shadow 0.3s' }}
              title='Preview'
            >
              {/* Icon for preview button */}
              <HiOutlineEye className='text-xl' />
            </button>
          </Link>
          <Link href={`/${book.id}`}>
            <button
              type='button'
              className='inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg px-4 py-2'
              style={{ transition: 'background-color 0.3s, box-shadow 0.3s' }}
              title='Show Detail'
            >
              {/* Icon for showing detail button */}
              <HiOutlineMagnifyingGlassPlus className='text-xl' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
