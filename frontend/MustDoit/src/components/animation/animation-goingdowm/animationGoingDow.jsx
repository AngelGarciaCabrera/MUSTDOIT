import { WordRotate } from "../animation-goingdowm/animation-GoinDowm";

export  default function WordRotateDemo({text}) {
    const words = [text];
  return (
    <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={[{words}, "Rotate"]}
    />
  );
}
