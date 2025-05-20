grammar Mi_analizador2;

// -----------------------------
// Reglas del parser
// -----------------------------

programa
    : (declaracion | funcion | ejecucion)* 
    ;

declaracion
    : VARIABLE NOMBRE (IGUAL valor)? PUNTOYCOMA
    ;

funcion
    : FUNCION NOMBRE (PAR_IZQ argumentos PAR_DER)? LLAVE_IZQ instrucciones LLAVE_DER
    ;

argumentos
    : variable (COMA argumentos)?
    ;

instrucciones
    : (operacion_texto | impresion | retorno)*
    ;

operacion_texto
    : variable IGUAL transformacion PAR_IZQ cadena PAR_DER PUNTOYCOMA
    ;

transformacion
    : MAYUSCULAS
    | MINUSCULAS
    | LONGITUD
    | INVERTIR
    | REEMPLAZAR
    ;

concatenar
    : variable IGUAL cadena SUMA cadena PUNTOYCOMA
    ;

impresion
    : IMPRIMIR PAR_IZQ valor PAR_DER PUNTOYCOMA
    ;

retorno
    : DEVOLVER valor PUNTOYCOMA
    ;

valor
    : TEXTO
    | NUMERO
    | variable
    ;

cadena
    : TEXTO
    | variable
    ;

variable
    : NOMBRE
    ;

ejecucion
    : NOMBRE PAR_IZQ argumentos PAR_DER PUNTOYCOMA
    | impresion
    ;

// -----------------------------
// Tokens léxicos
// -----------------------------

VARIABLE    : 'variable';
FUNCION     : 'funcion';
IGUAL       : '=';
PUNTOYCOMA  : ';';
PAR_IZQ     : '(';
PAR_DER     : ')';
LLAVE_IZQ   : '{';
LLAVE_DER   : '}';
COMA        : ',';
MAYUSCULAS  : 'mayusculas';
MINUSCULAS  : 'minusculas';
LONGITUD    : 'longitud';
INVERTIR    : 'invertir';
REEMPLAZAR  : 'reemplazar';
SUMA        : '+';
IMPRIMIR    : 'imprimir';
DEVOLVER    : 'devolver';

TEXTO       : '"' (~["\\\r\n])* '"' ;
NUMERO      : [0-9]+;
NOMBRE      : [a-zA-Z_] [a-zA-Z0-9_]*;
WS          : [ \t\r\n]+ -> skip;
