///////////////////////////////////////////////////////////////////////////
// Copyright (c) 2017 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/query",
    "dijit/_WidgetBase",
    "dijit/layout/AccordionContainer",
    "dijit/layout/ContentPane",
    "./FacilitiesView"
    ],
    function(
        dojoDeclare,
        dojoConstruct,
        dojoLang,
        dojoArray,
        dojoQuery,
        dijitBaseWidget,
        DijitAccordianPane,
        DijitContentPane,
        FacilitiesView
        ) {

        return dojoDeclare([dijitBaseWidget], {
            postCreate: function() {
                this.inherited(arguments);
            },
            buildRendering: function() {
                var titleText = dojoLang.replace(
                    "<div class='jimu-widget-erg resultTitle'>Results: {count}</div>", {
                        count: this.resultsList.length
                    }
                );
                this.domNode = dojoConstruct.place(titleText, this.srcNodeRef);
                var featText;

                var h = dojoLang.replace("height: {ph}px", {
                    ph: Math.ceil(this.frameHeight * 0.75)
                });

                this.facilityList = dojoConstruct.place('<div></div>', this.domNode);
                var cp = dojoConstruct.place("<div></div>", this.facilityList);
                var layerTitle = dojoLang.replace("<div class='jimu-widget-erg featureList'>{title}</div>", {
                    title: "Critical Facilities"
                });
                dojoConstruct.place(layerTitle, cp);

                dojoArray.forEach(this.resultsList, function(fitem) {
                    featText = dojoConstruct.place("<div class='jimu-widget-erg featureLabel'></div>", cp);
                    var fv = new FacilitiesView({
                        graphic: fitem,
                        gLayer: this.gLayer
                    }, featText);
                }, this);
            }
        }
    );
});