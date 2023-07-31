import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center p-4">
      <div className="flex flex-row justify-center">
        <div className="mx-8 bg-green-900/50 min-w-fit p-4">
          <div className="sticky top-0">
            <h2 className="text-xl font-medium">Navbar</h2>

            <ul className="">
              <li>
                <a
                  href="#item-1"
                  className="active block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400  dark:hover:text-slate-300"
                >
                  Item 1
                </a>
                <ul>
                  <li className="ml-4">
                    <a
                      href="#item-1-1"
                      className="group flex items-start gap-x-2 py-0.5 text-sm leading-6 text-gray-700 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
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
                      className="group flex items-start gap-x-2 py-0.5 text-sm leading-6 text-gray-700 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
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
                  className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  Item 2
                </a>
              </li>
              <li data-hs-scrollspy-group>
                <a
                  href="#item-3"
                  className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  Item 3
                </a>
                <ul>
                  <li className="ml-4">
                    <a
                      href="#item-3-1"
                      className="group flex items-start gap-x-2 py-0.5 text-sm leading-6 text-gray-700 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
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
                      className="group flex items-start gap-x-2 py-0.5 text-sm leading-6 text-gray-700 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
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
        </div>

        <div className="grow">
          <div className="">
            <div id="item-1">
              <h3 className="text-lg font-semibold">Item 1</h3>
              <p className="m-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                nostrum beatae eius quam enim provident, est laudantium ab eos
                neque error quo possimus quibusdam illo consequatur esse
                architecto aperiam quod aut iure! Quis fugit iste tempore
                sapiente quidem tenetur vel ut quasi veritatis sequi, nostrum
                sunt officiis itaque! Tempore nulla ab dolorum optio doloribus
                assumenda dolor natus dignissimos temporibus quibusdam? Maiores
                consequatur eius debitis velit beatae eos culpa ut, eaque fuga
                libero delectus voluptatum, aspernatur error sint nemo corrupti
                possimus tenetur nobis explicabo dignissimos! Repudiandae quia
                deleniti quibusdam soluta maxime id, ut itaque. Sunt explicabo
                iste, magni ipsam nulla suscipit!
              </p>
            </div>

            <div id="item-1-1">
              <h3 className="text-lg font-semibold">Item 1-1</h3>
              <p className="m-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                nostrum beatae eius quam enim provident, est laudantium ab eos
                neque error quo possimus quibusdam illo consequatur esse
                architecto aperiam quod aut iure! Quis fugit iste tempore
                sapiente quidem tenetur vel ut quasi veritatis sequi, nostrum
                sunt officiis itaque! Tempore nulla ab dolorum optio doloribus
                assumenda dolor natus dignissimos temporibus quibusdam? Maiores
                consequatur eius debitis velit beatae eos culpa ut, eaque fuga
                libero delectus voluptatum, aspernatur error sint nemo corrupti
                possimus tenetur nobis explicabo dignissimos! Repudiandae quia
                deleniti quibusdam soluta maxime id, ut itaque. Sunt explicabo
                iste, magni ipsam nulla suscipit!
              </p>
            </div>

            <div id="item-1-2">
              <h3 className="text-lg font-semibold">Item 1-2</h3>
              <p className="m-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                nostrum beatae eius quam enim provident, est laudantium ab eos
                neque error quo possimus quibusdam illo consequatur esse
                architecto aperiam quod aut iure! Quis fugit iste tempore
                sapiente quidem tenetur vel ut quasi veritatis sequi, nostrum
                sunt officiis itaque! Tempore nulla ab dolorum optio doloribus
                assumenda dolor natus dignissimos temporibus quibusdam? Maiores
                consequatur eius debitis velit beatae eos culpa ut, eaque fuga
                libero delectus voluptatum, aspernatur error sint nemo corrupti
                possimus tenetur nobis explicabo dignissimos! Repudiandae quia
                deleniti quibusdam soluta maxime id, ut itaque. Sunt explicabo
                iste, magni ipsam nulla suscipit!
              </p>
            </div>

            <div id="item-2">
              <h3 className="text-lg font-semibold">Item 2</h3>
              <p className="m-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt quam id repudiandae commodi aut repellat aliquam. Cum
                ab dolore error magni, obcaecati, commodi perspiciatis esse,
                odit nobis aliquid eligendi. Itaque, unde maiores. Adipisci ab
                voluptas consequuntur facilis, corrupti reprehenderit!
                Voluptates illo asperiores corporis maiores ea molestiae id
                molestias quidem nihil!
              </p>
            </div>

            <div id="item-3">
              <h3 className="text-lg font-semibold">Item 3</h3>
              <p className="m-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                quis iste eos corporis ipsam eaque ut explicabo repudiandae
                dolorem corrupti magnam nulla voluptate praesentium modi
                voluptatibus, odit nisi vitae. Doloremque illo voluptas tenetur
                mollitia eius repudiandae temporibus enim in laborum tempore
                voluptatibus accusantium quas a, nemo dolor magni expedita nulla
                exercitationem tempora architecto inventore perferendis. Fugiat
                nesciunt, tempore molestias animi illum veritatis dolorem ut
                distinctio a quasi minima. Ducimus assumenda consequatur ipsam,
                possimus ex dolorem? Necessitatibus, earum sapiente. Ad et
                distinctio veniam voluptatum unde. Optio deleniti ullam
                similique iure autem, incidunt, deserunt eveniet dicta non sequi
                ducimus laborum debitis rerum. Dicta similique tenetur quas nemo
                unde aspernatur in hic minima omnis! Voluptatem eos soluta
                facilis libero, porro pariatur. Commodi, porro.
              </p>
            </div>

            <div id="item-3-1">
              <h3 className="text-lg font-semibold">Item 3-1</h3>
              <p className="m-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident voluptas error reiciendis cum iste reprehenderit
                repudiandae architecto eveniet magni optio, facilis iusto
                pariatur ducimus natus. Reiciendis porro laudantium magnam sunt
                soluta modi molestiae esse consequatur? Nobis facere iusto ipsam
                dicta qui? Maxime mollitia assumenda ipsa ad modi expedita
                necessitatibus recusandae facere debitis facilis, eos deserunt.
                Deleniti earum repudiandae maxime aut consectetur corrupti eaque
                vel? Quae voluptatem perferendis dolorum quia provident, rerum
                distinctio reprehenderit incidunt, deserunt at veritatis dolor
                fugiat labore.
              </p>
            </div>

            <div id="item-3-2">
              <h3 className="text-lg font-semibold">Item 3-2</h3>
              <p className="m-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                est eius sint placeat aliquid repudiandae similique odio
                eligendi maxime consequatur, labore amet tenetur illum itaque
                temporibus fuga molestias quae possimus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
