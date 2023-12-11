'use client';

import { firebaseStorage } from '@devchallenges/lib';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  useToast,
} from '@devchallenges/ui';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { CheckCircle2, Image, ImagePlus } from 'lucide-react';
import NextImage from 'next/image';
import { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader: FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [imgUrl, setImgUrl] = useState<string>();
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setIsUploading(true);
    const imageFile = acceptedFiles[0];
    if (!imageFile) return setIsUploading(false);
    uploadBytes(ref(firebaseStorage, imageFile.name), imageFile).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          setIsUploading(false);
        });
      },
    );
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

  return isUploading ? (
    <UploadProgress />
  ) : imgUrl ? (
    <ImagePreview imgUrl={imgUrl} />
  ) : (
    <Card className='w-[500px]'>
      <CardHeader className='space-y-4 text-center'>
        <CardTitle>Upload your image</CardTitle>
        <CardDescription>File should be jpeg, png ...</CardDescription>
      </CardHeader>
      <CardContent>
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

const UploadProgress: FC = () => (
  <Card className='w-[500px]'>
    <CardContent className='mt-4 space-y-4'>
      <p>Uploading...</p>
      <div className='flex h-1 w-full overflow-x-hidden rounded bg-gray-100'>
        <div className='animate-progress-infinite flex w-full'>
          <div className='bg-primary flex h-full w-[100px] rounded' />
        </div>
      </div>
    </CardContent>
  </Card>
);

const ImagePreview: FC<{ imgUrl: string }> = ({ imgUrl }) => {
  const { toast } = useToast();
  const copyToClibBoard = useCallback(() => {
    // eslint-disable-next-line no-undef
    navigator.clipboard.writeText(imgUrl);
    toast({ description: 'Link copied to clipboard!' });
  }, []);

  return (
    <Card className='w-[500px]'>
      <CardHeader className='space-y-4 text-center'>
        <CardTitle>
          <div className='flex justify-center'>
            <CheckCircle2 className='text-green-600' size={64} />
          </div>
        </CardTitle>
        <p className='font-semibold'>Uploaded Successfully!</p>
      </CardHeader>
      <CardContent>
        <div className='relative h-[300px] w-full rounded'>
          <NextImage
            fill
            src={imgUrl}
            objectFit='cover'
            alt='image'
            style={{ borderRadius: '4px' }}
          />
        </div>
        <div className='mt-6 flex h-11 w-full items-center justify-between rounded-lg border bg-gray-100 px-0.5'>
          <p className='truncate text-sm'>{imgUrl}</p>
          <Button onClick={copyToClibBoard}>Copy link</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { FileUploader };
