import type { ChangeEvent } from 'react';
import { useLayoutEffect, useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import { Body, CodeEditor, Input } from './styles';
import DragDrop from './DragDrop';
import TagsBox from './TagsBox';

let CodeMirror: any = null;

if (typeof window !== 'undefined') {
  CodeMirror = require('codemirror');
  require('codemirror/mode/markdown/markdown');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/jsx/jsx');
  require('codemirror/mode/css/css');
  require('codemirror/mode/shell/shell');
}

interface Props {
  category: string;
  title: string;
  body: string;
  tags: string[];
  onChangeCategory: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeBody: (text: string) => void;
  onChangeTags: (nextTags: string[]) => void;
  onUpload: (file: File) => void;
}

export default function PostEditor({ ...rest }: Props) {
  const editor = useRef(null);
  const textPane = useRef(null);
  const options = {
    mode: 'markdown',
    theme: 'monokai',
    lineNumbers: true,
    lineWrapping: true,
  };

  useLayoutEffect(() => {
    textPane.current = CodeMirror(editor.current, options);
    textPane.current.on('change', (doc: any, change: any) => {
      if (change.origin !== 'setValue') {
        rest.onChangeBody(doc.getValue());
      }
    });

    textPane.current.setValue(rest.body || '');
  }, []);

  useLayoutEffect(() => {
    if (rest.body !== textPane.current.getValue()) {
      textPane.current.setValue(rest.body);
    }
  }, [rest.body]);

  return (
    <Body>
      <Input
        type="text"
        name="category"
        value={rest.category}
        onChange={rest.onChangeCategory}
        placeholder="카테고리 입력"
      />

      <Input
        type="text"
        name="title"
        value={rest.title}
        onChange={rest.onChangeTitle}
        placeholder="포스트 제목 입력"
      />

      <CodeEditor ref={editor} />

      <DragDrop onUpload={rest.onUpload} />

      <TagsBox tags={rest.tags} onChangeTags={rest.onChangeTags} />
    </Body>
  );
}
