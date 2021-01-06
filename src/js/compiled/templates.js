var Handlebars = require("handlebars/runtime");
 exports["templates"] = exports["templates"] || {};
exports["templates"]["src"] = exports["templates"]["src"] || {};
exports["templates"]["src"]["templates"] = exports["templates"]["src"]["templates"] || {};
exports["templates"]["src"]["templates"]["comment"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vac-comment\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":40}}}) : helper)))
    + "\">\r\n  <div class=\"vac-comment-header\">\r\n    <div class=\"vac-author-name\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"meta") : depth0)) != null ? lookupProperty(stack1,"user_name") : stack1), depth0))
    + "</div>\r\n    <div class=\"vac-timestamp\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"timeSince") || (depth0 != null ? lookupProperty(depth0,"timeSince") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timeSince","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":44}}}) : helper)))
    + "\r\n      <span class=\"vac-delete-comment\">&nbsp;&nbsp;X</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"vac-comment-body\">\r\n    "
    + alias4((lookupProperty(helpers,"breaklines")||(depth0 && lookupProperty(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":23}}}))
    + "\r\n  </div>\r\n</div>\r\n";
},"useData":true});
exports["templates"]["src"]["templates"]["comment_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "    "
    + ((stack1 = container.lambda(blockParams[0][0], depth0)) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vac-comments-container\">\r\n  <div class=\"vac-comments-wrap\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"commentsHTML") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":3,"column":4},"end":{"line":5,"column":13}}})) != null ? stack1 : "")
    + "    <div class=\"vac-reply-btn vac-button\">ADD REPLY</div>\r\n    <div class=\"vac-add-new-shapebox\"></div>\r\n  </div>\r\n  <div class=\"vac-comments-control-bar\">\r\n    <div class=\"vac-range\"><b>@</b> "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"rangeStr") || (depth0 != null ? lookupProperty(depth0,"rangeStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"rangeStr","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":36},"end":{"line":10,"column":48}}}) : helper)))
    + "</div>\r\n    <div class=\"vac-control-buttons\">\r\n      <a class=\"vac-delete-annotation\">DELETE</a> | <a class=\"vac-close-comment-list\">CLOSE</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true,"useBlockParams":true});
exports["templates"]["src"]["templates"]["controls"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"showControls") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":12,"column":7}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vac-controls vac-control\">\r\n    <button class=\"vac-button\">+ NEW</button>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"showNav") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"vac-annotation-nav\">\r\n        <div class=\"vac-a-prev\">Prev</div>\r\n        <div class=\"vac-a-next\">Next</div>\r\n    </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vac-video-cover vac-control\">\r\n    <div class=\"vac-video-cover-canvas\">\r\n        <div class=\"vac-cursor-tool-tip vac-hidden\">Click and drag to select</div>\r\n    </div>\r\n</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showControls") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":33,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"writingComment") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vac-add-controls vac-control\">\r\n    <i>Select shape + range</i>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"internalCommenting") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"vac-video-move\">\r\n        <div class=\"vac-a-prev\">-1 sec</div>\r\n        <div class=\"vac-a-next\">+1 sec</div>\r\n    </div>\r\n</div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    <button class=\"vac-button\">CONTINUE</button>\r\n    <a>cancel</a>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vac-video-write-new-wrap vac-control\">\r\n    <div class=\"vac-video-write-new vac-is-annotation\">\r\n        <div>\r\n            <h5><b>New Annotation</b> @ "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"rangeStr") || (depth0 != null ? lookupProperty(depth0,"rangeStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"rangeStr","hash":{},"data":data,"loc":{"start":{"line":39,"column":40},"end":{"line":39,"column":52}}}) : helper)))
    + "</h5>\r\n            <div class=\"vac-comment-showbox\">\r\n                <textarea placeholder=\"Enter comment...\"></textarea>\r\n                <div>\r\n                    <button class=\"vac-button\">SAVE</button>\r\n                    <a>Cancel</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"adding") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":13,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"adding") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":51,"column":7}}})) != null ? stack1 : "");
},"useData":true});
exports["templates"]["src"]["templates"]["draggable_marker"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div data-marker-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":27}}}) : helper)))
    + "\" class=\"vac-marker-draggable vac-ranged-marker\" style=\"left: "
    + alias4(((helper = (helper = lookupProperty(helpers,"left") || (depth0 != null ? lookupProperty(depth0,"left") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"left","hash":{},"data":data,"loc":{"start":{"line":1,"column":89},"end":{"line":1,"column":97}}}) : helper)))
    + "; width:"
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":1,"column":105},"end":{"line":1,"column":114}}}) : helper)))
    + ";\">\r\n</div>\r\n";
},"useData":true});
exports["templates"]["src"]["templates"]["marker"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "vac-ranged-marker";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "width:"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"width","hash":{},"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":59}}}) : helper)))
    + ";";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"tooltipBody") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n        <span class=\"vac-tooltip "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tooltipRight") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":33},"end":{"line":6,"column":74}}})) != null ? stack1 : "")
    + "\">\r\n            <b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"tooltipTime") || (depth0 != null ? lookupProperty(depth0,"tooltipTime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltipTime","hash":{},"data":data,"loc":{"start":{"line":7,"column":15},"end":{"line":7,"column":30}}}) : helper)))
    + "</b> - "
    + alias4(((helper = (helper = lookupProperty(helpers,"tooltipBody") || (depth0 != null ? lookupProperty(depth0,"tooltipBody") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltipBody","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":52}}}) : helper)))
    + "\r\n        </span>\r\n    </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "vac-right-side";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div data-marker-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":27}}}) : helper)))
    + "\" class=\"vac-marker "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"rangeShow") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":47},"end":{"line":1,"column":88}}})) != null ? stack1 : "")
    + "\"\r\n    style=\"left: "
    + alias4(((helper = (helper = lookupProperty(helpers,"left") || (depth0 != null ? lookupProperty(depth0,"left") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"left","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":25}}}) : helper)))
    + "; "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"rangeShow") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":27},"end":{"line":2,"column":67}}})) != null ? stack1 : "")
    + " z-index: "
    + alias4(((helper = (helper = lookupProperty(helpers,"zIndex") || (depth0 != null ? lookupProperty(depth0,"zIndex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zIndex","hash":{},"data":data,"loc":{"start":{"line":2,"column":77},"end":{"line":2,"column":87}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showTooltip") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
exports["templates"]["src"]["templates"]["marker_wrap"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"vac-marker-owrap\">\r\n	<div class=\"vac-marker-wrap\"></div>\r\n</div>\r\n";
},"useData":true});
exports["templates"]["src"]["templates"]["new_comment"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vac-video-write-new-wrap vac-new-comment\">\r\n  <div class=\"vac-video-write-new vac-is-comment\">\r\n    <div class=\"vac-comment-showbox\" style=\"width:"
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":3,"column":50},"end":{"line":3,"column":59}}}) : helper)))
    + "px;top:"
    + alias4(((helper = (helper = lookupProperty(helpers,"top") || (depth0 != null ? lookupProperty(depth0,"top") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"top","hash":{},"data":data,"loc":{"start":{"line":3,"column":66},"end":{"line":3,"column":73}}}) : helper)))
    + "px;right:"
    + alias4(((helper = (helper = lookupProperty(helpers,"right") || (depth0 != null ? lookupProperty(depth0,"right") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"right","hash":{},"data":data,"loc":{"start":{"line":3,"column":82},"end":{"line":3,"column":91}}}) : helper)))
    + "px\">\r\n      <textarea placeholder=\"Enter comment...\"></textarea>\r\n      <div>\r\n        <button class=\"vac-button\">SAVE</button>\r\n        <a>Cancel</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";
},"useData":true});
exports["templates"]["src"]["templates"]["player_button"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<b></b>\r\n<i class=\"vac-player-icon\">\r\n	<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n		<path\r\n			d=\"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\" />\r\n		<path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n	</svg>\r\n</i>\r\n";
},"useData":true});