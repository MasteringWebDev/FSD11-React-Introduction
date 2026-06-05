import premiumLogo from '../assets/premium.png'

function Student({ name, image, isPremium, isMale }) {
  return (
    <div>
      <h2>
        {name}{' '}
        {isPremium && <img src={premiumLogo} width={20} />}
      </h2>
      <img src={image} width={200} height={200} />
      <p>{isMale ? 'MALE' : 'FEMALE' } </p>
    </div>
  );
}

export default Student;