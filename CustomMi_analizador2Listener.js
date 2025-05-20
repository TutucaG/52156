import Mi_analizador2Listener from "./generated/Mi_analizador2Listener.js";

export class CustomMi_analizador2Listener extends Mi_analizador2Listener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}