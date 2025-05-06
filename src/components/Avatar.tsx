interface Person {
  name: string;
  imageId: string;
  imgSrc: string;
}

function Avatar({ person, size = 100 }: { person: Person; size?: number }) {
  // TODO: alt should be the name of the Person.
  // TODO: width and height should be same.
  return <img className="avatar" src={} alt={} width={} height={} />;
}

export default Avatar;
