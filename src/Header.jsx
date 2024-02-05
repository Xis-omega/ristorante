import "./Header.css"
import Pesce from "./assets/pesce.png"

export default function Header() {

    return(
        <header>
            <div className="card-container">
                <div className="card">
                    <div className="Cibo">
                        <img className="cibo-img" src={Pesce} alt="pizza" />
                    </div>
                    <hr />
                    <h2 className="titolo">Pizza</h2>
                    <hr />
                    <p className="p">Deliziosa pizza italiana con mozzarella e pomodoro.</p>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="Cibo">
                        <img className="cibo-img" src={Pesce} alt="pizza" />
                    </div>
                    <hr />
                    <h2 className="titolo">Pizza</h2>
                    <hr />
                    <p className="p">Deliziosa pizza italiana con mozzarella e pomodoro.</p>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="Cibo">
                        <img className="cibo-img" src={Pesce} alt="pizza" />
                    </div>
                    <hr />
                    <h2 className="titolo">Pizza</h2>
                    <hr />
                    <p className="p">Deliziosa pizza italiana con mozzarella e pomodoro.</p>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="Cibo">
                        <img className="cibo-img" src={Pesce} alt="pizza" />
                    </div>
                    <hr />
                    <h2 className="titolo">Pizza</h2>
                    <hr />
                    <p className="p">Deliziosa pizza italiana con mozzarella e pomodoro.</p>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="Cibo">
                        <img className="cibo-img" src={Pesce} alt="pizza" />
                    </div>
                    <hr />
                    <h2 className="titolo">Pizza</h2>
                    <hr />
                    <p className="p">Deliziosa pizza italiana con mozzarella e pomodoro.</p>
                </div>
            </div>
        </header>
    );
}