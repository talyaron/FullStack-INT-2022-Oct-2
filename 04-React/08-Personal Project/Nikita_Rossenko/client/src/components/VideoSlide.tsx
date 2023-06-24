/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const VideoSlide = () => {
    const sentences = [
        "Mission MARS - Reaching Mars is a challenging and ambitious endeavor that requires advanced technologies and extensive planning.",
        "Mars exploration missions aim to expand our knowledge of the red planet's geology, atmosphere, and potential for supporting microbial life.",
        "The ultimate goal of flying to Mars for colonization is to establish a sustainable human settlement that can support long-term exploration and research of the planet.",
        "Until humans reach Mars, it is crucial to prioritize the protection of planet Earth by implementing sustainable practices and reducing our impact on the environment."
    ];
    const [sentence, setSentence] = useState(sentences[0])

    function changeSentence() {
        const timer = setTimeout(() => {
            let currentSentence = sentences.indexOf(sentence)
            if (currentSentence === sentences.length -1) {
                currentSentence = 0
                setSentence(sentences[currentSentence])
            } else {
                currentSentence += 1
                setSentence(sentences[currentSentence])
            }
          }, 10000)
    }
    useEffect (() => {
        changeSentence()
    }, [sentence])



    return (
        <div className="videoContainer">
            <div className="sentensesContainer">
                <h1 className="sentensesSlide">
                        {sentence}
                </h1>
            </div>
            <div className="darken"></div>
            <video
                src="./src/assets/videos/world-2.mp4"
                autoPlay
                loop
                muted
            ></video>
        </div>
    );
};

export default VideoSlide;
