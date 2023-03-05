import "./Conversation.scss";
import User from "../User/User";

function Conversation({ getVideoDetails }) {
  const { comments } = getVideoDetails();
  return (
    <section className="conversation">
      <h2 className="conversation__title">
        {comments.length} Comments
      </h2>
      <form className="conversation__form" id="comment__form">
        <section className="conversation__form__avatar">
          <User />
        </section>
        <section className="conversation__form__comment">
          <div className="conversation__form__comment__comment">
            <label
              htmlFor="comment"
              className="conversation__form__comment__comment__label label"
            >
              JOIN THE CONVERSATION
            </label>
            <br />
            <textarea
              name="comment"
              id="comment"
              className="conversation__form__comment__comment__box box"
              form="comment__form"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <div className="conversation__form__comment__button">
            <button
              type="submit"
              className="conversation__form__comment__button__button button"
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