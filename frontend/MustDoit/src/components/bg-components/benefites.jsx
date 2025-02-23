import BlurText from "../animation/animation-cool/animation-cool";
const Benefits = ()=>{
    const text = 'Everything you need as far as a click'
    return(<>

    <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.07] py-0 sm:py-0 ">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 pt-9">
       
            <h2 className="text-center text-base/7 font-semibold text-[#d946ef]">Make your work faster</h2>
            <BlurText 
            text={text}
            delay={150}
            animateBy="words"
            direction="top"
            className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"
            />

            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 item-trasparent">

            <div className="relative lg:row-span-2  itemTrasparent item--1"
            >
                <div className="absolute inset-px rounded-lg  lg:rounded-l-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Mobile friendly</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Kep in touch with yours dutys anywere</p>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img className="size-full object-cover object-top" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-mobile-friendly.png" alt=""/>
                    </div>
                </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1  itemTrasparent item--2 ">
                <div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem] "></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Performance</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">The 95% of ours Customers has incrise they performance</p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                    <img className="w-full max-lg:max-w-xs" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png" alt=""/>
                </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2  itemTrasparent item--3 ">
                <div className="absolute inset-px rounded-lg  item--3"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Security</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">All outs Customers data is emcript from A to Z</p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                    <img className="h-[min(152px,40cqw)] object-cover" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png" alt=""/>
                </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2 itemTrasparent item--4">
                <div className="absolute inset-px rounded-lg   max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Data Storage</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">We keep your data save for you.</p>
                </div>
                <div className="relative min-h-[rem] w-full grow">
                     <img className="h-[min(350px,40cqw)] object-cover" src="./Data.png" alt=""/>
                </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
            </div>
        </div>
</div>

    </>)
}
export default Benefits;