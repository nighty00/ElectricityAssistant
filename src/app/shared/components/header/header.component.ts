import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    showQuestionnaireBtn: boolean = false;
    showReportBtn: boolean = false;
    showRecommendationBtn: boolean = false;

    constructor(private translate: TranslateService, public router: Router, private dataService: DataService) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.dataService.showChartsSubject
            .subscribe(
            (flag: boolean) => {
                this.showQuestionnaireBtn = flag;
            }
            );
        this.dataService.showReportSubject
            .subscribe(
            (flag: boolean) => {
                this.showReportBtn = flag;
                this.showRecommendationBtn = flag;
            }
            );
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    // showContactUsBtn() {

    // }
}
