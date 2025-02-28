import '../components/css/profile.css';

const BackgroundSVG = () => (
  <div class="containerbg"></div>
);

const AvatarSVG = () => (
  <div className="card__avatar">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xml:space="preserve">
      <g>
        <path fill="white" d="M63.329,57.781C62.954,57.219,53.892,44,31.999,44C10.112,44,1.046,57.219,0.671,57.781
          c-1.223,1.84-0.727,4.32,1.109,5.547c1.836,1.223,4.32,0.727,5.547-1.109C7.397,62.117,14.347,52,31.999,52
          c17.416,0,24.4,9.828,24.674,10.219C57.446,63.375,58.712,64,60.009,64c0.758,0,1.531-0.219,2.211-0.672
          C64.056,62.102,64.556,59.621,63.329,57.781z"/>
        <path fill="white" d="M31.999,40c8.836,0,16-7.16,16-16v-8c0-8.84-7.164-16-16-16s-16,7.16-16,16v8
          C15.999,32.84,23.163,40,31.999,40z M23.999,16c0-4.418,3.586-8,8-8c4.422,0,8,3.582,8,8v8c0,4.418-3.578,8-8,8
          c-4.414,0-8-3.582-8-8V16z"/>
      </g>
    </svg>
  </div>
);


const CardProfile = () => {
  return (
    <div className="cardProfile">
      <div className="card__img">
        <BackgroundSVG />
      </div>
      <div className="card__avatar">
        <AvatarSVG />
      </div>
      <div className="card__title">Angel Garcia</div>
      <div className="card__subtitle">Web Development</div>
      <div className="card__wrapper">
        <button className="card__btn card__btn-solid">Create it now</button>
      </div>
    </div>
  );
};

export default CardProfile;
