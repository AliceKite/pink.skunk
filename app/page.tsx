import { formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns';
import { DateTime } from 'luxon';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    name: 'github',
    handle: 'AliceKite',
    href: 'https://github.com/AliceKite',
  },
  {
    name: 'twitter',
    handle: '@kitskoonk',
    href: 'https://x.com/kitskoonk',
  },
  {
    name: 'patreon',
    handle: 'FateParsec',
    href: 'https://www.patreon.com/FateParsec'
  },
  {
    name: 'resume',
    handle: 'View',
    href: '/resume'
  }  
];

// const bday = DateTime.fromISO('1998-08-19');
// const now = DateTime.now();
const years = formatDistanceToNowStrict(new Date(1998,8,19),{roundingMethod:"floor"});

export default function Home() {
  return (
    <main className="h-full p-8 sm:p-24 flex flex-col text-primary">
      <Image
        src="/Untitled.png"
        alt="Avatar"
        width={200}
        height={200}
        className="rounded-full mx-auto sm:mx-0"
      />

      <section className="my-8 max-w-sm text-lg">
        <div className="sm:block flex justify-between items-end leading-none gradient-text font-black">
          <h1 className="text-6xl">Alice</h1>
          <h3 className="text-2xl"> (or Fall, Adam, Callie, et al)</h3>
          <h4 className="text-xl">(i have spent {years} on this godforsaken planet)</h4>
        </div>

        <p className="">
          <br />
          dumb multiplicative being, i play fight games and develop cloud resources to make a viable solution to play ps2 games online
          <br />
          <br />
          they/it/he/hole, i am from dumb american south, currently living in las vegas
          <br />
          <br />
          into photography, cloud technology, fighting games, running, cooking
          <br />
          <br />
          actively looking for devops work, always appreciating assistance in the search
        </p>
        <ul className="flex flex-col list-none mt-8">
          {links.map((link, id) => (
            <li key={id} className="flex justify-between items-center">
              <p>{link.name}</p>
              <Link href={link.href} className="gradient-link px-[2px]">
                {link.handle}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
