import { type FileSystemNode } from '#/types';
import FileItem from './file-item';
import FolderItem from './folder-item';

interface FileTreeProps {
  data: FileSystemNode[];
  level?: number;
}

const FileTree = ({ data, level = 0 }: FileTreeProps) => {
  return (
    <div className='flex flex-col gap-0.5 w-full'>
      {data.map((node) => {
        if (node.type === 'folder') {
          return (
            <FolderItem key={node.id} node={node} level={level}>
              {node.children && node.children.length > 0 && (
                <FileTree data={node.children} level={level + 1} />
              )}
            </FolderItem>
          );
        }

        return <FileItem key={node.id} node={node} level={level} />;
      })}
    </div>
  );
};

export default FileTree;
