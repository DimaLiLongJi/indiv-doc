// import { NvModule } from 'indiv';
import { NvModule } from '../../../InDiv/src';
// import { NvModule } from '../../../InDiv/build';

// import IntroductionModule from './introduction.module';
// import ArchitectureModule from './architecture.module';
// import DocsModule from './docs.module';
// import SSRModule from './ssr.module';
// import MiddlewareModule from './middleware.module';

import RootComponent from '../components/root-component';
import SideBar from '../components/side-bars';
import CodeShower from '../components/code-show';

import TestService from '../service/test.service';

@NvModule({
  // imports: [
  //   IntroductionModule,
  //   ArchitectureModule,
  //   DocsModule,
  //   SSRModule,
  //   MiddlewareModule,
  // ],
  components: [
    SideBar,
    RootComponent,
    CodeShower,
  ],
  providers: [
    TestService,
  ],
  bootstrap: RootComponent,
})
export default class RootModule { }
