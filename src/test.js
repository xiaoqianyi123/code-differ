export const test = `require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require(["vs/editor/editor.main"], function () {
    // The diff editor offers a navigator to jump between changes. Once the diff is computed the <em>next()</em> and <em>previous()</em> method allow navigation. By default setting the selection in the editor manually resets the navigation state.
    var originalModel = monaco.editor.createModel("just some text\n\nHello World\n\nSome more text", "text/plain");
    var modifiedModel = monaco.editor.createModel("just some Text\n\nHello World\n\nSome more changes", "text/plain");

    var diffEditor = monaco.editor.createDiffEditor(document.getElementById("container"));
    diffEditor.setModel({
        original: originalModel,
        modified: modifiedModel,
    });

    var navi = monaco.editor.createDiffNavigator(diffEditor, {
        followsCaret: true, // resets the navigator state when the user selects something in the editor
        ignoreCharChanges: true, // jump from line to line
    });

    window.setInterval(function () {
        navi.next();
    }, 2000);
});
`
export const testDiff = `require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require(["vs/editor/editor.main"], function () {
    // The diff editor offers a navigator to jump between changes. Once the diff is computed the <em>next()</em> and <em>previous()</em> method allow navigation. By default setting the selection in the editor manually resets the navigation state.
    var originalModel = monaco.editor.createMasdodel("just some text\n\nHello World\n\nSome more text", "text/plain");
    var modifiedModel = monaco.editorasd.createModel("just some Text\n\nHello World\n\nSome more changes", "text/plain");

    var diffEditor = monaco.editor.createasdDiffEditor(document.getElementById("container"));
    // diffEditor.setModel({
    // original: originalModel,
    // modified: modifiedModel,
    // });
// asd
    var navi = monaco.editor.createDiffNavigator(diffEditor, {
        followsCaret: true, // resets the navigator state when the user selects something in the editor
        ignoreCharChanges: true, // jump from line to line
    });

    window.setInterval(function () {
        // navi.next();
    }, 2000);
});
`