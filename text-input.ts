import {LitElement, html, css, property} from 'lit-element';

export class TextInput extends LitElement {

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        label {
          font-size: 12px;
          color: var(--color-primary-light);
          margin-bottom: 10px;
          display: block;
        }
        input {
          width: 100%;
          border-radius: 3px;
          outline: none;
          padding: 10px;
          font-size: 14px;
          border-color: #ccc;
          border-style: solid;
          border-width: 1px;
        }
      `
    ];
  }

  @property({type: Object})
  textInput?: HTMLInputElement;

  @property({type: String})
  label: string = '';

  @property({type: String})
  value: string = '';

  render() {
    return html`
      <label ?hidden="${!this.label}">${this.label}</label>
      <input .value="${this.value}">
    `;
  }

  firstUpdated() {
    if (!this.shadowRoot) return;
    this.textInput = this.shadowRoot.querySelector('input') as HTMLInputElement;
  }
}

window.customElements.define('text-input', TextInput);