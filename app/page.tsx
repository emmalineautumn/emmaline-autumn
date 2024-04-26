/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Meow_Script } from "next/font/google";

import pic from "./me.jpg";

const scr = Meow_Script({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="container p-8 flex gap-8 flex-col md:flex-row">
      <aside className="">
        <h1
          className={scr.className +
            " text-4xl sticky top-0 bg-white dark:bg-neutral-900"}
        >
          Emmaline Autumn
        </h1>
        <ul className="leading-8">
          <li>
            <Link href={"/blog"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li className="mt-4">
            <a href="https://ko-fi.com/N4N3VZ98R" target="_blank">
              <img
                // height="36"
                // style={"border:0px;height:36px;"}
                src="https://storage.ko-fi.com/cdn/kofi5.png?v=3"
                // border="0"
                className="h-[36px]"
                alt="Buy Me a Coffee at ko-fi.com"
              />
            </a>
          </li>
        </ul>
      </aside>
      <main className="max-w-prose">
        <h2 className="text-xl">
          Hey! I'm Emma{" "}
          <small className="text-gray-700 dark:text-gray-300 italic text-sm">
            she/her
          </small>
        </h2>
        <p>Welcome to my site, I hope you enjoy your stay.</p>
        <p>
          I am a developer, a game designer, a writer, and an enthusiast of tech
          and games in general.
        </p>
        <div className="flex md:flex-row flex-col gap-4 items-center">
          <div className="aspect-square rounded-full overflow-clip w-48">
            <Image
              src={pic}
              alt="Emmaline Autumn"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <ul>
              <li>
                Github:{" "}
                <Link
                  href={"https://github.com/emmalineautumn"}
                  target="_blank"
                >
                  emmalineautumn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p>
          You can find my development projects in my portfolio, and you can find
          links to my games on{" "}
          <Link href={"https://cyborggrizzly.com"} className="text-blue-500">
            CyborgGrizzly.com
          </Link>
        </p>
        <div className="flex flex-wrap md:block flex-col-reverse">
          <em className="float-right w-full md:w-52 p-2 border-2 border-purple-400 bg-gradient-to-br from-purple-200 to-purple-300 rounded-md font-light text-sm my-1 dark:from-purple-900 dark:to-purple-950 dark:border-purple-800">
            <span className="font-normal">Fun fact:</span>{" "}
            I built the MD renderer for the blog from scratch for one of my
            projects!
          </em>
          <p>
            If you're interested in my writing projects, you can check my blog!
            I also share my thoughts on various topics there, from video games
            and development to tabletop game design.
          </p>
        </div>
        <p>
          If you've stumbled upon my humble site from one of my tools, welcome!
          You can find support for those tools on my Discord server (link coming
          soon). You can also join to have a direct line of communication to me
          to make suggestions and ask questions!
        </p>
        <div className="md:absolute bottom-0 left-1/2 md:-translate-x-1/2 md:mt-0 mt-12 bg-pride rounded-lg overflow-clip w-full md:w-1/2">
          <div className="text-sm bg-white/75 text-black w-full h-full p-1 italic">
            <p className="mix-blend-exclusion">
              LGBTQ+
              <br />
              Trans Rights are Human Rights
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
