import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
    selector: "my-app",
    templateUrl: './pages/login/login.html',
    styleUrls: ['pages/login/login-common.css', 'pages/login/login.css'],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    user: User;
    email = 'sergeysolonar@gmail.com';
    isLoggingIn = true;
    constructor(
        private userService: UserService,
        private router: Router,
        private page: Page
    ) {
        this.user = new User();
        this.user.email = 'test.email@gmail.com';
        this.user.password = 'password';
    }
    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    }
    submit() {
        if(this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }
    login() {
        this.userService.login(this.user)
            .subscribe(
                () => this.router.navigate(["/list"]),
                (error) => alert("Unfortunately we could not find your account.")
            );
    }
    signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                },
                () => alert("Unfortunately we were unable to create your account.")
            );
    }
    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}