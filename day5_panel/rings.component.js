import template from './rings.html';

import Configurator from 'bookingbug-configurator-js';


// aa new page to the "Clients" sections of the studio app
Configurator.addPage('Clients', 'rings', { 
    style: 'tab',
    layout: [
        [
          {
            type: 'bb-rings-panel',
            width: 12,
            index: 0,
            panel_params: {
            }
          }
        ]
    ]
});

// A a new tab to the "client profile" set of tabs - that is set to shwo the new page
Configurator.addNamedTab('client_profile', { 
    name: 'Rings',
    path: '.views({view: "rings"})',
    position: -1
});


class RingsCtrl {
    constructor(bbAuthorisation) {
        this.client = this.filter.client;
        this.client.getAnswer('rings').then( (rings) => {
            this.rings  = parseInt(rings) || 0;
        });
    }
}

const ringsPanel = {
    templateUrl: template.id,
    controller: RingsCtrl,
    scope: true,
    bindings: {
        filter: '<'
    }
};

angular
    .module('BBAdminDashboard')
    .component('bbRingsPanel', ringsPanel);
