export default class Elem {
    #adat
    #i
    constructor(adat, i, szuloElem) {
        this.#adat = adat;
        this.#i = i;
        this.szuloElem = szuloElem;
        console.log(this.szuloElem)
        this.megjelenit();
        this.#kattintasKezelo();
    }
    megjelenit() {
        let osztaly = "";
        if (this.#adat === "X") {
            osztaly = "x";
        } else if (this.#adat === "O") {
            osztaly = "o";
        }
        let html = `<div class="elem">
                        <div class="${osztaly}">${this.#adat}</div>
                    </div>`;
        this.szuloElem.insertAdjacentHTML("beforeend", html);
    }
    #kattintasKezelo() {
        this.elem = document.querySelector(".elem:last-child")
        this.elem.addEventListener("click", (event) => {
            this.#sajatEsemeny();
        })
    }
    #sajatEsemeny() {
        console.log("saját esemény")
        const e = new CustomEvent("kattint", { detail: this.#i })
        window.dispatchEvent(e);
    }
}