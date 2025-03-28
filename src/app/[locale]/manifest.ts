import type { MetadataRoute } from 'next'
export default async function manifest({
  params
}: {
  params: { locale: string }
}): Promise<MetadataRoute.Manifest> {
  const { locale } = await params

  return {
    name: '4Tech Test',
    short_name: '4Tech',
    description: '4Tech Test',
    lang: locale,
    icons: [
      {
        src: 'https://salt.tikicdn.com/ts/upload/2f/51/80/5643672027a54bfa593300f53c91c12a.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'https://salt.tikicdn.com/ts/upload/2f/51/80/5643672027a54bfa593300f53c91c12a.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    theme_color: '#1A94FF',
    background_color: '#1A94FF',
    start_url: `/${locale}/`,
    display: 'standalone',
    orientation: 'portrait',
    related_applications: [
      {
        platform: 'play',
        url: 'https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid',
        id: 'vn.tiki.app.tikiandroid'
      },
      {
        platform: 'itunes',
        url: 'https://apps.apple.com/vn/app/tiki-shopping-fast-shipping/id958100553'
      },
      {
        platform: 'webapp',
        url: `https://4tech-test-chi.vercel.app/${locale}/manifest.json`
      }
    ],
    scope: `/${locale}/`
  }
}
