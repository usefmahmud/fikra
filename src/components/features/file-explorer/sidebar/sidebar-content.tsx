import { type FileSystemNode } from '#/types';
import FileTree from '../file-tree/file-tree';

const DEMO_DATA: FileSystemNode[] = [
  {
    id: 'src',
    name: 'src',
    type: 'folder',
    children: [
      {
        id: 'components',
        name: 'components',
        type: 'folder',
        children: [
          { id: 'button.tsx', name: 'button.tsx', type: 'file' },
          { id: 'input.tsx', name: 'input.tsx', type: 'file' },
        ],
      },
      { id: 'main.tsx', name: 'main.tsx', type: 'file' },
      { id: 'router.tsx', name: 'router.tsx', type: 'file' },
    ],
  },
  { id: 'package.json', name: 'package.json', type: 'file' },
  { id: 'README.md', name: 'README.md', type: 'file' },
];

const SidebarContent = () => {
  return (
    <div className='flex-1 overflow-y-auto overflow-x-hidden p-2'>
      <FileTree data={DEMO_DATA} />
    </div>
  );
};

export default SidebarContent;
