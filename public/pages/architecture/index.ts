import './style.less';

import { Component } from 'easiest';

import { content } from '../../constants/start';

type content = {
  [x: string]: any;
  h1: string;
  code?: string;
}

interface State {
  info: content[];
}

export default class ArchitectureContainer extends Component<State> {
  public state: State;

  constructor() {
    super();
    this.state = {
      info: content,
    }
  }

  public $bootstrap() {
    this.$template = (`
        <div class="page-container">
          <div class="info-content" es-repeat="let info in this.state.info">
              <h1>{{info.h1}}</h1>
              <p>{{info.p}}</p>
          </div>
        </div>
      `);
  }
}