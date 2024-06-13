// components/CustomAudioPlayer.tsx
import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';

interface CustomAudioPlayerProps {
    src: string;
}

const CustomAudioPlayer: React.FC<CustomAudioPlayerProps> = ({ src }) => {
    return (
        <AudioPlayer
            autoPlay={true}
            src={src}
            onPlay={() => console.log("onPlay")}
            // other props here
        />
    );
};

export default CustomAudioPlayer;
