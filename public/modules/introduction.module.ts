// import { NvModule } from 'indiv';
import { NvModule } from '../../../InDiv/src';
// import { NvModule } from '../../../InDiv/build';

import IntroductionContainer from '../pages/introduction';

@NvModule({
    imports: [
    ],
    components: [
        IntroductionContainer,
    ],
    providers: [
    ],
    exports: [
        IntroductionContainer,
    ],
    bootstrap: IntroductionContainer,
})
export default class IntroductionModule { }
