// import { EsModule } from 'easiest';
import { EsModule } from '../../lib';

import ArchitectureContainer from '../pages/architecture';

@EsModule({
    imports: [
    ],
    components: {
        'architecture-container': ArchitectureContainer,
    },
    providers: [
    ],
    exports: [
        'architecture-container',
    ],
})
export default class ArchitectureModule { }
