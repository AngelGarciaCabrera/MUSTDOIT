import { BoxReveal } from "../animation/reveal-animation";
import Options from '../bg-components/options-btn';

const TitleAbout = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between w-full px-7 lg:px-40">
            
       

            {/* Sección del texto (derecha) */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left max-w-lg">
                <BoxReveal boxColor={"#d946ef"} duration={0.5}>
                    <p className="text-[3.5rem] font-semibold">
                        Who are we?<span className="text-[#d946ef]">.</span>
                    </p>
                </BoxReveal>

                <BoxReveal boxColor={"#d946ef"} duration={0.5}>
                    <h2 className="mt-[.5rem] text-[1.4rem]">
                        We are the best tool that allows you to remember your duties and save your knowledge for the future. 
                        With us, you will have the option to share your studies with your friends,{" "}
                        <span className="text-[#d946ef]">and they can help you out as well</span>.
                    </h2>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <div className="mt-6 text-[1.4rem]">
                        <p>
                            -&gt; With us, you will have the tools to share your studies with your friends, and they can help you out as well.
                            <span className="font-semibold text-[#d946ef]"> Teamwork</span>,
                            <span className="font-semibold text-[#d946ef]"> Free interaction</span>,
                            <span className="font-semibold text-[#d946ef]"> Task manager</span>,
                            and <span className="font-semibold text-[#d946ef]">Motion</span>.
                        </p>
                    </div>
                </BoxReveal>
            </div>
                 {/* Sección de los botones (izquierda) */}
                 <div className="w-full lg:w-1/2 flex justify-start lg:justify-start">
                <Options />
            </div>

        </div>
    );
};

export default TitleAbout;
