import BlurText from "../animation/animation-cool/animation-cool";
import SplitText from "../animation/split-animation/split-animation";
//9CA3AF
const Benefits = ()=>{
    const text = 'Everything you need as far as a click'
    return(<>

    <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.07] h-5/6 py-0 sm:py-0 ">
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
                  
                    <SplitText
                        text="Mobile friendly"
                        className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center"
                        delay={100}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        />
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Kep in touch with yours dutys anywere</p>
                </div>
                <div className="flex justify-center items-center pt-10 p-10 min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                   
                    <svg xmlns="http://www.w3.org/2000/svg"  width={260} x="0px" y="0px" viewBox="6.345990180969238 6.430299758911133 35.30801010131836 35.13941192626953" enable-background="new 0 0 48 48">
                        <g>
                            
                                <path fill="#D946EFFF" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M36.661,14.06347H14.39964c-2.48145,0-4.49304,2.0116-4.49304,4.49304v8.85443c0,2.48138,2.0116,4.49298,4.49304,4.49298h11.13068   v3.49017c0,1.4375,1.71991,2.17725,2.76343,1.1886l4.93878-4.67877H36.661c2.48138,0,4.49298-2.0116,4.49298-4.49298v-8.85443   C41.15398,16.07507,39.14238,14.06347,36.661,14.06347z"/>
                            <g>
                                
                                    <line fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="21.67933" y1="20.73371" x2="34.91687" y2="20.73371"/>
                                
                                    <line fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="27.86115" y1="25.23371" x2="34.91687" y2="25.23371"/>
                            </g>
                            
                                <path fill="#D946EFFF" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M36.08361,37.7932h-0.98454c-0.38063,0-0.68918-0.30856-0.68918-0.68918v-0.98454c0-0.38062,0.30856-0.68918,0.68918-0.68918   h0.98454c0.38063,0,0.68918,0.30856,0.68918,0.68918v0.98454C36.77279,37.48465,36.46423,37.7932,36.08361,37.7932z"/>
                            
                                <path fill="#D946EFFF" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M40.46482,37.7932h-0.98454c-0.38062,0-0.68918-0.30856-0.68918-0.68918v-0.98454c0-0.38062,0.30856-0.68918,0.68918-0.68918   h0.98454c0.38062,0,0.68918,0.30856,0.68918,0.68918v0.98454C41.154,37.48465,40.84545,37.7932,40.46482,37.7932z"/>
                            
                                <path fill="#D946EFFF" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M12.00847,8.81719h0.98454c0.38062,0,0.68918,0.30856,0.68918,0.68918v0.98454c0,0.38062-0.30856,0.68918-0.68918,0.68918h-0.98454   c-0.38062,0-0.68918-0.30856-0.68918-0.68918V9.50637C11.31929,9.12575,11.62785,8.81719,12.00847,8.81719z"/>
                            
                                <path fill="#D946EFFF" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M7.62726,8.81719H8.6118c0.38062,0,0.68918,0.30856,0.68918,0.68918v0.98454c0,0.38062-0.30856,0.68918-0.68918,0.68918H7.62726   c-0.38062,0-0.68918-0.30856-0.68918-0.68918V9.50637C6.93808,9.12575,7.24663,8.81719,7.62726,8.81719z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M36.77279,37.10402v0.05456c0,1.0545-0.58014,2.02349-1.50963,2.52151l0,0"/>
                            <path fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M41.154,37.10402v0.05456c0,1.0545-0.58014,2.02349-1.50963,2.52151h0"/>
                            <path fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M11.31929,9.50637V9.45181c0-1.0545,0.58014-2.0235,1.50963-2.52151l0,0"/>
                            <path fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M6.93808,9.50637V9.45181c0-1.0545,0.58014-2.0235,1.50963-2.52151l0,0"/>
                        </g>
                        <g>
                            <g>
                                
                                    <circle fill="#D946EFFF" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="14.70963" cy="33.20607" r="7.86364"/>
                                <g>
                                    <path fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="     M19.62931,39.33963c-1.3506,1.08181-3.05731,1.72689-4.91859,1.72689s-3.56799-0.64508-4.91859-1.72689     c0.2083-0.4166,0.49723-0.78616,0.84665-1.10199c0.77943-0.71225,1.86128-1.14899,3.05058-1.14899h2.04272     C17.45897,37.08866,18.95065,38.00921,19.62931,39.33963z"/>
                                    
                                        <circle fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="14.70963" cy="31.7041" r="2.72391"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1  itemTrasparent item--2 ">
                <div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem] "></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <SplitText
                        text="Performance"
                        className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center"
                        delay={100}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        />
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">The 95% of ours Customers has incrise they performance</p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={100} x="0px" y="0px" viewBox="17.227001190185547 14.0600004196167 29.545001983642578 35.88100051879883" enable-background="new 0 0 64 64">
<g>
	<g>
	</g>
	
		<path fill="#000000FF" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M24.099,14.81h15.801c3.381,0,6.122,2.741,6.122,6.122v22.137c0,3.381-2.741,6.122-6.122,6.122H24.099   c-3.381,0-6.122-2.741-6.122-6.122V20.932C17.978,17.551,20.718,14.81,24.099,14.81z"/>
</g>
<g>
	<g>
		
			<line fill="none" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="25" y1="37.038" x2="32" y2="37.038"/>
		
			<line fill="none" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="25" y1="42.288" x2="35.5" y2="42.288"/>
	</g>
	<g>
		
			<polyline fill="none" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="    25,29.341 28.5,24.788 32.795,29.341 39,23.135   "/>
		
			<polyline fill="none" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="    39,28.306 39,23.135 33.829,23.135   "/>
	</g>
