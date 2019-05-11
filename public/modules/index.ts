import { NvModule } from '@indiv/core';

import RootComponent from '../components/root-component';
import SideBar from '../components/side-bars';
import RouterModule from '../routes';

import TestService from '../service/test.service';
import { testToken } from '../service/inject-token';

import ShareModule from './share.module';

@NvModule({
  imports: [
    ShareModule,
    RouterModule,
  ],
  declarations: [
    SideBar,
    RootComponent,
  ],
  providers: [
    TestService,
    {
      provide: testToken,
      useValue: 'tk123456',
    },
    {
      provide: 'testToken',
      useValue: 'tk123456',
    },
  ],
  bootstrap: RootComponent,
})
export default class RootModule { }
