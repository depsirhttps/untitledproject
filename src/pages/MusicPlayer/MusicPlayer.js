import React from "react";
import classes from "./MusicPlayer.module.css";
import InformationDisplay from "./components/InformationDisplay";
import Visualizer from "./components/Visualizer";
import ProgressBar from "./components/ProgressBar";
import ControlPanel from "./components/ControlPanel";

const data = [
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
  {
    size: Math.max(10, Math.floor(Math.random() * 100)),
  },
];

const MusicPlayer = (props) => {
  return (
    <div className={classes.musicPlayer}>
      <InformationDisplay />
      <Visualizer data={data} />
      <ProgressBar/>
      <ControlPanel/>
    </div>
  );
};

export default MusicPlayer;
