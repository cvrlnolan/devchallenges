import { FileUploader } from '../components/file-uploader';

export default function Page(): JSX.Element {
  return (
    <div className='flex h-[100vh] w-full items-center justify-center'>
      <FileUploader />
    </div>
  );
}
