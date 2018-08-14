import './style.less';

// import { Component, OnInit, WatchState } from 'easiest';
import { Component, OnInit, WatchState } from '../../../../easiest/src';

import { navs } from '../../constants/nav';

type nav = {
    name: string;
    to: string;
    active?: string;
};
interface State {
    navs: nav[];
}

@Component<State>({
    state: {
        navs: navs,
    },
    template: (`
        <div class="side-bar-container">
            <div class="nav-wrap" es-class="nav.active" es-repeat="let nav in this.state.navs">
                <a class="nav" es-on:click="this.goTo(nav.to, $index)">{{nav.name}}</a>
                <div class="child-wrap" es-if="nav.child">
                    <a class="nav nav-child"  es-repeat="let child in nav.child" es-on:click="this.goTo(child.to)">{{child.name}}</a>
                </div>
            </div>
        </div>
    `),
})
export default class SideBar implements OnInit, WatchState {
    public state: State;
    public props: any;
    public $getLocation: () => any;
    public $setLocation: (path: string, query?: any, params?: any) => void;
    public $setState: (newState: any) => void;

    public esOnInit() {
        console.log('esOnInit', this.state.navs);
    }

    public goTo(to: string, index?: number) {
        if (index || index === 0) {
            const navs: nav[] = JSON.parse(JSON.stringify(this.state.navs));
            navs.forEach(nav => nav.active = null);
            navs[index].active = 'active';
            this.$setState({
                navs: navs,
            });
        }
        this.$setLocation(to);
        this.$getLocation();
    }

    public esWatchState(oldData: string, newData: string) {
        console.log('oldData Component:', oldData);
        console.log('newData Component:', newData);
    }
}
