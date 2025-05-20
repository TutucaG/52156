import Mi_analizador2Visitor from './generated/Mi_analizador2Visitor.js';

export default class CustomMi_analizador2Visitor extends Mi_analizador2Visitor {

    visitPrograma(ctx) {
        let resultado = '';

        const nodos = [
            ...(ctx.declaracion?.() || []),
            ...(ctx.funcion?.() || []),
            ...(ctx.ejecucion?.() || [])  // ✅ Corregido: sin tilde
        ];

        for (const nodo of nodos) {
            const traducido = this.visit(nodo);
            if (traducido !== undefined) {
                resultado += traducido + '\n';
            }
        }

        return resultado;
    }

    visitDeclaracion(ctx) {
        const nombre = ctx.NOMBRE().getText(); 
        let valor = 'undefined';

        if (ctx.valor()) {
            valor = this.visit(ctx.valor());
        }

        return `let ${nombre} = ${valor};`;
    }

    visitFuncion(ctx) {
        const nombre = ctx.NOMBRE().getText(); 
        const args = ctx.argumentos() ? this.visit(ctx.argumentos()) : '';
        const cuerpo = this.visit(ctx.instrucciones());

        return `function ${nombre}(${args}) {\n${cuerpo}\n}`;
    }

    visitArgumentos(ctx) {
        const var1 = this.visit(ctx.variable());
        const resto = ctx.argumentos() ? this.visit(ctx.argumentos()) : '';
        return resto ? `${var1}, ${resto}` : var1;
    }

    visitVariable(ctx) {
        return ctx.NOMBRE().getText(); 
    }

    visitValor(ctx) {
        if (ctx.TEXTO()) {
            return ctx.TEXTO().getText();
        } else if (ctx.NUMERO()) {
            return ctx.NUMERO().getText();
        } else {
            return this.visit(ctx.variable());
        }
    }

    visitCadena(ctx) {
        if (ctx.TEXTO()) {
            return ctx.TEXTO().getText();
        } else {
            return this.visit(ctx.variable());
        }
    }

    visitImpresion(ctx) {
        const valor = this.visit(ctx.valor());
        return `console.log(${valor});`;
    }

    visitInstrucciones(ctx) {
        let codigo = '';

        const posibles = [
            ...(ctx.operacion_texto?.() || []),
            ...(ctx.impresion?.() || []),
            ...(ctx.retorno?.() || [])
        ];

        for (const instr of posibles) {
            const linea = this.visit(instr);
            if (linea !== undefined) {
                codigo += linea + '\n';
            }
        }

        return codigo;
    }

    visitOperacion_texto(ctx) {
        const variable = this.visit(ctx.variable());
        const transformacion = ctx.transformacion().getText();
        const cadena = this.visit(ctx.cadena());

        let expresion;

        switch (transformacion) {
            case 'mayusculas':
                expresion = `${cadena}.toUpperCase()`;
                break;
            case 'minusculas':
                expresion = `${cadena}.toLowerCase()`;
                break;
            case 'longitud':
                expresion = `${cadena}.length`;
                break;
            case 'invertir':
                expresion = `${cadena}.split('').reverse().join('')`;
                break;
            case 'reemplazar':
                expresion = `${cadena}.replace("a", "b")`;
                break;
            default:
                expresion = cadena;
        }

        return `let ${variable} = ${expresion};`;
    }

    visitRetorno(ctx) {
        const valor = this.visit(ctx.valor());
        return `return ${valor};`;
    }

    visitEjecucion(ctx) {
    if (ctx.impresion()) {
        return this.visit(ctx.impresion());
    }

    const nombreFuncion = ctx.NOMBRE().getText();
    const args = ctx.argumentos() ? this.visit(ctx.argumentos()) : '';
    return `${nombreFuncion}(${args});`;
   }

}
