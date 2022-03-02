import React from 'react'
import Link from 'next/link'
import { Categories as ICategories } from '../../../interfaces/Category'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import GithubLogo from '../../../public/github-logo--dark.svg'
const Header = ({ categories }: { categories: ICategories }) => {
  const { data: session } = useSession()
  return (
    <div className="container mx-auto mb-8 px-0 lg:px-8">
      <div className="flex w-full items-center justify-between border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-xl font-bold text-white sm:text-3xl md:text-4xl ">
              Graph<span className=" text-yellow-100 ">Blog</span>
            </span>
          </Link>
        </div>
        <div className="items-center gap-4 lg:flex ">
          <div className="xl:text-md hidden lg:block lg:text-sm">
            <div>
              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {session ? (
            <div
              className="cursor-pointer rounded-lg bg-white py-3 px-4 font-bold hover:opacity-90"
              onClick={() => signOut()}
            >
              <span className="select-none">Sign Out </span>
            </div>
          ) : (
            <Link href="/login">
              <div className="flex cursor-pointer gap-2 rounded-lg bg-white py-3 px-4 font-bold hover:opacity-90">
                <span className="select-none">Log In</span>
                <div className="relative h-6 w-6">
                  <Image src={GithubLogo} layout="fill" />
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
