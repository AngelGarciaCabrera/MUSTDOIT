import TypingAnimationDemo from './animation/typingText';
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
             <TypingAnimationDemo text="Better Start it!"/> 
              <p className="text-neutral-500 max-w-lg sm:text-2xl sm:ml-3 sm:mr-3">
                We are the best option to follow your future
              </p>
              
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
    </>
  );
}

export default Home;
