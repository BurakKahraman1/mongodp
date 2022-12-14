import Link from "next/link";
import ContactModal from "./contact";
import SearchModal from "./search";
import MobilModal from "./mobilMenu";
export default function Header() {
  return (
      <div className="fixed top-0 z-20 w-full bg-white shadow">
          <div className="container mx-auto">
              <div className="navbar flex-col md:flex-row lg:p-4 w-full">
                  <div className="navbar-start w-full justify-between md:w-1/2">
                      <Link href="/">
                          <a>
                              <svg className="md:h-[50px] h-[35px]" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 635.45 132.14">
                                  <path fill="#12284c"
                                        d="M119.38 93.14c-.92.18-1.96.28-3.12.28-2.14 0-3.73-.4-4.77-1.19s-1.56-2.2-1.56-4.22V33.1c.49-.18 1.21-.35 2.16-.51.95-.15 2-.23 3.17-.23 2.14 0 3.73.4 4.77 1.19 1.04.8 1.56 2.2 1.56 4.22v12.67c1.35-.67 2.89-1.25 4.64-1.74 1.74-.49 3.69-.73 5.83-.73 5.57 0 10.01 1.44 13.31 4.32 3.31 2.88 4.96 7.22 4.96 13.04v27.36c-.49.12-1.21.28-2.16.46s-1.97.28-3.08.28c-2.2 0-3.83-.4-4.87-1.19s-1.56-2.2-1.56-4.22V65.88c0-3.06-.8-5.28-2.39-6.66s-3.67-2.07-6.24-2.07c-1.65 0-3.18.26-4.59.78s-2.69 1.15-3.86 1.88v32.87c-.55.13-1.28.28-2.2.46zM169.6 76.25c.86 3.12 2.45 5.39 4.77 6.79 2.33 1.41 5.2 2.11 8.63 2.11 2.57 0 4.94-.38 7.12-1.15 2.17-.76 3.93-1.58 5.28-2.43.86.49 1.56 1.16 2.11 2.02s.83 1.78.83 2.75c0 1.23-.41 2.31-1.24 3.26s-1.96 1.76-3.4 2.43-3.14 1.19-5.1 1.56-4.07.55-6.33.55c-3.61 0-6.9-.49-9.87-1.47s-5.51-2.46-7.62-4.45-3.76-4.45-4.96-7.39c-1.19-2.94-1.79-6.37-1.79-10.28 0-3.79.58-7.1 1.74-9.92 1.16-2.81 2.74-5.17 4.73-7.07s4.3-3.31 6.93-4.22c2.63-.92 5.42-1.38 8.36-1.38 3 0 5.75.48 8.26 1.42 2.51.95 4.65 2.27 6.43 3.95 1.77 1.68 3.17 3.7 4.18 6.06s1.51 4.91 1.51 7.67c0 1.71-.44 3-1.33 3.86s-2.13 1.41-3.72 1.65l-25.52 3.68zm10.19-19.56c-3 0-5.51 1-7.53 2.98-2.02 1.99-3.15 4.82-3.4 8.49l20.38-3.03c-.25-2.26-1.13-4.24-2.66-5.92-1.52-1.67-3.79-2.52-6.79-2.52zM224.14 47.97c6 0 10.79 1.29 14.37 3.86s5.37 6.55 5.37 11.94v21.21c0 1.47-.37 2.63-1.1 3.49s-1.65 1.62-2.75 2.3c-1.71 1.04-3.89 1.87-6.52 2.48s-5.63.92-9 .92c-6.12 0-10.94-1.18-14.46-3.54s-5.28-5.89-5.28-10.6c0-4.1 1.3-7.24 3.9-9.41s6.38-3.5 11.34-3.99l12.58-1.29v-1.65c0-2.33-.84-4.04-2.52-5.14s-4.06-1.65-7.12-1.65c-2.39 0-4.71.29-6.98.87s-4.28 1.3-6.06 2.16c-.67-.49-1.24-1.15-1.7-1.97a5.49 5.49 0 01-.69-2.71c0-1.22.29-2.22.87-2.98s1.51-1.45 2.8-2.07c1.77-.73 3.79-1.29 6.06-1.65 2.27-.39 4.56-.58 6.89-.58zm.37 37.37c1.77 0 3.4-.17 4.87-.5 1.47-.34 2.54-.75 3.21-1.24V73.4l-8.91.83c-2.45.25-4.31.78-5.6 1.61s-1.93 2.13-1.93 3.9c0 1.78.66 3.15 1.97 4.13 1.32.98 3.45 1.47 6.39 1.47zM263.48 93.14c-.95.18-1.97.28-3.08.28-2.2 0-3.81-.4-4.82-1.19s-1.52-2.2-1.52-4.22V33.1c.49-.18 1.21-.35 2.16-.51.95-.15 1.97-.23 3.08-.23 2.2 0 3.81.4 4.82 1.19 1.01.8 1.52 2.2 1.52 4.22v54.9c-.49.14-1.21.29-2.16.47zM289.46 83.5c1.19.86 2.86 1.29 5 1.29 1.04 0 2.1-.12 3.17-.37 1.07-.24 2.03-.55 2.89-.92.49.49.9 1.09 1.24 1.79s.5 1.52.5 2.43c0 1.84-.83 3.35-2.48 4.54s-4.31 1.79-7.99 1.79c-4.84 0-8.65-1.09-11.43-3.26-2.79-2.17-4.18-5.77-4.18-10.79V37.87c.49-.12 1.21-.28 2.16-.46s1.97-.28 3.08-.28c2.14 0 3.72.4 4.73 1.19 1.01.8 1.52 2.2 1.52 4.22v7.62h13.5c.31.49.58 1.13.83 1.93.24.8.37 1.65.37 2.57 0 1.59-.37 2.75-1.1 3.49-.73.73-1.71 1.1-2.94 1.1h-10.65v20.02c-.01 1.97.59 3.38 1.78 4.23zM319.16 93.14c-.92.18-1.96.28-3.12.28-2.14 0-3.73-.4-4.77-1.19s-1.56-2.2-1.56-4.22V33.1c.49-.18 1.21-.35 2.16-.51.95-.15 2-.23 3.17-.23 2.14 0 3.73.4 4.77 1.19 1.04.8 1.56 2.2 1.56 4.22v12.67c1.35-.67 2.89-1.25 4.64-1.74s3.69-.73 5.83-.73c5.57 0 10.01 1.44 13.31 4.32s4.96 7.22 4.96 13.04v27.36c-.49.12-1.21.28-2.16.46s-1.97.28-3.08.28c-2.2 0-3.83-.4-4.87-1.19s-1.56-2.2-1.56-4.22V65.88c0-3.06-.8-5.28-2.39-6.66s-3.67-2.07-6.24-2.07c-1.65 0-3.18.26-4.59.78s-2.69 1.15-3.86 1.88v32.87c-.54.13-1.28.28-2.2.46zM424.66 92.69c-.49.12-1.21.28-2.16.46s-1.97.28-3.08.28c-2.2 0-3.81-.4-4.82-1.19s-1.51-2.2-1.51-4.22V64.13c0-2.45-.67-4.22-2.02-5.33-1.35-1.1-3.12-1.65-5.33-1.65-1.47 0-2.89.28-4.27.83s-2.59 1.29-3.63 2.2c.18.86.28 1.71.28 2.57v29.93c-.49.12-1.21.28-2.16.46s-1.97.28-3.08.28c-2.2 0-3.81-.4-4.82-1.19s-1.51-2.2-1.51-4.22V64.13c0-2.45-.7-4.22-2.11-5.33-1.41-1.1-3.21-1.65-5.42-1.65-1.53 0-2.94.25-4.22.73-1.29.49-2.36.98-3.21 1.47v33.33c-.55.12-1.29.28-2.2.46s-1.96.28-3.12.28c-2.14 0-3.73-.4-4.77-1.19s-1.56-2.2-1.56-4.22V58.53c0-1.41.31-2.58.92-3.53s1.56-1.85 2.85-2.71c1.84-1.22 4.16-2.25 6.98-3.08 2.81-.83 5.72-1.24 8.72-1.24 5.57 0 10.1 1.5 13.59 4.5 1.78-1.29 3.81-2.36 6.11-3.21 2.3-.86 5-1.29 8.13-1.29 2.39 0 4.65.29 6.79.87s3.99 1.52 5.55 2.8c1.56 1.29 2.8 2.92 3.72 4.91s1.38 4.36 1.38 7.12v29.02zM477.36 71.02c0 3.55-.54 6.75-1.61 9.59-1.07 2.85-2.59 5.28-4.54 7.3-1.96 2.02-4.32 3.57-7.07 4.64s-5.85 1.61-9.27 1.61c-3.43 0-6.52-.54-9.27-1.61s-5.11-2.6-7.07-4.59-3.47-4.41-4.54-7.25c-1.07-2.85-1.61-6.07-1.61-9.69 0-3.55.54-6.75 1.61-9.59 1.07-2.85 2.6-5.26 4.59-7.25s4.36-3.52 7.12-4.59c2.75-1.07 5.81-1.61 9.18-1.61s6.43.54 9.18 1.61 5.12 2.62 7.12 4.64c1.99 2.02 3.52 4.45 4.59 7.3 1.05 2.83 1.59 6 1.59 9.49zm-22.5-13.87c-3.31 0-5.91 1.21-7.8 3.63-1.9 2.42-2.85 5.83-2.85 10.24 0 4.47.93 7.9 2.8 10.28s4.48 3.58 7.85 3.58 5.98-1.21 7.85-3.63 2.8-5.83 2.8-10.24-.95-7.82-2.85-10.24c-1.89-2.41-4.49-3.62-7.8-3.62zM511.56 58.99c-1.5-1.22-3.54-1.84-6.11-1.84-1.78 0-3.41.21-4.91.64s-2.8.98-3.9 1.65v33.24c-.55.12-1.29.28-2.2.46s-1.96.28-3.12.28c-2.14 0-3.73-.4-4.77-1.19s-1.56-2.2-1.56-4.22V58.53c0-1.47.31-2.66.92-3.58s1.56-1.8 2.85-2.66c1.77-1.22 4.13-2.25 7.07-3.08s6.18-1.24 9.73-1.24c6.3 0 11.19 1.39 14.64 4.18 3.46 2.79 5.19 6.87 5.19 12.26v28.28c-.49.12-1.21.28-2.16.46s-1.97.28-3.08.28c-2.2 0-3.81-.4-4.82-1.19s-1.51-2.2-1.51-4.22V64.77c-.01-2.63-.77-4.56-2.26-5.78zM575.5 84.33c0 1.41-.31 2.54-.92 3.4s-1.53 1.68-2.75 2.48c-1.53.98-3.55 1.88-6.06 2.71s-5.42 1.24-8.72 1.24c-7.34 0-13.17-1.88-17.49-5.65-4.32-3.76-6.47-9.53-6.47-17.31 0-4.04.58-7.51 1.74-10.42s2.74-5.31 4.73-7.21 4.33-3.31 7.02-4.22c2.69-.92 5.6-1.38 8.72-1.38 1.65 0 3.21.17 4.68.5 1.47.34 2.78.75 3.95 1.24V33.1c.49-.18 1.21-.35 2.16-.51.95-.15 1.97-.23 3.08-.23 2.2 0 3.81.4 4.82 1.19 1.01.8 1.52 2.2 1.52 4.22v46.56zm-11.57-25.25c-.92-.55-1.99-1.01-3.21-1.38-1.23-.37-2.54-.55-3.95-.55-3.43 0-6.27 1.1-8.54 3.31-2.27 2.2-3.4 5.82-3.4 10.83 0 4.71 1.09 8.16 3.26 10.33s5.12 3.26 8.86 3.26c1.59 0 2.95-.18 4.09-.55 1.13-.37 2.1-.79 2.89-1.29V59.08zM594.87 76.25c.86 3.12 2.45 5.39 4.77 6.79 2.33 1.41 5.2 2.11 8.63 2.11 2.57 0 4.94-.38 7.12-1.15 2.17-.76 3.93-1.58 5.28-2.43.86.49 1.56 1.16 2.11 2.02s.83 1.78.83 2.75c0 1.23-.41 2.31-1.24 3.26s-1.96 1.76-3.4 2.43-3.14 1.19-5.1 1.56-4.07.55-6.33.55c-3.61 0-6.9-.49-9.87-1.47s-5.51-2.46-7.62-4.45-3.76-4.45-4.96-7.39c-1.19-2.94-1.79-6.37-1.79-10.28 0-3.79.58-7.1 1.74-9.92 1.16-2.81 2.74-5.17 4.73-7.07s4.3-3.31 6.93-4.22c2.63-.92 5.42-1.38 8.36-1.38 3 0 5.75.48 8.26 1.42 2.51.95 4.65 2.27 6.43 3.95 1.77 1.68 3.17 3.7 4.18 6.06s1.52 4.91 1.52 7.67c0 1.71-.45 3-1.33 3.86-.89.86-2.13 1.41-3.72 1.65l-25.53 3.68zm10.2-19.56c-3 0-5.51 1-7.53 2.98-2.02 1.99-3.15 4.82-3.4 8.49l20.38-3.03c-.25-2.26-1.13-4.24-2.66-5.92-1.53-1.67-3.8-2.52-6.79-2.52z"></path>
                                  <path fill="#00ac69"
                                        d="M93.1 34.05v-.26c0-.3-.01-.59-.01-.86-.02-1.7-.06-2.85-.07-3.02l-.02-.32c-.06-.83-.52-1.59-1.24-2.02l-.28-.17c-.67-.4-16.56-9.82-39.9-9.82-23.36 0-39.23 9.42-39.9 9.82l-.28.17c-.72.43-1.18 1.19-1.24 2.02l-.02.32c-.04.61-1.04 15.15 3.28 32.14 4.94 19.41 15.09 34.26 29.35 42.96.11.07.17.18.16.31-.02.21-.02.41-.02.62 0 4.75 3.89 8.62 8.67 8.62s8.67-3.87 8.67-8.62-3.89-8.62-8.67-8.62c-2 0-3.96.7-5.5 1.97-.1.08-.25.09-.36.03-12.7-7.83-21.46-20.86-26.03-38.73-3.22-12.57-3.32-23.98-3.21-28.3 0-.12.07-.23.18-.28C21.41 29.6 34.33 24 51.59 24c12.66 0 23.02 3.04 29.5 5.6v.01c2.31.92 4.13 1.77 5.38 2.41.11.05.17.16.18.28.02.89.03 2.07.01 3.5l-.03.98.01-.01c-.01.26-.01.52-.02.79 0 .06 0 .11-.01.16-.01.31-.02.63-.04.95 0 .09-.01.19-.01.29-.01.31-.03.63-.05.95-.01.12-.01.24-.02.36-.02.3-.03.61-.05.92l-.03.44c-.02.25-.04.5-.05.76-.01.2-.03.4-.05.6-.02.27-.04.54-.07.81-.02.18-.03.36-.05.54l-.09.97-.06.59c-.03.29-.06.59-.1.89-.03.24-.06.47-.08.71l-.09.72-.12.89c-.03.25-.07.49-.1.74-.03.23-.06.45-.1.68-.05.34-.11.69-.16 1.04-.03.22-.07.44-.11.66-.06.37-.12.74-.19 1.12-.04.21-.08.42-.11.63l-.18.94-.06.31c-.13.67-.27 1.35-.42 2.04-.97 4.21-2.02 7.84-3.11 10.98-.09.25-.17.5-.26.74l-.09.24c-.7 1.91-1.47 3.75-2.29 5.52-2.8 5.9-5.71 9.2-8.26 11-2.62 1.85-5.35 2.48-8.14 1.85-2.26-.51-4.15-1.98-5.61-4.38-1.22-2.01-1.67-3.91-1.67-3.93l-6.29 1.4c.1.45 2.53 11.03 12.16 13.2.91.2 1.95.36 3.1.38 2.89.07 6.46-.63 10.18-3.27 5.13-3.63 9.43-10.27 12.84-19.6v-.01c1.12-2.98 2.1-6.1 2.92-9.35 2.83-11.12 3.38-21.19 3.41-26.99-.01-.34-.01-.68-.01-1zm-43.52 68.74c.6-.38 1.29-.57 1.99-.57 2.07 0 3.76 1.67 3.76 3.73 0 2.05-1.68 3.73-3.76 3.73-1.85 0-3.45-1.37-3.71-3.2a3.716 3.716 0 011.72-3.69z"></path>
                                  <path fill="#00ac69"
                                        d="M40.82 43.4c.77.82 2.04 1.29 3.52 1.29 2.83 0 4.27-1.06 4.27-3.15 0-.95-.42-3.15-4.27-3.15-1.64 0-3 .57-3.73 1.54-4.31.62-7.61 3.14-9.34 7.14-2.69 6.24-1.14 13.02.02 16.5l.4 1.19.86-.92c.15-.16.32-.28.51-.36.22-.09.46-.12.71-.09l1.16.13-.36-1.11c-.99-3.03-2.32-8.87-.11-13.99.69-1.59 2.44-4.35 6.36-5.02zM68.22 63.55l1.16-.13a1.384 1.384 0 011.22.45l.86.92.4-1.19c1.16-3.49 2.71-10.27.02-16.5-1.72-4-5.03-6.52-9.34-7.14-.73-.97-2.08-1.54-3.73-1.54-3.86 0-4.27 2.2-4.27 3.15 0 2.09 1.44 3.15 4.27 3.15 1.48 0 2.75-.48 3.51-1.29 3.93.67 5.67 3.42 6.37 5.04 2.2 5.11.87 10.96-.12 13.99l-.35 1.09z"></path>
                                  <path fill="#12284c"
                                        d="M72.44 63.64c-.32-.77-.93-1.38-1.71-1.69-1.6-.65-3.44.11-4.1 1.71-4.41 10.7-10.96 12.5-13.57 12.77-.91.1-1.9.1-2.86.01-2.63-.25-9.23-1.98-13.68-12.79a3.163 3.163 0 00-4.1-1.71c-.78.32-1.39.92-1.71 1.69s-.32 1.62-.01 2.39c6.87 16.66 18.77 16.8 20.87 16.68.15.01.34.01.57.01 3.15 0 13.9-1.2 20.29-16.7.33-.75.33-1.6.01-2.37z"></path>
                              </svg>
                          </a>
                      </Link>
                      <div className="dropdown flex md:hidden">
                          <label className="btn btn-ghost lg:hidden" htmlFor="MobilModal">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M4 6h16M4 12h8m-8 6h16"/>
                              </svg>
                          </label>
                          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                              <li className="bg-transparent focus:bg-transparent active:bg-transparent">
                                  <Link href="/">
                                      <a className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent">
                                          Home
                                      </a>
                                  </Link>
                              </li>
                              <li className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                  <Link href="/core-values">
                                      <a className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent">
                                          Core Values
                                      </a>
                                  </Link>
                              </li>
                              <li className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                  <Link href="/blog">
                                      <a className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent">
                                          Blog
                                      </a>
                                  </Link>
                              </li>
                              <li className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                  <label className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent" htmlFor="contactModal">
                                      Contact
                                  </label>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                      <ul className="menu menu-horizontal p-0 font-medium">
                          <li className="bg-transparent focus:bg-transparent active:bg-transparent">
                              <Link href="/">
                                  <a className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent">
                                      Home
                                  </a>
                              </Link>
                          </li>
                          <li className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                              <Link href="/core-values">
                                  <a className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent">
                                      Core Values
                                  </a>
                              </Link>
                          </li>
                          <li className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                              <Link href="/blog">
                                  <a className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent">
                                      Blog
                                  </a>
                              </Link>
                          </li>
                          <li className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                              <label className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent" htmlFor="contactModal">
                                  Contact
                              </label>
                          </li>
                      </ul>
                  </div>
                  <div className="navbar-end w-full justify-between md:justify-end md:w-1/2 mt-3 lg:mt-0">
                      <label className="flex flex-row cursor-pointer p-2 w-full md:w-1/2 lg:w-1/3 text-gray-900 bg-gray-50 rounded-lg border border-hmDark/50 hover:border-hmDark transition ease-in sm:text-sm"  htmlFor="searchModal">
                          <span className="pr-3">
                              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                              </svg>
                          </span>
                          <span className="pr-5 min-w-fit"> Search... </span>
                      </label>
                      <div className="dropdown hidden md:flex">
                          <label className="btn btn-ghost lg:hidden" htmlFor="MobilModal">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M4 6h16M4 12h8m-8 6h16"/>
                              </svg>
                          </label>
                          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                              <li className="bg-transparent focus:bg-transparent active:bg-transparent">
                                  <Link href="/">
                                      <a className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent">
                                          Home
                                      </a>
                                  </Link>
                              </li>
                              <li className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                  <Link href="/core-values">
                                      <a className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent">
                                          Core Values
                                      </a>
                                  </Link>
                              </li>
                              <li className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                  <Link href="/blog">
                                      <a className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent">
                                          Blog
                                      </a>
                                  </Link>
                              </li>
                              <li className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                  <label className="text-hmDark hover:text-hmGreen transition ease-in bg-transparent focus:bg-transparent active:bg-transparent" htmlFor="contactModal">
                                      Contact
                                  </label>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <ContactModal/>
          <SearchModal/>
          <MobilModal/>
      </div>
  )
}

