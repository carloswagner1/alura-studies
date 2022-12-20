import style from './Relogio.module.scss'
interface Props{
  time: number | undefined;
}
export default function Relogio({time = 0}: Props) {
  const minutes = Math.floor(time/60);
  const seconds = time % 60;
  const [minutesTen, minutesUnit]  = String(minutes).padStart(2, '0');
  const[segundoDezena, segundoUnidade] = String(seconds).padStart(2, '0');
  return (
    <>
      <span className={style.numberClock}>{minutesTen}</span>
      <span className={style.numberClock}>{minutesUnit}</span>
      <span className={style.divisionClock}>:</span>
      <span className={style.numberClock}>{segundoDezena}</span>
      <span className={style.numberClock}>{segundoUnidade}</span>
    </>
  )
}