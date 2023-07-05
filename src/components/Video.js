export default function Video() {
  return (
    <div>
      <video
        src="assets/bg_video.mp4"
        className="bg"
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </div>
  );
}
