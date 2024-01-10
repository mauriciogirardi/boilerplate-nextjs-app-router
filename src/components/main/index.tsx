'use client'

export type MainProps = {
  title?: string
}

export function Main({ title = 'Boilerplate' }: MainProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-300">{title}</h1>
      <p className="mt-4 max-w-[500px] text-center text-gray-400">
        Next js Boilerplate is the perfect starter code for your project. Build
        your React application with the Next.js framework.
      </p>
    </div>
  )
}
