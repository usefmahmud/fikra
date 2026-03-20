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

interface NewFolderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (foldername: string) => void;
}

export function NewFolderModal({
  open,
  onOpenChange,
  onConfirm,
}: NewFolderModalProps) {
  const [foldername, setFoldername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (foldername.trim()) {
      onConfirm(foldername.trim());
      setFoldername('');
      onOpenChange(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setFoldername('');
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>New Folder</DialogTitle>
          </DialogHeader>
          <Input
            value={foldername}
            onChange={(e) => setFoldername(e.target.value)}
            placeholder='folder name'
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
            <Button type='submit' disabled={!foldername.trim()}>
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
