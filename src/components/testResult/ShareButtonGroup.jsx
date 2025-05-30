import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  XIcon,
  TwitterShareButton,
} from "react-share";
import { base_url } from "../../App";
import styles from "./shareButtonGroup.module.css";
import CopyToClipboard from "react-copy-to-clipboard";

const ShareButtonGroup = ({ testParam, resultParam, renderTestInfo, lang }) => {
  const foreignTextsObject = {
    Kor: "친구에게 공유하기",
    Eng: "Share with Friends",
    JP: "友達に共有する",
  };
  return (
    <div>
      <h3>{lang && foreignTextsObject[lang]}</h3>
      <div className={styles.shareButtonDiv}>
        <FacebookShareButton
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtag={`#${renderTestInfo?.info?.mainTitle}`}
        >
          <FacebookIcon
            round={true}
            size={48}
            className={styles.socialMediaIcon}
          />
        </FacebookShareButton>
        <TwitterShareButton
          title={renderTestInfo?.info?.mainTitle}
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtags={[renderTestInfo?.info?.mainTitle]}
        >
          <XIcon round={true} size={48} className={styles.socialMediaIcon} />
        </TwitterShareButton>
        <CopyToClipboard
          text={`${base_url}/${testParam}/result/${resultParam}`}
        >
          <button
            onClick={() => alert("URL이 복사되었습니다.")}
            className={styles.urlShareButton}
          >
            URL
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShareButtonGroup;
