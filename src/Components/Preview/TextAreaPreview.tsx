import { IPreview } from './IPreview';

export const TextAreaPreview: IPreview = ({ text }) => {
  return <textarea value={text} />;
};
