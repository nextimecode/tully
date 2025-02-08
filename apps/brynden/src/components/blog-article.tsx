import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Tooltip from '@radix-ui/react-tooltip'

export function BlogArticle() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  return (
    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
            <div className="shrink-0">
              <Image
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e"
                alt="Avatar"
                width={48}
                height={48}
              />
            </div>
            <div className="grow">
              <div className="flex justify-between items-center gap-x-2">
                <div>
                  <Tooltip.Root
                    open={isTooltipOpen}
                    onOpenChange={setIsTooltipOpen}
                  >
                    <Tooltip.Trigger asChild>
                      <span className="font-semibold text-gray-800 dark:text-neutral-200 cursor-pointer">
                        Leyla Ludic
                      </span>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="bottom"
                        className="bg-gray-900 text-white p-4 rounded-xl shadow-lg max-w-xs"
                      >
                        <div className="flex items-center gap-x-3 mb-2">
                          <Image
                            className="size-8 rounded-full"
                            src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e"
                            alt="Avatar"
                            width={32}
                            height={32}
                          />
                          <p className="text-lg font-semibold">Leyla Ludic</p>
                        </div>
                        <p className="text-sm text-gray-400">
                          Leyla is a Customer Success Specialist at Preline.
                        </p>
                        <Tooltip.Arrow className="fill-current text-gray-900" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>

                  <ul className="text-xs text-gray-500 dark:text-neutral-500">
                    <li className="inline-block pe-6">Jan 18</li>
                    <li className="inline-block pe-6">8 min read</li>
                  </ul>
                </div>
                <button className="py-1.5 px-2.5 text-sm font-medium rounded-lg border bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-neutral-800 dark:text-white">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5 md:space-y-8">
          <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
            Announcing a free plan for small teams
          </h2>
          <p className="text-lg text-gray-800 dark:text-neutral-200">
            At Preline, our mission has always been focused on bringing openness
            and transparency to the design process.
          </p>
          <Image
            className="w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03"
            alt="Blog Image"
            width={560}
            height={315}
          />
          <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
            A woman sitting at a table.
          </figcaption>
          <p className="text-lg text-gray-800 dark:text-neutral-200">
            We're proud to be a part of creating a more open culture and to
            continue building a product that supports this vision.
          </p>
          <blockquote className="text-center p-4 sm:px-7">
            <p className="text-xl font-medium text-gray-800 md:text-2xl dark:text-neutral-200">
              To say that switching to Preline has been life-changing is an
              understatement.
            </p>
            <p className="mt-5 text-gray-800 dark:text-neutral-200">
              Nicole Grazioso
            </p>
          </blockquote>
        </div>
        <div className="mt-4">
          {['Plan', 'Web development', 'Free', 'Team'].map(tag => (
            <Link
              key={tag}
              href="#"
              className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <div className="sticky bottom-6 inset-x-0 text-center">
        <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-neutral-800">
          <div className="flex items-center gap-x-1.5">
            <button className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
              Like
            </button>
            <div className="h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>
            <button className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
              Comment
            </button>
            <div className="h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                  Share
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="w-56 bg-gray-900 text-white rounded-xl p-2 dark:bg-neutral-950"
                  sideOffset={5}
                >
                  <DropdownMenu.Item className="cursor-pointer select-none rounded-md p-2 text-sm outline-none focus:bg-gray-800">
                    Copy link
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="cursor-pointer select-none rounded-md p-2 text-sm outline-none focus:bg-gray-800">
                    Share on Twitter
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="cursor-pointer select-none rounded-md p-2 text-sm outline-none focus:bg-gray-800">
                    Share on Facebook
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="cursor-pointer select-none rounded-md p-2 text-sm outline-none focus:bg-gray-800">
                    Share on LinkedIn
                  </DropdownMenu.Item>
                  <DropdownMenu.Arrow className="fill-current text-gray-900" />
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </div>
  )
}
