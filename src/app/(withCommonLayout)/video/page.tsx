import VideoCall from "@/components/Ui/VideoCall/VideoCall";



type TProps = {
    searchParams: {
        videoCallingId: string;
    };
}



const VideoCallingPage = ({searchParams}:TProps) => {

    const { videoCallingId } = searchParams;
    console.log(videoCallingId);

  return  <VideoCall videoCallingId={videoCallingId} />;
};

export default VideoCallingPage;