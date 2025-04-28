import { cn } from '@/utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'title' | 'text' | 'image' | 'avatar';
}

export const Skeleton = ({ className, variant = 'text', ...props }: SkeletonProps) => {
  const variants = {
    title: 'h-8 w-[250px]',
    text: 'h-4 w-full',
    image: 'h-[200px] w-full',
    avatar: 'h-12 w-12 rounded-full'
  };

  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}; 