import { FilePlus, FolderPlus, Pencil, Trash } from "@phosphor-icons/react";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "#/components/ui/context-menu";
import type { FileSystemNode } from "#/types";

interface FileTreeContextMenuProps {
	children: React.ReactNode;
	node: FileSystemNode;
	onNewFile?: () => void;
	onNewFolder?: () => void;
	onRename?: () => void;
	onDelete?: () => void;
}

export function FileTreeContextMenu({
	children,
	node,
	onNewFile,
	onNewFolder,
	onRename,
	onDelete,
}: FileTreeContextMenuProps) {
	const isFolder = node.type === "folder";

	return (
		<ContextMenu>
			<ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
			<ContextMenuContent>
				{isFolder && (
					<>
						<ContextMenuItem onClick={onNewFile}>
							<FilePlus className="size-4" />
							<span>New File</span>
						</ContextMenuItem>
						<ContextMenuItem onClick={onNewFolder}>
							<FolderPlus className="size-4" />
							<span>New Folder</span>
						</ContextMenuItem>
						<ContextMenuSeparator />
					</>
				)}
				<ContextMenuItem onClick={onRename}>
					<Pencil className="size-4" />
					<span>Rename</span>
				</ContextMenuItem>
				<ContextMenuItem variant="destructive" onClick={onDelete}>
					<Trash className="size-4" />
					<span>Delete</span>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	);
}
