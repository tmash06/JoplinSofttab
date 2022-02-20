import joplin from 'api';
import { ContentScriptType } from 'api/types';

joplin.plugins.register({
    onStart: async () => {
        console.info('JoplinSofttab: onStart');

        await joplin.contentScripts.register(
            ContentScriptType.CodeMirrorPlugin,
            'CodeMirrorSofttab',
            './codeMirrorSofttab.js'
        );
    },
});
