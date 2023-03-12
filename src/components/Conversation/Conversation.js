import "./Conversation.scss";
import User from "../User/User";

function Conversation({ videoDetail }) {
  const { comments } = videoDetail;
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };
  return (
    <section className="conversation">
      <h2 className="conversation__title">{comments.length} Comments</h2>
      <form className="conversation__form" id="comment__form">
        <section className="conversation__form__avatar">
          <div className="empty">
            <p className="empty__text">empty</p>
          </div>
          <User />
        </section>
        <section className="conversation__form__comment">
          <div className="conversation__form__comment__comment">
            <label
              htmlFor="comment"
              className="conversation__form__comment__comment__label"
            >
              JOIN THE CONVERSATION
            </label>
            <textarea
              name="comment"
              id="comment"
              className="conversation__form__comment__comment__box"
              form="comment__form"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <div className="conversation__form__comment__button">
            <div className="empty">
              <p className="empty__text">empty</p>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="conversation__form__comment__button__button"
            >
              COMMENT
            </button>
          </div>
        </section>
      </form>
    </section>
  );
};
export default Conversation;