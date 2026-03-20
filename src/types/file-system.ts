export type FileNodeType = 'file' | 'folder';

export interface BaseNode {
  id: string;
  name: string;
  type: FileNodeType;
}

export interface FileNode extends BaseNode {
  type: 'file';
}

export interface FolderNode extends BaseNode {
  type: 'folder';
  children?: FileSystemNode[];
}

export type FileSystemNode = FileNode | FolderNode;
