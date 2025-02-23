import { WordRotate } from "../animation-goingdowm/animation-GoinDowm";

export  default function WordRotateDemo({text}) {
  return (
    <WordRotate
      className=" absolute z-40 justify- text-center text-7xl font-bold text-black dark:text-white 
              lg:left-2/4  "
      words={[...text]}
    />
  );
}
