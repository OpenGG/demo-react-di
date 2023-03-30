import { useEffect } from 'react';
import { useDI } from '../../DIContainer';
import { ILog } from '../../Services/Log/ILog';
import { IPreview } from '../../Components/Preview/IPreview';

export const BizXXXView = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const log = useDI<ILog>('ILog');
  const Preview = useDI<IPreview>('IPreview');

  return (
    <>
      <h1 onClick={() => log(title)}>{title}</h1>
      <Preview text={content}></Preview>
    </>
  );
};
