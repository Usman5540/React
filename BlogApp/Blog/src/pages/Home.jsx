import { useEffect, useState } from 'react';
import service from '../appwrite/configuration';
import { Container } from 'postcss'; // Assuming 'postcss' is correctly imported
import { PostCard } from '../Components';

function Home() {
  const [posts, setPosts] = useState([]); // Change state variable name to 'posts'

  useEffect(() => {
    service
      .getPosts([])
      .then((p) => {
        if (p) {
          setPosts(p.documents); // Set posts state variable
        }
      })
      .catch((e) => console.log(e));
  }, []); // Add dependency array to useEffect to run only once on component mount

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 ">
        <Container>
          <div className="flex  flex-wrap">
            <h1 className="font-2xl hover:bg-gray-500">Log in to read posts</h1>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8 ">
        <Container>
          <div className="flex  flex-wrap">
            {posts.map(
              (
                post, // Map over 'posts' array
              ) => (
                <div key={post.$id}>
                  <PostCard post={post} />{' '}
                  {/* Pass individual 'post' to 'PostCard' component */}
                </div>
              ),
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
