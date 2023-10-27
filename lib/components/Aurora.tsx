import aurora, { AuroraConfig } from 'aurora-code';
import { useEffect, useState } from 'react';
export function Aurora({
  code,
  setTime,
  config,
}: {
  code: string;
  setTime?: (time: number) => void;
  config?: AuroraConfig;
}) {
  const [h, setH] = useState(aurora(code));

  useEffect(() => {
    const start = performance.now();
    setH(aurora(code, config));
    const end = performance.now();
    if (setTime) setTime(end - start);
  }, [code]);
  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: h }}></code>
    </pre>
  );
}
