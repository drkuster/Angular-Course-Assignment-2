import { Component } from '@angular/core';

@Component
({
  selector: 'app-input-handle',
  templateUrl: './input-handle.component.html'
})

export class InputHandleComponent
{
  username = '';

  onClearInput(): void
  {
    this.username = '';
  }
}
