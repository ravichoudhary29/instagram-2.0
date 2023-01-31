import React from "react";
import { useState, useEffect } from "react";
import Post from "../components/Post";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";

// const posts = [
//   {
//     id: "1",
//     username: "vegan.ravi",
//     userImg:
//       "https://media.licdn.com/dms/image/C4D03AQE4xpVsuzvOhQ/profile-displayphoto-shrink_800_800/0/1659469625854?e=1680134400&v=beta&t=Qc4RV1zt15Kr-vPWV6ttQWTxFCeeNQRVsu41vnlSSjc",
//     img: "https://scontent.fixr3-4.fna.fbcdn.net/v/t1.6435-9/161436557_3924645657579269_5476637152577217800_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=KN7qIy2m_CoAX8JQb1C&_nc_oc=AQkR8oAPK8Zzvtru2CZUSpXok6mcx1_G1_rKFLqCxkYA7qw0lsXnohlThKtsmA9sz9awF0mzodoTJrZeJo2QWUAq&_nc_ht=scontent.fixr3-4.fna&oh=00_AfDxkiXxeWn_BbRlJR0CqlKUb8vNzPzMTLFHIyCYd5kOlQ&oe=63FB43D3",
//     caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the youtube algorithm",
//   },
//   {
//     id: "2",
//     username: "bobbyjoshi",
//     userImg:
//       "https://cdn-cbpag.nitrocdn.com/CpIezciNCpcWrlwyZampeybwpaXmgRoF/assets/static/optimized/rev-e7c1b5c/wp-content/uploads/2020/04/bobby-joshi-1-1.jpg",
//     img: "https://cdn.pixabay.com/photo/2023/01/08/18/42/road-7705906_1280.jpg",
//     caption: "Streets of Netherlands. Visit with family and friends...",
//   },
//   {
//     id: "3",
//     username: "chandan",
//     userImg:
//       "https://static.javatpoint.com/biography/images/hrithik-roshan.jpg",
//     img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
//     caption:
//       "To get the adrenaline rush running inside your body exercise everyday",
//   },
//   {
//     id: "4",
//     username: "instagram",
//     userImg:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622",
//     img: "https://dge4uaysoh8oy.cloudfront.net/lp/creatopy/670/images/1653977198006_Instagram-ads-creator.png",
//     caption: "The best fitness application you can carry with you all day..",
//   },
//   {
//     id: "5",
//     username: "touropedia",
//     userImg:
//       "https://as1.ftcdn.net/v2/jpg/03/29/70/40/1000_F_329704062_ttb3jUvfeKY8kg7dUakUgiGKzITnU8LD.jpg",
//     img: "https://cdn.pixabay.com/photo/2022/04/18/04/37/mountain-7139402_1280.jpg",
//     caption: "The beauty of Uttarakhand is unmatchable",
//   },
//   {
//     id: "6",
//     username: "fit tuber",
//     userImg:
//       "https://yt3.googleusercontent.com/ytc/AL5GRJUsb4HEP-O9d5tXS2Ii-phRJbQGKOzO2DwYRbAZXw=s176-c-k-c0x00ffffff-no-rj",
//     img: "https://i.pinimg.com/564x/62/97/5a/62975a7eec7e210b6deb7b554bd42d62.jpg",
//     caption:
//       "Subscribe to the fit tuber community to get updated with the latest..",
//   },
//   {
//     id: "7",
//     username: "art life",
//     userImg:
//       "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/bfbs5h1bttui96n5qnjj",
//     img: "https://cdn.pixabay.com/photo/2022/07/11/10/42/boho-style-7314646_1280.png",
//     caption: "Contact for designing any kind of art for your website",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),

    [db]
  );

  // console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
