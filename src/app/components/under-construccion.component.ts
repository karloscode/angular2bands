import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'bands',  
  template: `
             <article> 
                <h1>We&rsquo;ll be back soon!</h1>
                <div>
                    <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:#">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>
                    <p>&mdash; The Team</p>
                </div>
             </article>` ,
  styleUrls: ['../css/under-construccion.component.css'] ,

  })

export class UnderConstruccionComponent {}

 

