export const idJsonObject = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: '4Tech',
  image: {
    '@type': 'ImageObject',
    url: 'https://salt.tikicdn.com/cache/w500/ts/upload/c0/8b/46/c3f0dc850dd93bfa7af7ada0cbd75dc0.png',
    width: 1080,
    height: 1080
  },
  telephone: '19006035',
  url: '4tech-test-chi.vercel.app',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '52 Ut Tich, Ward 4, Tan Binh District, Ho Chi Minh City',
    addressLocality: 'DA NANG',
    postalCode: '700000',
    addressRegion: 'DA NANG',
    addressCountry: 'VN'
  },
  priceRange: '1000 - 1000000000',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '08:00',
      closes: '21:00'
    }
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '10.79664498748942',
    longitude: '106.65856519879867'
  }
}
