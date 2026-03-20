import { useState } from "react";
import type { FileSystemNode, FolderNode } from "#/types";
import FileTree from "../file-tree/file-tree";

const DEMO_DATA: FileSystemNode[] = [
	{
		id: "src",
		name: "src",
		type: "folder",
		children: [
			{
				id: "components",
				name: "components",
				type: "folder",
				children: [
					{ id: "button.tsx", name: "button.tsx", type: "file" },
					{ id: "input.tsx", name: "input.tsx", type: "file" },
				],
			},
			{ id: "main.tsx", name: "main.tsx", type: "file" },
			{ id: "router.tsx", name: "router.tsx", type: "file" },
		],
	},
	{ id: "package.json", name: "package.json", type: "file" },
	{ id: "README.md", name: "README.md", type: "file" },
];

const SidebarContent = () => {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [openFolderIds, setOpenFolderIds] = useState<Set<string>>(
		new Set(["src", "components"]),
	);

	const handleSelect = (node: FileSystemNode) => {
		setSelectedId(node.id);
	};

	const handleToggleFolder = (folderId: string) => {
		setOpenFolderIds((prev) => {
			const next = new Set(prev);
			if (next.has(folderId)) {
				next.delete(folderId);
			} else {
				next.add(folderId);
			}
			return next;
		});
	};

	const handleNewFile = (folder: FolderNode) => {
		console.log("New file in:", folder.name);
	};

	const handleNewFolder = (folder: FolderNode) => {
		console.log("New folder in:", folder.name);
	};

	const handleRename = (node: FileSystemNode) => {
		console.log("Rename:", node.name);
	};

	const handleDelete = (node: FileSystemNode) => {
		console.log("Delete:", node.name);
	};

	return (
		<div className="flex-1 overflow-y-auto overflow-x-hidden p-2">
			<FileTree
				data={DEMO_DATA}
				selectedId={selectedId}
				onSelect={handleSelect}
				onToggleFolder={handleToggleFolder}
				openFolderIds={openFolderIds}
				onNewFile={handleNewFile}
				onNewFolder={handleNewFolder}
				onRename={handleRename}
				onDelete={handleDelete}
			/>
		</div>
	);
};

export default SidebarContent;
