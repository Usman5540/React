import { useEffect, useState } from 'react';
import { PostForm, Container } from '../Components';
import { useParams, useNavigate } from 'react-router-dom';
import service from '../appwrite/configuration';
function EditPost() {
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const id = useParams();
  useEffect(() => {
    service
      .getonePost(id)
      .then((p) => {
        if (p) {
          setPost(p);
        } else {
          navigate('/');
        }
      })
      .catch((e) => console.log(e));
  });
  return post ? (
    <div className="w-full py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
