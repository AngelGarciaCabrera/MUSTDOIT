import WordRotateDemo from './animation/animation-goingdowm/animationGoingDow';
import HyperTextDemo from './animation/confusetext';
import TitleAbout from './animation/Title-mouse';
import TypingAnimationDemo from './animation/typingText';
import ScrollBasedVelocityDemo from './animation/typinTravel';
import { Marquee3D } from './animation/users-travel';
import { GridBeam } from './bg-components/Beam'
import Benefits from './bg-components/benefites';
import { Pointer } from './bg-components/cursorPointer';
import ContactUS from './ContactUs';
import HomeWork from './homeWork';
import MakeYourProfile from './MakeYourProfile';


const Home = ()=> {

  return (
    <>
     <Pointer name="Angel " >
      <div className="w-full h-[700px] dark:bg-grid-white/[0.05] bg-grid-black/[0.07]">
        <GridBeam>
        <div className="flex flex-col sm:flex-row items-start justify-start pt-28 sm:pl-16 pl-11">

          <div className="sm:w-2/3 lg:w-1/2 flex flex-col gap-6 lg:ml-64">
            <TypingAnimationDemo className="text-5xl sm:text-6xl font-bold max-w-sm sm:ml-3 sm:mr-3" text="Better Start it!" />
            <HyperTextDemo text="Stay organized. Stay connected. Get things done" />
            <div className="flex sm:justify-start">
              <button className="btn lg:px-6 lg:py-3 sm:ml-3 sm:mr-3">Get Started!</button>
            </div>
          </div>

            {/* Componente HomeWork */}
            <div className="sm:w-1/2 sm:mt-0 mt-4 lg:mr-44">
              <HomeWork />
            </div>
        </div>
            </GridBeam>
      </div>
      </Pointer>
          {/*Texto-travel*/ }
        <ScrollBasedVelocityDemo text="Turn your ideas into action!,Your goals, your team, your success,Stay organized. Stay connected. Get things done."/>

          {/*About us*/ }
        <div className='w-full h-[700px] pt-40 pl-36'>
          <TitleAbout/>
        </div>
          {/*user comments*/ }
        <div className='h-[530px] pt-10  w-full'>
          <Marquee3D/>
        </div>
          {/*benefits*/ }
        <div className='h-[1200px]  w-full'>
            <Benefits/>
        </div>
        {/*benefits*/ }
        
        <div>
          <ContactUS/>
        </div>

           {/*Profile*/ }
        <div className='h-[1200px]  w-full pt-72 '>
          <MakeYourProfile/>
        </div>
      
   

    </>
  );
}

export default Home;
