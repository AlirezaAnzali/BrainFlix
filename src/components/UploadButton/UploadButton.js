import "./UploadButton.scss"
import upload from "../../assets/images/upload.svg";

function UploadButton() {
    return (
        <button className="upload__button">
            <img className="upload__button__icon" src={upload} alt="upload icon"/>
            UPLOAD
        </button>
    )
};

export default UploadButton;