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

interface NewFileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (filename: string) => void;
}

export function NewFileModal({
  open,
  onOpenChange,
  onConfirm,
}: NewFileModalProps) {
  const [filename, setFilename] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filename.trim()) {
      onConfirm(filename.trim());
      setFilename('');
      onOpenChange(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setFilename('');
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>New File</DialogTitle>
          </DialogHeader>
          <div className='flex items-center gap-1'>
            <Input
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder='filename'
              autoFocus
            />
            <span className='text-sm text-muted-foreground'>.md</span>
          </div>
          <DialogFooter>
            <Button
              type='button'
              variant='ghost'
              onClick={() => handleOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type='submit' disabled={!filename.trim()}>
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
