import axios from "axios";
import "../style/comment.scss";
import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

interface CommentProps {
  projectId?: string;
}

interface CommentState {
  user: {
    username: string;
  };
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ projectId }) => {
  const [comments, setComments] = useState<CommentState[]>([]);

  useEffect(() => {
    const getProjectDetails = async () => {
      try {
        const response = await axios.get(
          `/api/comment/get-comments-by-projectId?projectId=${projectId}`
        );
        const { data } = response;
        setComments(data.commentDB);
      } catch (error: any) {
        console.error(error);
      }
    };

    getProjectDetails();
  }, [projectId]);

  async function handleAddComment(e: any) {
    e.preventDefault();
    const comment = e.target.comment.value;
    const { data } = await axios.post("/api/comment/add-comment", {
      comment,
      projectId,
    });
    setComments((prevComments) => ([...prevComments,data.commentDB]))
  }

  return (
    <div className="containerComment">
      <div className="col-md-12" id="fbcomment">
        <div className="body_comment">
          <div className="row">
            <div className="avatar_comment col-md-1">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                alt="avatar"
              />
            </div>
            <form onSubmit={handleAddComment} className="box_comment col-md-11">
              <textarea
                name="comment"
                className="commentar"
                placeholder="Add a comment..."
              ></textarea>
              <div className="box_post">
                <div className="pull-right">
                  <input
                    type="submit"
                    value="SEND"
                    id="button-blue"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div>
          {comments.map((comment) => (
            <CommentCard
              username={comment.user.username}
              content={comment.comment} key={""}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Comment;
