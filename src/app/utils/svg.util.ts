import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

export const loadSvgResources = (iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) => { 
    iconRegistry.addSvgIcon('gift', sanitizer.bypassSecurityTrustResourceUrl('assets/gift.svg'));
}
