import { File } from "lucide-react";
import type { ActionButton, FileNode } from "#/types";
import TreeNode, { EmptyChevron } from "./tree-node";

interface FileNodeItemProps {
	node: FileNode;
	level: number;
	isSelected?: boolean;
	actions?: ActionButton[];
	onRename?: () => void;
	onDelete?: () => void;
	onSelect?: (node: FileNode) => void;
}

const FileNodeItem = ({
	node,
	level,
	isSelected,
	actions,
	onRename,
	onDelete,
	onSelect,
}: FileNodeItemProps) => {
	return (
		<TreeNode
			node={node}
			level={level}
			isSelected={isSelected}
			icon={<File className="size-3.5 fill-muted-foreground stroke-none" />}
			chevron={<EmptyChevron />}
			actions={actions}
			onRename={onRename}
			onDelete={onDelete}
			onSelect={onSelect ? () => onSelect(node) : undefined}
		/>
	);
};

export default FileNodeItem;
