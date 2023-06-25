import clsx from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={clsx(
        'flex min-h-screen justify-center align-middle items-center',
        inter.className
      )}
    >
      get started
    </main>
  )
}
