module.exports = {
    default: (_context) => { 
        return {
            plugin: (CodeMirror) => {},
            codeMirrorResources: [],
            codeMirrorOptions: {
                'extraKeys' : {
                    Tab: (cm) => {
                        var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
                        cm.replaceSelection(spaces);
                    }
                }
            },
        }
    },
}
