import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';


export interface School {
  value: string;
  labelKey: string;
  icon: string;
}

@Component({
  selector: 'app-recover-password',
  imports: [TranslocoModule , ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './recover-password.html',
  styleUrl: './recover-password.css',
})
export class RecoverPassword {

  // Servicios inyectados
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  // Signals para estado del componente
  protected readonly isLoading = signal(false);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly successMessage = signal<string | null>(null);
  protected readonly showSuccess = signal(false);

  // Opciones del dropdown - Colegios
  protected readonly schools: School[] = [
    {
      value: 'colegio1',
      labelKey: 'forgotPassword.schools.colegio1',
      icon: '🏫'
    },
    {
      value: 'colegio2',
      labelKey: 'forgotPassword.schools.colegio2',
      icon: '🏫'
    },
    {
      value: 'colegio3',
      labelKey: 'forgotPassword.schools.colegio3',
      icon: '🏫'
    },
    {
      value: 'colegio4',
      labelKey: 'forgotPassword.schools.colegio4',
      icon: '🏫'
    },
    {
      value: 'colegio5',
      labelKey: 'forgotPassword.schools.colegio5',
      icon: '🏫'
    }
  ];

  // Formulario reactivo
  protected forgotPasswordForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * Inicializar el formulario con validaciones
   */
  private initializeForm(): void {
    this.forgotPasswordForm = this.fb.group({
      identificationNumber: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern(/^[0-9]+$/) // Solo números
      ]],
      username: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      school: ['', Validators.required]
    });
  }

  /**
   * Obtener control del formulario
   */
  protected getControl(controlName: string) {
    return this.forgotPasswordForm.get(controlName);
  }

  /**
   * Verificar si un campo tiene errores y ha sido tocado
   */
  protected hasError(controlName: string): boolean {
    const control = this.getControl(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  /**
   * Obtener mensaje de error específico para un campo
   */
  protected getErrorMessage(controlName: string): string {
    const control = this.getControl(controlName);

    if (!control || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      switch (controlName) {
        case 'identificationNumber':
          return 'forgotPassword.errors.identificationRequired';
        case 'username':
          return 'forgotPassword.errors.usernameRequired';
        case 'school':
          return 'forgotPassword.errors.schoolRequired';
        default:
          return '';
      }
    }

    if (control.errors['minlength']) {
      return controlName === 'identificationNumber'
        ? 'forgotPassword.errors.identificationMinLength'
        : 'forgotPassword.errors.usernameMinLength';
    }

    if (control.errors['maxlength']) {
      return 'forgotPassword.errors.identificationMaxLength';
    }

    if (control.errors['pattern']) {
      return 'forgotPassword.errors.identificationPattern';
    }

    return '';
  }

  /**
   * Obtener el colegio seleccionado
   */
  protected getSelectedSchool(): School | undefined {
    const selectedValue = this.forgotPasswordForm.get('school')?.value;
    return this.schools.find(school => school.value === selectedValue);
  }

  /**
   * TrackBy function para el dropdown
   */
  protected trackByValue = (_: number, school: School) => school.value;

  /**
   * Manejar el submit del formulario
   */
  protected onSubmit(): void {
    // Marcar todos los campos como tocados para mostrar errores
    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    const { identificationNumber, username, school } = this.forgotPasswordForm.value;

    // Simular llamada a API (reemplazar con servicio real)
    setTimeout(() => {
      // Ejemplo de validación simple (reemplazar con lógica real)
      const isValid = identificationNumber && username && school;

      if (isValid) {
        // Recuperación exitosa
        this.showSuccess.set(true);
        this.successMessage.set('forgotPassword.success.message');
        this.isLoading.set(false);

        // Redirigir al login después de 3 segundos
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      } else {
        // Recuperación fallida
        this.errorMessage.set('forgotPassword.errors.invalidData');
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

  /**
   * Volver al login
   */
  protected goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
