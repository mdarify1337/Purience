import { cva } from 'class-variance-authority';

export const cn = (...classNames: string[]) => {
  return classNames.filter(Boolean).join(' ');
};

// Example of using cva for conditional class names:
export const buttonStyles = cva(
  'px-4 py-2 rounded-md', // default styles
  {
    variants: {
      color: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-500 text-black',
      },
      size: {
        small: 'text-sm',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      color: 'primary', // default color variant
      size: 'small',    // default size variant
    },
  }
);