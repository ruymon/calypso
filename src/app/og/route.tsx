import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  const geistRegularFontData = await fetch(new URL('../../../assets/geist-font/Geist-Regular.otf', import.meta.url)).then((res) => res.arrayBuffer());
  const geistMediumFontData = await fetch(new URL('../../../assets/geist-font/Geist-Medium.otf', import.meta.url)).then((res) => res.arrayBuffer());
  const geistSemiBoldFontData = await fetch(new URL('../../../assets/geist-font/Geist-SemiBold.otf', import.meta.url)).then((res) => res.arrayBuffer());
  const geistBoldFontData = await fetch(new URL('../../../assets/geist-font/Geist-Bold.otf', import.meta.url)).then((res) => res.arrayBuffer());
  const geistBlackFontData = await fetch(new URL('../../../assets/geist-font/Geist-Black.otf', import.meta.url)).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw='w-full h-full flex flex-col justify-between bg-gray-50 p-16'>
        <div tw='w-full flex justify-between items-center'>
          <div tw='flex items-center'>
            <div tw='w-24 h-24 flex items-center justify-center p-0.5 rounded-3xl mr-4'>
              <img src="http://localhost:3000/assets/airline-logos/JJ.png" alt="Airline Logo" tw='flex flex-1' />
            </div>

            <div tw='flex flex-col'>
              <span tw='text-6xl font-extrabold text-gray-900 mb-2.5'>TAM2056</span>
              <span tw='text-2xl text-gray-700'>Latam Airlines &bull; JJ2056</span>
            </div>
          </div>

          <span tw='text-4xl font-black text-gray-800'>Skyscope</span>
        </div>

        <div tw='flex flex-col w-full'>
          <div tw='flex items-center w-full justify-between mb-24'>
            <div tw='flex flex-col w-48'>
              <span tw='text-4xl font-black text-gray-800 mb-1'>SBSP</span>
              <span tw='text-lg font-medium text-gray-500'>CGH</span>
              <span tw='text-lg font-medium text-gray-500'>São Paulo, Brazil 🇧🇷</span>
            </div>

            <div tw='flex-1 bg-gray-200 flex mx-8 rounded-md'>
              <div tw='h-2 w-3/4 bg-green-500 rounded-md' />
            </div>

            <div tw='flex flex-col items-end text-right w-48'>
              <span tw='text-4xl font-black text-gray-800 mb-1'>SBPA</span>
              <span tw='text-lg font-medium text-gray-500'>POA</span>
              <span tw='text-lg font-medium text-gray-500'>Porto Alegre, Brazil 🇧🇷</span>
            </div>
          </div>

          <div tw='w-full flex items-center'>
            <div tw='flex flex-col mr-16'>
              <span tw='text-xl font-semibold text-gray-700 mb-0.5'>A32N</span>
              <span tw='text-lg font-medium text-gray-500'>Aircraft</span>
            </div>

            <div tw='flex flex-col mr-16'>
              <span tw='text-xl font-semibold text-gray-700 mb-0.5'>FL360</span>
              <span tw='text-lg font-medium text-gray-500'>Altitude</span>
            </div>

            <div tw='flex flex-col mr-16'>
              <span tw='text-xl font-semibold text-gray-700 mb-0.5'>N430</span>
              <span tw='text-lg font-medium text-gray-500'>Ground speed</span>
            </div>

            <div tw='flex flex-col mr-16'>
              <span tw='text-xl font-semibold text-gray-700 mb-0.5'>VATSIM</span>
              <span tw='text-lg font-medium text-gray-500'>Network</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Geist',
          data: geistRegularFontData,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Geist',
          data: geistMediumFontData,
          style: 'normal',
          weight: 500,
        },
        {
          name: 'Geist',
          data: geistSemiBoldFontData,
          style: 'normal',
          weight: 600,
        },
        {
          name: 'Geist',
          data: geistBoldFontData,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'Geist',
          data: geistBlackFontData,
          style: 'normal',
          weight: 800,
        }
      ],
      emoji: 'twemoji'
    }
  );
}