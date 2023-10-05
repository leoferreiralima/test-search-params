import Link from 'next/link'

export default function Home({searchParams}: { searchParams: {[key: string]: string | string[] | undefined}}) {
  return (
    <main className='min-h-screen flex flex-col space-y-3 items-center py-10'>
      <Link className='underline' href='?param=1'>Link 1</Link>
      <Link className='underline' href='?param=2'>Link 2</Link>
      <Link className='underline' href='?param=3'>Link 3</Link>
      <Link className='underline'href='?param=4'>Link 4</Link>

      <pre>
        {JSON.stringify(searchParams, null, 2)}
      </pre>
    </main>
  )
}
