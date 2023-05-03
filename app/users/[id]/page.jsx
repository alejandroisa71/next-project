import { requestToBodyStream } from "next/dist/server/body-streams";


async function getUser(id){
  const res= await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}

async function UserPage({ params }) {

  const user = await getUser(params.id);
  // console.log(data);

  return (
    <div>
      <h1>Detail</h1>
      <div>
        <img src={user.avatar} alt={user.email}/>
        <h3>{user.id} {user.first_name} {user.last_name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default UserPage;
