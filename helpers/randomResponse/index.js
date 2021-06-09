"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomResponse = void 0;
var randomResponse = function (name) {
    var randomNumber = Math.floor(Math.random() * 1000);
    var keyNumber = Math.floor(Math.random() * 5);
    var result;
    if (randomNumber > 0) {
        switch (keyNumber) {
            case 1:
                result = "<span style=\"font-size:40px\"><b>" + name + "</b>, voc\u00EA fez <b style=\"color: #ff0000\">" + randomNumber + "</b> piadas ruins nessa semana!</span>";
                break;
            case 2:
                result = "<span style=\"font-size:40px\"><b>" + name + "</b>, voc\u00EA falou <b style=\"color: #ff0000\">" + randomNumber + "</b> ditados sobre cachorros essa semana!</span>";
                break;
            case 3:
                result = "<span style=\"font-size:40px\"><b>" + name + "</b>, voc\u00EA ajudou o leigo do Matheus <b style=\"color: #ff0000\">" + randomNumber + "</b> vezes nessa sprint!</span>";
                break;
            case 4:
                result = "<span style=\"font-size:40px\"><b>" + name + "</b>, voc\u00EA deve um pix de <b style=\"color: #ff0000\">R$ " + randomNumber + "</b> para todos do time!</span>";
                break;
            case 5:
                result = "<span style=\"font-size:40px\"><b>" + name + "</b>, voc\u00EA esqueceu <b style=\"color: #ff0000\">" + randomNumber + "</b> vezes de apontar a hora no Jira!</span>";
                break;
            default:
                result = "<span style=\"font-size:40px\"><b>" + name + ",</b> nenhuma piada constada nessa semana, voc\u00EA n\u00E3o \u00E9 digno! Desistimos de voc\u00EA!</span>";
                break;
        }
    }
    return result;
};
exports.randomResponse = randomResponse;
