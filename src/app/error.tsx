'use client'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="w-full md:w-3/12">
        <h2 className="text-xl font-bold">Oh no!</h2>
        <p className="my-2">
          There was an issue with our storefront. This could be a temporary
          issue, please try your action again.
        </p>
        <button
          className="mx-auto mt-6 flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-3 font-bold tracking-wide text-black hover:opacity-90"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
