import "./Home.css"

export default function Home() {

    return(
        <section className="Corpo">
            <div className="contenitore">
                <div className="scritta">
                    <p>Benvenuti al ristorante "La Forchetta", godetevi i nostri piatti fatti con amore e con passione dai nostri chef. Clicca il pulsante qui a fianco per prenotare un tavolo</p>
                </div>
                <button className="btn">
                    <span className="prenota-border"></span>
                    <span className="prenota-text">Book a Table</span>
                </button>
            </div>
        </section>   
    );
}