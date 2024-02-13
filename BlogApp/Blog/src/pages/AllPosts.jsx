import { useEffect, useState } from 'react';
import service from '../appwrite/configuration';
import { Container, PostCard } from '../Components';
function AllPosts() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    // we can pass query as well in getposts
    // list of documents will be returned from getPosts method so that is why passed array
    service
      .getPosts([])
      .then((post) => {
        if (posts) {
          setPosts(post.documents); // all documents of the get array set into posts
        }
      })
      .catch((error) => console.log(error));
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap ">
          {posts.map(
            (
              p, // p represents each post
            ) => (
              <div key={p.$id}>
                <PostCard post={p} />
              </div>
            ),
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
