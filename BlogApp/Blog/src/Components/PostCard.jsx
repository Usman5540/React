import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import configuration from '../appwrite/configuration';
function PostCard({ post }) {
  const { $id, title, featuredimage } = post;
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full justify-center ">
        <img src={configuration.getfilepreview(featuredimage)} alt="" />
      </div>
      <h2>{title}</h2>
    </Link>
  );
}
PostCard.propTypes = {
  post: propTypes.string,
  // // title:propTypes.string,
  // $id:propTypes.string,
  // featuredimage:propTypes.string
};

export default PostCard;
