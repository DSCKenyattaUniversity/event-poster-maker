import { Injectable } from '@angular/core';
import domtoimage from 'dom-to-image';
declare var saveAs: any;

@Injectable({
  providedIn: 'root'
})
export class ImagingService {

  constructor() { }

  domToImage(element: Element, filename: string) {
    const div = document.createElement('div');
    div.innerHTML = element.outerHTML;

    document.body.appendChild(div);

    domtoimage.toBlob(div)
      .then((blob) => {
        saveAs(blob, filename);
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      })
      .finally(() => {
        div.parentNode.removeChild(div);
      });
  }
}
