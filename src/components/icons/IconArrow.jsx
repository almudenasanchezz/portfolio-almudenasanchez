import "./icon.scss";

function IconArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      fill="none"
      viewBox="0 0 25 25"
      className={props.sizeIcon}
    >
      <path
        fill="currentColor"
        d="m5.064 18.479 10.59-10.59h-6.59v-2h10v10h-2v-6.59l-10.59 10.59-1.41-1.41Z"
      />
    </svg>
  );
}

export default IconArrow;

//modificar todos los botones donde esté el icono pequeño y poner el icono grande con la clase que haga que se vea pequeño
