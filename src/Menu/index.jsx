import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import "react-circular-progressbar/dist/styles.css";

import { Footer } from "./styles"

export default function Menu(){
    const value = 0.16;
    return(
        <Footer>
            <Link to={"/habitos"}>Hábitos</Link>
            <div>
          <Link to="/hoje">
            <CircularProgressbar
              maxValue={1}
              background={true}
              value={value}
              text={`Hoje`}
              backgroundPadding={6}
              styles={buildStyles({
                textSize: "18px",
                pathColor: `#fff`,
                textColor: "#fff",
                trailColor: "#52B6FF",
                backgroundColor: "#52B6FF",
              })}
            />
          </Link>
        </div>
            <Link to={"/historico"}>Histórico</Link>
        </Footer>
    )
}