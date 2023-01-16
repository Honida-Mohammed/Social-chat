import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Chats = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const logOutHandler = async () => {
    await auth.signOut();
    navigate("/");
  };

  const getFile = async (url) => {
    const res = await fetch(url);
    const data = await res.blob(); // blob .. any type of file you want to transfer aver in binary format
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          projectId: "b2eb2ac9-b62d-4233-bdd6-46d53391eb4a",
          "user=name": user.email,
          "user=secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users", {
              formdata,
              headers: {
                "private=key": "267dcc28-5dc6-4dfe-9805-f5f03e7c2fe5",
              },
            })
            .then(() => {
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
  }, [user, navigate]);

  if (!user || loading) return "loading...";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Social Chat</div>
        <div className="logout-tab" onClick={logOutHandler}>
          LogOut
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="b2eb2ac9-b62d-4233-bdd6-46d53391eb4a"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
