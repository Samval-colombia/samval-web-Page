import { Component } from '@angular/core';
import { FooterContact } from "./secciones/footer-contact/footer-contact";
import { FooterLinks } from "./secciones/footer-links/footer-links";
import { FooterMainnavigation } from "./secciones/footer-mainnavigation/footer-mainnavigation";
import { FooterNewsletters } from "./secciones/footer-newsletters/footer-newsletters";

@Component({
  selector: 'app-footer',
  imports: [FooterContact, FooterLinks, FooterMainnavigation, FooterNewsletters],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
