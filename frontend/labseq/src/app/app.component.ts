import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputValue: number = 0;
  loading = false;
  error = '';
  result?: { index: number; value: number };

  fetchValue() {
    if (this.inputValue < 0) {
      this.error = 'Valor deve ser >= 0';
      this.result = undefined;
      return;
    }

    this.loading = true;
    this.error = '';
    fetch(`http://localhost:8080/labseq/${this.inputValue}`)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar o valor');
        return res.json();
      })
      .then((data) => {
        this.result = data;
      })
      .catch(() => {
        this.error = 'Erro ao chamar a API';
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
