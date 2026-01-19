/* eslint-disable @next/next/no-img-element */
import { environment } from '@/environments/environment';
import { MgnlContent } from '@magnolia/frontend-helpers-base';

const Image = ({
  image,
  alt,
  caption,
}: {
  image: MgnlContent;
  alt: string;
  caption: string;
}) => {
  if (image) {
    const imageLink = image['@link'] as string;
    
    // Check if imageLink exists and is a valid string
    if (!imageLink || typeof imageLink !== 'string') {
      return null;
    }

    const damURL = imageLink.startsWith('https')
      ? imageLink
      : `${environment.damRawBase}${imageLink}`;

    return (
      <div>
        <img src={damURL} alt={alt} />
        {/* {caption && <div className='text-center'>{caption}</div>} */}
      </div>
    );
  }
  return null;
};

export default Image;
