import { type FolderNode } from '#/types';
import { Folder, FolderOpen } from 'lucide-react';
import { useState } from 'react';
import TreeItem from './tree-item';

interface FolderItemProps {
  node: FolderNode;
  level?: number;
  isOpen?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
}

const FolderItem = ({
  node,
  level = 0,
  isOpen: initialOpen = false,
  onToggle,
  children,
}: FolderItemProps) => {
  const [internalOpen, setInternalOpen] = useState(initialOpen);

  const isOpen = onToggle ? initialOpen : internalOpen;
  const toggleOpen = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <div>
      <TreeItem
        label={node.name}
        level={level}
        icon={
          isOpen ? (
            <FolderOpen className='size-3.5 stroke-blue-500' />
          ) : (
            <Folder className='size-3.5 fill-blue-500 stroke-none' />
          )
        }
        isFolder={true}
        isOpen={isOpen}
        onToggle={toggleOpen}
        className='font-medium'
      />
      {isOpen && <div className='flex flex-col'>{children}</div>}
    </div>
  );
};

export default FolderItem;
