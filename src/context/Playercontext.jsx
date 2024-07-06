import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

const PlayerContext = createContext();

const PlayerContextProvider  = (props)=>{

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track , setTrack]  = useState(songsData[1]);
    const [playStatus , setPlayStatus] = useState(false);
    const [time , setTime] = useState({currentTime:{
        second:"00",
        minute:0
    },
    totalTime:{
        second:"00",
        minute:0
    }
    });

    const play = ()=>{
        if(!audioRef.current){
            return;
        }
        audioRef.current.play();
        setPlayStatus(true);
    }


    const pause = ()=>{
        if(!audioRef.current){
            return;
        }
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playwithId = async (id)=>{
        const songId = songsData[id];
        await setTrack(songId);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const prev  = async ()=>{

        if(track.id>0){
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next  = async ()=>{
        
       if(track.id<songsData.length-1){
            track.id = track.id%songsData.length;
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            setPlayStatus(true);
       }
    }

    const seekSong = async (e)=>{
       audioRef.current.currentTime = (e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration;
    }

    const playRandom = async  ()=>{
        const id = Math.floor((Math.random()*songsData.length));
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = ()=>{
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
                setTime({
                    currentTime:{
                        second:Math.floor(audioRef.current.currentTime%60)<10?"0"+Math.floor(audioRef.current.currentTime%60):Math.floor(audioRef.current.currentTime%60),
                        minute:+Math.floor(audioRef.current.currentTime/60)
                    },
                    totalTime:{
                        second:""+Math.floor(audioRef.current.duration%60),
                        minute:+Math.floor(audioRef.current.duration/60)
                    }
                })
            }
        },1000)
    },[audioRef])

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,setTrack,playStatus,setPlayStatus,time,setTime,play,pause,playwithId,prev,next,seekSong,playRandom
        // Add other context values here if needed...
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export { PlayerContext, PlayerContextProvider };