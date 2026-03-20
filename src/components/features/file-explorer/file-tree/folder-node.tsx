import { Folder, FolderOpen } from "lucide-react";
import { useState } from "react";
import type { ActionButton, FolderNode } from "#/types";
import TreeNode, { FolderChevron } from "./tree-node";

interface FolderNodeItemProps {
	node: FolderNode;
	level: number;
	isOpen?: boolean;
	isSelected?: boolean;
	actions?: ActionButton[];
	onNewFile?: () => void;
	onNewFolder?: () => void;
	onRename?: () => void;
	onDelete?: () => void;
	onSelect?: (node: FolderNode) => void;
	onToggle?: () => void;
	children?: React.ReactNode;
}

const FolderNodeItem = ({
	node,
	level,
	isOpen: controlledOpen,
	isSelected,
	actions,
	onNewFile,
	onNewFolder,
	onRename,
	onDelete,
	onSelect,
	onToggle,
	children,
}: FolderNodeItemProps) => {
	const [internalOpen, setInternalOpen] = useState(false);

	const isOpen = onToggle !== undefined ? controlledOpen : internalOpen;

	const handleToggle = () => {
		if (onToggle) {
			onToggle();
		} else {
			setInternalOpen((prev) => !prev);
		}
	};

	return (
		<div>
			<TreeNode
				node={node}
				level={level}
				isSelected={isSelected}
				icon={
					isOpen ? (
						<FolderOpen className="size-3.5 stroke-blue-500" />
					) : (
						<Folder className="size-3.5 fill-blue-500 stroke-none" />
					)
				}
				chevron={<FolderChevron isOpen={isOpen ?? false} />}
				actions={actions}
				onNewFile={onNewFile}
				onNewFolder={onNewFolder}
				onRename={onRename}
				onDelete={onDelete}
				onSelect={onSelect ? () => onSelect(node) : undefined}
				onToggle={handleToggle}
				className="font-medium"
			/>
			{isOpen && children}
		</div>
	);
};

export default FolderNodeItem;
