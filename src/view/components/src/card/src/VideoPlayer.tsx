import React, { useEffect, useRef, useState } from 'react'

export const VideoPlayer = ({video}:{video: string}) => {
    
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressBarRef = useRef<HTMLInputElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');

  const togglePlayPause = () => {
      if (videoRef.current) {
          if (videoRef.current.paused || videoRef.current.ended) {
          videoRef.current.play();
          setIsPlaying(true);
          } else {
          videoRef.current.pause();
          setIsPlaying(false);
          }
      }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && progressBarRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      progressBarRef.current.value = progress.toString();
      updateDisplayTime();
    }
  };

  const updateDisplayTime = () => {
      if (videoRef.current) {
      const currentMinutes = Math.floor(videoRef.current.currentTime / 60);
      const currentSeconds = Math.floor(videoRef.current.currentTime % 60);
      const totalMinutes = Math.floor(videoRef.current.duration / 60);
      const totalSeconds = Math.floor(videoRef.current.duration % 60);
      setCurrentTime(`${pad(currentMinutes)}:${pad(currentSeconds)}`);
      setDuration(`${pad(totalMinutes)}:${pad(totalSeconds)}`);
      }
  };

  const pad = (number: number) => (number < 10 ? `0${number}` : number);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const volume = parseFloat(event.target.value);
      setVolume(volume);
      if (videoRef.current) {
      videoRef.current.volume = volume;
      }
  };

  const toggleMute = () => {
      if (videoRef.current) {
      setMuted(!muted);
      videoRef.current.muted = !muted;
      }
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current && progressBarRef.current) {
      const seekTime = (parseFloat(event.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
    }
  };

  useEffect(() => {
      if (videoRef.current) {
          videoRef.current.volume = volume;
      }
  }, [volume]);

  return (
      <div className='kui-lecteur-video'>
        <video
          ref={videoRef}
          className="video"
          
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={updateDisplayTime}
          src={video}
          controls={false}
          onClick={togglePlayPause}
        />
        <div className="kui-lecteur-video__controls">
          <button onClick={togglePlayPause} type='button' className='kui-lecteur-video__btn'>
            <i className={isPlaying ? 'pi-pause-line' : 'pi-play-line'}/>
          </button>

          <div className='kui-lecteur-video__time'>
            <input
              ref={progressBarRef}
              type="range"
              className="progress-bar"
              defaultValue="0"
              step="0.1"
              min="0"
              max="100"
              onChange={handleProgressChange}
            />
            <span>{currentTime} / {duration}</span>
          </div>
          
          <div className='kui-lecteur-video__volume'>
            <button className='kui-lecteur-video__btn' onClick={toggleMute}><i className={muted ? 'pi-volume-off-line' : 'pi-volume-line'}/></button>
            <input
              type="range"
              className="volume-control"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>  
  )
}
