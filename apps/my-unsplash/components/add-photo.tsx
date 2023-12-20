'use client';

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  useToast,
} from '@devchallenges/ui';
import { Loader2 } from 'lucide-react';
import { FC, useRef, useState } from 'react';

import { addPhoto } from '../lib/actions';

const AddPhoto: FC = () => {
  const { toast } = useToast();
  const [label, setLabel] = useState<string>();
  const [photoURL, setPhotoURL] = useState<string>();
  const [loading, setLoading] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='lg'>Add a photo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new photo</DialogTitle>
        </DialogHeader>
        <div className='space-y-3'>
          <div className='space-y-1'>
            <Label htmlFor='label'>Label</Label>
            <Input
              id='label'
              type='text'
              placeholder='Enter some label text'
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='photoURL'>Photo URL</Label>
            <Input
              id='photoURL'
              type='text'
              placeholder='https://source.unsplash.com/...'
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button ref={closeButtonRef} variant='ghost'>
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={async () => {
              setLoading(true);
              if (!label || !photoURL) {
                toast({
                  variant: 'destructive',
                  title: 'Something went wrong',
                  description: 'Please fill out all fields',
                });
                return setLoading(false);
              }
              const response = await addPhoto(label, photoURL);
              if (response.error) {
                setLoading(false);
                toast({
                  variant: 'destructive',
                  title: 'Something went wrong',
                  description: response.error.message,
                });
                return;
              }
              toast({ description: 'Photo added successfully' });
              setLabel(undefined);
              setPhotoURL(undefined);
              setLoading(false);
              closeButtonRef.current?.click();
            }}
            disabled={loading}
          >
            {loading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { AddPhoto };
