import axios from 'axios';

export default async function imageUpload(file: File): Promise<string> {
  const { data }: { data: { url: string } } = await axios.post('/api/image', {
    name: file.name,
    type: file.type,
  });

  await axios.put(data.url, file, {
    headers: {
      'Content-Type': file.type,
      'Access-Control-Allow-Origin': '*',
    },
  });

  const target = data.url.split('?');
  const response = target[0].replace('s3.ap-northeast-2.amazonaws.com/', '');

  return response;
}
