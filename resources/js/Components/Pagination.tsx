import { Link } from '@inertiajs/react';
import classNames from 'classnames';


interface PaginationProps {
  links: PaginationItem[];
}

export default function Pagination({ links = [] }: PaginationProps) {

  if (links.length === 3) return null;

  return (
    <div className="flex flex-wrap mt-6 -mb-1">
      {links?.map(link => {
        return link?.url === null ? (
          <PageInactive key={link.label} label={link.label} />
        ) : (
          <PaginationItem key={link.label} {...link} />
        );
      })}
    </div>
  );
}

interface PaginationItem {
  url: null | string;
  label: string;
  active: boolean;
}

function PaginationItem({ active, label, url }: PaginationItem) {

  const className = classNames(
    [
      'mr-1 mb-4',
      'px-4 py-2',
      'border border-solid border-gray-300 rounded',
      'text-sm',
      'hover:bg-blue-300',
      'focus:outline-none focus:border-indigo-700 focus:text-indigo-700'
    ],
    {
      'bg-blue-900 text-white': active
    }
  );

  return (
    <Link className={className} href={url as string}>
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </Link>
  );
}

function PageInactive({ label }: Pick<PaginationItem, 'label'>) {
  const className = classNames(
    'mr-1 mb-4',
    'px-4 py-2',
    'border border-solid border-gray-300 rounded',
    'text-sm',
    'hover:bg-white',
    'focus:outline-none focus:border-indigo-700 focus:text-indigo-700'
  );

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: label }} />
  );
}
