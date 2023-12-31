import { Injectable } from "@angular/core"
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'
import { AuthService } from "./auth.service"
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        if (this.authService.isLoggenIn()) {
            return true
        } else {
            return this.router.parseUrl('/login')
        }
    }
}