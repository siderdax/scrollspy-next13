'use client'
import Scrollspy from 'react-scrollspy'

export default function Page() {
  return (
    <main className="flex justify-center p-4">
      <div className="flex flex-row justify-center">
        <div className="mx-8 min-w-fit bg-green-900/50 p-4">
          <div className="sticky top-0">
            <h2 className="text-xl font-medium">Navbar</h2>

            <Scrollspy
              items={['item-1', 'item-2', 'item-3']}
              currentClassName="font-bold"
              className=""
            >
              <li>
                <a
                  href="#item-1"
                  className="block py-0.5 text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400  dark:hover:text-slate-300"
                >
                  Item 1
                </a>
                <Scrollspy
                  items={['item-1-1', 'item-1-2']}
                  scrolledPastClassName="font-normal"
                  currentClassName="font-bold"
                >
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
                </Scrollspy>
              </li>
              <li>
                <a
                  href="#item-2"
                  className="block py-0.5 text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  Item 2
                </a>
              </li>
              <li>
                <a
                  href="#item-3"
                  className="block py-0.5 text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  Item 3
                </a>
                <Scrollspy
                  items={['item-3-1', 'item-3-2']}
                  scrolledPastClassName="font-normal"
                  currentClassName="font-bold"
                >
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
                </Scrollspy>
              </li>
            </Scrollspy>
          </div>
        </div>

        <div className="grow">
          <div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus saepe vero nostrum facere maxime voluptatum odit
                corporis aspernatur quis earum architecto hic modi repellat quo
                fugiat quae eos, iste laboriosam non beatae impedit? Eaque ipsa
                ullam possimus, doloribus at perspiciatis eum laborum
                consectetur ad beatae placeat iusto, rerum ut quod amet?
                Molestiae animi mollitia, libero ipsam amet nesciunt, similique
                magni veniam temporibus dignissimos tenetur deleniti repellendus
                dolorum corporis ipsa. Repudiandae quod adipisci hic quaerat
                sint sequi, id error ex ea suscipit dolor magni impedit iste
                architecto ipsa molestiae labore asperiores facilis facere.
                Eaque deserunt incidunt debitis consectetur rem possimus
                reprehenderit beatae at quas est amet fugiat placeat architecto
                magnam nostrum molestiae harum, veritatis eius et dolor ut
                nesciunt reiciendis facere laudantium. Commodi dolores
                distinctio illum amet aliquid! Illum dolore libero, rerum
                delectus fuga voluptas nemo voluptate, ratione labore distinctio
                voluptatem. Neque dolore error fugiat. Repellat optio aliquam
                temporibus quibusdam. Corporis officia atque suscipit? Earum et
                sapiente sit nobis nam! Quod quasi unde repudiandae rem veniam
                laudantium itaque deserunt debitis, numquam illo similique
                consectetur iure sit culpa neque et pariatur hic soluta
                officiis, asperiores odit tenetur nesciunt! Alias magnam vel
                officia optio mollitia suscipit, in eius consectetur pariatur
                sequi ducimus saepe?
              </p>
            </div>

            <div id="item-1-2">
              <h3 className="text-lg font-semibold">Item 1-2</h3>
              <p className="m-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                expedita veniam labore velit vero explicabo et quasi sint
                necessitatibus debitis sunt soluta laudantium harum illum
                obcaecati ut commodi magni voluptatum. Reiciendis culpa facere,
                recusandae laboriosam sequi voluptatibus magnam totam
                temporibus, voluptatum eius labore numquam distinctio blanditiis
                consectetur, corporis consequuntur. Consequuntur, porro ullam
                eveniet incidunt error animi vero cum sed neque provident.
                Assumenda obcaecati labore porro libero sunt, nemo ex unde fuga
                officia vel maiores laborum accusantium voluptatem debitis rerum
                doloremque cum, quae id enim quos pariatur temporibus earum
                itaque! A repellendus numquam omnis aliquid mollitia maxime amet
                veritatis architecto error quae aut alias, voluptatem dolor
                nostrum. Maxime aspernatur rerum ab doloremque id officiis
                saepe, incidunt est? Perferendis, impedit! Nostrum facilis sequi
                quod animi natus ipsa pariatur deserunt, fugit error hic
                officia, aut neque amet. Excepturi consequuntur dicta voluptates
                fugiat illo quos, dignissimos aliquam ex, blanditiis animi ut
                fugit eius minus minima, quisquam natus autem expedita illum
                ipsum reiciendis incidunt? Sequi unde sint dolorem id cupiditate
                sit, voluptates, harum, impedit inventore ipsam illum quisquam
                iste? Impedit asperiores maxime similique quisquam aliquam ex
                corrupti delectus! Error nulla, illum magnam rem sunt maxime
                minus ratione ab, cum vel dolorum cumque nam odio, possimus
                eveniet. Hic quasi repudiandae inventore ipsam obcaecati ducimus
                odit sint, iste aliquid aut, et sapiente dolor deleniti officiis
                ratione adipisci sit commodi veniam voluptatum, exercitationem
                fugiat officia. Soluta, unde. Fugiat neque maiores tempore,
                voluptatibus quos laboriosam doloribus sint omnis impedit
                dignissimos aspernatur eaque deleniti quis libero eos, possimus
                tempora architecto?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                excepturi nobis delectus officia aut sapiente quisquam officiis
                ullam eum reiciendis ad reprehenderit rerum, dolorum voluptate
                ratione, enim laborum sunt quasi quibusdam rem. Ducimus
                reiciendis ex molestiae expedita aut ad accusamus deleniti,
                assumenda laudantium, distinctio nostrum officia neque magni
                laboriosam dolor unde a modi recusandae. Aut accusamus deserunt
                labore fugiat reiciendis obcaecati quis animi. Officia excepturi
                eveniet aut ex minima dolorem earum libero ipsum nesciunt,
                possimus architecto voluptatem dicta, sed ratione perferendis
                qui ducimus eum accusantium. Ipsa perferendis, maiores alias
                vero atque facilis rem eum. Dignissimos assumenda, magnam cumque
                repellendus autem possimus eum beatae mollitia consequuntur et
                esse inventore fugit nemo natus accusantium eveniet voluptatem
                incidunt optio omnis? Quasi, officiis, saepe eum nesciunt
                molestiae nulla rerum quia esse reprehenderit placeat quis eius
                ab inventore, nihil eligendi ipsam provident quidem laboriosam
                distinctio deserunt odio. Natus veritatis iste quod soluta
                totam, aspernatur quaerat impedit similique aliquid fuga dicta
                quidem sed magnam, laborum facilis quae, quos reiciendis. Amet
                qui optio maiores, id reprehenderit commodi tempora excepturi
                doloremque atque eum at quos vel cupiditate odio impedit quam
                deserunt laborum, corrupti, ipsam odit rerum. Est sequi
                laudantium inventore sapiente enim, quos repellat ipsa quisquam?
                Tempora, dicta nemo saepe quis harum, at aspernatur architecto
                provident, nisi tempore eveniet delectus possimus non sunt sequi
                voluptatum fuga voluptatem? Temporibus quae dignissimos repellat
                a, culpa nulla libero incidunt, esse, tenetur harum sed. Ex
                neque, aspernatur asperiores tempora iure, ab architecto debitis
                delectus porro velit, tempore quo blanditiis minus? Aspernatur
                illum pariatur eum dignissimos accusantium, placeat sed nam illo
                quidem delectus quas ipsam fuga. Fuga ab repellat minus nisi,
                iste blanditiis quidem natus eum dolore ea debitis accusantium
                eligendi neque commodi, dicta velit explicabo inventore amet
                veniam porro necessitatibus dolores facere quia excepturi! Quae
                nulla architecto magni assumenda velit ea accusantium!
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
  )
}
