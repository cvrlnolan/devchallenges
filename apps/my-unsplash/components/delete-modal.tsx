'use client';

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  useToast,
} from '@devchallenges/ui';
import { Loader2 } from 'lucide-react';
import { FC, useEffect, useRef, useState } from 'react';

import { deletePhoto } from '../lib/actions';

const DeleteModal: FC<{ id: string }> = ({ id }) => {
  const { toast } = useToast();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isClient, setIsClient] = useState(false); // this is a hack to prevent SSR
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsClient(true); // this is a hack to prevent SSR
  }, []);

  return isClient ? (
    <Dialog>
      <DialogTrigger>
        <Button
          size='sm'
          variant='outline'
          className='text-destructive border-destructive hover:text-primary-foreground hover:bg-destructive/90 rounded-full bg-transparent'
        >
          delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete photo</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this photo?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button ref={closeButtonRef} variant='ghost'>
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant='destructive'
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              const response = await deletePhoto(id);
              if (response.error) {
                setLoading(false);
                toast({
                  variant: 'destructive',
                  title: 'Something went wrong',
                  description: response.error.message,
                });
                return;
              }
              setLoading(false);
              toast({
                title: 'Photo deleted',
                description: 'Photo has been deleted successfully',
              });
              closeButtonRef.current?.click();
            }}
          >
            {loading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
            {loading ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ) : null;
};

export { DeleteModal };
