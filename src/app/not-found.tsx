import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="w-full text-center md:w-3/12">
        <h2 className="text-xl font-bold">Oh no!</h2>
        <p className="my-2">This page not found!.</p>
        <Link href="/" className="mt-4 block text-zinc-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
