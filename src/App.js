import "./App.css";
import "./styles/Video.css";
import Video from "./components/Video";
function App() {
  //BEM naming convention
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          channel="faideed"
          description="I fell at the end"
          song="staying alive remix beegees citygirls"
          url="https://webapp-va.tiktok.com/e400d324ea94b9fe046cd5b7404/605d4f49/kmoat/tos-useast2a-ve-0068c003/dd5b32ec78f04ad49efb65a45e5b0b97?a=1988&br=2760&bt=1380&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dpk=VxLg6ajV%2FwQeN%2BDbjnxSL91vZAtlDmhH6rXMVhj5QKz%2Brhln4pa3sye1NQCS%2FVtgJMljkeOhy5fkkQCoBK5x3as2A5oUAjyS4Bp3tQ%3D%3D&dpm=cenc-aes-ctr&dr=0&ds=3&er=&l=202103252104260101901881605A3263A3&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=eyJ2bSI6MiwiY2siOiJ0dF93ZWJpZF92MiIsInVpZCI6IjY5MDM2NjAwNDE0ODQ3MTUwMTAifQ%3D%3D&qs=0&rc=anFzaW02OGc5NDMzMzczM0ApNGg0NTk0ZmU3N2k2aGlkaGdqbWBkcGxpYGJgLS1iMTZzcy5hYzIxX18uNWI2M2FiX186Yw%3D%3D&vl=&vr="
          likes={40}
          shares={40}
          messages={40}
        />
        <Video
          channel="f111"
          description="I fell at the end"
          song="dreams pied piper"
          url="https://webapp-va.tiktok.com/88308059b0f304ebd56de0bad/605d4ed6/kmoat/tos-useast2a-ve-0068c004/1aed9139cc2748d4b61376764b67998a?a=1988&br=2742&bt=1371&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dpk=KackLTU6zQo4FjJryTEBR5UwJzKltIxkhozsP3aRqDF27oFZHDYV3258BfLH2xuxdBBfC9dN8J5ol2D5bfyc8ufjAyH022GPrkhQtw%3D%3D&dpm=cenc-aes-ctr&dr=0&ds=3&er=&l=2021032521022901018907114956327E6C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=eyJ2bSI6MiwiY2siOiJ0dF93ZWJpZF92MiIsInVpZCI6IjY5MDM2NjAwNDE0ODQ3MTUwMTAifQ%3D%3D&qs=0&rc=anZrNjlmdXk6MzMzNzczM0ApNzs4N2k2NztmN2Y8ZGVkaWcyMG1lcnBjMGBgLS00MTZzczE1NDQwLjEwYjAyMTA0MDU6Yw%3D%3D&vl=&vr="
          likes={100000000}
          shares={50}
          messages={800}
        />
        <Video
          channel="f111"
          description="OMG check this out!!"
          song="no sound"
          url="https://webapp-va.tiktok.com/edc96d6722ae1938f3b665ef99b/605cbbf1/kmoat/tos-useast2a-ve-0068c001/e6afd544923d4aaaaeba723fe90fca8e?a=1988&br=1696&bt=848&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dpk=PWWt1Ndlw0ObLd7GgR7dnvvUhfobUqjFSgEMGYQ%2FlfbdcyP3E1zZOPv6vn%2BS0YgzgMqWa%2FPV8i6Cx%2FYQLo%2F1zec8gzwIsGy5PbJ42g%3D%3D&dpm=cenc-aes-ctr&dr=0&ds=3&er=&l=202103251035020101902090952C0B9154&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=eyJ2bSI6MiwiY2siOiJ0dF93ZWJpZF92MiIsInVpZCI6IjY5MDM2NjAwNDE0ODQ3MTUwMTAifQ%3D%3D&qs=0&rc=amQ1aDxrZmg5NDMzNDczM0ApZjo6OTo4OGRnN2g1Zmk1aWc2Y2duam9vYWJgLS0xMTZzcy00L2EyNl8yYGBgXzU0NTY6Yw%3D%3D&vl=&vr="
          likes={13}
          shares={4}
          messages={3}
        />

        {/* <Video url="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c003/c2c49746e1394a659605240b0f56e8c1/?a=1988&br=1124&bt=562&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1616688576&l=20210325100914010189074016250A3825&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M2htdDt4OjY3NDMzZzczM0ApOTQ3NWgzMzxlNzhnZmQ0aWdnNnFvaW9vZl9gLS0xMTZzc182Li0vLTQuLzE2YV8zM146Yw%3D%3D&signature=3ce05bca6869afd8507326bce8f570c7&tk=tt_webid_v2&vl=&vr=" /> */}
      </div>

      {/* {app container} */}
      {/* {<Video />} */}
      {/* {<Video />} */}
    </div>
  );
}

export default App;
