import HyperTextDemo from './animation/confusetext';
import TypingAnimationDemo from './animation/typingText';
import ScrollBasedVelocityDemo from './animation/typinTravel';
import { GridBeam } from './bg-components/Beam'
import HomeWork from './homeWork';


const Home = ()=> {
  return (
    <>
      <div className="w-full h-[550px] dark:bg-grid-white/[0.05] bg-grid-black/[0.07]">
        <GridBeam>
          <div className="sm:pl-16 pt-28 pl-11 flex flex-col sm:flex-row items-start justify-start">
            {/* Contenido de texto */}
            <div className="grid gap-6 sm:w-1/2 lg:ml-64">
                 {/* animacion de texto de escribir */}
              <TypingAnimationDemo text="Better Start it!"/> 
                   {/* animacion de texto deforme */}
              <HyperTextDemo text="Stay organized. Stay connected. Get things done"/>
              {/* Contenedor del botón */}
              <div className="flex justify-start sm:ml-3 sm:mr-3">
                <button className="lg:px-6 lg:py-3 btn sm:justify-center">
                  Get Started!
                </button>
              </div>
            </div>

            {/* Componente HomeWork */}
            <div className="sm:w-1/2 sm:mt-0 mt-4 lg:mr-44">
              <HomeWork />
            </div>

          </div>
        </GridBeam>
      </div>
      {/*Texto-travel*/ }
      <ScrollBasedVelocityDemo text="Turn your ideas into action!,Your goals, your team, your success,Stay organized. Stay connected. Get things done."/>
      <div className=''>
        

      </div>
    </>
  );
}

export default Home;
