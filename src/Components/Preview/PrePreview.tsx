import { IPreview } from './IPreview';

export const PrePreview: IPreview = ({ text }) => {
  return <pre dangerouslySetInnerHTML={{ __html: text }} />;
};
