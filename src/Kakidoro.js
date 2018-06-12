import React, { Component } from 'react';
import './Kakidoro.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Sound from 'react-sound';
import Alarm from './assets/alarm.mp3';

class Kakidoro extends Component {

  workTimes = {
    work: 5,//1500,
    short: 5,
    long: 600
  }

  state = {
    step: 'work',//,'short', 'long'
    timeInSeconds: 1500,
    playStatus: 'paused',//, 'running',
    playSongCounter: 0 //gambiara pra permitir que o som continue rolando por X segundos.
  }

  componentDidMount() {
    this.timerId = setInterval(this.tickState, 1000);
    console.log("id:" + this.timerId);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {

    const timeComponent = this.createTimeComponent(this.state.timeInSeconds, this.state.playStatus, this.state.step);

    return (
      <Card className="Kakidoro">
        <CardContent>
          <div className="TimeBox">
            {timeComponent}
          </div>
          <br/>
          <div>
            {
              this.state.playStatus === 'paused' ?
              <Button variant="fab" color="primary"  onClick={() => this.setState({playStatus: 'running'})}>
                <PlayArrowIcon />
              </Button> :
              <Button variant="fab" color="secondary"  onClick={() => this.setState({playStatus: 'paused'})}>
              <PauseIcon />
              </Button>
            }
          </div>
          <br/>
          <div>
            <Button style={{margin: "3px"}} variant="flat" size="small" color={this.state.step ==='work' ? "primary" : "secondary"} onClick={() => this.switchStep('work')}>WORK</Button>
            <Button style={{margin: "3px"}} variant="flat" size="small" color={this.state.step ==='short' ? "primary" : "secondary"} onClick={() => this.switchStep('short')}>SHORT BREAK</Button>
            <Button style={{margin: "3px"}} variant="flat" size="small" color={this.state.step ==='long' ? "primary" : "secondary"} onClick={() => this.switchStep('long')}>LONG BREAK</Button>
          </div>
        </CardContent>
        { this.state.playSongCounter > 0 ? <Sound url={Alarm} playStatus={Sound.status.PLAYING}></Sound> : null}
      </Card>
    );

  }

  tickState = () => {

    this.setState(prevState => {

      //Nao muda nada se tiver parado ou se ja chegou em zero
      if(prevState.timeInSeconds === 0 || prevState.playStatus === 'paused') {

        if(prevState.playStatus !== 'paused') {
          return { playStatus: 'paused', playSongCounter: 10 }; //define que a musica vai tocar por 5 segundos
        }
        else {
          return { playSongCounter:Math.max(0, prevState.playSongCounter - 1)}; //vai reduzindo ate chegar em zero
        }
      }

      return { timeInSeconds: prevState.timeInSeconds - 1 }

    });
  }
  switchStep = (step) => {
    this.setState({
      step: step,
      timeInSeconds: this.workTimes[step]
    });
  }

  createTimeComponent = (timeValue, playStatus, step) => {

    if(timeValue === 0)
    {
      const subText = step === 'work' ? "Get some rest!" : "Back to work!";
      return  (
        <div >
          <Typography className="TaskCompleted" variant="display3" color="primary">
            TIME'S UP
          </Typography>
          <Typography variant="display1">{subText}</Typography>
        </div>);
    }

    const minutes = Math.floor(timeValue / 60);
    const seconds = (timeValue - (minutes * 60));
    const timeString = this.zpad(minutes,2) + ':' + this.zpad(seconds,2);

    return  (
      <Typography variant="display4" color={this.state.playStatus === 'running' ? "primary" : "secondary"}>
        {timeString}
      </Typography>);
  }

   zpad = (n, len) => {
    return 0..toFixed(len).slice(2,-n.toString().length)+n.toString();
  }
}

export default Kakidoro;
