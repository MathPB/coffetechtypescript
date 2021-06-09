"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const randomResponse_1 = require("../../helpers/randomResponse");
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(`<span style="font-size:40px">Para utilizar a aplicação digite após a "/" o seu nome</span>`);
        });
    }
    choices(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                if (!name || name.length < 3 || name.length > 16) {
                    const error = new Error(`Invalid Parms!`);
                    throw error;
                }
                const result = randomResponse_1.randomResponse(name);
                return res.send(result);
            }
            catch (error) {
                res.send("<b>Escreve direito seu nome aí meu irmão!</b>");
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map