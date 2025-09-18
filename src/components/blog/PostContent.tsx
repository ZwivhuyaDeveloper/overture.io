import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import Image from 'next/image';
import { urlFor } from '@/lib/blog';
import type { Table, TableRow, TableCell } from '@/types/blog';

interface PortableTextComponentProps {
  value?: unknown;
  children?: React.ReactNode;
}

interface ImageValue {
  asset?: {
    _ref: string;
    _type: string;
  };
  alt?: string;
  caption?: string;
}

interface LinkMarkProps {
  children?: React.ReactNode;
  value?: {
    href?: string;
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) return null;
      
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    table: ({ value }: { value: Table }) => {
      return (
        <div className="my-8 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
            <tbody>
              {value.rows.map((row: TableRow, rowIndex: number) => (
                <tr key={rowIndex} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  {row.cells.map((cell: TableCell, cellIndex: number) => {
                    const CellTag = cell.isHeader ? 'th' : 'td';
                    return (
                      <CellTag
                        key={cellIndex}
                        className={`
                          border border-gray-200 dark:border-gray-700
                          px-4 py-3 text-left
                          ${cell.isHeader 
                            ? 'bg-gray-50 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white' 
                            : 'text-gray-700 dark:text-gray-300'}
                        `}
                      >
                        <PortableText
                          value={cell.content.flat()}
                          components={portableTextComponents}
                        />
                      </CellTag>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          {value.caption && (
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: PortableTextComponentProps) => (
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: PortableTextComponentProps) => (
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: PortableTextComponentProps) => (
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }: PortableTextComponentProps) => (
      <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-4">
        {children}
      </h4>
    ),
    blockquote: ({ children }: PortableTextComponentProps) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300 my-6">
        {children}
      </blockquote>
    ),
    normal: ({ children }: PortableTextComponentProps) => (
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps) => (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: PortableTextComponentProps) => (
      <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }: LinkMarkProps) => {
      if (!value?.href) return <>{children}</>;
      
      return (
        <a
          href={value.href}
          className="text-blue-600 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: PortableTextComponentProps) => (
      <strong className="font-semibold text-gray-900 dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }: PortableTextComponentProps) => (
      <em className="italic text-gray-700 dark:text-gray-300">
        {children}
      </em>
    ),
  },
};

interface PostContentProps {
  content: PortableTextBlock[];
}

export function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <PortableText
        value={content}
        components={portableTextComponents}
      />
    </div>
  );
}
