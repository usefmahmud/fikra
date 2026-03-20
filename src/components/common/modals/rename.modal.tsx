import { Button } from '#/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '#/components/ui/dialog';
import { Input } from '#/components/ui/input';
import { useState } from 'react';

interface RenameModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  itemName: string;
  itemType: 'file' | 'folder';
  onConfirm: (newName: string) => void;
}

export function RenameModal({
  open,
  onOpenChange,
  itemName,
  itemType,
  onConfirm,
}: RenameModalProps) {
  const [name, setName] = useState(itemName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && name.trim() !== itemName) {
      onConfirm(name.trim());
      onOpenChange(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen) {
      setName(itemName);
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Rename {itemType}</DialogTitle>
          </DialogHeader>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <DialogFooter>
            <Button
              type='button'
              variant='ghost'
              onClick={() => handleOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type='submit'
              disabled={!name.trim() || name.trim() === itemName}
            >
              Rename
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
