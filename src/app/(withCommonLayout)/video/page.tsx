


type TProps = {
    searchParams: {
        videoCallingId: string;
    };
}



const VideoCallingPage = ({searchParams}:TProps) => {

    const { videoCallingId } = searchParams;
    console.log(videoCallingId);

  return (
     <div>
         <h1>This is VideoCallingPage component</h1>
     </div>
  )
};

export default VideoCallingPage;