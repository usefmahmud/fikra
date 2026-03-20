import { cn } from '#/lib/utils';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface TreeItemProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: number;
  label: string;
  icon?: React.ReactNode;
  isFolder?: boolean;
  isOpen?: boolean;
  isSelected?: boolean;
  onToggle?: () => void;
}

const TreeItem = ({
  level = 0,
  label,
  icon,
  isFolder = false,
  isOpen = false,
  isSelected = false,
  onToggle,
  className,
  ...props
}: TreeItemProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-1.5 cursor-pointer rounded-sm px-1.5 py-1 text-sm transition-colors',
        isSelected
          ? 'bg-accent text-accent-foreground'
          : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground',
        className
      )}
      style={{ paddingLeft: `${level * 12 + 6}px` }}
      onClick={onToggle}
      {...props}
    >
      <span className='flex size-4 shrink-0 items-center justify-center'>
        {isFolder ? (
          isOpen ? (
            <ChevronDown className='size-3.5 opacity-70' />
          ) : (
            <ChevronRight className='size-3.5 opacity-70' />
          )
        ) : null}
      </span>
      {icon && (
        <span className='flex size-4 shrink-0 items-center justify-center'>
          {icon}
        </span>
      )}
      <span className='truncate flex-1'>{label}</span>
      {/* Action buttons could go here */}
    </div>
  );
};

export default TreeItem;
