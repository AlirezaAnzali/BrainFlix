import Header from "../../components/Header/Header";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { videosEndpoint } from "../../utils/api-utils";
import axios from "axios";
import "./Upload.scss"

function Upload({ setVideos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(videosEndpoint, { title, description })
      .then(() => {
        alert("Your video is published successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "There was an error publishing your video. Please try again later."
        );
      });
  };

  
  return (
    <div className="page">
      <Header />
      <form className="page__upload" onSubmit={handleSubmit}>
        <section className="page__upload__title">
          <h1 className="page__upload__title__name">Upload Video</h1>
        </section>
        <section className="page__upload__main">
          <section className="page__upload__main__picture">
            <label className="label" htmlFor="picture">
              VIDEO THUMBNAIL
            </label>
            <div
              className="page__upload__main__picture__container"
              id="picture"
            >
              <img
                className="page__upload__main__picture__container__image"
                src={Thumbnail}
                alt="video thumbnail"
              />
            </div>
          </section>
          <section className="page__upload__main__form">
            <label className="label" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              className="page__upload__main__form__title box"
              type="text"
              id="title"
              name="title"
              placeholder="Add a title to your video"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="label" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="page__upload__main__form__description box"
              id="description"
              name="description"
              placeholder="Add a description to your video"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </section>
        </section>
        <section className="page__upload__buttons">
          <span
            className="page__upload__buttons__cancel first"
            onClick={handleCancel}
          >
            CANCEL
          </span>
          <button
            onClick={handleSubmit}
            className="page__upload__buttons__publish"
            type="submit"
          >
            PUBLISH
          </button>
          <span
            className="page__upload__buttons__cancel last"
            onClick={handleCancel}
          >
            CANCEL
          </span>
        </section>
      </form>
    </div>
  );
}

export default Upload;