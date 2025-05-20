// Generated from c:/Users/anage/ssl-antlr-Mi_analizador2/Mi_analizador2.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link Mi_analizador2Parser}.
 */
public interface Mi_analizador2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link Mi_analizador2Parser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(Mi_analizador2Parser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link Mi_analizador2Parser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(Mi_analizador2Parser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by the {@code printExpr}
	 * labeled alternative in {@link Mi_analizador2Parser#stat}.
	 * @param ctx the parse tree
	 */
	void enterPrintExpr(Mi_analizador2Parser.PrintExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code printExpr}
	 * labeled alternative in {@link Mi_analizador2Parser#stat}.
	 * @param ctx the parse tree
	 */
	void exitPrintExpr(Mi_analizador2Parser.PrintExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code assign}
	 * labeled alternative in {@link Mi_analizador2Parser#stat}.
	 * @param ctx the parse tree
	 */
	void enterAssign(Mi_analizador2Parser.AssignContext ctx);
	/**
	 * Exit a parse tree produced by the {@code assign}
	 * labeled alternative in {@link Mi_analizador2Parser#stat}.
	 * @param ctx the parse tree
	 */
	void exitAssign(Mi_analizador2Parser.AssignContext ctx);
	/**
	 * Enter a parse tree produced by the {@code blank}
	 * labeled alternative in {@link Mi_analizador2Parser#stat}.
	 * @param ctx the parse tree
	 */
	void enterBlank(Mi_analizador2Parser.BlankContext ctx);
	/**
	 * Exit a parse tree produced by the {@code blank}
	 * labeled alternative in {@link Mi_analizador2Parser#stat}.
	 * @param ctx the parse tree
	 */
	void exitBlank(Mi_analizador2Parser.BlankContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parens}
	 * labeled alternative in {@link Mi_analizador2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void enterParens(Mi_analizador2Parser.ParensContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parens}
	 * labeled alternative in {@link Mi_analizador2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void exitParens(Mi_analizador2Parser.ParensContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link Mi_analizador2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMulDiv(Mi_analizador2Parser.MulDivContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link Mi_analizador2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMulDiv(Mi_analizador2Parser.MulDivContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link Mi_analizador2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void enterAddSub(Mi_analizador2Parser.AddSubContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link Mi_analizador2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void exitAddSub(Mi_analizador2Parser.AddSubContext ctx);
	/**
	 * Enter a parse tree produced by the {@code id}
	 * labeled alternative in {@link Mi_analizador2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void enterId(Mi_analizador2Parser.IdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code id}
	 * labeled alternative in {@link Mi_analizador2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void exitId(Mi_analizador2Parser.IdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code int}
	 * labeled alternative in {@link Mi_analizador2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void enterInt(Mi_analizador2Parser.IntContext ctx);
	/**
	 * Exit a parse tree produced by the {@code int}
	 * labeled alternative in {@link Mi_analizador2Parser#expr}.
	 * @param ctx the parse tree
	 */
	void exitInt(Mi_analizador2Parser.IntContext ctx);
}