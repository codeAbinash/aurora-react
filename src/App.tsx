import 'aurora-code/themes/one dark pro';
import { createRef, useEffect, useState } from 'react';
import { Aurora } from '../lib';

async function loadCode() {
  const res = await fetch('https://codeabinash.github.io/c-dsa-generic/Data%20Structures/Vector/vector.c');
  // const res = await fetch('https://codeabinash.github.io/beyond-javascript/learning/c/dsa/circular_linked_list/main.c');
  let code = await res.text();
  code = code.replace(/\r/g, '');
  return code;
}

function App() {
  const [code, setCode] = useState('');
  const textAreaRef = createRef<HTMLTextAreaElement>();
  const auroraRef = createRef<HTMLDivElement>();
  const [highlightingTime, setHighlightingTime] = useState(2);
  async function load() {
    const code = await loadCode();
    setCode(code);
  }
  useEffect(() => {
    load();
  }, []);

  return (
    <div className='gap-5 min-h-[100dvh] flex-col flex justify-center items-center bg-gray-800'>
      <div className='flex gap-3 justify-center items-center'>
        <div className='bg-gray-950 px-7 p-3 rounded-full'>
          <img src='/aurora.png' className='h-[0.85rem]' />
        </div>
        <div className='bg-gray-950 text-white gap-5 p-2 px-7 rounded-full flex'>
          <p className='custom-font font-medium text-sm'>
            Highted in {highlightingTime.toFixed(1)} ms ✨ {(code.match(/\n/g) || []).length} lines
          </p>
        </div>
      </div>
      <div className='rounded-xl overflow-hidden w-[80dvw] h-[80dvh]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 space-between h-full bg-gray-900 font-medium text-gray-300 custom-font'>
          <textarea
            className='resize-none whitespace-pre p-7  bg-gray-950 h-full border-none outline-none custom-scrollbar custom-font z-20'
            ref={textAreaRef}
            tabIndex={-1}
            spellCheck={false}
            value={code}
            onInput={(e) => {
              setCode(e.currentTarget.value);
            }}
            onScroll={(e) => {
              if (auroraRef.current) {
                auroraRef.current.scrollTop = e.currentTarget.scrollTop;
                auroraRef.current.scrollLeft = e.currentTarget.scrollLeft;
              }
            }}
          ></textarea>
          <div
            className='p-7 h-full overflow-scroll custom-scrollbar z-10'
            ref={auroraRef}
            onScroll={(e) => {
              if (textAreaRef.current) {
                textAreaRef.current.scrollTop = e.currentTarget.scrollTop;
                textAreaRef.current.scrollLeft = e.currentTarget.scrollLeft;
              }
            }}
          >
            <Aurora code={code} setTime={setHighlightingTime} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
