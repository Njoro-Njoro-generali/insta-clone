import "./App.css";
import Phonehead from "./components/Phonehead";
import Insta from "./components/Insta";
import Stories from "./components/Stories";
import Post from "./components/Post";
import Bottom from "./components/Bottom";
import MyBar from "./components/MyBar";
import Search from "./components/Search";
import Active from "./components/Active";
import MessagesDm from "./components/MessagesDm";
import { useState } from "react";
import PostingTop from "./components/PostingTop";
import PostingForm from "./components/PostingForm";
import AddingMessages from "./components/AddingMessages";
import NewMessageForm from "./components/NewMessageForm";
import TheMessage from "./components/TheMessage";
import ProfileTop from "./components/ProfileTop";
import ProfileFollowers from "./components/ProfileFollowers";
import ProfileDescription from "./components/ProfileDescription";
import ProfileButtons from "./components/ProfileButtons";
import StoryHighlights from "./components/StoryHighlights";
import ProfilePosts from "./components/ProfilePosts";

function App() {
  const [homeClass, setHomeClass] = useState("home");
  const [dmClass, setDmClass] = useState("messages-hide");
  const [postingClass, setPostingClass] = useState("posting-hide");
  const [messageAdding, setMessageAdding] = useState("adding-messages-hide");
  const [profileClass, setProfileClass] = useState("profile-hide");
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([
    {
      poster: "fabriziorom",
      postedImage: "images/jude.jpg",
      postDescription:
        "  I want to stay for 10/15 years...  Jude Bellingham explains..",
      imageMine: "images/myself.jpg",
      postTime: "3 days ago",
      postersImage: "images/fabrizio.jpg",
    },
    {
      poster: "_generali_98",
      postedImage: "images/callofduty.jpg",
      postDescription: "  I love gaming so mach. Call Of Duty is my favourite",
      imageMine: "images/myself.jpg",
      postTime: "3 days ago",
      postersImage: "images/generali.jpg",
    },
    {
      poster: "manchesterunited",
      postedImage: "images/bruno.webp",
      postDescription:
        "  Our Portugese Magnifico was named the PL Player of the month..",
      imageMine: "images/myself.jpg",
      postTime: "3 days ago",
      postersImage: "images/manchester.jpg",
    },
  ]);
  const [dmMessages, setDmMessages] = useState([
    {
      sender: "images/generali.jpg",
      senderName: "Generali_",
      lastMessage: "mah mehn niaje?",
    },
    {
      sender: "images/fabrizio.jpg",
      senderName: "fabriziorom",
      lastMessage: "I saw your request am on it",
    },
    {
      sender: "images/manchester.jpg",
      senderName: "manchester.united",
      lastMessage: "Sent ",
    },
    {
      sender: "images/jude.jpg",
      senderName: "jude.bellingham",
      lastMessage: "Thanks bruv.",
    },
    {
      sender: "images/bruno.webp",
      senderName: "brunofernandes",
      lastMessage: "Sent",
    },
  ]);
  // function to create posts from the posts array
  const createPosts = () => {
    if (posts) {
      return posts.map((post) => (
        <Post
          poster={post.poster}
          postedImage={post.postedImage}
          postDescription={post.postDescription}
          imageMine={post.imageMine}
          postTime={post.postTime}
          postersImage={post.postersImage}
        />
      ));
    } else {
      return 0;
    }
  };
  const createMessages = () => {
    if (dmMessages) {
      return dmMessages.map((message: any) => (
        <TheMessage
          sender={message.sender}
          senderName={message.senderName}
          lastMessage={message.lastMessage}
        />
      ));
    } else {
      return "No Messages";
    }
  };
  //function to move from home dm
  const homeMessages = () => {
    if (homeClass == "home") {
      setHomeClass("home-hide");
      setDmClass("messages");
    } else {
      setHomeClass("home");
      setDmClass("messages-hide");
    }
  };

  //function to move from home to adding post

  const homeAdd = () => {
    if (homeClass == "home") {
      setHomeClass("home-hide");
      setPostingClass("posting");
    } else if (homeClass == "home-hide" && profileClass == "profile") {
      setHomeClass("home-hide");
      setPostingClass("posting");
      setProfileClass("profile-hide");
      setCount(1);
    } else if (
      homeClass == "home-hide" &&
      profileClass == "profile-hide" &&
      count === 1
    ) {
      setHomeClass("home-hide");
      setPostingClass("posting-hide");
      setProfileClass("profile");
      setCount(0);
    } else {
      setHomeClass("home");
      setPostingClass("posting-hide");
      setProfileClass("profile-hide");
    }
  };

  //function to always go home

  const homeAlways = () => {
    setHomeClass("home");
    setDmClass("messages-hide");
    setPostingClass("posting-hide");
    setMessageAdding("adding-messages-hide");
    setProfileClass("profile-hide");
  };

  //function from home to my profile

  const homeProfile = () => {
    if (homeClass == "home") {
      setHomeClass("home-hide");
      setProfileClass("profile");
    } else {
    }
  };

  //functions that perform adding on the app
  const addingPosts = (post: any) => {
    const newPost = { ...post };
    setPosts([...posts, newPost]);
  };
  const messagesAdd = () => {
    if (dmClass == "messages") {
      setDmClass("messages-hide");
      setMessageAdding("adding-messages");
    } else {
      setDmClass("messages");
      setMessageAdding("adding-messages-hide");
    }
  };
  const addingMessages = (message: any) => {
    const newMessage = { ...message };
    setDmMessages([...dmMessages, newMessage]);
  };

  return (
    <>
      <div className="main">
        <div className="phone">
          <div className={homeClass} id="home">
            <Phonehead />
            <Insta togglePages={homeMessages} addHome={homeAdd} />
            <Stories />
            <div className="posts-line">{createPosts()}</div>
            <Bottom
              mySelf="images/myself.jpg"
              togglePages={homeAdd}
              goToProfile={homeProfile}
              homeDirect={homeAlways}
            />
          </div>
          <div className={dmClass} id="messages">
            <Phonehead />
            <MyBar backPages={homeMessages} goToAdd={messagesAdd} />
            <Search />
            <Active />
            <MessagesDm createdMessages={createMessages} />
          </div>
          <div className={postingClass}>
            <Phonehead />
            <PostingTop goBack={homeAdd} />
            <PostingForm addThePost={addingPosts} goingBack={homeAdd} />
          </div>
          <div className={messageAdding}>
            <Phonehead />
            <AddingMessages backPages={messagesAdd} />
            <NewMessageForm
              createTheMessage={addingMessages}
              goingBack={messagesAdd}
            />
          </div>
          <div className={profileClass}>
            <Phonehead />
            <ProfileTop addingAPost={homeAdd} />
            <div className="scrollable-space">
              <ProfileFollowers />
              <ProfileDescription />
              <ProfileButtons />
              <StoryHighlights />
              <ProfilePosts />
            </div>
            <Bottom
              mySelf="images/myself.jpg"
              togglePages={homeAdd}
              goToProfile={homeProfile}
              homeDirect={homeAlways}
            />
          </div>
          <div className="footer">
            <p>Created by Charles 2023 </p>
            <p>|</p>
            <p> All rights reserved</p>
            <p>|</p>
            <p>Copyright </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
