
import { useState } from "react"
import vid1 from "./assets/F2FEEE0A-015F-41C4-AD3E-878E178BFD15.mp4"
import vid2 from "./assets/left-vid-2.mp4"


export const LeftEye = ({ setLeftClicked, leftClicked }) => {
    // show info state
    const [showInfo, setShowInfo] = useState(false)

    const clickedState = () => {
        setLeftClicked(true)
    }
    // clears info box and sets clicked state back to false
    const exitButton = () => {
        setShowInfo(false)
        setLeftClicked(false)
    }

    return (
        <>
            <section className="left-eye-container">
                <div className="box-left">
                    {/* video is set up so mouseOver starts video and mouseOut pauses video, unless clicked state is true */}
                    <video muted
                        autoPlay={leftClicked ? true : false}
                        className="eye-video-left"
                        onMouseOver={event => event.target.play()}
                        onEnded={leftClicked ? () => setShowInfo(true) : () => ''}
                        onMouseOut={leftClicked ? event => event.target.play() : event => event.target.pause()}
                        src={`${leftClicked ? vid2 : vid1}`}
                        // poster is initial photo before video play
                        poster={leftClicked ? '' : "https://c4.wallpaperflare.com/wallpaper/78/739/793/anime-original-girl-meadow-hd-wallpaper-preview.jpg"}>
                    </video>
                    {/* info button. Disappears when clicked */}
                    {
                        leftClicked ?
                            '' : <button className="video-buttons" id="left-eye-button"
                                onClick={() => clickedState()}>Software</button>
                    }
                    {/* info box and all info needed */}
                    {
                        showInfo ?
                            <div className="info-box">
                                <div id="exit-left" onClick={() => exitButton()}>⚔︎</div>
                                <h3>Full-Stack
                                    <br></br>
                                    Development</h3>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Python</li>
                                    <li>Django</li>
                                    <li>SQL</li>
                                </ul>
                            </div>
                            :
                            ''
                    }
                </div>
            </section>
        </>
    )
}