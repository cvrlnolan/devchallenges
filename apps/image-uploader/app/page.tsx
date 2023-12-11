import { FileUploader } from '../components/file-uploader';

export default function Page(): JSX.Element {
  return (
    <div className='flex w-full items-center justify-center'>
      <FileUploader />
    </div>
  );
}
