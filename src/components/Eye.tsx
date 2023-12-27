import eye from '../assets/eye-icon.png';

function Eye() {
  return (
    <defs>
      <pattern id="eye" x="0" y="0" patternUnits="userSpaceOnUse" width="30" height="20">
        <image href={eye} x="0" y="0" width="30" height="20" />
      </pattern>
      <pattern id="bar" x="0" y="0" width="1" height="1">
        <rect width="100%" height="100%" fill="#473F49" opacity={0.3} />
        <rect width="100%" height="100%" fill="url(#eye)" />
      </pattern>
    </defs>
  );
}

export default Eye;
