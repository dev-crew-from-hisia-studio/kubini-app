import Lottie from '@lottielab/lottie-player/react';
import { FC } from 'react';
import animation from '../../lottie';

interface LottieInterface {
  url: any, 
  size: any, 
  autoplay: boolean, 
  play: boolean, 
  loop: boolean, 
  direction?: 1 | -1, 
}
interface ALottieInterface {
  size: any, 
  autoplay: boolean, 
  play: boolean, 
  loop: boolean, 
  direction?: 1 | -1, 
}

const LottieComponent:FC<LottieInterface> = ({url, size, autoplay, play, loop, direction=1}) => {
  return (
      <Lottie 
          lottie={url} 
          preserveAspectRatio='xMidYMid slice' 
          style={{ height: size.height, width: size.width }} 
          autoplay={autoplay} 
          playing={play} 
          loop={loop}
          direction={direction}
      />
  )
}   

export const  EmptyNotification:FC<ALottieInterface>  = ({size, autoplay, play, loop, direction=1}) => {
  const {animation1} = animation
  return (
      <LottieComponent url={animation1} size={size} autoplay={autoplay} play={play} loop={loop} direction={direction}/>
  )
}


export const  SuccessOne:FC<ALottieInterface>  = ({size, autoplay, play, loop, direction=1}) => {
  const {animation2} = animation
  return (
      <LottieComponent url={animation2} size={size} autoplay={autoplay} play={play} loop={loop} direction={direction}/>
  )
}


export const  LoaderAnimation:FC<ALottieInterface>  = ({size, autoplay, play, loop, direction=1}) => {
  const {animation3} = animation
  return (
      <LottieComponent url={animation3} size={size} autoplay={autoplay} play={play} loop={loop} direction={direction}/>
  )
}

export const  EmptyList:FC<ALottieInterface>  = ({size, autoplay, play, loop, direction=1}) => {
  const {animation4} = animation
  return (
      <LottieComponent url={animation4} size={size} autoplay={autoplay} play={play} loop={loop} direction={direction}/>
  )
}


export const  AddFileSuccess:FC<ALottieInterface>  = ({size, autoplay, play, loop, direction=1}) => {
  const {animation5} = animation
  return (
      <LottieComponent url={animation5} size={size} autoplay={autoplay} play={play} loop={loop} direction={direction}/>
  )
}

export const  NotFoundError:FC<ALottieInterface>  = ({size, autoplay, play, loop, direction=1}) => {
  const {animation6} = animation
  return (
      <LottieComponent url={animation6} size={size} autoplay={autoplay} play={play} loop={loop} direction={direction}/>
  )
}


export const  FailIllu:FC<ALottieInterface>  = ({size, autoplay, play, loop, direction=1}) => {
  const {fail} = animation
  return (
      <LottieComponent url={fail} size={size} autoplay={autoplay} play={play} loop={loop} direction={direction}/>
  )
}

export const  AddSuccessIllu:FC<ALottieInterface>  = ({size, autoplay, play, loop, direction=1}) => {
  const {success} = animation
  return (
      <LottieComponent url={success} size={size} autoplay={autoplay} play={play} loop={loop} direction={direction}/>
  )
}

export const  FileAddIllu:FC<ALottieInterface>  = ({size, autoplay, play, loop, direction=1}) => {
  const {file_add} = animation
  return (
      <LottieComponent url={file_add} size={size} autoplay={autoplay} play={play} loop={loop} direction={direction}/>
  )
}

export const FileSaveIllu:FC<ALottieInterface>  = ({size, autoplay, play, loop, direction=1}) => {
  const {file_save} = animation
  return (
      <LottieComponent url={file_save} size={size} autoplay={autoplay} play={play} loop={loop} direction={direction}/>
  )
}

