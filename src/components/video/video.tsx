export const Video = ({ video }: any) => {
  return (
    <video id="iframe" width="800" height="400" muted loop autoPlay>
      <source src={video} />
    </video>
  );
};

export default Video;
