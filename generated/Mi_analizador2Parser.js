// Generated from c:/Users/anage/OneDrive/Documents/Lucas/UTN/Sintaxis y semantica de los lenguajes/ssl-antlr-Mi_analizador2/Mi_analizador2.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Mi_analizador2Listener from './Mi_analizador2Listener.js';
import Mi_analizador2Visitor from './Mi_analizador2Visitor.js';

const serializedATN = [4,1,21,117,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,1,0,5,0,32,8,0,10,0,12,0,35,9,0,1,1,1,1,1,1,1,1,3,1,41,
8,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,51,8,2,1,2,1,2,1,2,1,2,1,3,1,3,1,
3,3,3,60,8,3,1,4,1,4,1,4,5,4,65,8,4,10,4,12,4,68,9,4,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,
1,9,1,9,1,9,1,9,1,10,1,10,1,10,3,10,100,8,10,1,11,1,11,3,11,104,8,11,1,12,
1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,115,8,13,1,13,0,0,14,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,0,1,1,0,10,14,115,0,33,1,0,0,0,2,36,1,0,0,
0,4,44,1,0,0,0,6,56,1,0,0,0,8,66,1,0,0,0,10,69,1,0,0,0,12,77,1,0,0,0,14,
79,1,0,0,0,16,86,1,0,0,0,18,92,1,0,0,0,20,99,1,0,0,0,22,103,1,0,0,0,24,105,
1,0,0,0,26,114,1,0,0,0,28,32,3,2,1,0,29,32,3,4,2,0,30,32,3,26,13,0,31,28,
1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,
0,0,0,34,1,1,0,0,0,35,33,1,0,0,0,36,37,5,1,0,0,37,40,5,20,0,0,38,39,5,3,
0,0,39,41,3,20,10,0,40,38,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,43,5,4,
0,0,43,3,1,0,0,0,44,45,5,2,0,0,45,50,5,20,0,0,46,47,5,5,0,0,47,48,3,6,3,
0,48,49,5,6,0,0,49,51,1,0,0,0,50,46,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,
52,53,5,7,0,0,53,54,3,8,4,0,54,55,5,8,0,0,55,5,1,0,0,0,56,59,3,24,12,0,57,
58,5,9,0,0,58,60,3,6,3,0,59,57,1,0,0,0,59,60,1,0,0,0,60,7,1,0,0,0,61,65,
3,10,5,0,62,65,3,16,8,0,63,65,3,18,9,0,64,61,1,0,0,0,64,62,1,0,0,0,64,63,
1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,9,1,0,0,0,68,66,1,0,
0,0,69,70,3,24,12,0,70,71,5,3,0,0,71,72,3,12,6,0,72,73,5,5,0,0,73,74,3,22,
11,0,74,75,5,6,0,0,75,76,5,4,0,0,76,11,1,0,0,0,77,78,7,0,0,0,78,13,1,0,0,
0,79,80,3,24,12,0,80,81,5,3,0,0,81,82,3,22,11,0,82,83,5,15,0,0,83,84,3,22,
11,0,84,85,5,4,0,0,85,15,1,0,0,0,86,87,5,16,0,0,87,88,5,5,0,0,88,89,3,20,
10,0,89,90,5,6,0,0,90,91,5,4,0,0,91,17,1,0,0,0,92,93,5,17,0,0,93,94,3,20,
10,0,94,95,5,4,0,0,95,19,1,0,0,0,96,100,5,18,0,0,97,100,5,19,0,0,98,100,
3,24,12,0,99,96,1,0,0,0,99,97,1,0,0,0,99,98,1,0,0,0,100,21,1,0,0,0,101,104,
5,18,0,0,102,104,3,24,12,0,103,101,1,0,0,0,103,102,1,0,0,0,104,23,1,0,0,
0,105,106,5,20,0,0,106,25,1,0,0,0,107,108,5,20,0,0,108,109,5,5,0,0,109,110,
3,6,3,0,110,111,5,6,0,0,111,112,5,4,0,0,112,115,1,0,0,0,113,115,3,16,8,0,
114,107,1,0,0,0,114,113,1,0,0,0,115,27,1,0,0,0,10,31,33,40,50,59,64,66,99,
103,114];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Mi_analizador2Parser extends antlr4.Parser {

    static grammarFileName = "Mi_analizador2.g4";
    static literalNames = [ null, "'variable'", "'funcion'", "'='", "';'", 
                            "'('", "')'", "'{'", "'}'", "','", "'mayusculas'", 
                            "'minusculas'", "'longitud'", "'invertir'", 
                            "'reemplazar'", "'+'", "'imprimir'", "'devolver'" ];
    static symbolicNames = [ null, "VARIABLE", "FUNCION", "IGUAL", "PUNTOYCOMA", 
                             "PAR_IZQ", "PAR_DER", "LLAVE_IZQ", "LLAVE_DER", 
                             "COMA", "MAYUSCULAS", "MINUSCULAS", "LONGITUD", 
                             "INVERTIR", "REEMPLAZAR", "SUMA", "IMPRIMIR", 
                             "DEVOLVER", "TEXTO", "NUMERO", "NOMBRE", "WS" ];
    static ruleNames = [ "programa", "declaracion", "funcion", "argumentos", 
                         "instrucciones", "operacion_texto", "transformacion", 
                         "concatenar", "impresion", "retorno", "valor", 
                         "cadena", "variable", "ejecucion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Mi_analizador2Parser.ruleNames;
        this.literalNames = Mi_analizador2Parser.literalNames;
        this.symbolicNames = Mi_analizador2Parser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Mi_analizador2Parser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1114118) !== 0)) {
	            this.state = 31;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	                this.state = 28;
	                this.declaracion();
	                break;
	            case 2:
	                this.state = 29;
	                this.funcion();
	                break;
	            case 16:
	            case 20:
	                this.state = 30;
	                this.ejecucion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Mi_analizador2Parser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(Mi_analizador2Parser.VARIABLE);
	        this.state = 37;
	        this.match(Mi_analizador2Parser.NOMBRE);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 38;
	            this.match(Mi_analizador2Parser.IGUAL);
	            this.state = 39;
	            this.valor();
	        }

	        this.state = 42;
	        this.match(Mi_analizador2Parser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Mi_analizador2Parser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(Mi_analizador2Parser.FUNCION);
	        this.state = 45;
	        this.match(Mi_analizador2Parser.NOMBRE);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 46;
	            this.match(Mi_analizador2Parser.PAR_IZQ);
	            this.state = 47;
	            this.argumentos();
	            this.state = 48;
	            this.match(Mi_analizador2Parser.PAR_DER);
	        }

	        this.state = 52;
	        this.match(Mi_analizador2Parser.LLAVE_IZQ);
	        this.state = 53;
	        this.instrucciones();
	        this.state = 54;
	        this.match(Mi_analizador2Parser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Mi_analizador2Parser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.variable();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 57;
	            this.match(Mi_analizador2Parser.COMA);
	            this.state = 58;
	            this.argumentos();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Mi_analizador2Parser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1245184) !== 0)) {
	            this.state = 64;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 61;
	                this.operacion_texto();
	                break;
	            case 16:
	                this.state = 62;
	                this.impresion();
	                break;
	            case 17:
	                this.state = 63;
	                this.retorno();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Mi_analizador2Parser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.variable();
	        this.state = 70;
	        this.match(Mi_analizador2Parser.IGUAL);
	        this.state = 71;
	        this.transformacion();
	        this.state = 72;
	        this.match(Mi_analizador2Parser.PAR_IZQ);
	        this.state = 73;
	        this.cadena();
	        this.state = 74;
	        this.match(Mi_analizador2Parser.PAR_DER);
	        this.state = 75;
	        this.match(Mi_analizador2Parser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Mi_analizador2Parser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 31744) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Mi_analizador2Parser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.variable();
	        this.state = 80;
	        this.match(Mi_analizador2Parser.IGUAL);
	        this.state = 81;
	        this.cadena();
	        this.state = 82;
	        this.match(Mi_analizador2Parser.SUMA);
	        this.state = 83;
	        this.cadena();
	        this.state = 84;
	        this.match(Mi_analizador2Parser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Mi_analizador2Parser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(Mi_analizador2Parser.IMPRIMIR);
	        this.state = 87;
	        this.match(Mi_analizador2Parser.PAR_IZQ);
	        this.state = 88;
	        this.valor();
	        this.state = 89;
	        this.match(Mi_analizador2Parser.PAR_DER);
	        this.state = 90;
	        this.match(Mi_analizador2Parser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, Mi_analizador2Parser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(Mi_analizador2Parser.DEVOLVER);
	        this.state = 93;
	        this.valor();
	        this.state = 94;
	        this.match(Mi_analizador2Parser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, Mi_analizador2Parser.RULE_valor);
	    try {
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.match(Mi_analizador2Parser.TEXTO);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.match(Mi_analizador2Parser.NUMERO);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, Mi_analizador2Parser.RULE_cadena);
	    try {
	        this.state = 103;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.match(Mi_analizador2Parser.TEXTO);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, Mi_analizador2Parser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(Mi_analizador2Parser.NOMBRE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, Mi_analizador2Parser.RULE_ejecucion);
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 107;
	            this.match(Mi_analizador2Parser.NOMBRE);
	            this.state = 108;
	            this.match(Mi_analizador2Parser.PAR_IZQ);
	            this.state = 109;
	            this.argumentos();
	            this.state = 110;
	            this.match(Mi_analizador2Parser.PAR_DER);
	            this.state = 111;
	            this.match(Mi_analizador2Parser.PUNTOYCOMA);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 113;
	            this.impresion();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

Mi_analizador2Parser.EOF = antlr4.Token.EOF;
Mi_analizador2Parser.VARIABLE = 1;
Mi_analizador2Parser.FUNCION = 2;
Mi_analizador2Parser.IGUAL = 3;
Mi_analizador2Parser.PUNTOYCOMA = 4;
Mi_analizador2Parser.PAR_IZQ = 5;
Mi_analizador2Parser.PAR_DER = 6;
Mi_analizador2Parser.LLAVE_IZQ = 7;
Mi_analizador2Parser.LLAVE_DER = 8;
Mi_analizador2Parser.COMA = 9;
Mi_analizador2Parser.MAYUSCULAS = 10;
Mi_analizador2Parser.MINUSCULAS = 11;
Mi_analizador2Parser.LONGITUD = 12;
Mi_analizador2Parser.INVERTIR = 13;
Mi_analizador2Parser.REEMPLAZAR = 14;
Mi_analizador2Parser.SUMA = 15;
Mi_analizador2Parser.IMPRIMIR = 16;
Mi_analizador2Parser.DEVOLVER = 17;
Mi_analizador2Parser.TEXTO = 18;
Mi_analizador2Parser.NUMERO = 19;
Mi_analizador2Parser.NOMBRE = 20;
Mi_analizador2Parser.WS = 21;

Mi_analizador2Parser.RULE_programa = 0;
Mi_analizador2Parser.RULE_declaracion = 1;
Mi_analizador2Parser.RULE_funcion = 2;
Mi_analizador2Parser.RULE_argumentos = 3;
Mi_analizador2Parser.RULE_instrucciones = 4;
Mi_analizador2Parser.RULE_operacion_texto = 5;
Mi_analizador2Parser.RULE_transformacion = 6;
Mi_analizador2Parser.RULE_concatenar = 7;
Mi_analizador2Parser.RULE_impresion = 8;
Mi_analizador2Parser.RULE_retorno = 9;
Mi_analizador2Parser.RULE_valor = 10;
Mi_analizador2Parser.RULE_cadena = 11;
Mi_analizador2Parser.RULE_variable = 12;
Mi_analizador2Parser.RULE_ejecucion = 13;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_programa;
    }

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	ejecucion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EjecucionContext);
	    } else {
	        return this.getTypedRuleContext(EjecucionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_declaracion;
    }

	VARIABLE() {
	    return this.getToken(Mi_analizador2Parser.VARIABLE, 0);
	};

	NOMBRE() {
	    return this.getToken(Mi_analizador2Parser.NOMBRE, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(Mi_analizador2Parser.PUNTOYCOMA, 0);
	};

	IGUAL() {
	    return this.getToken(Mi_analizador2Parser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_funcion;
    }

	FUNCION() {
	    return this.getToken(Mi_analizador2Parser.FUNCION, 0);
	};

	NOMBRE() {
	    return this.getToken(Mi_analizador2Parser.NOMBRE, 0);
	};

	LLAVE_IZQ() {
	    return this.getToken(Mi_analizador2Parser.LLAVE_IZQ, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	LLAVE_DER() {
	    return this.getToken(Mi_analizador2Parser.LLAVE_DER, 0);
	};

	PAR_IZQ() {
	    return this.getToken(Mi_analizador2Parser.PAR_IZQ, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	PAR_DER() {
	    return this.getToken(Mi_analizador2Parser.PAR_DER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_argumentos;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	COMA() {
	    return this.getToken(Mi_analizador2Parser.COMA, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_instrucciones;
    }

	operacion_texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operacion_textoContext);
	    } else {
	        return this.getTypedRuleContext(Operacion_textoContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	retorno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RetornoContext);
	    } else {
	        return this.getTypedRuleContext(RetornoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_operacion_texto;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	IGUAL() {
	    return this.getToken(Mi_analizador2Parser.IGUAL, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	PAR_IZQ() {
	    return this.getToken(Mi_analizador2Parser.PAR_IZQ, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	PAR_DER() {
	    return this.getToken(Mi_analizador2Parser.PAR_DER, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(Mi_analizador2Parser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitOperacion_texto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitOperacion_texto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_transformacion;
    }

	MAYUSCULAS() {
	    return this.getToken(Mi_analizador2Parser.MAYUSCULAS, 0);
	};

	MINUSCULAS() {
	    return this.getToken(Mi_analizador2Parser.MINUSCULAS, 0);
	};

	LONGITUD() {
	    return this.getToken(Mi_analizador2Parser.LONGITUD, 0);
	};

	INVERTIR() {
	    return this.getToken(Mi_analizador2Parser.INVERTIR, 0);
	};

	REEMPLAZAR() {
	    return this.getToken(Mi_analizador2Parser.REEMPLAZAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_concatenar;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	IGUAL() {
	    return this.getToken(Mi_analizador2Parser.IGUAL, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	SUMA() {
	    return this.getToken(Mi_analizador2Parser.SUMA, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(Mi_analizador2Parser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_impresion;
    }

	IMPRIMIR() {
	    return this.getToken(Mi_analizador2Parser.IMPRIMIR, 0);
	};

	PAR_IZQ() {
	    return this.getToken(Mi_analizador2Parser.PAR_IZQ, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PAR_DER() {
	    return this.getToken(Mi_analizador2Parser.PAR_DER, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(Mi_analizador2Parser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_retorno;
    }

	DEVOLVER() {
	    return this.getToken(Mi_analizador2Parser.DEVOLVER, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(Mi_analizador2Parser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(Mi_analizador2Parser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(Mi_analizador2Parser.NUMERO, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_cadena;
    }

	TEXTO() {
	    return this.getToken(Mi_analizador2Parser.TEXTO, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_variable;
    }

	NOMBRE() {
	    return this.getToken(Mi_analizador2Parser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Mi_analizador2Parser.RULE_ejecucion;
    }

	NOMBRE() {
	    return this.getToken(Mi_analizador2Parser.NOMBRE, 0);
	};

	PAR_IZQ() {
	    return this.getToken(Mi_analizador2Parser.PAR_IZQ, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	PAR_DER() {
	    return this.getToken(Mi_analizador2Parser.PAR_DER, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(Mi_analizador2Parser.PUNTOYCOMA, 0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Mi_analizador2Listener ) {
	        listener.exitEjecucion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Mi_analizador2Visitor ) {
	        return visitor.visitEjecucion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




Mi_analizador2Parser.ProgramaContext = ProgramaContext; 
Mi_analizador2Parser.DeclaracionContext = DeclaracionContext; 
Mi_analizador2Parser.FuncionContext = FuncionContext; 
Mi_analizador2Parser.ArgumentosContext = ArgumentosContext; 
Mi_analizador2Parser.InstruccionesContext = InstruccionesContext; 
Mi_analizador2Parser.Operacion_textoContext = Operacion_textoContext; 
Mi_analizador2Parser.TransformacionContext = TransformacionContext; 
Mi_analizador2Parser.ConcatenarContext = ConcatenarContext; 
Mi_analizador2Parser.ImpresionContext = ImpresionContext; 
Mi_analizador2Parser.RetornoContext = RetornoContext; 
Mi_analizador2Parser.ValorContext = ValorContext; 
Mi_analizador2Parser.CadenaContext = CadenaContext; 
Mi_analizador2Parser.VariableContext = VariableContext; 
Mi_analizador2Parser.EjecucionContext = EjecucionContext; 
