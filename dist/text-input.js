var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, property } from 'lit-element';
export class TextInput extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.value = '';
    }
    static get styles() {
        return [
            css `
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
    render() {
        return html `
      <label ?hidden="${!this.label}">${this.label}</label>
      <input .value="${this.value}">
    `;
    }
    firstUpdated() {
        if (!this.shadowRoot)
            return;
        this.textInput = this.shadowRoot.querySelector('input');
    }
}
__decorate([
    property({ type: Object })
], TextInput.prototype, "textInput", void 0);
__decorate([
    property({ type: String })
], TextInput.prototype, "label", void 0);
__decorate([
    property({ type: String })
], TextInput.prototype, "value", void 0);
window.customElements.define('text-input', TextInput);
//# sourceMappingURL=text-input.js.map