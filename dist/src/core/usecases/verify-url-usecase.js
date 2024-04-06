"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyUrlUseCase = void 0;
const url_1 = require("../entities/url");
const url_2 = require("../value-objects/url");
class VerifyUrlUseCase {
    urlPort;
    constructor(urlPort) {
        this.urlPort = urlPort;
    }
    async perform(input) {
        const url = new url_1.UrlToBeChecked(new url_2.URL(input.url));
        const verifyUrl = await this.urlPort.verifyUrl(url.url.value);
        return verifyUrl;
    }
}
exports.VerifyUrlUseCase = VerifyUrlUseCase;
