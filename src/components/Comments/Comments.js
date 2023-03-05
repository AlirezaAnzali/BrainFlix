import "./Comments.scss";

function Comments({ getVideoDetails }) {
  const { comments } = getVideoDetails();
  return (
    <section className="comments">
      {comments.map((comment) => (
        <section className="comments__comment" key={comment.id}>
          <section className="comments__comment__avatar">
            <div className="comments__comment__avatar__image"></div>
          </section>
          <section className="comments__comment__comment">
            <div className="comments__comment__comment__name">
              <p className="comments__comment__comment__name__name">
                {comment.name}
              </p>
              <p className="comments__comment__comment__name__date">
                {(() => {
                  const date = new Date(comment.timestamp);
                  const options = {
                    timeZone: "UTC",
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  };
                  return date.toLocaleDateString("en-US", options);
                })()}
              </p>
            </div>
            <p className="comments__comment__comment__text">
              {comment.comment}
            </p>
          </section>
        </section>
      ))}
    </section>
  );
}

export default Comments;
