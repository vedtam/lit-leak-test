import { LitElement, html, css, property } from 'lit-element';
import { TextInput } from './text-input.js';

export class AppMain extends LitElement {

  @property({type: Object})
  myTextInput: TextInput = new TextInput();

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        text-input {
          width: 200px;
          margin-bottom: 20px;
        }
        ul {
          font-size: 12px;
          padding: 15px;
          margin: 0px;
        }
      `
    ];
  }

  render() {
    return html`
      <text-input
        class="my-input"
        label="My Input">
      </text-input>

      <div>
        <div>Steps to reproduce the leak</div>
        <ul>
          <li>open DevTools and click the <b>Memory</b> tab</li>
          <li>note current memory usage</li>
          <li>keep refreshing (5-10 times), watch the memory increase</li>
          <li>amount of memory won't decrase, clearing manually (via bin icon, top-left) or navigating to another tab, than back won't work either.</li>
          <li>to clear the memory open the demo in a new tab (v8 will cache the transpiled script)</li>
        </ul>

        <p>When started</p>
        <img src="https://i.imgur.com/TIPvmjw.png" style="width: 70%">

        <p>After around 20-30 reload</p>
        <img src="https://i.imgur.com/861K1Gr.png" style="width: 70%">
      </div>
    `;
  }
}