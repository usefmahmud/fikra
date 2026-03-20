export type FileNodeType = "file" | "folder";

export interface BaseNode {
	id: string;
	name: string;
	type: FileNodeType;
}

export interface FileNode extends BaseNode {
	type: "file";
}

export interface FolderNode extends BaseNode {
	type: "folder";
	children?: FileSystemNode[];
}

export type FileSystemNode = FileNode | FolderNode;

export interface ActionButton {
	icon: React.ReactNode;
	label: string;
	onClick: (e: React.MouseEvent, node: FileSystemNode) => void;
}

export interface TreeNodeProps {
	node: FileSystemNode;
	level: number;
	isOpen?: boolean;
	isSelected?: boolean;
	actions?: ActionButton[];
	onSelect?: (node: FileSystemNode) => void;
	onToggle?: () => void;
}
