import { Component, OnInit } from '@angular/core';
declare let $;
@Component({
	selector: 'app-pricing-table',
	templateUrl: './pricing-table.component.html',
	styleUrls: ['./pricing-table.component.scss']
})
export class PricingTableComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		$(".preloader-base").remove();
	}

}
