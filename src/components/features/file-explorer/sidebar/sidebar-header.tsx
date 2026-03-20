import { Button } from '#/components/ui/button';
import { FilePlus, FolderPlus, ListCollapse } from 'lucide-react';

const SidebarHeader = () => {
  return (
    <div className='flex shrink-0 items-center justify-between px-3 py-2'>
      <span className='text-xs font-semibold text-muted-foreground uppercase tracking-wider'>
        Explorer
      </span>
      <div className='flex items-center gap-0.5'>
        <Button
          variant='ghost'
          size='icon-sm'
          title='New File'
          aria-label='New File'
        >
          <FilePlus />
        </Button>
        <Button
          variant='ghost'
          size='icon-sm'
          title='New Folder'
          aria-label='New Folder'
        >
          <FolderPlus />
        </Button>
        <Button
          variant='ghost'
          size='icon-sm'
          title='Collapse Folders'
          aria-label='Collapse Folders'
        >
          <ListCollapse />
        </Button>
      </div>
    </div>
  );
};

export default SidebarHeader;
