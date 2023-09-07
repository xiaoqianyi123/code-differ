import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import { DiffEditor } from '@monaco-editor/react';
function App({originCode,modifiedCode}) {
    const [diffEditor,setDiffEditor] = useState({})
    const [diffMonaco, setDiffMonaco] = useState({})

    function handleEditorDidMount(editor, monaco) {
        setDiffEditor(editor)
        setDiffMonaco(monaco)
        
    }

    function showOriginalValue() {
        alert(diffEditor.getOriginalEditor().getValue());
    }

    function showModifiedValue() {
        alert(diffEditor.getModifiedEditor().getValue());
    }

    function getComplementIntervals(initialInterval, intervalsArray) {

        // 排序输入区间数组
        intervalsArray.sort((a, b) => a.start - b.start);

        const complement = [];
        let start = initialInterval.start;

        for (const interval of intervalsArray) {
            if (start < interval.start) {
                // 添加补集区间
                complement.push({ start, end: interval.start - 1, kind: diffMonaco.languages.FoldingRangeKind.Comment,icon: 'codicon-chevron-right' });
            }

            // 更新起始点
            start = Math.max(start, interval.end + 1);
        }

        // 添加最后一个补集区间（如果有的话）
        if (start <= initialInterval.end) {
            complement.push({ start, end: initialInterval.end ,kind: diffMonaco.languages.FoldingRangeKind.Comment,icon: 'codicon-chevron-right' });
        }

        return complement;
    }


    useEffect(() => {
        if(diffMonaco.editor) {
            // diffMonaco.editor.setTheme('vs-dark');
        }
    }, [diffMonaco])

    useEffect(()=>{
       if(diffEditor.getOriginalEditor) {
        // console.log(modifiedCode,originCode)
        const originalEditor = diffEditor.getOriginalEditor()
        const modifiedEditor = diffEditor.getModifiedEditor()

        // 获取原始编辑器（左侧编辑器）
        modifiedEditor.updateOptions({
            folding: {
                isCollapsedByDefault: false
            },
            minimap: {
                enabled: true // 启用 Mini Map
            }
        });


// 设置原始编辑器默认折叠
        originalEditor.updateOptions({
            folding: {
                isCollapsedByDefault: false
            },
            minimap: {
                enabled: true // 启用 Mini Map
            }
        });

        diffEditor.onDidUpdateDiff(() => {
            const diff = diffEditor.getLineChanges();
            console.log('diff', diff)
            const originalModel = diffEditor.getOriginalEditor().getModel();
            const modifiedModel = diffEditor.getModifiedEditor().getModel();
            console.log('originalModel', originalEditor, modifiedModel)
            diffMonaco.languages.registerFoldingRangeProvider("javascript", {
                
                provideFoldingRanges: function (model, context, token) {
                if(model === originalModel) {
                    console.log('pppppp',typeof model)
                  console.log(model, originalModel, (model === originalModel))
                    let a = diff.map(item => {
                      return {
                        start: item.originalStartLineNumber,
                        end: item.originalEndLineNumber,
                        kind: diffMonaco.languages.FoldingRangeKind.Region
                      }
                    })
                    let b = getComplementIntervals({start:1,end:diffEditor.getOriginalEditor().getModel().getLineCount()}, a);
                    console.log('b', b)

                    const decorations = b.map(range => ({
                        range: range,
                        options: {
                          isCollapsed: true, // 设置为折叠状态
                          stickiness: monaco.editor.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
                        },
                      }));
                  
                      // 使用editor.changeDecorations方法添加装饰并设置折叠状态
                      const foldingDecorationIds = model.deltaDecorations([], decorations);

                      
                    return b 
                }
                if(model === modifiedModel) {
                    console.log(model, modifiedModel, modifiedModel)
                    let a = diff.map(item => {
                      return {
                        start: item.modifiedStartLineNumber,
                        end: item.modifiedEndLineNumber,
                        kind: diffMonaco.languages.FoldingRangeKind.Region
                      }
                    })
                    let b = getComplementIntervals({start:1,end:diffEditor.getModifiedEditor().getModel().getLineCount()}, a);
                    console.log('b', b)
                    return b 
                }
                }
                  
              });
        })
        
       }
    },[diffEditor])

    function foldingCode(editor, monaco) {
        const originalEditor = diffEditor.getOriginalEditor()
        const modifiedEditor = diffEditor.getModifiedEditor()
        originalEditor.trigger('keyboard', 'editor.foldAll', {});
        modifiedEditor.trigger('keyboard', 'editor.foldAll', {});
    }

    return (
        <>
            <div style={{marginBottom:'10px',marginTop:'10px',display:'flex',justifyContent:'end',marginRight:'50px'}}>
                <button onClick={showOriginalValue}>折叠未变更代码</button>
                <button onClick={showModifiedValue}>展开未变更代码</button>
                <button>查看下一处变更</button>
            </div>

            <DiffEditor
                height="90vh"
                language="javascript"
                original={originCode}
                modified={modifiedCode}
                onMount={handleEditorDidMount}
                showFoldingControls= "always"
                folding = { {
                    isCollapsedByDefault: true
                  }}
                // editorDidMount = {foldingCode}
            />
        </>
    );
}

export default App;