</g>
                </svg>
                </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2  itemTrasparent item--3 ">
                <div className="absolute inset-px rounded-lg  item--3"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <SplitText
                        text="Security"
                        className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center"
                        delay={100}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        />
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">All outs Customers data is emcript from A to Z</p>
                </div>
                <div className="flex justify-center items-center pt-10 p-10">
                <svg xmlns="http://www.w3.org/2000/svg" width={200}  x="0px" y="0px" viewBox="6.242580413818359 9.493630409240723 35.51483154296875 29.012733459472656" enable-background="new 0 0 48 48">
                    <g>
                        
                            <path fill="#000000FF" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M26.70186,37.75636H12.03204c-1.86536,0-3.37753-1.51217-3.37753-3.37753V13.87792c0-2.00716,1.62713-3.63429,3.63429-3.63429   h14.1563c2.00716,0,3.63429,1.62712,3.63429,3.63429v20.50092C30.07939,36.24419,28.56721,37.75636,26.70186,37.75636z"/>
                        
                            <path fill="#000000FF" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M7.58654,32.89091h15.71137c0.32803,0,0.59395,0.26592,0.59395,0.59395v0.00001c0,2.35908,0.65762,4.27149,3.0167,4.27149H10.8056   c-2.10587,0-3.81302-1.70715-3.81302-3.81302v-0.45848C6.99259,33.15683,7.25851,32.89091,7.58654,32.89091z"/>
                    </g>
                    <g>
                        
                            <path fill="#000000FF" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M36.10695,34.60128l-2.46675-2.20843c-0.35962-0.32196-0.90239-0.32676-1.26764-0.01123l-2.66133,2.29906   c-0.80584,0.69615-2.05688,0.12368-2.05688-0.94122V23.49722h10.52602v10.17739   C38.18037,34.7499,36.90808,35.31852,36.10695,34.60128z"/>
                        
                            <path fill="#000000FF" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M24.82731,17.39819v5.00333c0,1.34226,0.71609,2.58256,1.87852,3.25369l4.33301,2.50167c1.16243,0.67113,2.59461,0.67113,3.75704,0   l4.33301-2.50167c1.16243-0.67113,1.87852-1.91143,1.87852-3.25369v-5.00333c0-1.34226-0.71609-2.58256-1.87852-3.25369   l-4.33301-2.50166c-1.16243-0.67113-2.59461-0.67113-3.75704,0l-4.33301,2.50166   C25.5434,14.81563,24.82731,16.05593,24.82731,17.39819z"/>
                        
                            <polyline fill="none" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="   29.67541,19.93868 31.81083,22.0741 36.15932,17.72561  "/>
                    </g>
                    <g>
                        
                            <line fill="none" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="13.17775" y1="17.34117" x2="16.20987" y2="17.34117"/>
                        
                            <line fill="none" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="13.17775" y1="22.19772" x2="19.36695" y2="22.19772"/>
                        
                            <line fill="none" stroke="#D946EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="13.17775" y1="27.47595" x2="19.36695" y2="27.47595"/>
                    </g>
                </svg>
                </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2 itemTrasparent item--4">
                <div className="absolute inset-px rounded-lg   max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <SplitText
                        text="Data Storage"
                        className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center"
                        delay={100}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        />
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">We keep your data save for you.</p>
                </div>
                <div className="flex justify-center items-center pt-20">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={260} viewBox="10.682000160217285 10.718999862670898 42.63600158691406 42.56199645996094" enable-background="new 0 0 64 64">
<g>
	
		<polygon fill="none" stroke="#9CA3AFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="   14.395,23.182 14.395,40.793 32.006,49.598 49.616,40.793 49.616,23.182 32.006,14.377  "/>
</g>
<g>
	<g>
	</g>
	
		<path fill="#FFFFFF" stroke="#9CA3AFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M31.725,43.074l-9.397-4.027c-0.576-0.247-0.576-1.064,0-1.311l9.397-4.027c0.179-0.077,0.382-0.077,0.562,0l9.397,4.027   c0.576,0.247,0.576,1.064,0,1.311l-9.397,4.027C32.107,43.151,31.904,43.151,31.725,43.074z"/>
	
		<path fill="#FFFFFF" stroke="#9CA3AFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M31.725,36.67l-9.397-4.027c-0.576-0.247-0.576-1.064,0-1.311l9.397-4.027c0.179-0.077,0.382-0.077,0.562,0l9.397,4.027   c0.576,0.247,0.576,1.064,0,1.311l-9.397,4.027C32.107,36.747,31.904,36.747,31.725,36.67z"/>
</g>
<g>
	
		<path fill="#FFFFFF" stroke="#D946EFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M31.725,30.266l-9.397-4.027c-0.576-0.247-0.576-1.064,0-1.311l9.397-4.027c0.179-0.077,0.382-0.077,0.562,0l9.397,4.027   c0.576,0.247,0.576,1.064,0,1.311l-9.397,4.027C32.107,30.343,31.904,30.343,31.725,30.266z"/>
</g>
<g>
	
		<circle fill="#FFFFFF" stroke="#D946EFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="49.616" cy="23.181" r="3.202"/>
	
		<circle fill="#FFFFFF" stroke="#D946EFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="14.384" cy="23.181" r="3.202"/>
	
		<circle fill="#FFFFFF" stroke="#D946EFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="49.616" cy="40.813" r="3.202"/>
	
		<circle fill="#FFFFFF" stroke="#D946EFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="14.384" cy="40.813" r="3.202"/>
	
		<circle fill="#FFFFFF" stroke="#D946EFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="32.019" cy="49.579" r="3.202"/>
	
		<circle fill="#FFFFFF" stroke="#D946EFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="32.019" cy="14.421" r="3.202"/>
</g>
                </svg>
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