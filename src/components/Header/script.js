import SizePropertyMixin from '@inkline/inkline/mixins/components/properties/SizePropertyMixin';
import ClassesProviderMixin from '@inkline/inkline/mixins/components/providers/ClassesProviderMixin';

import IContainer from "inkline/components/Container";
import IRow from '../Row';
import IColumn from '../Column';

export default {
    name: 'IHeader',
    mixins: [
        SizePropertyMixin,

        ClassesProviderMixin
    ],
    components: {
        IContainer,
        IRow,
        IColumn
    },
    props: {
        fluid: {
            type: Boolean,
            default: false
        },
        fullscreen: {
            type: Boolean,
            default: false
        }
    },
    created () {
        this.classesProvider.add(() => ({
            '-fullscreen': this.fullscreen
        }));
    }
};
