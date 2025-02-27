import { BoxReveal } from "./animation/reveal-animation";
import CardProfile from "./card-profile";

const MakeYourProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full px-7 lg:px-40 gap-6 lg:gap-20">
      {/* Sección de la tarjeta (Izquierda) */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <BoxReveal boxColor={"#d946ef"} duration={0.5}>
          <CardProfile />
        </BoxReveal>
      </div>

      {/* Sección del texto (Derecha) */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left max-w-lg">
        <BoxReveal boxColor={"#d946ef"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold leading-tight">
            Create your profile<span className="text-[#d946ef]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#d946ef"} duration={0.5}>
          <h2 className="mt-2 text-[1.4rem]">
            Create your profile with us and showcase your work to the world{" "}
            <span className="text-[#d946ef]">now</span>.
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-4 text-[1.4rem]">
            <p>
              → Through your profile, your friends will be able to see your projects, follow you,  
              and collaborate with you on your projects or research, creating a community of  
              <span className="font-semibold text-[#d946ef]"> constructive feedback</span>,  
              <span className="font-semibold text-[#d946ef]"> collaboration</span>,  
              <span className="font-semibold text-[#d946ef]"> visibility</span>,  
              and <span className="font-semibold text-[#d946ef]">more</span>.
            </p>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
};

export default MakeYourProfile;
