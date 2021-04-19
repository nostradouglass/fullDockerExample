import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../queries/create_user";

const CreateUsers = ({ showCreate }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [addUser, { data }] = useMutation(CREATE_USER);

  const submitCreateUser = (e) => {
    e.preventDefault();
    
    addUser({
        variables: {
            firstname: firstname,
            lastname: lastname,
            is_admin: isAdmin
        }
    }).then(
        () => console.log("fire")
        ).catch((err) => {
            throw(err)
        })
  };

  if (showCreate) {
    return (
      <form onSubmit={submitCreateUser}>
        <div>
          <div>
            first
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            last
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            is admin
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  } else {
    return <div></div>;
  }
};

export default CreateUsers;
