import React from "react";

interface CommentCardProps {
  username: string;
  content: string;
  key: string;
}

const CommentCard: React.FC<CommentCardProps> = ({ username, content, key }) => {
  return (
    <div key={key}>
      <div className="avatar_comment col-md-1">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
          alt="avatar"
        />
      </div>
      <div className="result_comment col-md-11">
        <h4>{username}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
