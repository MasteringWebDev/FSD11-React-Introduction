function Employee({name, email, isPrivate}) {
  if(isPrivate) {
    return (
      <div>
        <h1>Anonymous User</h1>
        <p>***@.**.**</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

export default Employee;