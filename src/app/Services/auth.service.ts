import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private token: string | null = null

    constructor (private router: Router) {}

    async login(username: string, password: string) {
       return fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json().then(data => { return data })).catch(error => alert('Erro ao fazer login'))
    }

    setToken(token: string): void {
        this.token = token
        localStorage.setItem('access_token', this.token)
    }

    getToken(): string | null {
        return localStorage.getItem('access_token')
    }

    isLoggenIn(): boolean {
        return !!this.getToken()
    }

    logout(): void {
        this.token = null
        localStorage.removeItem('access_token')
        this.router.navigate(['/login'])
    }
}

