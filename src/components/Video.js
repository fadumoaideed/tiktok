//rfce for template
import React, { useRef, useState } from "react";
import VideoFooter from "../components/VideoFooter";
import VideoSidebar from "../components/VideoSidebar";
function Video({ url, channel, description, song, likes, shares, messages }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    // if video is playing stop it otherwise play
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video_player"
        loop
        onClick={handleVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
