import { cn } from "../bg-components/Cn";
import { Marquee } from "./User-animation";

const reviews = [
  {
    name: "Emily",
    username: "@emily",
    body: "Thanks to MUST DO IT, studying with my friends is easier than ever! My life is finally organized.",
    img: "https://avatar.vercel.sh/emily"
  },
  {
    name: "Liam",
    username: "@liam",
    body: "I used to struggle keeping track of my tasks, but now MUST DO IT makes everything simple and fun.",
    img: "https://avatar.vercel.sh/liam"
  },
  {
    name: "Sophia",
    username: "@sophia",
    body: "Group projects used to be a nightmare. With MUST DO IT, teamwork is effortless!",
    img: "https://avatar.vercel.sh/sophia"
  },
  {
    name: "Noah",
    username: "@noah",
    body: "Finally, an app that helps me stay productive while studying with my friends. MUST DO IT is a game-changer!",
    img: "https://avatar.vercel.sh/noah"
  },
  {
    name: "Olivia",
    username: "@olivia",
    body: "MUST DO IT helps me keep everything organized. I feel more in control of my studies and projects.",
    img: "https://avatar.vercel.sh/olivia"
  },
  {
    name: "Mason",
    username: "@mason",
    body: "Planning tasks with friends has never been this easy! MUST DO IT keeps us all on track.",
    img: "https://avatar.vercel.sh/mason"
  },
  {
    name: "Ava",
    username: "@ava",
    body: "I love how MUST DO IT helps me stay organized while studying with my classmates. It’s a lifesaver!",
    img: "https://avatar.vercel.sh/ava"
  },
  {
    name: "Ethan",
    username: "@ethan",
    body: "I was always forgetting deadlines. Now, MUST DO IT keeps me on top of everything!",
    img: "https://avatar.vercel.sh/ethan"
  },
  {
    name: "Isabella",
    username: "@isabella",
    body: "With MUST DO IT, I never miss a study session with my friends. It's perfect for teamwork!",
    img: "https://avatar.vercel.sh/isabella"
  },
  {
    name: "Lucas",
    username: "@lucas",
    body: "I finally found an app that makes studying with my friends effective and stress-free. MUST DO IT is amazing!",
    img: "https://avatar.vercel.sh/lucas",
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);
const fiveRow = reviews.slice(reviews.length / 2);
const sixRow = reviews.slice(reviews.length / 2);
const sevenRow = reviews.slice(reviews.length / 2);
const eithRow = reviews.slice(reviews.length / 2);
const nineRow = reviews.slice(reviews.length / 2);
const thenRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Marquee3D() {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:600px]">
    
      <div
        className="flex flex-row items-center gap-7"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-5deg) rotateZ(50deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:15s]" vertical>
          {fiveRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:10s]" vertical>
          {sixRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:15s]" vertical>
          {sevenRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:10s]" vertical>
          {eithRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:15s]" vertical>
          {nineRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:10s]" vertical>
          {thenRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
