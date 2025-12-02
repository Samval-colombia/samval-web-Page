import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-login',
  imports: [TranslocoModule , ReactiveFormsModule , RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);


  protected readonly isLoading = signal(false);
  protected readonly showPassword = signal(false);
  protected readonly errorMessage = signal<string | null>(null);


  protected loginForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }


  private initializeForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  protected togglePasswordVisibility(): void {
    this.showPassword.update(value => !value);
  }


  protected getControl(controlName: string) {
    return this.loginForm.get(controlName);
  }


  protected hasError(controlName: string): boolean {
    const control = this.getControl(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }


  protected getErrorMessage(controlName: string): string {
    const control = this.getControl(controlName);

    if (!control || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return controlName === 'username'
        ? 'login.errors.usernameRequired'
        : 'login.errors.passwordRequired';
    }

    if (control.errors['minlength']) {
      const minLength = control.errors['minlength'].requiredLength;
      return controlName === 'username'
        ? 'login.errors.usernameMinLength'
        : 'login.errors.passwordMinLength';
    }

    return '';
  }


  protected onSubmit(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const { username, password } = this.loginForm.value;


    setTimeout(() => {

      if (username === 'admin' && password === 'admin123') {

        this.router.navigate(['/']);
      } else {

        this.errorMessage.set('login.errors.invalidCredentials');
        this.isLoading.set(false);
      }
    }, 1500);
  }

  /**
   * Limpiar mensaje de error
   */
  protected clearError(): void {
    this.errorMessage.set(null);
  }

}
