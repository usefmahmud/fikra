import type { ActionButton, FileSystemNode, FolderNode } from "#/types";
import FileNodeItem from "./file-node";
import FolderNodeItem from "./folder-node";

interface FileTreeProps {
	data: FileSystemNode[];
	level?: number;
	selectedId?: string | null;
	onSelect?: (node: FileSystemNode) => void;
	actions?: (node: FileSystemNode) => ActionButton[];
	onNewFile?: (folder: FolderNode) => void;
	onNewFolder?: (folder: FolderNode) => void;
	onRename?: (node: FileSystemNode) => void;
	onDelete?: (node: FileSystemNode) => void;
	openFolderIds?: Set<string>;
	onToggleFolder?: (folderId: string) => void;
}

const FileTree = ({
	data,
	level = 0,
	selectedId,
	onSelect,
	actions,
	onNewFile,
	onNewFolder,
	onRename,
	onDelete,
	openFolderIds,
	onToggleFolder,
}: FileTreeProps) => {
	return (
		<div className="flex flex-col gap-0.5 w-full">
			{data.map((node) => {
				const isOpen = openFolderIds?.has(node.id);
				const isSelected = selectedId === node.id;
				const nodeActions = actions ? actions(node) : undefined;

				if (node.type === "folder") {
					return (
						<FolderNodeItem
							key={node.id}
							node={node}
							level={level}
							isOpen={isOpen}
							isSelected={isSelected}
							actions={nodeActions}
							onNewFile={onNewFile ? () => onNewFile(node) : undefined}
							onNewFolder={onNewFolder ? () => onNewFolder(node) : undefined}
							onRename={onRename ? () => onRename(node) : undefined}
							onDelete={onDelete ? () => onDelete(node) : undefined}
							onSelect={onSelect}
							onToggle={
								onToggleFolder ? () => onToggleFolder(node.id) : undefined
							}
						>
							{node.children && node.children.length > 0 && (
								<FileTree
									data={node.children}
									level={level + 1}
									selectedId={selectedId}
									onSelect={onSelect}
									actions={actions}
									onNewFile={onNewFile}
									onNewFolder={onNewFolder}
									onRename={onRename}
									onDelete={onDelete}
									openFolderIds={openFolderIds}
									onToggleFolder={onToggleFolder}
								/>
							)}
						</FolderNodeItem>
					);
				}

				return (
					<FileNodeItem
						key={node.id}
						node={node}
						level={level}
						isSelected={isSelected}
						actions={nodeActions}
						onRename={onRename ? () => onRename(node) : undefined}
						onDelete={onDelete ? () => onDelete(node) : undefined}
						onSelect={onSelect}
					/>
				);
			})}
		</div>
	);
};

export default FileTree;
