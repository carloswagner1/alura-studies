import Button from "../Button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";
import { timeInSeconds } from "../../common/utils/time";


interface Props {
    selected: ITask | undefined, 
    endTask: () => void
}

export default function Cronometro({selected, endTask} : Props){
    const [time, setTime] = useState<number>();
    useEffect(() =>{
        if(selected?.time){
            setTime(timeInSeconds(selected.time))
        }
    }, [selected]);
    function regressive(counter: number = 0){
        setTimeout(() => {
            if(counter  > 0){
                setTime(counter - 1);
                return regressive(counter - 1);
            }   
            endTask();
        }, 1000);
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio time={time} />
            </div>
            <Button onClick = {() => regressive(time)}>
                Começar
            </Button>
        </div>
    )
}