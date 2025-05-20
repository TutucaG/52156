import Mi_analizador2Lexer from "./generated/Mi_analizador2Lexer.js";
import Mi_analizador2Parser from "./generated/Mi_analizador2Parser.js";
import CustomMi_analizador2Visitor from "./CustomMi_analizador2Visitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';


async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrónica.
    try {
        input = fs.readFileSync('input.js', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Proceso la entrada con el analizador para obtener el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new Mi_analizador2Lexer(inputStream);
    
    // Verificar si el lexer está generando tokens 
    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }
    
    // Mostrar la tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {
        const tokenType = Mi_analizador2Lexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

    // Volver a procesar la entrada (getAllTokens consume todos los tokens)
    inputStream = CharStreams.fromString(input);
    lexer = new Mi_analizador2Lexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new Mi_analizador2Parser(tokenStream);
    let tree = parser.programa();

    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        const visitor = new CustomMi_analizador2Visitor();
        const codigoTraducido = visitor.visit(tree);

        console.log("\nCódigo traducido a JavaScript:\n");

        if (codigoTraducido !== undefined) {
        console.log(codigoTraducido);
        console.log("\nResultado de la ejecución:\n");

        try {
           eval(codigoTraducido); // Ejecuta el código JS traducido
        } catch (e) {
           console.error("Error al ejecutar el código traducido:", e.message);
        }

        } else {
          console.log(" No se devolvió código traducido. Revisa los métodos del visitor.");
        }

    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
