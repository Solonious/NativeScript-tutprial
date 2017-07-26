"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = 'sergeysolonar@gmail.com';
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("email " + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n        <StackLayout>\n\t        <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n\t        <TextField hint=\"Email Address\" keyboardType=\"email\" [(ngModel)]=\"email\"\n\t                   autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n\t        <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n\t        <Button [text]=\"isLoggingIn ? 'Sign In' : 'Sign Up'\" \n                    class=\"submit-button\"\n                    (tap)=\"submit()\"\n            ></Button>\n\t        <Button [text]=\"isLoggingIn ? 'Sign Up' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n        </StackLayout>\n    ",
        styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
