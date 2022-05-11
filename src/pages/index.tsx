import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  const place = {
    id: '1',
    name: 'Fortaleza',
    slug: 'fortaleza',
    location: {
      latitude: -3.75,
      longitude: -38.5
    }
  }
  return <Map places={[place]} />
}
