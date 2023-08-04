'use client'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    // @ts-ignore
    import('preline')
  }, [])

  return (
    <main className="flex flex-col justify-center p-4">
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <h2 className="text-xl font-medium dark:text-white">Navbar</h2>

          <ul
            className="sticky top-0"
            data-hs-scrollspy="#scrollspy-2"
            data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2"
          >
            <li data-hs-scrollspy-group>
              <a
                href="#item-1"
                className="active block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 hs-scrollspy-active:text-blue-600 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-scrollspy-active:text-blue-400"
              >
                Item 1
              </a>
              <ul>
                <li className="ml-4">
                  <a
                    href="#item-1-1"
                    className="group flex items-start gap-x-2 py-0.5 text-sm leading-6 text-gray-700 hover:text-gray-800 hs-scrollspy-active:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 dark:hs-scrollspy-active:text-blue-400"
                  >
                    <svg
                      className="h-6 w-2 overflow-visible text-gray-400 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Item 1-1
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#item-1-2"
                    className="group flex items-start gap-x-2 py-0.5 text-sm leading-6 text-gray-700 hover:text-gray-800 hs-scrollspy-active:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 dark:hs-scrollspy-active:text-blue-400"
                  >
                    <svg
                      className="h-6 w-2 overflow-visible text-gray-400 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Item 1-2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#item-2"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 hs-scrollspy-active:text-blue-600 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-scrollspy-active:text-blue-400"
              >
                Item 2
              </a>
            </li>
            <li data-hs-scrollspy-group>
              <a
                href="#item-3"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 hs-scrollspy-active:text-blue-600 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-scrollspy-active:text-blue-400"
              >
                Item 3
              </a>
              <ul>
                <li className="ml-4">
                  <a
                    href="#item-3-1"
                    className="group flex items-start gap-x-2 py-0.5 text-sm leading-6 text-gray-700 hover:text-gray-800 hs-scrollspy-active:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 dark:hs-scrollspy-active:text-blue-400"
                  >
                    <svg
                      className="h-6 w-2 overflow-visible text-gray-400 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Item 3-1
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#item-3-2"
                    className="group flex items-start gap-x-2 py-0.5 text-sm leading-6 text-gray-700 hover:text-gray-800 hs-scrollspy-active:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 dark:hs-scrollspy-active:text-blue-400"
                  >
                    <svg
                      className="h-6 w-2 overflow-visible text-gray-400 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Item 3-2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="col-span-3">
          <div id="scrollspy-2" className="space-y-4">
            <div id="item-1">
              <h3 className="text-lg font-semibold dark:text-white">Item 1</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It&apos;s repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="item-1-1">
              <h3 className="text-lg font-semibold dark:text-white">
                Item 1-1
              </h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It&apos;s repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="item-1-2">
              <h3 className="text-lg font-semibold dark:text-white">
                Item 1-2
              </h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It&apos;s repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="item-2">
              <h3 className="text-lg font-semibold dark:text-white">Item 2</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It&apos;s repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="item-3">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It&apos;s repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="item-3-1">
              <h3 className="text-lg font-semibold dark:text-white">
                Item 3-1
              </h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It&apos;s repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="item-3-2">
              <h3 className="text-lg font-semibold dark:text-white">
                Item 3-2
              </h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It&apos;s repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
