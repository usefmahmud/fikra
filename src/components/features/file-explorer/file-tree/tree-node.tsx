import { cn } from '#/lib/utils';
import type { TreeNodeProps } from '#/types';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { FileTreeContextMenu } from './file-tree-context-menu';

interface TreeNodeExtendedProps extends Omit<TreeNodeProps, 'onContextMenu'> {
  icon?: React.ReactNode;
  chevron?: React.ReactNode;
  className?: string;
  onNewFile?: () => void;
  onNewFolder?: () => void;
  onRename?: () => void;
  onDelete?: () => void;
}

const TreeNode = ({
  node,
  level,
  isSelected = false,
  icon,
  chevron,
  onSelect,
  onToggle,
  onNewFile,
  onNewFolder,
  onRename,
  onDelete,
  className,
}: TreeNodeExtendedProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggle) {
      onToggle();
    }
    if (onSelect) {
      onSelect(node);
    }
  };

  const content = (
    <button
      type='button'
      className={cn(
        'group flex items-center gap-1.5 cursor-pointer rounded-sm px-1.5 py-1 text-sm transition-colors w-full text-left',
        isSelected
          ? 'bg-accent text-accent-foreground'
          : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground',
        className
      )}
      style={{ paddingLeft: `${level * 12 + 6}px` }}
      onClick={handleClick}
    >
      <span className='flex size-4 shrink-0 items-center justify-center'>
        {chevron}
      </span>
      {icon && (
        <span className='flex size-4 shrink-0 items-center justify-center'>
          {icon}
        </span>
      )}
      <span className='truncate flex-1'>{node.name}</span>
    </button>
  );

  return (
    <FileTreeContextMenu
      node={node}
      onNewFile={onNewFile}
      onNewFolder={onNewFolder}
      onRename={onRename}
      onDelete={onDelete}
    >
      {content}
    </FileTreeContextMenu>
  );
};

export const FolderChevron = ({ isOpen }: { isOpen: boolean }) =>
  isOpen ? (
    <ChevronDown className='size-3.5 opacity-70' />
  ) : (
    <ChevronRight className='size-3.5 opacity-70' />
  );

export const EmptyChevron = () => <span className='size-3.5' />;

export default TreeNode;
