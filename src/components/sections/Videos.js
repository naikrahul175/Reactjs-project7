import React from 'react'
// import video1 from "../../videos/butterfly.mp4"
// import video2 from "../../videos/dog.mp4"
// import video3 from "../../videos/fish.mp4"
// import video4 from "../../videos/bunny.flv"
import img1 from  "../../images/video1.png"
import img2 from  "../../images/video2.png"
import img4 from  "../../images/video3.png"
import img3 from  "../../images/video4.png"


const Videos = () => {
  return (
    <section className='Videos' style={{margin:40}}>
      <h2 className='Videos-title'>Latest Videos</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="Videos container" >
        {/* <div className="Video-col">
          <video src={video1}  width="100%" />
        </div>
        <div className="Video-col">
          <video src={video2} width="100%" controls />
        </div>
          <div className="Video-col">
          <video src={video3} width="100%" controls />
          </div>
          <div className="Video-col">
          <video src={video4} width="100%" controls />
          </div> */}
          <div className="Video-row" >
              <div className="Video-col" >
                  <img src={img1} alt="video" width="300px" height="350px"/><br/>
                    <button onClick={()=> alert("Pending work , just wait for next update")} className='col-1 play-btn'><i class="uil uil-play"></i></button>
                    <p className='col-1 text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="Video-col">
                <div className="Video-col-top">
                  <img src={img2} alt="video" width="350px" height="175px"/><br/>
                    <button onClick={()=> alert("Pending work , just wait for next update")} className="col-2 play-btn"><i class="uil uil-play"></i></button>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='video-col-bottom'>
                  <img src={img3} alt="video" width="350px" height="175px"/><br/>
                    <button onClick={()=> alert("Pending work , just wait for next update")} className='col-2 play-btn'><i class="uil uil-play"></i></button>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="Video-col">
                <img src={img4} alt="video" width="300px" height="350px"/><br/>
                  <button onClick={()=> alert("Pending work , just wait for next update")} className=' col-3 play-btn'><i class="uil uil-play"></i></button>
                  <p className='col-3 text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Videos
