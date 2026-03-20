import { type FileNode } from '#/types';
import { File } from 'lucide-react';
import TreeItem from './tree-item';

interface FileItemProps {
  node: FileNode;
  level?: number;
  isSelected?: boolean;
  onSelect?: () => void;
}

const FileItem = ({ node, level = 0, isSelected, onSelect }: FileItemProps) => {
  return (
    <TreeItem
      label={node.name}
      level={level}
      icon={<File className='size-3.5 fill-muted-foreground stroke-none' />}
      isFolder={false}
      isSelected={isSelected}
      onClick={onSelect}
      className={isSelected ? 'font-medium' : ''}
    />
  );
};

export default FileItem;
