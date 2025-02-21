import '../css/botones-options.css'

const Options =()=>{
    return(<>
        <div className="card">
        <div className="item item--1">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="rgba(149, 149, 255, 1)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
            <span className="quantity"> 20+ </span>
            <span className="text text--1"> Proyects </span>
        </div>
        <div className="item item--2">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="rgba(252, 161, 71, 1)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-line"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 10.663c0 -4.224 -4.041 -7.663 -9 -7.663s-9 3.439 -9 7.663c0 3.783 3.201 6.958 7.527 7.56c1.053 .239 .932 .644 .696 2.133c-.039 .238 -.184 .932 .777 .512c.96 -.42 5.18 -3.201 7.073 -5.48c1.304 -1.504 1.927 -3.029 1.927 -4.715v-.01z" /></svg>
            <span className="quantity"> 70+ </span>
            <span className="text text--2"> Interactions </span>
        </div>
        <div className="item item--3">
           <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="rgba(66, 193, 110, 1)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-users">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
           <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"  />
           <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
           <path d="M16 3.13a4 4 0 0 1 0 7.75" />
           <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
            <span className="quantity"> 2000 </span>
            <span className="text text--3"> Users </span>
        </div>
        <div className="item item--4">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="rgba(220, 91, 183, 1)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
            <span className="quantity"> 24/7 </span>
            <span className="text text--4"> Support </span>
        </div>
        </div>

    </>)
}
export default Options;