"use strict";
exports.__esModule = true;
exports.paraReal = void 0;
var S = require("./styles");
exports.paraReal = function (valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
};
var Produto = function (_a) {
    var game = _a.game, aoComprar = _a.aoComprar;
    return (React.createElement(S.Produto, null,
        React.createElement(S.Capa, null,
            React.createElement(S.Tag, null, game.categoria),
            React.createElement("img", { src: game.imagem, alt: game.titulo })),
        React.createElement(S.Titulo, null, game.titulo),
        React.createElement(S.Plataformas, null, game.plataformas.map(function (plat) { return (React.createElement("li", { key: plat }, plat)); })),
        React.createElement(S.Prices, null,
            game.precoAntigo && React.createElement("small", null, exports.paraReal(game.precoAntigo)),
      React.createElement('strong', null, exports.paraReal(game.preco))
        React.createElement(S.BtnComprar, { onClick: function () { return aoComprar(game); }, type: "button" }, "Adicionar ao carrinho")));
};
exports["default"] = Produto;
