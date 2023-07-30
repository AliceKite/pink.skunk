import { DateTime } from 'luxon';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    name: 'tumblr',
    handle: 'that-insufferable-varmint',
    href: 'https://www.tumblr.com/that-insufferable-varmint',
  },
  {
    name: 'bsky',
    handle: '@lavender.dog',
    href: 'https://bsky.app/profile/lavender.dog',
  },
];

const bday = DateTime.fromISO('1997-09-19');
const now = DateTime.now();
const years = bday
  .until(now)
  .toDuration(['years', 'months', 'days'])
  .toObject().years;

export default function Home() {
  return (
    <main className="h-full p-8 sm:p-24 flex flex-col text-primary">
      <Image
        src="/hehehe.gif"
        alt="Avatar"
        width={200}
        height={200}
        className="rounded-full mx-auto sm:mx-0"
      />

      <section className="my-8 max-w-sm text-lg">
        <div className="sm:block flex justify-between items-end leading-none gradient-text font-black">
          <h1 className="text-6xl">Jordan</h1>
          <h4 className="text-xl">(i am {years})</h4>
        </div>

        <p className="">
          dumb internet animal, I draw things sometimes
          <br />
          They/Them pronouns, I am from canada
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
