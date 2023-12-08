'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@devchallenges/ui';
import { Image, ImagePlus } from 'lucide-react';
import { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader: FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    maxFiles: 1,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
  });

  return (
    <Card className='w-[500px]'>
      <CardHeader className='space-y-4 text-center'>
        <CardTitle>Upload your image</CardTitle>
        <CardDescription>File should be jpeg, png ...</CardDescription>
      </CardHeader>
      <CardContent className='justify-center'>
        <div
          className='border-primary flex h-[200px] items-center justify-center rounded-lg border border-dashed bg-gray-100 p-4'
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <div className='space-y-4'>
            {isDragActive ? (
              <>
                <div className='flex w-full justify-center'>
                  <ImagePlus className='text-primary' size={64} />
                </div>
                <p className='text-muted-foreground'>Drop your file here</p>
              </>
            ) : (
              <>
                <div className='flex w-full justify-center'>
                  <Image className='text-primary' size={64} />
                </div>
                <p className='text-muted-foreground'>
                  Drag & Drop your image here
                </p>
              </>
            )}
          </div>
        </div>
        <div className='text-muted-foreground mt-4 flex justify-center'>Or</div>
      </CardContent>
      <CardFooter className='justify-center'>
        <Button onClick={open}>Choose a file</Button>
      </CardFooter>
    </Card>
  );
};

export { FileUploader };
