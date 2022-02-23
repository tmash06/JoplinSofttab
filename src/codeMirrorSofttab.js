module.exports = {
    default: (_context) => { 
        return {
            plugin: (CodeMirror) => {},
            codeMirrorResources: [],
            codeMirrorOptions: {
                'extraKeys' : {
                    Tab: (cm) => {
                        cm.execCommand('indentMore');
                    }
                },
                'indentWithTabs' : false,
            },
        }
    },
}
